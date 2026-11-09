---
platform: twitter
type: reply
target: "@dev asking if Playwright is good for tracking competitor website changes"
status: queued-no-creds
keywords: [Playwright scraping, DIY competitor monitoring, build vs buy CI tool]
score: 7.5
---
Playwright is excellent for it. The first version of KompWatch was literally a Playwright cron job + a Notion webhook.

Where the DIY approach breaks down: anti-bot detection (Cloudflare, bot protection headers), handling SPAs that render content client-side, and the diff logic — stripping out the HTML noise so you get signal, not "timestamp changed."

Worth building if you enjoy the infra. Worth buying if you don't.
