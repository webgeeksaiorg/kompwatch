# Instant Pricing-Change Alerts

Pricing changes are the highest-stakes competitor moves — a price cut before a big deal, a new free tier, an enterprise tier appearing from nowhere. KompWatch can notify you the moment a pricing change is detected, bypassing your normal digest schedule.

## How Is This Different From My Regular Digest?

Your digest runs on a schedule (weekly for Free, daily for Pro, real-time for Team). Instant pricing alerts fire **immediately** when the AI detects a `PRICING`-type change — you don't have to wait for the next digest cycle.

| Change type | Delivered via | Bypass digest? |
|---|---|---|
| Pricing change (any plan) | Instant email + webhook | ✓ Yes |
| Feature change | Normal digest cadence | ✗ No |
| Content change | Normal digest cadence | ✗ No |
| Visual change | Normal digest cadence | ✗ No |

## Which Plans Get Instant Pricing Alerts?

Instant pricing alerts are available on **Pro and Team plans**.

- **Free**: pricing changes appear in your next weekly digest
- **Pro**: pricing changes trigger an immediate alert (email and/or webhook), independent of your daily digest
- **Team**: pricing changes trigger an immediate alert, same as Pro — plus all other HIGH-severity changes are also real-time

## How Do I Enable Instant Pricing Alerts?

1. Go to **Settings → Notifications**
2. Under **Instant alerts**, toggle on **Pricing changes**
3. Choose your delivery channel: **Email**, **Webhook (Slack/Teams)**, or both

By default, instant pricing alerts are **on** for Pro and Team plans. You can disable them here if you prefer all changes to come through the digest.

## What Counts as a Pricing Change?

KompWatch uses the `PRICING` change type for:

- Price increases or decreases (e.g. "$79/mo → $99/mo")
- Tier restructuring (three tiers collapse to two, or tier names change)
- Plan feature reallocation (feature moves up or down between tiers)
- Free plan limit changes (seats, features, trial length)
- Billing model changes (monthly pricing hidden behind annual toggle)
- Trial offer changes ("14-day trial" removed or shortened)

See [How Do I Monitor a Competitor's Pricing Page?](monitoring-competitor-pricing-pages.md) for setup details.

## Can I Set a Severity Threshold?

Yes. In **Settings → Notifications → Instant alerts**, you can require a minimum severity before an alert fires:

- **HIGH** (default) — fires for price changes, tier restructuring, or feature reallocation
- **MEDIUM** — also fires for pricing-page copy rewrites and structural tweaks
- **ALL** — fires for every detected diff on a pricing page (noisy, not recommended)

Leaving it at HIGH means you'll only be pinged for changes that would affect a sales conversation.

## Why Didn't I Get an Instant Alert?

A few reasons this can happen:

- **Free plan**: instant alerts aren't available; the change will appear in your next weekly digest
- **Severity below threshold**: the detected change scored below your configured minimum
- **Instant alerts disabled**: check Settings → Notifications → Instant alerts is toggled on
- **AI confidence below threshold**: changes with low confidence scores are held for digest review by default (see [AI Confidence Scoring](ai-confidence-scoring.md))
- **Email landed in spam**: check your spam folder and whitelist `alerts@kompwatch.com`

## How Quickly Do Instant Alerts Fire?

After the snapshot cycle detects a pricing change, the alert is sent within **2–5 minutes**. The snapshot cycle itself runs every 6 hours (Pro) or hourly (Team), so total detection latency is:

- **Pro**: up to 6 hours to detect + 2–5 min to alert after detection
- **Team**: up to 1 hour to detect + 2–5 min to alert after detection

If you need faster detection, the Team hourly snapshot cycle is the primary lever.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
