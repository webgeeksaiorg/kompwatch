---
platform: twitter
type: tweet
status: queued-no-creds
score: 8/10
keywords: [competitor website monitoring, SPA monitoring, competitor pricing page tracking]
scheduled: 2026-07-15
---

Three weeks building the scraper. Still breaks on SPAs.

Turns out about 40% of competitor pricing pages are React apps that load prices via API. Simple HTML diffing catches nothing.

Had to add headless Chromium + wait-for-selector logic. Still not perfect on the ones that A/B test their own pricing.

This is the unsexy part nobody talks about when they say "just monitor competitor websites."
