---
platform: linkedin
type: post
status: queued
keywords: [competitor monitoring automation, track competitor website changes, building in public SaaS]
---
KompWatch started as a cron job.

Not a company. Not a product. A bash script that curled five competitor URLs, diffed the HTML against last week's version, and emailed me a wall of angle brackets every Monday.

It was ugly. It caught a pricing change I would have missed. I kept running it.

Three months later I'd added a Claude API call to summarize the diff into plain English. "Competitor A removed the Enterprise tier from their pricing page." That was the whole output. Two sentences. Turned out that's basically all I needed.

The jump from "useful script" to "maybe other people want this" happened when a friend in product said she was doing the same thing manually — copy-pasting competitor pages into a doc and eyeballing changes. Weekly. By hand.

That's when I realized this wasn't a me-problem.

The CI tool market splits into two camps: the $0 solution (Google Alerts, spreadsheets, vibes) and the $15k/year enterprise platforms that assume you have a dedicated competitive intelligence team. Most product teams live in neither. They're six people doing their best with the $0 tools and occasionally missing things that matter.

KompWatch is the middle. $49/mo. You paste competitor URLs. We tell you when stuff changes. The AI summarizes it so you don't have to read HTML diffs.

Still feels weird to call it a company. It started as a cron job nine months ago.

Building in public means saying that out loud. So: it started as a cron job. Here we are.
