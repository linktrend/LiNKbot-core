# Phase 13 — CORRECTED Provisional OpenClaw Grok Execution-to-Verification Handoff

**Document class:** Section 21.1 provisional Grok handoff (evidence index, not certification) — **CORRECTED for Codex Phase 14 re-verification**
**Recorded (original):** 2026-07-27 19:17 Asia/Taipei
**Corrected:** 2026-07-28 07:57 Asia/Taipei
**Correction wave 2 / 2b:** 2026-07-28 10:15 Asia/Taipei
**Author (correction):** Cursor Local / Cloud Grok 4.5 High integrator under OpenClaw plan package
**Plan:** `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`
**Plan SHA-256:** `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7` (HASH_OK re-verified 2026-07-28)
**Authority:** `docs/CURSOR-GROK-EXECUTION-PROMPT.md` — OpenClaw-owned Phases 0–13 only
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) → `development` (draft; do not merge from this handoff)
**Supersedes:** prior provisional text at the same path (2026-07-27) and short pointer claims of 13 files / 82 tests as the tip proof set

> **Provisional.** This handoff does **not** assign the seven Section 13.3 conformance classifications. It does **not** perform Phase 14 or Phase 15. Independent OpenClaw Codex verification (Phase 14) must inspect actual code, tests, and evidence rather than accepting this summary. **Re-verify against this corrected packet**, not the superseded 2026-07-27 provisional alone. **Phase 1 fixture-owner gate is RE-OPENED** for wave-8 AuthClaims 1.1.0 aggregates (`PENDING_OWNER_COUNTERSIGN`; prior CLOSED tip `429a7818…` superseded). **Phase 1 overall is still NOT complete** (Platform auth-path blocked + pending countersigns).

---

## Deficiency corrections 1–8 (2026-07-28 mapping)

| #   | Deficiency (prior provisional / Codex re-check gap)                   | Correction landed                                                                                                                                 | Evidence                                                                                                       |
| --- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 1   | Missing hashed Platform/Brain/Skills contract consumption pins        | Pin files under `contracts/` + consumption record                                                                                                 | `contracts/{platform,brain,skills}/PIN.json`; `PHASE-1-CONTRACT-CONSUMPTION.md`; `contracts/README.md`         |
| 2   | Brain MCP tool names CURRENT vs frozen §9.1 unresolved                | **DECIDED:** OpenClaw keeps frozen §9.1; **will not** alias; Brain must implement §9.1                                                            | `BRAIN-TOOL-NAME-DECISION-PACKET.md`                                                                           |
| 3   | Hardcoded `not_configured` transport stubs                            | Configurable modes: `disabled` (default) / `fake` / `http` / `mcp`; `not_configured` removed                                                      | `extensions/link{brain,skills}/src/transport.ts`; commit `e88ba95d0a2`                                         |
| 4   | Phase 6 incomplete (coexistence-only; tip proof understated at 13/82) | Full mandatory matrix + perf; tip suite **31 files / 203 tests** (wave 8); `SKIPPED_PLATFORM_LIVE` items named | `PHASE-6-STATUS.md`; `WAVE8-CORRECTION-PACKET.md` |
| 5   | Fixture owner sign-off / aggregate hashes missing                     | Wave-8 AuthClaims 1.1.0 aggregates recomputed — gate **RE-OPENED** (`PENDING_OWNER_COUNTERSIGN`; Brain `4493f714…` / Skills `20316371…`). Prior CLOSED tip `429a7818…` superseded. | `FIXTURE-OWNER-SIGNOFF.md`; `COUNTERSIGN-REQUEST-WAVE8-AUTHCLAIMS-1.1.md` |
| 6   | Crabbox/Testbox heavy proof unclear or overclaimable                  | Local `crabbox` binary **missing** / sanity failed; **trusted local fallback** used; **draft PR #38** opened for exact-head CI                    | PR <https://github.com/linktrend/openclaw_prime/pull/38> ; tip HEAD `048922582e5` (PR opened at `17508f539d7`) |
| 7   | Ambiguity on live Lisa mutation and Phases 7–12                       | Confirmed: **no Lisa live mutation**; **Phases 7–12 not started** (blocked packets only)                                                          | §3 / §7 / §9; `PHASE-{7..12}-STATUS-BLOCKED.md`                                                                |
| 8   | Coverage index / provisional handoff stale for re-verification        | This **CORRECTED** handoff; coverage index **without** seven-value classifications; sessions closed                                               | this file; `docs/handoffs/2026-07-28-openclawdevelopmentplan01-corrected-phase13.md`                           |

