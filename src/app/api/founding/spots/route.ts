import { NextResponse } from "next/server";
import {
  FOUNDING_CUSTOMER_CAP,
  FOUNDING_CUSTOMER_PRICE_CENTS,
  FOUNDING_CUSTOMER_REGULAR_PRICE_CENTS,
  buildFoundingSpots,
  countFoundingCustomers,
  getFoundingDiscountPercent,
  getFoundingPromotionCodeId,
} from "@/lib/founding-customer";

/**
 * GET /api/founding/spots
 *
 * Public, unauthenticated. Returns the current state of the
 * "First 20 get Pro for life at $29/mo" founding-customer program.
 *
 * Shape:
 *   {
 *     taken: number,
 *     remaining: number,
 *     cap: number,
 *     capReached: boolean,
 *     priceCents: 2900,
 *     regularPriceCents: 4900,
 *     discountPercent: 41,
 *     active: boolean   // true iff a Stripe promo code is wired
 *   }
 *
 * Marked `dynamic = "force-dynamic"` so Next doesn't try to prerender the
 * route at build time (DATABASE_URL is intentionally absent in the build
 * environment). At runtime the Coolify container has the env vars, so the
 * count query lands on the production DB. Per-request cost is one indexed
 * COUNT — Plausible-grade cheap, no Redis needed.
 *
 * No PII is returned; safe to expose to anonymous traffic.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  let taken = 0;
  try {
    taken = await countFoundingCustomers();
  } catch (err) {
    // DB unreachable → degrade to "cap fresh" (taken=0). The checkout
    // route re-validates against Stripe before issuing the discount, so
    // a stale "spots available" badge never overspends the cap.
    console.error("founding/spots: DB count failed:", err);
  }

  const spots = buildFoundingSpots(taken);
  return NextResponse.json({
    ...spots,
    priceCents: FOUNDING_CUSTOMER_PRICE_CENTS,
    regularPriceCents: FOUNDING_CUSTOMER_REGULAR_PRICE_CENTS,
    discountPercent: getFoundingDiscountPercent(),
    active: Boolean(getFoundingPromotionCodeId()),
    // Echo the cap so client renders aren't tightly coupled to the
    // shared constant (allows future product change without redeploy).
    cap: FOUNDING_CUSTOMER_CAP,
  });
}
