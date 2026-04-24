# Exporting Your Change Data

KompWatch lets you export detected changes as **CSV** or **JSON** — useful for sharing competitive intel with your team, building reports in Excel or Google Sheets, or piping data into your own tools and workflows.

## How to Export

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
