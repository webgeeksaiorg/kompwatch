---
platform: reddit
type: comment
target: r/saas or r/productmanagement — any thread about competitor monitoring or alert fatigue
status: draft
keywords: [alert fatigue, competitor monitoring, saas alerts, AI filtering]
---

The noise problem is real. We built competitor monitoring (KompWatch) and the first version just emailed you every HTML diff. People turned it off within a week.

What actually works: AI confidence scoring on the diff itself. The model evaluates whether a detected change is meaningful (pricing update, new feature copy, CTA change) vs. noise (tracking pixel fired, copyright year updated, lazy-loaded image URL changed).

Now users set a threshold — "only tell me about changes the AI is >70% confident matter." Digest quality went up, unsubscribes went down.

The meta-lesson: alerts that fire too often train you to ignore them. Better to miss some changes than to lose trust in the signal.
