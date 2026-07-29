import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  FROZEN_PLAN_SHA256,
  buildLedgerCsvFromPlanItems,
  extractPlanSection133Items,
  loadFrozenPlanItems,
  parseCsv,
  sha256Hex,
  validateSection133Ledger,
  writeSection133ArtifactsFromPlan,
} from "../../scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs";
import {
  buildInventoryFromPlanItems,
  planItemFingerprint,
} from "../../scripts/lib/openclawdevelopmentplan01-section-13.3-plan-extract.mjs";

const MINI_PLAN = `# Mini

## 14. Cross-Plan Interface Gates

1. **Platform identity and credential gate.** Platform owns credentials.
2. **OpenClaw implementation-ownership gate.** OpenClaw owns plugins.

## 15. Phased Implementation Plan

### Phase 7 — Platform Stage Readiness Gate

**Work:**

- validate contract versions;
- run no-secret probes.

**Exit gate:** Platform owner signs stage readiness.

**Rollback:** Platform disables Lisa bindings.

### Phase 8 — Brain Stage Shadow and Write Canary

**Work:**

- enable Brain MCP health.

**Exit gate:** Brain owner accepts stage evidence.

**Rollback:** disable Brain writes.

## 16. Test Strategy

### 16.2 Required invariants

Tests must prove:

- separate Brain and Skills credentials and scopes;
- native skills continue during degradation.

## 22. Risks, Gates, and Accepted Assumptions

### 22.1 Launch-blocking gates

- explicit Principal approval of this plan;
- active, verified Platform environment for each live stage/production phase.

### 22.5 Execution and verification risks

| Risk | Required control |
| ---- | ---------------- |
| Planned items remain unclassified | Require exactly one of the seven Section 13.3 classifications. |

## 23. Definition of Done

### Architecture and ownership

- Lisa maps to one canonical Platform actor and one recorded OpenClaw runtime binding.
- \`linkbrain\` and \`linkskills\` are separate default-disabled plugins using only public SDK surfaces.
`;

