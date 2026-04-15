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

## Adding Multiple Competitors at Once (Bulk Import)

If you have several competitors to add, use the **bulk import** option instead of adding them one at a time.

1. On the **Competitors page**, click **"Import multiple competitors"** (below the Add Competitor button).
2. Paste one competitor per line in the format:
   ```
   Company Name, https://example.com
   Widgetly, https://widgetly.io
   Rival Inc, https://rival.com
   ```
3. Click **Import**. CompeteWatch will show how many were added and flag any skipped entries with the reason.

**Format notes:**
- Comma-separated (`Name, URL`) and tab-separated are both accepted.
- Lines starting with `#` are treated as comments and ignored.
- Up to 50 entries per import.
- Duplicate URLs (already being tracked) are automatically skipped.
- Plan limits apply — the form shows how many slots you have remaining.

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
