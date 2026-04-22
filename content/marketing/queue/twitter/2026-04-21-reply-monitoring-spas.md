---
platform: twitter
type: reply
target: threads about scraping / monitoring JavaScript-heavy sites
status: draft
keywords: [playwright scraping, SPA monitoring, competitor website tracking]
---
SPAs are the bane of any monitoring setup. Static HTML diffing breaks completely on React/Next.js pages. We switched to Playwright + waiting for network idle, then capturing the rendered DOM. Still breaks on some sites with dynamic session tokens. No perfect solution, but it's 10x better than naive HTTP fetching.
