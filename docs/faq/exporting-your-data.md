# Exporting Your Change Data

KompWatch lets you export detected changes as a CSV file — useful for sharing competitive intel with your team, building reports in Excel or Google Sheets, or importing into other tools.

## How to Export

### Export All Changes (Dashboard)

1. Go to your [dashboard](https://kompwatch.com/dashboard)
2. Click the **Export CSV** button near the top of the page
3. A CSV file will download immediately containing all your detected changes

### Export Changes for One Competitor

1. Go to the [Competitors page](https://kompwatch.com/competitors) and click on a competitor
2. On the competitor detail page, click **Export CSV**
3. The download will contain only changes for that competitor

## What's Included in the CSV

Each row represents one detected change. Columns:

| Column | Description |
|--------|-------------|
| **Date** | When the change was detected (ISO 8601 format) |
| **Competitor** | The competitor's name |
| **Type** | Change type — `Pricing`, `Feature`, `Blog`, `Jobs`, `Tech`, or `General` |
| **Severity** | `LOW`, `MEDIUM`, `HIGH`, or `CRITICAL` |
| **Summary** | AI-generated plain-English description of what changed |
| **Page URL** | The specific page where the change was detected |

## Tips

- **Filter before exporting.** On the competitor detail page, use the severity filter or change type tabs to narrow changes down before exporting — the CSV reflects the current filtered view.
- **Share with stakeholders.** The CSV opens cleanly in Excel and Google Sheets — ideal for weekly competitive review meetings.
- **Combine with digest emails.** Use CSV exports for ad-hoc deep-dives; use digest emails for routine monitoring.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
