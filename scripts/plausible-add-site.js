#!/usr/bin/env node
/* eslint-disable */
/**
 * One-shot provisioning: add NEXT_PUBLIC_PLAUSIBLE_DOMAIN to the
 * self-hosted Plausible instance via the Sites Provisioning API.
 *
 * Required env:
 *   PLAUSIBLE_PROVISIONING_TOKEN  — Plausible API key with sites:provisioning:* scope
 *   NEXT_PUBLIC_PLAUSIBLE_DOMAIN  — e.g. kompwatch.com
 * Optional env:
 *   PLAUSIBLE_HOST                — default https://analytics.webgeeksai.in
 *   PLAUSIBLE_TIMEZONE            — default Etc/UTC
 *
 * Exit codes:
 *   0  site created (or already existed — treated as success)
 *   1  config error (missing env)
 *   2  API error (auth, network, unexpected response)
 */

const DEFAULT_HOST = "https://analytics.webgeeksai.in";
const DEFAULT_TZ = "Etc/UTC";

async function addSite({ host, token, domain, timezone }) {
  const res = await fetch(`${host}/api/v1/sites`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ domain, timezone }),
  });

  const text = await res.text();
  let body;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }

  if (res.ok) {
    return { ok: true, status: res.status, body, alreadyExisted: false };
  }

  // Plausible returns 400 for duplicate domain. Treat as idempotent success.
  const message =
    typeof body === "object" && body && typeof body.error === "string"
      ? body.error
      : typeof body === "string"
        ? body
        : "";
  if (
    res.status === 400 &&
    /already.+exists|has already been taken/i.test(message)
  ) {
    return { ok: true, status: res.status, body, alreadyExisted: true };
  }

  return { ok: false, status: res.status, body };
}

async function main() {
  const token = process.env.PLAUSIBLE_PROVISIONING_TOKEN;
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const host = process.env.PLAUSIBLE_HOST || DEFAULT_HOST;
  const timezone = process.env.PLAUSIBLE_TIMEZONE || DEFAULT_TZ;

  if (!token) {
    console.error(
      "[plausible-add-site] PLAUSIBLE_PROVISIONING_TOKEN is not set."
    );
    console.error(
      "  Generate one at: " +
        host +
        "/settings/api-keys (scope: sites:provisioning:*)"
    );
    process.exit(1);
  }
  if (!domain) {
    console.error(
      "[plausible-add-site] NEXT_PUBLIC_PLAUSIBLE_DOMAIN is not set."
    );
    process.exit(1);
  }

  console.log(
    `[plausible-add-site] adding ${domain} to ${host} (tz=${timezone})`
  );

  let result;
  try {
    result = await addSite({ host, token, domain, timezone });
  } catch (err) {
    console.error(
      `[plausible-add-site] network error: ${err && err.message ? err.message : err}`
    );
    process.exit(2);
  }

  if (result.ok) {
    if (result.alreadyExisted) {
      console.log(`[plausible-add-site] OK — ${domain} already exists.`);
    } else {
      console.log(
        `[plausible-add-site] OK — created ${domain} (status ${result.status}).`
      );
    }
    process.exit(0);
  }

  console.error(
    `[plausible-add-site] FAILED — status ${result.status}: ${
      typeof result.body === "string"
        ? result.body
        : JSON.stringify(result.body)
    }`
  );
  if (result.status === 401 || result.status === 403) {
    console.error(
      "  Token rejected. Confirm the key has scope sites:provisioning:*."
    );
  }
  process.exit(2);
}

if (require.main === module) {
  main();
}

module.exports = { addSite };
