# Phase 10 — Integrated Stage Soak and Operational Rehearsal (BLOCKED)

**Recorded:** 2026-07-27 19:17 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Status:** **not started** — blocked on Phase 8 + Phase 9 stage exits
**Evidence tier rule:** `fake ≠ live`. Phase 6 integrated **fake** QA is preparation only.

## Objective (when unblocked)

Prove Brain and Skills coexist under **real stage** conditions and that an
operator other than the implementer can recover each domain independently.

## Prerequisites checklist

| #   | Prerequisite                                                                                  | Owner                              | Cleared?                          |
| --- | --------------------------------------------------------------------------------------------- | ---------------------------------- | --------------------------------- |
| 1   | Phase 7 Platform stage readiness signed                                                       | LiNKplatform                       | **no**                            |
| 2   | Phase 8 Brain stage canary exit accepted                                                      | Brain + Platform + OpenClaw + ops  | **no**                            |
| 3   | Phase 9 Skills stage canary exit accepted                                                     | Skills + Platform + OpenClaw + ops | **no**                            |
| 4   | Independent Brain and Skills stage credentials still valid / rotatable                        | LiNKplatform                       | **no**                            |
| 5   | Operator runbooks complete (Brain + Skills enable/disable/drain/rollback/restart + MCP probe) | OpenClaw                           | docs ready; live rehearsal **no** |
| 6   | Named alert owners; sanitized alert templates                                                 | Operations + Platform              | **no**                            |
| 7   | Handoff / dashboard / Program evidence ownership agreed                                       | Orchestrator + Program             | pending                           |
| 8   | No open severity-one privacy/identity/data-loss/native-regression from Phase 8/9              | All domain owners                  | n/a until 8/9                     |

## Exact OpenClaw steps when unblocked

Use `runbooks/` for each control. Do not couple Brain and Skills health.

1. Run approved Brain and Skills workloads **concurrently** on stage.
2. Verify no shared state, credential, correlation payload, or coupled health transition.
3. Rotate Brain and Skills credentials **separately**; confirm the other domain stays healthy.
4. Rehearse (copy-paste runbooks): plugin disable, MCP disable, queue pause, drain resume, dead-letter inspection, credential revocation, Gateway restart.
5. Rehearse Platform service rollback and OpenClaw same-domain rollback **order**.
6. Exercise backup/restore and audit retrieval **without** inspecting private payloads.
7. Verify alerts route to named owners and contain **no** sensitive data.
8. Validate handoff, dashboard, and Program evidence ownership records.
9. Confirm an operator **other than the implementer** can execute the runbooks end-to-end.
10. Record integrated soak packet labeled `stage/integrated-soak`.

## Evidence minimums (plan)

- Integrated mandatory scenarios pass under stage (not fakes).
- Independent enable/disable/drain/rollback/restart proven per domain.
- Credential rotate/revoke isolation proven.
- Runbooks executable by a second operator.
- No open severity-one privacy, identity, data-loss, or native-regression risk.

## Rollback

- Rollback the **affected domain first** (Brain or Skills).
- Rollback shared Platform **only** if evidence proves a shared fault.
- Preserve durable local queues and native OpenClaw.

See `runbooks/brain-rollback-restart.md` and `runbooks/skills-rollback-restart.md`.

## Explicit status

| Claim                               | Status                       |
| ----------------------------------- | ---------------------------- |
| Phase 10 started                    | **not started**              |
| Live integrated soak                | **blocked**                  |
| Phase 6 fake integration = Phase 10 | **false** (`fake ≠ live`)    |
| Production readiness implied        | **false** — still stage only |
