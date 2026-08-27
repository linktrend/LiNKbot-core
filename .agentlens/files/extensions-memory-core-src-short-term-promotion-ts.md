# extensions/memory-core/src/short-term-promotion.ts

[← Back to Module](../modules/extensions-memory-core/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2974
- **Language:** TypeScript
- **Symbols:** 110
- **Public symbols:** 24

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 101 | type | PromotionWeights | (private) | - |
| 119 | type | ShortTermRecallEntry | pub | - |
| 140 | type | ShortTermRecallStore | (private) | - |
| 146 | type | ShortTermPhaseSignalEntry | (private) | - |
| 155 | type | ShortTermPhaseSignalStore | (private) | - |
| 161 | type | ShortTermStoreMeta | (private) | - |
| 165 | type | ShortTermLockEntry | (private) | - |
| 170 | type | PromotionComponents | (private) | - |
| 179 | type | PromotionCandidate | pub | - |
| 204 | type | ShortTermAuditIssue | (private) | - |
| 220 | type | ShortTermAuditSummary | pub | - |
| 241 | type | RepairShortTermPromotionArtifactsResult | pub | - |
| 249 | type | RankShortTermPromotionOptions | (private) | - |
| 262 | type | ApplyShortTermPromotionsOptions | (private) | - |
| 290 | type | ApplyShortTermPromotionsResult | (private) | - |
| 302 | type | ShortTermDreamingStatsEntry | pub | - |
| 319 | type | ShortTermDreamingStats | pub | - |
| 339 | fn | clampScore | (private) | `function clampScore(value: number): number {` |
| 346 | fn | toFiniteScore | (private) | `function toFiniteScore(value: unknown, fallback...` |
| 357 | fn | normalizeSnippet | (private) | `function normalizeSnippet(raw: string): string {` |
| 365 | fn | truncateShortTermSnippet | (private) | `function truncateShortTermSnippet(snippet: stri...` |
| 372 | fn | enforceShortTermRecallSnippetCap | (private) | `function enforceShortTermRecallSnippetCap(store...` |
| 378 | fn | consumeDreamingLeadPrefix | (private) | `function consumeDreamingLeadPrefix(snippet: str...` |
| 407 | fn | hasDreamingNarrativeLead | (private) | `function hasDreamingNarrativeLead(snippet: stri...` |
| 422 | fn | isContaminatedDreamingSnippet | (private) | `function isContaminatedDreamingSnippet(` |
| 452 | fn | normalizeMemoryPath | (private) | `function normalizeMemoryPath(rawPath: string): ...` |
| 456 | fn | buildClaimHash | (private) | `function buildClaimHash(snippet: string): string {` |
| 460 | fn | buildEntryKey | (private) | `function buildEntryKey(result: {` |
| 471 | fn | hashQuery | (private) | `function hashQuery(query: string): string {` |
| 478 | fn | mergeQueryHashes | (private) | `function mergeQueryHashes(existing: string[], q...` |
| 499 | fn | mergeRecentDistinct | (private) | `function mergeRecentDistinct(existing: string[]...` |
| 517 | fn | normalizeIsoDay | (private) | `function normalizeIsoDay(isoLike: string): stri...` |
| 525 | fn | normalizeDistinctStrings | (private) | `function normalizeDistinctStrings(values: unkno...` |
| 545 | fn | totalSignalCountForEntry | (private) | `function totalSignalCountForEntry(entry: {` |
| 557 | fn | calculateConsolidationComponent | (private) | `function calculateConsolidationComponent(recall...` |
| 579 | fn | calculateConceptualComponent | (private) | `function calculateConceptualComponent(conceptTa...` |
| 583 | fn | emptyStore | (private) | `function emptyStore(nowIso: string): ShortTermR...` |
| 591 | fn | normalizeShortTermRecallStore | pub | `export function normalizeShortTermRecallStore(r...` |
| 686 | fn | parseStoreTimestampMs | (private) | `function parseStoreTimestampMs(value: string | ...` |
| 694 | fn | compareStoreTimestampDesc | (private) | `function compareStoreTimestampDesc(left: string...` |
| 703 | fn | compareShortTermRecallRetention | (private) | `function compareShortTermRecallRetention(a: Sho...` |
| 727 | fn | enforceShortTermRecallStoreRetention | (private) | `function enforceShortTermRecallStoreRetention(s...` |
| 739 | fn | toFinitePositive | (private) | `function toFinitePositive(value: unknown, fallb...` |
| 747 | fn | toFiniteNonNegativeInt | (private) | `function toFiniteNonNegativeInt(value: unknown,...` |
| 759 | fn | normalizeWeights | (private) | `function normalizeWeights(weights?: Partial<Pro...` |
| 784 | fn | calculateRecencyComponent | (private) | `function calculateRecencyComponent(ageDays: num...` |
| 795 | fn | calculatePhaseSignalAgeDays | (private) | `function calculatePhaseSignalAgeDays(lastSeenAt...` |
| 806 | fn | calculatePhaseSignalBoost | (private) | `function calculatePhaseSignalBoost(` |
| 831 | fn | resolveStorePath | (private) | `function resolveStorePath(workspaceDir: string)...` |
| 835 | fn | resolvePhaseSignalPath | (private) | `function resolvePhaseSignalPath(workspaceDir: s...` |
| 839 | fn | resolveLockPath | (private) | `function resolveLockPath(workspaceDir: string):...` |
| 843 | fn | parseLockOwnerPid | (private) | `function parseLockOwnerPid(raw: string): number...` |
| 855 | fn | isProcessLikelyAlive | (private) | `function isProcessLikelyAlive(pid: number): boo...` |
| 869 | fn | withInProcessShortTermLock | (private) | `async function withInProcessShortTermLock<T>(lo...` |
| 873 | fn | withShortTermLock | (private) | `async function withShortTermLock<T>(workspaceDi...` |
| 918 | fn | readStore | (private) | `async function readStore(workspaceDir: string, ...` |
| 942 | fn | emptyPhaseSignalStore | (private) | `function emptyPhaseSignalStore(nowIso: string):...` |
| 950 | fn | normalizeShortTermPhaseSignalStore | pub | `export function normalizeShortTermPhaseSignalSt...` |
| 1005 | fn | readPhaseSignalStore | (private) | `async function readPhaseSignalStore(` |
| 1030 | fn | writePhaseSignalStore | (private) | `async function writePhaseSignalStore(` |
| 1049 | fn | writeStore | (private) | `async function writeStore(workspaceDir: string,...` |
| 1067 | fn | isShortTermMemoryPath | (private) | `function isShortTermMemoryPath(filePath: string...` |
| 1081 | fn | isShortTermSessionCorpusPath | (private) | `function isShortTermSessionCorpusPath(filePath:...` |
| 1085 | fn | normalizeMemoryPathForWorkspace | (private) | `function normalizeMemoryPathForWorkspace(worksp...` |
| 1094 | fn | toNonNegativeInt | (private) | `function toNonNegativeInt(value: unknown): numb...` |
| 1102 | fn | parseEntryRangeFromKey | (private) | `function parseEntryRangeFromKey(` |
| 1122 | fn | compareDreamingStatsEntryByRecency | (private) | `function compareDreamingStatsEntryByRecency(` |
| 1139 | fn | compareDreamingStatsEntryBySignals | (private) | `function compareDreamingStatsEntryBySignals(` |
| 1152 | fn | compareDreamingStatsEntryByPromotion | (private) | `function compareDreamingStatsEntryByPromotion(` |
| 1166 | fn | trimDreamingStatsEntries | (private) | `function trimDreamingStatsEntries(` |
| 1191 | fn | loadShortTermPromotionDreamingStats | pub | `export async function loadShortTermPromotionDre...` |
| 1319 | fn | shortTermRecallSourceIsFile | (private) | `async function shortTermRecallSourceIsFile(sour...` |
| 1331 | fn | filterLiveShortTermRecallEntries | pub | `export async function filterLiveShortTermRecall...` |
| 1365 | fn | buildMemoryRecallSkippedEvent | (private) | `function buildMemoryRecallSkippedEvent(params: {` |
| 1388 | fn | recordShortTermRecalls | pub | `export async function recordShortTermRecalls(pa...` |
| 1538 | fn | recordGroundedShortTermCandidates | pub | `export async function recordGroundedShortTermCa...` |
| 1672 | fn | recordDreamingPhaseSignals | pub | `export async function recordDreamingPhaseSignal...` |
| 1726 | fn | recordRemConsideredPhaseSignals | pub | `export async function recordRemConsideredPhaseS...` |
| 1773 | fn | readLightStagedKeys | pub | `export async function readLightStagedKeys(param...` |
| 1806 | fn | filterFreshLightDreamingEntries | pub | `export async function filterFreshLightDreamingE...` |
| 1832 | fn | rankShortTermPromotionCandidates | pub | `export async function rankShortTermPromotionCan...` |
| 1977 | fn | readShortTermRecallEntries | pub | `export async function readShortTermRecallEntrie...` |
| 1994 | fn | resolveShortTermSourcePathCandidates | (private) | `function resolveShortTermSourcePathCandidates(` |
| 2016 | fn | normalizeRangeSnippet | (private) | `function normalizeRangeSnippet(lines: string[],...` |
| 2025 | fn | normalizeListMarkerFreeRangeSnippet | (private) | `function normalizeListMarkerFreeRangeSnippet(` |
| 2045 | fn | normalizeDailyHeadingForPromotion | (private) | `function normalizeDailyHeadingForPromotion(line...` |
| 2059 | fn | isGenericDailyHeadingForPromotion | (private) | `function isGenericDailyHeadingForPromotion(head...` |
| 2074 | fn | buildRelocatedDailyHeadingLookup | (private) | `function buildRelocatedDailyHeadingLookup(lines...` |
| 2091 | fn | buildListMarkerFreeMatchSnippet | (private) | `function buildListMarkerFreeMatchSnippet(` |
| 2101 | fn | targetSnippetHasHeadingContext | (private) | `function targetSnippetHasHeadingContext(targetS...` |
| 2112 | fn | extractTargetHeadingBodySnippet | (private) | `function extractTargetHeadingBodySnippet(` |
| 2133 | fn | compareCandidateWindow | (private) | `function compareCandidateWindow(` |
| 2152 | fn | relocateCandidateRange | (private) | `function relocateCandidateRange(` |
| 2273 | fn | lineRangeOverlapsDreamingFence | (private) | `function lineRangeOverlapsDreamingFence(` |
| 2308 | fn | rehydratePromotionCandidate | (private) | `async function rehydratePromotionCandidate(` |
| 2346 | fn | buildPromotionSection | (private) | `function buildPromotionSection(` |
| 2371 | fn | resolvePromotedSnippetCharLimit | (private) | `function resolvePromotedSnippetCharLimit(maxTok...` |
| 2380 | fn | truncatePromotedSnippet | (private) | `function truncatePromotedSnippet(snippet: strin...` |
| 2401 | fn | formatPromotedSnippetForMemory | (private) | `function formatPromotedSnippetForMemory(rawSnip...` |
| 2408 | fn | withTrailingNewline | (private) | `function withTrailingNewline(content: string): ...` |
| 2415 | fn | resolveMemoryWritePath | (private) | `async function resolveMemoryWritePath(filePath:...` |
| 2450 | fn | isAtomicReplacePermissionError | (private) | `function isAtomicReplacePermissionError(error: ...` |
| 2455 | fn | writeExistingMemoryInPlace | (private) | `async function writeExistingMemoryInPlace(fileP...` |
| 2472 | fn | extractPromotionMarkers | (private) | `function extractPromotionMarkers(memoryText: st...` |
| 2487 | fn | applyShortTermPromotions | pub | `export async function applyShortTermPromotions(` |
| 2681 | fn | resolveShortTermRecallStorePath | pub | `export function resolveShortTermRecallStorePath...` |
| 2685 | fn | resolveShortTermRecallLockPath | pub | `export function resolveShortTermRecallLockPath(...` |
| 2689 | fn | auditShortTermPromotionArtifacts | pub | `export async function auditShortTermPromotionAr...` |
| 2838 | fn | repairShortTermPromotionArtifacts | pub | `export async function repairShortTermPromotionA...` |
| 2931 | fn | removeGroundedShortTermCandidates | pub | `export async function removeGroundedShortTermCa...` |

## Public API

### `normalizeShortTermRecallStore`

```
export function normalizeShortTermRecallStore(raw: unknown, nowIso: string): ShortTermRecallStore {
```

**Line:** 591 | **Kind:** fn

### `normalizeShortTermPhaseSignalStore`

```
export function normalizeShortTermPhaseSignalStore(
```

**Line:** 950 | **Kind:** fn

### `loadShortTermPromotionDreamingStats`

```
export async function loadShortTermPromotionDreamingStats(params: {
```

**Line:** 1191 | **Kind:** fn

### `filterLiveShortTermRecallEntries`

```
export async function filterLiveShortTermRecallEntries(params: {
```

**Line:** 1331 | **Kind:** fn

### `recordShortTermRecalls`

```
export async function recordShortTermRecalls(params: {
```

**Line:** 1388 | **Kind:** fn

### `recordGroundedShortTermCandidates`

```
export async function recordGroundedShortTermCandidates(params: {
```

**Line:** 1538 | **Kind:** fn

### `recordDreamingPhaseSignals`

```
export async function recordDreamingPhaseSignals(params: {
```

**Line:** 1672 | **Kind:** fn

### `recordRemConsideredPhaseSignals`

```
export async function recordRemConsideredPhaseSignals(params: {
```

**Line:** 1726 | **Kind:** fn

### `readLightStagedKeys`

```
export async function readLightStagedKeys(params: {
```

**Line:** 1773 | **Kind:** fn

### `filterFreshLightDreamingEntries`

```
export async function filterFreshLightDreamingEntries(params: {
```

**Line:** 1806 | **Kind:** fn

### `rankShortTermPromotionCandidates`

```
export async function rankShortTermPromotionCandidates(
```

**Line:** 1832 | **Kind:** fn

### `readShortTermRecallEntries`

```
export async function readShortTermRecallEntries(params: {
```

**Line:** 1977 | **Kind:** fn

### `applyShortTermPromotions`

```
export async function applyShortTermPromotions(
```

**Line:** 2487 | **Kind:** fn

### `resolveShortTermRecallStorePath`

```
export function resolveShortTermRecallStorePath(workspaceDir: string): string {
```

**Line:** 2681 | **Kind:** fn

### `resolveShortTermRecallLockPath`

```
export function resolveShortTermRecallLockPath(workspaceDir: string): string {
```

**Line:** 2685 | **Kind:** fn

### `auditShortTermPromotionArtifacts`

```
export async function auditShortTermPromotionArtifacts(params: {
```

**Line:** 2689 | **Kind:** fn

### `repairShortTermPromotionArtifacts`

```
export async function repairShortTermPromotionArtifacts(params: {
```

**Line:** 2838 | **Kind:** fn

### `removeGroundedShortTermCandidates`

```
export async function removeGroundedShortTermCandidates(params: {
```

**Line:** 2931 | **Kind:** fn
