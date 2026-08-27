# src/infra/npm-managed-root.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1236
- **Language:** TypeScript
- **Symbols:** 62
- **Public symbols:** 12

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 19 | type | ManagedNpmRootManifest | (private) | - |
| 26 | type | HostPackageManifest | (private) | - |
| 34 | type | ManagedNpmRootOpenClawMetadata | (private) | - |
| 41 | type | ManagedNpmRootPeerDependencySnapshot | pub | - |
| 47 | type | ManagedNpmRootInstalledDependency | pub | - |
| 53 | type | ManagedNpmRootLockfile | (private) | - |
| 59 | type | ManagedNpmRootLogger | (private) | - |
| 63 | type | ManagedNpmRootRunCommand | (private) | - |
| 65 | type | ManagedNpmRootOpenClawHostState | (private) | - |
| 67 | fn | readDependencyRecord | (private) | `function readDependencyRecord(value: unknown): ...` |
| 80 | fn | isSafePackageName | (private) | `function isSafePackageName(name: string): boole...` |
| 92 | fn | isManagedNpmRootHostPeerPackageName | (private) | `function isManagedNpmRootHostPeerPackageName(na...` |
| 96 | fn | readOverrideRecord | (private) | `function readOverrideRecord(value: unknown): Re...` |
| 109 | fn | readManagedOverrideKeys | (private) | `function readManagedOverrideKeys(value: unknown...` |
| 116 | fn | readManagedPeerDependencyKeys | (private) | `function readManagedPeerDependencyKeys(value: u...` |
| 123 | fn | buildManagedOpenClawMetadata | (private) | `function buildManagedOpenClawMetadata(params: {` |
| 145 | fn | readManagedNpmRootManifest | (private) | `async function readManagedNpmRootManifest(fileP...` |
| 150 | fn | readHostWorkspaceOverrides | (private) | `async function readHostWorkspaceOverrides(packa...` |
| 157 | fn | readHostDependencySpec | (private) | `function readHostDependencySpec(` |
| 169 | fn | resolveHostOverrideReferences | (private) | `function resolveHostOverrideReferences(value: u...` |
| 183 | fn | isUnsupportedManagedNpmOverride | (private) | `function isUnsupportedManagedNpmOverride(value:...` |
| 187 | fn | filterUnsupportedManagedNpmRootOverrides | (private) | `function filterUnsupportedManagedNpmRootOverrid...` |
| 208 | fn | readRootOverrideSpec | (private) | `function readRootOverrideSpec(value: unknown): ...` |
| 223 | fn | reconcileManagedNpmRootOverrideConflicts | (private) | `function reconcileManagedNpmRootOverrideConflic...` |
| 266 | fn | applyManagedNpmRootOverrides | (private) | `function applyManagedNpmRootOverrides(params: {` |
| 290 | fn | readOpenClawManagedNpmRootOverrides | pub | `export async function readOpenClawManagedNpmRoo...` |
| 327 | fn | resolveManagedNpmRootDependencySpec | pub | `export function resolveManagedNpmRootDependency...` |
| 335 | fn | upsertManagedNpmRootDependency | pub | `export async function upsertManagedNpmRootDepen...` |
| 386 | fn | isOptionalPeerDependency | (private) | `function isOptionalPeerDependency(manifest: Rec...` |
| 394 | fn | isDevOnlyLockPackage | (private) | `function isDevOnlyLockPackage(value: unknown): ...` |
| 398 | fn | readStringList | (private) | `function readStringList(value: unknown): string...` |
| 409 | fn | matchesNpmPlatformList | (private) | `function matchesNpmPlatformList(value: string |...` |
| 436 | fn | resolveCurrentLibc | (private) | `function resolveCurrentLibc(): string | undefin...` |
| 455 | fn | isUnsupportedOptionalLockPackage | (private) | `function isUnsupportedOptionalLockPackage(value...` |
| 466 | fn | hasNpmPlatformConstraint | (private) | `function hasNpmPlatformConstraint(value: Record...` |
| 470 | fn | readLockPackageLocationName | (private) | `function readLockPackageLocationName(location: ...` |
| 489 | fn | readLockPackageName | (private) | `function readLockPackageName(location: string, ...` |
| 499 | fn | resolveManagedNpmLockPackagePath | (private) | `function resolveManagedNpmLockPackagePath(param...` |
| 517 | fn | isTopLevelLockPackageLocation | (private) | `function isTopLevelLockPackageLocation(location...` |
| 521 | type | MissingRequiredPlatformPackage | (private) | - |
| 527 | fn | listMissingRequiredPlatformPackages | pub | `export async function listMissingRequiredPlatfo...` |
| 562 | fn | findLockPackageVersion | (private) | `function findLockPackageVersion(params: {` |
| 584 | fn | collectNpmLockPeerDependencyPins | (private) | `function collectNpmLockPeerDependencyPins(param...` |
| 628 | fn | copyPathIfExists | (private) | `async function copyPathIfExists(source: string,...` |
| 639 | fn | scrubHostPeerFromLockPackage | (private) | `function scrubHostPeerFromLockPackage(value: un...` |
| 667 | fn | scrubHostPeerFromTempPackageLock | (private) | `async function scrubHostPeerFromTempPackageLock...` |
| 688 | fn | collectExistingManagedPeerDependencyPins | (private) | `function collectExistingManagedPeerDependencyPins(` |
| 702 | fn | isHostPeerResolutionFailure | (private) | `function isHostPeerResolutionFailure(` |
| 709 | fn | createManagedNpmPeerPlanArgs | (private) | `function createManagedNpmPeerPlanArgs(params?: {` |
| 730 | fn | collectNpmResolvedManagedNpmRootPeerDependencyPins | (private) | `async function collectNpmResolvedManagedNpmRoot...` |
| 813 | fn | readManagedNpmRootPeerDependencySnapshot | pub | `export async function readManagedNpmRootPeerDep...` |
| 833 | fn | restoreManagedNpmRootPeerDependencySnapshot | pub | `export async function restoreManagedNpmRootPeer...` |
| 881 | fn | syncManagedNpmRootPeerDependencies | pub | `export async function syncManagedNpmRootPeerDep...` |
| 960 | fn | repairManagedNpmRootOpenClawPeer | pub | `export async function repairManagedNpmRootOpenC...` |
| 1043 | fn | readManagedNpmRootOpenClawHostState | (private) | `async function readManagedNpmRootOpenClawHostSt...` |
| 1071 | fn | managedNpmRootLockfileHasOpenClawPeer | (private) | `async function managedNpmRootLockfileHasOpenCla...` |
| 1097 | fn | realpathIfExists | (private) | `async function realpathIfExists(filePath: strin...` |
| 1108 | fn | lstatIfExists | (private) | `async function lstatIfExists(filePath: string):...` |
| 1119 | fn | pathExists | (private) | `async function pathExists(filePath: string): Pr...` |
| 1131 | fn | scrubManagedNpmRootOpenClawPeer | (private) | `async function scrubManagedNpmRootOpenClawPeer(...` |
| 1197 | fn | readManagedNpmRootInstalledDependency | pub | `export async function readManagedNpmRootInstall...` |
| 1218 | fn | removeManagedNpmRootDependency | pub | `export async function removeManagedNpmRootDepen...` |

