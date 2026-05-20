# AI Confidence Scoring — How KompWatch Filters Change Noise

Every change KompWatch detects gets two AI-assigned scores: a **severity** rating and a **confidence** score. They answer different questions.

- **Severity** — how strategically important is this change? (Low → Critical)
- **Confidence** — how certain is the AI that this is a genuine, intentional change vs. noise? (0–100%)

Confidence scoring is what lets KompWatch distinguish "competitor updated their pricing page" from "competitor's A/B testing framework swapped in a different hero headline for 2 hours."

---

## Why Confidence Matters

Competitor websites are noisy. Pages routinely serve:

- **A/B test variants** — two users see different copy at the same time
- **Personalization layers** — content that changes based on visitor geography, referrer, or device
- **Dynamic session content** — chat widget states, cookie consent banners, live visitor counts
- **CDN edge drift** — stale cache on some edge nodes showing older content

Without confidence scoring, all of these generate change alerts — most of which aren't real competitive moves. Confidence scoring suppresses them before they reach your digest.

---

## How the Score Is Calculated

After detecting a diff between two snapshots, the AI evaluates:

| Signal | What it checks |
|--------|---------------|
| **Persistence** | Did the change appear in the *next* snapshot too? Transient changes score lower. |
| **Scope coherence** | Is the change internally consistent (a full section rewrite vs. a single swapped word)? |
| **Pattern recognition** | Does the diff match known noise patterns (A/B test class names, analytics script updates, timestamp strings)? |
| **Content type** | Structural HTML changes and visible copy changes score higher than attribute or script tag changes. |
| **Selector specificity** | A change inside a tightly scoped CSS selector scores higher than a change on `body`. |

KompWatch applies confidence scores at two pipeline stages:

| Stage | Threshold | Behaviour |
|-------|-----------|-----------|
| **Noise discard** | < 40% | Change is **not persisted at all** — it never appears in history or digests. These are almost certainly transient artefacts (A/B test variants, session tokens, CDN drift). |
| **Instant alerts** | ≥ 70% | Changes must also meet this bar to trigger a real-time webhook or email alert (in addition to your severity threshold). Changes between 40–69% are stored and visible in history but won't fire an instant alert. |
| **Dashboard badges** | < 90% | Changes stored below 90% confidence show a **"Likely"** or **"Uncertain"** badge with a tooltip showing the exact percentage. Above 90%, no badge — KompWatch is highly confident. |

---

## What Happens to Low-Confidence Changes?

- **Below 40%:** discarded — never stored, never visible.
- **40–69%:** stored in your change history, visible under **Competitors → [Name] → Change History**, but excluded from instant alerts. They do appear in digest emails so you retain full visibility.
- **70–89%:** stored, included in digests and instant alerts (if severity threshold met). Dashboard shows a **"Likely"** badge.
- **90%+:** stored, surfaced normally, no badge.

If you notice a stored change that looks real but was marked Uncertain, use the **Mark as Significant** button. Your feedback improves scoring over time.

---

## Adjusting Confidence Thresholds

KompWatch lets you set confidence thresholds independently for **alerts**, **digests**, and **exports**. All three are in **Settings → Notifications → Confidence Filters**.

### Instant-Alert Threshold

Controls which changes fire a real-time webhook or email alert.

| Threshold | Use case |
|-----------|----------|
| 50% | Maximum coverage — catch everything, more noise |
| 70% (default) | Balanced — works well for most teams |
| 85% | Minimal noise — best for teams overwhelmed by low-signal alerts |

### Digest Confidence Filter

Controls the minimum confidence required for a change to appear in your digest email.

- **Default: 40%** — all stored changes are included (only the hard-discard noise is excluded)
- Raise to **60–70%** if your digests feel cluttered with uncertain, transient-looking changes
- Lower to **40%** (the floor) for maximum visibility

This setting applies to both the periodic digest email and the in-app digest view.

### Export Confidence Filter

When you export change history (CSV or via the REST API), you can choose a minimum confidence level to include in the export. The default matches your digest filter, so exports are consistent with what you see in the UI. Override it per-export from the **Export** dialog or via the `min_confidence` query parameter on the API.

### The Hard Discard Floor

The **40% floor is not adjustable** — changes below that threshold are never stored, regardless of your settings. These are almost certainly transient artefacts (A/B test variants, session tokens, CDN drift).

Raising any threshold reduces noise but may delay surfacing some real changes. Lowering it increases coverage at the cost of more noise.

---

## Confidence vs. Severity

These two scores are independent. A change can be:

- **High confidence, Low severity** — competitor fixed a typo on their pricing page. It's real, it just doesn't matter much.
- **Low confidence, High severity** — potential pricing change detected, but only appeared in one snapshot (may be an A/B test). KompWatch holds it for confirmation before surfacing it prominently.
- **High confidence, High severity** — competitor launched a new free tier. This gets flagged prominently in your digest.

When in doubt, check the **Change History** tab — it shows both scores side by side for every detected change.

---

## Related Articles

- [Change Severity Levels — What LOW / MEDIUM / HIGH Mean](./change-severity-levels.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [Monitoring JavaScript / SPA Sites](./monitoring-javascript-spa-sites.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
