import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { createShareToken } from "@/lib/roi";

export async function POST() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = createShareToken(user.id);
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const url = `${baseUrl}/report/${encodeURIComponent(token)}`;

  return NextResponse.json({ url });
}
