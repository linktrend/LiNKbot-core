#!/usr/bin/env node
/**
 * Structural validator for OpenClaw Development Plan §13.3 classification ledger.
 * Rejects missing items, duplicates, grouped/invalid classifications, and incomplete rows.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runAsScript } from "./lib/ts-guard-utils.mjs";

const PERMITTED = new Set(["IAP", "INPL", "PART", "OMIT", "DIFF", "BLOCK", "OUT"]);
const KINDS = new Set(["task", "test", "gate", "risk", "evidence_requirement", "dod"]);

const DEFAULT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_INVENTORY = "docs/execution/openclawdevelopmentplan01/section-13.3/inventory.json";
const DEFAULT_LEDGER = "docs/execution/openclawdevelopmentplan01/section-13.3/ledger.csv";

/**
 * Parse a minimal RFC4180-ish CSV with quoted fields.
 * @param {string} text
 */
export function parseCsv(text) {
  const rows = [];
  let i = 0;
  const row = [];
  let field = "";
  let inQuotes = false;
  while (i < text.length) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      field += ch;
      i += 1;
      continue;
    }
    if (ch === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }
    if (ch === ",") {
      row.push(field);
      field = "";
      i += 1;
      continue;
    }
    if (ch === "\n" || (ch === "\r" && text[i + 1] === "\n")) {
      row.push(field);
      field = "";
      if (row.length > 1 || row[0] !== "") {
        rows.push([...row]);
      }
      row.length = 0;
      i += ch === "\r" ? 2 : 1;
      continue;
    }
    field += ch;
    i += 1;
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

/**
 * Validate inventory + ledger.
 * @param {{ root?: string, inventoryPath?: string, ledgerPath?: string }} [opts]
 */
export function validateSection133Ledger(opts = {}) {
  const root = opts.root ?? DEFAULT_ROOT;
  const inventoryPath = path.join(root, opts.inventoryPath ?? DEFAULT_INVENTORY);
  const ledgerPath = path.join(root, opts.ledgerPath ?? DEFAULT_LEDGER);
  /** @type {string[]} */
  const errors = [];

  if (!fs.existsSync(inventoryPath)) {
    return { ok: false, errors: [`missing inventory: ${inventoryPath}`] };
  }
  if (!fs.existsSync(ledgerPath)) {
    return { ok: false, errors: [`missing ledger: ${ledgerPath}`] };
  }

  const inventory = JSON.parse(fs.readFileSync(inventoryPath, "utf8"));
  const requiredIds = (inventory.items ?? []).map((item) => item.id);
  const requiredSet = new Set(requiredIds);
  if (requiredIds.length !== requiredSet.size) {
    errors.push("inventory contains duplicate ids");
  }

  const csvRows = parseCsv(fs.readFileSync(ledgerPath, "utf8"));
  if (csvRows.length < 2) {
    errors.push("ledger.csv has no data rows");
    return { ok: false, errors };
  }
  const header = csvRows[0];
  const expectedHeader = [
    "id",
    "kind",
    "classification",
    "item",
    "evidence",
    "owner",
    "deficiency",
    "next_action",
  ];
  if (JSON.stringify(header) !== JSON.stringify(expectedHeader)) {
    errors.push(`ledger header mismatch: got ${JSON.stringify(header)}`);
  }

  const seen = new Set();
  for (let index = 1; index < csvRows.length; index += 1) {
    const cells = csvRows[index];
    const line = index + 1;
    if (cells.length !== expectedHeader.length) {
      errors.push(`line ${line}: expected ${expectedHeader.length} columns, got ${cells.length}`);
      continue;
    }
    const [id, kind, classification, item, evidence, owner, deficiency, nextAction] = cells;
    if (!id) {
      errors.push(`line ${line}: empty id`);
      continue;
    }
    if (seen.has(id)) {
      errors.push(`duplicate ledger id: ${id}`);
    }
    seen.add(id);
    if (!requiredSet.has(id)) {
      errors.push(`unknown ledger id not in inventory: ${id}`);
    }
    if (!KINDS.has(kind)) {
      errors.push(`${id}: invalid kind ${JSON.stringify(kind)}`);
    }
    if (!PERMITTED.has(classification)) {
      errors.push(`${id}: invalid classification ${JSON.stringify(classification)}`);
    }
    if (classification.includes("/")) {
      errors.push(`${id}: grouped classification forbidden: ${classification}`);
    }
    for (const [name, value] of [
      ["item", item],
      ["evidence", evidence],
      ["owner", owner],
      ["deficiency", deficiency],
      ["next_action", nextAction],
    ]) {
      if (!value || !String(value).trim()) {
        errors.push(`${id}: empty ${name}`);
      }
    }
  }

  for (const id of requiredIds) {
    if (!seen.has(id)) {
      errors.push(`missing ledger row for inventory id: ${id}`);
    }
  }

  // Reject Phase 7–12 grouping: each phase must have its own task id present.
  for (const phase of [7, 8, 9, 10, 11, 12]) {
    const taskId = `phase.${phase}.task`;
    if (!seen.has(taskId)) {
      errors.push(`Phases 7-12 must be ungrouped; missing ${taskId}`);
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    rowCount: seen.size,
    requiredCount: requiredIds.length,
  };
}

/**
 * CLI entry.
 * @param {string[]} [argv]
 * @param {{ stdout?: { write(s: string): void }, stderr?: { write(s: string): void } }} [io]
 */
export async function main(argv, io) {
  const args = Array.isArray(argv) ? argv : process.argv.slice(2);
  const streams = io ?? process;
  const json = args.includes("--json");
  const result = validateSection133Ledger();
  const out = streams.stdout ?? process.stdout;
  const err = streams.stderr ?? process.stderr;
  if (json) {
    out.write(`${JSON.stringify(result, null, 2)}\n`);
  } else if (result.ok) {
    out.write(`Section 13.3 ledger OK (${result.rowCount}/${result.requiredCount} atomic rows).\n`);
  } else {
    err.write(`Section 13.3 ledger FAILED (${result.errors.length} errors):\n`);
    for (const error of result.errors.slice(0, 50)) {
      err.write(`- ${error}\n`);
    }
    if (result.errors.length > 50) {
      err.write(`- ... ${result.errors.length - 50} more\n`);
    }
  }
  return result.ok ? 0 : 1;
}

runAsScript(import.meta.url, async () => {
  process.exitCode = await main(process.argv.slice(2), process);
});
