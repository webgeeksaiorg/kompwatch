---
platform: twitter
type: reply
target: anyone asking about scraping/bot detection issues
status: ready
score: 8/10
keywords: [playwright bot detection, competitor scraping, cloudflare blocking]
---

Honest answer: Playwright gets blocked on ~15-20% of sites. Cloudflare Turnstile, DataDome, Distil. Even with good browser fingerprinting.

It's the hardest unsolved part of what we built. We detect the block and notify you, but we can't get the diff.

Some sites are just committed to blocking bots. Still working on it.
