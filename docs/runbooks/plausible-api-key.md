# Runbook — Configure `PLAUSIBLE_API_KEY` (unblocks analytics reads)

**Ticket:** 5e4a — "PLAUSIBLE_API_KEY not configured — traffic and conversion metrics blind"
**Status:** Code-complete. Blocked on a single credential from the self-hosted Plausible admin UI.
**Estimated time to unblock:** 3 minutes.

---

## What this unblocks

Setting `PLAUSIBLE_API_KEY` in production immediately unblocks:

1. **`GET /api/internal/analytics`** — returns aggregate traffic, top pages, top sources, and top custom events. Used by the Analyst agent's weekly report.
2. **Hero CTA A/B test measurement** (ticket 6952, shipped in commit `f743e0d`) — variant/experiment/subheadline props are already wired into `trackEvent()`; we just can't read them back until this key is set.
3. **`0 paid subscribers` root-cause work** (ticket f369) — the Analyst needs traffic → signup → paid funnel numbers to distinguish "no traffic" from "traffic but no conversion".

Event **writes** already work without this key (see `src/lib/plausible.ts` — server-side `trackEvent()` posts to `/api/event`, no auth). This runbook is strictly about the **read** side (Stats API).

---

## Who does this

Anyone with admin access to `https://analytics.webgeeksai.in` and the Coolify deployment for `kompwatch.com`. The agent fleet cannot self-serve — the vault is unreachable from agent containers and generating a Plausible API key requires a logged-in browser session.

---

## Step 1 — Generate the API key in Plausible

1. Sign in to `https://analytics.webgeeksai.in`.
2. Top-right avatar → **Account settings** → **API keys**.
3. Click **+ New API key**.
4. Name: `kompwatch-agent-analyst-read` (naming lets us revoke per-consumer later).
5. Scope: **Stats API** (read-only). Do **not** grant `sites:provisioning:*` — that scope belongs to `PLAUSIBLE_PROVISIONING_TOKEN`, which is a separate, higher-privilege secret already documented in `.env.example`.
6. Copy the token — Plausible only shows it once.

## Step 2 — Store in the vault

Add to Vaultwarden under **KompWatch** folder:

- **Item name:** `PLAUSIBLE_API_KEY (kompwatch prod)`
- **Username:** `kompwatch-agent-analyst-read`
- **Password:** `<the token>`
- **URL:** `https://analytics.webgeeksai.in`
- **Notes:** `Stats API read-only. Generated <date> by <name>. Consumed by src/lib/plausible-api.ts.`

## Step 3 — Deploy to production

In Coolify → the `kompwatch.com` app → **Environment variables**:

- Add / update `PLAUSIBLE_API_KEY=<the token>`
- Verify `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kompwatch.com` is present (already set).
- Verify `PLAUSIBLE_HOST=https://analytics.webgeeksai.in` is present (already set, or defaults in code).
- **Redeploy** the app. `PLAUSIBLE_API_KEY` is read at request-time by `src/lib/plausible-api.ts`, so a plain restart is sufficient — no rebuild required.

## Step 4 — Verify

From any shell with `CRON_SECRET` handy:

```bash
curl -s -H "Authorization: Bearer $CRON_SECRET" \
  "https://kompwatch.com/api/internal/analytics?period=7d&metric=aggregate" | jq
```

**Expected (success):**

```json
{
  "period": "7d",
  "metrics": {
    "visitors": 0,
    "pageviews": 0,
    "bounceRate": 0,
    "visitDuration": 0
  }
}
```

Zeros are fine — they just mean no traffic in the last 7 days. What matters is that we got a `200` with a well-formed body instead of a `503 "Plausible not configured"` (missing key) or `502 "Plausible API 401"` (wrong key / wrong scope).

**Failure modes:**

| Response | Meaning | Fix |
|---|---|---|
| `503 {"error":"Plausible not configured"}` | Env var didn't reach the container | Re-check Coolify env, redeploy |
| `502 {"error":"Plausible API 401: ..."}` | Key is invalid or was revoked | Regenerate in Plausible, repeat Steps 1–3 |
| `502 {"error":"Plausible API 402: ..."}` | Site domain doesn't match a Plausible site | Run `npm run plausible:add-site` (needs `PLAUSIBLE_PROVISIONING_TOKEN`) |
| `401 {"error":"Unauthorized"}` | You forgot the `Authorization: Bearer $CRON_SECRET` header | Add the header |

## Step 5 — Close out

1. Comment on ticket 5e4a with the verification `curl` output.
2. Move 5e4a → **Done**.
3. Ping Analyst on the message board — its next cycle can now run traffic / funnel reports.
4. Ping Builder on the message board — hero CTA A/B (ticket 6952) can now be measured; suggest querying `event:name=cta_click` with `props.experiment=hero-cta-outcome-changed-this-week-2026-07` after ~2 weeks of exposure.

---

## Code references (why we're confident this is credential-only, not code-work)

- **Client wrapper:** `src/lib/plausible-api.ts` — uses `Bearer ${PLAUSIBLE_API_KEY}`, throws `"PLAUSIBLE_API_KEY is not configured"` when missing.
- **Configured check:** `isPlausibleConfigured()` in the same file — the only gate between wired-up code and live data.
- **Consumer:** `src/app/api/internal/analytics/route.ts` — returns `503` with an actionable `detail` string when `isPlausibleConfigured()` is false.
- **Provisioning helper:** `scripts/plausible-add-site.js` — separate flow, needs `PLAUSIBLE_PROVISIONING_TOKEN` (a different scope). Only relevant if the domain hasn't been registered in Plausible yet.

No code changes are pending for this ticket. The moment Step 3 lands in production, `/api/internal/analytics` starts returning data.
