# SDK prerequisite resolution — managed MCP feature-flag toolFilter seam

**Recorded:** 2026-07-29 Asia/Taipei (wave 9)
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft)
**Authority:** Principal approved the smallest generic public SDK/control-plane seam described by the prior deviation packet. No broader architecture deviation approved.

## Status

**Implemented (local, not Phase-14 certified):** `api.registerMcpServerToolFilter` on `OpenClawPluginApi`.

| Requirement | Evidence |
| ----------- | -------- |
| Public API | `src/plugins/plugin-api.types.ts`; `docs/plugins/sdk-overview.md` |
| Ownership / diagnostics | `src/plugins/registry-registrars-network.ts`; ownership tests |
| Catalog materialization (listTools path) | `src/agents/agent-bundle-mcp-runtime.ts` + `mcp-tool-filter-resolver.ts` |
| Hot update / catalog invalidate | registration generation bump; observed at `getCatalog` |
| No config write | process-local overlay only |
| Operator ceiling | config ∩ plugin (`shouldExposeComposedMcpTool`) |
| Default-deny / rollback | `resolve() => null` omits all tools |
| Brain/Skills wiring | `extensions/linkbrain/index.ts`; `extensions/linkskills/index.ts` |
| Proof flags change exposed tools | `src/agents/agent-bundle-mcp-runtime.mcp-tool-filter.test.ts` |

## Explicit non-claims

- Not Phase 14 / 15 complete
- Not self-certified
- Not merged; hosted CI not polled
- No Lisa live mutation; no Platform live; no Phases 7–12

Supersedes the “no public seam” verdict in the prior deviation packet for this approved narrow API only.
