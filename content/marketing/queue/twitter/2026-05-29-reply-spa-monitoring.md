---
platform: twitter
type: reply
target: thread about monitoring JavaScript-heavy or SPA websites
status: draft
keywords: [monitor SPA website changes, playwright web scraping, JavaScript website monitoring]
---
This is why most "website change" tools miss stuff on modern sites — they fetch raw HTML, miss everything rendered client-side.

Spent 3 weeks wrestling with this on KompWatch's scraper. Ended up going full Playwright (headless Chromium) so you get the page after JS runs. Slower, but actually catches what changed.

Still breaks on the occasional heavily-cached SPA. Still figuring that part out tbh.
