# Does KompWatch Integrate With Gong?

**Short answer:** Not natively — but you can surface KompWatch competitive intel in your Gong workflow in two ways, and neither requires an Enterprise plan.

## Why Would You Connect Them?

Gong surfaces competitor mentions inside call recordings. KompWatch detects changes on competitor websites. Together, you get a feedback loop: calls tell you what prospects say about a competitor, KompWatch tells you what that competitor actually shipped. Sales reps who review Gong snippets are more credible when they reference the competitor's actual recent moves.

## Path 1: Webhook → Slack → Gong (Fastest Setup)

Gong picks up Slack messages linked to deals. If your team has a `#competitive-intel` channel:

1. **In KompWatch**: Go to **Settings → Slack & Webhook Integration** → add an incoming Slack webhook URL for `#competitive-intel`.
2. Every time KompWatch detects a competitor change above your severity threshold, it posts a message to that channel.
3. **In Gong**: Tracker alerts tied to a channel will surface that activity in deal timelines.

Setup time: ~5 minutes. No Zapier required on Team plan (native Slack-style webhook support).

## Path 2: Webhook → Zapier → Gong

For more control — e.g., enriching specific deals in Gong with competitor context:

1. **In KompWatch**: Copy your outbound webhook URL from **Settings → Slack & Webhook Integration** (Pro or Team plan).
2. **In Zapier**: Create a Zap → trigger: **Webhooks by Zapier → Catch Hook** (paste the KompWatch URL) → action: **Gong → Create Call Context** or another Gong action relevant to your workflow.
3. Map `competitor_name`, `change_summary`, and `severity` from the KompWatch payload.

See [Webhook Payload Format →](./webhook-payload-format.md) for all available fields.

## Which Plan Do I Need?

Webhooks require **Pro ($49/mo) or Team ($149/mo)**.

| Plan | Slack / Webhook | Gong via Zapier |
|------|-----------------|-----------------|
| Free | ✗ | ✗ |
| Pro  | ✓ | ✓ |
| Team | ✓ | ✓ |

## How Does This Compare to Klue's Gong Integration?

Klue markets a native Gong integration, but it requires **Klue Enterprise** (typically $30k+/yr, seat-based). It surfaces battlecard content inside Gong transcripts — useful, but you're paying for a $30k tool to get $49/mo functionality.

KompWatch's webhook approach gives revenue teams the same competitive context in Gong (via the Slack or Zapier path above) at a fraction of the cost. You don't get battlecard cards overlaid on transcripts — but you get real-time competitor change alerts that reps actually act on.

If deep transcript overlay is critical to your workflow, Klue Enterprise may be worth it. If you want "tell me when a competitor changes their pricing or messaging before my next call," KompWatch covers that today.

## Can I Set Up Alerts Only for Specific Competitors?

Yes. KompWatch lets you configure notification settings per competitor (**Competitors → [name] → Notification Settings**). You can set a minimum severity threshold so only HIGH or CRITICAL changes trigger the webhook — keeping your Gong channel signal-to-noise ratio high.

## Related Articles

- [Automating with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md)
- [Webhook Payload Format](./webhook-payload-format.md)
- [Slack Notifications](./slack-notifications.md)
- [Microsoft Teams Notifications](./microsoft-teams-notifications.md)
- [CRM Integrations](./crm-integrations.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
