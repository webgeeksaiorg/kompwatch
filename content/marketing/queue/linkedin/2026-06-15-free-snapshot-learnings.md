---
platform: linkedin
type: post
status: ready
score: 8/10
keywords: [competitor monitoring, headless browser, playwright scraping, SaaS founder]
---
Built a free competitor snapshot tool this week. Here's what I actually learned.

The obvious part: most competitor sites are SPAs now. curl returns an empty shell — just a JS bundle and a div. The actual pricing tiers, feature tables, and CTAs all load client-side. So a "quick check" via Google Cache or curl is often looking at the wrong page.

The free snapshot runs headless Chromium, waits for network idle, captures rendered HTML + a screenshot. 5-10 seconds. Works.

The non-obvious part: diffing rendered HTML is extremely noisy. Tracking pixels update. Counter animations tick. A/B test class names rotate. All of it shows up as "changes" if you're dumb about what you diff.

The useful diff is actually narrow: headings, pricing copy, CTA text. Ignore class names, inline styles, script tags. That's where the signal lives.

We still break on ~15-20% of sites with aggressive bot detection — Cloudflare challenges, Distil Networks. Working on it. Probably always will be.

The tool is live at kompwatch.com. Paste any public URL, get a full Playwright-rendered snapshot back in your browser. No account, no email, no credit card. Just paste and see.

Curious if others have run into the SPA problem when trying to quickly sanity-check a competitor page.
