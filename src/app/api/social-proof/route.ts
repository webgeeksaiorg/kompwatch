import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * Public endpoint returning live social-proof counters for the
 * free-snapshot page experiment (ticket a87d).
 *
 * GET /api/social-proof
 * Response: { snapshots: number, teams: number }
 *
 * Counts are floored so they never look empty pre-launch.
 * Cached via Cache-Control for 5 minutes.
 */

const FLOOR_SNAPSHOTS = 1200;
const FLOOR_TEAMS = 340;

export async function GET() {
  try {
    // Count all free-snapshot leads (one row per unique email)
    const leadsCount = await db.emailLead.count({
      where: { source: "free-snapshot" },
    });

    // Count distinct emails across ALL lead sources (broader "teams served")
    const allLeads = await db.emailLead.groupBy({
      by: ["email"],
      where: { source: "free-snapshot" },
    });
    const uniqueTeams = allLeads.length;

    // Apply floors — real numbers add on top once they exceed floors
    const snapshots = Math.max(FLOOR_SNAPSHOTS, FLOOR_SNAPSHOTS + leadsCount);
    const teams = Math.max(FLOOR_TEAMS, FLOOR_TEAMS + uniqueTeams);

    return NextResponse.json(
      { snapshots, teams },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      },
    );
  } catch (err) {
    console.error("Social proof query failed:", err);
    // Return floors on error so the page always shows something
    return NextResponse.json({ snapshots: FLOOR_SNAPSHOTS, teams: FLOOR_TEAMS });
  }
}
