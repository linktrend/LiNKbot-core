# src/plugins/sdk-alias.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2010
- **Language:** TypeScript
- **Symbols:** 80
- **Public symbols:** 11

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 12 | type | PluginSdkAliasCandidateKind | (private) | - |
| 13 | type | PluginSdkResolutionPreference | pub | - |
| 15 | type | LoaderModuleResolveParams | (private) | - |
| 24 | type | PluginRuntimeModuleResolution | pub | - |
| 32 | type | PluginSdkPackageJson | (private) | - |
| 38 | type | WorkspacePackageAliasEntry | (private) | - |
| 49 | fn | sanitizeJitiCachePathSegment | (private) | `function sanitizeJitiCachePathSegment(value: st...` |
| 54 | fn | resolveJitiFsCacheTmpDir | (private) | `function resolveJitiFsCacheTmpDir(): string {` |
| 68 | fn | readJitiBooleanEnv | (private) | `function readJitiBooleanEnv(name: string, defau...` |
| 79 | fn | shouldUseJitiFsCache | (private) | `function shouldUseJitiFsCache(): boolean {` |
| 83 | fn | resolvePluginLoaderJitiNativeModules | (private) | `function resolvePluginLoaderJitiNativeModules()...` |
| 95 | fn | normalizeJitiAliasTargetPath | (private) | `function normalizeJitiAliasTargetPath(targetPat...` |
| 99 | fn | resolveLoaderModulePath | (private) | `function resolveLoaderModulePath(params: Loader...` |
| 103 | fn | readPluginSdkPackageJson | (private) | `function readPluginSdkPackageJson(packageRoot: ...` |
| 117 | fn | resolveJitiCacheModulePath | (private) | `function resolveJitiCacheModulePath(params: Loa...` |
| 128 | fn | resolvePluginLoaderJitiFsCacheDir | (private) | `function resolvePluginLoaderJitiFsCacheDir(para...` |
| 152 | fn | resolvePluginLoaderJitiFsCacheOption | (private) | `function resolvePluginLoaderJitiFsCacheOption(` |
| 158 | fn | isSafePluginSdkSubpathSegment | (private) | `function isSafePluginSdkSubpathSegment(subpath:...` |
| 162 | fn | listPluginSdkSubpathsFromPackageJson | (private) | `function listPluginSdkSubpathsFromPackageJson(p...` |
| 170 | fn | hasTrustedOpenClawRootIndicator | (private) | `function hasTrustedOpenClawRootIndicator(params: {` |
| 192 | fn | readPluginSdkSubpathsFromPackageRoot | (private) | `function readPluginSdkSubpathsFromPackageRoot(p...` |
| 204 | fn | resolveTrustedOpenClawRootFromArgvHint | (private) | `function resolveTrustedOpenClawRootFromArgvHint...` |
| 225 | fn | findNearestPluginSdkPackageRoot | (private) | `function findNearestPluginSdkPackageRoot(startD...` |
| 241 | fn | resolveLoaderPackageRoot | pub | `export function resolveLoaderPackageRoot(` |
| 258 | fn | createPluginRuntimeModuleCandidateMap | (private) | `function createPluginRuntimeModuleCandidateMap(...` |
| 265 | fn | appendPluginRuntimeModuleCandidates | (private) | `function appendPluginRuntimeModuleCandidates(` |
| 276 | fn | appendSiblingPluginRuntimeModuleCandidates | (private) | `function appendSiblingPluginRuntimeModuleCandid...` |
| 290 | fn | dedupeResolvedPaths | (private) | `function dedupeResolvedPaths(paths: readonly st...` |
| 304 | fn | listAncestorPluginRuntimeModuleCandidates | (private) | `function listAncestorPluginRuntimeModuleCandida...` |
| 328 | fn | listArgvRuntimeFallbackStartDirs | (private) | `function listArgvRuntimeFallbackStartDirs(argv1...` |
| 353 | fn | formatResolutionError | (private) | `function formatResolutionError(error: unknown):...` |
| 357 | fn | resolveDevSourceRootParam | (private) | `function resolveDevSourceRootParam(params: { de...` |
| 363 | fn | resolveLoaderPluginSdkPackageRoot | (private) | `function resolveLoaderPluginSdkPackageRoot(` |
| 389 | fn | resolvePluginSdkAliasCandidateOrder | (private) | `function resolvePluginSdkAliasCandidateOrder(pa...` |
| 444 | type | PrivatePluginSdkSubpathOwner | (private) | - |
| 964 | fn | normalizePackageExportSubpath | (private) | `function normalizePackageExportSubpath(exportKe...` |
| 975 | fn | resolvePackageExportImportPath | (private) | `function resolvePackageExportImportPath(value: ...` |
| 990 | fn | listRootPackagedWorkspacePackageAliasEntries | (private) | `function listRootPackagedWorkspacePackageAliasE...` |
| 1000 | fn | visit | (private) | `const visit = (dir: string, prefix = "") => {` |
| 1030 | fn | listWorkspacePackageExportAliasEntries | pub | `export function listWorkspacePackageExportAlias...` |
| 1075 | fn | isUsableDistPluginSdkArtifact | (private) | `function isUsableDistPluginSdkArtifact(candidat...` |
| 1102 | fn | readPrivateLocalOnlyPluginSdkSubpaths | (private) | `function readPrivateLocalOnlyPluginSdkSubpaths(...` |
| 1118 | fn | readBundledPluginPackageName | (private) | `function readBundledPluginPackageName(packageJs...` |
| 1124 | fn | isBundledPluginPublicSurfaceSourceBasename | (private) | `function isBundledPluginPublicSurfaceSourceBase...` |
| 1134 | fn | listBundledPluginPublicSurfaceSourceBasenames | (private) | `function listBundledPluginPublicSurfaceSourceBa...` |
| 1164 | fn | resolveBundledPluginPublicSurfaceAliasTarget | (private) | `function resolveBundledPluginPublicSurfaceAlias...` |
| 1199 | fn | resolveBundledPluginPackagePublicSurfaceAliasMap | (private) | `function resolveBundledPluginPackagePublicSurfa...` |
| 1261 | fn | resolveWorkspacePackageAliasMap | (private) | `function resolveWorkspacePackageAliasMap(params: {` |
| 1317 | fn | shouldIncludePrivateLocalOnlyPluginSdkSubpaths | (private) | `function shouldIncludePrivateLocalOnlyPluginSdk...` |
| 1321 | fn | isBundledPluginModulePath | (private) | `function isBundledPluginModulePath(params: {` |
| 1338 | fn | isAnyBundledPluginModulePath | (private) | `function isAnyBundledPluginModulePath(params: {...` |
| 1345 | fn | isOfficialInstalledPluginPackageRoot | (private) | `function isOfficialInstalledPluginPackageRoot(p...` |
| 1360 | fn | isOfficialInstalledPluginModulePath | (private) | `function isOfficialInstalledPluginModulePath(pa...` |
| 1382 | fn | isTrustedPrivatePluginSdkOwnerPath | (private) | `function isTrustedPrivatePluginSdkOwnerPath(par...` |
| 1404 | fn | findPrivatePluginSdkSubpathOwners | (private) | `function findPrivatePluginSdkSubpathOwners(` |
| 1410 | fn | listTrustedPrivatePluginSdkOwnerKeys | (private) | `function listTrustedPrivatePluginSdkOwnerKeys(p...` |
| 1419 | fn | resolvePrivatePluginSdkOwnerPackageRoot | (private) | `function resolvePrivatePluginSdkOwnerPackageRoo...` |
| 1434 | fn | shouldIncludePrivateLocalOnlyPluginSdkSubpath | (private) | `function shouldIncludePrivateLocalOnlyPluginSdk...` |
| 1455 | fn | hasPluginSdkSubpathArtifact | (private) | `function hasPluginSdkSubpathArtifact(packageRoo...` |
| 1465 | fn | listDistPluginSdkArtifactSubpaths | (private) | `function listDistPluginSdkArtifactSubpaths(pack...` |
| 1480 | fn | listPrivateLocalOnlyPluginSdkSubpaths | (private) | `function listPrivateLocalOnlyPluginSdkSubpaths(...` |
| 1495 | fn | listPluginSdkExportedSubpaths | (private) | `function listPluginSdkExportedSubpaths(` |
| 1539 | fn | resolvePluginSdkScopedAliasMap | (private) | `function resolvePluginSdkScopedAliasMap(` |
| 1644 | fn | hasJitiNormalizedAliasMarker | (private) | `function hasJitiNormalizedAliasMarker(aliasMap:...` |
| 1648 | fn | createJitiAliasContentCacheKey | (private) | `function createJitiAliasContentCacheKey(aliasMa...` |
| 1655 | fn | isConcreteJitiAliasTarget | (private) | `function isConcreteJitiAliasTarget(target: stri...` |
| 1659 | fn | resolveJitiAliasTarget | (private) | `function resolveJitiAliasTarget(` |
| 1694 | fn | normalizePluginLoaderAliasMapForJiti | (private) | `function normalizePluginLoaderAliasMapForJiti(` |
| 1711 | fn | getAliasDepth | (private) | `const getAliasDepth = (key: string) => {` |
| 1745 | fn | buildPluginLoaderAliasMapCacheKey | (private) | `function buildPluginLoaderAliasMapCacheKey(para...` |
| 1765 | fn | buildPluginLoaderModuleConfigCacheKey | (private) | `function buildPluginLoaderModuleConfigCacheKey(...` |
| 1785 | fn | buildPluginLoaderAliasMap | pub | `export function buildPluginLoaderAliasMap(` |
| 1835 | fn | resolvePluginRuntimeModulePathWithDiagnostics | pub | `export function resolvePluginRuntimeModulePathW...` |
| 1894 | fn | buildPluginLoaderJitiOptions | pub | `export function buildPluginLoaderJitiOptions(` |
| 1918 | fn | supportsNativeModuleRuntime | (private) | `function supportsNativeModuleRuntime(): boolean {` |
| 1923 | fn | isBundledPluginDistModulePath | (private) | `function isBundledPluginDistModulePath(modulePa...` |
| 1927 | fn | shouldPreferNativeModuleLoad | pub | `export function shouldPreferNativeModuleLoad(mo...` |
| 1942 | fn | resolvePluginLoaderTryNative | pub | `export function resolvePluginLoaderTryNative(` |
| 1959 | fn | createPluginLoaderModuleCacheKey | pub | `export function createPluginLoaderModuleCacheKe...` |
| 1970 | fn | resolvePluginLoaderModuleConfig | pub | `export function resolvePluginLoaderModuleConfig...` |

