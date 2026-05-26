---
platform: reddit
type: comment
target: r/ProductManagement
status: draft
score: 8/10
keywords: [competitor intelligence workflow, PM competitive research, track competitor changes without tools]
---
The workflow that's actually sustainable for a small team, in order of effort:

**Low effort, high signal:**
- Set up monitoring on competitor pricing pages, feature pages, and job listings. Job postings are weirdly predictive — 3 ML engineer roles posted = something AI-adjacent ships in 60-90 days.
- Monitor their status page. Incidents tell you where their product is fragile.
- Watch their changelog/release notes. Not every SaaS publishes one, but those that do are basically narrating their roadmap.

**Medium effort:**
- G2/Capterra reviews, filtered by "recent." Customers complain about exactly the things that might be your differentiators.
- Their support docs. When they add a new doc section, a feature shipped.

**Common mistake:**
Full-page HTML diffs on SaaS sites look like a lot of activity but are mostly noise. Session IDs and cache-busting parameters change constantly. Scope to specific elements.

The hard part isn't finding the changes — it's having a process for deciding which ones matter before they end up on a 40-slide deck that nobody reads.

What's your team size and how often are competitors actually shipping things that affect your deals?
