# Can I Trigger a Snapshot On-Demand?

**Short answer:** Yes — you can force a fresh snapshot for any active competitor without waiting for the next scheduled cycle.

---

## When To Use It

Scheduled snapshots handle your normal monitoring cadence. Trigger a manual snapshot when:

- You just heard a rumor a competitor changed their pricing
- A prospect mentions a competitor launched a new feature mid-deal
- You're about to run a competitive review and want current data, not 5-hour-old data
- You've just added a new competitor and don't want to wait until the first cron cycle

---

## How to Trigger a Manual Snapshot

1. Go to [kompwatch.com/competitors](https://kompwatch.com/competitors)
2. Click the competitor's name to open its detail page
3. Click **Refresh now** (top-right of the detail page)
4. The page shows "Snapshot queued" — results typically appear within 1–3 minutes

The manual snapshot runs through the same pipeline as your scheduled snapshots: headless browser render, diff against the previous snapshot, AI severity classification.

---

## What Counts Against Your Plan?

Manual snapshots do **not** count against your scheduled snapshot quota. They're additive. However:

| Plan | Manual snapshots |
|------|-----------------|
| Free | 1 per competitor per 24 hours |
| Pro | 5 per competitor per 24 hours |
| Team | Unlimited |

The cooldown is per-competitor, not account-wide. If you have 5 Pro competitors and trigger each once, all 5 count separately against their individual cooldown.

---

## What If "Refresh Now" Is Greyed Out?

The button is disabled when:

- **Cooldown active** — you've already triggered a manual snapshot within your plan's allowed window. A tooltip shows when the cooldown expires.
- **Competitor is paused** — resume the competitor first ([Managing Competitors →](./managing-competitors.md))
- **Snapshot already in progress** — a scheduled snapshot is currently running for this competitor; wait ~2 minutes and try again

---

## Will a Manual Snapshot Generate Digest Notifications?

Yes, if it detects a change. Changes found during manual snapshots are treated identically to scheduled-cycle changes:

- They appear in your next digest
- If you have real-time webhooks or instant alerts enabled (Pro/Team), they fire immediately
- Change severity and AI summary are generated normally

If the page hasn't changed since the last snapshot, no change record is created.

---

## Is There a Bulk Refresh?

Not yet — snapshots must be triggered per-competitor from each competitor's detail page. If you need to refresh your entire list before a competitive review, do it from each competitor page in turn. Team plan users can open multiple tabs and trigger concurrently.

Bulk refresh across all competitors at once is on the roadmap. Email [support@kompwatch.com](mailto:support@kompwatch.com) to register interest.

---

## Related FAQs

- [How Does Monitoring Work?](./how-monitoring-works.md)
- [Managing Your Competitors](./managing-competitors.md)
- [Understanding Your Digest](./understanding-your-digest.md)
- [Instant Pricing Alerts](./instant-pricing-alerts.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we respond within 24 hours.*
