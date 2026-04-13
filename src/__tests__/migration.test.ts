import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

const MIGRATIONS_DIR = join(__dirname, "../../prisma/migrations");

describe("Prisma migrations", () => {
  it("migration lock file exists and specifies postgresql", () => {
    const lockPath = join(MIGRATIONS_DIR, "migration_lock.toml");
    expect(existsSync(lockPath)).toBe(true);
    const content = readFileSync(lockPath, "utf-8");
    expect(content).toContain('provider = "postgresql"');
  });

  it("initial migration exists with valid SQL", () => {
    const sqlPath = join(
      MIGRATIONS_DIR,
      "20260413000000_init",
      "migration.sql"
    );
    expect(existsSync(sqlPath)).toBe(true);

    const sql = readFileSync(sqlPath, "utf-8");

    // All core tables are present
    const tables = [
      "User",
      "Session",
      "Competitor",
      "Snapshot",
      "Change",
      "Digest",
      "StripeEvent",
    ];
    for (const table of tables) {
      expect(sql).toContain(`CREATE TABLE "${table}"`);
    }

    // All enums are present
    const enums = ["Plan", "ChangeType", "Severity", "DigestPeriod"];
    for (const e of enums) {
      expect(sql).toContain(`CREATE TYPE "${e}"`);
    }

    // Foreign keys exist
    expect(sql).toContain("Session_userId_fkey");
    expect(sql).toContain("Competitor_userId_fkey");
    expect(sql).toContain("Snapshot_competitorId_fkey");
    expect(sql).toContain("Change_competitorId_fkey");
    expect(sql).toContain("Change_digestId_fkey");
    expect(sql).toContain("Digest_userId_fkey");

    // Key indexes exist
    expect(sql).toContain("User_email_key");
    expect(sql).toContain("Competitor_userId_url_key");
    expect(sql).toContain("Session_token_key");

    // CASCADE deletes for user-owned data
    expect(sql).toContain("ON DELETE CASCADE");
  });

  it("migration SQL matches current schema models", () => {
    const schemaPath = join(MIGRATIONS_DIR, "..", "schema.prisma");
    const schema = readFileSync(schemaPath, "utf-8");
    const sqlPath = join(
      MIGRATIONS_DIR,
      "20260413000000_init",
      "migration.sql"
    );
    const sql = readFileSync(sqlPath, "utf-8");

    // Extract model names from schema
    const modelMatches = schema.matchAll(/^model (\w+)/gm);
    for (const match of modelMatches) {
      expect(sql).toContain(`CREATE TABLE "${match[1]}"`);
    }

    // Extract enum names from schema
    const enumMatches = schema.matchAll(/^enum (\w+)/gm);
    for (const match of enumMatches) {
      expect(sql).toContain(`CREATE TYPE "${match[1]}"`);
    }
  });
});
