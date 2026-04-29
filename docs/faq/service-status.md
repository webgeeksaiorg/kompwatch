---
title: Service Status & Outages
description: What to do if KompWatch is unavailable or you experience errors
---

# Service Status & Outages

## Is KompWatch currently down?

If you're unable to load the dashboard or get a connection error, here's how to check:

1. **Try a hard refresh** — press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac) to bypass the browser cache.
2. **Check from a different network** — try mobile data instead of Wi-Fi to rule out a local network issue.
3. **Wait 2–5 minutes and retry** — brief interruptions during deploys (typically under 2 minutes) can cause temporary unavailability.

If the issue persists beyond 5 minutes, it's likely a service incident on our end. You can email **support@kompwatch.com** and we'll respond within 1 hour during business hours (9am–6pm UTC, Mon–Fri), or within 4 hours outside those windows.

## What happens to monitoring during an outage?

Competitor snapshots are queued and retried automatically. If a cron cycle is missed due to an outage, the next scheduled run will catch up. **No data is lost** — your monitoring history remains intact.

## Will I be notified of planned maintenance?

We aim for zero-downtime deploys. Planned maintenance windows lasting more than 5 minutes will be announced via email at least 24 hours in advance.

## My digests stopped arriving

A service disruption can occasionally delay digest emails. If you haven't received a digest that was due:

1. Check your spam/junk folder for emails from `digests@kompwatch.com`.
2. Wait up to 30 minutes after a reported incident — digests backfill automatically.
3. If you're still missing digests after 30 minutes, email **support@kompwatch.com** with your account email and we'll manually trigger a resend.

## I got a 500 error or "Something went wrong"

This usually indicates a transient server error. Please:

1. Refresh and try again.
2. If the error persists for more than 10 minutes, email **support@kompwatch.com** with:
   - The page/action that triggered the error
   - A screenshot if possible
   - Your account email

We treat persistent 500 errors as P1 bugs and aim to resolve them within 4 hours.
