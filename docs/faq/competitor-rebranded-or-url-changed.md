# My Competitor Changed Their URL or Rebranded — What Do I Do?

**Short answer:** Update the URL on the competitor's settings page. Your snapshot history stays intact. Change detection resumes from the first new snapshot at the updated URL.

---

## Editing a competitor's URL

1. Open **Competitors** in the KompWatch dashboard.
2. Click the competitor name to open its settings.
3. Update the **URL** field with the new address (e.g. from `crayon.co/pricing` to `softwareone.com/competitive-intelligence/pricing`).
4. Review the **CSS selector** — after a rebrand the page structure often changes too. If you had `.pricing-table`, check whether that class still exists on the new page. When in doubt, reset to `body` and refine once you receive the first snapshot.
5. Save. A fresh snapshot kicks off immediately — you'll see it in the competitor's history within seconds.

**Your old snapshots are not deleted.** They remain in your history, attached to the previous URL. New snapshots at the updated URL start a fresh baseline — the first new snapshot establishes the comparison point, so change detection kicks in from the second snapshot onward.

---

## Why this matters

Rebrands are one of the highest-signal competitive events: a company that renames, redomains, or reorganizes its site is usually mid-repositioning. The weeks around a rebrand are when pricing tiers get restructured, feature messaging shifts, and old product names get quietly retired.

If you miss the URL update in KompWatch, your monitoring goes dark exactly when you most want it on.

---

## Common rebrand scenarios

| Scenario | What to do |
|---|---|
| Same company, new domain (e.g. `crayon.co` → `softwareone.com`) | Update the URL; review CSS selectors |
| Acquired and folded into parent brand | Update URL; consider also monitoring the parent's product page |
| Product renamed, URL slug changed | Update the URL for each affected page |
| Redirect in place (old URL 301s to new) | KompWatch follows redirects — but update the URL so your history label stays accurate |

---

## Getting notified early

The earlier you catch a rebrand, the better. Two ways to stay ahead:

- **Monitor the "About" or "Newsroom" page** — Rebrands are typically announced here before the site fully flips over. Add this as a second URL for the competitor and set a LOW severity threshold.
- **Watch for job listing signals** — A burst of "Brand Designer" or "Marketing Director" roles often precedes a rebrand by several months. See [Reading Competitor Job Listing Signals](./reading-competitor-job-listing-signals.md).

---

## Frequently asked questions

**"Can I rename the competitor in KompWatch to match their new brand?"** — Yes. Click the competitor name in settings and edit the display name. This is cosmetic and does not affect monitoring.

**"What if the competitor merged with another company I'm already tracking?"** — Keep both entries until you confirm the product lines have been consolidated. Once merged, you can deactivate the old entry (toggle Active off) rather than deleting it, so history is preserved.

**"The old URL now redirects — should I update it anyway?"** — Yes. Following a redirect works, but updating the stored URL means your snapshot labels and digest links point to the live destination, not an interim redirect that could change again.

---

Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and include the competitor name and new URL. We can help you verify the selector still targets the right section after the rebrand.
