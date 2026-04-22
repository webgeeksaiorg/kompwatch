# Does KompWatch Require Salesforce or HubSpot?

No. KompWatch has no dependency on any CRM. It works out of the box regardless of which CRM — if any — your team uses.

## What CRMs Does KompWatch Support?

KompWatch delivers competitive intelligence via **email digest** and **webhooks**. You can route those alerts to wherever your team already works:

- **Slack / Microsoft Teams** — via incoming webhook (set up in Settings → Webhooks)
- **HubSpot** — via Zapier: trigger a note, property update, or workflow from a KompWatch webhook
- **Salesforce** — via Zapier or a custom webhook endpoint in Salesforce Flow
- **Notion / Airtable / Linear** — via Zapier or webhook + automation
- **Any CRM with a REST API** — KompWatch posts a JSON payload to any HTTPS endpoint you specify

See [Integrations and Custom Notifications →](integrations-and-notifications.md) for setup instructions.

## How Does This Compare to Crayon?

Crayon's win/loss analysis and battlecard syncing requires Salesforce. If your team runs on HubSpot, you pay for a feature set you can't fully use.

KompWatch doesn't have this dependency. Monitoring, change detection, and AI digests work the same way regardless of your sales stack. CRM routing is optional and handled by webhook + Zapier if you want it.

## Can I Push KompWatch Alerts Into My CRM Automatically?

Yes, via webhooks + Zapier:

1. In **Settings → Webhooks**, copy your KompWatch webhook URL trigger (or configure an outbound webhook)
2. In Zapier, use "Webhooks by Zapier" as the trigger
3. Add a CRM action: create a note, update a field, log an activity, etc.

This is a manual setup today. Native CRM connectors (HubSpot, Salesforce) are on the roadmap.

## What If I Don't Use a CRM?

No problem — email digest and Slack/Teams integration are the primary delivery channels. Most teams get full value from KompWatch without connecting a CRM at all.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
