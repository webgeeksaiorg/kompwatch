# Alert Relevance Scoring — How KompWatch Filters Out the Noise

**Short answer:** KompWatch uses an AI relevance scorer to automatically rank every detected change by how strategically useful it is *for you*, suppressing low-value noise before it reaches your digest or instant alerts.

---

## What Is Relevance Scoring?

When KompWatch detects a difference between two snapshots of a competitor page, it runs two separate evaluations:

1. **Confidence scoring** — "Is this a real change or an A/B test variant / CDN drift / session artifact?" (See [AI Confidence Scoring →](./ai-confidence-scoring.md))
2. **Relevance scoring** — "If this change *is* real, how much does it matter competitively?"

Relevance scoring is what separates "competitor updated their footer copyright year" from "competitor dropped their entry-level plan price by 30%." Both are real changes. Only one belongs in your inbox.

---

## How the Relevance Score Is Calculated

After a change clears the confidence threshold, the AI evaluates it against several signals:

| Signal | What it considers |
|--------|------------------|
| **Change category** | Pricing and feature changes score higher than visual or layout changes |
| **Magnitude** | Larger diffs (e.g., price drop vs. punctuation fix) score higher |
| **Strategic zone** | Changes in tracked key areas (pricing table, hero messaging, feature grid) score higher than nav or footer changes |
| **Recency pattern** | A competitor's first pricing change in 90 days scores higher than their third this week |
| **Competitor tier** | Changes from competitors you've marked as Primary threats are weighted higher |

The final relevance score is 0–100. KompWatch uses it to:

- **Route instant alerts** — only MEDIUM-relevance-and-above changes trigger real-time notifications
- **Order digest sections** — highest-relevance changes appear first in your digest
- **Apply severity classification** — relevance feeds into the LOW / MEDIUM / HIGH / CRITICAL severity label you see on each change

---

## What Happens to Low-Relevance Changes?

Low-relevance changes (score below 40) are stored in your change history but are:

- **Excluded from instant alerts** by default
- **Hidden from digest summaries** unless you set your severity floor to LOW
- **Visible in the full change log** under Competitors → [Name] → Change History

Nothing is permanently discarded. You can always pull up low-relevance changes if you want to audit them.

---

## Can I Adjust Relevance Thresholds?

Yes. Go to **Settings → Notifications**:

- **Alert Relevance Threshold** — raise this to reduce noise (default: Medium); lower it if you want to see more
- **Digest Severity Floor** — set the minimum change severity included in your email digest

For most teams, the defaults work well. If you're getting too many low-value alerts, start by raising the Alert Relevance Threshold to **High** before changing anything else.

---

## How Is This Different From Confidence Scoring?

They answer different questions:

| | Confidence Score | Relevance Score |
|---|---|---|
| **Question** | Is this a real change? | Does this change matter? |
| **Filters out** | A/B test variants, CDN drift, session artifacts | Footer tweaks, copyright updates, minor visual noise |
| **Scale** | 0–100% certainty | 0–100 strategic relevance |
| **Applied** | Before storing the change | After storing, before alerting/digesting |

A change needs to clear *both* thresholds to reach your digest.

---

## Why Do I Still See Some Low-Value Changes?

A few reasons this can happen:

1. **Your selector is too broad** — a `body`-level selector captures everything, including navigation and footer updates. Narrow it to the content zone you care about. See [CSS Selectors — How to Scope What KompWatch Tracks →](./css-selectors.md).
2. **Your severity floor is set to LOW** — check Settings → Digest Preferences.
3. **The AI scored it higher than expected** — the relevance model can mis-score unusual page structures. You can flag a change as "not useful" (thumbs-down icon in the change detail view) to improve scoring over time.

---

## Related Articles

- [AI Confidence Scoring — How KompWatch Filters Change Noise](./ai-confidence-scoring.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [Change Severity Levels — What LOW / MEDIUM / HIGH Mean](./change-severity-levels.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)
- [Understanding Your Digest](./understanding-your-digest.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we'll respond within 24 hours.*
