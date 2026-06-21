# Does KompWatch Send Alerts to Discord?

**Short answer:** Yes, via webhook — Discord's built-in webhook support makes this one of the easiest integrations to set up, with no Zapier account required.

## Two Paths: Native Discord Webhooks vs. Zapier

Unlike Slack, Discord natively accepts incoming webhooks without any middleware. This means you can connect KompWatch directly to a Discord channel without Zapier, Make, or n8n.

---

## Option 1: Direct Webhook (Recommended, No Zapier Needed)

This is the fastest path — under 2 minutes to set up.

### Step 1: Create a Discord Webhook

1. Open your Discord server
2. Go to the channel where you want competitor alerts (e.g. `#competitive-intel`)
3. Click the **gear icon** (Edit Channel) → **Integrations** → **Webhooks**
4. Click **New Webhook** → give it a name (e.g. "KompWatch Alerts") and optionally set an avatar
5. Click **Copy Webhook URL** — it looks like `https://discord.com/api/webhooks/...`

### Step 2: Configure KompWatch

1. In KompWatch: go to **Settings → Integrations → Webhooks**
2. Paste the Discord webhook URL
3. Click **Send test** — you should see a test message appear in your Discord channel immediately

> **Note:** KompWatch sends a standard JSON payload. Discord's webhook endpoint accepts JSON natively at the `/wait` variant of the URL. If the test message doesn't appear, append `?wait=true` to your Discord webhook URL.

### Step 3: Set Severity Filtering

In **Competitors → [name] → Notification Settings**, set a minimum severity threshold:
- **HIGH only** — pricing changes and major feature launches (recommended for Discord to avoid channel noise)
- **MEDIUM+** — includes significant content changes too
- **All changes** — not recommended for Discord unless you have a dedicated monitoring channel

---

## Option 2: Via Zapier or Make.com (More Control)

Use this path if you want rich Discord embeds (coloured cards, fields, buttons) rather than plain JSON dumps.

### Zapier → Discord

| Step | Config |
|---|---|
| Trigger | Webhooks by Zapier — Catch Hook |
| Filter | `severity == HIGH` OR `change_type == PRICING` |
| Action | Discord — Send Channel Message |
| Channel | `#competitive-intel` |
| Message | `🔴 **{{competitor_name}}** changed their **{{change_type}}**\n{{change_summary}}\n[View snapshot]({{snapshot_url}})` |

### Make.com → Discord (Rich Embeds)

Make.com lets you format Discord embeds with colour-coded severity:

```json
{
  "embeds": [{
    "title": "{{competitor_name}} — {{change_type}} Change",
    "description": "{{change_summary}}",
    "color": 15158332,
    "fields": [
      { "name": "Severity", "value": "{{severity}}", "inline": true },
      { "name": "Detected", "value": "{{detected_at}}", "inline": true }
    ],
    "url": "{{snapshot_url}}"
  }]
}
```

Map colour to severity: `HIGH` → `15158332` (red), `MEDIUM` → `16776960` (yellow), `LOW` → `3066993` (green).

---

## Recommended Discord Channel Structure

For teams monitoring 5+ competitors, a single `#competitive-intel` channel gets noisy. Consider:

| Channel | Filter |
|---|---|
| `#pricing-watch` | `change_type == PRICING`, any severity |
| `#feature-launches` | `change_type == FEATURE`, HIGH only |
| `#competitive-alerts` | `severity == HIGH`, all types |
| `#ci-digest` | Digest email BCC (one message per digest) |

You can set up separate webhooks in KompWatch (via Zapier routing) to fan out to multiple channels based on `change_type` or `competitor_name`.

---

## Which Plan Do I Need?

Webhooks require **Pro or Team**. The Free plan does not include webhook output.

| Plan | Discord via Direct Webhook | Discord via Zapier |
|------|--------------------------|-------------------|
| Free | ✗ | ✗ |
| Pro ($49/mo) | ✓ | ✓ |
| Team ($149/mo) | ✓ | ✓ |

---

## Troubleshooting

**Test message doesn't appear in Discord:**
- Verify the webhook URL is correct (it should start with `https://discord.com/api/webhooks/`)
- Make sure the channel still exists and the webhook hasn't been deleted
- Try appending `?wait=true` to the webhook URL in KompWatch settings

**Getting duplicate messages:**
- If you have both a direct Discord webhook and a Zapier Zap pointing to the same channel, you'll get two messages per change. Remove one.

**Discord messages look like raw JSON:**
- Discord's native webhook endpoint renders plain text and embeds, but not KompWatch's full JSON payload as formatted text. Use the Zapier/Make path to control message formatting.

---

## Related

- [Automating with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md)
- [Webhook payload format and fields](./webhook-payload-format.md)
- [Webhook delivery history and retries](./webhook-delivery-history.md)
- [Slack Notifications](./slack-notifications.md)
- [Microsoft Teams Notifications](./microsoft-teams-notifications.md)
- [Integrations overview](./integrations-and-notifications.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
