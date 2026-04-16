# Why Don't I See Any Changes Yet?

If you just added a competitor and your dashboard shows no changes, this is completely normal. Here's why.

## Changes Require Two Snapshots

KompWatch detects changes by **comparing two snapshots** — a before and an after. When you first add a competitor:

1. KompWatch takes an **initial snapshot** within a few minutes of you saving.
2. The **next scheduled snapshot** runs on your plan's cycle.
3. After the second snapshot, KompWatch compares the two and surfaces any differences.

This means you won't see your first change (if there is one) until after the second snapshot completes.

## How Long Until My First Comparison?

| Plan | Snapshot every | First comparison appears within |
|------|---------------|-------------------------------|
| Free | 24 hours | ~24 hours after adding |
| Pro  | 6 hours | ~6 hours after adding |
| Team | 1 hour | ~1 hour after adding |

## What If Nothing Changed?

If your competitor's tracked pages didn't change between snapshots, **no change will appear** — and no digest will be sent. This is expected behavior. KompWatch only surfaces meaningful differences, not identical snapshots.

Check back after a few cycles. Most active SaaS products update their pricing or feature pages at least a few times a month.

## How to Confirm Monitoring Is Active

1. Go to [kompwatch.com/competitors](https://kompwatch.com/competitors).
2. Find your competitor in the list.
3. Check that the **status toggle is on** (green) — this means monitoring is active.

If the toggle is off, click it to re-enable monitoring.

## What If a Page Can't Be Reached?

Some pages may temporarily fail to load (rate limiting, server errors, etc.). KompWatch will retry on the next scheduled cycle. Persistent failures — such as a competitor blocking scrapers — will be noted in the competitor's status. If you believe monitoring has stalled, email [support@kompwatch.com](mailto:support@kompwatch.com).

## Tips for Faster Signal

- **Monitor `/pricing` and `/features` directly** rather than the homepage — these pages change more often and more meaningfully.
- **Use a CSS selector** to target the most volatile section (e.g. `.pricing-table`). This cuts noise and makes real changes stand out. See [CSS Selectors FAQ](css-selectors.md).
- **Upgrade to Pro or Team** for more frequent snapshots if you need faster alerts.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
