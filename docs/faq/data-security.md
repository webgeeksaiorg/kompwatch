# Data Security & Privacy

CompeteWatch is built for teams who monitor sensitive competitive intelligence. Here's how we protect your data.

## Authentication

We use **magic link login** — there are no passwords in CompeteWatch. Clicking a time-limited link in your inbox is the only way to sign in. This eliminates the most common account-compromise vector (stolen or reused passwords).

## Data in Transit

All traffic between your browser and CompeteWatch is encrypted over **HTTPS/TLS**. We do not serve any content over plain HTTP.

## Payment Security

We do **not** store your payment card details. All billing is handled by [Stripe](https://stripe.com/docs/security), which is PCI DSS Level 1 certified — the highest level of payment security certification.

## What We Store

| Data type | Where it lives |
|---|---|
| Account info (email, name) | CompeteWatch database |
| Competitor URLs and selectors | CompeteWatch database |
| Snapshots and detected changes | CompeteWatch database |
| Digest email history | CompeteWatch database |
| Payment/billing info | Stripe only |

We do **not** collect browsing history, device fingerprints, or any data unrelated to competitor monitoring.

## Data Deletion

You can request complete deletion of your account and all associated data at any time. See [GDPR & Data Deletion →](gdpr-data-deletion.md) for instructions.

## Privacy Policy and Terms

Full details are available at:
- [kompwatch.com/privacy](https://kompwatch.com/privacy) — Privacy Policy
- [kompwatch.com/terms](https://kompwatch.com/terms) — Terms of Service

## Questions?

Email [security@kompwatch.com](mailto:security@kompwatch.com) for security-related inquiries, or [privacy@kompwatch.com](mailto:privacy@kompwatch.com) for privacy and data requests.

---
*Found a security issue? Please report it responsibly to [security@kompwatch.com](mailto:security@kompwatch.com) rather than posting publicly.*
