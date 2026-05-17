# Can I Monitor a Competitor's Help Center or Documentation Site?

**Short answer:** Yes. Documentation sites are some of the highest-signal pages to watch — new tutorial pages, API reference additions, and integration guides often appear days before a competitor's official feature announcement.

---

## Why Docs Sites Are Worth Monitoring

When a competitor ships a new feature, their support team documents it before marketing can blog about it. Watching their help center catches:

| Signal | What it means |
|--------|--------------|
| **New tutorial or guide page added** | Feature shipped or in beta |
| **API reference endpoint added** | New developer capability |
| **New integration guide** | Partnership or ecosystem play |
| **Deleted or renamed article** | Feature deprecated, renamed, or pivoted |
| **Pricing/limits section in existing docs updated** | Quota or tier change before official announcement |

Product and engineering teams find this signal especially valuable — it's often more specific than marketing copy and arrives earlier.

---

## Common Documentation Platforms and How to Monitor Them

Most SaaS companies host docs on one of a few platforms. Each has predictable structure:

### Intercom / Help Center (`help.competitor.com`)
Intercom help centers render server-side. The article index is usually at `/en/` or the root.

```
URL:      https://help.competitor.com/en/
Selector: .article-list   (or main, article-index)
```

To catch new articles: monitor the collection/category index pages, not individual articles. A new article appears as a new list item in the index.

### Notion-published docs (`competitor.com/docs` or `notion.so/competitor`)
Notion pages are JavaScript-rendered. Enable **JS rendering** in your competitor settings. The page tree sidebar is your best target.

```
URL:      https://competitor.com/docs
Selector: .notion-sidebar  (or .page-tree, nav)
JS:       Enabled
```

### Readme.io / Gitbook / Mintlify (`docs.competitor.com`)
These platforms are common for developer APIs. The left sidebar nav lists all pages — changes there signal new or removed sections.

```
URL:      https://docs.competitor.com
Selector: nav  (or .sidebar, [data-section="navigation"])
```

### Custom docs sites (Docusaurus, Sphinx, etc.)
Docusaurus and similar static-site generators typically output a sidebar JSON at `/sidebars.json` or a navigation component in the page.

```
URL:      https://docs.competitor.com
Selector: .theme-DocSidebarContainer  (Docusaurus)
          .toctree-wrapper            (Sphinx)
```

---

## Recommended Setup in KompWatch

1. **Add the docs site as a separate competitor entry** (or as an additional URL if you're on Pro/Team). Use a name like "CompetitorName — Docs" to keep it distinct in your digest.

2. **Target the navigation or index**, not the full page body. Help centers have a lot of boilerplate (breadcrumbs, footer, search bars) that changes frequently and creates noise.

3. **Set severity threshold to MEDIUM** for docs monitoring. Adding or removing a single article from the nav is a legitimate medium-severity signal; minor text edits to existing articles are lower value.

4. **Enable JS rendering** if the sidebar doesn't appear in the initial snapshot HTML. Most modern docs platforms (Gitbook, Mintlify) require it.

---

## What KompWatch Will and Won't Catch

| Will catch | Won't catch |
|------------|-------------|
| New article appearing in the nav/index | Content changes deep inside individual articles (unless you add those URLs separately) |
| A section renamed or removed | Draft articles not yet published |
| New integration listed in a sidebar | Articles behind auth/login |
| Changelog entries on the docs site | PDF or downloadable file changes |

To go deeper, add individual article URLs for pages you care about most (e.g., a competitor's API limits page, their pricing FAQ in docs, their changelog).

---

## Reducing Noise

Docs sites can be chatty if you target too broadly:

- **Use specific selectors** — `nav` or `.sidebar` instead of `body`
- **Filter by severity** — skip LOW changes in your digest settings for this competitor
- **Watch index pages, not content pages** — you want to know when a new doc exists, not every word edit inside it

---

## FAQ

**"My competitor's docs require a login — can I still monitor them?"**
Not directly. See [Monitoring Login-Required Pages](./monitoring-login-required-pages.md). If they have a public changelog or a public "what's new" page, monitor that instead.

**"Their docs site uses Intercom and some articles are gated."**
Intercom allows gating individual articles. Monitor the collection index — even gated articles appear as list items in the index when added.

**"I'm getting changes every day — something is definitely off."**
The selector is probably too broad. Common culprit: a "last updated" timestamp in the page header that changes on every article edit. Try narrowing to just the navigation list. See [CSS Selectors](./css-selectors.md) for help.

**"Which competitors' docs are most worth monitoring?"**
Prioritize competitors that are actively shipping (recent changelog activity, job postings for engineers). A stagnant docs site adds noise without signal. Start with one competitor's docs and expand once you've tuned the selector.

---

*Related: [Which Pages to Monitor per Competitor](./which-pages-to-monitor-per-competitor.md) · [Monitoring JavaScript SPA Sites](./monitoring-javascript-spa-sites.md) · [Managing Alert Fatigue](./managing-alert-fatigue.md)*
