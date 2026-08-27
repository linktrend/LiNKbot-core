# src/infra/device-pairing.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1567
- **Language:** TypeScript
- **Symbols:** 72
- **Public symbols:** 29

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 39 | type | DevicePairingSupersededRequest | (private) | - |
| 42 | type | RequestDevicePairingResult | (private) | - |
| 50 | type | DeviceAuthTokenSummary | pub | - |
| 60 | type | RotateDeviceTokenDenyReason | pub | - |
| 67 | type | RotateDeviceTokenResult | (private) | - |
| 71 | type | RevokeDeviceTokenDenyReason | pub | - |
| 74 | type | RevokeDeviceTokenResult | (private) | - |
| 79 | type | PairedDeviceMetadataPatch | (private) | - |
| 92 | type | DevicePairingAccessMetadata | (private) | - |
| 98 | type | DevicePairingList | (private) | - |
| 104 | type | DevicePairingForbiddenReason | (private) | - |
| 112 | type | DevicePairingForbiddenResult | (private) | - |
| 120 | type | ApproveDevicePairingResult | (private) | - |
| 125 | type | DevicePairingStateFile | (private) | - |
| 140 | fn | formatDevicePairingForbiddenMessage | pub | `export function formatDevicePairingForbiddenMes...` |
| 156 | fn | loadState | (private) | `async function loadState(baseDir?: string): Pro...` |
| 177 | fn | withPairedDeviceRecords | pub | `export async function withPairedDeviceRecords<T>(` |
| 193 | fn | normalizeDeviceId | (private) | `function normalizeDeviceId(deviceId: string) {` |
| 197 | fn | normalizeRole | (private) | `function normalizeRole(role: string | undefined...` |
| 202 | fn | mergeRoles | (private) | `function mergeRoles(...items: Array<string | st...` |
| 215 | fn | listActiveTokenRoles | (private) | `function listActiveTokenRoles(` |
| 229 | fn | listApprovedPairedDeviceRoles | pub | `export function listApprovedPairedDeviceRoles(` |
| 238 | fn | listEffectivePairedDeviceRoles | pub | `export function listEffectivePairedDeviceRoles(` |
| 254 | fn | hasEffectivePairedDeviceRole | pub | `export function hasEffectivePairedDeviceRole(` |
| 265 | fn | mergeScopes | (private) | `function mergeScopes(...items: Array<string[] |...` |
| 283 | fn | sameStringSet | (private) | `function sameStringSet(left: readonly string[],...` |
| 296 | fn | resolveRequestedRoles | (private) | `function resolveRequestedRoles(input: { role?: ...` |
| 300 | fn | resolveRequestedScopes | (private) | `function resolveRequestedScopes(input: { scopes...` |
| 304 | fn | samePendingApprovalSnapshot | (private) | `function samePendingApprovalSnapshot(` |
| 326 | fn | isStringSubset | (private) | `function isStringSubset(subset: readonly string...` |
| 339 | fn | incomingApprovalCoveredByExisting | (private) | `function incomingApprovalCoveredByExisting(` |
| 372 | fn | refreshPendingDevicePairingRequest | (private) | `function refreshPendingDevicePairingRequest(` |
| 399 | fn | resolveSupersededPendingSilent | (private) | `function resolveSupersededPendingSilent(params: {` |
| 408 | fn | toPublicPendingDevicePairingRequest | (private) | `function toPublicPendingDevicePairingRequest(` |
| 415 | fn | buildPendingDevicePairingRequest | (private) | `function buildPendingDevicePairingRequest(param...` |
| 442 | fn | newToken | (private) | `function newToken() {` |
| 446 | fn | getPairedDeviceFromState | (private) | `function getPairedDeviceFromState(` |
| 453 | fn | cloneDeviceTokens | (private) | `function cloneDeviceTokens(device: PairedDevice...` |
| 457 | fn | isBrowserRelatedPairedDevice | (private) | `function isBrowserRelatedPairedDevice(device: P...` |
| 466 | fn | deviceTokenIssuerMatches | (private) | `function deviceTokenIssuerMatches(` |
| 476 | fn | buildDeviceAuthToken | (private) | `function buildDeviceAuthToken(params: {` |
| 501 | fn | mergeApprovalKind | (private) | `function mergeApprovalKind(` |
| 517 | fn | buildApprovedPairedDevice | (private) | `function buildApprovedPairedDevice(params: {` |
| 559 | fn | resolveRoleScopedDeviceTokenScopes | (private) | `function resolveRoleScopedDeviceTokenScopes(rol...` |
| 567 | fn | preserveRoleScopedApprovalScopes | (private) | `function preserveRoleScopedApprovalScopes(role:...` |
| 575 | fn | resolveApprovedTokenScopes | (private) | `function resolveApprovedTokenScopes(params: {` |
| 609 | fn | resolveApprovedDeviceScopeBaseline | (private) | `function resolveApprovedDeviceScopeBaseline(dev...` |
| 617 | fn | scopesWithinApprovedDeviceBaseline | (private) | `function scopesWithinApprovedDeviceBaseline(par...` |
| 632 | fn | listDevicePairing | pub | `export async function listDevicePairing(baseDir...` |
| 644 | fn | getPairedDevice | pub | `export async function getPairedDevice(` |
| 653 | fn | getPendingDevicePairing | pub | `export async function getPendingDevicePairing(` |
| 670 | fn | reconcilePendingPairingRequests | (private) | `function reconcilePendingPairingRequests<` |
| 712 | fn | requestDevicePairing | pub | `export async function requestDevicePairing(` |
| 781 | fn | approveDevicePairing | pub | `export async function approveDevicePairing(` |
| 785 | fn | approveDevicePairing | pub | `export async function approveDevicePairing(` |
| 803 | fn | approveDevicePairing | pub | `export async function approveDevicePairing(` |
| 927 | fn | approveBootstrapDevicePairing | pub | `export async function approveBootstrapDevicePai...` |
| 932 | fn | approveBootstrapDevicePairing | pub | `export async function approveBootstrapDevicePai...` |
| 938 | fn | approveBootstrapDevicePairing | pub | `export async function approveBootstrapDevicePai...` |
| 1028 | fn | rejectDevicePairing | pub | `export async function rejectDevicePairing(` |
| 1050 | fn | removePairedDevice | pub | `export async function removePairedDevice(` |
| 1074 | fn | silentPairingClusterKey | (private) | `function silentPairingClusterKey(` |
| 1087 | type | PrunedSupersededPairedDevice | pub | - |
| 1106 | fn | pruneSupersededSilentPairedDevices | pub | `export async function pruneSupersededSilentPair...` |
| 1161 | fn | removePairedDeviceRole | pub | `export async function removePairedDeviceRole(pa...` |
| 1245 | fn | updatePairedDeviceMetadata | pub | `export async function updatePairedDeviceMetadata(` |
| 1289 | fn | summarizeDeviceTokens | pub | `export function summarizeDeviceTokens(` |
| 1309 | fn | verifyDeviceToken | pub | `export async function verifyDeviceToken(params: {` |
| 1377 | fn | ensureDeviceToken | pub | `export async function ensureDeviceToken(params: {` |
| 1438 | fn | resolveDeviceTokenUpdateContext | (private) | `function resolveDeviceTokenUpdateContext(params: {` |
| 1467 | fn | rotateDeviceToken | pub | `export async function rotateDeviceToken(params: {` |
| 1529 | fn | revokeDeviceToken | pub | `export async function revokeDeviceToken(params: {` |

