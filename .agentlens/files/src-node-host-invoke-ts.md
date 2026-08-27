# src/node-host/invoke.ts

[← Back to Module](../modules/src-node-host/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1105
- **Language:** TypeScript
- **Symbols:** 46
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 90 | type | SystemWhichParams | (private) | - |
| 94 | type | McpToolsCallParams | (private) | - |
| 100 | type | SystemExecApprovalsSetParams | (private) | - |
| 105 | type | SystemRunPrepareParams | (private) | - |
| 115 | type | SystemRunPrepareEnv | (private) | - |
| 125 | fn | resolveNodeSkillCwdParam | (private) | `function resolveNodeSkillCwdParam<T extends { c...` |
| 135 | fn | buildEnvOverrideRejectionMessage | (private) | `function buildEnvOverrideRejectionMessage(param...` |
| 151 | fn | buildSystemRunPrepareCoverageEnv | (private) | `function buildSystemRunPrepareCoverageEnv(param...` |
| 180 | fn | buildSystemRunAllowAlwaysCoverage | (private) | `async function buildSystemRunAllowAlwaysCoverag...` |
| 231 | type | ExecApprovalsSnapshot | (private) | - |
| 240 | fn | resolveExecSecurity | (private) | `function resolveExecSecurity(value?: string): E...` |
| 244 | fn | isCmdExeInvocation | (private) | `function isCmdExeInvocation(argv: string[]): bo...` |
| 253 | fn | resolveExecAsk | (private) | `function resolveExecAsk(value?: string): ExecAsk {` |
| 258 | fn | sanitizeEnv | (private) | `function sanitizeEnv(overrides?: Record<string,...` |
| 262 | fn | truncateOutput | (private) | `function truncateOutput(raw: string, maxChars: ...` |
| 269 | fn | redactExecApprovals | (private) | `function redactExecApprovals(file: ExecApproval...` |
| 277 | fn | requireExecApprovalsBaseHash | (private) | `function requireExecApprovalsBaseHash(` |
| 304 | fn | clarifyNodeExecCwdSpawnError | (private) | `function clarifyNodeExecCwdSpawnError(` |
| 332 | fn | runCommand | (private) | `async function runCommand(` |
| 373 | fn | resolveEnvPath | (private) | `function resolveEnvPath(env?: Record<string, st...` |
| 383 | fn | resolveExecutable | (private) | `function resolveExecutable(bin: string, env?: R...` |
| 411 | fn | handleSystemWhich | (private) | `async function handleSystemWhich(params: System...` |
| 423 | fn | buildExecEventPayload | (private) | `function buildExecEventPayload(payload: ExecEve...` |
| 435 | fn | sendExecFinishedEvent | (private) | `async function sendExecFinishedEvent(` |
| 460 | fn | runViaMacAppExecHost | (private) | `async function runViaMacAppExecHost(params: {` |
| 472 | fn | sendJsonPayloadResult | (private) | `async function sendJsonPayloadResult(` |
| 483 | fn | sendMcpPayloadResult | (private) | `async function sendMcpPayloadResult(` |
| 491 | fn | sendRawPayloadResult | (private) | `async function sendRawPayloadResult(` |
| 502 | fn | sendErrorResult | (private) | `async function sendErrorResult(` |
| 514 | fn | sendInvalidRequestResult | (private) | `async function sendInvalidRequestResult(` |
| 522 | fn | classifyExecApprovalsStorageError | (private) | `function classifyExecApprovalsStorageError(err:...` |
| 528 | fn | sendExecApprovalsStorageErrorResult | (private) | `async function sendExecApprovalsStorageErrorRes...` |
| 537 | fn | handleInvoke | pub | `export async function handleInvoke(` |
| 564 | fn | dispatchInvoke | (private) | `async function dispatchInvoke(` |
| 839 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 843 | fn | decodeMcpToolsCallParams | (private) | `function decodeMcpToolsCallParams(raw?: string ...` |
| 863 | type | McpInvokeContentBlock | (private) | - |
| 867 | fn | normalizeMcpContentBlock | (private) | `function normalizeMcpContentBlock(block: unknow...` |
| 874 | fn | serializedJsonBytes | (private) | `function serializedJsonBytes(value: unknown): n...` |
| 879 | fn | boundMcpToolResultPayload | (private) | `function boundMcpToolResultPayload(result: {` |
| 965 | fn | mcpToolErrorMessage | (private) | `function mcpToolErrorMessage(result: { content:...` |
| 977 | fn | handleMcpToolsCall | (private) | `async function handleMcpToolsCall(` |
| 1018 | fn | decodeParams | (private) | `function decodeParams<T>(raw?: string | null): T {` |
| 1029 | fn | sendInvokeResult | (private) | `async function sendInvokeResult(` |
| 1046 | fn | buildNodeInvokeResultParams | (private) | `function buildNodeInvokeResultParams(` |
| 1086 | fn | sendNodeEvent | (private) | `async function sendNodeEvent(client: NodeHostCl...` |

## Public API

### `handleInvoke`

```
export async function handleInvoke(
```

**Line:** 537 | **Kind:** fn
