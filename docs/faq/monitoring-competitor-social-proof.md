# How Do I Monitor Competitor Social Proof Changes?

Customer logos, testimonials, case studies, and review counts are among the most strategically loaded elements on a competitor's website — and they change more often than people expect. KompWatch can alert you when they do.

## Why Social Proof Changes Are High-Signal

When a competitor updates their social proof section, it usually means one of three things:

1. **They won new logos** — especially if the new logos are recognizable enterprise names or companies you recognize as prospects or customers.
2. **They lost a customer and quietly removed the logo** — churn they don't announce.
3. **They're repositioning** — swapping SMB logos for enterprise ones (upmarket migration), or adding industry-vertical logos to target a new segment (e.g., suddenly featuring healthcare or fintech customers).

Any of these is worth knowing. The third is often the leading indicator for a broader strategy shift.

## What to Watch For

### 1. Logo Walls / Customer Logos Section

Most SaaS homepages and `/customers` pages include a logo grid. Changes to watch:

- **New enterprise logos appearing** → They're winning in a segment you care about
- **Logos of your customers appearing** → You may be in competitive displacement risk
- **SMB logos disappearing** → They're curating toward a larger ICP
- **Logo count growing rapidly** → Accelerating sales velocity (especially after a funding round)

### 2. Case Studies and Customer Stories

The `/customers`, `/case-studies`, or `/stories` pages are goldmines:

- New case study titles reveal which industries or use cases they're investing in
- Metrics mentioned (e.g., "reduced churn by 40%") become part of their competitive narrative
- When they publish a case study featuring a company in your target vertical, expect that to appear in their sales deck within weeks

### 3. G2 / Capterra / Trustpilot Review Counts

If a competitor links to or embeds review counts from third-party review sites, changes in that number are visible in the HTML. A sudden jump in reviews often follows:

- A customer success campaign or NPS push
- A review generation tool being switched on
- A competitive displacement event (new customers, motivated to leave positive reviews)

### 4. Testimonial Quotes and Attribution

Named testimonials ("Jane Smith, VP Engineering at Acme Corp") are detectable. When:

- A familiar company name appears in a testimonial → they've landed that account
- A testimonial from a company you know churned from them disappears → churn signal
- All testimonials suddenly feature "Director" or "VP" titles instead of "founder" or "CEO" → ICP shift toward larger companies

## How to Set Up Social Proof Monitoring in KompWatch

### Option A: Monitor the Homepage Hero or Logo Section

Most social proof appears above the fold or in a clearly labeled section. Use a targeted CSS selector to watch just that area:

```
/* Common selectors — inspect your competitor's page to confirm */
.customer-logos
.logo-wall
[data-section="customers"]
.social-proof
.testimonials
section:has(h2:contains("Trusted by"))
```

If you're unsure of the selector, use `main` as a fallback — you'll catch changes but with more noise.

### Option B: Monitor the /customers or /case-studies Page

Add the customers page as a separate competitor entry:

1. **Add competitor** → URL: `https://competitor.com/customers`
2. **CSS Selector:** `main` or `.case-study-grid`
3. **Name it clearly:** "Acme — Customers Page"

When a new case study is added or removed, KompWatch will flag it and the AI summary will note what changed.

### Option C: Track the Testimonial Section Specifically

If the competitor has a dedicated testimonials section, target it directly:

```
.testimonials
.quotes
[data-block="testimonials"]
```

This reduces noise — you'll only be alerted when quotes or attribution lines change, not when the nav or footer updates.

## Reading Social Proof Changes in Your Digest

When KompWatch detects a change in a social proof section, the AI summary will describe:

- What was added or removed
- Whether it appears to be a new logo, testimonial, or case study
- The apparent significance (new enterprise logos vs. minor copy edits)

If you see a competitor add a logo of one of your accounts or a prospect you're actively working, treat it as a competitive alert worth sharing with your sales team immediately.

See [Sharing Digests With Your Team →](./sharing-digests-with-your-team.md) for how to route specific change types to the right people.

## What KompWatch Can't Do Here

- **Verify whether the logo represents an active customer** — logos sometimes persist after churn
- **Access gated customer portals or login-protected case study libraries**
- **Track off-site review platforms** (G2, Capterra) directly — only the count or badges embedded on their public website
- **Detect steganographic or image-only logo changes** without HTML text changes — we detect DOM changes, not pixel-level image diffs

For image-heavy logo walls where the logos are pure images with no alt text, the change may not register unless the competitor adds or removes an `<img>` tag. Encourage checking the competitor page directly if you know a new logo should have appeared.

## Putting It Together

Social proof monitoring is most valuable when combined with other signal types:

| Signal | What It Confirms |
|--------|-----------------|
| New enterprise logos + pricing page restructured | Upmarket migration underway |
| New logos from your active prospects | Competitive risk in pipeline |
| Case studies in a new vertical | ICP expansion to your segment |
| Testimonials shifting to senior titles | Sales motion moving up the org chart |
| Logo removed quietly | Possible churn from their base |

Pair this with job listing monitoring (are they hiring Customer Success Managers for that vertical?) and pricing page monitoring for the full picture.

---

*Related: [How Do I Know If a Competitor Is Moving Upmarket? →](./detecting-competitor-upmarket-migration.md) · [Monitoring Competitor Pricing Pages →](./monitoring-competitor-pricing-pages.md) · [Which Pages to Monitor Per Competitor →](./which-pages-to-monitor-per-competitor.md) · [Monitoring Multiple Pages Per Competitor →](./monitoring-multiple-pages-per-competitor.md) · [Using Insights for Sales Teams →](./using-insights-for-sales.md)*

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
