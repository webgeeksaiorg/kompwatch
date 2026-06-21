# Can KompWatch Integrate with ClickUp, Monday.com, or Asana?

KompWatch doesn't have native integrations with project management tools like ClickUp, Monday.com, or Asana today. But teams use KompWatch with all three via webhooks and Zapier/Make — and the setup takes under 10 minutes.

This FAQ covers the webhook → task creation path for each tool, plus the email-to-task shortcut that requires zero code.

---

## Why Connect Your PM Tool to KompWatch?

The most common use case: **a competitor makes a HIGH-severity move (pricing change, feature launch), and you want a task created automatically** so the right person can respond — without anyone needing to check KompWatch manually.

Most teams connect KompWatch to their PM tool for:
- Pricing changes → task for the product or pricing team to evaluate
- New feature launches → task for product to assess competitive positioning
- Major content overhauls → task for marketing to update battlecards

For LOW/MEDIUM severity changes, digest emails are usually sufficient. The PM tool integration shines for HIGH severity.

---

## Option A: Email-to-Task (Zero Setup)

All three tools support email-to-task creation:

| Tool | Feature | Where to Find It |
|---|---|---|
| ClickUp | Email to List | List Settings → Email |
| Monday.com | Incoming Email | Board Settings → Email Integration |
| Asana | Email to Project | Project Settings → Email |

**Steps:**
1. Get the email address for your competitive intelligence project/list/board
2. Add that email address to **Settings → Digest → Additional recipients** in KompWatch
3. Every digest email becomes a new task automatically

**Limitation:** One task per digest, not per change. Good for weekly review rhythm; not good for real-time HIGH-severity alerts.

---

## Option B: Webhook → Zapier → PM Tool (Recommended for Real-Time)

This creates one task per detected change, filtered to HIGH severity only.

### ClickUp via Zapier

| Step | Config |
|---|---|
| Trigger | Webhooks by Zapier — Catch Hook |
| Filter | `severity == HIGH` OR `change_type IN [PRICING, FEATURE]` |
| Action | ClickUp — Create Task |
| List | Competitive Intelligence (or your team's backlog) |
| Name | `[CI] {{competitor_name}}: {{change_type}} change` |
| Description | `{{change_summary}}\n\nSeverity: {{severity}}\nDetected: {{detected_at}}\nSnapshot: {{snapshot_url}}` |
| Priority | Map: HIGH → Urgent, MEDIUM → Normal |
| Tag | `competitive-intel` |
| Assignee | Your product or CI lead (optional) |

### Monday.com via Zapier

| Step | Config |
|---|---|
| Trigger | Webhooks by Zapier — Catch Hook |
| Filter | `severity == HIGH` |
| Action | Monday.com — Create Item |
| Board | Competitive Intelligence (create one if needed) |
| Item Name | `{{competitor_name}} — {{change_type}} ({{severity}})` |
| Column Values | Status → "To Investigate", Priority → High |
| Update | Add an Update with `{{change_summary}}` and link to `{{snapshot_url}}` |

**Monday-specific tip:** Use Monday's **subitems** for change details and the parent item for the competitor. This groups multiple changes from the same competitor under one row, reducing visual noise on your board.

### Asana via Zapier

| Step | Config |
|---|---|
| Trigger | Webhooks by Zapier — Catch Hook |
| Filter | `change_type == PRICING` OR `severity == HIGH` |
| Action | Asana — Create Task |
| Project | Competitive Intelligence |
| Name | `[{{change_type}}] {{competitor_name}}: {{change_summary\|truncate:80}}` |
| Notes | `Severity: {{severity}}\n\n{{change_summary}}\n\nSnapshot: {{snapshot_url}}\nDetected: {{detected_at}}` |
| Assignee | CI team lead (or leave unassigned for triage) |
| Section | "New Signals" (triage section) |
| Due Date | Today + 2 days for PRICING changes, +5 for others |

---

## Option C: Make.com (Better Formatting, More Routing Logic)

Make.com's visual Router module is ideal for multi-tool setups. Example routing:

```
KompWatch Webhook
  → Router
    → [severity == HIGH] → ClickUp task + Slack message
    → [change_type == PRICING] → Monday.com item + HubSpot deal note
    → [change_type == FEATURE] → Asana task + Notion page
    → [severity == LOW] → Drop (no action)
```

This lets you route the same change event to different tools based on type or severity without writing code.

---

## Recommended Workflow: Triage Board

Whichever tool you use, we recommend a lightweight triage board structure:

| Status | Meaning |
|---|---|
| New Signal | Just detected, unreviewed |
| Investigating | Someone is assessing impact |
| Actioning | Response in progress (battlecard update, etc.) |
| Closed | No action needed / response shipped |

Connect KompWatch's webhook to auto-create tasks in "New Signal." Your team then triages weekly (or daily for HIGH severity) and moves items through the board.

---

## Which Plan Do I Need?

Webhooks require **Pro or Team**. The email-to-task path works on **all plans** (including Free, since all plans receive digest emails).

| Plan | Email-to-Task | Webhook → PM Tool |
|------|--------------|-------------------|
| Free | ✓ (via digest) | ✗ |
| Pro ($49/mo) | ✓ | ✓ |
| Team ($149/mo) | ✓ | ✓ |

---

## How Does This Compare to Klue/Crayon?

Klue and Crayon offer native ClickUp/Asana integrations on their Enterprise tiers ($30K+/yr). KompWatch achieves the same outcome via the webhook + Zapier path on the **$49/mo Pro plan**. The workflow is functionally identical — a detected change creates a task with AI summary and snapshot link — at a fraction of the price.

---

## Related

- [Automating with Zapier, Make.com, or n8n](./zapier-make-n8n-automation.md)
- [Webhook payload format and fields](./webhook-payload-format.md)
- [Linear and Jira Integration](./linear-jira-integration.md)
- [Notion Integration](./notion-integration.md)
- [Sharing Digests with Your Team](./sharing-digests-with-your-team.md)
- [Change Severity Levels](./change-severity-levels.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
