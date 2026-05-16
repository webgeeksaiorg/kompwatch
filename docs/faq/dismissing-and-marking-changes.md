# Dismissing and Marking Changes — How to Give Feedback on Individual Detections

KompWatch stores every change that clears the 40% confidence threshold. Some of those changes will be noise you want to dismiss; others may be important signals the AI initially underrated. Both actions take one click — and both improve scoring for similar changes in the future.

---

## The Two Feedback Actions

| Action | When to use | Where to find it |
|--------|-------------|-----------------|
| **Dismiss** | The change is real but irrelevant (minor copy tweak, formatting fix, resolved A/B test) | Change card → **Dismiss** button |
| **Mark as Significant** | The AI rated this low-confidence or low-severity, but you can see it's a real competitive move | Change card → **Mark as Significant** button |

Both buttons appear on every change card in:
- The **Dashboard timeline**
- **Competitors → [Name] → Change History**
- The **in-app digest viewer** at [kompwatch.com/digests](https://kompwatch.com/digests)

---

## Dismissing a Change

Dismissing tells KompWatch: "This change is stored correctly, but it's not something I need to act on."

**What dismissing does:**
- Marks the change as reviewed — it no longer appears in your unreviewed count
- Excludes it from future digest email summaries (it will still appear if you filter Change History to show dismissed items)
- Sends a signal to the confidence model that changes matching this pattern may be lower-priority for your team

**What dismissing does not do:**
- Permanently delete the change — it stays in your history and is visible with the **Show dismissed** toggle
- Affect other teammates' views (dismissals are per-user on Team plan)
- Stop monitoring the competitor or that page

### To dismiss a change:
1. Open the change card (dashboard, change history, or digest viewer)
2. Click the **Dismiss** button (↓ icon on desktop, accessible via the change action menu on mobile)
3. Optionally add a note ("resolved A/B test", "not our market", etc.)

---

## Marking a Change as Significant

Use this when a change is stored but the AI underrated it — typically because it was a borderline confidence score or assigned the wrong severity.

**What "Mark as Significant" does:**
- Pins the change to the top of your dashboard and digest until you've reviewed it
- Upgrades the change's effective severity for display and filtering purposes
- Sends a positive signal to the confidence model: future changes matching this pattern will score higher

### To mark a change as significant:
1. Open the change card
2. Click **Mark as Significant** (⭐ icon)
3. The change gets a **Highlighted** badge and moves to the top of the timeline

---

## Bulk Dismissal

If a competitor runs a known redesign or major migration that generates a flood of low-value changes, you can dismiss all their changes at once:

1. Go to **Competitors → [Name] → Change History**
2. Use the **Select all** checkbox at the top of the list
3. Click **Bulk Actions → Dismiss selected**

This is faster than pausing the competitor — you keep monitoring active but clear the backlog of noise in one step. For ongoing noise rather than a one-time event, [pausing the competitor](./managing-competitors.md) is usually the better approach.

---

## How Your Feedback Improves the AI

Every dismiss and mark-as-significant is a labelled training signal. KompWatch aggregates feedback across your account to:

1. **Adjust confidence thresholds per pattern** — if you consistently dismiss changes from `script` tags and analytics attributes, those patterns score lower for your account.
2. **Tune zone classification** — feedback on zone labels (via the **Edit Zone** button) corrects content zone classification over time. See [Content Zone Classification](./content-zone-classification.md).
3. **Improve severity calibration** — marking borderline changes as significant helps the model understand which types of changes your team treats as high-priority.

Feedback is account-level, not global — your dismissals don't affect other KompWatch users. The model learns your team's definition of signal vs. noise.

---

## What Happens to Dismissed Changes?

Dismissed changes are **never deleted** — they stay in your change history indefinitely. By default, they're hidden from the main timeline and digest. To see them:

- In Change History: toggle **Show dismissed** at the top of the list
- In Digest Preferences: enable **Include dismissed in digest** (off by default)

If you dismissed something accidentally, click **Restore** on the change card to undo it.

---

## Related Articles

- [AI Confidence Scoring — How KompWatch Filters Change Noise](./ai-confidence-scoring.md)
- [Change Severity Levels — What LOW / MEDIUM / HIGH Mean](./change-severity-levels.md)
- [Content Zone Classification — Understanding Strategic Business Area Labels](./content-zone-classification.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [Managing Your Competitors — Edit, Pause, Delete](./managing-competitors.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
