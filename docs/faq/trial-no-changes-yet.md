# Why Haven't I Seen Any Changes Yet? (Trial Troubleshooting)

You signed up, added a competitor, and… nothing. No changes detected, no digest, no alerts. Here's what's usually happening and how to fix it fast.

## The Most Common Reasons

### 1. Your competitor's site hasn't changed yet

Competitor websites don't change every hour. Pricing pages, feature lists, and homepages can go weeks without a meaningful update. This is normal — KompWatch is watching in the background. The first change alert will arrive as soon as something shifts.

**What to do:** Add 3–5 competitors instead of just 1. The more you monitor, the more likely you'll see something move in your first week.

### 2. You're monitoring the wrong page

If you added a competitor's homepage but their pricing or product announcements live on `/pricing` or `/product`, you'll miss the changes that matter most.

**What to do:** Add the specific pages most likely to change:
- `/pricing` — catches price increases, tier restructuring, trial offer changes
- `/features` or `/product` — catches capability announcements
- `/changelog` or `/blog` — catches launch announcements and releases
- Their home page (for positioning and messaging changes)

You can monitor multiple pages per competitor. See [Which Pages to Monitor Per Competitor →](./which-pages-to-monitor-per-competitor.md)

### 3. No snapshot has run yet

On the **Pro trial**, snapshots run every 6 hours. On **Team**, hourly. Your first snapshot might not have run yet if you signed up less than 6 hours ago.

**What to do:** Go to **Competitors → [competitor name]** and click **Refresh snapshot now** to trigger a manual snapshot immediately. The next scheduled snapshot will then compare against this baseline.

### 4. The first snapshot is your baseline — changes are detected on the *second* run

KompWatch takes a baseline snapshot when you first add a competitor. Changes are only detected by comparing that baseline against the *next* snapshot. So even if the site changes in between your signup and your second snapshot, it will be caught on the second run.

This is by design — it prevents false positives from treating the entire site as a "change."

### 5. Digests are batched — check your email settings

If you're on Pro trial, digests are sent daily (not in real-time). Even if a change was detected, you might not receive the email until the next digest cycle.

**What to do:**
- Go to **Settings → Digest Frequency** and check your scheduled send time
- Check your spam folder — search for `@kompwatch.com` or `@resend.dev`
- Add `digest@kompwatch.com` to your contacts or safe-senders list

See [My Digest Didn't Arrive →](./digest-not-arriving.md) for a full troubleshooting checklist.

### 6. You added a competitor but it's showing an error

If the competitor card shows a red warning or "Snapshot failed" state, the scraper couldn't reach the page. Common causes:
- The site blocks headless browsers (aggressive bot protection)
- The URL requires login
- The URL has a typo

**What to do:** See [Snapshot Errors and Warning States →](./snapshot-errors-and-warning-states.md) and [Anti-Bot Protection and Blocked Pages →](./anti-bot-protection-and-blocked-pages.md)

---

## Quick Setup Checklist

If you're in your trial and haven't seen a change yet, run through this:

- [ ] Added 3+ competitors (not just 1)
- [ ] Monitoring specific sub-pages, not just homepages (`/pricing`, `/features`, `/changelog`)
- [ ] Triggered a manual snapshot refresh on each competitor
- [ ] Waited at least 6 hours for the first comparison snapshot to run
- [ ] Checked spam folder for digest emails
- [ ] No red error states on any competitor cards

If all boxes are checked and you still haven't seen anything after 48 hours, email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll take a look at your account.

---

## "I Saw One Change — But It Seems Trivial"

KompWatch's AI filters out noise like cookie banners, footer link changes, and CMS-injected timestamps. If a LOW-severity change came through, it means the AI determined it was real but minor.

You can raise your minimum severity threshold:
- Go to **Settings → Notifications → Minimum severity**
- Set to **MEDIUM** or **HIGH** to suppress LOW-severity alerts
- Or use **Digest filters** to only see what you care about

See [Alert Relevance Scoring →](./alert-relevance-scoring.md) and [Filtering Digests by Severity →](./filtering-digests-by-severity.md)

---

## Getting the Most From Your Trial

| Goal | What to do |
|---|---|
| See a change fast | Monitor `/pricing` pages — these change more often than homepages |
| Test the digest | Trigger a manual snapshot, wait for the daily send, or email us to trigger a test digest |
| Evaluate alert quality | Add a competitor whose site you know changes frequently (e.g., a fast-moving SaaS) |
| Test integrations | Connect Slack or a webhook in **Settings** — test payloads fire immediately |
| Get the full picture | Add your top 5 competitors, not just the one you're most worried about |

---

## Related

- [Which Pages to Monitor Per Competitor →](./which-pages-to-monitor-per-competitor.md)
- [How Monitoring Works →](./how-monitoring-works.md)
- [Digest Schedule and Timing →](./digest-schedule-and-timing.md)
- [Digest Not Arriving →](./digest-not-arriving.md)
- [Free Trial — How It Works →](./free-trial.md)
- [Getting Started →](./getting-started.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we typically respond within 2 hours during business days.*
