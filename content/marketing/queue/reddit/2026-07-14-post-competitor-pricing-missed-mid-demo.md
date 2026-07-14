---
platform: reddit
type: post
target: r/SaaS
status: queued-no-creds
score: 8/10
keywords: [competitor pricing changes missed, lost deal competitor pricing, track competitor price change, competitive intelligence small team]
scheduled: 2026-07-14
---

**Title: Found out a competitor dropped their price 6 weeks ago — from a prospect, mid-demo. How are you handling competitor monitoring?**

This happened to us last quarter. Main competitor had restructured their pricing — dropped entry-level from $299 to $149. We had no idea. We're on a demo call and the prospect casually mentions they saw a $149 option "on their site." 

We'd been selling against their old pricing for 6 weeks. Who knows how many conversations were affected.

We had Google Alerts set up. Had a Slack channel for CI. Had a battlecard that was "updated recently." None of it caught a pricing page change.

The problem turned out to be pretty specific: their pricing page is a React SPA. Google Alerts doesn't monitor websites, it monitors the web for brand mentions. Our screenshot-based monitoring only caught visual diffs, and the layout hadn't changed — just the numbers.

We now use headless browser monitoring on their pricing page specifically, with daily checks and a plain-English summary of what changed.

Curious how other small SaaS teams are handling this. Are you:

- Manually checking periodically? How often does it actually happen?
- Using a tool? Which one, and does it handle JS-heavy pages?
- Just accepting that you'll find out from prospects and updating from there?

No wrong answers, genuinely curious what the real workflow looks like for teams without a dedicated CI function.
