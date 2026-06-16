---
title: Is KompWatch Open Source? Can I Self-Host It?
description: KompWatch is a closed-source SaaS. Here's why, and what that means for your data, privacy, and vendor risk.
---

# Is KompWatch Open Source? Can I Self-Host It?

KompWatch is **not open source**. It is a hosted SaaS product. There is no self-hosted option today.

---

## Why Not Open Source?

A few honest reasons:

**1. Operational complexity is the hard part.** The KompWatch free tier works immediately because we manage the infrastructure — Playwright headless browsers, rotating proxies, anti-bot handling, cron scheduling, AI API calls, email delivery. Running this reliably takes active maintenance. Shipping a self-hosted Docker image would shift that maintenance to you, and most teams find it's not worth it versus just using the managed version.

**2. We need sustainable revenue.** KompWatch is built by a small, independent team. Selling a SaaS subscription is how we pay for infrastructure and development. An open-source core with a paid cloud layer is a business model some indie SaaS products use, but it's not where we are today.

**3. The AI layer changes constantly.** Prompt engineering, confidence scoring, change classification, and digest formatting improve frequently. Keeping a self-hosted version in sync with cloud-hosted improvements would be a maintenance burden we can't responsibly support.

---

## What About Data Privacy / Vendor Lock-in?

Reasonable concerns. Here's what we offer:

- **Export anytime** — all your competitor data, change history, and digests can be exported as CSV or JSON from the dashboard. See [Exporting Your Data](./exporting-your-data.md).
- **No lock-in by design** — KompWatch monitors public competitor websites. If you leave, you keep your exported data and can re-add competitors elsewhere. Nothing we track is data only we can access.
- **Data security** — all data is encrypted in transit and at rest. See [Data Security](./data-security.md) for the technical details.
- **GDPR compliance** — data deletion requests are handled within 30 days. See [GDPR & Data Deletion](./gdpr-data-deletion.md).

---

## What If KompWatch Shuts Down?

We've written about this honestly: [What Happens If KompWatch Shuts Down?](./what-happens-if-kompwatch-shuts-down.md). The short version: export your data before you need it, don't depend on any single vendor for mission-critical intelligence, and the free tier means you can evaluate us indefinitely before committing.

---

## Can I Use the Free Snapshot Without Giving You Anything?

Yes. The [free competitor snapshot](/free-snapshot) requires no account, no email, and no credit card. Paste a competitor URL, get an AI-powered analysis on-screen in seconds. No data retained beyond the session.

---

## Is There a Public API / Can I Integrate With My Own Tools?

Yes. The REST API is available on the Pro and Team plans. See [REST API & Developer Access](./rest-api-and-developer-access.md).

There is also an MCP server if you want to query your KompWatch competitor data from Claude, Cursor, or other AI tools that support the Model Context Protocol. See [MCP Server & AI Integrations](./mcp-server-and-ai-integrations.md).

---

*Related: [Data Security](./data-security.md) · [Exporting Your Data](./exporting-your-data.md) · [What Happens If KompWatch Shuts Down?](./what-happens-if-kompwatch-shuts-down.md) · [Switching from ChangeDetection.io](./switching-from-changedetection.md)*