## Public API

### `formatDevicePairingForbiddenMessage`

```
export function formatDevicePairingForbiddenMessage(result: DevicePairingForbiddenResult): string {
```

**Line:** 140 | **Kind:** fn

### `withPairedDeviceRecords`

```
export async function withPairedDeviceRecords<T>(
```

**Line:** 177 | **Kind:** fn

### `listApprovedPairedDeviceRoles`

```
export function listApprovedPairedDeviceRoles(
```

**Line:** 229 | **Kind:** fn

### `listEffectivePairedDeviceRoles`

```
export function listEffectivePairedDeviceRoles(
```

**Line:** 238 | **Kind:** fn

### `hasEffectivePairedDeviceRole`

```
export function hasEffectivePairedDeviceRole(
```

**Line:** 254 | **Kind:** fn

### `listDevicePairing`

```
export async function listDevicePairing(baseDir?: string): Promise<DevicePairingList> {
```

**Line:** 632 | **Kind:** fn

### `getPairedDevice`

```
export async function getPairedDevice(
```

**Line:** 644 | **Kind:** fn

### `getPendingDevicePairing`

```
export async function getPendingDevicePairing(
```

**Line:** 653 | **Kind:** fn

### `requestDevicePairing`

```
export async function requestDevicePairing(
```

**Line:** 712 | **Kind:** fn

### `approveDevicePairing`

```
export async function approveDevicePairing(
```

**Line:** 781 | **Kind:** fn

### `approveDevicePairing`

```
export async function approveDevicePairing(
```

**Line:** 785 | **Kind:** fn

### `approveDevicePairing`

```
export async function approveDevicePairing(
```

**Line:** 803 | **Kind:** fn

### `approveBootstrapDevicePairing`

```
export async function approveBootstrapDevicePairing(
```

**Line:** 927 | **Kind:** fn

### `approveBootstrapDevicePairing`

```
export async function approveBootstrapDevicePairing(
```

**Line:** 932 | **Kind:** fn

### `approveBootstrapDevicePairing`

```
export async function approveBootstrapDevicePairing(
```

**Line:** 938 | **Kind:** fn

### `rejectDevicePairing`

```
export async function rejectDevicePairing(
```

**Line:** 1028 | **Kind:** fn

### `removePairedDevice`

```
export async function removePairedDevice(
```

**Line:** 1050 | **Kind:** fn

### `pruneSupersededSilentPairedDevices`

```
export async function pruneSupersededSilentPairedDevices(params: {
```

**Line:** 1106 | **Kind:** fn

### `removePairedDeviceRole`

```
export async function removePairedDeviceRole(params: {
```

**Line:** 1161 | **Kind:** fn

### `updatePairedDeviceMetadata`

```
export async function updatePairedDeviceMetadata(
```

**Line:** 1245 | **Kind:** fn

### `summarizeDeviceTokens`

```
export function summarizeDeviceTokens(
```

**Line:** 1289 | **Kind:** fn

### `verifyDeviceToken`

```
export async function verifyDeviceToken(params: {
```

**Line:** 1309 | **Kind:** fn

### `ensureDeviceToken`

```
export async function ensureDeviceToken(params: {
```

**Line:** 1377 | **Kind:** fn

### `rotateDeviceToken`

```
export async function rotateDeviceToken(params: {
```

**Line:** 1467 | **Kind:** fn

### `revokeDeviceToken`

```
export async function revokeDeviceToken(params: {
```

**Line:** 1529 | **Kind:** fn
