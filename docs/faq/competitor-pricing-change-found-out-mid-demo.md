# "I Found Out a Competitor Changed Their Pricing Mid-Demo" — What to Do Now and How to Prevent It

**Short answer:** When a prospect corrects your pricing information mid-demo, don't dispute it — acknowledge it, pivot to your differentiation, and set up automated monitoring before your next call cycle.

---

## What Just Happened

You're mid-demo. The prospect says something like:

> "Wait, I thought [Competitor] just dropped their pricing — aren't they $99 now instead of $199?"

Or:

> "They launched a free plan last month. Did you know about that?"

And you didn't know. This is a common scenario, and it has a specific root cause: competitor pricing changed, and your CI process didn't catch it in time.

The prospects doing competitive research often find changes before AEs do — because they're actively researching alternatives when the change happens, while your team is only checking periodically (or not at all).

---

## In the Moment: How to Handle It

**Don't dispute the prospect or try to salvage the outdated info.**

If they're telling you the competitor changed their pricing, assume they're right. Getting defensive about old intelligence is worse than acknowledging it.

Instead:

1. **Acknowledge it cleanly:** *"Thanks for flagging that — our intel may be a week behind. I'll verify and send you an updated comparison."*
2. **Pivot to what doesn't change:** Your actual differentiation — the things that hold regardless of whether the competitor is $99 or $199. If your only differentiation was price, that's a positioning problem, not a monitoring problem.
3. **Use the opening:** A prospect who researches pricing changes is engaged and doing diligence. That's a buying signal. Follow up the same day with accurate, current information.

---

## Immediately After the Call

1. **Verify the change.** Check the competitor's pricing page directly. Take a screenshot and timestamp it.
2. **Update your battlecard.** Fix the pricing information in whatever system your team uses (Notion, Confluence, Google Sheets). The outdated info will cause this same problem in other reps' calls.
3. **Notify the team.** A Slack message to `#competitive-intel` with the current pricing and date takes 2 minutes and prevents this from happening to another rep tomorrow.

---

## How to Prevent It

This is fundamentally a monitoring latency problem. The competitor's pricing page changed. Nobody on your team saw it until a prospect mentioned it.

The fix is automated monitoring with a short detection window.

### Option 1: KompWatch (automated)

Add the competitor's pricing URL to KompWatch and set a CSS selector targeting the pricing section (e.g. `.pricing-table`, `#plans`, `main`):

- **Pro plan** detects changes within 6 hours and emails a digest
- **Team plan** detects changes within 1 hour and can push to Slack

When the pricing changes, you'll know — before your next sales cycle begins.

See [Setting Up Competitor Pricing Monitoring →](./monitoring-competitor-pricing.md)

### Option 2: Manual weekly check

If you're not using automated monitoring, assign one person to manually check competitor pricing pages every Monday. It takes 10 minutes for 5 competitors. Not scalable, but better than nothing.

The problem with manual checks is they're forgotten under sales pressure. Automated monitoring is the only reliable approach.

---

## Why Pricing Changes Are Especially Dangerous

Most competitor changes are low-urgency — a blog post, a minor feature addition. Pricing changes are different because:

- **They affect every deal in your pipeline immediately.** The moment a competitor drops their price, every prospect comparing you to that competitor is now comparing against a different number than the one in your deck.
- **They often happen without announcement.** Competitors don't send press releases about pricing changes. They update a page quietly. Your only signal is monitoring the page directly.
- **Prospects find them before you do.** Anyone actively comparing vendors checks the pricing page. If the change happened 3 weeks ago and you're only checking monthly, every competitive call in that window used wrong information.

---

## The Broader Pattern

If this happened once, it's probably happened more times without you knowing — on calls where the prospect didn't mention the discrepancy, or where you lost the deal and didn't know pricing was a factor.

For a full list of the change types that cost deals: see [5 Competitor Changes That Cost Deals →](./five-competitor-changes-that-cost-deals.md)

---

## Setting Up Monitoring Right Now

1. Go to [kompwatch.com](https://kompwatch.com) — free, no credit card
2. Add the competitor URL (their `/pricing` page specifically, not their homepage)
3. Set CSS selector: `main` or `.pricing-table` — this scopes to the pricing section only, reducing noise
4. Save — first snapshot runs immediately

You'll get a digest the next time the page changes. If they change pricing again, you'll know within hours, not weeks.

---

## See Also

- [Competitor Pricing Tier Restructure — What to Watch For →](./competitor-pricing-tier-restructure.md)
- [5 Competitor Changes That Cost Deals →](./five-competitor-changes-that-cost-deals.md)
- [Monitoring Competitor Pricing →](./monitoring-competitor-pricing.md)
- [How to Keep Battlecards Up to Date →](./how-to-keep-battlecards-up-to-date.md)
- [Which Pages to Monitor Per Competitor →](./which-pages-to-monitor-per-competitor.md)
