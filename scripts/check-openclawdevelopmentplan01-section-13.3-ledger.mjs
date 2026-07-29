#!/usr/bin/env node
/**
 * §13.3 conformance ledger validator.
 * Authority: frozen implementation plan bytes (pinned SHA-256), not a hand-edited inventory.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  FROZEN_PLAN_RELATIVE_PATH,
  FROZEN_PLAN_SHA256,
  PLAN_ITEM_KINDS,
  buildInventoryFromPlanItems,
  extractPlanSection133Items,
  loadFrozenPlanItems,
  sha256Hex,
} from "./lib/openclawdevelopmentplan01-section-13.3-plan-extract.mjs";
import { runAsScript } from "./lib/ts-guard-utils.mjs";

const PERMITTED = new Set(["IAP", "INPL", "PART", "OMIT", "DIFF", "BLOCK", "OUT"]);
const KINDS = new Set(PLAN_ITEM_KINDS);

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
 * Escape one CSV field.
 * @param {string} value
 */
export function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return `"${text}"`;
}

/**
 * Provisional classification for a plan-derived item (Grok execution judgment only).
 * @param {{ id: string, kind: string, label: string }} item
 */
export function provisionalClassificationForPlanItem(item) {
  const id = item.id;
  const label = item.label.toLowerCase();

  if (
    id.startsWith("phase.14.") ||
    id.startsWith("phase.15.") ||
    id === "phase.14.title" ||
    id === "phase.15.title" ||
    id.startsWith("cross_plan_gate.10") ||
    id.startsWith("cross_plan_gate.11") ||
    /codex verifier|coordinating verifier|principal accept/.test(label)
  ) {
    return {
      classification: "OUT",
      evidence: "Plan ownership (Phase 14/15 / verifier / Principal)",
      owner: "OpenClaw Codex / LiNKbrain Codex / Principal",
      deficiency: "Outside Grok execution ownership; not self-certifiable",
      next_action: "Codex verifies tip and assigns accepted classifications",
    };
  }

  if (
    /^phase\.(7|8|9|10|11|12)\./.test(id) ||
    id.startsWith("gate.launch_blocking.") ||
    /^cross_plan_gate\.(1|2|3|4|6|7|8|9)\b/.test(id) ||
    /stage|production|live platform|principal-approved retention|cursor credential/.test(label)
  ) {
    return {
      classification: "BLOCK",
      evidence: "PHASE-*-STATUS-BLOCKED.md; live/stage/prod gates uncleared",
      owner: "Multi / external owner",
      deficiency: "Live/stage/production or external owner evidence unavailable",
      next_action: "Remain blocked until named owner clears the gate",
    };
  }

  if (id.startsWith("cross_plan_gate.5") || id === "phase.0.title") {
    return {
      classification: "INPL",
      evidence: "OpenClaw-owned plugins/tests/docs on branch; fake-tier only",
      owner: "OpenClaw",
      deficiency: "Live proof not claimed",
      next_action: "Codex verify ownership boundaries and fake-tier evidence",
    };
  }

  if (item.kind === "dod" && /production|stage|principal|four-plan|codex/.test(label)) {
    return {
      classification: "BLOCK",
      evidence: "Definition of Done requires live/independent proof",
      owner: "Multi",
      deficiency: "DoD statement not live-proven",
      next_action: "Remain blocked until independent evidence exists",
    };
  }

  if (item.kind === "risk") {
    return {
      classification: "INPL",
      evidence:
        "Control recorded in plan §22.5; execution/verification separation enforced in process docs",
      owner: "OpenClaw",
      deficiency: "Control effectiveness not independently certified",
      next_action: "Codex assess control evidence",
    };
  }

  // Default for fake-tier OpenClaw-owned plan items on this branch.
  return {
    classification: "INPL",
    evidence: "Plan-derived item; local fake-tier / docs evidence on branch (not live-proven)",
    owner: "OpenClaw",
    deficiency: "Live/stage residual unproven",
    next_action: "Codex verify classification and evidence",
  };
}

/**
 * @param {ReturnType<typeof extractPlanSection133Items>} items
 */
export function buildLedgerCsvFromPlanItems(items) {
  const header = [
    "id",
    "kind",
    "classification",
    "item",
    "evidence",
    "owner",
    "deficiency",
    "next_action",
    "anchor",
    "line",
    "fingerprint",
  ];
  const rows = [header.map(csvEscape).join(",")];
  for (const item of items) {
    const provisional = provisionalClassificationForPlanItem(item);
    rows.push(
      [
        item.id,
        item.kind,
        provisional.classification,
        item.label,
        provisional.evidence,
        provisional.owner,
        provisional.deficiency,
        provisional.next_action,
        item.anchor,
        String(item.line),
        item.fingerprint,
      ]
        .map(csvEscape)
        .join(","),
    );
  }
  return `${rows.join("\n")}\n`;
}

