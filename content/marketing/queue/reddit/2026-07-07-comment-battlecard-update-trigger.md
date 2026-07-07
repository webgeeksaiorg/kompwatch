---
platform: reddit
type: comment
target: r/ProductManagement, r/SaaS — threads where someone asks how to keep battlecards updated or how to run CI on a small team
status: queued-no-creds
score: 8/10
keywords: [keep battlecards updated, battlecard maintenance, competitive intelligence small team]
scheduled: 2026-07-07
---

The thing that helped us most wasn't a better battlecard format — it was solving the update trigger problem.

We had well-structured battlecards. Sales team just... stopped trusting them after getting caught twice with wrong pricing info on a call.

What changed: instead of updating battlecards on a quarterly cadence, we switched to event-driven updates. When a watcher detects our competitor changed their pricing page, that's the trigger to update the relevant battlecard section. Same for features page, changelog, compare pages.

It's not a process thing. It's a monitoring thing. Once you know when something changed, updating the battlecard is a 10-minute task. Without that signal, you're doing a full quarterly audit hoping you catch what changed — which you usually don't.

For small teams without a dedicated CI person: assign one person to own a Slack channel that receives competitor change alerts. Their job is just to triage: "this matters, update battlecard" vs "this is noise, ignore it." 2-3 hours a month max.

The audit cadence is the wrong mental model for this problem.
