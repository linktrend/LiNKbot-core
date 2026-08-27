# src/infra/update-global.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1329
- **Language:** TypeScript
- **Symbols:** 68
- **Public symbols:** 21

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 24 | type | GlobalInstallManager | pub | - |
| 27 | type | CommandRunner | pub | - |
| 39 | type | ResolvedGlobalInstallCommand | (private) | - |
| 52 | type | ResolvedGlobalInstallTarget | pub | - |
| 74 | type | NpmGlobalPrefixLayout | pub | - |
| 80 | fn | normalizePackageTarget | (private) | `function normalizePackageTarget(value: string):...` |
| 85 | fn | readPackageManagerProbeValue | pub | `export function readPackageManagerProbeValue(st...` |
| 96 | fn | normalizePackageVersionForComparison | (private) | `function normalizePackageVersionForComparison(v...` |
| 105 | fn | isMainPackageTarget | (private) | `function isMainPackageTarget(value: string): bo...` |
| 113 | fn | isExplicitPackageInstallSpec | (private) | `function isExplicitPackageInstallSpec(value: st...` |
| 126 | fn | isRelativePackageInstallPath | (private) | `function isRelativePackageInstallPath(value: st...` |
| 130 | fn | resolveNpmInstallScriptsAllowFlag | (private) | `function resolveNpmInstallScriptsAllowFlag(spec...` |
| 162 | fn | resolveNpmAliasPackageName | (private) | `function resolveNpmAliasPackageName(spec: strin...` |
| 180 | fn | stripPrimaryPackageAlias | (private) | `function stripPrimaryPackageAlias(spec: string)...` |
| 193 | fn | resolveExpectedInstalledVersionFromSpec | pub | `export function resolveExpectedInstalledVersion...` |
| 219 | fn | collectInstalledGlobalPackageErrors | pub | `export async function collectInstalledGlobalPac...` |
| 243 | fn | collectSourceCheckoutInstallErrors | (private) | `async function collectSourceCheckoutInstallErro...` |
| 255 | fn | shouldRequirePackagedDistInventory | (private) | `function shouldRequirePackagedDistInventory(ver...` |
| 269 | fn | collectInstalledPackageDistErrors | (private) | `async function collectInstalledPackageDistError...` |
| 331 | fn | collectLegacyInstalledPackageDistPaths | (private) | `async function collectLegacyInstalledPackageDis...` |
| 335 | fn | collectCriticalInstalledPackageDistPaths | (private) | `async function collectCriticalInstalledPackageD...` |
| 357 | fn | resolveBundledPluginRoot | (private) | `function resolveBundledPluginRoot(relativePath:...` |
| 362 | fn | collectInstalledPathErrors | (private) | `async function collectInstalledPathErrors(param...` |
| 395 | fn | canResolveRegistryVersionForPackageTarget | pub | `export function canResolveRegistryVersionForPac...` |
| 403 | fn | resolvePortableGitPathPrepend | (private) | `async function resolvePortableGitPathPrepend():...` |
| 427 | fn | applyWindowsPackageInstallEnv | (private) | `function applyWindowsPackageInstallEnv(env: Rec...` |
| 437 | fn | applyCorepackDownloadPromptEnv | (private) | `function applyCorepackDownloadPromptEnv(env: Re...` |
| 448 | fn | resolveGlobalInstallSpec | pub | `export function resolveGlobalInstallSpec(params: {` |
| 474 | fn | createGlobalInstallEnv | pub | `export async function createGlobalInstallEnv(` |
| 492 | fn | tryRealpath | (private) | `async function tryRealpath(targetPath: string):...` |
| 500 | fn | resolveBunGlobalRoot | (private) | `function resolveBunGlobalRoot(): string {` |
| 505 | fn | inferNpmPrefixFromPackageRoot | (private) | `function inferNpmPrefixFromPackageRoot(pkgRoot?...` |
| 527 | fn | resolveNpmGlobalPrefixLayoutFromGlobalRoot | pub | `export function resolveNpmGlobalPrefixLayoutFro...` |
| 569 | fn | resolveNpmGlobalPrefixLayoutFromPrefix | pub | `export function resolveNpmGlobalPrefixLayoutFro...` |
| 585 | fn | splitNormalizedPathParts | (private) | `function splitNormalizedPathParts(value: string...` |
| 593 | fn | isNodeVersionPathPart | (private) | `function isNodeVersionPathPart(value: string | ...` |
| 597 | fn | hasPathSequence | (private) | `function hasPathSequence(parts: readonly string...` |
| 607 | fn | isEphemeralNodeManagedNpmPrefix | (private) | `function isEphemeralNodeManagedNpmPrefix(prefix...` |
| 630 | fn | resolveNpmCommandBesidePackageRoot | (private) | `function resolveNpmCommandBesidePackageRoot(pkg...` |
| 640 | fn | resolvePreferredNpmCommand | (private) | `function resolvePreferredNpmCommand(pkgRoot?: s...` |
| 648 | fn | inferGlobalRootFromPackageRoot | (private) | `function inferGlobalRootFromPackageRoot(pkgRoot...` |
| 661 | fn | resolvePackageRootFromGlobalRoot | (private) | `function resolvePackageRootFromGlobalRoot(param...` |
| 677 | fn | isDirectNpmNodeModulesRoot | (private) | `function isDirectNpmNodeModulesRoot(globalRoot:...` |
| 687 | fn | inferBunGlobalRootFromPackageRoot | (private) | `function inferBunGlobalRootFromPackageRoot(pkgR...` |
| 697 | fn | inferPnpmGlobalRootFromPackageRoot | (private) | `function inferPnpmGlobalRootFromPackageRoot(pkg...` |
| 726 | type | PnpmIsolatedGlobalPackage | (private) | - |
| 733 | fn | resolvePnpmIsolatedLayoutVersion | (private) | `function resolvePnpmIsolatedLayoutVersion(globa...` |
| 739 | fn | inferPnpmIsolatedGlobalRootFromPackageRoot | (private) | `function inferPnpmIsolatedGlobalRootFromPackage...` |
| 748 | fn | hasPnpmIsolatedProjectMetadata | (private) | `async function hasPnpmIsolatedProjectMetadata(` |
| 772 | fn | resolvePnpmIsolatedInstallOwner | pub | `export async function resolvePnpmIsolatedInstal...` |
| 782 | fn | listPnpmIsolatedGlobalPackages | (private) | `async function listPnpmIsolatedGlobalPackages(p...` |
| 828 | fn | listActivePnpmIsolatedGlobalPackages | pub | `export async function listActivePnpmIsolatedGlo...` |
| 838 | fn | resolvePnpmIsolatedGlobalPackage | (private) | `async function resolvePnpmIsolatedGlobalPackage...` |
| 873 | fn | isPnpmIsolatedGlobalPackageRoot | (private) | `async function isPnpmIsolatedGlobalPackageRoot(...` |
| 886 | fn | resolvePnpmGlobalDirFromGlobalRoot | pub | `export function resolvePnpmGlobalDirFromGlobalR...` |
| 902 | fn | isPnpmGlobalPackageRoot | (private) | `async function isPnpmGlobalPackageRoot(pkgRoot?...` |
| 923 | fn | resolvePreferredGlobalManagerCommand | (private) | `function resolvePreferredGlobalManagerCommand(` |
| 937 | fn | resolveGlobalInstallCommand | (private) | `function resolveGlobalInstallCommand(` |
| 947 | fn | normalizeGlobalInstallCommand | (private) | `function normalizeGlobalInstallCommand(` |
| 956 | fn | resolveBunGlobalInstallSpec | (private) | `function resolveBunGlobalInstallSpec(spec: stri...` |
| 969 | fn | resolveInstallCommandForManager | (private) | `function resolveInstallCommandForManager(` |
| 984 | fn | resolveGlobalRoot | (private) | `async function resolveGlobalRoot(` |
| 1007 | fn | resolveGlobalInstallTarget | pub | `export async function resolveGlobalInstallTarge...` |
| 1124 | fn | detectGlobalInstallManagerForRoot | pub | `export async function detectGlobalInstallManage...` |
| 1190 | fn | detectGlobalInstallManagerByPresence | pub | `export async function detectGlobalInstallManage...` |
| 1219 | fn | globalInstallArgs | pub | `export function globalInstallArgs(` |
| 1267 | fn | globalInstallFallbackArgs | pub | `export function globalInstallFallbackArgs(` |
| 1294 | fn | cleanupGlobalRenameDirs | pub | `export async function cleanupGlobalRenameDirs(p...` |

