# src/agents/embedded-agent-runner/tool-result-truncation.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1564
- **Language:** TypeScript
- **Symbols:** 50
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 80 | type | ToolResultTruncationOptions | (private) | - |
| 85 | fn | DEFAULT_SUFFIX | (private) | `const DEFAULT_SUFFIX = (truncatedChars: number) =>` |
| 87 | fn | COMPACT_RECOVERY_SUFFIX | (private) | `const COMPACT_RECOVERY_SUFFIX = (truncatedChars...` |
| 92 | fn | logToolResultSessionTruncation | (private) | `function logToolResultSessionTruncation(params: {` |
| 122 | fn | readRuntimeTranscriptFileState | (private) | `async function readRuntimeTranscriptFileState(` |
| 139 | fn | resolveSuffixFactory | (private) | `function resolveSuffixFactory(` |
| 151 | fn | resolveEffectiveMinKeepChars | (private) | `function resolveEffectiveMinKeepChars(params: {` |
| 160 | fn | appendBoundedTruncationSuffix | (private) | `function appendBoundedTruncationSuffix(params: {` |
| 166 | fn | build | (private) | `const build = (keptText: string) =>` |
| 195 | fn | hasImportantTail | (private) | `function hasImportantTail(text: string): boolean {` |
| 215 | fn | truncateToolResultText | (private) | `function truncateToolResultText(` |
| 284 | fn | calculateMaxToolResultChars | (private) | `function calculateMaxToolResultChars(contextWin...` |
| 291 | fn | resolveAutoLiveToolResultMaxChars | pub | `export function resolveAutoLiveToolResultMaxCha...` |
| 305 | fn | calculateMaxToolResultCharsWithCap | pub | `export function calculateMaxToolResultCharsWith...` |
| 315 | fn | resolveLiveToolResultMaxChars | pub | `export function resolveLiveToolResultMaxChars(p...` |
| 325 | fn | resolveLiveToolResultAggregateMaxChars | pub | `export function resolveLiveToolResultAggregateM...` |
| 360 | fn | getToolResultTextLength | (private) | `function getToolResultTextLength(msg: AgentMess...` |
| 384 | fn | truncateToolResultMessage | pub | `export function truncateToolResultMessage(` |
| 439 | fn | isToolResultTextBlock | (private) | `function isToolResultTextBlock(` |
| 452 | type | ToolResultSpillDetails | (private) | - |
| 458 | fn | getToolResultSpillDetails | (private) | `function getToolResultSpillDetails(message: Age...` |
| 486 | fn | toolResultTextContainsFullOutputFooter | (private) | `function toolResultTextContainsFullOutputFooter(` |
| 504 | type | AggregateElisionMarkers | (private) | - |
| 510 | fn | resolveAggregateElisionMarkers | (private) | `function resolveAggregateElisionMarkers(` |
| 546 | fn | formatAggregateElisionText | (private) | `function formatAggregateElisionText(` |
| 569 | fn | truncateOversizedToolResultsInMessages | pub | `export function truncateOversizedToolResultsInM...` |
| 679 | fn | calculateRecoveryAggregateToolResultChars | (private) | `function calculateRecoveryAggregateToolResultCh...` |
| 694 | type | ToolResultReductionPotential | (private) | - |
| 705 | type | ToolResultBranchEntry | (private) | - |
| 713 | type | ToolResultReplacement | (private) | - |
| 718 | fn | getToolResultProjectionBaseKey | (private) | `function getToolResultProjectionBaseKey(message...` |
| 731 | fn | getToolResultProjectionKeys | (private) | `function getToolResultProjectionKeys(` |
| 772 | fn | mergeProjectedToolResultMessage | (private) | `function mergeProjectedToolResultMessage(` |
| 814 | fn | getToolResultTextBlocks | (private) | `function getToolResultTextBlocks(message: Agent...` |
| 830 | fn | buildAggregateToolResultReplacements | (private) | `function buildAggregateToolResultReplacements(p...` |
| 970 | fn | getTrailingToolResultEntryIds | (private) | `function getTrailingToolResultEntryIds(branch: ...` |
| 990 | fn | clearToolResultText | (private) | `function clearToolResultText(` |
| 1022 | fn | buildOversizedToolResultReplacements | (private) | `function buildOversizedToolResultReplacements(p...` |
| 1060 | fn | calculateReplacementReduction | (private) | `function calculateReplacementReduction(` |
| 1084 | fn | applyToolResultReplacementsToBranch | (private) | `function applyToolResultReplacementsToBranch(` |
| 1106 | fn | buildToolResultReplacementPlan | (private) | `function buildToolResultReplacementPlan(params: {` |
| 1161 | fn | buildRecoveryToolResultReplacementPlan | (private) | `function buildRecoveryToolResultReplacementPlan...` |
| 1194 | fn | estimateToolResultReductionPotential | pub | `export function estimateToolResultReductionPote...` |
| 1249 | fn | truncateOversizedToolResultsInExistingSessionManager | (private) | `function truncateOversizedToolResultsInExisting...` |
| 1320 | fn | truncateOversizedToolResultsInTranscriptState | (private) | `async function truncateOversizedToolResultsInTr...` |
| 1397 | fn | truncateOversizedToolResultsInSessionManager | pub | `export function truncateOversizedToolResultsInS...` |
| 1420 | fn | truncateOversizedToolResultsInRuntimeTranscript | (private) | `async function truncateOversizedToolResultsInRu...` |
| 1482 | fn | truncateOversizedToolResultsInActiveTarget | pub | `export async function truncateOversizedToolResu...` |
| 1516 | fn | truncateOversizedToolResultsInSession | (private) | `async function truncateOversizedToolResultsInSe...` |
| 1556 | fn | sessionLikelyHasOversizedToolResults | pub | `export function sessionLikelyHasOversizedToolRe...` |

## Public API

### `resolveAutoLiveToolResultMaxChars`

```
export function resolveAutoLiveToolResultMaxChars(contextWindowTokens: number): number {
```

**Line:** 291 | **Kind:** fn

### `calculateMaxToolResultCharsWithCap`

```
export function calculateMaxToolResultCharsWithCap(
```

**Line:** 305 | **Kind:** fn

### `resolveLiveToolResultMaxChars`

```
export function resolveLiveToolResultMaxChars(params: {
```

**Line:** 315 | **Kind:** fn

### `resolveLiveToolResultAggregateMaxChars`

```
export function resolveLiveToolResultAggregateMaxChars(params: {
```

**Line:** 325 | **Kind:** fn

### `truncateToolResultMessage`

```
export function truncateToolResultMessage(
```

**Line:** 384 | **Kind:** fn

### `truncateOversizedToolResultsInMessages`

```
export function truncateOversizedToolResultsInMessages(
```

**Line:** 569 | **Kind:** fn

### `estimateToolResultReductionPotential`

```
export function estimateToolResultReductionPotential(params: {
```

**Line:** 1194 | **Kind:** fn

### `truncateOversizedToolResultsInSessionManager`

```
export function truncateOversizedToolResultsInSessionManager(params: {
```

**Line:** 1397 | **Kind:** fn

### `truncateOversizedToolResultsInActiveTarget`

```
export async function truncateOversizedToolResultsInActiveTarget(params: {
```

**Line:** 1482 | **Kind:** fn

### `sessionLikelyHasOversizedToolResults`

```
export function sessionLikelyHasOversizedToolResults(params: {
```

**Line:** 1556 | **Kind:** fn
