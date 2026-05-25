---
platform: twitter
type: reply
target: someone asking if DIY competitor monitoring with cron + curl is worth it
status: ready
keywords: [DIY competitor monitoring, build vs buy, cron job competitor tracking, competitor monitoring script]
---

I did exactly this for 18 months. curl + diff + cron + email. Breaks on:

- JavaScript-rendered content (most modern SaaS landing pages)
- Cloudflare bot protection
- Sites that minify CSS differently each deploy

Totally worth building to understand the problem. Not worth maintaining long-term.
