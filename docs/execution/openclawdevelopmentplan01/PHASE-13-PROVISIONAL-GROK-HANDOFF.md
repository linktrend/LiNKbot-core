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

> **Provisional.** This handoff does **not** assign the seven Section 13.3 conformance classifications. It does **not** perform Phase 14 or Phase 15. Independent OpenClaw Codex verification (Phase 14) must inspect actual code, tests, and evidence rather than accepting this summary. **Re-verify against this corrected packet**, not the superseded 2026-07-27 provisional alone. **Do not treat `AWAITING_OWNER_COUNTERSIGN` as a passed Phase 1 gate.**

---

## Deficiency corrections 1–8 (2026-07-28 mapping)

| #   | Deficiency (prior provisional / Codex re-check gap)                   | Correction landed                                                                                                              | Evidence                                                                                                       |
| --- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| 1   | Missing hashed Platform/Brain/Skills contract consumption pins        | Pin files under `contracts/` + consumption record                                                                              | `contracts/{platform,brain,skills}/PIN.json`; `PHASE-1-CONTRACT-CONSUMPTION.md`; `contracts/README.md`         |
| 2   | Brain MCP tool names CURRENT vs frozen §9.1 unresolved                | **DECIDED:** OpenClaw keeps frozen §9.1; **will not** alias; Brain must implement §9.1                                         | `BRAIN-TOOL-NAME-DECISION-PACKET.md`                                                                           |
| 3   | Hardcoded `not_configured` transport stubs                            | Configurable modes: `disabled` (default) / `fake` / `http` / `mcp`; `not_configured` removed                                   | `extensions/link{brain,skills}/src/transport.ts`; commit `e88ba95d0a2`                                         |
| 4   | Phase 6 incomplete (coexistence-only; tip proof understated at 13/82) | Full mandatory matrix + perf; tip suite **20 files / 144 tests**; `SKIPPED_PLATFORM_LIVE` items named                          | `PHASE-6-STATUS.md`; `phase6-mandatory-matrix.test.ts`; `phase6-perf-baseline.test.ts`                         |
| 5   | Fixture owner sign-off / aggregate hashes missing                     | Sign-off process with exact aggregates; status **`AWAITING_OWNER_COUNTERSIGN`** (Principal must route to Brain/Skills owners)  | `FIXTURE-OWNER-SIGNOFF.md`; `COUNTERSIGN-REQUEST.md`                                                           |
| 6   | Crabbox/Testbox heavy proof unclear or overclaimable                  | Local `crabbox` binary **missing** / sanity failed; **trusted local fallback** used; **draft PR #38** opened for exact-head CI | PR <https://github.com/linktrend/openclaw_prime/pull/38> ; tip HEAD `048922582e5` (PR opened at `17508f539d7`) |
| 7   | Ambiguity on live Lisa mutation and Phases 7–12                       | Confirmed: **no Lisa live mutation**; **Phases 7–12 not started** (blocked packets only)                                       | §3 / §7 / §9; `PHASE-{7..12}-STATUS-BLOCKED.md`                                                                |
| 8   | Coverage index / provisional handoff stale for re-verification        | This **CORRECTED** handoff; coverage index **without** seven-value classifications; sessions closed                            | this file; `docs/handoffs/2026-07-28-openclawdevelopmentplan01-corrected-phase13.md`                           |

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
| Hosted CI green tip (ci-gate SUCCESS)    | `69bd01a4ddd021160f7e4254b9ca50a0d9732fa4`                                                            |
| Current HEAD (branch tip)                | run `git rev-parse HEAD` after pull                                                                   |
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
| **1** — Contract and fake freeze                       | **OpenClaw-owned deliverables complete** at fake/draft tier + **contract pins** + **fixture sign-off process**. **Blocked** for full Phase 1 exit: Brain/Skills owner countersign (`AWAITING_OWNER_COUNTERSIGN`); Platform auth-path approval.                                           | `PHASE-1-STATUS.md`; `PHASE-1-CONTRACT-CONSUMPTION.md`; `contracts/**`; `FIXTURE-OWNER-SIGNOFF.md`; `BRAIN-TOOL-NAME-DECISION-PACKET.md` |
| **2** — Brain plugin skeleton                          | **Complete** at fake/local tier (default-disabled; no Lisa mutation).                                                                                                                                                                                                                    | `PHASE-2-STATUS.md`; `extensions/linkbrain/**`                                                                                           |
| **3** — Brain lifecycle capture / coordination mapping | **Complete** at fake-backed tier.                                                                                                                                                                                                                                                        | `PHASE-3-STATUS.md`                                                                                                                      |
| **4** — Skills plugin skeleton / structured telemetry  | **Complete** at fake/local tier (no conversation hooks; default-disabled).                                                                                                                                                                                                               | `PHASE-4-STATUS.md`; `extensions/linkskills/**`                                                                                          |
| **5** — Managed MCP integration and authentication     | **Template/filter work complete**. **Blocked** for live MCP wiring: Platform auth packet. Transport adapters land configurable modes (see deficiency #3).                                                                                                                                | `PHASE-5-STATUS.md`; `mcp-templates/**`; transport modules                                                                               |
| **6** — Integrated local and isolated QA               | **Fake-tier matrix complete** — coexistence + mandatory failure/recovery/durability/privacy/isolation/perf against deterministic fakes **passed** (**20 / 144**). Platform-live items **`SKIPPED_PLATFORM_LIVE`**. Crabbox/Testbox heavy suite **not** claimed (trusted local fallback). | `PHASE-6-STATUS.md`; `PHASE-6-PERF-BASELINE.md`                                                                                          |
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
| LiNKplatform | `contracts/platform/PIN.json` | `e845ac17dffac52a501603ad2fafd1b53fef195d` | `platform.auth-claims/1.0.0` schema `b0397cdf…50fb` / contentHash `6bf49618…b251`; `PLATFORM_CONTRACTS_SEMVER=0.2.1` |
| LiNKbrain    | `contracts/brain/PIN.json`    | `a3cff6e0f04ac968c32beacb7bdb1b81a4d77d3f` | `BRAIN_CONTRACT_VERSION=1.0.0`; frozen 17 tools via `frozen-tools.ts` `1e265b20…be26`                                |
| LiNKskills   | `contracts/skills/PIN.json`   | `f16103f23a716d0edeb08a1e82e38608ebd563ea` | `skills.api.v0.1`; schemas aggregate `828ac00d…81d2`; vendored auth-claims matches Platform                          |

Full consumption record: `PHASE-1-CONTRACT-CONSUMPTION.md`.

---

## 3. Brain tool name decision

**OpenClaw keeps frozen plan §9.1 names (17).** Corrected Brain HEAD `a3cff6e…` implements the same surface via `frozen-tools.ts`. OpenClaw will **not** alias. Fixture owner countersign remains **AWAITING_OWNER_COUNTERSIGN** — **not** a passed Phase 1 gate.

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
# Test Files  20 passed (20)
# Tests       144 passed (144)
```

Recorded in `PHASE-6-STATUS.md` (2026-07-28 07:50 Asia/Taipei). Tip status follow-ups: `22717f28bb3`, `6f6887c31ce`.

### Phase 6 full matrix — `SKIPPED_PLATFORM_LIVE` items (named)

1. **Platform audit/correlation rejection** — needs live stage audit API + opaque correlation issuer (Phase 7).
2. **Real Platform credential issuer revoke** — Platform-owned issuer/rotate/expiry evidence (Phase 7); fake auth matrix covers revoked tokens only.

All other mandatory fake-tier scenarios 1–15 + coexistence A–G: **PASS** (see `PHASE-6-STATUS.md`).

### Crabbox / Testbox

| Check                           | Result                                                                                                                                                                                                                                                         |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Local `crabbox` binary          | **Missing** / failed sanity on this host (`crabbox not found`)                                                                                                                                                                                                 |
| Testbox / Crabbox heavy suite   | **Not run**                                                                                                                                                                                                                                                    |
| Proof used                      | **Trusted local fallback** — focused `node scripts/run-vitest.mjs …`                                                                                                                                                                                           |
| Exact-head CI                   | **`openclaw/ci-gate` SUCCESS** at `69bd01a4ddd021160f7e4254b9ca50a0d9732fa4` — CI run <https://github.com/linktrend/openclaw_prime/actions/runs/30322576216> ; gate job <https://github.com/linktrend/openclaw_prime/actions/runs/30322576216/job/90163303523> |
| Local re-verify (wave 2b)       | **2026-07-28 10:07 Asia/Taipei** — `node scripts/run-vitest.mjs test/helpers/link-domain-fakes extensions/linkbrain extensions/linkskills` → **20/144 pass**                                                                                                   |
| OpenGrep (harness + transports) | Local `scripts/run-opengrep.sh --error` → **0 findings** after harness + SSRF-guard fixes                                                                                                                                                                      |

Local 20/144 is **not** a substitute for hosted CI. Hosted proof for Codex: tip `69bd01a4ddd` + CI run `30322576216` (or a later tip that also shows green `openclaw/ci-gate`).

### Historical (superseded as tip claim)

Prior Phase 13 closeout (2026-07-27): 13 files / 82 tests — retained as historical only; **not** the tip proof set after corrections.

---

## 6. Fixture sign-off

| Package                          | Aggregate SHA-256                                                  | Status                                              |
| -------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------- |
| `extensions/linkbrain/fixtures`  | `d539debc7b9d7347c109e7d462fc27a48c28322f0d3d5b85d57f602e843d45fb` | **`AWAITING_OWNER_COUNTERSIGN`** (NOT Phase 1 pass) |
| `extensions/linkskills/fixtures` | `8586d89a4a160987ace45ed4392b78c8a66391940e81eed6bdc098f49404ec96` | **`AWAITING_OWNER_COUNTERSIGN`** (NOT Phase 1 pass) |

Source: `FIXTURE-OWNER-SIGNOFF.md` (exact hashes above). Signature fields blank until owners countersign. Draft fixtures remain non-authoritative for domain conformance.

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

1. Brain owner fixture countersign (`AWAITING_OWNER_COUNTERSIGN`) — Slack/repo search found **no** live signature of aggregate `d539debc…45fb`
2. Skills owner fixture countersign (`AWAITING_OWNER_COUNTERSIGN`) — **no** live signature of aggregate `8586d89a…ec96`
3. Platform auth mechanism + claim propagation approval (for live MCP wiring)
4. Platform stage readiness evidence (Phase 7)
5. Skills Cursor + Codex readiness + certified profiles (immutable-release path corrected; re-verify still pending)
6. Principal Brain production retention / hold approval
7. Production credentials + authorized operator for Lisa-profile mutation
8. Live Librarian / Brain Gateway for scratch finding submission
9. Hosted exact-head CI: **cleared for tip `69bd01a4ddd`** (`openclaw/ci-gate` SUCCESS on run `30322576216`). Re-check gate if tip advances after that SHA.

### Cleared relative to earlier provisional (code evidence only — not Phase 1 exit)

- Corrected Brain HEAD `a3cff6e…` implements frozen §9.1 **17** tools via `frozen-tools.ts` (OpenClaw still will not alias).
- Wave-2b pins Platform/Brain/Skills to latest corrected sibling HEADs; stale pre-correction heads scrubbed.
- `platform.auth-claims/1.0.0` pinned (schema `b0397cdf…50fb` / contentHash `6bf49618…b251`).

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
# expect: 20 files / 144 tests passed
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

| Plan item                                    | Claimed evidence location                                                    | Notes for verifier                                  |
| -------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------- |
| Phase 0 freeze / hashes / ownership          | `PHASE-0-FREEZE-PACKET.md`                                                   | Re-verify plan hash                                 |
| Phase 1 contract pins                        | `contracts/**`, `PHASE-1-CONTRACT-CONSUMPTION.md`                            | Deficiency #1                                       |
| Phase 1 fixtures Brain/Skills                | `extensions/link{brain,skills}/fixtures/**`                                  | Draft; `AWAITING_OWNER_COUNTERSIGN`                 |
| Phase 1 fakes                                | `extensions/link{brain,skills}/fake/**`, `test/helpers/link-domain-fakes/**` | Fake tier                                           |
| Brain tool names §9.1                        | `BRAIN-TOOL-NAME-DECISION-PACKET.md`, allowlists, fixtures                   | Deficiency #2; no OpenClaw alias                    |
| Transport modes                              | `extensions/link{brain,skills}/src/transport.ts`                             | Deficiency #3; no `not_configured`                  |
| Phase 1 auth matrix                          | `PHASE-1-AUTH-COMPATIBILITY-MATRIX.md`                                       | Platform approval pending                           |
| Phase 1 outbox prototype                     | `PHASE-1-OUTBOX-PROTOTYPE-FINDINGS.md`                                       | Design + public API inspection                      |
| Phase 2 Brain skeleton                       | `extensions/linkbrain/**`, `PHASE-2-STATUS.md`                               | Default-disabled                                    |
| Phase 3 lifecycle / capture                  | `lifecycle.test.ts`, `PHASE-3-STATUS.md`                                     | Fake-backed                                         |
| Phase 4 Skills skeleton                      | `extensions/linkskills/**`, `PHASE-4-STATUS.md`                              | Default-disabled                                    |
| Phase 5 MCP templates / filters              | `mcp-templates/**`, `mcp-tool-filter.ts`                                     | `enabled: false`                                    |
| Phase 5 Platform auth gate                   | `PHASE-5-DECISION-PACKET-PLATFORM-AUTH.md`                                   | Blocked                                             |
| Phase 6 full matrix + perf                   | `PHASE-6-STATUS.md`, matrix/perf tests                                       | **20/144**; Deficiency #4                           |
| Phase 6 SKIPPED_PLATFORM_LIVE                | `PHASE-6-STATUS.md` rows named                                               | Audit reject; real issuer revoke                    |
| Phase 6 Crabbox/Testbox                      | —                                                                            | Local missing; trusted local + PR CI; Deficiency #6 |
| Fixture owner sign-off                       | `FIXTURE-OWNER-SIGNOFF.md`                                                   | Deficiency #5                                       |
| Phase 7–12                                   | `PHASE-*-STATUS-BLOCKED.md` / decision packet                                | **Not started**; Deficiency #7                      |
| Phase 13 corrected handoff                   | this file                                                                    | Deficiency #8                                       |
| Operator runbooks (draft)                    | `runbooks/**`                                                                | Not live-rehearsed                                  |
| Gate: two plugins / two MCP / separate state | code + templates + tests                                                     | Codex must inspect                                  |
| Gate: Brain-only conversation hooks          | linkbrain hooks + linkskills prohibition                                     | Codex must inspect                                  |
| Gate: no live Platform / Lisa mutation       | §7 + §3                                                                      | Absence claim                                       |
| Gate: no secrets in Git                      | placeholders / SecretRef names                                               | Secret-scan diff                                    |
| DoD: independent Codex report                | Phase 14                                                                     | Outside Grok — **re-verify now**                    |
| DoD: four-plan Principal acceptance          | Phase 15                                                                     | Outside Grok                                        |

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

- Keep **PR #38** open; do not merge from this packet. Hosted `openclaw/ci-gate` was green at `69bd01a4ddd` (run `30322576216`); re-check if tip advances.
- Route `COUNTERSIGN-REQUEST.md` / `FIXTURE-OWNER-SIGNOFF.md` + `BRAIN-TOOL-NAME-DECISION-PACKET.md` to Brain/Skills owners for **exact** fixture aggregates above.

---

## 16. Correction wave 2 / 2b changelog (2026-07-28)

| Item                        | Result                                                                                                                                       |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Repin Platform/Brain/Skills | `e845ac17…` / `a3cff6e0…` / `f16103f2…` (`correction_wave: wave-2b-2026-07-28`)                                                              |
| AuthClaims pin              | schema `b0397cdf…50fb` + contentHash `6bf49618…b251`                                                                                         |
| Brain fixtures              | 17 frozen tools; aggregates unchanged `d539debc…45fb`                                                                                        |
| Skills fixtures             | immutable-release + AuthClaims; aggregates unchanged `8586d89a…ec96`                                                                         |
| Owner countersign           | **Still `AWAITING_OWNER_COUNTERSIGN`** — not obtained in-session                                                                             |
| CI repairs                  | typed-hook/runtime-API allowlists; SecretRef matrix; deps/types/lint; OpenGrep harness; SSRF-guard HTTP transports; `docs/docs_map.md` regen |
| Local matrix                | **144/144** re-verified 2026-07-28 10:07 Asia/Taipei                                                                                         |
| Hosted CI                   | **`openclaw/ci-gate` SUCCESS** at `69bd01a4ddd` — <https://github.com/linktrend/openclaw_prime/actions/runs/30322576216>                     |
| Lisa / Phases 7–12          | Untouched / not started; plugins remain default-disabled                                                                                     |

---

_End of CORRECTED Phase 13 provisional Grok handoff (wave 2b, 2026-07-28)._
