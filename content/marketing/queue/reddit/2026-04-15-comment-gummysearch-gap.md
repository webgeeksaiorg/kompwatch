---
platform: reddit
type: comment
target: r/entrepreneur or r/SaaS threads about GummySearch alternatives or tools for monitoring competitors on Reddit
status: ready
keywords: [GummySearch alternative, competitor monitoring Reddit, track competitor mentions]
---
GummySearch's shutdown left a real gap for the Reddit-monitoring piece (tracking what people say *about* your competitors). That's genuinely hard to replace now that they lost API access.

Worth separating that from website monitoring though — they're different problems.

For tracking what changes on your competitor's actual website (pricing, features, job listings), the approach that's worked well for me: Playwright to render the page, a specific CSS selector to watch only the relevant section, then an LLM to translate the HTML diff into "what actually changed."

The key insight is the last step. Without LLM summarization you get thousands of lines of changed HTML markup, most of it noise. With it you get "they removed the free tier and added a 14-day trial to Pro." That's the whole value.

I turned this into a product (kompwatch.com) but the core approach is buildable in a weekend if you want to own it. Happy to share the architecture if useful.
