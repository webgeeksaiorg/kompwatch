# Filtering Slack Alerts by Content Zone

KompWatch's [Content Zone Classification](./content-zone-classification.md) labels every detected change with a strategic area — Monetization, Positioning, Talent, etc. You can use these labels to route alerts to the right team or channel, so your sales team only sees pricing moves and your product team only sees feature launches.

---

## How Zone-Based Filtering Works

KompWatch sends a single webhook URL all change events (Pro and Team plans). Each payload includes a `contentZone` field:

```json
{
  "change": {
    "contentZone": "MONETIZATION",
    "severity": "HIGH",
    ...
  }
}
```

There is no native per-zone webhook routing in KompWatch yet — routing is done either via **Zapier** (no-code) or a **custom middleware endpoint** (if you control your own infrastructure).

---

## Option 1 — Zapier Multi-Channel Routing (Recommended, No Code)

This is the easiest setup for teams without engineering resources.

**What you'll build:**

```
KompWatch webhook → Zapier → (filter by zone) → Slack #channel-a
                                               → Slack #channel-b
                                               → Slack #channel-c
```

**Steps:**

1. **Create a Zapier webhook trigger**
   - In Zapier, create a new Zap → Trigger: **Webhooks by Zapier → Catch Hook**
   - Copy the webhook URL Zapier gives you

2. **Paste the URL into KompWatch**
   - Go to **Settings → Slack & Webhook Integration**
   - Replace your existing URL (or add this as a test URL) with the Zapier hook URL
   - Click **Send test** to fire a sample payload — Zapier will capture the structure

3. **Add a Filter step per zone**
   - Add a **Filter by Zapier** step
   - Condition: `change__contentZone` **exactly matches** `MONETIZATION`
   - If the filter passes, add a **Slack** action posting to `#pricing-intel`

4. **Repeat per zone/channel:**
   - Duplicate the Zap and change the filter and target channel for each zone you want to route
   - Or use **Paths by Zapier** (Zapier paid plan) to branch a single Zap into multiple Slack channels

**Recommended routing map:**

| Zone | Suggested Slack channel | Audience |
|------|------------------------|---------|
| `MONETIZATION` | `#pricing-intel` | Sales, founders |
| `POSITIONING` | `#messaging-radar` | Marketing, product marketing |
| `PRODUCT` | `#product-signals` | Product, engineering |
| `TALENT` | `#hiring-signals` | Recruiting, sales |
| `LEGAL` | `#legal-radar` | Legal, compliance |
| `MARKETING` | `#content-radar` | Marketing |
| `OPERATIONS` | `#infra-signals` | Engineering |

---

## Option 2 — Custom Middleware Endpoint (Full Control)

If you run your own infrastructure, point KompWatch at a lightweight router you control.

**Example in Node.js / Express:**

```js
const express = require('express')
const { WebClient } = require('@slack/web-api')

const app = express()
const slack = new WebClient(process.env.SLACK_BOT_TOKEN)

const ZONE_CHANNELS = {
  MONETIZATION: 'C_PRICING_CHANNEL_ID',
  POSITIONING:  'C_MESSAGING_CHANNEL_ID',
  PRODUCT:      'C_PRODUCT_CHANNEL_ID',
  TALENT:       'C_HIRING_CHANNEL_ID',
  LEGAL:        'C_LEGAL_CHANNEL_ID',
  MARKETING:    'C_CONTENT_CHANNEL_ID',
  OPERATIONS:   'C_INFRA_CHANNEL_ID',
}

const DEFAULT_CHANNEL = 'C_GENERAL_CI_CHANNEL_ID'

app.post('/kompwatch', express.json(), async (req, res) => {
  res.sendStatus(200) // respond fast to avoid retry

  const { competitor, change } = req.body
  const channel = ZONE_CHANNELS[change.contentZone] ?? DEFAULT_CHANNEL

  await slack.chat.postMessage({
    channel,
    text: `*[${change.severity}]* ${competitor.name} — ${change.contentZone}\n${change.summary}\n<${change.viewUrl}|View change →>`,
  })
})

app.listen(3000)
```

Deploy this to any Node.js host (Railway, Render, Fly.io) and use its public URL as your KompWatch webhook endpoint.

**Optional: verify the HMAC signature** before processing — see [Webhook Payload Format → Verifying Authenticity](./webhook-payload-format.md) for the verification snippet.

---

## Setting a Global Severity Floor (Quick Win)

Before routing by zone, set a minimum severity threshold in **Settings → Webhook** so low-value changes don't reach your router at all:

- **LOW** (default) — everything
- **MEDIUM** — pricing, features, messaging changes; cuts ~40% of volume
- **HIGH** — significant moves only; minimal noise

Combine a HIGH floor with zone routing to get high-signal, channel-targeted alerts with almost no noise.

---

## Can I Filter by Zone Inside KompWatch Without a Webhook?

Not for notifications — notification filtering is currently global (by severity and confidence, not by zone). Zone-based filtering is available in the **dashboard** and **digests**:

- **Dashboard** → filter the timeline by zone using the Zone dropdown
- **Digest** → changes are grouped by zone; scan the section you care about
- **Change History tab** → filter by zone per competitor

Zone-based notification routing is on the roadmap as a native setting. Watch the [product changelog](./product-changelog.md) for updates.

---

## Related Articles

- [Content Zone Classification — Understanding Strategic Business Area Labels](./content-zone-classification.md)
- [Webhook Payload Format](./webhook-payload-format.md)
- [Integrations and Notifications](./integrations-and-notifications.md)
- [Per-Competitor Notification Settings](./per-competitor-notification-settings.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
