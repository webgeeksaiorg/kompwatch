# Integrations and Notifications

KompWatch delivers alerts via **email digest** and **Slack / webhook** depending on your plan. Real-time Slack alerts are a Team-tier feature.

## What Integrations Are Available?

| Feature | Free | Pro | Team |
|---|---|---|---|
| Email digest | Weekly | Daily | Real-time |
| Slack / Teams / webhook | — | Digest cadence | Real-time |
| Real-time instant alerts | — | — | ✓ |

## How Do I Connect Slack?

1. Go to **Settings → Slack & Webhook Integration** (requires Pro or Team plan)
2. Create a Slack incoming webhook: in Slack, go to **Apps → Incoming Webhooks**, choose a channel, copy the URL (starts with `https://hooks.slack.com/services/…`)
3. Paste the URL into KompWatch and click **Save**
4. KompWatch auto-detects the URL as Slack and shows a "Slack detected" badge
5. Click **Send test** to confirm a test message arrives in your channel

## Why Don't I See the Webhook Section?

Webhooks require a **Pro or Team plan**. Free accounts receive email digests only. Go to [/pricing](/pricing) to upgrade.

## How Do I Connect Microsoft Teams?

Follow the same steps as Slack:
1. In a Teams channel, click **…** → **Connectors → Incoming Webhook**, name it, copy the URL (contains `webhook.office.com`)
2. Paste it into **Settings → Slack & Webhook Integration**
3. KompWatch auto-detects it as Teams and formats messages accordingly

## Can I Use a Generic Webhook or Zapier?

Yes — paste any `https://` URL. Payloads are sent as JSON `POST` requests. For Zapier, use a "Webhooks by Zapier" trigger URL.

## What Are Real-Time Alerts? (Team)

**Team plan only.** Real-time alerts push individual changes to your webhook the moment they're detected — no waiting for a daily digest.

To enable:
1. Make sure a webhook URL is saved and enabled
2. Toggle on **Real-time alerts** in Settings
3. Set your **severity threshold**: only changes at or above this level trigger an instant ping
   - *Critical only* — major pivots, acquisitions
   - *High and above* — pricing changes, major feature launches *(recommended)*
   - *Medium and above* — new features, job signal changes
   - *All changes* — every detected diff (noisy)

Pro accounts receive digest-cadence webhook delivery (daily). Upgrade to Team for real-time.

## How Do I Test My Webhook?

Click **Send test** next to the URL field. A test payload is fired immediately. If your channel or endpoint doesn't receive it within 30 seconds, check:
- The URL is saved (not just typed)
- The webhook is enabled (toggle is on)
- The Slack app has permissions to post to the chosen channel

## How Do I Enable or Disable Webhook Notifications?

1. Go to **Settings → Slack & Webhook Integration**
2. Use the **Webhook notifications** toggle to enable or disable without deleting the URL

The toggle is inactive until a valid URL is saved.

## How Do I Get Notified of Changes Via Email?

Email digest frequency is set by your plan (Weekly / Daily / Real-time). You can also:
- Set a **minimum severity** in **Settings → Notifications** to reduce noise (e.g. High+ means only pricing changes and major launches)
- Disable email digests entirely with the **Email digests** toggle

## Can I Route Digests to a Shared Team Inbox?

Yes — sign up with a shared alias (`competitive@yourcompany.com`). Everyone on the alias gets the digest. Alternatively, use Slack to post to a shared team channel.

## Can I Change the Email Address My Digests Go To?

Not yet via Settings. Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll update your account email manually.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
