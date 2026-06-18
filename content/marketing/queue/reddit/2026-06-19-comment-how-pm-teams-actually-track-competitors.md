---
platform: reddit
type: comment
target: r/productmanagement — threads asking about competitor tracking workflow or tools
status: ready
score: 9/10
keywords: [competitor tracking workflow, product management, competitor monitoring, google alerts limitations]
---

Here's the honest breakdown of what actually works vs what sounds good in a process doc:

**What works:**
- RSS on competitor blogs (catches feature announcements, good signal-to-effort ratio)
- LinkedIn job alerts for competitor company (job postings predict roadmap 3-6 months out — hiring ML engineers means an ML feature is coming)
- Direct CSS selector watching on specific pages (pricing, features) if you build or use a tool that renders JavaScript

**What sounds good but doesn't:**
- Google Alerts for pricing page changes — doesn't work because pricing is almost always rendered client-side in React/Vue. The static HTML Google crawls is empty or nearly empty.
- "We have a quarterly CI review" — by the time you're doing the review, you're 3 months behind. Competitors don't wait for your calendar.
- Paying $30K/year for Crayon and hoping the alerts are well-calibrated — they're not, at least not without significant setup time you won't prioritize.

The thing I got wrong for a long time: I treated competitor monitoring as a research task. It's actually a habit problem. Whatever process you choose, the question is whether you'll actually follow it at 9am on a random Wednesday when something changes.

What's your current setup?
