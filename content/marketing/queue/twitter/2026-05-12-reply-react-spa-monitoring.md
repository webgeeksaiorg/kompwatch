---
platform: twitter
type: reply
target: threads about monitoring JavaScript/React sites or SPA competitor pages
status: draft
score: 9/10
keywords: [React site monitoring, SPA competitor monitoring, headless browser scraping, competitor page monitoring]
---
Dirty secret of most "website monitoring" tools: they fetch over HTTP. JavaScript-rendered sites return an empty shell that way.

Your competitor's Next.js pricing page has exactly zero content visible to HTTP-level monitoring. You need headless browser rendering to see what customers actually see.

Found this after 3 months thinking nothing was changing. Was monitoring `<div id="__next"></div>` the whole time.
