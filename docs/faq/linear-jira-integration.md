# Does KompWatch integrate with Linear or Jira?

**Yes — via webhooks or Zapier/Make/n8n.** Product and engineering teams use KompWatch competitor alerts to automatically create issues in Linear or Jira when a competitor ships a new feature, updates their docs, or changes their pricing.

---

## Why connect KompWatch to your issue tracker?

Competitor intelligence is only useful if it reaches the people building the product. Routing high-severity KompWatch changes into Linear or Jira lets you:

- Auto-create tickets when a competitor launches a feature your product doesn't have
- Tag issues with a "Competitive" label so PMs can prioritize roadmap work
- Keep a permanent, searchable record of competitor moves tied to sprint planning

---

## Option 1: Webhook → Linear or Jira (developer path)

1. In KompWatch → **Settings → Integrations → Webhooks**, add a webhook URL.
2. Use Linear's or Jira's REST API to create an issue when a change fires.
3. Filter by `change_type: FEATURE` or `severity: HIGH` to keep signal-to-noise high.

**Linear example (via Cloudflare Worker or Vercel serverless function):**
```
KompWatch webhook → serverless function → Linear API (createIssue mutation)
```

**Jira example:**
```
KompWatch webhook → serverless function → Jira REST API (POST /rest/api/3/issue)
```

---

## Option 2: Zapier / Make / n8n (no-code)

**Zapier path (Linear):**
1. Trigger: **Webhooks by Zapier** → catch KompWatch payload
2. Filter: `severity = HIGH`
3. Action: **Linear → Create Issue** with title from `summary` and label "Competitive"

**Zapier path (Jira):**
1. Trigger: **Webhooks by Zapier** → catch KompWatch payload
2. Filter: `change_type = FEATURE`
3. Action: **Jira Software Cloud → Create Issue** (Story or Task, project = your product backlog)

**Make (Integromat) path:**
1. Module: **Webhooks → Custom webhook**
2. Router: split by `change_type` (FEATURE / PRICING / CONTENT)
3. Module: **Jira Software → Create an Issue** or **HTTP → Make a request** to Linear API

See also: [Zapier/Make/n8n automation →](./zapier-make-n8n-automation.md)

---

## What does the KompWatch webhook payload look like?

```json
{
  "competitor": "Acme Corp",
  "url": "https://acmecorp.com/changelog",
  "change_type": "FEATURE",
  "severity": "HIGH",
  "summary": "Changelog updated — new 'AI Insights' feature announced",
  "detected_at": "2026-06-20T10:00:00Z",
  "diff_url": "https://app.kompwatch.com/changes/abc123"
}
```

Map `summary` to the issue title and `competitor` to a label or custom field.

---

## Recommended workflow for product teams

| Competitor change | Recommended issue action |
|---|---|
| FEATURE launch (HIGH) | Create issue: "Competitive — Acme shipped AI Insights, assess gap" |
| PRICING change (HIGH) | Create issue: "Competitive — Acme pricing change, update battlecard" |
| CONTENT change (MEDIUM) | Log to Slack only — skip issue creation |
| Any change (LOW) | Skip — weekly digest is enough |

---

## Native Linear / Jira integration

A native Linear and Jira integration is on the product roadmap. Subscribe to [KompWatch product updates](https://kompwatch.com/changelog) to be notified when it ships.

If your team needs a specific integration pattern, email **support@kompwatch.com** — high-demand integrations get prioritized.

---

## Related

- [Slack notifications →](./slack-notifications.md)
- [Webhook payload format →](./webhook-payload-format.md)
- [Zapier/Make/n8n automation →](./zapier-make-n8n-automation.md)
- [Integrations and notifications →](./integrations-and-notifications.md)
