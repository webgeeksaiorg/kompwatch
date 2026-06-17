---
platform: reddit
type: reply
target: r/saas or r/startups thread about competitor monitoring / google alerts
status: ready
score: 8/10
keywords: [google alerts competitor monitoring, competitor pricing monitoring, google alerts limitations]
---

Google Alerts is fine for catching brand mentions and press coverage. For monitoring actual product pages — pricing, feature tables, trial flow copy — it misses almost everything.

The reason: every modern SaaS pricing page is a React/Next.js app. Content loads client-side after JavaScript runs. Google Alerts crawls the raw HTML before JS executes, which is basically an empty div. So when your competitor changes pricing at 2 AM, Google Alerts sees the same empty shell it always has. Nothing to alert on.

I ran Alerts on 6 competitors for a year alongside manual Monday checks. Alerts caught 5 legitimate competitive changes. My weekly manual checks caught 11. And I still missed stuff that happened mid-week.

Eventually built something that runs headless Chromium on competitor pages every 6 hours — so the JavaScript actually executes and you see what's really there. Night and day difference in what gets caught.

Happy to share more about the technical approach if useful.
