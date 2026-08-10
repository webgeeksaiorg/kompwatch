# How to Run a Bi-Weekly Competitive Review With KompWatch

If you're not checking competitor changes on an ad-hoc basis — you're right not to. Ad-hoc reviews get skipped under deadline pressure and lead to exactly the problem CI is supposed to prevent: showing up to a sales call or product meeting not knowing what your competitors just did.

A 15-minute bi-weekly standing review is the minimum effective dose for most SaaS teams. This article explains how to structure one using KompWatch.

---

## Why Bi-Weekly (Not Weekly or Monthly)?

**Monthly is too slow.** Competitors can launch a new free tier, kill a pricing tier, or change their hero positioning in the 4 weeks between your reviews. You find out after the deal is already lost.

**Daily or weekly can create fatigue.** If every Monday morning starts with 45 minutes of digest triage, people start skipping it. The meeting gets cancelled, then indefinitely deferred.

**Bi-weekly is the cadence that survives contact with real work schedules.** Two Tuesdays or Thursdays per month, 15 minutes blocked, standing agenda. Every cycle you're caught up before anyone asks.

---

## Meeting Structure (15 Minutes)

### Before the Meeting (2 min, whoever runs CI)

Pull up your KompWatch digest and filter by:
- **Severity:** Medium and above
- **Confidence:** 70%+
- **Date range:** Since last review

Export or paste the top 3–5 changes into your meeting doc or Slack thread in advance. You want attendees to have read them before the meeting starts.

### During the Meeting

| Time | Agenda item |
|------|-------------|
| 0–5 min | **Change roundup** — Walk through the 3–5 pre-pulled changes. Each person says whether it changes anything for their work (sales talk track, roadmap, messaging). If it doesn't, move on. No debate. |
| 5–10 min | **Battlecard / talk-track updates** — If a change warrants updating a battlecard or one-pager, assign it to one person with a 48h deadline. Do not try to update it in the meeting. |
| 10–15 min | **Signal watch** — One person calls out any early-stage signals from the change history: job postings that suggest a new product area, a help center article that didn't exist last cycle, a changelog entry worth flagging. This is optional — skip it if nothing interesting is in history. |

### What Doesn't Happen in This Meeting

- No strategy debates sparked by a change ("should we add a free tier too?") — that's a separate agenda item for the right room
- No deep-dive into the raw diff — if someone needs to understand a change in detail, they read the KompWatch summary and the linked page after the meeting
- No speculative discussion about changes you haven't verified — if it's below 70% confidence, mention it in passing or skip it entirely until confirmed

---

## Who Should Attend?

For most teams, the right attendees are:

| Role | Reason |
|------|--------|
| **Product manager** | Competitor moves may affect roadmap priority or release timing |
| **Sales lead or AE** | Talk tracks need updating before the next demo cycle |
| **Marketing lead** | Positioning adjustments, comparison page updates |

Keep it small. If the meeting grows to 8 people, it stops working. If someone can get value from reading the Slack summary afterward, they don't need to attend.

---

## Setting Up KompWatch for the Review

### 1. Create a Review Digest View

In KompWatch, go to **Digests → New Digest View** and configure:
- **Name:** Competitive Review (bi-weekly)
- **Competitors:** All active (or just your top 3–5 primary competitors)
- **Severity filter:** Medium+
- **Confidence filter:** 70%+
- **Date range:** Rolling 14 days

Bookmark this URL. Share it with your attendees as the review prep link.

### 2. Use the Digest Email as Your Pre-Read

Configure your digest to send the morning of your review. In **Settings → Digest**, set your schedule to match your bi-weekly cadence. The email lands in inboxes before the meeting, so you're not starting cold.

### 3. Assign a CI Owner

One person owns the review prep — pulling the digest, writing 1–2 sentence summaries for each change, and dropping them in a shared doc or Slack message 30 minutes before the meeting. This role should rotate if your team is small, or stay fixed if one person is clearly most engaged with CI.

Without a CI owner, the meeting slips. It's not a culture problem — it's an ownership problem.

---

## What a Good Review Looks Like

**10 minutes before the meeting, in Slack:**

> "Bi-weekly CI review prep: Here are the 4 changes worth discussing today.
>
> 1. **Klue (pricing page, confidence 89%)** — Removed the $500/seat minimum language. May be testing lower entry points or removing a barrier they've heard from us in losses. [@Sales lead] — worth a callout before your Thursday demo cycle.
>
> 2. **Crayon/SoftwareOne (features page, confidence 76%)** — Added 'Salesforce native' badge. Third time they've mentioned this in 2 weeks (prior changelog entry + blog). Position is hardening.
>
> 3. **Kompyte (homepage, confidence 81%)** — Changed hero from 'for sales teams' to 'for revenue teams'. Broadening ICP signal.
>
> 4. **Glimpse (alternatives page, confidence 67%)** — Low confidence, transient possibly. But they added KompWatch to their alternatives page for the first time. Watching."

In 15 minutes, this becomes an actionable set of decisions — not a digest of raw diffs.

---

## When a Change Warrants Immediate Action (Outside the Review)

Don't wait for the bi-weekly meeting if:

- A competitor drops or adds a pricing tier
- A competitor launches a free plan or eliminates their free plan
- A competitor explicitly targets you by name on their alternatives or comparison page
- A competitor's job postings suggest an imminent product expansion into your core feature

KompWatch instant alerts (available on Pro) handle this. Configure them for your top 3 competitors' pricing pages with severity set to High+ and confidence at 80%+. These fire immediately via Slack or email — they don't wait for the review cycle.

---

## Common Mistakes

**Running the review monthly instead of bi-weekly.** The gap is too long. Cut to bi-weekly or accept that you'll occasionally be surprised in a bad way.

**Not pre-reading the digest.** If everyone reads the changes in real-time during the meeting, you spend 10 minutes reading and 5 minutes actually reacting. Invert this.

**Trying to solve for changes in the meeting.** The meeting is for triage and assignment, not analysis. If a change needs a full response (a rebuttal doc, a battlecard update, a positioning rewrite), that happens outside this meeting.

**Monitoring too many competitors.** If you're tracking 15 competitors, your digest is wall-to-wall noise. Focus on 3–5 primary competitors and 2–3 secondary ones. The bi-weekly review only works if the signal is curated before the meeting starts.

---

## Template: Bi-Weekly CI Review Agenda

```
Bi-Weekly CI Review — [Date]
KompWatch digest: [link]

1. Change roundup (5 min)
   - [Change 1] — [one sentence + owner if action needed]
   - [Change 2] — ...
   - [Change 3] — ...

2. Battlecard/talk-track updates (5 min)
   - Action: [task] → [owner] by [date]

3. Signal watch (5 min)
   - Anything from history or job boards worth flagging?

Next review: [Date]
```

---

## Related Articles

- [How to Share CI Insights With Your Sales Team](./how-to-share-ci-with-sales-team.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [Which Pages to Monitor Per Competitor](./which-pages-to-monitor-per-competitor.md)
- [Filtering Digests by Severity](./filtering-digests-by-severity.md)
- [Creating Sales Battlecards From KompWatch Alerts](./creating-sales-battlecards.md)
- [How to Keep Battlecards Up to Date](./how-to-keep-battlecards-up-to-date.md)

---

*Questions about setting up your review workflow? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will follow up within 24 hours.*
