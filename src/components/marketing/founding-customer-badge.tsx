"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

interface FoundingSpotsApi {
  taken: number;
  remaining: number;
  cap: number;
  capReached: boolean;
  priceCents: number;
  regularPriceCents: number;
  discountPercent: number;
  active: boolean;
}

/**
 * Founding Customer Badge — top-of-pricing scarcity banner driving the
 * "First 20 get Pro for life at $29/mo" P0 acquisition lever.
 *
 * Renders four states:
 *   - loading: skeleton (one paint cycle, then resolves)
 *   - claimable: "X of 20 spots left · Lock $29/mo forever" + CTA
 *   - last-call (≤5 remaining): same shape, red urgency styling
 *   - sold-out: "All 20 founding spots claimed" + secondary CTA pointing at Pro
 *
 * On CTA click:
 *   1. Fires `founding-cta-click` Plausible event with spots-remaining.
 *   2. POSTs to /api/stripe/checkout with foundingClaim=true (PRO/monthly).
 *   3. On unauthenticated 401, redirects to /login?next=/pricing&claim=founding.
 *
 * The component degrades silently when the Stripe promo isn't configured
 * (`active: false` from API): we still show the badge for marketing/social-
 * proof value, but the CTA falls through to a plain Pro checkout. This
 * avoids a broken UX while ops provisions the Stripe coupon.
 */
export function FoundingCustomerBadge() {
  const [spots, setSpots] = useState<FoundingSpotsApi | null>(null);
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState(false);
  const [impressionFired, setImpressionFired] = useState(false);

  // Fetch spots on mount. The API itself is cached for 60s server-side, so
  // multiple mounts in a single session don't hammer the DB.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/founding/spots", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: FoundingSpotsApi | null) => {
        if (cancelled) return;
        setSpots(data);
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Fire impression once per page view, after spots resolve, so the funnel
  // event includes the "remaining" prop. Lets us measure conversion lift
  // separately for high-scarcity (≤5) vs comfortable (>15) remaining states.
  useEffect(() => {
    if (!spots || impressionFired) return;
    window.plausible?.("founding-20-impression", {
      props: {
        remaining: String(spots.remaining),
        cap_reached: spots.capReached ? "true" : "false",
        active: spots.active ? "true" : "false",
      },
    });
    setImpressionFired(true);
  }, [spots, impressionFired]);

  async function handleClaim() {
    if (claiming || !spots) return;
    setClaiming(true);
    window.plausible?.("founding-20-cta-click", {
      props: {
        remaining: String(spots.remaining),
        cap_reached: spots.capReached ? "true" : "false",
      },
    });
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: "PRO",
          billingPeriod: "monthly",
          foundingClaim: true,
        }),
      });
      if (res.status === 401) {
        // Anonymous visitor — bounce through login with a hint so the
        // verify flow auto-resumes the founding claim post-magic-link.
        window.location.href = "/login?next=/pricing&claim=founding";
        return;
      }
      const data = (await res.json()) as { url?: string };
      if (data?.url) {
        window.location.href = data.url;
        return;
      }
    } catch {
      // Network failures fall through silently; user can retry. We do not
      // surface a toast because this badge is one of three CTAs on /pricing
      // and a noisy error here would distract from the plan grid below.
    } finally {
      setClaiming(false);
    }
  }

  if (loading) {
    return (
      <div
        aria-hidden="true"
        className="mx-auto mt-6 h-[88px] w-full max-w-2xl animate-pulse rounded-2xl border border-amber-100 bg-amber-50/40"
      />
    );
  }

  if (!spots) return null;

  const soldOut = spots.capReached;
  const lastCall = !soldOut && spots.remaining <= 5;
  const accent = soldOut
    ? "from-gray-100 to-gray-50 border-gray-300 text-gray-700"
    : lastCall
      ? "from-red-50 to-amber-50 border-red-300 text-red-900"
      : "from-amber-50 to-yellow-50 border-amber-300 text-amber-900";
  const dotColor = soldOut
    ? "bg-gray-400"
    : lastCall
      ? "bg-red-500 animate-pulse"
      : "bg-amber-500";

  return (
    <div
      data-testid="founding-customer-badge"
      className={`mx-auto mt-6 w-full max-w-2xl rounded-2xl border bg-gradient-to-r ${accent} p-5 shadow-sm`}
    >
      <div className="flex items-center justify-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dotColor}`} aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-wider">
          {soldOut
            ? "Founding 20 — Closed"
            : lastCall
              ? `Only ${spots.remaining} founding spot${spots.remaining === 1 ? "" : "s"} left`
              : `${spots.remaining} of ${spots.cap} founding spots left`}
        </p>
      </div>
      <h3 className="mt-2 text-center text-xl font-bold">
        {soldOut ? (
          <>All 20 founding spots have been claimed.</>
        ) : (
          <>
            Pro for life at <span className="tabular-nums">$29/mo</span>{" "}
            <span className="text-sm font-medium opacity-75">
              (instead of $49 — saves {spots.discountPercent}%, locked forever)
            </span>
          </>
        )}
      </h3>
      <p className="mt-1 text-center text-sm opacity-80">
        {soldOut
          ? "Thanks to our first 20 customers — Pro is now at regular pricing below."
          : "The first 20 paying customers lock in $29/mo for the lifetime of their subscription. No price hikes, ever."}
      </p>
      {!soldOut && (
        <div className="mt-4 flex items-center justify-center">
          <button
            type="button"
            onClick={handleClaim}
            disabled={claiming}
            className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors ${
              lastCall
                ? "bg-red-600 hover:bg-red-700"
                : "bg-amber-600 hover:bg-amber-700"
            } disabled:cursor-wait disabled:opacity-70`}
          >
            {claiming ? (
              <>Redirecting&hellip;</>
            ) : (
              <>
                Claim founding rate &mdash; $29/mo
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
