# How Does KompWatch Filter Noisy HTML Diffs?

Raw HTML from a competitor's website is extremely noisy. Tracking pixels rotate, A/B test class names cycle, cookie-consent banners inject dynamic attributes, counter animations update on every page load. A naive byte-for-byte diff would flag all of it as "changes."

KompWatch applies a multi-stage filtering pipeline before any diff reaches you.

---

## Stage 1 — Pre-diff HTML normalization

Before comparing two snapshots, KompWatch strips elements and attributes that are structurally meaningless for competitive intelligence:

| Stripped | Why |
|---|---|
| `<script>` tags and their content | JS bundles, analytics tags, and tracking pixels change constantly |
| Inline `style=""` attributes | CSS-in-JS frameworks inject these dynamically; they don't reflect content changes |
| Class names that match noise patterns | A/B test frameworks (Optimizely, VWO, GrowthBook) inject variant class names like `ot-sdk-variant-b-winner` that rotate per session |
| `data-*` attributes from analytics tools | Segment, Heap, Amplitude inject `data-heap-id` and similar that update constantly |
| HTML comments | Build hashes, timestamp comments, and generator comments change with every deploy |
| `<noscript>` fallback content | Usually static, but occasionally dynamic; excluded by default |
| `<meta>` tags for Open Graph and Twitter Cards | These update when new blog posts publish — picked up via blog monitoring instead |
| Live counter values inside `<span>` / `<div>` | Detected heuristically: elements whose content is a short number that changes each snapshot are suppressed unless they're in the selector scope and match pricing patterns |

After normalization, two snapshots of the same unchanged page produce an identical normalized representation — no spurious diff.

---

## Stage 2 — CSS selector scoping

If you've set a CSS selector on a competitor (e.g. `#pricing`, `.hero-content`), the diff is computed only within that element. Everything outside the selector is excluded before normalization even runs.

This is the single highest-leverage filter. A `body`-level diff on a modern SPA homepage can produce hundreds of low-signal changes per week. The same page scoped to `#pricing .plan-grid` typically produces one or two meaningful changes per quarter.

See: [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)

---

## Stage 3 — AI confidence scoring

After the structural diff is produced, KompWatch's AI assigns a **confidence score** (0–100%) to each changed segment:

- **0–39%** — Discarded. Not stored. These are changes the AI classifies as almost certainly noise (CDN drift, session token embedded in HTML, A/B test class rotation).
- **40–69%** — Stored but not included in instant alerts by default. Visible in the competitor's change history.
- **70–100%** — Stored and eligible for your digest or instant alert (depending on your settings).

The confidence model is specifically tuned to distinguish signal from noise for SaaS marketing pages — pricing copy, feature descriptions, CTA text, and headline updates score high; layout micro-changes and dynamic element reordering score low.

See: [AI Confidence Scoring — How KompWatch Filters Change Noise](./ai-confidence-scoring.md)

---

## Stage 4 — Severity classification and digest floor

Surviving changes are classified by severity (LOW / MEDIUM / HIGH / CRITICAL). Your digest only surfaces changes at or above your configured severity floor — MEDIUM by default.

A genuine but minor tweak (e.g. a competitor fixes a typo) survives confidence scoring but lands as LOW severity and won't interrupt your day unless you've opted into LOW alerts.

---

## The Practical Result

For a typical SaaS competitor pricing page:

| Stage | Changes surviving |
|---|---|
| Raw HTML diff | ~50–300 per week |
| After HTML normalization | ~10–40 per week |
| After CSS selector scoping | ~2–15 per week |
| After confidence scoring (≥70%) | ~1–5 per week |
| After severity floor (MEDIUM+) | ~1–3 per week |

That last number — 1–3 meaningful alerts per week — is what reaches your inbox. Not 300.

---

## Related Articles

- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [AI Confidence Scoring](./ai-confidence-scoring.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)
- [How Accurate Are KompWatch's AI-Generated Summaries?](./ai-summary-accuracy.md)
- [Monitoring JavaScript / SPA Sites](./monitoring-javascript-spa-sites.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we respond within 24 hours.*
