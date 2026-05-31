# Monitoring Competitor Trial and Demo Strategy

## Why does this matter?

A competitor's free trial, demo request flow, and "Get started" CTA are among the clearest signals of their go-to-market strategy. When these change, it usually means they've learned something — a conversion experiment succeeded, they're targeting a new segment, or they're responding to churn.

Changes to track:

- **CTA copy** — shifting from "Start free trial" to "Book a demo" signals a move upmarket toward enterprise (longer sales cycles, higher ACV)
- **Trial length** — extending from 7 to 14 days suggests friction in activation; shortening it suggests they've solved onboarding
- **Credit card required / not required** — removing the card requirement is a direct activation play targeting self-serve PLG growth
- **Demo request form fields** — adding "company size" or "team" dropdowns signals sales qualification becoming stricter
- **Pricing page CTA** — switching a plan's CTA from "Sign up" to "Contact sales" means that tier is being moved off self-serve

## How do I track this in KompWatch?

Add your competitor's **pricing page**, **homepage**, and **signup/demo landing page** as separate tracked URLs. Use targeted CSS selectors to reduce noise:

| Page section | CSS selector to try |
|---|---|
| Hero CTA button | `.hero a[href*="signup"], .hero button, [class*="cta"]` |
| Pricing plan buttons | `[class*="pricing"] a, [class*="plan"] button` |
| Demo request form | `form[action*="demo"], form[id*="demo"]` |
| Trial form fields | `form[action*="trial"] input[name]` |

When KompWatch detects a change in these zones, it's classified as a **FEATURE** or **PRICING** change and delivered in your next digest.

## What does it mean when a competitor removes their free trial?

This almost always signals one of three things:
1. **Upmarket migration** — enterprise buyers don't self-serve; they need sales-assisted onboarding
2. **Abuse or cost problems** — free trial tiers are expensive to support; some SaaS teams remove them after abuse spikes
3. **Pricing experiment** — they may be A/B testing gated vs. open trial to measure conversion lift

Combined with other signals (pricing page changes, job listings for "Enterprise Account Executive", removal of self-serve plan tiers), this can give you an early read on a competitive repositioning before it's announced.

## What does it mean when a competitor adds a "Book a demo" flow?

Adding a demo-first flow — or making it the *primary* CTA above a free trial — signals enterprise focus. Watch for:

- Increase in case study count or logo wall updates (social proof for enterprise buyers)
- New "Enterprise" or "Security" pages appearing
- Role-specific landing pages (e.g. `/for-ciso`, `/for-vp-sales`)
- Longer sales copy and comparison tables appearing on pricing pages

Track all of these as separate URLs in KompWatch. When several change in the same digest period, that's a coordinated GTM shift worth flagging to your sales and product teams.

## Can I get alerted only when the CTA changes, not every minor update?

Yes. Set a targeted CSS selector scoped to the CTA zone (see table above) and set the severity threshold to **Medium** or higher in your competitor's notification settings. Minor copy edits to surrounding text won't trigger an alert; a CTA swap will.

## Related FAQs

- [Monitoring competitor pricing pages](/docs/faq/monitoring-competitor-pricing-pages.md)
- [Monitoring competitors with hidden or Contact Sales pricing](/docs/faq/monitoring-competitors-with-hidden-pricing.md)
- [Detecting competitor upmarket migration signals](/docs/faq/detecting-competitor-upmarket-migration.md)
- [Which pages to monitor per competitor](/docs/faq/which-pages-to-monitor-per-competitor.md)
- [Change severity levels](/docs/faq/change-severity-levels.md)
