# Can I monitor competitor community pages and developer communities?

**Short answer:** Yes — for public community hubs, landing pages, and linked resources. Discord servers, Slack groups, and private forum threads require membership and can't be scraped, but the public-facing entry points (join pages, community homepages, forum index pages) are fully trackable.

---

## What counts as a "community page"?

Most SaaS competitors publish public signals tied to their communities:

| Surface | Trackable? | What to watch |
|---|---|---|
| `/community` or `/slack` landing page | ✅ Yes | Member count, featured channels, positioning copy |
| Public forum index (Discourse, Circle) | ✅ Yes | Category list, pinned announcements, topic counts |
| Discord join link page | ✅ Yes | Member count widget, featured roles/channels |
| GitHub Discussions index | ✅ Yes | Open threads, contribution counts, category changes |
| Developer portal (`/developers`) | ✅ Yes | SDK links, API version badges, changelog embeds |
| Private Discord / Slack interior | ❌ No | Requires membership — not accessible to KompWatch |
| Gated forum posts | ❌ No | Login-required content is behind a wall |

---

## Why community pages matter as competitive signals

Community activity is a leading indicator of product health and GTM momentum:

- **Sudden member count jumps** often follow a Product Hunt launch, viral tweet, or major partnership announcement — before the press release drops.
- **New channel or category additions** (e.g., "AI integrations", "Enterprise") signal where a competitor is investing or pivoting.
- **Developer portal changes** — new SDK language support, API version bumps, deprecation notices — indicate roadmap direction before it reaches the marketing site.
- **Community positioning copy changes** ("Join 10,000 teams" → "Join 40,000 teams") tracks growth narrative shifts.
- **A community going quiet or being archived** can signal churn, a pivot away from PLG, or resource constraints.

---

## Recommended pages to add per competitor

For each competitor with an active community presence, add:

1. **Community landing page** — `/community`, `/slack`, `/discord`, `/forum`
2. **Developer portal root** — `/developers`, `/docs`, `/api`
3. **Forum index** — the top-level Discourse or Circle page (not individual threads)
4. **GitHub Discussions** — if public (`github.com/org/repo/discussions`)

Use a CSS selector to strip navigation and focus on the signal-rich area:

```
# Forum index — track category list and pinned topics
.category-list, #main-outlet

# Discourse forum
#main-outlet .category-list

# Circle community home
.community-feed, .community-sidebar

# GitHub Discussions
#repo-content-pjax-container .discussion-sidebar-item
```

---

## Example: what a community page change looks like in your digest

> **Competitor: Klue** | Page: `klue.com/community`
> **Change type:** Content — Medium severity
> **Summary:** Member count updated from "5,000+ enablement pros" to "12,000+ enablement pros." New section added: "AI Assist" channel now featured prominently alongside existing "Battlecards" and "Win/Loss" sections.
> **Signal:** 2.4× member count growth claim + new AI channel = community-led AI positioning push.

---

## Tracking GitHub and open-source activity

For developer tools and API-first products, GitHub is often the richest community signal:

- **Add the `/discussions` index page** of a competitor's main repo to track what users are asking about.
- **Watch the `/releases` page** for shipping cadence and changelog language.
- **Monitor the repo's README** if the competitor open-sources core components — feature additions often appear here before the marketing site is updated.

KompWatch's AI digest will flag these as **FEATURE** or **CONTENT** change types and surface the relevant diff.

---

## Limitations to be aware of

- **Dynamic member counts** (JavaScript-rendered) are supported on most public community pages. If KompWatch shows no data for a community page, try adding it with the `body` selector first to confirm it's loading, then narrow with a more specific selector.
- **Private Discord interior** — KompWatch cannot join or monitor interior Discord channels. Track the public join page or Discord.gg landing page instead.
- **Forum post volume** — KompWatch tracks the index page, not individual post content. For deep forum intelligence (what users complain about, requested features) this is a manual research task.

---

## Related FAQs

- [Monitoring competitor GitHub and open-source activity](./monitoring-competitor-github-and-open-source.md)
- [Monitoring competitor help centers and docs](./monitoring-competitor-help-centers-and-docs.md)
- [Monitoring competitor changelogs and release notes](./monitoring-competitor-changelog-and-release-notes.md)
- [Which pages to monitor per competitor](./which-pages-to-monitor-per-competitor.md)
- [Monitoring JavaScript SPA sites](./monitoring-javascript-spa-sites.md)
