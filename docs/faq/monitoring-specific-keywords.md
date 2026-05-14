# Can KompWatch Alert Me When a Competitor Mentions a Specific Word or Phrase?

Keyword-specific alerting is on the roadmap. Here is what KompWatch supports today and how to get close to keyword monitoring with the current feature set.

---

## What KompWatch Does Today

KompWatch detects **structural and content changes** on competitor pages — when text is added, removed, or rewritten — and uses AI to classify and summarize what changed. It does not yet support alerting on the presence of a specific keyword or phrase.

---

## Getting Close to Keyword Monitoring Now

### 1. Monitor the right page with a tight CSS selector

If you want to know when a competitor adds "SOC 2" or "HIPAA" to their security page, monitor that specific page with a selector scoped to the relevant content:

- Go to **Competitors → [Name] → Edit** and add a URL for the security or compliance page
- Set the selector to the main content area (e.g. `main`, `.content`, `#compliance`)

When the page changes, the AI-generated summary will describe what was added or removed — including any new certifications or terminology.

### 2. Read the AI summary, not just the severity badge

KompWatch's change summaries quote significant new text verbatim. If a competitor adds "We are now SOC 2 Type II certified" to their security page, the digest will include that exact language. You don't need a keyword filter to catch it — the summary surfaces it.

### 3. Use the Change History tab for post-hoc search

Under **Competitors → [Name] → Change History**, you can browse the full text of each AI-generated change summary. Ctrl+F in your browser works if you are looking for a specific term across recent changes.

---

## Keyword Alerts Are on the Roadmap

Dedicated keyword/phrase alert rules — "notify me the moment any monitored page contains the phrase X" — are planned. When this ships, you will be able to:

- Define a keyword list per competitor or globally
- Set severity and alert delivery (digest vs. real-time webhook) per keyword rule
- Get instant Slack/email pings the moment a match appears

**To be notified when keyword alerts launch**, email [support@kompwatch.com](mailto:support@kompwatch.com) with your use case — demand shapes the build order.

---

## Common Keyword Monitoring Use Cases and Current Workarounds

| What you want to catch | Current approach |
|---|---|
| Competitor adds a compliance cert (SOC 2, ISO 27001, HIPAA) | Monitor `/security` page, selector `main` |
| Competitor mentions a specific integration (Salesforce, HubSpot) | Monitor `/integrations` page |
| Competitor starts using "enterprise" or "SSO" language | Monitor homepage and `/pricing` page |
| Competitor announces a partnership or acquisition | Monitor `/blog` or `/news` — changes alert within hours of a post going live |
| Competitor changes how they describe a feature you compete on | Monitor the feature page with a tight selector |

---

## Related Articles

- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)
- [Which Pages to Monitor Per Competitor](./which-pages-to-monitor-per-competitor.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [AI Confidence Scoring — How KompWatch Filters Change Noise](./ai-confidence-scoring.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
