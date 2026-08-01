# Switching from Spyglass to KompWatch

Spyglass (spyglassci.com) is a new entrant in the competitor intelligence space, targeting indie SaaS founders who want lightweight competitor awareness with minimal setup. If you've been using Spyglass and are looking for deeper AI-powered analysis, team features, or more granular change detection, this guide covers what KompWatch offers and how to get started.

## Why Teams Graduate from Spyglass to KompWatch

- **AI-generated change summaries** — KompWatch uses Claude (Anthropic) to write plain-English explanations of what changed and *why it matters* for your competitive positioning. You get strategic context, not just a raw change notification.
- **Severity scoring** — Every detected change is classified LOW / MEDIUM / HIGH so your team can triage what needs action today versus what to revisit next quarter.
- **Headless browser rendering** — KompWatch runs full headless Chromium (Playwright) to render JavaScript-heavy pages before snapshotting. Modern SaaS pricing pages built on React or Next.js are captured accurately.
- **CSS selector targeting** — Pin monitoring to a specific section of a competitor's page (e.g. `.pricing-table`, `#features`). This eliminates noise from nav/footer updates, cookie banners, and dynamic content unrelated to competitive positioning.
- **Team plans with shared workspaces** — As your team grows beyond one founder, shared competitor dashboards and digest routing mean the right intel reaches the right people without manual forwarding.
- **90-day change history timeline** — A scrollable, week-by-week view of every detected change, filterable by competitor, change type, and severity.
- **Content zone classification** — Every change is labeled: Pricing, Features, Messaging, Hiring, Legal, Operations. Filter your digest to what your team actually acts on.
- **Free plan, no credit card** — Start with 3 competitors at $0/month.

## Feature Comparison

| | KompWatch | Spyglass |
|---|---|---|
| Free plan | ✓ 3 competitors, 1 digest/week | ❓ Not confirmed |
| Entry paid tier | $49/mo (Pro, 10 competitors) | ❓ Not confirmed |
| Team plan | ✓ $149/mo (50 competitors, shared workspace) | ❓ Not confirmed |
| AI-generated change summaries | ✓ Claude-powered analysis | ❓ Basic alerts |
| Change severity scoring | ✓ LOW / MEDIUM / HIGH | ❓ Not confirmed |
| Headless browser (renders SPAs) | ✓ Full Playwright | ❓ Not confirmed |
| CSS selector targeting | ✓ Per-section precision | ❓ Not confirmed |
| 90-day change history timeline | ✓ | ❓ Not confirmed |
| Content zone classification | ✓ Pricing / Features / Messaging / Hiring | ❓ Not confirmed |
| Scheduled email digests | ✓ Daily (Pro) / Weekly (Free) | ❓ Basic alerts |
| Slack / webhook alerts | ✓ | ❓ Not confirmed |
| Shareable report links | ✓ `/report/[token]` for stakeholders | ❓ Not confirmed |
| Cancel anytime | ✓ No contract | ❓ Not confirmed |

*Spyglass is a new entrant — details based on publicly available information as of May 2026. Verify with their current documentation.*

## How to Switch

Setup takes about 5 minutes. Spyglass monitors cannot be imported directly, but KompWatch's onboarding is straightforward.

1. **Sign up at [kompwatch.com](https://kompwatch.com)** — free plan available immediately, no credit card required.
2. **Add your competitor URLs** — the same sites you were monitoring in Spyglass. See [Adding a Competitor](./adding-competitors.md).
3. **Set CSS selectors** to scope monitoring to the sections that matter (pricing tables, feature lists, careers pages). See [CSS Selector Targeting](./css-selectors.md).
4. **Connect Slack or webhooks** (optional) in Settings → Integrations.

Your first snapshot fires immediately on save. Change detection begins after the second snapshot — within 24 hours on Free, within a few hours on Pro.

## Will I Lose My Spyglass History?

KompWatch does not import historical monitoring data from Spyglass. Your change history starts fresh when you add a competitor. If you have saved alerts or reports in Spyglass, note them down before you cancel.

## Running Both in Parallel

KompWatch's free plan (3 competitors, no credit card) lets you run both tools side-by-side before committing. Add the same competitor URLs in both and compare: rendering accuracy on JavaScript-heavy pages, alert relevance, and whether AI-generated summaries with severity scoring give your team more actionable context than what you're getting today.

## Questions?

Email [support@kompwatch.com](mailto:support@kompwatch.com) with your competitor list and we'll help you set up equivalent monitoring, including suggested CSS selectors for common SaaS pricing and feature pages.

---
*For a full side-by-side comparison, see [KompWatch vs Spyglass →](https://kompwatch.com/compare/kompwatch-vs-spyglass)*
