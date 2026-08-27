# src/agents/agent-tools.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1249
- **Language:** TypeScript
- **Symbols:** 13
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 123 | fn | hasExplicitDenyPolicy | (private) | `function hasExplicitDenyPolicy(policy?: { deny?...` |
| 130 | type | GuardContainerMount | (private) | - |
| 135 | fn | readOnlySandboxReadMounts | (private) | `function readOnlySandboxReadMounts(` |
| 165 | fn | resolveSkillReadRoots | (private) | `function resolveSkillReadRoots(skillsSnapshot?:...` |
| 182 | type | BashToolsModule | (private) | - |
| 188 | fn | loadBashToolsModule | (private) | `function loadBashToolsModule(): Promise<BashToo...` |
| 192 | fn | createLazyProcessTool | (private) | `function createLazyProcessTool(defaults?: Proce...` |
| 194 | fn | loadTool | (private) | `const loadTool = async () => {` |
| 214 | fn | resolveProcessToolScopeKey | pub | `export function resolveProcessToolScopeKey(para...` |
| 236 | fn | applyModelProviderToolPolicy | (private) | `function applyModelProviderToolPolicy(` |
| 282 | type | OpenClawCodingToolsOptions | (private) | - |
| 469 | fn | createOpenClawCodingToolsInternal | (private) | `function createOpenClawCodingToolsInternal(opti...` |
| 1246 | fn | createOpenClawCodingTools | pub | `export function createOpenClawCodingTools(optio...` |

## Public API

### `resolveProcessToolScopeKey`

```
export function resolveProcessToolScopeKey(params: {
```

**Line:** 214 | **Kind:** fn

### `createOpenClawCodingTools`

```
export function createOpenClawCodingTools(options?: OpenClawCodingToolsOptions): AnyAgentTool[] {
```

**Line:** 1246 | **Kind:** fn

## Memory Markers

### 🟢 `NOTE` (line 1239)

> Keep canonical (lowercase) tool names here.
