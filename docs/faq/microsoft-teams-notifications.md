# Does KompWatch Send Alerts to Microsoft Teams?

**Short answer:** Yes, via webhook — and Teams channels can be set up in under 5 minutes using Microsoft's built-in Incoming Webhook connector or Zapier.

## Current Path: Webhook → Teams (Available Now)

KompWatch sends a JSON webhook payload every time a change is detected on a tracked competitor page (Pro and Team plans). You can route that payload into any Teams channel using the Incoming Webhooks connector — no code or Zapier account required.

### Option A: Teams Incoming Webhook (no code, no Zapier)

Microsoft Teams has a built-in connector that accepts webhook payloads directly.

1. **In Teams**: Go to the channel you want alerts in → click **...** (More options) → **Connectors** → search for **Incoming Webhook** → click **Configure**.
2. Give it a name (e.g. "KompWatch Alerts") and optionally upload the KompWatch logo → click **Create**.
3. Copy the generated webhook URL (starts with `https://your-org.webhook.office.com/…`).
4. **In KompWatch**: Go to **Settings → Slack & Webhook Integration** → paste the Teams URL → click **Send test**.

KompWatch will now post a JSON message to your Teams channel whenever a change is detected.

> **Note:** Teams renders raw JSON payloads by default. For a formatted card, use the Zapier path below or route through Make.com with a Teams module that formats the payload as an Adaptive Card.

### Option B: Via Zapier (formatted Adaptive Cards)

1. **In Zapier**: Create a new Zap → trigger: **Webhooks by Zapier → Catch Hook** → copy the URL.
2. **In KompWatch**: Paste the URL into **Settings → Slack & Webhook Integration** → click **Send test**.
3. **In Zapier**: Click **Test trigger**, then add an action → **Microsoft Teams → Send a Message to a Channel**.
4. Map the fields:
   - `competitor_name` → message title or intro text
   - `change_summary` → the AI-generated description of what changed
   - `severity` → add to the message body for easy scanning
   - `competitor_url` → link to the monitored page

### Option C: Via Make.com

1. **In Make.com**: New Scenario → **Webhooks → Custom webhook** → copy the URL.
2. **In KompWatch**: Paste into **Settings → Slack & Webhook Integration** → Send test.
3. Add a **Microsoft Teams → Send a Message** module → map `change_summary` and `competitor_name`.
4. Optionally add a **Filter** before the Teams module to only forward `HIGH` or `CRITICAL` severity changes.

For the full webhook payload schema and field reference, see [Automating KompWatch with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md).

---

## How Does This Compare to Klue's Microsoft Teams Integration?

Klue recently shipped native Microsoft Teams integration as part of their Compete Agent + Copilot offering. There are real differences between the two approaches:

| | Klue Teams Integration | KompWatch → Teams (webhook) |
|---|---|---|
| **Setup** | Enterprise onboarding, sales cycle required | Self-serve in 5 minutes |
| **Platform cost** | ~$50K/yr median (Vendr, 106 deals) | Pro $49/mo, Team $149/mo |
| **What shows up in Teams** | AI answers to battlecard questions from curated corpus | Live change alerts when competitor websites update |
| **In-call intelligence** | ✓ Real-time battlecard surfacing during Teams calls | ✗ Not in scope |
| **Microsoft 365 required** | Yes — designed around M365 Copilot and Dynamics 365 | No — webhook works with any Teams plan, free or paid |
| **Change detection** | Requires CI analyst to update corpus | Automatic — detects competitor site changes within hours |
| **Dynamics 365 integration** | ✓ Native | Via Zapier/Make.com (CRM logging) |

**The practical difference:** Klue's Teams integration surfaces curated battlecard content *during sales calls* — it's built for reps who need objection-handling prompts in real time. KompWatch's webhook delivers *change alerts* — it's built for product, PMM, and strategy teams who need to know when competitors update their pricing, messaging, or feature pages.

These are complementary use cases. If your team runs Klue for battlecard delivery and uses Teams calls heavily, KompWatch fills the monitoring gap that Klue doesn't cover automatically: detecting what changed on competitor sites so your corpus stays current.

---

## Which Plan Do I Need?

Webhooks (and therefore Teams alerts) require **Pro or Team**. The Free plan does not include webhook output.

| Plan | Teams via webhook | Teams via Zapier/Make.com |
|------|-------------------|---------------------------|
| Free | ✗ | ✗ |
| Pro ($49/mo) | ✓ | ✓ |
| Team ($149/mo) | ✓ | ✓ |

---

## Can I Filter Which Changes Get Sent to Teams?

Yes. Set a minimum severity threshold per competitor in **Competitors → [name] → Notification Settings** (Low / Medium / High / Critical). Only changes at or above that threshold trigger the webhook — keeping your Teams channel focused on meaningful updates.

For high-volume monitoring (Team plan with 50+ competitors), filtering to HIGH or CRITICAL changes prevents alert fatigue.

---

## Related Articles

- [Slack Notifications](./slack-notifications.md)
- [Automating with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md)
- [Webhook Payload Format](./webhook-payload-format.md)
- [Webhook Delivery History and Retries](./webhook-delivery-history.md)
- [Per-Competitor Notification Settings](./per-competitor-notification-settings.md)
- [Klue Copilot MCP vs KompWatch MCP](./klue-copilot-mcp-vs-kompwatch-mcp.md)
- [Integrations Overview](./integrations-and-notifications.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
