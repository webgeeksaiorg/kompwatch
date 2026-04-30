# Using KompWatch Insights for Customer Success Teams

Customer success teams use KompWatch to stay ahead of competitive objections during renewals, track the tools customers might be evaluating, and give account managers the intelligence they need to keep accounts from churning to a competitor.

## Why CS Teams Need Competitor Monitoring

Churn rarely comes out of nowhere. Customers evaluate alternatives quietly — often triggered by a competitor pricing drop, a feature launch, or an outbound sequence. By the time a customer brings it up on a renewal call, they may already have a quote.

KompWatch surfaces those competitor moves as they happen, not after the fact. CS teams who monitor competitors can get ahead of objections before they become churn signals.

## What to Monitor as a Customer Success Team

| Page type | Signal to watch | CS action |
|-----------|----------------|-----------|
| Pricing page | Price cuts, new tiers, "startup" or "SMB" plans | Proactive retention outreach for price-sensitive segments |
| Features page | New capabilities that overlap with your roadmap | Check if any open feature requests are now reasons to churn |
| Homepage hero | Repositioning, new use-case copy | Update your internal talking points for renewal calls |
| Case studies | New customers in verticals matching your book | Flag accounts in that vertical for proactive check-in |
| Job listings | Surge in CS or onboarding hires | Competitor is investing in retention — they're going after installed base |
| Blog posts | "Migration guide", "switch from [your product]" | Surface the post to your team — know the objection before the call |

## Setting Up CS-Focused Monitoring

**Who to track:**

- Your top 3 direct competitors (the ones you lose deals to and churn to most often)
- Any competitor mentioned in 3+ recent support tickets or NPS comments
- A new entrant pricing aggressively below you (early warning of future churn)

**Recommended CSS selectors:**

| Page | Selector |
|------|----------|
| Pricing page | `.pricing`, `#pricing`, `.pricing-table` |
| Features page | `#features`, `.features-grid`, `main` |
| Blog / resources | `.blog-list`, `main article` |
| Case studies | `.customers`, `.case-studies`, `main` |

See [CSS Selector Targeting](./css-selectors.md) for setup details.

## Getting Alerts to Your CS Team

The easiest path is a dedicated Slack channel:

1. Create `#competitive-cs-alerts` (or add to `#competitive-intel` if marketing already uses it)
2. Go to **Settings → Integrations → Slack** and connect the channel
3. Set a minimum severity of **Medium** so the team only sees meaningful changes, not minor copy tweaks

For account-specific intel — if you know an account is evaluating a specific competitor — add that competitor to your monitored list immediately and set the selector to their pricing page. You'll get updates before the next call.

See [Integrations and Notifications](./integrations-and-notifications.md) for routing options.

## Using Digest Intel Before a Renewal Call

Before a renewal or at-risk account call:

1. Go to [kompwatch.com/competitors](https://kompwatch.com/competitors) and pull up the relevant competitor
2. Filter change history to the last 30–90 days
3. Look for Pricing and Feature changes — these are the most likely objection triggers
4. Read the **"What this means for you"** field in each change entry — it's written as a strategic implication, not just a description

Example: A competitor drops their entry plan from $79/mo to $49/mo. The digest entry might read:

> **What this means for you:** Competitor is targeting SMBs with an aggressive price cut. Customers below 10 seats may surface this as a comparison point on renewal — prepare a value justification or flag for account review.

You don't need to interpret the diff. The AI converts it into a talking point.

## Routing High-Severity Changes to Account Managers

Pricing overhauls and major feature launches are worth a direct message to the account manager, not just a channel post. Configure this in **Settings → Notifications → Alert routing** to send critical-severity changes directly to a specific email or Slack DM.

## What KompWatch Does Not Replace

KompWatch monitors public web pages. It does not:

- Track competitor outbound sequences targeting your customers
- Pull data from G2, Capterra, or Gartner peer insights
- Integrate with Salesforce or Gainsight for automated health score updates

For CRM and CS platform integrations, see [Integrations and Notifications](./integrations-and-notifications.md). KompWatch is the monitoring layer — it surfaces what's happening on competitor sites so your team isn't caught off guard.

## Related Articles

- [Using KompWatch Insights for Sales](./using-insights-for-sales.md)
- [Using KompWatch Insights for Marketing Teams](./using-insights-for-marketing-teams.md)
- [Using KompWatch Insights for Product Teams](./using-insights-for-product-teams.md)
- [Reading Competitor Job Listing Signals](./reading-competitor-job-listing-signals.md)
- [Integrations and Notifications](./integrations-and-notifications.md)
- [Change Severity Levels](./change-severity-levels.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
