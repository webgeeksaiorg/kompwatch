---
platform: reddit
type: comment
target: r/saas or r/startups — threads about competitor monitoring / website change tracking
status: ready
score: 8/10
keywords: [competitor monitoring tips, css selector website tracking, playwright scraping]
---
Something that cut our false positive rate by ~70%: targeting a specific CSS selector instead of watching the whole page.

SaaS sites have a ton of dynamic content — live user counters, rotating testimonials, cookie consent banners — that generates constant noise if you diff the full page. If you care about the pricing table, just target `.pricing-table` or whatever the wrapper is. Way cleaner signal.

For scraping: the only thing that handles modern SPAs reliably is a headless browser (we use Playwright). curl/requests misses everything on React apps. The raw HTML diffs are still unreadable (pricing page = 4,000 lines of HTML), so we pipe them through Claude to get a one-paragraph plain-English summary.

If you're DIYing this: that stack works. Takes a few weekends to get right but it does the job.

(We also wrapped all of this into a product — kompwatch.com — if the DIY route isn't appealing.)
