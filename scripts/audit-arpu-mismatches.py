#!/usr/bin/env python3
"""
ARPU mismatch auditor for the Analyst agent.

Lists every active / trialing Stripe subscription and flags any whose
unit_amount does not match the canonical plan price (Pro = $49/mo,
Team = $149/mo, annual = 80% × 12 × monthly). This directly answers the
recurring "ARPU anomaly" tickets (e.g. "2 subscribers on $9.99/mo, Pro
is $49") without requiring manual Stripe Dashboard scraping.

The plan-resolution logic mirrors src/lib/stripe.ts so this script is the
out-of-band counterpart to the webhook's validateSubscriptionAmount() call:
the webhook logs mismatches as they happen; this script enumerates ALL
existing mismatches (including legacy subs that never re-fired a webhook).

Usage:
  python3 /app/scripts/audit-arpu-mismatches.py kompwatch
  python3 /app/scripts/audit-arpu-mismatches.py kompwatch --json
  python3 /app/scripts/audit-arpu-mismatches.py kompwatch --mismatches-only

Environment variables (read at runtime, no .env loader to keep deps light):
  STRIPE_SECRET_KEY       - Stripe API key (required)
  STRIPE_PRICE_PRO        - Stripe price ID for Pro monthly  (optional, for plan resolution)
  STRIPE_PRICE_PRO_ANNUAL - Stripe price ID for Pro annual   (optional)
  STRIPE_PRICE_TEAM       - Stripe price ID for Team monthly (optional)
  STRIPE_PRICE_TEAM_ANNUAL- Stripe price ID for Team annual  (optional)

When the price-ID env vars are not provided, the script falls back to
inferring the plan from the recurring amount alone — this still flags the
classic "wrong amount" case (e.g. $9.99/mo Pro), but cannot distinguish
between Pro/Team for non-canonical amounts.

Founding customers (Stripe subscription metadata.founding_customer = "true")
are recognized as intentionally discounted at $29/mo Pro and NOT flagged as
mismatches. Any founding sub that isn't PRO/monthly/$29 IS flagged with a
FOUNDING_-prefixed reason so real anomalies (e.g. a founding customer on a
$9 promo) still surface. This mirrors the "founding_customer metadata skip"
contract documented in src/app/api/webhooks/stripe/route.ts.

Exit codes:
  0 — audit completed successfully (may include mismatches in output)
  1 — Stripe API error or missing STRIPE_SECRET_KEY
"""

from __future__ import annotations

import argparse
import json
import os
import sys
from datetime import datetime, timezone

import httpx

STRIPE_API_BASE = "https://api.stripe.com/v1"

# Canonical plan prices — must stay in sync with src/lib/stripe.ts PLANS.
PLAN_PRICES_CENTS = {
    "PRO": 4900,
    "TEAM": 14900,
}
# Annual = 12 × monthly × 0.8 (20% annual discount), matching validateSubscriptionAmount.
ANNUAL_DISCOUNT = 0.8

# Founding-customer program — mirrors src/lib/founding-customer.ts.
# Subscriptions with metadata.founding_customer == "true" are intentionally
# discounted (Pro monthly at $29 instead of $49) and MUST NOT be flagged as
# ARPU mismatches. See src/app/api/webhooks/stripe/route.ts:isFoundingSession
# for the canonical detection contract.
FOUNDING_METADATA_KEY = "founding_customer"
FOUNDING_METADATA_VALUE = "true"
FOUNDING_PLAN = "PRO"
FOUNDING_PRICE_CENTS_MONTHLY = 2900  # $29/mo — FOUNDING_CUSTOMER_PRICE_CENTS


def _is_founding(sub: dict) -> bool:
    """True iff Stripe subscription is stamped as a founding customer.

    The webhook (isFoundingSession) also honors session-level metadata, but
    only subscription metadata is durable enough to appear on a plain
    /v1/subscriptions listing, which is all this audit sees.
    """
    metadata = sub.get("metadata") or {}
    return metadata.get(FOUNDING_METADATA_KEY) == FOUNDING_METADATA_VALUE


def _now_utc() -> datetime:
    return datetime.now(timezone.utc)


def _stripe_headers() -> dict:
    key = os.environ.get("STRIPE_SECRET_KEY", "")
    if not key:
        print("ERROR: STRIPE_SECRET_KEY not set", file=sys.stderr)
        sys.exit(1)
    return {"Authorization": f"Bearer {key}"}


