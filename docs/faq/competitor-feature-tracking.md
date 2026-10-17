# How Do I Track Competitor Feature Changes?

Knowing when a competitor ships a new feature — before your prospects do — is one of the highest-leverage uses of competitor monitoring. KompWatch automates this by taking recurring snapshots of the pages where competitors announce new capabilities, then AI-classifying and summarizing what changed.

---

## Which Pages Reveal Competitor Feature Changes

Not all pages are equally useful. Prioritize these in order:

| Page | What it shows | Recommended CSS selector |
|---|---|---|\
| **Changelog / What's New** | Granular feature releases, bug fixes, deprecations | `article`, `.changelog-entry`, `main` |
| **Features / Product** | Repositioning, feature additions, renamed capabilities | `main`, `.features-grid`, `[class*="feature"]` |
| **Pricing** | Features gated to higher tiers, new add-ons | `[class*="pricing"]`, `[class*="plan"]` |
| **Homepage hero** | Positioning shifts ("now with X") | `h1`, `.hero`, `header` |
| **Blog** | Announcements before wider distribution | `.post-list`, `main` |

For competitors with active changelogs (common in dev tools, PLG SaaS, and API products), the changelog page alone is often sufficient — you'll catch every release in a single snapshot.

---

## How KompWatch Tracks Feature Changes

1. **Headless browser snapshots** — KompWatch uses Playwright (headless Chromium) to fully render JavaScript-heavy product and changelog pages. Static HTTP fetches miss React/Next.js rendered content; KompWatch doesn't.

2. **Structured diff on each cycle** — After each snapshot, KompWatch diffs the current HTML against the previous version. Structural changes (new blocks, renamed sections, removed features) are isolated from noise (session tokens, timestamps, ad scripts).

3. **AI classification** — Claude reads the diff and produces a plain-English summary classified by change type:
   - `FEATURE` — new capability added or announced
   - `PRICING` — feature moved behind a paywall or repriced
   - `CONTENT` — positioning copy updated (softer signal)

4. **Severity scoring** — Each change is scored LOW / MEDIUM / HIGH. Feature additions from a direct competitor on your pricing-page tier → HIGH. Minor blog tag update → LOW.

5. **Digest delivery** — Summaries arrive via email (daily/hourly depending on plan) or Slack so the intel reaches your team without requiring anyone to log in.

---

## Setting Up Competitor Feature Tracking in KompWatch

### Step 1: Add competitor URLs

In your dashboard, add the competitor's changelog and/or features page as separate monitored URLs. Each URL is tracked independently.

### Step 2: Scope the CSS selector (recommended)

If the page has unrelated noise (sidebar content, footer updates), scope the snapshot to the relevant section:

```
# Good: scopes to changelog entries only
selector: article

# Good: scopes to feature grid
selector: .features-grid

# Too broad on content-heavy sites:
selector: body
```

### Step 3: Set snapshot frequency

| Plan | Snapshot interval |
|---|---|
| Free | Every 24 hours |
| Pro ($49/mo) | Every 6 hours |
| Team ($149/mo) | Every 1 hour |

For fast-moving competitors (especially those with active product blogs or weekly release cadences), Pro or Team is recommended.

### Step 4: Set alert threshold to MEDIUM or higher

In competitor settings, set the minimum severity for immediate alerts. MEDIUM catches genuine feature changes while filtering out minor CSS tweaks and navigation updates.

---

## What a Feature Change Alert Looks Like

When KompWatch detects a feature change, you receive a digest entry like:

> **Competitor: Acme Analytics**
> **Change type:** FEATURE — HIGH severity
> **Detected:** 2026-08-12 at 14:33 UTC
>
> *Acme Analytics added "AI-powered forecasting" to their pricing page as a Pro-only feature. Their changelog entry reads: "Forecast mode: automatically project pipeline to quarter-end using historical close rates." Previous pricing table did not list this capability.*
>
> **Your action:** Update battlecard. Brief AEs before next Acme-competitive deal.

---

## Handling Competitors Who Hide Their Changelog

Some competitors don't publish a public changelog. In this case, combine:

1. **Product/features page** — catches repositioning and new feature blocks
2. **Pricing page** — catches newly gated capabilities
3. **Blog** — catches launch announcements
4. **App store listing** (for mobile/desktop apps) — catches version release notes

KompWatch can monitor all four simultaneously. See [Monitoring multiple pages per competitor](/docs/faq/monitoring-multiple-pages-per-competitor.md).

---

## When a Competitor Feature Change Affects a Deal

If you're alerted to a competitor shipping a feature that a prospect has asked you about:

1. **Check the diff** — KompWatch stores the full before/after snapshot so you can verify the scope of the change.
2. **Brief your AE immediately** — Don't wait for the next weekly digest. Forward the change summary directly.
3. **Update your battlecard** — See [How to keep battlecards up to date](/docs/faq/how-to-keep-battlecards-up-to-date.md).
4. **Check review sites** — New features often generate G2/Capterra reviews within days. Worth monitoring as a follow-up signal.

---

## Related FAQs

- [How monitoring works](/docs/faq/how-monitoring-works.md)
- [Which pages to monitor per competitor](/docs/faq/which-pages-to-monitor-per-competitor.md)
- [Monitoring competitor changelog and release notes](/docs/faq/monitoring-competitor-changelog-and-release-notes.md)
- [Monitoring competitor AI feature rollouts](/docs/faq/monitoring-competitor-ai-feature-rollouts.md)
- [Competitive battlecards](/docs/faq/competitive-battlecards.md)
- [How to brief sales on a competitor change](/docs/faq/how-to-brief-sales-on-competitor-change.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we respond within 24 hours.*
