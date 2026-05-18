# Webhook Payload Format

When KompWatch fires a webhook — either in real-time (Team plan) or at digest cadence (Pro) — it sends a JSON `POST` request to your configured URL. This page documents the exact payload schema.

## Event Types

Currently one event type is sent:

| Event | When it fires |
|-------|--------------|
| `change.detected` | A competitor change passes the confidence threshold and is ready to surface |

Additional event types (e.g. `snapshot.failed`, `competitor.added`) are planned.

## Payload Schema

```json
{
  "event": "change.detected",
  "sentAt": "2026-05-15T14:22:10Z",
  "competitor": {
    "id": "cmp_a1b2c3",
    "name": "Acme Corp",
    "monitoredUrl": "https://acmecorp.com/pricing"
  },
  "change": {
    "id": "chg_x9y8z7",
    "changeType": "PRICING",
    "contentZone": "MONETIZATION",
    "severity": "HIGH",
    "confidence": 92,
    "summary": "Acme Corp increased their Pro plan from $49/mo to $69/mo and added a new Enterprise tier at $199/mo.",
    "detectedAt": "2026-05-15T14:21:58Z",
    "viewUrl": "https://kompwatch.com/competitors/cmp_a1b2c3/changes/chg_x9y8z7"
  }
}
```

### Field Reference

**Top level**

| Field | Type | Description |
|-------|------|-------------|
| `event` | string | Always `"change.detected"` |
| `sentAt` | ISO 8601 | When KompWatch sent the webhook |

**`competitor` object**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | KompWatch internal ID for this competitor |
| `name` | string | Display name you set when adding the competitor |
| `monitoredUrl` | string | The URL being monitored |

**`change` object**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | KompWatch internal ID for this change record |
| `changeType` | enum | `CONTENT`, `VISUAL`, `PRICING`, or `FEATURE` |
| `contentZone` | enum | `POSITIONING`, `MONETIZATION`, `PRODUCT`, `MARKETING`, `TALENT`, `LEGAL`, `OPERATIONS`, or `UNKNOWN` |
| `severity` | enum | `LOW`, `MEDIUM`, `HIGH`, or `CRITICAL` |
| `confidence` | integer | 0–100. Confidence the change is genuine, not transient noise. See [AI Confidence Scoring](./ai-confidence-scoring.md). |
| `summary` | string | Plain-English AI summary of what changed. |
| `detectedAt` | ISO 8601 | When the change was first detected |
| `viewUrl` | string | Deep link to the change detail in your KompWatch dashboard |

> **Note:** The raw HTML `diff` is not included in the webhook payload to keep payloads small. View the full diff via `viewUrl` or contact us if you need raw diffs via webhook.

## Request Headers

Every webhook request includes these headers:

| Header | Value |
|--------|-------|
| `Content-Type` | `application/json` |
| `User-Agent` | `KompWatch-Webhook/1.0` |
| `X-KompWatch-Event` | `change.detected` |
| `X-KompWatch-Signature` | HMAC-SHA256 signature (see below) |

## Verifying Authenticity (HMAC Signature)

KompWatch signs every webhook with a shared secret so you can verify the request came from us, not an attacker.

1. In **Settings → Webhook**, copy your **Webhook Signing Secret** (shown after saving a URL).
2. Compute `HMAC-SHA256(rawBody, signingSecret)` and hex-encode it.
3. Compare it to the value in `X-KompWatch-Signature`.

Example in Node.js:

```js
const crypto = require('crypto')

function verifyWebhook(rawBody, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex')
  return crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(signature)
  )
}
```

Always use `rawBody` (unparsed bytes) for the HMAC — parsing to JSON first changes the byte sequence.

## Retry Behavior

If your endpoint returns a non-2xx status code or times out (>10 seconds), KompWatch retries up to **3 times** with exponential backoff:

| Attempt | Delay after failure |
|---------|-------------------|
| 1 | Immediate |
| 2 | 1 minute |
| 3 | 5 minutes |

After 3 failed attempts (1 initial + 2 retries), the delivery is marked permanently failed and recorded in the **delivery history log** in Settings → Webhook. Your endpoint must return a 2xx status within 10 seconds to avoid retries — perform long-running processing asynchronously.

> **Tip:** Check [Webhook Delivery History](./webhook-delivery-history.md) to view the status of recent deliveries, diagnose failures by HTTP status code, and confirm retries.

## Testing Your Endpoint

Use the **Send test** button in **Settings → Webhook** to fire a sample payload instantly. The test payload uses real structure but placeholder IDs and a generic summary.

Alternatively, use a service like [webhook.site](https://webhook.site) to inspect the raw payload before connecting your production endpoint.

## Filtering on Your End

You can filter incoming payloads in your own code by:

- `change.changeType` — e.g. only act on `PRICING` changes
- `change.contentZone` — e.g. route `TALENT` changes to a separate Slack channel
- `change.severity` — e.g. only page on-call for `HIGH` or `CRITICAL`
- `change.confidence` — e.g. suppress anything below 75

KompWatch also lets you set a **minimum severity threshold** for webhooks in Settings, so low-noise changes never reach your endpoint at all.

## Related Articles

- [Webhook Delivery History](./webhook-delivery-history.md)
- [Integrations and Notifications](./integrations-and-notifications.md)
- [AI Confidence Scoring](./ai-confidence-scoring.md)
- [Content Zone Classification](./content-zone-classification.md)
- [Change Severity Levels](./change-severity-levels.md)
- [Per-Competitor Notification Settings](./per-competitor-notification-settings.md)

---

*Questions about the webhook format? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we respond within 24 hours.*
