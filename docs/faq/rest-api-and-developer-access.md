# REST API and Developer Access

KompWatch offers several ways to access your competitive intelligence data programmatically. There is no public key-authenticated REST API yet — it is on the roadmap — but current options cover most developer use cases.

---

## What's Available Today

| Method | Direction | Auth | Best for |
|--------|-----------|------|----------|
| **Export endpoints** | Pull (on-demand) | Session cookie | Scripts, BI tools, scheduled exports |
| **Webhooks** | Push (event-driven) | HMAC signature | Real-time integrations, Slack bots, automation |
| **CSV / JSON download** | Pull (manual) | Browser session | Ad-hoc analysis, spreadsheets |

---

## Export Endpoints (Pull)

The export endpoints documented in [Exporting Your Data](./exporting-your-data.md) are callable via `curl` or any HTTP client. They currently require a browser session cookie — there are no API keys yet.

### Changes

```bash
# All changes, JSON
curl -H "Cookie: <session>" \
  "https://kompwatch.com/api/export/changes?format=json"

# Changes for one competitor
curl -H "Cookie: <session>" \
  "https://kompwatch.com/api/export/changes?format=json&competitorId=<id>"

# Changes as CSV (default)
curl -H "Cookie: <session>" \
  "https://kompwatch.com/api/export/changes"
```

### Digests

```bash
# Specific digest as PDF
curl -H "Cookie: <session>" \
  "https://kompwatch.com/api/export/digests?digestId=<id>&format=pdf" \
  -o digest.pdf

# Specific digest as CSV
curl -H "Cookie: <session>" \
  "https://kompwatch.com/api/export/digests?digestId=<id>&format=csv"
```

**Getting a session cookie:**

1. Log into [kompwatch.com](https://kompwatch.com) in your browser
2. Open DevTools → Application → Cookies → `kompwatch.com`
3. Copy the value of the session cookie and pass it as `-H "Cookie: <name>=<value>"`

> Session cookies expire when your browser session ends or after 30 days of inactivity. For long-running scripts, re-authenticate and refresh the cookie periodically. API key authentication is coming with the public REST API.

---

## Webhooks (Push)

Webhooks are the recommended integration method for real-time or near-real-time workflows. KompWatch pushes a JSON payload to your endpoint whenever a change is detected and passes the confidence threshold.

- Available on **Pro** (digest cadence) and **Team** (real-time) plans
- Signed with HMAC-SHA256 so you can verify authenticity
- Payload includes `competitor`, `change`, `contentZone`, `severity`, `confidence`, and a deep link to the change in your dashboard

See [Webhook Payload Format](./webhook-payload-format.md) for the full schema, headers, signature verification, and retry behavior.

**Common webhook patterns:**

| Goal | Approach |
|------|----------|
| Post to Slack | Point webhook at a Slack incoming webhook URL — KompWatch auto-detects and formats it |
| Route by content zone | Use Zapier Paths or a custom middleware to fan out by `change.contentZone` |
| Trigger a CI pipeline | Forward the payload to a GitHub Actions or Buildkite webhook URL |
| Feed an AI workflow | Pipe the structured payload to an LLM prompt via Zapier or Make |

See [Filtering Slack Alerts by Content Zone](./filtering-alerts-by-content-zone.md) for a Zapier routing walkthrough.

---

## MCP Server Integration

KompWatch does not yet have an MCP server, but one is on the roadmap. MCP would let AI assistants like Claude Desktop or Cursor query your competitive intelligence data in real time — asking questions like "what has Acme changed in the past 30 days?" from inside an AI workflow.

In the meantime, you can feed KompWatch data into AI workflows via webhook → Zapier → your AI tool. The webhook payload already includes an AI-generated summary (`change.summary`), so downstream prompts get structured input without further processing.

See [MCP Server and AI Integrations](./mcp-server-and-ai-integrations.md) for details and the early-access sign-up.

---

## Public REST API (Roadmap)

A key-authenticated REST API covering competitors, snapshots, changes, and digests is on the roadmap. It will include:

- **API keys** — no session cookie required; suitable for server-to-server use
- **`GET /competitors`** — list all competitors and their status
- **`GET /competitors/:id/changes`** — paginated change history with filters
- **`GET /digests`** — list and retrieve digests
- **`POST /competitors/:id/snapshot`** — trigger an on-demand snapshot

If you have a specific use case that the REST API would unblock — automated reports, custom dashboards, internal tooling — email [support@kompwatch.com](mailto:support@kompwatch.com) with a description. Use-case demand shapes what ships first.

---

## Frequently Asked Questions

**Can I use the export endpoints in a scheduled script today?**
Yes — the cookie-authenticated endpoints work from any HTTP client. For long-running scripts, plan to refresh the session cookie periodically (every 30 days or after a new login).

**Is there a rate limit on the export endpoints?**
Export endpoints are not intended for high-frequency polling. Call them no more than once per digest cycle (daily for Pro, weekly for Free). For real-time data, use webhooks instead.

**Can I write data back via API — add competitors, trigger snapshots?**
Not yet via the public surface. Manual snapshot triggers are available from the UI (see [Manual Snapshot Trigger](./manual-snapshot-trigger.md)). Programmatic snapshot triggers are planned for the REST API.

**What format are IDs in the API responses?**
Competitor IDs are prefixed `cmp_` and change IDs are prefixed `chg_`. Both are short opaque strings (e.g. `cmp_a1b2c3`).

---

## Related Articles

- [Exporting Your Data](./exporting-your-data.md)
- [Webhook Payload Format](./webhook-payload-format.md)
- [MCP Server and AI Integrations](./mcp-server-and-ai-integrations.md)
- [Filtering Slack Alerts by Content Zone](./filtering-alerts-by-content-zone.md)
- [Integrations and Notifications](./integrations-and-notifications.md)

---

*Building something with KompWatch data? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we're happy to help with integration questions and will prioritize API features based on real use cases.*
