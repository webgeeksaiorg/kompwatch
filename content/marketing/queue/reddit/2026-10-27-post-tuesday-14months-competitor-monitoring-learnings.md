---
platform: reddit
type: post
target: r/SaaS
status: queued-no-creds
keywords: [competitor monitoring, building in public, SaaS founder story]
---

**Title:** I've been watching competitor websites automatically for 14 months. Here's what I actually learned.

---

When I started building KompWatch, my hypothesis was: the interesting competitor intel is buried in website changes, not news articles.

14 months and a few hundred thousand page snapshots later, here's what actually held up.

**What changes most often (and it's not what you'd expect)**

Pricing pages. But not in the way you'd expect — not big annual price changes. It's the *framing*. Plans get reordered. "Most popular" badges move. Enterprise tiers appear above the fold instead of below. "Free" becomes "Free trial." Annual pricing becomes the default view. These micro-changes signal strategy shifts before any press release does.

The second most-changed content: homepage hero copy. Specifically the headline and subheadline. When a competitor rewrites their hero, they're telling you who they've decided they're building for. "For enterprise sales teams" vs "For any team" is a positioning pivot, not just copy. Seen it happen 3-4 times with competitors I track.

**What changes that most people miss**

Jobs pages. Three ML engineer postings in 6 weeks at a competitor — that's a signal. "Head of Partnerships" role appearing for the first time — ecosystem play incoming. You won't read about this in their blog until 6 months later when the product ships.

Comparison tables. Competitors quietly add or remove features from their own comparison tables (the ones they publish comparing themselves to you). Two competitors have added KompWatch to their comparison pages without telling us. Found out from the monitoring.

**What turns out to be noise**

Blog posts. High publish volume, low signal. Most SaaS content is marketing, not signal.

Changelog pages. Only meaningful if you're doing product-level CI. Most of the time it's UI polish and bug fixes.

**The thing I got wrong**

I thought people would want weekly digests. Turns out the timing doesn't fit the workflow.

What people actually want: an alert when a specific change type happens (pricing, feature, messaging), delivered fast enough that they can act on it before a sales call or board prep. Not "here's what changed this week." More like "your competitor just changed their pricing page 2 hours ago."

Still working on getting the alert routing exactly right. But the detection piece works.

**What I built (and didn't build)**

KompWatch does one thing: tracks websites for changes, classifies them (pricing / feature / messaging / visual), and tells you in plain English what changed. $49/mo.

It doesn't do social listening. Doesn't do win/loss analysis. Doesn't have a Slack battlecard bot. Those are real products — Crayon, Klue — but they're priced at $500+/mo and require a dedicated analyst to extract value.

If your problem is "I need to know when my competitor's pricing page changes" — that's what I built.

Happy to answer questions about the technical side (headless browser scraping, diff logic, AI classification) or the product side.
