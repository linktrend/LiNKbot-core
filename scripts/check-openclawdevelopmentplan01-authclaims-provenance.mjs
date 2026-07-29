#!/usr/bin/env node
/**
 * Fail-closed AuthClaims 1.1.0 documentation/provenance consistency check.
 *
 * Cross-checks Platform PIN, Skills PIN, PHASE-1-CONTRACT-CONSUMPTION.md,
 * Brain/Skills fixture MANIFEST.md, FIXTURE-OWNER-SIGNOFF.md, and related
 * current provenance/status docs.
 *
 * AuthClaims 1.1 fixture-owner gate is CLOSED / OWNER_COUNTERSIGNED
 * (domain-owner fixture approval only — not Codex certification).
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
export const PLATFORM_SOURCE_HEAD = "6861a376aae5fa4e12c1b68a808d7b04e7bbfb5b";
export const AUTH_CLAIMS_SCHEMA_SHA256 =
  "c2e8bc68b3feb9a3dacc497f5a5d497b466c400804fb4f9e41734c10772ddfa1";
export const AUTH_CLAIMS_CONTENT_HASH =
  "fb518834be897c32574df5f7235704fdb0de708bd3da1b48fc448246e3eca567";
export const BRAIN_FIXTURE_AGGREGATE_SHA256 =
  "4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b";
export const SKILLS_FIXTURE_AGGREGATE_SHA256 =
  "203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a";
export const FIXTURE_OWNER_STATUS = "OWNER_COUNTERSIGNED";
export const FIXTURE_OWNER_GATE = "CLOSED";
export const COUNTERSIGN_INSPECTION_TIP = "005c9454f1bd3f7427936704131ffe5faa95ef0f";
export const BRAIN_OWNER_HANDOFF_COMMIT = "cfa8e931952fb12326ae53f43e73f77b9b0b09ea";
export const SKILLS_OWNER_HANDOFF_COMMIT = "2fb6f8d55f42c2350a6c528f32ff35023f544adc";

const HISTORICAL_AUTH_CLAIMS_1_0 = "platform.auth-claims/1.0.0";
const HISTORICAL_SCHEMA_SHA256 = "b0397cdf34e76ab0986c6d223ecb6c3c66d619ea59557f78cd45c0c015ff50fb";
const HISTORICAL_CONTENT_HASH = "6bf49618d846662976886f57d5d468f73a08ab1a6574968f68833d82429db251";

const DEFAULT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export const REL = Object.freeze({
  platformPin: "docs/execution/openclawdevelopmentplan01/contracts/platform/PIN.json",
  skillsPin: "docs/execution/openclawdevelopmentplan01/contracts/skills/PIN.json",
  consumption: "docs/execution/openclawdevelopmentplan01/PHASE-1-CONTRACT-CONSUMPTION.md",
  signoff: "docs/execution/openclawdevelopmentplan01/FIXTURE-OWNER-SIGNOFF.md",
  contractsReadme: "docs/execution/openclawdevelopmentplan01/contracts/README.md",
  authClaimsReadme:
    "docs/execution/openclawdevelopmentplan01/contracts/platform/auth-claims-1.1.0/README.md",
  phase13Handoff: "docs/execution/openclawdevelopmentplan01/PHASE-13-PROVISIONAL-GROK-HANDOFF.md",
  phase1Status: "docs/execution/openclawdevelopmentplan01/PHASE-1-STATUS.md",
  countersignRequest:
    "docs/execution/openclawdevelopmentplan01/COUNTERSIGN-REQUEST-WAVE8-AUTHCLAIMS-1.1.md",
  brainManifest: "extensions/linkbrain/fixtures/MANIFEST.md",
  skillsManifest: "extensions/linkskills/fixtures/MANIFEST.md",
  schemaCopy:
    "docs/execution/openclawdevelopmentplan01/contracts/platform/auth-claims-1.1.0/platform-auth-claims.v1.1.0.json",
});

/**
 * Authoritative Platform source HEAD records that must agree exactly.
 * @typedef {{ id: string, rel: string, kind: "json_path" | "markdown_full_sha", jsonPath?: string[] }} PlatformHeadRecordSpec
 */
