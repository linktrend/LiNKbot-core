import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  parseCsv,
  validateSection133Ledger,
} from "../../scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs";

describe("section 13.3 ledger validator", () => {
  it("parses quoted CSV fields", () => {
    expect(parseCsv('a,b\n"x,y","z""z"\n')).toEqual([
      ["a", "b"],
      ["x,y", 'z"z'],
    ]);
  });

  it("accepts the checked-in inventory and ledger", () => {
    const result = validateSection133Ledger();
    expect(result.ok).toBe(true);
    expect(result.errors).toEqual([]);
    expect(result.rowCount).toBe(result.requiredCount);
    expect(result.rowCount).toBeGreaterThan(100);
  });

  it("rejects missing items, duplicates, grouped and invalid classifications", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "section133-"));
    try {
      const inventory = {
        version: 1,
        classifications: ["IAP", "INPL", "PART", "OMIT", "DIFF", "BLOCK", "OUT"],
        kinds: ["task", "test", "gate", "risk", "evidence_requirement", "dod"],
        items: [
          { id: "phase.7.task", kind: "task", label: "Phase 7" },
          { id: "phase.8.task", kind: "task", label: "Phase 8" },
          { id: "a.task", kind: "task", label: "A" },
        ],
      };
      fs.mkdirSync(path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3"), {
        recursive: true,
      });
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/inventory.json"),
        JSON.stringify(inventory),
      );
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/ledger.csv"),
        [
          "id,kind,classification,item,evidence,owner,deficiency,next_action",
          '"a.task","task","INPL/BLOCK","A","e","o","d","n"',
          '"a.task","task","INPL","A","e","o","d","n"',
          '"phase.7.task","task","NOPE","P7","e","o","d","n"',
          '"phase.8.task","task","BLOCK","P8","e","o","d","n"',
        ].join("\n"),
      );

      const result = validateSection133Ledger({ root: tmp });
      expect(result.ok).toBe(false);
      const joined = result.errors.join("\n");
      expect(joined).toMatch(/grouped classification|invalid classification/);
      expect(joined).toMatch(/duplicate ledger id/);
      expect(joined).toMatch(/invalid classification/);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it("rejects missing Phase 7-12 ungrouped task rows", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "section133-missing-"));
    try {
      fs.mkdirSync(path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3"), {
        recursive: true,
      });
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/inventory.json"),
        JSON.stringify({
          items: [{ id: "only.task", kind: "task", label: "only" }],
        }),
      );
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/ledger.csv"),
        [
          "id,kind,classification,item,evidence,owner,deficiency,next_action",
          '"only.task","task","INPL","only","e","o","d","n"',
        ].join("\n"),
      );
      const result = validateSection133Ledger({ root: tmp });
      expect(result.ok).toBe(false);
      expect(result.errors.some((e) => e.includes("phase.7.task"))).toBe(true);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });
});
