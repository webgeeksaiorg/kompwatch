# My Competitor Doesn't Have a Public Changelog — How Do I Track Feature Releases?

Most enterprise and mid-market SaaS competitors don't publish a public changelog. The good news: the signal is still there — it's just distributed across several pages instead of concentrated in one. Here's how to reconstruct changelog-equivalent coverage.

---

## Why Most Competitors Skip Public Changelogs

Enterprise vendors gate their release notes behind a customer portal (partly to manage expectations, partly for competitive opacity). Even PLG tools sometimes stop maintaining public changelogs as they grow. That's not a blocker — it just means you monitor more pages per competitor instead of one.

---

## The Four-Page Stack That Replaces a Changelog

When a competitor has no public changelog, add these four URLs to KompWatch in priority order:

### 1. /features or /product page
The features page is updated whenever a capability becomes part of the core marketing pitch. This is often *more* useful than a changelog for competitive intelligence because it tells you what the competitor is **positioning to prospects** — not just what they shipped internally.

**What to look for:** New feature blocks, renamed capabilities, removed features (downgrades in positioning), tier annotations (e.g., "Now on Pro").

**Recommended selector:** `main`, `.features-grid`, `[class*="feature"]`

### 2. /pricing page
Pricing pages are updated when:
- A feature moves from one tier to another (feature gating)
- A new add-on or SKU is introduced
- A feature is added to the competitive justification grid at the bottom

Pricing page diffs are often the *first* public evidence of a new feature — it appears in the comparison table before the feature page or blog post is updated.

**What to look for:** New rows in feature comparison tables, tier changes, new plan names.

**Recommended selector:** `[class*="pricing"]`, `[class*="plan"]`, `table`

### 3. /blog (filtered for product/release content)
Product launch announcements almost always appear on the blog, usually within a week of shipping. Blog monitoring at a weekly cadence catches every major launch — you won't have the 6-hour freshness of a changelog, but you'll have structured prose explaining the feature and its positioning.

**What to look for:** New blog posts in product/update/release categories.

**Recommended selector:** `.post-list`, `[class*="post"]`, `main`

### 4. /docs or help center
Documentation is often published the moment a feature ships — sometimes before the marketing announcement. A new help article titled "Setting up X" is effectively a release note. Developer-facing competitors (APIs, developer tools, data platforms) almost always have public docs.

**What to look for:** New articles, new sections in existing articles, new API reference entries.

**Recommended selector:** `.docs-sidebar`, `nav`, `[class*="sidebar"]` (or `main` if you want full content)

---

## Optional: /careers as a Roadmap Proxy

Job postings are a 60–90 day leading indicator. A competitor posting for "Senior Engineer — AI recommendations" signals a feature investment before any page reflects the output. KompWatch can monitor /careers or /jobs pages — set severity threshold to LOW since changes are frequent and mostly noise, and look for patterns in role clusters.

---

## Example: 3 Competitors, No Public Changelogs — KompWatch Setup

| Competitor | URLs to monitor | Cadence |
|---|---|---|
| Competitor A (direct) | /features, /pricing, /blog, /docs | 6 hours (Pro) |
| Competitor B (direct) | /features, /pricing | 6 hours (Pro) |
| Competitor C (adjacent) | /product, /pricing | Daily |

That's 7 URLs — fits comfortably on a Pro plan (10 slots).

---

## Related

- [Which pages should I monitor per competitor?](/docs/faq/which-pages-to-monitor-per-competitor.md)
- [How does KompWatch track competitor feature changes?](/docs/faq/competitor-feature-tracking.md)
- [Can I monitor a competitor's changelog?](/docs/faq/monitoring-competitor-changelog-and-release-notes.md)
- [Monitoring competitor documentation and help centers](/docs/faq/monitoring-competitor-help-centers-and-docs.md)