---

## 0. Identity and inspection coordinates

| Field                                    | Value                                                                                                 |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Repository                               | `https://github.com/linktrend/openclaw_prime.git`                                                     |
| Branch                                   | `issue/ocp-openclawdevelopmentplan01`                                                                 |
| Tracking                                 | `origin/issue/ocp-openclawdevelopmentplan01`                                                          |
| Worktree                                 | primary checkout for this package                                                                     |
| Sibling worktree (untouched)             | `openclaw_prime-development-final-20260727` on `development` @ `02659b9ac81`                          |
| Base (`origin/development`)              | `02659b9ac819c126432ae5e4c0b379a7f8ff1bee`                                                            |
| HEAD at corrected handoff authoring base | `6f6887c31cee9e2ca0f84389c915f7480b4cfa50`                                                            |
| Corrected handoff commit                 | `811ec5755036bbfa324ce72404a17b4c4443c683`                                                            |
| Wave-2b pin commit                       | `4103bd6c1c208337f5dc37e169c9ec9a727bf835`                                                            |
| SSRF transport commit                    | `d79e3356db527492f0ab8a0b1af7888469815f19`                                                            |
| Hosted CI green tip (ci-gate SUCCESS)    | **deferred / Principal-waived** (CI redesign) for wave 5 tip `4fa1e9f7ed0…` (prior green `8e236d2f056…` / `30347356129`) |
| Current HEAD (branch tip)                | wave-10 correction (exact tip filled at closeout; started from `5d1d47ea027bf58525f68aefa49c136f49744452`; tip suite 31/203) |
| Primary session (closed)                 | `docs/agent-sessions/completed/cursor-local-mac-mini-lisa-openclawdevelopmentplan01-20260727-1648.md` |
| Related Phase 2 session (closed)         | `docs/agent-sessions/completed/cursor-local-mac-mini-feature-linkbrain-phase2-20260727-1854.md`       |
| Orchestrator key                         | `cursor-local-mac-mini-desktop-workspace-orchestrator`                                                |
| Preserved stash                          | `stash@{0}: On main: wip-auth-unrelated` (never applied)                                              |

---

## 1. Every plan phase 0–13 — claimed complete / blocked / outside ownership

Evidence pointers are status packets and code paths. **No seven-value classifications are assigned here.**

