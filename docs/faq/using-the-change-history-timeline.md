# Using the Change History Timeline

The **Change History** page (`/history`) gives you a scrollable, week-by-week view of every competitor change KompWatch has detected — with filters to zero in on what matters and export options to share the data downstream.

## How to Access It

Go to [kompwatch.com/history](https://kompwatch.com/history) from any page in the dashboard, or click **History** in the left sidebar.

## What You'll See

At the top, four summary cards give you a quick read on the selected period:

| Card | What it shows |
|------|--------------|
| **Total changes** | Number of changes detected, with a % trend vs. the prior period |
| **High impact** | Count of HIGH + CRITICAL severity changes |
| **Weeks covered** | How many weeks in the period had at least one change |
| **Avg per week** | Changes ÷ weeks elapsed — a useful baseline for "normal" competitor activity |

Below the cards, a **severity breakdown bar** shows the proportion of Critical / High / Medium / Low changes at a glance.

The main area is a **timeline grouped by week**, with each week header showing total changes and a high-impact badge if any HIGH or CRITICAL events occurred. Within each week, changes are ordered newest-first and display:

- Competitor name
- Change type (Pricing, Feature, Blog, Jobs, Tech, General, Community)
- Severity badge (Low / Medium / High / Critical)
- Signal score label (Strong signal, Weak signal, etc.)
- Content zone tag (Positioning, Monetization, Product, Marketing, Talent, Legal, Ops)
- An AI-written summary
- A **"Why this matters"** explanation when available
- A direct link to the tracked page

## Filtering the Timeline

Four filter controls let you narrow the view without leaving the page:

- **Period** — 7 days, 30 days, or 90 days (default: 90 days)
- **Competitor** — filter to one or more specific competitors
- **Zone** — show only changes in a particular content zone (e.g., Monetization to track pricing moves)
- **Change type** — show only Pricing, Feature, Jobs, etc.

Filters combine: selecting "Monetization" zone + "Acme Corp" competitor shows only pricing/monetization changes for that one competitor.

## Exporting History Data

When changes are present, **Export CSV** and **Export JSON** buttons appear in the top-right. Both exports include:

- Date, competitor name, change type, severity, content zone, signal score
- The full AI-generated summary
- Page URL where the change was detected

Raw HTML snapshots are not included in exports. For snapshot-level data, use the Snapshot History tab on the individual competitor detail page.

## How Far Back Does It Go?

The history page respects your plan's change log retention:

| Plan | Max lookback |
|------|-------------|
| Free | 90 days |
| Pro | 1 year |
| Team | 2 years |

The period selector is limited to 90 days, but Pro and Team users can query longer ranges via the API. If you need a longer historical export, contact [support@kompwatch.com](mailto:support@kompwatch.com).

## Minimum Severity Filter

If you've configured a minimum severity level in your account settings (Settings → Notifications), the history page respects that setting — changes below your threshold won't appear. To see all changes, temporarily set your minimum severity to **Low** in settings.

## Difference Between History and Digests

- **History** — every detected change, filterable and searchable, no cadence limit
- **Digests** — a curated AI summary delivered to your inbox on your plan's schedule (weekly for Free, daily for Pro, real-time for Team), viewable at [kompwatch.com/digests](https://kompwatch.com/digests)

Use History for deep-dive research; use Digests for a regularly scheduled briefing.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
