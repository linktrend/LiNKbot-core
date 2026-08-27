# src/plugins/manifest-registry.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1270
- **Language:** TypeScript
- **Symbols:** 32
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 76 | fn | resolvePluginSourcePath | (private) | `function resolvePluginSourcePath(sourcePath: st...` |
| 89 | fn | isPluginRootPath | (private) | `function isPluginRootPath(params: {` |
| 117 | fn | resolveManifestPluginSourcePath | (private) | `function resolveManifestPluginSourcePath(params: {` |
| 126 | fn | pushDiagnostic | (private) | `const pushDiagnostic = () => {` |
| 172 | type | PluginManifestContractListKey | pub | - |
| 193 | type | SeenIdEntry | (private) | - |
| 207 | type | PluginManifestRecord | pub | - |
| 284 | type | PluginManifestRegistry | pub | - |
| 289 | type | BundledChannelConfigCollector | pub | - |
| 295 | fn | rejectCaseFoldedIdCollisions | (private) | `function rejectCaseFoldedIdCollisions(` |
| 327 | fn | safeStatMtimeMs | (private) | `function safeStatMtimeMs(filePath: string): num...` |
| 335 | fn | normalizePreferredPluginIds | (private) | `function normalizePreferredPluginIds(raw: unkno...` |
| 339 | fn | mergePackageChannelMetaIntoChannelConfigs | (private) | `function mergePackageChannelMetaIntoChannelConf...` |
| 381 | fn | mergeContractLists | (private) | `function mergeContractLists(` |
| 393 | fn | mergeManifestContracts | (private) | `function mergeManifestContracts(` |
| 434 | fn | mergeCatalogChannelConfigs | (private) | `function mergeCatalogChannelConfigs(params: {` |
| 485 | fn | mergeManifestCatalog | (private) | `function mergeManifestCatalog(` |
| 505 | fn | buildRecord | (private) | `function buildRecord(params: {` |
| 647 | fn | buildBundleRecord | (private) | `function buildBundleRecord(params: {` |
| 700 | fn | pushNonBundledChannelConfigDescriptorDiagnostic | (private) | `function pushNonBundledChannelConfigDescriptorD...` |
| 739 | fn | pushManifestCompatibilityDiagnostics | (private) | `function pushManifestCompatibilityDiagnostics(p...` |
| 747 | fn | dedupePluginDiagnostics | (private) | `function dedupePluginDiagnostics(diagnostics: P...` |
| 761 | fn | matchesInstalledPluginRecord | (private) | `function matchesInstalledPluginRecord(params: {` |
| 810 | fn | npmSpecMatchesPackage | (private) | `function npmSpecMatchesPackage(value: string | ...` |
| 821 | fn | isTrustedOfficialPluginInstall | (private) | `function isTrustedOfficialPluginInstall(params: {` |
| 881 | fn | resolveDuplicatePrecedenceRank | (private) | `function resolveDuplicatePrecedenceRank(params: {` |
| 922 | fn | isIntentionalInstalledBundledDuplicate | (private) | `function isIntentionalInstalledBundledDuplicate...` |
| 954 | fn | isSameGlobalPackageDuplicate | (private) | `function isSameGlobalPackageDuplicate(left: Plu...` |
| 970 | fn | loadPluginManifestRegistry | pub | `export function loadPluginManifestRegistry(` |
| 1135 | fn | schemaCacheKey | (private) | `const schemaCacheKey = (() => {` |
| 1176 | fn | samePlugin | (private) | `const samePlugin = (() => {` |
| 1255 | fn | loadBundledPluginManifestRegistry | pub | `export function loadBundledPluginManifestRegistry(` |

## Public API

### `loadPluginManifestRegistry`

```
export function loadPluginManifestRegistry(
```

**Line:** 970 | **Kind:** fn

### `loadBundledPluginManifestRegistry`

```
export function loadBundledPluginManifestRegistry(
```

**Line:** 1255 | **Kind:** fn
