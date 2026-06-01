# Monitoring Competitor Case Studies & Customer Stories

**Why it matters:** A competitor's case study and customer story pages are a real-time window into which customer segments they're winning, which use cases they're prioritizing, and how they're positioning their product to buyers. When a competitor publishes five new case studies in a quarter, all from enterprise fintech companies, that's a strategic signal — not just marketing noise.

---

## What competitor case studies reveal

| Signal | What to watch for |
|---|---|
| **ICP shift** | New logos from industries or company sizes not previously featured |
| **Use-case emphasis** | New ROI metrics, outcomes, or job titles highlighted |
| **Vertical expansion** | Case studies from new geographies or verticals |
| **Product area focus** | Which features or workflows get showcased |
| **Proof point changes** | New benchmark numbers (e.g., "saved 10 hours/week" → "saved 40%") |
| **Partner co-marketing** | Joint case studies with integration partners |

---

## Pages worth tracking

Most SaaS companies consolidate customer evidence on a few canonical pages:

- `/customers` or `/case-studies` — the main gallery
- `/customers/{company-slug}` — individual story pages (add a few key logos you care about)
- `/results` or `/outcomes` — ROI-focused proof
- `/reviews` — sometimes an internal review aggregator
- Blog with tag `customer-story` or `success-story`

Start with the **gallery/index page** — when a competitor adds a new case study, the gallery updates first. You don't need to track every individual story page.

---

## How to set this up in KompWatch

1. **Add the gallery page** as the primary URL (e.g., `https://competitor.com/customers`)
2. **Set the CSS selector** to the container holding the case study cards:
   - Common patterns: `.case-study-grid`, `.customer-logos`, `[data-section="stories"]`, `main ul li`
   - If unsure, use `body` — KompWatch's AI will flag the meaningful changes
3. **Set monitoring frequency** to Daily (Pro) — case studies rarely need hourly tracking
4. **Optional:** Add 2–3 individual story pages for your most direct competitors' marquee customers

---

## What KompWatch detects

When a competitor publishes a new case study, KompWatch will typically detect:

- New card/thumbnail appearing in the gallery
- New company name, logo alt-text, or headline text
- Updated result metrics (e.g., a proof point badge changing)
- New category or filter tag added to the page

The AI digest will flag these as **CONTENT** changes and summarize: *"Competitor added 2 new case studies: one from a healthcare company (featuring workflow automation ROI) and one from a Series B fintech (highlighting compliance use case)."*

---

## Reading the signal

**New logos in your target vertical** → Competitor is actively selling there. Check if their case study angle matches a pitch they'd use against you.

**All new logos from enterprise** → Possible upmarket migration. See also: [Detecting Competitor Upmarket Migration](/docs/faq/detecting-competitor-upmarket-migration.md)

**No new case studies in 6+ months** → Could signal sales slowdown, customer success bandwidth issues, or a product pivot that makes old stories less relevant.

**Sudden burst of case studies** → Often correlates with a product launch, funding round PR push, or analyst review season (Gartner, G2 report cycles tend to prompt these).

---

## Combining with other signals

Case study monitoring pairs well with:

- **Job postings** — if they're hiring "Customer Marketing Manager" and adding case studies fast, they're investing in social proof infrastructure
- **Pricing pages** — new enterprise case studies + enterprise tier addition = upmarket move
- **Press/newsrooms** — case studies released alongside a funding or partnership announcement amplify the strategic intent
- **G2/Capterra** — their curated case studies vs. raw review content can reveal where they have coached customers to speak

---

## Limitations

KompWatch monitors **publicly visible** case study pages. It cannot detect:

- Case studies behind login walls or gated PDFs
- Customer references shared privately in sales calls
- NDA'd customer logos shown only in enterprise decks

For those, your sales team's win/loss interviews are the complementary signal source.

---

## FAQ

**Q: What if the competitor uses a CMS that lazy-loads case studies?**
A: Set your CSS selector to a static container that renders in the initial HTML. If the page is fully JavaScript-rendered, KompWatch's Playwright-based scraper handles it — but contact support if you're seeing blank snapshots on a specific URL.

**Q: Should I track individual customer story pages or just the gallery?**
A: Gallery first. Add individual pages only for your highest-priority competitors and only for their most prominent customers (often the ones featured in their hero section or homepage).

**Q: Can I get alerted only when a case study from a specific industry appears?**
A: Not with a single filter today, but you can use a CSS selector scoped to a specific category tab or filter (e.g., `[data-industry="fintech"]`) if the page supports filtering by URL parameter or renders filtered content in the DOM.

---

*Related: [Monitoring Competitor Social Proof](/docs/faq/monitoring-competitor-social-proof.md) · [Detecting Competitor Upmarket Migration](/docs/faq/detecting-competitor-upmarket-migration.md) · [Which Pages to Monitor Per Competitor](/docs/faq/which-pages-to-monitor-per-competitor.md)*
