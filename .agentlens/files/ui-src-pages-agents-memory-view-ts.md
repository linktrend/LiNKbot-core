# ui/src/pages/agents/memory/view.ts

[← Back to Module](../modules/ui-src-pages-agents-memory/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1561
- **Language:** TypeScript
- **Symbols:** 43
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 19 | type | DiaryEntry | (private) | - |
| 24 | type | DiaryEntryNav | (private) | - |
| 33 | fn | parseDiaryEntries | (private) | `function parseDiaryEntries(raw: string): DiaryE...` |
| 75 | fn | parseDiaryTimestamp | (private) | `function parseDiaryTimestamp(date: string): num...` |
| 80 | fn | formatDiaryChipLabel | (private) | `function formatDiaryChipLabel(date: string): st...` |
| 89 | fn | buildDiaryNavigation | (private) | `function buildDiaryNavigation(entries: DiaryEnt...` |
| 94 | type | DreamingPhaseInfo | (private) | - |
| 100 | type | DreamingProps | (private) | - |
| 187 | type | DreamingViewState | pub | - |
| 208 | fn | createDreamingViewState | pub | `export function createDreamingViewState(): Drea...` |
| 231 | fn | setDiaryPage | (private) | `function setDiaryPage(state: DreamingViewState,...` |
| 235 | fn | currentDreamPhrase | (private) | `function currentDreamPhrase(state: DreamingView...` |
| 267 | fn | renderDreamsCameo | (private) | `function renderDreamsCameo(agentId: string) {` |
| 275 | fn | renderDreaming | pub | `export function renderDreaming(props: DreamingP...` |
| 328 | fn | flattenDiaryBody | (private) | `function flattenDiaryBody(body: string): string...` |
| 355 | fn | formatPhaseNextRun | (private) | `function formatPhaseNextRun(nextRunAtMs?: numbe...` |
| 363 | fn | renderScene | (private) | `function renderScene(props: DreamingProps, idle...` |
| 450 | fn | formatRange | (private) | `function formatRange(path: string, startLine: n...` |
| 454 | fn | formatCompactDateTime | (private) | `function formatCompactDateTime(value: string): ...` |
| 467 | fn | basename | (private) | `function basename(value: string): string {` |
| 472 | fn | formatKindLabel | (private) | `function formatKindLabel(kind: "entity" | "conc...` |
| 488 | fn | formatCount | (private) | `function formatCount(count: number, singular: s...` |
| 500 | fn | formatMemoryPalacePageCountLabel | (private) | `function formatMemoryPalacePageCountLabel(kind:...` |
| 516 | fn | formatMemoryPalacePageBreakdown | (private) | `function formatMemoryPalacePageBreakdown(pageCo...` |
| 526 | fn | formatMemoryPalaceClusterSummary | (private) | `function formatMemoryPalaceClusterSummary(clust...` |
| 543 | fn | formatImportBadge | (private) | `function formatImportBadge(item: {` |
| 563 | fn | toggleExpandedCard | (private) | `function toggleExpandedCard(bucket: Set<string>...` |
| 572 | fn | openWikiPreview | (private) | `async function openWikiPreview(lookup: string, ...` |
| 613 | fn | resetWikiPreview | (private) | `function resetWikiPreview(state: DreamingViewSt...` |
| 626 | fn | closeWikiPreview | (private) | `function closeWikiPreview(props: DreamingProps)...` |
| 631 | fn | renderWikiPreviewOverlay | (private) | `function renderWikiPreviewOverlay(props: Dreami...` |
| 685 | fn | renderDiarySubtabExplainer | (private) | `function renderDiarySubtabExplainer(activeDiary...` |
| 697 | fn | parseSortableTimestamp | (private) | `function parseSortableTimestamp(value?: string)...` |
| 705 | fn | compareWaitingEntryByRecency | (private) | `function compareWaitingEntryByRecency(a: Dreami...` |
| 717 | fn | compareWaitingEntryBySignals | (private) | `function compareWaitingEntryBySignals(a: Dreami...` |
| 727 | fn | sortWaitingEntries | (private) | `function sortWaitingEntries(` |
| 736 | fn | describeWaitingEntryOrigin | (private) | `function describeWaitingEntryOrigin(entry: Drea...` |
| 748 | fn | renderAdvancedEntryList | (private) | `function renderAdvancedEntryList(params: {` |
| 803 | fn | renderAdvancedSection | (private) | `function renderAdvancedSection(props: DreamingP...` |
| 984 | fn | renderDiaryImportsSection | (private) | `function renderDiaryImportsSection(props: Dream...` |
| 1177 | fn | renderMemoryPalaceSection | (private) | `function renderMemoryPalaceSection(props: Dream...` |
| 1359 | fn | renderDreamDiaryEntries | (private) | `function renderDreamDiaryEntries(props: Dreamin...` |
| 1425 | fn | renderDiarySection | (private) | `function renderDiarySection(props: DreamingProp...` |

## Public API

### `createDreamingViewState`

```
export function createDreamingViewState(): DreamingViewState {
```

**Line:** 208 | **Kind:** fn

### `renderDreaming`

```
export function renderDreaming(props: DreamingProps) {
```

**Line:** 275 | **Kind:** fn
