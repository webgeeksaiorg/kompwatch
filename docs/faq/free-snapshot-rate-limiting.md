# Free Snapshot Rate Limiting

## Why am I seeing a rate limit error?

The free competitor snapshot is limited to **3 requests per email address per hour**. This prevents abuse of the public endpoint and ensures fair access for everyone.

If you see a message like "Rate limit reached — please try again later," you've submitted 3 or more snapshot requests using the same email address within the last 60 minutes.

## What can I do?

**Option 1: Wait and retry**
The rate limit resets after 60 minutes from your first request in the current window. Try again then.

**Option 2: Sign up for a free account**
KompWatch's [Free plan](/login) includes 2 competitors, daily snapshots, and no credit card required. Account-based snapshots are scheduled automatically and don't share the same rate limit as the public free-snapshot tool.

**Option 3: Upgrade for more coverage**
If you need to monitor more than 2 competitors:

| Plan | Competitors | Snapshot frequency |
|------|-------------|-------------------|
| Free | 2 | Daily |
| Pro ($49/mo) | 10 | Every 6 hours |
| Team ($149/mo) | 50 | Hourly |

## Why is there a rate limit at all?

The free snapshot endpoint runs a live web crawl and AI analysis for every request. Without a rate limit, a single user could exhaust server resources or trigger scraping-like behavior on competitor domains. The 3/hour limit is generous for evaluation purposes while keeping the service stable for everyone.

## I hit the limit but I have a legitimate need for more snapshots

Email [support@kompwatch.com](mailto:support@kompwatch.com) with your use case. For agencies or teams evaluating KompWatch against a larger competitor list, we can sometimes provision a temporary higher-limit evaluation. A free account is usually the faster path — setup takes under 2 minutes.

---

## Related FAQs

- [Free Competitor Snapshot](./free-snapshot.md)
- [Adding a Competitor](./adding-competitors.md)
- [Pricing & Plans](./cancel-or-change-plan.md)
