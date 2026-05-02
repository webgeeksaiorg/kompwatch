import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-02-24.acacia",
      typescript: true,
    });
  }
  return _stripe;
}

export const PLANS = {
  FREE: {
    name: "Free",
    price: 0,
    competitors: 2,
    digest: "weekly",
    webhooks: false,
    instantAlerts: false,
  },
  PRO: {
    name: "Pro",
    price: 49,
    competitors: 10,
    digest: "daily",
    webhooks: true,
    instantAlerts: false,
    priceId: process.env.STRIPE_PRICE_PRO,
  },
  TEAM: {
    name: "Team",
    price: 149,
    competitors: 50,
    digest: "daily",
    webhooks: true,
    instantAlerts: true,
    priceId: process.env.STRIPE_PRICE_TEAM,
  },
} as const;

import type { Plan } from "@prisma/client";

export function planAllowsWebhooks(plan: Plan): boolean {
  return PLANS[plan].webhooks;
}

export function planAllowsInstantAlerts(plan: Plan): boolean {
  return PLANS[plan].instantAlerts;
}
