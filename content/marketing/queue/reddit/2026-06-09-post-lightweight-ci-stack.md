---
platform: reddit
type: post
target: r/SaaS
status: queued
keywords: [competitor monitoring small team, track competitor websites, lightweight competitive intelligence]
---
**What's your actual competitor monitoring setup? (Not the enterprise answer)**

Every article about competitive intelligence recommends Crayon or Klue. Both start at $15K-$25K/year and assume you have a dedicated CI analyst.

I've talked to probably 40 founders and PMs at companies under 50 people. Zero of them use Crayon or Klue. Most are doing one of:

**Option A: Nothing**
Occasionally Google the competitor name. Sometimes spot something. Mostly flying blind.

**Option B: Google Alerts**
Everyone's starting point. Better than nothing. Misses pricing page changes entirely (Google doesn't crawl those properly), catches a lot of noise (press releases, mentions, unrelated articles), and has no way to track UI or product changes.

**Option C: Visualping / ChangeDetection.io**
Actually decent for small setups. Free or ~$10/mo. Monitors specific URLs and emails you when content changes. Gets unwieldy if you're tracking more than 3-4 pages because you manage URLs manually and there's no way to batch-configure what matters.

**Option D: DIY**
Playwright + cron job + email. I went this route for about a year before turning it into a product. Works well. Breaks on SPAs and requires you to maintain it. The maintenance is the part nobody factors in — it's low-key but constant.

**What actually matters to track:**
- Pricing page (obvious — this one's time-sensitive)
- Features page (when did they ship X? Are they competing with your roadmap?)
- Job listings (engineering/sales ratios tell you a lot about where they're investing)
- Homepage messaging (positioning shifts are slower but strategically important)

**What I'm curious about:** Do you actually have a system, or is it more like "we check manually when something feels off"? And has anyone found a middle ground between Google Alerts and $25K/year?

(I built something that sits in that gap — happy to share details if useful, but mostly genuinely curious what people are actually doing here.)
