import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getResend, FROM_EMAIL } from "@/lib/resend";
import { PLANS } from "@/lib/stripe";
import {
  groupChangesByCompetitor,
  renderDigestHtml,
  renderDigestText,
  digestSubject,
} from "@/lib/digest";
import type { Plan } from "@prisma/client";

/**
 * POST /api/cron/digest
 *
 * Cron endpoint that generates and sends email digests to users.
 * Protected by CRON_SECRET — only callable by the scheduler.
 *
 * Schedule:
 *   - Run hourly. The endpoint determines which users are due.
 *   - FREE users get a weekly digest (if last digest was 7+ days ago or never sent)
 *   - PRO/TEAM users get a daily digest (if last digest was 24+ hours ago or never sent)
 *
 * Only sends if there are new (undigested) changes to report.
 */
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();

  // Get all users with their last digest
  const users = await db.user.findMany({
    include: {
      digests: {
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
  });

  const results: Array<{
    userId: string;
    email: string;
    sent: boolean;
    changes: number;
    reason?: string;
  }> = [];

  for (const user of users) {
    const period = getDigestPeriod(user.plan);
    const intervalMs = period === "DAILY" ? 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000;
    const lastDigest = user.digests[0];

    // Check if user is due for a digest
    if (lastDigest && now.getTime() - lastDigest.createdAt.getTime() < intervalMs) {
      results.push({
        userId: user.id,
        email: user.email,
        sent: false,
        changes: 0,
        reason: "not_due",
      });
      continue;
    }

    // Find undigested changes for this user's competitors
    const sinceDate = lastDigest?.createdAt ?? new Date(0);

    const changes = await db.change.findMany({
      where: {
        competitor: { userId: user.id },
        digestId: null,
        createdAt: { gt: sinceDate },
      },
      include: { competitor: true },
      orderBy: { createdAt: "desc" },
    });

    if (changes.length === 0) {
      results.push({
        userId: user.id,
        email: user.email,
        sent: false,
        changes: 0,
        reason: "no_changes",
      });
      continue;
    }

    // Build digest content
    const groups = groupChangesByCompetitor(changes);
    const subject = digestSubject(groups, period);
    const htmlBody = renderDigestHtml(user, groups, period);
    const textBody = renderDigestText(user, groups, period);

    // Save digest to DB
    const digest = await db.digest.create({
      data: {
        userId: user.id,
        period,
        subject,
        htmlBody,
        textBody,
      },
    });

    // Link changes to this digest
    await db.change.updateMany({
      where: { id: { in: changes.map((c) => c.id) } },
      data: { digestId: digest.id },
    });

    // Send email
    try {
      const resend = getResend();
      await resend.emails.send({
        from: FROM_EMAIL,
        to: user.email,
        subject,
        html: htmlBody,
        text: textBody,
      });

      await db.digest.update({
        where: { id: digest.id },
        data: { sentAt: new Date() },
      });

      results.push({
        userId: user.id,
        email: user.email,
        sent: true,
        changes: changes.length,
      });
    } catch (err) {
      results.push({
        userId: user.id,
        email: user.email,
        sent: false,
        changes: changes.length,
        reason: `send_failed: ${err instanceof Error ? err.message : "Unknown"}`,
      });
    }
  }

  const sent = results.filter((r) => r.sent).length;
  const totalChanges = results.reduce((sum, r) => sum + r.changes, 0);

  return NextResponse.json({
    message: `Processed ${users.length} users. Sent ${sent} digests covering ${totalChanges} changes.`,
    results,
  });
}

function getDigestPeriod(plan: Plan): "DAILY" | "WEEKLY" {
  return PLANS[plan].digest === "weekly" ? "WEEKLY" : "DAILY";
}
