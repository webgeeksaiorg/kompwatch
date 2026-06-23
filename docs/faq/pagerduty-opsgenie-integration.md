# PagerDuty and OpsGenie Integration

KompWatch doesn't have a native PagerDuty or OpsGenie integration, but you can route competitor change alerts to either platform in minutes using **webhooks** + a simple automation step.

## Why Route Competitor Alerts to PagerDuty or OpsGenie?

- Trigger on-call notification when a competitor makes a **HIGH-severity pricing or feature change** during an active sales cycle
- Integrate competitor intelligence into existing incident-response workflows
- Ensure your competitive team is paged immediately when a rival cuts price or launches a major feature
- Useful for **DevRel teams** monitoring competitor API docs, changelogs, or status pages

---

## Prerequisites

- A **Pro or Team** KompWatch plan (webhooks are not available on Free)
- A PagerDuty or OpsGenie account with permission to create services/integrations

---

## Option A — PagerDuty via Webhooks by Zapier

This is the easiest path if you don't want to write code.

### Step 1 — Get a Zapier webhook URL

1. In Zapier, create a new Zap
2. Trigger: **Webhooks by Zapier → Catch Hook** — copy the URL
3. In KompWatch, go to **Settings → Slack & Webhook Integration**, paste the URL, click **Send test**
4. Back in Zapier, confirm the test payload arrived

### Step 2 — Add a PagerDuty action

1. Add action: **PagerDuty → Create an Incident** (or **Send Event**)
2. Connect your PagerDuty account
3. Map fields:
   - **Title / Summary**: `{{change.summary}}` (e.g. "Acme Corp increased Pro plan price to $69/mo")
   - **Severity**: Map `{{change.severity}}` → PagerDuty severity (HIGH → `critical`, MEDIUM → `warning`, LOW → `info`)
   - **Source**: `KompWatch`
   - **Details / Body**: Include `{{competitor.name}}`, `{{change.changeType}}`, `{{change.viewUrl}}`

4. Add a **Zapier Filter** before the PagerDuty action so only HIGH-severity changes trigger a page — otherwise every LOW-severity cosmetic change becomes an incident.

### Step 3 — Test and enable

Test the Zap and publish. Future HIGH-severity KompWatch alerts will create PagerDuty incidents.

---

## Option B — OpsGenie via Webhooks by Zapier

Same flow as PagerDuty:

1. Zapier trigger: **Webhooks by Zapier → Catch Hook**
2. Action: **OpsGenie → Create Alert**
3. Map:
   - **Message**: `{{change.summary}}`
   - **Priority**: Map `{{change.severity}}` → OpsGenie priority (HIGH → `P1`, MEDIUM → `P2`, LOW → `P3`)
   - **Source**: `KompWatch`
   - **Details**: Use additional fields to pass `competitor.name`, `change.changeType`, `change.viewUrl`
4. Add a Filter to limit to HIGH severity only (recommended)

---

## Option C — Direct PagerDuty Events API (No Zapier)

If you prefer to skip Zapier, PagerDuty supports a **Generic Events API v2** endpoint that accepts plain JSON `POST` requests — which is exactly what KompWatch sends. However, the KompWatch webhook payload format doesn't match the PagerDuty Events API schema exactly, so you'd need a small middleware function (AWS Lambda, Cloudflare Worker, or similar) to transform the payload.

**KompWatch webhook body → PagerDuty Events API mapping:**

```
routing_key          = your PagerDuty integration key
event_action         = "trigger"
payload.summary      = change.summary
payload.source       = competitor.name
payload.severity     = "critical" (if change.severity == "HIGH") else "warning"
payload.custom_details.changeType = change.changeType
payload.custom_details.viewUrl    = change.viewUrl
```

For most teams the Zapier path (Option A) is simpler and faster to set up.

---

## Filtering Recommendations

Before paging anyone, apply severity filtering. Recommended thresholds:

| Scenario | Recommended filter |
|---|---|
| Only page for pricing changes | `change.changeType == "PRICING"` AND `change.severity == "HIGH"` |
| Page for any major competitive move | `change.severity == "HIGH"` |
| Log to incident tracker but don't page | `change.severity == "MEDIUM"` |
| Ignore completely | `change.severity == "LOW"` |

See [Change Severity Levels →](./change-severity-levels.md) for how KompWatch assigns severity.

---

## Related

- [Webhook Payload Format →](./webhook-payload-format.md)
- [Automating KompWatch with Zapier, Make.com, or n8n →](./zapier-make-n8n-automation.md)
- [Filtering Alerts by Content Zone →](./filtering-alerts-by-content-zone.md)
- [Microsoft Teams Notifications →](./microsoft-teams-notifications.md)
- [Slack Notifications →](./slack-notifications.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
