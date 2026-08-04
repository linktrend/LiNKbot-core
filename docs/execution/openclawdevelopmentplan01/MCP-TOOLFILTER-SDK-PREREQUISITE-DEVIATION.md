# SDK prerequisite / plan deviation — managed MCP feature-flag toolFilter seam

**Recorded:** 2026-07-29 07:30 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38)
**Agent:** Cursor Local Agent / Grok 4.5 High (Lisa role)
**Finding:** Phase 14 — connect `mcpRead` / `mcpDiscoveryRead` / `governedExecution` to the authoritative managed-MCP `toolFilter` surface via **supported public OpenClaw APIs**

## Verdict

**No public OpenClaw plugin SDK seam exists** for a plugin to operationally set or update `mcp.servers.<id>.toolFilter` from feature flags at runtime.

Calculating flagged include arrays and logging them, or invoking fake transports when flags are on, is **not** operational control of the managed MCP discovery allowlist. Using `api.runtime.config.mutateConfigFile` to rewrite `mcp.servers` was considered and **rejected** for this wave: it is a generic config-file mutator, not an MCP toolFilter contract; docs state MCP server identity (name + tool filter) stays static; hot flag flips must not persist into operator-owned `openclaw.json`.

**Private internals were not used.**

## Evidence inspected (public / documented)

| Surface | Path | Result |
| ------- | ---- | ------ |
| `OpenClawPluginApi` | `src/plugins/plugin-api.types.ts` | Only MCP register method: `registerMcpServerConnectionResolver` (transport URL/headers; tool surface static) |
| MCP connection contract | `src/plugins/types.mcp-connection.ts` | “Server name/tool surface stay static” |
| SDK overview | `docs/plugins/sdk-overview.md` | Keep MCP identity (name, tool filter) static in `mcp.servers` |
| Runtime selection | `src/agents/agent-bundle-mcp-runtime.ts` | Reads saved `rawServer.toolFilter` only |
| Operator write path | `src/config/mcp-config.ts` `updateConfiguredMcpServerTools` | CLI/`openclaw mcp tools` — **not** plugin-sdk |
| Plugin-sdk entrypoints | `scripts/lib/plugin-sdk-entrypoints.json` | No `setMcpToolFilter` / `registerMcpServerToolFilter` |

## Current OpenClaw consumer behavior (honest)

1. Static §9 allowlists ship in managed MCP templates (`mcp-tool-filter.ts` + `mcp-templates/*`).
2. Plugin flags gate **plugin-local** invoke helpers (`invokeLinkbrainFeatureRead` / `invokeLinkskillsFeatureOp`) and compute aspirational include lists for logging / future resolver wiring.
3. Discovery visibility of tools that remain in static `toolFilter` is therefore **operator-config-owned**, not flag-owned, until a generic SDK seam lands.

## Requested generic SDK prerequisite

**Suggested API name:** `api.registerMcpServerToolFilter` (or `registerMcpToolSelectionResolver`)

**Suggested shape:**

```ts
api.registerMcpServerToolFilter({
  serverName: "linkbrain", // ownership: one plugin per serverName
  resolve: (ctx) => ({
    include?: string[]; // intersected with config toolFilter (prefer intersect)
    exclude?: string[];
  }) | null, // null = omit server tools for this materialization
});
```

**Requirements:**

1. Runs at MCP catalog materialization (same path as `shouldExposeMcpTool`), not only at plugin invoke.
2. Composition: **intersect** with static `mcp.servers.<id>.toolFilter` (operator allowlist remains ceiling).
3. Hot path: process-local / request-scoped; **no** config-file write.
4. Export on `OpenClawPluginApi` + `plugin-sdk/plugin-entry`; contract tests; docs update to “name static; tool selection = config ∩ plugin resolver”.

## Classification guidance for Codex (not self-certify)

Treat “flags operationally control managed MCP toolFilter” as **`BLOCK`** / **`DIFF`** pending the generic SDK prerequisite above. Do not accept logging/fake-invoke as proof of operational MCP control.

## Explicit non-claims

- Not Phase 14 complete
- Not a private backdoor implementation
- No Lisa live mutation; no Platform live contact
- No Phases 7–12
