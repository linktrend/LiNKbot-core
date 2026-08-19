#!/usr/bin/env node
/**
 * Unified, source-only Lisa renderer.
 *
 * Input is structured JSON (a file or stdin). Rendering never sends, stores,
 * mutates, or falls back to a different template kind. Use `--import tsx` for
 * the source modules that retain OpenClaw's `.js` TypeScript specifiers.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  renderEmailDailyDigest,
  renderTelegramDailyDigest,
  type TemplateContext,
} from "../templates.ts";
import { renderExecutiveDigest, renderFlashReport } from "./reporting/reporting.ts";
import {
  renderMonthlyWorkReport,
  renderReview,
  renderWeeklyPlan,
} from "./time-management/planner.ts";

export const LISA_TEMPLATE_KINDS = [
  "telegram-daily-digest",
  "email-daily-digest",
  "executive-digest",
  "flash-report",
  "weekly-plan",
  "monthly-work-report",
  "review",
  "maintenance-status",
  "maintenance-restore-verification",
  "combined-1745",
  "battery-35-alert",
  "conditional-2145",
  "selfie-acknowledgment",
  "battery-checkpoint",
  "private-health-check-in",
  "private-health-monthly-report",
  "private-health-appointment-follow-up",
  "private-health-export-plan",
] as const;

export type LisaTemplateKind = (typeof LISA_TEMPLATE_KINDS)[number];

const PRIVATE_TEMPLATE_KINDS = new Set<LisaTemplateKind>([
  "private-health-check-in",
  "private-health-monthly-report",
  "private-health-appointment-follow-up",
  "private-health-export-plan",
]);

const WORK_TEMPLATE_KINDS = new Set<LisaTemplateKind>([
  "telegram-daily-digest",
  "email-daily-digest",
  "executive-digest",
  "flash-report",
  "weekly-plan",
  "monthly-work-report",
  "review",
  "maintenance-status",
  "maintenance-restore-verification",
]);

const PRIVATE_HEALTH_PATTERN =
  /(?:private[_ -]?health|mounjaro|medication|supplement|symptom|diagnos(?:e|is)|prescription|dosage|weight|waist|hydration|protein|sleep|mood|stress|digestion|bowel|clinical|treatment)/iu;

const STATIC_TEMPLATE_FILES: Readonly<
  Record<
    Exclude<
      LisaTemplateKind,
      | "telegram-daily-digest"
      | "email-daily-digest"
      | "executive-digest"
      | "flash-report"
      | "weekly-plan"
      | "monthly-work-report"
      | "review"
    >,
    string
  >
> = {
  "maintenance-status": "maintenance/templates/digest-status.md",
  "maintenance-restore-verification": "maintenance/templates/restore-verification.md",
  "combined-1745": "compliance/templates/combined-1745.md",
  "battery-35-alert": "compliance/templates/battery-35-alert.md",
  "conditional-2145": "compliance/templates/conditional-2145.md",
  "selfie-acknowledgment": "compliance/templates/selfie-acknowledgment.md",
  "battery-checkpoint": "compliance/templates/battery-checkpoint.md",
  "private-health-check-in": "health/templates/check-in.md",
  "private-health-monthly-report": "health/templates/monthly-report.md",
  "private-health-appointment-follow-up": "health/templates/appointment-follow-up.md",
  "private-health-export-plan": "health/templates/export-plan.md",
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isTemplateKind(value: string): value is LisaTemplateKind {
  return (LISA_TEMPLATE_KINDS as readonly string[]).includes(value);
}

function scanForPrivateHealth(value: unknown, pathName = "input"): void {
  if (typeof value === "string") {
    if (PRIVATE_HEALTH_PATTERN.test(value)) {
      throw new Error(`private-health leakage rejected in work template input at ${pathName}`);
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((child, index) => scanForPrivateHealth(child, `${pathName}[${index}]`));
    return;
  }
  if (!isRecord(value)) return;
  for (const [key, child] of Object.entries(value)) {
    if (PRIVATE_HEALTH_PATTERN.test(key)) {
      throw new Error(`private-health field rejected in work template input: ${pathName}.${key}`);
    }
    scanForPrivateHealth(child, `${pathName}.${key}`);
  }
}

function assertNoTableForm(output: string): void {
  if (/^\s*\|.*\|\s*$/mu.test(output) || /^\s*\|?\s*:?-{3,}/mu.test(output)) {
    throw new Error("table-form output is not allowed in Lisa templates");
  }
}

function assertNoUnresolvedPlaceholders(output: string): void {
  const unresolved = output.match(/\{\{[^}]+\}\}|<[A-Za-z][^>\n]*>/u);
  if (unresolved) throw new Error(`unresolved placeholder: ${unresolved[0]}`);
}

function assertOtherSpecify(value: unknown, pathName = "input"): void {
  if (Array.isArray(value)) {
    value.forEach((child, index) => assertOtherSpecify(child, `${pathName}[${index}]`));
    return;
  }
  if (!isRecord(value)) return;
  for (const [key, child] of Object.entries(value)) {
    if (key === "decisions" && Array.isArray(child)) {
      for (const [index, decision] of child.entries()) {
        if (
          isRecord(decision) &&
          Array.isArray(decision.options) &&
          decision.options.length > 0 &&
          decision.options.at(-1) !== "Other — specify"
        ) {
          throw new Error(`decision ${pathName}.${key}[${index}] must end with Other — specify`);
        }
      }
    }
    if (key === "approvalBlocks" || key === "items") {
      if (Array.isArray(child)) {
        for (const [index, block] of child.entries()) {
          if (isRecord(block) && Array.isArray(block.choices) && block.choices.length > 0) {
            const last = block.choices.at(-1);
            const text = isRecord(last) ? last.text : last;
            if (text !== "Other — specify") {
              throw new Error(
                `approval block ${pathName}.${key}[${index}] must end with Other — specify`,
              );
            }
          }
        }
      }
    }
    assertOtherSpecify(child, `${pathName}.${key}`);
  }
}

function assertSafeOutput(kind: LisaTemplateKind, output: string): string {
  assertNoUnresolvedPlaceholders(output);
  assertNoTableForm(output);
  if (WORK_TEMPLATE_KINDS.has(kind) && PRIVATE_HEALTH_PATTERN.test(output)) {
    throw new Error(`private-health leakage rejected in rendered ${kind}`);
  }
  return output.endsWith("\n") ? output : `${output}\n`;
}

function renderStatic(kind: LisaTemplateKind, input: unknown): string {
  const relative = STATIC_TEMPLATE_FILES[kind as keyof typeof STATIC_TEMPLATE_FILES];
  if (!relative) throw new Error(`no canonical static template registered for ${kind}`);
  const file = path.join(path.dirname(fileURLToPath(import.meta.url)), relative);
  let output = readFileSync(file, "utf8");
  if (kind === "maintenance-status") {
    if (
      !isRecord(input) ||
      (typeof input.count !== "number" && typeof input.count !== "string") ||
      String(input.count).trim() === ""
    ) {
      throw new Error("maintenance-status requires a structured count value");
    }
    return `Memory Dreaming: completed — ${String(input.count)} memories promoted`;
  }
  if (kind === "maintenance-restore-verification") {
    if (
      !isRecord(input) ||
      typeof input.restoreDirectory !== "string" ||
      typeof input.manifestHash !== "string" ||
      (input.result !== "passed" && input.result !== "failed")
    ) {
      throw new Error(
        "maintenance-restore-verification requires restoreDirectory, manifestHash, and result",
      );
    }
    output = output
      .replace("<fresh temporary directory>", input.restoreDirectory)
      .replace("<sha256>", input.manifestHash)
      .replace("`passed` or `failed`", `\`${String(input.result)}\``);
  }
  return output;
}

export function renderLisaJobTemplate(kind: string, input: unknown = {}): string {
  if (!isTemplateKind(kind)) throw new Error(`unknown Lisa template kind: ${kind}`);
  if (WORK_TEMPLATE_KINDS.has(kind)) {
    scanForPrivateHealth(input);
    assertOtherSpecify(input);
  }

  let output: string;
  switch (kind) {
    case "telegram-daily-digest":
      output = renderTelegramDailyDigest(input as TemplateContext);
      break;
    case "email-daily-digest":
      output = renderEmailDailyDigest(input as TemplateContext);
      break;
    case "executive-digest":
      output = renderExecutiveDigest(input as Parameters<typeof renderExecutiveDigest>[0]);
      break;
    case "flash-report":
      output = renderFlashReport(input as Parameters<typeof renderFlashReport>[0]);
      break;
    case "weekly-plan":
      output = renderWeeklyPlan(
        (isRecord(input) ? input.items : input) as Parameters<typeof renderWeeklyPlan>[0],
      );
      break;
    case "monthly-work-report":
      output = renderMonthlyWorkReport(input as Parameters<typeof renderMonthlyWorkReport>[0]);
      break;
    case "review":
      output = renderReview(input as Parameters<typeof renderReview>[0]);
      break;
    default:
      output = renderStatic(kind, input);
      break;
  }
  return assertSafeOutput(kind, output);
}

export function renderLisaJobTemplateJson(value: unknown): string {
  if (!isRecord(value) || typeof value.kind !== "string") {
    throw new Error("structured renderer input must be { kind, input }");
  }
  return renderLisaJobTemplate(value.kind, "input" in value ? value.input : value);
}

function usage(): never {
  throw new Error(
    "Usage: node --import tsx ops/jobs/render-lisa-job-template.ts <kind> <json-file|->\n" +
      "       or: node --import tsx ops/jobs/render-lisa-job-template.ts <json-file|-> (JSON envelope)",
  );
}

function main(argv: readonly string[]): number {
  if (argv.length === 1) {
    const source = argv[0]!;
    const raw = source === "-" ? readFileSync(0, "utf8") : readFileSync(source, "utf8");
    return writeRendered(renderLisaJobTemplateJson(JSON.parse(raw) as unknown));
  }
  const kind = argv[0];
  const source = argv[1];
  if (!kind || !source) usage();
  const raw = source === "-" ? readFileSync(0, "utf8") : readFileSync(source, "utf8");
  const parsed = JSON.parse(raw) as unknown;
  const output =
    isRecord(parsed) && parsed.kind === undefined
      ? renderLisaJobTemplate(kind, parsed)
      : renderLisaJobTemplateJson(parsed);
  return writeRendered(output);
}

function writeRendered(output: string): number {
  process.stdout.write(output);
  return 0;
}

// TSX may expose a transformed module URL for a copied disposable workspace;
// the explicit entry filename is the stable direct-CLI signal in that case.
const isDirectCli = process.argv[1]?.endsWith("render-lisa-job-template.ts") === true;

if (isDirectCli) {
  try {
    process.exitCode = main(process.argv.slice(2));
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 2;
  }
}
