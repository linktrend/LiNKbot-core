# Independent Non-Live Runbook Rehearsal — Wave 7

**Recorded:** 2026-07-28 21:20–21:32 Asia/Taipei
**Branch tip:** `issue/ocp-openclawdevelopmentplan01`
**PR context:** openclaw_prime PR #38 (docs/ops rehearsal only)
**Operator identity:** Cursor Task subagent — independent non-live rehearsing operator
**Role statement:** This operator is an **independent rehearsing operator**, **not** the implementer. No implementer code changes, merges, credential issuance, Lisa live-profile mutation, or Platform live contact were performed.
**Evidence tier:** **FAKE / TEMPLATE only**
**LIVE readiness claim:** **none** (`fake ≠ live`; Phase 7–12 remain blocked / not started)

## Hard bounds observed

| Bound                               | Observed                                                                 |
| ----------------------------------- | ------------------------------------------------------------------------ |
| No Lisa live profile mutation       | Confirmed `~/.openclaw-lisa` exists; **not read, written, or restarted** |
| No Platform live contact            | No HTTP to Platform endpoints; SecretRef **names** only                  |
| No credential issue/rotate          | TEMPLATE placeholders only; no mint/print of values                      |
| No merge / no application code edit | Only this evidence file written under `runbooks/`                        |
| FAKE/TEMPLATE tier only             | LIVE-STAGE / LIVE-PROD sections walked as **paper stop** only            |

## Sources walked

1. `runbooks/README.md` (evidence tiers + plan §19 index of 14)
2. All 14 mapped §19 runbook files (and companions `brain-rollback-restart.md`, `skills-rollback-restart.md` as cross-refs)
3. `mcp-templates/*` (6 JSON templates + allowlist YAML + README)
4. `extensions/linkbrain/fake/server.mjs`, `extensions/linkskills/fake/cli.mjs`
5. `extensions/linkbrain/mcp-tool-filter.ts`, `extensions/linkskills/mcp-tool-filter.ts`
6. Namespace/outbox policy sources: `extensions/linkbrain/src/namespaces.ts`, `extensions/linkskills/src/namespaces.ts`, reject-new outbox paths in both runtimes
7. Phase gate packets: `PHASE-7-DECISION-PACKET-PLATFORM-STAGE.md`, `PHASE-8`…`PHASE-12-STATUS-BLOCKED.md`

## Shared FAKE commands actually executed

```bash
# Repo root: /Users/linktrend/Projects/openclaw_prime
# Fake binaries present and executable (stdio smoke with closed stdin; no Lisa LaunchAgent)
timeout 3 node extensions/linkbrain/fake/server.mjs --stdio </dev/null
timeout 3 node extensions/linkskills/fake/cli.mjs stdio </dev/null

# toolFilter include lists: stdio fake == oauth TEMPLATE == TS allowlist modules (exact match)
# All six mcp-templates/*.json keep "enabled": false
# Credential name independence: no LINKBRAIN ids in Skills templates; no LINKSKILLS ids in Brain templates

node scripts/run-vitest.mjs test/helpers/link-domain-fakes/integrated-brain-skills.test.ts
# Result: 1 file, 7 tests passed (~3.93s) — label fake/integration-local
```

**Sanitized evidence (shared):** vitest green; no Platform URLs contacted; no secrets in argv/logs from this operator; Lisa profile untouched.

---

## Per-runbook rehearsal (plan §19)

### 1 — Brain enable/disable/read-only/write/drain

**File:** `brain-enable-disable-drain.md`
**Steps walked (FAKE/TEMPLATE):**

1. Read FAKE section A + TEMPLATE section B; confirmed stop conditions (secret in argv/logs; cross-domain flag edits; native regression).
2. Confirmed fake binary `extensions/linkbrain/fake/server.mjs` exists; brief stdio smoke (closed stdin).
3. Read `mcp-templates/linkbrain.stdio.fake.json`; `enabled: false`; `__OPENCLAW_PRIME_ROOT__` placeholder present (not substituted into Lisa).
4. Confirmed plugin flag baseline names: `mcpRead`, `captureEnqueue`, `captureDrain`, `coordinationWrites` (all remain false in TEMPLATE / non-Lisa proof posture).
5. Ran integrated FAKE vitest (shared command above).
6. TEMPLATE: preferred `linkbrain.oauth.authprofile.template.json` (`authProfileId: linkbrain-stage-mcp`, `enabled: false`); fallback HTTP SecretRef **names** `LINKTREND_LINKBRAIN_STAGE_MCP_TOKEN` / `LINKTREND_LINKBRAIN_STAGE_INGESTION_TOKEN` documented only.
7. LIVE C1–C6 **not executed** — Phase 7 packet status blocked.

