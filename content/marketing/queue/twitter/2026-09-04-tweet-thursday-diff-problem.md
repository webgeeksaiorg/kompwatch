---
platform: twitter
type: tweet
status: queued-no-creds
keywords: [SaaS founder building, competitor monitoring tool, scraper development]
score: 8/10
---
The hardest part of building KompWatch wasn't the scraper.

It was the diff.

You get two HTML snapshots of a page. Both are ~50k characters. They changed. But the change might be a price update buried in 800 lines of boilerplate, or a nav menu reorder that looks like noise, or a React re-render that produces slightly different attribute ordering.

Figuring out what "actually changed in a way that matters" took most of the engineering time. Still improving it.
