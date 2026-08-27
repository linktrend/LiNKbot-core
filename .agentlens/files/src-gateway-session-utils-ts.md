# src/gateway/session-utils.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2928
- **Language:** TypeScript
- **Symbols:** 93
- **Public symbols:** 18

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 147 | fn | formatSessionIdPrefix | (private) | `function formatSessionIdPrefix(sessionId: strin...` |
| 157 | fn | truncateTitle | (private) | `function truncateTitle(text: string, maxLen: nu...` |
| 169 | fn | deriveSessionTitle | pub | `export function deriveSessionTitle(` |
| 202 | fn | resolveSessionRuntimeMs | (private) | `function resolveSessionRuntimeMs(` |
| 209 | fn | resolvePositiveNumber | (private) | `function resolvePositiveNumber(value: number | ...` |
| 213 | fn | deriveSessionUnread | (private) | `function deriveSessionUnread(` |
| 226 | type | SessionCompactionCheckpointEntry | (private) | - |
| 228 | fn | isProjectableCompactionCheckpoint | (private) | `function isProjectableCompactionCheckpoint(` |
| 250 | fn | resolveProjectableCompactionCheckpoints | (private) | `function resolveProjectableCompactionCheckpoints(` |
| 260 | fn | resolveLatestCompactionCheckpoint | (private) | `function resolveLatestCompactionCheckpoint(` |
| 270 | fn | buildCompactionCheckpointPreview | (private) | `function buildCompactionCheckpointPreview(` |
| 297 | fn | resolveModelCostConfigCached | (private) | `function resolveModelCostConfigCached(` |
| 315 | fn | resolveEstimatedSessionCostUsd | (private) | `function resolveEstimatedSessionCostUsd(params: {` |
| 368 | fn | isFinitePositiveTimestamp | (private) | `function isFinitePositiveTimestamp(value: unkno...` |
| 372 | fn | shouldKeepStoreOnlyChildLink | (private) | `function shouldKeepStoreOnlyChildLink(entry: Se...` |
| 390 | type | SessionListRowContext | (private) | - |
| 409 | type | SessionListRowContextProvider | (private) | - |
| 411 | type | SingleRowChildSessionCandidateCacheEntry | (private) | - |
| 417 | type | GatewaySessionStoreTarget | (private) | - |
| 424 | type | GatewaySessionStoreTargetWithStore | (private) | - |
| 433 | fn | rememberSingleRowChildSessionCandidateCacheEntry | (private) | `function rememberSingleRowChildSessionCandidate...` |
| 450 | fn | buildStoreChildSessionCandidateIndex | (private) | `function buildStoreChildSessionCandidateIndex(` |
| 472 | fn | getSingleRowChildSessionCandidates | (private) | `function getSingleRowChildSessionCandidates(par...` |
| 493 | fn | resolveRuntimeChildSessionKeys | (private) | `function resolveRuntimeChildSessionKeys(` |
| 536 | fn | addChildSessionKey | (private) | `function addChildSessionKey(` |
| 551 | fn | buildStoreChildSessionIndex | (private) | `function buildStoreChildSessionIndex(` |
| 599 | fn | resolveStoreChildSessionKeysFromCandidates | (private) | `function resolveStoreChildSessionKeysFromCandid...` |
| 638 | fn | buildSessionListRowContext | (private) | `function buildSessionListRowContext(params: {` |
| 649 | fn | buildSessionListRowContextFromParts | (private) | `function buildSessionListRowContextFromParts(pa...` |
| 663 | fn | buildSessionListRowMetadataContext | (private) | `function buildSessionListRowMetadataContext(par...` |
| 670 | fn | buildSingleRowStoreChildSessionsByKey | (private) | `function buildSingleRowStoreChildSessionsByKey(...` |
| 688 | fn | createSessionRowModelCacheKey | (private) | `function createSessionRowModelCacheKey(provider...` |
| 692 | fn | resolveSessionSelectedModelRef | (private) | `function resolveSessionSelectedModelRef(params: {` |
| 727 | fn | resolveSessionRowThinkingMetadata | (private) | `function resolveSessionRowThinkingMetadata(para...` |
| 785 | fn | mergeChildSessionKeys | (private) | `function mergeChildSessionKeys(` |
| 798 | fn | resolveChildSessionKeys | (private) | `function resolveChildSessionKeys(` |
| 815 | fn | resolveTranscriptUsageFallback | (private) | `function resolveTranscriptUsageFallback(params: {` |
| 894 | fn | readAcpMetaForDeletedAgentCheck | (private) | `function readAcpMetaForDeletedAgentCheck(params: {` |
| 943 | fn | resolveDeletedAgentIdFromSessionKey | pub | `export function resolveDeletedAgentIdFromSessio...` |
| 974 | fn | loadSessionEntry | pub | `export function loadSessionEntry(sessionKey: st...` |
| 998 | fn | resolveFreshestSessionStoreMatchFromStoreKeys | (private) | `function resolveFreshestSessionStoreMatchFromSt...` |
| 1016 | fn | resolveFreshestSessionEntryFromStoreKeys | pub | `export function resolveFreshestSessionEntryFrom...` |
| 1023 | fn | findFreshestStoreMatch | (private) | `function findFreshestStoreMatch(` |
| 1054 | fn | pruneLegacyStoreKeys | (private) | `function pruneLegacyStoreKeys(params: {` |
| 1074 | fn | migrateAndPruneGatewaySessionStoreKey | pub | `export function migrateAndPruneGatewaySessionSt...` |
| 1105 | fn | classifySessionKey | (private) | `function classifySessionKey(key: string, entry?...` |
| 1121 | fn | parseGroupKey | (private) | `function parseGroupKey(` |
| 1137 | fn | isGroupOrChannelDisplaySession | (private) | `function isGroupOrChannelDisplaySession(` |
| 1149 | fn | isStorePathTemplate | (private) | `function isStorePathTemplate(store?: string): b...` |
| 1153 | fn | resolveConcreteSessionStorePath | (private) | `function resolveConcreteSessionStorePath(storeP...` |
| 1161 | fn | normalizeFallbackList | (private) | `function normalizeFallbackList(values: readonly...` |
| 1179 | fn | resolveGatewayAgentModel | (private) | `function resolveGatewayAgentModel(` |
| 1196 | fn | listAgentsForGateway | pub | `export function listAgentsForGateway(` |
| 1301 | fn | buildGatewaySessionStoreScanTargets | (private) | `function buildGatewaySessionStoreScanTargets(pa...` |
| 1324 | fn | resolveGatewaySessionStoreCandidates | (private) | `function resolveGatewaySessionStoreCandidates(` |
| 1339 | fn | loadGatewaySessionLookupStore | (private) | `function loadGatewaySessionLookupStore(` |
| 1364 | fn | resolveGatewaySessionStoreLookup | (private) | `function resolveGatewaySessionStoreLookup(param...` |
| 1391 | fn | loadStore | (private) | `const loadStore = (target: SessionStoreTarget) =>` |
| 1432 | fn | isAgentScopedSentinelSessionKey | (private) | `function isAgentScopedSentinelSessionKey(canoni...` |
| 1436 | fn | resolveExplicitDeletedLegacyMainStoreTarget | (private) | `function resolveExplicitDeletedLegacyMainStoreT...` |
| 1504 | fn | resolveGatewaySessionStoreTargetWithStore | pub | `export function resolveGatewaySessionStoreTarge...` |
| 1558 | fn | resolveGatewaySessionStoreTarget | pub | `export function resolveGatewaySessionStoreTarge...` |
| 1571 | fn | resolveGatewaySessionThinkingLevel | (private) | `function resolveGatewaySessionThinkingLevel(par...` |
| 1599 | fn | resolveGatewaySessionThinkingDefault | (private) | `function resolveGatewaySessionThinkingDefault(p...` |
| 1628 | type | GatewaySessionThinkingProjectionParams | (private) | - |
| 1639 | fn | resolveGatewaySessionThinkingProjectionInternal | (private) | `function resolveGatewaySessionThinkingProjectio...` |
| 1706 | fn | resolveGatewaySessionThinkingProjection | pub | `export function resolveGatewaySessionThinkingPr...` |
| 1718 | fn | getSessionDefaults | pub | `export function getSessionDefaults(` |
| 1773 | fn | resolveGatewayModelSupportsImages | pub | `export async function resolveGatewayModelSuppor...` |
| 1846 | fn | resolveSessionDisplayModelIdentityRefCached | (private) | `function resolveSessionDisplayModelIdentityRefC...` |
| 1870 | fn | resolveSessionDisplayModelIdentityRef | pub | `export function resolveSessionDisplayModelIdent...` |
| 1909 | fn | buildGatewaySessionRow | pub | `export function buildGatewaySessionRow(params: {` |
| 2304 | fn | resolveSessionListSearchDisplayName | (private) | `function resolveSessionListSearchDisplayName(` |
| 2326 | fn | addSessionListSearchModelFields | (private) | `function addSessionListSearchModelFields(` |
| 2338 | fn | matchesSessionListSearch | (private) | `function matchesSessionListSearch(fields: Array...` |
| 2344 | fn | appendStoredSessionModelSearchFields | (private) | `function appendStoredSessionModelSearchFields(` |
| 2356 | fn | shouldResolveDerivedSessionModelSearchFields | (private) | `function shouldResolveDerivedSessionModelSearch...` |
| 2362 | fn | resolveSessionListRowContext | (private) | `function resolveSessionListRowContext(params: {` |
| 2369 | fn | resolveSessionListSearchModelFields | (private) | `function resolveSessionListSearchModelFields(pa...` |
| 2420 | fn | loadGatewaySessionRow | pub | `export function loadGatewaySessionRow(` |
| 2459 | fn | buildGatewaySessionInfo | pub | `export function buildGatewaySessionInfo(params: {` |
| 2499 | type | SessionEntrySelection | (private) | - |
| 2508 | fn | resolveSessionsListLimit | (private) | `function resolveSessionsListLimit(` |
| 2518 | fn | resolveSessionsListOffset | (private) | `function resolveSessionsListOffset(opts: Sessio...` |
| 2525 | fn | resolveSessionsListWindowLimit | (private) | `function resolveSessionsListWindowLimit(limit: ...` |
| 2533 | fn | filterSessionEntries | (private) | `function filterSessionEntries(params: {` |
| 2669 | fn | isPhantomAgentStoreListEntry | (private) | `function isPhantomAgentStoreListEntry(key: stri...` |
| 2678 | fn | selectSessionEntries | (private) | `function selectSessionEntries(params: {` |
| 2706 | fn | filterAndSortSessionEntries | pub | `export function filterAndSortSessionEntries(par...` |
| 2717 | fn | listSessionsFromStore | pub | `export function listSessionsFromStore(params: {` |
| 2729 | fn | getRowContext | (private) | `const getRowContext = () => {` |
| 2807 | fn | listSessionsFromStoreAsync | pub | `export async function listSessionsFromStoreAsyn...` |
| 2825 | fn | getRowContext | (private) | `const getRowContext = () => {` |

