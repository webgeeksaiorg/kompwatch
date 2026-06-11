---
platform: reddit
type: reply
target: r/SaaS or r/webdev — thread about DIY competitor monitoring / website change detection
status: draft
keywords: [playwright website monitoring, competitor scraping, HTML diff tool]
---
Playwright + a cron job.

Capture HTML, diff it against last snapshot, email the diff. Works fine until you hit SPAs — React/Next sites render client-side, so your HTML diff comes back empty because the skeleton HTML hasn't changed.

Fix: wait for `networkidle` before capturing, and target specific CSS selectors instead of the whole page. Pricing pages usually live in a `.pricing-card` or `.plan-features` div. Diffing the whole DOM is too noisy — footers, nav links, cookie banners all change constantly.

For anything highly dynamic, screenshot comparison ends up more reliable than HTML diffing. Slower, more storage, but catches visual changes that don't show up in the DOM at all. CSS-only changes, font updates, layout shifts.

The hard part isn't the scraping. It's reducing false positives — getting alerts only when something actually meaningful changed.
