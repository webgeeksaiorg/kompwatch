# Competitive Intelligence Workflow for Solo Founders

**Short answer:** You don't need a PMM, a CI analyst, or an enterprise tool. You need four URLs, one automated alert, and a 10-minute weekly review habit. Here's the exact setup that works when you're running CI by yourself alongside everything else.

---

## The Founder's Problem With Competitor Monitoring

Most founders either over-monitor or under-monitor.

**Over-monitoring** looks like: 15 competitors in a spreadsheet, a Google Alerts digest that fills your inbox with noise, an RSS feed from their blog you haven't read in three weeks, and a Notion page of "competitor notes" that's six months stale. You spent time setting it up. You don't look at it anymore.

**Under-monitoring** looks like: you check their pricing page when you remember to, which is before important meetings or after you lose a deal you didn't see coming.

Neither approach gives you what you actually need: a reliable signal when something genuinely changes, delivered to your inbox without you having to do anything.

---

## The Setup: Four URLs, 10 Minutes Once

This is the minimum viable CI setup for a solo founder:

**1. Pick your top 3 competitors**

Not every competitor you've ever heard of. The three who show up most in your lost deals, your competitor-alternative searches, and your customers' "we also looked at" list. If you're pre-sales, the three you'd expect prospects to evaluate alongside you.

**2. For each competitor, add these pages:**

| Page | Why |
|------|-----|
| `/pricing` | The only page that directly affects whether you win deals. Watch for tier changes, price cuts, free plan adjustments. |
| `/features` or `/product` | Where capability gaps and new features appear before any announcement. |

That's 6 URLs. Not 30. Start with 6.

**3. Set a CSS selector on each pricing page**

If you don't do this, you'll get alerts every time their footer changes or their cookie banner rotates. Use `.pricing`, `#pricing`, or `[data-pricing]` — see [CSS Selectors](./css-selectors.md) for a 2-minute guide.

**4. Set digest frequency to weekly**

Daily digests create noise. Weekly gives you enough time window to see patterns. If something HIGH or CRITICAL changes, KompWatch will alert you immediately regardless of digest schedule — see [Instant Pricing Alerts](./instant-pricing-alerts.md).

**Total setup time: ~10 minutes.**

---

## The Weekly Review: What to Actually Do

When your digest lands (configure it for Monday morning so it informs your week):

**Scan for HIGH and CRITICAL changes first.**

These are the ones that matter: pricing tier changes, free plan removals, new feature additions to a lower tier, "Contact Sales" replacing a published price. If there are none this week, you're done in 2 minutes.

**For each HIGH/CRITICAL change, ask two questions:**

1. *Does this affect a prospect I'm currently talking to?* — If yes, update your positioning before the next call.
2. *Does this change my battlecard or pricing conversation?* — If yes, update it now. It takes 5 minutes. Don't defer it.

**For LOW changes, skim and decide.**

Copy tweaks, minor layout changes, a new testimonial added — these are interesting for context but rarely require action. Read the AI summary, note any positioning shift, move on.

**Total weekly review time: 5–15 minutes depending on what changed.**

---

## When to Expand the Setup

Once you're comfortable with the baseline and the weekly habit is locked in, expand in this order:

1. **Add competitor job listings** — the highest-value leading indicator. Three new ML engineers = something AI-powered shipping in 3–6 months. A new "Head of Enterprise Sales" = they're going upmarket. See [Reading Competitor Job Listing Signals](./reading-competitor-job-listing-signals.md).

2. **Add their `/vs/[your-brand]` comparison page** — if they have one, it tells you exactly how their sales team is positioning against you. When it changes, their reps got new talking points.

3. **Add a fourth competitor** — once 3 competitors feels routine, you have headroom to add more. Don't go above 5 as a solo founder unless you have a specific reason.

---

## What to Do When Something Actually Changes

**Pricing change (HIGH severity):**
- Read the full diff, not just the summary
- Check which plan changed and what specifically is different
- Update your battlecard before the next prospect call
- Post a quick note in your company Slack if you have a sales rep or co-founder who handles deals
- See [What to Do When a Competitor Changes Their Pricing](./competitor-pricing-change-decision-framework.md)

**Feature launch (your differentiation is now their feature):**
- Check if it's actually in their lowest tier or hidden behind enterprise
- If it's a real gap-close, fast-track whatever your equivalent is
- Update any copy that claims this as a differentiator
- See [Competitor Feature Release Alert Playbook](./competitor-feature-release-alert-playbook.md)

**Repositioning (messaging shift on pricing page or features page):**
- This rarely requires immediate action, but it's valuable context
- Note whether their new messaging overlaps with your ICP language
- See [How to Respond to a Competitor Messaging Change](./how-to-respond-to-competitor-messaging-change.md)

---

## What Founders Typically Get Wrong

**Tracking too many competitors.** If you're monitoring 10+ competitors, the digest becomes noise and you stop reading it. Three is enough.

**Not setting CSS selectors.** A pricing page diff without a selector is 40% nav/footer noise. Selectors are a one-time 2-minute setup that make every digest dramatically more useful.

**Using Google Alerts instead of website monitoring.** Google Alerts catches news coverage and blog posts. It does not catch HTML changes to pricing pages, feature tables, or plan limits. These are different tools solving different problems.

**Acting on every change.** Low-severity changes don't need a response. One of the biggest time sinks in CI is treating a footer link update with the same urgency as a pricing cut. The AI severity score exists precisely so you don't have to make that call manually.

**Checking manually when you remember.** The whole point of automation is that you stop checking and start being informed. If you're still doing the "Monday tab tour," you haven't actually set up monitoring — you've just added to your to-do list.

---

## Related FAQs

- [Competitor Monitoring for Startups and Small Teams](./competitor-monitoring-for-startups-and-small-teams.md)
- [Which Pages Should I Monitor for Each Competitor?](./which-pages-to-monitor-per-competitor.md)
- [Using CSS Selectors to Reduce Noise](./css-selectors.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [Instant Pricing Alerts](./instant-pricing-alerts.md)
- [Reading Competitor Job Listing Signals](./reading-competitor-job-listing-signals.md)
- [Running a Weekly Competitive Review](./running-a-weekly-competitive-review.md)
- [How to Keep Battlecards Up to Date](./how-to-keep-battlecards-up-to-date.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we respond within 24 hours.*
