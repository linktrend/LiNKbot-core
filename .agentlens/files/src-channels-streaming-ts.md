# src/channels/streaming.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1329
- **Language:** TypeScript
- **Symbols:** 72
- **Public symbols:** 37

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 49 | fn | asObjectRecord | (private) | `function asObjectRecord(value: unknown): Record...` |
| 55 | fn | asInteger | (private) | `function asInteger(value: unknown): number | un...` |
| 59 | fn | normalizeStreamingMode | (private) | `function normalizeStreamingMode(value: unknown)...` |
| 67 | fn | parsePreviewStreamingMode | (private) | `function parsePreviewStreamingMode(value: unkno...` |
| 80 | fn | asProgressConfig | (private) | `function asProgressConfig(value: unknown): Chan...` |
| 84 | fn | asCommandTextMode | (private) | `function asCommandTextMode(value: unknown): Cha...` |
| 109 | fn | isChannelProgressDraftWorkToolName | pub | `export function isChannelProgressDraftWorkToolN...` |
| 114 | fn | stripTrailingEllipsis | (private) | `function stripTrailingEllipsis(text: string): s...` |
| 118 | fn | isPotentialTruncatedFinal | pub | `export function isPotentialTruncatedFinal(final...` |
| 126 | fn | selectLongerFinalText | pub | `export function selectLongerFinalText(params: {` |
| 155 | fn | resolveTranscriptBackedChannelFinalText | pub | `export async function resolveTranscriptBackedCh...` |
| 171 | type | ChannelProgressLineOptions | pub | - |
| 180 | type | ChannelProgressDraftRenderMode | pub | - |
| 182 | type | AgentPlanStepStatus | pub | - |
| 184 | type | AgentPlanStep | pub | - |
| 189 | type | AgentPlanStepInput | pub | - |
| 191 | fn | isAgentPlanStepStatus | (private) | `function isAgentPlanStepStatus(value: unknown):...` |
| 201 | fn | normalizeAgentPlanSteps | pub | `export function normalizeAgentPlanSteps(value: ...` |
| 222 | type | ChannelProgressDraftLineInput | pub | - |
| 282 | type | ChannelProgressDraftLineKind | pub | - |
| 284 | type | ChannelProgressDraftLine | pub | - |
| 307 | fn | compactStrings | (private) | `function compactStrings(values: readonly (strin...` |
| 311 | fn | inferToolMeta | (private) | `function inferToolMeta(` |
| 322 | fn | buildNamedProgressLine | (private) | `function buildNamedProgressLine(` |
| 365 | fn | setProgressDraftLineCorrelationKey | (private) | `function setProgressDraftLineCorrelationKey(` |
| 375 | fn | itemKindToToolName | (private) | `function itemKindToToolName(kind: string | unde...` |
| 393 | fn | isCommandToolName | pub | `export function isCommandToolName(name: string ...` |
| 398 | fn | isCommandProgressItem | (private) | `function isCommandProgressItem(input: Extract<C...` |
| 403 | fn | resolveProgressDraftLineId | (private) | `function resolveProgressDraftLineId(` |
| 420 | fn | resolveCommandProgressCorrelationKey | (private) | `function resolveCommandProgressCorrelationKey(i...` |
| 425 | fn | isTerminalProgressStatus | (private) | `function isTerminalProgressStatus(status: strin...` |
| 434 | fn | isEmptyReasoningProgressItem | (private) | `function isEmptyReasoningProgressItem(` |
| 445 | fn | patchMetas | (private) | `function patchMetas(input: Extract<ChannelProgr...` |
| 450 | fn | buildCommandOutputProgressLine | (private) | `function buildCommandOutputProgressLine(` |
| 486 | fn | shouldPrefixProgressLine | (private) | `function shouldPrefixProgressLine(line: string)...` |
| 490 | fn | formatChannelProgressDraftLine | pub | `export function formatChannelProgressDraftLine(` |
| 499 | fn | resolveChannelProgressDraftLineOptions | pub | `export function resolveChannelProgressDraftLine...` |
| 511 | fn | buildChannelProgressDraftLineForEntry | pub | `export function buildChannelProgressDraftLineFo...` |
| 525 | fn | formatChannelProgressDraftLineForEntry | pub | `export function formatChannelProgressDraftLineF...` |
| 536 | fn | buildChannelProgressDraftLine | pub | `export function buildChannelProgressDraftLine(` |
| 656 | fn | createChannelProgressDraftGate | pub | `export function createChannelProgressDraftGate(...` |
| 683 | fn | clearTimer | (private) | `const clearTimer = () => {` |
| 722 | fn | schedule | (private) | `const schedule = () => {` |
| 775 | fn | getChannelStreamingConfigObject | pub | `export function getChannelStreamingConfigObject(` |
| 782 | fn | resolveChannelStreamingPreviewToolProgress | pub | `export function resolveChannelStreamingPreviewT...` |
| 797 | fn | resolveChannelStreamingProgressCommentary | pub | `export function resolveChannelStreamingProgress...` |
| 811 | fn | resolveChannelStreamingProgressNarration | pub | `export function resolveChannelStreamingProgress...` |
| 819 | fn | resolveChannelStreamingPreviewCommandText | pub | `export function resolveChannelStreamingPreviewC...` |
| 831 | fn | resolveChannelStreamingSuppressDefaultToolProgressMessages | pub | `export function resolveChannelStreamingSuppress...` |
| 855 | fn | resolveChannelStreamingNativeTransport | pub | `export function resolveChannelStreamingNativeTr...` |
| 861 | fn | resolveChannelPreviewStreamMode | pub | `export function resolveChannelPreviewStreamMode(` |
| 883 | fn | resolveChannelProgressDraftConfig | pub | `export function resolveChannelProgressDraftConfig(` |
| 889 | fn | normalizeProgressLabels | (private) | `function normalizeProgressLabels(labels: unknow...` |
| 897 | fn | resolveChannelProgressDraftLabel | pub | `export function resolveChannelProgressDraftLabe...` |
| 915 | fn | resolveChannelProgressDraftMaxLines | pub | `export function resolveChannelProgressDraftMaxL...` |
| 923 | fn | resolveChannelProgressDraftMaxLineChars | pub | `export function resolveChannelProgressDraftMaxL...` |
| 931 | fn | resolveChannelProgressDraftRender | pub | `export function resolveChannelProgressDraftRender(` |
| 939 | fn | sliceCodePoints | (private) | `function sliceCodePoints(value: string, start: ...` |
| 943 | fn | compactProgressLineDetail | (private) | `function compactProgressLineDetail(detail: stri...` |
| 959 | fn | removeUnbalancedInlineBackticks | (private) | `function removeUnbalancedInlineBackticks(value:...` |
| 967 | fn | repairCompactedProgressMarkdown | (private) | `function repairCompactedProgressMarkdown(value:...` |
| 984 | fn | compactChannelProgressDraftNarration | (private) | `function compactChannelProgressDraftNarration(t...` |
| 992 | fn | compactPlainProgressLine | (private) | `function compactPlainProgressLine(line: string,...` |
| 1001 | fn | compactChannelProgressDraftLine | (private) | `function compactChannelProgressDraftLine(line: ...` |
| 1048 | fn | formatPlanChecklistLines | pub | `export function formatPlanChecklistLines(` |
| 1059 | fn | marker | (private) | `const marker = (status: AgentPlanStepStatus) =>` |
| 1104 | fn | getProgressDraftLineText | (private) | `function getProgressDraftLineText(line: string ...` |
| 1144 | fn | normalizeChannelProgressDraftLineIdentity | pub | `export function normalizeChannelProgressDraftLi...` |
| 1157 | fn | mergeChannelProgressDraftLine | pub | `export function mergeChannelProgressDraftLine<T...` |
| 1196 | fn | mergeProgressDraftLineUpdate | (private) | `function mergeProgressDraftLineUpdate<TLine ext...` |
| 1230 | fn | resolveProgressDraftLineMergeKeys | (private) | `function resolveProgressDraftLineMergeKeys(line...` |
| 1240 | fn | formatChannelProgressDraftText | pub | `export function formatChannelProgressDraftText(...` |

