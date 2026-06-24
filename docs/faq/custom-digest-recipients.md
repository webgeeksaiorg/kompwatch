# Sending Digest Emails to People Who Don't Have a KompWatch Account

KompWatch digests go to registered account members by default. If you want to share competitive intelligence with executives, clients, or teammates who aren't in your KompWatch account, here are your options.

## The Problem: Stakeholders Outside Your Account

Common scenarios where this comes up:
- A CEO or VP of Sales wants a weekly competitive brief but doesn't want to log in to another tool
- You manage competitive intel for a client who shouldn't have direct dashboard access
- You want to loop in a contractor or agency on specific competitor activity
- Legal or compliance needs a read-only digest without a full account seat

## Option 1 — Forward Digests Manually (Free, Immediate)

The simplest approach: your digest hits your inbox, you forward it. KompWatch digest emails are formatted for readability, so forwarding works well for ad-hoc sharing.

**Limitations:** Manual, not scalable, and the recipient can't choose their own frequency.

## Option 2 — Add Them as a Team Member (Team Plan)

The Team plan supports up to 5 users (with additional seats available). Each team member gets their own KompWatch account, with their own notification preferences and digest schedule. This is the right solution for internal teammates who should have persistent access.

1. Go to **Settings → Team → Invite Member**
2. Add their email with the **Member** role
3. They accept the invite and set their own digest frequency

See: [Inviting Team Members](./inviting-team-members.md)

**Limitations:** Each seat costs money and gives dashboard access. Not ideal for clients, executives who want zero friction, or external stakeholders.

## Option 3 — Webhook → Email Automation (Zapier / Make / n8n)

For the most control, use a webhook to trigger a custom email whenever a change is detected. This lets you:
- Route change alerts to any email address (or list)
- Filter by severity, competitor, or change type before sending
- Customize the email format for non-technical stakeholders

**Example Zapier flow:**
1. KompWatch sends a webhook on HIGH severity change
2. Zapier filters for specific competitors
3. Zapier sends a formatted email via Gmail to your stakeholder distribution list

See: [Zapier, Make, and n8n Automation](./zapier-make-n8n-automation.md) and [Webhook Payload Format](./webhook-payload-format.md)

**Limitations:** Requires setup time and a Zapier/Make account. You're building the email format yourself.

## Option 4 — Export and Share Snapshots Manually

For a weekly or monthly executive brief:
1. Go to **Dashboard → Digests**
2. Find the digest you want to share
3. Use your browser's **Print → Save as PDF** to export a clean, readable version
4. Email the PDF to stakeholders

**Limitations:** Manual process. Works well for a periodic executive summary, not for real-time alerts.

## Option 5 — Pipe Digests Into a Shared Channel (Slack, Teams, Email List)

Instead of individual emails, route competitor alerts into a shared Slack channel or Microsoft Teams channel that your stakeholders already monitor:
- Slack: [Slack Notifications](./slack-notifications.md)
- Microsoft Teams: [Microsoft Teams Notifications](./microsoft-teams-notifications.md)
- Google Chat: [Google Chat Notifications](./google-chat-notifications.md)

This is often the best solution for executives — they see competitive alerts in the tool they're already in, with no additional logins required.

## Option 6 — Notion or Airtable as a Shared Intelligence Hub

If your team uses Notion or Airtable as a shared wiki, you can sync competitor changes there via webhook or Zapier. Stakeholders can check the Notion database on their own schedule without needing a KompWatch account.

See: [Notion Integration](./notion-integration.md) · [Airtable Integration](./airtable-integration.md)

## Recommended Path by Stakeholder Type

| Stakeholder | Recommended approach |
|-------------|---------------------|
| Internal teammate (regular use) | Invite as Team Member |
| Executive (wants low-friction summary) | Shared Slack/Teams channel |
| External client | Webhook → Zapier → custom email, or export PDF |
| Sales team | Slack channel + Battlecard exports |
| Board member (monthly brief) | Export PDF digest once a month |
| Compliance / legal (audit access) | Export or Audit Log — contact support for compliance packages |

## Will This Change in Future?

Outbound digest CC/BCC support (send a digest copy to external email addresses directly from your KompWatch settings) is on the roadmap. Contact [support@kompwatch.com](mailto:support@kompwatch.com) if this is a priority for your team — it helps us understand demand.

---
*Related: [Inviting Team Members](./inviting-team-members.md) · [Team Plan](./team-plan.md) · [Slack Notifications](./slack-notifications.md) · [Zapier, Make, and n8n Automation](./zapier-make-n8n-automation.md) · [Sharing Digests with Your Team](./sharing-digests-with-your-team.md)*
