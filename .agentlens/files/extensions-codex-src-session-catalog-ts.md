# extensions/codex/src/session-catalog.ts

[← Back to Module](../modules/extensions-codex/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1353
- **Language:** TypeScript
- **Symbols:** 34
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 114 | fn | boundCatalogSessionId | (private) | `const boundCatalogSessionId = (value: unknown) =>` |
| 124 | type | CodexSessionCatalogRequestSnapshot | (private) | - |
| 133 | fn | createCodexSessionCatalogControlFromRequests | (private) | `function createCodexSessionCatalogControlFromRe...` |
| 229 | fn | createCodexSessionCatalogControl | pub | `export function createCodexSessionCatalogContro...` |
| 235 | fn | getPluginConfig | (private) | `const getPluginConfig = () => params.getPluginC...` |
| 364 | fn | listGatewayHost | (private) | `async function listGatewayHost(params: {` |
| 410 | fn | listCodexSessionCatalog | (private) | `async function listCodexSessionCatalog(params: {` |
| 483 | fn | createCodexSessionCatalogNodeHostCommands | pub | `export function createCodexSessionCatalogNodeHo...` |
| 535 | type | CodexNodeSessionTranscriptParams | (private) | - |
| 541 | fn | readNodeTranscriptParams | (private) | `function readNodeTranscriptParams(value: unknow...` |
| 560 | fn | readBoundedLimit | (private) | `function readBoundedLimit(value: unknown, key: ...` |
| 570 | fn | flattenTranscriptPageDesc | (private) | `function flattenTranscriptPageDesc(page: CodexT...` |
| 575 | fn | readCodexSessionTranscript | (private) | `async function readCodexSessionTranscript(param...` |
| 636 | fn | requireIdleThread | (private) | `function requireIdleThread(thread: CodexThread,...` |
| 655 | fn | adoptionSessionKey | (private) | `function adoptionSessionKey(threadId: string): ...` |
| 660 | fn | isAdoptionSessionKeyForThread | (private) | `function isAdoptionSessionKeyForThread(sessionK...` |
| 664 | type | CodexSupervisionMarker | (private) | - |
| 666 | fn | listAdoptedSessionEntries | (private) | `async function listAdoptedSessionEntries(params: {` |
| 711 | fn | findAdoptedSessionEntry | (private) | `async function findAdoptedSessionEntry(params: {` |
| 720 | class | CodexAdoptionBindingCleanupError | (private) | - |
| 722 | fn | clearCreatedAdoptionBinding | (private) | `async function clearCreatedAdoptionBinding(para...` |
| 764 | fn | matchesPendingAdoptionBinding | (private) | `function matchesPendingAdoptionBinding(` |
| 790 | fn | matchesPendingSupervisionOwner | (private) | `function matchesPendingSupervisionOwner(` |
| 809 | fn | ensurePendingAdoptionBinding | (private) | `async function ensurePendingAdoptionBinding(par...` |
| 871 | fn | createOrReuseAdoptedSession | (private) | `async function createOrReuseAdoptedSession(para...` |
| 983 | fn | continueLocalCodexSessionInner | (private) | `async function continueLocalCodexSessionInner(p...` |
| 1006 | fn | changedError | (private) | `const changedError = () =>` |
| 1071 | fn | continueLocalCodexSession | (private) | `async function continueLocalCodexSession(params: {` |
| 1099 | fn | assertNoPendingSupervisionBranch | (private) | `async function assertNoPendingSupervisionBranch...` |
| 1138 | fn | archiveLocalCodexSession | (private) | `async function archiveLocalCodexSession(params: {` |
| 1183 | fn | createCodexSessionCatalogNodeInvokePolicies | pub | `export function createCodexSessionCatalogNodeIn...` |
| 1198 | fn | toGenericCatalogHost | (private) | `function toGenericCatalogHost(` |
| 1244 | fn | registerCodexSessionCatalog | (private) | `function registerCodexSessionCatalog(params: {` |
| 1256 | fn | mapHost | (private) | `const mapHost = (host: CodexSessionCatalogHost) =>` |

## Public API

### `createCodexSessionCatalogControl`

```
export function createCodexSessionCatalogControl(params: {
```

**Line:** 229 | **Kind:** fn

### `createCodexSessionCatalogNodeHostCommands`

```
export function createCodexSessionCatalogNodeHostCommands(
```

**Line:** 483 | **Kind:** fn

### `createCodexSessionCatalogNodeInvokePolicies`

```
export function createCodexSessionCatalogNodeInvokePolicies(): OpenClawPluginNodeInvokePolicy[] {
```

**Line:** 1183 | **Kind:** fn
