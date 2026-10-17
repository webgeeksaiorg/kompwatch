# When to Update a Battlecard After a Competitor Launch

Not every competitor change warrants a battlecard update. Here's the decision framework KompWatch customers use to triage launch signals efficiently — so battlecards stay current without creating busywork.

---

## The Core Heuristic

| Change type | Severity | Action |
|---|---|---|
| New feature added to `/features` or feature grid | HIGH | Update battlecard within 48 hours |
| New pricing tier or add-on on `/pricing` | HIGH | Update Pricing objection block within 48 hours |
| New integration on `/integrations` | HIGH | Update Integrations row within 24 hours |
| Homepage hero rewrite (category repositioning) | HIGH | Add positioning note; full battlecard update if messaging shifts significantly |
| New changelog entry (major feature) | HIGH | Update battlecard; notify sales |
| New changelog entry (bug fix, minor change) | LOW/MEDIUM | Note only — no battlecard update needed |
| Social proof addition (new G2 badge, review widget) | MEDIUM | Update "Social Proof / Trust" section if relevant to your buyers |
| Footer, nav, or microcopy changes | LOW | Monitor for pattern; no immediate action |
| A/B test copy (reverts within 7 days) | LOW | Ignore — not a launch signal |

---

## Reading KompWatch Severity to Decide Urgency

KompWatch assigns severity (LOW/MEDIUM/HIGH) using AI classification based on the change type and how much of the page shifted. The patterns that reliably signal a launch requiring a battlecard update:

- **HIGH severity on multiple change types on the same day** — e.g., new feature entry + hero rewrite + pricing page edit. This is the "full launch cluster." Update the battlecard the same day.
- **HIGH severity on `/pricing` alone** — New tier, new add-on, or price change. Update the Pricing objection block before the next sales cycle.
- **HIGH severity on `/integrations` alone** — New integration logo or entry. Update the Integrations row; alert sales if that integration is frequently mentioned in demos.
- **HIGH severity on `/features` alone** — New feature cell or new feature category. Update the Features comparison section.

---

## The 48-Hour Rule

**Any HIGH-severity change to `/pricing`, `/features`, or `/integrations` should result in a battlecard update within 48 hours.**

Why 48 hours? The average B2B sales cycle has touchpoints several times per week. If a competitor ships a major integration on Tuesday morning and your battlecard isn't updated until the following Monday, your reps have had 3–5 calls in between where buyers could have surfaced it unprepared. The cost of a stale battlecard is a rep saying "I'll get back to you on that" instead of handling the objection in the room.

KompWatch's digest email cadence (daily or weekly, your choice) is designed to surface HIGH-severity changes fast enough to meet the 48-hour window:
- **Daily digest:** Next digest after the launch lands the alert
- **Weekly digest:** Use Slack integration (Pro/Team) for HIGH-severity real-time pings if you need sub-48h response for top competitors

---

## What to Update in the Battlecard

### New feature launch
- Add the feature to the competitor's feature list in the battlecard
- Update the **"Where they beat us / Where we beat them"** section if the feature closes a gap
- Draft a positioning counter if needed: "They added X. Our approach to X is [differentiated angle]."
- Notify sales via #sales-enablement Slack with the KompWatch diff link and the positioning note

### New pricing tier or price change
- Update the **Pricing** objection block with the new tier name, price, and what's included
- If the new tier puts them below or above your pricing, flag explicitly: "Competitor now has [BUDGET TIER] at $X/mo — expect price-sensitive buyers to bring this up"
- Update your objection-handling language if the new pricing creates a new price objection

### New integration
- Add to the **Integrations** row of the battlecard
- Check if it's a frequently-surfaced integration in your sales cycles. If yes: "Competitor now has [CRM] integration. Our integration is [status]. If buyer asks: [script]."
- This is the highest-urgency update type — buyers often make decisions on integration presence alone

### Homepage/hero repositioning
- Add a **Messaging notes** section or update the existing one
- Capture the new hero line: "Competitor changed their hero from X to Y on [date] — positioning shift toward [category/buyer]"
- Evaluate if your own positioning should respond or if this creates a contrast opportunity

---

## Signals That Don't Need a Battlecard Update

These are common change types that get flagged in KompWatch digests but typically don't warrant battlecard revisions:

- **Bug fixes** — Changelog entries documenting fixes. Monitor for patterns (repeated bug fixes in one area = reliability signal worth tracking), but no immediate battlecard action.
- **Blog posts and content additions** — New content on `/blog` or `/resources`. Useful context but rarely battlecard-level.
- **Testimonial and social proof rotations** — The same reviewers, just reordered. Only update battlecard if a *new* recognisable logo or review quote appears.
- **A/B tests that revert** — If a hero or CTA change reverts within 7 days, it was a test, not a launch. KompWatch's history view lets you see the revert.
- **Navigation and footer edits** — Low-signal. Useful for spotting new product lines early, but not battlecard-worthy alone.

---

## When to Escalate to the Broader Team

Some launches are bigger than a battlecard update — they change how your whole team should respond:

| Launch signal | Who to loop in |
|---|---|
| Competitor enters a new product category | Product, Marketing, CEO |
| Major integration announced (your key CRM/tool) | Sales leadership, CS team |
| Significant pricing restructure (new free tier, price cut) | Pricing, Sales leadership |
| Competitor acquires or partners with a major brand | Marketing, CEO |
| Competitor rebrands or repositions category | Marketing, Product Marketing |

For these, share the KompWatch digest entry (each change has a shareable link on Pro/Team plans) alongside a one-line "so what for us" summary. The KompWatch diff gives the evidence; your analysis gives the "why it matters."

---

## Keeping a Launch Log

For audit purposes and quarterly competitive reviews, keep a brief log of significant launches and your battlecard updates. A simple format:

```
[2026-07-08] Kompyte — shipped native Salesforce integration (KompWatch HIGH severity)
  → Updated Kompyte battlecard: Integrations row, Objection handling for CRM buyers
  → Notified: #sales-enablement, #pmm

[2026-07-14] Klue — added "AI Insights" add-on at $199/mo/user
  → Updated Klue battlecard: Pricing section, new tier note
  → Notified: #sales-enablement
```

KompWatch's change history (accessible from any digest) gives you the timestamps and diffs automatically — the log just adds your "action taken" column.

---

## Related FAQs

- [How to monitor a competitor Product Hunt launch →](./how-to-monitor-a-competitor-product-hunt-launch.md)
- [Monitoring competitor product launches →](./monitoring-competitor-product-launches.md)
- [Monitoring competitor changelog and release notes →](./monitoring-competitor-changelog-and-release-notes.md)
- [Creating sales battlecards →](./creating-sales-battlecards.md)
- [How to keep battlecards up to date →](./how-to-keep-battlecards-up-to-date.md)
- [How to brief sales on competitor change →](./how-to-brief-sales-on-competitor-change.md)
- [Change severity levels →](./change-severity-levels.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
