# Linear and Jira Integration — Creating Tickets from Competitor Changes

KompWatch doesn't have a native Linear or Jira integration today, but product teams use it with both tools via webhooks and Zapier/Make. This FAQ covers the common patterns.

---

## Can KompWatch Create Tickets in Linear or Jira Automatically?

Not natively — KompWatch doesn't write directly to issue trackers. What it does do:

- **Deliver digest emails** — with AI-summarised changes your team can triage manually
- **Fire webhooks** — on new changes, so you can route HIGH-severity changes to your issue tracker via automation

Most product teams use the webhook → Zapier/Make/n8n route to auto-create tickets for HIGH or MEDIUM severity changes without touching code.

---

## Webhook → Linear (Zapier / Make)

**Setup in KompWatch:**

1. Go to **Settings → Integrations → Webhooks**
2. Add a webhook URL — this is your Zapier/Make endpoint
3. Set filter to **HIGH severity only** (reduces noise to decisions-worth-tracking changes)

**In Zapier (Linear example):**

| Step | Config |
|---|---|
| Trigger | Webhooks by Zapier — Catch Hook |
| Filter | Only continue if `severity == HIGH` |
| Action | Linear — Create Issue |
| Title | `[CI] {{competitor_name}}: {{change_summary}}` |
| Description | `{{change_diff}}\n\nDetected: {{detected_at}}\nURL: {{competitor_url}}` |
| Team | Product or Competitive Intel team |
| Label | `competitive` |
| Priority | Medium (or map HIGH→Urgent, MEDIUM→Medium) |

**In Make (formerly Integromat):**

The pattern is the same — use a Webhooks module as trigger, add a JSON parse step, route to the Linear "Create Issue" module. Make's visual editor makes filtering by severity straightforward via a Router module.

---

## Webhook → Jira (Zapier / Make)

**Zapier setup:**

| Step | Config |
|---|---|
| Trigger | Webhooks by Zapier — Catch Hook |
| Filter | `change_type == PRICING` OR `severity == HIGH` |
| Action | Jira Software Cloud — Create Issue |
| Summary | `[Competitor] {{competitor_name}} — {{change_type}} change` |
| Description | `AI Summary: {{change_summary}}\n\nDiff:\n{{change_diff}}\n\nSnapshot: {{snapshot_url}}` |
| Issue Type | Task or Story |
| Labels | `competitive-intelligence` |
| Assignee | Leave blank (auto-assign via Jira rules) or set to your PM |

**Jira Automation (no Zapier needed on Pro tier):**

If you're on Jira's Premium plan, use Jira Automation with a "Incoming Webhook" trigger:

1. Create a Jira Automation rule with trigger: **Incoming Webhook**
2. Copy the webhook URL from Jira Automation
3. Paste it into KompWatch's webhook settings
4. In the Jira Automation action: **Create Issue** — map `{{webhookData.change_summary}}` to Summary

This is zero additional cost if you're already on Jira Premium — no Zapier subscription needed.

---

## What's in the Webhook Payload?

KompWatch's webhook fires on each detected change with this structure:

```json
{
  "event": "change.detected",
  "competitor": {
    "id": "abc123",
    "name": "Acme Analytics",
    "url": "https://acme.com/pricing"
  },
  "change": {
    "id": "chg_xyz",
    "type": "PRICING",
    "severity": "HIGH",
    "summary": "Pricing page updated: Pro tier increased from $99/mo to $129/mo",
    "diff": "...",
    "detected_at": "2026-06-20T03:30:00Z"
  },
  "snapshot": {
    "id": "snap_abc",
    "url": "https://kompwatch.com/snapshots/snap_abc",
    "captured_at": "2026-06-20T03:28:00Z"
  }
}
```

Key fields for ticket creation:
- `competitor.name` → ticket title prefix
- `change.type` → `PRICING`, `FEATURE`, `CONTENT`, or `VISUAL`
- `change.severity` → `HIGH`, `MEDIUM`, or `LOW`
- `change.summary` → AI-generated plain-English description (use as ticket body)
- `snapshot.url` → link back to the KompWatch snapshot for full context

---

## Filtering to Reduce Ticket Noise

The most common mistake: routing all changes to Jira. `CONTENT` and `LOW` changes include things like blog post updates and minor copy edits — not worth a ticket.

**Recommended filter for issue tracker routing:**

```
severity == HIGH
OR (severity == MEDIUM AND change_type IN [PRICING, FEATURE])
```

This gives you:
- Every pricing change
- Every new feature announcement
- Major content overhauls (HIGH severity)
- No noise from minor blog updates, footer tweaks, or cookie banner changes

You can set this filter in Zapier/Make's filter step, or in your Jira Automation rule's condition block.

---

## Alternative: Email-to-Ticket

Many teams skip webhooks entirely. Jira, Linear, and most issue trackers have an **email-to-ticket** address. You can add that address to your KompWatch digest recipients in **Settings → Digest → Additional recipients**.

Every digest email becomes a ticket automatically. This is lower-fidelity (one ticket per digest, not per change) but requires zero setup beyond adding the email address.

---

## Linear-Specific Tips

Linear handles competitive signal well as a label-based triage system:

- Create a **Team** called `CI` (Competitive Intelligence) or use your Product team
- Create a **Label** called `competitor-change`
- Set Linear's **Triage inbox** for the CI team — incoming webhook-created issues land in Triage, not cluttering the active backlog
- Use a **Cycle** filter: only HIGH severity issues get added to the current cycle; MEDIUM goes to backlog

This keeps the active sprint clean while ensuring no HIGH-severity competitor move gets missed.

---

## Roadmap: Native Linear and Jira Integrations

Native integrations are on the KompWatch roadmap — no launch date confirmed yet. When available, they'll include:

- Direct OAuth connection to your Linear workspace or Jira project
- Per-competitor routing rules (Acme changes → Product team, Klue changes → Sales-competitive)
- Bi-directional status sync (close the KompWatch change when you resolve the ticket)

If this integration is important to your team, email [support@kompwatch.com](mailto:support@kompwatch.com) — votes from customers accelerate roadmap prioritisation.

---

## Related Articles

- [Webhook Payload Format](./webhook-payload-format.md)
- [Webhook Delivery History and Debugging](./webhook-delivery-history.md)
- [Zapier, Make, and n8n Automation](./zapier-make-n8n-automation.md)
- [Slack Notifications](./slack-notifications.md)
- [Sharing Digests with Your Team](./sharing-digests-with-your-team.md)
- [Change Severity Levels](./change-severity-levels.md)

---

*Need help setting up a Linear or Jira webhook? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll send you a working Zap template for your setup.*
