# Logging Competitor Changes to Google Sheets

You can automatically log every KompWatch change alert to a Google Sheet — no code required. Use **Zapier**, **Make.com (Integromat)**, or **n8n** as the bridge.

## Why Log Changes to a Sheet?

- Build a rolling change log your whole team can filter and sort
- Attach notes, owner assignments, and response actions alongside each alert
- Feed a dashboard in Looker Studio, Google Data Studio, or similar tools
- Export for quarterly competitive reviews or board presentations

## Prerequisites

- A **Pro or Team** KompWatch plan (webhooks are not available on Free)
- A Google account with Sheets access
- An account on Zapier, Make.com, or n8n

---

## Option A — Zapier (Easiest)

### Step 1 — Create a Webhook trigger in Zapier

1. In Zapier, click **+ Create → Zap**
2. Search for **Webhooks by Zapier** → choose **Catch Hook**
3. Copy the generated webhook URL (starts with `https://hooks.zapier.com/…`)

### Step 2 — Connect to KompWatch

1. Go to **Settings → Slack & Webhook Integration**
2. Paste the Zapier URL into the webhook field → **Save**
3. Click **Send test** — this fires a sample `change.detected` payload to Zapier
4. In Zapier, click **Test trigger** to confirm the payload arrived

### Step 3 — Add a Google Sheets action

1. Add a new action: search for **Google Sheets → Create Spreadsheet Row**
2. Choose or create your destination spreadsheet and sheet tab
3. Map KompWatch payload fields to columns:

| Recommended column | Payload field |
|---|---|
| Date | `sentAt` |
| Competitor | `competitor.name` |
| URL Monitored | `competitor.monitoredUrl` |
| Change Type | `change.changeType` |
| Severity | `change.severity` |
| Summary | `change.summary` |
| Confidence | `change.confidence` |
| KompWatch Link | `change.viewUrl` |
| Notes | *(leave blank — fill manually)* |

4. Test and publish the Zap

Every new KompWatch change alert will now appear as a new row in your sheet within seconds.

---

## Option B — Make.com (More Flexible)

1. Create a new scenario in Make.com
2. Add a **Webhooks → Custom webhook** module as your trigger — copy the URL
3. Paste the URL into KompWatch **Settings → Slack & Webhook Integration** and send a test
4. Add a **Google Sheets → Add a Row** module as the next step
5. Map the same fields as the Zapier table above
6. Set the scenario to run **immediately** (not on a schedule) and activate it

---

## Option C — n8n (Self-Hosted / Code-Friendly)

1. In n8n, create a new workflow with a **Webhook** trigger node
2. Copy the webhook URL, paste it into KompWatch, send a test
3. Add a **Google Sheets → Append Row** node
4. Map fields and activate the workflow

n8n is ideal if you're self-hosting or need to transform the payload before writing to Sheets (e.g., filtering by severity, enriching with CRM data).

---

## Tips

**Filter by severity before logging:** In Zapier, add a **Filter** step after the trigger — only continue if `change.severity` equals `HIGH`. This keeps your sheet focused on the changes that matter.

**Add a "Status" column with a dropdown:** In Sheets, use Data Validation to add options like `New / Investigating / Responded / Dismissed`. This turns the sheet into a lightweight change-response tracker.

**Auto-notify via Slack from the sheet:** Use a Zapier multi-step Zap (or Make scenario) to post to Slack *and* log to Sheets from the same webhook event — no need for two separate webhooks.

**Colour-code by severity:** Use Google Sheets conditional formatting to highlight HIGH rows in red, MEDIUM in amber, LOW in green.

---

## Related

- [Webhook Payload Format →](./webhook-payload-format.md)
- [Automating KompWatch with Zapier, Make.com, or n8n →](./zapier-make-n8n-automation.md)
- [Slack Notifications →](./slack-notifications.md)
- [Filtering Digests by Severity →](./filtering-digests-by-severity.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
