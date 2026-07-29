#!/usr/bin/env node
/**
 * Structural validator for OpenClaw Development Plan §13.3 classification ledger.
 * Authority: frozen plan SHA-256 + deterministic extraction.
 */
export const FROZEN_PLAN_RELATIVE_PATH: string;
export const FROZEN_PLAN_SHA256: string;
export function parseCsv(text: string): string[][];
export function csvEscape(value: string): string;
export function provisionalClassificationForPlanItem(item: {
  id: string;
  kind: string;
  label: string;
}): {
  classification: string;
  evidence: string;
  owner: string;
  deficiency: string;
  next_action: string;
};
export function buildLedgerCsvFromPlanItems(items: unknown[]): string;
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
  planSha256?: string;
};
export function writeSection133ArtifactsFromPlan(opts?: { root?: string }): {
  inventoryPath: string;
  ledgerPath: string;
  itemCount: number;
  planSha256: string;
};
export function extractPlanSection133Items(planText: string): unknown[];
export function loadFrozenPlanItems(opts?: Record<string, unknown>): {
  ok: boolean;
  errors: string[];
  planPath: string;
  planSha256: string;
  expectedSha256: string;
  items: unknown[];
};
export function sha256Hex(content: string | Buffer): string;
export function main(
  argv?: string[],
  io?: {
    stdout?: { write(s: string): void };
    stderr?: { write(s: string): void };
  },
): Promise<0 | 1>;
