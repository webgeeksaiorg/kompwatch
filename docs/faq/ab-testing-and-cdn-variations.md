# A/B Tests, CDN Variations, and False-Positive Change Detections

Sometimes KompWatch detects a change on a competitor's page that turns out not to be a real product update — it's the same URL serving different content on different visits. This is usually caused by A/B testing, CDN caching, geo-targeting, or personalization. Here's what's happening and how to handle it.

---

## Why Does a Competitor's Page Look Different Each Visit?

Modern websites routinely serve different content to different visitors from the same URL:

| Cause | Example |
|---|---|
| **A/B testing** | Competitor is split-testing a new headline or pricing layout — some visitors see version A, others version B |
| **CDN edge caching** | Different CDN nodes serve slightly different cached snapshots depending on load balancing |
| **Geo-targeting** | Pricing shown in USD vs. EUR, or region-specific feature lists |
| **Personalization** | Logged-in vs. anonymous visitors see different CTAs or plan recommendations |
| **Dynamic pricing** | Competitor adjusts prices in real time based on demand, geography, or user segment |

When KompWatch's headless browser visits the page, it may happen to land on a different variant than the previous snapshot — triggering a detected "change" that's really just normal variant rotation.

---

## How KompWatch Minimizes False Positives

- **AI severity scoring** — The AI classifier is trained to flag structural changes (pricing tables, feature bullets, navigation) over surface-level text swaps. Minor copy variants or button-text differences typically score **Low** severity.
- **Diffing against the previous snapshot** — KompWatch compares the new snapshot to the last stored one, so it only alerts on deltas, not repeated noise.
- **CSS selector scoping** — If you've set a precise CSS selector (e.g. `.pricing-table`), KompWatch ignores changes outside that element, reducing A/B-test noise from other page sections.

---

## How to Tell If a Change Is Real or a Variant

1. **Check the diff** — Open the change card and review the highlighted diff. A/B test variants typically show small copy or layout tweaks; real product changes tend to affect pricing numbers, feature names, or entire page sections.
2. **Visit the page yourself** — Open an incognito window and check the live page. If the "changed" content isn't visible, the competitor is likely A/B testing and you landed on the other variant.
3. **Wait for the next snapshot** — If the "change" disappears in the next cycle, it was a variant rotation, not a product update. Persistent changes across multiple consecutive snapshots are far more likely to be real.
4. **Check the severity score** — Low-severity detections on high-volume pages (homepages, pricing pages) are the most common false-positive source. High and Critical severity changes on pricing or feature pages are more reliably real.

---

## What to Do With a False-Positive Detection

**Dismiss it** — Click **Dismiss** on the change card. This removes it from your digest without affecting future monitoring.

**Raise your severity threshold** — If a competitor's page generates frequent low-severity variant noise, go to **Settings → Notifications** and set a higher minimum severity (e.g. Medium+). Low-severity changes will still be tracked but won't appear in your digest.

**Narrow your CSS selector** — If you're monitoring a competitor's whole page (`body`) and they run heavy A/B testing, consider targeting a more specific element like `[data-section="pricing"]` or `.features-grid`. See [CSS Selectors →](./css-selectors.md) for guidance.

---

## A/B Tests Worth Watching

Not all A/B-test detections are noise. A competitor repeatedly testing their pricing page headline, CTA copy, or plan layout is itself a competitive signal — it suggests they're actively optimizing conversion. If you see persistent low-severity changes on a competitor's pricing or signup page, it may indicate they're running a sustained experiment.

In this case: keep the changes in your history, note the pattern in your own competitive review, and watch for when the test "graduates" to a permanent change (which usually shows up as a High-severity update).

---

## Frequently Asked Questions

**Will KompWatch eventually learn to ignore variant noise automatically?**
Yes — and it already does. KompWatch's [AI confidence scoring system](./ai-confidence-scoring.md) includes a **persistence check**: transient changes that appear in one snapshot but not the next score lower confidence and are filtered out before reaching your digest. Changes below 40% confidence are discarded entirely and never stored. You can also raise the instant-alert confidence threshold in **Settings → Notifications → Alert Confidence Threshold** (default: 70%) to further reduce noise from borderline detections.

**Can I flag a competitor as "A/B-testing heavy" so KompWatch treats it differently?**
Not yet as a formal per-competitor setting. As a workaround: use a narrow CSS selector, raise your severity threshold to Medium+, and raise the **Alert Confidence Threshold** in Settings → Notifications to 85% for maximum noise suppression. Per-competitor noise profiles are on the roadmap.

**The same "change" keeps reappearing every few cycles. Is that an A/B test?**
Possibly — or the competitor is on a deployment pipeline that repeatedly rolls out the same update. Check the diff: if the content is identical across multiple detections, it's likely a persistent A/B variant being re-served. Dismiss once and raise your severity threshold.

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
