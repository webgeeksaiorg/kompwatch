# Can KompWatch Monitor Login-Required or Password-Protected Pages?

**Short answer:** Not for pages behind a full authentication wall. KompWatch monitors publicly accessible URLs — the same pages a real user can view without signing in.

## What KompWatch Can Monitor

KompWatch uses a headless Chromium browser (Playwright) to load pages without cookies, sessions, or credentials. It monitors the **unauthenticated, public-facing view** of any URL. This works for:

- Public pricing pages (`/pricing`, `/plans`)
- Public feature pages (`/features`, `/product`)
- Blog posts and changelog pages
- Public documentation
- Job listing pages

## What KompWatch Cannot Monitor

KompWatch will not attempt to log in to access gated content. Pages that require authentication — including:

- SaaS dashboards behind a login wall
- Admin portals requiring credentials
- Paywalled content or member-only sections
- Competitor in-app experiences

…will not be monitorable. Attempting to add a URL that redirects to a login page will result in snapshots of the login form rather than the protected content.

## Why This Matters for Competitor Monitoring

Most of what matters for competitive intelligence is public anyway:

- **Pricing changes** — competitor pricing pages are public by design
- **Feature announcements** — usually posted to marketing pages, changelog, or blog
- **Job signals** — careers pages are public
- **Messaging shifts** — homepage hero copy, taglines, and value propositions are public

If a competitor makes a significant product change, they almost always update their public-facing pages. KompWatch is designed to catch those updates.

## "Email Gate" Pages

Some pages are behind a soft gate — you enter an email to get past a landing page, but the actual content is on a public URL. In many cases, the underlying URL (e.g., `/pricing?plan=pro`) is directly accessible without submitting the form. Try adding that URL directly.

## Monitoring Your Own Authenticated Pages

If you want to monitor your own product's authenticated pages (e.g., your staging environment, an internal dashboard), KompWatch does not support cookie injection or session-based authentication today. This is a known limitation.

**Workaround:** If your staging environment is behind Basic Auth (HTTP authentication), email [support@kompwatch.com](mailto:support@kompwatch.com) — we may be able to support Basic Auth credentials for self-monitoring use cases on the Team plan.

## Using KompWatch with a Soft Login

If a competitor requires you to create a free account to see their full feature list or pricing tier details, you can:

1. Create a free account on their platform yourself
2. Note the direct URL of the page once you're logged in
3. Check whether that URL is accessible without login in an incognito window
4. If it is, add it to KompWatch

Pages that are "login-required" at the UX level are sometimes accessible directly — the auth wall is a soft gate rather than a hard server-side check.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
