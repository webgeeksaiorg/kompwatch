#!/usr/bin/env node
/* eslint-disable */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const COOLIFY_VARS = [
  "BUILD_COMMIT",
  "SOURCE_COMMIT",
  "COOLIFY_GIT_COMMIT_SHA",
  "COOLIFY_GIT_COMMIT",
  "GITHUB_SHA",
  "VERCEL_GIT_COMMIT_SHA",
];

function detectCommit() {
  for (const name of COOLIFY_VARS) {
    const v = process.env[name];
    if (v && v.length >= 7) return v.trim();
  }
  try {
    return execSync("git rev-parse HEAD", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "unknown";
  }
}

function detectBranch() {
  for (const name of ["COOLIFY_GIT_BRANCH", "GIT_BRANCH", "BRANCH"]) {
    const v = process.env[name];
    if (v) return v.trim();
  }
  try {
    return execSync("git rev-parse --abbrev-ref HEAD", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "unknown";
  }
}

const commit = detectCommit();
const info = {
  commit,
  commitShort: commit === "unknown" ? "unknown" : commit.slice(0, 7),
  branch: detectBranch(),
  builtAt: new Date().toISOString(),
};

const target = path.join(__dirname, "..", "src", "lib", "build-info.json");
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, JSON.stringify(info, null, 2) + "\n");
console.log(
  `[build-info] commit=${info.commitShort} branch=${info.branch} builtAt=${info.builtAt}`
);