**Expected sanitized evidence:** fake/integration-local tests pass; MCP/plugin remain disabled for Lisa; no LIVE endpoints.
**Stop conditions observed:** LIVE enable sequence gated; did not copy templates into `~/.openclaw-lisa`.
**Result:** **PASS** (FAKE/TEMPLATE non-live rehearsal)

### 2 — Skills enable/disable/discovery/execution/telemetry

**File:** `skills-enable-disable-drain.md`
**Steps walked:**

1. Read FAKE A + TEMPLATE B; stop conditions include conversation content in Skills telemetry and Brain flag edits.
2. Confirmed `extensions/linkskills/fake/cli.mjs`; brief stdio smoke.
3. Read `linkskills.stdio.fake.json`; `enabled: false`.
4. Confirmed Skills flags: `mcpDiscoveryRead`, `governedExecution`, `telemetryEnqueue`, `telemetryDrain`; confirmed Skills must **not** set `hooks.allowConversationAccess` (boundary test forbids; namespaces policy constant present).
5. Ran shared integrated FAKE vitest.
6. TEMPLATE: preferred OAuth `linkskills-stage-mcp`; SecretRef names `LINKTREND_LINKSKILLS_STAGE_MCP_TOKEN` / `LINKTREND_LINKSKILLS_STAGE_PLUGIN_TOKEN` only.
7. LIVE C\* **not executed** — Phase 7 + Phase 9 blocked.

**Expected sanitized evidence:** Skills never receives conversation/content in FAKE path; independent of Brain.
**Stop conditions observed:** no Skills conversation hooks; no LIVE Lisa Skills enable.
**Result:** **PASS** (FAKE/TEMPLATE)

### 3 — Brain credential issue/rotate/revoke/recover

**File:** `brain-credential-rotate-revoke.md`
**Steps walked:**

1. Documented SecretRef **names** only (no values).
2. Preferred OAuth `authProfileId` template over static bearer (read oauth TEMPLATE).
3. Rehearsed revoke = leave plugin/MCP `enabled: false` + do not bind TEMPLATE into Lisa.
4. Recover = gated on Phase 5/7 — **not executed live**.

**Expected sanitized evidence:** names-only docs; no LIVE credential ops.
**Stop conditions observed:** no live credential issue; no Platform contact.
**Result:** **PASS** (FAKE/TEMPLATE)

### 4 — Skills credential issue/rotate/revoke/recover

**File:** `skills-credential-rotate-revoke.md`
**Steps walked:**

1. Skills SecretRef names only; verified no Brain ID reuse in Skills HTTP TEMPLATE.
2. Revoke rehearsal = disable `linkskills` independently of Brain (paper + TEMPLATE `enabled: false`).
3. Recover gated Phase 5 + 7 — not executed.

**Expected sanitized evidence:** independent Skills credential namespace; no secrets echoed.
**Stop conditions observed:** no live issue/rotate; cross-domain credential sharing avoided.
**Result:** **PASS** (FAKE/TEMPLATE)

### 5 — MCP probe, repeated-failure pause, recovery

**File:** `mcp-probe-pause-recover.md`
**Steps walked:**

1. FAKE probe commands: brain/skills fake stdio binaries (executed briefly).
2. Confirmed toolFilter TS modules exist and match TEMPLATE includes (exact set equality).
3. Paper-walked repeated-failure pause: set domain drain false → MCP `enabled=false` → leave sibling running → preserve outbox.
4. Recovery LIVE steps **not** run; FAKE recovery = restart fake only (not left listening).
5. Independence check: Brain vs Skills templates and namespaces remain separate.

**Expected sanitized evidence:** FAKE probe binaries runnable; allowlists aligned; sibling domain untouched by paper pause of one domain.
**Stop conditions observed:** no LIVE MCP enable; Phase 7 blocked for LIVE probe.
**Result:** **PASS** (FAKE/TEMPLATE)

### 6 — Plugin/Gateway restart with durable outboxes

**File:** `gateway-restart-durable-outboxes.md`
**Steps walked:**

1. Read principles: outboxes durable; drain off if remote unhealthy; restart ≠ enablement; domain independence.
2. FAKE pre-restart checklist: would snapshot Brain/Skills flags + MCP enabled flags; for FAKE only stop local fake processes — **did not** restart live Lisa LaunchAgent.
3. Confirmed outbox/deadletter namespaces exist in both plugins (`outbox`, `deadletter`, plus Brain `capture-buffer`).
4. Post-restart LIVE verification **not** performed.