## Public API

### `deriveSessionTitle`

```
export function deriveSessionTitle(
```

**Line:** 169 | **Kind:** fn

### `resolveDeletedAgentIdFromSessionKey`

```
export function resolveDeletedAgentIdFromSessionKey(
```

**Line:** 943 | **Kind:** fn

### `loadSessionEntry`

```
export function loadSessionEntry(sessionKey: string, opts?: { agentId?: string; clone?: boolean }) {
```

**Line:** 974 | **Kind:** fn

### `resolveFreshestSessionEntryFromStoreKeys`

```
export function resolveFreshestSessionEntryFromStoreKeys(
```

**Line:** 1016 | **Kind:** fn

### `migrateAndPruneGatewaySessionStoreKey`

```
export function migrateAndPruneGatewaySessionStoreKey(params: {
```

**Line:** 1074 | **Kind:** fn

### `listAgentsForGateway`

```
export function listAgentsForGateway(
```

**Line:** 1196 | **Kind:** fn

### `resolveGatewaySessionStoreTargetWithStore`

```
export function resolveGatewaySessionStoreTargetWithStore(params: {
```

**Line:** 1504 | **Kind:** fn

### `resolveGatewaySessionStoreTarget`

```
export function resolveGatewaySessionStoreTarget(params: {
```

