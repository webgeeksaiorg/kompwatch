---
platform: reddit
type: post
target: r/SaaS
status: queued-no-creds
keywords: [competitor intelligence lessons, competitor monitoring, SaaS competitive analysis, battlecard maintenance]
---

**5 things I learned tracking 200 competitor pages for 14 months**

I've been running KompWatch (a competitor monitoring tool I built) in production for 14 months. It watches ~200 pages across various SaaS companies, takes daily snapshots, and runs AI classification on the diffs.

Here's what actually surprised me:

---

**1. Pricing changes are more frequent than you think**

40-45% of SaaS pricing pages change in any given 90-day window. Not full redesigns — small stuff. A feature moving from Starter to Pro. A seat cap tightening. "Contact Sales" showing up where there used to be a self-serve button.

That last one is a big signal. It usually means they're pulling away from the SMB segment.

---

**2. The changelog page is more honest than the blog**

Blogs announce features. Changelogs actually ship them. If a competitor's changelog went quiet for 3 months and then suddenly has 8 updates in 2 weeks, something is happening.

I now track changelog pages for high-priority competitors specifically. More signal density than press releases.

---

**3. Friday afternoon is when pricing changes happen**

We have enough data now to say: changes to pricing pages peak Thursday-Friday. Not Monday-Tuesday when people are energetic and paying attention. The "let's sneak this in before the weekend" timing is real.

If you're only doing weekly manual checks on Monday mornings, you're systematically missing the most significant pricing moves.

---

**4. Job listings reveal the roadmap 6 months early**

Started tracking careers pages after a hunch. Now it's one of the most useful signals we have.

Competitor posted 3 "ML Infrastructure Engineer" roles in Q3. By Q1 the following year they launched an AI feature. We had 6 months of lead time to prepare a response.

You don't need to read tea leaves. The roadmap is in the hiring plan.

---

**5. Most alerts are useless without classification**

Raw HTML diffs are a mess. Before we added AI classification, my inbox was flooded with "they changed a footer link" noise.

Classification matters more than detection. The system now sorts everything into PRICING / FEATURE / MESSAGING / VISUAL and scores severity 0-100. I only act on HIGH-severity PRICING changes. Everything else waits for the weekly review.

The volume went from ~40 alerts/week to ~5 I actually open.

---

Happy to answer questions about methodology, what pages are most worth watching, or the CI stack I've settled on for small teams. Still figuring a lot of this out tbh.
