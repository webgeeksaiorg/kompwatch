# Can I Monitor a Competitor's Changelog or Release Notes?

**Short answer:** Yes. A competitor's public changelog is one of the fastest signals you'll find — feature launches appear there before the blog post, the press release, or the homepage update. KompWatch can monitor it automatically and surface changes in your digest.

---

## Why Changelogs Are High-Signal

Marketing writes about wins. Changelogs document *everything*. Monitoring a competitor's release notes gives you:

- **Early feature intel** — New entries appear before the launch blog post, usually by days or weeks
- **Shipping cadence visibility** — Frequency of releases tells you about team size, engineering velocity, and product investment
- **Deprecation and removal signals** — Features quietly dropped often signal a strategy pivot or technical debt paydown
- **Pricing and limits changes** — Quota adjustments and plan changes often surface in changelog entries before the pricing page updates
- **Bug acknowledgment** — Public fixes reveal what was broken, which can be relevant to competitive positioning ("they fixed X, which means X was unreliable until now")
- **API and integration changes** — Developer-facing changelog entries reveal platform bets and ecosystem investments

---

## Where Competitors Publish Changelogs

| Location type | Common URL patterns |
|---|---|
| Standalone changelog | `/changelog`, `/releases`, `/whats-new`, `/updates` |
| Blog category | `/blog/category/releases`, `/blog/product-updates` |
| Help center section | `support.competitor.com/changelog`, `/docs/changelog` |
| GitHub releases | `github.com/org/repo/releases` (for open-source tools) |
| Third-party hosted | `headwayapp.co`, `changelogfy.com`, `releases.com` |

> **Tip:** If you can't find the changelog, search `site:competitor.com changelog` or check their footer for "What's New" or "Release Notes" links. Engineering and developer tools almost always have public changelogs.

---

## How to Set Up Changelog Monitoring in KompWatch

1. Navigate to **Competitors → Add Competitor**
2. Name the entry clearly — e.g., `Acme — Changelog`
3. Paste the changelog URL
4. Set a **CSS selector** to target the entry list and avoid navigation/footer noise:

   | Changelog platform | Suggested selector |
   |---|---|
   | Custom / generic | `main`, `.changelog-entries`, `[class*="release"]` |
   | Headway App | `.HW_frame`, `.HW_badge` (embed) — monitor the full page URL instead |
   | Linear changelog | `.changelog-posts` |
   | GitHub Releases | `.release-entry`, `[data-hovercard-type="release"]` |
   | Notion public page | `.notion-page-content` |

5. Set **snapshot frequency** based on their release cadence:
   - Fast-moving competitors (weekly+ releases): **Pro plan, every 6h** to catch entries within hours
   - Slower cadences (monthly): **Free plan, daily** is sufficient

---

## What KompWatch Detects

When a new changelog entry is published, KompWatch flags it as a **CONTENT** or **FEATURE** change depending on the wording. The AI digest summarises:

- What was added, changed, or removed
- Whether the entry is product-facing, API-facing, or infrastructure-related
- Severity signal — a new major feature gets **HIGH**, a minor bug fix gets **LOW**

You can adjust the severity threshold for this competitor entry under **Settings → Digest Filters** to only surface HIGH and MEDIUM changelog changes in your digest.

---

## Interpreting the Signals

### They shipped a feature you've been planning

**Action:** Accelerate your roadmap discussion. Check if the implementation matches yours or if there's a positioning gap. Forward to product with the diff link.

### Their release cadence suddenly dropped

**Action:** Engineering slowdown, hiring freeze, or a major rewrite in progress. This is a window — move faster than normal on your own positioning.

### They launched a feature in a category you don't touch

**Action:** ICP expansion signal. Cross-reference with [Monitoring Competitor Job Postings →](./monitoring-competitor-job-postings.md) and [Monitoring Competitor Blog Content →](./monitoring-competitor-blog-and-content-strategy.md) to see if hiring and content corroborate the new direction.

### They deprecated or removed a feature

**Action:** Their customers using that feature are now looking for alternatives. Create or update your battle card to highlight your equivalent. Notify sales.

### They shipped several entries mentioning the same integration or platform

**Action:** They're making an ecosystem bet. Cross-reference with [Monitoring Competitor Partner Pages →](./monitoring-competitor-partner-pages.md) to see if it shows up there too.

---

## Combining Changelog With Other Signals

Changelog monitoring becomes most powerful when combined with other KompWatch watches on the same competitor:

| Changelog signal | + Other signal | = Intelligence |
|---|---|---|
| New feature entry | Pricing page adds new plan tier | Feature may be premium-gated — check positioning |
| API endpoint added | Job postings for "developer relations" | Platform play in progress |
| Multiple deprecations | Homepage messaging shift | Product pivot — update battlecards |
| Bug fix cluster | Customer reviews mention instability | Reliability issue they're working through |
| New enterprise feature | `/vs/` comparison page updated | They're actively repositioning against a competitor |

---

## Limitations

- **Private or gated changelogs** — Some enterprise vendors keep release notes behind login. KompWatch can only monitor public changelog pages. For login-required pages, see [Monitoring Login-Required Pages →](./monitoring-login-required-pages.md).
- **Third-party changelog widgets (Headway, Beamer)** — These often inject content via JavaScript iframe. KompWatch's headless Chromium renders JavaScript, so most widget-based changelogs are captured. If the entry list doesn't appear, try monitoring the widget's direct URL if one exists.
- **GitHub release notes with large diffs** — Repository release notes with long code changelogs can produce noisy diffs. Use a CSS selector like `.release-header` to track just titles and dates rather than the full release body.
- **"Silent" shipping** — Some teams ship features without publishing a changelog entry, or update docs before the changelog. Pair changelog monitoring with [Monitoring Competitor Help Centers and Docs →](./monitoring-competitor-help-centers-and-docs.md) for full coverage.

---

## Related FAQs

- [Monitoring competitor help centers and docs →](./monitoring-competitor-help-centers-and-docs.md)
- [Monitoring competitor blog and content strategy →](./monitoring-competitor-blog-and-content-strategy.md)
- [Monitoring competitor GitHub and open source →](./monitoring-competitor-github-and-open-source.md)
- [Monitoring competitor job postings →](./monitoring-competitor-job-postings.md)
- [Which pages should I monitor per competitor →](./which-pages-to-monitor-per-competitor.md)
- [Detecting competitor upmarket migration →](./detecting-competitor-upmarket-migration.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
