---
platform: reddit
type: comment
target: r/SaaS, r/ProductManagement — threads about tracking competitor websites or CI tools
status: ready
score: 8.5/10
keywords: [track competitor website changes, competitor monitoring reddit, free competitor tracking tools]
scheduled: 2026-07-08
---

Been doing this manually for a long time. Couple things that actually matter in practice:

Google Alerts sounds like the answer but it's not — it only catches content that gets indexed, which means press releases and blog posts. Your competitor's /pricing page doesn't send a signal when they add a new tier or bump their price 15%. Neither does their /features page when they quietly reposition.

The stuff that shows up in sales conversations is almost never announced. It just changes.

Two approaches that work:

1. **If you want free:** set up a cron job with wget + diff. Readable if you do it against text content only (strip tags first). Breaks on JS-rendered pages though and you'll spend half your time debugging broken scripts.

2. **If you want to not think about it:** tool that does headless rendering + change detection. I built one ($49/mo) because I got tired of the cron job breaking every time a competitor migrated to a React SPA.

The six pages that actually matter: /pricing, /features, /home, /changelog, /blog (titles only), /careers. Watch those and you know what they're doing before they announce it.

What's your current setup?
