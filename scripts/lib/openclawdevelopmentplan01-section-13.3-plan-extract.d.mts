#!/usr/bin/env node
/**
 * Deterministic §13.3 item extraction from the frozen OpenClaw implementation plan.
 * Fail-closed complete Markdown coverage.
 */
export const FROZEN_PLAN_RELATIVE_PATH: string;
export const FROZEN_PLAN_SHA256: string;
export const PLAN_ITEM_KINDS: readonly string[];
export function normalizePlanText(value: string): string;
export function planItemFingerprint(anchor: string, label: string): string;
export function sha256Hex(content: string | Buffer): string;
export function splitPlanList(value: string, separators?: ReadonlySet<string>): string[];
export function splitAtomicObligations(value: string): string[];
export function tokenizePlanMarkdown(planText: string): Array<Record<string, unknown>>;
export function analyzePlanForSection133(planText: string): {
  items: Array<{
    id: string;
    kind: string;
    label: string;
    anchor: string;
    line: number;
    fingerprint: string;
  }>;
  coverage: Array<Record<string, unknown>>;
  errors: string[];
  constructs: Array<Record<string, unknown>>;
};
export function extractPlanSection133Items(planText: string): Array<{
  id: string;
  kind: string;
  label: string;
  anchor: string;
  line: number;
  fingerprint: string;
}>;
export function loadFrozenPlanItems(opts?: {
  root?: string;
  planPath?: string;
  expectedSha256?: string;
  planText?: string;
}): {
  ok: boolean;
  errors: string[];
  planPath: string;
  planSha256: string;
  expectedSha256: string;
  items: Array<{
    id: string;
    kind: string;
    label: string;
    anchor: string;
    line: number;
    fingerprint: string;
  }>;
  coverage: Array<Record<string, unknown>>;
};
export function buildInventoryFromPlanItems(
  items: unknown[],
  planSha256: string,
  coverage?: unknown[],
): Record<string, unknown>;
