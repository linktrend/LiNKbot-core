# Agent Session Handoff

## Session Metadata

| Field            | Value |
| ---------------- | ----- |
| Agent identity   | Cursor Local Agent / Grok 4.5 High / Feature fix lane |
| Session ID       | `cursor-local-ocp-mcp-toolfilter-live-runtime-fix-20260803-1542` |
| Orchestrator key | `cursor-mac-mini-desktop-workspace-orchestrator` |
| Objective        | Fix MCP toolFilter overlay not enforced in live gateway/agent catalogs |
| Scope            | Repository source/tests/docs/handoff only; no Lisa/stage/credentials/cloud |
| Started          | 2026-08-03 15:42 Asia/Taipei |
| Ended            | 2026-08-03 16:01 Asia/Taipei |
| Starting branch  | `dev/cloudcursor/OCP-MCP-TOOLFILTER-LIVE-RUNTIME-FIX` |
| Ending branch    | `dev/cloudcursor/OCP-MCP-TOOLFILTER-LIVE-RUNTIME-FIX` |
| Starting commit  | `1fd5106bca7103a620ffa8206dee978b82b177f2` |
| Ending commit    | `9abadf73676` tip after session closeout docs |
| Starting status  | clean at exact base |
| Ending status    | fix + tests + handoff; ready to push |

## Summary

Plugin `registerMcpServerToolFilter` logged `mcpInclude=7/5` while gateway main-agent catalogs exposed full Brain 17 / Skills 15 because catalog composition read only `getActivePluginRegistry()`. Agent `ensureRuntimePluginsLoaded` / force-full channel-mode loads could replace the active registry while pins kept the gateway overlay snapshot, and missing resolvers fail-opened to the operator ceiling. Fix: compose overlays from `collectLivePluginRegistries()`, bump filter generation on active registry identity change, and treat force-full ensure as compatible with gateway full/prefer-setup so the wider/same-scope gateway registry is reused.

## Files Inspected

- `src/agents/mcp-tool-filter-resolver.ts`
- `src/agents/agent-bundle-mcp-runtime.ts`
- `src/agents/runtime-plugins.ts`
- `src/plugins/loader-runtime-registry.ts`
- `src/plugins/runtime.ts`
- `src/plugins/registry-registrars-network.ts`
- `extensions/linkbrain/index.ts`, `extensions/linkbrain/src/feature-flags.ts`
- `extensions/linkskills/index.ts`, `extensions/linkskills/src/feature-flags.ts`
- Existing MCP tool-filter unit/catalog tests

## Files Created

- `src/agents/agent-bundle-mcp-runtime.mcp-tool-filter.plugin-registry.test.ts`
- `docs/agent-sessions/active/cursor-local-ocp-mcp-toolfilter-live-runtime-fix-20260803-1542.md`
- `docs/handoffs/2026-08-03-ocp-mcp-toolfilter-live-runtime-fix.md`

## Files Modified

- `src/agents/mcp-tool-filter-resolver.ts`
- `src/agents/mcp-tool-filter-resolver.test.ts`
- `src/plugins/runtime.ts`
- `src/plugins/loader-runtime-registry.ts`

## Files Deleted

- none

## Commands Run

```bash
node scripts/run-vitest.mjs \
  src/agents/agent-bundle-mcp-runtime.mcp-tool-filter.plugin-registry.test.ts \
  src/agents/agent-bundle-mcp-runtime.mcp-tool-filter.test.ts \
  src/agents/mcp-tool-filter-resolver.test.ts \
  src/plugins/registry-registrars-network.mcp-tool-filter.test.ts \
  src/plugins/runtime.test.ts \
  extensions/linkbrain/mcp-tool-filter-registration.test.ts \
  extensions/linkskills/mcp-tool-filter-registration.test.ts \
  extensions/linkbrain/registered-plugin.test.ts \
  extensions/linkskills/registered-plugin.test.ts
# → passed (43 tests across shards)

node scripts/run-vitest.mjs \
  src/gateway/server-methods/tools-effective.test.ts \
  src/agents/runtime-plugins.test.ts \
  src/plugins/runtime/standalone-runtime-registry-loader.test.ts
# → passed (35 tests)
```

Local `node_modules` was a worktree symlink to the same-SHA wp0 checkout for proof only (not committed).

## Decisions

1. **Live-registry overlay lookup** — Reason: authorization overlays must remain visible on pinned gateway surfaces after active swap. Evidence: fail-open when active empty. Impact: catalogs intersect operator ∩ plugin even when active was replaced. Judgment (Carlos-authorized fix task).
2. **Generation bump on registry identity change** — Reason: cached catalogs must rematerialize after swaps. Evidence: getCatalog observes generation. Judgment.
3. **force-full ↔ prefer-setup/full compatibility** — Reason: prevent ensure path from rematerializing and dropping non-startup overlays. Evidence: identity reuse in integration test. Judgment.
4. **No callTool re-check in this change** — Catalog exposure is the reported defect; raw MCP probe path intentionally remains operator-ceiling when no live overlays are present. Judgment; optional defense-in-depth follow-up.

## Tests and Verification

- Focused MCP tool-filter + plugin registration suites: PASS
- Gateway tools.effective + runtime-plugins + standalone loader: PASS
- New integration proves: pin+empty-active → Brain 7 / Skills 5; force-full ensure reuses gateway registry; all flags on → full ceilings
- Not tested: live Lisa/runtime, per-flag matrix one-by-one, CLI raw probe process without plugins

## Problems and Blockers

- none for repo fix. Live Lisa deploy/verify out of scope.

## Uncommitted Changes

- This session's fix/tests/docs only (at handoff draft time). Pre-existing: `stash@{0}: On main: wip-auth-unrelated` untouched. Local `node_modules` symlink untracked/ignored.

## Risks and Unknowns

- In-gateway MCP probe that shares the process will now see pin overlays (stricter). CLI probe without plugin registry remains operator-ceiling-only.
- Per-flag expansion proven only as all-off vs all-on in the new integration test (family independence covered by existing extension feature-flag unit tests).

## Remaining Work

- Orchestrator: refresh `docs/current-status.md` after session closeout
- Optional: callTool composed-filter re-check; per-flag catalog matrix

## Exact Next Action

Push `dev/cloudcursor/OCP-MCP-TOOLFILTER-LIVE-RUNTIME-FIX`; Orchestrator refreshes `docs/current-status.md`.

## Questions for Carlos

- none

## Questions for the Orchestrator or Next Agent

- Please refresh dashboard after closeout.

## Confidence

95% that the live catalog fail-open root cause is fixed and regression-covered. Live Lisa confirmation intentionally not run.

## Amendments