**Expected sanitized evidence:** FAKE restart path does not require wiping keyed-store namespaces; Lisa LaunchAgent not touched.
**Stop conditions observed:** explicit “Do **not** restart the live Lisa LaunchAgent for FAKE work”.
**Result:** **PASS** (FAKE/TEMPLATE)

### 7 — Queue pressure, reject-new, capacity, dead-letter

**Coverage:** README — covered in #1/#2 + gateway restart; Brain/Skills overflow reject-new
**Steps walked:**

1. Confirmed Brain runtime throws `linkbrain: outbox overflow (reject-new)`; Skills `linkskills: outbox overflow (reject-new)`.
2. Confirmed stores open with `overflowPolicy: "reject-new"`; capacity diagnostics expose `outboxMaxEntries` / `outboxRemaining`.
3. Dead-letter paths present in Brain drain status (`deadLetterCount`); Skills mirrors durable outbox + deadletter namespaces.
4. Paper: under pressure keep drain off until remote healthy; do not delete outbox to “fix” auth.
5. Shared FAKE vitest exercises integrated local domains without LIVE queues.

**Expected sanitized evidence:** reject-new policy present in code/docs; FAKE integration still green.
**Stop conditions observed:** no LIVE capacity canary; no outbox wipe.
**Result:** **PASS** (FAKE/TEMPLATE)

### 8 — Brain capture hold, retention deletion, Principal exceptions

**File:** `brain-capture-hold-retention.md`
**Steps walked:**

1. Confirmed capture-buffer namespace is Brain-only: `LINKBRAIN_NAMESPACES.captureBuffer = "capture-buffer"` in `extensions/linkbrain/src/namespaces.ts`.
2. Skills namespaces list has **no** capture-buffer (independence).
3. Hold/deletion durations: policy wording only; no LIVE data deletion.
4. Exception path = decision packet only at this tier.

**Expected sanitized evidence:** Brain-only capture-buffer; no LIVE retention action.
**Stop conditions observed:** Principal-gated deletion not executed.
**Result:** **PASS** (FAKE/TEMPLATE)

### 9 — Skills bundle/profile mismatch and last-verified-bundle

**File:** `skills-bundle-profile-mismatch.md`
**Steps walked:**

1. Paper: on profile/hash mismatch disable `governedExecution` + `telemetryDrain`.
2. Confirmed runtime recognizes `incompatible_profile` failure code path; envelopes require `execution_profile_hash`.
3. Keep outbox durable; do not invent local bundle hash.
4. Escalate to LiNKskills owner — not contacted live here.

**Expected sanitized evidence:** mismatch response is disable-execution/drain, not hash forgery.
**Stop conditions observed:** no LIVE certification retrieval.
**Result:** **PASS** (FAKE/TEMPLATE)

### 10 — Privacy or secret incident containment

**File:** `privacy-secret-incident.md`
**Steps walked:**

1. Paper: disable Brain conversation hooks / Skills plugin domain-first.
2. Revoke = request Platform revoke by **name** — not issued/revoked here.
3. Log canary search without printing secret values — not run against live Lisa logs (would risk profile contact); procedure recorded only.
4. Companion rollback order docs read (`brain-rollback-restart.md`, `skills-rollback-restart.md`).

**Expected sanitized evidence:** containment order documented; no secret values in this file.
**Stop conditions observed:** no live revoke; no Lisa config edit.
**Result:** **PASS** (FAKE/TEMPLATE)

### 11 — Cross-domain leakage incident containment

**File:** `cross-domain-leakage-incident.md`
**Steps walked:**

1. Paper: if Skills shows Brain fields or Brain shows Skills content → disable both drains; preserve outboxes; do not merge namespaces.
2. Verified namespace sets disjoint except shared _names_ within each plugin’s own store scope (`outbox`/`deadletter`/`cursor`/`health` are per-plugin; Brain alone has `capture-buffer`).
3. Shared Platform dual-disable only with shared-scope evidence — none claimed.

**Expected sanitized evidence:** independent disable paths; forensic outbox retention.
**Stop conditions observed:** no dual LIVE disable performed (nothing LIVE was enabled).
**Result:** **PASS** (FAKE/TEMPLATE)

### 12 — Platform rollback, migration recovery, backup, restore

**File:** `platform-rollback-backup-restore.md`
**Steps walked:**

