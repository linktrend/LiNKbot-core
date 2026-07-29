import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  AUTH_CLAIMS_CONTENT_HASH,
  AUTH_CLAIMS_CONTRACT,
  AUTH_CLAIMS_SCHEMA_SHA256,
  BRAIN_FIXTURE_AGGREGATE_SHA256,
  BRAIN_OWNER_HANDOFF_COMMIT,
  COUNTERSIGN_INSPECTION_TIP,
  FIXTURE_OWNER_GATE,
  FIXTURE_OWNER_STATUS,
  PLATFORM_CONTRACTS_PACKAGE,
  PLATFORM_HEAD_RECORD_SPECS,
  PLATFORM_SOURCE_HEAD,
  REL,
  SKILLS_FIXTURE_AGGREGATE_SHA256,
  SKILLS_OWNER_HANDOFF_COMMIT,
  findStalePendingWhileClosedClaims,
  validateAuthClaimsProvenance,
  validatePlatformSourceHeadAgreement,
} from "../../scripts/check-openclawdevelopmentplan01-authclaims-provenance.mjs";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const SANDBOX_RELS = [
  REL.platformPin,
  REL.skillsPin,
  REL.consumption,
  REL.signoff,
  REL.contractsReadme,
  REL.authClaimsReadme,
  REL.phase13Handoff,
  REL.phase1Status,
  REL.countersignRequest,
  REL.brainManifest,
  REL.skillsManifest,
  REL.schemaCopy,
];

