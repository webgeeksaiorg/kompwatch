---
platform: reddit
type: post
subreddit: r/SaaS
status: queued-no-creds
score: 8.5/10
keywords: [competitor monitoring for saas, track competitor pricing changes, SaaS build in public]
scheduled: 2026-08-07
---

**3 months, 0 paid subscribers, and what I've actually learned about competitor monitoring (not the tool — the problem)**

I built KompWatch to solve my own problem: I was manually checking 8 competitor websites every Monday morning and still missing things.

Three months later, I have a working product, a queue of content, and zero paying customers.

That's the honest update. But here's what I *have* learned from building and using it:

**The monitoring isn't the hard part. Knowing what changed matters is.**

You can get 50 alerts a day from a noisy website monitoring tool. If you can't tell "this pricing change matters" from "this was a CSS tweak," you stop reading alerts within a week.

The real job of a CI tool is classification, not collection. Collection is solved. Classification — especially for pricing and positioning changes — is where most tools fail.

**What actually changes on competitor websites:**

In 3 months of watching ~15 SaaS pricing pages daily:
- 40% of them changed something on their pricing page in that window
- Most changes were subtle: tier renaming, feature list shuffling, plan limit adjustments
- 3 companies added "Contact Sales" buttons that didn't exist before (enterprise pivot signal)
- 2 companies quietly removed their free tier
- 1 company changed their hero headline 4 times in 6 weeks (testing signal)

None of those changes showed up in Google Alerts. None were announced in a blog post.

**The distribution problem I haven't solved:**

Product PMs and founders who *need* this tool don't search for it. They're stuck in habits: Google Alerts + Monday tab ritual + quarterly Klue seats nobody uses after month 2.

If you've cracked the "how do you get people to switch CI tools" problem — genuinely curious. I'm good at building the thing. The distribution is harder than the scraper.

---

KompWatch is at $49/mo if you want to try it. Watches the actual HTML, not headlines. Not affiliated with my point about the industry — just the tool I built.

What's your current competitor monitoring setup? Would love to hear what's actually working.
