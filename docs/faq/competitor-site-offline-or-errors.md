# What Happens If a Competitor's Site Goes Offline?

KompWatch monitors competitor websites on a regular schedule. When a site is unavailable — due to downtime, a 404, a redirect loop, or bot protection — here's exactly what happens.

---

## Snapshot Failure Behavior

When KompWatch attempts a snapshot and the page doesn't return a successful response:

- **The snapshot is skipped** — no snapshot record is created for that cycle.
- **No changes are generated** — a failed snapshot cannot be diffed against the previous one, so no false change alerts are sent.
- **Your change history is unaffected** — the gap simply appears as a missing data point in the snapshot timeline.

This means a site going temporarily down will **never trigger spurious change alerts**.

---

## Error Notification

If a competitor's snapshot fails **3 consecutive times**, KompWatch sends you a notification email:

> "We've had trouble reaching [competitor name] for the past [N] cycles. We'll keep trying. If the issue persists, check the URL or consider pausing this competitor."

You'll also see a warning indicator on the competitor's row on your Competitors page.

---

## Automatic Recovery

KompWatch keeps retrying on its normal schedule. As soon as the site returns a successful response, monitoring resumes automatically — no action needed on your part.

The first successful snapshot after a failure period **does not generate a flood of changes** for the downtime window. KompWatch diffs it against the last successful snapshot, so you'll see only real changes, not noise from the outage.

---

## Common Causes of Snapshot Failures

| Cause | What to do |
|-------|-----------|
| **Temporary downtime** | Nothing — KompWatch retries automatically |
| **URL changed or redirects** | Update the URL in your competitor settings |
| **Page moved behind a login wall** | See [Monitoring Login-Required Pages](./monitoring-login-required-pages.md) |
| **Anti-bot protection added** | See [Anti-Bot Protection and Blocked Pages](./anti-bot-protection-and-blocked-pages.md) |
| **CSS selector no longer matches** | Update the selector in competitor settings — the page structure may have changed |
| **Site permanently shut down** | Pause or delete the competitor |

---

## Frequently Asked Questions

**Will KompWatch alert me every time a snapshot fails?**
No — only after 3 consecutive failures. One-off blips are silently retried.

**Does a site going down count against my snapshot quota?**
No. Failed snapshots don't count toward your plan's usage.

**Can I see which snapshots failed?**
Yes — open the competitor's detail page. Missing entries in the snapshot timeline indicate failed attempts.

**Will I miss changes that happened while the site was down?**
Possibly. If a competitor changed their site while KompWatch couldn't reach it, those intermediate states are lost. When monitoring resumes, you'll see the net difference between the last good snapshot and the first successful one after recovery.

**What if the site is down for weeks?**
KompWatch keeps retrying indefinitely. If you know the competitor has shut down or moved, pause or delete the competitor to stop retry attempts and free up a slot on your plan.

---

## Related Articles

- [Anti-Bot Protection and Blocked Pages](./anti-bot-protection-and-blocked-pages.md)
- [Monitoring Login-Required Pages](./monitoring-login-required-pages.md)
- [Competitor Rebranded or URL Changed](./competitor-rebranded-or-url-changed.md)
- [Managing Your Competitors — Edit, Pause, and Delete](./managing-competitors.md)
- [Why No Changes Yet?](./why-no-changes-yet.md)

---

*Seeing persistent snapshot failures? Email [support@kompwatch.com](mailto:support@kompwatch.com) with the competitor URL and we'll investigate.*
