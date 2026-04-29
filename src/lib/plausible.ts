import { headers } from "next/headers";

const PLAUSIBLE_HOST =
  process.env.PLAUSIBLE_HOST || "https://analytics.webgeeksai.in";
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

/**
 * Fire a Plausible event server-side so it's tracked even when
 * the client-side script is blocked by ad-blockers.
 */
export async function trackEvent(
  name: string,
  url: string,
  props?: Record<string, string>,
): Promise<void> {
  if (!PLAUSIBLE_DOMAIN) return;

  try {
    const hdrs = await headers();
    const userAgent = hdrs.get("user-agent") || "";
    const ip = hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    await fetch(`${PLAUSIBLE_HOST}/api/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": userAgent,
        "X-Forwarded-For": ip,
      },
      body: JSON.stringify({
        name,
        url: `https://${PLAUSIBLE_DOMAIN}${url}`,
        domain: PLAUSIBLE_DOMAIN,
        ...(props && Object.keys(props).length > 0 ? { props } : {}),
      }),
    });
  } catch {
    // Analytics is non-critical — never block the request
  }
}
