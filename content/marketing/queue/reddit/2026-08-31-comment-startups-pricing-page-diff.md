---
platform: reddit
type: comment
target: r/startups
status: queued-no-creds
keywords: [track competitor pricing, competitor price change notification, pricing page change alert]
score: 8.5/10
---

[reply angle: thread about competitor research process, someone mentions checking pricing pages manually]

The pricing page thing specifically is brutal because it changes with zero announcement.

My old process: open the tab Monday morning, squint at it, try to remember if it looked different last week. Usually couldn't tell.

Found out a competitor dropped their base tier by $20/mo about 3 months after it happened. Had already lost a few deals on price in the interim. No one announced it. No blog post, no email, nothing — they just quietly changed the page.

The fix that works: automated snapshots with a diff. Every week, compare this week's pricing page HTML to last week's. If it changes, email me with what changed.

You can set this up with a $5 Hetzner cron job and some Python. Or just use a tool that does it. Either way — automate the capture. Don't rely on your memory of what a webpage looked like.

Monday is a terrible day to discover something that changed on Wednesday.
