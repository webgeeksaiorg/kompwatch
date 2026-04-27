import { NextResponse } from "next/server";
import buildInfo from "@/lib/build-info.json";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  return NextResponse.json(
    {
      commit: buildInfo.commit,
      commitShort: buildInfo.commitShort,
      branch: buildInfo.branch,
      builtAt: buildInfo.builtAt,
      runtime: process.version,
      env: process.env.NODE_ENV ?? "unknown",
      now: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      },
    }
  );
}
