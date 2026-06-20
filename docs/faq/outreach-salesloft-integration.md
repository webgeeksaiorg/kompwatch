# Does KompWatch integrate with Outreach or Salesloft?

**Yes — via webhooks or Zapier/Make/n8n.** SDR and AE teams use KompWatch competitor alerts inside their sales engagement platforms to update sequences, add prospect notes, and time outreach around competitor moves.

---

## Why connect KompWatch to your SEP?

When a tracked competitor raises prices, changes positioning, or launches a new feature, your sales team should know immediately — not a week later in a digest email. Routing high-severity competitor changes into Outreach or Salesloft lets you:

- Pause or update sequences that reference outdated competitor pricing
- Tag prospects who mentioned the competitor with a "Competitor price change — follow up" task
- Trigger a new sequence step with updated battlecard language

---

## Option 1: Webhook → Outreach (developer path)

1. In KompWatch → **Settings → Integrations → Webhooks**, add a webhook URL.
2. Use [Outreach's REST API](https://developers.outreach.io/) or a proxy to create a Sequence Step, Note, or Task when a change is detected.
3. Filter by `change_type: PRICING` or `severity: HIGH` to avoid noise.

**Example: auto-create a task for every prospect tagged with a competitor on a PRICING change**
```
KompWatch webhook → Cloudflare Worker → Outreach API → Create Task on matching Prospects
```

---

## Option 2: Zapier / Make / n8n (no-code)

**Zapier path (Outreach):**
1. Trigger: **Webhooks by Zapier** → catch KompWatch payload
2. Filter: `severity = HIGH` and `change_type = PRICING`
3. Action: **Outreach → Create Task** or **Update Sequence**

**Zapier path (Salesloft):**
1. Trigger: **Webhooks by Zapier** → catch KompWatch payload
2. Action: **Salesloft → Create Note** on a Person or Account

**Make (Integromat) path:**
1. Module: **Webhooks → Custom webhook**
2. Router: split by `change_type` (PRICING / FEATURE / CONTENT)
3. Module: **HTTP → Make a request** to Outreach or Salesloft API

See also: [Zapier/Make/n8n automation →](./zapier-make-n8n-automation.md)

---

## What does the KompWatch webhook payload look like?

```json
{
  "competitor": "Acme Corp",
  "url": "https://acmecorp.com/pricing",
  "change_type": "PRICING",
  "severity": "HIGH",
  "summary": "Pricing page updated — Enterprise tier removed, new flat-rate $199/mo",
  "detected_at": "2026-06-20T10:00:00Z",
  "diff_url": "https://app.kompwatch.com/changes/abc123"
}
```

Map `summary` to a Note body and `competitor` to filter which Prospects or Accounts to update.

---

## Recommended workflow for sales teams

| Competitor change | Recommended SEP action |
|---|---|
| PRICING change (HIGH) | Create task: "Competitor pricing update — review battlecard before next call" |
| FEATURE launch (HIGH) | Add note to all prospects who mentioned the competitor |
| CONTENT change (MEDIUM) | Log to activity feed only — no task |
| PRICING change (LOW) | Skip — minor wording only |

---

## Native SEP integration

A native Outreach / Salesloft integration is on the product roadmap. Subscribe to [KompWatch product updates](https://kompwatch.com/changelog) to be notified when it ships.

If you have a specific use case in mind, email **support@kompwatch.com** — high-demand integrations get prioritized.

---

## Related

- [Salesforce integration →](./salesforce-integration.md)
- [HubSpot integration →](./hubspot-integration.md)
- [Zapier/Make/n8n automation →](./zapier-make-n8n-automation.md)
- [Webhook payload format →](./webhook-payload-format.md)
