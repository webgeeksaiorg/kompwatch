# Does KompWatch Integrate With Pipedrive?

**Short answer:** Not natively — but you can push KompWatch competitor alerts into Pipedrive via Zapier in under 10 minutes, with no developer access required.

## Why Would You Connect Them?

Pipedrive tracks your pipeline and deal activity. KompWatch monitors competitor websites for changes. Connected, your reps see competitive intel directly inside Pipedrive — in the context of the deals it affects — without switching tools.

Common use cases:
- Create a Note on a deal when a competitor changes pricing you're actively competing against
- Add an Activity (follow-up task) for the deal owner when a competitor ships a new feature
- Update a custom deal field ("Last Competitor Signal") so your pipeline view surfaces competitive context
- Trigger a Pipedrive Workflow when a HIGH-severity change is detected

## Setting It Up: Webhook → Zapier → Pipedrive

**What you need:**
- A KompWatch **Pro or Team** plan (webhooks are Pro/Team only)
- A free or paid Zapier account
- A Pipedrive account (any tier)

**Steps:**

1. **In Zapier**, create a new Zap → trigger: **Webhooks by Zapier → Catch Hook** → copy the generated webhook URL.
2. **In KompWatch**, go to **Settings → Slack & Webhook Integration** → paste the Zapier URL → click **Send test**.
3. **Back in Zapier**, click **Test trigger** to confirm the payload arrived.
4. **Add a Pipedrive action** — popular options:

| If you want to… | Pipedrive action |
|---|---|
| Log a note on a deal or org | Pipedrive → Create Note |
| Create a follow-up task | Pipedrive → Create Activity |
| Update a deal field | Pipedrive → Update Deal |
| Trigger a Pipedrive automation | Pipedrive → Add Follower / Update Stage (as trigger proxy) |

5. **Map KompWatch fields:**
   - `competitor.name` → Note Content / Activity Subject prefix
   - `change.summary` → Note Content / Activity Note
   - `change.severity` → Activity Priority (HIGH → High)
   - `change.changeType` → Subject tag (e.g., "PRICING", "FEATURE")
   - `change.detectedAt` → Activity Due Date / Note timestamp

**Filtering tip:** Add a Zapier **Filter** step so only `change.severity == "HIGH"` events create Pipedrive records. LOW-severity changes (minor copy tweaks) add noise to your deal timeline.

See [Webhook Payload Format →](./webhook-payload-format.md) for the complete list of fields KompWatch sends.

## Targeting Specific Deals

Zapier can route alerts to deals competing against a specific vendor, but it requires a lookup step:

1. In Pipedrive, add a **custom deal field**: "Primary Competitor" (text or single-select).
2. In Zapier, use **Pipedrive → Find Deal** (filter: Primary Competitor = `competitor.name` from the payload).
3. Create a Note or Activity against each matched deal.

This scopes alerts to active deals where the competitor change is actually relevant — keeps timelines clean.

## Which Plan Do I Need?

| Plan | Webhook access | Pipedrive via Zapier |
|------|---------------|---------------------|
| Free | ✗ | ✗ |
| Pro ($49/mo) | ✓ | ✓ |
| Team ($149/mo) | ✓ | ✓ |

Pipedrive itself can be any tier — Pipedrive Essential and above support Zapier actions including Create Note and Create Activity.

## How Does This Compare to Crayon and Klue?

Neither Crayon nor Klue offers a native Pipedrive integration. Both focus their CRM integrations on Salesforce (Crayon Enterprise, Klue Enterprise) and HubSpot. Teams on Pipedrive typically fall outside the enterprise account threshold where Crayon or Klue native connectors become available anyway.

KompWatch's webhook approach works with Pipedrive out of the box via Zapier — $49/mo, no sales call, no implementation project.

## Related Articles

- [Automating with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md)
- [Webhook Payload Format](./webhook-payload-format.md)
- [CRM Integrations](./crm-integrations.md)
- [HubSpot Integration](./hubspot-integration.md)
- [Salesforce Integration](./salesforce-integration.md)
- [Dynamics 365 Integration](./dynamics-365-integration.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
