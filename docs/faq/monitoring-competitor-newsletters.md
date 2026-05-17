# Can KompWatch Monitor Competitor Email Newsletters?

KompWatch monitors **public web pages** — it takes snapshots of URLs and detects changes to their HTML. Email newsletters are private, inbox-delivered content and aren't directly crawlable by KompWatch. However, there are practical workarounds and adjacent signals you can track today.

## What KompWatch Can't Do

| Source | Tracked? |
|--------|----------|
| Competitor website (any page) | Yes |
| Competitor blog / changelog | Yes |
| Competitor email newsletters | No — emails aren't public URLs |
| Competitor email unsubscribe pages | Partial — see below |

## What You Can Track Instead

### 1. Subscribe and Monitor the Web Archive

Most email platforms (Mailchimp, HubSpot, Beehiiv, Substack, etc.) publish a **web archive** — a public page listing all past email campaigns. These are regular URLs and KompWatch can snapshot them.

To find a competitor's email archive:
- Look for a "View in browser" link in any email from them — that URL is the archived version
- The archive index is usually at a predictable URL like `email.acmecorp.com/archive` or `acmecorp.substack.com`
- Add that URL as a KompWatch competitor page with a name like "Acme Newsletter Archive"

When a new campaign is added to the archive, KompWatch detects it as a new entry — effectively alerting you the moment they send a campaign.

**Suggested selector:** `.archive-list`, `.campaign-archive`, or leave it as `body` and refine after the first snapshot.

### 2. Monitor Their Substack or Newsletter Homepage

If a competitor publishes on Substack, Beehiiv, Ghost, or a custom newsletter platform, the public homepage typically lists recent issues:

| Platform | Archive URL pattern |
|----------|-------------------|
| Substack | `[publication].substack.com` |
| Beehiiv | `[publication].beehiiv.com` |
| Ghost | `[publication].ghost.io` or their custom domain |
| Mailchimp | `eepurl.com/…` (from "View in browser" link in email) |

Add the archive or homepage URL to KompWatch. New issues appear as detected changes.

### 3. Track Their Unsubscribe / Preference Center

Most marketing emails link to a preference center (e.g. `email.acmecorp.com/preferences`). These pages often list available newsletters and their cadence, and occasionally update when new content tracks are added or removed.

This won't show you email content, but it signals changes to their email program structure.

### 4. Subscribe Manually — Use KompWatch for Context

Subscribe to your competitor's newsletter with a dedicated email address (e.g. `competitive+acme@yourcompany.com`). Use KompWatch to monitor their product, pricing, and positioning pages at the same time. Reading their emails alongside KompWatch change alerts gives you the full picture: what they're broadcasting to customers vs. what's quietly changing on their site.

## Recommended Setup

1. **Subscribe** to the competitor's newsletter manually
2. **Add their newsletter archive URL** to KompWatch (if they use Substack, Beehiiv, Mailchimp, Ghost)
3. **Add their main website, pricing page, and changelog** as separate KompWatch entries
4. **Set severity filter to Medium+** to stay focused on meaningful changes

This covers both the editorial signals (newsletter campaigns) and the product/pricing signals (website changes) in one dashboard.

## Is Email Newsletter Monitoring on the Roadmap?

It's on our radar. The challenge is that email content requires subscribing to competitors' lists with monitored inboxes — a meaningfully different infrastructure from web-page snapshotting. If this is a priority for your team, email [support@kompwatch.com](mailto:support@kompwatch.com) and mention your use case — it helps us prioritize.

---
*Related: [Social Media Monitoring](./social-media-monitoring.md) · [Which Pages to Monitor Per Competitor](./which-pages-to-monitor-per-competitor.md) · [Monitoring Competitor Reviews](./monitoring-competitor-reviews.md) · [Community Platform Monitoring](./community-platform-monitoring.md)*
