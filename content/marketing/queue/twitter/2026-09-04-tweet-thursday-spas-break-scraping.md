---
platform: twitter
type: tweet
status: queued-no-creds
keywords: [competitor monitoring, website tracking, SPA scraping, headless browser]
---

3 weeks building the scraper. Still breaks on SPAs.

Competitor loads React, renders client-side, my naive HTML diff sees... nothing. Page looks "unchanged" because the HTML is mostly the same shell.

Fix: full Playwright render, wait for network idle, THEN diff. Adds ~4s per page.

Worth it. Pricing tables are almost always client-rendered now.
