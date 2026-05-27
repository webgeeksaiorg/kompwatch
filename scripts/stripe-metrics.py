#!/usr/bin/env python3
"""
Stripe metrics collector for the Analyst agent.

Pulls MRR, subscriber count, churn, and ARPU from the Stripe API
and outputs a structured summary for downstream consumption.

Usage:
  python3 /app/scripts/stripe-metrics.py kompwatch
  python3 /app/scripts/stripe-metrics.py kompwatch --json

Environment variables:
  STRIPE_SECRET_KEY  - Stripe API key (required)
"""

import argparse
import json
import os
import sys
from datetime import datetime, timezone, timedelta

import httpx

STRIPE_API_BASE = "https://api.stripe.com/v1"


def _now_utc() -> datetime:
    return datetime.now(timezone.utc)


def _stripe_headers() -> dict:
    key = os.environ.get("STRIPE_SECRET_KEY", "")
    if not key:
        print("ERROR: STRIPE_SECRET_KEY not set", file=sys.stderr)
        sys.exit(1)
    return {"Authorization": f"Bearer {key}"}


def _get(endpoint: str, params: dict | None = None) -> dict:
    """GET request to Stripe API with pagination support."""
    resp = httpx.get(
        f"{STRIPE_API_BASE}/{endpoint}",
        headers=_stripe_headers(),
        params=params or {},
        timeout=30,
    )
    if resp.status_code != 200:
        print(f"ERROR: Stripe API {resp.status_code}: {resp.text[:300]}", file=sys.stderr)
        sys.exit(1)
    return resp.json()


def _list_all(endpoint: str, params: dict | None = None) -> list:
    """Fetch all items from a paginated Stripe list endpoint."""
    items = []
    params = dict(params or {})
    params.setdefault("limit", 100)
    while True:
        data = _get(endpoint, params)
        items.extend(data.get("data", []))
        if not data.get("has_more", False):
            break
        params["starting_after"] = items[-1]["id"]
    return items


def collect_metrics() -> dict:
    """Collect all revenue metrics from Stripe."""
    now = _now_utc()
    thirty_days_ago = int((now - timedelta(days=30)).timestamp())

    # --- Active subscriptions ---
    active_subs = _list_all("subscriptions", {"status": "active"})
    trialing_subs = _list_all("subscriptions", {"status": "trialing"})
    all_current = active_subs + trialing_subs

    # --- MRR calculation ---
    # Sum monthly-normalised revenue from all active subscription items
    mrr_cents = 0
    for sub in all_current:
        for item in sub.get("items", {}).get("data", []):
            price = item.get("price", {})
            amount = price.get("unit_amount", 0) * item.get("quantity", 1)
            interval = price.get("recurring", {}).get("interval", "month")
            interval_count = price.get("recurring", {}).get("interval_count", 1)
            if interval == "year":
                amount = amount / (12 * interval_count)
            elif interval == "month":
                amount = amount / interval_count
            # weekly/daily edge cases — normalise to monthly
            elif interval == "week":
                amount = amount * (52 / 12) / interval_count
            elif interval == "day":
                amount = amount * (365 / 12) / interval_count
            mrr_cents += amount

    mrr = round(mrr_cents / 100, 2)
    subscriber_count = len(all_current)

    # --- New subscribers in last 30 days ---
    recent_subs = _list_all("subscriptions", {
        "created[gte]": thirty_days_ago,
        "status": "all",
    })
    new_subscribers_30d = sum(
        1 for s in recent_subs if s.get("status") in ("active", "trialing")
    )

    # --- Churned in last 30 days ---
    canceled_subs = _list_all("subscriptions", {
        "created[gte]": thirty_days_ago,
        "status": "canceled",
    })
    # Also count subs that were canceled_at within the window but created earlier
    all_canceled = _list_all("subscriptions", {"status": "canceled", "limit": 100})
    churned_30d = sum(
        1 for s in all_canceled
        if s.get("canceled_at") and s["canceled_at"] >= thirty_days_ago
    )

    # --- Churn rate ---
    # Churned / (active at start of period + new)
    base = subscriber_count + churned_30d - new_subscribers_30d
    churn_rate = round((churned_30d / base * 100) if base > 0 else 0, 2)

    # --- ARPU ---
    arpu = round(mrr / subscriber_count, 2) if subscriber_count > 0 else 0

    # --- Revenue last 30 days (from balance transactions) ---
    txns = _list_all("balance_transactions", {
        "created[gte]": thirty_days_ago,
        "type": "charge",
    })
    revenue_30d = round(sum(t.get("net", 0) for t in txns) / 100, 2)

    return {
        "project": "kompwatch",
        "timestamp": now.isoformat(),
        "mrr": mrr,
        "subscriber_count": subscriber_count,
        "new_subscribers_30d": new_subscribers_30d,
        "churned_30d": churned_30d,
        "churn_rate": churn_rate,
        "arpu": arpu,
        "revenue_30d": revenue_30d,
    }


def print_summary(metrics: dict) -> None:
    """Print human-readable summary."""
    print("=== STRIPE METRICS ===")
    print(f"  Timestamp:          {metrics['timestamp']}")
    print(f"  MRR:                ${metrics['mrr']:.2f}")
    print(f"  Subscribers:        {metrics['subscriber_count']}")
    print(f"  New (30d):          {metrics['new_subscribers_30d']}")
    print(f"  Churned (30d):      {metrics['churned_30d']}")
    print(f"  Churn rate:         {metrics['churn_rate']}%")
    print(f"  ARPU:               ${metrics['arpu']:.2f}")
    print(f"  Revenue (30d net):  ${metrics['revenue_30d']:.2f}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Stripe metrics for analyst agent")
    parser.add_argument("project", help="Project name (e.g. kompwatch)")
    parser.add_argument("--json", action="store_true", help="Output as JSON")
    args = parser.parse_args()

    metrics = collect_metrics()
    metrics["project"] = args.project

    if args.json:
        print(json.dumps(metrics, indent=2))
    else:
        print_summary(metrics)


if __name__ == "__main__":
    main()
