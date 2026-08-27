# src/gateway/openresponses-http.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1371
- **Language:** TypeScript
- **Symbols:** 30
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 82 | type | OpenResponsesHttpOptions | (private) | - |
| 98 | type | ResponseSessionScope | (private) | - |
| 104 | type | ResponseSessionEntry | (private) | - |
| 111 | fn | normalizeResponseSessionScope | (private) | `function normalizeResponseSessionScope(scope: R...` |
| 121 | fn | resolveResponseSessionAuthSubject | (private) | `function resolveResponseSessionAuthSubject(para...` |
| 138 | fn | createResponseSessionScope | (private) | `function createResponseSessionScope(params: {` |
| 150 | fn | matchesResponseSessionScope | (private) | `function matchesResponseSessionScope(` |
| 161 | fn | pruneExpiredResponseSessions | (private) | `function pruneExpiredResponseSessions(now: numb...` |
| 175 | fn | evictOverflowResponseSessions | (private) | `function evictOverflowResponseSessions() {` |
| 185 | fn | storeResponseSession | (private) | `function storeResponseSession(` |
| 198 | fn | lookupResponseSession | (private) | `function lookupResponseSession(` |
| 246 | fn | writeSseEvent | (private) | `function writeSseEvent(res: ServerResponse, eve...` |
| 251 | type | ResolvedResponsesLimits | (private) | - |
| 258 | fn | resolveResponsesLimits | (private) | `function resolveResponsesLimits(` |
| 282 | fn | extractClientTools | (private) | `function extractClientTools(body: CreateRespons...` |
| 295 | fn | applyToolChoice | (private) | `function applyToolChoice(params: {` |
| 342 | fn | createEmptyUsage | (private) | `function createEmptyUsage(): Usage {` |
| 346 | fn | toUsage | (private) | `function toUsage(` |
| 372 | fn | extractUsageFromResult | (private) | `function extractUsageFromResult(result: unknown...` |
| 382 | type | PendingToolCall | (private) | - |
| 384 | fn | resolveStopReasonAndPendingToolCalls | (private) | `function resolveStopReasonAndPendingToolCalls(m...` |
| 395 | fn | createResponseResource | (private) | `function createResponseResource(params: {` |
| 415 | fn | runResponsesAgentCommand | (private) | `async function runResponsesAgentCommand(params: {` |
| 449 | fn | handleOpenResponsesHttpRequest | pub | `export async function handleOpenResponsesHttpRe...` |
| 524 | fn | markUrlPart | (private) | `const markUrlPart = () => {` |
| 722 | fn | rememberResponseSession | (private) | `const rememberResponseSession = () =>` |
| 920 | fn | unsubscribe | (private) | `let unsubscribe = () => {};` |
| 921 | fn | stopWatchingDisconnect | (private) | `let stopWatchingDisconnect = () => {};` |
| 926 | fn | maybeFinalize | (private) | `const maybeFinalize = () => {` |
| 985 | fn | requestFinalize | (private) | `const requestFinalize = (status: ResponseResour...` |

## Public API

### `handleOpenResponsesHttpRequest`

```
export async function handleOpenResponsesHttpRequest(
```

**Line:** 449 | **Kind:** fn
