# What Is KompWatch's AI Agent?

When KompWatch's homepage describes itself as "your AI agent for competitive intelligence," here's exactly what that means — and what it doesn't.

## The Short Answer

KompWatch runs two automated processes continuously on your behalf:

1. **A monitoring agent** — a headless browser (Playwright/Chromium) that visits each competitor URL on your plan's schedule, captures snapshots, and compares them to detect changes.
2. **An interpretation agent** — Claude AI reviews every detected change, classifies it (pricing, features, content, visual), scores its strategic severity, and writes a plain-English summary.

Together, these run 24/7 without you doing anything. That's the "agent" in the name: work that runs for you automatically, not a chatbot you query.

## How It Works, Step by Step

1. **You add a competitor URL** and optionally a CSS selector to target a specific page section.
2. **The monitoring agent visits that URL** on your plan's snapshot schedule (hourly, every 6h, or daily).
3. **Changes are detected** by diffing the new snapshot against the previous one. Noise — cookie banners, timestamps, ad content — is filtered automatically.
4. **The AI agent interprets the change**: "Acme raised their Pro tier from $49/mo to $69/mo and added two new seats to the Team plan."
5. **You get an alert** — by email digest, or Slack/webhook for high-severity changes.

You were never asked to check anything. The agent checked for you.

## What "AI Agent" Does NOT Mean Here

The term "AI agent" is overloaded. KompWatch's monitoring agent is **not**:

- **An autonomous LLM agent** — it doesn't browse the web on its own, chain tool calls, or reason about what to look at next. You configure which URLs to monitor.
- **A chatbot or Q&A interface** — it doesn't answer "what does Acme do?" from training data. (For that, use ChatGPT — it's genuinely better at it. See [Can I Use ChatGPT Instead of KompWatch?](./chatgpt-vs-website-monitoring.md))
- **A battlecard AI** — it doesn't maintain a curated corpus of competitive intel or embed answers into Salesforce. (That's what Klue Compete Agent does. See [Klue Compete Agent vs KompWatch](./klue-compete-agent-vs-kompwatch.md))

## The Distinction That Matters

| | KompWatch AI Agent | LLM / ChatGPT | Klue Compete Agent |
|---|---|---|---|
| Monitors live websites automatically | ✓ | ✗ (knowledge cutoff) | ✗ (requires curation) |
| Detects changes without you checking | ✓ | ✗ | ✗ |
| Answers "what did they change last week?" | ✓ | ✗ | ✗ |
| Answers "what does Acme do?" | Limited | ✓ | ✓ |
| Battlecards / win-loss workflows | ✗ | ✗ | ✓ |
| Requires no analyst to operate | ✓ | ✓ | ✗ |

## Why "Agent" Is the Right Word

The classic definition of an agent is a system that perceives its environment and takes actions on your behalf. KompWatch's monitoring layer perceives (snapshots competitor pages), reasons (AI classification + severity scoring), and acts (sends you the relevant alert). It runs in the background, unsupervised, doing work you'd otherwise have to do manually.

That's the promise: add competitors once, and the agent handles the rest.

## Does KompWatch Use an MCP Server?

Yes — on the Team plan, KompWatch exposes an MCP server that lets AI tools (Claude, Cursor, etc.) query your competitive intelligence feed programmatically. This means you can ask an LLM to synthesize competitive context using KompWatch's live change data rather than training data.

See [MCP Server and AI Integrations](./mcp-server-and-ai-integrations.md) for setup details.

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*

*Related: [How Competitor Monitoring Works](./how-monitoring-works.md) · [Can I Use ChatGPT Instead?](./chatgpt-vs-website-monitoring.md) · [Klue Compete Agent vs KompWatch](./klue-compete-agent-vs-kompwatch.md)*
