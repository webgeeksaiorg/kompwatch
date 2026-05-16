# Competitor Site Redesign or Relaunch — Handling a Wave of Changes

When a competitor relaunches their website or does a major redesign, KompWatch may detect dozens (or hundreds) of changes across a single snapshot cycle. This is expected behavior — the monitoring is working correctly. Here's how to triage the flood and extract what actually matters.

---

## Why Does a Redesign Cause So Many Alerts?

KompWatch compares each new snapshot against the previous one. A full redesign touches nearly every element on every page simultaneously: layout, navigation, copy, pricing structure, feature descriptions, and more. Each meaningful difference generates a separate change record.

This is not a false positive — the competitor genuinely changed many things. The challenge is finding the **signal inside the volume**.

---

## Step 1 — Filter by Content Zone First

Open the **Dashboard** and use the **Zone** dropdown to filter changes from the redesign snapshot. Prioritize in this order:

| Zone | Why it matters after a redesign |
|------|-------------------------------|
| **MONETIZATION** | Did pricing change? New tiers? Different free/paid split? |
| **POSITIONING** | New headline, new ICP, shifted messaging, new tagline? |
| **PRODUCT** | New features announced, old features removed, renamed capabilities? |
| **MARKETING** | New case studies, testimonials, or content strategy shift? |
| **TALENT** | Sudden job posting surge — signals where they're investing |

Skip `OPERATIONS` and minor `MARKETING` zones in the first pass — those are usually structural/template changes, not competitive moves.

---

## Step 2 — Sort by AI Confidence Score

Use the **Confidence** filter (High and above) to surface changes where KompWatch's AI is most certain the content shift is meaningful — not just a CSS class rename or template swap.

See [AI Confidence Scoring →](./ai-confidence-scoring.md) for how the score works.

---

## Step 3 — Dismiss the Noise Quickly

After reviewing a change, use the **thumbs down / dismiss** action to mark cosmetic or irrelevant changes. Dismissed changes are removed from your active feed but retained in the change history.

**Bulk tip:** Use the Zone filter to show only `OPERATIONS` changes, then dismiss them all at once — these are almost always structural rather than strategic.

See [Dismissing and Marking Changes →](./dismissing-and-marking-changes.md).

---

## Step 4 — Pause the Competitor (Optional)

If you expect the redesign to roll out gradually over several days — common with A/B tested relaunches — you may want to **pause** the competitor temporarily, let the rollout settle, then **resume** once the site is stable.

This prevents a stream of incremental change alerts as each page variant is deployed.

1. Go to [kompwatch.com/competitors](https://kompwatch.com/competitors)
2. Click **Pause** on the competitor row
3. Resume when the redesign is fully live (typically 1–5 days)

Pausing does not delete any data. Historical changes are preserved.

---

## Step 5 — Temporarily Raise Your Severity Floor

If you don't want to pause but the volume is noisy, raise your **Minimum severity** in **Settings → Notifications**:

- **Medium** — filters out minor copy and template changes (~40% volume reduction)
- **High** — pricing, feature announcements, and positioning shifts only

Lower it back after the dust settles.

---

## What Should I Look For in a Redesign?

The most strategically important signals hidden in a redesign flood:

- **Pricing page changes** — new tiers, removed tiers, price anchoring shifts
- **Homepage headline / hero** — repositioning to a new ICP or use case
- **Feature page additions/removals** — capabilities they're leaning into vs. downplaying
- **Navigation restructure** — surfaces their new product hierarchy and priorities
- **Social proof / case study updates** — which customers they're now leading with
- **CTA changes** — "Start free trial" → "Book a demo" signals GTM motion shifts

---

## Related Articles

- [Content Zone Classification](./content-zone-classification.md)
- [AI Confidence Scoring](./ai-confidence-scoring.md)
- [Dismissing and Marking Changes](./dismissing-and-marking-changes.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [Managing Your Competitors — Edit, Pause, and Delete](./managing-competitors.md)
- [Filtering Slack Alerts by Content Zone](./filtering-alerts-by-content-zone.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
