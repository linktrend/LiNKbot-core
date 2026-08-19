#!/usr/bin/env node
/**
 * Lisa-executable template renderer (pure; no live profile mutation).
 *
 * Deployed (cwd = ~/.openclaw-lisa/workspace) only after live opt-in gate:
 *   node --experimental-strip-types ops/render-template.ts <kind> <json-file|->
 *
 * Repository (tests): linkbots/lisa/ops/render-template.ts
 *
 * Kinds: telegram-daily-digest | email-daily-digest
 */
import { readFileSync } from "node:fs";
import {
  renderEmailDailyDigest,
  renderTelegramDailyDigest,
  type TemplateContext,
  type TemplateKind,
} from "./templates.ts";

function usage(): never {
  console.error(
    "Usage: ops/render-template.ts <telegram-daily-digest|email-daily-digest> <json-file|->",
  );
  process.exit(2);
}

const args = process.argv.slice(2);
const kind = args[0] as TemplateKind | undefined;
if (!kind) {
  usage();
}

const src = args[1];
if (!src) {
  usage();
}
const raw = src === "-" ? readFileSync(0, "utf8") : readFileSync(src, "utf8");
const ctx = JSON.parse(raw) as TemplateContext;

let out: string;
switch (kind) {
  case "telegram-daily-digest":
    out = renderTelegramDailyDigest(ctx);
    break;
  case "email-daily-digest":
    out = renderEmailDailyDigest(ctx);
    break;
  default: {
    const _exhaustive: never = kind;
    throw new Error(`unknown kind: ${_exhaustive}`);
  }
}
process.stdout.write(out);
