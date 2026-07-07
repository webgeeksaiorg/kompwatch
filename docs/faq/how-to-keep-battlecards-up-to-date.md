# How to Keep Battlecards Up to Date (Without a CI Analyst)

Most battlecards die quietly. Not because the template was wrong or the person who built them didn't care — but because there was no reliable trigger to update them.

This article explains how to use KompWatch's change detection as the update trigger for your battlecard workflow, so your sales team is always working from current intel.

---

## The Real Problem: No Update Trigger

Battlecards go stale for one reason: teams only update them reactively.

A rep loses a deal and mentions in Slack that the competitor changed their pricing. Or a prospect says "I saw they launched X feature last month" in a call. Or someone notices a competitor's pricing page looks different.

By then, the damage is done. Sales was selling against old information.

The fix isn't a better template. It's knowing when something changed on the competitor's side so you can update *proactively* — ideally within hours, not weeks.

---

## How KompWatch Triggers Battlecard Updates

KompWatch monitors specific competitor pages and notifies you when something changes. The notification is the trigger.

The three change types that should always prompt a battlecard update:

| Change type | KompWatch severity | Battlecard section to update |
|---|---|---|
| Pricing page change | HIGH or CRITICAL | Pricing section, price anchoring row |
| Feature page change | MEDIUM or HIGH | Features/capabilities section |
| Messaging / hero copy change | LOW to MEDIUM | Positioning and objection sections |

When a HIGH or CRITICAL change arrives in your digest, open the battlecard for that competitor and update the relevant section. It takes 5–10 minutes. You know exactly what changed and why it matters because the digest includes an AI-generated "What this means for you" summary.

---

## Setting Up a Battlecard-Optimized Monitoring Stack

To make this workflow reliable, you need to monitor the right pages for each competitor.

For battlecard freshness specifically, focus on:

1. **Pricing page** — the highest-value change for sales. Use a CSS selector like `#pricing` or `.pricing-table` to avoid noise from nav or footer updates.
2. **Features or product page** — new capabilities that change your differentiation story.
3. **Compare pages (`/vs/[your-brand]`)** — if a competitor built a page targeting you, their objection framing tells you exactly how their sales team is positioning against you.

Skip: homepage (changes for design reasons, not competitive reasons), blog (too slow), social (noise).

For setup instructions: [Which Pages to Monitor Per Competitor →](./which-pages-to-monitor-per-competitor.md)

---

## The Update Workflow (Under 10 Minutes Per Week)

1. **On digest arrival** (daily on Pro, weekly on Free): scan for HIGH or CRITICAL changes.
2. For each flagged change: open the corresponding battlecard and update the relevant section. Copy the AI summary directly into the battlecard — it's already written in competitive language.
3. Note the date of last update in the battlecard header. This is a useful signal for your sales team.
4. **Monthly (30-minute sync):** review all battlecards as a team, flag anything that needs deeper analysis, and update positioning based on patterns.

Most teams spend 15–20 minutes per week on battlecard maintenance once monitoring is running — versus hours per quarter doing ad-hoc manual checks.

---

## FAQ: Common Battlecard Freshness Questions

**Q: How often should I update battlecards?**
Update event-driven, not calendar-driven. When KompWatch flags a HIGH change for a competitor, update that battlecard. You shouldn't need to schedule quarterly audits if monitoring is working correctly.

**Q: What if a competitor changes something minor?**
LOW severity changes (small wording tweaks, nav adjustments) don't need a battlecard update. Only act on MEDIUM+ changes, or any pricing change regardless of severity level.

**Q: My competitor just launched a major feature — how do I get the full picture?**
KompWatch will detect page changes, but won't read a full product release or changelog post automatically. When a significant change is detected, manually check their full changelog or release notes for context before updating your battlecard.

**Q: How do I know if our battlecards are stale right now?**
Check the "last updated" date on each battlecard against the most recent HIGH or CRITICAL change KompWatch has detected for that competitor. If the dates don't line up, the battlecard is behind.

---

## See Also

- [Building Competitive Battlecards with KompWatch →](./competitive-battlecards.md)
- [Creating Sales Battlecards →](./creating-sales-battlecards.md)
- [Which Pages to Monitor Per Competitor →](./which-pages-to-monitor-per-competitor.md)
- [Battlecard Export — Current Status →](./battlecard-export-current-status.md)
- [Change Severity Levels →](./change-severity-levels.md)
