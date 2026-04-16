# Data Security & Privacy

KompWatch is built for teams who monitor sensitive competitive intelligence. Here's how we protect your data.

## Authentication

We use **magic link login** — there are no passwords in KompWatch. Clicking a time-limited link in your inbox is the only way to sign in. This eliminates the most common account-compromise vector (stolen or reused passwords).

## Data in Transit

All traffic between your browser and KompWatch is encrypted over **HTTPS/TLS**. We do not serve any content over plain HTTP.

## Payment Security

We do **not** store your payment card details. All billing is handled by [Stripe](https://stripe.com/docs/security), which is PCI DSS Level 1 certified — the highest level of payment security certification.

## What We Store

| Data type | Where it lives |
|---|---|
| Account info (email, name) | KompWatch database |
| Competitor URLs and selectors | KompWatch database |
| Snapshots and detected changes | KompWatch database |
| Digest email history | KompWatch database |
| Payment/billing info | Stripe only |

We do **not** collect browsing history, device fingerprints, or any data unrelated to competitor monitoring.

## Data Deletion

You can request complete deletion of your account and all associated data at any time. See [GDPR & Data Deletion →](gdpr-data-deletion.md) for instructions.

## AI and Data Processing

KompWatch uses the **Claude API (by Anthropic)** to generate plain-English summaries of detected competitor changes. Here's what that means for your data:

**What is sent to Anthropic:**
- The text diff of changed content on a competitor's public webpage (e.g., updated pricing text or a new feature description)
- The competitor URL, as context

**What is NOT sent to Anthropic:**
- Your account email, name, or any personally identifiable information
- Payment details
- Data from your own website or internal systems

Competitor pages are public websites — the content we analyze is already publicly accessible on the internet. We send only the detected diff, not the full page snapshot.

**Anthropic's data practices:**
API inputs and outputs via Anthropic's API are not used to train Anthropic's models by default. For details, see [Anthropic's Privacy Policy](https://www.anthropic.com/privacy) and [API usage policies](https://www.anthropic.com/policies/usage-policy).

**Data minimization:**
AI summaries are cached in KompWatch's database after generation. The same change is never sent to the API twice.

If your organization's security policy restricts third-party AI processing, [contact us](mailto:security@kompwatch.com) to discuss options.

## Privacy Policy and Terms

Full details are available at:
- [kompwatch.com/privacy](https://kompwatch.com/privacy) — Privacy Policy
- [kompwatch.com/terms](https://kompwatch.com/terms) — Terms of Service

## Questions?

Email [security@kompwatch.com](mailto:security@kompwatch.com) for security-related inquiries, or [privacy@kompwatch.com](mailto:privacy@kompwatch.com) for privacy and data requests.

---
*Found a security issue? Please report it responsibly to [security@kompwatch.com](mailto:security@kompwatch.com) rather than posting publicly.*
