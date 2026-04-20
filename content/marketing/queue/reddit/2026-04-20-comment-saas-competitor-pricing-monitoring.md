---
platform: reddit
type: reply
target: r/SaaS — threads about monitoring competitor pricing / how do you track competitors
status: queued-no-credentials
keywords: [competitor pricing monitoring, SaaS competitor tracking, competitor website changes]
---
Did this manually for two years. Spreadsheet with 8 competitor URLs, go through them every Monday, note any changes. Missed a 40% pricing drop from our main competitor for 5 weeks — it happened on a Thursday and I forgot to check.

Eventually built a tool to automate it: Playwright scraping the pages, AI to summarize what changed in plain English, email digest. Originally just for myself. Now it's KompWatch.

If you're a small team and don't want to spend $25K on Crayon: VisualPing (free tier) for basic visual change detection + Google Alerts for press coverage gets you maybe 70% of the way there. Won't catch pricing table changes reliably though — GA doesn't index what it doesn't crawl.

Happy to share how I handled SPA scraping if useful. That part was genuinely painful.
