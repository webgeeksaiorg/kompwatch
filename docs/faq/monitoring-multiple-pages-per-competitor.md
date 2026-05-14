# Monitoring Multiple Pages for the Same Competitor

Each KompWatch competitor entry tracks one URL. To monitor multiple pages for a single company — their pricing page, features page, and blog, for example — add each page as a separate entry with the same competitor name.

## Recommended Setup

For thorough competitor coverage, we recommend tracking 3–5 high-signal pages per company:

| Page to track | Why it matters |
|---|---|
| `/pricing` | Price changes, plan restructures, trial offer changes |
| `/features` (or main landing page) | New capabilities, messaging pivots, positioning shifts |
| `/blog` or `/changelog` | Product launches, strategic announcements |
| `/careers` or `/jobs` | Hiring signals that predict roadmap moves |
| Homepage | Brand messaging, major redesigns, hero copy changes |

Each of these counts as one competitor slot on your plan.

## How to Add Multiple Pages for One Company

1. Go to [kompwatch.com/competitors](https://kompwatch.com/competitors) and click **Add Competitor**.
2. Enter the competitor name (e.g. "Acme Corp — Pricing") and the specific URL (e.g. `https://acme.com/pricing`).
3. Repeat for each page you want to track.

Use a naming convention like `Acme Corp — Pricing`, `Acme Corp — Features`, `Acme Corp — Blog` so they're easy to identify in your dashboard and digest emails.

## Plan Limits and Slot Strategy

Each page entry uses one competitor slot:

| Plan | Slots | Suggested use |
|---|---|---|
| Free (2 slots) | 2 pages total | Pricing and homepage of your top competitor |
| Pro (10 slots) | 10 pages total | 3–4 pages across 2–3 competitors |
| Team (50 slots) | 50 pages total | Full coverage of 5–10 competitors |

If you're monitoring several pages for one company, **Pro or Team** gives you the room to cover a full competitor set properly.

## When to Use a CSS Selector Instead

If a competitor keeps all key information on one long page (pricing, features, and FAQs all on `/`), you can use a **CSS selector** to target a specific section rather than adding multiple entries for the same URL.

For example:
- `#pricing` — targets just the pricing section
- `.features-grid` — targets the features list
- `[data-section="plans"]` — targets a data-attributed section

Set the selector in **Settings** when adding or editing a competitor. The selector limits what KompWatch diffs — changes outside the target section won't trigger alerts. See the [CSS selectors FAQ](css-selectors.md) for examples.

## Tip: Start Narrow, Then Expand

If you're on the Free plan and want to monitor one competitor well, track their pricing page as entry 1 and their features or homepage as entry 2. Upgrade to Pro when you're ready to cover more companies or more pages per company.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
