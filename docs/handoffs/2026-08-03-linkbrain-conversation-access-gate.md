# Agent Session Handoff

## Session Metadata

| Field            | Value                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------ |
| Agent identity   | Cursor Local Agent / Grok 4.5 High / Feature                                                           |
| Session ID       | `cursor-local-mac-mini-agents-window-feature-linkbrain-conversation-access-gate-20260803-1737`         |
| Orchestrator key | `cursor-local-mac-mini-desktop-workspace-orchestrator`                                                 |
| Objective        | Enforce fail-closed LiNKbrain `allowConversationAccess===true` for all conversation/data-bearing hooks |
| Scope            | Repo plugin registration filter + tests/docs; no stage/cloud/Lisa/VPS/IDE mutation                     |
| Started          | 2026-08-03 17:37 Asia/Taipei                                                                           |
| Ended            | 2026-08-03 17:45 Asia/Taipei                                                                           |
| Starting branch  | `ocp-linkbrain-live-hook-registration`                                                                 |
| Ending branch    | `ocp-linkbrain-live-hook-registration`                                                                 |
| Starting commit  | `f67957f67a9449d2b0a7f4ef9a39ac54c1ab95dd`                                                             |
| Ending commit    | _(set after commit)_                                                                                   |
| Starting status  | clean tip at HOLD SHA                                                                                  |
| Ending status    | privacy-gate fix committed/pushed                                                                      |

## Summary

Independent Codex audit HOLD: enabled+absent loaded all 11 hooks; enabled+false blocked only core-classified `agent_end` while `message_received` and other data-bearing hooks remained. Fix is a plugin-local registration filter: governed §10.1 conversation/data-bearing hooks register only when `plugins.entries.linkbrain.hooks.allowConversationAccess===true`. Service/worker `gateway_start`/`gateway_stop` and outbox startup remain when explicitly enabled. Preserves pinned-owner fix, default-disabled safety, and Linkskills zero-conversation-hook boundary.

## Files Inspected

- `extensions/linkbrain/index.ts`, `src/lifecycle.ts`, README, PHASE-3-STATUS, envelopes
- `src/plugins/registry-registrars-tools-hooks.ts`, `hook-types.ts` (`isConversationHookName`)
- Prior handoff `docs/handoffs/2026-08-03-linkbrain-live-hook-registration.md`
- Linkskills boundary (three non-conversation hooks)

## Files Created

- `docs/agent-sessions/active/cursor-local-mac-mini-agents-window-feature-linkbrain-conversation-access-gate-20260803-1737.md`
- `docs/handoffs/2026-08-03-linkbrain-conversation-access-gate.md`

## Files Modified

- `extensions/linkbrain/index.ts`
- `extensions/linkbrain/src/lifecycle.ts`
- `extensions/linkbrain/src/envelopes.ts`
- `extensions/linkbrain/api.ts`
- `extensions/linkbrain/README.md`
- `extensions/linkbrain/registered-plugin.test.ts`
- `extensions/linkbrain/plugin-boundary.test.ts`
- `extensions/linkbrain/lifecycle.test.ts`
- `src/plugins/loader.linkbrain-startup-hooks.test.ts`
- `docs/execution/openclawdevelopmentplan01/PHASE-3-STATUS.md`
- `docs/execution/openclawdevelopmentplan01/runbooks/brain-enable-disable-drain.md`

## Files Deleted

- none

## Commands Run

```bash
node scripts/run-vitest.mjs src/plugins/loader.linkbrain-startup-hooks.test.ts \
  extensions/linkbrain/{registered-plugin,plugin-boundary,lifecycle}.test.ts
# → 5 + 20 passed

node scripts/run-vitest.mjs \
  src/plugins/hook-runner-global.compose.test.ts \
  src/plugins/loader.hook-runner-live-view.test.ts \
  src/plugins/loader.linkbrain-startup-hooks.test.ts \
  src/plugins/hook-runner-global.test.ts \
  src/gateway/server-startup-plugins.test.ts \
  extensions/linkbrain/{registered-plugin,plugin-boundary}.test.ts \
  extensions/linkskills/{plugin-boundary,manifest}.test.ts
# → 57 passed (22+20+15)

OPENCLAW_VITEST_MAX_WORKERS=1 node scripts/run-vitest.mjs src/plugins/loader.test.ts \
  -t "conversation typed hooks|allowConversationAccess|unsafe plugin path|channel plugin|bundled plugin trust|discovery"
# → 15 passed | 158 skipped

node scripts/run-vitest.mjs src/plugins/config-state.test.ts src/config/config-misc.test.ts
# → 51 + 90 passed

node scripts/run-vitest.mjs \
  src/agents/mcp-tool-filter-resolver.test.ts \
  src/agents/agent-bundle-mcp-runtime.mcp-tool-filter.plugin-registry.test.ts \
  src/plugins/loader.runtime-registry.test.ts \
  extensions/linkbrain/{manifest,runtime,mcp-tool-filter}.test.ts \
  extensions/linkskills/{manifest,runtime,mcp-tool-filter}.test.ts
# → 58 passed (9+4+45)

./node_modules/.bin/oxfmt <touched files>
git diff --check  # clean
```

Note: full `src/plugins/loader.test.ts` has 4 pre-existing cache-hit failures unrelated to this change (reproduced on clean `f67957f` tip).

Scoped full `pnpm build` skipped as safe: no packaging change; loader tests resolve source when dist absent.

## Decisions

1. **Plugin-local fail-closed filter** — Reason: smallest explicit contract; core `isConversationHookName` remains the generic prompt/LLM set and would not cover Brain `message_received`/compaction/session paths without broadening all bundled plugins. Evidence: audit matrix + §10.1. Impact: Brain-only. Judgment (Carlos-authorized correction).
2. **Service hooks stay ungated** — Reason: preserve harmless worker startup when enabled without conversation access. Judgment.
3. **Do not change core bundled fail-open for generic conversation hooks** — Reason: out of LiNKbrain scope; other bundled plugins may rely on it. Judgment.

## Tests and Verification

- Real-loader matrix: enabled+absent / false / true / disabled — PASS
- Prior hook-pin suites + linkskills boundary — PASS
- Policy/config + conversation loader filter — PASS
- MCP/toolfilter/runtime manifests — PASS
- Full loader cache-hit failures — pre-existing, not introduced

## Problems and Blockers

- Live canary still requires coordinator deploy + stage restart (out of scope)

## Uncommitted Changes

- none after commit

## Risks and Unknowns

- Stage configs that enable linkbrain without `allowConversationAccess=true` will stop receiving capture hooks until the flag is set (intended fail-closed)

## Remaining Work

- Coordinator: deploy SHA → ensure `allowConversationAccess=true` on authorized capture canary → restart `ai.openclaw.lisa-stage` only → prove capture

## Exact Next Action

Coordinator live canary steps in agent final reply.

## Questions for Carlos

- none for the repo fix

## Questions for the Orchestrator or Next Agent

- Confirm stage `openclaw.json` has `plugins.entries.linkbrain.hooks.allowConversationAccess=true` before expecting capture

## Confidence

99% on fail-closed registration contract; live stage proof pending coordinator canary.

## Amendments
