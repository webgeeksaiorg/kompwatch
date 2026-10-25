---
platform: reddit
type: comment
target: r/ProductManagement or r/SaaS threads about "how do you actually use CI alerts" or "CI tools that nobody uses"
status: ready
keywords: [competitive intelligence workflow, CI alerts, competitor monitoring action]
---

The failure mode I keep seeing isn't the wrong tool — it's the right tool with no process downstream.

Alert fires. Goes to Slack. Nobody is assigned to do anything about it. Three days later someone asks "did we update the battlecard?" and the answer is no, because the alert was just... observed.

What actually works:

1. The alert has to go to a named person, not a channel. A channel is where alerts go to die.
2. That person needs a 10-minute task: read the change, decide if it's HIGH/MED/LOW impact, update one doc.
3. If it's HIGH, it goes to the PM and sales lead the same day. If it's LOW, it goes in the monthly CI digest.

The loop only closes if someone owns it. Most teams set up alerts and skip the ownership step entirely. Then they wonder why the battlecards are always stale.

(Building KompWatch partly to solve this — working on making the AI summary go directly to the owner's inbox rather than a general channel, exactly for this reason.)
