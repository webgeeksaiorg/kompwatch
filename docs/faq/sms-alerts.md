# Can I Receive KompWatch Alerts via SMS or Text Message?

KompWatch does not send SMS natively — alerts go to **email** (all plans) and **Slack / webhook** (Pro and Team plans). However, you can route KompWatch alerts to SMS in a few minutes using a no-code automation tool and a messaging API.

---

## Option 1: Zapier + SMS (No Code, ~5 Minutes)

**Requires:** KompWatch Pro or Team (webhooks), a Zapier account, and a Twilio or SimpleTexting account.

1. **In Zapier**, create a new Zap:
   - Trigger: **Webhooks by Zapier → Catch Hook** — copy the generated webhook URL
2. **In KompWatch**, go to **Settings → Slack & Webhook Integration**, paste the Zapier webhook URL, click **Send test** to confirm it arrives
3. **In Zapier**, add an action:
   - If using Twilio: **Twilio → Send SMS** — map `change.summary` and `competitor.name` to the message body
   - If using SimpleTexting or EZTexting: **SMS app → Send SMS**
4. Add an optional filter step before the SMS action so you only text yourself for **HIGH** or **CRITICAL** severity changes — otherwise, a busy monitoring week means a lot of texts

**Result:** Every time KompWatch detects a competitor change that clears your severity threshold, you receive a text message.

---

## Option 2: Make.com + Twilio (More Control)

Make.com's visual flow builder lets you add more sophisticated routing:

1. **Trigger:** HTTP module → listen for incoming webhooks (copy the URL)
2. **Paste the URL** into KompWatch Settings
3. **Filter:** Router → branch on `change.severity` (e.g. only continue if `HIGH` or `CRITICAL`)
4. **Action:** Twilio → Create Message — compose the SMS from `{{competitor.name}}: {{change.summary}}`

The filter step keeps SMS volume manageable — you'll still see MEDIUM/LOW changes in your digest, but only receive texts for the alerts that actually warrant interruption.

---

## What Should I Put in the SMS Body?

Keep it short — SMS has a 160-character limit before splitting. A good template:

```
KompWatch: [competitor] — [severity] change: [summary snippet]
```

Example:
```
KompWatch: Acme Corp — HIGH: Pricing page updated. Pro plan raised from $49 to $69/mo.
```

Map these fields from the KompWatch webhook payload:
- `competitor.name`
- `change.severity`
- `change.summary` (truncate to ~100 chars)
- `change.changeType` (PRICING / FEATURE / CONTENT / VISUAL)

See [Webhook Payload Format →](./webhook-payload-format.md) for the full field reference.

---

## Recommended Severity Filter for SMS

| You're a... | Suggested SMS threshold |
|---|---|
| Solo founder, very few competitors | MEDIUM and above |
| PMM or CI lead | HIGH and above |
| Executive who just wants the big stuff | CRITICAL only |
| Anyone tracking 10+ competitors | HIGH and above (or you'll get a lot of texts) |

---

## Will This Work on the Free Plan?

No — webhooks require **Pro or Team**. Free accounts receive email digests only.

If you're on Free and want faster-than-weekly alerts, upgrade to Pro for daily digests and instant pricing-change alerts. See [Pricing →](./pricing.md) or compare plans at [/pricing](/pricing).

---

## Related Articles

- [Automating KompWatch with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md)
- [Webhook Payload Format](./webhook-payload-format.md)
- [Integrations and Notifications](./integrations-and-notifications.md)
- [Instant Pricing-Change Alerts](./instant-pricing-alerts.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
