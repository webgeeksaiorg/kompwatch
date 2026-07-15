---
platform: reddit
type: comment
target: r/SaaS
status: queued-no-creds
score: 8/10
keywords: [how to monitor competitor website changes, competitor tracking SaaS, automate competitor monitoring]
scheduled: 2026-07-15
---

We did the manual version for about two years. Monday morning, six browser tabs, write notes in Notion.

Two problems with that:
1. Things that change on Tuesday don't get caught until the following Monday.
2. The person who did it left and we realized the process lived entirely in their head.

Ended up building a scraper that watches specific pages and diffs them. Headless Chromium because about half of competitor pricing pages are React apps that don't render in plain HTML requests. Then AI summarizes the diffs into English.

Run it every 6 hours now. Still misses stuff on SPAs that load data from separate API endpoints. That's the hard part nobody mentions.

If you're doing this manually and it's working, keep doing it. The automation only makes sense if manual checking is genuinely the bottleneck.
