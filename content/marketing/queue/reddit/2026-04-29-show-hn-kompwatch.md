---
platform: reddit
type: post
target: hackernews (Show HN)
status: ready
score: 8.5/10
keywords: [competitor monitoring, Crayon alternative, competitor website changes, indie SaaS tool]
---
Show HN: I built a $49/mo alternative to $30K/year Crayon

Two years ago I had six browser tabs pinned to competitor pricing pages. Every Monday morning I'd manually check each one and take mental notes on what changed.

It was tedious, error-prone, and I kept missing changes that happened on Wednesdays.

Crayon and Klue solve this — for $20–40K/year with a dedicated analyst to run them. That's not a startup option.

So I built KompWatch. It:
- Watches competitor websites with a real headless browser (Playwright, not raw HTML fetching — so it works on JavaScript-rendered pages)
- Diffs snapshots and uses AI to translate the changes into plain English
- Emails you a digest: "Competitor A added a new $99/mo tier. Competitor B removed their free plan."

Pro plan is $49/month for 10 competitors checked every 6 hours.

The thing I kept running into when researching this space: every tool was either too simple (Visualping — good for static pages, misses JS-rendered content) or too complex and expensive (Crayon/Klue — great if you have a CI analyst, overkill if you don't).

Still pre-revenue, soft-launched last week. Would love feedback from anyone who's tried to solve this problem before.

kompwatch.com
