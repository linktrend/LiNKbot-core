# SDK prerequisite resolution — managed MCP feature-flag toolFilter seam

**Recorded:** 2026-07-29 Asia/Taipei (wave 10 correction)
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft)
**Authority:** Principal approved the smallest generic public SDK/control-plane seam. Wave 10 corrects deny-all metadata, flag wiring, hot invalidation proof, and §13.3 atomic ledger.

## Status

**Implemented (local, not Phase-14 certified):** `api.registerMcpServerToolFilter` + `api.unregisterMcpServerToolFilter` on `OpenClawPluginApi`.

| Requirement                              | Evidence                                                                                  |
| ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| Public API                               | `src/plugins/plugin-api.types.ts`; `docs/plugins/sdk-overview.md`                         |
| Ownership / diagnostics / unregister     | `src/plugins/registry-registrars-network.ts`; ownership tests                             |
| Catalog materialization (listTools path) | `src/agents/agent-bundle-mcp-runtime.ts` + `mcp-tool-filter-resolver.ts`                  |
| Deny-all ≠ unrestricted empty include    | `describeComposedMcpToolFilter` → `{ denyAll: true }`; materialize honors denyAll         |
| Operator ∩ plugin (tools + utilities)    | composition + `serverAllowsMcpUtilityTool` + catalog metadata halves                      |
| Hot update / same-runtime rematerialize  | registration generation bump; Brain/Skills hot catalog test                               |
| No config write                          | process-local overlay only                                                                |
| Default-deny / rollback / removal        | `resolve() => null`; same-owner replace; `unregisterMcpServerToolFilter`                  |
| Brain/Skills four-flag wiring            | `extensions/linkbrain/src/feature-flags.ts`; `extensions/linkskills/src/feature-flags.ts` |
| Proof flags change exposed tools         | `src/agents/agent-bundle-mcp-runtime.mcp-tool-filter.test.ts`                             |

## Explicit non-claims

- Not Phase 14 / 15 complete
- Not self-certified
- Not merged; hosted CI not polled
- No Lisa live mutation; no Platform live; no Phases 7–12
- Owner countersigns not requested in wave 10

Supersedes wave-9 incomplete flag/deny-all/hot-proof notes for this seam.
