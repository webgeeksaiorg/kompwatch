# How Fast Will I Know About a Competitor Change?

**Short answer:** Between 1 hour and 24 hours, depending on your plan. The exact timing depends on your snapshot frequency and when the change falls relative to your next scheduled snapshot.

---

## The Detection Window by Plan

| Plan | Snapshot frequency | Worst-case detection lag |
|------|--------------------|--------------------------|
| Free | Once per day | Up to 24 hours |
| Pro  | Every 6 hours | Up to 6 hours |
| Team | Every hour | Up to 1 hour |

A competitor changes their pricing at 2pm. If you're on Team, KompWatch runs a snapshot within the hour and you have an alert by 3pm. If you're on Free, you may not see it until the following day.

---

## Why This Matters (The Timing Luck Problem)

Manual competitor monitoring has a structural problem: the check happens when *you* decide to check, not when the competitor decides to change something.

A competitor drops their entry plan price on a Wednesday afternoon. You do your weekly competitor check on Monday morning. By the time you find out, that price has been live for five days. If any prospect compared your pricing against theirs during that window, they were comparing against a number that's no longer true.

Automated monitoring with a short detection window removes the timing luck dependency entirely. The change happens → KompWatch detects it at the next snapshot → you get a digest. The interval is predictable and plan-controlled.

---

## When Does the Alert Actually Arrive?

Detection (snapshot comparison) and delivery (email digest) are two separate steps:

1. **Detection:** KompWatch takes a snapshot of each competitor page on its schedule. It compares the new snapshot to the previous one. If a change is found, it's classified (content / pricing / feature) and scored for severity.

2. **Delivery:** Changes are batched into a digest. Digest delivery timing depends on your settings in Settings → Digest Schedule. You can configure daily or weekly digests.

**Important:** Even if KompWatch detects a change immediately (within 1 hour on Team), your digest may be scheduled for the next morning. If you need to know *as soon as* a change is detected, use **Slack alerts** (Pro and above) — these fire within minutes of a detection, separate from the email digest.

See [Configuring Slack Alerts →](./slack-alert-setup.md) and [Digest Schedule Settings →](./digest-schedule-and-timing.md) for setup instructions.

---

## Can KompWatch Tell Me When the Change Actually Happened?

KompWatch can tell you when it *detected* the change (timestamp of the snapshot where the diff first appeared). It cannot tell you the exact moment the competitor made the change on their server — that information isn't available externally.

In practice, the detection timestamp gives you useful precision. If your Team plan runs hourly snapshots and the diff shows up in the 14:00 snapshot, you know the change happened sometime between the 13:00 and 14:00 run. That's sufficient for most competitive use cases.

You can view detection timestamps in the Change History timeline for each competitor. See [Using the Change History Timeline →](./using-the-change-history-timeline.md).

---

## If You Need Faster Detection

- **Free → Pro:** cuts your detection window from 24 hours to 6 hours
- **Pro → Team:** cuts it to 1 hour
- **Team + Slack alerts:** you get notified within minutes of detection, rather than waiting for the next scheduled digest

If you're monitoring a competitor actively during a deal cycle or a pricing review period, Pro or Team is the recommended plan. Missing a competitor pricing change during a live deal is the highest-cost failure mode.

---

## See Also

- [When Do Competitors Typically Change Their Pricing? →](./competitor-pricing-change-timing.md)
- [Configuring Slack and Webhook Alerts →](./slack-alert-setup.md)
- [Digest Schedule and Timing →](./digest-schedule-and-timing.md)
- [Which Plan Is Right for Me? →](./which-plan-is-right-for-me.md)
