# How to Track Competitor Pricing Changes

**Short answer:** Monitor your competitors' pricing pages with automated change detection. Google Alerts won't catch pricing page edits — they happen in the HTML, not in news coverage. Watch 4 pages per competitor (pricing, features, job listings, compare/alternatives), set up automated alerts, and update your battlecard the same day a change fires.

---

## Why Manual Monitoring Fails

The "Monday tab tour" is the most common approach: open pricing pages for each competitor, scan for changes, close them. It has two fatal problems:

1. **Human memory is a poor diff algorithm.** You remember roughly what a page looked like last week, not exactly. Small but significant changes — a footnote added to a pricing tier, a plan limit quietly reduced, a "Contact Sales" button replacing a self-serve signup — are nearly impossible to spot manually.

2. **Competitors change on Thursdays and Fridays.** Based on KompWatch data across thousands of monitored pages, pricing page edits cluster at end-of-week — PMs make the call mid-week, engineering pushes Thursday before EOD. By the time you check on Monday, you're already 3–5 days behind. If a prospect ran a comparison over the weekend, they know something you don't.

---

## The Pages Worth Monitoring

Most teams make the mistake of watching the homepage. Don't.

The homepage is marketing theater — redesigned quarterly for cosmetic reasons, A/B tested constantly, rarely the first place a strategic change appears.

The four pages that actually carry competitive signal:

| Page | Why it matters |
|------|---------------|
| **Pricing page** | Where you'll lose deals if you miss a change. Watch the footnotes and plan limits, not just the headline numbers. |
| **Features or product page** | Quiet capability additions happen here — no press release, no tweet. A feature you've been differentiating on may now be listed under their basic plan. |
| **Job listings / careers** | Leading indicator. Three ML engineer postings in 60 days means something's shipping. A new "Head of Enterprise Sales" hire means they're going upmarket and may stop chasing your customers — you'll know 6 months before the announcement. |
| **Alternatives or compare pages** | If they have a "/vs/[YourBrand]" page, they're watching you. What they say about themselves reveals how their sales team is positioning against you. When this page changes, their reps got new talking points. |

Four pages per competitor. Not four hundred.

---

## What Pricing Changes Look Like (And Why They're Hard to Spot)

Competitors rarely announce pricing changes publicly. The silent changes are the most dangerous:

- A footnote added: "Includes up to 5 users" — what was unlimited is now capped
- Free plan limit reduction — from 3 competitors to 1
- "Contact Sales" replacing a published price — signals a move upmarket
- Annual discount quietly reduced from 25% to 15%
- Feature moved from mid-tier to enterprise-only
- Plan discontinued (removed from the grid, no redirect)

None of these generate a Google Alert. Google Alerts monitors the web for new content mentioning a keyword — it doesn't watch HTML. A pricing footnote change never becomes a news article.

---

## The Four-Step Monitoring Loop

**Step 1: Pick 4 pages per competitor**

For each competitor: pricing, features, job listings, and their compare/alternatives page. Start narrow. You can always add more pages, but starting with too many creates alert fatigue that kills the habit.

**Step 2: Set up automated change detection**

You need something that checks those pages on a fixed schedule and notifies you when the HTML changes. Options:

- **Visualping** (free tier, ~5 pages): good for getting started; sends a screenshot diff without classifying what changed
- **KompWatch** (free tier, AI classification): detects changes, classifies them as PRICING / FEATURE / MESSAGING, assigns a severity score, and delivers a weekly digest — so you know not just that something changed, but whether it matters

**Step 3: Classify what changed and whether to act**

Not all changes matter. Navigation update? Ignore it. Pricing footnote change? That's HIGH severity — act today. KompWatch's AI classification layer handles this automatically; on other tools, you'll make this judgment manually from the screenshot diff.

**Step 4: Update the battlecard the same day**

This is the step most teams skip. The alert fires. Someone reads it. Nobody updates the battlecard. Three weeks later, a sales rep uses the stale version on a call and the prospect corrects them.

The habit matters more than the tool. Set a rule: HIGH or CRITICAL pricing alert → update the battlecard within 24 hours.

---

## Google Alerts vs. Website Change Detection

| | Google Alerts | Website change detection |
|---|---|---|
| Monitors news mentions | ✅ | ❌ |
| Monitors pricing page HTML | ❌ | ✅ |
| Detects silent plan changes | ❌ | ✅ |
| Catches footnote rewrites | ❌ | ✅ |
| Catches "Contact Sales" replacing a price | ❌ | ✅ |

Use Google Alerts for brand mentions and press coverage. Use a dedicated monitoring tool for website-level changes. They solve different problems.

---

## Related FAQs

- [Which Pages Should I Monitor for Each Competitor?](./which-pages-to-monitor-per-competitor.md)
- [How Do I Monitor a Competitor's Pricing Page?](./monitoring-competitor-pricing-pages.md)
- [When Do Competitors Typically Change Their Pricing?](./competitor-pricing-change-timing.md)
- [How to Keep Battlecards Up to Date](./how-to-keep-battlecards-up-to-date.md)
- [Instant Pricing Alerts](./instant-pricing-alerts.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [CI Process for Teams With No CI Budget](./ci-process-no-budget.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will follow up within 24 hours.*
