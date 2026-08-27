# src/plugins/management-service.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1333
- **Language:** TypeScript
- **Symbols:** 53
- **Public symbols:** 9

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 69 | type | ManagedPluginCatalogEntry | (private) | - |
| 90 | type | ManagedPluginCatalog | (private) | - |
| 96 | type | ManagedPluginInstallRequest | (private) | - |
| 105 | class | ManagedPluginLifecycleError | pub | - |
| 130 | type | OfficialCatalogResult | (private) | - |
| 139 | fn | officialCatalogCacheKey | (private) | `function officialCatalogCacheKey(config: OpenCl...` |
| 144 | fn | clearManagedPluginOfficialCatalogCache | pub | `export function clearManagedPluginOfficialCatal...` |
| 148 | fn | resolveCatalogManifestIcon | (private) | `function resolveCatalogManifestIcon(manifest: u...` |
| 155 | fn | resolveCatalogEntryIcon | (private) | `function resolveCatalogEntryIcon(entry: Officia...` |
| 162 | fn | mergeCatalogMetadata | (private) | `function mergeCatalogMetadata(` |
| 207 | type | CatalogPackageSourceIdentity | (private) | - |
| 212 | fn | resolveCatalogPackageSourceIdentities | (private) | `function resolveCatalogPackageSourceIdentities(` |
| 226 | fn | matchesBundledCatalogIdentity | (private) | `function matchesBundledCatalogIdentity(params: {` |
| 243 | fn | overlayBundledOfficialPluginCatalogMetadata | (private) | `function overlayBundledOfficialPluginCatalogMet...` |
| 278 | fn | loadOfficialCatalog | (private) | `async function loadOfficialCatalog(config: Open...` |
| 298 | fn | normalizeKinds | (private) | `function normalizeKinds(kind: string | readonly...` |
| 305 | fn | normalizeCatalogMetadata | (private) | `function normalizeCatalogMetadata(` |
| 323 | fn | normalizeFeaturedAt | (private) | `function normalizeFeaturedAt(value: unknown): n...` |
| 327 | fn | resolveCatalogInstallAction | (private) | `function resolveCatalogInstallAction(params: {` |
| 343 | fn | derivePluginCategory | (private) | `function derivePluginCategory(manifest: PluginM...` |
| 380 | fn | firstPluginError | (private) | `function firstPluginError(` |
| 389 | fn | compareCatalogEntries | (private) | `function compareCatalogEntries(` |
| 416 | fn | resolveInstalledOfficialCatalogEntry | (private) | `function resolveInstalledOfficialCatalogEntry(p...` |
| 433 | fn | resolveOfficialCatalogIconUrl | (private) | `function resolveOfficialCatalogIconUrl(` |
| 443 | type | PluginMetadataSnapshot | (private) | - |
| 444 | type | PluginIndexRecord | (private) | - |
| 446 | fn | resolveInstalledHostedOfficialEntry | (private) | `function resolveInstalledHostedOfficialEntry(pa...` |
| 526 | fn | resolvePluginIconUrlFromCatalogFacts | (private) | `function resolvePluginIconUrlFromCatalogFacts(p...` |
| 553 | fn | resolveManagedPluginIconUrl | pub | `export async function resolveManagedPluginIconU...` |
| 570 | fn | normalizeManagedCatalogIconUrl | (private) | `function normalizeManagedCatalogIconUrl(value: ...` |
| 586 | fn | resolveManagedSetupCatalogIconUrl | pub | `export function resolveManagedSetupCatalogIconU...` |
| 611 | fn | listManagedPlugins | pub | `export async function listManagedPlugins(params: {` |
| 708 | fn | entryPackageInstalled | (private) | `const entryPackageInstalled = (entry: OfficialE...` |
| 767 | fn | assertValidConfigSnapshot | (private) | `function assertValidConfigSnapshot(` |
| 792 | fn | readPluginMutationSnapshot | (private) | `async function readPluginMutationSnapshot(` |
| 803 | fn | createSilentRuntime | (private) | `function createSilentRuntime(): RuntimeEnv {` |
| 813 | fn | createInstallLogger | (private) | `function createInstallLogger(warnings: string[]) {` |
| 820 | fn | resolveOfficialEntryById | (private) | `function resolveOfficialEntryById(` |
| 828 | fn | resolveDeclaredOfficialPluginId | (private) | `function resolveDeclaredOfficialPluginId(` |
| 839 | fn | resolveOfficialEntryByClawHubPackage | (private) | `function resolveOfficialEntryByClawHubPackage(` |
| 854 | fn | resolveHostedOfficialEntryByClawHubPackage | (private) | `function resolveHostedOfficialEntryByClawHubPac...` |
| 867 | fn | buildClawHubSpec | (private) | `function buildClawHubSpec(packageName: string, ...` |
| 875 | fn | throwInstallFailure | (private) | `function throwInstallFailure(result: {` |
| 895 | fn | installRecordOwnsTarget | (private) | `function installRecordOwnsTarget(` |
| 904 | fn | cleanupFailedManagedPluginInstall | (private) | `async function cleanupFailedManagedPluginInstal...` |
| 955 | fn | throwPersistenceFailureWithCleanupWarnings | (private) | `function throwPersistenceFailureWithCleanupWarn...` |
| 976 | fn | persistManagedPluginInstall | (private) | `async function persistManagedPluginInstall(para...` |
| 1002 | fn | installFromClawHub | (private) | `async function installFromClawHub(params: {` |
| 1072 | fn | installFromOfficialCatalog | (private) | `async function installFromOfficialCatalog(param...` |
| 1150 | fn | installManagedPlugin | pub | `export async function installManagedPlugin(para...` |
| 1194 | fn | setManagedPluginEnabled | pub | `export async function setManagedPluginEnabled(p...` |
| 1265 | fn | uninstallManagedPlugin | pub | `export async function uninstallManagedPlugin(pa...` |
| 1330 | fn | formatManagedPluginLifecycleError | pub | `export function formatManagedPluginLifecycleErr...` |

## Public API

### `clearManagedPluginOfficialCatalogCache`

```
export function clearManagedPluginOfficialCatalogCache(): void {
```

**Line:** 144 | **Kind:** fn

### `resolveManagedPluginIconUrl`

```
export async function resolveManagedPluginIconUrl(params: {
```

**Line:** 553 | **Kind:** fn

### `resolveManagedSetupCatalogIconUrl`

```
export function resolveManagedSetupCatalogIconUrl(params: {
```

**Line:** 586 | **Kind:** fn

### `listManagedPlugins`

```
export async function listManagedPlugins(params: {
```

**Line:** 611 | **Kind:** fn

### `installManagedPlugin`

```
export async function installManagedPlugin(params: {
```

**Line:** 1150 | **Kind:** fn

### `setManagedPluginEnabled`

```
export async function setManagedPluginEnabled(params: {
```

**Line:** 1194 | **Kind:** fn

### `uninstallManagedPlugin`

```
export async function uninstallManagedPlugin(params: {
```

**Line:** 1265 | **Kind:** fn

### `formatManagedPluginLifecycleError`

```
export function formatManagedPluginLifecycleError(error: unknown): string {
```

**Line:** 1330 | **Kind:** fn
