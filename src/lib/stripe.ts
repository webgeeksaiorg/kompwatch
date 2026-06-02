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

export type BillingPeriod = "monthly" | "annual";

/**
 * Resolve the Stripe price ID for a paid plan + billing period.
 * Reads from process.env each call so production env-var rotation and tests
 * don't get a stale snapshot. Falls back to monthly if annual isn't configured.
 */
export function getPriceId(
  plan: "PRO" | "TEAM",
  period: BillingPeriod
): string | undefined {
  const monthly =
    plan === "PRO"
      ? process.env.STRIPE_PRICE_PRO
      : process.env.STRIPE_PRICE_TEAM;
  if (period === "annual") {
    const annual =
      plan === "PRO"
        ? process.env.STRIPE_PRICE_PRO_ANNUAL
        : process.env.STRIPE_PRICE_TEAM_ANNUAL;
    if (annual) return annual;
  }
  return monthly;
}

/** Reverse-map a Stripe price ID to its plan tier (covers monthly + annual). */
export function planFromStripePriceId(
  priceId: string
): "PRO" | "TEAM" | null {
  if (
    priceId === process.env.STRIPE_PRICE_PRO ||
    priceId === process.env.STRIPE_PRICE_PRO_ANNUAL
  ) {
    return "PRO";
  }
  if (
    priceId === process.env.STRIPE_PRICE_TEAM ||
    priceId === process.env.STRIPE_PRICE_TEAM_ANNUAL
  ) {
    return "TEAM";
  }
  return null;
}

import type { Plan } from "@prisma/client";

export function planAllowsWebhooks(plan: Plan): boolean {
  return PLANS[plan].webhooks;
}

export function planAllowsInstantAlerts(plan: Plan): boolean {
  return PLANS[plan].instantAlerts;
}

export function planAllowsApiAccess(plan: Plan): boolean {
  return plan === "TEAM";
}

/** Daily digest frequency requires a paid plan. SMART and WEEKLY are available to all. */
export function planAllowsDailyDigest(plan: Plan): boolean {
  return plan === "PRO" || plan === "TEAM";
}

/**
 * Pro+ tiers can receive instant PRICING-change email alerts that bypass
 * the digest cadence. FREE users must wait for the weekly digest.
 */
export function planAllowsInstantPricingAlerts(plan: Plan): boolean {
  return plan === "PRO" || plan === "TEAM";
}
