# Does KompWatch Have a Browser Extension?

KompWatch does not currently have a browser extension. All monitoring is handled automatically by the server-side snapshot engine — you don't need to install anything in your browser to track competitors.

---

## Why No Extension?

KompWatch's approach is server-side and schedule-driven:

- Competitor pages are crawled automatically on your plan's snapshot frequency (daily / 6h / hourly)
- Results are delivered to your email digest and Slack/Teams channel — no active browsing required
- Server-side snapshots are consistent and comparable: the same crawl parameters every cycle, which produces accurate diffs

Browser extensions trigger on *your* browsing activity, meaning you'd have to visit each competitor's page to capture a change. That's manual work — exactly what KompWatch replaces.

---

## What About Klue's Compete Agent?

Klue's Compete Agent is a browser extension and Slack app that captures sales content on demand and surfaces it to reps mid-deal. KompWatch addresses the underlying monitoring problem differently:

| Klue Compete Agent | KompWatch equivalent |
|---|---|
| Extension captures pages you visit | Server-side scheduler captures pages automatically |
| Manual trigger per visit | Automatic on plan cadence (daily / 6h / hourly) |
| Surfaces intel to reps via Slack app | Email digest + Slack/Teams webhook |
| Requires browser install | Zero install — dashboard + notifications only |

For a full comparison: [Klue Compete Agent vs KompWatch →](./klue-compete-agent-vs-kompwatch.md)

---

## API and MCP Access

KompWatch covers developer integration use cases via:

- **MCP server (live, Team plan)** — query your competitive intelligence from Claude Desktop, Cursor, or any MCP-compatible AI assistant. See [MCP Server and AI Integrations](./mcp-server-and-ai-integrations.md).
- **Public REST API** — on the roadmap; pull competitive data into any internal tool, CRM, or AI workflow
- **Webhooks (live, Pro+)** — real-time change events delivered to any endpoint. See [Webhook Payload Format](./webhook-payload-format.md).

If a browser extension is important to your workflow, email [support@kompwatch.com](mailto:support@kompwatch.com) with your use case — demand shapes the build order.

---

## How to Access KompWatch Without a Browser Extension

| Channel | How to access |
|---|---|
| **Dashboard** | [kompwatch.com/dashboard](https://kompwatch.com/dashboard) — full change history, filters, battlecard export |
| **Email digest** | Delivered on your plan cadence (weekly / daily / real-time) |
| **Slack / Teams** | Connect in Settings → Integrations — see [Integrations and Notifications →](./integrations-and-notifications.md) |
| **Webhook** | POST payloads to any endpoint — see [Webhook Payload Format →](./webhook-payload-format.md) |

---

## Related Articles

- [Klue Compete Agent vs KompWatch](./klue-compete-agent-vs-kompwatch.md)
- [Integrations and Notifications](./integrations-and-notifications.md)
- [Does KompWatch Have an MCP Server or API?](./mcp-server-and-ai-integrations.md)
- [Switching from Klue](./switching-from-klue.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
