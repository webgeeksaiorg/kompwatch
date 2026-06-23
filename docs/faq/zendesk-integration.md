# Does KompWatch integrate with Zendesk?

**Yes — via webhooks or Zapier/Make/n8n.** Customer success and support teams use KompWatch to automatically log competitor changes as Zendesk tickets, notes, or macros — so agents are always briefed before they speak with customers who mention a competitor.

---

## Why connect KompWatch to Zendesk?

Support agents often hear "I'm thinking of switching to [Competitor]" without knowing whether that competitor just changed pricing or launched a new feature. Routing KompWatch alerts into Zendesk lets you:

- Create an internal ticket or note when a competitor makes a major move
- Trigger a macro or macro suggestion with updated talking points
- Keep your CS team informed without adding another tool to their workflow

---

## Option 1: Webhook → Zendesk (developer path)

1. In KompWatch → **Settings → Integrations → Webhooks**, add a webhook URL.
2. Use [Zendesk's REST API](https://developer.zendesk.com/api-reference/) to create a ticket or internal note.
3. Filter by `severity: HIGH` to avoid ticket spam on minor content updates.

**Example flow:**
```
KompWatch webhook → Cloudflare Worker → Zendesk API → Create Internal Ticket
```

**Sample Zendesk API call (create internal note):**
```bash
POST https://yourcompany.zendesk.com/api/v2/tickets.json
{
  "ticket": {
    "subject": "Competitor update: Acme Corp — PRICING change",
    "comment": { "body": "KompWatch detected: Acme Corp pricing page updated...", "public": false },
    "tags": ["competitive-intel"],
    "priority": "normal"
  }
}
```

---

## Option 2: Zapier / Make / n8n (no-code)

**Zapier path:**
1. Trigger: **Webhooks by Zapier** → catch KompWatch payload
2. Filter: `severity = HIGH` and `change_type = PRICING`
3. Action: **Zendesk → Create Ticket** (set Type = Internal Note, Tags = competitive-intel)

**Make (Integromat) path:**
1. Module: **Webhooks → Custom webhook**
2. Router: split by `change_type`
3. Module: **Zendesk → Create Ticket** or **Zendesk → Create Article** in Help Center

See also: [Zapier/Make/n8n automation →](./zapier-make-n8n-automation.md)

---

## Recommended workflow for CS teams

| Competitor change | Recommended Zendesk action |
|---|---|
| PRICING change (HIGH) | Create internal ticket: "Competitive brief — Acme price change" |
| FEATURE launch (HIGH) | Add tag `competitive-feature-alert` to open tickets mentioning Acme |
| CONTENT change (MEDIUM) | Log to Slack only — skip Zendesk |
| Any change (LOW) | Skip |

---

## Using KompWatch data in Zendesk macros

For support teams that handle frequent competitor comparison questions, you can embed KompWatch digest summaries into Zendesk macros (canned responses). Update macros monthly with the latest competitive data from your KompWatch digests.

---

## Native Zendesk integration

A native Zendesk integration is on the product roadmap. Subscribe to [KompWatch product updates](https://kompwatch.com/changelog) to be notified when it ships.

Email **support@kompwatch.com** if your team needs a specific Zendesk workflow — commonly requested integrations get prioritized.

---

## Related

- [Intercom integration →](./intercom-integration.md)
- [Slack notifications →](./slack-notifications.md)
- [Webhook payload format →](./webhook-payload-format.md)
- [Zapier/Make/n8n automation →](./zapier-make-n8n-automation.md)
- [Integrations and notifications →](./integrations-and-notifications.md)
