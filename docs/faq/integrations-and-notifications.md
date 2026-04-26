# Integrations and Custom Notifications

KompWatch delivers alerts via **email digest** today. Native Slack, Zapier, and webhook integrations are actively in development.

## What Integrations Are Available Right Now?

**Email digest** is the primary delivery method and is active on all plans. You receive a digest of competitor changes on the cadence for your plan (weekly on Free, daily on Pro, near-real-time on Team).

For teams that need Slack or webhook delivery today, a manual webhook URL option is available in **Settings → Webhooks** (see below). This requires creating an incoming webhook on the Slack or Teams side — it's a technical step, not one-click. A native Slack app and Zapier app that don't require manual setup are on the roadmap.

## Does KompWatch Have a Slack Integration?

You can connect Slack today using an incoming webhook URL. Go to **Settings → Webhooks**, paste your Slack incoming webhook URL, and enable it. KompWatch auto-detects the URL and formats messages for Slack.

**To create a Slack incoming webhook:**
1. In Slack, go to **Apps → Incoming Webhooks** (or create one via [api.slack.com/apps](https://api.slack.com/apps))
2. Choose a channel and copy the webhook URL (starts with `https://hooks.slack.com/services/…`)
3. Paste it into **Settings → Webhooks** in KompWatch

A native one-click Slack app (no manual webhook setup) is on the roadmap.

## Does KompWatch Support Microsoft Teams?

Yes — Teams is supported via incoming webhooks. KompWatch auto-detects Teams webhook URLs and formats messages accordingly.

**To create a Teams incoming webhook:**
1. In a Teams channel, click **…** → **Connectors → Incoming Webhook**
2. Name it (e.g. "KompWatch") and copy the URL (contains `webhook.office.com`)
3. Paste it into **Settings → Webhooks** in KompWatch

## Does KompWatch Support Generic Webhooks or Zapier?

Generic HTTPS webhooks can be configured in **Settings → Webhooks** today — paste any HTTPS URL and enable it. Payloads are sent as JSON `POST` requests. For Zapier, use a "Webhooks by Zapier" trigger as the destination URL.

A native Zapier app (with pre-built triggers and no manual URL setup) is on the roadmap.

## How Do I Get Notified of Changes?

Changes are delivered via your **digest email** and/or **webhook**, based on your plan:

| Plan | Email digest | Webhook |
|------|-------------|---------|
| Free | Weekly (Mondays) | ✓ (if configured) |
| Pro | Daily | ✓ (if configured) |
| Team | Real-time (within 1 hour) | ✓ (if configured) |

Webhooks fire on the same cadence as your email digest. Team plan members receive near-real-time webhook pings.

## How Do I Enable or Disable Webhook Notifications?

1. Go to **Settings → Webhooks**
2. Paste your webhook URL and click **Save**
3. Use the toggle to enable or disable without deleting the URL

The toggle is disabled until a valid HTTPS URL is saved.

## Can I Route Digests to a Shared Team Inbox?

Yes — the recommended approach is to sign up with a shared alias (`competitive@yourcompany.com`). Everyone on the alias receives the digest. You can also use the Slack or Teams integration to post changes to a shared channel.

## Can I Change the Email Address My Digests Go To?

Not yet from the Settings page. Contact [support@kompwatch.com](mailto:support@kompwatch.com) and we can update your account email manually.

## Can I Control How Often I'm Notified?

Digest frequency is tied to your plan. You can also filter by **minimum severity** in **Settings → Notifications** — so you only get notified about changes at or above a threshold (e.g. High: pricing changes and major launches only).

You can also turn email digests off entirely via the **Email digests** toggle in **Settings → Notifications**.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