## Public API

### `readPackageManagerProbeValue`

```
export function readPackageManagerProbeValue(stdout: string): string {
```

**Line:** 85 | **Kind:** fn

### `resolveExpectedInstalledVersionFromSpec`

```
export function resolveExpectedInstalledVersionFromSpec(
```

**Line:** 193 | **Kind:** fn

### `collectInstalledGlobalPackageErrors`

```
export async function collectInstalledGlobalPackageErrors(params: {
```

**Line:** 219 | **Kind:** fn

### `canResolveRegistryVersionForPackageTarget`

```
export function canResolveRegistryVersionForPackageTarget(value: string): boolean {
```

**Line:** 395 | **Kind:** fn

### `resolveGlobalInstallSpec`

```
export function resolveGlobalInstallSpec(params: {
```

**Line:** 448 | **Kind:** fn

### `createGlobalInstallEnv`

```
export async function createGlobalInstallEnv(
```

**Line:** 474 | **Kind:** fn

### `resolveNpmGlobalPrefixLayoutFromGlobalRoot`

```
export function resolveNpmGlobalPrefixLayoutFromGlobalRoot(
```

**Line:** 527 | **Kind:** fn

### `resolveNpmGlobalPrefixLayoutFromPrefix`

```
export function resolveNpmGlobalPrefixLayoutFromPrefix(prefix: string): NpmGlobalPrefixLayout {
```

**Line:** 569 | **Kind:** fn

### `resolvePnpmIsolatedInstallOwner`

```
export async function resolvePnpmIsolatedInstallOwner(
```

**Line:** 772 | **Kind:** fn

### `listActivePnpmIsolatedGlobalPackages`

```
export async function listActivePnpmIsolatedGlobalPackages(params: {
```

**Line:** 828 | **Kind:** fn

### `resolvePnpmGlobalDirFromGlobalRoot`

```
export function resolvePnpmGlobalDirFromGlobalRoot(globalRoot?: string | null): string | null {
```

**Line:** 886 | **Kind:** fn

### `resolveGlobalInstallTarget`

```
export async function resolveGlobalInstallTarget(params: {
```

**Line:** 1007 | **Kind:** fn

### `detectGlobalInstallManagerForRoot`

```
export async function detectGlobalInstallManagerForRoot(
```

**Line:** 1124 | **Kind:** fn

### `detectGlobalInstallManagerByPresence`

```
export async function detectGlobalInstallManagerByPresence(
```

**Line:** 1190 | **Kind:** fn

### `globalInstallArgs`

```
export function globalInstallArgs(
```

**Line:** 1219 | **Kind:** fn

### `globalInstallFallbackArgs`

```
export function globalInstallFallbackArgs(
```

**Line:** 1267 | **Kind:** fn

### `cleanupGlobalRenameDirs`

```
export async function cleanupGlobalRenameDirs(params: {
```

**Line:** 1294 | **Kind:** fn
