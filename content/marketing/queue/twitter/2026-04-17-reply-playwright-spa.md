---
platform: twitter
type: reply
target: threads about web scraping, Playwright, or monitoring SPA sites
status: ready
keywords: [Playwright scraping, SPA monitoring, web scraper]
---
SPAs are the enemy of good web monitoring.

Playwright can handle them but the timing is finicky — if you snapshot too early you're diffing against a loading skeleton, not the actual content.

3 weeks on this problem. Still have edge cases. The scraper works great on static sites and most Next.js apps. SPAs with heavy client-side rendering are still annoying.
