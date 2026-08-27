# src/gateway/exec-approval-manager.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1170
- **Language:** TypeScript
- **Symbols:** 16
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 35 | fn | unrefTimer | (private) | `function unrefTimer(timer: ReturnType<typeof se...` |
| 36 | fn | unref | (private) | `const unref = (timer as { unref?: () => void })...` |
| 42 | fn | scheduleResolvedEntryCleanup | (private) | `function scheduleResolvedEntryCleanup(cleanup: ...` |
| 50 | fn | resolveApprovalTimeoutMs | (private) | `function resolveApprovalTimeoutMs(timeoutMs: nu...` |
| 59 | class | InvalidApprovalIdError | pub | - |
| 71 | type | ExecApprovalRequestPayload | (private) | - |
| 76 | type | ExecApprovalResolutionSource | (private) | - |
| 103 | type | OperatorApprovalPersistenceRuntime | (private) | - |
| 126 | type | OperatorApprovalLifecycleEvent | pub | - |
| 145 | type | ExecApprovalDurableLookup | (private) | - |
| 161 | type | ExecApprovalIdLookupResult | pub | - |
| 166 | fn | readRequestString | (private) | `function readRequestString(request: unknown, ke...` |
| 174 | fn | resolveApprovalSource | (private) | `function resolveApprovalSource(request: unknown...` |
| 185 | fn | normalizeAllowedDecisions | (private) | `function normalizeAllowedDecisions(` |
| 204 | fn | attachLiveRecord | (private) | `function attachLiveRecord<TPayload, TResult ext...` |
| 221 | class | ExecApprovalManager | pub | - |

## Public API
