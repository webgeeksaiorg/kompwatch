---
platform: twitter
type: reply
target: threads about building DIY competitor monitoring, scraping competitor websites
status: ready
keywords: [DIY competitor monitoring, Playwright scraping, competitor tracking cron job]
---
The DIY stack breaks at one of three places:

1. JS-rendered pages — cURL doesn't see what users see. Need Playwright or Puppeteer.
2. Rate limiting — hit the same URL hourly and you'll get blocked or CAPTCHAs inside a week.
3. Maintenance — the cron job works until it doesn't, nobody notices for 3 weeks.

I went through all three. Happy to share the Playwright setup if useful.
