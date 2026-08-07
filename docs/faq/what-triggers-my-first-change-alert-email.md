# What Triggers My First Change Alert Email?

Your first change alert email fires the moment KompWatch detects a meaningful difference between two consecutive snapshots of a tracked competitor page. This page explains exactly what needs to happen — and how to make it happen faster.

---

## The Three-Step Activation Sequence

### Step 1: Initial snapshot (happens immediately)

When you add a competitor URL, KompWatch takes a **baseline snapshot within seconds**. This is the "before" state — your reference point. No alert is sent at this stage because there's nothing to compare it to yet.

### Step 2: Second snapshot (happens on your plan cycle)

KompWatch waits for its next scheduled run, then takes a second snapshot of the same URL. This is the "after" state.

| Plan | Snapshot frequency | Time until second snapshot |
|------|-------------------|---------------------------|
| Free | Every 24 hours | ~24 hours after adding |
| Pro | Every 6 hours | ~6 hours after adding |
| Team | Every 1 hour | ~1 hour after adding |

### Step 3: Change comparison and alert (if a difference is found)

After the second snapshot, KompWatch compares the two. If a meaningful difference is detected above your minimum severity threshold, it:

1. Generates an AI summary of what changed and why it might matter
2. Scores the change with a confidence score (0–100)
3. Sends you a change alert email — **this is your first change alert**

If nothing changed between the two snapshots, no email is sent. That's not a bug — it means your competitor's page was stable.

---

## Why You Might Not Have Gotten an Alert Yet

**It's been less than 24 hours (Free plan).** This is the most common reason. Your first snapshot cycle hasn't completed yet. Give it until tomorrow morning.

**Your competitor's page didn't change.** Some pages are stable for weeks. If you're monitoring a homepage hero section that hasn't been updated in months, no alert fires. Try adding the `/pricing` or `/features` URL instead — those change more often.

**Your alert threshold is set too high.** If your minimum severity is set to HIGH, LOW and MEDIUM changes are filtered out. A small copy tweak scores MEDIUM and wouldn't trigger an alert. Check **Settings → Notifications → Minimum severity** and lower it to MEDIUM or ALL during your first week so you see everything.

**The change was below your confidence threshold.** Very new URLs have no baseline history, so first changes sometimes score low confidence. These still appear in your dashboard but may be filtered from email alerts depending on your settings. Check [/competitors](https://kompwatch.com/competitors) to see if a low-confidence change is waiting there.

**The email went to spam.** Search your spam folder for "KompWatch" and add `alerts@kompwatch.com` to your contacts. See [Change Alert Email Not Arriving](digest-not-arriving.md).

---

## How to Get to Your First Alert Faster

**Monitor high-velocity pages.** Pricing pages and feature pages change more often than homepages. Use specific URLs like `/pricing` or `/features` rather than the root domain.

**Lower your minimum severity.** Set it to MEDIUM or ALL for the first week. Once you see what your competitors' change cadence looks like, you can tune it back up.

**Upgrade to Pro.** Free plan snapshots run once per day. Pro runs every 6 hours — your first comparison happens in 6 hours instead of 24. If a competitor updates their pricing page at 9 AM, you know by 3 PM. On Free, you know tomorrow.

**Trigger a manual snapshot.** If you're on Pro or Team, you can trigger an on-demand snapshot immediately from the competitor detail page. This forces a second snapshot right now, which means a comparison runs right away. See [Manual Snapshot Trigger](manual-snapshot-trigger.md).

---

## What the First Alert Email Looks Like

Your first change alert email contains:

- **Competitor name** and the URL where the change was detected
- **AI-generated summary** — one to three sentences explaining what changed in plain English (e.g., "Competitor X updated their Professional plan price from $79/mo to $99/mo and removed the annual discount badge from the pricing header.")
- **Change type** — PRICING, FEATURE, CONTENT, or VISUAL
- **Severity** — LOW, MEDIUM, HIGH, or CRITICAL
- **Confidence score** — the model's certainty that this is a real, intentional change (0–100)
- **Diff view link** — click through to see the exact before/after comparison in your dashboard

The subject line format: `[KompWatch] Competitor X updated their pricing page — MEDIUM severity`

---

## After Your First Alert: The Activation Loop

The first alert is the moment the product proves itself. Here's what most users do next:

1. **Click through to the diff** — verify the change is real and check the snapshot comparison
2. **Mark it Significant or Noise** — one click to train the AI model for your specific competitor
3. **Share it with the team** — forward the email, or route future alerts to a shared `#competitive-intel` Slack channel
4. **Upgrade if the timing matters** — if the change had happened yesterday and affected a sales call today, that's the case for Pro's 6-hour cadence

→ [Set up Slack alerts](slack-notifications.md) | [Upgrade to Pro — $49/month](https://kompwatch.com/pricing)

---

## Related

- [Why Don't I See Any Changes Yet?](why-no-changes-yet.md)
- [What Does a Change Alert Email Look Like?](what-does-a-change-alert-email-look-like.md)
- [Why Is My AI Confidence Score Low?](why-is-my-confidence-score-low.md)
- [Manual Snapshot Trigger](manual-snapshot-trigger.md)
- [What Makes Free Users Upgrade to Pro](what-makes-free-users-upgrade-to-pro.md)
- [Managing Alert Fatigue](managing-alert-fatigue.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we respond within 24 hours.*
