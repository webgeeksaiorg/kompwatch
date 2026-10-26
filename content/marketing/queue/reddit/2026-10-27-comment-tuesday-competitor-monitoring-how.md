---
platform: reddit
type: comment
target: r/SaaS
status: queued-no-creds
keywords: [competitor monitoring tool, track competitor website, free competitor tracking]
---

We did this the manual way for about a year — saved the competitor pricing URLs in a folder, checked them every Monday. 

Missed a free tier getting killed on a Wednesday. Found out on a sales call when a prospect mentioned it. Embarrassing.

Eventually automated it: Playwright to render the page (important — lots of pricing pages are pure JS/SPA), save the HTML, diff it against last week's version, run it through an LLM to summarize what actually changed in plain English.

That's basically what KompWatch is now. I charge $49/mo for it. But you could build the same thing in a weekend if you're comfortable with Node/Python. The hard part is the noise filtering — raw HTML diffs have a lot of junk.
