# Does the AI Confidence Score Improve Over Time? Can I Train It?

Yes — KompWatch's AI confidence scoring improves with use. When you interact with detected changes (marking them as significant, dismissing them as noise, or using the feedback actions in the dashboard), you're contributing signal that tunes how the model scores future changes on your competitors.

---

## How Feedback Affects Confidence Scoring

The scoring model uses two sources of signal: its base training on HTML diff patterns, and the feedback it receives from user actions within your account.

### Actions that improve scoring

| Your action | What it signals | Effect on future scoring |
|---|---|---|
| **Mark as Significant** | "This was a real, important change — score it higher" | Raises confidence threshold for similar diffs on this competitor |
| **Dismiss as Noise** | "This wasn't a real change — it was a flicker, A/B test variant, or session artifact" | Lowers confidence on similar diffs from this URL |
| **Archive without reviewing** | Neutral — no explicit signal | No effect on model |
| **Open and read (without action)** | Weak positive signal that the change was interesting enough to read | Minor upward nudge, not reliable training |

The model learns patterns at the URL level — feedback on `competitor.com/pricing` tunes the confidence scoring specifically for future diffs on that URL, not all diffs globally.

---

## How Long Does It Take to See Improvement?

After 5–10 meaningful feedback actions on a competitor, you'll typically notice that:

- False positives (A/B test variants, CDN flickers) start disappearing from your digest without manual intervention
- The amber confidence badge appears less frequently on that competitor
- The types of changes that previously triggered uncertain scores now come through with higher confidence

The more actively you use the feedback buttons, the faster the tuning works. Teams that dismiss or mark changes within 24 hours of receiving alerts see scoring improvements within 2–4 weeks of onboarding.

---

## Is the Improvement Per-Account or Global?

**Your feedback stays within your account.** KompWatch does not share individual feedback across customer accounts. Your dismissals and significance marks train the model for your monitored URLs — not for all users watching the same competitor.

This is intentional: what counts as "noise" on a competitor's page varies by team. A legal team tracking a competitor's terms-of-service page may care about changes that a product marketing team would dismiss. Your feedback reflects your team's signal definition.

---

## What If I Keep Getting the Same False Positive?

If a specific type of diff keeps appearing with uncertain confidence (amber badge) despite feedback, there are a few options:

### Option 1 — Use a CSS selector to exclude the noisy element

If the false positive is from a specific section of the page (a chat widget, a live visitor counter, a promotional banner that rotates daily), add a CSS selector that targets the sections you *do* care about and excludes the noise source.

Go to **Competitors → [name] → Edit → CSS Selector** and enter a selector like `.pricing-table, .feature-list` to limit monitoring to only those sections.

See [Setting CSS Selectors →](./setting-css-selectors.md) for a guide on choosing accurate selectors.

### Option 2 — Dismiss the pattern consistently

Use **Dismiss as Noise** every time the specific false positive appears. After 3–5 dismissals of the same pattern type, the model learns to suppress it automatically. The key is consistency — dismissing 1 out of 5 occurrences slows the learning.

### Option 3 — Raise your alert threshold for this competitor

In **Per-competitor notification settings**, you can raise the minimum severity or minimum confidence threshold for individual competitors independently of your global settings. If a noisy competitor is generating too many uncertain-confidence alerts, set their individual threshold higher while keeping your global threshold lower for competitors whose pages are more stable.

See [Per-Competitor Notification Settings →](./per-competitor-notification-settings.md).

### Option 4 — Contact support

If you've tried CSS selectors and consistent feedback and still see a specific false positive pattern, email [support@kompwatch.com](mailto:support@kompwatch.com) with the competitor URL and a description of the recurring false positive. We can inspect the diff pipeline for that URL and apply a pattern-level suppression rule.

---

## Do My Feedback Actions Affect the AI Confidence Badge?

Yes. The **AI XX% badge** shown on a change reflects the model's raw certainty at the time of detection. As the model improves from your feedback, future similar changes will either:

- Score above the badge threshold (≥ 95%) and appear without any badge at all
- Score in the green range (≥ 80%) and show a green badge
- Or in rare cases, score higher than before but still below the badge threshold — at which point the badge value itself will be higher

You won't see retroactive badge updates on past changes. Only new changes detected after feedback is processed will reflect the improved scoring.

---

## What If I Want to Reset My Feedback?

At launch, KompWatch does not offer a one-click feedback reset. If you've accidentally sent incorrect signals (e.g., dismissed a batch of real changes as noise), email [support@kompwatch.com](mailto:support@kompwatch.com) and we can reset the learned signal for a specific competitor URL.

---

## Summary

| Question | Answer |
|---|---|
| Does the model learn from my feedback? | Yes — Mark as Significant and Dismiss as Noise both improve future scoring |
| Is feedback shared across accounts? | No — your training stays within your account |
| How quickly does it improve? | 5–10 actions → noticeably fewer false positives within 2–4 weeks |
| Can I tune individual competitors separately? | Yes — per-competitor CSS selectors and notification thresholds |
| What if a specific false positive keeps recurring? | Use CSS selectors, consistent dismissals, or contact support |

---

## Related Articles

- [What Is the "AI XX%" Badge on a Change?](./what-is-the-ai-percentage-badge.md)
- [AI Confidence Scoring — How KompWatch Filters Change Noise](./ai-confidence-scoring.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [Setting CSS Selectors](./setting-css-selectors.md)
- [Per-Competitor Notification Settings](./per-competitor-notification-settings.md)
- [How KompWatch Filters HTML Diff Noise](./how-kompwatch-filters-html-diff-noise.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we respond within 24 hours.*
