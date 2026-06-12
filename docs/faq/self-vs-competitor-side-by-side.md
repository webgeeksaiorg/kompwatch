# How do I track my own site alongside a competitor for side-by-side comparison?

**Short answer:** Add your own domain as a second monitored entry. Both appear in the same digest, letting you see your moves and theirs in the same view.

---

## Why "your site vs. them" is useful

Tracking a competitor alone tells you what *they* changed. Tracking yourself *and* a competitor in the same digest tells you:

- **Whether you've responded** — you shipped a new pricing tier last week; did they react yet?
- **Who moved first** — see the chronological order of changes across both sites
- **Gap analysis in motion** — if they added a feature to their homepage, does your homepage still mention a comparable capability?
- **Launch coordination** — confirm your own announcement pages are live before you check whether a competitor has noticed

This is the "arms race" view of competitive monitoring: not just watching them, but watching the gap between you and them close or widen over time.

---

## How to set it up

1. You should already have a competitor added. If not, go to **Competitors → Add Competitor** and add them first.
2. Go to **Competitors → Add Competitor** again.
3. Enter *your own* domain (e.g., `https://yourcompany.com/pricing`) as the URL.
4. Name it clearly — e.g., **"Our pricing page"** or **"Us — Homepage"** — so it's easy to distinguish in digests.
5. Set a tight CSS selector matching the section you care about (e.g., `.pricing-table`, `#hero`).

Both entries will now be snapshotted on the same cadence and appear in the same weekly (or daily, or real-time) digest, ordered by when changes were detected.

---

## What the digest looks like

In a digest that includes both your site and a competitor's:

- Each entry is labeled by the name you gave it
- Changes are listed chronologically (most recent first)
- AI summaries describe what changed on each site independently
- Severity badges (LOW / MEDIUM / HIGH) apply equally to your changes and theirs

There is no automatic "comparison" or diff *between* the two sites — KompWatch tracks each URL against its own prior snapshot, not against the other URL. The side-by-side value comes from seeing both timelines in one digest.

---

## Starting from a free snapshot

If you used the **free competitor snapshot tool** (no account required) and saw a "Also track YOUR site vs. them" prompt:

1. Click the prompt — it pre-fills the competitor URL you just checked into a sign-up flow
2. Create a free account (or log in)
3. After sign-up, you'll be dropped into **Add Competitor** with the competitor URL already filled in
4. Add the competitor, then add your own site as a second entry
5. Both start monitoring immediately on the Free plan's daily snapshot cadence

**Free plan note:** The Free plan includes 2 competitor slots. "Your site + 1 competitor" fills both slots. To track yourself against *multiple* rivals, upgrade to Pro (10 slots).

---

## Tips

- **Use specific CSS selectors on both sides.** If you track `body` on your own site, every layout tweak and nav change fires an alert. `.pricing-table` or `#features-grid` gives you signal, not noise.
- **Name them symmetrically.** "Us — Pricing" and "Acme — Pricing" makes the digest scannable at a glance.
- **Trigger a manual snapshot after your own launches.** After you ship a page change, go to **Competitors → [Your site] → Trigger Snapshot** to capture it immediately rather than waiting for the next scheduled run.

---

## Related

- [Can I monitor my own website with KompWatch?](./monitoring-your-own-site.md)
- [Manual Snapshot Trigger — Force a Snapshot Now](./manual-snapshot-trigger.md)
- [Which pages to monitor per competitor](./which-pages-to-monitor-per-competitor.md)
- [Plan competitor limit reached — what are my options?](./plan-competitor-limit-reached.md)
- [Understanding your digest](./understanding-your-digest.md)
