---
platform: twitter
type: reply
target: ~
status: ready
score: 7/10
keywords: [SPA monitoring, Playwright competitor scraping, website change detection]
---
SPAs are the real problem with simple HTML diffing. If they load content via JS after the initial request, a basic fetch gets you empty divs.

Built the scraper with Playwright — actually renders the page in headless Chrome, waits for the DOM. Still breaks on some React apps that lazy-load content below the fold. Still figuring that one out tbh.
