# Preparing a Quarterly Competitive Landscape Report

The 90-day change history timeline gives you exactly the window you need for a quarterly competitive review. This guide shows how to turn three months of KompWatch data into a concise report for leadership, a board deck appendix, or a competitive strategy refresh.

---

## When to do this

- Q1/Q2/Q3/Q4 planning cycles
- Board or investor meetings where competitive context is expected
- Before a pricing update or product positioning review
- When onboarding a new executive who needs competitive context fast

---

## Step 1 — Export 90 days of change history

1. Go to [kompwatch.com/history](https://kompwatch.com/history)
2. Set the **Period** filter to **90 days**
3. Leave Competitor and Zone filters set to "All" for the full picture
4. Click **Export CSV** (top-right) to download the complete dataset

The CSV includes: date, competitor name, change type, severity, content zone, signal score, AI-generated summary, and the source page URL.

For cross-quarter comparisons or custom date ranges beyond 90 days, Pro and Team users can query longer windows via the API. Contact [support@kompwatch.com](mailto:support@kompwatch.com) if you need a longer export.

---

## Step 2 — Identify the high-signal moves

Open the CSV in your tool of choice (Google Sheets, Excel, Notion database, etc.) and filter to **severity = HIGH or CRITICAL**.

For each high-signal change, ask:
- Did this affect pricing, packaging, or feature availability?
- Did this signal a new segment or persona they're targeting?
- Did a burst of hiring changes (Jobs type) suggest a product area they're investing in?

Flag changes that represent a **strategic shift** vs. routine updates (copy tweaks, seasonal promotions, footer changes).

A typical quarter across five competitors generates 3–8 high-signal strategic moves. If you're seeing more, your CSS selectors may be too broad — narrow them to reduce noise. See [CSS Selector Targeting](./css-selectors.md).

---

## Step 3 — Structure the report

A useful quarterly competitive report has three sections:

### 3a. What changed this quarter (per competitor)
One short paragraph per monitored competitor. Summarize the 1–3 most significant changes detected. Use the AI-generated summaries from KompWatch as a starting point — edit for your audience.

Example:
> **Acme Corp** — raised Pro tier pricing by ~15% in February, added an "Enterprise" tier with SSO and SAML in March, and began heavy hiring for ML engineers (12 new postings detected). Likely shipping an AI-powered feature by Q3.

### 3b. What it means for us (cross-competitor patterns)
Look across all competitors for themes:
- Are multiple competitors moving upmarket simultaneously?
- Are several adding AI/ML features in the same content zone?
- Is anyone making a pricing move that creates an opening for us?

This is the section leadership cares most about. Connect the dots between changes, don't just list them.

### 3c. Recommended actions
No more than three. Each should have an owner and a rough timeframe.

---

## Step 4 — Add context from other signals

KompWatch tracks website changes. Pair it with:
- **Job postings** — filter the export to Change Type = **Jobs** for hiring signals
- **G2/Capterra reviews** — check review velocity and sentiment for the quarter (KompWatch can monitor review-site pages if you've added them as competitors)
- **LinkedIn announcements** — cross-reference any major feature launches against KompWatch's detection dates to verify you caught them

---

## Using the dashboard during the review

Before exporting, use the **History** page filters to quickly answer common leadership questions:

| Question | Filter to use |
|---|---|
| "What did [Competitor] do on pricing this quarter?" | Competitor = [Name], Zone = Monetization |
| "Any big product launches?" | Zone = Product, Severity = High/Critical |
| "Are they hiring aggressively?" | Change Type = Jobs |
| "What changed in their messaging?" | Zone = Positioning |

---

## How often to do this

| Plan | Recommended report cadence |
|---|---|
| Free | Quarterly (covers full 90-day window) |
| Pro | Quarterly + a shorter monthly summary for fast-moving markets |
| Team | Monthly, with a quarterly deep-dive for planning cycles |

On the **Pro and Team plans**, the 90-day default covers a full quarter. Pro users can access 1 year of history; Team users 2 years — useful for year-over-year comparisons in annual planning.

---

## Related articles

- [Using the Change History Timeline](./using-the-change-history-timeline.md) — how to navigate and filter the /history page
- [Running a Weekly Competitive Review](./running-a-weekly-competitive-review.md) — the operational cadence between quarterly reports
- [Exporting Your Data](./exporting-your-data.md) — export formats and field reference
- [Using KompWatch Insights for Executives](./using-insights-for-executives.md) — tailoring output for C-level audiences
- [Responding to a Major Competitor Move](./responding-to-a-major-competitor-move.md) — when a change can't wait for the quarterly review

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
