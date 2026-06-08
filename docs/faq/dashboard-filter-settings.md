# Dashboard Filter — Control What Appears on Your Dashboard Timeline

The **Dashboard Filter** in Settings lets you permanently control which changes appear on your dashboard timeline. It works differently from the temporary filter on the [Digests page](./filtering-digests-by-severity.md) — these are saved preferences that persist across sessions and apply immediately every time you load the dashboard.

Find it at **Settings → Dashboard Filter** (`/settings`).

---

## Minimum Severity

The severity filter controls the lowest change severity that appears in your dashboard timeline.

| Setting | What you'll see |
|---------|----------------|
| **Low** (default) | All changes — every minor tweak, wording update, and cosmetic edit |
| **Medium** | Meaningful updates only — hides low-severity noise like blog posts and minor copy edits |
| **High** | Only pricing changes, major feature launches, and above |
| **Critical** | Only pivots, acquisitions, shutdown signals, and drastic moves |

**When to raise it:** If your dashboard feels noisy and you keep dismissing low-severity changes without acting on them, bumping to **Medium** is usually the right call. Most teams that monitor 3–5 competitors do fine with **Low**; teams tracking 10+ often prefer **Medium** or **High** to stay focused.

Changes below your minimum severity threshold are still detected and stored — they're just hidden on the dashboard. They remain visible in your digests (if your digest severity setting allows them) and in exports.

---

## Signal Score Filter

The signal score filter applies the AI's confidence weighting — it hides changes that the AI flagged as potentially noisy or low-confidence, regardless of severity.

| Setting | Threshold | What it filters out |
|---------|-----------|---------------------|
| **All** (default) | None | Nothing — all changes appear |
| **Skip noise** | < 40% | Likely A/B test variants, CDN drift, and other low-confidence diffs |
| **Moderate+** | ≥ 60% | Only moderate-to-strong signals make it through |
| **Strong only** | ≥ 80% | High-confidence, actionable changes only |

Signal score and severity are independent — a change can be HIGH severity with a low signal score (e.g. a drastic-looking price change that was actually an A/B test variant). Setting both filters lets you keep only the changes that are both strategically significant *and* reliably real.

For details on how the signal score is calculated, see [AI Confidence Scoring →](./ai-confidence-scoring.md)

---

## How Dashboard Filter Differs from Other Filters

KompWatch has three independent places to control what you see — they work at different levels:

| Control | Location | What it affects | Persists? |
|---------|----------|-----------------|-----------|
| **Dashboard Filter** | Settings | Dashboard timeline display | Yes — saved to your account |
| **Digests severity filter** | `/digests` page toolbar | Digest history list view | Session only (URL param) |
| **Notification min severity** | Settings → Notifications | Which changes get emailed to you | Yes — saved to your account |
| **Change Type filter** | Dashboard toolbar | Filter by change category (Pricing, Feature, etc.) | Session only |

The Dashboard Filter only affects what you see on your dashboard — it does not affect which emails you receive or which changes are stored.

---

## Common Setups

**Solo founder, tracking 2–3 key competitors:**
- Minimum severity: Low
- Signal score: Skip noise (40%)
- Rationale: You want everything, but skip obvious A/B test noise.

**PMM tracking 10 competitors:**
- Minimum severity: Medium
- Signal score: Moderate+ (60%)
- Rationale: High volume; focus on meaningful, confirmed changes.

**CI lead reviewing with leadership weekly:**
- Minimum severity: High
- Signal score: Strong only (80%)
- Rationale: Only the changes worth putting in a slide deck.

---

## Will Filtered Changes Disappear Permanently?

No. The Dashboard Filter only affects what's *displayed* — it doesn't delete or suppress changes from storage. If you change the filter later, previously hidden changes reappear immediately. You can always retrieve full history via **Export → JSON** from the dashboard.

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
