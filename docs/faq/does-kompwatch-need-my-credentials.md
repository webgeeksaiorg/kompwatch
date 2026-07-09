# Does KompWatch Need Access to My Accounts or Competitor Logins?

**No.** KompWatch does not need any account credentials — not yours, not your competitors'.

To start monitoring a competitor, all you provide is:

1. **A URL** — e.g. `https://competitor.com/pricing`
2. **Your email address** — to receive digests and alerts

That's it. No OAuth grants, no API keys from third-party services, no passwords.

---

## How KompWatch Actually Works

KompWatch uses a headless Chromium browser (Playwright) to load competitor pages exactly as a real visitor would — no credentials, no session cookies, no login. It captures what's publicly visible and runs AI-powered change detection on the result.

This means:

- **You don't give KompWatch access to your own SaaS tools.** No HubSpot OAuth, no Salesforce token, no Notion workspace connection is required to monitor competitors.
- **You don't need competitor accounts.** KompWatch only tracks public-facing pages — the same pages your prospects, customers, and analysts can already see.
- **No integrations are required to get started.** Slack, HubSpot, and Zapier integrations are optional add-ons for routing alerts. The core monitoring works entirely on its own.

---

## What About Connecting Slack or Other Tools?

Optional integrations (Slack, Microsoft Teams, HubSpot, Zapier) require you to authenticate those separately — you're granting KompWatch permission to *send messages* to Slack, not to read your Slack workspace or your data.

These are optional and can be set up after you've already started monitoring. See:

- [Slack Notifications](./slack-notifications.md)
- [HubSpot Integration](./hubspot-integration.md)
- [Zapier / Make / n8n Automation](./zapier-make-n8n-automation.md)

---

## What About Pages Behind a Login?

KompWatch monitors **public pages only** — pages visible to any visitor without signing in. It cannot and will not attempt to access competitor dashboards, gated pricing pages, or in-app experiences behind a login wall.

See [Can KompWatch Monitor Login-Required Pages?](./monitoring-login-required-pages.md) for more detail.

---

## What About My Own Account Security?

Your KompWatch account is protected by magic-link email authentication — there's no password to steal or phish. You can enable two-factor authentication for additional protection. See [Two-Factor Authentication and Account Security](./two-factor-authentication-and-account-security.md).

---

**Bottom line:** KompWatch is deliberately low-access. You give it a URL; it gives you intelligence.
