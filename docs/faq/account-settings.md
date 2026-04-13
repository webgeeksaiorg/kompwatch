# Account Settings — Profile, Notifications, Webhooks, and Billing

Your Settings page ([kompwatch.com/settings](https://kompwatch.com/settings)) is the single place to manage your profile, notification preferences, webhook integrations, and billing.

## What You'll Find on the Settings Page

### Profile
Displays your account email and display name. You can edit your display name directly. To update your email address, contact [support@kompwatch.com](mailto:support@kompwatch.com).

### Subscription
Shows your current plan at a glance:

| Field | What it means |
|-------|--------------|
| **Current plan** | Free, Pro, or Team — with monthly price |
| **Competitors** | How many you're monitoring vs. your plan limit (shown as a progress bar) |
| **Digest frequency** | How often you receive change emails (weekly / daily / real-time) |

If you're on the Free plan, you'll see an upgrade prompt with a link to [view all plans →](https://kompwatch.com/pricing).

### Notifications
Controls your **email digest** preferences:

- **Email digests toggle** — turn digest emails on or off without cancelling your subscription
- **Minimum severity** — filter your digest to only include changes at or above a threshold:
  - **Low** — all changes (blog posts, minor updates)
  - **Medium** — new features, job listings, and above
  - **High** — pricing changes, major launches only
  - **Critical** — pivots, acquisitions, shutdown signals only

The severity filter is shown when email digests are enabled. Changes below your threshold are still tracked — they just won't appear in your digest.

### Webhooks
Connect CompeteWatch to Slack, Microsoft Teams, or a custom HTTP endpoint:

1. Paste your incoming webhook URL into the **Webhook URL** field and click **Save**
2. CompeteWatch auto-detects Slack and Teams URLs and shows a platform badge
3. Use the **Webhook notifications** toggle to enable or disable (the toggle is disabled until a URL is saved)

For instructions on creating webhook URLs, see [Integrations and Custom Notifications](./integrations-and-notifications.md).

### Billing (Pro and Team only)
Paid subscribers see a **Manage Subscription** button that opens the Stripe Customer Portal, where you can:

- **Download invoices** and view full billing history
- **Update your payment method** (card, bank account)
- **Upgrade or downgrade** your plan
- **Cancel** your subscription

## How to Access the Customer Portal

1. Go to [kompwatch.com/settings](https://kompwatch.com/settings)
2. Click **Manage Subscription**
3. You'll be redirected to Stripe's secure billing portal

The Customer Portal is only available on paid plans. Free users can upgrade from the Settings page or [Pricing page](https://kompwatch.com/pricing).

## Checking Your Usage

The **Competitors** counter on the Settings page shows how many of your plan's slots are in use. If you're near the limit:

- **Free plan** — upgrade to Pro for up to 10 competitors
- **Pro plan** — upgrade to Team for up to 50 competitors

You can also see a competitor-by-competitor breakdown on the [Competitors page](https://kompwatch.com/competitors).

## Frequently Asked Questions

**Can I change my email address?**
Not from the Settings page directly — email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll update it for you.

**Where are my invoices?**
Click **Manage Subscription** on the Settings page. Stripe's Customer Portal lists all past invoices as downloadable PDFs.

**Why don't I see a Manage Subscription button?**
The button only appears for paid subscribers (Pro or Team). Free users can upgrade via [kompwatch.com/pricing](https://kompwatch.com/pricing).

**Can I pause digests without cancelling?**
Yes — use the **Email digests** toggle in Settings → Notifications to pause without affecting your subscription or monitored competitors.

**Why am I not seeing some changes in my digest?**
Check your **Minimum severity** setting in Settings → Notifications. If it's set to High or Critical, lower-severity changes (like blog posts or minor copy updates) won't appear.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
