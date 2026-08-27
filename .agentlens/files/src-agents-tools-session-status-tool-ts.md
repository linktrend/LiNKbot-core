# src/agents/tools/session-status-tool.ts

[← Back to Module](../modules/src-agents-tools/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1102
- **Language:** TypeScript
- **Symbols:** 27
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 164 | type | SessionStatusStateChanges | (private) | - |
| 166 | fn | compactSessionStateEventPayload | (private) | `function compactSessionStateEventPayload(` |
| 190 | fn | compactSessionStateChanges | (private) | `function compactSessionStateChanges(stateChange...` |
| 209 | type | CommandsStatusRuntimeModule | (private) | - |
| 217 | fn | loadCommandsStatusRuntime | (private) | `function loadCommandsStatusRuntime(): Promise<C...` |
| 221 | type | ActiveStatusModelIdentity | (private) | - |
| 223 | type | SessionStatusOriginDetails | (private) | - |
| 229 | type | SessionStatusDeliveryContextDetails | (private) | - |
| 236 | type | SessionStatusRouteDetails | (private) | - |
| 244 | fn | readRouteThreadId | (private) | `function readRouteThreadId(value: unknown): str...` |
| 254 | fn | compactOriginDetails | (private) | `function compactOriginDetails(params: {` |
| 268 | fn | compactDeliveryContextDetails | (private) | `function compactDeliveryContextDetails(params: {` |
| 284 | fn | normalizeStatusDeliveryContext | (private) | `function normalizeStatusDeliveryContext(` |
| 295 | fn | normalizeActiveDeliveryContext | (private) | `function normalizeActiveDeliveryContext(` |
| 312 | fn | inferOriginProviderFromSessionKey | (private) | `function inferOriginProviderFromSessionKey(sess...` |
| 322 | fn | buildSessionStatusRouteDetails | (private) | `function buildSessionStatusRouteDetails(params: {` |
| 347 | fn | formatSessionStatusRouteContext | (private) | `function formatSessionStatusRouteContext(detail...` |
| 357 | fn | formatSessionStateChanges | (private) | `function formatSessionStateChanges(details: {` |
| 367 | fn | resolveActiveStatusModelIdentity | (private) | `function resolveActiveStatusModelIdentity(param...` |
| 398 | fn | withActiveStatusModelIdentity | (private) | `function withActiveStatusModelIdentity(` |
| 413 | fn | formatSessionTaskLine | (private) | `function formatSessionTaskLine(params: {` |
| 437 | fn | resolveModelOverride | (private) | `async function resolveModelOverride(params: {` |
| 523 | fn | createSessionStatusTool | pub | `export function createSessionStatusTool(opts?: {` |
| 560 | fn | isLegacyMainVisibilityKey | (private) | `const isLegacyMainVisibilityKey = (sessionKey: ...` |
| 564 | fn | resolveVisibilityMainSessionKey | (private) | `const resolveVisibilityMainSessionKey = (sessio...` |
| 577 | fn | normalizeVisibilityTargetSessionKey | (private) | `const normalizeVisibilityTargetSessionKey = (se...` |
| 651 | fn | ensureAgentAccess | (private) | `const ensureAgentAccess = (targetAgentId: strin...` |

## Public API

### `createSessionStatusTool`

```
export function createSessionStatusTool(opts?: {
```

**Line:** 523 | **Kind:** fn
