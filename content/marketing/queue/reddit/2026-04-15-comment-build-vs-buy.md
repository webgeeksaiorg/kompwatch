---
platform: reddit
type: comment
target: r/SaaS, r/startups, r/ProductManagement — threads about building internal tools, competitor monitoring DIY
status: queued-blocked-no-credentials
keywords: [build vs buy SaaS tools, DIY competitor monitoring, Playwright web scraping]
---
The core isn't actually that hard to build. Playwright to handle JS rendering, a CSS selector for the specific section you want (pricing div, features table, whatever), an LLM call to turn the diff into plain English. You can have a rough version working in a weekend.

Where it falls apart:

**Maintenance.** Sites restructure. Selectors break silently. You don't know the alert stopped working until someone mentions a competitor pricing change in a customer call that happened two weeks ago.

**Edge cases.** Login-gated pages. Bot detection. Competitors who put everything in PDFs. The one site that loads prices via a React component that renders 400ms after the initial paint.

**Ops.** Running Playwright in Docker needs system deps installed at build time. It's manageable, just annoying to maintain.

None of this is hard. It's just ongoing work. At $28K/year (Crayon territory) you're genuinely asking whether a build is cheaper. At $49/month... it's a harder case to make for your own time.

I built KompWatch after maintaining my own version of this internally for 18 months. Mostly because I kept fixing it instead of doing actual product work.
