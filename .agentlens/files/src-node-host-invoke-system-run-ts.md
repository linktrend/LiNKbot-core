# src/node-host/invoke-system-run.ts

[← Back to Module](../modules/src-node-host/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1126
- **Language:** TypeScript
- **Symbols:** 22
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 79 | type | SystemRunInvokeResult | (private) | - |
| 85 | type | SystemRunDeniedReason | (private) | - |
| 95 | type | SystemRunExecutionContext | (private) | - |
| 102 | type | SystemRunParsePhase | (private) | - |
| 125 | type | SystemRunPolicyPhase | (private) | - |
| 165 | type | ExecToolConfig | (private) | - |
| 167 | type | EffectiveSystemRunExecPolicy | (private) | - |
| 176 | fn | warnWritableTrustedDirOnce | (private) | `function warnWritableTrustedDirOnce(message: st...` |
| 183 | fn | normalizeDeniedReason | (private) | `function normalizeDeniedReason(reason: string |...` |
| 198 | fn | resolveAgentExecConfig | (private) | `function resolveAgentExecConfig(` |
| 216 | fn | resolveEffectiveSystemRunExecPolicy | pub | `export async function resolveEffectiveSystemRun...` |
| 255 | fn | resolveSystemRunAutoReviewer | (private) | `async function resolveSystemRunAutoReviewer(par...` |
| 273 | type | HandleSystemRunInvokeOptions | (private) | - |
| 303 | fn | loadSystemRunConfig | (private) | `async function loadSystemRunConfig(opts: Handle...` |
| 311 | fn | sendSystemRunDenied | (private) | `async function sendSystemRunDenied(` |
| 340 | fn | sendSystemRunCompleted | (private) | `async function sendSystemRunCompleted(` |
| 359 | fn | argvArraysMatch | (private) | `function argvArraysMatch(left: readonly string[...` |
| 369 | fn | parseSystemRunPhase | (private) | `async function parseSystemRunPhase(` |
| 552 | fn | evaluateSystemRunPolicyPhase | (private) | `async function evaluateSystemRunPolicyPhase(` |
| 890 | fn | revalidateSystemRunApprovedPathBindings | (private) | `async function revalidateSystemRunApprovedPathB...` |
| 923 | fn | executeSystemRunPhase | (private) | `async function executeSystemRunPhase(` |
| 1115 | fn | handleSystemRunInvoke | pub | `export async function handleSystemRunInvoke(opt...` |

## Public API

### `resolveEffectiveSystemRunExecPolicy`

```
export async function resolveEffectiveSystemRunExecPolicy(params: {
```

**Line:** 216 | **Kind:** fn

### `handleSystemRunInvoke`

```
export async function handleSystemRunInvoke(opts: HandleSystemRunInvokeOptions): Promise<void> {
```

**Line:** 1115 | **Kind:** fn

## Memory Markers

### 🔴 `RULE` (line 1)

> and execution pipeline for approved node-host system.run requests. */

### 🔴 `RULE` (line 1090)

> commit can yield to another invocation or process. Recheck the
