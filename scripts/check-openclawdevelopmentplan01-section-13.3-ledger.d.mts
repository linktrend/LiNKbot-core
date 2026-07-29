#!/usr/bin/env node
/**
 * Structural validator for OpenClaw Development Plan §13.3 classification ledger.
 */
export function parseCsv(text: string): string[][];
export function validateSection133Ledger(opts?: {
  root?: string;
  inventoryPath?: string;
  ledgerPath?: string;
}): {
  ok: boolean;
  errors: string[];
  rowCount: number;
  requiredCount: number;
};
export function main(
  argv?: string[],
  io?: {
    stdout?: { write(s: string): void };
    stderr?: { write(s: string): void };
  },
): Promise<0 | 1>;
