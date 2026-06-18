---
platform: twitter
type: reply
target: devs or PMs asking about tracking pages behind login/demo walls
status: ready
score: 8/10
keywords: [competitor monitoring, session authentication, headless browser, playwright]
---

Login-walled competitor pages are solvable but slightly cursed.

Pre-authenticate once, store the session cookies, replay them on each scrape cycle. The headless browser gets in like you would. Detects the real content.

I rate-limit hard and only use it for our own competitor tracking, not as a general feature. Still feels ethically adjacent to something. Still haven't fully resolved that.
