import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getStripe, getPriceId, type BillingPeriod } from "@/lib/stripe";
import { db } from "@/lib/db";
import { trackEvent } from "@/lib/plausible";

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

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/pricing`,
    subscription_data: {
      metadata: { userId: user.id, billingPeriod },
    },
    allow_promotion_codes: true,
  });

  // Funnel: upgrade-initiated (user clicked Pro/Team → reached Stripe checkout)
  trackEvent("upgrade-initiated", "/pricing", {
    plan,
    billingPeriod,
    priceId,
  }).catch(() => {});

  return NextResponse.json({ url: session.url });
}
