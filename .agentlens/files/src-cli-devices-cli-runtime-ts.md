# src/cli/devices-cli.runtime.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1212
- **Language:** TypeScript
- **Symbols:** 64
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 53 | type | DevicesRpcOpts | (private) | - |
| 68 | type | DeviceTokenSummary | (private) | - |
| 74 | type | PendingDevice | (private) | - |
| 89 | type | PairedDevice | (private) | - |
| 104 | type | DevicePairingList | (private) | - |
| 109 | type | ApprovePairingGatewayContext | (private) | - |
| 114 | type | PendingNodeApprovalNotice | (private) | - |
| 134 | fn | callGatewayCli | (private) | `const callGatewayCli = async (` |
| 160 | fn | isPendingNodeApprovalState | (private) | `function isPendingNodeApprovalState(` |
| 166 | fn | buildNodeApproveCommand | (private) | `function buildNodeApproveCommand(opts: DevicesR...` |
| 175 | fn | formatNodeConnectionFlagReminder | (private) | `function formatNodeConnectionFlagReminder(opts:...` |
| 185 | fn | tryReadPendingNodeApprovals | (private) | `async function tryReadPendingNodeApprovals(opts...` |
| 199 | fn | pairedDeviceCanBeNode | (private) | `function pairedDeviceCanBeNode(device: PairedDe...` |
| 205 | fn | stringsMatch | (private) | `function stringsMatch(left: unknown, right: unk...` |
| 211 | fn | nodeMatchesPairedDevice | (private) | `function nodeMatchesPairedDevice(node: NodeList...` |
| 215 | fn | nodeMatchesQuery | (private) | `function nodeMatchesQuery(node: NodeListNode, q...` |
| 223 | fn | pairedDeviceMatchesQuery | (private) | `function pairedDeviceMatchesQuery(device: Paire...` |
| 227 | fn | tryReadGatewayPairingList | (private) | `async function tryReadGatewayPairingList(opts: ...` |
| 237 | fn | buildPendingNodeApprovalNoticesForOpts | (private) | `function buildPendingNodeApprovalNoticesForOpts(` |
| 255 | fn | formatNodeApprovalNotice | (private) | `function formatNodeApprovalNotice(notice: Pendi...` |
| 267 | fn | findPairedDevicePendingNodeApprovalNotices | (private) | `async function findPairedDevicePendingNodeAppro...` |
| 282 | fn | findQueryPendingNodeApprovalNotices | (private) | `async function findQueryPendingNodeApprovalNoti...` |
| 301 | fn | normalizeErrorMessage | (private) | `function normalizeErrorMessage(error: unknown):...` |
| 308 | fn | isDevicePairingApprovalDenied | (private) | `function isDevicePairingApprovalDenied(error: u...` |
| 314 | fn | isUnknownRequestIdError | (private) | `function isUnknownRequestIdError(error: unknown...` |
| 330 | fn | isScopeUpgradePendingApproval | (private) | `function isScopeUpgradePendingApproval(error: u...` |
| 336 | fn | resolveLocalPairingFallback | (private) | `function resolveLocalPairingFallback(` |
| 362 | fn | buildFallbackStateMismatchError | (private) | `function buildFallbackStateMismatchError(detail...` |
| 374 | fn | assertLocalFallbackMatchesGatewayRequest | (private) | `function assertLocalFallbackMatchesGatewayRequest(` |
| 390 | fn | redactLocalPairedDevice | (private) | `function redactLocalPairedDevice(device: InfraP...` |
| 398 | fn | listPairingWithFallback | (private) | `async function listPairingWithFallback(opts: De...` |
| 419 | fn | approvePairingWithFallback | (private) | `async function approvePairingWithFallback(` |
| 529 | fn | parseDevicePairingList | (private) | `function parseDevicePairingList(value: unknown)...` |
| 537 | fn | normalizeDeviceRoles | (private) | `function normalizeDeviceRoles(request: PendingD...` |
| 552 | fn | normalizeOperatorScopes | (private) | `function normalizeOperatorScopes(scopes: string...` |
| 558 | fn | findPendingRequestById | (private) | `function findPendingRequestById(` |
| 573 | fn | hasExactRoleMatch | (private) | `function hasExactRoleMatch(original: PendingDev...` |
| 583 | fn | hasCompatibleClientMetadata | (private) | `function hasCompatibleClientMetadata(original: ...` |
| 598 | fn | resolveOriginalReplacementScopes | (private) | `function resolveOriginalReplacementScopes(` |
| 607 | fn | replacementScopesCoverOriginal | (private) | `function replacementScopesCoverOriginal(` |
| 626 | fn | findSameDeviceReplacementRequest | (private) | `function findSameDeviceReplacementRequest(param...` |
| 674 | fn | resolvePairedOperatorScopes | (private) | `function resolvePairedOperatorScopes(paired: Pa...` |
| 682 | fn | resolvePendingOperatorApprovalScopes | (private) | `function resolvePendingOperatorApprovalScopes(` |
| 693 | fn | isKnownNonAdminOperatorScope | (private) | `function isKnownNonAdminOperatorScope(scope: st...` |
| 697 | fn | resolveApprovePairingScopesForRequest | (private) | `function resolveApprovePairingScopesForRequest(` |
| 718 | fn | resolveApprovePairingGatewayContext | (private) | `async function resolveApprovePairingGatewayCont...` |
| 740 | fn | selectLatestPendingRequest | (private) | `function selectLatestPendingRequest(pending: Pe...` |
| 751 | fn | formatTokenSummary | (private) | `function formatTokenSummary(tokens: DeviceToken...` |
| 761 | fn | formatPendingDeviceIdentity | (private) | `function formatPendingDeviceIdentity(request: P...` |
| 769 | fn | formatAccessSummary | (private) | `function formatAccessSummary(access: DevicePair...` |
| 782 | fn | formatPendingApprovalKind | (private) | `function formatPendingApprovalKind(kind: Pendin...` |
| 798 | fn | indexPairedDevices | (private) | `function indexPairedDevices(paired: PairedDevic...` |
| 809 | fn | lookupPairedDevice | (private) | `function lookupPairedDevice(` |
| 829 | fn | buildExplicitApproveCommand | (private) | `function buildExplicitApproveCommand(opts: Devi...` |
| 845 | fn | formatAuthFlagReminder | (private) | `function formatAuthFlagReminder(opts: DevicesRp...` |
| 859 | fn | resolveRequiredDeviceRole | (private) | `function resolveRequiredDeviceRole(` |
| 874 | fn | runDevicesListCommand | pub | `export async function runDevicesListCommand(opt...` |
| 967 | fn | runDevicesRemoveCommand | pub | `export async function runDevicesRemoveCommand(` |
| 987 | fn | runDevicesClearCommand | pub | `export async function runDevicesClearCommand(op...` |
| 1033 | fn | runDevicesApproveCommand | pub | `export async function runDevicesApproveCommand(` |
| 1155 | fn | runDevicesRejectCommand | pub | `export async function runDevicesRejectCommand(` |
| 1168 | fn | runDevicesRenameCommand | pub | `export async function runDevicesRenameCommand(o...` |
| 1188 | fn | runDevicesRotateCommand | pub | `export async function runDevicesRotateCommand(o...` |
| 1201 | fn | runDevicesRevokeCommand | pub | `export async function runDevicesRevokeCommand(o...` |

