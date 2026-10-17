# Can I Export KompWatch Change History Into My CRM or a Win/Loss Report?

**Short answer:** Yes. Every change entry can be shared, exported, or copied from the Change History view. Here's how.

---

## Export Options

### 1. Share as a link (quickest)
Each change entry in KompWatch has a **Share** button that generates a shareable URL pointing to that specific change. Paste the link into a CRM deal record, Notion page, or Slack message. Anyone with the link can view the AI summary and the diff without needing a KompWatch account.

### 2. Copy as plain text
From any change entry or digest, click **Copy summary** to grab the AI-generated plain-English description. This is what most teams paste into a CRM freeform field ("competitive context" or "deal notes") directly on the Closed-Lost record.

### 3. Export filtered history as PDF
On the **Change History** page (`/history`), filter by competitor and date range (e.g., the 60-day window before a deal closed), then click **Export → PDF**. The exported PDF includes the change type, severity, AI summary, and detection timestamp for every entry in the filtered view. Teams that run formal quarterly win/loss reviews often export this as an appendix.

### 4. Export as CSV (Pro and Team plans)
Pro and Team plan subscribers can export the filtered change history as a `.csv` file with columns: `competitor`, `changeType`, `severity`, `detectedAt`, `summary`, `url`. Import directly into a Notion table, Airtable base, or spreadsheet-based win/loss tracker.

---

## Practical Workflow: Attaching KompWatch Data to CRM Deals

Most teams use this 2-minute routine on every Closed-Lost deal:

1. Open the competitor in KompWatch → **Change History**
2. Filter date range to **30–60 days before the deal closed**
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
