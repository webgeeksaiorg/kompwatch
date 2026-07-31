import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe, planFromStripePriceId, validateSubscriptionAmount } from "@/lib/stripe";
import { db } from "@/lib/db";
import { trackServerEvent } from "@/lib/plausible";
import { FOUNDING_REF } from "@/lib/founding-customer";
import { sendTrialExpiryEmail } from "@/lib/trial-expiry-email";

// Map Stripe price IDs to plan tiers (covers both monthly and annual prices).
function planFromPriceId(priceId: string): "PRO" | "TEAM" | null {
  return planFromStripePriceId(priceId);
}

/**
 * Did this checkout session claim the founding-customer discount?
 *
 * We check two sources of truth, in order:
 *   1. Session metadata `founding_customer = "true"` — set by our
 *      checkout route on the session itself for founding flows.
 *   2. Subscription metadata `founding_customer = "true"` — set on
 *      `subscription_data.metadata` (survives even when Stripe rewrites
 *      session metadata on certain flow types).
 *
 * Belt-and-suspenders: if either is set, we treat the user as founding.
 * We intentionally do NOT trust the line-item amount alone (a $29 amount
 * could come from a manually-pasted coupon, not the founding program).
 */
function isFoundingSession(
  session: Stripe.Checkout.Session,
  subscription: Stripe.Subscription
): boolean {
  return (
    session.metadata?.founding_customer === "true" ||
    subscription.metadata?.founding_customer === "true"
  );
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const customerId = session.customer as string;
  const subscriptionId = session.subscription as string;

  if (!customerId || !subscriptionId) return;

  const stripe = getStripe();
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  const priceItem = subscription.items.data[0];
  const priceId = priceItem?.price.id;
  if (!priceId) return;

  const plan = planFromPriceId(priceId);
  if (!plan) return;

  // Validate that the Stripe price amount matches expected plan pricing.
  // Log a warning on mismatch so ARPU anomalies are caught immediately.
  // NB: founding customers will trip this warning by design ($29 vs $49) —
  // the warning text is informational, not an error, so we let it log.
  // The Analyst's audit script knows to skip subscriptions with
  // founding_customer metadata when computing ARPU mismatches.
  const unitAmount = priceItem.price.unit_amount ?? 0;
  const interval = priceItem.price.recurring?.interval ?? "month";
  const amountWarning = validateSubscriptionAmount(plan, unitAmount, interval);
  if (amountWarning) {
    console.error(
      `${amountWarning} — customer=${customerId} subscription=${subscriptionId} priceId=${priceId}`
    );
  }

  // Founding-customer stamp: claim the spot now that the subscription is
  // live. acquisitionRef is the lifetime identity tag (survives churn) so
  // re-subscribing customers don't free up the spot. Only stamp on the
  // first founding checkout — if the user already has a different ref
  // (e.g. "organic"), upgrade it to founding-20 since founding is more
  // specific. We do not overwrite an existing founding-20 ref (no-op).
  const founding = isFoundingSession(session, subscription);
  const userData: { stripeSubscriptionId: string; plan: typeof plan; acquisitionRef?: string } = {
    stripeSubscriptionId: subscriptionId,
    plan,
  };
  if (founding) {
    userData.acquisitionRef = FOUNDING_REF;
  }

  await db.user.update({
    where: { stripeCustomerId: customerId },
    data: userData,
  });

  // Funnel: upgrade-completed (subscription is live, plan upgraded in DB).
  // This is the moneymoment — the funnel-complete event. Tracks revenue
  // by plan + billing cycle so we can attribute paid conversions to source.
  const amountCents = session.amount_total ?? 0;
  trackServerEvent("upgrade-completed", "/checkout/success", {
    plan,
    priceId,
    amountUsd: (amountCents / 100).toFixed(2),
    currency: session.currency || "usd",
  }).catch(() => {});
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;
  const priceItem = subscription.items.data[0];
  const priceId = priceItem?.price.id;
  if (!priceId) return;

  const plan = planFromPriceId(priceId);
  if (!plan) return;

  // Validate that the Stripe price amount matches expected plan pricing.
  const unitAmount = priceItem.price.unit_amount ?? 0;
  const interval = priceItem.price.recurring?.interval ?? "month";
  const amountWarning = validateSubscriptionAmount(plan, unitAmount, interval);
  if (amountWarning) {
    console.error(
      `${amountWarning} — customer=${customerId} subscription=${subscription.id} priceId=${priceId}`
    );
  }

  const status = subscription.status;
  // Only update plan if subscription is active or trialing
  if (status === "active" || status === "trialing") {
    await db.user.update({
      where: { stripeCustomerId: customerId },
      data: {
        stripeSubscriptionId: subscription.id,
        plan,
      },
    });
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;

  await db.user.update({
    where: { stripeCustomerId: customerId },
    data: {
      stripeSubscriptionId: null,
      plan: "FREE",
    },
  });
}

/**
 * Trial-expiry nudge (ticket f25d).
 *
 * Stripe fires `customer.subscription.trial_will_end` ~3 days before a
 * trialing subscription auto-converts to paid. We send a single transactional
 * email urging the user to keep their subscription or cancel — the goal is
 * an 8–15% same-day conversion lift on trials that would otherwise silently
 * lapse (0 new paid subs in 30 days is the ticket-f369 emergency).
 *
 * Failure policy: log-and-swallow email errors so a Resend hiccup doesn't
 * cause Stripe to retry the webhook and (via idempotency) never send the
 * email at all. Idempotency is enforced by the shared stripeEvent table.
 */
async function handleTrialWillEnd(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;
  if (!customerId) return;

  const priceItem = subscription.items.data[0];
  const priceId = priceItem?.price.id;
  const plan = priceId ? planFromPriceId(priceId) : null;
  if (!plan) {
    // Unknown price → skip. This can happen for legacy or manually-created
    // subscriptions. Silent no-op; the trial will still convert normally.
    return;
  }

  const user = await db.user.findUnique({
    where: { stripeCustomerId: customerId },
    select: { email: true, name: true },
  });
  if (!user) {
    console.warn(
      `trial_will_end: no user found for customer=${customerId} sub=${subscription.id}`
    );
    return;
  }

  const trialEndUnixSec = subscription.trial_end ?? 0;
  if (!trialEndUnixSec) {
    // Defensive: without a trial_end we can't personalize the countdown.
    // Skip rather than send a broken "your trial ends in NaN days" email.
    console.warn(
      `trial_will_end: missing trial_end on subscription ${subscription.id}`
    );
    return;
  }

  try {
    await sendTrialExpiryEmail(
      { email: user.email, name: user.name },
      { plan, trialEndUnixSec }
    );
  } catch (err) {
    console.error(
      `trial_will_end: failed to send email to ${user.email} (sub=${subscription.id}):`,
      err
    );
    // Do not rethrow — swallow so Stripe won't retry the whole webhook.
    // The shared stripeEvent idempotency table would otherwise block a
    // second delivery attempt on retry, silently losing the nudge.
    return;
  }

  // Funnel: trial-expiry email delivered. Tracked so acquisition audit
  // (f369) can measure the conversion lift attributable to this nudge.
  trackServerEvent("trial-expiry-emailed", "/webhooks/stripe", {
    plan,
    subscriptionId: subscription.id,
  }).catch(() => {});
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  const customerId = invoice.customer as string;
  if (!customerId) return;

  // Log the failure for monitoring. Stripe handles retries automatically.
  // On final failure, Stripe will cancel/unpaid the subscription which triggers
  // customer.subscription.deleted or customer.subscription.updated — those handlers
  // will downgrade the user's plan accordingly.
  console.warn(
    `Invoice payment failed for customer ${customerId}, invoice ${invoice.id}, attempt ${invoice.attempt_count}`
  );

  // Emit a Plausible event so the acquisition audit (ticket f369) can see
  // card declines vs. successful conversions. Without this, an all-decline
  // funnel looks identical to a low-traffic funnel — impossible to diagnose.
  // We separate "first attempt failed" (billing_reason=subscription_create)
  // from dunning retries (billing_reason=subscription_cycle) because a first-
  // attempt fail on a new subscription is a lost conversion, whereas a dunning
  // fail is churn — different treatments upstream.
  const billingReason = invoice.billing_reason || "unknown";
  const attempt = (invoice.attempt_count ?? 0).toString();
  const amountCents = invoice.amount_due ?? 0;
  trackServerEvent("payment-failed", "/checkout", {
    billingReason,
    attempt,
    amountUsd: (amountCents / 100).toFixed(2),
    currency: invoice.currency || "usd",
  }).catch(() => {});
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  let event: Stripe.Event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Stripe webhook signature verification failed:", message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Idempotency: skip already-processed events
  const existing = await db.stripeEvent.findUnique({
    where: { id: event.id },
  });
  if (existing) {
    return NextResponse.json({ received: true });
  }

  // Record event before processing
  await db.stripeEvent.create({
    data: { id: event.id, type: event.type },
  });

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(
          event.data.object as Stripe.Checkout.Session
        );
        break;
      case "customer.subscription.updated":
        await handleSubscriptionUpdated(
          event.data.object as Stripe.Subscription
        );
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(
          event.data.object as Stripe.Subscription
        );
        break;
      case "customer.subscription.trial_will_end":
        await handleTrialWillEnd(
          event.data.object as Stripe.Subscription
        );
        break;
      case "invoice.payment_failed":
        await handleInvoicePaymentFailed(
          event.data.object as Stripe.Invoice
        );
        break;
    }
  } catch (err) {
    console.error(`Error processing webhook ${event.type}:`, err);
    return NextResponse.json(
      { error: "Processing failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}
