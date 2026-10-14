---
platform: reddit
type: reply
target: r/SaaS — threads about monitoring competitor websites / CI tools
status: ready
keywords: [how to track competitor pricing, competitor website monitoring, SaaS CI workflow]
---

Spent about a year cobbling this together before building a tool for it. Here's the setup that actually worked:

**Tier 1 — High signal, monitor daily**
- /pricing (not just top-level — watch any page they link to from pricing)
- /features or /product (changes here = product direction)
- /compare or /alternatives (this is where they show their hand on positioning)

**Tier 2 — Lower frequency, weekly check**
- Job postings filtered to engineering: 3+ infra or ML listings in 30 days = something is in the pipeline
- The hero section of homepage: messaging changes signal ICP pivots, not product changes

**What I'd skip:**
Blog posts and press releases. Too much noise. If something's big enough to matter, it'll show up in the tier 1 pages eventually.

The trap I see teams fall into is monitoring everything and reading nothing. 4-5 pages per competitor, that's it. More than that and your alerts become another inbox you ignore.

