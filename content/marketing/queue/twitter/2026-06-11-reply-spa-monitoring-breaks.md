---
platform: twitter
type: reply
target: any thread about monitoring competitor websites or website change detection tools
status: draft
keywords: [SPA competitor monitoring, JavaScript rendering competitor tracking, Playwright scraping]
---
The SPA problem is the one nobody warns you about.

Most lightweight monitoring tools grab the raw HTML. Modern sites return an empty shell + a JS bundle. The content you actually care about — pricing tiers, feature lists — gets rendered client-side after JavaScript runs.

So your tool says "nothing changed" every week while your competitor iterates on their pricing page.

Playwright (or any headless browser) fixes it. But it's not a free lunch — it's slower and needs more infra to run reliably.
