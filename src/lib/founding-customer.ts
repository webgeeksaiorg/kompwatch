/**
 * Founding Customer Program — "First 20 get Pro for life at $29/mo"
 *
 * Pure-config + counter helpers backing the P0 founding-customer pricing
 * promotion (Notion ticket 23cf). Implements a hard cap of 20 subscribers
 * who get a permanently discounted Pro rate, surfaced as a scarcity badge
 * on /pricing and auto-applied at Stripe Checkout via a promotion code.
 *
 * Architecture:
 * - Stripe holds the source of truth for the discount (a recurring promo
 *   code, configured manually via env var). This file enforces the spot
 *   cap and tracks claimed slots via `User.acquisitionRef = FOUNDING_REF`.
 * - The cap is enforced at three layers: badge UI (hide CTA when full),
 *   /api/founding/spots (returns remaining), /api/stripe/checkout
 *   (rejects founding-claim when full).
 * - On checkout.session.completed, the webhook stamps the user's
 *   acquisitionRef so the count survives subscription cancellations
 *   (i.e. "founding" is a permanent identity, not a live-subs filter).
 *
 * Env vars consumed:
 *   STRIPE_PROMOTION_CODE_FOUNDING — Stripe promotion_code ID (e.g.
 *     promo_xxx) referencing a coupon that turns $49 PRO monthly into
 *     $29/mo forever. Optional: if unset, the program is "soft-disabled"
 *     (badge shows but CTA degrades gracefully — no discount applied).
 */

import { db } from "@/lib/db";

/** Maximum lifetime founding customers. Hard-coded — never raise without
 *  product approval, as the messaging is "First 20", not "First N". */
export const FOUNDING_CUSTOMER_CAP = 20;

/** Discounted price the founding promo locks in, in cents. */
export const FOUNDING_CUSTOMER_PRICE_CENTS = 2900; // $29/mo

/** Regular Pro monthly price the founding rate replaces, in cents. */
export const FOUNDING_CUSTOMER_REGULAR_PRICE_CENTS = 4900; // $49/mo

/** acquisitionRef value stamped on founding customers. Used to count
 *  claimed spots and to identify founding members for badging/CRM. */
export const FOUNDING_REF = "founding-20";

/** Plan tier the founding discount applies to. Team is excluded — the
 *  $29 lifetime rate is a Pro-only acquisition lever. */
export const FOUNDING_PLAN = "PRO" as const;

export interface FoundingSpots {
  /** Number of founding spots already claimed. */
  taken: number;
  /** Spots still available (>=0). */
  remaining: number;
  /** Hard cap (mirrors FOUNDING_CUSTOMER_CAP for client-side rendering). */
  cap: number;
  /** True iff taken >= cap. */
  capReached: boolean;
}

/**
 * Count founding customers by querying users tagged with FOUNDING_REF.
 *
 * Caveat: this counts *lifetime* claims (including churned users). That's
 * intentional — a founding spot, once claimed, is gone forever even if
 * the customer cancels. This matches the "First 20" promise to other
 * customers waiting in line.
 */
export async function countFoundingCustomers(): Promise<number> {
  return db.user.count({
    where: { acquisitionRef: FOUNDING_REF },
  });
}

/**
 * Compute the current founding-spots snapshot. Safe to expose to the
 * client — contains no PII.
 */
export async function getFoundingSpots(): Promise<FoundingSpots> {
  const taken = await countFoundingCustomers();
  const remaining = Math.max(0, FOUNDING_CUSTOMER_CAP - taken);
  return {
    taken,
    remaining,
    cap: FOUNDING_CUSTOMER_CAP,
    capReached: remaining === 0,
  };
}

/**
 * Build the FoundingSpots view from a known taken-count (test-friendly
 * pure variant of getFoundingSpots — no DB).
 */
export function buildFoundingSpots(taken: number): FoundingSpots {
  const safeTaken = Math.max(0, Math.floor(taken));
  const remaining = Math.max(0, FOUNDING_CUSTOMER_CAP - safeTaken);
  return {
    taken: safeTaken,
    remaining,
    cap: FOUNDING_CUSTOMER_CAP,
    capReached: remaining === 0,
  };
}

/**
 * Stripe promotion_code id used to apply the founding discount. Returns
 * null when not configured — callers must degrade gracefully (skip
 * discount, surface no-op badge, do not block checkout).
 */
export function getFoundingPromotionCodeId(): string | null {
  return process.env.STRIPE_PROMOTION_CODE_FOUNDING || null;
}

/**
 * Is the founding program currently claimable?  Combines the spot-cap
 * check with the promo-code-configured check. Use this as the single
 * authority before attaching the discount to a checkout session.
 */
export async function isFoundingClaimable(): Promise<boolean> {
  if (!getFoundingPromotionCodeId()) return false;
  const { capReached } = await getFoundingSpots();
  return !capReached;
}

/**
 * Compute the discount percent (0–100) the founding rate represents off
 * the regular Pro monthly price. Used for badge copy ("save 41%").
 */
export function getFoundingDiscountPercent(): number {
  const regular = FOUNDING_CUSTOMER_REGULAR_PRICE_CENTS;
  const founding = FOUNDING_CUSTOMER_PRICE_CENTS;
  if (regular <= 0) return 0;
  return Math.round((1 - founding / regular) * 100);
}
