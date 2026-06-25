# Team Roles and Permissions

KompWatch's Team plan supports multiple users with role-based permissions. Here's how admin and member roles work, what each role can do, and how to manage your team's access.

## Available Roles

KompWatch has two roles on the Team plan:

| Role | Who it's for |
|------|-------------|
| **Admin** | Account owner(s) who can manage all settings, billing, competitors, and team members |
| **Member** | Teammates who can view and interact with competitor data but cannot change billing or team settings |

> **Free and Pro plans** are single-user — roles only apply to the Team plan.

## Role Permissions at a Glance

| Action | Admin | Member |
|--------|-------|--------|
| View competitor changes and digests | ✅ | ✅ |
| Add / edit / delete competitors | ✅ | ✅ |
| Trigger manual snapshots | ✅ | ✅ |
| Dismiss or mark changes | ✅ | ✅ |
| Configure digest frequency and notifications | ✅ | ✅ (own preferences only) |
| Configure webhooks and integrations | ✅ | ❌ |
| Invite or remove team members | ✅ | ❌ |
| Change member roles | ✅ | ❌ |
| View and manage billing / subscription | ✅ | ❌ |
| Download invoices | ✅ | ❌ |
| Access audit log | ✅ | ❌ |
| Delete the account | ✅ (owner only) | ❌ |
| Export all data | ✅ | ❌ |

## Inviting Team Members

1. Go to **Settings → Team**
2. Click **Invite Member**
3. Enter their email address and choose a role (**Admin** or **Member**)
4. Click **Send Invite**

They'll receive an email invitation. Once they accept, they can log in using the standard magic-link flow.

**Invite link expiry:** Invitations expire after **7 days**. If the link expires, resend the invite from Settings → Team → Pending Invites.

See: [Inviting Team Members](./inviting-team-members.md)

## Changing a Team Member's Role

1. Go to **Settings → Team**
2. Find the member you want to update
3. Click the **⋯ menu** next to their name
4. Select **Change Role**
5. Choose the new role and confirm

Role changes take effect immediately — the member's next page load will reflect their new permissions.

## Removing a Team Member

1. Go to **Settings → Team**
2. Click **⋯** next to the member
3. Select **Remove from team**
4. Confirm the removal

Removed members lose access immediately. Their historical activity (dismissed changes, notes) is retained in the audit log.

> **Tip:** When an employee leaves your company, remove their KompWatch access as part of your offboarding checklist — just as you would for email, Slack, or any other tool.

## How Many Team Members Can I Add?

The Team plan includes up to **5 seats** by default. Additional seats can be purchased in Settings → Billing. Contact [support@kompwatch.com](mailto:support@kompwatch.com) for volume pricing if you need more than 10 seats.

See: [Team Plan](./team-plan.md)

## Can Members Have Different Digest Preferences?

Yes. Each team member sets their own notification preferences:
- **Digest frequency** — daily, weekly, or off
- **Severity filters** — which change severity levels trigger email alerts
- **Per-competitor notifications** — which competitors they want to hear about

Admins control the account-wide webhook and integration settings; members control their own email preferences.

See: [Per-Competitor Notification Settings](./per-competitor-notification-settings.md)

## Who Gets Billed When a Member Makes Changes?

Billing is tied to the account (owner/Admin), not individual members. All actions by team members count against the account's usage limits (e.g., competitor slot count). There is no per-seat metering beyond the seat count.

## Account Ownership Transfer

The original account creator is the **Owner** — a special Admin who is the only one who can:
- Delete the entire account
- Transfer ownership to another admin

To transfer ownership:
1. Go to **Settings → Team**
2. Promote the target member to Admin (if they aren't already)
3. Contact [support@kompwatch.com](mailto:support@kompwatch.com) — we'll transfer the Owner designation

Ownership transfer requires verification that both the current and new owner consent.

## SSO and Centralized User Management (Enterprise)

On the Enterprise plan, user provisioning and deprovisioning can be handled via **SCIM** connected to your identity provider (Okta, Azure AD, Google Workspace, OneLogin). This means:
- New employees are auto-provisioned when added in your IdP
- Departing employees are immediately deprovisioned — no manual removal required
- Roles can be mapped from your IdP groups to KompWatch roles

See: [SSO and Single Sign-On](./sso-and-single-sign-on.md)

---
*Related: [Inviting Team Members](./inviting-team-members.md) · [Team Plan](./team-plan.md) · [Audit Logs and Activity History](./audit-logs-and-activity-history.md) · [SSO and Single Sign-On](./sso-and-single-sign-on.md)*
