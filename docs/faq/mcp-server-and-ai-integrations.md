# Does KompWatch Have an MCP Server?

Not yet. MCP (Model Context Protocol) server support is on our radar. Both Crayon and Klue have recently shipped MCP servers for their platforms. Here's where KompWatch stands and what's coming.

## What Is an MCP Server?

MCP is an open standard that lets AI assistants (like Claude Desktop, Cursor, or other MCP-compatible tools) query external data sources in real time. An MCP-enabled CI tool lets Claude query your competitive intelligence data from inside an AI workflow — asking things like "what has Acme changed in the past 30 days?" without leaving your AI assistant.

## Does KompWatch Support MCP Today?

No — KompWatch does not currently ship an MCP server. Competitive intelligence data is delivered via **email digest** and **webhooks** (Slack, Teams, or any HTTP endpoint).

## Can I Still Use KompWatch Data in AI Workflows?

Yes, via webhook + automation:

1. **Outbound webhook** — in **Settings → Webhooks**, configure a webhook URL. KompWatch will POST a JSON payload of new changes to that endpoint whenever your digest fires.
2. **Route to your AI tool** — use Zapier, Make, or a custom function to forward that payload to wherever you run AI workflows.

The payload includes competitor name, change type, severity, and the AI-generated summary — so a downstream prompt already has structured input to work with.

## Is an MCP Server on the Roadmap?

We're evaluating it. If you want native MCP support — the ability to query KompWatch data from Claude Desktop or another MCP client — email [support@kompwatch.com](mailto:support@kompwatch.com) with your use case. Use-case demand helps us prioritize.

## How Does This Compare to Crayon's and Klue's MCP Servers?

Both Crayon ($5K–$80K+/yr) and Klue (enterprise pricing) have shipped MCP server integrations — a sign that AI workflow integration is becoming table stakes for enterprise CI platforms. For most teams, those price points are a steep bar.

KompWatch focuses on delivering clean, structured competitive signals via email and webhook — the same intelligence that an MCP server would expose, delivered where most teams already look. MCP support is a natural next step we're building toward as AI-native workflows become more common across smaller teams.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
