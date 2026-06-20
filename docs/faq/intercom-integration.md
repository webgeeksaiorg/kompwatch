# Does KompWatch integrate with Intercom?

**Yes — via webhooks or Zapier/Make/n8n.** There's no native Intercom button in KompWatch yet, but CS and support teams use KompWatch competitor alerts inside Intercom today through two routes:

---

## Option 1: Webhook → Intercom (recommended for developers)

KompWatch fires a webhook on every detected competitor change. You can pipe that into Intercom as a note, article trigger, or internal bot message.

**Setup:**
1. In KompWatch → **Settings → Integrations → Webhooks**, add your endpoint URL.
2. Forward the payload to Intercom's [Incoming Webhooks](https://www.intercom.com/help/en/articles/170-integrate-intercom-with-other-apps) or use a lightweight proxy (Cloudflare Worker, Vercel function).
3. Map `competitor`, `change_type`, and `summary` fields to an Intercom Internal Note or Custom Bot trigger.

**Use cases:**
- Notify your CS team in Intercom when a tracked competitor changes pricing (so reps can proactively address churn risk in open conversations)
- Surface competitor feature launches to support agents handling questions about missing features

---

## Option 2: Zapier / Make / n8n (no-code)

**Zapier path:**
1. Trigger: **Webhooks by Zapier** → catch KompWatch webhook
2. Action: **Intercom → Create Note** or **Send a Message**

**Make (Integromat) path:**
1. Module: **Webhooks → Custom webhook** (catch KompWatch payload)
2. Module: **Intercom → Create a Note** on a conversation or contact

See also: [Zapier/Make/n8n automation →](./zapier-make-n8n-automation.md)

---

## What gets sent?

Each KompWatch webhook includes:
```json
{
  "competitor": "Acme Corp",
  "url": "https://acmecorp.com/pricing",
  "change_type": "PRICING",
  "severity": "HIGH",
  "summary": "Pricing page updated — Enterprise tier added at $299/mo",
  "detected_at": "2026-06-20T10:00:00Z"
}
```

You can filter in Zapier/Make to only route `HIGH` severity or specific `change_type` values (PRICING, FEATURE, CONTENT) to Intercom.

---

## Native Intercom integration

A native Intercom integration (one-click connect, App Inbox card) is on the product roadmap. Subscribe to [KompWatch product updates](https://kompwatch.com/changelog) to be notified when it ships.

---

## Still have questions?

Reply to any KompWatch email or use the in-app chat and a team member will follow up within 24h.
