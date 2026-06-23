# Logging Competitor Changes to Airtable

KompWatch doesn't have a native Airtable integration, but you can route every competitor change alert to an Airtable base automatically — no code required — using **Zapier**, **Make.com**, or **n8n** as the bridge.

## Why Use Airtable for Competitor Change Tracking?

- Build a structured, filterable change log that your whole team can contribute to
- Attach notes, response actions, and owner fields to each change record
- Use Airtable views to filter by severity, competitor, or change type
- Link change records to battle cards, deal records, or product roadmap items in the same base
- Build Airtable dashboards or connect to downstream reporting via Looker Studio

## Prerequisites

- A **Pro or Team** KompWatch plan (webhooks are not available on Free)
- An Airtable account (any paid tier works; Free works for small volumes)
- An account on Zapier, Make.com, or n8n

---

## Recommended Airtable Base Structure

Before connecting KompWatch, set up your Airtable base with these fields:

| Field name | Field type | Notes |
|---|---|---|
| Date | Date | Auto-filled from `sentAt` |
| Competitor | Single line text | Auto-filled from `competitor.name` |
| URL Monitored | URL | Auto-filled from `competitor.monitoredUrl` |
| Change Type | Single select | `PRICING / FEATURE / CONTENT / VISUAL` |
| Severity | Single select | `HIGH / MEDIUM / LOW` — colour-code these |
| Summary | Long text | AI-generated summary from KompWatch |
| Confidence | Number | AI confidence score (0–1) |
| KompWatch Link | URL | Deep-link to the change detail in KompWatch |
| Status | Single select | `New / Investigating / Responded / Dismissed` |
| Owner | Collaborator | Who's handling the response? |
| Notes | Long text | Free text for team notes |

---

## Option A — Zapier (Easiest)

### Step 1 — Create a Zapier webhook trigger

1. In Zapier, click **+ Create → Zap**
2. Trigger: **Webhooks by Zapier → Catch Hook**
3. Copy the generated webhook URL

### Step 2 — Connect to KompWatch

1. Go to **Settings → Slack & Webhook Integration**
2. Paste the Zapier URL into the webhook field → **Save**
3. Click **Send test** — this fires a sample payload to Zapier
4. In Zapier, click **Test trigger** to confirm the payload arrived

### Step 3 — Add the Airtable action

1. Add action: **Airtable → Create Record**
2. Connect your Airtable account and select your base and table
3. Map KompWatch payload fields to your Airtable columns:

| Airtable field | KompWatch payload field |
|---|---|
| Date | `sentAt` |
| Competitor | `competitor.name` |
| URL Monitored | `competitor.monitoredUrl` |
| Change Type | `change.changeType` |
| Severity | `change.severity` |
| Summary | `change.summary` |
| Confidence | `change.confidence` |
| KompWatch Link | `change.viewUrl` |
| Status | `New` *(hardcoded default)* |

4. (Optional) Add a **Filter** step before the Airtable action to only log HIGH or MEDIUM severity changes — this keeps your base clean and avoids noise from minor cosmetic changes.

5. Test and publish the Zap.

---

## Option B — Make.com (More Flexible)

1. Create a new scenario in Make.com
2. Add a **Webhooks → Custom webhook** module as the trigger — copy the URL
3. Paste into KompWatch **Settings → Slack & Webhook Integration** and send a test
4. Add an **Airtable → Create a Record** module
5. Map fields as above and activate the scenario

Make.com is a good choice if you want to add conditional logic — for example, only creating a record when `change.changeType == "PRICING"`, or looking up an existing record to update it rather than always creating new ones.

---

## Option C — n8n (Self-Hosted / Developer)

1. Create a new workflow with a **Webhook** trigger node
2. Copy the webhook URL and paste into KompWatch, fire a test
3. Add an **Airtable → Append** node
4. Map fields and activate the workflow

n8n is ideal if you're self-hosting, need to enrich the payload before logging (e.g., add CRM data or tag records based on deal stage), or want to avoid per-task Zapier billing.

---

## Tips

**Use Airtable's Automations to alert your team:** Inside Airtable, set up a native automation: when a record is created with `Severity = HIGH`, send a Slack message or email to your competitive team. This gives you a two-layer system — KompWatch fires the webhook, Zapier creates the Airtable record, Airtable then alerts humans.

**Build a Kanban view by Status:** Set a Kanban view using the `Status` field so your team can drag changes from `New → Investigating → Responded`. This is a simple but effective competitive response workflow.

**Use Grouping for weekly reviews:** Group your Airtable view by `Week (Date)` to run quick weekly competitive reviews. Sort by `Severity` descending so the most important changes surface first.

**Set a Gallery view for visual changes:** For `Change Type = VISUAL`, use an Airtable Gallery view to see the changes visually — if you're using `change.screenshotUrl` from the webhook payload.

---

## Related

- [Webhook Payload Format →](./webhook-payload-format.md)
- [Automating KompWatch with Zapier, Make.com, or n8n →](./zapier-make-n8n-automation.md)
- [Google Sheets Integration →](./google-sheets-integration.md)
- [Filtering Digests by Severity →](./filtering-digests-by-severity.md)
- [Running a Weekly Competitive Review →](./running-a-weekly-competitive-review.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
