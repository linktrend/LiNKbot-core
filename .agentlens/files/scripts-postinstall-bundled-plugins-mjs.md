# scripts/postinstall-bundled-plugins.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1045
- **Language:** JavaScript
- **Symbols:** 40
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 116 | class | InstalledDistScanLimitError | (private) | - |
| 118 | fn | normalizeRelativePath | (private) | `function normalizeRelativePath(filePath) {` |
| 122 | fn | resolvePostinstallOsHomeDir | (private) | `function resolvePostinstallOsHomeDir(env, getHo...` |
| 126 | fn | resolvePostinstallTildePath | (private) | `function resolvePostinstallTildePath(input, hom...` |
| 136 | fn | resolvePostinstallOpenClawHomeDir | (private) | `function resolvePostinstallOpenClawHomeDir(env,...` |
| 142 | fn | resolvePostinstallUserPath | (private) | `function resolvePostinstallUserPath(input, open...` |
| 146 | fn | readInstalledDistInventory | (private) | `function readInstalledDistInventory(params = {}) {` |
| 166 | fn | isRecoverableInstalledDistInventoryError | (private) | `function isRecoverableInstalledDistInventoryErr...` |
| 170 | fn | resolveInstalledDistRoot | (private) | `function resolveInstalledDistRoot(params = {}) {` |
| 192 | fn | assertSafeInstalledDistPath | (private) | `function assertSafeInstalledDistPath(relativePa...` |
| 203 | fn | createInstalledDistScanBudget | (private) | `function createInstalledDistScanBudget(params =...` |
| 210 | fn | resolveInstalledDistScanBudget | (private) | `function resolveInstalledDistScanBudget(params ...` |
| 214 | fn | countInstalledDistScanEntry | (private) | `function countInstalledDistScanEntry(budget) {` |
| 253 | fn | listInstalledDistFiles | (private) | `function listInstalledDistFiles(params = {}) {` |
| 292 | fn | pruneEmptyDistDirectories | (private) | `function pruneEmptyDistDirectories(params = {}) {` |
| 302 | fn | isDirectoryEmpty | (private) | `function isDirectoryEmpty(currentDir) {` |
| 311 | fn | prune | (private) | `function prune(currentDir) {` |
| 351 | fn | isLegacyInstalledPluginDependencyDirName | (private) | `function isLegacyInstalledPluginDependencyDirNa...` |
| 355 | fn | pruneLegacyInstalledPluginDependencyDirs | (private) | `function pruneLegacyInstalledPluginDependencyDi...` |
| 399 | fn | splitPostinstallPathList | (private) | `function splitPostinstallPathList(value) {` |
| 410 | fn | collectLegacyPluginRuntimeDepsStateRoots | pub | `export function collectLegacyPluginRuntimeDepsS...` |
| 415 | fn | addStateRoot | (private) | `const addStateRoot = (root) => {` |
| 441 | fn | isPathInsideRoot | (private) | `function isPathInsideRoot(candidate, root) {` |
| 446 | fn | collectLegacyPluginRuntimeDepsSymlinkPaths | (private) | `function collectLegacyPluginRuntimeDepsSymlinkP...` |
| 459 | fn | addCandidate | (private) | `function addCandidate(linkPath) {` |
| 516 | fn | pruneLegacyPluginRuntimeDepsState | pub | `export function pruneLegacyPluginRuntimeDepsSta...` |
| 562 | fn | pruneInstalledPackageDist | pub | `export function pruneInstalledPackageDist(param...` |
| 638 | fn | applyBaileysEncryptedStreamFinishHotfix | pub | `export function applyBaileysEncryptedStreamFini...` |
| 661 | fn | validateTargetPath | (private) | `function validateTargetPath() {` |
| 795 | fn | applyBundledPluginRuntimeHotfixes | (private) | `function applyBundledPluginRuntimeHotfixes(para...` |
| 807 | fn | resolveDistModuleUrl | (private) | `function resolveDistModuleUrl(packageRoot, dist...` |
| 811 | fn | importInstalledDistModule | (private) | `async function importInstalledDistModule(params...` |
| 822 | fn | runPluginRegistryPostinstallMigration | pub | `export async function runPluginRegistryPostinst...` |
| 863 | fn | isSourceCheckoutRoot | pub | `export function isSourceCheckoutRoot(params) {` |
| 874 | fn | pruneBundledPluginSourceNodeModules | pub | `export function pruneBundledPluginSourceNodeMod...` |
| 898 | fn | shouldRunBundledPluginPostinstall | (private) | `function shouldRunBundledPluginPostinstall(para...` |
| 908 | fn | isCompileCachePrunePermissionDenied | (private) | `function isCompileCachePrunePermissionDenied(er...` |
| 912 | fn | pruneOpenClawCompileCache | pub | `export function pruneOpenClawCompileCache(param...` |
| 955 | fn | runBundledPluginPostinstall | pub | `export function runBundledPluginPostinstall(par...` |
| 1028 | fn | isDirectPostinstallInvocation | pub | `export function isDirectPostinstallInvocation(p...` |

## Public API

### `collectLegacyPluginRuntimeDepsStateRoots`

```
export function collectLegacyPluginRuntimeDepsStateRoots(params = {}) {
```

**Line:** 410 | **Kind:** fn

### `pruneLegacyPluginRuntimeDepsState`

```
export function pruneLegacyPluginRuntimeDepsState(params = {}) {
```

**Line:** 516 | **Kind:** fn

### `pruneInstalledPackageDist`

```
export function pruneInstalledPackageDist(params = {}) {
```

**Line:** 562 | **Kind:** fn

### `applyBaileysEncryptedStreamFinishHotfix`

```
export function applyBaileysEncryptedStreamFinishHotfix(params = {}) {
```

**Line:** 638 | **Kind:** fn

### `runPluginRegistryPostinstallMigration`

```
export async function runPluginRegistryPostinstallMigration(params = {}) {
```

**Line:** 822 | **Kind:** fn

### `isSourceCheckoutRoot`

```
export function isSourceCheckoutRoot(params) {
```

**Line:** 863 | **Kind:** fn

### `pruneBundledPluginSourceNodeModules`

```
export function pruneBundledPluginSourceNodeModules(params = {}) {
```

**Line:** 874 | **Kind:** fn

### `pruneOpenClawCompileCache`

```
export function pruneOpenClawCompileCache(params = {}) {
```

**Line:** 912 | **Kind:** fn

### `runBundledPluginPostinstall`

```
export function runBundledPluginPostinstall(params = {}) {
```

**Line:** 955 | **Kind:** fn

### `isDirectPostinstallInvocation`

```
export function isDirectPostinstallInvocation(params = {}) {
```

**Line:** 1028 | **Kind:** fn
