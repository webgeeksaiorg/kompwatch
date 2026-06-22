# Can I Get KompWatch Alerts via Telegram or WhatsApp?

KompWatch doesn't send alerts to Telegram or WhatsApp natively — notifications go to **email** (all plans) and **Slack / webhook** (Pro and Team plans). However, you can route KompWatch change alerts to either messaging app in a few minutes using a no-code automation platform.

---

## Telegram Alerts

Telegram is well-supported by most automation platforms and has a free bot API, making it an easy integration.

### Option A — Zapier + Telegram Bot

**Requires:** KompWatch Pro or Team (webhooks), a Zapier account, a Telegram Bot token.

#### Step 1 — Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Send `/newbot`, follow the prompts, and copy the API token (format: `1234567890:ABCdef...`)
3. Start a conversation with your new bot or add it to a group channel
4. Get your chat ID: message the bot, then visit `https://api.telegram.org/bot<TOKEN>/getUpdates` — your `chat_id` is in the response

#### Step 2 — Set up Zapier

1. In Zapier, click **+ Create → Zap**
2. Trigger: **Webhooks by Zapier → Catch Hook** — copy the URL
3. In KompWatch, go to **Settings → Slack & Webhook Integration**, paste the URL, click **Send test**
4. Back in Zapier, confirm the test payload arrived

#### Step 3 — Add a Telegram action

Zapier has a **Telegram Bot** action built in:

1. Action: **Telegram Bot → Send Message**
2. Connect with your Bot API token
3. Set **Chat ID** to your personal or group chat ID
4. Compose the message body — for example:

   ```
   🔔 *Competitor Change Detected*
   
   Competitor: {{competitor.name}}
   Type: {{change.changeType}}
   Severity: {{change.severity}}
   
   {{change.summary}}
   
   View: {{change.viewUrl}}
   ```

5. Add an optional **Filter** step before the Telegram action to only send HIGH-severity changes (recommended — otherwise every cosmetic change becomes a message)

6. Test and publish the Zap

### Option B — Make.com + Telegram

1. Create a Make.com scenario
2. Trigger: **Webhooks → Custom webhook** — copy the URL, paste into KompWatch, fire a test
3. Add a **Telegram Bot → Send a Message** module
4. Map `change.summary`, `competitor.name`, `change.severity`, `change.viewUrl` into the message body
5. Activate the scenario

### Option C — n8n + Telegram

n8n has a native **Telegram** node:

1. Trigger: **Webhook** node
2. Add a **Telegram → Send Message** node
3. Authenticate with your Bot token and map fields
4. Add an **IF** node to filter by severity before sending

---

## WhatsApp Alerts

WhatsApp requires a business API account (via Meta's Cloud API or a provider like Twilio). It's slightly more involved than Telegram but achievable.

### Option A — Zapier + Twilio (WhatsApp)

**Requires:** KompWatch Pro or Team, Zapier, and a Twilio account with WhatsApp Sandbox or Business API access.

1. In Zapier, create a Zap with **Webhooks by Zapier → Catch Hook** as the trigger
2. Paste the Zapier URL into KompWatch **Settings → Slack & Webhook Integration**, send a test
3. Add action: **Twilio → Send Message (WhatsApp)**
4. Connect your Twilio account (use your WhatsApp-enabled Twilio number as the "From" number)
5. Set the "To" number to your WhatsApp number in E.164 format (e.g. `+15551234567`)
6. Compose the message body with `{{change.summary}}`, `{{competitor.name}}`, and `{{change.severity}}`
7. Add a Filter: only trigger for HIGH severity changes
8. Test and publish

**Note:** WhatsApp Business API via Twilio requires you to activate the WhatsApp channel in Twilio's console and use an approved message template for the first outbound message to each number. Ongoing conversations (after the user has replied) can use free-form messages.

### Option B — Make.com + WhatsApp via 360dialog or Meta Cloud API

For teams that want to avoid Twilio costs, **360dialog** and the **Meta WhatsApp Cloud API** both have Make.com connectors:

1. Make.com scenario: **Webhooks → Custom webhook** trigger
2. Paste URL into KompWatch and send a test
3. Add a **360dialog** or **WhatsApp Cloud API** module → Send Message
4. Map `change.summary` and `competitor.name` into the template

---

## Choosing Between Telegram and WhatsApp

| | Telegram | WhatsApp |
|---|---|---|
| Setup time | ~10 minutes | ~30–60 minutes |
| API cost | Free (Telegram Bot API is free) | Paid (Twilio or Meta API pricing) |
| Best for | Internal dev or product teams | Customer-facing or exec notifications |
| Zapier integration | Yes (native Telegram Bot action) | Yes (via Twilio) |
| Group channels | Yes — add bot to any group | WhatsApp Groups (more limited) |

**For most teams, Telegram is the faster and cheaper path.** WhatsApp makes sense if your executives or stakeholders specifically use WhatsApp for important alerts.

---

## Filtering Recommendation

Before sending any message to Telegram or WhatsApp, always add a **severity filter**:

- Only send `change.severity == "HIGH"` changes as immediate messages
- Log all changes to a Google Sheet or Airtable in parallel for your full audit trail
- This prevents notification fatigue — a busy competitor can trigger dozens of LOW/MEDIUM changes per week

See [Filtering Digests by Severity →](./filtering-digests-by-severity.md) and [Managing Alert Fatigue →](./managing-alert-fatigue.md)

---

## Related

- [Webhook Payload Format →](./webhook-payload-format.md)
- [Automating KompWatch with Zapier, Make.com, or n8n →](./zapier-make-n8n-automation.md)
- [SMS Alerts →](./sms-alerts.md)
- [Slack Notifications →](./slack-notifications.md)
- [Discord Notifications →](./discord-notifications.md)
- [Managing Alert Fatigue →](./managing-alert-fatigue.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
