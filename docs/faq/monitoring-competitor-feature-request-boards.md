# Can I monitor competitor feature request boards?

**Short answer:** Yes — for public boards. Canny, UserVoice, ProductBoard, and similar tools often expose public-facing pages that KompWatch can track. These are among the highest-signal surfaces for understanding what a competitor's customers want and what the roadmap is likely to prioritize next.

---

## Why feature request boards are a goldmine

A competitor's public feature request board is essentially a ranked list of their customers' most painful unmet needs — written by the customers themselves:

- **Top-voted requests** reveal the gaps users experience most acutely. If "Salesforce sync" has 800 votes, that competitor's CRM integration is weak.
- **Status changes** ("Under Review" → "In Progress" → "Shipped") give you roadmap visibility weeks or months before a product blog post drops.
- **New high-vote items** that appear suddenly signal emerging user demand — often triggered by a competitor's own positioning shift or a market event.
- **Requests your product already solves** are instant sales talking points: "Customers on [Competitor] have been asking for X for 2 years. KompWatch ships it on day one."

---

## Which tools expose public boards

| Platform | Public URL pattern | Trackable? |
|---|---|---|
| Canny | `feedback.yourcompetitor.com` or `yourcompetitor.canny.io` | ✅ Yes |
| UserVoice | `yourcompetitor.uservoice.com` | ✅ Yes (index pages) |
| ProductBoard | Portal URLs shared by the vendor | ✅ Yes (if public portal) |
| Linear (public roadmap) | `linear.app/[org]/roadmap` | ✅ Yes |
| GitHub Issues | `github.com/org/repo/issues` | ✅ Yes |
| Aha! Roadmap | `yourcompetitor.ideas.aha.io` | ✅ Yes (if public) |
| Notion public roadmap | Published Notion page URL | ✅ Yes |
| Gated / login-required boards | Any board requiring account login | ❌ No |

---

## Recommended CSS selectors by platform

Narrow your KompWatch selector to the signal-rich area, stripping navigation and footers:

```
# Canny board — top posts list
.canny-PostList, [data-canny]

# UserVoice ideas list
.uvIdeas, .uv-ideas-list

# GitHub Issues index — open issues
#issues-listing .js-issue-row

# Linear public roadmap
.roadmap-timeline, .roadmap-items

# Generic: fallback to body if unsure
body
```

Start with `body` to confirm the page loads, then refine once you can see the rendered HTML in your snapshot.

---

## What changes to watch for

| Change signal | What it means |
|---|---|
| Status changes ("In Progress", "Shipped") | Competitor is actively building this — expect launch in 4–12 weeks |
| New top-voted item appears | Emerging user pain point; opportunity to position against it |
| Long-standing item finally moves to "Planned" | Competitive pressure forced their hand — may be reacting to you or market |
| Items merged or closed without shipping | Team deprioritized it — a gap that may persist |
| Vote count jumps on a specific item | User base momentum; worth noting in your win/loss calls |
| Board goes private or disappears | Competitor hiding roadmap — often precedes a major launch or positioning change |

KompWatch classifies most board changes as **FEATURE** or **CONTENT** change type, with severity scored by the scope of the diff.

---

## Example: what a board change looks like in your digest

> **Competitor: Klue** | Page: `feedback.klue.com`
> **Change type:** Feature — High severity
> **Summary:** "Slack digest integration" moved from "Under Review" (412 votes) to "In Progress." New item "AI win/loss coaching" appeared with 0 votes — appears to be an internally-seeded roadmap signal.
> **Signal:** Slack digest shipping soon; AI win/loss is a new strategic bet. Review your positioning on both fronts.

---

## Finding your competitor's public board

Not all companies advertise their feature board. Common discovery patterns:

1. **Check their footer or help center** — many link to "Request a feature" or "Roadmap"
2. **Search**: `site:canny.io "[competitor name]"` or `site:[competitor].uservoice.com`
3. **App footer while logged into a trial** — boards are often linked from inside the product
4. **Their changelog page** — often links back to the feature request board for closed items

Once found, add the board's root URL to KompWatch as a separate tracked page alongside the competitor's main site.

---

## Limitations

- **Private boards** require account login — KompWatch cannot access these. If a competitor shifts from public to private board, you'll see the page go blank or show a login wall.
- **Vote counts are JS-rendered** on most platforms. KompWatch uses headless Chromium and handles JavaScript rendering, so counts are captured correctly on most boards.
- **Deep post content** — KompWatch tracks the board index (list of items + statuses), not individual comment threads. For deep qualitative research, manual review is still needed.
- **Canny's infinite scroll** — on boards with hundreds of items, only the first viewport is reliably captured. Use the category/filter URL parameters to track specific segments (e.g., `?category=integrations`).

---

## Pro tip: track by category

Most Canny and UserVoice boards support URL-based filtering. Instead of monitoring the entire board, create separate KompWatch pages per category to get cleaner, more actionable diffs:

```
feedback.competitor.com?category=integrations
feedback.competitor.com?category=reporting
feedback.competitor.com?sort=top&status=in-progress
```

This gives you focused alerts instead of a noisy whole-board diff when vote counts shift.

---

## Related FAQs

- [Monitoring competitor changelogs and release notes](./monitoring-competitor-changelog-and-release-notes.md)
- [Monitoring competitor help centers and docs](./monitoring-competitor-help-centers-and-docs.md)
- [Monitoring competitor GitHub and open-source activity](./monitoring-competitor-github-and-open-source.md)
- [Monitoring JavaScript SPA sites](./monitoring-javascript-spa-sites.md)
- [Which pages to monitor per competitor](./which-pages-to-monitor-per-competitor.md)
- [Understanding your digest](./understanding-your-digest.md)
