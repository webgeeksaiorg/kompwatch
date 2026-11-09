---
platform: blog
type: article
status: queued-no-creds
keywords: [competitor pricing change, how to respond to competitor pricing, competitive pricing strategy, SaaS pricing response]
slug: what-to-do-when-your-competitor-changes-their-pricing
title: What To Do When a Competitor Changes Their Pricing
description: A practical guide for SaaS founders and PMs on how to respond to competitor pricing changes — from the moment you detect them to updating your sales team and deciding if you should react.
---

# What To Do When a Competitor Changes Their Pricing

You open your email on a Monday morning and see the alert: a competitor just changed their pricing.

Now what?

This is actually where most CI processes fall apart. Teams get good at detecting changes. They set up monitoring, they get the alerts. And then they stare at the diff, forward it to three people, and nothing coherent happens.

Here's the process I've settled on after running competitor monitoring in production for 14 months.

---

## Step 1: Don't react immediately

The worst response to a competitor pricing change is a Slack message that says "hey did you see this??" with a screenshot and no context.

Wait 30 minutes. Actually look at the change. Figure out what changed, not just that something changed.

Questions to answer first:
- What specifically changed? (price point, plan structure, feature gating, free tier, billing model)
- Is this an increase or a decrease from their perspective?
- Does this affect your active deals or your customer base?
- Is this a test? (Check if they're A/B testing — the same page might show different pricing to different visitors)

Only after you can answer those questions does it make sense to surface it to anyone else.

---

## Step 2: Classify the change type

Not all pricing changes are equal. I use four categories:

**Structural** — They changed how they package things. New tiers, merged tiers, completely different model (per-seat to usage-based). This affects how you position in competitive deals.

**Price movement** — Same structure, different numbers. Usually +/- 10-25%. Usually happens quietly (Thursday or Friday, in my experience — teams don't love announcing price hikes).

**Feature gating shift** — A feature moved from one tier to another. A feature that used to be free is now paid. This is the sneaky one because it changes the value prop of their cheaper tiers without touching headline pricing.

**Abandonment signal** — "Contact Sales" replacing a self-serve checkout button. Free plan disappearing. Usage caps tightening dramatically. Usually means they're pulling away from a customer segment. If that segment is yours, this is good news.

The classification determines your response. A price increase needs different handling than a free tier removal.

---

## Step 3: Score the urgency

Not every pricing change needs a same-day response. Here's a rough scoring system:

**Respond within 24 hours:**
- They dropped prices below yours with equivalent features
- They added a free plan (or upgraded their free plan significantly)
- They added a feature you've been promising in sales calls

**Respond within a week:**
- Price increase on their end (potential opportunity to capture churning customers)
- Feature moved to a higher tier (your lower tier now looks relatively better)
- Plan consolidation that removes a tier you've been losing to

**Add to quarterly battlecard review:**
- Minor price adjustments (+/- 5%)
- UI copy changes on pricing page
- A/B test that might resolve itself

Most changes are in the third bucket. Act on them too fast and you're chasing noise. Ignore the first bucket and you've created a sales problem.

---

## Step 4: Update the battlecard before the next sales call

This is the one that costs deals when teams skip it.

Your battlecard has a price comparison table. It's now wrong. Not "will be wrong soon" — wrong right now, today.

The update doesn't need to be comprehensive. It needs to be accurate on the specific points that come up in competitive deals:

1. The actual price delta at your most common deal sizes
2. What they include vs. what you include at comparable tiers
3. If they changed feature gating — what that means for the "apples to apples" comparison

Get that section updated and pushed to the team before the next time a prospect asks "how do you compare to [competitor]?"

---

## Step 5: Decide whether to react publicly

Most of the time: don't.

Price matching a competitor looks desperate. Announcing that you're "still cheaper" is not a narrative you want to own. And calling out competitor pricing publicly tends to age badly.

The cases where a public response makes sense:

- They increased prices significantly and there's a genuine customer acquisition window. Announce nothing. Just make sure your trial and onboarding are solid for the influx.
- They killed a free tier that a lot of people relied on. You can make a landing page that addresses "I used to use [competitor] for free" — that's not sniping, it's just being visible when people are searching.
- They announced a new tier that's actually worse than what you offer at the same price. Same — make sure your positioning page is updated.

The key is reacting to the customer behavior that results from their change, not reacting to the change itself.

---

## Step 6: Watch for the follow-on changes

Pricing changes rarely happen in isolation. They're usually signals of something larger.

If they raised prices, watch for:
- Increased marketing spend (they need to grow revenue to justify the increase)
- Enterprise feature additions (moving up-market)
- Support tier changes (possibly reducing investment in lower-paying customers)

If they cut prices or added a free tier, watch for:
- Heavy investment in bottom-of-funnel content (land-and-expand strategy)
- Reduction in features at lower tiers (subsidizing the new pricing with feature gating)
- Job postings for growth/marketing roles

The pricing page is usually the front edge of a broader strategy shift. Track it, but don't stop there.

---

## The CI process that makes this repeatable

Manual spot-checks don't work for this. You need daily automated snapshots of competitor pricing pages specifically, with a notification system that distinguishes "the pricing structure changed" from "they updated the meta description."

That's the problem I spent a few weeks solving — and then turned into KompWatch. The tool watches pages on a 24-hour cycle, runs AI classification on the diffs, scores severity, and sends a digest. So instead of 40 alerts a week, you get 3-5 that matter.

But whether you use a tool or build your own cron job: the process above is what determines whether you do anything useful with the signal once you have it.

Detection is the easy part. The response playbook is what actually protects your deals.

---

## FAQ

**How quickly do pricing changes actually happen in SaaS?**
More often than most teams expect. About 40-45% of SaaS pricing pages change within any 90-day window. Most changes are small — feature gating shifts, seat limit tweaks — but they accumulate. If you're doing quarterly manual reviews, your competitive info is usually stale.

**Should I tell customers when a competitor raises prices?**
Generally no, not proactively. But if a customer brings it up, or if they're in a renewal cycle, having accurate competitive pricing data is valuable. "They recently increased prices — here's where we stand" is a better conversation than being caught off-guard.

**What if I can't tell if the pricing change is an A/B test?**
Check the page from multiple IP addresses or use a privacy browser with a VPN. A/B tests often target by geo or session. If you see consistent pricing across multiple checks over 3-5 days, it's probably a real change.

**How do I get my sales team to actually update their battlecards?**
Keep the format simple. Don't ask them to rewrite anything — give them a specific section: "Here's what changed, here's how to handle it in a call." Two paragraphs max. The more work you put on them, the less likely they are to use it.

**What's the most important competitor page to monitor for pricing signals?**
The /pricing page, obviously. But also: the changelog page (features moving between tiers often shows up there first) and the /plans or /compare page if they have one. Some companies also gate features in the product itself — worth checking your trial account periodically.
