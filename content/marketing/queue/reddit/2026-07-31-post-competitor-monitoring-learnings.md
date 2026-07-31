---
platform: reddit
type: post
target: r/indiehackers or r/SaaS
title: "I built a competitor monitoring tool because I couldn't justify $500/mo for Crayon. Here's what I've learned after 2 months of tracking 7 competitors daily."
status: queued-no-creds
score: 8/10
keywords: [competitor monitoring tool, track competitor website changes, crayon alternative, competitive intelligence saas]
scheduled: 2026-07-31
---

**Background**

I'm a solo founder. Before building KompWatch, I was tracking 12 competitor websites manually — pinned browser tabs, Monday morning ritual, spreadsheet with notes.

The manual version had two failure modes:
1. I'd forget to check
2. I'd check and miss a change that happened on Wednesday or Saturday

Eventually I built a cron job that diffs competitor pages and emails me a summary. Added AI to turn the diff into plain English. Started sharing it with others.

**What I've actually learned from 2 months of daily monitoring:**

**1. Quiet deletions are more interesting than additions.**
When a competitor removes their free tier mention, buries their pricing link, or cuts a feature from their comparison table — that's signal. Additions get announced. Deletions happen quietly and usually mean something is changing in their positioning or margin.

**2. The changelog is criminally underused in competitive intel.**
It's public. It's timestamped. It announces features before any press release or sales deck update. Almost nobody reads competitor changelogs systematically.

**3. Weekend pricing tests are real.**
I've caught multiple competitors running pricing changes Friday–Sunday that either stuck or got reverted by Monday. Manual Monday morning checks miss all of this. So do Google Alerts.

**4. The diff is table stakes. The "so what" is the product.**
Raw HTML diffs are technically correct and completely useless. A wall of changed markup doesn't tell you whether the competitor dropped their enterprise tier or just changed a CSS class name. That's the actual problem to solve — and it's why the AI summary matters more than the diff itself.

**The honest part**

0 paid subscribers so far. Not hiding that. The product works — the monitoring is real, the summaries are genuinely useful. The distribution is the unsolved problem.

Open to thoughts on what you'd want to see from a tool like this, or where you'd expect to find it.

---

*KompWatch is at kompwatch.com — free tier available, no credit card required.*
