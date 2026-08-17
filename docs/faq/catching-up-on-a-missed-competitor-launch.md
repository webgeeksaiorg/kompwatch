# How Do I Catch Up on a Competitor Launch I Missed?

**Short answer:** If you find out about a competitor launch after the fact — a Product Hunt hunt that already ran, a press release you saw a week late, a conference announcement you missed — you can reconstruct what changed using KompWatch's snapshot history (if the competitor was already tracked) or the Internet Archive Wayback Machine (if they weren't). Here's the full playbook.

---

## Scenario A: The Competitor Was Already in KompWatch

If you were already monitoring the competitor before their launch, KompWatch has a complete before/after change record.

### Step 1: Open the competitor's change timeline

Go to **Competitors → [Competitor Name] → Change History**.

Set the date range to the week before the launch date through today. You'll see every change KompWatch detected on their monitored pages during that window.

### Step 2: Look for the launch-day change cluster

Launches generate a predictable cluster: multiple HIGH or CRITICAL severity changes in a 24–48 hour window. This cluster is your launch-day fingerprint — even if you didn't see the alerts in real time, they're all timestamped in the history.

Sort by **Severity (High → Low)** within your date range to surface the most significant changes at the top.

### Step 3: Reconstruct the launch sequence

Work through the changes chronologically to understand the launch arc:

| Day | Typical changes |
|---|---|
| **Day 0 (launch day)** | Hero copy rewrites, pricing page updates, new tier added, "Product Hunt of the Day" banner |
| **Day 1–3** | Feature grid additions (answering buyer questions from PH comments), changelog entry, social proof zone activated |
| **Days 4–14** | G2/Capterra badge appears, case study added, pricing stabilizes (or discount removed) |
| **Days 15–30** | Follow-on blog content, integration pages updated, job listings for new hires |

Each KompWatch change entry includes a **diff view** and an **AI summary** — use these to quickly understand what changed without reading full page diffs line by line.

### Step 4: Build a post-launch brief

With the full change history in hand, write a 1-page competitive brief covering:

1. **What they launched** — core capability or product change
2. **How they positioned it** — hero copy, category terms, key claims
3. **What they priced it at** — launch pricing and any changes since
4. **What they added post-launch** — feature gaps they've been filling based on buyer feedback
5. **What's still missing** — capabilities not yet on their features page that you offer
6. **Sales implication** — one sentence on how reps should handle this competitor coming up in active deals

Share via Slack or email to the sales team with a link to the KompWatch change history for reference.

---

## Scenario B: The Competitor Was NOT in KompWatch (You Find Out Late)

If the competitor wasn't being monitored, you don't have a KompWatch history. You can still reconstruct the pre-launch baseline using public tools.

### Step 1: Add the competitor to KompWatch immediately

Go to **Competitors → Add Competitor** and add their homepage, pricing page, features page, and changelog. KompWatch takes a baseline snapshot immediately — all future changes will be diff'd from this point.

You won't get the launch window changes retroactively, but you start capturing everything from today forward.

### Step 2: Use the Internet Archive Wayback Machine for the before/after

Go to [web.archive.org](https://web.archive.org) and enter the competitor's URL.

Look for:
- **Snapshots from 1–2 weeks before the launch date** — this is your pre-launch baseline
- **Snapshots from launch day** — the Wayback Machine's crawlers often capture popular sites on Product Hunt launch days within 24–48 hours
- **Snapshots from 1–2 weeks post-launch** — shows what stabilized after the launch scramble

Compare the pre-launch and post-launch snapshots manually. The Wayback Machine's own diff view (click **Changes** on a URL timeline) can highlight structural differences, though it's less sophisticated than KompWatch's AI-classified diffs.

**What to look for:**
- Did pricing change? Did a new tier appear?
- What was the hero headline before vs. now?
- What features were on the features page before vs. now?
- When did the first G2/Capterra badge appear?

### Step 3: Check additional public sources for launch context

| Source | What you'll find |
|---|---|
| Product Hunt listing | Tagline, description, launch day screenshots, early reviews and upvote count |
| LinkedIn company page | Launch announcement posts and team posts from launch week |
| Twitter/X | Real-time launch commentary, product screenshots shared by team |
| Crunchbase news | Any funding or partnership announcement tied to the launch |
| G2/Capterra reviews | Reviews posted in the 30 days after launch — often include feature comparisons |

These context sources, combined with the Wayback Machine baseline, give you a reasonable reconstruction of the launch window without KompWatch history.

---

## Scenario C: You Heard Rumors of a Future Launch — Getting Ahead of It

If you think a competitor is about to launch (PH "upcoming" listing, LinkedIn teaser, conference presence), set up monitoring before the launch day:

1. **Add the competitor to KompWatch now** — captures the pre-launch baseline immediately
2. **Set monitoring to Pro (6-hour) or Team (1-hour)** for the launch window
3. **Set up Slack routing** for HIGH/CRITICAL changes from this competitor
4. **Check their Product Hunt "upcoming" listing** — add any URLs they've shared in their listing

When launch day hits, you'll have real-time alerts rather than a post-hoc reconstruction.

---

## How Much of the Launch Window Can You Realistically Reconstruct?

| You missed the launch by... | What you can recover |
|---|---|
| **1–3 days** | 90%+ of changes still visible in current site vs. Wayback Machine. Add to KompWatch immediately. |
| **1–2 weeks** | Most structural changes visible. Hero copy may have stabilized away from day-0 state. Pricing may have changed from launch. |
| **1–2 months** | Core repositioning is visible; launch-day specifics (e.g., 48-hour pricing) are gone. Current site state is likely representative of the "post-launch" stable version. |
| **3+ months** | Treat as a normal competitive review rather than a launch reconstruction. Use Wayback Machine to benchmark their pre-launch vs. current state. |

---

## Related FAQs

- [How to monitor a competitor's Product Hunt launch](./how-to-monitor-a-competitor-product-hunt-launch.md)
- [Monitoring competitor product launches](./monitoring-competitor-product-launches.md)
- [When to update a battlecard after a competitor launch](./when-to-update-battlecard-after-competitor-launch.md)
- [Snapshot history and data retention](./snapshot-history-and-data-retention.md)
- [Which pages to monitor per competitor](./which-pages-to-monitor-per-competitor.md)
- [How fast will I know about a competitor change](./how-fast-will-i-know-about-a-competitor-change.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
