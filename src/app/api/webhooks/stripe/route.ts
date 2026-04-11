import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { db } from "@/lib/db";

// Map Stripe price IDs to plan tiers
function planFromPriceId(priceId: string): "PRO" | "TEAM" | null {
  if (priceId === process.env.STRIPE_PRICE_PRO) return "PRO";
  if (priceId === process.env.STRIPE_PRICE_TEAM) return "TEAM";
  return null;
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const customerId = session.customer as string;
  const subscriptionId = session.subscription as string;

  if (!customerId || !subscriptionId) return;

  const stripe = getStripe();
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  const priceId = subscription.items.data[0]?.price.id;
  if (!priceId) return;

  const plan = planFromPriceId(priceId);
  if (!plan) return;

  await db.user.update({
    where: { stripeCustomerId: customerId },
    data: {
      stripeSubscriptionId: subscriptionId,
      plan,
    },
  });
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;
  const priceId = subscription.items.data[0]?.price.id;
  if (!priceId) return;

  const plan = planFromPriceId(priceId);
  if (!plan) return;

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
