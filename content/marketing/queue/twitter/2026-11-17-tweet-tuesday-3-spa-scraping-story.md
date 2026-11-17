---
platform: twitter
type: tweet
status: draft
keywords: [SPA scraping, competitor monitoring tool, React website tracking, playwright scraping]
---

Spent 3 weeks getting the scraper to work on React SPAs.

The problem: by the time Playwright loads the page, the DOM has rewritten itself twice and what I diffed was hydration noise.

Fix was ugly: wait for network idle, then wait an extra 800ms, then snapshot.

Still breaks on a few sites. But 90% of pricing pages aren't that fancy.
