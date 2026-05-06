# Creating Sales Battlecards with KompWatch

KompWatch monitors competitor websites and surfaces change signals — it doesn't yet generate formatted battlecard documents (PDFs, PowerPoints, or CRM-embedded cards). If you're coming from Crayon or Klue expecting a battlecard builder, here's an honest picture of what KompWatch covers today and where it fits in your competitive enablement workflow.

## What KompWatch Contributes to Battlecards

KompWatch is the **monitoring and signal layer**. It keeps your battlecard data fresh by detecting when competitors change their pricing, features, messaging, or positioning. Without fresh signal, battlecards go stale fast — and stale battlecards lose deals.

| Signal type | How KompWatch surfaces it |
|---|---|
| **Pricing changes** | Detects edits to competitor pricing pages, including plan restructures, price increases, and feature-gating shifts |
| **Feature launches** | Catches new sections added to feature or product pages (e.g. "Now includes SSO" appearing in a features grid) |
| **Messaging shifts** | Flags hero copy changes, tagline updates, and positioning rewrites |
| **Hiring signals** | Monitors jobs pages — new engineer roles often precede product announcements by 2–3 months |
| **Press / newsroom** | Picks up funding announcements, partnership news, and acquisition mentions from competitor newsrooms |

AI-generated digests (daily on Pro, weekly on Free) summarize these changes in plain English — ready to copy into a battlecard update or paste into a Slack channel before a deal review.

## The Current Workflow (Without Native Battlecard Export)

Most KompWatch users build battlecards with a two-layer approach:

1. **KompWatch handles ongoing monitoring.** Set up monitors on each competitor's homepage, pricing page, features page, and blog/newsroom. Configure CSS selectors to reduce noise. Run on the Pro plan for 6-hour snapshots.

2. **A lightweight template handles the document layer.** Google Docs, Notion, or a sales enablement tool like Highspot or Seismic holds the formatted battlecard. When KompWatch's digest flags a change, a team member (or your AI assistant) updates the relevant battlecard section.

This workflow takes about 10–15 minutes per update cycle vs. hours of manual research — which is the core value even without one-click export.

## Setting Up Battlecard-Optimized Monitoring

For competitive enablement specifically, add these URLs for each competitor:

| Page | Why it matters for battlecards |
|---|---|
| `/pricing` | Catches plan changes, price moves, and feature-gating shifts |
| `/features` or `/product` | Detects new capabilities before they show up in G2 reviews |
| `/customers` or `/case-studies` | New logos = new ICP signals |
| `/blog` or `/newsroom` | Funding, partnerships, product launches |
| `/careers` | Hiring patterns predict product direction |

Set a tight CSS selector (e.g. `.pricing-table`, `#features-grid`) rather than monitoring `body` — this surfaces high-signal changes instead of nav link tweaks.

## What About Klue and Crayon's Battlecard Builders?

Klue and Crayon include battlecard generation with a Salesforce-native workflow. If your sales team requires CRM-embedded battlecards with automated Salesforce sync, KompWatch doesn't replicate that today.

What KompWatch does replace: the underlying monitoring that powers those platforms, at 1–2% of the cost. Many teams use KompWatch for continuous competitor monitoring and author battlecards in their existing sales enablement tool — keeping the formats they've already trained reps on.

## One-Click Battlecard Export

KompWatch now generates a downloadable HTML battlecard directly from your competitor's change history — no copy-pasting required.

**How to use it:**

1. Go to **Competitors → [Competitor Name]**
2. Click the **Export Battlecard** button (next to the CSV/JSON export options)
3. A formatted HTML file downloads instantly — open it in any browser, or print to PDF from there

**What the battlecard includes:**

- Overview stats (total changes, high/critical count, monitoring period)
- Key intel section — all HIGH and CRITICAL severity changes with AI summaries
- Full change log — complete history ordered by recency
- Auto-detected platform badges (Slack, Teams, or generic)

The HTML file is self-contained and shareable — send it directly to your sales rep or attach it to a deal note in your CRM.

PDF and PowerPoint native export are on the future roadmap.

## Questions?

Email [support@kompwatch.com](mailto:support@kompwatch.com) with your competitor list and current battlecard workflow. We can suggest a monitoring setup that feeds your existing process with minimal overhead.

---
*Related: [Switching from Crayon](./switching-from-crayon.md) · [Switching from Klue](./switching-from-klue.md) · [Using Insights for Sales](./using-insights-for-sales.md) · [What Does KompWatch Track](./what-does-kompwatch-track.md)*