/**
 * Validate inventory + ledger against plan-derived authority.
 * @param {{
 *   root?: string,
 *   inventoryPath?: string,
 *   ledgerPath?: string,
 *   planPath?: string,
 *   expectedSha256?: string,
 *   planText?: string,
 * }} [opts]
 */
export function validateSection133Ledger(opts = {}) {
  const root = opts.root ?? DEFAULT_ROOT;
  const inventoryPath = path.join(root, opts.inventoryPath ?? DEFAULT_INVENTORY);
  const ledgerPath = path.join(root, opts.ledgerPath ?? DEFAULT_LEDGER);
  /** @type {string[]} */
  const errors = [];

  const loaded = loadFrozenPlanItems({
    root,
    planPath: opts.planPath,
    expectedSha256: opts.expectedSha256,
    planText: opts.planText,
  });
  errors.push(...loaded.errors);
  const required = loaded.items;
  const requiredById = new Map(required.map((item) => [item.id, item]));

  if (!fs.existsSync(inventoryPath)) {
    errors.push(`missing inventory: ${inventoryPath}`);
  }
  if (!fs.existsSync(ledgerPath)) {
    errors.push(`missing ledger: ${ledgerPath}`);
    return {
      ok: false,
      errors,
      rowCount: 0,
      requiredCount: required.length,
      planSha256: loaded.planSha256,
    };
  }

  if (fs.existsSync(inventoryPath)) {
    let inventory;
    try {
      inventory = JSON.parse(fs.readFileSync(inventoryPath, "utf8"));
    } catch (error) {
      errors.push(`inventory JSON parse failed: ${String(error)}`);
      inventory = null;
    }
    if (inventory) {
      if (inventory.authority !== "frozen_plan") {
        errors.push('inventory.authority must be "frozen_plan"');
      }
      if (inventory.plan_sha256 !== loaded.expectedSha256) {
        errors.push(
          `inventory plan_sha256 mismatch: inventory=${inventory.plan_sha256} expected=${loaded.expectedSha256}`,
        );
      }
      if (
        inventory.plan_path !== FROZEN_PLAN_RELATIVE_PATH &&
        inventory.plan_path !== opts.planPath
      ) {
        // Allow test overrides when planPath is provided.
        if (!opts.planPath) {
          errors.push(`inventory.plan_path must be ${FROZEN_PLAN_RELATIVE_PATH}`);
        }
      }
      const inventoryItems = Array.isArray(inventory.items) ? inventory.items : [];
      const inventoryIds = inventoryItems.map((item) => item.id);
      if (new Set(inventoryIds).size !== inventoryIds.length) {
        errors.push("inventory contains duplicate ids");
      }
      const inventoryById = new Map(inventoryItems.map((item) => [item.id, item]));
      for (const planItem of required) {
        const inv = inventoryById.get(planItem.id);
        if (!inv) {
          errors.push(`inventory omitted plan item: ${planItem.id}`);
          continue;
        }
        if (inv.kind !== planItem.kind) {
          errors.push(`inventory kind drift for ${planItem.id}`);
        }
        if (inv.label !== planItem.label) {
          errors.push(`inventory label drift for ${planItem.id}`);
        }
        if (inv.anchor !== planItem.anchor) {
          errors.push(`inventory anchor drift for ${planItem.id}`);
        }
        if (inv.fingerprint !== planItem.fingerprint) {
          errors.push(`inventory fingerprint drift for ${planItem.id}`);
        }
        if (Number(inv.line) !== planItem.line) {
          errors.push(`inventory line drift for ${planItem.id}`);
        }
      }
      for (const inv of inventoryItems) {
        if (!requiredById.has(inv.id)) {
          errors.push(`invented inventory mirror row not in plan: ${inv.id}`);
        }
      }
    }
  }

  const csvRows = parseCsv(fs.readFileSync(ledgerPath, "utf8"));
  if (csvRows.length < 2) {
    errors.push("ledger.csv has no data rows");
    return {
      ok: false,
      errors,
      rowCount: 0,
      requiredCount: required.length,
      planSha256: loaded.planSha256,
    };
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
    "anchor",
    "line",
    "fingerprint",
  ];
  if (JSON.stringify(header) !== JSON.stringify(expectedHeader)) {
    errors.push(`ledger header mismatch: got ${JSON.stringify(header)}`);
  }

  const seen = new Set();
  const seenAnchors = new Set();
  const seenFingerprints = new Set();
  for (let index = 1; index < csvRows.length; index += 1) {
    const cells = csvRows[index];
    const line = index + 1;
    if (cells.length !== expectedHeader.length) {
      errors.push(`line ${line}: expected ${expectedHeader.length} columns, got ${cells.length}`);
      continue;
    }
    const [
      id,
      kind,
      classification,
      item,
      evidence,
      owner,
      deficiency,
      nextAction,
      anchor,
      srcLine,
      fingerprint,
    ] = cells;
    if (!id) {
      errors.push(`line ${line}: empty id`);
      continue;
    }
    if (seen.has(id)) {
      errors.push(`duplicate ledger id: ${id}`);
    }
    seen.add(id);
    const planItem = requiredById.get(id);
    if (!planItem) {
      errors.push(`invented ledger row without exact plan source item: ${id}`);
      continue;
    }
    if (kind !== planItem.kind || !KINDS.has(kind)) {
      errors.push(`${id}: kind mismatch/invalid (${kind})`);
    }
    if (item !== planItem.label) {
      errors.push(`${id}: ledger item text does not match plan source`);
    }
    if (anchor !== planItem.anchor) {
      errors.push(`${id}: ledger anchor does not match plan source`);
    }
    if (fingerprint !== planItem.fingerprint) {
      errors.push(`${id}: ledger fingerprint does not match plan source`);
    }
    if (String(srcLine) !== String(planItem.line)) {
      errors.push(`${id}: ledger line does not match plan source`);
    }
    if (seenAnchors.has(anchor)) {
      errors.push(`duplicate ledger anchor: ${anchor}`);
    }
    seenAnchors.add(anchor);
    if (seenFingerprints.has(fingerprint)) {
      errors.push(`duplicate ledger fingerprint: ${fingerprint}`);
    }
    seenFingerprints.add(fingerprint);
    if (!PERMITTED.has(classification)) {
      errors.push(`${id}: invalid classification ${JSON.stringify(classification)}`);
    }
    if (classification.includes("/") || /\s/.test(classification)) {
      errors.push(`${id}: grouped/combined classification forbidden: ${classification}`);
    }
    for (const [name, value] of [
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

  for (const planItem of required) {
    if (!seen.has(planItem.id)) {
      errors.push(`omitted plan item from ledger: ${planItem.id}`);
    }
  }

  // Explicit anti-grouping: Phases 7–12 must each appear as distinct title rows.
  for (const phase of [7, 8, 9, 10, 11, 12]) {
    const titleId = `phase.${phase}.title`;
    if (!seen.has(titleId) && requiredById.has(titleId)) {
      errors.push(`Phases 7-12 must be ungrouped; missing ${titleId}`);
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    rowCount: seen.size,
    requiredCount: required.length,
    planSha256: loaded.planSha256,
  };
}

/**
 * Regenerate inventory.json + ledger.csv from the frozen plan.
 * @param {{ root?: string }} [opts]
 */
export function writeSection133ArtifactsFromPlan(opts = {}) {
  const root = opts.root ?? DEFAULT_ROOT;
  const loaded = loadFrozenPlanItems({ root });
  if (!loaded.ok) {
    throw new Error(loaded.errors.join("\n"));
  }
  const inventory = buildInventoryFromPlanItems(loaded.items, loaded.planSha256);
  const inventoryPath = path.join(root, DEFAULT_INVENTORY);
  const ledgerPath = path.join(root, DEFAULT_LEDGER);
  fs.mkdirSync(path.dirname(inventoryPath), { recursive: true });
  fs.writeFileSync(inventoryPath, `${JSON.stringify(inventory, null, 2)}\n`);
  fs.writeFileSync(ledgerPath, buildLedgerCsvFromPlanItems(loaded.items));
  return {
    inventoryPath,
    ledgerPath,
    itemCount: loaded.items.length,
    planSha256: loaded.planSha256,
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
  const out = streams.stdout ?? process.stdout;
  const err = streams.stderr ?? process.stderr;
  if (args.includes("--write")) {
    const written = writeSection133ArtifactsFromPlan();
    out.write(
      `Wrote plan-derived §13.3 artifacts (${written.itemCount} items; plan ${written.planSha256}).\n`,
    );
    return 0;
  }
  const json = args.includes("--json");
  const result = validateSection133Ledger();
  if (json) {
    out.write(`${JSON.stringify(result, null, 2)}\n`);
  } else if (result.ok) {
    out.write(
      `Section 13.3 ledger OK (${result.rowCount}/${result.requiredCount} plan-derived rows; plan ${result.planSha256}).\n`,
    );
  } else {
    err.write(`Section 13.3 ledger FAILED (${result.errors.length} errors):\n`);
    for (const error of result.errors.slice(0, 80)) {
      err.write(`- ${error}\n`);
    }
    if (result.errors.length > 80) {
      err.write(`- ... ${result.errors.length - 80} more\n`);
    }
  }
  return result.ok ? 0 : 1;
}

export {
  FROZEN_PLAN_RELATIVE_PATH,
  FROZEN_PLAN_SHA256,
  extractPlanSection133Items,
  loadFrozenPlanItems,
  sha256Hex,
};

runAsScript(import.meta.url, async () => {
  process.exitCode = await main(process.argv.slice(2), process);
});
