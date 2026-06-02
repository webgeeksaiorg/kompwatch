---
title: Service Level Agreement (SLA) & Uptime Commitments
description: KompWatch's uptime targets, what counts as downtime, how credits work, and what to do during an extended outage.
---

# Service Level Agreement (SLA) & Uptime Commitments

## What Is KompWatch's Uptime Target?

KompWatch targets **99.5% monthly uptime** for the core application (dashboard, snapshot engine, digest delivery). This translates to a maximum of approximately **3.6 hours of unplanned downtime per month**.

| Plan | Uptime target | Credit threshold |
|------|--------------|-----------------|
| Free | Best-effort | No credits (free tier) |
| Pro | 99.5% / month | Outage > 1 hour |
| Team | 99.5% / month | Outage > 30 minutes |

> **Note:** KompWatch is an early-stage product. Formal SLA enforcement is not yet in place. Credits are applied manually and in good faith based on the policy below.

## What Counts as Downtime?

**Counted:**
- The dashboard (kompwatch.com) is unreachable via HTTP/HTTPS
- Snapshot jobs fail to run for all users
- Digest emails are not delivered

**Not counted:**
- Individual competitor pages that fail to load (that's a competitor-side issue)
- Planned maintenance windows announced ≥ 24 hours in advance
- Degraded performance (slow but accessible)
- Third-party service outages (Stripe, Resend, Cloudflare) where KompWatch itself is up

## How Do I Get a Credit for an Outage?

Credits are not automatic. To request one:

1. Email [support@kompwatch.com](mailto:support@kompwatch.com) with the subject line **"Downtime credit request — [your account email]"**
2. Include: the approximate time range of the disruption and your plan tier
3. We'll verify against our internal incident logs and apply the credit within 5 business days

**Credit amounts (Pro and Team plans):**

| Outage duration (per incident) | Credit |
|-------------------------------|--------|
| 1–4 hours | 1 day of plan value |
| 4–12 hours | 3 days of plan value |
| 12–24 hours | 7 days (1 week) of plan value |
| > 24 hours | Full month's fee |

Credits are applied to your next billing cycle. They are non-transferable and have no cash value.

## Can I Get a Full Refund Instead of a Credit?

If you experience a qualifying outage (see table above) and prefer a refund over a credit, email [support@kompwatch.com](mailto:support@kompwatch.com). We evaluate refund requests individually. Refunds for partial billing periods are issued as prorated amounts to the original payment method.

## What Happens to My Monitoring Data During an Outage?

All previously captured snapshots, change records, and digests are safe — they are stored in a managed database and are not affected by application downtime.

Scheduled snapshot cycles that fall during an outage will be skipped, not backfilled. For details, see [Missed Snapshots During an Outage](./missed-snapshots-during-outage.md).

## How Will I Know About an Ongoing Outage?

We do not currently have a public status page. Incident communication happens via email to affected accounts. If you suspect an outage:

1. Check [kompwatch.com](https://kompwatch.com) directly
2. Email [support@kompwatch.com](mailto:support@kompwatch.com) — we'll confirm and give an ETA
3. Follow-up emails are sent within 2–4 hours of incident resolution

## Is There a Planned Maintenance Window?

We aim for zero-downtime deploys. Maintenance requiring more than 5 minutes of downtime will be communicated by email at least 24 hours in advance and does not count against the uptime SLA.

---

## Related FAQs

- [Service Status & Outages](./service-status.md)
- [Missed Snapshots During an Outage](./missed-snapshots-during-outage.md)
- [Billing Dispute & Refunds](./billing-dispute.md)
- [My Digest Email Didn't Arrive](./digest-not-arriving.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and a team member will follow up within 24 hours.*
