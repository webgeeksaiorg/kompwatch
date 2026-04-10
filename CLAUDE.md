# CompeteWatch

AI-powered competitor monitoring for SaaS teams. Track competitor websites, detect changes, and get AI-generated digests delivered to your inbox.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Database**: PostgreSQL via Prisma ORM
- **Payments**: Stripe (Checkout + Customer Portal + Webhooks)
- **Email**: Resend (transactional + digest emails)
- **Scraping**: Playwright (headless Chromium for competitor snapshots)
- **Analytics**: Plausible (self-hosted)
- **Hosting**: Coolify (auto-deploy from main branch)

## Architecture

```
src/
  app/
    (marketing)/          # Landing page, pricing, blog (public)
    (app)/                # Dashboard, competitors, digests (authenticated)
      dashboard/
      competitors/
      digests/
      settings/
    api/
      webhooks/stripe/    # Stripe webhook handler
      cron/snapshot/      # Cron endpoint for competitor snapshots
      cron/digest/        # Cron endpoint for digest generation
  components/
    ui/                   # shadcn/ui primitives
    dashboard/            # Dashboard-specific components
    marketing/            # Landing page components
  lib/
    stripe.ts             # Stripe client + helpers
    resend.ts             # Email sending helpers
    prisma.ts             # Prisma client singleton
    scraper.ts            # Playwright scraping logic
    ai.ts                 # AI digest generation (Claude API)
    auth.ts               # Authentication helpers
  prisma/
    schema.prisma         # Database schema
    migrations/           # Prisma migrations
content/
  marketing/
    queue/
      twitter/            # Queued tweets (JSON files)
      linkedin/           # Queued LinkedIn posts
      reddit/             # Queued Reddit posts
      blog/               # Queued blog drafts
docs/                     # Internal documentation
```

## Database Schema

Core models in `prisma/schema.prisma`:

- **User** - email, name, stripeCustomerId, plan (FREE/PRO/TEAM), createdAt
- **Subscription** - userId, stripeSubscriptionId, status, currentPeriodEnd, priceId
- **Competitor** - userId, name, url, selector (CSS selector for key content), active, createdAt
- **Snapshot** - competitorId, html, screenshot (URL), metadata (JSON), capturedAt
- **Change** - snapshotId, competitorId, changeType (CONTENT/VISUAL/PRICING/FEATURE), summary, diff, severity (LOW/MEDIUM/HIGH), detectedAt
- **Digest** - userId, subject, htmlBody, sentAt, changes (relation to Change[])

Key relations:
- User has many Competitors (limited by plan tier)
- Competitor has many Snapshots (one per cron cycle)
- Snapshot has many Changes (AI-detected differences from previous snapshot)
- User has many Digests (periodic email summaries)

## Environment Variables

Required in `.env` (never commit this file):

```
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/competewatch

# Auth (NextAuth.js)
NEXTAUTH_SECRET=<random-secret>
NEXTAUTH_URL=http://localhost:3000

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Resend
RESEND_API_KEY=re_...

# Claude API (for AI digests)
ANTHROPIC_API_KEY=sk-ant-...

# Plausible
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kompwatch.com

# Cron secret (protect cron API routes)
CRON_SECRET=<random-secret>
```

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Database
npx prisma generate          # Generate Prisma client (MUST run before tsc)
npx prisma migrate dev       # Create/apply migrations in dev
npx prisma migrate deploy    # Apply migrations in production
npx prisma studio            # Visual database browser

# Testing
npm test                     # Run all tests
npm run test:unit            # Unit tests only
npm run test:e2e             # Playwright end-to-end tests

# Build & lint
npm run build                # Production build
npm run lint                 # ESLint
npm run typecheck            # TypeScript type checking (tsc --noEmit)

# Stripe local testing
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## Deployment

- **Platform**: Coolify (self-hosted on 91.98.121.122)
- **Auto-deploy**: Pushes to `main` branch trigger automatic deployment
- **Staging**: Push to `staging` branch for QA review before merging to main
- **Domain**: kompwatch.com (will be configured after first Coolify deploy)
- **Database**: PostgreSQL managed via Coolify

## Git Workflow

1. **Builder agent** develops features and pushes to `staging` branch
2. **QA agent** tests staging, then merges `staging` into `main` if all checks pass
3. Coolify auto-deploys from `main` to production
4. Never force-push to `main` -- always go through staging

## Pricing Tiers

| Tier | Price | Competitors | Snapshots | Digests |
|------|-------|-------------|-----------|---------|
| Free | $0/mo | 2 | Daily | Weekly |
| Pro | $49/mo | 10 | Every 6h | Daily |
| Team | $149/mo | 50 | Hourly | Real-time |

Stripe price IDs are configured in the orchestrator. Free tier requires no Stripe subscription.

## Agent Roles

- **Builder**: Implements features from the Notion feature tracker. Pushes to staging branch.
- **QA**: Runs tests, checks types, validates builds. Merges staging to main when green.
- **Marketer**: Writes landing page copy, blog posts, social media content. Queues posts in content/marketing/queue/.
- **Outreach**: Posts queued marketing content to Twitter, LinkedIn, Reddit. Tracks engagement.
- **Support**: Monitors for user issues, updates FAQ, improves error messages.
- **Analyst**: Tracks revenue metrics, churn, conversion rates. Reports to Notion ship log.

## Lessons and Gotchas

1. **Prisma generate before tsc**: Always run `npx prisma generate` before `tsc` or `npm run build`. The Prisma client is generated code and TypeScript will fail without it.

2. **Stripe webhooks need raw body**: The `/api/webhooks/stripe` route must use `export const config = { api: { bodyParser: false } }` (Pages Router) or read the raw body manually (App Router). Stripe signature verification fails on parsed JSON.

3. **Resend requires verified domain**: Emails will fail unless `kompwatch.com` is verified in the Resend dashboard with the correct DNS records (SPF, DKIM, DMARC).

4. **Never commit .env**: The `.env` file contains secrets. It is in `.gitignore`. Use environment variables in Coolify for production values.

5. **Playwright needs system deps**: In Docker/CI, install Chromium deps: `npx playwright install --with-deps chromium`. Only install Chromium, not all browsers.

6. **Rate limit scraping**: Competitor snapshots should respect robots.txt and use delays between requests. Never scrape more frequently than once per hour per competitor.

7. **Stripe test mode**: Use `sk_test_` keys in development. The webhook secret is different between test and live mode.

8. **CSS selectors for competitors**: Users set a CSS selector to track specific page sections. Default to `body` but encourage specificity for better change detection.

9. **AI digest generation**: Use Claude API (not the CLI) for generating change summaries. Keep prompts under 4000 tokens to control costs. Cache summaries in the Change model.

10. **Free tier limits**: Enforce competitor limits at the API level, not just the UI. Check `user.plan` before allowing new competitor creation.
