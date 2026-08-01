#!/usr/bin/env node
/**
 * Lisa-executable template renderer (pure; no live profile mutation).
 *
 * Deployed (cwd = ~/.openclaw-lisa/workspace) only after live opt-in gate:
 *   node --experimental-strip-types ops/render-template.ts <kind> <json-file|->
 *   node --experimental-strip-types ops/render-template.ts pipeline-one-liner --wave "Ship 05" --result Clear
 *
 * Repository (tests): linkbots/lisa/ops/render-template.ts
 *
 * Kinds: telegram-heartbeat | telegram-daily-digest | email-daily-digest | pipeline-one-liner
 */
import { readFileSync } from "node:fs";
import {
  renderEmailDailyDigest,
  renderPipelineOneLiner,
  renderTelegramDailyDigest,
  renderTelegramHeartbeat,
  type TemplateContext,
  type TemplateKind,
} from "./templates.ts";

function usage(): never {
  console.error(
    "Usage: ops/render-template.ts <telegram-heartbeat|telegram-daily-digest|email-daily-digest> <json-file|->\n" +
      "   or: ops/render-template.ts pipeline-one-liner --wave <WAVE> --result <Clear|Issues>",
  );
  process.exit(2);
}

const args = process.argv.slice(2);
const kind = args[0] as TemplateKind | undefined;
if (!kind) usage();

if (kind === "pipeline-one-liner") {
  const waveIdx = args.indexOf("--wave");
  const resultIdx = args.indexOf("--result");
  const wave = waveIdx >= 0 ? args[waveIdx + 1] : undefined;
  const result = resultIdx >= 0 ? args[resultIdx + 1] : undefined;
  if (!wave || (result !== "Clear" && result !== "Issues")) usage();
  process.stdout.write(`${renderPipelineOneLiner(wave, result)}\n`);
  process.exit(0);
}

const src = args[1];
if (!src) usage();
const raw = src === "-" ? readFileSync(0, "utf8") : readFileSync(src, "utf8");
const ctx = JSON.parse(raw) as TemplateContext;

let out: string;
switch (kind) {
  case "telegram-heartbeat":
    out = renderTelegramHeartbeat(ctx);
    break;
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
