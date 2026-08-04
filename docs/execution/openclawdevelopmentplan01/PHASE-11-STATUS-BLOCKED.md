# Phase 11 — Brain Production Deployment and Canary (BLOCKED)

**Recorded:** 2026-07-27 19:17 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Status:** **not started** — blocked on Principal retention + Platform prod + stage exits
**Evidence tier rule:** `fake ≠ live`; stage ≠ production. Synthetic activity may supplement but **not** replace real Lisa activity.

## Objective (when unblocked)

Deploy Brain production binding with actor flags off, then enable read → bounded
capture → coordination under a Principal-approved retention policy and
owner-approved change window.

## Prerequisites checklist

| #   | Prerequisite                                                                                                                     | Owner                                   | Cleared?       |
| --- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | -------------- |
| 1   | Principal approves Brain **production retention** and hold durations                                                             | Principal                               | **no**         |
| 2   | Platform **production** environment proven (migration, backup/restore, audit, Librarian, secret injection, credential lifecycle) | LiNKplatform                            | **no**         |
| 3   | Production Brain credential issued — least-privilege, distinct from stage and Skills                                             | LiNKplatform                            | **no**         |
| 4   | Phase 8 Brain stage exit accepted                                                                                                | Domain owners                           | **no**         |
| 5   | Phase 10 integrated operational rehearsal accepted                                                                               | Domain owners + ops                     | **no**         |
| 6   | Owner-approved production change and rollback window                                                                             | Operations + OpenClaw                   | **no**         |
| 7   | Authoritative Lisa-profile mutation gate cleared (plan §14.9)                                                                    | Platform + authorized OpenClaw operator | **no**         |
| 8   | Real-activity thresholds approved before window starts                                                                           | Brain + OpenClaw + ops                  | **no**         |
| 9   | Plugins/MCP production Brain remain disabled until sequence                                                                      | OpenClaw                                | **yes** (hold) |

**Hard stop:** no production writes without Principal retention approval.

## Exact OpenClaw steps when unblocked

Production credential refs are Platform-issued names only — never paste secrets
into Git, docs, or argv. Templates under `mcp-templates/` are stage-shaped;
production uses the same structure with **production** SecretRef / authProfile IDs
supplied by Platform (not the stage placeholder names).

1. Deploy service/binding with all Brain actor flags **off**.
2. Validate health and contract (no-secret probes).
3. Enable Brain read (`mcpRead`).
4. Enable bounded capture (`captureEnqueue`, then carefully `captureDrain`).
5. Enable coordination (`coordinationWrites`) for approved scenarios.
6. Monitor queue / latency / privacy / native behavior.
7. Run approved production recovery exercises (see `runbooks/brain-rollback-restart.md`).
8. Complete ≥ three active operating days **plus** adequate **real** Lisa activity (whichever longer). Synthetic may supplement only.
9. Record production evidence labeled `production/brain-canary`; accept independently.

## Evidence minimums (plan)

Brain production evidence accepted independently; no open retention, privacy,
credential, delivery, or native-regression blocker. Real-activity thresholds
cover lifecycle categories exercised by production use.

## Rollback order (plan)

1. Disable Brain writes
2. Stop Brain drain
3. Disable Brain MCP
4. Revoke Brain credential (Platform)
5. Rollback Brain service if required

**Do not touch Skills** unless shared-risk evidence exists.

## Explicit status

| Claim                               | Status                    |
| ----------------------------------- | ------------------------- |
| Phase 11 started                    | **not started**           |
| Principal retention approval        | **not granted**           |
| Live production Brain               | **blocked**               |
| Stage success authorizes production | **false**                 |
| Fake / stage proof = production     | **false** (`fake ≠ live`) |
