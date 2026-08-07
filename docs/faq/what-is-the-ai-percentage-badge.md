# What Is the "AI XX%" Badge on a Change?

When KompWatch detects a change, you may see a small colored badge next to the change in the **competitor detail page** or in your **digest email** — something like **AI 74%** or **AI 88%**. Here's what it means.

---

## Short Answer

The **AI XX%** badge shows the raw model certainty that this change is genuine and intentional — not an A/B test variant, CDN flicker, or session-level noise.

- **Green badge (≥ 80%)** — the AI is highly confident this is a real change. Worth verifying but not urgent.
- **Amber badge (60–79%)** — moderate confidence. Real, but double-check before briefing your team.
- **Gray badge (< 60%)** — lower confidence. Could be a transient artefact. Review the raw diff before acting.
- **No badge** — the AI confidence is ≥ 95%. Highest confidence is the expected default, so no badge is more informative than adding one for every change.

The badge is designed to surface only when the AI had *meaningful uncertainty* — i.e. the change is worth a second look before you act on it.

---

## Why Does the AI Express Uncertainty?

Competitor websites are noisy. A single page may serve different content to different visitors at the same time due to:

- **A/B test variants** — two users see different hero headlines or pricing tables
- **Personalization** — content differs by geography, referrer, or device
- **CDN edge drift** — stale cached content on some edge nodes looks like a change
- **Session-level dynamic content** — chat widget states, consent banners, live counters

When KompWatch detects a diff, the AI evaluates persistence, pattern recognition, and scope coherence to estimate how likely the change is to be real. That estimate is the confidence score. The badge surfaces it when the score is below 95%.

---

## The Badge vs. The Signal Score

The competitor detail page shows two scores side by side:

| Badge | What it measures |
|-------|-----------------|
| **Signal** (e.g. "Moderate") | A composite score weighting severity, change type, content zone, and AI confidence together |
| **AI XX%** | Raw AI model certainty only — before any weighting by severity or context |

A change can have a high AI confidence but a low Signal score (e.g. real change, but low severity and unimportant page zone). Or a high Signal score but an amber AI badge (e.g. potential pricing change with moderate model certainty — high strategic importance, worth verifying).

Read both together. If you see an amber AI badge on a HIGH severity Pricing change, review the diff before acting — the change may be real, but the AI isn't certain enough to skip human review.

---

## What Should I Do When I See an Amber or Gray Badge?

1. **Open the change** — click the change card to view the full diff (before vs. after snapshot).
2. **Visit the competitor's page directly** — confirm whether the change is live, or if it was transient.
3. **Use "Mark as Significant"** if the change is real but appears with an uncertain badge — your feedback trains the model over time.
4. **Dismiss or ignore** if you confirm it was noise.

---

## Can I Filter Changes by Confidence Level?

Yes. In **Settings → Notifications → Confidence Filters** you can control:

- The minimum confidence required for an instant alert (default 70%)
- The minimum confidence required for changes to appear in your digest (default 40%)
- The minimum confidence for CSV/API exports (matches digest filter by default)

Changes below 40% are automatically discarded before storage — they never appear anywhere. See [AI Confidence Scoring — How KompWatch Filters Change Noise](./ai-confidence-scoring.md) for a full breakdown of thresholds.

---

## Related Articles

- [AI Confidence Scoring — How KompWatch Filters Change Noise](./ai-confidence-scoring.md)
- [Understanding Your Dashboard](./understanding-the-dashboard.md)
- [Change Severity Levels — What LOW / MEDIUM / HIGH Mean](./change-severity-levels.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
