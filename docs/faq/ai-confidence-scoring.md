# AI Confidence Scoring — How KompWatch Filters Change Noise

Every change KompWatch detects gets two AI-assigned scores: a **severity** rating and a **confidence** score. They answer different questions.

- **Severity** — how strategically important is this change? (Low → Critical)
- **Confidence** — how certain is the AI that this is a genuine, intentional change vs. noise? (0–100%)

Confidence is one of several inputs into KompWatch's **composite signal score**, which is what actually controls whether a change is persisted, surfaced in alerts, or shown with a badge. See below for how it all fits together.

---

## Why Confidence Matters

Competitor websites are noisy. Pages routinely serve:

- **A/B test variants** — two users see different copy at the same time
- **Personalization layers** — content that changes based on visitor geography, referrer, or device
- **Dynamic session content** — chat widget states, cookie consent banners, live visitor counts
- **CDN edge drift** — stale cache on some edge nodes showing older content

Without scoring, all of these generate change alerts — most of which aren't real competitive moves. KompWatch suppresses them before they reach your digest.

---

## From Confidence to Signal Score

The raw AI confidence (0–100%) is **one factor** in a composite **signal score** (0.0–1.0). The signal score blends:

| Factor | Weight | What it reflects |
|--------|--------|-----------------|
| **AI confidence** | 35% | Model certainty the change is real (not A/B test / CDN drift) |
| **Severity** | 25% | How strategically important the change is (Critical = 1.0, Low = 0.25) |
| **Change type reliability** | 15% | Pricing/job changes are almost always real; General/Tech changes can be noisy |
| **Content zone importance** | 15% | Monetization and Product zones are more actionable than Marketing or Ops |
| **Corroboration** | 10% | Multiple changes detected in the same snapshot batch → more likely a real update |

A change can have *high* raw confidence but a *low* signal score if it's classified as low severity and in a low-importance zone (e.g., a cosmetic copy tweak in the footer). Similarly, a medium-confidence pricing change scores high because the zone and change type weights compensate.

---

## How the Signal Score Gates Changes

The composite signal score is applied at two pipeline stages:

| Stage | Threshold | Behaviour |
|-------|-----------|-----------|
| **Persist** | signal ≥ 0.30 | Change is **stored** in your history and can appear in digests. Below this, the change is discarded — it never appears anywhere. |
| **Instant alert** | signal ≥ 0.60 | Change triggers a real-time webhook or email alert (also requires your severity threshold to be met). Changes between 0.30–0.59 are stored and visible in history but won't fire an instant alert. |

---

## What Happens to Low-Signal Changes?

- **signal < 0.30:** discarded — never stored, never visible.
- **signal 0.30–0.59:** stored in your change history (visible under **Competitors → [Name] → Change History** and in digest emails), but excluded from instant alerts. The history page may show a "Weak signal" or "Noise" label.
- **signal 0.60–0.79:** stored, included in digests and instant alerts (if severity threshold met). Dashboard shows a **"Moderate"** signal label.
- **signal ≥ 0.80:** stored and surfaced normally. No signal label — this is the expected default.

If you notice a stored change that looks real but was tagged as weak/noise signal, use the **Mark as Significant** button. Your feedback improves scoring over time.

---

## The AI Confidence Badge (AI XX%)

Separately from the signal score, KompWatch shows an **AI XX%** badge on individual changes when the raw model confidence is **below 95%**. The badge surfaces only when the AI had meaningful uncertainty — i.e., the change is worth a second look before you act on it.

| Badge color | Confidence range | Meaning |
|-------------|-----------------|---------|
| **Green** | 80–94% | Likely real — worth verifying before briefing your team |
| **Amber** | 60–79% | Moderate certainty — double-check the raw diff |
| **Gray** | < 60% | Lower certainty — may be transient or cosmetic |
| *(no badge)* | ≥ 95% | High confidence — no flag needed |

The badge reflects raw model certainty only; the signal score label (Strong / Moderate / Weak / Noise) reflects the full composite score including severity, zone, and change type.

---

## Adjusting Thresholds

KompWatch lets you raise your **alert severity threshold** in **Settings → Notifications** to control which changes fire instant alerts. The underlying signal score persist and alert thresholds (0.30 and 0.60) are fixed and not user-adjustable — they represent the minimum bar for a change to be meaningful at all.

For most teams, the defaults work well. If you're seeing too many low-value changes, start with the **Digest Severity Floor** in Settings — set it to MEDIUM or HIGH to filter out low-severity items from your email digest before changing anything else.

---

## Confidence vs. Severity

These two scores are independent. A change can be:

- **High confidence, Low severity** — competitor fixed a typo on their pricing page. It's real, it just doesn't matter much.
- **Low confidence, High severity** — potential pricing change detected, but only appeared in one snapshot (may be an A/B test). The signal score may be moderate — stored but not instant-alerted.
- **High confidence, High severity** — competitor launched a new free tier. This gets flagged prominently in your digest.

When in doubt, check the **Change History** tab — it shows both the AI confidence badge and the signal score label for every detected change.

---

## Related Articles

- [Alert Relevance Scoring — How KompWatch Filters Out the Noise](./alert-relevance-scoring.md)
- [Change Severity Levels — What LOW / MEDIUM / HIGH Mean](./change-severity-levels.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [Monitoring JavaScript / SPA Sites](./monitoring-javascript-spa-sites.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
