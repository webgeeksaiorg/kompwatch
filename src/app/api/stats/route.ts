import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Public endpoint — no auth required. Returns aggregate platform stats
// for social proof on the pricing page. Cached for 5 minutes.

export async function GET() {
  const [users, competitors, changes] = await Promise.all([
    db.user.count(),
    db.competitor.count({ where: { isActive: true } }),
    db.change.count(),
  ]);

  return NextResponse.json(
    { users, competitors, changes },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    }
  );
}
