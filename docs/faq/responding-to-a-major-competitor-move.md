# Responding to a Major Competitor Move

**Short answer:** When a competitor makes a major move — new free tier, big feature launch, pricing restructure, acquisition — you have a narrow window (24–48 hours) where acting on the intel compounds its value. This guide is your checklist.

---

## What counts as a "major move"?

KompWatch flags these as **Critical** severity in your digest:

- Pricing restructure (new tiers, significant price cuts, free tier added/removed)
- Major feature launch (a capability directly competing with your core value prop)
- Competitor enters a new vertical or customer segment you also serve
- Acquisition or merger announcement
- Rebrand with repositioning (not just a logo change — see [Competitor Rebranded or Changed URL](./competitor-rebranded-or-url-changed.md))
- A competitor's pricing page goes from listed prices to "contact sales" (or vice versa)

High-severity changes — messaging pivots, new enterprise landing pages, sudden hiring spikes — warrant a 48-hour response. Medium changes feed your weekly review cycle. See [Competitive Intelligence Best Practices](./competitive-intelligence-best-practices.md) for the full triage framework.

---

## The 24-hour response checklist

When a Critical-severity change appears in your KompWatch digest:

**Within 1 hour — validate and scope**
- [ ] Open the KompWatch change entry. Read the AI-generated "What this means for you" summary.
- [ ] Confirm the change is real by visiting the competitor's site directly (not a false positive from a temporary A/B test).
- [ ] Identify the blast radius: does this affect your pricing, a specific feature, or a segment you share?

**Within 4 hours — brief the right people**

| What happened | Who to loop in immediately |
|---|---|
| Competitor drops prices significantly | Head of Sales + Product (for a potential pricing response) |
| Competitor launches a feature you've been asked for | Product + Customer Success (check your top accounts first) |
| Competitor adds a free tier | Marketing (update comparison pages) + Sales (objection prep) |
| Competitor acquired by a larger player | CEO/Founder + Sales (deal acceleration or at-risk accounts) |
| Competitor enters your primary vertical | Sales (pipeline defense) + Marketing (messaging review) |

A short Slack message with three things is enough: (1) what changed, (2) the direct URL/screenshot, (3) your recommended immediate action. Don't write a report — that comes later.

**Within 24 hours — update your sales layer**
- [ ] Pull the change history from KompWatch: **Competitors → [Name] → Change History** (filter by Critical/High).
- [ ] Update the relevant section of your [battlecard](./competitive-battlecards.md) — just the section that changed, not a full rewrite.
- [ ] Send the updated battlecard to your sales team. Note specifically which objections are now more likely ("Why should I switch when [Competitor] is free now?").
- [ ] If you have active deals where this competitor is mentioned, prioritize those reps first.

**Within 48 hours — adjust your external messaging if needed**
- [ ] Review your own pricing page and comparison pages. Does the framing still hold?
- [ ] If you have a `/vs-[competitor]` page, check whether any claims need to be updated.
- [ ] If the move is large enough (free tier, major acquisition), consider a brief customer email reassuring them of your roadmap and differentiation.

---

## Getting KompWatch data into the response quickly

**For a pricing change:**
Use the change diff to extract the exact before/after numbers. The KompWatch digest includes a `diff` field showing what text was removed vs. added on the pricing page. This is your source of truth — more reliable than screenshots.

**For a feature launch:**
Check the competitor's feature page change history, not just the home page. Feature launches often show up first as additions to the feature list or a new `/features/[name]` page, before they make it to the homepage. Filter by `"changeType": "FEATURE"` if you're using the JSON export.

**For a messaging shift:**
Hero copy changes (homepage headline, subheadline, primary CTA) are the earliest indicator of a repositioning. KompWatch captures these with every snapshot cycle. Compare the last 3–4 snapshots to see whether the shift is new or has been building.

---

## What NOT to do

**Don't overreact publicly.** A knee-jerk price drop or rushed blog post ("We're better than X") looks defensive. Wait until you understand the full scope of the move.

**Don't assume the change is permanent.** Pricing A/B tests, limited-time promotions, and accidental deploys all look like real changes in a snapshot. Validate before briefing your CEO.

**Don't brief everyone at once.** Sending a broad all-hands email about a competitor move creates anxiety without focus. Start with the people who can act, then brief leadership with context and a recommended response.

**Don't ignore the signal after 48 hours.** The 24–48 hour window is for immediate response. But the pattern is what matters longer term — if a competitor launches three major features in a quarter, that's a strategic signal worth a founder-level discussion, not just a sales email.

---

## After the dust settles — the 2-week follow-up

Two weeks after a major move:
- Check your deal close rates for deals where that competitor was mentioned. Did win rate shift?
- Review the competitor's page again. Did the change stick, or was it rolled back?
- If the change stuck, add it permanently to your battlecard and comparison pages.
- If you adjusted your own pricing or messaging in response, validate whether the change helped.

KompWatch's digest archive makes this easy: go to **Digests → Archive** and filter by competitor name to see the full two-week change timeline.

---

## Related articles

- [Competitive Intelligence Best Practices](./competitive-intelligence-best-practices.md) — ongoing triage habits
- [Building Competitive Battlecards](./competitive-battlecards.md) — turning intel into sales assets
- [Using KompWatch Insights for Sales](./using-insights-for-sales.md) — routing intel to your sales team
- [Competitor Rebranded or Changed URL](./competitor-rebranded-or-url-changed.md) — handling full rebrands
- [Understanding Your Digest](./understanding-your-digest.md) — how severity levels work

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
