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
  FIXTURE_OWNER_STATUS,
  PLATFORM_CONTRACTS_PACKAGE,
  SKILLS_FIXTURE_AGGREGATE_SHA256,
  validateAuthClaimsProvenance,
} from "../../scripts/check-openclawdevelopmentplan01-authclaims-provenance.mjs";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const REL = {
  platformPin: "docs/execution/openclawdevelopmentplan01/contracts/platform/PIN.json",
  skillsPin: "docs/execution/openclawdevelopmentplan01/contracts/skills/PIN.json",
  consumption: "docs/execution/openclawdevelopmentplan01/PHASE-1-CONTRACT-CONSUMPTION.md",
  signoff: "docs/execution/openclawdevelopmentplan01/FIXTURE-OWNER-SIGNOFF.md",
  brainManifest: "extensions/linkbrain/fixtures/MANIFEST.md",
  skillsManifest: "extensions/linkskills/fixtures/MANIFEST.md",
  schemaCopy:
    "docs/execution/openclawdevelopmentplan01/contracts/platform/auth-claims-1.1.0/platform-auth-claims.v1.1.0.json",
};

function copyTree(srcRoot: string, destRoot: string, relativePaths: string[]) {
  for (const relativePath of relativePaths) {
    const src = path.join(srcRoot, relativePath);
    const dest = path.join(destRoot, relativePath);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function withSandbox(mutate: (root: string) => void): ReturnType<typeof validateAuthClaimsProvenance> {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "authclaims-provenance-"));
  try {
    copyTree(REPO_ROOT, root, Object.values(REL));
    mutate(root);
    return validateAuthClaimsProvenance({ repoRoot: root });
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

describe("check-openclawdevelopmentplan01-authclaims-provenance", () => {
  it("passes against the live repository provenance set", () => {
    const result = validateAuthClaimsProvenance({ repoRoot: REPO_ROOT });
    expect(result.errors).toEqual([]);
    expect(result.ok).toBe(true);
    expect(result.checks.length).toBeGreaterThanOrEqual(5);
  });

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
        (e) =>
          /brain_skills_fixture_bytes/i.test(e) ||
          /brain_skills_fixture_refresh/i.test(e),
      ),
    ).toBe(true);
  });

  it("fails when PHASE-1-CONTRACT-CONSUMPTION claims current gate CLOSED or AuthClaims 1.0 fixtures", () => {
    const result = withSandbox((root) => {
      const docPath = path.join(root, REL.consumption);
      let text = fs.readFileSync(docPath, "utf8");
      text = text.replaceAll(FIXTURE_OWNER_STATUS, "OWNER_COUNTERSIGNED");
      text = text.replace(
        /Do \*\*not\*\* call the current fixture-owner gate CLOSED\./,
        "Status: Brain + Skills **`OWNER_COUNTERSIGNED`** at OpenClaw tip `429a7818e2f79be27329c1848531ffe9ba0f7367`. **Phase 1 fixture-owner gate CLOSED.**",
      );
      text = text.replace(
        /Auth identity fixtures use camelCase `platform\.auth-claims\/1\.1\.0`/,
        "Auth identity fixtures use camelCase `platform.auth-claims/1.0.0`",
      );
      fs.writeFileSync(docPath, text);
    });
    expect(result.ok).toBe(false);
    expect(
      result.errors.some(
        (e) =>
          /gate CLOSED/i.test(e) ||
          /AuthClaims 1\.0\.0/i.test(e) ||
          /PENDING_OWNER_COUNTERSIGN/i.test(e),
      ),
    ).toBe(true);
  });

  it("fails when FIXTURE-OWNER-SIGNOFF loses pending status", () => {
    const result = withSandbox((root) => {
      const docPath = path.join(root, REL.signoff);
      let text = fs.readFileSync(docPath, "utf8");
      text = text.replaceAll("PENDING_OWNER_COUNTERSIGN", "OWNER_COUNTERSIGNED");
      text = text.replace(/RE-OPENED/g, "CLOSED");
      fs.writeFileSync(docPath, text);
    });
    expect(result.ok).toBe(false);
    expect(result.errors.some((e) => /PENDING_OWNER_COUNTERSIGN|RE-OPENED/i.test(e))).toBe(
      true,
    );
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

  it("exports the authoritative AuthClaims constants", () => {
    expect(AUTH_CLAIMS_CONTRACT).toBe("platform.auth-claims/1.1.0");
    expect(PLATFORM_CONTRACTS_PACKAGE).toBe("@linktrend/platform-contracts@0.2.2");
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
    expect(FIXTURE_OWNER_STATUS).toBe("PENDING_OWNER_COUNTERSIGN");
  });
});
