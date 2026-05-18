# KompWatch MCP Server — AI Workflow Integration

KompWatch ships a live MCP (Model Context Protocol) server that lets Claude Desktop, Cursor, and other MCP-compatible AI assistants query your competitive intelligence data in real time — directly inside your AI workflow.

## Which Plans Include MCP Access?

MCP access is available on the **Team plan** ($149/mo). Pro and Free accounts receive competitive data via email digest and webhooks only.

## What Tools Does the MCP Server Expose?

| Tool | Description |
|------|-------------|
| `list-competitors` | List all tracked competitors with latest change type, summary, severity, and snapshot/change counts |
| `get-competitor` | Detailed view of a specific competitor — recent changes, content zones, confidence scores, latest snapshot metadata (blog titles, job titles, tech stack) |
| `search-changes` | Search and filter changes across all competitors by type, severity, content zone, date range, or keyword |
| `get-digest-summary` | Competitive summary grouped by competitor — the same signal your email digest contains, queryable on demand |

## How Do I Connect to the MCP Server?

**Step 1 — Generate an API key:**
Go to **Settings → API** and click **Generate API key**. Copy it immediately — it's only shown once.

**Step 2 — Configure your MCP client:**

For **Claude Desktop**, add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "kompwatch": {
      "url": "https://kompwatch.com/api/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}
```

For **Cursor**, add it under **Settings → MCP → Add server** with the same URL and header.

**Step 3 — Test the connection:**
In Claude Desktop, try asking: *"What competitors am I tracking in KompWatch?"* — Claude will call `list-competitors` and return your data.

## What Can I Do With the MCP Integration?

Example queries you can ask Claude once connected:

- *"Show me all pricing changes from the last 30 days across my tracked competitors."*
- *"What has Acme changed in the last week? Any signals about their roadmap direction?"*
- *"Search for any changes mentioning 'enterprise' or 'annual' in the summaries."*
- *"Give me a competitive digest summary — group all recent changes by competitor."*
- *"Which competitor had the most HIGH-severity changes in the past month?"*

The MCP server only returns data scoped to your account — other users' competitors are never exposed.

## What Data Is Returned?

Each change includes:
- **Type**: `PRICING`, `FEATURE`, `BLOG`, `JOB`, `TECH`, or `GENERAL`
- **Content zone**: `POSITIONING`, `MONETIZATION`, `PRODUCT`, `MARKETING`, `TALENT`, `LEGAL`, `OPERATIONS`
- **Severity**: `LOW`, `MEDIUM`, `HIGH`, or `CRITICAL`
- **AI confidence score** and **signal score** (see [AI Confidence Scoring](./ai-confidence-scoring.md))
- **Plain-English summary** and extended details
- **Page URL** where the change was detected
- **Detected timestamp**

## How Do I Keep My API Key Secure?

- Store your API key in environment variables, not hardcoded in config files
- Rotate it from **Settings → API** if you suspect it's been exposed
- Your API key authenticates as your account — anyone with it can read your competitor data

## Is the MCP Server Stateless?

Yes. Each request is independently authenticated and executed — there's no persistent session. This means you can safely use it from multiple clients simultaneously.

## Can I Use This Without an MCP Client?

Yes — the MCP endpoint (`POST https://kompwatch.com/api/mcp`) can also be called directly as a JSON API if you're building a custom integration. Authentication is `Authorization: Bearer <api_key>` on every request.

## Related Articles

- [Integrations and Notifications](./integrations-and-notifications.md)
- [Webhook Payload Format](./webhook-payload-format.md)
- [AI Confidence Scoring](./ai-confidence-scoring.md)
- [Content Zone Classification](./content-zone-classification.md)
- [Data Security](./data-security.md)

---
*Questions about the MCP integration? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
