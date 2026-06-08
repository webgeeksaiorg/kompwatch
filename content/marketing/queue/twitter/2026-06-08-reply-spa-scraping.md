---
platform: twitter
type: reply
target: any tweet about competitor websites being hard to scrape or monitor (SPAs, JS-heavy)
status: queued
keywords: [scrape competitor website, monitor SPA, playwright competitor tracking]
score: 7/10
---
Yeah the SPA problem is real. cURL-based scrapers miss half the content because nothing's in the initial HTML.

We use Playwright (headless Chromium) so it actually renders the page before diffing. Still breaks occasionally on heavily dynamic sites. Working on it.
