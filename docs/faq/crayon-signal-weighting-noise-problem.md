---
title: Why Does Crayon Send So Many Alerts? (The Signal Weighting Problem)
description: Why Crayon's unweighted alert volume causes sales teams to stop reading digests — and how KompWatch approaches signal scoring differently.
---

# Why Does Crayon Send So Many Alerts? (The Signal Weighting Problem)

Crayon collects signals from hundreds of sources: competitor websites, job boards, press releases, social posts, review sites, patent filings, and more. The tool works exactly as designed. The problem is what happens to that volume when there's no severity scoring to separate urgent changes from background noise.

## The core issue: equal weight on everything

In a default Crayon digest, a competitor's new SDR job listing and a competitor's pricing page update appear side by side with the same visual weight. Your team has to evaluate every item to decide if it matters.

That's not a Crayon bug. It's a design tradeoff: surface everything, let humans prioritize.

The problem is that humans stop prioritizing when the volume is too high.

### The typical adoption curve

- **Week 1:** Excited. Dozens of signals. "We're actually on top of competitors now."
- **Week 3:** Volume feels like a second job. 40+ items per digest. Most are background noise.
- **Week 8:** Team members set inbox filters to skip the digest. One person still reading it summarizes manually to Slack.
- **Week 16:** Renewal conversation. "Is anyone actually using this?"

This pattern is consistent across teams who've moved away from Crayon. The tool surfaced good data. The problem was that good data buried in equal-weight noise trains teams to treat all signals as noise.

## What a severity-weighted feed looks like

Compare two approaches to the same six-signal digest:

| Signal | What Crayon sends | What a scored approach shows |
|---|---|---|
| Competitor A posted a new SDR job listing | Alert | LOW — background signal |
| Competitor B mentioned in a SaaStr podcast | Alert | LOW — brand awareness |
| Competitor C changed their pricing page | Alert | **HIGH — review before next sales call** |
| Competitor A published a blog post about roadmap | Alert | LOW — content activity |
| Competitor B Glassdoor rating dropped from 3.8 to 3.6 | Alert | LOW — lagging indicator |
| Competitor C changed their homepage headline | Alert | **MEDIUM — positioning shift, update battlecard** |

When items 3 and 6 stand out, your team acts. When they're indistinguishable from items 1, 2, 4, and 5, your team stops reading.

## How KompWatch handles this differently

KompWatch monitors specific pages you choose — pricing pages, feature tables, homepage CTAs — and uses AI to assess each detected change:

- **What changed** (text diff + rendered diff via headless Chromium)
- **Significance** (is this a pricing change, positioning shift, feature gate move, or nav tweak?)
- **Severity score** (LOW / MEDIUM / HIGH based on change type and strategic impact)

LOW-severity changes (cookie banner wording, footer copyright year, CDN asset rotation) are filtered by default. You can raise or lower the threshold based on your tolerance.

The result: a weekly digest where every item is something a human on your team should probably know about. Not a firehose you'll eventually stop opening.

## "But doesn't Crayon have priority settings?"

Crayon has some filtering options. Power users can configure boards, filter by signal type, and suppress certain categories. But the configuration overhead is significant — you're essentially building your own signal-weighting system on top of a platform that was designed to surface everything.

For teams with a dedicated CI analyst, that configuration overhead is manageable. For teams without one, it's often the reason the tool eventually gets abandoned.

## When Crayon's approach is the right call

Crayon's breadth is genuinely valuable if:

- You have a CI analyst whose job includes triaging the full signal feed
- You need patent filings, press coverage, or social monitoring alongside website changes
- Your org has a Salesforce or HubSpot integration that distributes battlecards to reps automatically

If your team is 5–50 people and doesn't have dedicated CI headcount, the volume-over-scoring model is likely to create the adoption problem described above.

## Related

- [Why Do Teams Stop Using Crayon and Klue?](why-ci-tools-become-shelfware.md)
- [Managing Alert Fatigue](managing-alert-fatigue.md)
- [What Is the Real Total Cost of Crayon?](crayon-total-cost-of-ownership.md)
- [Switching from Crayon](switching-from-crayon.md)
