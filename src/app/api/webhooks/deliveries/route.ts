import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";

/**
 * GET /api/webhooks/deliveries
 *
 * Returns the most recent webhook delivery attempts for the authenticated user.
 * Used by the settings page to show delivery status history.
 */
export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const deliveries = await db.webhookDelivery.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 20,
    select: {
      id: true,
      createdAt: true,
      eventType: true,
      platform: true,
      success: true,
      httpStatus: true,
      errorMessage: true,
      retryCount: true,
    },
  });

  return NextResponse.json({ deliveries });
}
