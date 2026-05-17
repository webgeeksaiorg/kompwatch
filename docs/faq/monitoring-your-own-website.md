# Can I Use KompWatch to Monitor My Own Website?

Yes — you can add your own domain as a monitored "competitor." While KompWatch is built for tracking rival websites, the underlying monitoring is URL-agnostic. Several teams use it to watch their own site for specific reasons.

---

## Why Teams Monitor Their Own Site

| Use case | What they watch |
|---------|----------------|
| **Detect unauthorized changes** | Homepage, pricing page — alerts if someone modifies content without a deploy ticket |
| **Verify a deploy landed correctly** | Trigger a manual snapshot after a release and confirm the new copy appears |
| **Catch accidental regressions** | A/B test variant accidentally went to 100%, CTA button text reverted |
| **Track your own pricing page** | Make sure your pricing page reflects current plans after edits |
| **Monitor a landing page in an A/B test** | Confirm variants are serving and changes are persisting correctly |

---

## How to Set It Up

1. Go to **Competitors → Add Competitor**
2. Name it clearly, e.g. "Our site — Pricing" so it's distinguishable from actual competitors
3. Enter the URL of the specific page you want to watch
4. Set a tight CSS selector (e.g. `#pricing-table`, `.hero-headline`) — you want to track specific content, not the whole page

For verification use cases, trigger a **Manual Snapshot** right after a deploy: go to **Competitors → [Your site] → Trigger Snapshot**. The new snapshot will diff immediately against the previous one and surface exactly what changed. See [Manual Snapshot Trigger →](./manual-snapshot-trigger.md).

---

## What to Expect

- **Snapshot frequency** follows your plan tier (daily / 6h / hourly) — the same as all other competitors
- **Change alerts** fire on your configured channels (email digest, Slack/webhook) just like any competitor change
- **Confidence scoring** applies — if your page has a lot of dynamic elements (personalization, live counters), narrow the CSS selector to avoid high-confidence false alerts
- **Change history** is preserved like any other competitor's history

---

## Caveats

- **Not a replacement for uptime monitoring.** KompWatch detects *content changes*, not downtime. If your site goes offline, you'll see an "Unreachable" warning badge but no content change. Use a dedicated uptime monitor (Better Uptime, UptimeRobot, etc.) alongside KompWatch for availability tracking.
- **Counts toward your competitor limit.** Each URL you add counts as one competitor slot. If you're on the Free plan (2 competitors), adding your own site uses one of those slots.
- **Alert noise on highly dynamic pages.** If you monitor a page with frequently changing content (live pricing, session-based copy), use a specific CSS selector to scope what's tracked.

---

## A Note on Intent

KompWatch is optimized for monitoring *external* competitor sites, so some UX cues (labels, digest framing) assume the monitored site is a competitor. Your own site works technically, but the AI summaries will describe changes in third-party language ("competitor updated their pricing"). This is cosmetic and doesn't affect the accuracy of the diff or alerts.

---

## Related Articles

- [Manual Snapshot Trigger — Force a Snapshot Now](./manual-snapshot-trigger.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)
- [Managing Your Competitors — Edit, Pause, Delete](./managing-competitors.md)
- [Why Don't I See Any Changes Yet?](./why-no-changes-yet.md)
- [Snapshot Errors and Warning States](./snapshot-errors-and-warning-states.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
