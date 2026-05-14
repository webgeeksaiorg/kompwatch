# Per-Competitor Notification Settings — Can I Mute or Customize Alerts for One Competitor?

KompWatch applies notification settings globally by default (all competitors share the same severity floor and digest cadence). But there are several ways to reduce or focus alert volume for individual competitors without affecting the rest of your tracking.

---

## Pausing Monitoring Entirely

If you want **zero alerts** from a competitor temporarily — for example, they're doing a known redesign and you expect noise — **pause** them.

1. Go to [kompwatch.com/competitors](https://kompwatch.com/competitors)
2. Click **Pause** on the competitor row

Pausing stops all new snapshots and change detection. No alerts, no digest entries. All historical data is preserved. Resume at any time. See [Managing Your Competitors](./managing-competitors.md) for details.

---

## Reducing Noise for a Specific Competitor (Without Pausing)

If you still want to monitor the competitor but receive fewer interruptions, use these techniques:

### 1. Narrow the CSS Selector

The most effective fix. If a competitor generates a lot of low-value changes, their selector is probably too broad. Open **Competitors → [Name] → Edit** and scope it to the specific section that matters:

```
#pricing             ← tracks only the pricing section
.hero-content        ← tracks only the homepage hero copy
.changelog-entries   ← tracks only the changelog
```

Narrowing the selector reduces change volume for that competitor without touching any notification settings. See [CSS Selectors FAQ](./css-selectors.md) for guidance.

### 2. Use the Confidence Score to Filter In-Digest Noise

Changes with confidence below 70% are stored but excluded from instant alerts. If a noisy competitor is generating a lot of uncertain changes (A/B test variants, dynamic content), they'll automatically be downgraded in the alert queue once confidence scoring settles — typically within 2–3 snapshot cycles.

You can review low-confidence stored changes anytime under **Competitors → [Name] → Change History**. See [AI Confidence Scoring](./ai-confidence-scoring.md).

### 3. Set a Higher Severity Floor in the Digest

Go to **Settings → Digest Preferences** and raise the minimum severity. This applies globally, but if one competitor is the primary noise source, it's often the fastest fix.

| Severity floor | What you see |
|---|---|
| LOW (default) | Everything |
| MEDIUM | Meaningful changes only — pricing, features, messaging |
| HIGH | Significant moves only |

See [Managing Alert Fatigue](./managing-alert-fatigue.md) for the full workflow.

### 4. Filter the Digest In-App by Competitor

The [Digests page](https://kompwatch.com/digests) lets you view any saved digest filtered by competitor. If a specific competitor is generating most of the noise, open the digest in-app and filter to just your key competitors for your quick review — rather than trying to tune global settings.

---

## Can I Set Different Snapshot Frequencies Per Competitor?

Not yet via self-serve settings — snapshot frequency is set by your plan tier (daily / 6h / hourly). If you're on **Pro** and want to monitor one competitor daily instead of every 6 hours, email [support@kompwatch.com](mailto:support@kompwatch.com) and we can adjust that competitor's cadence manually.

This is on the roadmap as a self-serve setting. For updates, watch the [product changelog](./product-changelog.md).

---

## Can I Route Alerts for One Competitor to a Different Slack Channel?

Not yet — webhook notifications go to a single configured URL. If you need routing by competitor or zone, use Zapier with a "Webhooks by Zapier" trigger: receive all payloads from KompWatch, then use Zapier's filter step to route by `competitor.name` to different Slack channels.

---

## Related Articles

- [Managing Your Competitors — Edit, Pause, Delete](./managing-competitors.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [AI Confidence Scoring](./ai-confidence-scoring.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)
- [Integrations and Notifications](./integrations-and-notifications.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
