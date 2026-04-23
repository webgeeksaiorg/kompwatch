---
platform: reddit
type: reply
target: r/SaaS — thread 1sdyb8o "I made a free list of competitive intelligence tools and resources"
target_url: https://old.reddit.com/r/SaaS/comments/1sdyb8o/i_made_a_free_list_of_competitive_intelligence/
status: ready
score: 8.5/10
keywords: [competitor monitoring SPA, javascript website monitoring, competitor tracking tools comparison]
---
Good list. One thing worth flagging for anyone using it to pick a tool: most of these (Visualping, many of the lightweight options) work by fetching raw HTML over HTTP. That works fine on server-rendered sites.

It silently breaks on React/Next.js/Vue apps — which is a growing chunk of SaaS competitor sites. You get a "successful" snapshot of an empty div and diffs that never fire. No error, just nothing useful.

Quick test: Cmd+U (view source) on the page you want to monitor. If you see actual text content in the HTML, you're fine. If you see `<div id="root"></div>` and a wall of script tags, you need a tool that runs a real headless browser and waits for JavaScript to render.

Worth noting in the readme as a use-case distinction — some people will be surprised when they set up monitoring and nothing ever changes.