## Public API

### `readOpenClawManagedNpmRootOverrides`

```
export async function readOpenClawManagedNpmRootOverrides(params?: {
```

**Line:** 290 | **Kind:** fn

### `resolveManagedNpmRootDependencySpec`

```
export function resolveManagedNpmRootDependencySpec(params: {
```

**Line:** 327 | **Kind:** fn

### `upsertManagedNpmRootDependency`

```
export async function upsertManagedNpmRootDependency(params: {
```

**Line:** 335 | **Kind:** fn

### `listMissingRequiredPlatformPackages`

```
export async function listMissingRequiredPlatformPackages(params: {
```

**Line:** 527 | **Kind:** fn

### `readManagedNpmRootPeerDependencySnapshot`

```
export async function readManagedNpmRootPeerDependencySnapshot(params: {
```

**Line:** 813 | **Kind:** fn

### `restoreManagedNpmRootPeerDependencySnapshot`

```
export async function restoreManagedNpmRootPeerDependencySnapshot(params: {
```

**Line:** 833 | **Kind:** fn

### `syncManagedNpmRootPeerDependencies`

```
export async function syncManagedNpmRootPeerDependencies(params: {
```

**Line:** 881 | **Kind:** fn

### `repairManagedNpmRootOpenClawPeer`

```
export async function repairManagedNpmRootOpenClawPeer(params: {
```

**Line:** 960 | **Kind:** fn

### `readManagedNpmRootInstalledDependency`

```
export async function readManagedNpmRootInstalledDependency(params: {
```

**Line:** 1197 | **Kind:** fn

### `removeManagedNpmRootDependency`

```
export async function removeManagedNpmRootDependency(params: {
```

**Line:** 1218 | **Kind:** fn
