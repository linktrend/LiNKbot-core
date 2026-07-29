#!/usr/bin/env node
/**
 * Fail-closed AuthClaims 1.1.0 documentation/provenance consistency check.
 *
 * Cross-checks Platform PIN, Skills PIN, PHASE-1-CONTRACT-CONSUMPTION.md,
 * Brain/Skills fixture MANIFEST.md, and FIXTURE-OWNER-SIGNOFF.md.
 *
 * Does not mutate runtime or fixture JSON bytes.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runAsScript } from "./lib/ts-guard-utils.mjs";

export const AUTH_CLAIMS_CONTRACT = "platform.auth-claims/1.1.0";
export const AUTH_CLAIMS_SEMVER = "1.1.0";
export const PLATFORM_CONTRACTS_PACKAGE = "@linktrend/platform-contracts@0.2.2";
export const AUTH_CLAIMS_SCHEMA_SHA256 =
  "c2e8bc68b3feb9a3dacc497f5a5d497b466c400804fb4f9e41734c10772ddfa1";
export const AUTH_CLAIMS_CONTENT_HASH =
  "fb518834be897c32574df5f7235704fdb0de708bd3da1b48fc448246e3eca567";
export const BRAIN_FIXTURE_AGGREGATE_SHA256 =
  "4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b";
export const SKILLS_FIXTURE_AGGREGATE_SHA256 =
  "203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a";
export const FIXTURE_OWNER_STATUS = "PENDING_OWNER_COUNTERSIGN";

const HISTORICAL_AUTH_CLAIMS_1_0 = "platform.auth-claims/1.0.0";
const HISTORICAL_SCHEMA_SHA256 =
  "b0397cdf34e76ab0986c6d223ecb6c3c66d619ea59557f78cd45c0c015ff50fb";
const HISTORICAL_CONTENT_HASH =
  "6bf49618d846662976886f57d5d468f73a08ab1a6574968f68833d82429db251";

const DEFAULT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const REL = Object.freeze({
  platformPin: "docs/execution/openclawdevelopmentplan01/contracts/platform/PIN.json",
  skillsPin: "docs/execution/openclawdevelopmentplan01/contracts/skills/PIN.json",
  consumption: "docs/execution/openclawdevelopmentplan01/PHASE-1-CONTRACT-CONSUMPTION.md",
  signoff: "docs/execution/openclawdevelopmentplan01/FIXTURE-OWNER-SIGNOFF.md",
  brainManifest: "extensions/linkbrain/fixtures/MANIFEST.md",
  skillsManifest: "extensions/linkskills/fixtures/MANIFEST.md",
  schemaCopy:
    "docs/execution/openclawdevelopmentplan01/contracts/platform/auth-claims-1.1.0/platform-auth-claims.v1.1.0.json",
});

/**
 * @param {string} value
 * @returns {string}
 */
export function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

/**
 * @param {string} filePath
 * @returns {string}
 */
export function sha256File(filePath) {
  return sha256Hex(fs.readFileSync(filePath));
}

/**
 * @param {string} repoRoot
 * @param {string} relativePath
 * @returns {string}
 */
