# Monitoring Competitor Events and Webinars

## Why does this matter?

A competitor's events page, webinar calendar, and conference presence are some of the most overlooked competitive intelligence sources — and some of the most revealing.

Events force competitors to be specific. They have to name a topic, pick an audience, and say something worth showing up for. That clarity is signal:

- **Webinar topics** reveal what use cases they're doubling down on and what objections they're trying to overcome
- **Event sponsorships** signal which markets they're investing in (SMB conferences vs. enterprise summits vs. vertical trade shows)
- **Speaker sessions** expose positioning language they're rehearsing before it reaches their website
- **Virtual vs. in-person ratio** indicates whether they're scaling outbound or retrenching to digital-only GTM
- **Event frequency changes** — ramping up means pipeline focus; going quiet often precedes a reorg or funding gap

## What pages should I monitor?

Add these as separate tracked URLs in KompWatch:

| Page | What to watch for |
|---|---|
| `/events`, `/webinars`, `/workshops` | New events added, topics and titles, dates and cadence |
| `/resources` or `/learn` | Webinar recordings appearing — each new recording is a past event that happened |
| Conference sponsor listings | Search `[competitor name] sponsor` on major conference sites |
| `/about` or press pages | Speaking announcements, keynote appearances |

For the events/webinars page, use a CSS selector scoped to the event listing container to reduce noise from nav and footer changes:

```css
[class*="events"], [class*="webinar"], [class*="sessions"], main ul, .event-list
```

## How do I interpret a webinar topic change?

When a competitor runs the same webinar category repeatedly, they're investing there. When they stop, something changed.

| Signal | What it might mean |
|---|---|
| New "How to migrate from [tool]" webinar | Actively targeting a competitor's customers |
| Sudden vertical-specific events (e.g. "CI for fintech") | Vertical GTM push, likely tied to a new customer win or ICP shift |
| Executive-led webinars replacing practitioner ones | Moving upmarket — executives sell to executives |
| Event cadence drops from weekly to monthly | Demand gen team is stretched or strategy is shifting |
| First-ever in-person event | Maturity signal — usually follows a funding round or Series B+ |

## Can I track conference sponsorships?

Not automatically, since conference sponsor lists aren't always on competitor-owned URLs. The best approach:

1. **Monitor competitor blog and newsroom** for press releases about sponsorships
2. **Monitor their LinkedIn company page** via KompWatch if they publish events there
3. **Add the conference sponsor page directly** as a tracked URL if the conference publishes a sponsor list (many do)

KompWatch will detect when their name appears or disappears from a sponsor roster.

## What does it mean when a competitor cancels or removes events?

A sudden removal of scheduled events — especially after a consistent cadence — can indicate:

- **Budget cuts or reorg** — demand gen events are often first to go
- **Pivot in GTM strategy** — e.g. moving from event-led to PLG/product-led growth
- **Acquisition or major leadership change** — programs get paused during transitions

Cross-reference with job listing changes (are they removing demand gen roles?) and pricing page changes to build a fuller picture.

## How is this different from monitoring their blog or press releases?

Blog posts are crafted and curated. Events are commitments — they've booked venues, hired speakers, and promoted to audiences. The gap between what a competitor says in a blog post and what they're willing to put on a stage is often where the real signal lives.

Events also tend to lag the website by weeks. Monitoring their events page gives you a second, independent signal that confirms (or contradicts) what you're seeing in pricing and feature changes.

## Related FAQs

- [Which pages to monitor per competitor](/docs/faq/which-pages-to-monitor-per-competitor.md)
- [Monitoring competitor newsletters](/docs/faq/monitoring-competitor-newsletters.md)
- [Monitoring competitor press and newsrooms](/docs/faq/monitoring-competitor-press-and-newsrooms.md)
- [Detecting competitor upmarket migration signals](/docs/faq/detecting-competitor-upmarket-migration.md)
- [Monitoring competitor social proof changes](/docs/faq/monitoring-competitor-social-proof.md)
- [Responding to a major competitor move](/docs/faq/responding-to-a-major-competitor-move.md)
