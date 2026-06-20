# Does KompWatch Integrate With Notion?

**Short answer:** Not natively — but you can push KompWatch competitor alerts into a Notion database in under 15 minutes using Zapier, Make.com, or n8n. No code required.

## Why Would You Connect Them?

Most teams maintain a competitive intelligence wiki in Notion — a database of competitor summaries, pricing notes, and battlecard snippets. Without an automation, keeping it current requires someone to manually log changes.

KompWatch detects changes automatically. Connecting the two means your Notion competitive wiki updates itself whenever a competitor changes their pricing page, feature list, or messaging.

Common use cases:
- Append a new row to a Notion database every time a tracked competitor changes their website
- Log the AI-generated change summary and severity level as Notion properties
- Notify a team member via a Notion comment when a HIGH-severity change is detected
- Build a running log of all competitor pricing changes in a Notion table

## Path 1: Webhook → Zapier → Notion (Recommended)

This is the fastest setup — no developer access required on either side.

**What you'll need:**
- A **Pro or Team** KompWatch plan (webhooks require Pro+)
- A Zapier account with the Notion integration connected
- A Notion database with the right properties pre-created

**Step 1 — Create your Notion database**

In Notion, create a new database (or use an existing competitive wiki). Add these properties for best results:

| Property name | Property type | Maps to |
|---|---|---|
| Name | Title | `competitor.name` + `change.changeType` |
| Competitor | Select | `competitor.name` |
| Summary | Text | `change.summary` |
| Severity | Select | `change.severity` (LOW / MEDIUM / HIGH) |
| Change Type | Select | `change.changeType` (CONTENT / PRICING / FEATURE / VISUAL) |
| Detected At | Date | `change.detectedAt` |
| URL | URL | `competitor.url` |

**Step 2 — Set up the Zapier trigger**

1. In Zapier, click **+ Create → Zaps**
2. Add a trigger: **Webhooks by Zapier → Catch Hook**
3. Copy the webhook URL Zapier generates

**Step 3 — Connect to KompWatch**

1. In KompWatch, go to **Settings → Slack & Webhook Integration**
2. Paste the Zapier webhook URL into the field
3. Click **Send test** to fire a sample payload

**Step 4 — Add the Notion action**

1. In Zapier, add an action: **Notion → Create Database Item**
2. Connect your Notion account and select your competitive wiki database
3. Map the KompWatch payload fields to your Notion properties:
   - **Name (Title):** `[competitor.name] — [change.changeType]` (e.g., "Klue — PRICING")
   - **Competitor:** `competitor.name`
   - **Summary:** `change.summary`
   - **Severity:** `change.severity`
   - **Change Type:** `change.changeType`
   - **Detected At:** `change.detectedAt`
   - **URL:** `competitor.url`

**Step 5 — (Optional) Filter by severity**

Add a Zapier **Filter** step before the Notion action to only log changes above a threshold:
- Field: `change.severity`
- Condition: `Does not equal`
- Value: `LOW`

This keeps your competitive wiki clean — only MEDIUM and HIGH changes create new rows.

See [Webhook Payload Format →](./webhook-payload-format.md) for all available payload fields.

## Path 2: Make.com → Notion

Make.com has a native Notion module that can create database items, append page blocks, or add comments.

1. In Make.com, create a new scenario with a **Custom Webhook** trigger
2. Paste the webhook URL into KompWatch **Settings → Slack & Webhook Integration** and click **Send test**
3. Add a **Notion → Create a Database Item** module
4. Map fields from the KompWatch payload to your Notion database properties
5. (Optional) Add a **Notion → Append a Block to a Page** module to write the `change.summary` as rich text beneath a competitor's wiki page

## Path 3: n8n → Notion

n8n has a Notion node that supports creating pages, appending blocks, and querying databases.

1. Create a workflow with a **Webhook** trigger node (HTTP Method: POST)
2. Paste the n8n webhook URL into KompWatch Settings → Send test
3. Add a **Notion → Create a Database Page** node
4. Map the payload fields to your database properties
5. Use an **IF** node before the Notion node to filter by severity if needed

## Which Plan Do I Need?

| Plan | Webhooks | Notion integration |
|------|----------|--------------------|
| Free | ✗ | ✗ |
| Pro  | ✓ | ✓ via Zapier / Make / n8n |
| Team | ✓ | ✓ via Zapier / Make / n8n |

## Does Klue or Crayon Have a Native Notion Integration?

Neither Klue nor Crayon offers a native Notion connector at any plan tier. Klue's content is stored in their proprietary battlecard CMS; Crayon's in their Sparks feed. Exporting that content to Notion requires manual copy-paste or a custom API integration.

KompWatch's webhook model makes Notion integration straightforward regardless of plan level — any automation platform that supports Notion (Zapier, Make, n8n) can relay KompWatch change alerts into your Notion workspace.

## Tips for a Useful Competitive Wiki

- **Use a Gallery view** filtered by competitor to see change history at a glance
- **Use a Board view** grouped by Severity to prioritize what your team reviews first
- **Add a formula property** that combines `Competitor` + `Detected At` for a unique row name
- **Filter the database view** to hide LOW severity entries for day-to-day use; show all for weekly reviews

## Related Articles

- [Automating with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md)
- [Webhook Payload Format](./webhook-payload-format.md)
- [Slack Notifications](./slack-notifications.md)
- [Salesforce Integration](./salesforce-integration.md)
- [HubSpot Integration](./hubspot-integration.md)
- [Integrations and Notifications](./integrations-and-notifications.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
