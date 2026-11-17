---
platform: reddit
type: post
target: r/SaaS
status: draft
keywords: [competitor monitoring tool, track competitor website changes, build competitor tracking]
---

**Title:** Built a tool to replace my Monday morning competitor tab ritual — here's what I learned

I had 12 competitor URLs pinned in Chrome. Every Monday I'd open all of them, manually scan for changes, and take notes.

Half the time I'd forget to check. The other half I'd miss something that happened Wednesday.

After losing a deal to a competitor who had quietly added a feature we didn't know about, I decided to actually fix this.

**What I built:**

A cron job runs twice a day, screenshots and HTML-diffs each competitor page. If anything changed, Claude reads the diff and writes a plain-English summary: "Competitor X added an annual billing toggle to their pricing page. Plan limits appear unchanged."

That summary goes into a weekly digest email. Monday morning, coffee, 5 minutes to read.

**What I learned building it:**

1. **Most competitor changes are boring.** Footer updates, CDN link changes, blog post additions. You have to filter these out or you get alert fatigue immediately. Severity scoring was the hardest part.

2. **React/SPA sites are a nightmare to diff.** Static HTML sites? Easy. Next.js sites with client-side hydration? The DOM changes on every load even if the content didn't change. Had to add network-idle waiting + extra delay to get stable snapshots.

3. **The 3-page rule.** You don't need to monitor everything. Pricing page, features page, homepage. That's 80% of the value. Add careers page if you care about their hiring signals. That's it.

4. **Copy changes > feature changes (sometimes).** When a competitor changes their homepage headline from "Project management" to "AI-powered work OS," that's not a feature update. That's a strategic repositioning. Those subtle messaging shifts take months of work internally — they're a telegraph of where they're going.

5. **Weekly email beats instant notifications.** Built Slack alerts first. Everyone muted them after two days of "competitor updated their footer." Switched to weekly digest. Open rate is now ~90% because every email has actual signal.

**The tool is KompWatch.** It's $49/mo if you want to use it instead of building it. Or build your own — the architecture isn't that complicated. Happy to share more about the technical side if people are interested.

What's your current competitor monitoring setup? Curious if anyone else has figured out a smarter filtering approach.
