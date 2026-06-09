import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

const ROOT = join(__dirname, "..", "..");

const MIGRATE_PAGES = [
  {
    competitor: "Klue",
    path: "src/app/migrate/from-klue/page.tsx",
    pageProp: "migrate-from-klue",
  },
  {
    competitor: "Crayon",
    path: "src/app/migrate/from-crayon/page.tsx",
    pageProp: "migrate-from-crayon",
  },
  {
    competitor: "Kompyte",
    path: "src/app/migrate/from-kompyte/page.tsx",
    pageProp: "migrate-from-kompyte",
  },
];

const BANNER_PATH = "src/components/migration-pro-trial-banner.tsx";

describe("Migration Pro Trial banner (experiment b005)", () => {
  it("the banner component exists and is a client component", () => {
    const src = readFileSync(join(ROOT, BANNER_PATH), "utf-8");
    expect(src.startsWith('"use client"')).toBe(true);
    expect(src).toContain("export function MigrationProTrialBanner");
  });

  it("emits the migrate_pro_trial_cta_click Plausible event with cta + competitor + page props", () => {
    const src = readFileSync(join(ROOT, BANNER_PATH), "utf-8");
    expect(src).toContain('"migrate_pro_trial_cta_click"');
    expect(src).toContain('cta: "primary"');
    expect(src).toContain('cta: "pricing"');
    expect(src).toContain("competitor, page");
  });

  it("links to /login with migrate-pro-trial UTM params for attribution", () => {
    const src = readFileSync(join(ROOT, BANNER_PATH), "utf-8");
    expect(src).toContain("ref=migrate-pro-trial");
    expect(src).toContain("utm_campaign=migrate-pro-trial");
    expect(src).toContain("utm_medium=migrate-page");
    expect(src).toContain("utm_source=");
  });

  it("makes the trial offer explicit — '7-day Pro trial' + no credit card commitment", () => {
    const src = readFileSync(join(ROOT, BANNER_PATH), "utf-8");
    expect(src).toMatch(/7-day Pro trial/i);
    expect(src).toMatch(/no credit card/i);
    // Honest fallback so we don't surprise users with a charge on day 8
    expect(src).toMatch(/Auto-downgrades to Free/i);
  });

  it("ships per-competitor copy so each migrate page has tailored framing", () => {
    const src = readFileSync(join(ROOT, BANNER_PATH), "utf-8");
    expect(src).toContain("Klue:");
    expect(src).toContain("Crayon:");
    expect(src).toContain("Kompyte:");
  });

  it.each(MIGRATE_PAGES)(
    "/migrate/from-$competitor page renders <MigrationProTrialBanner /> with competitor + page props",
    ({ competitor, path, pageProp }) => {
      const src = readFileSync(join(ROOT, path), "utf-8");
      // Import is wired
      expect(src).toContain(
        'from "@/components/migration-pro-trial-banner"'
      );
      // Render site is wired with both required props
      const renderPattern = new RegExp(
        `<MigrationProTrialBanner\\s+competitor="${competitor}"\\s+page="${pageProp}"\\s*/>`
      );
      expect(src).toMatch(renderPattern);
    }
  );
});
