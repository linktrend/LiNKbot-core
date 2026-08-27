# src/plugins/official-external-plugin-catalog.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1525
- **Language:** TypeScript
- **Symbols:** 81
- **Public symbols:** 29

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 18 | type | ManifestKey | (private) | - |
| 20 | class | HostedCatalogSnapshotWriteError | (private) | - |
| 30 | type | OfficialExternalProviderAuthChoice | pub | - |
| 48 | type | OfficialExternalProviderCatalogProvider | (private) | - |
| 58 | type | OfficialExternalWebSearchProvider | pub | - |
| 74 | type | OfficialExternalPluginCatalogManifest | (private) | - |
| 98 | type | OfficialExternalPluginCatalogEntry | pub | - |
| 120 | type | OfficialExternalPluginCatalogInstallCandidate | (private) | - |
| 130 | type | OfficialExternalPluginCatalogSourceProfile | (private) | - |
| 144 | type | OfficialExternalPluginCatalogFeedProfile | (private) | - |
| 149 | type | OfficialExternalPluginCatalogFeedVerification | (private) | - |
| 159 | type | OfficialExternalPluginCatalogFeedSigningKey | (private) | - |
| 164 | type | OfficialExternalPluginCatalogProfileConfig | (private) | - |
| 170 | type | OfficialExternalPluginCatalogFeed | pub | - |
| 179 | type | HostedOfficialExternalPluginCatalogMetadata | pub | - |
| 187 | type | HostedOfficialExternalPluginCatalogSnapshot | pub | - |
| 195 | type | HostedOfficialExternalPluginCatalogSnapshotStore | pub | - |
| 200 | type | HostedOfficialExternalPluginCatalogTrustState | pub | - |
| 208 | type | HostedOfficialExternalPluginCatalogSnapshotMonotonicState | pub | - |
| 214 | type | HostedOfficialExternalPluginCatalogLoadResult | pub | - |
| 240 | type | FetchLike | (private) | - |
| 242 | type | OfficialExternalProviderContract | (private) | - |
| 278 | fn | parseOfficialExternalPluginCatalogTimestamp | pub | `export function parseOfficialExternalPluginCata...` |
| 301 | fn | isOfficialExternalPluginCatalogSequence | pub | `export function isOfficialExternalPluginCatalog...` |
| 305 | fn | isOfficialExternalPluginCatalogFeed | pub | `export function isOfficialExternalPluginCatalog...` |
| 331 | fn | parseOfficialExternalPluginCatalogEntries | (private) | `function parseOfficialExternalPluginCatalogEntr...` |
| 355 | fn | normalizeHostedCatalogHeader | (private) | `function normalizeHostedCatalogHeader(value: st...` |
| 360 | fn | sha256Hex | (private) | `function sha256Hex(value: string): string {` |
| 364 | fn | resolveHostedCatalogFeedUrl | (private) | `function resolveHostedCatalogFeedUrl(raw: strin...` |
| 383 | fn | resolveOfficialExternalPluginCatalogProfileConfig | (private) | `function resolveOfficialExternalPluginCatalogPr...` |
| 398 | fn | resolveHostedCatalogFeedSource | (private) | `function resolveHostedCatalogFeedSource(params: {` |
| 442 | fn | getOfficialExternalPluginCatalogSourceRefs | (private) | `function getOfficialExternalPluginCatalogSource...` |
| 448 | fn | getFeedEntryInstallCandidateRecords | (private) | `function getFeedEntryInstallCandidateRecords(` |
| 461 | fn | getFeedEntryInstallCandidates | (private) | `function getFeedEntryInstallCandidates(` |
| 475 | fn | shouldRequireManifestInstallSourceRef | (private) | `function shouldRequireManifestInstallSourceRef(...` |
| 510 | fn | getManifestInstallSourceRefCandidate | (private) | `function getManifestInstallSourceRefCandidate(` |
| 532 | fn | validateOfficialExternalPluginCatalogEntrySourceRefs | (private) | `function validateOfficialExternalPluginCatalogE...` |
| 561 | fn | filterOfficialExternalPluginCatalogEntriesBySourceRefs | (private) | `function filterOfficialExternalPluginCatalogEnt...` |
| 573 | fn | parseHostedCatalogContentLength | (private) | `function parseHostedCatalogContentLength(raw: s...` |
| 587 | fn | readHostedCatalogResponseText | (private) | `async function readHostedCatalogResponseText(pa...` |
| 608 | fn | bundledOfficialExternalPluginCatalogEntries | (private) | `function bundledOfficialExternalPluginCatalogEn...` |
| 616 | fn | dedupeOfficialExternalPluginCatalogEntries | (private) | `function dedupeOfficialExternalPluginCatalogEnt...` |
| 629 | fn | resolveOfficialExternalPluginCatalogEntryKey | (private) | `function resolveOfficialExternalPluginCatalogEn...` |
| 647 | fn | formatHostedCatalogError | (private) | `function formatHostedCatalogError(error: unknow...` |
| 651 | fn | bundledFallbackResult | (private) | `function bundledFallbackResult(` |
| 663 | fn | emptyBundledFallbackResult | (private) | `function emptyBundledFallbackResult(error: unkn...` |
| 671 | fn | parseHostedCatalogFeedBody | (private) | `async function parseHostedCatalogFeedBody(param...` |
| 717 | class | HostedCatalogFeedTimestampError | (private) | - |
| 726 | fn | readOfficialExternalPluginCatalogInvalidTimestampSequence | (private) | `function readOfficialExternalPluginCatalogInval...` |
| 745 | fn | loadHostedCatalogSnapshotResult | (private) | `async function loadHostedCatalogSnapshotResult(...` |
| 791 | fn | isHostedCatalogSignedFeedRollback | (private) | `function isHostedCatalogSignedFeedRollback(para...` |
| 807 | fn | assertSnapshotMatchesRequestValidators | (private) | `function assertSnapshotMatchesRequestValidators...` |
| 824 | fn | snapshotOrBundledFallbackResult | (private) | `async function snapshotOrBundledFallbackResult(...` |
| 868 | fn | resolveHostedCatalogSnapshotStore | (private) | `async function resolveHostedCatalogSnapshotStor...` |
| 886 | fn | loadHostedOfficialExternalPluginCatalogEntries | (private) | `async function loadHostedOfficialExternalPlugin...` |
| 952 | fn | metadataBase | (private) | `const metadataBase = (response: Response) => {` |
| 1135 | fn | normalizeDefaultChoice | (private) | `function normalizeDefaultChoice(value: unknown)...` |
| 1139 | fn | formatFeedInstallCandidateSpec | (private) | `function formatFeedInstallCandidateSpec(` |
| 1153 | fn | getFeedEntryCandidateSourceType | (private) | `function getFeedEntryCandidateSourceType(` |
| 1164 | fn | getPreferredFeedEntryInstallCandidate | (private) | `function getPreferredFeedEntryInstallCandidate(...` |
| 1188 | fn | resolveFeedEntryInstallCandidate | (private) | `function resolveFeedEntryInstallCandidate(param...` |
| 1220 | fn | normalizeClawHubSha256ExpectedIntegrity | (private) | `function normalizeClawHubSha256ExpectedIntegrit...` |
| 1225 | fn | normalizeNpmExpectedIntegrity | (private) | `function normalizeNpmExpectedIntegrity(value: u...` |
| 1234 | fn | getOfficialExternalPluginCatalogManifest | pub | `export function getOfficialExternalPluginCatalo...` |
| 1241 | fn | resolveOfficialExternalPluginId | pub | `export function resolveOfficialExternalPluginId(` |
| 1253 | fn | resolveOfficialExternalPluginLookupIds | (private) | `function resolveOfficialExternalPluginLookupIds(` |
| 1270 | fn | resolveOfficialExternalPluginLabel | pub | `export function resolveOfficialExternalPluginLa...` |
| 1285 | fn | resolveOfficialExternalPluginInstall | pub | `export function resolveOfficialExternalPluginIn...` |
| 1328 | fn | resolveOfficialExternalPluginCatalogProfileConfigFromConfig | (private) | `function resolveOfficialExternalPluginCatalogPr...` |
| 1334 | fn | loadConfiguredHostedOfficialExternalPluginCatalogEntries | pub | `export async function loadConfiguredHostedOffic...` |
| 1347 | fn | listOfficialExternalPluginCatalogEntries | pub | `export function listOfficialExternalPluginCatal...` |
| 1352 | fn | isOfficialExternalPluginId | pub | `export function isOfficialExternalPluginId(plug...` |
| 1363 | fn | resolveOfficialExternalProviderContractPluginIds | pub | `export function resolveOfficialExternalProvider...` |
| 1394 | fn | resolveOfficialExternalWebProviderContractPluginIdsForEnv | pub | `export function resolveOfficialExternalWebProvi...` |
| 1426 | fn | resolveOfficialExternalProviderPluginIds | pub | `export function resolveOfficialExternalProvider...` |
| 1457 | fn | resolveOfficialExternalProviderPluginIdsForEnv | pub | `export function resolveOfficialExternalProvider...` |
| 1474 | fn | listOfficialExternalChannelCatalogEntries | pub | `export function listOfficialExternalChannelCata...` |
| 1480 | fn | listOfficialExternalChannelEnvVars | pub | `export function listOfficialExternalChannelEnvV...` |
| 1496 | fn | listOfficialExternalProviderCatalogEntries | pub | `export function listOfficialExternalProviderCat...` |
| 1502 | fn | getOfficialExternalPluginCatalogEntry | pub | `export function getOfficialExternalPluginCatalo...` |
| 1514 | fn | getOfficialExternalPluginCatalogEntryForPackage | pub | `export function getOfficialExternalPluginCatalo...` |