/** @type {readonly PlatformHeadRecordSpec[]} */
export const PLATFORM_HEAD_RECORD_SPECS = Object.freeze([
  {
    id: "platform_pin_source_head",
    rel: REL.platformPin,
    kind: "json_path",
    jsonPath: ["source_head"],
  },
  {
    id: "skills_override_platform_source_head",
    rel: REL.skillsPin,
    kind: "json_path",
    jsonPath: ["platform_auth_claims_consumer_override", "platform_source_head"],
  },
  {
    id: "consumption_platform_source_head",
    rel: REL.consumption,
    kind: "markdown_full_sha",
  },
  {
    id: "signoff_platform_source_head",
    rel: REL.signoff,
    kind: "markdown_full_sha",
  },
  {
    id: "contracts_readme_platform_source_head",
    rel: REL.contractsReadme,
    kind: "markdown_full_sha",
  },
  {
    id: "auth_claims_readme_platform_source_head",
    rel: REL.authClaimsReadme,
    kind: "markdown_full_sha",
  },
]);

/** Current handoff/status/request surfaces checked for stale PENDING claims while closed. */
export const CURRENT_STATUS_DOC_RELS = Object.freeze([
  REL.phase13Handoff,
  REL.phase1Status,
  REL.countersignRequest,
  REL.consumption,
  REL.signoff,
]);

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
 * @param {unknown} value
 * @param {string[]} jsonPath
 * @returns {unknown}
 */
export function readJsonPath(value, jsonPath) {
  let cur = value;
  for (const key of jsonPath) {
    if (!isRecord(cur)) {
      return undefined;
    }
    cur = cur[key];
  }
  return cur;
}

/**
 * Line is historical / instruction-only for PENDING / RE-OPENED / CLOSED scans.
 * @param {string} line
 * @returns {boolean}
 */
export function isHistoricalOrInstructionLine(line) {
  return (
    /historical|superseded|prior |authclaims?\s+\*\*1\.0|1\.0\.0|275c1fb7|8586d89a|429a7818/i.test(
      line,
    ) ||
    /does \*\*not\*\*|must not|do \*\*not\*\*|not call|re-opened \(superseded|RE-OPENED \(superseded/i.test(
      line,
    ) ||
    /was RE-OPENED|gate was RE-OPENED|Wave 8 AuthClaims|wave 8 AuthClaims|Wave 20 correction|WAVE20/i.test(
      line,
    ) ||
    /Record `OWNER_COUNTERSIGNED` \(or denial\)/i.test(line) ||
    /wave 2\s*\/\s*2b changelog/i.test(line) ||
    /Correction wave 2\s*\/\s*2b changelog/i.test(line) ||
    /after AuthClaims 1\.1\.0 fixture refresh \(wave 8\)/i.test(line)
  );
}

/**
 * Detect unlabeled current PENDING / RE-OPENED claims while gate is CLOSED.
 * @param {string} text
 * @returns {string[]}
 */
export function findStalePendingWhileClosedClaims(text) {
  /** @type {string[]} */
  const hits = [];
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i] ?? "";
    if (!line.trim()) {
      continue;
    }
    if (isHistoricalOrInstructionLine(line)) {
      continue;
    }
    if (
      /PENDING_OWNER_COUNTERSIGN/i.test(line) ||
      /\*\*Status:\*\* \*\*PENDING\*\*/i.test(line) ||
      (/RE-OPENED/i.test(line) && !/CLOSED|OWNER_COUNTERSIGNED|SATISFIED/i.test(line))
    ) {
      hits.push(
        `L${i + 1}: unlabeled current PENDING/RE-OPENED claim: ${line.trim().slice(0, 160)}`,
      );
    }
  }
  return hits;
}

/**
 * @deprecated Use findStalePendingWhileClosedClaims after AuthClaims 1.1 closeout.
 * Retained for test compatibility naming during transition.
 * @param {string} text
 * @returns {string[]}
 */
export function findStaleClosedWhilePendingClaims(text) {
  return findStalePendingWhileClosedClaims(text);
}

/**
 * Read recorded Platform HEAD from one authoritative record.
 * @param {string} repoRoot
 * @param {PlatformHeadRecordSpec} spec
 * @returns {{ ok: boolean, value?: string, error?: string }}
 */
