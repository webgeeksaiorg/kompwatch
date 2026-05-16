---
platform: reddit
type: post
target: r/SaaS
status: ready
keywords: [competitor monitoring tool, content zone classification, alert signal scoring, SaaS competitive intelligence]
---
**Title:** I built a thing that tells you what your competitors changed this week (and what *kind* of change it was)

Background: I spent 18 months manually checking 12 competitor websites every Friday. I built KompWatch because I got tired of it.

This week I shipped two things I think actually matter:

**1. Content zone classification**

When your competitor's pricing page changes, KompWatch now tells you it's a *pricing zone* change — not just "something changed here." When their feature page updates, it's a *feature zone* change. Blog, jobs, positioning — all classified automatically.

Why it matters: I shouldn't have to read a diff to decide if I care. The tool should tell me.

**2. Alert signal scoring (0-100)**

Not all changes are equal. One word changed in the hero copy = score of 15. Full pricing section rewrite = score of 89.

The goal is you never get paged at 11pm because a competitor moved a footer link.

Still pre-launch, still tuning the model. Using headless Playwright so it actually works on React/Next.js sites — most cheap tools miss JS-rendered content completely and just monitor an empty div.

Happy to share what I'm learning about the SPA monitoring problem if anyone's running into that.
