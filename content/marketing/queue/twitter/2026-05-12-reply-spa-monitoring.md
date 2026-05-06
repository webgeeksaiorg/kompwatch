---
platform: twitter
type: reply
status: ready
score: 8/10
keywords: [SPA competitor monitoring, React site scraping, headless browser]
---
SPAs are the hardest part. Standard HTML diff breaks completely — you're comparing React rendering output, not actual content.

We run headless Chromium and wait for the page to settle before capturing. Adds 3-8s per snapshot but actually works.

Still breaks on sites that lazy-load pricing behind scroll triggers. Still figuring that out tbh.
