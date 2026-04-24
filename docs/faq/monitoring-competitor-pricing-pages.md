# How Do I Monitor a Competitor's Pricing Page?

Competitor pricing pages are one of the most valuable things to watch — and one of the easiest to miss, since SaaS companies routinely change pricing without any public announcement. Here's how to set it up in KompWatch.

## Quick Start

When you add a competitor URL (e.g. `https://acme.com`), KompWatch automatically tries common pricing page paths: `/pricing`, `/plans`, and `/#pricing`. If any of these exist, they're monitored on every snapshot cycle.

You don't need to configure anything extra for standard pricing pages.

## What Counts as a Pricing Change

KompWatch classifies changes on a pricing page using the `PRICING` change type, which includes:

- Price increases or decreases (e.g. "$79/mo → $99/mo")
- Tier restructuring (e.g. three tiers collapse into two, or tier names change)
- Plan feature reallocation (a feature moves from mid-tier to enterprise-only)
- Free plan limit changes (user limits, feature limits, trial length)
- Billing period changes (e.g. monthly pricing gets hidden behind annual toggle)
- Trial offer changes ("14-day free trial" becomes "no free trial")

Severity is set by KompWatch's AI layer:
- **HIGH** for price changes, tier restructuring, or feature reallocation
- **MEDIUM** for copy rewrites on the pricing page without structural changes
- **LOW** for minor wording tweaks or badge changes

## Targeting Specific Sections

If you want to watch only the pricing table (not the whole page), use a CSS selector. This reduces noise from unrelated changes — header updates, footer tweaks, A/B test variants — and keeps your digest focused on meaningful pricing signals.

Examples:
- `#pricing` — a common ID for the pricing section
- `.pricing-table` — a common class
- `[data-section="pricing"]` — used by some modern SaaS sites

See the [CSS Selectors FAQ](css-selectors.md) for setup instructions.

## What If Their Pricing Page Uses a Non-Standard URL

If a competitor uses `/cost`, `/plans`, `/buy`, or another non-standard path, KompWatch won't auto-detect it. Add the competitor with that specific URL (e.g. `https://acme.com/plans`) instead of the homepage.

## How Often Are Pricing Pages Checked

Snapshot frequency depends on your plan:

| Plan | Frequency |
|------|-----------|
| Free | Daily |
| Pro | Every 6 hours |
| Team | Hourly |

For most SaaS competitors, daily is sufficient. If a competitor is running active pricing experiments (you'll know because changes are frequent), upgrading to Pro gives you 6-hour checks.

## Frequently Asked Questions

**Will the competitor know I'm monitoring their pricing page?**
Monitoring makes HTTP requests indistinguishable from normal web traffic. Competitors can check their server logs, but identifying a specific request as automated monitoring (vs. a curious visitor) isn't practical at any reasonable check frequency.

**What if their pricing page requires JavaScript to render?**
KompWatch uses Playwright (headless Chromium), so JavaScript-rendered pricing pages work correctly. Most modern SaaS pricing pages load dynamic content — this is handled automatically.

**What if pricing is behind a login?**
KompWatch monitors publicly accessible pages only. If a competitor's pricing is gated, they're likely running a sales-led model with custom pricing — in which case, monitoring their public pricing page may not be meaningful anyway.

**How do I know if a change is significant enough to act on?**
A good rule of thumb: anything that would change what your sales rep says on a call is significant. Price changes, tier restructuring, feature reallocation — those matter. Background color changes, testimonial rotation, minor copy tweaks — those usually don't. KompWatch's AI summary layer flags the meaningful ones.

**Can I monitor more than just the pricing page?**
Yes. KompWatch also automatically monitors the features page, blog, and job listings for each competitor. The features page often announces new capabilities before the pricing page reflects them. See [What Does KompWatch Actually Monitor?](what-does-kompwatch-track.md) for details.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
