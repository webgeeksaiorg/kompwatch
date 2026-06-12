# Can I monitor my own website with KompWatch?

**Short answer:** Yes — and it's surprisingly useful.

## Why track your own site?

KompWatch is designed for competitor monitoring, but many teams also add their own site to their tracking list. This lets you:

- **Verify your own deploys** — confirm that a pricing page update or feature announcement went live correctly
- **Track yourself vs. competitors side by side** — see your site and a competitor's site in the same digest, so you can spot where you're falling behind or pulling ahead
- **Catch unintended regressions** — detect if a CMS or CDN change accidentally overwrote your copy or pricing
- **Audit third-party changes** — if your marketing site is managed by an agency, KompWatch alerts you to changes you didn't authorize

## How to set it up

1. Go to **Competitors → Add Competitor**
2. Enter your own domain as the URL (e.g., `https://yoursite.com/pricing`)
3. Set a precise **CSS selector** for the section you care about most (e.g., `.pricing-table`, `#hero h1`)
4. Give it a name like "Our pricing page" to distinguish it from actual competitors

Your own site will appear in digests alongside competitors, clearly labeled by whatever name you give it.

## Plan limits

Your own site counts toward your plan's competitor slot limit:

| Plan | Slots | Your site counts as |
|------|-------|---------------------|
| Free | 2 | 1 of 2 |
| Pro | 10 | 1 of 10 |
| Team | 50 | 1 of 50 |

On the **Free plan**, adding your own site leaves only 1 slot for competitors — consider upgrading to Pro if you want to track both yourself and multiple rivals.

## Tips for best results

- Use a specific CSS selector rather than `body` — changes to navigation or footers will flood your digest with noise
- The **pricing page** and **features/product page** are highest-signal pages to self-monitor
- Set severity threshold to **Medium** or higher for your own site to suppress minor copy tweaks

## Related

- [How to set CSS selectors for better change detection](./css-selectors-for-change-detection.md)
- [Which pages to monitor per competitor](./which-pages-to-monitor-per-competitor.md)
- [Filtering digests by severity](./filtering-digests-by-severity.md)
