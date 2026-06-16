# What Does a Competitor Change Alert Email Look Like?

KompWatch sends two types of emails depending on your plan: **digests** (batched summaries) and **real-time alerts** (per-change, Team plan only). This article covers what each actually contains.

---

## Real-Time Change Alert (Team Plan)

On the Team plan, every HIGH or CRITICAL change triggers an individual email within 1 hour of detection. Here's what a real one looks like:

> **Subject:** Competitor change detected — Acme Corp pricing page
>
> **Acme Corp · /pricing · Thursday 2:14 AM**
>
> **What changed:**
> The Pro plan price dropped from $79/mo to $59/mo. The "Up to 5 users" seat limit was removed from the Pro tier — now listed as "Unlimited users." The Enterprise CTA changed from "Contact sales" to "Start free trial."
>
> **Severity:** HIGH — pricing and trial access changes
>
> **What this means for you:**
> A $20/mo price drop with seat-limit removal is a conversion-rate play. Teams comparing you head-to-head now see a more aggressive anchor. Consider whether your own pricing page makes your differentiation clear relative to this new positioning.
>
> **View full diff →** [link]

That's it — one email, one change, one strategic implication. The email is intentionally concise. If you want the raw diff (every HTML change before the AI filter), the "View full diff" link opens a before/after comparison in your dashboard.

---

## Digest Email (Free and Pro Plans)

Free and Pro users receive a **batched digest** that groups all changes since the last digest into a single email:

- **Free:** Weekly (Mondays)
- **Pro:** Daily (every 24 hours)

Each change in the digest includes the same fields as a real-time alert — competitor name/URL, severity, AI summary, "What this means for you" — but changes are **grouped by content zone** (Monetization, Positioning, Product, Marketing, etc.) so you can scan by strategic area at a glance.

See [Understanding Your Digest](./understanding-your-digest.md) for a full breakdown of the digest format.

---

## What Types of Changes Typically Appear?

Based on real monitoring across SaaS competitor sites:

| Change type | Proportion |
|---|---|
| CTA and copy changes | ~31% |
| Pricing page changes | ~23% |
| Feature table updates | ~18% |
| Navigation and URL changes | ~14% |
| Page structure changes | ~14% |

CTA and copy changes are the most frequent because competitors continuously A/B test headlines, button labels, and trial flow messaging. Pricing changes are less frequent but typically have the highest severity score.

Not every detected change reaches your inbox — KompWatch applies a multi-stage noise filter that discards tracking pixel rotations, A/B test class names, CDN drift, and dynamic counter values before any alert is sent. See [How KompWatch Filters HTML Diff Noise](./how-kompwatch-filters-html-diff-noise.md).

---

## What Doesn't Appear in Alerts?

KompWatch only monitors public URLs. Change alerts will not cover:

- **Pages behind a login** — authenticated dashboards, customer portals, or gated pricing (see [Can KompWatch Monitor Login-Required Pages?](./monitoring-login-required-pages.md))
- **Sites with aggressive bot protection** — Cloudflare Turnstile, DataDome, and similar systems block headless browsers; KompWatch detects this and notifies you that a snapshot failed, but the content diff will be empty (see [Anti-Bot Protection and Blocked Pages](./anti-bot-protection-and-blocked-pages.md))
- **Social and review sites** — G2 reviews, Reddit threads, job postings, and social media are separate signals not covered by website monitoring
- **Sales deck or rep-only pricing** — custom contract tiers and internal pricing guides are not public URLs

---

## Adjusting Alert Settings

To control which changes trigger emails:

1. Go to **Settings → Notifications**
2. Set your **minimum severity floor** — LOW, MEDIUM, HIGH, or CRITICAL
3. On Team plan, you can also configure **per-competitor alert preferences** so high-priority competitors always alert immediately while lower-priority ones are batched

See [Per-Competitor Notification Settings](./per-competitor-notification-settings.md).

---

## Related Articles

- [Understanding Your Digest](./understanding-your-digest.md)
- [Snapshots, Changes, and Digests — What's the Difference?](./snapshots-changes-and-digests-explained.md)
- [Can I See a Sample Digest Before Signing Up?](./sample-digest-preview.md)
- [How KompWatch Filters HTML Diff Noise](./how-kompwatch-filters-html-diff-noise.md)
- [Per-Competitor Notification Settings](./per-competitor-notification-settings.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