## Public API

### `isChannelProgressDraftWorkToolName`

```
export function isChannelProgressDraftWorkToolName(name: string | null | undefined): boolean {
```

**Line:** 109 | **Kind:** fn

### `isPotentialTruncatedFinal`

```
export function isPotentialTruncatedFinal(finalText: string): boolean {
```

**Line:** 118 | **Kind:** fn

### `selectLongerFinalText`

```
export function selectLongerFinalText(params: {
```

**Line:** 126 | **Kind:** fn

### `resolveTranscriptBackedChannelFinalText`

```
export async function resolveTranscriptBackedChannelFinalText(params: {
```

**Line:** 155 | **Kind:** fn

### `normalizeAgentPlanSteps`

```
export function normalizeAgentPlanSteps(value: unknown): AgentPlanStep[] | undefined {
```

**Line:** 201 | **Kind:** fn

### `isCommandToolName`

```
export function isCommandToolName(name: string | undefined): boolean {
```

**Line:** 393 | **Kind:** fn

### `formatChannelProgressDraftLine`

```
export function formatChannelProgressDraftLine(
```

**Line:** 490 | **Kind:** fn

### `resolveChannelProgressDraftLineOptions`

```
export function resolveChannelProgressDraftLineOptions(
```

**Line:** 499 | **Kind:** fn

