# extensions/copilot/harness.ts

[← Back to Module](../modules/extensions-copilot/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1134
- **Language:** TypeScript
- **Symbols:** 36
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 36 | interface | CreateCopilotAgentHarnessOptions | (private) | - |
| 45 | interface | TrackedSession | (private) | - |
| 65 | interface | CopilotHistoryCompactResult | (private) | - |
| 80 | interface | CopilotHistoryCompactSession | (private) | - |
| 91 | type | CopilotSessionBinding | pub | - |
| 102 | type | LegacyCopilotSessionBinding | (private) | - |
| 109 | type | CopilotAttemptSessionBinding | (private) | - |
| 110 | type | DeferredCompactionCleanupOutcome | (private) | - |
| 111 | type | DeferredCompactionCleanup | (private) | - |
| 116 | type | CopilotSessionBindingStore | (private) | - |
| 121 | type | CopilotSessionAuth | (private) | - |
| 126 | fn | sessionAuthFields | (private) | `function sessionAuthFields(auth: CopilotSession...` |
| 136 | fn | sessionAuthMatches | (private) | `function sessionAuthMatches(stored: CopilotSess...` |
| 150 | fn | normalizeBinding | (private) | `function normalizeBinding(` |
| 191 | fn | normalizeAttemptBinding | (private) | `function normalizeAttemptBinding(value: unknown...` |
| 215 | fn | lookupStoredBinding | (private) | `function lookupStoredBinding(` |
| 231 | fn | registerStoredBinding | (private) | `function registerStoredBinding(` |
| 250 | fn | deleteStoredBinding | (private) | `function deleteStoredBinding(store: CopilotSess...` |
| 260 | fn | throwIfAborted | (private) | `function throwIfAborted(signal: AbortSignal | u...` |
| 273 | fn | isStaleSdkSessionError | (private) | `function isStaleSdkSessionError(error: unknown)...` |
| 280 | fn | compactTrackedSdkSession | (private) | `async function compactTrackedSdkSession(params: {` |
| 329 | type | CopilotSessionCompatParams | (private) | - |
| 331 | fn | readAgentIdFromSessionKey | (private) | `function readAgentIdFromSessionKey(sessionKey: ...` |
| 339 | fn | computeSessionKey | (private) | `function computeSessionKey(` |
| 537 | fn | readSessionString | (private) | `function readSessionString(value: unknown): str...` |
| 541 | fn | fingerprintSessionValue | (private) | `function fingerprintSessionValue(value: unknown...` |
| 545 | fn | computeSessionCompatKey | (private) | `function computeSessionCompatKey(params: Copilo...` |
| 549 | fn | computeSessionCompactKey | (private) | `function computeSessionCompactKey(params: Copil...` |
| 553 | fn | buildCopilotCompactionHookContext | (private) | `function buildCopilotCompactionHookContext(para...` |
| 567 | fn | createCopilotAgentHarness | pub | `export function createCopilotAgentHarness(` |
| 586 | fn | getPool | (private) | `async function getPool(): Promise<CopilotClient...` |
| 600 | fn | trackDeferredCompactionCleanup | (private) | `function trackDeferredCompactionCleanup(params: {` |
| 617 | fn | removeDeferredCompactionCleanup | (private) | `function removeDeferredCompactionCleanup(` |
| 631 | fn | hasPendingDeferredCompactionCleanup | (private) | `function hasPendingDeferredCompactionCleanup(se...` |
| 645 | fn | abortDeferredCompactionCleanups | (private) | `async function abortDeferredCompactionCleanups(...` |
| 706 | fn | attemptPromise | (private) | `const attemptPromise = (async () => {` |

## Public API

### `createCopilotAgentHarness`

```
export function createCopilotAgentHarness(
```

**Line:** 567 | **Kind:** fn

## Memory Markers

### 🔴 `SAFETY` (line 741)

> //   - Only inject when the tracked compatKey still matches the
