#!/usr/bin/env python3
"""
Plausible analytics collector for the Analyst agent.

Pulls visitor counts, pageviews, bounce rate, visit duration,
top pages, and top sources from the Plausible API.

Usage:
  python3 /app/scripts/plausible-stats.py kompwatch.com --period 30d
  python3 /app/scripts/plausible-stats.py kompwatch.com --period 7d --json

Environment variables:
  PLAUSIBLE_API_KEY  - Plausible API key (required)
  PLAUSIBLE_HOST     - Plausible instance URL (default: https://analytics.webgeeksai.in)
"""

import argparse
import json
import os
import sys
from datetime import datetime, timezone, timedelta

import httpx

DEFAULT_HOST = "https://analytics.webgeeksai.in"


def _now_utc() -> datetime:
    return datetime.now(timezone.utc)


def _get_config():
    host = os.environ.get("PLAUSIBLE_HOST", DEFAULT_HOST).rstrip("/")
    api_key = os.environ.get("PLAUSIBLE_API_KEY", "")
    if not api_key:
        print("ERROR: PLAUSIBLE_API_KEY not set", file=sys.stderr)
        sys.exit(1)
    return host, api_key


def _get(host: str, api_key: str, endpoint: str, params: dict) -> dict:
    """GET request to the Plausible API."""
    resp = httpx.get(
        f"{host}/api/v1/stats/{endpoint}",
        headers={"Authorization": f"Bearer {api_key}"},
        params=params,
        timeout=30,
    )
    if resp.status_code != 200:
        print(f"ERROR: Plausible API {resp.status_code}: {resp.text[:300]}", file=sys.stderr)
        sys.exit(1)
    return resp.json()


def _parse_period(period_str: str) -> str:
    """Convert period shorthand (30d, 7d, etc.) to Plausible date range."""
    if period_str.endswith("d"):
        days = int(period_str[:-1])
        end = _now_utc().date()
        start = end - timedelta(days=days)
        return f"{start},{end}"
    # Allow pass-through for Plausible native periods (month, 6mo, 12mo)
    return period_str


def collect_stats(site_id: str, period: str) -> dict:
    """Collect all analytics from Plausible."""
    host, api_key = _get_config()
    date_range = _parse_period(period)

    base_params = {"site_id": site_id, "period": "custom", "date": date_range}

    # --- Aggregate metrics ---
    agg = _get(host, api_key, "aggregate", {
        **base_params,
        "metrics": "visitors,pageviews,bounce_rate,visit_duration",
    })
    results = agg.get("results", {})

    visitors = results.get("visitors", {}).get("value", 0)
    pageviews = results.get("pageviews", {}).get("value", 0)
    bounce_rate = results.get("bounce_rate", {}).get("value", 0)
    visit_duration = results.get("visit_duration", {}).get("value", 0)

    # --- Top pages ---
    pages_resp = _get(host, api_key, "breakdown", {
        **base_params,
        "property": "event:page",
        "metrics": "visitors,pageviews",
        "limit": 10,
    })
    top_pages = [
        {"page": r["page"], "visitors": r["visitors"], "pageviews": r["pageviews"]}
        for r in pages_resp.get("results", [])
    ]

    # --- Top sources ---
    sources_resp = _get(host, api_key, "breakdown", {
        **base_params,
        "property": "visit:source",
        "metrics": "visitors",
        "limit": 10,
    })
    top_sources = [
        {"source": r["source"], "visitors": r["visitors"]}
        for r in sources_resp.get("results", [])
    ]

    return {
        "site_id": site_id,
        "period": period,
        "timestamp": _now_utc().isoformat(),
        "visitors": visitors,
        "pageviews": pageviews,
        "bounce_rate": bounce_rate,
        "visit_duration": visit_duration,
        "top_pages": top_pages,
        "top_sources": top_sources,
    }


def print_summary(stats: dict) -> None:
    """Print human-readable summary."""
    print(f"=== PLAUSIBLE STATS ({stats['site_id']}, {stats['period']}) ===")
    print(f"  Timestamp:       {stats['timestamp']}")
    print(f"  Visitors:        {stats['visitors']}")
    print(f"  Pageviews:       {stats['pageviews']}")
    print(f"  Bounce rate:     {stats['bounce_rate']}%")
    print(f"  Avg duration:    {stats['visit_duration']}s")
    print()
    print("  TOP PAGES:")
    for p in stats["top_pages"][:10]:
        print(f"    {p['page']:40s}  {p['visitors']:>6} visitors  {p['pageviews']:>6} views")
    if not stats["top_pages"]:
        print("    (none)")
    print()
    print("  TOP SOURCES:")
    for s in stats["top_sources"][:10]:
        print(f"    {s['source']:40s}  {s['visitors']:>6} visitors")
    if not stats["top_sources"]:
        print("    (none)")


def main() -> None:
    parser = argparse.ArgumentParser(description="Plausible analytics for analyst agent")
    parser.add_argument("site_id", help="Plausible site ID (e.g. kompwatch.com)")
    parser.add_argument("--period", default="30d", help="Period: 7d, 30d, 6mo, 12mo (default: 30d)")
    parser.add_argument("--json", action="store_true", help="Output as JSON")
    args = parser.parse_args()

    stats = collect_stats(args.site_id, args.period)

    if args.json:
        print(json.dumps(stats, indent=2))
    else:
        print_summary(stats)


if __name__ == "__main__":
    main()
