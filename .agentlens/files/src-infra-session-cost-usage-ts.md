# src/infra/session-cost-usage.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2348
- **Language:** TypeScript
- **Symbols:** 62
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 119 | type | UsageCostRefreshState | (private) | - |
| 131 | type | UsageCostRefreshResult | (private) | - |
| 135 | fn | resolveUsageCostCacheDatabasePath | (private) | `function resolveUsageCostCacheDatabasePath(agen...` |
| 139 | type | UsageCostJsonlCheckpoint | (private) | - |
| 149 | type | UsageCostSqliteCheckpoint | (private) | - |
| 159 | type | UsageCostRollupEntry | (private) | - |
| 169 | type | UsageCostStoredRollup | (private) | - |
| 174 | type | UsageCostTranscriptFile | (private) | - |
| 186 | fn | resolveUsageCostAgentDir | (private) | `function resolveUsageCostAgentDir(` |
| 193 | fn | resolveUsageCostPricingFingerprint | (private) | `function resolveUsageCostPricingFingerprint(con...` |
| 197 | fn | resolveUsageCostSessionStorePath | (private) | `function resolveUsageCostSessionStorePath(param...` |
| 206 | fn | normalizeUsageCostRollup | (private) | `function normalizeUsageCostRollup(` |
| 228 | fn | readUsageCostRollups | (private) | `function readUsageCostRollups(` |
| 247 | fn | listUsageCountedTranscriptFileStats | (private) | `async function listUsageCountedTranscriptFileSt...` |
| 319 | fn | listUsageCountedSqliteTranscriptStats | (private) | `function listUsageCountedSqliteTranscriptStats(` |
| 357 | fn | formatCanonicalUsageCostSqliteMarker | (private) | `function formatCanonicalUsageCostSqliteMarker(m...` |
| 364 | fn | listUsageCountedTranscriptFiles | (private) | `async function listUsageCountedTranscriptFiles(` |
| 371 | fn | listUsageCountedTranscriptStats | (private) | `async function listUsageCountedTranscriptStats(` |
| 385 | fn | resolveUsageCostTranscriptFile | (private) | `async function resolveUsageCostTranscriptFile(` |
| 534 | type | UsageDayKeyFormatter | (private) | - |
| 650 | fn | isUsageCostRollupFresh | (private) | `function isUsageCostRollupFresh(params: {` |
| 674 | fn | canUseUsageCostRollupForPartial | (private) | `function canUseUsageCostRollupForPartial(params: {` |
| 692 | fn | getUsageCostStaleRollupFiles | (private) | `function getUsageCostStaleRollupFiles(params: {` |
| 701 | fn | countUsableUsageCostRollups | (private) | `function countUsableUsageCostRollups(params: {` |
| 715 | fn | latestUsageCostRollupScan | (private) | `function latestUsageCostRollupScan(` |
| 725 | fn | buildCostUsageSummaryFromRollups | (private) | `function buildCostUsageSummaryFromRollups(param...` |
| 777 | fn | computeUsageTokenTotals | (private) | `const computeUsageTokenTotals = (usage: Normali...` |
| 793 | fn | applyUsageTotals | (private) | `const applyUsageTotals = (totals: CostUsageTota...` |
| 802 | fn | applyCostBreakdown | (private) | `const applyCostBreakdown = (totals: CostUsageTo...` |
| 814 | fn | applyCostTotal | (private) | `const applyCostTotal = (` |
| 867 | type | UsageCostResolver | (private) | - |
| 872 | fn | createUsageCostResolver | (private) | `function createUsageCostResolver(params?: {` |
| 893 | fn | hashUsageCostCheckpoint | (private) | `function hashUsageCostCheckpoint(value: Buffer ...` |
| 897 | fn | readJsonlAnchorHash | (private) | `async function readJsonlAnchorHash(filePath: st...` |
| 916 | fn | parseJsonlRecord | (private) | `function parseJsonlRecord(line: Buffer): Record...` |
| 931 | fn | scanJsonlRange | (private) | `async function scanJsonlRange(params: {` |
| 1015 | fn | loadSqliteUsageTranscriptEvents | (private) | `function loadSqliteUsageTranscriptEvents(` |
| 1063 | fn | parseUsageCostTranscriptEntry | (private) | `function parseUsageCostTranscriptEntry(` |
| 1101 | fn | scanTranscriptFile | (private) | `async function scanTranscriptFile(params: {` |
| 1123 | fn | scanUsageFile | (private) | `async function scanUsageFile(params: {` |
| 1153 | fn | resolveExistingUsageSessionFile | pub | `export function resolveExistingUsageSessionFile...` |
| 1225 | fn | loadCostUsageSummary | pub | `export async function loadCostUsageSummary(para...` |
| 1261 | fn | appendParsedEntryToRollup | (private) | `function appendParsedEntryToRollup(` |
| 1290 | fn | scanRecordsIntoRollup | (private) | `function scanRecordsIntoRollup(params: {` |
| 1309 | fn | scanJsonlUsageRollup | (private) | `async function scanJsonlUsageRollup(params: {` |
| 1384 | fn | selectIncrementalSqliteRecords | (private) | `function selectIncrementalSqliteRecords(` |
| 1413 | fn | sqliteCheckpointAnchorHash | (private) | `function sqliteCheckpointAnchorHash(event: unkn...` |
| 1417 | fn | scanSqliteUsageRollup | (private) | `async function scanSqliteUsageRollup(params: {` |
| 1522 | fn | scanUsageFileForRollup | (private) | `async function scanUsageFileForRollup(params: {` |
| 1533 | fn | refreshCostUsageCacheForAgent | (private) | `async function refreshCostUsageCacheForAgent(pa...` |
| 1626 | fn | refreshCostUsageCache | (private) | `async function refreshCostUsageCache(params?: {` |
| 1637 | fn | loadCostUsageSummaryFromCache | pub | `export async function loadCostUsageSummaryFromC...` |
| 1682 | fn | loadSessionCostSummariesFromCache | pub | `export async function loadSessionCostSummariesF...` |
| 1755 | fn | requestCostUsageCacheRefresh | (private) | `function requestCostUsageCacheRefresh(params?: {` |
| 1783 | fn | mergeUsageCostRefreshRequest | (private) | `function mergeUsageCostRefreshRequest(` |
| 1806 | fn | scheduleUsageCostRefresh | (private) | `function scheduleUsageCostRefresh(` |
| 1822 | fn | runQueuedUsageCostRefresh | (private) | `async function runQueuedUsageCostRefresh(` |
| 1873 | fn | clearUsageCostRefreshesForTest | (private) | `function clearUsageCostRefreshesForTest(): void {` |
| 1894 | fn | discoverAllSessions | pub | `export async function discoverAllSessions(param...` |
| 1984 | fn | loadSessionCostSummary | pub | `export async function loadSessionCostSummary(pa...` |
| 2043 | fn | loadSessionUsageTimeSeries | pub | `export async function loadSessionUsageTimeSerie...` |
| 2157 | fn | loadSessionLogs | pub | `export async function loadSessionLogs(params: {` |

## Public API

### `resolveExistingUsageSessionFile`

```
export function resolveExistingUsageSessionFile(params: {
```

**Line:** 1153 | **Kind:** fn

### `loadCostUsageSummary`

```
export async function loadCostUsageSummary(params?: {
```

**Line:** 1225 | **Kind:** fn

### `loadCostUsageSummaryFromCache`

```
export async function loadCostUsageSummaryFromCache(params: {
```

**Line:** 1637 | **Kind:** fn

### `loadSessionCostSummariesFromCache`

```
export async function loadSessionCostSummariesFromCache(params: {
```

**Line:** 1682 | **Kind:** fn

### `discoverAllSessions`

```
export async function discoverAllSessions(params?: {
```

**Line:** 1894 | **Kind:** fn

### `loadSessionCostSummary`

```
export async function loadSessionCostSummary(params: {
```

**Line:** 1984 | **Kind:** fn

### `loadSessionUsageTimeSeries`

```
export async function loadSessionUsageTimeSeries(params: {
```

**Line:** 2043 | **Kind:** fn

### `loadSessionLogs`

```
export async function loadSessionLogs(params: {
```

**Line:** 2157 | **Kind:** fn