**Line:** 1558 | **Kind:** fn

### `resolveGatewaySessionThinkingProjection`

```
export function resolveGatewaySessionThinkingProjection(params: {
```

**Line:** 1706 | **Kind:** fn

### `getSessionDefaults`

```
export function getSessionDefaults(
```

**Line:** 1718 | **Kind:** fn

### `resolveGatewayModelSupportsImages`

```
export async function resolveGatewayModelSupportsImages(params: {
```

**Line:** 1773 | **Kind:** fn

### `resolveSessionDisplayModelIdentityRef`

```
export function resolveSessionDisplayModelIdentityRef(params: {
```

**Line:** 1870 | **Kind:** fn

### `buildGatewaySessionRow`

```
export function buildGatewaySessionRow(params: {
```

**Line:** 1909 | **Kind:** fn

### `loadGatewaySessionRow`

```
export function loadGatewaySessionRow(
```

**Line:** 2420 | **Kind:** fn

### `buildGatewaySessionInfo`

```
export function buildGatewaySessionInfo(params: {
```

**Line:** 2459 | **Kind:** fn

### `filterAndSortSessionEntries`

```
export function filterAndSortSessionEntries(params: {
```

**Line:** 2706 | **Kind:** fn

### `listSessionsFromStore`

```
export function listSessionsFromStore(params: {
```

**Line:** 2717 | **Kind:** fn

### `listSessionsFromStoreAsync`

```
export async function listSessionsFromStoreAsync(params: {
```

**Line:** 2807 | **Kind:** fn
