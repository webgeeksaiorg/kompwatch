# Anti-Bot Protection — Will KompWatch Still Work?

Many competitor websites use anti-bot systems (Cloudflare, DataDome, PerimeterX, reCAPTCHA) to block automated traffic. This article explains how KompWatch handles these, and what you can do when monitoring is blocked.

## How KompWatch Approaches Bot Detection

KompWatch uses **Playwright with headless Chromium** — a full browser engine that renders JavaScript and behaves much closer to a real visitor than a basic HTTP fetcher. This means:

- JavaScript-rendered pages (React, Next.js, Vue) are fully rendered before snapshotting
- Browser fingerprints, cookies, and session behavior match a normal browser session
- Many anti-bot systems that block `curl` or simple scrapers do not block KompWatch

In practice, most competitor websites — pricing pages, feature pages, blog posts — are monitored without issue.

## When Blocking Occurs

Some sites deploy more aggressive protection, particularly:

- **Cloudflare Bot Fight Mode** or **Under Attack Mode** — shows a JS challenge page instead of the real content
- **DataDome / PerimeterX** — behavioral fingerprinting that detects headless browsers
- **Login-gated content** — pages that require authentication before showing content

When KompWatch detects a blocked response (challenge page, CAPTCHA, or empty content where content is expected), it:

1. Skips storing that snapshot — bad data is worse than no data
2. Notes the failure in the monitoring log
3. Surfaces a **"Monitoring issue detected"** notice in your next digest if the block persists across 2+ consecutive snapshots

You won't silently receive misleading snapshots of CAPTCHA pages as if they were real content.

## What You Can Do

**Try a more specific CSS selector.** Challenge pages often load before the real content. A selector targeting a specific section like `.pricing-table` or `#features` — rather than `body` — may capture content that loads before bot detection fires.

See [CSS Selector Targeting](./css-selectors.md) for how to set this up.

**Monitor a public-facing section.** If the target page is behind login or aggressive protection, try monitoring a public page that reflects the same information — for example, a changelog, press page, or Capterra/G2 profile page which are usually unprotected.

**Contact support.** For important competitors that are consistently blocked, email [support@kompwatch.com](mailto:support@kompwatch.com). In some cases we can advise on alternative monitoring approaches.

## What KompWatch Will Never Do

- Bypass authentication or enter credentials on your behalf
- Solve CAPTCHAs or use services that do
- Violate a competitor's `robots.txt` or Terms of Service in ways that expose you to legal risk

KompWatch respects `robots.txt` by default. If a competitor explicitly disallows crawling, KompWatch will not monitor that URL. See [Is Competitor Monitoring Legal?](./is-competitor-monitoring-legal.md) for the full legal context.

## Robots.txt and Frequency

KompWatch scrapes at most once per hour (Team plan). Most competitor sites are fine with this — it's comparable to normal search engine indexing frequency. Snapshot scheduling respects your plan limits and never polls faster than your configured interval.

---
*Questions about a specific competitor that isn't monitoring correctly? Email [support@kompwatch.com](mailto:support@kompwatch.com) with the URL and we'll investigate.*
