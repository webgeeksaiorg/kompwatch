import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getCurrentUser } from "@/lib/auth";
import { getStripe, getPriceId, type BillingPeriod } from "@/lib/stripe";
import { db } from "@/lib/db";
import { trackEvent } from "@/lib/plausible";
import {
  FOUNDING_PLAN,
  FOUNDING_REF,
  getFoundingPromotionCodeId,
  isFoundingClaimable,
} from "@/lib/founding-customer";

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const plan = body?.plan;
  const rawPeriod = body?.billingPeriod;
  const billingPeriod: BillingPeriod =
    rawPeriod === "annual" ? "annual" : "monthly";
  // Founding-customer claim flag — client sets this when the user clicked
  // the "Claim founding rate" CTA. Server is the authority: validates the
  // plan tier, billing period, and live spot cap before attaching the
  // promotion code. A misuse (e.g. claiming on TEAM) silently degrades to
  // the standard checkout instead of erroring, since the discount only
  // matters as an upsell sweetener.
  const foundingClaimRequested = body?.foundingClaim === true;

  if (plan !== "PRO" && plan !== "TEAM") {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
  }

  const priceId = getPriceId(plan as "PRO" | "TEAM", billingPeriod);
  if (!priceId) {
    return NextResponse.json(
      { error: "Price not configured" },
      { status: 500 }
    );
  }

  const stripe = getStripe();
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

  // Reuse existing Stripe customer or create one
  let customerId = user.stripeCustomerId;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { userId: user.id },
    });
    customerId = customer.id;
    await db.user.update({
      where: { id: user.id },
      data: { stripeCustomerId: customerId },
    });
  }

  // Resolve founding-customer claim. We only attach the discount when:
  //   1. Client explicitly asked (foundingClaimRequested).
  //   2. The plan/period combo matches the program (PRO monthly only).
  //   3. The Stripe promotion code env var is configured.
  //   4. Cap has not been reached (DB check via isFoundingClaimable).
  // If any check fails, fall through to a regular Pro/Team checkout so the
  // user is never stuck on a broken CTA. Cap-overflow racers (spot #21
  // mid-checkout) are caught a second time by Stripe — the promo's own
  // redemption_limit will reject the duplicate use.
  const promoCodeId = getFoundingPromotionCodeId();
  const foundingEligible =
    foundingClaimRequested &&
    plan === FOUNDING_PLAN &&
    billingPeriod === "monthly" &&
    promoCodeId !== null &&
    (await isFoundingClaimable());

  const sessionParams: Stripe.Checkout.SessionCreateParams = {
    customer: customerId,
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/pricing`,
    subscription_data: {
      metadata: {
        userId: user.id,
        billingPeriod,
        ...(foundingEligible ? { founding_customer: "true" } : {}),
      },
    },
  };

  if (foundingEligible && promoCodeId) {
    // Auto-apply the founding promo. allow_promotion_codes is mutually
    // exclusive with `discounts` in Stripe Checkout, so we drop the manual
    // entry and trust the auto-applied code. Other paths (non-founding)
    // still allow manual codes (see else branch below).
    sessionParams.discounts = [{ promotion_code: promoCodeId }];
    // Stamp acquisitionRef early — even if the user abandons checkout, the
    // spot is *not* yet consumed (we only count post-webhook). The actual
    // spot claim happens in the Stripe webhook on checkout.session.completed.
    // Adding metadata here lets the webhook recognize founding-flow sessions
    // independently of the promo code (defense in depth against Stripe API
    // changes to how `discounts` are echoed on retrieved sessions).
    sessionParams.metadata = { founding_customer: "true", userId: user.id };
  } else {
    // Preserve historical UX: users can still paste their own coupon codes
    // (e.g. partner discounts, support comps) when no founding discount is
    // being auto-applied.
    sessionParams.allow_promotion_codes = true;
  }

  const session = await stripe.checkout.sessions.create(sessionParams);

  // Funnel: upgrade-initiated (user clicked Pro/Team → reached Stripe checkout)
  trackEvent("upgrade-initiated", "/pricing", {
    plan,
    billingPeriod,
    priceId,
    founding: foundingEligible ? "true" : "false",
  }).catch(() => {});

  return NextResponse.json({
    url: session.url,
    founding: foundingEligible,
    // Echo the canonical ref so client-side analytics can attribute
    // post-redirect events without re-fetching /api/founding/spots.
    foundingRef: foundingEligible ? FOUNDING_REF : null,
  });
}
