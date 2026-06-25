---
platform: reddit
type: comment
target: r/SaaS or r/startups — threads about tracking competitors or competitive intel
status: ready
score: 8/10
keywords: [competitor pricing alert, track competitor website changes, SaaS competitive monitoring]
scheduled: 2026-07-01
---

The "I found out from a prospect" scenario is brutal. Been there.

Competitor had dropped their entry price by $20/mo. Three weeks earlier. I only found out because a prospect mentioned it casually mid-demo, and I had to keep a straight face while mentally updating my entire pricing conversation in real time.

The thing is, they don't announce pricing changes. No press release. No LinkedIn post. They just update the page and hope nobody notices immediately (especially their existing customers).

Google Alerts won't catch it — there's nothing to index. HTTP-based monitoring misses JavaScript-rendered pricing pages (most of them now). Headless browser monitoring with AI summaries is the only reliable path.

I built KompWatch specifically for this — monitors pricing/feature pages with Playwright, explains what changed in plain English. $49/mo. No 12-month contract.

But honestly, even setting up a free changedetection.io instance and being aware it'll miss JS pages is better than manual tab-checking every Monday.
