# Does KompWatch Integrate With HubSpot?

**Short answer:** Not natively — but you can route KompWatch competitor alerts into HubSpot via Zapier in under 10 minutes, with no developer access required.

## Why Would You Connect Them?

HubSpot tracks your contacts, deals, and accounts. KompWatch monitors competitor websites for changes. Connected, your team sees competitor activity directly inside HubSpot — without manually checking a separate tool.

Common use cases:
- Create a HubSpot Note on a contact or deal when a competitor changes their pricing
- Log a Task for a rep to follow up when a competitor ships a feature mentioned in an open deal
- Update a custom deal property ("Last Competitive Intel Date") to surface competitive context in pipeline views

## Setting It Up: Webhook → Zapier → HubSpot

**What you need:**
- A KompWatch **Pro or Team** plan (webhooks are Pro/Team only)
- A free or paid Zapier account
- A HubSpot account (any tier — HubSpot Free works)

**Steps:**

1. **In Zapier**, create a new Zap → trigger: **Webhooks by Zapier → Catch Hook** → copy the generated webhook URL.
2. **In KompWatch**, go to **Settings → Slack & Webhook Integration** → paste the Zapier URL → click **Send test**.
3. **Back in Zapier**, click **Test trigger** to confirm the payload arrived.
4. **Add a HubSpot action** — popular options:

| If you want to… | HubSpot action |
|---|---|
| Log a note on a contact or company | HubSpot → Create Note |
| Create a follow-up task | HubSpot → Create Task |
| Update a deal field | HubSpot → Update Deal |
| Trigger a HubSpot workflow | HubSpot → Trigger Workflow Enrollment |

5. **Map KompWatch fields:**
   - `competitor.name` → Note Body / Task Title prefix
   - `change.summary` → Note Body / Task Description
   - `change.severity` → Task Priority (HIGH → High)
   - `change.changeType` → Subject tag (e.g., "PRICING", "FEATURE")
   - `change.detectedAt` → Activity Date

**Filtering tip:** Add a Zapier **Filter** step so only `change.severity == "HIGH"` events create HubSpot records — avoids noise from low-signal changes.

See [Webhook Payload Format →](./webhook-payload-format.md) for all fields KompWatch sends.

## Which Plan Do I Need?

| Plan | Webhook access | HubSpot via Zapier |
|------|---------------|-------------------|
| Free | ✗ | ✗ |
| Pro ($49/mo) | ✓ | ✓ |
| Team ($149/mo) | ✓ | ✓ |

HubSpot itself can be any tier — HubSpot Free supports Zapier actions like Create Note and Create Task.

## How Does This Compare to Klue's HubSpot Integration?

Klue offers a HubSpot integration on their Enterprise plan (typically $30k+/yr, seat-based, annual contract). It surfaces battlecard content inside HubSpot deal records via a sidebar card.

KompWatch's Zapier approach delivers competitor change alerts into HubSpot for $49/mo. You don't get a sidebar battlecard card — but you get real-time intelligence on what competitors actually shipped, logged directly in the deals where it matters.

If you need battlecard content visible in every HubSpot record and have budget for a $30k tool, Klue Enterprise is worth evaluating. If you want "notify my team in HubSpot when a competitor changes their pricing or launches a new feature," KompWatch covers that today.

## Can I Route Alerts to Specific Deals or Contacts?

The Zapier approach can target specific records, but requires a lookup step. A common pattern:

1. In HubSpot, create a Company property: "Primary Competitor" (single-line text or dropdown)
2. In Zapier, use **HubSpot → Search Companies** to find companies where "Primary Competitor = Klue" (matching `competitor.name`)
3. Create a Note against each matched company

This scopes alerts to accounts actively competing against that vendor, reducing noise.

## Related Articles

- [Automating with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md)
- [Webhook Payload Format](./webhook-payload-format.md)
- [CRM Integrations](./crm-integrations.md)
- [Salesforce Integration](./salesforce-integration.md)
- [Gong Integration](./gong-integration.md)
- [Slack Notifications](./slack-notifications.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
