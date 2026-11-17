---
platform: reddit
type: comment
target: r/SaaS or r/startups — thread about competitive research process
status: draft
keywords: [how to monitor competitors, saas competitor tracking, competitive research process]
---

The thing that helped me most was narrowing scope down to 3 pages per competitor: pricing, features/product, and homepage.

Everything else (blog, careers, docs) generates too much noise for too little signal. Careers matters if you're specifically interested in what engineering areas they're investing in, but even then it's a weekly check, not daily.

I automated the page checks with a cron job that diffs the HTML and runs the diff through Claude to summarize what actually changed in English. For most SaaS companies, their pricing page changes maybe once a quarter. Features page changes 2-3x per quarter. Homepage repositioning is rare but high-signal when it happens.

The old way: 6 browser tabs pinned, check manually every Monday, miss half the changes.
The current way: one email on Monday morning summarizing what changed across all 12 competitors last week.

Time spent went from ~90 minutes to 5 minutes. The 5 minutes is reading the digest. Worth every second of the build time.
