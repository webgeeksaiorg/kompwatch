import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getResend, FROM_EMAIL } from "@/lib/resend";
import {
  getNextOnboardingStep,
  getOnboardingEmailBuilder,
  MAX_ONBOARDING_STEP,
} from "@/lib/onboarding";

/**
 * POST /api/cron/onboarding
 *
 * Cron endpoint that processes the onboarding drip + free-to-paid nurture campaign.
 * Protected by CRON_SECRET — only callable by the scheduler.
 *
 * Schedule: Run hourly (same cadence as digest cron).
 *
 * Drip sequence:
 *   Step 1: Welcome      (T+0)       — sent immediately on signup
 *   Step 2: Value        (T+2 days)  — feature highlights
 *   Step 3: Trial        (T+5 days)  — upgrade nudge, Free users only
 *   Step 4: Social proof (T+7 days)  — teams like yours, Free users only
 *   Step 5: Cost savings (T+10 days) — ROI of automation, Free users only
 *   Step 6: Final nudge  (T+14 days) — last conversion push, Free users only
 */
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Find users who haven't completed the full sequence (steps 1-6)
  const users = await db.user.findMany({
    where: { onboardingStep: { lt: MAX_ONBOARDING_STEP } },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      onboardingStep: true,
      plan: true,
    },
  });

  const results: Array<{
    userId: string;
    email: string;
    step: number;
    sent: boolean;
    reason?: string;
  }> = [];

  for (const user of users) {
    const nextStep = getNextOnboardingStep(user);

    if (!nextStep) {
      // Not due yet or skipped (e.g. paid user skips trial/nurture)
      if (user.onboardingStep >= 2 && user.plan !== "FREE") {
        // Mark paid users as complete — skip trial reminder + nurture
        await db.user.update({
          where: { id: user.id },
          data: { onboardingStep: MAX_ONBOARDING_STEP },
        });
      }
      results.push({
        userId: user.id,
        email: user.email,
        step: user.onboardingStep,
        sent: false,
        reason: "not_due",
      });
      continue;
    }

    const buildEmail = getOnboardingEmailBuilder(nextStep.key);
    const email = buildEmail(user);

    try {
      const resend = getResend();
      await resend.emails.send({
        from: FROM_EMAIL,
        to: user.email,
        subject: email.subject,
        html: email.html,
        text: email.text,
      });

      await db.user.update({
        where: { id: user.id },
        data: { onboardingStep: nextStep.step },
      });

      results.push({
        userId: user.id,
        email: user.email,
        step: nextStep.step,
        sent: true,
      });
    } catch (err) {
      results.push({
        userId: user.id,
        email: user.email,
        step: nextStep.step,
        sent: false,
        reason: `send_failed: ${err instanceof Error ? err.message : "Unknown"}`,
      });
    }
  }

  const sent = results.filter((r) => r.sent).length;

  return NextResponse.json({
    message: `Processed ${users.length} users. Sent ${sent} onboarding emails.`,
    results,
  });
}
