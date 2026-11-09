# Should I Monitor My Competitors' Alternatives and Compare Pages?

**Short answer:** Yes — and most teams don't. Competitor `/alternatives`, `/compare`, and `/vs/[your-product]` pages are among the highest-signal pages to watch because changes there are deliberate positioning moves, not routine copy updates.

---

## Why These Pages Matter

When a competitor updates their pricing page or changelog, it reflects something that already happened. When they update their `/alternatives` or `/vs/your-company` page, it reflects something they *decided* — they're actively messaging against you.

Common changes that show up on these pages:

| Change type | What it signals |
|---|---|
| New "KompWatch alternative" page appears | They see you as a direct threat worth responding to |
| Their comparison table adds new rows | They're repositioning around features you just released (or they just released) |
| Your product's listed price changes in their table | They may be misrepresenting you — worth verifying your own listing |
| Competitor removes a comparison feature from the table | The feature gap closed (theirs or yours) |
| Tone shift from neutral to aggressive | Sales conversations are heating up — their reps may be saying the same things |
| SEO title/meta rewritten | They're targeting new search terms around the comparison |

---

## How to Set It Up in KompWatch

1. **Find their compare page.** Common paths: `/compare`, `/alternatives`, `/vs/{your-product-slug}`, `/vs-alternatives`. Some competitors have one page per competitor; others have a single alternatives listing.

2. **Add the URL to KompWatch** the same way you'd add their pricing page — as a separate tracked URL for the same competitor entry.

3. **Use a scoped CSS selector.** Compare pages often have header/footer/nav that changes frequently. Target the main content area: `main`, `.comparison-table`, `#alternatives-content`, or similar. This cuts out layout noise and keeps alerts focused on positioning changes.

4. **Set severity threshold to MEDIUM+.** Minor wording tweaks happen often on these pages. You want to catch the substantive repositioning moves (table restructures, new feature rows, changed claims), not every comma.

---

## What to Do When You Get an Alert

**If they changed how they describe your product:**
- Verify that the listed information is accurate. If they're misrepresenting your pricing or features, you can file a takedown request or update your own SEO presence.
- Share the diff with your sales team. If their reps are using the updated language, yours should know.

**If they restructured the comparison table:**
- This usually means they shipped something or are repositioning to cover a weakness. Check their product and pricing pages for corresponding changes.

**If a new page appeared targeting you specifically:**
- This is a strong signal you're showing up in their deals. Their sales team is likely using it. Your team needs a rebuttal.
- Consider creating your own `/vs/{competitor}` page if you haven't already.

---

## The "They're Watching You Too" Dynamic

Competitors monitor these pages on your site the same way you monitor theirs. If you update your own `/vs/[competitor]` or `/alternatives` pages, expect them to notice and respond. That response will show up in your KompWatch digest.

This is actually useful: it gives you a feedback loop on how competitors interpret your positioning changes.

---

## Related FAQs

- [Which Pages Should I Monitor for Each Competitor?](./which-pages-to-monitor-per-competitor.md)
- [How Do I Monitor a Competitor's Pricing Page?](./monitoring-competitor-pricing-pages.md)
- [Detecting Competitor Repositioning](./detecting-competitor-repositioning.md)
- [How to Respond to a Competitor Messaging Change](./how-to-respond-to-competitor-messaging-change.md)
- [Monitoring Multiple Pages Per Competitor](./monitoring-multiple-pages-per-competitor.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we respond within 24 hours.*
