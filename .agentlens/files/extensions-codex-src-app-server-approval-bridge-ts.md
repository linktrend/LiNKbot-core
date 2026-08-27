# extensions/codex/src/app-server/approval-bridge.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1412
- **Language:** TypeScript
- **Symbols:** 64
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 54 | type | ApprovalPreviewSource | (private) | - |
| 59 | type | SanitizedApprovalPreview | (private) | - |
| 68 | fn | handleCodexAppServerApprovalRequest | pub | `export async function handleCodexAppServerAppro...` |
| 249 | fn | recordNativeToolFailureDisposition | (private) | `function recordNativeToolFailureDisposition(` |
| 271 | fn | buildApprovalResponse | (private) | `function buildApprovalResponse(` |
| 294 | fn | matchesCurrentTurn | (private) | `function matchesCurrentTurn(` |
| 307 | fn | buildApprovalContext | (private) | `function buildApprovalContext(params: {` |
| 391 | type | ApprovalContext | (private) | - |
| 392 | type | ApprovalPolicyOutcome | (private) | - |
| 401 | fn | runOpenClawToolPolicyForApprovalRequest | (private) | `async function runOpenClawToolPolicyForApproval...` |
| 496 | fn | runNativeRelayToolPolicyForApprovalRequest | (private) | `async function runNativeRelayToolPolicyForAppro...` |
| 627 | fn | buildNativeRelayPreToolUsePayload | (private) | `function buildNativeRelayPreToolUsePayload(para...` |
| 653 | fn | readNativeRelayPreToolUseDecision | (private) | `function readNativeRelayPreToolUseDecision(resp...` |
| 696 | fn | parseRelayJsonResponse | (private) | `function parseRelayJsonResponse(text: string): ...` |
| 705 | fn | sanitizeRelayDecisionReason | (private) | `function sanitizeRelayDecisionReason(value: str...` |
| 710 | fn | buildOpenClawToolPolicyRequest | (private) | `function buildOpenClawToolPolicyRequest(` |
| 734 | fn | toolPolicyParamsWereRewritten | (private) | `function toolPolicyParamsWereRewritten(original...` |
| 743 | fn | stableJsonText | (private) | `function stableJsonText(value: unknown): string...` |
| 772 | fn | isPlainRecord | (private) | `function isPlainRecord(value: unknown): value i...` |
| 776 | fn | commandApprovalDecision | (private) | `function commandApprovalDecision(` |
| 800 | fn | fileChangeApprovalDecision | (private) | `function fileChangeApprovalDecision(outcome: Ap...` |
| 810 | fn | requestedPermissions | (private) | `function requestedPermissions(requestParams: Js...` |
| 822 | fn | unsupportedApprovalResponse | (private) | `function unsupportedApprovalResponse(): JsonVal...` |
| 829 | fn | describeRequestedPermissions | (private) | `function describeRequestedPermissions(requestPa...` |
| 834 | fn | describeCommandApprovalDetails | (private) | `function describeCommandApprovalDetails(request...` |
| 859 | fn | describePermissionProfile | (private) | `function describePermissionProfile(permissions:...` |
| 938 | type | PermissionArrayDescriptor | (private) | - |
| 945 | fn | summarizeNetworkEnabledPermission | (private) | `function summarizeNetworkEnabledPermission(` |
| 959 | fn | summarizeFileSystemEntries | (private) | `function summarizeFileSystemEntries(` |
| 994 | fn | summarizePermissionRecord | (private) | `function summarizePermissionRecord(` |
| 1009 | fn | summarizePermissionArray | (private) | `function summarizePermissionArray(` |
| 1035 | fn | summarizeStringArray | (private) | `function summarizeStringArray(` |
| 1056 | fn | summarizeNetworkPolicyAmendments | (private) | `function summarizeNetworkPolicyAmendments(value...` |
| 1082 | fn | readStringArray | (private) | `function readStringArray(record: JsonObject, ke...` |
| 1086 | fn | sanitizePermissionHostValue | (private) | `function sanitizePermissionHostValue(value: str...` |
| 1096 | fn | sanitizePermissionPathValue | (private) | `function sanitizePermissionPathValue(value: str...` |
| 1103 | fn | sanitizePermissionScalar | (private) | `function sanitizePermissionScalar(value: string...` |
| 1107 | fn | permissionHostRisks | (private) | `function permissionHostRisks(value: string): st...` |
| 1119 | fn | permissionPathRisks | (private) | `function permissionPathRisks(value: string): st...` |
| 1128 | fn | isPrivateNetworkHostPattern | (private) | `function isPrivateNetworkHostPattern(value: str...` |
| 1159 | fn | hasAvailableDecision | (private) | `function hasAvailableDecision(requestParams: Js...` |
| 1167 | fn | findAvailableCommandAmendmentDecision | (private) | `function findAvailableCommandAmendmentDecision(` |
| 1182 | fn | commandRejectionDecision | (private) | `function commandRejectionDecision(` |
| 1200 | fn | approvalResolutionMessage | (private) | `function approvalResolutionMessage(outcome: App...` |
| 1216 | fn | approvalScopeForOutcome | (private) | `function approvalScopeForOutcome(outcome: AppSe...` |
| 1220 | fn | approvalEventScope | (private) | `function approvalEventScope(` |
| 1229 | fn | approvalKindForMethod | (private) | `function approvalKindForMethod(method: string):...` |
| 1239 | fn | isSupportedAppServerApprovalMethod | (private) | `function isSupportedAppServerApprovalMethod(met...` |
| 1247 | fn | emitApprovalEvent | (private) | `function emitApprovalEvent(params: EmbeddedRunA...` |
| 1254 | fn | readDisplayCommandPreview | (private) | `function readDisplayCommandPreview(` |
| 1264 | fn | readPolicyCommand | (private) | `function readPolicyCommand(record: JsonObject |...` |
| 1279 | fn | readCommandActions | (private) | `function readCommandActions(record: JsonObject ...` |
| 1289 | fn | readCommandActionsPreview | (private) | `function readCommandActionsPreview(` |
| 1302 | fn | readCommandPreview | (private) | `function readCommandPreview(record: JsonObject ...` |
| 1323 | fn | readStringPreview | (private) | `function readStringPreview(` |
| 1331 | fn | readString | (private) | `function readString(record: JsonObject | undefi...` |
| 1336 | fn | truncate | (private) | `function truncate(value: string, maxLength: num...` |
| 1340 | fn | previewSource | (private) | `function previewSource(value: string): Approval...` |
| 1347 | fn | appendPreviewPart | (private) | `function appendPreviewPart(` |
| 1361 | fn | sanitizeApprovalPreview | (private) | `function sanitizeApprovalPreview(` |
| 1376 | fn | sanitizeVisibleScalar | (private) | `function sanitizeVisibleScalar(value: string): ...` |
| 1386 | fn | formatApprovalPreviewSubject | (private) | `function formatApprovalPreviewSubject(text: str...` |
| 1390 | fn | joinDescriptionLinesWithinLimit | (private) | `function joinDescriptionLinesWithinLimit(lines:...` |
| 1409 | fn | formatErrorMessage | (private) | `function formatErrorMessage(error: unknown): st...` |

## Public API

### `handleCodexAppServerApprovalRequest`

```
export async function handleCodexAppServerApprovalRequest(params: {
```

**Line:** 68 | **Kind:** fn
