# Monitoring Competitor API Documentation Changes

**Short answer:** Yes — KompWatch can monitor competitor API docs, changelogs, and developer portals just like any other web page. Since many developer-tool companies signal product direction through their API documentation before they publish a blog post, tracking docs changes gives you early notice of new endpoints, deprecations, and capability expansions.

---

## Why API docs are a high-signal page to track

Most CI setups focus on pricing and feature pages. That's correct for marketing-facing changes, but it misses an entire category of signal that's especially relevant for technical buyers and competitors in the developer-tools space:

- **New endpoints** signal capability expansion before the marketing page updates
- **Deprecated fields or methods** indicate product direction shifts or architectural rewrites
- **Rate limit changes** affect what's feasible to build on their platform
- **Authentication method changes** (e.g., switching from API keys to OAuth) suggest a security posture shift or enterprise push
- **New SDK versions and changelogs** reveal how quickly competitors ship and what they're prioritizing
- **Webhook event types** show which integrations and automations they're investing in

A competitor's API changelog is often updated the day a feature ships — days or weeks before a press release or feature page update.

---

## Which pages to monitor

For most developer-tool competitors, focus on:

| Page | What to look for |
|---|---|
| `/docs/api/changelog` or `/changelog` | New versions, deprecations, breaking changes |
| `/docs/api/reference` or `/api-reference` | New endpoints, removed parameters |
| `/docs/webhooks` | New event types (signals integration investment) |
| `/docs/sdks` or `/libraries` | New language support, version bumps |
| `/docs/authentication` | Auth method changes, new scopes |
| GitHub releases page (`/releases`) | Public SDK or CLI release notes |

Some documentation platforms use client-side rendering (Stoplight, Readme, Mintlify, Redocly). KompWatch uses Playwright (headless Chromium), so it renders JavaScript before snapshotting — these pages work.

---

## Setting up monitoring

### Step 1: Identify the docs URL

Navigate to your competitor's developer docs. The API changelog is usually at a path like:
- `stripe.com/docs/api/changelog`
- `developer.example.com/changelog`
- `docs.example.com/api/versions`

If their changelog is in GitHub (e.g., a `CHANGELOG.md` in a public repo), you can monitor the rendered GitHub page directly — use `https://github.com/org/repo/blob/main/CHANGELOG.md`.

### Step 2: Use a precise CSS selector

Docs sites are often noisy — nav updates, sidebar changes, and cookie banners trigger false positives if you monitor `body`. Use a selector that targets just the changelog content:

| Documentation platform | Suggested selector |
|---|---|
| Mintlify / Readme | `article`, `.content`, `main` |
| Stoplight / Redocly | `.markdown-body`, `.api-content` |
| Plain HTML docs | `#changelog`, `.release-notes`, `main > article` |
| GitHub blob view | `#readme`, `.blob-code` |

To find the right selector: open the competitor's docs in Chrome → right-click the changelog content → Inspect → look for a container `id` or stable `class`. Avoid classes like `_23xPk` (generated/hashed) — those change on every deploy.

See [CSS Selectors Guide](./css-selectors.md) for a step-by-step walkthrough.

### Step 3: Set monitoring frequency

For high-velocity competitors that ship frequently:
- **Pro plan** (6-hour cycles) catches same-day updates
- **Team plan** (hourly) gives near-real-time notification for fast-moving competitors

For slower-moving enterprise tools, **Free** (daily) is usually sufficient — API changes are rarely stealth-launched and always appear in the next day's digest.

### Step 4: Connect Slack for immediate alerts

API changes are time-sensitive — your engineering or product team benefits from Slack notifications rather than waiting for the next email digest. Connect Slack in **Settings → Integrations → Slack** and route HIGH-severity alerts to `#competitive-intel` or `#product`.

---

## Example: what a useful API change alert looks like

When KompWatch detects a change to a competitor's API changelog, the AI-generated digest summary might read:

> **Acme Analytics – API Reference (HIGH)**
> New section added: `/v2/exports/scheduled`. New endpoint supports scheduled data exports with webhook callbacks on completion. Previously, exports were synchronous-only. This suggests Acme is targeting larger data volumes and enterprise customers who can't wait for synchronous responses.

That's actionable intelligence your product team can discuss in the next sprint planning: do you already support async exports? Should you?

---

## Limitations

- **Rate-limited or auth-gated docs**: Some API references require authentication (e.g., internal portals). KompWatch monitors publicly-accessible URLs only. If key documentation is auth-gated, monitor their public changelog page instead.
- **PDF or downloadable specs**: KompWatch monitors web pages, not downloadable files. If a competitor publishes an OpenAPI spec as a downloadable YAML/JSON file, you can monitor the HTML page that links to it — a new filename or version string will be detected.
- **GitHub private repos**: KompWatch can only monitor public GitHub pages.
- **Versioned docs with dropdown selectors**: If the "latest" content is rendered client-side on URL change (e.g., via a version dropdown), the URL may stay static while content changes. In this case, monitor the URL that corresponds to their latest version, and update it when they cut a new major version.

---

## Related articles

- [CSS Selectors Guide](./css-selectors.md)
- [Monitoring JavaScript SPA Sites](./monitoring-javascript-spa-sites.md)
- [Which Pages to Monitor Per Competitor](./which-pages-to-monitor-per-competitor.md)
- [Monitoring Competitor GitHub and Open Source](./monitoring-competitor-github-and-open-source.md)
- [Per-Competitor Notification Settings](./per-competitor-notification-settings.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will follow up within 24 hours.*
