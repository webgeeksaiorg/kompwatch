# Can I Monitor a Competitor's Presence on Integration Marketplaces?

Yes. Partner ecosystems and integration marketplaces are high-signal competitive intelligence sources. When a competitor adds a new integration to HubSpot's App Marketplace, Salesforce AppExchange, or Zapier's directory, it reveals:

- Which platforms they're prioritizing for GTM
- What buyer personas they're now pursuing
- Whether they're moving upmarket (Salesforce integrations signal enterprise intent) or defending SMB ground (Zapier, Make)
- How aggressively they're investing in partnerships vs. building native features

## What You Can Monitor

Most major integration marketplaces have publicly accessible listing pages:

| Marketplace | What to track |
|-------------|--------------|
| HubSpot App Marketplace | Feature list, review count, ratings, screenshots, "Works With" tools |
| Salesforce AppExchange | Description, pricing label, number of reviews, compatibility section |
| Slack App Directory | App description, category tags, permissions listed |
| Zapier App Directory | Number of integrations/triggers/actions, popular Zaps |
| Make (Integromat) Catalog | Module count, use case descriptions |
| Pipedrive Marketplace | Description, category, screenshots |
| monday.com Marketplace | Features, pricing tier, app description |
| Microsoft AppSource | Description, categories, "Works With" products |

## Recommended Setup

1. Go to **Competitors → Add Competitor**
2. Add the competitor's marketplace listing URL as a separate entry (name it clearly, e.g. "Acme — HubSpot Listing")
3. Use a CSS selector targeting the description and key metadata:
   - HubSpot: `.app-description, [class*="review-stats"]`
   - Salesforce AppExchange: `[class*="description"], [class*="ReviewSummary"]`
   - Zapier: `.app-page__description, [class*="integration-list"]`
   - For others, start with `main` and refine after reviewing the first snapshot
4. Set monitoring frequency to **Daily** — marketplace updates are infrequent, so hourly snapshots aren't needed

## Key Signals to Watch For

**New integration added** — The competitor appears in a marketplace they weren't in before. A clear GTM or partnership investment signal.

**Review count spike** — A sudden jump in reviews suggests a promotional push: webinar, launch campaign, or an incentivized review request to their customer base.

**Description rewrite** — How they position the integration changes. Often correlates with an ICP shift or a new pricing tier targeting that platform's audience.

**"Works With" section changes** — On HubSpot and Salesforce, the adjacent tools listed reveal which tech stack segments they're embedding into.

**Pricing label change** — "Free" becoming "Paid" (or vice versa) is a competitive signal worth flagging to your sales team.

## Monitoring for New Marketplace Appearances

To detect when a competitor *enters* a new marketplace (rather than tracking an existing listing), monitor the marketplace's category or search results page for their name:

- HubSpot: search results page filtered by competitor name or category
- Zapier: `zapier.com/apps/[competitor-slug]/integrations` — this page appears once they're listed
- G2 integrations tab: `g2.com/products/[slug]/integrations`

These pages update when new listings are created or existing ones are modified.

## Limitations

- Marketplace pages are frequently JavaScript-rendered. KompWatch's headless Chromium handles this automatically — no special settings required. If a page returns empty, see [Monitoring JavaScript SPA Sites →](./monitoring-javascript-spa-sites.md).
- Rating averages update in small increments (e.g., 4.6 → 4.7). This generates Low-severity changes. If this is noise, use a CSS selector that excludes the rating element.
- Private marketplace sections (e.g., Salesforce's partner portal) are not accessible without login. See [Monitoring Login-Required Pages →](./monitoring-login-required-pages.md).
- Some marketplaces (notably HubSpot and Salesforce) use anti-bot protection. If snapshots fail, see [Anti-Bot Protection →](./anti-bot-protection-and-blocked-pages.md).

## Workflow Tip

Track each marketplace listing as a **separate competitor entry** from the competitor's main website. Marketplace listing updates and website updates happen on completely different schedules, and mixing them makes digest reviews harder to triage.

---

*Related: [Monitoring Competitor App Store Listings →](./monitoring-competitor-app-store-listings.md) · [Which Pages to Monitor Per Competitor →](./which-pages-to-monitor-per-competitor.md) · [CSS Selectors →](./css-selectors.md) · [Anti-Bot Protection →](./anti-bot-protection-and-blocked-pages.md) · [Tracking Competitor Funding and Acquisitions →](./tracking-competitor-funding-and-acquisitions.md)*

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