### `buildChannelProgressDraftLineForEntry`

```
export function buildChannelProgressDraftLineForEntry(
```

**Line:** 511 | **Kind:** fn

### `formatChannelProgressDraftLineForEntry`

```
export function formatChannelProgressDraftLineForEntry(
```

**Line:** 525 | **Kind:** fn

### `buildChannelProgressDraftLine`

```
export function buildChannelProgressDraftLine(
```

**Line:** 536 | **Kind:** fn

### `createChannelProgressDraftGate`

```
export function createChannelProgressDraftGate(params: {
```

**Line:** 656 | **Kind:** fn

### `getChannelStreamingConfigObject`

```
export function getChannelStreamingConfigObject(
```

**Line:** 775 | **Kind:** fn

### `resolveChannelStreamingPreviewToolProgress`

```
export function resolveChannelStreamingPreviewToolProgress(
```

**Line:** 782 | **Kind:** fn

### `resolveChannelStreamingProgressCommentary`

```
export function resolveChannelStreamingProgressCommentary(
```

**Line:** 797 | **Kind:** fn

### `resolveChannelStreamingProgressNarration`

```
export function resolveChannelStreamingProgressNarration(
```

**Line:** 811 | **Kind:** fn

### `resolveChannelStreamingPreviewCommandText`

```
export function resolveChannelStreamingPreviewCommandText(
```

**Line:** 819 | **Kind:** fn

### `resolveChannelStreamingSuppressDefaultToolProgressMessages`

```
export function resolveChannelStreamingSuppressDefaultToolProgressMessages(
```

**Line:** 831 | **Kind:** fn

### `resolveChannelStreamingNativeTransport`

```
export function resolveChannelStreamingNativeTransport(
```

**Line:** 855 | **Kind:** fn

### `resolveChannelPreviewStreamMode`

```
export function resolveChannelPreviewStreamMode(
```

**Line:** 861 | **Kind:** fn

### `resolveChannelProgressDraftConfig`

```
export function resolveChannelProgressDraftConfig(
```

**Line:** 883 | **Kind:** fn

### `resolveChannelProgressDraftLabel`

```
export function resolveChannelProgressDraftLabel(params: {
```

**Line:** 897 | **Kind:** fn

### `resolveChannelProgressDraftMaxLines`

```
export function resolveChannelProgressDraftMaxLines(
```

**Line:** 915 | **Kind:** fn

### `resolveChannelProgressDraftMaxLineChars`

```
export function resolveChannelProgressDraftMaxLineChars(
```

**Line:** 923 | **Kind:** fn

### `resolveChannelProgressDraftRender`

```
export function resolveChannelProgressDraftRender(
```

**Line:** 931 | **Kind:** fn

### `formatPlanChecklistLines`

```
export function formatPlanChecklistLines(
```

**Line:** 1048 | **Kind:** fn

### `normalizeChannelProgressDraftLineIdentity`

```
export function normalizeChannelProgressDraftLineIdentity(
```

**Line:** 1144 | **Kind:** fn

### `mergeChannelProgressDraftLine`

```
export function mergeChannelProgressDraftLine<TLine extends string | ChannelProgressDraftLine>(
```

**Line:** 1157 | **Kind:** fn

### `formatChannelProgressDraftText`

```
export function formatChannelProgressDraftText(params: {
```

**Line:** 1240 | **Kind:** fn

## Memory Markers

### 🟡 `TODO` (line 196)

> (remove): normalizes the pre-2026.7.2 string plan-step wire shape to
