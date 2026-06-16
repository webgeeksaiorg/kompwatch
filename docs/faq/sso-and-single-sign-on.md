# SSO and Single Sign-On

KompWatch uses **magic link login** for Free, Pro, and Team plans. SSO (SAML 2.0) is available on the Enterprise plan.

## How Login Works Today

When you sign in, you enter your email address and receive a one-click login link valid for 15 minutes. This is the only authentication method. There are no passwords to steal or reuse, which eliminates the most common account-compromise vector.

See [My Login Email Didn't Arrive →](magic-link-login.md) if you're having trouble receiving login emails.

## Is SSO (Okta, Google Workspace, Azure AD, SAML) Supported?

**Yes — on the Enterprise plan.** SSO via SAML 2.0, Okta, Google Workspace, and Azure AD is available on the [Enterprise plan](enterprise-plan.md).

SSO is not available on Free, Pro, or Team plans. If SSO is a hard requirement, [contact sales@kompwatch.com](mailto:sales@kompwatch.com) to discuss Enterprise pricing — it starts at $799/month.

## Workarounds for Pro/Team Plans (No SSO)

On Free, Pro, and Team plans (no SSO), teams commonly use:

- **Shared email alias** — sign up with `competitive@yourcompany.com` and share access via the alias. Everyone on the alias can request a magic link and access the same account.
- **Forward digests to your team** — set up email forwarding from your KompWatch address to a distribution list, so teammates receive digests automatically.
- **Slack integration** — connect KompWatch to a shared Slack channel (Pro/Team). Teammate who don't log in still see every alert in the channel.

## Security Without SSO

Because magic links are time-limited (15 minutes) and single-use, they're resistant to phishing and credential stuffing. Sessions are signed JWTs. We do not store passwords and there is no password reset flow.

For organizations on Free, Pro, or Team plans with strict identity management requirements, onboarding and offboarding must be handled by changing the account email — email [support@kompwatch.com](mailto:support@kompwatch.com) to do this. For full SAML/SCIM provisioning, [Enterprise plan](enterprise-plan.md) is the right fit.

For full security details, see [Data Security & Privacy →](data-security.md).

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
