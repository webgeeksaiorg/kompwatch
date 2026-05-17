# Automating KompWatch with Zapier, Make.com, or n8n

KompWatch sends a JSON webhook payload every time a change is detected (Pro and Team plans). You can connect that webhook to any no-code automation platform — Zapier, Make.com (formerly Integromat), n8n, and others — to build custom workflows without writing code.

## What You'll Need

- A **Pro or Team** KompWatch plan (webhooks are not available on Free)
- An account on your automation platform of choice
- Your KompWatch webhook URL (generated in your automation tool and pasted into **Settings → Slack & Webhook Integration**)

---

## Zapier

### Step 1 — Create a Zap trigger

1. In Zapier, click **+ Create → Zaps**
2. Search for and select **Webhooks by Zapier** as your trigger app
3. Choose **Catch Hook** as the trigger event
4. Copy the custom webhook URL Zapier generates (starts with `https://hooks.zapier.com/…`)

### Step 2 — Connect to KompWatch

1. In KompWatch, go to **Settings → Slack & Webhook Integration**
2. Paste the Zapier URL into the webhook field
3. Click **Send test** — this fires a sample payload to Zapier so it can learn the data shape
4. Back in Zapier, click **Test trigger** to confirm the payload arrived

### Step 3 — Build your action

Common Zapier actions after a KompWatch change alert:

| If you want to… | Use this Zapier action |
|---|---|
| Log changes to a spreadsheet | Google Sheets → Create Row |
| Create a task for follow-up | Trello → Create Card / Asana → Create Task |
| Alert a Slack channel | Slack → Send Channel Message |
| Add to a CRM | HubSpot → Create Note / Salesforce → Create Task |
| Send a summary email | Gmail → Send Email |
| Notify via SMS | Twilio → Send SMS |

### Useful Zapier payload fields

KompWatch sends these fields (see [Webhook Payload Format →](./webhook-payload-format.md) for the full schema):

- `competitor.name` — e.g. "Klue"
- `change.summary` — AI-generated summary of the detected change
- `change.severity` — `LOW`, `MEDIUM`, or `HIGH`
- `change.changeType` — `CONTENT`, `PRICING`, `FEATURE`, or `VISUAL`
- `change.detectedAt` — ISO timestamp
- `competitor.url` — the monitored page URL

---

## Make.com (formerly Integromat)

### Step 1 — Create a scenario

1. In Make.com, click **+ Create a new scenario**
2. Click the **+** to add a module, search for **Webhooks**, and select **Custom webhook**
3. Click **Add** → give it a name → copy the generated URL

### Step 2 — Connect to KompWatch

1. In KompWatch **Settings → Slack & Webhook Integration**, paste the Make.com URL
2. Click **Send test** to send a sample payload
3. Back in Make.com, click **OK** — Make.com will detect the data structure automatically

### Step 3 — Add modules

Make.com "modules" chain together. Common flows:

- **KompWatch → Google Sheets** — append a row for every change detected
- **KompWatch → Slack** — post a custom-formatted message to a channel
- **KompWatch → HTTP** — forward the payload to an internal API or Notion database
- **KompWatch → Filter → Email** — only send an email if `change.severity = HIGH`

**Tip:** Add a **Filter** module after the webhook trigger to only process changes above a severity threshold:
- Field: `change.severity`
- Condition: `Equal to`
- Value: `HIGH`

---

## n8n (self-hosted or cloud)

### Step 1 — Create a workflow

1. In n8n, create a new workflow
2. Add a **Webhook** node as your trigger
3. Set **HTTP Method** to `POST` and copy the webhook URL

### Step 2 — Connect to KompWatch

1. Paste the n8n URL into KompWatch **Settings → Slack & Webhook Integration**
2. Click **Send test**
3. In n8n, click **Execute Workflow** to capture the test payload

### Step 3 — Add nodes

n8n supports hundreds of integrations. Useful combinations:

- **Webhook → IF node → Slack** — post to Slack only for HIGH severity
- **Webhook → Google Sheets** — log every change with timestamp
- **Webhook → Code node** — write custom JS to transform the payload before passing it on
- **Webhook → Notion** — append a block to a competitive intelligence database

---

## Triggering Only on Specific Severities or Competitors

KompWatch sends all change events to your webhook. To filter in your automation tool:

- **By severity:** filter on `change.severity == "HIGH"` (or `MEDIUM`, `LOW`)
- **By competitor:** filter on `competitor.name == "Klue"` or `competitor.id == "abc123"`
- **By change type:** filter on `change.changeType == "PRICING"` to catch only pricing changes

This lets you build targeted workflows — for example, only creating a Salesforce task when a competitor's pricing page changes.

---

## Testing Your Integration

1. Use **Send test** in KompWatch Settings to send a sample payload at any time
2. Check your automation platform's execution log to confirm the payload arrived and was processed
3. If events stop arriving, check: the webhook URL hasn't changed, the integration is still enabled, and your automation platform hasn't paused the flow due to an error

---

## Limitations

- Webhooks require **Pro or Team** plan
- KompWatch sends one payload per detected change — not batched
- HMAC signature verification is available for security; see [Webhook Payload Format →](./webhook-payload-format.md)

---

## Related Articles

- [Webhook Payload Format →](./webhook-payload-format.md)
- [Integrations and Notifications →](./integrations-and-notifications.md)
- [REST API and Developer Access →](./rest-api-and-developer-access.md)
- [Per-Competitor Notification Settings →](./per-competitor-notification-settings.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
