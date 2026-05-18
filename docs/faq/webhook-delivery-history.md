# Webhook Delivery History — Checking If Your Notifications Arrived

KompWatch logs every outgoing webhook attempt so you can confirm delivery, diagnose failures, and understand retry behavior without digging through server logs.

## Where Is the Delivery Log?

Go to **Settings → Slack & Webhook Integration**. Scroll to the **Recent deliveries** table below your webhook URL. It shows the last 50 delivery attempts across all event types.

## What Do the Columns Mean?

| Column | Description |
|--------|-------------|
| **Time** | When the delivery was attempted |
| **Type** | `Digest`, `Alert` (instant pricing alert), or `Test` |
| **Platform** | `Slack`, `Teams`, or `Webhook` (generic) |
| **Status** | Green check (success) or red X (failed) |
| **HTTP** | The HTTP status code returned by your endpoint |
| **Retries** | How many retry attempts were made after the initial failure |

## What Counts as a Successful Delivery?

Your endpoint must return any **2xx HTTP status** within **10 seconds**. Anything else (3xx, 4xx, 5xx, or a timeout) is recorded as a failure.

## How Does Retry Work?

KompWatch retries failed deliveries automatically for server-side errors (5xx) and network timeouts:

| Attempt | Delay after failure |
|---------|-------------------|
| Initial | — |
| Retry 1 | 1 minute |
| Retry 2 | 5 minutes |

After 2 retries (3 attempts total), the delivery is marked permanently failed. Each retry appears as a separate row in the log with an incremented **Retries** count.

**No retry on 4xx errors.** A `400`, `401`, `403`, or `404` means the URL or authentication is misconfigured — retrying the same bad URL won't help. Fix the URL in Settings and click **Send test** to verify.

## What Should I Do If I See Failed Deliveries?

**HTTP 4xx — fix your endpoint:**
- `400 Bad Request` — your endpoint rejected the payload; check that it accepts `Content-Type: application/json`
- `401 / 403 Forbidden` — authentication mismatch; check any auth headers your endpoint requires
- `404 Not Found` — the URL is wrong or the route was removed

**HTTP 5xx or timeout — check your server:**
- Your endpoint was unavailable or slow (>10 seconds). KompWatch already retried up to twice.
- If failures are occasional, your server likely had a brief outage and resumed normally.
- If failures are persistent, check your server logs and ensure the endpoint can respond within 10 seconds (handle long work asynchronously).

**Slack / Teams-specific errors:**
- `410 Gone` — the incoming webhook has been deleted or disabled in Slack/Teams; create a new one and update the URL in Settings.
- `403 Forbidden` — the Slack app was removed from the channel or workspace.

## The Log Is Empty — Is That Normal?

Yes, if you just set up the webhook. Send a **Test** ping (click **Send test** in Settings) to generate your first log entry and confirm end-to-end delivery before you rely on it for real alerts.

## How Long Is Delivery History Retained?

The 50 most recent delivery attempts are shown in the UI. All delivery records are retained for **90 days** for audit purposes; contact [support@kompwatch.com](mailto:support@kompwatch.com) if you need a full export.

## Related Articles

- [Webhook Payload Format](./webhook-payload-format.md)
- [Integrations and Notifications](./integrations-and-notifications.md)
- [Instant Pricing Alerts](./instant-pricing-alerts.md)

---

*Seeing something unexpected in your delivery log? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll investigate within 24 hours.*
