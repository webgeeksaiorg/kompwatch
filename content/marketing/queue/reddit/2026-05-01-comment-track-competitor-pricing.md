---
platform: reddit
type: comment
target: r/SaaS or r/startups — threads about tracking competitor pricing / competitive intelligence
status: ready
score: 8/10
keywords: [track competitor pricing, competitor monitoring saas, competitive intelligence tools reddit]
---

Built our own competitor tracking setup from scratch before eventually productizing it — here's what I learned the hard way:

**Google Alerts doesn't do what people think it does.** It catches news *about* competitors, not changes to their website. Set it up for brand mentions — useful for that. Useless for detecting pricing page updates.

**Visualping works but breaks on JS-heavy sites.** Most modern SaaS pricing pages are React/Next.js rendered. Visualping fetches HTML before JavaScript runs, so it sees a blank skeleton. You need a headless browser to get the actual content.

**CSS selectors are the difference between useful monitoring and constant noise.** Don't monitor the full page. Monitor just the pricing table section. Footer changes, nav updates, cookie banners, rotating testimonials — all of it fires alerts. Scope it down.

**Job listings are underrated signal.** Three ML engineer postings before any product announcement = something's coming. Sales hires in a new vertical = expansion move. Faster signal than waiting for a product update blog post.

We ended up building this properly into [KompWatch](https://kompwatch.com) (headless browser, CSS selectors, AI to summarize the diffs). Happy to share the DIY Python version too if you'd rather own it.

What are you currently using? Curious what's working.
