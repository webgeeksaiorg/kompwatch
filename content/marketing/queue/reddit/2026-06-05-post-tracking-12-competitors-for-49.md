---
platform: reddit
type: post
target: r/SaaS or r/Entrepreneur
status: queued
publish_date: 2026-06-05
keywords: [competitor monitoring affordable, track competitor websites, SaaS competitive intelligence budget]
---
**I used to spend every Monday morning checking 12 competitor websites. Then I automated it.**

For about 2 years I had a ritual: open 12 browser tabs, go through each competitor's pricing page, homepage, and features page, note anything that changed in a Notion doc.

45 minutes, every Monday. Without fail.

The problems:

1. I only caught changes that happened before Monday. If a competitor dropped pricing on Wednesday, I'd find out 5 days later.
2. I missed things. You stare at a page you've seen 50 times and your brain fills in what it expects to see.
3. It didn't scale. 12 competitors was already too many. I was definitely missing things.

So I built a cron job that diffs HTML pages and emails me summaries. Three weeks to get it working reliably. (SPA rendering was the hard part — if the page is React/Vue, a simple HTTP request just gets you a skeleton.)

Then added AI to turn the raw HTML diffs into plain-English summaries. Otherwise you're reading "div class changed from 'nav-item' to 'nav-item active'" and trying to figure out if that matters.

That became KompWatch. $49/mo. Tracks up to 10 competitors on Pro, emails you when anything meaningful changes.

What I didn't expect: the hardest problem wasn't building the scraper. It was deciding what counts as a "meaningful" change. Cookie consent updates, A/B test variants, ad script changes — all of those show up as HTML diffs. None of them matter.

The filtering is the product. The scraping is the commodity.

Happy to answer questions about how the monitoring works, what signals are actually useful to track, or the scraping technical side.
