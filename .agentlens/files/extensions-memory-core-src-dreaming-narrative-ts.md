# extensions/memory-core/src/dreaming-narrative.ts

[← Back to Module](../modules/extensions-memory-core/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1018
- **Language:** TypeScript
- **Symbols:** 39
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 24 | type | SubagentSurface | (private) | - |
| 46 | type | NarrativePhaseData | pub | - |
| 58 | type | Logger | (private) | - |
| 117 | type | NarrativeSessionLockEntry | (private) | - |
| 126 | fn | isRequestScopedSubagentRuntimeError | (private) | `function isRequestScopedSubagentRuntimeError(er...` |
| 135 | fn | formatFallbackWriteFailure | (private) | `function formatFallbackWriteFailure(err: unknow...` |
| 153 | fn | appendFallbackNarrativeEntry | pub | `export async function appendFallbackNarrativeEn...` |
| 180 | fn | buildNarrativeAttemptSessionKey | (private) | `function buildNarrativeAttemptSessionKey(baseSe...` |
| 184 | fn | isConfiguredModelUnavailableNarrativeError | (private) | `function isConfiguredModelUnavailableNarrativeE...` |
| 225 | fn | formatNarrativeTerminalStatus | (private) | `function formatNarrativeTerminalStatus(params: ...` |
| 230 | fn | startNarrativeRunOrFallback | (private) | `async function startNarrativeRunOrFallback(para...` |
| 272 | fn | buildNarrativeSessionKey | (private) | `function buildNarrativeSessionKey(params: {` |
| 282 | fn | buildNarrativePrompt | (private) | `function buildNarrativePrompt(data: NarrativePh...` |
| 330 | fn | extractNarrativeText | (private) | `function extractNarrativeText(messages: unknown...` |
| 366 | fn | waitForNarrativeMessagesToSettle | (private) | `function waitForNarrativeMessagesToSettle(delay...` |
| 372 | fn | readNarrativeText | (private) | `async function readNarrativeText(params: {` |
| 383 | fn | readSettledNarrativeText | (private) | `async function readSettledNarrativeText(params: {` |
| 404 | fn | formatNarrativeDate | (private) | `function formatNarrativeDate(epochMs: number, t...` |
| 424 | fn | ensureDiarySection | (private) | `function ensureDiarySection(existing: string): ...` |
| 435 | fn | replaceDiaryContent | (private) | `function replaceDiaryContent(existing: string, ...` |
| 448 | fn | splitDiaryBlocks | (private) | `function splitDiaryBlocks(diaryContent: string)...` |
| 455 | fn | clampDiaryContextEntry | (private) | `function clampDiaryContextEntry(entry: string):...` |
| 463 | fn | normalizeDiaryBlockBody | (private) | `function normalizeDiaryBlockBody(block: string)...` |
| 478 | fn | isOptionalDiaryContextReadError | (private) | `function isOptionalDiaryContextReadError(err: u...` |
| 496 | fn | readRecentDreamDiaryEntries | pub | `export async function readRecentDreamDiaryEntri...` |
| 527 | fn | normalizeDiaryBlockFingerprint | (private) | `function normalizeDiaryBlockFingerprint(block: ...` |
| 552 | fn | joinDiaryBlocks | (private) | `function joinDiaryBlocks(blocks: string[]): str...` |
| 559 | fn | stripBackfillDiaryBlocks | (private) | `function stripBackfillDiaryBlocks(existing: str...` |
| 582 | fn | formatBackfillDiaryDate | (private) | `function formatBackfillDiaryDate(isoDay: string...` |
| 599 | fn | withNarrativeSessionLock | (private) | `async function withNarrativeSessionLock<T>(sess...` |
| 616 | fn | buildBackfillDiaryEntry | (private) | `function buildBackfillDiaryEntry(params: {` |
| 631 | fn | writeBackfillDiaryEntries | pub | `export async function writeBackfillDiaryEntries...` |
| 674 | fn | removeBackfillDiaryEntries | pub | `export async function removeBackfillDiaryEntrie...` |
| 693 | fn | dedupeDreamDiaryEntries | pub | `export async function dedupeDreamDiaryEntries(p...` |
| 736 | fn | buildDiaryEntry | (private) | `function buildDiaryEntry(narrative: string, dat...` |
| 740 | fn | appendNarrativeEntry | (private) | `async function appendNarrativeEntry(params: {` |
| 775 | fn | scrubDreamingNarrativeArtifacts | (private) | `async function scrubDreamingNarrativeArtifacts(...` |
| 816 | fn | generateAndAppendDreamNarrative | pub | `export async function generateAndAppendDreamNar...` |
| 1006 | fn | runDetachedDreamNarrative | pub | `export function runDetachedDreamNarrative(` |

## Public API

### `appendFallbackNarrativeEntry`

```
export async function appendFallbackNarrativeEntry(params: {
```

**Line:** 153 | **Kind:** fn

### `readRecentDreamDiaryEntries`

```
export async function readRecentDreamDiaryEntries(params: {
```

**Line:** 496 | **Kind:** fn

### `writeBackfillDiaryEntries`

```
export async function writeBackfillDiaryEntries(params: {
```

**Line:** 631 | **Kind:** fn

### `removeBackfillDiaryEntries`

```
export async function removeBackfillDiaryEntries(params: {
```

**Line:** 674 | **Kind:** fn

### `dedupeDreamDiaryEntries`

```
export async function dedupeDreamDiaryEntries(params: {
```

**Line:** 693 | **Kind:** fn

### `generateAndAppendDreamNarrative`

```
export async function generateAndAppendDreamNarrative(params: {
```

**Line:** 816 | **Kind:** fn

### `runDetachedDreamNarrative`

```
export function runDetachedDreamNarrative(
```

**Line:** 1006 | **Kind:** fn
