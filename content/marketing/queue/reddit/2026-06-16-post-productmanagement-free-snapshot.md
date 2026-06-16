---
platform: reddit
type: post
target: r/productmanagement
status: ready
score: 8/10
keywords: [competitor monitoring product management, track competitor website, free competitor snapshot]
ticket: 5e27
---
**Title:** We automate competitor website monitoring. Made the snapshot part free — no account needed.

Quick background: I built this after spending a year manually checking 6 competitor websites every Monday morning. Had a tab pinned for each pricing page. Half the time I'd forget. The other half I'd miss a change that happened on Wednesday and find out on Friday.

The thing we built: Playwright-based snapshots that capture fully-rendered competitor pages every 6 hours, AI diff summaries of what actually changed (not 4,000-line HTML dumps), alerts in your inbox.

**Made the snapshot tool free:** paste any competitor URL at kompwatch.com and get back a full rendered capture — no account, no email, nothing. You can see exactly what our scraper sees vs. what a curl would return. Most SaaS pricing pages load as blank divs without JavaScript execution.

**What we've actually caught that mattered:**
- A competitor dropping their entry plan price 40% at 4 AM (customer found out 6 hours later, had a sales call that afternoon)
- "Contact sales" replacing "Start free trial" on an enterprise tier — signals upmarket move
- A feature quietly removed from a base plan (not announced anywhere)

**Honest limitations:**
- Bot detection blocks ~15-20% of sites even with Playwright. Still don't have a great solution.
- Doesn't catch anything behind a login or in sales decks
- Social listening / G2 review tracking — not what we do

**The alternative approaches I tried:**
- Google Alerts: catches press releases, misses everything on actual product pages (JavaScript)
- changedetection.io: good for static sites, struggles on SPAs without careful config
- Manual Monday routine: works, just slow and relies on you remembering

Anyone else running into the competitor monitoring problem? Curious what you're doing for it — especially if you're tracking 10+ competitors across pricing, feature pages, and changelog pages.