describe("section 13.3 plan-authority ledger validator", () => {
  it("parses quoted CSV fields", () => {
    expect(parseCsv('a,b\n"x,y","z""z"\n')).toEqual([
      ["a", "b"],
      ["x,y", 'z"z'],
    ]);
  });

  it("pins the frozen plan hash and accepts checked-in plan-derived artifacts", () => {
    const loaded = loadFrozenPlanItems();
    expect(loaded.ok).toBe(true);
    expect(loaded.planSha256).toBe(FROZEN_PLAN_SHA256);
    expect(loaded.items.length).toBeGreaterThan(100);
    const result = validateSection133Ledger();
    expect(result.ok).toBe(true);
    expect(result.errors).toEqual([]);
    expect(result.rowCount).toBe(result.requiredCount);
    expect(result.rowCount).toBe(loaded.items.length);
    expect(result.planSha256).toBe(FROZEN_PLAN_SHA256);
  });

  it("extracts distinct kinds with stable anchors and fingerprints", () => {
    const items = extractPlanSection133Items(MINI_PLAN);
    const kinds = new Set(items.map((item) => item.kind));
    expect(kinds.has("cross_plan_gate")).toBe(true);
    expect(kinds.has("task")).toBe(true);
    expect(kinds.has("exit_gate")).toBe(true);
    expect(kinds.has("rollback")).toBe(true);
    expect(kinds.has("test")).toBe(true);
    expect(kinds.has("gate")).toBe(true);
    expect(kinds.has("risk")).toBe(true);
    expect(kinds.has("dod")).toBe(true);
    expect(new Set(items.map((item) => item.anchor)).size).toBe(items.length);
    expect(new Set(items.map((item) => item.fingerprint)).size).toBe(items.length);
    expect(items.every((item) => item.fingerprint === planItemFingerprint(item.anchor, item.label))).toBe(
      true,
    );
  });

  it("rejects stale plan hashes", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "section133-stale-"));
    try {
      const planRel = "docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md";
      fs.mkdirSync(path.join(tmp, "docs"), { recursive: true });
      fs.mkdirSync(path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3"), {
        recursive: true,
      });
      fs.writeFileSync(path.join(tmp, planRel), MINI_PLAN);
      const items = extractPlanSection133Items(MINI_PLAN);
      const inventory = buildInventoryFromPlanItems(items, sha256Hex(MINI_PLAN));
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/inventory.json"),
        JSON.stringify(inventory),
      );
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/ledger.csv"),
        buildLedgerCsvFromPlanItems(items),
      );
      const result = validateSection133Ledger({
        root: tmp,
        expectedSha256: FROZEN_PLAN_SHA256,
      });
      expect(result.ok).toBe(false);
      expect(result.errors.join("\n")).toMatch(/stale or wrong frozen plan hash/);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it("rejects omitted, grouped, duplicated, invented, and modified plan items", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "section133-bad-"));
    try {
      const planRel = "docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md";
      fs.mkdirSync(path.join(tmp, "docs"), { recursive: true });
      fs.mkdirSync(path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3"), {
        recursive: true,
      });
      fs.writeFileSync(path.join(tmp, planRel), MINI_PLAN);
      const planSha = sha256Hex(MINI_PLAN);
      const items = extractPlanSection133Items(MINI_PLAN);
      const inventory = buildInventoryFromPlanItems(items, planSha);
      // Invent a mirror row and drop a real plan item.
      inventory.items = inventory.items.filter((item) => item.id !== "phase.7.work.1");
      inventory.items.push({
        id: "invented.mirror.task",
        kind: "task",
        label: "not in plan",
        anchor: "invented.mirror.task",
        line: 1,
        fingerprint: planItemFingerprint("invented.mirror.task", "not in plan"),
      });
      // Modify a plan item label in inventory.
      const title = inventory.items.find((item) => item.id === "phase.7.title");
      if (title) {
        title.label = "modified away from plan";
      }
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/inventory.json"),
        JSON.stringify(inventory),
      );

      const rows = parseCsv(buildLedgerCsvFromPlanItems(items));
      const header = rows[0];
      const data = rows.slice(1);
      const kept = data.filter((row) => row[0] !== "phase.8.title");
      // Duplicate one row, invent one row, group a classification.
      const duplicate = [...kept[0]];
      const invented = [
        "invented.ledger.task",
        "task",
        "INPL",
        "invented",
        "e",
        "o",
        "d",
        "n",
        "invented.ledger.task",
        "1",
        planItemFingerprint("invented.ledger.task", "invented"),
      ];
      const grouped = kept.find((row) => row[0] === "phase.7.title");
      if (grouped) {
        grouped[2] = "INPL/BLOCK";
      }
      const ledger = [header, ...kept, duplicate, invented]
        .map((cells) => cells.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
        .join("\n");
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/ledger.csv"),
        `${ledger}\n`,
      );

      const result = validateSection133Ledger({
        root: tmp,
        expectedSha256: planSha,
      });
      expect(result.ok).toBe(false);
      const joined = result.errors.join("\n");
      expect(joined).toMatch(/omitted plan item|inventory omitted plan item/);
      expect(joined).toMatch(/invented/);
      expect(joined).toMatch(/grouped\/combined classification|grouped classification/);
      expect(joined).toMatch(/duplicate ledger id/);
      expect(joined).toMatch(/label drift|does not match plan source/);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it("rejects ledger rows that group Phases 7-12 by omitting a phase title", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "section133-group-"));
    try {
      const planRel = "docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md";
      fs.mkdirSync(path.join(tmp, "docs"), { recursive: true });
      fs.mkdirSync(path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3"), {
        recursive: true,
      });
      fs.writeFileSync(path.join(tmp, planRel), MINI_PLAN);
      const planSha = sha256Hex(MINI_PLAN);
      const items = extractPlanSection133Items(MINI_PLAN);
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/inventory.json"),
        JSON.stringify(buildInventoryFromPlanItems(items, planSha)),
      );
      const rows = parseCsv(buildLedgerCsvFromPlanItems(items)).filter(
        (row, index) => index === 0 || row[0] !== "phase.8.title",
      );
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/ledger.csv"),
        `${rows.map((cells) => cells.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n")}\n`,
      );
      const result = validateSection133Ledger({ root: tmp, expectedSha256: planSha });
      expect(result.ok).toBe(false);
      expect(result.errors.some((error) => error.includes("phase.8.title"))).toBe(true);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it("write helper regenerates artifacts that validate", () => {
    const before = validateSection133Ledger();
    expect(before.ok).toBe(true);
    const written = writeSection133ArtifactsFromPlan();
    expect(written.itemCount).toBe(before.requiredCount);
    const after = validateSection133Ledger();
    expect(after.ok).toBe(true);
    expect(after.rowCount).toBe(written.itemCount);
  });
});
