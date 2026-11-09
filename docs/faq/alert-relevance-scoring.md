# Alert Signal Scoring — How KompWatch Filters Out the Noise

**Short answer:** KompWatch computes a composite **signal score** (0.0–1.0) for every detected change, blending AI confidence, severity, change type, content zone, and batch corroboration. Changes below the persist threshold (0.30) are discarded. Changes below the instant-alert threshold (0.60) are stored but don't trigger real-time notifications.

---

## What Is Signal Scoring?

When KompWatch detects a difference between two snapshots of a competitor page, it runs two evaluations:

1. **AI confidence** — "Is this a real change or an A/B test variant / CDN drift / session artifact?" (a 0–100% score from the AI model)
2. **Signal score** — a composite score (0.0–1.0) that combines confidence with strategic context: how important is this change for a typical CI team?

Signal scoring is what separates "competitor updated their footer copyright year" from "competitor dropped their entry-level plan price by 30%." Both may have similar raw AI confidence — but the signal score weighs the zone and change type, so the pricing move surfaces prominently and the footer tweak doesn't interrupt your day.

---

## How the Signal Score Is Calculated

Every change gets a composite signal score computed from five factors:

| Factor | Weight | What it reflects |
|--------|--------|-----------------|
| **AI confidence** | 35% | Model certainty the change is real (not A/B test / CDN drift). Pricing/feature changes with clear evidence score 90–100%; ambiguous wording shifts score 50–70%. |
| **Severity** | 25% | CRITICAL = 1.0, HIGH = 0.80, MEDIUM = 0.50, LOW = 0.25 |
| **Change type reliability** | 15% | PRICING (0.95) and JOB (0.90) are almost always factual; GENERAL (0.50) and TECH (0.70) can be noisy |
| **Content zone importance** | 15% | MONETIZATION (1.0) and PRODUCT (0.85) are most actionable; MARKETING (0.50) and OPERATIONS (0.55) are lower |
| **Corroboration** | 10% | Multiple changes detected in the same snapshot batch → more likely a coordinated update (single change = 0.30, 2 = 0.55, 3+ = 0.80) |

A footer copyright update (LOW severity, GENERAL type, OPERATIONS zone) scores low even if the AI is moderately confident, because all three context factors downweight it. A pricing page change (HIGH severity, PRICING type, MONETIZATION zone) scores high even at moderate AI confidence.

---

## Signal Score Thresholds

The signal score gates changes at two pipeline stages:

| Stage | Threshold | Behaviour |
|-------|-----------|-----------|
| **Persist** | signal ≥ 0.30 | Change is stored in your history. Below this, it is **discarded permanently** — never appears in history, digests, or alerts. |
| **Instant alert** | signal ≥ 0.60 | Change triggers a real-time webhook or email notification (also requires your severity threshold to be met). Changes between 0.30–0.59 are stored and visible in history and digests, but won't fire an instant alert. |

---

## What Happens to Low-Signal Changes?

- **signal < 0.30** — discarded. Never stored, never visible. These are almost always transient artefacts (A/B test variants, session tokens, CDN edge drift).
- **signal 0.30–0.59** — stored in your change history, visible in the history timeline and digest emails. The history page shows a **"Weak signal"** or **"Noise"** label. Not instant-alerted.
- **signal 0.60–0.79** — stored, included in digests and instant alerts (if severity threshold met). The history page shows a **"Moderate"** label.
- **signal ≥ 0.80** — stored and surfaced normally. No signal label — strong signal is the expected default.

Nothing between 0.30 and 1.0 is permanently discarded. You can always pull up low-signal changes in the **Change History** tab if you want to audit them.

---

## Signal Labels in the UI

The history page and change detail view show a signal label when the score is below 0.80:

| Label | Signal range | What it means |
|-------|-------------|--------------|
| *(none)* | ≥ 0.80 | Strong signal — the default; no flag needed |
| **Moderate** | 0.60–0.79 | Real and stored; could be worth reviewing |
| **Weak** | 0.40–0.59 | Lower composite score — likely stored but may not warrant action |
| **Noise** | 0.30–0.39 | Barely above the persist floor — treat as audit-only |

---

## Can I Adjust Signal Thresholds?

The persist (0.30) and instant-alert (0.60) thresholds are fixed — they represent the minimum bar for a change to be stored or acted on at all. What you *can* adjust is the **severity floor** in **Settings → Notifications**, which controls the minimum severity required for a change to appear in your digest or fire an alert. This is usually the right lever.

For most teams, the defaults work well. If you're getting too many low-value alerts, start by raising your **Digest Severity Floor** to MEDIUM before changing anything else.

---

## How Is This Different From the AI Confidence Badge?

They measure different things:

| | Signal Score | AI Confidence Badge (AI XX%) |
|---|---|---|
| **Question** | Is this change important and real overall? | How certain is the AI specifically? |
| **Inputs** | Confidence + severity + zone + change type + batch size | Raw model output only |
| **Scale** | 0.0–1.0 composite | 0–100% certainty |
| **Used for** | Persist / alert / label decisions | Surface uncertainty on individual changes |

The signal score controls *what happens* to a change. The AI confidence badge surfaces on individual change cards to flag when the model itself was uncertain — so you know to double-check that specific diff before acting on it.

---

## Why Do I Still See Some Low-Value Changes?

A few reasons this can happen:

1. **Your selector is too broad** — a `body`-level selector captures everything, including navigation and footer updates. Narrow it to the content zone you care about. See [CSS Selectors — How to Scope What KompWatch Tracks →](./css-selectors.md).
2. **Your severity floor is set to LOW** — check Settings → Digest Preferences.
3. **The AI scored it higher than expected** — the signal model can mis-weight unusual page structures. Use the **thumbs-down** feedback on a change to improve scoring over time.

---

## Related Articles

- [AI Confidence Scoring — How KompWatch Filters Change Noise](./ai-confidence-scoring.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [Change Severity Levels — What LOW / MEDIUM / HIGH Mean](./change-severity-levels.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)
- [Understanding Your Digest](./understanding-your-digest.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we'll respond within 24 hours.*
