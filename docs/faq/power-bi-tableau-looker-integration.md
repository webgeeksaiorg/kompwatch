# Visualizing Competitor Change Data in Power BI, Tableau, or Looker

KompWatch doesn't have a native Power BI, Tableau, or Looker Studio connector. However, you can get your competitor change data into any BI or analytics tool via two paths: **Google Sheets as a live data source**, or **direct database / API export**.

## Why Analytics Teams Want This

- Build competitor change dashboards that update automatically
- Correlate competitor activity with your own pipeline, churn, or win/loss data
- Show the executive team a visual competitive timeline — not just email digests
- Combine KompWatch data with Salesforce, HubSpot, or revenue data in a single view

---

## Path 1 — Google Sheets as a Live Data Source (Easiest)

This works for **Power BI**, **Looker Studio**, **Tableau**, and virtually any BI tool with a Sheets connector.

### Step 1 — Route KompWatch alerts to Google Sheets

Set up the Google Sheets integration first: [Logging Competitor Changes to Google Sheets →](./google-sheets-integration.md)

Once complete, every KompWatch change alert lands as a new row in your Sheet automatically via Zapier, Make.com, or n8n.

### Step 2 — Connect the Sheet to your BI tool

**Power BI:**
1. In Power BI Desktop, click **Get Data → Google Sheets**
2. Paste your Google Sheet URL and authenticate
3. Load the sheet as a table — map columns to your data model
4. Set a refresh schedule in Power BI Service (15-minute minimum for Pro, or use DirectQuery)

**Looker Studio (Google Data Studio):**
1. Create a new report → **Add data → Google Sheets**
2. Select your spreadsheet and sheet tab
3. Looker Studio auto-detects column types; set Date as your time dimension and Severity as a dimension
4. Build charts: bar chart by Competitor, timeline by Date, scorecard for total HIGH changes this month

**Tableau:**
1. In Tableau Desktop, click **Connect → To a Server → Google Sheets** (requires Google Sheets connector)
2. Authenticate and select your sheet
3. Or export the Sheet as CSV and connect via **Text File** for a one-time snapshot

**Metabase / Redash / Superset:**
Use the Google Sheets → CSV export or the Sheets API connector that most self-hosted BI tools support.

---

## Path 2 — Export via KompWatch's Data Export (Pro/Team)

KompWatch's **Settings → Export** lets you download your change history as a CSV (all changes, or filtered by date range, competitor, or severity).

1. Go to **Settings → Export Data**
2. Choose a date range and optional filters (competitor, change type, severity)
3. Download the CSV
4. Import into Power BI Desktop: **Get Data → Text/CSV**
5. Import into Tableau Desktop: **Connect → Text File**

This is a manual, point-in-time snapshot — not a live connection. Use the Google Sheets path (Path 1) for dashboards that need to stay current.

See [Exporting Your Data →](./exporting-your-data.md) for full details on what's included in the export and how to use it for quarterly reviews.

---

## Path 3 — Webhook → Data Warehouse (Advanced / Team Plan)

For teams with a data warehouse (Snowflake, BigQuery, Redshift), you can route KompWatch webhooks directly into your warehouse pipeline and query from any BI tool.

**Using n8n or Make.com as an ETL bridge:**

1. Set up a KompWatch webhook → n8n/Make.com trigger (as in the Zapier integration guide)
2. Add a transform step to normalize the payload
3. Write to BigQuery (Make.com or n8n have native BigQuery nodes) or POST to a Snowflake staging endpoint

**Using a serverless function:**
- AWS Lambda or Cloudflare Workers can receive the KompWatch webhook and INSERT into your data warehouse in real-time
- See [Webhook Payload Format →](./webhook-payload-format.md) for the full schema to map to your table structure

Once in the warehouse, connect any BI tool (Power BI, Tableau, Looker, Metabase) using their native database connector.

---

## Recommended Dashboard Metrics

If you're building a competitor change dashboard, here are the most useful views:

| Metric | How to build it |
|---|---|
| Changes over time | Line/bar chart by `Date` grouped by week |
| Changes by competitor | Bar chart by `competitor.name`, count of records |
| Changes by type | Pie or bar chart by `change.changeType` |
| High-severity changes this month | Filter `Severity = HIGH`, count |
| Pricing changes in last 90 days | Filter `changeType = PRICING`, timeline view |
| Change velocity (are competitors speeding up?) | Week-over-week count comparison |

---

## Tips

**Looker Studio is the fastest option** if you're already using Google Workspace — connect to your KompWatch Sheets feed and have a live dashboard in under 30 minutes, free.

**For Power BI Service**, use the scheduled refresh to pull from Google Sheets every 15 minutes. Combine with your CRM data (import from Salesforce) to correlate competitor pricing changes with closed-lost deals.

**For Tableau**, the Google Sheets connector requires a subscription — if you're on Tableau Public, export the CSV instead.

---

## Related

- [Google Sheets Integration →](./google-sheets-integration.md)
- [Exporting Your Data →](./exporting-your-data.md)
- [Webhook Payload Format →](./webhook-payload-format.md)
- [Automating KompWatch with Zapier, Make.com, or n8n →](./zapier-make-n8n-automation.md)
- [Preparing a Quarterly Competitive Report →](./preparing-a-quarterly-competitive-report.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
