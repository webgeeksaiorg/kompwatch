# What Happens When a Competitor Page Moves Behind a Login or Paywall

If a competitor page you're monitoring suddenly requires a login, starts returning a 403/401, or moves to a gated URL, KompWatch will detect the change and tell you — but it can no longer see the content behind the gate. Here's what to expect and your options.

## What KompWatch Does When It Can't Access a Page

When KompWatch's headless browser hits a login wall, paywall, or access-denied response, the system:

1. **Detects the access change** — the page content visible to an anonymous visitor has changed significantly (or gone blank). This is flagged as a **HIGH severity change** in your dashboard.
2. **Records the last known snapshot** — your most recent successful snapshot remains in the change history so you can see what was there before.
3. **Marks the competitor page with a warning** — in the competitor detail view, you'll see a ⚠️ "Access issue" indicator.
4. **Continues retrying** — KompWatch will attempt subsequent snapshots. If the page comes back (e.g., during a temporary A/B test or soft launch), monitoring resumes automatically.

## Common Reasons a Page Becomes Inaccessible

| Reason | What to do |
|--------|------------|
| Competitor moved pricing behind a demo request form | Monitor a **public-facing pricing page** instead (e.g., `/pricing` → `/contact-sales`) |
| Documentation moved behind a login | Track the competitor's public changelog or release notes URL instead |
| A/B test is gating the page for some visitors | Wait — the page often reverts. KompWatch will recover automatically. |
| Competitor launched a members-only portal | Switch to monitoring the portal's public landing/teaser page |
| Soft 401 (content hidden by JS after load) | Try adding a CSS selector that targets visible public content above the gate |

## What You Can Do

### Option 1 — Update the Monitored URL

If the competitor has a different public page with similar signals (e.g., a `/plans` page instead of `/pricing`), update the URL in the competitor settings:

1. Open **Dashboard → Competitors → [Competitor name]**
2. Click **Edit**
3. Update the URL to a page still publicly accessible
4. Click **Save** — KompWatch will take a fresh baseline snapshot within the next cycle

### Option 2 — Add a New Monitoring Target for a Related Public Page

If you want to keep the original URL in your history while also tracking a new public URL, add a second monitoring target for the same competitor. Some pages worth switching to:
- Their public blog or newsroom
- Their changelog/release notes page
- Their G2 or Capterra profile
- Their GitHub repository (for open-source competitors)
- Their App Store or Chrome Web Store listing

See: [Monitoring Multiple Pages Per Competitor](./monitoring-multiple-pages-per-competitor.md)

### Option 3 — Use a CSS Selector on the Login/Gate Page Itself

If the gated page still has a public marketing section above the login form (e.g., "Pricing starts at $X/seat"), you can use a CSS selector to monitor just that visible region:

1. Edit the competitor and find the **CSS Selector** field
2. Enter a selector that targets the visible content above the login gate (e.g., `#pricing-preview`, `.hero-section`)
3. KompWatch will only track changes to that element, ignoring the dynamic login UI

See: [Setting CSS Selectors](./setting-css-selectors.md)

### Option 4 — Monitor Adjacent Signals

Even when the target page is inaccessible, competitor intent is often visible elsewhere:
- **Job postings** — new hires signal product direction. See: [Reading Competitor Job Listing Signals](./reading-competitor-job-listing-signals.md)
- **Press/newsroom** — funding, partnerships, and product announcements. See: [Monitoring Competitor Press and Newsrooms](./monitoring-competitor-press-and-newsrooms.md)
- **Review sites** — G2/Capterra reviews often describe pricing and feature changes. See: [G2 and Capterra Review Monitoring](./g2-capterra-acquisition-review-monitoring.md)

## Will I Be Billed for a Competitor Whose Page Is Inaccessible?

Yes — the competitor slot is still active even if a single page returns an error. If you want to free up the slot, you can delete the competitor or update the URL to a working page.

See: [Plan and Competitor Limit](./plan-competitor-limit-reached.md)

## Can KompWatch Monitor Login-Required Pages?

Not currently. KompWatch uses a publicly accessible headless browser — it does not store or replay credentials. Monitoring authenticated/gated pages would require session management that's both technically complex and legally sensitive.

See: [Monitoring Login-Required Pages](./monitoring-login-required-pages.md)

---
*Related: [Monitoring Login-Required Pages](./monitoring-login-required-pages.md) · [Setting CSS Selectors](./setting-css-selectors.md) · [Competitor Site Offline or Errors](./competitor-site-offline-or-errors.md) · [Snapshot Errors and Warning States](./snapshot-errors-and-warning-states.md)*
