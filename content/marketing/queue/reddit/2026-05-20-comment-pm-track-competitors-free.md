---
platform: reddit
type: comment
target: r/ProductManagement or r/startups — threads about how PMs track competitors without big budgets
status: queued-publish-failed-no-creds
keywords: [competitor monitoring free, track competitor website PM, competitive intelligence startup, no budget CI]
---
We do a hybrid that works pretty well for our stage:

1. Google Alerts for company name mentions — catches press coverage, job postings sometimes
2. Playwright-based scraper watching specific sections of their pricing and features pages (not the whole site, just the bits that matter)
3. AI summarization on the diffs — otherwise you're reading raw HTML changes

The scraper part is what most people skip because it requires setup. But it's the difference between knowing a competitor changed their pricing on Tuesday vs finding out during a Friday demo call.

I eventually turned the scraper into a product (kompwatch.com) because I got tired of maintaining the DIY version. But honestly the DIY approach above works if you can handle the maintenance overhead.

---
self-check: 8/10
