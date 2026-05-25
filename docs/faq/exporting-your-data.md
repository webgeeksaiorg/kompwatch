# Exporting Your Data

KompWatch lets you export competitive intelligence in two ways:

- **Digest export (PDF or CSV)** — download a formatted report for a specific digest to share with your team or store in a shared folder
- **Change export (CSV or JSON)** — export raw change records for custom analysis, BI tools, or spreadsheets

> **Battlecard Export (Coming Soon):** One-click HTML battlecard export is on the roadmap and not yet available. Until it ships, export changes as JSON and paste the `summary` field into your battlecard template. See [Creating Sales Battlecards →](creating-sales-battlecards.md) for the manual workflow.

---

## Digest Export (PDF or CSV)

Download any individual digest as a shareable report — useful for weekly CI reviews, stakeholder updates, or archiving a snapshot of competitor activity.

### From the Digests page

1. Go to [kompwatch.com/digests](https://kompwatch.com/digests)
2. Click on a digest to open it
3. Click **Export PDF** or **Export CSV** — the file downloads immediately

### Via API

```bash
# PDF (default)
curl -H "Cookie: <session>" \
  "https://kompwatch.com/api/export/digests?digestId=<id>&format=pdf" \
  -o kompwatch-digest.pdf

# CSV
curl -H "Cookie: <session>" \
  "https://kompwatch.com/api/export/digests?digestId=<id>&format=csv" \
  -o kompwatch-digest.csv
```

The filename is automatically set to `kompwatch-digest-YYYY-MM-DD.pdf` (or `.csv`).

### What's in the digest export?

**PDF** — a formatted report including:
- Digest subject, period, and generation date
- Each change with severity color-coding (Critical = red, High = orange, Medium = blue, Low = gray)
- Competitor name, AI summary, change type badge, and timestamp
- Automatic page breaks for multi-page digests

**CSV** — flat data with columns:

| Column | Description |
|--------|-------------|
| Date | When the change was detected (ISO 8601) |
| Competitor | Competitor name |
| URL | Competitor root URL |
| Type | `CONTENT`, `VISUAL`, `PRICING`, or `FEATURE` |
| Severity | `LOW`, `MEDIUM`, `HIGH`, or `CRITICAL` |
| Summary | AI-generated description of the change |
| Page URL | The specific page where the change was detected |

> **Tip:** Use PDF for presentations and stakeholder updates. Use CSV if you're loading into a spreadsheet or BI tool for further analysis.

---

## Change Export (CSV or JSON)

### Export All Changes (Dashboard)

1. Go to your [dashboard](https://kompwatch.com/dashboard)
2. Near the "Recent changes" heading, click either **Export CSV** or **Export JSON**
3. The file downloads immediately containing all your detected changes

### Export Changes for One Competitor

1. Go to the [Competitors page](https://kompwatch.com/competitors) and click on a competitor
2. On the competitor detail page, click **Export CSV** or **Export JSON**
3. The download will contain only changes for that competitor

### Export via API

For programmatic access, call the export endpoint directly:

```bash
# CSV (default)
curl -H "Cookie: <session>" https://kompwatch.com/api/export/changes

# JSON
curl -H "Cookie: <session>" "https://kompwatch.com/api/export/changes?format=json"

# Filter by competitor
curl -H "Cookie: <session>" "https://kompwatch.com/api/export/changes?format=json&competitorId=<id>"
```

## What's Included

Each change record contains the same fields in both formats:

| Field | Description |
|-------|-------------|
| **Date** | When the change was detected (ISO 8601 format) |
| **Competitor** | The competitor's name |
| **Competitor URL** | The competitor's root URL |
| **Type** | Change type — `Pricing`, `Feature`, `Blog`, `Jobs`, `Tech`, or `General` |
| **Severity** | `LOW`, `MEDIUM`, `HIGH`, or `CRITICAL` |
| **Summary** | AI-generated plain-English description of what changed |
| **Page URL** | The specific page where the change was detected |

JSON exports also include `exportedAt` (ISO timestamp) and `count` (total changes in the payload) at the top level.

## Tips

- **Use CSV** for quick sharing with non-technical stakeholders — opens cleanly in Excel and Google Sheets.
- **Use JSON** when piping exports into scripts, BI tools, or custom dashboards — every field is structured and typed.
- **Filter before exporting.** On the competitor detail page, use the severity filter or change type tabs to narrow results down first.
- **Combine with digest emails.** Use exports for ad-hoc deep-dives; use digest emails for routine monitoring.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
