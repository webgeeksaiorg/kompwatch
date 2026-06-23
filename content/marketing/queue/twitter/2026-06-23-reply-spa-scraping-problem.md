---
platform: twitter
type: reply
target: dev/indie hacker threads about scraping or monitoring tools
status: ready
score: 8/10
keywords: [web scraping SPAs, competitor monitoring technical, playwright scraping]
scheduled: 2026-06-23
---

Fun thing about monitoring competitor websites: ~40% of SaaS pricing pages are now React/Vue apps.

Simple HTTP scrapers miss all of it. The page loads, they get an empty div, report "no change."

Playwright-based scraping (headless browser, wait for JS to render) is the only reliable way. Slower, more memory. Worth it.

Still breaks on lazy-loaded content tbh.
