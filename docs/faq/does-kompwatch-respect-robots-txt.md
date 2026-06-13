---
title: Does KompWatch Respect robots.txt?
description: How KompWatch handles robots.txt when monitoring competitor websites, and what our scraping policy means for ethical and legal compliance.
---

# Does KompWatch Respect robots.txt?

Yes. KompWatch's scraper reads and follows `robots.txt` directives before capturing a competitor snapshot. If a site disallows crawling by our user agent — or disallows crawlers broadly — we skip the page and notify you rather than proceeding without permission.

---

## What We Check Before Scraping

Before capturing any snapshot, our scraper:

1. **Fetches `robots.txt`** from the root of the target domain
2. **Checks the `Disallow` rules** for our user agent (`KompWatch-Bot/1.0`) and the wildcard `User-agent: *`
3. **Respects `Crawl-delay`** directives — we never hit a page faster than the site owner requested
4. **Skips the snapshot and surfaces a warning** if the URL is disallowed

If a page is blocked by `robots.txt`, you'll see a `robots_blocked` status on that competitor in your dashboard. The snapshot won't run until the restriction is lifted or you remove the competitor.

---

## What This Means in Practice

Most public competitor websites — landing pages, pricing pages, feature pages, blog posts — are fully crawlable. These are the pages competitors want the world to see; they rarely block crawlers on public marketing content.

The exceptions are typically:

- **Admin or internal pages** (which you shouldn't be monitoring anyway)
- **Pages behind login** (KompWatch can't access these by design)
- **Some large enterprise sites** with aggressive bot policies — usually the policy blocks search engine crawlers too, which means the competitor is also invisible to Google

If a competitor has blocked all crawlers, their site is likely using other anti-bot measures as well (Cloudflare, CAPTCHA, rate limiting). In those cases we'll surface the block clearly so you can decide whether to remove the competitor or try a more specific URL that is crawlable.

---

## Rate Limiting and Polite Scraping

Beyond `robots.txt`, we follow standard ethical scraping practices:

- **Maximum one snapshot per competitor per hour** (Team plan), once every 6 hours (Pro), once daily (Free) — we never hammer a site
- **Randomized request delays** — we don't send requests at predictable machine-speed intervals
- **No parallel scraping of the same domain** — one page at a time per competitor domain
- **Standard browser headers** — our Playwright-based scraper looks like a real browser, not a bot farm, because we're doing legitimate monitoring, not adversarial scraping

The intent is that our monitoring load is indistinguishable from a few human visitors per day. A competitor's infrastructure team should never notice KompWatch in their logs.

---

## Is Competitor Website Monitoring Legal?

Yes, with appropriate scope. Monitoring publicly accessible web pages is legal in most jurisdictions, as confirmed by cases like *hiQ Labs v. LinkedIn* (9th Circuit, 2022). `robots.txt` is not a legal document — it's a convention — but respecting it is both ethical best practice and part of our terms of service.

For a fuller analysis, see [Is Competitor Website Monitoring Legal?](./is-competitor-monitoring-legal.md)

---

## What If I Want to Monitor a Page That's Blocked?

You can try:

1. **A more specific URL** — the root domain might be blocked but `/pricing` might not be
2. **A different subdomain** — `blog.competitor.com` might have different `robots.txt` rules than `www.competitor.com`
3. **Contacting us** — if you believe the block is overly broad (e.g., a misconfigured `robots.txt`), our team can review the situation

We won't scrape a page that a site owner has explicitly disallowed, regardless of what the competitor intelligence value might be.

---

## Related Articles

- [Is Competitor Website Monitoring Legal?](./is-competitor-monitoring-legal.md)
- [What Does KompWatch Track?](./what-does-kompwatch-track.md)
- [Anti-Bot Protection and Blocked Pages](./anti-bot-protection-and-blocked-pages.md)
- [Which Pages Should I Monitor Per Competitor?](./which-pages-to-monitor-per-competitor.md)
- [How Competitor Monitoring Works](./how-monitoring-works.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
