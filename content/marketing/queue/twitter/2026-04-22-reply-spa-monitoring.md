---
platform: twitter
type: reply
target: threads about monitoring SPAs / JavaScript sites / why tools fail on modern websites
status: draft
keywords: [spa monitoring, playwright scraping, competitor website tracking]
---
The failure mode on SPAs is usually at the fetch layer. HTTP request against a React app returns the shell HTML before the framework renders. You're snapshotting an empty div.

You need a headless browser that actually waits for network idle before capturing. Sounds obvious in hindsight. Most tools skip it because it's slower and more expensive to run.