## Public API

### `runDevicesListCommand`

```
export async function runDevicesListCommand(opts: DevicesRpcOpts): Promise<void> {
```

**Line:** 874 | **Kind:** fn

### `runDevicesRemoveCommand`

```
export async function runDevicesRemoveCommand(
```

**Line:** 967 | **Kind:** fn

### `runDevicesClearCommand`

```
export async function runDevicesClearCommand(opts: DevicesRpcOpts): Promise<void> {
```

**Line:** 987 | **Kind:** fn

### `runDevicesApproveCommand`

```
export async function runDevicesApproveCommand(
```

**Line:** 1033 | **Kind:** fn

### `runDevicesRejectCommand`

```
export async function runDevicesRejectCommand(
```

**Line:** 1155 | **Kind:** fn

### `runDevicesRenameCommand`

```
export async function runDevicesRenameCommand(opts: DevicesRpcOpts): Promise<void> {
```

**Line:** 1168 | **Kind:** fn

### `runDevicesRotateCommand`

```
export async function runDevicesRotateCommand(opts: DevicesRpcOpts): Promise<void> {
```

**Line:** 1188 | **Kind:** fn

### `runDevicesRevokeCommand`

```
export async function runDevicesRevokeCommand(opts: DevicesRpcOpts): Promise<void> {
```

**Line:** 1201 | **Kind:** fn
