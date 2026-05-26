---
platform: twitter
type: reply
target: anyone asking about change detection or AI accuracy in monitoring tools
status: ready
keywords: [AI change classification, competitor monitoring accuracy, change detection]
---

Change type classification is genuinely hard. A pricing page might update its blog sidebar (irrelevant) or add a seat minimum in the fine print (very relevant). Raw HTML diffs don't tell you which.

Our classifier is maybe 85-90% accurate on the type. Not perfect. But it's the difference between "something changed somewhere on that page" and "their pricing changed."

The misses mostly happen on pages with mixed content zones — heavy layout changes where pricing and blog copy live in the same div.