## Public API

### `parseOfficialExternalPluginCatalogTimestamp`

```
export function parseOfficialExternalPluginCatalogTimestamp(value: string): number | undefined {
```

**Line:** 278 | **Kind:** fn

### `isOfficialExternalPluginCatalogSequence`

```
export function isOfficialExternalPluginCatalogSequence(value: unknown): value is number {
```

**Line:** 301 | **Kind:** fn

### `isOfficialExternalPluginCatalogFeed`

```
export function isOfficialExternalPluginCatalogFeed(
```

**Line:** 305 | **Kind:** fn

### `getOfficialExternalPluginCatalogManifest`

```
export function getOfficialExternalPluginCatalogManifest(
```

**Line:** 1234 | **Kind:** fn

### `resolveOfficialExternalPluginId`

```
export function resolveOfficialExternalPluginId(
```

**Line:** 1241 | **Kind:** fn

### `resolveOfficialExternalPluginLabel`

```
export function resolveOfficialExternalPluginLabel(
```

**Line:** 1270 | **Kind:** fn

### `resolveOfficialExternalPluginInstall`

```
export function resolveOfficialExternalPluginInstall(
```

**Line:** 1285 | **Kind:** fn

### `loadConfiguredHostedOfficialExternalPluginCatalogEntries`

