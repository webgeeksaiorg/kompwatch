# Does KompWatch Integrate With Salesforce?

**Short answer:** Not natively — but you can push KompWatch competitor alerts into Salesforce in two ways that take under 15 minutes to set up, and neither requires an Enterprise plan.

## Why Would You Connect Them?

Salesforce tracks your deals and accounts. KompWatch detects changes on competitor websites. Together, your reps see the latest competitor moves directly in the context of the accounts they're working — without leaving Salesforce.

Common use cases:
- Log a Salesforce Task on an opportunity when a tracked competitor changes their pricing
- Add a note to an account when a competitor ships a new feature that competes head-on
- Update a custom field (e.g., "Last Competitor Activity") so your sales manager sees competitive context in pipeline reviews

## Path 1: Webhook → Zapier → Salesforce (Recommended)

The fastest setup requires no Salesforce developer access.

1. **In KompWatch**: Go to **Settings → Slack & Webhook Integration** and copy your outbound webhook URL (Pro or Team plan required).
2. **In Zapier**: Create a new Zap → trigger: **Webhooks by Zapier → Catch Hook** → paste the KompWatch URL.
3. **Add a Salesforce action** — common options:
   - **Create Task** — assign a follow-up task to the account owner
   - **Create Note / ContentNote** — log the change summary against an account
   - **Update Record** — write `change.summary` to a custom field on Opportunity or Account
4. Map these KompWatch payload fields:
   - `competitor.name` → Salesforce Account Name lookup
   - `change.summary` → Task Description or Note Body
   - `change.severity` → Priority field (HIGH → High, MEDIUM → Normal)
   - `change.changeType` → Subject prefix (e.g., "Pricing Change: Klue updated pricing page")

See [Webhook Payload Format →](./webhook-payload-format.md) for all available fields.

**Filtering tip:** Add a Zapier Filter step before the Salesforce action to only create tasks when `change.severity == "HIGH"` — keeps your Salesforce activity log clean.

## Path 2: Salesforce Flow + Apex Webhook (For Salesforce Admins)

If your Salesforce admin prefers keeping automation inside Salesforce:

1. In KompWatch, copy your outbound webhook URL from **Settings → Slack & Webhook Integration**.
2. In Salesforce, create an **Apex REST endpoint** or use **Salesforce Flow with an HTTP Action** to receive the POST payload.
3. Parse the JSON and create Tasks, Activities, or Chatter posts against the relevant Account or Opportunity records.

This approach gives you full control over routing logic (e.g., match `competitor.name` to a custom Competitor field on your Opportunities) but requires Salesforce admin or developer access.

## Which Plan Do I Need?

Webhooks require **Pro ($49/mo) or Team ($149/mo)**.

| Plan | Webhook (for Zapier/Flow) | Salesforce integration |
|------|--------------------------|----------------------|
| Free | ✗ | ✗ |
| Pro  | ✓ | ✓ via Zapier |
| Team | ✓ | ✓ via Zapier or Apex |

## How Does This Compare to Crayon and Klue?

Both Crayon and Klue offer native Salesforce connectors — but only on their Enterprise tiers ($25k–$50k+/yr, seat-based, annual contracts).

Crayon's Salesforce integration syncs battlecards into opportunity records. Klue's surfaces competitive intel in the sidebar. Both require dedicated Salesforce admins and lengthy implementation timelines (Crayon typically 6–10 weeks; Klue 8–12 weeks).

KompWatch's webhook approach delivers the same core value — competitor context inside Salesforce — in an afternoon, for $49/mo. You don't get sidebar battlecard overlays, but you get real-time change alerts on the accounts your reps are actively working.

If you genuinely need battlecard overlays embedded in every Salesforce record, Crayon or Klue Enterprise may be worth evaluating. If you want "alert my reps when a competitor's pricing or messaging changes," KompWatch covers that today.

## Can I Route Alerts Only to Relevant Accounts?

The Zapier approach requires a manual mapping step (or a lookup table) to connect `competitor.name` to specific Salesforce accounts. A common pattern:

1. Maintain a Salesforce report of accounts with a known competitor ("Primary Competitor = Klue")
2. In Zapier, use a **Lookup Table** or **Formatter** step to map the competitor name to an Account ID
3. Use that Account ID in the Salesforce action to target the right records

This is more setup but keeps activity logs tightly scoped to relevant accounts.

## Related Articles

- [Automating with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md)
- [Webhook Payload Format](./webhook-payload-format.md)
- [CRM Integrations](./crm-integrations.md)
- [HubSpot Integration](./hubspot-integration.md)
- [Gong Integration](./gong-integration.md)
- [Dynamics 365 Integration](./dynamics-365-integration.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