function readText(repoRoot, relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

/**
 * @param {string} repoRoot
 * @param {string} relativePath
 * @returns {unknown}
 */
function readJson(repoRoot, relativePath) {
  return JSON.parse(readText(repoRoot, relativePath));
}

/**
 * @param {string} text
 * @param {RegExp} pattern
 * @returns {boolean}
 */
function has(text, pattern) {
  return pattern.test(text);
}

/**
 * @param {string[]} errors
 * @param {boolean} ok
 * @param {string} message
 */
function requireOk(errors, ok, message) {
  if (!ok) {
    errors.push(message);
  }
}

/**
 * @param {unknown} value
 * @returns {value is Record<string, unknown>}
 */
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Validate AuthClaims documentation/provenance consistency.
 *
 * @param {{ repoRoot?: string }} [options]
 * @returns {{ ok: boolean, errors: string[], checks: string[] }}
 */
export function validateAuthClaimsProvenance(options = {}) {
  const repoRoot = options.repoRoot ?? DEFAULT_ROOT;
  /** @type {string[]} */
  const errors = [];
  /** @type {string[]} */
  const checks = [];

  for (const relativePath of Object.values(REL)) {
    requireOk(
      errors,
      fs.existsSync(path.join(repoRoot, relativePath)),
      `missing required artifact: ${relativePath}`,
    );
  }
  if (errors.length > 0) {
    return { ok: false, errors, checks };
  }

  const platformPin = readJson(repoRoot, REL.platformPin);
  const skillsPin = readJson(repoRoot, REL.skillsPin);
  const consumption = readText(repoRoot, REL.consumption);
  const signoff = readText(repoRoot, REL.signoff);
  const brainManifest = readText(repoRoot, REL.brainManifest);
  const skillsManifest = readText(repoRoot, REL.skillsManifest);
  const schemaSha = sha256File(path.join(repoRoot, REL.schemaCopy));

  requireOk(
    errors,
    schemaSha === AUTH_CLAIMS_SCHEMA_SHA256,
    `sanitized AuthClaims 1.1.0 schema SHA mismatch: got ${schemaSha}`,
  );
  checks.push("sanitized schema SHA matches authoritative pin");

  // --- Platform PIN ---
  requireOk(errors, isRecord(platformPin), "platform PIN must be an object");
  if (isRecord(platformPin)) {
    requireOk(
      errors,
      platformPin.PLATFORM_CONTRACTS_SEMVER === "0.2.2",
      `platform PIN PLATFORM_CONTRACTS_SEMVER must be 0.2.2, got ${String(platformPin.PLATFORM_CONTRACTS_SEMVER)}`,
    );
    const pkg = platformPin.package;
    requireOk(
      errors,
      isRecord(pkg) &&
        pkg.name === "@linktrend/platform-contracts" &&
        pkg.version === "0.2.2",
      `platform PIN package must be ${PLATFORM_CONTRACTS_PACKAGE}`,
    );
    const claims = platformPin.platform_auth_claims;
    requireOk(errors, isRecord(claims), "platform PIN missing platform_auth_claims");
    if (isRecord(claims)) {
      requireOk(
        errors,
        claims.contract_version_string === AUTH_CLAIMS_CONTRACT,
        `platform PIN AuthClaims must be ${AUTH_CLAIMS_CONTRACT}`,
      );
      requireOk(
        errors,
        claims.semantic_version === AUTH_CLAIMS_SEMVER,
        `platform PIN semantic_version must be ${AUTH_CLAIMS_SEMVER}`,
      );
      requireOk(
        errors,
        claims.schema_file_sha256 === AUTH_CLAIMS_SCHEMA_SHA256,
        "platform PIN schema_file_sha256 mismatch",
      );
      requireOk(
        errors,
        claims.content_hash === AUTH_CLAIMS_CONTENT_HASH,
        "platform PIN content_hash mismatch",
      );
    }

    requireOk(
      errors,
      !Object.hasOwn(platformPin, "brain_skills_fixture_bytes"),
      "platform PIN must not claim brain_skills_fixture_bytes unchanged / reaffirmation not required",
    );
    const refresh = platformPin.brain_skills_fixture_refresh;
    requireOk(
      errors,
      isRecord(refresh),
      "platform PIN missing brain_skills_fixture_refresh (wave-8 record)",
    );
    if (isRecord(refresh)) {
      requireOk(
        errors,
        refresh.brain_fixture_aggregate_sha256 === BRAIN_FIXTURE_AGGREGATE_SHA256,
        "platform PIN brain fixture aggregate mismatch",
      );
      requireOk(
        errors,
        refresh.skills_fixture_aggregate_sha256 === SKILLS_FIXTURE_AGGREGATE_SHA256,
        "platform PIN skills fixture aggregate mismatch",
      );
      requireOk(
        errors,
        refresh.fixture_owner_status === FIXTURE_OWNER_STATUS,
        "platform PIN fixture_owner_status must be PENDING_OWNER_COUNTERSIGN",
      );
      requireOk(
        errors,
        refresh.fixture_owner_gate === "RE-OPENED",
        "platform PIN fixture_owner_gate must be RE-OPENED",
      );
      const ownerText = String(refresh.owner_reaffirmation ?? "");
      requireOk(
        errors,
        /required|pending/i.test(ownerText) && !/not required|unnecessary/i.test(ownerText),
        "platform PIN must record that fresh owner countersigns are required/pending",
      );
    }
    checks.push("platform PIN AuthClaims 1.1.0 + wave-8 pending countersign record");
  }

  // --- Skills PIN ---
  requireOk(errors, isRecord(skillsPin), "skills PIN must be an object");
  if (isRecord(skillsPin)) {
    const historical = skillsPin.platform_auth_claims_pin;
    requireOk(
      errors,
      isRecord(historical),
      "skills PIN missing historical platform_auth_claims_pin",
    );
    if (isRecord(historical)) {
      requireOk(
        errors,
        historical.provenance === "historical",
        "skills PIN platform_auth_claims_pin must be labeled provenance=historical",
      );
      requireOk(
        errors,
        historical.contract_version_string === HISTORICAL_AUTH_CLAIMS_1_0,
        "skills historical AuthClaims pin must remain 1.0.0",
      );
      requireOk(
        errors,
        historical.schema_file_sha256 === HISTORICAL_SCHEMA_SHA256,
        "skills historical schema_file_sha256 mismatch",
      );
      requireOk(
        errors,
        historical.content_hash === HISTORICAL_CONTENT_HASH,
        "skills historical content_hash mismatch",
      );
    }

    const override = skillsPin.platform_auth_claims_consumer_override;
    requireOk(
      errors,
      isRecord(override),
      "skills PIN missing authoritative platform_auth_claims_consumer_override",
    );
    if (isRecord(override)) {
      requireOk(
        errors,
        override.provenance === "authoritative",
        "skills consumer override must be provenance=authoritative",
      );
      requireOk(
        errors,
        override.approved === true,
        "skills consumer override must be approved=true",
      );
      requireOk(
        errors,
        override.contract_version_string === AUTH_CLAIMS_CONTRACT,
        `skills consumer override must be ${AUTH_CLAIMS_CONTRACT}`,
      );
      requireOk(
        errors,
        override.package === PLATFORM_CONTRACTS_PACKAGE,
        `skills consumer override package must be ${PLATFORM_CONTRACTS_PACKAGE}`,
      );
      requireOk(
        errors,
        override.schema_file_sha256 === AUTH_CLAIMS_SCHEMA_SHA256,
        "skills consumer override schema_file_sha256 mismatch",
      );
      requireOk(
        errors,
        override.content_hash === AUTH_CLAIMS_CONTENT_HASH,
        "skills consumer override content_hash mismatch",
      );
      requireOk(
        errors,
        override.openclaw_skills_fixture_aggregate_sha256 ===
          SKILLS_FIXTURE_AGGREGATE_SHA256,
        "skills consumer override fixture aggregate mismatch",
      );
      requireOk(
        errors,
        override.fixture_owner_status === FIXTURE_OWNER_STATUS,
        "skills consumer override fixture_owner_status must be PENDING_OWNER_COUNTERSIGN",
      );
    }
    checks.push("skills PIN historical 1.0 + authoritative 1.1 consumer override");
  }

  // --- PHASE-1-CONTRACT-CONSUMPTION.md ---
  requireOk(
    errors,
    consumption.includes(AUTH_CLAIMS_CONTRACT),
    "PHASE-1-CONTRACT-CONSUMPTION.md must state platform.auth-claims/1.1.0",
  );
  requireOk(
    errors,
    consumption.includes(AUTH_CLAIMS_SCHEMA_SHA256),
    "PHASE-1-CONTRACT-CONSUMPTION.md must include AuthClaims schema SHA",
  );
  requireOk(
    errors,
    consumption.includes(AUTH_CLAIMS_CONTENT_HASH),
    "PHASE-1-CONTRACT-CONSUMPTION.md must include AuthClaims contentHash",
  );
  requireOk(
    errors,
    consumption.includes(BRAIN_FIXTURE_AGGREGATE_SHA256),
    "PHASE-1-CONTRACT-CONSUMPTION.md must include Brain fixture aggregate",
  );
  requireOk(
    errors,
    consumption.includes(SKILLS_FIXTURE_AGGREGATE_SHA256),
    "PHASE-1-CONTRACT-CONSUMPTION.md must include Skills fixture aggregate",
  );
  requireOk(
    errors,
    has(consumption, /PENDING_OWNER_COUNTERSIGN/),
    "PHASE-1-CONTRACT-CONSUMPTION.md must state PENDING_OWNER_COUNTERSIGN",
  );
  requireOk(
    errors,
    has(consumption, /RE-OPENED/),
    "PHASE-1-CONTRACT-CONSUMPTION.md must state fixture-owner gate RE-OPENED",
  );
  requireOk(
    errors,
    !has(
      consumption,
      /Brain\/Skills fixture bytes unchanged|owner reaffirmation not required/i,
    ),
    "PHASE-1-CONTRACT-CONSUMPTION.md must not claim fixture bytes unchanged / reaffirmation not required",
  );
  requireOk(
    errors,
    !has(
      consumption,
      /Status:\s*Brain \+ Skills \*\*`OWNER_COUNTERSIGNED`\*\*.*Phase 1 fixture-owner gate CLOSED/s,
    ),
    "PHASE-1-CONTRACT-CONSUMPTION.md must not call current fixture-owner gate CLOSED",
  );
  requireOk(
    errors,
    !has(
      consumption,
      /Auth identity fixtures use camelCase `platform\.auth-claims\/1\.0\.0`/,
    ),
    "PHASE-1-CONTRACT-CONSUMPTION.md must not claim current identity fixtures use AuthClaims 1.0.0",
  );
  requireOk(
    errors,
    has(
      consumption,
      /Auth identity fixtures use camelCase `platform\.auth-claims\/1\.1\.0`/,
    ),
    "PHASE-1-CONTRACT-CONSUMPTION.md rule 6 must name AuthClaims 1.1.0",
  );
  requireOk(
    errors,
    has(consumption, /historical/i) &&
      has(consumption, /429a7818e2f79be27329c1848531ffe9ba0f7367/),
    "PHASE-1-CONTRACT-CONSUMPTION.md must distinguish historical 1.0 countersign tip",
  );
  checks.push("PHASE-1-CONTRACT-CONSUMPTION.md AuthClaims 1.1 pending provenance");

  // --- FIXTURE-OWNER-SIGNOFF.md ---
  requireOk(
    errors,
    signoff.includes(BRAIN_FIXTURE_AGGREGATE_SHA256),
    "FIXTURE-OWNER-SIGNOFF.md missing Brain aggregate",
  );
  requireOk(
    errors,
    signoff.includes(SKILLS_FIXTURE_AGGREGATE_SHA256),
    "FIXTURE-OWNER-SIGNOFF.md missing Skills aggregate",
  );
  requireOk(
    errors,
    has(signoff, /PENDING_OWNER_COUNTERSIGN/),
    "FIXTURE-OWNER-SIGNOFF.md must state PENDING_OWNER_COUNTERSIGN",
  );
  requireOk(
    errors,
    has(signoff, /RE-OPENED/),
    "FIXTURE-OWNER-SIGNOFF.md must state gate RE-OPENED",
  );
  requireOk(
    errors,
    has(signoff, /does \*\*not\*\* close the fixture-owner gate|Wave 8 does \*\*not\*\* close/i),
    "FIXTURE-OWNER-SIGNOFF.md must not close the current fixture-owner gate",
  );
  // Stale: claiming current gate CLOSED without pending status.
  requireOk(
    errors,
    !has(signoff, /current fixture-owner gate CLOSED|gate is CLOSED for AuthClaims 1\.1/i),
    "FIXTURE-OWNER-SIGNOFF.md must not claim current AuthClaims 1.1 gate CLOSED",
  );
  checks.push("FIXTURE-OWNER-SIGNOFF.md pending 1.1 countersign status");

  // --- Fixture manifests (docs; not JSON bytes) ---
  for (const [label, text, aggregate] of [
    ["Brain", brainManifest, BRAIN_FIXTURE_AGGREGATE_SHA256],
    ["Skills", skillsManifest, SKILLS_FIXTURE_AGGREGATE_SHA256],
  ]) {
    requireOk(
      errors,
      text.includes(AUTH_CLAIMS_CONTRACT) || text.includes("platform.auth-claims/1.1.0"),
      `${label} MANIFEST must declare AuthClaims 1.1.0`,
    );
    requireOk(
      errors,
      text.includes(aggregate),
      `${label} MANIFEST must include current fixture aggregate`,
    );
    requireOk(
      errors,
      has(text, /\*\*Status:\*\*\s*`PENDING_OWNER_COUNTERSIGN`/) ||
        has(text, /Status:\s*`PENDING_OWNER_COUNTERSIGN`/),
      `${label} MANIFEST top status must be PENDING_OWNER_COUNTERSIGN`,
    );
  }
  requireOk(
    errors,
    skillsManifest.includes(AUTH_CLAIMS_SCHEMA_SHA256),
    "Skills MANIFEST must include AuthClaims schema SHA",
  );
  requireOk(
    errors,
    skillsManifest.includes(AUTH_CLAIMS_CONTENT_HASH),
    "Skills MANIFEST must include AuthClaims contentHash",
  );
  checks.push("Brain/Skills fixture MANIFEST AuthClaims 1.1 + aggregates");

  // Cross-artifact agreement on package string
  requireOk(
    errors,
    consumption.includes("@linktrend/platform-contracts@0.2.2") ||
      consumption.includes("`0.2.2`"),
    "PHASE-1-CONTRACT-CONSUMPTION.md must reference platform-contracts 0.2.2",
  );

  return { ok: errors.length === 0, errors, checks };
}

/**
 * @param {string[]} argv
 * @returns {Promise<void>}
 */
async function main(argv = process.argv.slice(2)) {
  const repoRoot =
    argv.find((arg) => arg.startsWith("--root="))?.slice("--root=".length) ?? DEFAULT_ROOT;
  const result = validateAuthClaimsProvenance({ repoRoot });
  if (!result.ok) {
    console.error("AuthClaims provenance check FAILED:");
    for (const error of result.errors) {
      console.error(`  - ${error}`);
    }
    process.exitCode = 1;
    return;
  }
  console.log("AuthClaims provenance check OK");
  for (const check of result.checks) {
    console.log(`  ✓ ${check}`);
  }
}

runAsScript(import.meta.url, main);
