import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentUser } from "@/lib/auth";
import { sendTestWebhook, isValidWebhookUrl } from "@/lib/webhooks";
import { planAllowsWebhooks } from "@/lib/stripe";

const bodySchema = z.object({
  url: z.string().url().startsWith("https://").max(500),
});

/**
 * POST /api/webhooks/test
 *
 * Sends a one-off test message to a webhook URL so users can verify their
 * Slack/Teams/custom integration before relying on it for digests or alerts.
 *
 * Auth: signed-in users only.
 * Plan gate: Pro or Team only — webhooks are a paid feature.
 * Body: { url: string }  (URL to test; doesn't need to be saved yet)
 */
export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!planAllowsWebhooks(user.plan)) {
    return NextResponse.json(
      { error: "Webhook integrations require a Pro or Team plan." },
      { status: 403 }
    );
  }

  const json = await req.json().catch(() => null);
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "A valid HTTPS webhook URL is required." },
      { status: 400 }
    );
  }
  if (!isValidWebhookUrl(parsed.data.url)) {
    return NextResponse.json({ error: "Invalid webhook URL." }, { status: 400 });
  }

  const result = await sendTestWebhook(parsed.data.url, { userId: user.id });
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error ?? "Webhook delivery failed." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
