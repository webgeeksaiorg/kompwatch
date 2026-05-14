# Triggering a Manual Snapshot / Forcing a Refresh

When you edit a competitor's URL or CSS selector, you don't have to wait for the next scheduled cycle to verify it's working correctly. KompWatch gives you a way to trigger a fresh snapshot on demand.

## How to Request a Manual Snapshot

1. Go to [kompwatch.com/competitors](https://kompwatch.com/competitors)
2. Click the competitor's name to open its detail page
3. Click **Re-scan now** (top-right of the detail page)
4. A new snapshot will be captured within 30–60 seconds

The new snapshot appears in the **Snapshot History** tab as soon as it completes. You can preview the captured screenshot and HTML to confirm KompWatch is capturing the right content.

> **Note:** Manual snapshots do not affect your scheduled monitoring cycle. Your next scheduled snapshot still runs at its normal time.

## When to Use a Manual Snapshot

| Situation | Why it helps |
|-----------|-------------|
| Just updated a URL | Verify the new URL loads correctly and the CSS selector still matches |
| Just changed a CSS selector | See what content the new selector targets before the next cycle |
| Suspected bot block cleared | Confirm KompWatch can reach the page again |
| Added a competitor and want early baseline | Get a fresh snapshot to confirm the setup looks right |
| Investigating a "no content captured" warning | Re-test immediately after making a fix |

## Plan Limits for Manual Snapshots

| Plan | Manual re-scans per competitor per day |
|------|----------------------------------------|
| Free | 1 |
| Pro | 5 |
| Team | Unlimited |

If you've reached your daily limit, the **Re-scan now** button will be greyed out until midnight UTC when the limit resets.

## Does a Manual Snapshot Trigger Change Detection?

**Yes** — if the re-scan result differs from the previous snapshot, a change record will be created and (if it meets your severity threshold) included in your next digest.

This is intentional: if you fix a broken URL and the first new snapshot captures a very different page from the last one, KompWatch will flag it as a change. You can dismiss false-positive changes from the change detail view.

## Why Isn't My Re-Scan Showing Content?

If the manual snapshot preview is blank or shows a bot challenge:

- **Check the URL** — confirm it's publicly accessible in a private/incognito browser window
- **Check your CSS selector** — if the class no longer exists on the page, the selector returns empty. Reset to `body` to capture the full page, then refine. See [CSS Selectors FAQ](./css-selectors.md).
- **Check for bot protection** — see [What Happens When a Competitor Blocks Scraping?](./anti-bot-protection-and-blocked-pages.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
