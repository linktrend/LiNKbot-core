# scripts/generate-npm-shrinkwrap.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1485
- **Language:** JavaScript
- **Symbols:** 68
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 24 | fn | usage | (private) | `function usage() {` |
| 31 | fn | normalizeOverrideValue | (private) | `function normalizeOverrideValue(value) {` |
| 46 | fn | normalizeOverrides | (private) | `function normalizeOverrides(overrides) {` |
| 69 | fn | isPlainObject | (private) | `function isPlainObject(value) {` |
| 73 | fn | readWorkspaceOverrides | (private) | `function readWorkspaceOverrides() {` |
| 78 | fn | readWorkspacePackageExtensions | (private) | `function readWorkspacePackageExtensions() {` |
| 85 | fn | parsePnpmPackageKey | (private) | `function parsePnpmPackageKey(packageKey) {` |
| 103 | fn | readPnpmLockPackages | (private) | `function readPnpmLockPackages() {` |
| 123 | fn | collectPnpmLockPackageVersions | (private) | `function collectPnpmLockPackageVersions(lockfil...` |
| 141 | fn | stableVersionParts | (private) | `function stableVersionParts(version) {` |
| 152 | fn | pnpmLockOverrideVersionForVersions | (private) | `function pnpmLockOverrideVersionForVersions(ver...` |
| 180 | fn | readPnpmLockVersionOverrides | (private) | `function readPnpmLockVersionOverrides() {` |
| 194 | fn | addNestedOverride | (private) | `function addNestedOverride(overrides, parentSel...` |
| 210 | fn | expandScopedOverrideValue | (private) | `function expandScopedOverrideValue(overrides, d...` |
| 234 | fn | expandScopedOverrideChildren | (private) | `function expandScopedOverrideChildren(overrides) {` |
| 267 | fn | readPnpmLockScopedVersionOverrides | (private) | `function readPnpmLockScopedVersionOverrides() {` |
| 316 | fn | mergeOverrideEntry | (private) | `function mergeOverrideEntry(merged, name, spec) {` |
| 357 | fn | preferredExactOverrideRootSpec | (private) | `function preferredExactOverrideRootSpec(current...` |
| 361 | fn | exactOverrideVersionsMatch | (private) | `function exactOverrideVersionsMatch(left, right) {` |
| 371 | fn | parseNpmAliasOverrideSpec | (private) | `function parseNpmAliasOverrideSpec(spec) {` |
| 382 | fn | mergeOverrides | (private) | `function mergeOverrides(packageOverrides, works...` |
| 393 | fn | readShrinkwrapOverrides | (private) | `function readShrinkwrapOverrides() {` |
| 403 | fn | packageJsonForShrinkwrap | (private) | `function packageJsonForShrinkwrap(packageJson, ...` |
| 425 | fn | createNpmShrinkwrapCommand | pub | `export function createNpmShrinkwrapCommand(args...` |
| 440 | fn | readPositiveIntEnv | pub | `export function readPositiveIntEnv(name, fallba...` |
| 456 | fn | createNpmShrinkwrapExecOptions | pub | `export function createNpmShrinkwrapExecOptions(...` |
| 476 | fn | runNpm | (private) | `function runNpm(args, cwd) {` |
| 481 | fn | packageExtensionAppliesToDependency | (private) | `function packageExtensionAppliesToDependency(se...` |
| 485 | fn | packageExtensionMarksOptionalPeer | (private) | `function packageExtensionMarksOptionalPeer(pack...` |
| 497 | fn | shouldUseLegacyPeerDepsForShrinkwrap | (private) | `function shouldUseLegacyPeerDepsForShrinkwrap(` |
| 523 | fn | applyPackageExtensionPeerMetadata | (private) | `function applyPackageExtensionPeerMetadata(` |
| 568 | fn | exactVersionFromOverrideSpec | (private) | `function exactVersionFromOverrideSpec(spec) {` |
| 586 | fn | exactOverrideRulesFromOverrides | (private) | `function exactOverrideRulesFromOverrides(overri...` |
| 594 | fn | parseLockPackagePath | (private) | `function parseLockPackagePath(lockPath) {` |
| 618 | fn | collectOverrideViolations | (private) | `function collectOverrideViolations(lockfile, ov...` |
| 642 | fn | disableShrinkwrappedOverrideConflictSources | (private) | `function disableShrinkwrappedOverrideConflictSo...` |
| 671 | fn | describeOverrideViolations | (private) | `function describeOverrideViolations(violations) {` |
| 681 | fn | normalizeShrinkwrapOverrides | (private) | `function normalizeShrinkwrapOverrides(tempDir, ...` |
| 715 | fn | normalizeNpmVersionDrift | (private) | `function normalizeNpmVersionDrift(lockfile) {` |
| 735 | fn | generateShrinkwrap | (private) | `function generateShrinkwrap(packageDir, options...` |
| 783 | fn | collectPnpmLockViolations | (private) | `function collectPnpmLockViolations(shrinkwrap, ...` |
| 805 | fn | declaredPackageDependencies | (private) | `function declaredPackageDependencies(packageJso...` |
| 819 | fn | packageNameForLockPath | (private) | `function packageNameForLockPath(lockPath) {` |
| 823 | fn | dependencyCandidatePaths | (private) | `function dependencyCandidatePaths(parentLockPat...` |
| 846 | fn | resolveShrinkwrapDependency | (private) | `function resolveShrinkwrapDependency(packages, ...` |
| 859 | fn | collectCurrentShrinkwrapOverrides | (private) | `function collectCurrentShrinkwrapOverrides(` |
| 928 | fn | readCurrentShrinkwrapOverrides | (private) | `function readCurrentShrinkwrapOverrides(` |
| 947 | fn | readCurrentShrinkwrap | (private) | `function readCurrentShrinkwrap(packageDir) {` |
| 958 | fn | isStablePatchDrift | (private) | `function isStablePatchDrift(generatedVersion, c...` |
| 970 | fn | compareStableVersions | (private) | `function compareStableVersions(leftVersion, rig...` |
| 979 | fn | versionSatisfiesSimpleSpec | (private) | `function versionSatisfiesSimpleSpec(version, sp...` |
| 1014 | fn | dependencySpecForLockPath | (private) | `function dependencySpecForLockPath(packages, lo...` |
| 1026 | fn | restoreCurrentPnpmLockedPackages | (private) | `function restoreCurrentPnpmLockedPackages(` |
| 1080 | fn | assertShrinkwrapMatchesPnpmLock | (private) | `function assertShrinkwrapMatchesPnpmLock(shrink...` |
| 1094 | fn | packageLabel | (private) | `function packageLabel(packageDir) {` |
| 1099 | fn | shrinkwrapPathForPackage | (private) | `function shrinkwrapPathForPackage(packageDir) {` |
| 1103 | fn | listManagedShrinkwrapPackageDirs | (private) | `function listManagedShrinkwrapPackageDirs() {` |
| 1128 | fn | shrinkwrapPackageDirsForChangedPaths | (private) | `function shrinkwrapPackageDirsForChangedPaths(c...` |
| 1183 | fn | normalizeChangedPath | (private) | `function normalizeChangedPath(rawPath) {` |
| 1190 | fn | packageDependencyInputsChanged | (private) | `function packageDependencyInputsChanged(package...` |
| 1210 | fn | listCheckChangedPaths | (private) | `function listCheckChangedPaths() {` |
| 1219 | fn | resolvePackageDirs | pub | `export function resolvePackageDirs(args) {` |
| 1323 | fn | updateOrCheckPackage | (private) | `function updateOrCheckPackage(packageDir, check...` |
| 1352 | fn | resolveShrinkwrapJobs | pub | `export function resolveShrinkwrapJobs(` |
| 1369 | fn | runPackageWorker | (private) | `async function runPackageWorker(packageDir, che...` |
| 1395 | fn | updateOrCheckPackages | (private) | `async function updateOrCheckPackages({ check, c...` |
| 1427 | fn | main | (private) | `async function main() {` |
| 1457 | fn | handleMainError | (private) | `function handleMainError(error) {` |

## Public API

### `createNpmShrinkwrapCommand`

```
export function createNpmShrinkwrapCommand(args, options = {}) {
```

**Line:** 425 | **Kind:** fn

### `readPositiveIntEnv`

```
export function readPositiveIntEnv(name, fallback, env = process.env) {
```

**Line:** 440 | **Kind:** fn

### `createNpmShrinkwrapExecOptions`

```
export function createNpmShrinkwrapExecOptions(invocation, cwd, env = process.env) {
```

**Line:** 456 | **Kind:** fn

### `resolvePackageDirs`

```
export function resolvePackageDirs(args) {
```

**Line:** 1219 | **Kind:** fn

### `resolveShrinkwrapJobs`

```
export function resolveShrinkwrapJobs(
```

**Line:** 1352 | **Kind:** fn
