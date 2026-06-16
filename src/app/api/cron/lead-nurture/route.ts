import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getResend, FROM_EMAIL } from "@/lib/resend";
import {
  getNextLeadNurtureStep,
  getLeadNurtureEmailBuilder,
  MAX_LEAD_NURTURE_STEP,
} from "@/lib/lead-nurture";

/**
 * POST /api/cron/lead-nurture
 *
 * Cron endpoint that sends the 3-email nurture sequence to free-snapshot leads.
 * Protected by CRON_SECRET — only callable by the scheduler.
 *
 * Schedule: Run hourly (same cadence as onboarding cron).
 *
 * Nurture sequence for free-snapshot leads who haven't signed up:
 *   Step 1: Snapshot recap     (T+1 day)   — remind what we found
 *   Step 2: Value & tips       (T+3 days)  — what ongoing monitoring catches
 *   Step 3: Final conversion   (T+7 days)  — ROI framing + last push
 */
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Find free-snapshot leads who haven't completed the nurture sequence and haven't unsubscribed
  const leads = await db.emailLead.findMany({
    where: {
      source: "free-snapshot",
      nurtureStep: { lt: MAX_LEAD_NURTURE_STEP },
      unsubscribed: false,
    },
    select: {
      id: true,
      email: true,
      competitorUrl: true,
      nurtureStep: true,
      unsubscribed: true,
      createdAt: true,
    },
  });

  const results: Array<{
    leadId: string;
    email: string;
    step: number;
    sent: boolean;
    reason?: string;
  }> = [];

  for (const lead of leads) {
    // Skip leads whose email is already a registered user — they're in
    // the onboarding sequence instead
    const existingUser = await db.user.findUnique({
      where: { email: lead.email },
      select: { id: true },
    });
    if (existingUser) {
      // Mark as complete so we don't check again
      await db.emailLead.update({
        where: { id: lead.id },
        data: { nurtureStep: MAX_LEAD_NURTURE_STEP },
      });
      results.push({
        leadId: lead.id,
        email: lead.email,
        step: lead.nurtureStep,
        sent: false,
        reason: "already_signed_up",
      });
      continue;
    }

    const nextStep = getNextLeadNurtureStep(lead);
    if (!nextStep) {
      results.push({
        leadId: lead.id,
        email: lead.email,
        step: lead.nurtureStep,
        sent: false,
        reason: "not_due",
      });
      continue;
    }

    const buildEmail = getLeadNurtureEmailBuilder(nextStep.key);
    const email = buildEmail(lead);

    try {
      const resend = getResend();
      await resend.emails.send({
        from: FROM_EMAIL,
        to: lead.email,
        subject: email.subject,
        html: email.html,
        text: email.text,
      });

      await db.emailLead.update({
        where: { id: lead.id },
        data: {
          nurtureStep: nextStep.step,
          lastNurturedAt: new Date(),
        },
      });

      results.push({
        leadId: lead.id,
        email: lead.email,
        step: nextStep.step,
        sent: true,
      });
    } catch (err) {
      results.push({
        leadId: lead.id,
        email: lead.email,
        step: nextStep.step,
        sent: false,
        reason: `send_failed: ${err instanceof Error ? err.message : "Unknown"}`,
      });
    }
  }

  const sent = results.filter((r) => r.sent).length;

  return NextResponse.json({
    message: `Processed ${leads.length} leads. Sent ${sent} nurture emails.`,
    results,
  });
}
