# Which AI Tools and IDEs Work with KompWatch's MCP Server?

KompWatch's MCP (Model Context Protocol) server works with any MCP-compatible AI client. Here's the current compatibility status for the most common tools.

## Confirmed Compatible

| Tool | MCP Support | Notes |
|------|------------|-------|
| **Claude Desktop** (Anthropic) | ✓ Full | Native MCP support since v0.9. Recommended client for conversational competitive intel queries. |
| **Cursor** | ✓ Full | Settings → MCP → Add server. All four KompWatch tools available. |
| **Windsurf** (Codeium) | ✓ Full | Configure in `~/.codeium/windsurf/mcp_config.json`. Same JSON format as Claude Desktop. |
| **VS Code + GitHub Copilot** | ✓ Full (Copilot Agent Mode) | Add to `.vscode/mcp.json` in your workspace, or user-level settings. Requires GitHub Copilot with agent mode enabled. |
| **Zed** | ✓ Full | Configured via `assistant.mcp_servers` in Zed settings JSON. |
| **Continue.dev** | ✓ Full | Add as an MCP provider in `.continue/config.json`. |
| **Claude.ai web** (claude.ai) | ✓ Full (Projects with MCP) | Requires Claude Max or Claude for Teams plan with MCP Projects enabled. |
| **Cline (VS Code extension)** | ✓ Full | Add via Cline's MCP server panel in the VS Code sidebar. |
| **Open WebUI** | ✓ Partial | Supports MCP via tool-server integration. Configuration varies by deployment. |

## Not Yet Compatible

| Tool | Status | Notes |
|------|--------|-------|
| **ChatGPT** (OpenAI) | ✗ | OpenAI uses a different plugin/tool format. MCP is not supported. Use KompWatch webhooks + Zapier to push data to ChatGPT-based workflows. |
| **Gemini / AI Studio** | ✗ | Google has not implemented MCP. Same workaround applies. |
| **Perplexity** | ✗ | No MCP support. |
| **GitHub Copilot Chat (classic)** | ✗ | Only Copilot with Agent Mode enabled supports MCP. Classic chat does not. |

## Generic Configuration

All compatible clients use the same connection format. Replace `YOUR_API_KEY` with your key from **Settings → API**:

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

The config file location varies by client — see [KompWatch MCP Setup](./mcp-server-and-ai-integrations.md) for client-specific paths.

## What If My Tool Isn't Listed?

If your AI tool supports MCP and isn't listed above, try the generic configuration. MCP is a standardized protocol — any compliant implementation will work. If you run into issues, email [support@kompwatch.com](mailto:support@kompwatch.com) with your client name and version and we'll help troubleshoot.

## MCP vs. Webhooks vs. REST API

If your preferred tool doesn't support MCP, you have two alternatives:

- **Webhooks** — KompWatch sends a POST to your endpoint whenever a change is detected. Works with Zapier, Make, n8n, and any custom automation. See [Zapier / Make / n8n](./zapier-make-n8n-automation.md).
- **REST API** — Query your data programmatically. The MCP endpoint also accepts standard JSON API calls. See [REST API and Developer Access](./rest-api-and-developer-access.md).

## Which Plan Includes MCP Access?

MCP is available on the **Team plan** ($149/mo). Pro and Free accounts receive competitive data via email digest and webhooks only.

## Related Articles

- [KompWatch MCP Server — AI Workflow Integration](./mcp-server-and-ai-integrations.md)
- [Crayon MCP vs KompWatch MCP](./crayon-mcp-vs-kompwatch-mcp.md)
- [Integrations and Notifications](./integrations-and-notifications.md)
- [REST API and Developer Access](./rest-api-and-developer-access.md)

---
*Questions about MCP compatibility? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
