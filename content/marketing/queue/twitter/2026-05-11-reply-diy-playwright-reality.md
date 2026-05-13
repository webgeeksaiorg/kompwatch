---
platform: twitter
type: reply
target: threads about building DIY competitor monitoring with Playwright/Python
status: ready
score: 8/10
keywords: [DIY competitor monitoring, Playwright competitor scraping, build vs buy scraping]
---
Built the DIY version before building KompWatch. Playwright + cron + HTML diffing + Claude API to summarize.

It works. Until:
- SPAs render after JS execution and the diff is worthless
- Cloudflare blocks the headless browser
- The diff output is 800 lines of CSS changes and one real content change buried in the middle
- You need to maintain it across 10+ competitors

3 weeks to build. ~2 hours/month to maintain. For 2-3 competitors, probably worth it. For 10+, the maintenance compounds.
