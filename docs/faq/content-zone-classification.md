# Content Zone Classification — Understanding Strategic Business Area Labels

Every change KompWatch detects is now automatically labelled with a **content zone** — the strategic business area the change relates to. This is separate from the change type (Pricing, Feature, Content, etc.) and lets you understand *why* a change matters, not just *what* changed.

---

## The Eight Content Zones

| Zone | What it covers | Example signals |
|------|---------------|-----------------|
| **Positioning** | Messaging, value propositions, taglines, homepage copy | Hero headline rewrite, new "why us" section, updated comparison claims |
| **Monetization** | Pricing, plans, packaging, discounts, free tier changes | Price increase, new annual discount, feature moved behind paywall |
| **Product** | Features, capabilities, integrations, API, changelog | New integration listed, feature deprecated, changelog update |
| **Marketing** | Blog content, case studies, resources, social proof | New customer story, report published, award badge added |
| **Talent** | Hiring, team changes, org signals | New job listings, leadership page update, "We're hiring" banner |
| **Legal** | Terms of service, privacy policy, compliance, security | ToS revision, GDPR data processing addendum update |
| **Operations** | Tech stack, status page, infrastructure changes | New CDN notice, status page format change, tech-stack page update |
| **Unknown** | Could not classify with confidence | Rare — appears when the changed content is ambiguous or too sparse |

---

## How Classification Works

After detecting a diff, KompWatch's AI analyzes the changed content in context and assigns the most relevant zone. Classification runs independently of `changeType` — a single page change can have, for example, `changeType: PRICING` and `contentZone: MONETIZATION`, or `changeType: CONTENT` and `contentZone: POSITIONING`.

This separation is intentional: the **change type** tells you what page element changed; the **content zone** tells you what strategic signal it carries.

---

## Where You See Content Zones

- **Dashboard timeline** — each change card shows a color-coded zone badge next to the severity indicator.
- **Competitor detail page** — the Change History tab can be filtered by zone. Click any zone badge to filter to that category.
- **Email digests** — changes are grouped by zone so you can scan your digest by strategic area rather than by competitor or page.
- **Exports** — zone is included as a column in CSV, JSON, and PDF exports.

---

## Filtering by Zone

In **Competitors → [Name] → Change History**, use the **Zone** filter dropdown to focus on specific business areas. Useful examples:

- "Show me only Monetization changes" — track pricing moves across all competitors.
- "Show me only Talent changes" — use hiring signals to gauge competitor growth.
- "Show me only Positioning changes" — monitor messaging shifts ahead of a launch.

You can combine zone filters with severity and confidence filters.

---

## Content Zone vs. Change Type

These two labels answer different questions:

| Label | Question answered | Example |
|-------|------------------|---------|
| **Change Type** | What page element changed? | `PRICING`, `FEATURE`, `CONTENT` |
| **Content Zone** | What strategic area does this affect? | `MONETIZATION`, `PRODUCT`, `POSITIONING` |

A competitor updating their homepage hero copy would typically have:
- `changeType: CONTENT` (it's a copy change)
- `contentZone: POSITIONING` (it's a messaging signal)

A competitor adding a new integration page would typically have:
- `changeType: FEATURE` (new capability listed)
- `contentZone: PRODUCT` (product scope change)

---

## What Does "Unknown" Mean?

The `Unknown` zone appears when the AI cannot classify the changed content with confidence — usually because the diff is too small, the content is in a script tag, or the change is structural (CSS class renamed, attribute updated) with no readable text context. Unknown changes are still stored and visible in your history; they just don't carry a strategic label.

If you see a change classified as Unknown that you believe belongs to a specific zone, use the **Edit Zone** button in the Change History tab to correct it. Your feedback helps improve classification accuracy over time.

---

## Related Articles

- [AI Confidence Scoring — How KompWatch Filters Change Noise](./ai-confidence-scoring.md)
- [Change Severity Levels — What LOW / MEDIUM / HIGH Mean](./change-severity-levels.md)
- [Understanding Your Digest](./understanding-your-digest.md)
- [Reading Competitor Job Listing Signals](./reading-competitor-job-listing-signals.md)
- [Instant Pricing Alerts](./instant-pricing-alerts.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
