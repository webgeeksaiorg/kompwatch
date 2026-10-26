---
platform: twitter
type: tweet
status: queued-no-creds
keywords: [SPA monitoring, JavaScript rendering, headless browser scraping]
---

The hardest part of building KompWatch wasn't the diffing. Diffing HTML is easy.

It was SPAs.

A pricing page that's entirely rendered in JavaScript looks like `<div id="app"></div>` to a basic scraper. Empty. No content. No diff to detect.

So I switched to Playwright — actual headless Chromium, wait for React to finish, then scrape. Slower, more expensive to run, but actually works.

Still breaks on some pages. Working on it.
