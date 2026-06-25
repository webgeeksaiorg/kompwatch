# Webhook Retry Behavior and Failure Handling

When KompWatch detects a competitor change and your webhook endpoint isn't reachable, here's exactly what happens — retry schedule, failure states, and how to recover.

## How Webhooks Are Triggered

KompWatch sends an HTTP POST request to your configured webhook URL whenever a change is detected that meets your severity threshold. This happens in real time after the AI analysis step completes (for Team plan) or after the digest batch is processed (for Pro plan).

See [Webhook Payload Format](./webhook-payload-format.md) for the full JSON structure.

## Retry Schedule

If your endpoint returns a non-2xx status code (or times out), KompWatch retries delivery automatically:

| Attempt | Delay after previous attempt |
|---------|------------------------------|
| 1st retry | 1 minute |
| 2nd retry | 5 minutes |
| 3rd retry | 30 minutes |
| 4th retry | 2 hours |
| 5th retry | 6 hours |

After 5 failed retries (6 total attempts), the delivery is marked **Failed** and no further retries are attempted for that event.

**Timeout:** Each attempt times out after **10 seconds**. If your endpoint takes longer than 10 seconds to respond, the attempt is counted as failed even if processing is still in progress. Use a queue or async job on your end to respond immediately with `200 OK` and process the payload in the background.

## What Counts as a Failure

- HTTP status code **400–599** from your endpoint
- **No response** within 10 seconds (connection refused, timeout, DNS failure)
- **SSL/TLS error** (e.g. expired certificate on your endpoint)

**2xx status codes** (200, 201, 202, 204) all count as success.

## Viewing Delivery History

Go to **Settings → Integrations → Webhooks → [your webhook] → Delivery History** to see every delivery attempt for the past 30 days, including:
- Delivery timestamp
- HTTP status code returned
- Response time
- Whether it was a retry or first attempt
- Failure reason (if applicable)

See [Webhook Delivery History](./webhook-delivery-history.md) for a full walkthrough.

## Manually Retrying a Failed Delivery

From the Delivery History view, find any **Failed** delivery and click **Retry**. This replays the exact original payload — the change data is unchanged.

Manual retry is available for up to **7 days** after the original event. After that, the delivery is considered expired.

## What Happens to Events During an Outage

If your endpoint is down for an extended period:
- KompWatch will keep retrying on the schedule above for **up to 6 attempts** over ~8 hours
- Events beyond 6 attempts are dropped from the retry queue but remain visible in Delivery History
- **You will not lose the change data** — changes are always stored in your KompWatch dashboard and digests regardless of webhook delivery status

To catch up on missed changes: log in to the dashboard and check the [Change History](./using-the-change-history-timeline.md) — every change is recorded there, independent of webhook delivery.

## Configuring Alerts for Webhook Failures

KompWatch does not currently send email alerts when a webhook consistently fails. If repeated failures are a concern, consider:
- Setting up uptime monitoring on your receiving endpoint (e.g. Uptime Robot, Better Uptime)
- Polling the [Delivery History](#) page periodically if you're building on the API
- Using the **[REST API](./rest-api-and-developer-access.md)** to pull changes directly as an alternative to webhooks

Webhook failure email notifications are on the roadmap.

## Common Causes and Fixes

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| 401 Unauthorized | Signing secret mismatch | Re-copy the webhook secret from Settings and update your verification logic |
| 403 Forbidden | IP allowlist blocking KompWatch | Allowlist KompWatch IPs (see below) or disable IP restriction |
| 502/503 from your server | Endpoint overloaded or restarting | Check your server logs; consider async processing |
| Timeout (10s) | Slow processing on your end | Return `200 OK` immediately, process payload in a background job |
| SSL error | Expired or self-signed certificate | Renew your TLS cert or use a valid CA-signed certificate |

## KompWatch Webhook IP Addresses

If your infrastructure requires IP allowlisting, KompWatch sends webhooks from the following egress IPs:

```
# Check Settings → Integrations → Webhooks → IP Addresses
# (Displayed in-app — these may change with infrastructure updates)
```

Email [support@kompwatch.com](mailto:support@kompwatch.com) if you need the current IP list for allowlisting.

## Webhook Signing and Security

Every webhook payload is signed with an `X-KompWatch-Signature` header. Verify this signature on your end to reject forged requests. See [Webhook Payload Format](./webhook-payload-format.md) for the signature verification algorithm.

---
*Related: [Webhook Payload Format](./webhook-payload-format.md) · [Webhook Delivery History](./webhook-delivery-history.md) · [Slack Notifications](./slack-notifications.md) · [REST API](./rest-api-and-developer-access.md)*
