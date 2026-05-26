---
platform: twitter
type: reply
status: draft
score: 8/10
keywords: [DIY competitor monitoring, Playwright scraping, competitor website tracking automation]
---
Nice setup. The requests + BeautifulSoup pipeline works right up until you hit a React SPA.

Those pages serve an empty HTML shell and populate content client-side. Your scraper grabs the loader, not the product.

Playwright or Puppeteer fixes it, but then you're maintaining headless browser infra, handling Cloudflare blocks, managing proxy rotation. The cron job is 20 lines. The browser automation wrapper turns into a weekend project.

What's on your monitoring list — mostly static pages or SPAs?
