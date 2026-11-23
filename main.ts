// PromoteX — entry program for post-x-promote-make-your-own-bounty-01.
//
// The entry itself is one post on X that quotes or links make.fun's
// make-your-own-bounty post. This program does not touch X at all: it
// only hands the post's address in, by copying POST.json from the
// repository root into the output directory where the gate reads it.
// Standard library only, no network, no secrets, same bytes every run.
//
// Local run (mirrors the grader's paths):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = resolve(repoRoot, "POST.json");
const target = join(outDir, "POST.json");

// Refuse to write a partial entry: the file must exist and must be the
// JSON object the gate expects, with a url string inside it. The copy is
// byte for byte, so the grader's two runs always write identical output.
if (!existsSync(source)) {
  console.error(`POST.json not found under ${repoRoot}`);
  process.exit(1);
}

const parsed: unknown = JSON.parse(readFileSync(source, "utf8"));
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  console.error("POST.json must be a JSON object holding a url field");
  process.exit(1);
}
if (typeof (parsed as { url?: unknown }).url !== "string") {
  console.error("POST.json must hold a url string");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target}`);
