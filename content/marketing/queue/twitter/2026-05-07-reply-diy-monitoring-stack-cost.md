---
platform: twitter
type: reply
target: threads about building DIY competitor monitoring stack
status: ready
score: 9/10
keywords: [DIY competitor monitoring, Playwright scraper, competitor tracking build vs buy]
---
Built the DIY version before KompWatch. Playwright cron job, difflib for comparison, Claude API for plain-English summaries, Resend to email the results.

Two weekends. Works well. Total running cost: ~$15-20/month in API usage for 10 competitors on daily snapshots.

Still breaks on SPAs that need a login, on sites with aggressive bot detection, and on anything using a shadow DOM. Wrote about 3 weeks of debugging time into those edge cases. That's the real cost — not the API bill.
