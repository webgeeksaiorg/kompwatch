# Getting Started with KompWatch

Welcome! This guide walks you through setup so you're tracking competitors and receiving change alerts within minutes.

## Step 1: Sign In

Go to [kompwatch.com/login](https://kompwatch.com/login) and enter your email. We'll send a **magic link** — a one-click login, no password required.

The link expires after 15 minutes. If it doesn't arrive, check your spam folder or request a new one. See [My Login Email Didn't Arrive](magic-link-login.md) for more help.

## Step 2: Explore the Demo Competitor (Then Add Your Own)

When you first sign in, your dashboard already includes a **pre-seeded demo competitor — Acme Analytics** — with sample snapshots and detected changes. This is example data so you can explore the dashboard immediately, without waiting for real snapshots to run.

- **It's safe to delete.** Once you've had a look around, remove it from the Competitors page.
- **It doesn't count against your plan limit.** Adding your real competitors won't affect it.

To add your own competitor:

1. From your dashboard, click **Add Competitor** — or on the Competitors page, click any of the **suggestion chips** (e.g. Salesforce, HubSpot, Notion) to auto-fill the name and URL in one click.
2. Enter or confirm:
   - **Name** — your label for this competitor (e.g. "Acme Corp")
   - **URL** — their website (e.g. `https://acmecorp.com`)
   - **CSS Selector** *(optional)* — target a specific section like `.pricing-table`. Leave blank to monitor the full page.
3. Click **Save**

KompWatch immediately takes an initial snapshot. See [How to Add a Competitor](adding-competitors.md) for tips on choosing good URLs and selectors.

## Step 3: Wait for the First Comparison

Changes are detected by comparing two snapshots. Your **first alert won't appear until the second snapshot completes**:

| Plan | Time until first comparison |
|------|-----------------------------|
| Free | ~24 hours |
| Pro  | ~6 hours |
| Team | ~1 hour |

This is expected — see [Why Don't I See Any Changes Yet?](why-no-changes-yet.md) for details.

## Step 4: Receive Your Digest

When changes are detected, KompWatch emails you a digest summarizing what changed, the severity, and an AI-generated explanation. Digest frequency depends on your plan:

| Plan | Digest |
|------|--------|
| Free | Weekly (Mondays) |
| Pro  | Daily |
| Team | Real-time (within ~1 hour of a change) |

If a digest doesn't arrive, see [My Digest Email Didn't Arrive](digest-not-arriving.md).

## What KompWatch Monitors

By default, KompWatch crawls several pages per competitor automatically — pricing, features, blog, jobs, and tech stack. See [What Does KompWatch Actually Monitor?](what-does-kompwatch-track.md) for the full breakdown.

## Tips for Best Results

- **Monitor specific pages.** Point the URL directly at `/pricing` or `/features` rather than the homepage — changes there are more meaningful.
- **Use a CSS selector.** Targeting `.pricing-table` or `#features` cuts noise from navigation and footer changes. See [CSS Selectors FAQ](css-selectors.md).
- **Start with 1–2 high-priority competitors.** Get a feel for the change cadence before adding more.
- **Check your plan limits.** Free: 2 competitors. Pro: 10. Team: 50. Upgrade at [kompwatch.com/pricing](https://kompwatch.com/pricing).

## Your Dashboard and Settings

- **Dashboard** ([/dashboard](https://kompwatch.com/dashboard)) — see all recent changes in a timeline view
- **Competitors** ([/competitors](https://kompwatch.com/competitors)) — add, edit, pause, or remove competitors
- **Settings** ([/settings](https://kompwatch.com/settings)) — manage your profile, notification preferences, webhooks, and billing

## Need Help?

Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.

---
*Browse all FAQ articles at [kompwatch.com/docs](https://kompwatch.com/docs) or email us directly.*
