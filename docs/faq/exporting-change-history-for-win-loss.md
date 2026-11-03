# Can I Export KompWatch Change History Into My CRM or a Win/Loss Report?

**Short answer:** Yes. Every change entry can be shared, exported, or copied from the Change History view. Here's how.

---

## Export Options

### 1. Share as a link (quickest)
Each change entry in KompWatch has a **Share** button that generates a shareable URL pointing to that specific change. Paste the link into a CRM deal record, Notion page, or Slack message. Anyone with the link can view the AI summary and the diff without needing a KompWatch account.

### 2. Copy as plain text
From any change entry or digest, click **Copy summary** to grab the AI-generated plain-English description. This is what most teams paste into a CRM freeform field ("competitive context" or "deal notes") directly on the Closed-Lost record.

### 3. Export filtered history as CSV or JSON (recommended)
On the **Change History** page (`/history`), filter by competitor, date range, zone, and change type, then click **Export CSV** or **Export JSON**. The export matches exactly what's on screen — so you can narrow to "pricing changes for Acme Corp in the last 30 days" and download only those rows.

Exported files include: date, competitor name, change type, severity, **content zone**, **confidence score**, **signal score**, AI-generated summary, and page URL.

> **Pro tip for win/loss prep:** Use the **Monetization** zone filter to isolate pricing and packaging changes. These are the moves most likely to have affected deal outcomes.

### 4. Export as PDF
On the **Change History** page, filter the view and then export as PDF for a formatted report — useful as an appendix in quarterly win/loss reviews or when sharing with executives who prefer documents over spreadsheets.

### 5. Via API (programmatic)
For scripted or automated exports, call the endpoint directly:

```bash
# CSV: pricing changes in last 30 days for one competitor
curl -H "Cookie: <session>" \
  "https://kompwatch.com/api/export/changes?format=csv&period=30d&zone=MONETIZATION&competitor=<id>"

# JSON: all changes across all competitors, last 90 days
curl -H "Cookie: <session>" \
  "https://kompwatch.com/api/export/changes?format=json&period=90d"
```

See [Exporting Your Data →](exporting-your-data.md) for the full list of supported query parameters.

---

## Practical Workflow: Attaching KompWatch Data to CRM Deals

Most teams use this 2-minute routine on every Closed-Lost deal:

1. Open [kompwatch.com/history](https://kompwatch.com/history)
2. Filter: set period to **30–60 days before the deal closed**, set competitor to the relevant rival, set zone to **Monetization** (to surface pricing changes first)
3. Sort by severity (HIGH first)
4. Copy the top 1–3 relevant summaries
5. Paste into the CRM deal record under a custom field (e.g., `Competitor Change Context` in Salesforce or HubSpot)

After 60–90 days you'll have a searchable CRM dataset of competitor moves correlated with deal outcomes — with zero analyst hours and no SaaS contracts beyond KompWatch itself.

---

## Direct CRM/Tool Integration (Roadmap)

KompWatch does not currently have native API integration with Salesforce, HubSpot, Gong, or Klue. These are on the roadmap. If direct integration is critical for your win/loss program, email [support@kompwatch.com](mailto:support@kompwatch.com) — volume of requests influences prioritization.

In the meantime, the manual export path works reliably for teams running 20–50 deals per quarter. For higher deal volumes, the CSV export is typically the right bridge until the native integration ships.

---

## Related FAQs

- [Can I Use KompWatch for Win/Loss Analysis?](./win-loss-analysis-with-competitor-monitoring.md)
- [Which competitor changes predict deal losses?](./which-competitor-changes-predict-deal-losses.md)
- [Using the change history timeline](./using-the-change-history-timeline.md)
- [Exporting your data](./exporting-your-data.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we respond within 24 hours.*
