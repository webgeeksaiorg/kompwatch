import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createMagicToken, getMagicLinkUrl } from "@/lib/auth";
import { getResend, FROM_EMAIL } from "@/lib/resend";
import { trackEvent } from "@/lib/plausible";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  intent: z.string().optional(),
  plan: z.string().optional(),
  period: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, utm_source, utm_medium, utm_campaign, intent, plan, period } = loginSchema.parse(body);

    const token = createMagicToken(email);
    let magicLink = getMagicLinkUrl(token);

    // Preserve UTM params through the magic-link redirect for attribution
    const extraParams = new URLSearchParams();
    if (utm_source) extraParams.set("utm_source", utm_source);
    if (utm_medium) extraParams.set("utm_medium", utm_medium);
    if (utm_campaign) extraParams.set("utm_campaign", utm_campaign);

    // Forward checkout intent so verify can redirect to Stripe checkout
    if (intent === "upgrade" && plan) {
      extraParams.set("intent", "upgrade");
      extraParams.set("plan", plan);
      if (period) extraParams.set("period", period);
    }

    const extraStr = extraParams.toString();
    if (extraStr) magicLink += `&${extraStr}`;

    const isUpgrade = intent === "upgrade" && plan;
    const emailSubject = isUpgrade
      ? `Complete your ${plan === "TEAM" ? "Team" : "Pro"} upgrade`
      : "Sign in to KompWatch";
    const emailHeading = isUpgrade
      ? `Complete your ${plan === "TEAM" ? "Team" : "Pro"} upgrade`
      : "Sign in to KompWatch";
    const emailBody = isUpgrade
      ? "Click the button below to sign in and complete your upgrade. This link expires in 15 minutes."
      : "Click the button below to sign in. This link expires in 15 minutes.";
    const emailCta = isUpgrade
      ? `Upgrade to ${plan === "TEAM" ? "Team" : "Pro"}`
      : "Sign in to KompWatch";

    await getResend().emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: emailSubject,
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
          <h2 style="color: #111827; font-size: 20px; margin-bottom: 16px;">${emailHeading}</h2>
          <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">
            ${emailBody}
          </p>
          <a href="${magicLink}" style="display: inline-block; margin-top: 24px; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">
            ${emailCta}
          </a>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 32px;">
            If you didn't request this email, you can safely ignore it.
          </p>
        </div>
      `,
    });

    // Server-side event — fires even when client-side Plausible is blocked
    const eventProps: Record<string, string> = {};
    if (utm_source) eventProps.source = utm_source;
    trackEvent("magic-link-requested", "/login", Object.keys(eventProps).length > 0 ? eventProps : undefined);

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.errors[0].message },
        { status: 400 }
      );
    }
    console.error("Login error:", err);
    return NextResponse.json(
      { error: "Failed to send login email" },
      { status: 500 }
    );
  }
}
