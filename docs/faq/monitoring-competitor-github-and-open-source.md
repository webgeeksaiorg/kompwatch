# Monitoring Competitor GitHub Repos and Open-Source Activity

Tracking a competitor's open-source presence — new repositories, release notes, changelog pages, and job postings referencing specific technologies — can reveal product direction before it's announced on the marketing site.

KompWatch monitors **public web pages**. It does not connect to the GitHub API directly, but you can monitor several GitHub-hosted pages effectively with the right setup.

---

## What You Can Monitor via KompWatch

| Signal | How to Monitor | Notes |
|---|---|---|
| GitHub releases page | `https://github.com/[org]/[repo]/releases` | New release tags and changelogs |
| Repository README | `https://github.com/[org]/[repo]` | Feature announcements, usage changes |
| Changelog file | `https://github.com/[org]/[repo]/blob/main/CHANGELOG.md` | Structured change history |
| GitHub organization page | `https://github.com/[org]` | New public repos, pinned project changes |
| Open-source blog / announcements | `https://[competitor].com/blog` | Engineering blog posts |
| npm / PyPI package pages | `https://www.npmjs.com/package/[package]` | Version bumps and weekly download trends |

---

## Setting Up GitHub Release Monitoring

### Step 1 — Find the releases URL

Navigate to `https://github.com/[org]/[repo]/releases`. This page lists every tagged release with notes. For most open-source tools, major version releases signal significant product changes.

### Step 2 — Add it as a competitor page

1. Go to [kompwatch.com/competitors](https://kompwatch.com/competitors)
2. Click **Add competitor** (or open an existing competitor and click **Add page**)
3. Enter the releases URL: `https://github.com/[org]/[repo]/releases`
4. Set a **CSS selector** to focus on the release entries and reduce noise from GitHub UI chrome:
   - Try: `.repository-content` — captures the main releases list
   - Or: `[data-target="readme-toc.content"]` — for README monitoring
5. Save and run a manual snapshot to confirm it captures content

### Step 3 — Set severity threshold

GitHub release pages can change frequently with minor patch notes. To reduce noise:
- Set a **minimum severity** of **Medium** or **High** in [Settings → Notifications](https://kompwatch.com/settings)
- Or use [per-competitor notification settings](./per-competitor-notification-settings.md) to apply a higher threshold only to GitHub pages

---

## Monitoring an Org's New Public Repositories

`https://github.com/[org]` shows pinned repos and recently active repositories. Changes here can signal:

- A competitor open-sourcing a previously internal tool
- New SDK or integration work
- Acquisition (a new org appearing under the same umbrella)

Use the CSS selector `.pinned-item-list-item` to track pinned repos specifically, or `[data-tab-item="org-repositories"]` for the repo list.

---

## What KompWatch Cannot Do (and Workarounds)

| Limitation | Workaround |
|---|---|
| Cannot monitor private repos | Only public GitHub content is accessible |
| Cannot query the GitHub API (star counts, fork counts) | Monitor the repo's About section on the public page |
| Cannot alert on specific commit messages | Monitor the releases page or CHANGELOG file instead |
| Cannot track GitHub Discussions or Issues | Monitor the Discussions tab URL: `github.com/[org]/[repo]/discussions` |

---

## Monitoring npm and PyPI Package Pages

If a competitor ships an SDK or CLI tool, their package registry page is a reliable signal source:

**npm:**
- URL: `https://www.npmjs.com/package/[package-name]`
- Selector: `._702d723c` (version number area) — or use `body` and rely on AI diff
- Signals: version bumps, weekly download trends, dependency changes

**PyPI:**
- URL: `https://pypi.org/project/[package-name]/`
- Selector: `.package-header` or `.sidebar-section`
- Signals: new releases, Python version support changes

---

## Practical Use Cases

**"They quietly open-sourced their core engine"**
Monitor `github.com/[competitor-org]` — a new public repo will appear in the organization's repository list.

**"They shipped a major version with breaking changes"**
Monitor `github.com/[org]/[repo]/releases` — KompWatch detects new release entries and summarizes the changelog differences.

**"Their npm download count doubled this quarter"**
Monitor their npm page over time — KompWatch captures the download badge and flags large changes.

**"They're building integrations with tools we support"**
Monitor their README or docs changelog — partnership mentions and new integration sections appear here first.

---

## Tips for Reducing Noise on GitHub Pages

GitHub pages include dynamic elements (star counts, contributor avatars, "updated X minutes ago" timestamps) that can trigger false-positive changes. To reduce this:

- Use a **specific CSS selector** rather than `body`
- Set severity threshold to **Medium** or **High**
- See [A/B Testing and CDN Content Variations →](./ab-testing-and-cdn-variations.md) for general advice on noisy pages

---

## Related Articles

- [Adding Competitors →](./adding-competitors.md)
- [CSS Selectors — Targeting Specific Page Sections →](./css-selectors.md)
- [Which Pages to Monitor per Competitor →](./which-pages-to-monitor-per-competitor.md)
- [Monitoring Multiple Pages per Competitor →](./monitoring-multiple-pages-per-competitor.md)
- [Managing Alert Fatigue →](./managing-alert-fatigue.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
