---
platform: reddit
type: post
target: r/entrepreneur
status: ready
keywords: [automate competitor monitoring, track competitor websites, competitor price tracking]
---
**I automated my Monday morning competitor check — here's what I built and what I learned**

For about a year I had 12 browser tabs pinned. Every Monday, I'd go through them one by one. Ctrl+F for "pricing." Scroll the features page. Check if anything looked different.

It took 45 minutes and I still missed things. Competitors would update pricing mid-week. I'd find out a month later when a prospect mentioned it on a call.

So I built a cron job.

**What it does:**
- Hits each competitor URL on a schedule (hourly for important ones, daily for the rest)
- Takes a snapshot of the relevant HTML (you tell it which CSS selector to focus on)
- Diffs it against the previous snapshot
- Sends the diff to an LLM with the prompt: "what changed here that a product manager would care about?"
- Emails me the summary

The first version was maybe 200 lines of Python. Playwright for rendering JS-heavy pages, Claude API for the summarization, Resend for email.

**What I learned:**

1. Most competitor pages don't change week to week. That's fine. You want the signal when they do.

2. The AI summarization is the key piece. Raw HTML diffs are useless. "They changed 3 classes in their nav" is noise. "They removed the free tier and replaced it with a 14-day trial" is signal.

3. CSS selectors matter. If you just watch `body`, you'll get alerts every time they change a footer link. Point it at the pricing section specifically.

4. Job listings are underrated. A competitor posting 4 ML engineer roles tells you something about their next 6 months that their marketing page never will.

I turned this into a product — [kompwatch.com](https://kompwatch.com) — because a few friends asked if they could use it. Still early days.

But honestly, if you have a few hours, you can build the basic version yourself. Happy to share the core scraping/diff logic if useful.

**Questions I still haven't answered:**
- How do you handle competitors that require login to see their pricing?
- How do you track feature comparison pages that are behind PDFs or downloadable assets?

Anyone else solved these?
