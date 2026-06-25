# Audit Logs and Activity History

Who added that competitor? When did a team member change the notification settings? KompWatch keeps an audit trail of account activity for accountability and compliance.

## What Is an Audit Log?

An audit log records every significant action taken in your KompWatch account — who did what, and when. This is useful for:
- Team accountability (e.g., who removed a tracked competitor)
- Compliance requirements (SOC 2, internal security policies)
- Debugging unexpected configuration changes

## Availability by Plan

| Plan | Audit Log Access | Retention |
|------|-----------------|-----------|
| Free | Not available | — |
| Pro  | Last 30 days | 30 days |
| Team | Full audit log | 90 days |
| Enterprise | Full audit log + export | 1 year (configurable) |

## What Actions Are Logged

KompWatch logs the following events:

**Account & Team**
- User login (magic link sent, login successful)
- Team member invited, accepted, or removed
- Role change (member → admin, admin → member)
- Account email changed
- Password / magic link settings updated
- Account deleted

**Billing**
- Plan upgraded or downgraded
- Payment method updated
- Subscription paused or resumed
- Refund issued

**Competitors & Monitoring**
- Competitor added, edited, or deleted
- Competitor muted or unmuted
- CSS selector / excluded zone updated
- Manual snapshot triggered
- Snapshot frequency changed

**Integrations & Notifications**
- Slack / webhook / Zapier integration connected or disconnected
- Notification settings changed (severity threshold, digest frequency)
- API key generated or revoked

**Exports & Data**
- Competitor data or change history exported
- Digest downloaded

## Viewing the Audit Log (Team Plan)

1. Go to **Settings → Team → Audit Log**
2. Filter by:
   - **Date range** (last 7 days, 30 days, custom range)
   - **User** (any team member or "System")
   - **Event type** (e.g., competitor changes only)
3. Each row shows: timestamp (UTC), user, action, and affected resource

## Exporting the Audit Log

On **Team** and **Enterprise** plans, you can export the full audit log as a CSV:

1. Go to **Settings → Team → Audit Log**
2. Apply any filters you want
3. Click **Export CSV**

The export includes all visible columns plus IP address and user-agent string for each event.

## Audit Log for Solo (Pro) Accounts

On Pro, you don't have a team, but you can still see your own activity history under **Settings → Account → Activity History**. This shows the last 30 days of actions taken in your account (including API calls if you use the REST API).

## Security-Relevant Events and Alerts

If a security-sensitive action is taken by someone other than you (e.g., a login from an unusual IP, or a team member removing all competitors), KompWatch sends an email notification to account owners and admins.

Currently logged security events:
- New device / unfamiliar IP login
- Team member added with admin role
- All competitors deleted in one action
- API key revoked

## Compliance Notes

KompWatch's audit log is designed to support common compliance frameworks:
- **SOC 2 Type II**: Logical access and change management
- **GDPR Article 30**: Records of processing activities (contact support for a complete data inventory)
- **Internal security policies**: Event-level attribution with timestamps

For Enterprise compliance requirements (extended retention, SIEM export, custom event types), contact [support@kompwatch.com](mailto:support@kompwatch.com).

---
*Related: [Data Security](./data-security.md) · [Inviting Team Members](./inviting-team-members.md) · [GDPR Data Deletion](./gdpr-data-deletion.md) · [Enterprise Plan](./enterprise-plan.md)*
