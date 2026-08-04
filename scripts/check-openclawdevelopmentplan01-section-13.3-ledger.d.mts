#!/usr/bin/env node
/**
 * Structural validator for OpenClaw Development Plan §13.3 coverage/evidence ledger.
 * Authority: frozen plan SHA-256 + deterministic fail-closed extraction.
 * Grok owns Phase-13 coverage/evidence mapping; Codex owns Phase-14 classifications.
 */
export const FROZEN_PLAN_RELATIVE_PATH: string;
export const FROZEN_PLAN_SHA256: string;
export const NON_REQUIREMENT_REASON_CODES: readonly string[];
export const GROK_COMPLETION_CLAIMS: readonly string[];
export function parseCsv(text: string): string[][];
export function csvEscape(value: string): string;
export function grokEvidenceMappingForPlanItem(item: {
  id: string;
  kind: string;
  label: string;
}): {
  owner: string;
  evidence_location: string;
  completion_claim: string;
  note: string;
};
/** @deprecated Throws — Grok must not emit Phase-14 classifications. */
export function provisionalClassificationForPlanItem(): never;
export function buildLedgerCsvFromPlanItems(items: unknown[]): string;
export function listDescriptiveExclusions(coverage: unknown[]): Array<Record<string, unknown>>;
export function validateSection133Ledger(opts?: {
  root?: string;
  inventoryPath?: string;
  ledgerPath?: string;
  planPath?: string;
  expectedSha256?: string;
  planText?: string;
}): {
  ok: boolean;
  errors: string[];
  rowCount: number;
  requiredCount: number;
  coverageCount?: number;
  planSha256?: string;
  descriptiveExclusions?: Array<Record<string, unknown>>;
  evidenceMappedCount?: number;
};
export function writeSection133ArtifactsFromPlan(opts?: { root?: string }): {
  inventoryPath: string;
  ledgerPath: string;
  itemCount: number;
  coverageCount: number;
  descriptiveExclusionCount: number;
  evidenceMappedCount: number;
  planSha256: string;
};
export function extractPlanSection133Items(planText: string): unknown[];
export function analyzePlanForSection133(
  planText: string,
  options?: { descriptiveExclusions?: ReadonlyArray<unknown> },
): {
  items: unknown[];
  coverage: unknown[];
  errors: string[];
  constructs: unknown[];
};
export function tokenizePlanMarkdown(planText: string): unknown[];
export function splitAtomicObligations(value: string): string[];
export function isFragmentedPlanLabel(label: string): boolean;
export function isImperativeInstruction(line: string): boolean;
export function isHardRequirementContext(contextCode: string | null | undefined): boolean;
export function lineHasBindingObligation(text: string): boolean;
export function loadFrozenPlanItems(opts?: Record<string, unknown>): {
  ok: boolean;
  errors: string[];
  planPath: string;
  planSha256: string;
  expectedSha256: string;
  items: unknown[];
  coverage: unknown[];
};
export function sha256Hex(content: string | Buffer): string;
export function main(
  argv?: string[],
  io?: {
    stdout?: { write(s: string): void };
    stderr?: { write(s: string): void };
  },
): Promise<0 | 1>;
