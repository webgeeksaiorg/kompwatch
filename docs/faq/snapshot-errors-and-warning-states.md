# Snapshot Errors and Warning States

KompWatch shows a warning badge on a competitor when a snapshot cycle doesn't complete normally. Here's what each state means, what causes it, and what to do.

## Warning Badge Reference

| Badge | Cause | What KompWatch does |
|-------|-------|---------------------|
| **Snapshot warning** | Partial capture — bot challenge fired mid-load | Captures whatever rendered; skips diff if content is too thin |
| **Blocked** | Bot protection returned a challenge page before any content loaded | Records empty snapshot; no diff generated |
| **Robots.txt disallowed** | Competitor's `robots.txt` disallows the URL | Skips snapshot for that cycle; no retry until you change the URL |
| **Unreachable** | HTTP 4xx/5xx, DNS failure, or SSL error | Retries on the next scheduled cycle |
| **Timeout** | Page failed to render within the time limit | Retries on the next scheduled cycle |
| **Redirect loop** | The URL redirects endlessly or to an unresolvable destination | Skips that cycle; persists until you update the URL |

## Does a Warning Trigger a False Alert?

No. KompWatch does not generate a change record from an error snapshot. If the captured content is too thin or the page is clearly a challenge screen, the diff step is skipped entirely. You'll see a warning badge in the competitor row but no change cards in your feed.

## How Long Does KompWatch Retry?

For transient errors (unreachable, timeout), KompWatch automatically retries on the next scheduled snapshot cycle. There is no manual intervention needed.

Persistent errors (Robots.txt disallowed, consistent bot blocking, redirect loop) will recur every cycle until you update the competitor's URL or selector.

## Will I Be Notified of Snapshot Errors?

Warning badges appear in the dashboard on your competitor list and detail page. KompWatch does **not** send email alerts for individual snapshot failures — they are surfaced in the UI only.

If a competitor has been in a persistent error state for more than a few cycles, check the competitor's detail page — the most recent snapshot will show the raw captured content (or the challenge/error page) so you can diagnose the problem.

## Troubleshooting Common Errors

**Blocked / Snapshot warning**
- Try monitoring a deeper URL (e.g., `/pricing` instead of `/`)
- Add a CSS selector to reduce the monitoring footprint
- See [Anti-Bot Protection and Blocked Pages →](./anti-bot-protection-and-blocked-pages.md)

**Unreachable / Timeout**
- Confirm the URL is correct and publicly accessible in your browser
- Check if the competitor's site is temporarily down ([Downdetector](https://downdetector.com) can help)
- If the site comes back up, KompWatch will resume automatically on the next cycle — no action needed

**Robots.txt disallowed**
- The competitor's `robots.txt` explicitly disallows crawling this URL
- Try a different path on the same domain that isn't disallowed (most marketing/pricing pages are crawlable)
- See [Anti-Bot Protection and Blocked Pages →](./anti-bot-protection-and-blocked-pages.md)

**Redirect loop**
- Update the competitor URL to the final destination (paste the URL in your browser and copy the resolved address after all redirects)
- This often happens after a competitor migrates to a new domain or restructures URLs

## When to Contact Support

Email [support@kompwatch.com](mailto:support@kompwatch.com) if:
- A competitor shows persistent warnings for more than 48 hours and you can't resolve it with a URL change
- You're on the Pro or Team plan and a high-priority competitor is consistently unreachable
- The snapshot preview shows unexpected content (e.g., your own site instead of the competitor's)

We'll investigate and help configure a working approach.

## Related Articles

- [Anti-Bot Protection and Blocked Pages](./anti-bot-protection-and-blocked-pages.md)
- [Why Don't I See Any Changes Yet?](./why-no-changes-yet.md)
- [Monitoring JavaScript SPA Sites](./monitoring-javascript-spa-sites.md)
- [Which Pages to Monitor Per Competitor](./which-pages-to-monitor-per-competitor.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
