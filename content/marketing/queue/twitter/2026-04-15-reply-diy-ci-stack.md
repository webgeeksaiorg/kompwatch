---
platform: twitter
type: reply
target: threads where developers discuss building their own competitor monitoring or CI tools
status: ready
keywords: [build competitor monitoring tool, DIY competitor tracking, Playwright competitor scraper]
---
Built this exact thing before turning it into a product. The core is simpler than it sounds:

1. Playwright hits the URL (handles SPAs, no basic-HTTP failures)
2. You give it a CSS selector for the section you care about — not `body`, something specific
3. Store the HTML, diff against previous
4. Pass the diff to an LLM: "what changed that a PM would care about?"
5. Email the plain-English summary

The build is a weekend. The maintenance is the real cost — handling sites that rotate layouts, CSS class names that change weekly, SPAs with dynamic content that confuses your selectors.

If you want to own it: totally worth building. If you'd rather just use it: that's what we're for.
