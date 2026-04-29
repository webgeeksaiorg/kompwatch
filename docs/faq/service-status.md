---
title: Service Status & Outages
description: What to do if KompWatch is unavailable or you experience errors
---

# Service Status & Outages

## Is KompWatch Down Right Now?

If you can't reach [kompwatch.com](https://kompwatch.com), try these steps first:

1. **Hard refresh** — `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux) to bypass the browser cache.
2. **Try incognito / private mode** — rules out browser extensions interfering.
3. **Check from a different network** — try mobile data instead of Wi-Fi to rule out a local network issue.
4. **Wait 2–5 minutes and retry** — brief interruptions during deploys (typically under 2 minutes) can cause temporary unavailability.

If the issue persists beyond 5 minutes, email [support@kompwatch.com](mailto:support@kompwatch.com). We respond within 1 hour during business hours (9am–6pm UTC, Mon–Fri), or within 4 hours outside those windows.

## Common Causes of Downtime

| Cause | Typical Duration |
|-------|-----------------|
| Automatic deployment (new release) | Under 2 minutes |
| Scheduled maintenance | Announced by email 24h in advance |
| Infrastructure incident | We'll notify affected users by email |

## What Happens to My Monitoring During an Outage?

Competitor snapshots run on scheduled cron jobs. If the server is unreachable when a snapshot was due:

- The snapshot for that cycle may be skipped.
- The next scheduled cycle will run normally — your monitoring history remains intact.
- **Your digest timing may shift by one cycle** if downtime coincides with a digest send.

## My Digests Stopped Arriving

A service disruption can occasionally delay digest emails. If you haven't received a digest that was due:

1. Check your spam/junk folder for emails from `digests@kompwatch.com`.
2. Wait up to 30 minutes after a reported incident — digests backfill automatically.
3. If you're still missing digests after 30 minutes, email [support@kompwatch.com](mailto:support@kompwatch.com) with your account email and we'll manually trigger a resend.

For general digest troubleshooting unrelated to downtime, see [My Digest Email Didn't Arrive](digest-not-arriving.md).

## I Got a 500 Error or "Something Went Wrong"

This usually indicates a transient server error. Please:

1. Refresh and try again.
2. If the error persists for more than 10 minutes, email [support@kompwatch.com](mailto:support@kompwatch.com) with:
   - The page or action that triggered the error
   - A screenshot if possible
   - Your account email

We treat persistent 500 errors as P1 bugs and aim to resolve them within 4 hours.

## The Dashboard Is Loading Slowly

Slow load times (not full downtime) usually indicate a momentary spike in server load. If slowness persists for more than 10 minutes, email [support@kompwatch.com](mailto:support@kompwatch.com).

## Will I Be Notified of Planned Maintenance?

We aim for zero-downtime deploys. Maintenance windows lasting more than 5 minutes will be announced via email at least 24 hours in advance.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and a team member will follow up within 24 hours.*
