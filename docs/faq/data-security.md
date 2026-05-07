# Data Security & Privacy

KompWatch is built for teams who monitor sensitive competitive intelligence. Here's how we protect your data.

For a full trust center including our subprocessors list, responsible disclosure policy, and vendor security questionnaire process, see **[kompwatch.com/security](https://kompwatch.com/security)**.

## Authentication

We use **magic link login** — there are no passwords in KompWatch. Clicking a time-limited link in your inbox is the only way to sign in. This eliminates the most common account-compromise vector (stolen or reused passwords). Sessions are signed JWTs with conservative expiry.

## Data in Transit & At Rest

All traffic between your browser and KompWatch is encrypted over **HTTPS/TLS 1.2+** with HSTS enabled. We do not serve any content over plain HTTP.

The PostgreSQL database is encrypted at rest using **AES-256 disk encryption**. Snapshots and screenshots stored in object storage are encrypted server-side. Daily encrypted backups are retained for 14 days and stored in a separate region.

**Data hosting:** KompWatch infrastructure runs in the **EU (Hetzner, Germany)** on dedicated hardware. No customer data is hosted in the United States.

## Access Controls

Production database access is limited to a small number of engineers and audited. No customer support staff have direct database access — all admin operations go through the application layer. The production database is not publicly reachable; application servers connect over a private network.

## Payment Security

We do **not** store your payment card details. All billing is handled by [Stripe](https://stripe.com/docs/security), which is PCI DSS Level 1 certified — the highest level of payment security certification.

## What We Store

| Data type | Where it lives |
|---|---|
| Account info (email, name) | KompWatch database (EU) |
| Competitor URLs and selectors | KompWatch database (EU) |
| Snapshots and detected changes | KompWatch database (EU) |
| Digest email history | KompWatch database (EU) |
| Payment/billing info | Stripe only |

We do **not** collect browsing history, device fingerprints, or any data unrelated to competitor monitoring.

## Data Deletion

You can request complete deletion of your account and all associated data at any time. When you cancel, account data is hard-deleted within 30 days unless you request immediate deletion. Logs are retained for 90 days. See [GDPR & Data Deletion →](gdpr-data-deletion.md) for instructions.

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

## Subprocessors

KompWatch uses the following third-party services that process customer data:

| Vendor | Purpose |
|---|---|
| **Stripe** | Payment processing, subscription billing, invoices |
| **Resend** | Transactional email delivery — magic links and digests |
| **Anthropic** | AI analysis of competitor page changes (Claude API). Only competitor page content is sent — no customer-identifying data |
| **Plausible Analytics** | Privacy-focused, cookieless website analytics. No personal data transmitted |
| **Coolify (self-hosted)** | Deployment platform on dedicated hardware — not multi-tenant with other vendors |

A full subprocessor list with links to each provider's privacy policy is maintained at [kompwatch.com/security](https://kompwatch.com/security).

## SOC 2

Not yet. SOC 2 Type I is on the roadmap once we exit early-access pricing. Until then, security practices are published openly at [kompwatch.com/security](https://kompwatch.com/security). If you need a vendor security questionnaire (CAIQ, SIG-Lite, or custom), email [security@kompwatch.com](mailto:security@kompwatch.com) — most turn around within two business days.

## GDPR & Data Processing Agreement

KompWatch is GDPR-compliant. A **Data Processing Addendum (DPA)** is available on request — email [privacy@kompwatch.com](mailto:privacy@kompwatch.com). EU residents can exercise access, deletion, and portability rights at the same address.

## Responsible Disclosure

Found a security issue? Email [security@kompwatch.com](mailto:security@kompwatch.com) with reproduction steps and impact. Give a reasonable window (typically 30 days) before public disclosure. Do not run automated scanners or access data that isn't yours. We publicly credit researchers who report valid issues in good faith.

## Privacy Policy and Terms

Full details are available at:
- [kompwatch.com/privacy](https://kompwatch.com/privacy) — Privacy Policy
- [kompwatch.com/terms](https://kompwatch.com/terms) — Terms of Service
- [kompwatch.com/security](https://kompwatch.com/security) — Trust Center (subprocessors, practices, responsible disclosure)

## Questions?

Email [security@kompwatch.com](mailto:security@kompwatch.com) for security-related inquiries, or [privacy@kompwatch.com](mailto:privacy@kompwatch.com) for privacy and data requests.