```
export async function loadConfiguredHostedOfficialExternalPluginCatalogEntries(
```

**Line:** 1334 | **Kind:** fn

### `listOfficialExternalPluginCatalogEntries`

```
export function listOfficialExternalPluginCatalogEntries(): OfficialExternalPluginCatalogEntry[] {
```

**Line:** 1347 | **Kind:** fn

### `isOfficialExternalPluginId`

```
export function isOfficialExternalPluginId(pluginId: string): boolean {
```

**Line:** 1352 | **Kind:** fn

### `resolveOfficialExternalProviderContractPluginIds`

```
export function resolveOfficialExternalProviderContractPluginIds(params: {
```

**Line:** 1363 | **Kind:** fn

### `resolveOfficialExternalWebProviderContractPluginIdsForEnv`

```
export function resolveOfficialExternalWebProviderContractPluginIdsForEnv(params: {
```

**Line:** 1394 | **Kind:** fn

### `resolveOfficialExternalProviderPluginIds`

```
export function resolveOfficialExternalProviderPluginIds(params: {
```

**Line:** 1426 | **Kind:** fn

### `resolveOfficialExternalProviderPluginIdsForEnv`

```
export function resolveOfficialExternalProviderPluginIdsForEnv(env: NodeJS.ProcessEnv): string[] {
```

**Line:** 1457 | **Kind:** fn

### `listOfficialExternalChannelCatalogEntries`

```
export function listOfficialExternalChannelCatalogEntries(): OfficialExternalPluginCatalogEntry[] {
```

**Line:** 1474 | **Kind:** fn

### `listOfficialExternalChannelEnvVars`

```
export function listOfficialExternalChannelEnvVars(): Array<{
```

**Line:** 1480 | **Kind:** fn

### `listOfficialExternalProviderCatalogEntries`

```
export function listOfficialExternalProviderCatalogEntries(): OfficialExternalPluginCatalogEntry[] {
```

**Line:** 1496 | **Kind:** fn

### `getOfficialExternalPluginCatalogEntry`

```
export function getOfficialExternalPluginCatalogEntry(
```

**Line:** 1502 | **Kind:** fn

### `getOfficialExternalPluginCatalogEntryForPackage`

```
export function getOfficialExternalPluginCatalogEntryForPackage(
```

**Line:** 1514 | **Kind:** fn
