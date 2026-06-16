# Will KompWatch Miss Important Changes? (Under-Alerting vs. Over-Alerting)

KompWatch is intentionally tuned to under-alert rather than over-alert. This is a deliberate design decision, not a bug. This article explains the tradeoff, when it matters, and how to adjust the balance if needed.

---

## The Core Tradeoff

Every competitor monitoring tool sits on a spectrum between two failure modes:

| Failure mode | What it looks like | What teams do |
|---|---|---|
| **Over-alerting** | 200+ raw diffs per week, mostly noise | Ignore the tool entirely |
| **Under-alerting** | Occasional missed subtle change | Miss one detail, but actually use the tool |

**Most teams strongly prefer under-alerting.** A monitoring tool you've stopped reading is worse than one that occasionally misses a minor word change.

KompWatch's filtering pipeline (normalization → CSS selector scoping → AI confidence scoring → severity classification) is calibrated to the under-alerting side of this spectrum. This means:

- You won't see noise. Tracking pixels, A/B test class names, counter animations — all filtered.
- You will see pricing changes, feature additions, new plan tiers, and messaging pivots.
- You may occasionally miss a subtle wording change deep in a feature description — particularly if it's one sentence inside a large block of otherwise-unchanged text, or if the change is below the AI's confidence threshold.

---

## What KompWatch Is Optimized to Catch

KompWatch's AI summarizer is tuned for high-confidence signals on SaaS marketing pages:

- **Pricing changes** — new tiers, removed plans, price increases, trial offer changes
- **Feature copy** — new capabilities added or removed from a features page
- **CTA and hero messaging** — headline rewrites, positioning shifts
- **Blog and changelog** — new posts, feature announcements
- **Job listings** — new roles as hiring signals

These categories are structured and explicit enough that the AI summarizes them accurately in plain English ("Competitor removed the $99/mo tier").

---

## Where Under-Alerting Can Occur

- **Subtle feature wording changes** — a single sentence in a long feature description changing from "unlimited" to "up to 100 projects" is the kind of detail that might score below the confidence threshold if the surrounding text is unchanged
- **Intent-level changes in copy** — a phrase that shifts positioning (e.g. "for developers" → "for enterprise teams") without large structural change may score as LOW severity
- **Non-English pages** — AI confidence scoring is less reliable on non-English competitor pages

---

## How to Catch More Subtle Changes

If you're monitoring a competitor where word-level changes matter:

1. **Narrow your CSS selector** — point KompWatch at the specific `<section>` or `<div>` containing the copy you care about. A tighter selector means the diff is computed on a smaller text surface, making subtle changes more prominent in the scoring model.

2. **Lower your severity floor** — go to **Settings → Digest Preferences** and set the minimum severity to **LOW**. You'll see more volume, but no genuine detected change will be excluded.

3. **Lower the confidence threshold** — go to **Settings → Notifications → Alert Confidence Threshold** and reduce from the default (85%) to 50–60%. More changes will reach your digest, including some that the AI was uncertain about.

4. **Enable "full diff view" in your digest** — this shows the raw HTML diff alongside the AI summary, so you can spot anything the summary compressed or skipped.

---

## What This Looks Like in Practice

Say a competitor changes one line in their pricing table from "Up to 5 team members" to "Up to 3 team members." That's a meaningful restriction — but it's a small change in a long pricing table.

- **With `body` selector:** This change is buried in a large diff. It might score MEDIUM and surface in your weekly digest.
- **With `#pricing .plan-grid` selector:** The diff is small. This change becomes the only detected change and scores HIGH, reaching your instant alert.

Selector specificity is the highest-leverage control you have over under-alerting.

---

## Related Articles

- [How Does KompWatch Filter Noisy HTML Diffs?](./how-kompwatch-filters-html-diff-noise.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [AI Confidence Scoring](./ai-confidence-scoring.md)
- [How Accurate Are KompWatch's AI-Generated Summaries?](./ai-summary-accuracy.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
