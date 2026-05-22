---
platform: linkedin
type: post
status: queued
keywords: [competitor monitoring, SaaS founder, build in public, competitive intelligence SMB]
---

Six months ago I was manually checking 12 browser tabs every Monday morning.

Competitor pricing pages. Features pages. Careers pages. Six tabs, open all weekend, first thing Monday before standup.

Half the time I'd find nothing. The other half I'd find something that changed on a Wednesday and I'd been blind to it for five days.

The obvious question: why not just set up Google Alerts?

I tried. Google Alerts catches news articles and press releases. It doesn't catch a competitor quietly removing their free tier. It doesn't catch a pricing page rewrite at 11pm. It doesn't catch a careers page going from 2 open roles to 14 — which is a pretty clear signal about where a competitor is about to invest.

So I built a cron job that diffed HTML pages and emailed me the changes. Then I added a headless browser because modern pricing pages are React apps that don't diff well with simple HTML comparisons. Then I added AI to translate "here are 847 lines of HTML that changed" into "they added a new Enterprise tier and removed the per-seat cap on their Pro plan."

That tool is KompWatch. $49/mo. Watches your competitors' websites, tells you in plain English when something meaningful changes.

---

I'm sharing this because I talk to PMs and founders every week who have the same Monday ritual. They've accepted it as normal.

It's not a good use of your time. And the enterprise tools (Crayon at $25K+/year, Klue at $20K+/year) aren't built for companies under 100 people.

There's a real gap there. Still figuring out how to fill it well, but we're getting closer.

What does your competitor monitoring workflow look like right now?
