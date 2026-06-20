---
platform: reddit
type: reply
target: r/SaaS — "Does anyone actually get value from Google Alerts for competitor tracking?"
status: ready
score: 8/10
keywords: [google alerts competitor monitoring, google alerts limitations, competitor website monitoring]
---

Google Alerts works fine for one thing: news and press. Brand mentions, funding announcements, podcast shoutouts. That's it.

For the stuff that actually moves deals — pricing changes, feature removals, "contact sales" replacing "start free trial" — it's basically blind.

The reason is technical and permanent. Every SaaS pricing page is React or Next.js. Google crawls the HTML shell, not the rendered page. So it sees `<div id="root"></div>` and a script tag. The actual pricing tiers don't exist as far as Google is concerned.

I found this out the hard way. Had Alerts set up on 6 competitors for 18 months. Got 47 alerts. 5 were actually useful. Meanwhile I was still manually checking their pricing pages every week because the Alerts never caught a single pricing change.

Eventually I got tired enough to build something that uses a headless browser (Playwright) to load the full page — JavaScript and all — and then diffs what actually rendered.

Not plugging anything. Just: the Google Alerts gap isn't a configuration problem. It's architectural. Worth knowing so you don't spend 18 months thinking you're covered when you're not.
