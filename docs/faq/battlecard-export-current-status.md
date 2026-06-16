# Does KompWatch Have One-Click Battlecard Export?

KompWatch's one-click battlecard export feature is **currently in development and not yet available**. The comparison pages reference it as a planned capability — it will ship as a one-click HTML export that generates a formatted, sales-ready battlecard from a competitor's tracked changes.

Until it ships, the workaround below gives you equivalent output in a few manual steps.

## Current Workaround: JSON Export + Template Paste

1. Go to **Settings → Export → JSON** to download all changes for a competitor
2. Filter by `"severity": "HIGH"` or `"severity": "CRITICAL"` — these are your battlecard-worthy signals
3. The `summary` field on each change entry is AI-written in plain English and framed for competitive context — paste it directly into your battlecard template (Notion, Google Slides, Confluence, Highspot, Seismic, etc.)
4. Pull pricing data from digest entries tagged `"type": "PRICING"` for your price-anchoring section

Most teams find this takes about 5–10 minutes per competitor per week, versus hours of manual research — the signal quality is the same as what the one-click export will produce.

## What the Battlecard Export Will Include

When it ships, the one-click HTML export will:
- Format AI-generated change summaries into a structured battlecard layout
- Include sections for pricing, features, messaging, and hiring signals
- Export as a portable HTML file you can drop into Notion, Google Docs, or a sales enablement tool

## When Will It Ship?

The battlecard builder feature is in active development. Follow the [product changelog](./product-changelog.md) for the release announcement.

## Questions?

Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll help you set up a manual battlecard workflow that works with your current tool stack.

---
*Related: [Building Competitive Battlecards with KompWatch](./competitive-battlecards.md) · [Creating Sales Battlecards](./creating-sales-battlecards.md) · [Switching from Klue](./switching-from-klue.md)*
