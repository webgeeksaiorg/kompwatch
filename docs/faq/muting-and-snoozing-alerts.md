# Muting, Snoozing, and Suppressing Alerts

Getting too many notifications from a competitor that's going through a site redesign? Want to temporarily quiet alerts during a known maintenance window? Here's how to mute, snooze, or suppress competitor change alerts in KompWatch.

## Muting a Specific Competitor

You can pause all alerts for a single competitor without deleting it:

1. Go to **Competitors** in the left sidebar
2. Click the competitor name to open its detail view
3. Click **⋯ More options → Mute notifications**
4. Choose a duration: **24 hours**, **7 days**, **30 days**, or **Until I unmute**
5. Click **Confirm**

While muted, KompWatch continues to take snapshots and detect changes — they're stored in your dashboard and change history. You simply won't receive email digests or Slack/webhook notifications for that competitor during the mute period.

**To unmute:** Return to the competitor detail view and click **Unmute notifications**.

## Dismissing Individual Changes

If a specific change is noise (e.g., a footer copyright year update), you can dismiss it so it doesn't appear in future digests:

1. Open the change in the **Change History** view
2. Click **Dismiss** (or **Mark as reviewed**)
3. The change is archived and won't appear in your next digest

Dismissed changes are still accessible in **Change History → Archived**.

See also: [Dismissing and Marking Changes](./dismissing-and-marking-changes.md)

## Filtering by Severity to Reduce Noise

If you're getting too many LOW-severity alerts, you can raise your notification threshold:

1. Go to **Settings → Notifications**
2. Under **Minimum alert severity**, select **Medium** or **High**
3. Save changes

LOW-severity changes will still be detected and stored — they just won't trigger email/Slack/webhook notifications.

See: [Change Severity Levels](./change-severity-levels.md) and [Filtering Digests by Severity](./filtering-digests-by-severity.md)

## Per-Competitor Notification Settings

Each competitor can have its own notification profile (Pro and Team plans):

1. Open the competitor detail view
2. Click **Notification settings** (gear icon)
3. Configure:
   - Minimum severity for notifications
   - Which channels (email, Slack, webhook) receive alerts for this competitor
   - Digest frequency override (e.g., weekly instead of daily for lower-priority competitors)

See: [Per-Competitor Notification Settings](./per-competitor-notification-settings.md)

## Temporarily Pausing All Monitoring

If you're going on vacation or your team needs a quiet period:

1. Go to **Settings → Account**
2. Click **Pause all monitoring**
3. Choose a duration (up to 30 days)

This pauses snapshot collection and all notifications globally. Your subscription continues normally — no billing impact.

**Note:** Pausing monitoring is different from pausing your subscription. See [Pausing Your Subscription](./pausing-your-subscription.md) if you want to pause billing.

## Ignoring Specific Content Zones

If a competitor's cookie banner, nav menu, or footer keeps triggering changes, use CSS selectors to exclude those zones from analysis:

1. Open the competitor detail view
2. Click **Edit → Excluded zones**
3. Add CSS selectors for elements to ignore (e.g., `.cookie-banner`, `footer`, `#nav`)

KompWatch will snapshot the full page but exclude those elements from change detection.

See: [CSS Selectors](./css-selectors.md) and [Content Zone Classification](./content-zone-classification.md)

---
*Related: [Managing Alert Fatigue](./managing-alert-fatigue.md) · [Change Severity Levels](./change-severity-levels.md) · [Per-Competitor Notification Settings](./per-competitor-notification-settings.md) · [Filtering Digests by Severity](./filtering-digests-by-severity.md)*
