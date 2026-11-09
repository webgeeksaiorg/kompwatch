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
| Type | `Pricing`, `Feature`, `Blog`, `Jobs`, `Tech`, `General`, or `Community` |
| Severity | `LOW`, `MEDIUM`, `HIGH`, or `CRITICAL` |
| Summary | AI-generated description of the change |
| Page URL | The specific page where the change was detected |

> **Tip:** Use PDF for presentations and stakeholder updates. Use CSV if you're loading into a spreadsheet or BI tool for further analysis.

---

## Change Export (CSV or JSON)

### Export Filtered Changes (History page — recommended)

The best way to get a focused export is from the **Change History** page, which respects whatever filters you have active:

1. Go to [kompwatch.com/history](https://kompwatch.com/history)
2. Set your filters — period (7d / 30d / 90d), competitor, zone, or change type
3. Click **Export CSV** or **Export JSON** — the download matches exactly what's on screen

The export automatically applies your account's **minimum severity** setting (from Settings → Notifications), so the file mirrors what you see.

### Export All Changes (Dashboard)

1. Go to your [dashboard](https://kompwatch.com/dashboard)
2. Near the "Recent changes" heading, click either **Export CSV** or **Export JSON**
3. The file downloads immediately containing all your detected changes

### Export Changes for One Competitor

1. Go to the [Competitors page](https://kompwatch.com/competitors) and click on a competitor
2. On the competitor detail page, click **Export CSV** or **Export JSON**
3. The download will contain only changes for that competitor (no severity floor applied)

### Export via API

For programmatic access, call the export endpoint directly:

```bash
# All changes (CSV, no filters)
curl -H "Cookie: <session>" https://kompwatch.com/api/export/changes

# JSON
curl -H "Cookie: <session>" "https://kompwatch.com/api/export/changes?format=json"

# Filter by period, zone, change type (multi-value supported)
curl -H "Cookie: <session>" \
  "https://kompwatch.com/api/export/changes?format=csv&period=30d&zone=MONETIZATION&changeType=PRICING"

# Filter by specific competitor(s) — repeat param for multiple
curl -H "Cookie: <session>" \
  "https://kompwatch.com/api/export/changes?format=json&competitor=<id1>&competitor=<id2>"

# Override severity floor (e.g. export all severities regardless of account setting)
curl -H "Cookie: <session>" \
  "https://kompwatch.com/api/export/changes?format=csv&period=90d&minSeverity=LOW"

# Legacy: single competitor by ID (no severity floor applied)
curl -H "Cookie: <session>" "https://kompwatch.com/api/export/changes?format=json&competitorId=<id>"
```

**Valid values:**
- `period`: `7d`, `30d`, `90d`, `all` (default: `all`)
- `zone`: `POSITIONING`, `MONETIZATION`, `PRODUCT`, `MARKETING`, `TALENT`, `LEGAL`, `OPERATIONS`
- `changeType`: `PRICING`, `FEATURE`, `BLOG`, `JOB`, `TECH`, `GENERAL`, `COMMUNITY`
- `minSeverity`: `LOW`, `MEDIUM`, `HIGH`, `CRITICAL`

## What's Included

Each change record contains the same fields in both formats:

| Field | Description |
|-------|-------------|
| **Date** | When the change was detected (ISO 8601 format) |
| **Competitor** | The competitor's name |
| **Competitor URL** | The competitor's root URL |
| **Type** | Change type — `PRICING`, `FEATURE`, `BLOG`, `JOB`, `TECH`, `GENERAL`, or `COMMUNITY` |
| **Zone** | Content zone — `POSITIONING`, `MONETIZATION`, `PRODUCT`, `MARKETING`, `TALENT`, `LEGAL`, or `OPERATIONS` |
| **Severity** | `LOW`, `MEDIUM`, `HIGH`, or `CRITICAL` |
| **Confidence** | AI confidence score (0–100) |
| **Signal Score** | Composite signal relevance score (0–100) |
| **Summary** | AI-generated plain-English description of what changed |
| **Page URL** | The specific page where the change was detected |

JSON exports also include `exportedAt` (ISO timestamp) and `count` (total changes in the payload) at the top level.

## Tips

- **Filter on History before exporting.** Set your period, zone, and change type on the [/history](https://kompwatch.com/history) page, then export — the CSV will match exactly what you see on screen.
- **Use CSV** for quick sharing with non-technical stakeholders — opens cleanly in Excel and Google Sheets.
- **Use JSON** when piping exports into scripts, BI tools, or custom dashboards — every field is structured and typed.
- **Use `period=all` in the API** to get every change ever recorded (up to your plan's retention limit and the 5,000-row cap).
- **Combine with digest emails.** Use exports for ad-hoc deep-dives; use digest emails for routine monitoring.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
