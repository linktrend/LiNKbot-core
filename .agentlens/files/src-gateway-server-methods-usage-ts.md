# src/gateway/server-methods/usage.ts

[← Back to Module](../modules/src-gateway-server-methods/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1732
- **Language:** TypeScript
- **Symbols:** 33
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 73 | fn | runUsageAgentTasks | (private) | `async function runUsageAgentTasks<T>(tasks: Arr...` |
| 87 | type | DateRange | (private) | - |
| 90 | type | DateRangeResolution | (private) | - |
| 95 | type | DateInterpretation | (private) | - |
| 99 | type | DateInterpretationResolution | (private) | - |
| 102 | type | DateParts | (private) | - |
| 106 | type | CostUsageCacheEntry | (private) | - |
| 114 | fn | findCostUsageCacheEvictionKey | (private) | `function findCostUsageCacheEvictionKey(): strin...` |
| 126 | fn | setCostUsageCache | (private) | `function setCostUsageCache(cacheKey: string, en...` |
| 136 | fn | resolveSessionUsageFileOrRespond | (private) | `function resolveSessionUsageFileOrRespond(` |
| 517 | type | DiscoveredSessionWithAgent | (private) | - |
| 518 | type | UsageGroupingMode | (private) | - |
| 520 | type | MergedEntry | (private) | - |
| 535 | fn | buildStoreBySessionId | (private) | `function buildStoreBySessionId(` |
| 563 | fn | filterSessionStoreByAgent | (private) | `function filterSessionStoreByAgent(params: {` |
| 582 | fn | discoverAllSessionsForUsage | (private) | `async function discoverAllSessionsForUsage(para...` |
| 607 | fn | addUniqueSessionIds | (private) | `function addUniqueSessionIds(target: string[], ...` |
| 619 | fn | resolveUsageFamilySessionIds | (private) | `function resolveUsageFamilySessionIds(entry: Se...` |
| 623 | fn | resolveUsageFamilyKey | (private) | `function resolveUsageFamilyKey(params: {` |
| 631 | fn | maybeMergeFamilyEntry | (private) | `function maybeMergeFamilyEntry(params: {` |
| 660 | fn | createEmptySessionCostSummary | (private) | `function createEmptySessionCostSummary(): Sessi...` |
| 666 | fn | mergeSessionUsageInto | (private) | `function mergeSessionUsageInto(target: SessionC...` |
| 719 | fn | mergeDailyRows | (private) | `function mergeDailyRows<T extends { date: strin...` |
| 741 | fn | mergeQuarterRows | (private) | `function mergeQuarterRows<T extends { date: str...` |
| 766 | fn | mergeMessageCounts | (private) | `function mergeMessageCounts(` |
| 783 | fn | mergeToolUsage | (private) | `function mergeToolUsage(` |
| 802 | fn | mergeModelUsage | (private) | `function mergeModelUsage(` |
| 824 | fn | mergeLatency | (private) | `function mergeLatency(` |
| 847 | fn | mergeDailyLatencyRows | (private) | `function mergeDailyLatencyRows(` |
| 871 | fn | mergeDailyModelRows | (private) | `function mergeDailyModelRows(` |
| 892 | fn | loadCostUsageSummaryCached | (private) | `async function loadCostUsageSummaryCached(param...` |
| 971 | fn | loadAllAgentCostUsageSummary | (private) | `async function loadAllAgentCostUsageSummary(par...` |
| 1024 | fn | mergeUsageCacheStatus | (private) | `function mergeUsageCacheStatus(` |