def _get(endpoint: str, params: dict | None = None) -> dict:
    resp = httpx.get(
        f"{STRIPE_API_BASE}/{endpoint}",
        headers=_stripe_headers(),
        params=params or {},
        timeout=30,
    )
    if resp.status_code != 200:
        print(
            f"ERROR: Stripe API {resp.status_code}: {resp.text[:300]}",
            file=sys.stderr,
        )
        sys.exit(1)
    return resp.json()


def _list_all(endpoint: str, params: dict | None = None) -> list:
    items: list = []
    params = dict(params or {})
    params.setdefault("limit", 100)
    while True:
        data = _get(endpoint, params)
        items.extend(data.get("data", []))
        if not data.get("has_more", False):
            break
        params["starting_after"] = items[-1]["id"]
    return items


def _plan_from_price_id(price_id: str) -> str | None:
    """Mirror of planFromStripePriceId() in src/lib/stripe.ts."""
    if price_id == os.environ.get("STRIPE_PRICE_PRO") or price_id == os.environ.get(
        "STRIPE_PRICE_PRO_ANNUAL"
    ):
        return "PRO"
    if price_id == os.environ.get("STRIPE_PRICE_TEAM") or price_id == os.environ.get(
        "STRIPE_PRICE_TEAM_ANNUAL"
    ):
        return "TEAM"
    return None


def _plan_from_amount(unit_amount: int, interval: str) -> str | None:
    """Fallback plan inference when env price IDs are unavailable.

    Returns the canonical plan whose expected amount matches; otherwise None.
    Only used so the script remains useful in environments where the price
    env vars aren't wired (e.g. local dev with TEST-mode subs)."""
    for plan, monthly_cents in PLAN_PRICES_CENTS.items():
        if interval == "month" and unit_amount == monthly_cents:
            return plan
        if interval == "year" and unit_amount == int(monthly_cents * 12 * ANNUAL_DISCOUNT):
            return plan
    return None


def _expected_amount(plan: str, interval: str) -> int:
    monthly = PLAN_PRICES_CENTS[plan]
    if interval == "year":
        return int(monthly * 12 * ANNUAL_DISCOUNT)
    return monthly


def _check_subscription(sub: dict) -> dict | None:
    """Return a row dict if subscription was audited, else None (skipped).

    The row always includes 'mismatch': bool and a 'reason' for mismatches.
    """
    items = sub.get("items", {}).get("data", [])
    if not items:
        return None
    item = items[0]
    price = item.get("price", {}) or {}
    price_id = price.get("id", "")
    unit_amount = price.get("unit_amount") or 0
    recurring = price.get("recurring") or {}
    interval = recurring.get("interval", "month")
    quantity = item.get("quantity", 1)
    founding = _is_founding(sub)

    # Resolve plan. Founding customers may sit on a $29/mo price that would
    # otherwise fall through to the amount-based fallback and get inferred as
    # None (unknown) — so if we can't identify the plan by price ID and the
    # sub is stamped founding, we force-resolve to FOUNDING_PLAN (PRO).
    plan = _plan_from_price_id(price_id) or _plan_from_amount(unit_amount, interval)
    if plan is None and founding:
        plan = FOUNDING_PLAN

    row: dict = {
        "subscription_id": sub.get("id", ""),
        "customer_id": sub.get("customer", ""),
        "status": sub.get("status", ""),
        "price_id": price_id,
        "unit_amount_cents": unit_amount,
        "unit_amount_usd": round(unit_amount / 100, 2),
        "interval": interval,
        "quantity": quantity,
        "resolved_plan": plan,
        "is_founding": founding,
        "created": sub.get("created"),
    }

    # Founding-customer branch: canonical price is $29/mo Pro. Any monthly
    # sub at that amount is expected — do NOT flag as ARPU_MISMATCH. Any
    # other configuration (annual founding, non-$29 monthly, TEAM founding,
    # quantity != 1) is a real anomaly and gets flagged with a
    # FOUNDING_-prefixed reason so the Analyst can triage separately.
    if founding:
        expected = FOUNDING_PRICE_CENTS_MONTHLY
        row["expected_amount_cents"] = expected
        row["expected_amount_usd"] = round(expected / 100, 2)
        if plan != FOUNDING_PLAN:
            row["mismatch"] = True
            row["reason"] = (
                f"FOUNDING_PLAN_MISMATCH: founding_customer=true but resolved plan is"
                f" {plan or 'unknown'} (founding rate applies to PRO only)."
            )
        elif interval != "month":
            row["mismatch"] = True
            row["reason"] = (
                f"FOUNDING_INTERVAL_MISMATCH: founding_customer=true on {interval}"
                " subscription (founding rate is monthly-only at $29/mo)."
            )
        elif unit_amount != expected or quantity != 1:
            row["mismatch"] = True
            row["reason"] = (
                f"FOUNDING_AMOUNT_MISMATCH: founding PRO monthly charged"
                f" ${row['unit_amount_usd']} x{quantity}, expected"
                f" ${row['expected_amount_usd']} x1."
            )
        else:
            row["mismatch"] = False
            row["reason"] = None
        return row

    if plan is None:
        # Unknown price — flag as a mismatch because the webhook would have
        # bailed without applying a plan tier to the user record.
        row["mismatch"] = True
        row["expected_amount_cents"] = None
        row["reason"] = (
            f"UNKNOWN_PRICE: priceId={price_id} amount=${row['unit_amount_usd']}/{interval}"
            " did not match any configured plan (PRO/TEAM monthly or annual)."
        )
        return row

    expected = _expected_amount(plan, interval)
    row["expected_amount_cents"] = expected
    row["expected_amount_usd"] = round(expected / 100, 2)
    if unit_amount != expected or quantity != 1:
        row["mismatch"] = True
        if quantity != 1:
            row["reason"] = (
                f"QUANTITY_MISMATCH: {plan} {interval} subscription has quantity={quantity}"
                f" (expected 1); effective charge ${round(unit_amount * quantity / 100, 2)}"
                f" vs canonical ${row['expected_amount_usd']}."
            )
        else:
            row["reason"] = (
                f"ARPU_MISMATCH: {plan} {interval} subscription charged"
                f" ${row['unit_amount_usd']}, expected ${row['expected_amount_usd']}."
            )
    else:
        row["mismatch"] = False
        row["reason"] = None
    return row


