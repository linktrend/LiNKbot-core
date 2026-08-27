# src/agents/agent-bundle-mcp-runtime.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1303
- **Language:** TypeScript
- **Symbols:** 38
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 69 | type | BundleMcpSession | (private) | - |
| 86 | type | SessionlessMcpClient | (private) | - |
| 117 | type | SessionlessResponse | (private) | - |
| 126 | fn | isSessionlessMcpServer | (private) | `function isSessionlessMcpServer(rawServer: unkn...` |
| 137 | fn | sessionlessError | (private) | `function sessionlessError(response: Sessionless...` |
| 141 | fn | createSessionlessMcpClient | (private) | `function createSessionlessMcpClient(` |
| 151 | fn | failPending | (private) | `const failPending = (error: unknown) => {` |
| 216 | fn | resultArray | (private) | `const resultArray = async (` |
| 301 | type | ListedTool | (private) | - |
| 311 | type | BundleMcpTestState | (private) | - |
| 313 | fn | getBundleMcpTestState | (private) | `function getBundleMcpTestState(): BundleMcpTest...` |
| 324 | type | McpServerBackoffState | (private) | - |
| 331 | fn | connectWithTimeout | (private) | `async function connectWithTimeout(` |
| 396 | fn | redactErrorUrls | (private) | `function redactErrorUrls(error: unknown): string {` |
| 400 | fn | listAllTools | (private) | `async function listAllTools(client: Client, tim...` |
| 412 | fn | isMcpMethodNotFoundError | (private) | `function isMcpMethodNotFoundError(error: unknow...` |
| 420 | fn | listAllToolsBestEffort | (private) | `async function listAllToolsBestEffort(params: {` |
| 435 | fn | hasConfiguredMcpRequestTimeout | (private) | `function hasConfiguredMcpRequestTimeout(rawServ...` |
| 449 | fn | getCatalogListTimeoutMs | (private) | `function getCatalogListTimeoutMs(rawServer: unk...` |
| 458 | fn | setBundleMcpCatalogListTimeoutMsForTest | (private) | `function setBundleMcpCatalogListTimeoutMsForTes...` |
| 465 | fn | setBundleMcpDisposeTimeoutMsForTest | (private) | `function setBundleMcpDisposeTimeoutMsForTest(ti...` |
| 474 | fn | buildMcpClientCapabilities | (private) | `function buildMcpClientCapabilities(mcpAppsEnab...` |
| 484 | fn | buildMcpClientOptions | (private) | `function buildMcpClientOptions(mcpAppsEnabled: ...` |
| 488 | fn | listAllResources | (private) | `async function listAllResources(client: Client,...` |
| 500 | fn | listAllPrompts | (private) | `async function listAllPrompts(client: Client, t...` |
| 512 | fn | normalizeStringList | (private) | `function normalizeStringList(value: unknown): s...` |
| 520 | fn | normalizeToolUiVisibility | (private) | `function normalizeToolUiVisibility(value: unkno...` |
| 530 | fn | getMcpToolSelection | (private) | `function getMcpToolSelection(rawServer: unknown...` |
| 540 | fn | summarizeServerCapabilities | (private) | `function summarizeServerCapabilities(capabiliti...` |
| 553 | fn | settleWithin | (private) | `async function settleWithin(promise: Promise<un...` |
| 573 | fn | disposeSession | (private) | `async function disposeSession(session: BundleMc...` |
| 600 | fn | createDisposedError | (private) | `function createDisposedError(sessionId: string)...` |
| 604 | fn | createSessionMcpRuntime | pub | `export function createSessionMcpRuntime(params: {` |
| 646 | fn | recordServerToolFailure | (private) | `const recordServerToolFailure = (serverName: st...` |
| 681 | fn | failIfDisposed | (private) | `const failIfDisposed = () => {` |
| 751 | fn | inFlight | (private) | `const inFlight = (async () => {` |
| 817 | type | ServerResult | (private) | - |
| 1291 | fn | sizes | (private) | `const sizes = (` |

## Public API

### `createSessionMcpRuntime`

```
export function createSessionMcpRuntime(params: {
```

**Line:** 604 | **Kind:** fn
