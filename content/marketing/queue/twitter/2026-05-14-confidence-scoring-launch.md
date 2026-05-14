---
platform: twitter
type: tweet
status: ready
score: 8/10
keywords: [ai competitor monitoring, change detection noise, competitor alert accuracy, signal vs noise ci tools]
---
Shipped something today: every detected change now gets a confidence score from 0 to 100.

Sub-40? Discarded. Not in your inbox.

We were generating too many "changes" that were really just nav menus getting A/B tested or cookie consent banners reshuffling. Technically different HTML. Zero competitive signal.

Testing showed ~60% reduction in low-value alerts without dropping anything meaningful.

Still tuning the threshold. 40% feels right. Will probably move it based on real user feedback.
