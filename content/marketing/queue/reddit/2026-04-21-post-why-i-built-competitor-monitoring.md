---
platform: reddit
type: post
target: r/SaaS
status: draft
keywords: [competitor monitoring tool, crayon alternative, building in public]
---
**I got a $28K Crayon quote. So I spent 3 weeks building my own competitor monitoring tool instead.**

Background: I'm building a SaaS product in a space with maybe 8 direct competitors. Every Monday I had 6 browser tabs pinned to competitor pricing pages. I'd check them manually, try to remember what had changed, write a note in Notion.

Half the time I'd forget to check. The other half I'd miss something that changed on Wednesday.

So I got on a Crayon call. Their opening quote was $28,750/year. For a solo founder watching 8 competitors. I asked if they had a starter plan. They don't.

I started looking at alternatives. Visualping does the basics — email you when a page changes. But it doesn't tell you *what* changed in any useful way. Just screenshots. Google Alerts misses almost everything. Klue starts at $16K/year and requires a full-time analyst to get value.

So I built my own thing. Playwright headless browser, CSS selectors for the sections I actually care about (pricing table, feature list, job listings), AI summarizing the diff in plain English. Works on SPAs. Emails me a digest every morning.

Three months in, it's caught:
- A competitor quietly raising prices by $20/mo (no announcement)
- Two competitors adding features I didn't know about
- One competitor posting 4 ML engineer job listings — a pretty clear signal

Now I'm turning it into a product because apparently other people have the same problem.

If you track competitors manually right now, curious what your workflow looks like. Specifically: do you have a system, or is it just vibes and memory?

---
*Building KompWatch — competitor monitoring for SaaS teams who can't afford Crayon. $49/mo. Still in early access.*
