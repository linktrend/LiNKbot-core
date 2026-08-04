# Handoff — ACP wait / re-entry (`sessions_wait`)

- **Date (Asia/Taipei):** 2026-07-31
- **Agent:** Cursor Local Feature (Grok 4.5 High)
- **Session:** `cursor-local-mac-mini-feature-acp-wait-20260731-1504`
- **Branch:** `issue/ocp-acp-wait-reentry`
- **Worktree:** `.worktrees/acp-wait-reentry`
- **Base:** `origin/development` @ `02659b9ac819c126432ae5e4c0b379a7f8ff1bee`

## Objective completed

Generic OpenClaw `sessions_wait` so an isolated cron parent can spawn ACP `mode=run`, park on registry persist wake (no poll, no `sessions_yield`), then continue post-processing in the same turn with deterministic terminal outcomes and exactly-once observation receipts.

## Architecture

**Option A — same-turn park wait (chosen):**

1. New always-available tool `sessions_wait` (not Swarm-gated).
2. Ownership via `requesterSessionKey` / `controllerSessionKey` / swarm wait owner keys.
3. Completes when `endedAt` is set (announce-independent).
4. Wakes via `onSubagentRegistryPersisted` + single deadline timer (no periodic poll).
5. Durable `requesterWaitObservation` on first observation (`firstObservation: true|false`).
6. Collectors stay on `agents_wait`; `sessions_wait` returns `collector_only` for `collect=true`.
7. Cron spawn notes now recommend `sessions_wait` and ban yield/polling.

**Not chosen:** Option B cron post-process re-entry turn (still available later if same-turn park is insufficient after Wave 10 integration).

## Wave 10 overlap

Compared candidate paths vs `origin/development...origin/issue/ocp-openclawdevelopmentplan01`:
`agents-wait`, `run-wait`, `acp-spawn`, `sessions-spawn`, `subagent-registry`, `subagent-announce`, `openclaw-tools`, `cron/isolated`, `sessions_yield`, `delivery-dispatch` — **zero overlap**. Safe to land independently; still must rebase onto Wave 10 / PR #38 head before combined Lisa deploy.

## Files changed

- `src/agents/tools/sessions-wait-tool.ts` (new)
- `src/agents/tools/sessions-wait-tool.test.ts` (new)
- `src/agents/tools/agents-wait-tool.test.ts` (ACP regression)
- `src/agents/subagent-registry.ts` (`observeSubagentRequesterWait`)
- `src/agents/subagent-registry.types.ts` (`requesterWaitObservation`)
- `src/agents/openclaw-tools.ts`, `openclaw-tools.swarm.test.ts`
- `src/agents/tool-catalog.ts`, `tool-catalog.test.ts`, `tool-description-presets.ts`, `tool-display-config.ts`, `core-tool-factory-descriptors.ts`
- `src/agents/subagent-spawn-accepted-note.ts` + cron-note test
- `src/agents/acp-spawn.ts` (cron accepted note)
- `docs/tools/subagents.md`

## Tests run (exact)

```text
OPENCLAW_TEST_FAST=1 node scripts/run-vitest.mjs \
  src/agents/tools/sessions-wait-tool.test.ts \
  src/agents/tools/agents-wait-tool.test.ts \
  src/agents/openclaw-tools.subagents.sessions-spawn.cron-note.test.ts \
  src/agents/openclaw-tools.swarm.test.ts \
  src/agents/tool-catalog.test.ts
```

Result: **passed** (2 shards; sessions_wait 7, agents_wait 12, cron-note / swarm / catalog green). Covers ACP success/fail/timeout/cancel/missing-announce, restart exactly-once, isolated-cron post-process once, no yield, ordinary agents_wait ACP `not_found` regression, sessions_wait always registered.

Also: `pnpm format` on touched TS; `git diff --check` clean.

## Live Lisa / cron

**Untouched.** No `~/.openclaw-lisa` mutation, no cron edits, no deploy/restart, no credentials, no PR, no Bugbot, no Review Ready, no merge/promotion.

Did not edit shared Wave 10 checkout or `issue/ocp-lisa-ops01`.

## Remaining integration requirements

1. Land / rebase onto verified Wave 10 OpenClaw head (PR #38 → `development`) before combined Lisa ops deploy.
2. Lisa ops (`issue/ocp-lisa-ops01`) must allowlist `sessions_wait` on Ship/Pull jobs and use wait instead of yield (personality already bans yield).
3. Do **not** mark Review Ready until Wave 10 integration against that verified head is confirmed.
4. Independent Codex verification of this branch before any live rollout.

## Codex verification checklist

- [ ] Read this handoff + `docs/tools/subagents.md` `sessions_wait` section
- [ ] Confirm no PR #38 / plugin-sdk / auth / MCP core surfaces touched
- [ ] Re-run focused Vitest commands above
- [ ] Confirm `sessions_yield` unused by new wait path
- [ ] Confirm agents_wait still Swarm/collector-only
- [ ] Confirm live Lisa paths untouched
- [ ] After Wave 10 merges: rebase this branch, re-run focused + any combined Lisa ops tests

## Amendment — 2026-07-31 15:25 CST

**What was wrong / incomplete:** Handoff did not record the parallel explore recommendation that preferred extending `agents_wait` and avoiding a new `sessions_wait` tool.

**Corrected decision:** Keep shipped `sessions_wait`. Explore ([Explore ACP wait](068a4f36-419a-4874-b555-2e482ef81df8)) correctly mapped registry/`endedAt`/settle-wake facts and confirmed no plugin-sdk/auth/MCP/PR #38 stop. Its preferred API (widen `agents_wait` + expose outside swarm) was rejected for this branch because:

1. `agents_wait` remains Swarm/collector-only — ACP stays `not_found` there (regression covered).
2. Cron parents must not be forced to enable `tools.swarm` just to wait on ACP.
3. Catalog/profile blast radius for `sessions_wait` is already paid and tested on `3e2abe20a42`.
4. Functional contract matches Option A (park on `onSubagentRegistryPersisted`, no yield/poll, terminal `endedAt` outcomes, exactly-once observation receipt).

**Who corrected:** Cursor Local Feature agent after explore completion. Evidence: explore report + existing branch SHA `3e2abe20a421b7efd74ed1bd0d3c95f710bb733c`. No code rewrite required.
