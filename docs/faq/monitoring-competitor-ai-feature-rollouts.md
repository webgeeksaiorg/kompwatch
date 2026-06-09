# How do I track when competitors add or announce new AI features?

AI features are rolling out across SaaS at an accelerating pace. Competitors are adding AI assistants, copilots, and automation capabilities on a near-weekly cadence. KompWatch lets you stay on top of every announcement without having to manually check competitor sites.

## What pages to monitor

For each competitor, add these pages and pair them with targeted CSS selectors:

| Page | Suggested selector | What you catch |
|---|---|---|
| Features / Product page | `main`, or a section containing feature cards | New feature blocks added or renamed |
| Pricing page | `[class*="pricing"]`, `[class*="plan"]` | AI features bundled into higher tiers |
| Changelog / What's New | `article`, `.changelog-entry`, `main` | Granular release-level detail |
| Blog | `.post-list`, `main` | AI announcement posts before wider distribution |
| Homepage hero | `.hero`, `h1`, `header` | Positioning shifts ("now AI-powered") |

For pages using JavaScript-rendered content (common with product pages), KompWatch's Playwright-based scraper handles full JS execution — you don't need to take any special action.

## Setting up high-sensitivity monitoring

1. **Add the competitor** and set the selector to the specific section you care about (e.g., `.features-grid` rather than `body`) — this reduces noise from unrelated updates.
2. **Set snapshot frequency** to the fastest interval your plan allows (hourly on Team, every 6h on Pro).
3. **Enable HIGH severity alerts** for that competitor so changes surface in your digest immediately rather than being batched.

## What KompWatch's AI looks for

When a snapshot changes, KompWatch's digest AI is prompted to flag:
- New keywords like "AI", "copilot", "assistant", "automated", "generative"
- Removal of manual-workflow language (a signal they're replacing features, not just adding)
- New sections or cards added to feature grids
- Price-tier changes that gate AI features

You'll receive a plain-English summary like: _"Competitor added an 'AI-powered insights' section to their features page. Pricing page now shows AI Copilot as a Pro-only add-on at +$29/mo."_

## What to do with the signal

Once you receive an AI feature alert:

1. **Pull the diff** — KompWatch stores the full before/after snapshot so you can see exactly what changed in the HTML.
2. **Brief your product team** — share the digest entry directly; the AI summary is already formatted for quick sharing.
3. **Update your battlecard** — see [How to create and maintain competitive battlecards](/docs/faq/competitive-battlecards.md).
4. **Check review sites** — new AI features often generate immediate G2/Capterra reviews worth monitoring separately.

## Tracking LLM and AI brand mentions in search

If you want to know whether a competitor's AI features are being discussed in ChatGPT, Perplexity, or other AI answers, see [LLM visibility monitoring](/docs/faq/llm-visibility-monitoring.md) — that's a separate surface from their website.

## Example setup for a fast-moving AI competitor

```
Competitor: HeadsUp AI
Pages monitored:
  - https://www.headsup.ai/product  → selector: main
  - https://www.headsup.ai/pricing  → selector: [class*="pricing"]
  - https://www.headsup.ai/changelog → selector: article
Snapshot interval: Every 6 hours (Pro)
Alert severity threshold: Medium and above
```

With this setup you'll receive a digest entry within 6 hours of any meaningful update to their product positioning, pricing, or changelog.

---

**Related FAQs:**
- [LLM visibility monitoring](/docs/faq/llm-visibility-monitoring.md)
- [ChatGPT vs website monitoring](/docs/faq/chatgpt-vs-website-monitoring.md)
- [Which pages to monitor per competitor](/docs/faq/which-pages-to-monitor-per-competitor.md)
- [Monitoring competitor product launches](/docs/faq/monitoring-competitor-product-launches.md)
- [Competitive battlecards](/docs/faq/competitive-battlecards.md)
