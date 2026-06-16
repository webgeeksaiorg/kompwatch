# Does KompWatch Send Alerts to Slack?

**Short answer:** Yes, via webhook — and a native Slack integration is on the roadmap.

## Current Path: Webhook → Slack (Available Now)

KompWatch sends a JSON webhook payload every time a change is detected on a tracked competitor page (Pro and Team plans). You can route that payload to any Slack channel in under 5 minutes using Zapier or Make.com.

### Via Zapier (no code required)

1. **In Zapier**: Create a new Zap → trigger: **Webhooks by Zapier → Catch Hook** → copy the generated URL.
2. **In KompWatch**: Go to **Settings → Slack & Webhook Integration** → paste the Zapier URL → click **Send test**.
3. **In Zapier**: Click **Test trigger** to confirm the sample payload arrived.
4. **Set the action**: Slack → **Send Channel Message** → map the fields you want:
   - `competitor_name` → channel message text
   - `change_summary` → the AI-generated description of what changed
   - `severity` → use this to route HIGH/CRITICAL changes to a dedicated `#competitive-alerts` channel

That's it. Every time KompWatch detects a change above your severity threshold, Zapier fires the message to Slack automatically.

### Via Make.com (formerly Integromat)

1. **In Make.com**: Create a new Scenario → trigger: **Webhooks → Custom webhook** → copy the generated URL.
2. **In KompWatch**: Paste the URL into **Settings → Slack & Webhook Integration** → Send test.
3. **Add a Slack module**: Choose **Send a Message** → select your workspace and channel → map `change_summary` and `competitor_name` into the message body.

For step-by-step screenshots and the full webhook payload schema, see [Automating KompWatch with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md).

## Native Slack Integration (In Review)

A native Slack integration — where you authorize KompWatch directly in your Slack workspace without going through Zapier — is currently **in review**. When it ships:

- Slack channels will be configurable per-competitor, not just globally
- You'll be able to set severity filters (e.g. alert `#pricing-watch` only for HIGH/CRITICAL changes, ignore LOW)
- No Zapier account or webhook URL required

To be notified when this ships, watch the [product changelog](./product-changelog.md) or subscribe to digest emails (which include release notes).

## Which Plan Do I Need?

Webhooks (and therefore the Slack-via-Zapier path) require **Pro or Team**. The Free plan does not include webhook output.

| Plan | Slack via Zapier | Native Slack (when available) |
|------|-----------------|------------------------------|
| Free | ✗ | ✗ |
| Pro ($49/mo) | ✓ | ✓ (when released) |
| Team ($149/mo) | ✓ | ✓ (when released) |

## Can I Filter Which Changes Get Sent to Slack?

Yes. KompWatch lets you set a minimum severity threshold per competitor (Low / Medium / High / Critical) in **Competitors → [name] → Notification Settings**. Only changes at or above that threshold trigger the webhook — meaning only those changes get forwarded to Slack.

For high-volume monitoring (Team plan with 50+ competitors), this prevents your Slack channel from being flooded with minor copy edits.

## Related

- [Automating with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md)
- [Webhook payload format and fields](./webhook-payload-format.md)
- [Webhook delivery history and retries](./webhook-delivery-history.md)
- [Per-competitor notification settings](./per-competitor-notification-settings.md)
- [Integrations overview](./integrations-and-notifications.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
