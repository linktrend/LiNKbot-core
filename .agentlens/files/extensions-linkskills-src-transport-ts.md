# extensions/linkskills/src/transport.ts

[← Back to Module](../modules/extensions-linkskills-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1465
- **Language:** TypeScript
- **Symbols:** 34
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 45 | type | ManagedMcpServerEntry | (private) | - |
| 68 | type | McpToolSession | (private) | - |
| 77 | type | LinkskillsMcpCallResult | pub | - |
| 83 | type | ResolveMachineTokenAccessFn | (private) | - |
| 89 | type | InvalidateMachineTokenCacheFn | (private) | - |
| 91 | type | ResolveLinkskillsTransportParams | pub | - |
| 110 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 114 | fn | mapHttpStatus | (private) | `function mapHttpStatus(` |
| 158 | fn | isBoundedAuthReissueStatus | (private) | `function isBoundedAuthReissueStatus(status: num...` |
| 162 | fn | isAuthReissueCandidateError | (private) | `function isAuthReissueCandidateError(error: unk...` |
| 173 | fn | createStaticResultTransport | (private) | `function createStaticResultTransport(result: Li...` |
| 181 | fn | createDisabledTransport | (private) | `function createDisabledTransport(): LinkskillsT...` |
| 191 | fn | createRejectedFakeTransport | (private) | `function createRejectedFakeTransport(safeMessag...` |
| 201 | fn | resolveMachineTokenBearer | (private) | `async function resolveMachineTokenBearer(params: {` |
| 228 | fn | resolveBearerToken | (private) | `async function resolveBearerToken(params: {` |
| 288 | fn | coerceHeaderValue | (private) | `function coerceHeaderValue(value: unknown): str...` |
| 298 | fn | expandEnvTemplate | (private) | `function expandEnvTemplate(value: string, env: ...` |
| 302 | fn | machineTokenBindingsConflict | (private) | `function machineTokenBindingsConflict(` |
| 337 | fn | selectMcpMachineToken | (private) | `function selectMcpMachineToken(` |
| 390 | fn | resolveMcpHeaders | (private) | `async function resolveMcpHeaders(params: {` |
| 511 | fn | readManagedServer | (private) | `function readManagedServer(` |
| 526 | fn | openDefaultMcpSession | (private) | `async function openDefaultMcpSession(` |
| 591 | fn | sseEventSourceFetch | (private) | `const sseEventSourceFetch = (requestUrl: string...` |
| 647 | fn | buildLinkskillsHttpOperationUrl | pub | `export function buildLinkskillsHttpOperationUrl...` |
| 702 | fn | buildLinkskillsHttpPolicy | (private) | `function buildLinkskillsHttpPolicy(endpoint: st...` |
| 714 | fn | postLinkskillsHttpOperation | (private) | `async function postLinkskillsHttpOperation(para...` |
| 749 | fn | createHttpTransport | (private) | `function createHttpTransport(params: {` |
| 797 | fn | postOnce | (private) | `const postOnce = async (accessToken: string) => {` |
| 880 | fn | createMcpTransport | (private) | `function createMcpTransport(params: {` |
| 922 | fn | runOnce | (private) | `const runOnce = async (forceRefresh: boolean) => {` |
| 1034 | fn | callLinkskillsHttpTool | pub | `export async function callLinkskillsHttpTool(pa...` |
| 1158 | fn | callLinkskillsMcpTool | pub | `export async function callLinkskillsMcpTool(par...` |
| 1271 | fn | createLocalMachineTokenFacadeAdapter | (private) | `function createLocalMachineTokenFacadeAdapter(p...` |
| 1339 | fn | resolveLinkskillsTransport | pub | `export function resolveLinkskillsTransport(` |

## Public API

### `buildLinkskillsHttpOperationUrl`

```
export function buildLinkskillsHttpOperationUrl(skillsEndpoint: string, operation: string): URL {
```

**Line:** 647 | **Kind:** fn

### `callLinkskillsHttpTool`

```
export async function callLinkskillsHttpTool(params: {
```

**Line:** 1034 | **Kind:** fn

### `callLinkskillsMcpTool`

```
export async function callLinkskillsMcpTool(params: {
```

**Line:** 1158 | **Kind:** fn

### `resolveLinkskillsTransport`

```
export function resolveLinkskillsTransport(
```

**Line:** 1339 | **Kind:** fn