1. Confirmed OpenClaw does not own Platform migrations; Phase packets remain blocked.
2. Local recovery posture: disable plugins; retain keyed-store outboxes; restore prior plugin build if needed — paper only.
3. Platform DB backup/restore = Platform-owned TEMPLATE note only; no Platform contact.

**Expected sanitized evidence:** blocked/local-only recovery story at this tier.
**Stop conditions observed:** no Platform migration/restore attempted.
**Result:** **PASS** (FAKE/TEMPLATE) — LIVE Platform ops remain **blocked**, correctly

### 13 — Lisa native-behavior regression isolation

**File:** `lisa-native-regression-isolation.md`
**Steps walked:**

1. Paper isolation order: disable newly enabled domain plugin first (`linkbrain` or `linkskills`).
2. Verify native memory/compaction/sessions/cron/channels — **not** exercised against live Lisa (would be LIVE/profile contact).
3. FAKE substitute: integrated vitest + coexistence/boundary tests exist in tree; this rehearsal did not start Lisa Gateway.
4. If regression persists after domain disable → escalate as OpenClaw core.

**Expected sanitized evidence:** isolation order clear; no live Lisa health probe claimed.
**Stop conditions observed:** did not attach to live Lisa runtime.
**Result:** **PASS** (FAKE/TEMPLATE paper + local fake proof only)

### 14 — Stage/production canary start/pause/restart/accept/reject

**File:** `stage-prod-canary-controls.md`
**Steps walked:**

1. FAKE: drain flags `captureDrain` / `telemetryDrain` toggled only as **documented** independent controls (not applied to Lisa config).
2. Confirmed Phase 8–12 status packets: **not started / blocked** on Phase 7 (and further gates).
3. Mapping: pause = drains false; restart = gateway + worker (LIVE not run); reject = disable plugin + keep outbox.
4. LIVE canary start/accept/reject **not started**.

**Expected sanitized evidence:** canary controls documented; LIVE canary explicitly not started.
**Stop conditions observed:** Phase 7 blocked → no stage/prod canary.
**Result:** **PASS** (FAKE/TEMPLATE) — LIVE canary remains **blocked**

---

## Scoreboard (non-live rehearsal)

| #   | Runbook                            | Tier rehearsed         | Result   |
| --- | ---------------------------------- | ---------------------- | -------- |
| 1   | Brain enable/disable/drain         | FAKE + TEMPLATE        | **PASS** |
| 2   | Skills enable/disable/drain        | FAKE + TEMPLATE        | **PASS** |
| 3   | Brain credential rotate/revoke     | FAKE + TEMPLATE        | **PASS** |
| 4   | Skills credential rotate/revoke    | FAKE + TEMPLATE        | **PASS** |
| 5   | MCP probe / pause / recover        | FAKE + TEMPLATE        | **PASS** |
| 6   | Gateway restart + durable outboxes | FAKE + TEMPLATE        | **PASS** |
| 7   | Queue pressure / reject-new / DL   | FAKE (+ refs #1/#2/#6) | **PASS** |
| 8   | Brain capture hold / retention     | FAKE + TEMPLATE        | **PASS** |
| 9   | Skills bundle/profile mismatch     | FAKE + TEMPLATE        | **PASS** |
| 10  | Privacy/secret incident            | FAKE + TEMPLATE        | **PASS** |
| 11  | Cross-domain leakage               | FAKE + TEMPLATE        | **PASS** |
| 12  | Platform rollback/backup/restore   | FAKE + TEMPLATE        | **PASS** |
| 13  | Lisa native regression isolation   | FAKE + TEMPLATE        | **PASS** |
| 14  | Stage/prod canary controls         | FAKE + TEMPLATE        | **PASS** |

**Totals:** **14 / 14 PASS** at FAKE/TEMPLATE non-live rehearsal.
**FAIL:** 0
**BLOCKED (non-live rehearsal):** 0

**LIVE-STAGE / LIVE-PROD:** not rehearsed; Phase 7 decision packet still **blocked**; Phases 8–12 **not started**. This file does **not** claim environment readiness.

## Explicit non-claims

- Does not claim Lisa stage or production readiness.
- Does not claim Platform credential health.
- Does not claim Cursor/Codex Skills readiness (Phase 9).
- Does not authorize copying MCP templates into `~/.openclaw-lisa`.

## Operator attestation

I am a **Cursor Task subagent — independent non-live rehearsing operator**, separate from the implementer. All actions above stayed within FAKE/TEMPLATE bounds on 2026-07-28 Asia/Taipei.
