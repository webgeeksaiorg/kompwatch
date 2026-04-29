# What Happens When a Competitor Blocks Scraping?

Some competitor websites use bot detection systems (Cloudflare Bot Management, Akamai, DataDome, reCAPTCHA) that may block or challenge headless browsers. Here's what KompWatch does in those cases and what you can do about it.

## How KompWatch Handles Blocked Pages

KompWatch uses Playwright with a full Chromium browser — not a simple HTTP fetcher — which passes most standard bot checks. When a page is blocked or returns a challenge:

1. **Partial snapshot** — If the block fires mid-load, KompWatch captures whatever rendered before the challenge, then logs a warning.
2. **Empty snapshot** — If the block fires before any content loads (e.g., a Cloudflare interstitial), KompWatch records an empty snapshot and surfaces a warning in your dashboard.
3. **No false alert** — An empty or partial snapshot is not treated as a content change. KompWatch skips diffing if the snapshot is clearly invalid (too small, challenge page detected).

You will see a **"Snapshot warning"** badge in your dashboard for that competitor on cycles where access was restricted.

## How to Tell If You're Being Blocked

Signs that a competitor page may be blocking KompWatch:

- The dashboard shows "Snapshot warning" on recent cycles
- No changes have been detected despite visible changes on the page
- The snapshot preview in your dashboard shows a CAPTCHA or Cloudflare challenge screen

If you suspect blocking, you can view the snapshot preview from your competitor's detail page to see exactly what KompWatch captured.

## What You Can Do

**Try a more specific URL or path.** Many bot-protection rules apply to the homepage but not to deep URLs. A competitor may protect `example.com/` but leave `example.com/pricing` unguarded. Try adding the pricing page URL directly.

**Use a specific CSS selector.** Targeting a stable section (e.g., `.pricing-table`) can reduce the fingerprint of your monitoring request by limiting what gets captured.

**Monitor a different section.** If the main pricing page is protected, the competitor may publish pricing information on a `/plans`, `/upgrade`, or `/docs/pricing` page with lighter protection.

**Contact support.** If you're on the Pro or Team plan and a specific competitor URL is consistently blocked, email [support@kompwatch.com](mailto:support@kompwatch.com). We review cases individually and may be able to help configure a working approach.

## What KompWatch Will Not Do

KompWatch will not:

- Attempt to bypass CAPTCHA challenges
- Forge user-agent strings to impersonate specific browsers or bots
- Circumvent authentication or login walls to access gated content
- Retry aggressively in ways that could trigger rate limits or cause harm to the target site

These limits are both ethical and practical. Competitor intelligence is most reliable when it mirrors what a real user can see unauthenticated — the public-facing pricing page, feature list, and blog.

## Robots.txt Compliance

KompWatch respects `robots.txt`. If a competitor's `robots.txt` disallows crawling for the URLs you've added, KompWatch will not attempt to scrape those pages. You'll see a "Robots.txt disallowed" status in your dashboard for affected competitors.

Note: `robots.txt` is a convention, not a legal requirement. Most SaaS marketing and pricing pages do not disallow crawling, as they are intended for public audiences.

## If a Competitor Changes Their Bot Protection

Bot protection configurations change. A competitor that was accessible last month may add Cloudflare Bot Management next month, or vice versa. KompWatch will automatically resume monitoring if a previously blocked page becomes accessible — no action needed on your end.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
