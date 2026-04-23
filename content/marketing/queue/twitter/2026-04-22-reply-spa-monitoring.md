---
platform: twitter
type: reply
target: threads about monitoring SPAs / JavaScript sites / why tools fail on modern websites
status: draft
keywords: [spa monitoring, playwright scraping, competitor website tracking]
---
The failure mode on SPAs: HTTP request against a React app returns the shell HTML before the framework renders. You're snapshotting an empty div.

Need a headless browser that waits for network idle. Obvious in hindsight. Most tools skip it — slower and more expensive to run.
