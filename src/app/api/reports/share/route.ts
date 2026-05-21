import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { createShareToken, type ReportPeriod } from "@/lib/roi";

const VALID_PERIODS: ReportPeriod[] = ["7d", "30d", "90d", "last-month", "this-month"];

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const period: ReportPeriod = VALID_PERIODS.includes(body.period) ? body.period : "30d";

  const token = createShareToken(user.id, period);
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const url = `${baseUrl}/report/${encodeURIComponent(token)}`;

  return NextResponse.json({ url });
}
