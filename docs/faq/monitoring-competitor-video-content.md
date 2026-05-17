# Can KompWatch Monitor Competitor YouTube Channels or Video Content?

KompWatch monitors **web pages** — HTML content at a URL — and does not crawl video files, YouTube feeds, or streaming platforms. However, you can get meaningful competitive signal from video-adjacent web pages that are fully trackable.

## What You Can Monitor (Indirectly)

| Target | What to add in KompWatch | What you detect |
|--------|--------------------------|-----------------|
| YouTube channel page | `https://www.youtube.com/@CompetitorChannel` | New videos appearing in the video list |
| YouTube "Videos" tab | `https://www.youtube.com/@CompetitorChannel/videos` | Upload cadence changes, new titles/thumbnails |
| Competitor's video library page on their own site | e.g. `https://competitor.com/videos` or `/resources/videos` | New webinars, demos, product walkthroughs |
| Webinar registration page | e.g. `https://competitor.com/webinar` | Upcoming events, new webinar topics |
| Wistia / Vimeo showcase page | Public URL if hosted on their site | New video titles appearing |

### YouTube Channel Pages

YouTube channel URLs (`youtube.com/@CompetitorName/videos`) are publicly accessible and KompWatch can snapshot them. The page content includes video titles, upload dates, and view counts.

**Recommended setup:**
1. Add `https://www.youtube.com/@CompetitorName/videos` as a competitor URL
2. Use the CSS selector `.ytd-rich-grid-renderer` or `#contents ytd-rich-item-renderer` to target the video grid and ignore the channel header/stats
3. Set severity threshold to **Low** — video uploads are incremental, low-stakes changes individually, but a sudden burst of new content is a signal

**What to look for:**
- A competitor suddenly publishing product demo videos → likely a new feature or product launch approaching
- Heavy tutorial / onboarding content → indicates they're investing in activation, possibly addressing a churn problem
- Conference talk recordings → signals where they're targeting customers (verticals, company sizes)

**Note:** YouTube may render content client-side. If snapshots return empty or partial results, use the **JavaScript rendering** option in competitor settings. See [Monitoring JavaScript SPA Sites →](./monitoring-javascript-spa-sites.md).

## What KompWatch Cannot Do With Video

- **Transcribe or analyze video audio** — KompWatch captures page HTML/structure, not media files
- **Detect changes inside embedded videos** — if a competitor updates a product demo video in-place at the same URL, KompWatch won't detect the content change (the URL and page HTML stays the same)
- **Monitor private YouTube channels or members-only content** — only public pages accessible without login

## Tracking Competitor Webinar / Event Activity

Webinars and live events are high-signal moments — companies use them to unveil features, run competitive demos, or target specific buyer personas.

**Monitor these pages:**
- `/events`, `/webinars`, `/workshops` on the competitor's site
- Landing pages for their annual conference (if applicable)
- Their blog or changelog for post-event recap posts

When a new webinar title appears (e.g. "Automating CI for Enterprise Sales Teams"), that's a positioning signal worth reviewing — even if you never watch the video.

## Workarounds for Deeper Video Intelligence

If video content is critical for your competitive intelligence:

- **Subscribe to their YouTube channel** — YouTube notifies you of new uploads via the bell icon or email; no tool needed for basic coverage
- **Check their newsroom / blog** — most companies publish a written recap or summary alongside major video content
- **Set a Google Alert** for `site:youtube.com "Competitor Name"` — surfaces new YouTube content in your inbox

---

*Related: [Social Media Monitoring →](./social-media-monitoring.md) · [Monitoring Competitor Press and Newsrooms →](./monitoring-competitor-press-and-newsrooms.md) · [Monitoring JavaScript SPA Sites →](./monitoring-javascript-spa-sites.md)*

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