def audit() -> dict:
    active = _list_all("subscriptions", {"status": "active"})
    trialing = _list_all("subscriptions", {"status": "trialing"})
    rows: list = []
    for sub in active + trialing:
        row = _check_subscription(sub)
        if row is not None:
            rows.append(row)

    mismatches = [r for r in rows if r["mismatch"]]
    founding = [r for r in rows if r.get("is_founding")]
    return {
        "timestamp": _now_utc().isoformat(),
        "subscriptions_audited": len(rows),
        "mismatch_count": len(mismatches),
        "founding_count": len(founding),
        "mismatches": mismatches,
        "all_rows": rows,
    }


def print_summary(report: dict, mismatches_only: bool) -> None:
    print("=== ARPU MISMATCH AUDIT ===")
    print(f"  Timestamp:           {report['timestamp']}")
    print(f"  Subscriptions:       {report['subscriptions_audited']}")
    print(f"  Mismatch count:      {report['mismatch_count']}")
    print(f"  Founding customers:  {report.get('founding_count', 0)} (intentionally $29/mo, not flagged)")
    print()
    rows = report["mismatches"] if mismatches_only else report["all_rows"]
    if not rows:
        print("  No rows to display.")
        return
    header = "FLAG"
    print(f"  {header:5} {'SUBSCRIPTION':<32} {'CUSTOMER':<32} {'PLAN':<6} {'AMT':>10} {'INT':<6}")
    print(f"  {'-'*5} {'-'*32} {'-'*32} {'-'*6} {'-'*10} {'-'*6}")
    for r in rows:
        if r["mismatch"]:
            flag = "MISS"
        elif r.get("is_founding"):
            flag = "fnd"
        else:
            flag = "ok"
        plan = r["resolved_plan"] or "?"
        amt = f"${r['unit_amount_usd']:.2f}"
        print(
            f"  {flag:5} {r['subscription_id']:<32} {r['customer_id']:<32} "
            f"{plan:<6} {amt:>10} {r['interval']:<6}"
        )
        if r["mismatch"]:
            print(f"        → {r['reason']}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Audit live Stripe subscriptions for ARPU/price mismatches"
    )
    parser.add_argument("project", help="Project name (e.g. kompwatch)")
    parser.add_argument("--json", action="store_true", help="Emit JSON instead of table")
    parser.add_argument(
        "--mismatches-only",
        action="store_true",
        help="In table mode, only print mismatched rows (default: print all)",
    )
    args = parser.parse_args()

    report = audit()
    report["project"] = args.project

    if args.json:
        print(json.dumps(report, indent=2))
    else:
        print_summary(report, mismatches_only=args.mismatches_only)


if __name__ == "__main__":
    main()
