---
platform: twitter
type: reply
target: anyone debating whether to DIY competitor tracking with scripts vs buying a tool
status: ready
score: 8/10
keywords: [DIY competitor tracking script, automate competitor monitoring, competitor tracking python script]
scheduled: 2026-07-08
---

I did the DIY script path first. Wrote a cron job, diffed the HTML, emailed myself the raw diff.

Problems:
- HTML diffs are unreadable (layout shifts everywhere)
- JavaScript-rendered pages: nothing
- Managing broken selectors = maintenance job
- No summary — just a blob of added/removed HTML

Kept the architecture, rebuilt the hard parts, added AI summaries. Now it's a product instead of a weekend project that breaks on Tuesdays.
