# src/plugins/discovery.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1717
- **Language:** TypeScript
- **Symbols:** 49
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 66 | type | PluginCandidate | pub | - |
| 91 | type | PluginDiscoveryResult | pub | - |
| 96 | type | PluginDiscoveryRootScope | (private) | - |
| 98 | fn | currentUid | (private) | `function currentUid(overrideUid?: number | null...` |
| 111 | type | CandidateBlockReason | (private) | - |
| 117 | type | CandidateBlockIssue | (private) | - |
| 129 | fn | checkSourceEscapesRoot | (private) | `function checkSourceEscapesRoot(params: {` |
| 152 | fn | checkPathStatAndPermissions | (private) | `function checkPathStatAndPermissions(params: {` |
| 229 | fn | findCandidateBlockIssue | (private) | `function findCandidateBlockIssue(params: {` |
| 252 | fn | formatCandidateBlockMessage | (private) | `function formatCandidateBlockMessage(issue: Can...` |
| 265 | fn | isUnsafePluginCandidate | (private) | `function isUnsafePluginCandidate(params: {` |
| 293 | fn | isExtensionFile | (private) | `function isExtensionFile(filePath: string): boo...` |
| 309 | fn | shouldIgnoreScannedDirectory | (private) | `function shouldIgnoreScannedDirectory(dirName: ...` |
| 329 | fn | resolveScannedEntryType | (private) | `function resolveScannedEntryType(entry: fs.Dire...` |
| 353 | fn | resolvesToSameDirectory | (private) | `function resolvesToSameDirectory(` |
| 369 | fn | createDiscoveryResult | (private) | `function createDiscoveryResult(): PluginDiscove...` |
| 376 | fn | mergeDiscoveryResult | (private) | `function mergeDiscoveryResult(` |
| 405 | fn | addMissingRequiredPluginDiagnostics | (private) | `function addMissingRequiredPluginDiagnostics(re...` |
| 428 | type | InstalledPluginRecordPath | (private) | - |
| 433 | fn | isLinkedLocalPluginRecord | (private) | `function isLinkedLocalPluginRecord(params: {` |
| 456 | fn | collectInstalledPluginRecordPaths | (private) | `function collectInstalledPluginRecordPaths(` |
| 489 | fn | collectManagedPluginRecordPaths | (private) | `function collectManagedPluginRecordPaths(` |
| 511 | fn | resolveManagedPluginDirKey | (private) | `function resolveManagedPluginDirKey(` |
| 523 | fn | collectManagedPluginDirKeys | (private) | `function collectManagedPluginDirKeys(` |
| 537 | fn | isManagedPluginDir | (private) | `function isManagedPluginDir(params: {` |
| 553 | fn | readPackageManifest | (private) | `function readPackageManifest(` |
| 568 | fn | readTrustedPackageManifest | (private) | `function readTrustedPackageManifest(dir: string...` |
| 572 | fn | readPackageManifestStat | (private) | `function readPackageManifestStat(dir: string): ...` |
| 581 | fn | prunePackageManifestProcessCache | (private) | `function prunePackageManifestProcessCache(): vo...` |
| 591 | fn | readCandidatePackageManifest | (private) | `function readCandidatePackageManifest(params: {` |
| 633 | fn | deriveIdHint | (private) | `function deriveIdHint(params: {` |
| 667 | fn | derivePackagePluginIdHint | (private) | `function derivePackagePluginIdHint(params: {` |
| 687 | fn | pushInvalidPackageExtensionDiagnostic | (private) | `function pushInvalidPackageExtensionDiagnostic(...` |
| 711 | type | ResolvedCandidateManifest | (private) | - |
| 716 | fn | resolveCandidateManifest | (private) | `function resolveCandidateManifest(` |
| 727 | fn | addCandidate | (private) | `function addCandidate(params: {` |
| 803 | fn | discoverBundleInRoot | (private) | `function discoverBundleInRoot(params: {` |
| 863 | fn | addLegacyNpmDeclarationDiagnostic | (private) | `function addLegacyNpmDeclarationDiagnostic(para...` |
| 880 | fn | shouldSkipIncompatiblePackagePluginApi | (private) | `function shouldSkipIncompatiblePackagePluginApi...` |
| 924 | fn | discoverInDirectory | (private) | `function discoverInDirectory(params: {` |
| 1157 | fn | hasDiscoverablePluginTree | (private) | `function hasDiscoverablePluginTree(pluginsDir: ...` |
| 1174 | fn | isSourceCheckoutExtensionsDir | (private) | `function isSourceCheckoutExtensionsDir(extensio...` |
| 1185 | fn | resolveBundledSourceCheckoutExtensionsDir | (private) | `function resolveBundledSourceCheckoutExtensions...` |
| 1196 | fn | readChildDirectoryNames | (private) | `function readChildDirectoryNames(dir: string | ...` |
| 1212 | fn | readBundledDistOptOutDirectoryNames | (private) | `function readBundledDistOptOutDirectoryNames(so...` |
| 1228 | fn | discoverFromPath | (private) | `function discoverFromPath(params: {` |
| 1450 | fn | discoverConfiguredPluginLoadPathsInto | (private) | `function discoverConfiguredPluginLoadPathsInto(...` |
| 1485 | fn | discoverConfiguredPluginLoadPaths | pub | `export function discoverConfiguredPluginLoadPat...` |
| 1510 | fn | discoverOpenClawPlugins | pub | `export function discoverOpenClawPlugins(params: {` |

## Public API

### `discoverConfiguredPluginLoadPaths`

```
export function discoverConfiguredPluginLoadPaths(params: {
```

**Line:** 1485 | **Kind:** fn

### `discoverOpenClawPlugins`

```
export function discoverOpenClawPlugins(params: {
```

**Line:** 1510 | **Kind:** fn
