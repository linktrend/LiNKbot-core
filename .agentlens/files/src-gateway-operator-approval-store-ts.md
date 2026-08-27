# src/gateway/operator-approval-store.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1355
- **Language:** TypeScript
- **Symbols:** 53
- **Public symbols:** 20

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 34 | type | OperatorApprovalKind | pub | - |
| 35 | type | OperatorApprovalStatus | pub | - |
| 36 | type | OperatorApprovalDecision | (private) | - |
| 37 | type | OperatorApprovalTerminalReason | pub | - |
| 45 | type | OperatorApprovalResolverKind | (private) | - |
| 46 | type | OperatorApprovalRequester | (private) | - |
| 52 | type | OperatorApprovalSource | pub | - |
| 61 | type | OperatorApprovalResolver | pub | - |
| 66 | type | OperatorApprovalRecord | pub | - |
| 88 | type | NewOperatorApproval | (private) | - |
| 101 | type | InsertOperatorApprovalResult | (private) | - |
| 106 | type | GetOperatorApprovalResult | (private) | - |
| 111 | type | ResolveOperatorApprovalResult | pub | - |
| 123 | type | ForceDenyOperatorApprovalResult | pub | - |
| 131 | type | ConsumeOperatorApprovalResult | (private) | - |
| 139 | type | TerminalizeOperatorApprovalsResult | (private) | - |
| 144 | type | OperatorApprovalDatabase | (private) | - |
| 145 | type | OperatorApprovalRow | (private) | - |
| 147 | type | OperatorApprovalHistoryCursor | (private) | - |
| 152 | class | OperatorApprovalHistoryCursorError | pub | - |
| 159 | type | ListTerminalOperatorApprovalsResult | (private) | - |
| 193 | fn | parseApprovalPresentation | (private) | `function parseApprovalPresentation(raw: string)...` |
| 202 | fn | parseStringArray | (private) | `function parseStringArray(raw: string): string[...` |
| 217 | fn | normalizeString | (private) | `function normalizeString(value: string | null |...` |
| 222 | fn | requireString | (private) | `function requireString(value: string, label: st...` |
| 230 | fn | requireApprovalId | (private) | `function requireApprovalId(value: string): stri...` |
| 237 | fn | encodeOperatorApprovalHistoryCursor | (private) | `function encodeOperatorApprovalHistoryCursor(cu...` |
| 241 | fn | decodeOperatorApprovalHistoryCursor | (private) | `function decodeOperatorApprovalHistoryCursor(ra...` |
| 269 | fn | normalizeStringArray | (private) | `function normalizeStringArray(values: readonly ...` |
| 280 | fn | stringifyPresentation | (private) | `function stringifyPresentation(presentation: Ap...` |
| 298 | fn | isValidTimestamp | (private) | `function isValidTimestamp(value: number): boole...` |
| 302 | fn | clampAuditTimestamp | (private) | `function clampAuditTimestamp(nowMs: number, ......` |
| 306 | fn | hasValidLifecycleTuple | (private) | `function hasValidLifecycleTuple(params: {` |
| 359 | fn | decodeOperatorApprovalRow | (private) | `function decodeOperatorApprovalRow(row: Operato...` |
| 449 | fn | selectOperatorApprovalRow | (private) | `function selectOperatorApprovalRow(` |
| 460 | fn | selectOperatorApprovalRowByLocator | (private) | `function selectOperatorApprovalRowByLocator(` |
| 476 | fn | hasApprovalLocatorNamespaceConflict | (private) | `function hasApprovalLocatorNamespaceConflict(pa...` |
| 495 | fn | matchesExpectedApprovalOwner | (private) | `function matchesExpectedApprovalOwner(params: {` |
| 506 | fn | denyCorruptPendingRow | (private) | `function denyCorruptPendingRow(params: {` |
| 532 | fn | expirePendingRow | (private) | `function expirePendingRow(params: {` |
| 560 | fn | requireDecodedRecord | (private) | `function requireDecodedRecord(row: OperatorAppr...` |
| 568 | fn | inputMatchesExistingRow | (private) | `function inputMatchesExistingRow(` |
| 599 | fn | insertOperatorApproval | pub | `export function insertOperatorApproval(params: {` |
| 706 | fn | getOperatorApprovalDetailed | pub | `export function getOperatorApprovalDetailed(par...` |
| 734 | fn | getOperatorApprovalDetailedByLocator | pub | `export function getOperatorApprovalDetailedByLo...` |
| 762 | fn | listPendingOperatorApprovals | pub | `export function listPendingOperatorApprovals(` |
| 849 | fn | listTerminalOperatorApprovals | pub | `export function listTerminalOperatorApprovals(` |
| 930 | fn | resolveOperatorApproval | pub | `export function resolveOperatorApproval(params: {` |
| 1029 | fn | forceDenyOperatorApproval | pub | `export function forceDenyOperatorApproval(param...` |
| 1108 | fn | expireDueOperatorApprovals | pub | `export function expireDueOperatorApprovals(para...` |
| 1166 | fn | closeOrphanedOperatorApprovals | pub | `export function closeOrphanedOperatorApprovals(...` |
| 1232 | fn | consumeOperatorApprovalAllowOnce | pub | `export function consumeOperatorApprovalAllowOnc...` |
| 1331 | fn | pruneTerminalOperatorApprovals | pub | `export function pruneTerminalOperatorApprovals(...` |

## Public API

### `insertOperatorApproval`

```
export function insertOperatorApproval(params: {
```

**Line:** 599 | **Kind:** fn

### `getOperatorApprovalDetailed`

```
export function getOperatorApprovalDetailed(params: {
```

**Line:** 706 | **Kind:** fn

### `getOperatorApprovalDetailedByLocator`

```
export function getOperatorApprovalDetailedByLocator(params: {
```

**Line:** 734 | **Kind:** fn

### `listPendingOperatorApprovals`

```
export function listPendingOperatorApprovals(
```

**Line:** 762 | **Kind:** fn

### `listTerminalOperatorApprovals`

```
export function listTerminalOperatorApprovals(
```

**Line:** 849 | **Kind:** fn

### `resolveOperatorApproval`

```
export function resolveOperatorApproval(params: {
```

**Line:** 930 | **Kind:** fn

### `forceDenyOperatorApproval`

```
export function forceDenyOperatorApproval(params: {
```

**Line:** 1029 | **Kind:** fn

### `expireDueOperatorApprovals`

```
export function expireDueOperatorApprovals(params: {
```

**Line:** 1108 | **Kind:** fn

### `closeOrphanedOperatorApprovals`

```
export function closeOrphanedOperatorApprovals(params: {
```

**Line:** 1166 | **Kind:** fn

### `consumeOperatorApprovalAllowOnce`

```
export function consumeOperatorApprovalAllowOnce(params: {
```

**Line:** 1232 | **Kind:** fn

### `pruneTerminalOperatorApprovals`

```
export function pruneTerminalOperatorApprovals(params: {
```

**Line:** 1331 | **Kind:** fn
