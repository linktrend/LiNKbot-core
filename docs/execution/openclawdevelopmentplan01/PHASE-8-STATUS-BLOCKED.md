# Phase 8 — Brain Stage Shadow and Write Canary (BLOCKED)

**Recorded:** 2026-07-27 19:17 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Status:** **not started** — blocked on Phase 7 Platform stage sign-off
**Evidence tier rule:** `fake ≠ live`. Phase 6 `fake/integration-local` does **not** satisfy this phase.

## Objective (when unblocked)

Establish Brain first on stage: observation, then bounded writes, then drain,
coordination, and Librarian paths — without claiming automatic canonical
promotion by the originating agent.

## Prerequisites checklist

| #   | Prerequisite                                                                    | Owner                | Cleared?                                |
| --- | ------------------------------------------------------------------------------- | -------------------- | --------------------------------------- |
| 1   | Phase 7 Platform stage readiness signed                                         | LiNKplatform         | **no**                                  |
| 2   | Phase 5 auth path approved (OAuth profile or SecretRef)                         | Platform + OpenClaw  | **no**                                  |
| 3   | Independent stage Brain MCP + ingestion credential refs issued                  | LiNKplatform         | **no**                                  |
| 4   | Stage Brain Gateway health/contract endpoints published                         | LiNKbrain + Platform | **no**                                  |
| 5   | Lisa actor + runtime binding records exist for stage                            | LiNKplatform         | **no**                                  |
| 6   | Brain fixture/contract owner sign-off (or accepted provisional + delta process) | LiNKbrain            | pending                                 |
| 7   | Operator runbooks reviewed (`runbooks/brain-*.md`)                              | OpenClaw ops         | docs ready; rehearsal **not** done live |
| 8   | Change window + named incident owner                                            | Operations           | **no**                                  |
| 9   | Plugins/MCP still default-disabled until sequence step 1                        | OpenClaw             | **yes** (hold)                          |

**Hard stop:** do not begin the enable sequence while any of 1–3 remain uncleared.

## Exact OpenClaw steps when unblocked

Follow plan Phase 8 sequence. Prefer live templates from
`mcp-templates/linkbrain.http.secretref.template.json` or
`linkbrain.oauth.authprofile.template.json` after Platform fills refs.
Use `runbooks/brain-enable-disable-drain.md` and `runbooks/brain-rollback-restart.md`.

1. Copy approved Brain MCP template into the **authorized** Lisa/stage profile only; keep `enabled: false` until probe step.
2. Enable Brain MCP health/contract probes with all actor feature flags **off** (`mcpRead=false`, `captureEnqueue=false`, `captureDrain=false`, `coordinationWrites=false`).
3. Enable `mcpRead` for designated test sessions only.
4. Enable `captureEnqueue` with `captureDrain=false`; inspect local capacity/age.
5. Enable stage `captureDrain` for approved redacted scenarios.
6. Enable `coordinationWrites` for bounded scenarios.
7. Exercise Librarian ingestion/curation paths; do **not** claim automatic canonical promotion.
8. Run every mandatory Brain stage failure/recovery scenario at least once (see runbooks).
9. Observe ≥ three active operating days **and** required event/scenario counts (whichever longer). Counts approved from Phase 6 measurements before the window starts.
10. Record stage evidence packet; obtain Brain, Platform, OpenClaw, and operations acceptance.

Window rule: a Brain failure restarts **only** the Brain window unless shared Platform/OpenClaw risk is proven.

## Evidence minimums (plan)

Successful: reads, loads, append findings, private capture batches,
compaction/reset/end flushes, task start/update/close, handoff create/accept,
duplicate replay, revocation/recovery, restart recovery, queue drain, redaction,
native behavior continuity.

Ordinary event-count thresholds: set from Phase 6 measurements and **approved
before** the window starts.

Label all artifacts `stage/brain-canary` — never reuse `fake/integration-local`
as stage proof.

## Rollback

1. Disable Brain writes (`coordinationWrites=false`, `captureEnqueue=false`).
2. Stop Brain drain (`captureDrain=false`).
3. Disable Brain MCP (`mcp.servers.linkbrain.enabled=false`) and/or plugin as needed.
4. Revoke **stage Brain** credential only if needed (Platform).
5. Preserve Skills state and native OpenClaw.

See `runbooks/brain-rollback-restart.md`.

## Explicit status

| Claim                         | Status                                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Phase 8 started               | **not started**                                                                                                                 |
| Live Lisa Brain enablement    | **blocked**                                                                                                                     |
| Fake QA substitutes for stage | **false** (`fake ≠ live`)                                                                                                       |
| Principal retention approval  | **not required for stage** if stage deletion policy is bounded and documented; **required before production writes** (Phase 11) |
