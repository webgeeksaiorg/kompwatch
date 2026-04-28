---
platform: reddit
type: post
target: r/SaaS
status: ready
score: 8/10
keywords: [how to track competitors, competitor monitoring setup, competitive intelligence small team, competitor tracking tools]
---
**Title:** How I actually track what competitors are doing (after trying most of the tools)

I've been at this for two years — tried Crayon ($20K/year, too much for our stage), Kompyte (functional but dated UI), VisualPing (breaks on JavaScript-heavy pages, see below), and raw Google Alerts (catches press releases, misses everything else).

Here's what actually works now. Split into two categories:

---

**Automated monitoring (set it and forget it)**

Headless browser watching competitor pricing/features/homepage pages. Changes get summarized by AI into plain English, emailed as a digest. Catches the 90% of stuff that happens quietly with no press release — pricing tweaks, feature copy changes, new tier additions, feature removals.

Job listing tracking. Not volume — types. A "Pricing & Packaging Strategist" hire means a reprice is 3-6 months away. Four ML engineering roles means an AI feature is coming. Worth checking their job pages every couple weeks.

**Note on VisualPing and similar tools:** They do simple HTML diffing. If your competitor's site is React/Vue/Next.js (most are), the raw HTML is just `<div id="root"></div>` — the content renders client-side. You need a headless browser to get accurate snapshots. Wasted about 4 months on a tool that was showing "no changes" for pages that were definitely changing.

---

**Manual research (quarterly, ~2 hours)**

- Read their full changelog, not just recent. Patterns show up over 6-12 months that aren't visible in the last 3 entries.
- G2 and Capterra recent complaints. Customer complaints are free user research on their product gaps.
- What their sales reps say on LinkedIn. Sales will telegraph positioning shifts before the website updates.
- Pricing page history (use Wayback Machine or similar).

---

**The trap I fell into:** trying to make automated tools do the strategy work. They tell you *what* changed. You have to figure out *why* and *what it means*. Keeping those two separate is what made this sustainable.

What does everyone else run? Especially curious about job listing monitoring — haven't found a great automated solution for that part yet.
