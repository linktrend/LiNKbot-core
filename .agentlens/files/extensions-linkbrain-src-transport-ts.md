# extensions/linkbrain/src/transport.ts

[← Back to Module](../modules/extensions-linkbrain-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1267
- **Language:** TypeScript
- **Symbols:** 31
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 50 | fn | mcpCallToolArguments | (private) | `function mcpCallToolArguments(writeParams: {` |
| 64 | type | ManagedMcpServerEntry | (private) | - |
| 87 | type | McpToolSession | (private) | - |
| 96 | type | LinkbrainMcpCallResult | pub | - |
| 100 | type | ResolveMachineTokenAccessFn | (private) | - |
| 106 | type | InvalidateMachineTokenCacheFn | (private) | - |
| 108 | type | ResolveLinkbrainTransportParams | pub | - |
| 125 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 129 | fn | mapHttpStatus | (private) | `function mapHttpStatus(` |
| 173 | fn | isBoundedAuthReissueStatus | (private) | `function isBoundedAuthReissueStatus(status: num...` |
| 177 | fn | isAuthReissueCandidateError | (private) | `function isAuthReissueCandidateError(error: unk...` |
| 188 | fn | createStaticResultTransport | (private) | `function createStaticResultTransport(result: Li...` |
| 196 | fn | createDisabledTransport | (private) | `function createDisabledTransport(): LinkbrainTr...` |
| 206 | fn | createRejectedFakeTransport | (private) | `function createRejectedFakeTransport(safeMessag...` |
| 216 | fn | resolveMachineTokenBearer | (private) | `async function resolveMachineTokenBearer(params: {` |
| 243 | fn | resolveBearerToken | (private) | `async function resolveBearerToken(params: {` |
| 303 | fn | coerceHeaderValue | (private) | `function coerceHeaderValue(value: unknown): str...` |
| 313 | fn | expandEnvTemplate | (private) | `function expandEnvTemplate(value: string, env: ...` |
| 317 | fn | machineTokenBindingsConflict | (private) | `function machineTokenBindingsConflict(` |
| 352 | fn | selectMcpMachineToken | (private) | `function selectMcpMachineToken(` |
| 405 | fn | resolveMcpHeaders | (private) | `async function resolveMcpHeaders(params: {` |
| 526 | fn | readManagedServer | (private) | `function readManagedServer(` |
| 541 | fn | openDefaultMcpSession | (private) | `async function openDefaultMcpSession(` |
| 606 | fn | sseEventSourceFetch | (private) | `const sseEventSourceFetch = (requestUrl: string...` |
| 654 | fn | createHttpTransport | (private) | `function createHttpTransport(params: {` |
| 703 | fn | postOnce | (private) | `const postOnce = async (accessToken: string) => {` |
| 794 | fn | createMcpTransport | (private) | `function createMcpTransport(params: {` |
| 842 | fn | runOnce | (private) | `const runOnce = async (forceRefresh: boolean) => {` |
| 955 | fn | callLinkbrainMcpTool | pub | `export async function callLinkbrainMcpTool(para...` |
| 1070 | fn | createLocalMachineTokenFacadeAdapter | (private) | `function createLocalMachineTokenFacadeAdapter(p...` |
| 1138 | fn | resolveLinkbrainTransport | pub | `export function resolveLinkbrainTransport(` |

## Public API

### `callLinkbrainMcpTool`

```
export async function callLinkbrainMcpTool(params: {
```

**Line:** 955 | **Kind:** fn

### `resolveLinkbrainTransport`

```
export function resolveLinkbrainTransport(
```

**Line:** 1138 | **Kind:** fn