function copyTree(srcRoot: string, destRoot: string, relativePaths: string[]) {
  for (const relativePath of relativePaths) {
    const src = path.join(srcRoot, relativePath);
    const dest = path.join(destRoot, relativePath);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function withSandbox(
  mutate: (root: string) => void,
): ReturnType<typeof validateAuthClaimsProvenance> {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "authclaims-provenance-"));
  try {
    copyTree(REPO_ROOT, root, SANDBOX_RELS);
    mutate(root);
    return validateAuthClaimsProvenance({ repoRoot: root });
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

const MUTATED_PLATFORM_HEAD = "0123456789abcdef0123456789abcdef01234567";

describe("check-openclawdevelopmentplan01-authclaims-provenance", () => {
  it("passes against the live repository provenance set", () => {
    const result = validateAuthClaimsProvenance({ repoRoot: REPO_ROOT });
    expect(result.errors).toEqual([]);
    expect(result.ok).toBe(true);
    expect(result.checks.length).toBeGreaterThanOrEqual(7);
  });

  it("agrees on exact Platform source HEAD across authoritative records", () => {
    const result = validatePlatformSourceHeadAgreement({ repoRoot: REPO_ROOT });
    expect(result.errors).toEqual([]);
    expect(result.ok).toBe(true);
    for (const spec of PLATFORM_HEAD_RECORD_SPECS) {
      expect(result.observed[spec.id]).toBe(PLATFORM_SOURCE_HEAD);
    }
  });

  for (const spec of PLATFORM_HEAD_RECORD_SPECS) {
    it(`fails when Platform HEAD record ${spec.id} is mutated alone`, () => {
      const result = withSandbox((root) => {
        const abs = path.join(root, spec.rel);
        if (spec.kind === "json_path") {
          const pin = JSON.parse(fs.readFileSync(abs, "utf8"));
          let cursor: Record<string, unknown> = pin;
          const keys = spec.jsonPath ?? [];
          for (let i = 0; i < keys.length - 1; i += 1) {
            const key = keys[i]!;
            const next = cursor[key];
            if (typeof next !== "object" || next === null) {
              throw new Error(`missing path ${keys.join(".")}`);
            }
            cursor = next as Record<string, unknown>;
          }
          cursor[keys[keys.length - 1]!] = MUTATED_PLATFORM_HEAD;
          fs.writeFileSync(abs, `${JSON.stringify(pin, null, 2)}\n`);
          return;
        }
        let text = fs.readFileSync(abs, "utf8");
        expect(text.includes(PLATFORM_SOURCE_HEAD)).toBe(true);
        text = text.replaceAll(PLATFORM_SOURCE_HEAD, MUTATED_PLATFORM_HEAD);
        fs.writeFileSync(abs, text);
      });
      expect(result.ok).toBe(false);
      expect(
        result.errors.some(
          (e) => e.includes(spec.id) || e.includes("Platform HEAD") || e.includes(spec.rel),
        ),
      ).toBe(true);
    });
  }

  it("fails when Skills PIN authoritative override is missing or still claims 1.0 current", () => {
    const result = withSandbox((root) => {
      const pinPath = path.join(root, REL.skillsPin);
      const pin = JSON.parse(fs.readFileSync(pinPath, "utf8"));
      delete pin.platform_auth_claims_consumer_override;
      pin.platform_auth_claims_pin.provenance = "authoritative";
      fs.writeFileSync(pinPath, `${JSON.stringify(pin, null, 2)}\n`);
    });
    expect(result.ok).toBe(false);
    expect(result.errors.some((e) => /consumer_override/i.test(e))).toBe(true);
  });

  it("fails when Skills consumer override hashes disagree with Platform", () => {
    const result = withSandbox((root) => {
      const pinPath = path.join(root, REL.skillsPin);
      const pin = JSON.parse(fs.readFileSync(pinPath, "utf8"));
      pin.platform_auth_claims_consumer_override.schema_file_sha256 = "0".repeat(64);
      pin.platform_auth_claims_consumer_override.content_hash = "1".repeat(64);
      fs.writeFileSync(pinPath, `${JSON.stringify(pin, null, 2)}\n`);
    });
    expect(result.ok).toBe(false);
    expect(
      result.errors.some(
        (e) => /schema_file_sha256 mismatch/i.test(e) || /content_hash mismatch/i.test(e),
      ),
    ).toBe(true);
  });

  it("fails when Platform PIN restores unchanged-bytes / no-reaffirmation claim", () => {
    const result = withSandbox((root) => {
      const pinPath = path.join(root, REL.platformPin);
      const pin = JSON.parse(fs.readFileSync(pinPath, "utf8"));
      delete pin.brain_skills_fixture_refresh;
      pin.brain_skills_fixture_bytes = "unchanged — owner reaffirmation not required";
      fs.writeFileSync(pinPath, `${JSON.stringify(pin, null, 2)}\n`);
    });
    expect(result.ok).toBe(false);
    expect(
      result.errors.some(
        (e) => /brain_skills_fixture_bytes/i.test(e) || /brain_skills_fixture_refresh/i.test(e),
      ),
    ).toBe(true);
  });

  it("fails when Platform PIN reverts gate to PENDING / RE-OPENED", () => {
    const result = withSandbox((root) => {
      const pinPath = path.join(root, REL.platformPin);
      const pin = JSON.parse(fs.readFileSync(pinPath, "utf8"));
      pin.brain_skills_fixture_refresh.fixture_owner_status = "PENDING_OWNER_COUNTERSIGN";
      pin.brain_skills_fixture_refresh.fixture_owner_gate = "RE-OPENED";
      pin.brain_skills_fixture_refresh.owner_reaffirmation = "required — pending";
      fs.writeFileSync(pinPath, `${JSON.stringify(pin, null, 2)}\n`);
    });
    expect(result.ok).toBe(false);
    expect(
      result.errors.some(
        (e) =>
          /OWNER_COUNTERSIGNED/i.test(e) ||
          /fixture_owner_gate must be CLOSED/i.test(e) ||
          /satisfied/i.test(e),
      ),
    ).toBe(true);
  });

  it("fails when PHASE-1-CONTRACT-CONSUMPTION reverts to AuthClaims 1.0 fixtures", () => {
    const result = withSandbox((root) => {
      const docPath = path.join(root, REL.consumption);
      let text = fs.readFileSync(docPath, "utf8");
      text = text.replace(
        /Auth identity fixtures use camelCase `platform\.auth-claims\/1\.1\.0`/,
        "Auth identity fixtures use camelCase `platform.auth-claims/1.0.0`",
      );
      fs.writeFileSync(docPath, text);
    });
    expect(result.ok).toBe(false);
    expect(
      result.errors.some((e) => /AuthClaims 1\.0\.0/i.test(e) || /AuthClaims 1\.1\.0/i.test(e)),
    ).toBe(true);
  });

  it("fails when FIXTURE-OWNER-SIGNOFF reverts to PENDING", () => {
    const result = withSandbox((root) => {
      const docPath = path.join(root, REL.signoff);
      let text = fs.readFileSync(docPath, "utf8");
      text = text.replaceAll("OWNER_COUNTERSIGNED", "PENDING_OWNER_COUNTERSIGN");
      text = text.replace(/fixture-owner gate CLOSED/gi, "fixture-owner gate RE-OPENED");
      text = text.replace(/\*\*CLOSED\*\*/g, "**RE-OPENED**");
      fs.writeFileSync(docPath, text);
    });
    expect(result.ok).toBe(false);
    expect(
      result.errors.some((e) =>
        /OWNER_COUNTERSIGNED|gate CLOSED|stale PENDING|PENDING_OWNER_COUNTERSIGN/i.test(e),
      ),
    ).toBe(true);
  });

  it("fails when a current status doc reclaims PENDING while signoff is CLOSED", () => {
    const result = withSandbox((root) => {
      const docPath = path.join(root, REL.phase13Handoff);
      let text = fs.readFileSync(docPath, "utf8");
      text += "\n\nCurrent AuthClaims 1.1 fixture-owner status: `PENDING_OWNER_COUNTERSIGN`.\n";
      fs.writeFileSync(docPath, text);
    });
    expect(result.ok).toBe(false);
    expect(result.errors.some((e) => /stale PENDING|PENDING_OWNER_COUNTERSIGN/i.test(e))).toBe(
      true,
    );
  });

  it("fails when countersign request loses immutable tip or uses see-tip placeholder", () => {
    const result = withSandbox((root) => {
      const docPath = path.join(root, REL.countersignRequest);
      let text = fs.readFileSync(docPath, "utf8");
      text = text.replace(
        /\*\*Immutable OpenClaw inspection tip:\*\* `[0-9a-f]{40}`/,
        "**OpenClaw tip (at request authoring):** see Phase 13 / push tip after wave 8 lands",
      );
      fs.writeFileSync(docPath, text);
    });
    expect(result.ok).toBe(false);
    expect(
      result.errors.some((e) => /see pushed tip|immutable tip|COUNTERSIGN-REQUEST-WAVE8/i.test(e)),
    ).toBe(true);
  });

  it("fails when countersign request status reverts from SATISFIED to PENDING", () => {
    const result = withSandbox((root) => {
      const docPath = path.join(root, REL.countersignRequest);
      let text = fs.readFileSync(docPath, "utf8");
      text = text.replace(/\*\*Status:\*\* \*\*SATISFIED\*\*/, "**Status:** **PENDING**");
      fs.writeFileSync(docPath, text);
    });
    expect(result.ok).toBe(false);
    expect(result.errors.some((e) => /SATISFIED|stale PENDING/i.test(e))).toBe(true);
  });

  it("fails when fixture MANIFEST aggregate disagrees", () => {
    const result = withSandbox((root) => {
      const docPath = path.join(root, REL.skillsManifest);
      let text = fs.readFileSync(docPath, "utf8");
      text = text.replaceAll(SKILLS_FIXTURE_AGGREGATE_SHA256, "a".repeat(64));
      fs.writeFileSync(docPath, text);
    });
    expect(result.ok).toBe(false);
    expect(result.errors.some((e) => /Skills MANIFEST.*aggregate/i.test(e))).toBe(true);
  });

  it("detects unlabeled PENDING lines and ignores historical lines", () => {
    const stale = findStalePendingWhileClosedClaims(
      "Current status: `PENDING_OWNER_COUNTERSIGN` for AuthClaims 1.1.\n",
    );
    expect(stale.length).toBeGreaterThan(0);
    const historical = findStalePendingWhileClosedClaims(
      "Wave 8 AuthClaims 1.1.0 refresh: fixture-owner gate RE-OPENED (superseded by closeout below).\n",
    );
    expect(historical).toEqual([]);
  });

  it("exports the authoritative AuthClaims constants", () => {
    expect(AUTH_CLAIMS_CONTRACT).toBe("platform.auth-claims/1.1.0");
    expect(PLATFORM_CONTRACTS_PACKAGE).toBe("@linktrend/platform-contracts@0.2.2");
    expect(PLATFORM_SOURCE_HEAD).toBe("6861a376aae5fa4e12c1b68a808d7b04e7bbfb5b");
    expect(AUTH_CLAIMS_SCHEMA_SHA256).toBe(
      "c2e8bc68b3feb9a3dacc497f5a5d497b466c400804fb4f9e41734c10772ddfa1",
    );
    expect(AUTH_CLAIMS_CONTENT_HASH).toBe(
      "fb518834be897c32574df5f7235704fdb0de708bd3da1b48fc448246e3eca567",
    );
    expect(BRAIN_FIXTURE_AGGREGATE_SHA256).toBe(
      "4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b",
    );
    expect(SKILLS_FIXTURE_AGGREGATE_SHA256).toBe(
      "203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a",
    );
    expect(FIXTURE_OWNER_STATUS).toBe("OWNER_COUNTERSIGNED");
    expect(FIXTURE_OWNER_GATE).toBe("CLOSED");
    expect(COUNTERSIGN_INSPECTION_TIP).toBe("005c9454f1bd3f7427936704131ffe5faa95ef0f");
    expect(BRAIN_OWNER_HANDOFF_COMMIT).toBe("cfa8e931952fb12326ae53f43e73f77b9b0b09ea");
    expect(SKILLS_OWNER_HANDOFF_COMMIT).toBe("2fb6f8d55f42c2350a6c528f32ff35023f544adc");
    expect(PLATFORM_HEAD_RECORD_SPECS).toHaveLength(6);
  });
});
