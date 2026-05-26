---
platform: reddit
type: comment
target: r/SaaS or r/startups — thread about tracking competitors or competitive research
status: ready
score: 8/10
keywords: [track competitor changes, competitor monitoring, SaaS competitive intelligence]
---

The thing nobody mentions when they talk about competitive research workflows: the free tools monitor the wrong thing.

Google Alerts fires when someone writes *about* your competitor. Press coverage, blog posts, social mentions. Useful, but it won't catch when they silently drop their free tier or add a new pricing tier at 11pm on a Tuesday.

Visualping and similar tools do catch website changes, but break on React/Next.js sites — they fetch raw HTML and get an empty div on JS-rendered pages. Most SaaS products are SPAs now.

What's actually worked for us: headless browser monitoring (Playwright, basically) + AI that explains the diff in English instead of dumping 50 lines of HTML changes at you.

The pattern on pricing changes: they cluster Tuesday-Thursday. If you're running a Monday morning tab-check ritual, you're already stale by Thursday.
