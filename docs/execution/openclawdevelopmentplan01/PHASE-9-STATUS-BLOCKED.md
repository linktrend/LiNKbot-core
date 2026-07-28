# Phase 9 — Skills Stage Canary (BLOCKED)

**Recorded:** 2026-07-27 19:17 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Status:** **not started** — blocked on Phase 7 + Skills Cursor/Codex readiness
**Evidence tier rule:** `fake ≠ live`. Lisa must **not** substitute for Cursor/Codex proofs.

## Objective (when unblocked)

Establish governed Skills use on stage after cross-consumer readiness
prerequisites pass: discovery, immutable release retrieval, bounded execution,
telemetry enqueue/drain, feedback/trace candidates with zero conversation content.

## Prerequisites checklist

| #   | Prerequisite                                                     | Owner                             | Cleared?                          |
| --- | ---------------------------------------------------------------- | --------------------------------- | --------------------------------- |
| 1   | Phase 7 Platform stage readiness signed                          | LiNKplatform                      | **no**                            |
| 2   | Phase 8 Brain stage exit accepted (Brain-first sequencing)       | Brain + Platform + OpenClaw + ops | **no** (Phase 8 not started)      |
| 3   | Skills **Cursor** readiness gate recorded                        | LiNKskills + Cursor owners        | **no**                            |
| 4   | Skills **Codex** readiness gate recorded                         | LiNKskills + Codex owners         | **no**                            |
| 5   | Immutable Skill bundles + certified execution profiles published | LiNKskills                        | **no**                            |
| 6   | Phase 5 auth path approved for Skills                            | Platform + OpenClaw               | **no**                            |
| 7   | Independent stage Skills MCP + plugin credential refs issued     | LiNKplatform                      | **no**                            |
| 8   | Stage Skills Gateway health/contract endpoints published         | LiNKskills + Platform             | **no**                            |
| 9   | Operator runbooks reviewed (`runbooks/skills-*.md`)              | OpenClaw ops                      | docs ready; live rehearsal **no** |
| 10  | Plugins/MCP Skills entries remain disabled until sequence        | OpenClaw                          | **yes** (hold)                    |

**Hard stop:** Lisa may not be used to substitute for Cursor/Codex readiness
(plan Phase 9 / gate §14.7).

## Exact OpenClaw steps when unblocked

Prefer live templates from `mcp-templates/linkskills.http.secretref.template.json`
or `linkskills.oauth.authprofile.template.json`. Use
`runbooks/skills-enable-disable-drain.md` and `runbooks/skills-rollback-restart.md`.

1. Copy approved Skills MCP template into the authorized profile; keep `enabled: false` until probe.
2. Enable Skills health and discovery against stage with actor execution flags **off** (`mcpDiscoveryRead` may be enabled for discovery-only after health; `governedExecution=false`, `telemetryEnqueue=false`, `telemetryDrain=false`).
3. Prove exact immutable release retrieval and certified profile compatibility.
4. Enable bounded `governedExecution` for approved scenarios.
5. Enable `telemetryEnqueue`, then `telemetryDrain`.
6. Exercise feedback and trace-candidate submission **without** raw conversation content.
7. Run every mandatory Skills stage failure/recovery scenario at least once.
8. Observe ≥ three active operating days **and** required run/event counts (whichever longer).
9. Record stage evidence; Skills, Platform, OpenClaw, and operations owners accept **non-prompt, execution-backed** proof.

Window rule: a Skills failure restarts **only** the Skills window unless shared risk is proven.

## Evidence minimums (plan)

list/search/describe/fragment/release; run start/update/complete/fail; tool
resolve/invoke; input/output validation; feedback; trace candidate; hash
mismatch rejection; profile mismatch rejection; credential revocation/recovery;
restart recovery; queue drain; **zero prohibited fields** (no conversation/Brain
payload leakage).

Label artifacts `stage/skills-canary`. Never cite fake suites as stage proof.

## Rollback

1. Disable Skills execution (`governedExecution=false`).
2. Stop Skills telemetry drain (`telemetryDrain=false`; optionally stop enqueue).
3. Disable Skills MCP / plugin as needed.
4. Revoke **stage Skills** credential if needed (Platform).
5. Leave Brain and native OpenClaw unchanged.

See `runbooks/skills-rollback-restart.md`.

## Explicit status

| Claim                                  | Status                    |
| -------------------------------------- | ------------------------- |
| Phase 9 started                        | **not started**           |
| Cursor/Codex readiness for Lisa Skills | **not recorded**          |
| Live Lisa Skills enablement            | **blocked**               |
| Fake QA substitutes for stage          | **false** (`fake ≠ live`) |
