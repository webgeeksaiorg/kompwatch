---
platform: blog
type: article
status: queued-no-creds
keywords: [competitor feature launch, detect competitor product changes, monitor competitor website, competitive intelligence SaaS, competitor tracking]
score: 8.5/10
---

# How to Know When a Competitor Launches a New Feature (Before They Announce It)

Here's how I found out a competitor added usage-based pricing before their own blog post went live.

Their pricing page had four tiers on a Monday. By Wednesday afternoon it had five — with a "Pay as you go" option wedged in between Pro and Enterprise. No tweet. No changelog. No press release. The page just... changed.

I found out because KompWatch caught it.

That's the gap most people don't think about. You're waiting for competitors to tell you what they did. They don't.

---

## The announcement lag is real

Most SaaS companies announce changes 2–4 weeks after they ship them. Sometimes longer. The feature goes live, they QA it, they write the blog post, they coordinate with marketing, they schedule the email. By the time you read about it, it's been in production for a month.

If you find out from their announcement, you're already behind.

The PMs who are ahead of this read the page, not the press release.

---

## What actually signals a new feature before the announcement

There are five places a new feature shows up before it gets announced:

**1. The pricing page changes**

New features usually land in a tier or get added as an add-on. Watch for: new line items, tier reshuffling, new plan names, "coming soon" labels that disappear.

**2. The features page gets updated**

This is the most obvious one but people miss it because they're not watching. New section headers, new screenshots, new comparison table rows. These get updated when the feature ships, not when the blog post goes up.

**3. The navigation changes**

A new nav item in their product means a new surface area. Sometimes they add it to the marketing site nav before the announcement goes live (staging mistake, or just pre-launch optimization).

**4. The jobs page shifts**

If they just launched a feature, they're probably hiring to support it. Watch for new IC roles in areas they haven't hired before — "ML Engineer, Real-Time Personalization" after they ship an AI recommendations feature is not a coincidence.

**5. The docs quietly expand**

Most companies don't gate their documentation. New sections in /docs mean new features. This is an underrated signal.

---

## The manual version of this workflow

Before I built KompWatch, I did this manually.

Every Monday I had 6 browser tabs pinned to competitor pages. Features, pricing, homepage, blog, docs, jobs. I'd diff them visually and take notes in a Notion doc.

It took about 90 minutes. I did it every week for about 4 months before I missed a pricing change that happened on a Thursday — and found out from a prospect who asked about it on a Friday demo.

That was enough.

The problem with manual isn't just time. It's that you're only checking once a week at best. Changes happen Tuesday afternoons and Thursday mornings. They don't wait for your calendar.

---

## What automated monitoring actually catches

I track 11 competitor URLs across 4 companies. Here's what KompWatch has surfaced in the last 90 days:

- Pricing tier rename (from "Growth" to "Scale") — caught same-day
- New feature section on a features page — caught within 4 hours
- CTA button text change on homepage hero ("Start free trial" → "Get a demo") — caught in 2 hours. That's a signal they're moving upmarket.
- Job posting spike: 3 ML engineers posted in one week — caught via Careers page monitoring

None of these had announcement blog posts for at least 2 weeks. Some never got one.

---

## Which pages to monitor for feature launches

If I could only monitor 4 pages per competitor, I'd pick:

1. `/pricing` — changes here almost always signal product movement
2. `/features` or `/product` — this is where new capabilities land first
3. `/docs` or `/help` — new sections = new features, usually no lag
4. `/careers` — 60-day leading indicator for roadmap direction

The homepage is worth watching too, but it changes a lot for uninteresting reasons (design updates, A/B tests, seasonal stuff). Too noisy unless you use a CSS selector to watch only the hero text.

---

## The ghost feature launch

My favorite category is what I call ghost launches — features that ship to some users, never get a marketing push, and slowly become table stakes.

The company never announces it. It just appears in the features page comparison table. Then it's in the pricing page add-on section. Then a year later a prospect asks "do you do X?" and you say no, and they say "oh, [Competitor] does."

Watching the page catches this. Reading the blog doesn't.

---

## FAQ

**How often should I check competitor pages?**
Daily is enough for most. If you're in a fast-moving market with aggressive competitors, 2x/day. Weekly is too slow — you'll miss the mid-week Thursday launch that every SaaS team does.

**What about competitors who use JavaScript-heavy sites?**
Google Alerts won't catch these at all. ChangeDetection.io misses them too. You need headless browser rendering (Playwright or Puppeteer) to get the actual content, not just the HTML shell. This is the main reason I built KompWatch on Playwright.

**Is this worth doing for small companies?**
If you have 2+ direct competitors with paying customers, yes. The signal-to-effort ratio is good. You're not trying to build a war room — you're trying to not get blindsided on a demo call.

**What do I do when I catch a change?**
Log it, classify it (pricing / feature / positioning / hiring), and brief the people who need to know: AEs, CSMs, the PM working on that area. The best CI programs have a 24-hour turnaround from detection to briefing. Most companies are at 2–3 weeks.

---

## The setup takes 10 minutes

Add a competitor, paste their pricing URL, pick a CSS selector for the content you care about. KompWatch starts watching. Changes hit your inbox with a plain-English summary of what shifted and why it might matter.

No annual contract. No onboarding session. $49/mo.

If you're manually checking competitor pages right now — or worse, relying on Google Alerts — give it a try. The first detected change usually pays for a year.

[Start monitoring competitors →](https://kompwatch.com)
