# Does KompWatch Integrate with Microsoft Dynamics 365?

**Short answer:** Yes, via webhook — and it takes about 10 minutes to set up. KompWatch does not require a native Dynamics connector; it posts JSON payloads that Power Automate (Microsoft's native automation tool) can route into Dynamics 365 notes, activities, or custom entities.

---

## How to Connect KompWatch to Dynamics 365

The recommended path is **KompWatch Webhook → Power Automate → Dynamics 365**. No Zapier account required.

### Step 1 — Enable Webhooks in KompWatch

1. Go to **Settings → Webhooks → Add Endpoint**.
2. You'll get an outbound webhook URL that KompWatch calls whenever a change is detected on a tracked competitor page.
3. Note the payload fields: `competitor_name`, `change_summary`, `severity`, `competitor_url`, `detected_at`.

### Step 2 — Create a Power Automate Flow

1. In [Power Automate](https://make.powerautomate.com), click **New flow → Automated cloud flow**.
2. Set the trigger to **When a HTTP request is received**.
3. Copy the generated URL and paste it into KompWatch's webhook endpoint field. Click **Send test** in KompWatch to confirm delivery.
4. Add an action: **Dynamics 365 → Create a new record** (or **Add a note**, depending on your CRM structure).
5. Map the KompWatch payload fields:
   - `competitor_name` → Subject or Account lookup
   - `change_summary` → Note description or Activity subject
   - `severity` → Custom field (or include inline in subject: `[HIGH] competitor updated pricing`)
   - `competitor_url` → Link field or include in note body

### Step 3 — Filter by Severity (Recommended)

Add a **Condition** step before the Dynamics action to only log `HIGH` or `CRITICAL` changes. This prevents noise from minor competitor updates filling your CRM activity feed.

---

## How Does This Compare to Klue's Native Dynamics 365 Integration?

Klue recently shipped a native Dynamics 365 integration as part of their Compete Agent + Microsoft 365 Copilot bundle. Here's how the approaches differ:

| | Klue + Dynamics 365 | KompWatch + Dynamics 365 |
|---|---|---|
| **Setup** | Enterprise onboarding, sales cycle required | Self-serve webhook + Power Automate (10 min) |
| **Platform cost** | ~$50K/yr median (Vendr, 106 deals) | Pro $49/mo or Team $149/mo — no contract |
| **Microsoft 365 required** | Yes — designed around M365 Copilot stack | No — Power Automate is available separately |
| **What lands in Dynamics** | AI-generated battlecard answers via Copilot during deal reviews | Change alerts when competitor sites update (pricing, messaging, features) |
| **Data freshness** | Depends on CI analyst keeping Klue corpus updated | Automatic — detects site changes within hours |
| **In-call intelligence** | ✓ Real-time battlecard surfacing during Teams/Dynamics calls | ✗ Not in scope |
| **Change detection** | Manual corpus updates required | Automatic |
| **Free trial** | Sales demo required | Free tier, no credit card |

**The practical difference:** Klue's Dynamics integration surfaces curated competitive answers *during deal reviews* — useful for reps. KompWatch feeds change alerts into CRM *automatically* — useful for product, PMM, and strategy teams who need to keep Dynamics deal notes or account records current when competitors update their sites.

Teams running Klue for in-call intelligence often use KompWatch in parallel to detect changes automatically, so their Klue corpus stays accurate without requiring analysts to manually monitor competitor sites.

---

## Which Plan Do I Need?

Webhooks require **Pro or Team**. The Free plan does not include webhook output.

| Plan | Webhook to Power Automate | Dynamics 365 logging |
|------|--------------------------|---------------------|
| Free | ✗ | ✗ |
| Pro ($49/mo) | ✓ | ✓ (via Power Automate) |
| Team ($149/mo) | ✓ | ✓ (via Power Automate) |

---

## Can I Route Alerts to Specific Accounts or Deals?

Yes, with some Power Automate logic. If your competitors in KompWatch correspond to accounts in Dynamics, you can add a **Dataverse → List rows** step to look up the matching account by `competitor_name`, then attach the change note to that account record automatically.

---

## Related Articles

- [Microsoft Teams Notifications](./microsoft-teams-notifications.md)
- [Klue Copilot MCP vs KompWatch MCP](./klue-copilot-mcp-vs-kompwatch-mcp.md)
- [Automating KompWatch with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md)
- [Webhook Payload Format](./webhook-payload-format.md)
- [CRM Integrations (Salesforce, HubSpot)](./crm-integrations.md)
- [Switching from Klue to KompWatch](./switching-from-klue.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
