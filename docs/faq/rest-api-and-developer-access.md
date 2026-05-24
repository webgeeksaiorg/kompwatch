# REST API and Developer Access

KompWatch offers several ways to access your competitive intelligence data programmatically. Team plan users get API key authentication (prefix `kw_`) and full access to the MCP server. All plans get webhook push and session-authenticated export endpoints.

---

## What's Available Today

| Method | Direction | Auth | Plan | Best for |
|--------|-----------|------|------|----------|
| **MCP server** | Pull (interactive) | API key (`kw_`) | Team | AI assistants — Claude Desktop, Cursor |
| **Webhooks** | Push (event-driven) | HMAC signature | Pro + Team | Real-time integrations, Slack bots, automation |
| **Export endpoints** | Pull (on-demand) | Session cookie | All | Scripts, BI tools, scheduled exports |
| **CSV / JSON download** | Pull (manual) | Browser session | All | Ad-hoc analysis, spreadsheets |

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

## MCP Server Integration (Team Plan)

The KompWatch MCP server is live. It lets AI assistants like Claude Desktop or Cursor query your competitive intelligence data in real time — asking questions like "what has Acme changed in the past 30 days?" from inside an AI workflow.

**Endpoint:** `https://kompwatch.com/api/mcp`
**Auth:** `Authorization: Bearer kw_<your_api_key>`
**Plan required:** Team ($149/mo)

Generate your API key in **Settings → API Keys**.

Available tools: `list-competitors`, `get-competitor`, `search-changes`, `get-digest-summary`

See [MCP Server and AI Integrations](./mcp-server-and-ai-integrations.md) for full setup instructions, tool reference, and Claude Desktop / Cursor config examples.

---

## Public REST API (Roadmap)

A broader key-authenticated REST API (write operations, snapshot triggers, pagination) is on the roadmap. Current programmatic access is via the MCP server (Team) and export endpoints (all plans).

If you have a specific use case that would unblock automated reports, custom dashboards, or internal tooling — email [support@kompwatch.com](mailto:support@kompwatch.com) with a description. Use-case demand shapes what ships first.

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
