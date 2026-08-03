# Agent Session Handoff

## Session Metadata

| Field            | Value                                                                      |
| ---------------- | -------------------------------------------------------------------------- |
| Agent identity   | Cursor Local Agent / Grok 4.5 High / Feature fix lane                      |
| Session ID       | `cursor-local-ocp-mcp-toolfilter-live-runtime-fix-20260803-1542`           |
| Orchestrator key | `cursor-mac-mini-desktop-workspace-orchestrator`                           |
| Objective        | Fix MCP toolFilter overlay not enforced in live gateway/agent catalogs     |
| Scope            | Repository source/tests/docs/handoff only; no Lisa/stage/credentials/cloud |
| Started          | 2026-08-03 15:42 Asia/Taipei                                               |
| Ended            | 2026-08-03 16:01 Asia/Taipei                                               |
| Starting branch  | `dev/cloudcursor/OCP-MCP-TOOLFILTER-LIVE-RUNTIME-FIX`                      |
| Ending branch    | `dev/cloudcursor/OCP-MCP-TOOLFILTER-LIVE-RUNTIME-FIX`                      |
| Starting commit  | `1fd5106bca7103a620ffa8206dee978b82b177f2`                                 |
| Ending commit    | `3f158ee4f3e6faa61966081ad9b45e8540ff9f22`                                 |
| Starting status  | clean at exact base                                                        |
| Ending status    | fail-closed live-claim binding + loader compatibility + regressions pushed |

## Summary

Plugin `registerMcpServerToolFilter` logged `mcpInclude=7/5` while gateway main-agent catalogs exposed full Brain 17 / Skills 15 because catalog composition read only `getActivePluginRegistry()`. Agent `ensureRuntimePluginsLoaded` / force-full channel-mode loads could replace the active registry while pins kept the gateway overlay snapshot, and missing resolvers fail-opened to the operator ceiling.

Fix layers: (1) loader cache compatibility so force-full ensure reuses gateway prefer-setup/full registries; (2) live-claim resolver binding — active wins, else unique pin gap-fill, else omit on distinct competing claims (not silent first-wins); (3) bump MCP tool-filter generation on active identity change and pin/release surface installs so warm catalogs rematerialize.

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

### 2026-08-03 16:10 Asia/Taipei — fail-closed live-claim binding (continuation)

Independent failure and audit: `ensureStandaloneRuntimePluginRegistryLoaded` replaced gateway under force-full channel-mode drift; blind `collectLivePluginRegistries` active-first first-wins was unsafe (cross-workspace bleed, silent duplicate serverName, stale catalogs on pin/release).

Corrected policy (implementation judgment within Carlos-authorized fix lane):

1. **Loader cache compatibility kept** — `forceFullRuntimeForChannelPlugins` treat as compatible with gateway `prefer-setup` / `full` (+ prefer-built via existing gateway-bindable path) so ensure reuses the gateway registry identity.
2. **Resolver binding replaced silent first-wins** — active claim wins when present; else exactly one unique pin claim (same `pluginId` + resolve ref) gap-fills; else distinct competing claims **omit/deny-all** (never operator-ceiling-only).
3. **Generation bumps** — on active identity change and on every real pin/release via `installSurfaceRegistry`; test reset clears generation.
4. **Regression coverage expanded** — real `ensureRuntimePluginsLoaded` reuse, warm catalog rematerialize on pin release, ambiguous pin fail-closed, loader force-full compatibility unit, runtime pin/release generation bump.

Ending tip after continuation: `3f158ee4f3e6faa61966081ad9b45e8540ff9f22`.

Targeted proof (continuation):
`node scripts/test-projects.mjs` on plugin-registry + mcp-tool-filter agent/runtime + resolver + registrar + loader.runtime-registry + runtime → **44 passed**.
Broader: runtime-plugins, channel-pin, standalone/runtime-registry-loader, active-runtime-registry, agent-bundle-mcp-runtime → **135 passed** (8+46+74+7).

Residual risks: process-global registry state (no true per-workspace pin map); active claim still preferred over stale pins by design; live Lisa not exercised.

### 2026-08-03 16:19 Asia/Taipei — reject active-plus-pin multi-registry (Carlos-directed)

What was wrong: prior amendments claimed the best fix was process-global live-claim binding (active + unique pin gap-fill / ambiguous omit) via `collectLivePluginRegistries`.

Corrected fact: that architecture is rejected. Authoritative path is:

1. Keep `getActivePluginRegistry()` as the sole MCP toolFilter lookup surface.
2. Keep loader `forceFullRuntimeForChannelPlugins` compatibility so agent ensure reuses the gateway registry identity.
3. Set linkbrain/linkskills `activation.onStartup: true` while preserving `enabledByDefault: false`, so explicitly enabled installs stay in the startup/active registry; disabled installs remain absent.
4. Remove cross-registry ambiguity/gap-fill resolver logic and its tests; remove pin/release generation bumps that existed only for that claim set.

Evidence: Carlos instruction on this branch; restored resolver matches pre-`20150f3c1d6` active-only lookup; startup planning + ensure/catalog integration green.

Who corrected: Cursor Local Agent (Grok 4.5 High) continuing the same feature lane.

Ending tip after this correction is recorded after commit/push.
