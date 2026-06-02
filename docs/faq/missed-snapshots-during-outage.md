---
title: Missed Snapshots During an Outage — What Happens to My Monitoring?
description: What happens to scheduled competitor snapshots during KompWatch downtime, whether changes can be backfilled, and how to manually catch up after an incident.
---

# Missed Snapshots During an Outage

If KompWatch experiences downtime during a scheduled snapshot cycle, some snapshots may be skipped. Here's exactly what that means for your monitoring and what you can do about it.

## Will I Lose Competitor Data?

**Your historical data is safe.** All previously captured snapshots, change records, and digests remain intact. Downtime only affects snapshots that were *scheduled to run* while the service was unavailable.

What is affected:

| Data type | Affected? | Notes |
|-----------|-----------|-------|
| Previous snapshots | No | Already stored; unaffected |
| Change history | No | Existing change records are preserved |
| Past digests | No | Already sent; fully accessible in your dashboard |
| Scheduled snapshots during outage | **Yes** | These cycles are skipped — not retried retroactively |
| Your next scheduled snapshot | No | Resumes automatically once service is restored |

## Does KompWatch Backfill Missed Snapshots?

**No — missed snapshot cycles are not automatically backfilled.** The scheduler moves forward; it does not queue up skipped cycles for catch-up processing once service resumes.

This means: if your competitor changed their pricing page during a 6-hour outage and your only snapshot of that period was skipped, KompWatch won't retroactively detect that change. The *next* scheduled snapshot will compare against your *last successful* snapshot and will catch the change at that point — but the exact timestamp of when the competitor changed will be approximate.

## What Should I Do After an Extended Outage?

Once KompWatch is back online, trigger a manual snapshot for your highest-priority competitors:

1. Go to [kompwatch.com/competitors](https://kompwatch.com/competitors)
2. Open each critical competitor's detail page
3. Click **Refresh now** to queue an immediate snapshot
4. Changes detected against the last successful snapshot will appear in your feed within 1–3 minutes

This is the fastest way to re-establish a current baseline and catch anything that changed while monitoring was paused.

See [Can I Trigger a Snapshot On-Demand?](./manual-snapshot-trigger.md) for full instructions and plan limits.

## Will My Digest Be Delayed?

If the outage coincides with a scheduled digest send, the digest for that period may be delayed or skipped:

- **Pro plan (daily digest):** A missed digest send is not automatically resent. Any changes detected in the next snapshot cycle will be included in your *next* daily digest.
- **Team plan (real-time alerts):** Real-time webhook and Slack notifications cannot be delivered retroactively for changes that occurred during downtime.
- **Free plan (weekly digest):** A skipped weekly digest shifts the next send by up to one cycle.

If you believe you missed a digest, you can view all detected changes directly on your [dashboard](https://kompwatch.com/dashboard) at any time — digests are a summary, not the source of truth.

## Am I Charged for Downtime?

KompWatch does not automatically issue credits for brief service interruptions (under 1 hour). For extended outages, contact [support@kompwatch.com](mailto:support@kompwatch.com) — we evaluate each incident individually and apply account credits when monitoring was materially disrupted.

Include in your email:
- Your account email
- The approximate time range of the disruption you experienced
- How many competitors you were monitoring at the time

## How Will I Know When an Incident Is Resolved?

We do not currently offer a public status page, but incident updates are communicated by email to affected accounts. If you were an active user during an outage, expect an email within 2–4 hours of resolution.

---

## Related FAQs

- [Service Status & Outages](./service-status.md)
- [Can I Trigger a Snapshot On-Demand?](./manual-snapshot-trigger.md)
- [Snapshot Errors and Warning States](./snapshot-errors-and-warning-states.md)
- [My Digest Email Didn't Arrive](./digest-not-arriving.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and a team member will follow up within 24 hours.*
