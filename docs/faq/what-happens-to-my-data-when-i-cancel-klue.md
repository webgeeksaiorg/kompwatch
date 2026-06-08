# What Happens to My Data When I Cancel Klue?

If you're evaluating a move away from Klue — whether at renewal, after the May 2026 layoffs, or simply because your needs have changed — here's what you need to know about your data before you cancel.

---

## Your Data During the Contract Term

While your Klue contract is active, nothing changes. Your competitor profiles, battlecards, curated intel, win/loss data, and change history remain fully accessible. Canceling a Klue contract means letting it lapse at renewal (or requesting early termination) — it doesn't trigger immediate data deletion.

---

## What Klue Does NOT Have: A Data Export API

Klue does not expose a public data-export API. There is no "export all" button that produces a portable file of your historical monitoring data, battlecard content, or curated intelligence corpus.

**What this means in practice:**

- Your **competitor URL list** can be copied manually — open each Competitor Profile, copy the URL. For a typical 10–20 competitor portfolio, this takes about 5 minutes.
- Your **battlecard content** (custom-written sections, curated summaries, win/loss annotations) is not exportable in a structured format. You'll need to copy it manually — text, screenshots, or PDF exports of individual cards.
- Your **monitoring history** (detected changes, timeline of events) is accessible in the UI but has no bulk-export function.
- Your **win/loss data**, if you used Klue for that workflow, is similarly not portably exportable.

**The practical advice:** do your content export *before* canceling, while your account is still active.

---

## What to Export Before You Cancel

Work through this list before your contract ends or you request early termination:

1. **Competitor URL list** — copy all monitored URLs, including which specific pages you tracked (pricing, features, blog, careers, changelog). A simple spreadsheet works.
2. **Battlecard content** — screenshot or copy the custom narrative sections of your most-used battlecards. Focus on the cards actively used in sales.
3. **Win/loss themes** — if you captured structured win/loss patterns in Klue, export or screenshot the summary views.
4. **Slack/Teams notification history** — if Klue was pushing alerts to Slack or Teams, those are already in your chat history and don't need a separate export.
5. **Integration config** — note which Salesforce or CRM fields were mapped to Klue data, so you know what manual re-wiring (if any) your CRM workflow needs.

---

## What KompWatch Can and Can't Import

KompWatch does not have a Klue importer. There's no file format to upload. Setup starts fresh.

**What carries over easily:**
- Your competitor URL list — paste URLs into KompWatch one at a time or use the bulk import (Settings → Competitors → Bulk Import). For 10 competitors, setup takes under 15 minutes.
- Monitoring preferences — you'll re-configure which page sections to track using CSS selectors (e.g. `.pricing-table`, `#features`).

**What doesn't carry over:**
- Historical monitoring data from Klue stays in Klue. KompWatch's snapshot history starts from your first KompWatch snapshot.
- Battlecard content — KompWatch doesn't have a battlecard CMS in the current release. One-click battlecard export is on the roadmap. See the [product changelog](./product-changelog.md) for status.
- Win/loss workflows — KompWatch doesn't have win/loss tracking.

---

## Parallel Running (Recommended Approach)

The cleanest migration path is to run KompWatch alongside Klue during your evaluation window, rather than migrating on a deadline:

1. **Sign up for KompWatch free** — no credit card, 2 competitors.
2. **Add your 2 highest-priority competitors** and let snapshot cycles run for 48 hours.
3. **Compare digest quality** against what Klue surfaces for the same competitors.
4. **Upgrade to Pro ($49/mo)** to add your full competitor portfolio before the Klue renewal date.
5. **Export Klue content** (battlecards, URLs) while the account is still active.
6. **Let the Klue contract lapse** at renewal, or request early termination if you're mid-contract.

This approach gives you real data before the renewal decision and removes the time pressure of migrating after cancellation.

---

## The Migration Reimbursement Offer

If your Klue contract carries an early-termination fee, KompWatch will reimburse it (up to $500) once you're on a Pro or Team plan. See [Klue Migration Reimbursement](./klue-migration-reimbursement.md) for details.

---

## Related Articles

- [Switching from Klue to KompWatch](./switching-from-klue.md)
- [Klue Migration Reimbursement](./klue-migration-reimbursement.md)
- [Why Is KompWatch 34× Cheaper Than Klue?](./why-klue-costs-34x-more.md)
- [What Does KompWatch Track?](./what-does-kompwatch-track.md)
- [Exporting Your KompWatch Data](./exporting-your-data.md)

---

*Questions about migrating from Klue? Email [support@kompwatch.com](mailto:support@kompwatch.com) and a team member will respond within 24 hours.*
