# How to Add a Competitor

CompeteWatch monitors competitor websites and alerts you to changes in pricing, features, and content.

## Steps

1. Log in to your CompeteWatch dashboard at [kompwatch.com/dashboard](https://kompwatch.com/dashboard).
2. Click **Add Competitor** in the top-right corner.
3. Fill in:
   - **Name** — a label for your own reference (e.g. "Acme Corp")
   - **URL** — the page you want to monitor (e.g. `https://acmecorp.com/pricing`)
   - **CSS Selector** *(optional)* — target a specific section of the page. Leave blank to monitor the whole page. Example: `.pricing-table` or `#features`
4. Click **Save**. CompeteWatch will take an initial snapshot within the next few minutes.

## What Gets Tracked

When you add a competitor, CompeteWatch automatically monitors five categories:

| Category | What it watches | Default |
|----------|----------------|---------|
| **Pricing** | Price changes, plan restructures, trial offers | On |
| **Features** | Product capability changes on features/main pages | On |
| **Blog** | New posts signalling product launches or strategy shifts | On |
| **Jobs** | Hiring signals — new roles often predict roadmap moves | On |
| **Tech** | Changes in the technology stack (e.g. added Intercom, switched analytics) | Off |

You'll see colored badges for each enabled category on your competitor list and detail page. Strikethrough badges indicate a disabled category. Tech detection is off by default because it generates more noise than the other categories — enable it if you want early signals about competitor infrastructure changes.

## Tips

- **Be specific with selectors.** Monitoring just the pricing table reduces noise from navigation/footer changes.
- **Monitor key pages.** Good candidates: `/pricing`, `/features`, homepage.
- **Check your plan limits.** Free plan supports 2 competitors; Pro supports 10; Team supports 50.

## Plan Limits

| Plan | Max Competitors |
|------|----------------|
| Free | 2 |
| Pro  | 10 |
| Team | 50 |

Need more? [Upgrade your plan →](https://kompwatch.com/pricing)

---
*If this didn't help, reply to this email and a team member will follow up within 24 hours.*
