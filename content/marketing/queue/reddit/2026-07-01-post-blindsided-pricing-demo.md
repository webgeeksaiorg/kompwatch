---
platform: reddit
type: post
target: r/SaaS
status: ready
score: 8/10
keywords: [competitor pricing page, track competitor pricing, silent pricing changes, competitor monitoring]
scheduled: 2026-07-01
---

**A prospect told me my competitor had cheaper pricing. I didn't know.**

During a live demo, they mentioned it. The change had been live for 3 weeks.

No announcement, no press release. They just updated the pricing page on a Tuesday.

This is apparently how 70%+ of SaaS pricing changes happen — no public notice, just a page update. (The data backs this up: Visualping's monitoring corpus shows pricing pages changing 2-3x more often than any other page type.)

The painful part: I had a manual tab-check routine. I checked competitors every Monday morning. Missed a Wednesday change completely.

I've seen a few patterns since building a tool around this problem:

**What actually signals a pricing change:**
- New tier added (usually the easiest to miss — middle tier quietly appears)
- "Contact sales" replacing a listed price (moving upmarket)
- Seat minimums added or changed
- Annual billing discount terms shifting
- Free tier quietly restricted or killed

**What doesn't work for catching this:**
- Google Alerts (fires on *mentions* of the company, not website changes)
- Quarterly manual reviews (too slow)
- Watching for press releases (they don't write press releases about pricing tweaks)

**What does work:**
- Monitor the /pricing page specifically on a short interval
- Require before/after diffs in any alert (otherwise "page updated" is useless)
- Watch the /enterprise page too — "contact sales" replacing a price is itself the signal

Curious how other founders/PMs handle this. Anyone else been blindsided on a demo call by a competitor change they should have known about?
