# Two-Factor Authentication and Account Security

KompWatch uses magic-link (passwordless) email login by default, which eliminates most password-based attack vectors. Here's how authentication works, what additional security options are available, and how to protect your account.

## How KompWatch Authentication Works

KompWatch uses **magic links** — you enter your email and receive a one-time sign-in link. There's no password to steal or brute-force. Each link:
- Expires after **15 minutes**
- Is single-use (invalidated after first click)
- Is sent only to your registered email address

This is more secure than password-based login for most threat models because it delegates identity verification to your email provider.

See: [Magic Link Login](./magic-link-login.md)

## Is Two-Factor Authentication (2FA) Available?

**Traditional TOTP 2FA (Google Authenticator, Authy, etc.) is not currently available**, because the passwordless magic-link flow already provides strong session security.

If your organization requires hardware-key 2FA (e.g., YubiKey / WebAuthn / FIDO2), this is available on the **Enterprise** plan. Contact [support@kompwatch.com](mailto:support@kompwatch.com) to discuss requirements.

## SSO / SAML (Enterprise)

If your company uses an identity provider (Okta, Azure AD, Google Workspace, OneLogin), you can connect KompWatch via **SAML 2.0 SSO** on the Enterprise plan. This means:
- All logins route through your IdP, enforcing your org's MFA policy
- Employees are automatically provisioned/deprovisioned via SCIM
- No magic-link emails — session management is handled by your IdP

See: [SSO and Single Sign-On](./sso-and-single-sign-on.md)

## Protecting Your Account (Without 2FA)

Since security depends on your email inbox, here are the most effective steps:

1. **Enable 2FA on your email account** (Gmail, Outlook, etc.) — this protects the magic link delivery channel
2. **Use a company email address**, not a personal one, for work accounts
3. **Revoke active sessions** if you suspect unauthorized access: **Settings → Security → Active Sessions → Sign out all devices**
4. **Audit team member access** regularly: **Settings → Team** — remove ex-employees promptly
5. **Review API keys**: **Settings → Developer → API Keys** — revoke any keys you no longer use

## Viewing Active Sessions

1. Go to **Settings → Security → Active Sessions**
2. See all current sessions: device, browser, IP address, last active time
3. Click **Revoke** next to any session to sign it out immediately
4. Click **Sign out all other devices** to revoke every session except the current one

## What Happens If Your Email Is Compromised

If you believe someone has access to your email and therefore your KompWatch account:

1. **Change your email account password immediately** and enable 2FA on your email
2. Contact [support@kompwatch.com](mailto:support@kompwatch.com) — we can freeze the KompWatch account and revoke all sessions while you regain control
3. We'll help you transfer the account to a new, secure email address

For security incidents (suspected unauthorized access, data breach concerns), escalate immediately — we treat these as P0 and respond within 2 hours.

## Account Ownership Transfer

If you need to transfer a KompWatch account to a new owner (e.g., someone leaving the company), see [Changing Your Email Address](./changing-your-email-address.md) or contact support — we can reassign account ownership without losing your data.

## Shared Team Accounts

We strongly recommend using **individual accounts** rather than sharing login credentials:
- The Team plan supports multiple users with individual logins
- Each team member has their own email → magic link flow
- Activity is attributed per user in the audit log

Sharing a single account login is a security risk and makes the audit log meaningless.

See: [Inviting Team Members](./inviting-team-members.md)

---
*Related: [Magic Link Login](./magic-link-login.md) · [SSO and Single Sign-On](./sso-and-single-sign-on.md) · [Data Security](./data-security.md) · [Audit Logs and Activity History](./audit-logs-and-activity-history.md)*
