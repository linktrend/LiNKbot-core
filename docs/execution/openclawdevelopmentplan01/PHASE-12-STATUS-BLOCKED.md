# Phase 12 — Skills Production Deployment and Canary (BLOCKED)

**Recorded:** 2026-07-27 19:17 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Status:** **not started** — blocked on Skills stage exit, Cursor/Codex readiness, integrated rehearsal, Platform prod
**Evidence tier rule:** `fake ≠ live`; stage ≠ production. Evidence must be **execution-backed**, not prompt-only.

## Objective (when unblocked)

Deploy Skills production binding with actor flags off, then enable discovery →
bounded governed execution → telemetry under certified profiles and an approved
change window, with Brain left healthy and independent.

## Prerequisites checklist

| #   | Prerequisite                                                                   | Owner                                   | Cleared? |
| --- | ------------------------------------------------------------------------------ | --------------------------------------- | -------- |
| 1   | Phase 9 Skills stage exit accepted                                             | Skills + Platform + OpenClaw + ops      | **no**   |
| 2   | Skills Cursor readiness still recorded / current                               | LiNKskills + Cursor                     | **no**   |
| 3   | Skills Codex readiness still recorded / current                                | LiNKskills + Codex                      | **no**   |
| 4   | Phase 10 integrated rehearsal accepted                                         | Domain owners + ops                     | **no**   |
| 5   | Platform production readiness proven                                           | LiNKplatform                            | **no**   |
| 6   | Immutable bundle publication + certified execution profiles for production     | LiNKskills                              | **no**   |
| 7   | Production Skills credential issued — distinct from stage and Brain            | LiNKplatform                            | **no**   |
| 8   | Phase 11 Brain production healthy (Brain-first; Skills must not regress Brain) | Brain + ops                             | **no**   |
| 9   | Approved production change window                                              | Operations + OpenClaw                   | **no**   |
| 10  | Authoritative Lisa-profile mutation gate cleared for Skills                    | Platform + authorized OpenClaw operator | **no**   |
| 11  | Real-activity thresholds approved before window starts                         | Skills + OpenClaw + ops                 | **no**   |

## Exact OpenClaw steps when unblocked

Use production SecretRef / authProfile IDs from Platform (never commit values).
Structure mirrors `mcp-templates/linkskills.*.json` with production IDs.
Controls: `runbooks/skills-enable-disable-drain.md`,
`runbooks/skills-rollback-restart.md`.

1. Deploy service/binding with all Skills actor flags **off**.
2. Validate health and contract.
3. Enable discovery (`mcpDiscoveryRead`).
4. Enable bounded `governedExecution`.
5. Enable telemetry (`telemetryEnqueue`, then `telemetryDrain`).
6. Monitor privacy / hash / profile / queue / native behavior.
7. Run approved recovery exercises.
8. Complete ≥ three active operating days **plus** adequate **real** activity (whichever longer).
9. Record production evidence labeled `production/skills-canary` — execution-backed; zero conversation/Brain payload leakage; independent rollback proven.

## Evidence minimums (plan)

Execution-backed Skills production evidence; zero conversation/Brain payload
leakage; independent rollback proven; Brain remains enabled if healthy.

## Rollback order (plan)

1. Disable Skills execution
2. Stop Skills telemetry drain
3. Disable Skills MCP
4. Revoke Skills credential (Platform)
5. Rollback Skills service if required

**Brain remains enabled if healthy.**

## Explicit status

| Claim                                   | Status                           |
| --------------------------------------- | -------------------------------- |
| Phase 12 started                        | **not started**                  |
| Cursor/Codex readiness                  | **not recorded** for Lisa Skills |
| Live production Skills                  | **blocked**                      |
| Fake / stage / prompt-only = production | **false** (`fake ≠ live`)        |
| Brain touched during Skills rollback    | **only if shared-risk evidence** |
