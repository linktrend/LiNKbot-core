# extensions/memory-core/src/dreaming-phases.ts

[← Back to Module](../modules/extensions-memory-core/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1972
- **Language:** TypeScript
- **Symbols:** 73
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 54 | type | Logger | (private) | - |
| 55 | type | DreamingHostConfig | (private) | - |
| 56 | type | DreamingPhaseStorageConfig | (private) | - |
| 61 | type | LightDreamingConfig | (private) | - |
| 67 | type | RemDreamingConfig | (private) | - |
| 116 | fn | calculateLookbackCutoffMs | (private) | `function calculateLookbackCutoffMs(nowMs: numbe...` |
| 120 | fn | isDayWithinLookback | (private) | `function isDayWithinLookback(day: string, cutof...` |
| 125 | fn | normalizeDailyListMarker | (private) | `function normalizeDailyListMarker(line: string)...` |
| 132 | fn | normalizeDailyHeading | (private) | `function normalizeDailyHeading(line: string): s...` |
| 145 | fn | isGenericDailyHeading | (private) | `function isGenericDailyHeading(heading: string)...` |
| 160 | fn | normalizeDailySnippet | (private) | `function normalizeDailySnippet(line: string): s...` |
| 175 | type | DailySnippetChunk | (private) | - |
| 183 | fn | buildDailyChunkSnippet | (private) | `function buildDailyChunkSnippet(` |
| 194 | fn | buildDailySnippetChunks | (private) | `function buildDailySnippetChunks(lines: string[...` |
| 202 | fn | flushChunk | (private) | `const flushChunk = () => {` |
| 279 | fn | findManagedDailyDreamingHeadingIndex | (private) | `function findManagedDailyDreamingHeadingIndex(` |
| 294 | fn | isManagedDailyDreamingBoundary | (private) | `function isManagedDailyDreamingBoundary(` |
| 302 | fn | stripManagedDailyDreamingLines | (private) | `function stripManagedDailyDreamingLines(lines: ...` |
| 340 | fn | entryWithinLookback | (private) | `function entryWithinLookback(entry: ShortTermRe...` |
| 352 | fn | filterRecallEntriesWithinLookback | pub | `export function filterRecallEntriesWithinLookba...` |
| 361 | type | DailyIngestionBatch | (private) | - |
| 366 | type | DailyMemoryFile | (private) | - |
| 372 | type | DailyIngestionFileState | (private) | - |
| 378 | fn | parseDailyMemoryFileName | (private) | `function parseDailyMemoryFileName(fileName: str...` |
| 390 | fn | compareDailyMemoryFilesByNewestDay | (private) | `function compareDailyMemoryFilesByNewestDay(lef...` |
| 401 | fn | resolveWorkspaceMemoryRelativePath | (private) | `function resolveWorkspaceMemoryRelativePath(wor...` |
| 409 | type | DailyIngestionState | (private) | - |
| 414 | fn | normalizeDailyIngestionState | pub | `export function normalizeDailyIngestionState(ra...` |
| 447 | fn | normalizeMemoryDay | (private) | `function normalizeMemoryDay(value: unknown): st...` |
| 455 | fn | readDailyIngestionState | (private) | `async function readDailyIngestionState(workspac...` |
| 466 | fn | writeDailyIngestionState | (private) | `async function writeDailyIngestionState(` |
| 477 | type | SessionIngestionFileState | (private) | - |
| 485 | type | SessionIngestionState | (private) | - |
| 491 | type | SessionIngestionMessage | (private) | - |
| 497 | type | SessionIngestionCollectionResult | (private) | - |
| 503 | fn | normalizeSessionIngestionState | pub | `export function normalizeSessionIngestionState(...` |
| 553 | fn | readSessionIngestionState | (private) | `async function readSessionIngestionState(worksp...` |
| 587 | fn | writeSessionIngestionState | (private) | `async function writeSessionIngestionState(` |
| 617 | fn | trimTrackedSessionScopes | (private) | `function trimTrackedSessionScopes(` |
| 634 | fn | normalizeSessionCorpusSnippet | (private) | `function normalizeSessionCorpusSnippet(value: s...` |
| 638 | fn | hashSessionMessageId | (private) | `function hashSessionMessageId(value: string): s...` |
| 642 | fn | buildSessionScopeKey | (private) | `function buildSessionScopeKey(agentId: string, ...` |
| 648 | fn | buildSessionFileScopeKey | (private) | `function buildSessionFileScopeKey(agentId: stri...` |
| 654 | fn | mergeTrackedMessageHashes | (private) | `function mergeTrackedMessageHashes(existing: st...` |
| 672 | fn | areStringArraysEqual | (private) | `function areStringArraysEqual(a: string[], b: s...` |
| 684 | fn | buildSessionStateKey | (private) | `function buildSessionStateKey(agentId: string, ...` |
| 688 | fn | buildSqliteDreamingSessionPath | (private) | `function buildSqliteDreamingSessionPath(agentId...` |
| 692 | fn | isCheckpointSessionTranscriptPath | (private) | `function isCheckpointSessionTranscriptPath(abso...` |
| 696 | fn | buildSessionRenderedLine | (private) | `function buildSessionRenderedLine(params: {` |
| 709 | fn | resolveSessionAgentsForWorkspace | (private) | `function resolveSessionAgentsForWorkspace(param...` |
| 735 | fn | appendSessionCorpusLines | (private) | `async function appendSessionCorpusLines(params: {` |
| 784 | fn | collectSessionIngestionBatches | (private) | `async function collectSessionIngestionBatches(p...` |
| 1127 | fn | ingestSessionTranscriptSignals | (private) | `async function ingestSessionTranscriptSignals(p...` |
| 1163 | type | DailyIngestionCollectionResult | (private) | - |
| 1169 | fn | collectDailyIngestionBatches | (private) | `async function collectDailyIngestionBatches(par...` |
| 1298 | fn | ingestDailyMemorySignals | (private) | `async function ingestDailyMemorySignals(params: {` |
| 1332 | fn | seedHistoricalDailyMemorySignals | pub | `export async function seedHistoricalDailyMemory...` |
| 1449 | fn | entryAverageScore | (private) | `function entryAverageScore(entry: ShortTermReca...` |
| 1461 | fn | dedupeEntries | (private) | `function dedupeEntries(entries: ShortTermRecall...` |
| 1491 | fn | normalizeDiaryCoverageText | (private) | `function normalizeDiaryCoverageText(text: strin...` |
| 1495 | fn | isEntryCoveredByRecentDiary | (private) | `function isEntryCoveredByRecentDiary(` |
| 1512 | fn | prioritizeLightEntriesByDiaryCoverage | (private) | `function prioritizeLightEntriesByDiaryCoverage(` |
| 1531 | fn | buildLightDreamingBody | (private) | `function buildLightDreamingBody(entries: ShortT...` |
| 1547 | type | RemTruthSelection | (private) | - |
| 1554 | type | RemTruthCandidate | (private) | - |
| 1556 | type | RemDreamingPreview | pub | - |
| 1564 | fn | calculateCandidateTruthConfidence | (private) | `function calculateCandidateTruthConfidence(entr...` |
| 1578 | fn | selectRemCandidateTruths | (private) | `function selectRemCandidateTruths(` |
| 1600 | fn | buildRemReflections | (private) | `function buildRemReflections(` |
| 1644 | fn | previewRemDreaming | pub | `export function previewRemDreaming(params: {` |
| 1681 | fn | runLightDreaming | (private) | `async function runLightDreaming(params: {` |
| 1789 | fn | runRemDreaming | (private) | `async function runRemDreaming(params: {` |
| 1904 | fn | runDreamingSweepPhases | pub | `export async function runDreamingSweepPhases(pa...` |

## Public API

### `filterRecallEntriesWithinLookback`

```
export function filterRecallEntriesWithinLookback(params: {
```

**Line:** 352 | **Kind:** fn

### `normalizeDailyIngestionState`

```
export function normalizeDailyIngestionState(raw: unknown): DailyIngestionState {
```

**Line:** 414 | **Kind:** fn

### `normalizeSessionIngestionState`

```
export function normalizeSessionIngestionState(raw: unknown): SessionIngestionState {
```

**Line:** 503 | **Kind:** fn

### `seedHistoricalDailyMemorySignals`

```
export async function seedHistoricalDailyMemorySignals(params: {
```

**Line:** 1332 | **Kind:** fn

### `previewRemDreaming`

```
export function previewRemDreaming(params: {
```

**Line:** 1644 | **Kind:** fn

### `runDreamingSweepPhases`

```
export async function runDreamingSweepPhases(params: {
```

**Line:** 1904 | **Kind:** fn