export function readPlatformHeadRecord(repoRoot, spec) {
  const abs = path.join(repoRoot, spec.rel);
  if (!fs.existsSync(abs)) {
    return { ok: false, error: `missing ${spec.rel}` };
  }
  if (spec.kind === "json_path") {
    const json = JSON.parse(fs.readFileSync(abs, "utf8"));
    const value = readJsonPath(json, spec.jsonPath ?? []);
    if (typeof value !== "string") {
      return {
        ok: false,
        error: `${spec.id}: missing json path ${(spec.jsonPath ?? []).join(".")}`,
      };
    }
    return { ok: true, value };
  }
  const text = fs.readFileSync(abs, "utf8");
  if (!text.includes(PLATFORM_SOURCE_HEAD)) {
    return {
      ok: false,
      error: `${spec.id}: ${spec.rel} missing exact Platform HEAD ${PLATFORM_SOURCE_HEAD}`,
    };
  }
  return { ok: true, value: PLATFORM_SOURCE_HEAD };
}

/**
 * Validate exact Platform source HEAD agreement across authoritative records.
 * @param {{ repoRoot?: string }} [options]
 * @returns {{ ok: boolean, errors: string[], observed: Record<string, string> }}
 */
export function validatePlatformSourceHeadAgreement(options = {}) {
  const repoRoot = options.repoRoot ?? DEFAULT_ROOT;
  /** @type {string[]} */
  const errors = [];
  /** @type {Record<string, string>} */
  const observed = {};
  for (const spec of PLATFORM_HEAD_RECORD_SPECS) {
    const result = readPlatformHeadRecord(repoRoot, spec);
    if (!result.ok || typeof result.value !== "string") {
      errors.push(result.error ?? `${spec.id}: unreadable`);
      continue;
    }
    observed[spec.id] = result.value;
    if (result.value !== PLATFORM_SOURCE_HEAD) {
      errors.push(
        `${spec.id}: Platform HEAD mismatch — expected ${PLATFORM_SOURCE_HEAD}, got ${result.value}`,
      );
    }
  }
  return { ok: errors.length === 0, errors, observed };
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

  const requiredRels = [...Object.values(REL)];
  for (const relativePath of requiredRels) {
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
  const countersignRequest = readText(repoRoot, REL.countersignRequest);
  const schemaSha = sha256File(path.join(repoRoot, REL.schemaCopy));

  requireOk(
    errors,
    schemaSha === AUTH_CLAIMS_SCHEMA_SHA256,
    `sanitized AuthClaims 1.1.0 schema SHA mismatch: got ${schemaSha}`,
  );
  checks.push("sanitized schema SHA matches authoritative pin");

  // --- Exact Platform source HEAD agreement ---
  const headAgreement = validatePlatformSourceHeadAgreement({ repoRoot });
  for (const error of headAgreement.errors) {
    errors.push(error);
  }
  requireOk(
    errors,
    headAgreement.ok,
    "Platform source HEAD must agree exactly across authoritative records",
  );
  checks.push(`Platform source HEAD ${PLATFORM_SOURCE_HEAD} agreed across authoritative records`);

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
      isRecord(pkg) && pkg.name === "@linktrend/platform-contracts" && pkg.version === "0.2.2",
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
        "platform PIN fixture_owner_status must be OWNER_COUNTERSIGNED",
      );
      requireOk(
        errors,
        refresh.fixture_owner_gate === FIXTURE_OWNER_GATE,
        "platform PIN fixture_owner_gate must be CLOSED",
      );
      requireOk(
        errors,
        refresh.inspected_openclaw_tip === COUNTERSIGN_INSPECTION_TIP,
        "platform PIN inspected_openclaw_tip mismatch",
      );
      requireOk(
        errors,
        refresh.brain_owner_handoff_commit === BRAIN_OWNER_HANDOFF_COMMIT,
        "platform PIN brain_owner_handoff_commit mismatch",
      );
      requireOk(
        errors,
        refresh.skills_owner_handoff_commit === SKILLS_OWNER_HANDOFF_COMMIT,
        "platform PIN skills_owner_handoff_commit mismatch",
      );
      const ownerText = String(refresh.owner_reaffirmation ?? "");
      requireOk(
        errors,
        /satisfied|OWNER_COUNTERSIGNED/i.test(ownerText) && !/required|pending/i.test(ownerText),
        "platform PIN must record that owner countersigns are satisfied (not pending/required)",
      );
    }
    checks.push("platform PIN AuthClaims 1.1.0 + OWNER_COUNTERSIGNED closeout record");
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
        override.openclaw_skills_fixture_aggregate_sha256 === SKILLS_FIXTURE_AGGREGATE_SHA256,
        "skills consumer override fixture aggregate mismatch",
      );
      requireOk(
        errors,
        override.fixture_owner_status === FIXTURE_OWNER_STATUS,
        "skills consumer override fixture_owner_status must be OWNER_COUNTERSIGNED",
      );
      requireOk(
        errors,
        override.inspected_openclaw_tip === COUNTERSIGN_INSPECTION_TIP,
        "skills consumer override inspected_openclaw_tip mismatch",
      );
      requireOk(
        errors,
        override.skills_owner_handoff_commit === SKILLS_OWNER_HANDOFF_COMMIT,
        "skills consumer override skills_owner_handoff_commit mismatch",
      );
    }
    checks.push("skills PIN historical 1.0 + authoritative 1.1 OWNER_COUNTERSIGNED override");
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
    has(consumption, /OWNER_COUNTERSIGNED/),
    "PHASE-1-CONTRACT-CONSUMPTION.md must state OWNER_COUNTERSIGNED",
  );
  requireOk(
    errors,
    has(consumption, /fixture-owner gate is \*\*CLOSED\*\*|fixture-owner gate \*\*CLOSED\*\*/i),
    "PHASE-1-CONTRACT-CONSUMPTION.md must state fixture-owner gate CLOSED",
  );
  requireOk(
    errors,
    !has(consumption, /Brain\/Skills fixture bytes unchanged|owner reaffirmation not required/i),
    "PHASE-1-CONTRACT-CONSUMPTION.md must not claim fixture bytes unchanged / reaffirmation not required",
  );
  requireOk(
    errors,
    !has(consumption, /Auth identity fixtures use camelCase `platform\.auth-claims\/1\.0\.0`/),
    "PHASE-1-CONTRACT-CONSUMPTION.md must not claim current identity fixtures use AuthClaims 1.0.0",
  );
  requireOk(
    errors,
    has(consumption, /Auth identity fixtures use camelCase `platform\.auth-claims\/1\.1\.0`/),
    "PHASE-1-CONTRACT-CONSUMPTION.md rule 6 must name AuthClaims 1.1.0",
  );
  requireOk(
    errors,
    has(consumption, /historical/i) && has(consumption, /429a7818e2f79be27329c1848531ffe9ba0f7367/),
    "PHASE-1-CONTRACT-CONSUMPTION.md must distinguish historical 1.0 countersign tip",
  );
  checks.push("PHASE-1-CONTRACT-CONSUMPTION.md AuthClaims 1.1 CLOSED provenance");

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
    signoff.includes(COUNTERSIGN_INSPECTION_TIP),
    "FIXTURE-OWNER-SIGNOFF.md missing countersign inspection tip",
  );
  requireOk(
    errors,
    signoff.includes(BRAIN_OWNER_HANDOFF_COMMIT),
    "FIXTURE-OWNER-SIGNOFF.md missing Brain owner handoff commit",
  );
  requireOk(
    errors,
    signoff.includes(SKILLS_OWNER_HANDOFF_COMMIT),
    "FIXTURE-OWNER-SIGNOFF.md missing Skills owner handoff commit",
  );
  requireOk(
    errors,
    has(signoff, /OWNER_COUNTERSIGNED/),
    "FIXTURE-OWNER-SIGNOFF.md must state OWNER_COUNTERSIGNED",
  );
  requireOk(
    errors,
    has(signoff, /fixture-owner gate CLOSED|fixture-owner gate:\*\* \*\*CLOSED/i),
    "FIXTURE-OWNER-SIGNOFF.md must state gate CLOSED",
  );
  requireOk(
    errors,
    has(signoff, /itemId/) && has(signoff, /authority.*draft|authority:\s*"draft"/i),
    "FIXTURE-OWNER-SIGNOFF.md must record Brain residual notes (itemId/id + authority=draft)",
  );
  requireOk(
    errors,
    has(signoff, /not\*\* Codex certification|not Codex certification/i),
    "FIXTURE-OWNER-SIGNOFF.md must state domain-owner approval is not Codex certification",
  );
  requireOk(
    errors,
    has(signoff, /Platform authentication path|Platform auth-path/i),
    "FIXTURE-OWNER-SIGNOFF.md must state Phase 1 remains blocked on Platform auth-path",
  );
  requireOk(
    errors,
    has(signoff, /Phases 7–12|Phases 7-12/i),
    "FIXTURE-OWNER-SIGNOFF.md must state Phases 7–12 remain unstarted",
  );
  checks.push("FIXTURE-OWNER-SIGNOFF.md CLOSED 1.1 countersign + residual notes");

  // --- Countersign request: immutable tip + aggregates + AuthClaims 1.1 + SATISFIED ---
  requireOk(
    errors,
    !has(countersignRequest, /see Phase 13 \/ push tip|after wave 8 lands/i),
    "COUNTERSIGN-REQUEST-WAVE8 must not use 'see pushed tip' placeholder",
  );
  requireOk(
    errors,
    has(
      countersignRequest,
      /\*\*Immutable OpenClaw inspection tip:\*\* `005c9454f1bd3f7427936704131ffe5faa95ef0f`/,
    ),
    "COUNTERSIGN-REQUEST-WAVE8 must pin immutable tip 005c9454…",
  );
  requireOk(
    errors,
    countersignRequest.includes(BRAIN_FIXTURE_AGGREGATE_SHA256) &&
      countersignRequest.includes(SKILLS_FIXTURE_AGGREGATE_SHA256),
    "COUNTERSIGN-REQUEST-WAVE8 must state both exact fixture aggregates",
  );
  requireOk(
    errors,
    countersignRequest.includes(AUTH_CLAIMS_CONTRACT) &&
      countersignRequest.includes(AUTH_CLAIMS_SCHEMA_SHA256) &&
      countersignRequest.includes(AUTH_CLAIMS_CONTENT_HASH) &&
      countersignRequest.includes(PLATFORM_SOURCE_HEAD),
    "COUNTERSIGN-REQUEST-WAVE8 must state AuthClaims 1.1 provenance + Platform HEAD",
  );
  requireOk(
    errors,
    has(countersignRequest, /\*\*Status:\*\* \*\*SATISFIED\*\*/),
    "COUNTERSIGN-REQUEST-WAVE8 status must be SATISFIED",
  );
  requireOk(
    errors,
    countersignRequest.includes(BRAIN_OWNER_HANDOFF_COMMIT) &&
      countersignRequest.includes(SKILLS_OWNER_HANDOFF_COMMIT),
    "COUNTERSIGN-REQUEST-WAVE8 must record Brain + Skills handoff commits",
  );
  checks.push("COUNTERSIGN-REQUEST-WAVE8 SATISFIED + AuthClaims 1.1 provenance");

  // --- Stale PENDING / RE-OPENED while CLOSED ---
  for (const rel of CURRENT_STATUS_DOC_RELS) {
    const text = readText(repoRoot, rel);
    const stale = findStalePendingWhileClosedClaims(text);
    requireOk(
      errors,
      stale.length === 0,
      `${rel} has stale PENDING/RE-OPENED claims while FIXTURE-OWNER-SIGNOFF is CLOSED: ${stale[0] ?? ""}`,
    );
  }
  checks.push("no current handoff/status/request PENDING claims while signoff CLOSED");

  // --- Fixture manifests (docs; not JSON bytes) ---
  // Top status may remain PENDING_OWNER_COUNTERSIGN as residual MANIFEST drift;
  // aggregates + AuthClaims 1.1 must still match. Do not force MANIFEST byte edits.
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
      has(text, /PENDING_OWNER_COUNTERSIGN/) || has(text, /OWNER_COUNTERSIGNED/),
      `${label} MANIFEST top status must mention PENDING_OWNER_COUNTERSIGN or OWNER_COUNTERSIGNED`,
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

  requireOk(
    errors,
    consumption.includes("@linktrend/platform-contracts@0.2.2") || consumption.includes("`0.2.2`"),
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
