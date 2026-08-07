# Why Is My AI Confidence Score Low?

If a change on your dashboard or in your digest shows a low AI confidence score — anything below 60% — it means the model is uncertain about whether the detected difference represents a meaningful real-world change or a rendering artifact. This page explains the common causes and what you can do about it.

---

## What the Score Measures

The confidence score (0–100) is the model's estimate of the probability that a detected change reflects an intentional, human-authored update to the competitor's page — rather than a transient rendering variation, CDN edge difference, A/B test rotation, or DOM noise.

- **80–100 (emerald):** High confidence. The change is almost certainly real and intentional.
- **60–79 (amber):** Moderate confidence. The change is plausible but has some noise characteristics.
- **0–59 (gray):** Low confidence. The model is uncertain — the change may be real, or may be an artifact.

A low score does **not** mean the change didn't happen. It means the model wants more context before committing.

---

## Common Reasons for a Low Score

### 1. First change on a new URL

The model calibrates to each URL's baseline rendering behavior over time. For a newly added competitor, the first 3–5 snapshots are establishing what "normal" looks like for that page. Changes detected during this warm-up period tend to score lower because the baseline variance is not yet established.

**What to do:** Wait. Scores on the same URL typically improve after 5–10 snapshots as the baseline settles.

### 2. The page has high natural variance

Some pages change frequently due to dynamic content: rotating testimonials, live pricing (bid-based), JavaScript A/B tests, real-time stock tickers, or ad copy. These create legitimate diff noise that the model can't easily distinguish from intentional edits.

**What to do:** Narrow your CSS selector to a stable section of the page (e.g., the pricing tier table, not the entire `body`). See [Filtering Alerts by Content Zone](filtering-alerts-by-content-zone.md).

### 3. The change is in a structural element

Changes to HTML attributes, class names, data attributes, or script tags — rather than visible text — score lower because they're more likely to be framework-generated rather than authored. A React hydration change and a human-written pricing update both generate diffs, but they look very different to the model.

**What to do:** If the change is in a script block or hidden attribute and you know it's noise, click **Dismiss as Noise**. This trains the model to deprioritize that change pattern for this URL. See [Does AI Confidence Improve With Feedback?](does-ai-confidence-improve-with-feedback.md)

### 4. The competitor uses client-side rendering heavily

Pages that load content asynchronously (React, Next.js, Vue) sometimes produce slightly different rendered output across snapshots due to hydration timing, even when the page itself didn't change. The model sees a diff and is uncertain whether it's real.

**What to do:** Add a brief wait selector to your competitor config — a CSS element that only appears after the main content loads. This forces the snapshot to wait for full render before capturing.

### 5. CDN or geographic edge variation

If KompWatch detects different content from a different CDN edge node than last time (prices in different currencies, locale-specific copy, or region-specific banners), the diff is real but not necessarily a change the competitor made intentionally for your market.

**What to do:** If geo-variation is consistent noise for a competitor, click **Dismiss as Noise** on those changes so they stop generating low-confidence alerts.

---

## When to Act on a Low-Confidence Change

Low confidence ≠ ignore. Some of the most important changes — quiet pricing adjustments, subtle positioning shifts — can score lower because they appear small or structural.

Use this decision rule:

| Score | Action |
|-------|--------|
| 80+ | Trust and act as normal |
| 60–79 | Cross-reference with the actual page; click through the diff |
| 0–59 | Spot-check the page directly; if real, click **Mark as Significant** to train the model |

The fastest way to improve low-confidence alerts over time is to **mark your verdicts**. Five to ten "Significant" or "Noise" clicks on a URL gives the model enough signal to recalibrate within 2–4 weeks. See [Does AI Confidence Improve With Feedback?](does-ai-confidence-improve-with-feedback.md) for the full training timeline.

---

## Related

- [What Is the AI Percentage Badge?](what-is-the-ai-percentage-badge.md)
- [Does AI Confidence Improve With Feedback?](does-ai-confidence-improve-with-feedback.md)
- [AI Confidence Scoring](ai-confidence-scoring.md)
- [Managing Alert Fatigue](managing-alert-fatigue.md)
- [Filtering Alerts by Content Zone](filtering-alerts-by-content-zone.md)
