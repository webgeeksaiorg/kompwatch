# Does KompWatch Send Alerts to Google Chat?

**Short answer:** Yes, via webhook — Google Chat (formerly Hangouts Chat) has native incoming webhook support, so you can connect KompWatch to a Space without needing Zapier.

## Two Paths: Native Google Chat Webhooks vs. Zapier

Like Discord, Google Chat supports incoming webhooks natively. You can send KompWatch change alerts directly to a Google Chat Space without any third-party middleware.

---

## Option 1: Direct Webhook (Recommended)

### Step 1: Create a Google Chat Incoming Webhook

1. Open Google Chat and navigate to the **Space** where you want alerts (or create a new Space, e.g. "Competitive Intel")
2. Click the **Space name** at the top → **Manage webhooks**
3. Click **Add webhook** → give it a name (e.g. "KompWatch") and optionally a photo
4. Click **Save** → copy the generated **Webhook URL** (looks like `https://chat.googleapis.com/v1/spaces/...`)

> **Note:** Incoming webhooks are available in Google Chat spaces, not direct messages.

### Step 2: Configure KompWatch

1. Go to **Settings → Integrations → Webhooks**
2. Paste the Google Chat webhook URL
3. Click **Send test**

> **Compatibility note:** Google Chat's incoming webhook expects a `{"text": "..."}` body, while KompWatch sends a richer JSON payload. The test may appear as a formatted JSON block in Chat. To get clean, readable messages, use the Zapier path below — or use a lightweight middleware like n8n to reformat.

### Step 3: n8n Formatter (Optional, Clean Messages)

If you're self-hosting n8n, this is the cleanest free path for reformatting:

1. **n8n Trigger**: Webhook → receive KompWatch payload
2. **Function node**: Build the Google Chat message:
   ```json
   {
     "text": "🔔 *{{$json.competitor.name}}* — {{$json.change.type}} change ({{$json.change.severity}})\n{{$json.change.summary}}\n<{{$json.snapshot.url}}|View snapshot>"
   }
   ```
3. **HTTP Request node**: POST to your Google Chat webhook URL

---

## Option 2: Via Zapier or Make.com (Richest Formatting)

### Zapier → Google Chat

| Step | Config |
|---|---|
| Trigger | Webhooks by Zapier — Catch Hook |
| Filter | `severity == HIGH` OR `change_type == PRICING` |
| Action | Google Chat — Send Message to Space |
| Space | Select your Competitive Intel space |
| Message | `*{{competitor_name}}* changed their *{{change_type}}*\n{{change_summary}}\nSeverity: {{severity}} — <{{snapshot_url}}|View>` |

### Make.com → Google Chat (Card Format)

Google Chat supports Card messages via Make.com's HTTP module. Cards render with headers, sections, and buttons — cleaner than plain text for recurring alerts:

```json
{
  "cards": [{
    "header": {
      "title": "{{competitor_name}} — {{change_type}}",
      "subtitle": "Severity: {{severity}}",
      "imageUrl": "https://kompwatch.com/icon.png"
    },
    "sections": [{
      "widgets": [
        { "textParagraph": { "text": "{{change_summary}}" } },
        { "buttons": [{ "textButton": { "text": "View Snapshot", "onClick": { "openLink": { "url": "{{snapshot_url}}" } } } }] }
      ]
    }]
  }]
}
```

---

## Google Workspace Considerations

If your company uses Google Workspace, Google Chat is likely your default team messaging tool. Key setup notes:

- **Admin permissions:** In some Workspace configurations, admins must enable incoming webhooks for Spaces. If you don't see the "Manage webhooks" option, ask your Google Workspace admin to enable it.
- **Service accounts:** For advanced setups (like routing to multiple Spaces based on change type), you can use a Google Chat Bot via the Chat API — but the simple webhook path above covers 95% of use cases.
- **Notification fatigue:** Google Chat doesn't have the same granular notification controls as Slack. Filter KompWatch to HIGH severity only to avoid over-pinging the team.

---

## Recommended Space Structure

| Space | Filter |
|---|---|
| `#Competitive Intel` | HIGH severity, all types |
| `#Pricing Watch` | PRICING changes, any severity |
| `#Product CI` | FEATURE changes, HIGH only |

---

## Which Plan Do I Need?

Webhooks require **Pro or Team**. The Free plan does not include webhook output.

| Plan | Google Chat via Webhook | Google Chat via Zapier |
|------|------------------------|----------------------|
| Free | ✗ | ✗ |
| Pro ($49/mo) | ✓ | ✓ |
| Team ($149/mo) | ✓ | ✓ |

---

## Troubleshooting

**Webhook URL returns 403:**
- The webhook may have been deleted or rotated. Regenerate it in the Space's webhook settings.
- Ensure the Space still exists (archived Spaces reject webhooks).

**Messages appear as raw JSON:**
- Google Chat's incoming webhook only renders `{"text": "..."}` and card payloads. Route through Zapier or n8n to reformat KompWatch's payload first.

**"Manage webhooks" not visible in your Space:**
- Your Google Workspace admin may have disabled incoming webhooks. Contact your admin or use the Zapier path instead (which authenticates via OAuth and doesn't require admin-enabled webhooks).

---

## How Does This Compare to Klue/Crayon's Google Chat Support?

Klue offers a Google Chat integration on Enterprise plans (typically $30K+/yr). Crayon's Chat integration requires a Professional tier engagement. KompWatch makes this available on the **$49/mo Pro plan** via the webhook path above — the same technical capability, without the enterprise contract.

---

## Related

- [Automating with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md)
- [Webhook payload format and fields](./webhook-payload-format.md)
- [Webhook delivery history and retries](./webhook-delivery-history.md)
- [Slack Notifications](./slack-notifications.md)
- [Microsoft Teams Notifications](./microsoft-teams-notifications.md)
- [Discord Notifications](./discord-notifications.md)
- [Integrations overview](./integrations-and-notifications.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
