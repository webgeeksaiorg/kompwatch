# How Do I Verify That My Competitor Monitoring Is Actually Working?

You've added competitors and KompWatch is running — but how do you know it's actually detecting changes, not silently reporting "no changes" due to a rendering gap or misconfiguration?

Here's a practical verification checklist.

---

## Quick Sanity Check: The React/Next.js Pricing Page Test

The single best way to test your monitoring tool is to monitor a competitor with a **JavaScript-rendered pricing page** (React, Next.js, Vue, etc.).

**Why this matters:** ~40% of SaaS pricing pages don't serve meaningful HTML at the HTTP level — they render entirely in JavaScript. A monitoring tool that uses HTTP-only fetching (curl-level) will:
- Load an empty `<div>` every time
- Report "no changes" perpetually — even when the page has changed
- Give you false confidence that nothing is happening

**How to test:**
1. Add a competitor whose pricing page is built with React or Next.js (you can check by right-clicking → View Source and seeing mostly empty `<div id="root">` or `<div id="__next">` tags)
2. Wait for 2–3 snapshots to complete
3. Go to the competitor's **Snapshot History** in KompWatch and view the captured HTML

If the snapshot contains real pricing text and plan names — KompWatch's headless Chromium renderer executed the JavaScript correctly. If you see mostly empty divs, something is misconfigured.

KompWatch uses **Playwright (headless Chromium)** for all snapshots, which means full JavaScript execution is included by default. You should see real rendered content.

---

## Verification Steps

### 1. Confirm the initial snapshot ran
After adding a competitor:
- Go to **Competitors → [Competitor Name] → Snapshot History**
- You should see at least one snapshot entry within a few minutes of adding the competitor
- If you see "No snapshots yet," the first snapshot may still be queued — wait up to 15 minutes, then contact support

### 2. Trigger a manual snapshot
On the competitor detail page, use the **Refresh Snapshot Now** button (available on Pro and Team plans). A new snapshot should appear in history within 2–3 minutes.

If the manual refresh completes but shows no content in the snapshot preview, check:
- Is the competitor URL correct? (typo, redirect loop, or `www` vs non-`www` mismatch)
- Is the page behind a login wall? (KompWatch can't authenticate — see [Monitoring Login-Required Pages →](./monitoring-login-required-pages.md))
- Is the site blocking scrapers? (see [Anti-Bot Protection and Blocked Pages →](./anti-bot-protection-and-blocked-pages.md))

### 3. Check that changes are being compared
KompWatch detects changes by **diffing two consecutive snapshots**. No diff = no change alert, even if monitoring is working perfectly.

To confirm diffing is active:
- Look at the **Changes** tab for a competitor — if you see historical changes listed, the pipeline is working end-to-end
- If you've only had the competitor for 24 hours or less and it's on the Free plan (daily snapshots), there may simply not have been two snapshots yet

### 4. Verify your digest email delivery
Send yourself a test digest from **Settings → Notifications → Send Test Digest**. If the email arrives, delivery is working. If not, check your spam folder and verify the email address on your account.

---

## Common False Negatives (Things That Look Broken But Aren't)

| Symptom | What's actually happening |
|---|---|
| "No changes" for 2+ weeks | Competitor site hasn't changed — this is normal |
| First snapshot captured, second hasn't run | Still within your plan's snapshot interval |
| Changes show in dashboard but no email | Check your digest frequency setting — weekly digests only send once per week |
| Changes show but severity is "Low" | Low-severity changes may be filtered from your digest — check **Settings → Digest Filters** |

---

## Still Not Sure?

Contact support from any KompWatch email or the in-app chat. Share:
1. The competitor URL you're monitoring
2. A screenshot of the Snapshot History tab
3. What you expected to see vs what you're seeing

A team member will respond within 24 hours.