## Public API

### `resolveLoaderPackageRoot`

```
export function resolveLoaderPackageRoot(
```

**Line:** 241 | **Kind:** fn

### `listWorkspacePackageExportAliasEntries`

```
export function listWorkspacePackageExportAliasEntries(params: {
```

**Line:** 1030 | **Kind:** fn

### `buildPluginLoaderAliasMap`

```
export function buildPluginLoaderAliasMap(
```

**Line:** 1785 | **Kind:** fn

### `resolvePluginRuntimeModulePathWithDiagnostics`

```
export function resolvePluginRuntimeModulePathWithDiagnostics(
```

**Line:** 1835 | **Kind:** fn

### `buildPluginLoaderJitiOptions`

```
export function buildPluginLoaderJitiOptions(
```

**Line:** 1894 | **Kind:** fn

### `shouldPreferNativeModuleLoad`

```
export function shouldPreferNativeModuleLoad(modulePath: string): boolean {
```

**Line:** 1927 | **Kind:** fn

### `resolvePluginLoaderTryNative`

```
export function resolvePluginLoaderTryNative(
```

**Line:** 1942 | **Kind:** fn

### `createPluginLoaderModuleCacheKey`

```
export function createPluginLoaderModuleCacheKey(params: {
```

**Line:** 1959 | **Kind:** fn

### `resolvePluginLoaderModuleConfig`

```
export function resolvePluginLoaderModuleConfig(params: {
```

**Line:** 1970 | **Kind:** fn
