---
platform: reddit
type: post
target: r/SaaS
status: queued-no-creds
score: 8.5/10
keywords: [competitor monitoring free tools, track competitor website changes, SaaS competitive intelligence DIY]
---

**How I track 11 competitor websites for $0/mo (and what I actually get from it)**

I spent most of last year building KompWatch — an automated competitor monitoring tool. But before I had my own tool, I had to figure this out manually.

Here's the honest breakdown of what's worth monitoring and how, even if you're doing it for free.

**The three pages that actually matter**

Not their blog. Not their social. Three pages:

1. **/pricing** — Where real strategic decisions show up. "Contact us" replacing a number is a deliberate choice. A new tier appearing means they're going up-market or down-market.

2. **/features** or their features comparison table — Slower to update than pricing, but when it changes it means something real shipped. Not on the roadmap. Actually shipped.

3. **/changelog** or their release notes — This is the most underrated. Companies update changelogs before the blog post goes up, before the press release, before anything. If you only watch one page, this is the one.

**The free monitoring setup**

Visualping has a free tier. Works for 3-5 pages, sends email alerts. Good enough if you have under 5 competitors.

If you're technical: a cron job with `curl` + a simple diff saved to a file + email via SendGrid free tier. I ran this for 8 months before building a proper tool. Still works.

Google Alerts on "[competitor name] pricing" or "[competitor name] features" — actually catches press coverage but misses the actual page changes.

**What I learned from 18 months of doing this**

Most competitor "intelligence" is noise. Blog posts, LinkedIn announcements, conference presence — mostly marketing. The signal is in the boring pages. Pricing. Features. Jobs.

Jobs is the one people miss most. Competitor posting 4 ML engineers and a Head of Data in the same month? That's a product direction signal 6-9 months before anything shows up on their features page.

The information lag from finding out about a competitor change after it matters is usually 2-6 weeks. That's the gap worth closing.

---

Happy to answer questions about what's worth tracking vs. what's noise. Spent a lot of time figuring this out the hard way.

*(Edit: yes, I built KompWatch which does this automatically. But the manual approach above works fine if you have <5 competitors and don't mind checking weekly.)*