| Phase                                                  | Claim for OpenClaw Grok ownership                                                                                                                                                                                                                                                        | Evidence pointers                                                                                                                        |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **0** — Approval, snapshot, ownership freeze           | **Complete** (OpenClaw freeze packet). Live/external gates remain recorded as blocked, not cleared.                                                                                                                                                                                      | `PHASE-0-FREEZE-PACKET.md`                                                                                                               |
| **1** — Contract and fake freeze                       | **OpenClaw-owned deliverables present** at fake tier + **contract pins** + AuthClaims **1.1.0** fixtures. **Fixture-owner gate RE-OPENED** (wave 8 aggregates PENDING countersign). **Blocked** for full Phase 1 exit: Platform auth-path + owner countersigns. Provisional pending Codex Phase 14. | `PHASE-1-STATUS.md`; `FIXTURE-OWNER-SIGNOFF.md`; `COUNTERSIGN-REQUEST-WAVE8-AUTHCLAIMS-1.1.md` |
| **2** — Brain plugin skeleton                          | **Complete** at fake/local tier (default-disabled; no Lisa mutation).                                                                                                                                                                                                                    | `PHASE-2-STATUS.md`; `extensions/linkbrain/**`                                                                                           |
| **3** — Brain lifecycle capture / coordination mapping | **Complete** at fake-backed tier.                                                                                                                                                                                                                                                        | `PHASE-3-STATUS.md`                                                                                                                      |
| **4** — Skills plugin skeleton / structured telemetry  | **Complete** at fake/local tier (no conversation hooks; default-disabled).                                                                                                                                                                                                               | `PHASE-4-STATUS.md`; `extensions/linkskills/**`                                                                                          |
| **5** — Managed MCP integration and authentication     | **Template/filter work complete**. **Blocked** for live MCP wiring: Platform auth packet. Transport adapters land configurable modes (see deficiency #3).                                                                                                                                | `PHASE-5-STATUS.md`; `mcp-templates/**`; transport modules                                                                               |
| **6** — Integrated local and isolated QA               | **Fake-tier matrix complete** — coexistence + mandatory failure/recovery/durability/privacy/isolation/perf against deterministic fakes **passed** (**31 / 203** after wave 8). Platform-live items **`SKIPPED_PLATFORM_LIVE`**. | `PHASE-6-STATUS.md`; `WAVE8-CORRECTION-PACKET.md` |
| **7** — Platform stage readiness gate                  | **Blocked** — **not started**.                                                                                                                                                                                                                                                           | `PHASE-7-DECISION-PACKET-PLATFORM-STAGE.md`                                                                                              |
| **8** — Brain stage shadow/write canary                | **Blocked** — **not started**.                                                                                                                                                                                                                                                           | `PHASE-8-STATUS-BLOCKED.md`                                                                                                              |
| **9** — Skills stage canary                            | **Blocked** — **not started**.                                                                                                                                                                                                                                                           | `PHASE-9-STATUS-BLOCKED.md`                                                                                                              |
| **10** — Integrated stage soak / operational rehearsal | **Blocked** — **not started**.                                                                                                                                                                                                                                                           | `PHASE-10-STATUS-BLOCKED.md`                                                                                                             |
| **11** — Brain production deployment / canary          | **Blocked** — **not started**.                                                                                                                                                                                                                                                           | `PHASE-11-STATUS-BLOCKED.md`                                                                                                             |
| **12** — Skills production deployment / canary         | **Blocked** — **not started**.                                                                                                                                                                                                                                                           | `PHASE-12-STATUS-BLOCKED.md`                                                                                                             |
| **13** — Execution closeout and Grok handoff           | **This corrected document** = provisional closeout after deficiency corrections 1–8. Live Phases 7–12 remain blocked.                                                                                                                                                                    | this file; `runbooks/**`                                                                                                                 |
| **14** — Independent OpenClaw Codex verification       | **Outside ownership** — OpenClaw Codex verifier only (**re-verification requested**).                                                                                                                                                                                                    | Plan Phase 14                                                                                                                            |
| **15** — Four-plan reconciliation / Principal closeout | **Outside ownership** — LiNKbrain Codex + Principal only.                                                                                                                                                                                                                                | Plan Phase 15                                                                                                                            |

---

## 2. Contract pins (`contracts/`)

| Domain       | Pin file                      | Source HEAD                                | Key pin                                                                                                              |
| ------------ | ----------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| LiNKplatform | `contracts/platform/PIN.json` | `6861a376aae5fa4e12c1b68a808d7b04e7bbfb5b` | `platform.auth-claims/1.1.0` schema `c2e8bc68…dfa1` / contentHash `fb518834…a567`; `PLATFORM_CONTRACTS_SEMVER=0.2.2` (wave 7) |
| LiNKbrain    | `contracts/brain/PIN.json`    | `a3cff6e0f04ac968c32beacb7bdb1b81a4d77d3f` | `BRAIN_CONTRACT_VERSION=1.0.0`; frozen 17 tools via `frozen-tools.ts` `1e265b20…be26`                                |
| LiNKskills   | `contracts/skills/PIN.json`   | `f16103f23a716d0edeb08a1e82e38608ebd563ea` | `skills.api.v0.1`; schemas aggregate `828ac00d…81d2`; vendored auth-claims matches Platform                          |

Full consumption record: `PHASE-1-CONTRACT-CONSUMPTION.md`.

---

## 3. Brain tool name decision

**OpenClaw keeps frozen plan §9.1 names (17).** Corrected Brain HEAD `a3cff6e…` implements the same surface via `frozen-tools.ts`. OpenClaw will **not** alias. Wave-8 AuthClaims 1.1.0 refresh **re-opened** the fixture-owner gate (`PENDING_OWNER_COUNTERSIGN`; aggregates Brain `4493f714…` / Skills `20316371…`). Phase 1 overall still blocked on Platform auth-path + countersigns. Not Codex Phase 14; not merge authority.

Packet: `BRAIN-TOOL-NAME-DECISION-PACKET.md` (correction wave 2b).

---

## 4. Transport modes

| Mode       | Meaning                                                      |
| ---------- | ------------------------------------------------------------ |
| `disabled` | Default; returns `transport_disabled` (not `not_configured`) |
| `fake`     | Test-only; rejected outside injected fake harness            |
| `http`     | Endpoint + SecretRef bearer                                  |
| `mcp`      | Reads `mcp.servers.<name>`; prefers SecretRef headers        |

**`not_configured` removed** as a steady-state transport mode/error for these plugins. Evidence: `extensions/linkbrain/src/transport.ts`, `extensions/linkskills/src/transport.ts`, transport tests asserting `errorCode !== "not_configured"`.

---

## 5. Commands, tests, Crabbox/Testbox

### Tip proof (Phase 6 after transport land) — authoritative for re-verification

```bash
node scripts/run-vitest.mjs test/helpers/link-domain-fakes extensions/linkbrain extensions/linkskills
# Test Files  31 passed (31)
# Tests       203 passed (203)
```

Recorded tip suite **31/203** after wave 8+; wave 9 adds core MCP toolFilter seam tests outside this tip shard.

### Phase 6 full matrix — `SKIPPED_PLATFORM_LIVE` items (named)

1. **Platform audit/correlation rejection** — needs live stage audit API + opaque correlation issuer (Phase 7).
2. **Real Platform credential issuer revoke** — Platform-owned issuer/rotate/expiry evidence (Phase 7); fake auth matrix covers revoked tokens only.

All other mandatory fake-tier scenarios 1–15 + coexistence A–G: **PASS** (see `PHASE-6-STATUS.md`).

### Crabbox / Testbox

| Check                           | Result                                                                                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Local `crabbox` binary          | **Missing** / failed sanity on this host (`crabbox not found`)                                                                                               |
| Testbox / Crabbox heavy suite   | **Not run**                                                                                                                                                  |
| Proof used                      | **Trusted local fallback** — focused `node scripts/run-vitest.mjs …`                                                                                         |
| Exact-head CI                   | **deferred / Principal-waived** (CI system being redesigned) for tip `4fa1e9f7ed0…` (failed pre-repair `57a8571cd1b` / `30349929708`; draft skip `30351278518`; ready re-fire `30351309306` not waited) |
| Local re-verify (wave 2b)       | **2026-07-28 10:07 Asia/Taipei** — historical **20/144** (superseded); superseded by capture-durability re-verify below                                   |
| Local re-verify (capture fix)   | **2026-07-28 15:31 Asia/Taipei** — historical **21/152**; superseded by concurrency wave below                                               |
| Local re-verify (concurrency)   | **2026-07-28 17:35 Asia/Taipei** — historical **21/160**; superseded by bounded-timeout wave below                                           |
| Local re-verify (bounded timeout) | **2026-07-28 18:12 Asia/Taipei** — historical **22/171**; superseded by wave 6 below |
| Local re-verify (wave 6 Phase 14 corrections) | **2026-07-28 20:48 Asia/Taipei** — historical **26/185**; superseded by wave 7 below |
| Local re-verify (wave 7 Phase 14 corrections) | **2026-07-28 21:36 Asia/Taipei** — historical **29/196**; superseded by wave 8 below |
| Local re-verify (wave 10 Phase 14 corrections) | **2026-07-29 Asia/Taipei** — deny-all/flags/hot-invalidation/§13.3 atomic ledger; focused seam PASS; tip suite **31/203**; `git diff --check` clean; **no owner countersign request** |
| Local re-verify (wave 9 MCP toolFilter seam) | **2026-07-29 Asia/Taipei** — focused seam tests PASS; tip suite **31/203** preserved; AuthClaims aggregates unchanged |
| Local re-verify (wave 8 Phase 14 corrections) | **2026-07-29 Asia/Taipei** — `node scripts/run-vitest.mjs test/helpers/link-domain-fakes extensions/linkbrain extensions/linkskills` → **31/203 pass**; base-to-head `git diff --check` required clean |
| OpenGrep (harness + transports) | Local `scripts/run-opengrep.sh --error` → **0 findings** after harness + SSRF-guard fixes                                                    |

Local 31/203 is **not** a substitute for hosted CI. Wave 8 did **not** poll hosted CI. PR readiness and merge deferred.

### Wave 8 correction packet (authoritative for Codex Phase 14 re-verification)

| Field | Value |
| ----- | ----- |
| Starting tip | `b3e8853b1c15d13429f51ac5054bac448a4256d2` |
| Packet | `WAVE8-CORRECTION-PACKET.md` |
| MCP toolFilter deviation | `MCP-TOOLFILTER-SDK-PREREQUISITE-DEVIATION.md` |
| Classification / evidence index | `PHASE-14-CLASSIFICATION-EVIDENCE-INDEX.md` |
| Countersign request | `COUNTERSIGN-REQUEST-WAVE8-AUTHCLAIMS-1.1.md` (PENDING) |
| AuthClaims pin | `platform.auth-claims/1.1.0` / package `0.2.2` |
| Fixture aggregates | Brain `4493f714…`; Skills `20316371…` — **PENDING owner countersign** |
| Self-certify / merge | **No** |

### Wave 7 correction packet (historical)

| Field | Value |
| ----- | ----- |
| Starting tip | `b9f948f9b3a856e997247355f697c3fc7767e844` |
| Packet | `WAVE7-CORRECTION-PACKET.md` |
| Self-certify / merge | **No** |

### Historical (superseded as tip claim)

Prior Phase 13 closeout (2026-07-27): 13 files / 82 tests — retained as historical only; **not** the tip proof set after corrections.

---

## 6. Fixture sign-off

| Package                          | Aggregate SHA-256                                                  | Status                                                                                                                                        |
| -------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `extensions/linkbrain/fixtures`  | `4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b` | **`PENDING_OWNER_COUNTERSIGN`** (wave 8 AuthClaims 1.1.0 refresh; 75 JSON) |
| `extensions/linkskills/fixtures` | `203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a` | **`PENDING_OWNER_COUNTERSIGN`** (wave 8 AuthClaims 1.1.0 refresh; 71 JSON) |

Source: `FIXTURE-OWNER-SIGNOFF.md`; request `COUNTERSIGN-REQUEST-WAVE8-AUTHCLAIMS-1.1.md`. **Phase 1 fixture-owner gate RE-OPENED.** Historical countersigns at tip `429a7818…` superseded for positive AuthClaims path. Phase 1 overall still blocked on Platform auth-path + fresh owner countersigns.

---

## 7. Configuration, live actions, Lisa mutation

| Action class                        | What happened                                       |
| ----------------------------------- | --------------------------------------------------- |
| Live Lisa profile mutation          | **None**                                            |
| Live LaunchAgent / gateway restart  | **None for this package**                           |
| Live Platform contact / mutation    | **None**                                            |
| Production / stage credential issue | **None**                                            |
| Secret values committed             | **None**                                            |
| Phases 7–12 canaries                | **Not started**                                     |
| Plugin defaults                     | Both **default-disabled**; transportMode `disabled` |

---

## 8. Evidence tiers (strictly separated)

| Tier                  | What exists                                                             | What does **not** exist |
| --------------------- | ----------------------------------------------------------------------- | ----------------------- |
| **Fake**              | Domain fakes, fixtures, auth/failure canaries, transport unit proofs    | —                       |
| **Integration-local** | Integrated + Phase 6 matrix/perf; MCP template parse + toolFilter tests | Not stage               |
| **Stage**             | **None**                                                                | No canaries             |
| **Production**        | **None**                                                                | No canaries             |

---

## 9. Canary windows

| Canary                       | Status           |
| ---------------------------- | ---------------- |
| Brain stage (Phase 8)        | **None started** |
| Skills stage (Phase 9)       | **None started** |
| Integrated stage soak (10)   | **None started** |
| Brain production (Phase 11)  | **None started** |
| Skills production (Phase 12) | **None started** |

---

## 10. Failures, blockers, risks, omissions

### Failures (resolved under fake surface)

- Phase 6 Skills fake CLI empty-env throttle — fixed earlier; re-proven in matrix.
- Concurrent transport + Phase 6 matrix on shared checkout — both landed green on tip.

### Blockers (external / ownership — still open)

1. Brain owner fixture countersign — **CLOSED** (`OWNER_COUNTERSIGNED` at tip `429a7818…` / aggregate `275c1fb7…9a1d`)
2. Skills owner tip reaffirmation — **CLOSED** (`OWNER_COUNTERSIGNED` reaffirmed at tip `429a7818…` / aggregate `8586d89a…ec96`)
3. Platform auth-path approval — **still open** (blocks full Phase 1 exit / live enablement)
4. Platform auth mechanism + claim propagation approval (for live MCP wiring)
5. Platform stage readiness evidence (Phase 7)
6. Skills Cursor + Codex readiness + certified profiles (immutable-release path corrected; re-verify still pending)
7. Principal Brain production retention / hold approval
8. Production credentials + authorized operator for Lisa-profile mutation
9. Live Librarian / Brain Gateway for scratch finding submission
10. Hosted exact-head CI: **deferred / Principal-waived** (CI system being redesigned) for tip `4fa1e9f7ed0…` (failed pre-repair `57a8571cd1b` / `30349929708`; draft skip `30351278518`; ready re-fire `30351309306` not waited). Fixture-owner gate CLOSED. PR readiness/merge deferred.

### Cleared relative to earlier provisional (code evidence only — not Phase 1 exit)

- Corrected Brain HEAD `a3cff6e…` implements frozen §9.1 **17** tools via `frozen-tools.ts` (OpenClaw still will not alias).
- Wave-2b pins Platform/Brain/Skills to latest corrected sibling HEADs; stale pre-correction heads scrubbed.
- Wave 7: `platform.auth-claims/1.1.0` pinned (schema `c2e8bc68…dfa1` / contentHash `fb518834…a567`); package `0.2.2`. Historical `1.0.0` copy retained.

### Omissions / unproven claims (explicit)

- No claim that Brain/Skills Gateways conform to OpenClaw fixtures
- No claim of stage or production readiness
- No Crabbox/Testbox heavy-suite proof
- No live Lisa channel/cron/heartbeat under enabled Brain/Skills
- No seven-value §13.3 classifications assigned by Grok

---

## 11. Reproduction instructions

```bash
cd /Users/linktrend/Projects/openclaw_prime
git fetch origin
git checkout issue/ocp-openclawdevelopmentplan01
git pull --ff-only
git rev-parse HEAD

shasum -a 256 docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md
# expect: 17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7

pnpm install   # if needed

node scripts/run-vitest.mjs test/helpers/link-domain-fakes extensions/linkbrain extensions/linkskills
# expect: 31 files / 203 tests passed (wave 8+; re-verify after tip advance)
```

Do **not** copy MCP templates into the live Lisa profile or enable plugins without Platform + Principal gates.

---

## 12. Rollback instructions

Same as prior provisional: keep plugins/MCP disabled; no live Lisa rollback required (never mutated). Optional git inspection vs `origin/development`. Preserve `stash@{0}` and sibling worktrees.

---

## 13. Sanitized evidence locations

| Location                                                                    | Contents                                                                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `docs/execution/openclawdevelopmentplan01/`                                 | Freeze, phase status 0–6 + 7–12 blocked, contracts, decision packets, MCP templates, runbooks, **this corrected handoff** |
| `docs/handoffs/2026-07-28-openclawdevelopmentplan01-corrected-phase13.md`   | Integrator closeout + Orchestrator relay                                                                                  |
| `docs/handoffs/2026-07-27-openclawdevelopmentplan01-phase13-provisional.md` | Short pointer — amended: superseded for re-verification                                                                   |
| `docs/agent-sessions/completed/*openclawdevelopmentplan01-20260727-1648*`   | Primary integrator session (closed)                                                                                       |
| `docs/agent-sessions/completed/*linkbrain-phase2-20260727-1854*`            | Phase 2 feature session (closed)                                                                                          |
| `extensions/link{brain,skills}/**`                                          | Plugins, transports, fixtures, fakes, tests                                                                               |
| `test/helpers/link-domain-fakes/**`                                         | Shared fakes + integrated + Phase 6 matrix/perf                                                                           |

---

## 14. Coverage index (phase / task / gate → evidence) — **no final classifications**

Do **not** read seven-value §13.3 classifications into this table. Codex Phase 14 assigns those independently.

| Plan item                                    | Claimed evidence location                                                    | Notes for verifier                                                      |
| -------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Phase 0 freeze / hashes / ownership          | `PHASE-0-FREEZE-PACKET.md`                                                   | Re-verify plan hash                                                     |
| Phase 1 contract pins                        | `contracts/**`, `PHASE-1-CONTRACT-CONSUMPTION.md`                            | Deficiency #1                                                           |
| Phase 1 fixtures Brain/Skills                | `extensions/link{brain,skills}/fixtures/**`                                  | **`OWNER_COUNTERSIGNED`** at tip `429a7818…`; fixture-owner gate CLOSED |
| Phase 1 fakes                                | `extensions/link{brain,skills}/fake/**`, `test/helpers/link-domain-fakes/**` | Fake tier                                                               |
| Brain tool names §9.1                        | `BRAIN-TOOL-NAME-DECISION-PACKET.md`, allowlists, fixtures                   | Deficiency #2; no OpenClaw alias                                        |
| Transport modes                              | `extensions/link{brain,skills}/src/transport.ts`                             | Deficiency #3; no `not_configured`                                      |
| Phase 1 auth matrix                          | `PHASE-1-AUTH-COMPATIBILITY-MATRIX.md`                                       | Platform approval pending                                               |
| Phase 1 outbox prototype                     | `PHASE-1-OUTBOX-PROTOTYPE-FINDINGS.md`                                       | Design + public API inspection                                          |
| Phase 2 Brain skeleton                       | `extensions/linkbrain/**`, `PHASE-2-STATUS.md`                               | Default-disabled                                                        |
| Phase 3 lifecycle / capture                  | `lifecycle.test.ts`, `PHASE-3-STATUS.md`                                     | Fake-backed                                                             |
| Phase 4 Skills skeleton                      | `extensions/linkskills/**`, `PHASE-4-STATUS.md`                              | Default-disabled                                                        |
| Phase 5 MCP templates / filters              | `mcp-templates/**`, `mcp-tool-filter.ts`                                     | `enabled: false`                                                        |
| Phase 5 Platform auth gate                   | `PHASE-5-DECISION-PACKET-PLATFORM-AUTH.md`                                   | Blocked                                                                 |
| Phase 6 full matrix + perf                   | `PHASE-6-STATUS.md`, matrix/perf tests                                       | **31/203**; wave 8 Phase 14 corrections |
| Phase 6 SKIPPED_PLATFORM_LIVE                | `PHASE-6-STATUS.md` rows named                                               | Audit reject; real issuer revoke                                        |
| Phase 6 Crabbox/Testbox                      | —                                                                            | Local missing; trusted local + PR CI; Deficiency #6                     |
| Fixture owner sign-off                       | `FIXTURE-OWNER-SIGNOFF.md`; `COUNTERSIGN-REQUEST-WAVE8-AUTHCLAIMS-1.1.md`   | **PENDING** wave 8 aggregates                                           |
| Phase 7–12                                   | `PHASE-*-STATUS-BLOCKED.md` / decision packet                                | **Not started**; Deficiency #7                                          |
| Phase 13 corrected handoff                   | this file                                                                    | tip after wave 8                                                        |
| Operator runbooks (non-live)                 | `runbooks/**` + independent rehearsal                                        | FAKE/TEMPLATE independent rehearsal wave 7                              |
| §13.3 classification / evidence index        | `PHASE-14-CLASSIFICATION-EVIDENCE-INDEX.md`                                  | Provisional; Codex accepts                                              |
| Wave 8 correction packet                     | `WAVE8-CORRECTION-PACKET.md`                                                 | Codex Phase 14 re-verify input                                          |
| MCP toolFilter SDK seam                      | `MCP-TOOLFILTER-SDK-SEAM-IMPLEMENTED.md`; catalog-path tests                | Principal-approved public API landed (local); Codex re-verify           |
| Gate: two plugins / two MCP / separate state | code + templates + tests                                                     | Codex must inspect                                                      |
| Gate: Brain-only conversation hooks          | linkbrain hooks + linkskills prohibition                                     | Codex must inspect                                                      |
| Gate: no live Platform / Lisa mutation       | §7 + §3                                                                      | Absence claim                                                           |
| Gate: no secrets in Git                      | placeholders / SecretRef names                                               | Secret-scan diff                                                        |
| DoD: independent Codex report                | Phase 14                                                                     | Outside Grok — **re-verify now**                                        |
| DoD: four-plan Principal acceptance          | Phase 15                                                                     | Outside Grok                                                            |

---

## 15. Native behavior and active-work statements

- **Native OpenClaw/Lisa behavior:** preserved — plugins default-disabled; **no live Lisa profile mutation** for this package.
- **Work remaining after this corrected handoff:** OpenClaw Grok **execution ownership for Phases 0–13 is provisionally closed** after deficiency corrections 1–8. Independent verification (**Phase 14 re-verification**) remains **active** for OpenClaw Codex. External blockers remain open for any future live work packets. Grok must not self-certify.
- **Sessions:** primary Lisa plan session and Phase 2 feature session moved to `completed/` (2026-07-28 07:57 Asia/Taipei). Orchestrator must refresh `docs/current-status.md` (Orchestrator-only).

---

## Principal instruction (required close)

**Please send this CORRECTED Phase 13 provisional handoff to the OpenClaw Codex planning/verifier agent for Phase 14 re-verification.**

That verifier must:

1. Ignore this document as proof-by-assertion.
2. Inspect actual code, configuration templates, tests, and sanitized evidence listed here — including deficiency corrections 1–8.
3. Assign exactly one of the seven Section 13.3 classifications to every planned item.
4. Issue correction work packets to the original OpenClaw Grok owner for any remaining deficiencies.

**LiNKbrain Codex performs Phase 15 only after all four independent Codex verification reports exist.** Do not start four-plan reconciliation from this provisional Grok handoff alone.

Also requested:

- Keep **PR #38** open; do not merge from this packet. Hosted `openclaw/ci-gate` is green at `0a2e97fe643` (run `30333114926`); re-check if tip advances.
- Fixture-owner countersign is **done** (`FIXTURE-OWNER-SIGNOFF.md`). Platform auth-path remains the open Phase 1 blocker.

---

## 16. Correction wave 2 / 2b changelog (2026-07-28)

| Item                        | Result                                                                                                                                       |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Repin Platform/Brain/Skills | `e845ac17…` / `a3cff6e0…` / `f16103f2…` (`correction_wave: wave-2b-2026-07-28`)                                                              |
| AuthClaims pin (wave 2b historical) | schema `b0397cdf…50fb` + contentHash `6bf49618…b251` (`1.0.0`)                                                                         |
| AuthClaims pin (wave 7 current) | schema `c2e8bc68…dfa1` + contentHash `fb518834…a567` (`1.1.0` / package `0.2.2`)                                                         |
| Brain fixtures              | 17 frozen tools; aggregate `275c1fb7…9a1d` (72 JSON); **`OWNER_COUNTERSIGNED`** at tip `429a7818…`                                           |
| Skills fixtures             | immutable-release + AuthClaims; aggregate `8586d89a…ec96`; **`OWNER_COUNTERSIGNED`** reaffirmed at tip `429a7818…`                           |
| Owner countersign           | **Fixture-owner gate CLOSED** (Brain + Skills). Phase 1 overall still blocked on Platform auth-path. Not Codex / not merge.                  |
| CI repairs                  | typed-hook/runtime-API allowlists; SecretRef matrix; deps/types/lint; OpenGrep harness; SSRF-guard HTTP transports; `docs/docs_map.md` regen |
| Capture durability          | Durable save-before-flush in `capture.ts`; regression `capture.test.ts`                                                                      |
| Capture concurrency         | Per-stream keyed promise chain for enqueue/flush/flushAll; concurrency regressions in `capture.test.ts`                                      |
| Capture/lifecycle timeouts  | Shared `bounded.ts` race-deadline + lock-retain; AbortSignal seams; stalled diagnostics; `bounded.test.ts`                                   |
| Local matrix                | **171/171** re-verified 2026-07-28 18:12 Asia/Taipei                                                                                         |
| Hosted CI                   | **deferred / Principal-waived** (CI redesign) at tip `4fa1e9f7ed0…` (prior green `8e236d2f056…` / `30347356129` superseded as tip claim)     |
| Lisa / Phases 7–12          | Untouched / not started; plugins remain default-disabled                                                                                     |

---

_End of CORRECTED Phase 13 provisional Grok handoff (wave 2b, 2026-07-28)._
