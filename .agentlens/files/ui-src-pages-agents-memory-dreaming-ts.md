# ui/src/pages/agents/memory/dreaming.ts

[← Back to Module](../modules/ui-src-pages-agents-memory/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1275
- **Language:** TypeScript
- **Symbols:** 67
- **Public symbols:** 17

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 13 | type | DreamingPhaseStatusBase | (private) | - |
| 20 | type | LightDreamingStatus | (private) | - |
| 25 | type | DeepDreamingStatus | (private) | - |
| 35 | type | RemDreamingStatus | (private) | - |
| 41 | type | DreamingEntry | pub | - |
| 58 | type | DreamingStatus | (private) | - |
| 88 | type | WikiImportInsightItem | (private) | - |
| 111 | type | WikiImportInsightCluster | (private) | - |
| 122 | type | WikiImportInsights | pub | - |
| 129 | type | WikiMemoryPalaceItem | (private) | - |
| 145 | type | WikiMemoryPalaceCluster | (private) | - |
| 156 | type | WikiMemoryPalacePageCounts | (private) | - |
| 158 | type | WikiMemoryPalace | pub | - |
| 168 | type | DoctorMemoryStatusPayload | (private) | - |
| 172 | type | DoctorMemoryDreamDiaryPayload | (private) | - |
| 178 | type | DoctorMemoryDreamActionPayload | (private) | - |
| 194 | type | WikiImportInsightsPayload | (private) | - |
| 201 | type | WikiMemoryPalacePayload | (private) | - |
| 211 | type | DreamingState | pub | - |
| 256 | fn | createDreamingState | pub | `export function createDreamingState(` |
| 292 | type | DreamingConfigCapability | (private) | - |
| 297 | fn | confirmDreamingAction | (private) | `function confirmDreamingAction(message: string)...` |
| 304 | fn | isMemoryWikiEnabled | (private) | `function isMemoryWikiEnabled(state: DreamingSta...` |
| 310 | fn | canCallMemoryWikiMethod | (private) | `function canCallMemoryWikiMethod(state: Dreamin...` |
| 318 | fn | buildDreamDiaryActionSuccessMessage | (private) | `function buildDreamDiaryActionSuccessMessage(` |
| 369 | fn | normalizeTrimmedString | (private) | `function normalizeTrimmedString(value: unknown)...` |
| 377 | fn | resolveSelectedAgentId | (private) | `function resolveSelectedAgentId(state: Dreaming...` |
| 381 | fn | buildSelectedAgentPayloadForAgentId | (private) | `function buildSelectedAgentPayloadForAgentId(` |
| 387 | fn | buildSelectedAgentPayload | (private) | `function buildSelectedAgentPayload(` |
| 393 | fn | normalizeBoolean | (private) | `function normalizeBoolean(value: unknown, fallb...` |
| 397 | fn | normalizeFiniteInt | (private) | `function normalizeFiniteInt(value: unknown, fal...` |
| 404 | fn | normalizeFiniteScore | (private) | `function normalizeFiniteScore(value: unknown, f...` |
| 411 | fn | normalizeStorageMode | (private) | `function normalizeStorageMode(value: unknown): ...` |
| 419 | fn | normalizeNextRun | (private) | `function normalizeNextRun(value: unknown): numb...` |
| 423 | fn | normalizePhaseStatusBase | (private) | `function normalizePhaseStatusBase(record: Recor...` |
| 434 | fn | resolveDreamingPluginId | (private) | `function resolveDreamingPluginId(configValue: R...` |
| 444 | fn | resolveConfiguredDreaming | pub | `export function resolveConfiguredDreaming(confi...` |
| 460 | fn | normalizeDreamingEntry | (private) | `function normalizeDreamingEntry(raw: unknown): ...` |
| 488 | fn | normalizeDreamingEntries | (private) | `function normalizeDreamingEntries(raw: unknown)...` |
| 497 | fn | normalizeStringArray | (private) | `function normalizeStringArray(raw: unknown): st...` |
| 506 | fn | normalizeWikiImportInsightItem | (private) | `function normalizeWikiImportInsightItem(raw: un...` |
| 563 | fn | normalizeWikiImportInsightCluster | (private) | `function normalizeWikiImportInsightCluster(raw:...` |
| 598 | fn | normalizeWikiImportInsights | (private) | `function normalizeWikiImportInsights(raw: unkno...` |
| 616 | fn | normalizeWikiPageKind | (private) | `function normalizeWikiPageKind(value: unknown):...` |
| 626 | fn | createEmptyWikiMemoryPalacePageCounts | (private) | `function createEmptyWikiMemoryPalacePageCounts(...` |
| 636 | fn | normalizeWikiMemoryPalacePageCounts | (private) | `function normalizeWikiMemoryPalacePageCounts(` |
| 650 | fn | sumWikiMemoryPalacePageCounts | (private) | `function sumWikiMemoryPalacePageCounts(pageCoun...` |
| 660 | fn | normalizeWikiMemoryPalaceItem | (private) | `function normalizeWikiMemoryPalaceItem(raw: unk...` |
| 691 | fn | normalizeWikiMemoryPalaceCluster | (private) | `function normalizeWikiMemoryPalaceCluster(raw: ...` |
| 726 | fn | normalizeWikiMemoryPalace | (private) | `function normalizeWikiMemoryPalace(raw: unknown...` |
| 763 | fn | normalizeDreamingStatus | (private) | `function normalizeDreamingStatus(raw: unknown):...` |
| 841 | fn | loadDreamingStatus | pub | `export async function loadDreamingStatus(state:...` |
| 889 | fn | loadDreamDiary | pub | `export async function loadDreamDiary(state: Dre...` |
| 946 | fn | loadWikiImportInsights | pub | `export async function loadWikiImportInsights(st...` |
| 1002 | fn | loadWikiMemoryPalace | pub | `export async function loadWikiMemoryPalace(stat...` |
| 1058 | fn | runDreamDiaryAction | (private) | `async function runDreamDiaryAction(` |
| 1124 | fn | backfillDreamDiary | pub | `export async function backfillDreamDiary(state:...` |
| 1128 | fn | resetDreamDiary | pub | `export async function resetDreamDiary(state: Dr...` |
| 1132 | fn | resetGroundedShortTerm | pub | `export async function resetGroundedShortTerm(st...` |
| 1138 | fn | repairDreamingArtifacts | pub | `export async function repairDreamingArtifacts(s...` |
| 1144 | fn | copyDreamingArchivePath | pub | `export async function copyDreamingArchivePath(s...` |
| 1163 | fn | dedupeDreamDiary | pub | `export async function dedupeDreamDiary(state: D...` |
| 1167 | fn | writeDreamingPatch | (private) | `async function writeDreamingPatch(` |
| 1193 | fn | lookupIncludesDreamingProperty | (private) | `function lookupIncludesDreamingProperty(value: ...` |
| 1205 | fn | lookupDisallowsUnknownProperties | (private) | `function lookupDisallowsUnknownProperties(value...` |
| 1211 | fn | ensureDreamingPathSupported | (private) | `async function ensureDreamingPathSupported(` |
| 1236 | fn | updateDreamingEnabled | pub | `export async function updateDreamingEnabled(` |

## Public API

### `createDreamingState`

```
export function createDreamingState(
```

**Line:** 256 | **Kind:** fn

### `resolveConfiguredDreaming`

```
export function resolveConfiguredDreaming(configValue: Record<string, unknown> | null): {
```

**Line:** 444 | **Kind:** fn

### `loadDreamingStatus`

```
export async function loadDreamingStatus(state: DreamingState): Promise<void> {
```

**Line:** 841 | **Kind:** fn

### `loadDreamDiary`

```
export async function loadDreamDiary(state: DreamingState): Promise<void> {
```

**Line:** 889 | **Kind:** fn

### `loadWikiImportInsights`

```
export async function loadWikiImportInsights(state: DreamingState): Promise<void> {
```

**Line:** 946 | **Kind:** fn

### `loadWikiMemoryPalace`

```
export async function loadWikiMemoryPalace(state: DreamingState): Promise<void> {
```

**Line:** 1002 | **Kind:** fn

### `backfillDreamDiary`

```
export async function backfillDreamDiary(state: DreamingState): Promise<boolean> {
```

**Line:** 1124 | **Kind:** fn

### `resetDreamDiary`

```
export async function resetDreamDiary(state: DreamingState): Promise<boolean> {
```

**Line:** 1128 | **Kind:** fn

### `resetGroundedShortTerm`

```
export async function resetGroundedShortTerm(state: DreamingState): Promise<boolean> {
```

**Line:** 1132 | **Kind:** fn

### `repairDreamingArtifacts`

```
export async function repairDreamingArtifacts(state: DreamingState): Promise<boolean> {
```

**Line:** 1138 | **Kind:** fn

### `copyDreamingArchivePath`

```
export async function copyDreamingArchivePath(state: DreamingState): Promise<boolean> {
```

**Line:** 1144 | **Kind:** fn

### `dedupeDreamDiary`

```
export async function dedupeDreamDiary(state: DreamingState): Promise<boolean> {
```

**Line:** 1163 | **Kind:** fn

### `updateDreamingEnabled`

```
export async function updateDreamingEnabled(
```

**Line:** 1236 | **Kind:** fn
