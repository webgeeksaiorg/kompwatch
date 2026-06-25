# Monitoring Competitor Onboarding and Signup Flows

A competitor's onboarding flow is one of the most signal-rich parts of their product — it reveals their positioning, activation strategy, required integrations, and conversion levers. Here's how to use KompWatch to track changes to competitor signup and onboarding pages.

## Why Track Competitor Onboarding?

Most competitive monitoring focuses on pricing and feature pages. Onboarding flows are underrated:

- **Signup copy changes** signal repositioning — if they suddenly lead with "5-minute setup" they're responding to activation friction feedback
- **Onboarding step count** and required fields reveal complexity (or simplicity) they're optimizing for
- **Trial → paid conversion incentives** (urgency CTAs, upgrade nudges, trial extension offers) tell you how they're converting free users
- **Required integrations during setup** reveal which customer segments they're prioritizing
- **Social proof placement** in onboarding (logos, testimonials, case studies) reflects what ICP they're targeting

## What Pages to Monitor

### Public-Facing Signup Pages

Track the entry point(s) to their onboarding:
- `/signup`, `/register`, `/get-started`, `/free-trial`
- Pricing page CTAs (these often link to plan-specific signup flows)
- Homepage hero CTA destination

These pages change frequently — A/B tests on copy, form fields, social proof, and friction reduction are common.

**Example CSS selector:** Target the signup form container to filter out nav/footer noise:
```css
.signup-form, #registration-container, [data-section="signup"]
```

### Trial Expiry and Upgrade Nudge Pages

Many SaaS tools have a `/upgrade`, `/billing`, or `/trial-expired` page that's publicly accessible or minimally gated. These pages reveal:
- Trial length (if it changed from 14 → 7 days, they're tightening conversion)
- What features are locked vs. included
- Urgency language and upgrade incentives

### "Get Started" Checklist Pages

Tools like Klue, Crayon, and most SaaS dashboards have a post-signup "setup checklist" page (sometimes called `/onboarding`, `/welcome`, or `/getting-started`). If accessible to anonymous visitors (many are), monitor it for:
- Step sequence changes
- New required integrations
- Shift from self-serve to sales-assisted onboarding

### Help Center Onboarding Articles

If a competitor has a public help center, their "getting started" section tells you exactly what their onboarding flow looks like:
- Track `help.competitor.com/getting-started` or `docs.competitor.com/quickstart`
- Changes here often precede or follow product onboarding changes

See: [Monitoring Competitor Help Centers and Docs](./monitoring-competitor-help-centers-and-docs.md)

## Setting Up Monitoring for Onboarding Pages

### Step 1 — Identify the Right URL

Try these common patterns:
- `competitor.com/signup`
- `app.competitor.com/register`
- `trial.competitor.com`
- `competitor.com/free-trial`

If the signup URL redirects to an auth platform (Auth0, Cognito), try finding a publicly accessible version of the signup page that doesn't require existing credentials.

### Step 2 — Add a Second Monitoring Target for the Competitor

In your competitor dashboard:
1. Open the competitor
2. Click **Add page** (or edit an existing entry)
3. Add the signup page URL as a second monitored page

Most onboarding pages load with JavaScript — KompWatch's Playwright-based scraper handles dynamic/SPA signup forms correctly.

See: [Monitoring Multiple Pages Per Competitor](./monitoring-multiple-pages-per-competitor.md)

### Step 3 — Use a CSS Selector to Focus on Onboarding Content

Signup pages often include dynamic elements (cookie banners, chat widgets, live chat badges) that generate noise. Narrow the monitored zone:

```css
/* Target just the signup form and hero headline */
main, .signup-hero, .onboarding-container

/* Exclude chat widgets */
:not(.intercom-launcher):not(.drift-widget)
```

See: [Setting CSS Selectors](./setting-css-selectors.md)

### Step 4 — Set Severity Threshold

For onboarding pages, set the minimum alert threshold to **MEDIUM** — copy tweaks and minor A/B tests are expected. You want to hear about:
- Form field additions/removals (HIGH)
- CTA or positioning copy changes (MEDIUM → HIGH)
- New social proof or trust signals (MEDIUM)
- Pricing or plan structure changes surfaced on signup pages (HIGH)

See: [Change Severity Levels](./change-severity-levels.md)

## What to Do When You Detect a Change

When KompWatch alerts you to a signup page change:

1. **View the diff** — The AI summary will describe what changed. Look for: copy, form fields, social proof, CTAs, step count
2. **Screenshot comparison** — Use the visual diff to see the layout/design change
3. **Try the flow yourself** — If the change is significant, manually go through their signup to see the full impact
4. **Tag it** — Use the change labels (FEATURE / PRICING / POSITIONING) to categorize for your battlecard updates

See: [Dismissing and Marking Changes](./dismissing-and-marking-changes.md)

## Common Signals and What They Mean

| Change detected | Likely interpretation |
|----------------|-----------------------|
| Trial length shortened (14 → 7 days) | They're tightening conversion or had too many trial abusers |
| New "book a demo" step added to signup | Moving upmarket / toward sales-assisted model |
| Credit card now required at signup | Reducing free tier abuse; signal they're tightening GTM |
| New integration required during setup (e.g., "connect your CRM") | Activating on a specific ICP (e.g., sales teams) |
| Removed email verification step | Reducing friction; likely responding to low activation |
| Added social proof (logos, testimonials) above the fold | Responding to trust/credibility objections |
| New pricing tier or plan structure on trial page | Monetization model change underway |

## Limitations

- **Fully gated post-signup flows** (step 2+ after login) are not accessible to KompWatch. You'll only see the publicly accessible pages before authentication.
- **A/B tests** may mean KompWatch occasionally sees variant A vs. variant B on different scrape cycles. The AI will flag this; you can dismiss low-confidence variant noise.

See: [A/B Testing and CDN Variations](./ab-testing-and-cdn-variations.md)

---
*Related: [Monitoring Multiple Pages Per Competitor](./monitoring-multiple-pages-per-competitor.md) · [Setting CSS Selectors](./setting-css-selectors.md) · [Monitoring Competitor Trial and Demo Strategy](./monitoring-competitor-trial-and-demo-strategy.md) · [A/B Testing and CDN Variations](./ab-testing-and-cdn-variations.md) · [Detecting Competitor Repositioning](./detecting-competitor-repositioning.md)*
