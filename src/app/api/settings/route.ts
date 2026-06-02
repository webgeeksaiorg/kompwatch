import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  planAllowsWebhooks,
  planAllowsInstantAlerts,
  planAllowsInstantPricingAlerts,
} from "@/lib/stripe";
import { z } from "zod";

const updateSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  digestEnabled: z.boolean().optional(),
  digestFrequency: z.enum(["SMART", "DAILY", "WEEKLY"]).optional(),
  digestMinSeverity: z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]).optional(),
  digestMinSignalScore: z.number().min(0).max(1).optional(),
  dashboardMinSeverity: z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]).optional(),
  dashboardMinSignalScore: z.number().min(0).max(1).optional(),
  webhookUrl: z.string().url().startsWith("https://").max(500).nullable().optional(),
  webhookEnabled: z.boolean().optional(),
  instantAlertsEnabled: z.boolean().optional(),
  instantAlertMinSeverity: z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]).optional(),
  instantPricingAlertsEnabled: z.boolean().optional(),
});

export async function PATCH(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const data = parsed.data;

  // Plan gating: webhooks are Pro+; instant alerts are Team-only.
  const touchesWebhook =
    "webhookUrl" in data || "webhookEnabled" in data;
  if (touchesWebhook && !planAllowsWebhooks(user.plan)) {
    return NextResponse.json(
      { error: "Webhook integrations require a Pro or Team plan." },
      { status: 403 }
    );
  }

  const touchesInstant =
    "instantAlertsEnabled" in data || "instantAlertMinSeverity" in data;
  if (touchesInstant && !planAllowsInstantAlerts(user.plan)) {
    return NextResponse.json(
      { error: "Real-time alerts require a Team plan." },
      { status: 403 }
    );
  }

  // Digest frequency gating: FREE users cannot select DAILY (it's a paid feature).
  if (data.digestFrequency === "DAILY" && user.plan === "FREE") {
    return NextResponse.json(
      { error: "Daily digests require a Pro or Team plan." },
      { status: 403 }
    );
  }

  // Instant pricing alerts are a Pro+ benefit. Free users can't toggle the
  // setting — they always wait for the weekly digest.
  const touchesInstantPricing = "instantPricingAlertsEnabled" in data;
  if (touchesInstantPricing && !planAllowsInstantPricingAlerts(user.plan)) {
    return NextResponse.json(
      { error: "Instant pricing alerts require a Pro or Team plan." },
      { status: 403 }
    );
  }

  const updated = await db.user.update({
    where: { id: user.id },
    data,
  });

  return NextResponse.json({
    name: updated.name,
    digestEnabled: updated.digestEnabled,
    digestFrequency: updated.digestFrequency,
    digestMinSeverity: updated.digestMinSeverity,
    digestMinSignalScore: updated.digestMinSignalScore,
    dashboardMinSeverity: updated.dashboardMinSeverity,
    dashboardMinSignalScore: updated.dashboardMinSignalScore,
    webhookUrl: updated.webhookUrl,
    webhookEnabled: updated.webhookEnabled,
    instantAlertsEnabled: updated.instantAlertsEnabled,
    instantAlertMinSeverity: updated.instantAlertMinSeverity,
    instantPricingAlertsEnabled: updated.instantPricingAlertsEnabled,
  });
}
