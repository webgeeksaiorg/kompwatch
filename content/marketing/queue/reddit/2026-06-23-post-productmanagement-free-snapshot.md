---
platform: reddit
type: post
target: r/productmanagement
status: ready
score: 8/10
keywords: [competitor monitoring for PMs, free competitor tracking, track competitor website changes, competitor pricing monitoring]
ticket: 5e27
scheduled: 2026-06-23
experiment: true
---

**Title:** Built a competitor website monitor after 18 months of manual Monday tab-checking — offering free snapshots this week for feedback

---

Background: I'm a developer who spent a year and a half manually opening 6 competitor websites every Monday morning, taking screenshots, and comparing them to the previous week. I was doing this to catch pricing changes, feature updates, CTA copy shifts — the kinds of things that don't show up in Google Alerts because they're JavaScript-rendered and invisible to web crawlers.

Eventually I got tired enough to build something. KompWatch watches URLs with Playwright (a real browser — executes JavaScript, sees what you see in Chrome), diffs the rendered HTML when it changes, and runs an AI summary to translate "4,200 changed HTML characters" into "they removed the Starter tier and dropped Pro from $99 to $79."

**The free thing:** Drop a competitor's pricing or feature page URL in the comments and I'll run a snapshot and reply with what we see — current page state, any recent detected changes, and the AI summary. No account, no email capture.

I'm doing this because I genuinely want feedback from PMs on whether the output is useful. Right now it shows:
- A screenshot of the current page
- A plain-English summary of what changed vs. our last baseline
- The specific elements that changed (pricing tables, CTAs, navigation items)

What I'm trying to figure out: is that enough? Is there other signal you'd want called out specifically — like when a competitor moves a feature between pricing tiers, or when "contact sales" replaces a free trial button?

**What it doesn't do** (being upfront):
- Doesn't monitor social media, G2 reviews, or news coverage
- Doesn't work on pages behind login or paywalls
- Struggles on about 15-20% of sites with aggressive bot protection
- Doesn't process non-public URLs

Happy to answer questions about how it works or what we've found challenging to build. The SPA scraping problem is genuinely hard and I've made a lot of mistakes.
