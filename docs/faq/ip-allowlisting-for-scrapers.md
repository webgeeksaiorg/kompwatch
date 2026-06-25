# IP Allowlisting for KompWatch Scrapers

If your competitor's site or your own infrastructure uses IP-based allowlisting or blocklisting, here's what you need to know about KompWatch's egress IP addresses and how to configure access.

## Why This Matters

KompWatch takes periodic snapshots of competitor websites using headless Chromium. Competitor sites may:
- Block cloud provider IP ranges (AWS, GCP, Cloudflare) via WAF rules
- Detect and block bot user agents (see [Anti-Bot Protection and Blocked Pages](./anti-bot-protection-and-blocked-pages.md))

Separately, if you're using KompWatch to monitor your **own** website and your infrastructure has strict IP allowlisting, you may want to whitelist KompWatch's egress IPs to ensure clean, unthrottled snapshots.

## KompWatch Egress IP Addresses

KompWatch's scraper infrastructure egresses from a fixed set of IP addresses. To get the current list:

1. Go to **Settings → Developer → Scraper IPs**
2. The current egress IP list is displayed there, updated whenever infrastructure changes

Alternatively, email [support@kompwatch.com](mailto:support@kompwatch.com) with the subject "Scraper IP list" and we'll reply with the current CIDR ranges.

> **Note:** IP addresses are subject to change with infrastructure updates. Subscribe to [Service Status](./service-status.md) updates or check Settings periodically if you maintain an allowlist.

## Adding KompWatch to Your Allowlist

If you're monitoring your own site and want to ensure KompWatch scrapes aren't throttled or blocked:

**For WAFs (Cloudflare, AWS WAF, Fastly, Akamai):**
1. Get the current KompWatch egress IP list from Settings
2. Create an "allow" rule for those IPs that bypasses rate limiting and bot protection
3. Optionally, match on the KompWatch user-agent string as a secondary signal

**KompWatch's default User-Agent:**
```
Mozilla/5.0 (compatible; KompWatch/1.0; +https://kompwatch.com/bot)
```

> If your WAF blocks by user agent, add `KompWatch` to your allowlist. If you prefer stealth user agents for competitor monitoring, the scraper rotates standard browser user agents — contact support to confirm the current list.

## Competitor Sites That Block Cloud IPs

If a competitor site is behind Cloudflare or another WAF that aggressively blocks cloud IP ranges, KompWatch may:
- Return a **403 / 429 / Cloudflare challenge** response
- Record this as a snapshot error rather than a competitor change
- Retry on the next cycle

**What KompWatch does to minimize blocking:**
- Rotates residential-adjacent egress IPs (not datacenter IPs)
- Uses standard browser user agents and realistic render timing
- Respects `robots.txt` crawl delays (see [Does KompWatch Respect robots.txt?](./does-kompwatch-respect-robots-txt.md))
- Renders JavaScript (full Chromium, not raw HTTP fetching)

If a specific competitor consistently fails snapshots due to bot protection, see [Anti-Bot Protection and Blocked Pages](./anti-bot-protection-and-blocked-pages.md) for workarounds.

## Webhook Egress IPs (Separate from Scraper IPs)

If you need to allowlist KompWatch's **webhook delivery** IPs (not scraper IPs), these are different infrastructure. See [Webhook Retry and Failure Handling](./webhook-retry-and-failure-handling.md) for the webhook IP list, or go to **Settings → Integrations → Webhooks → IP Addresses**.

## Static IP Option (Enterprise)

If your security policy requires a guaranteed static egress IP (e.g., for firewall rules in a production environment), the **Enterprise** plan includes a dedicated static IP option. Contact [support@kompwatch.com](mailto:support@kompwatch.com) for pricing and setup.

---
*Related: [Anti-Bot Protection and Blocked Pages](./anti-bot-protection-and-blocked-pages.md) · [Does KompWatch Respect robots.txt?](./does-kompwatch-respect-robots-txt.md) · [Webhook Retry and Failure Handling](./webhook-retry-and-failure-handling.md) · [Monitoring Your Own Website](./monitoring-your-own-website.md)*
