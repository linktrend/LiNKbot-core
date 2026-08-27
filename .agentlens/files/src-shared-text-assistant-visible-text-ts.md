# src/shared/text/assistant-visible-text.ts

[← Back to Module](../modules/src-shared-text/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1099
- **Language:** TypeScript
- **Symbols:** 43
- **Public symbols:** 11

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 52 | type | ToolCallPayloadKind | (private) | - |
| 54 | fn | endsInsideQuotedString | (private) | `function endsInsideQuotedString(text: string, s...` |
| 85 | interface | ParsedToolCallTag | (private) | - |
| 94 | fn | parseXmlTagAt | (private) | `function parseXmlTagAt(text: string, start: num...` |
| 149 | fn | isToolCallBoundary | (private) | `function isToolCallBoundary(char: string | unde...` |
| 153 | fn | findTagCloseIndex | (private) | `function findTagCloseIndex(text: string, start:...` |
| 189 | fn | detectToolCallPayloadKind | (private) | `function detectToolCallPayloadKind(text: string...` |
| 200 | fn | startsWithNestedJsonToolCallPayload | (private) | `function startsWithNestedJsonToolCallPayload(te...` |
| 221 | fn | isLikelyStandaloneFunctionToolCall | (private) | `function isLikelyStandaloneFunctionToolCall(` |
| 242 | fn | isStandaloneOpeningTagLine | (private) | `function isStandaloneOpeningTagLine(` |
| 261 | fn | isOpeningTagFollowedByLineBreak | (private) | `function isOpeningTagFollowedByLineBreak(text: ...` |
| 269 | fn | hasSameLineContentAfterOpeningTag | (private) | `function hasSameLineContentAfterOpeningTag(text...` |
| 277 | fn | isVisibleLineStart | (private) | `function isVisibleLineStart(text: string): bool...` |
| 285 | fn | isAdjacentToStrippedToolCallBlock | (private) | `function isAdjacentToStrippedToolCallBlock(` |
| 301 | fn | findMatchingToolCallCloseIndex | (private) | `function findMatchingToolCallCloseIndex(text: s...` |
| 318 | fn | findAdjacentOpeningToolCallTag | (private) | `function findAdjacentOpeningToolCallTag(` |
| 337 | fn | parseToolCallTagAt | (private) | `function parseToolCallTagAt(text: string, start...` |
| 342 | fn | hasMatchingXmlCloseTag | (private) | `function hasMatchingXmlCloseTag(text: string, s...` |
| 365 | fn | isDanglingFunctionParameterParent | (private) | `function isDanglingFunctionParameterParent(text...` |
| 377 | fn | consumeImmediateLineBreak | (private) | `function consumeImmediateLineBreak(text: string...` |
| 384 | fn | trimImmediateLineBreakBefore | (private) | `function trimImmediateLineBreakBefore(text: str...` |
| 391 | fn | isLineStartAt | (private) | `function isLineStartAt(text: string, start: num...` |
| 399 | fn | isLineEndAfter | (private) | `function isLineEndAfter(text: string, end: numb...` |
| 407 | fn | unwrapStandaloneParameterTags | (private) | `function unwrapStandaloneParameterTags(text: st...` |
| 472 | fn | stripToolCallXmlTags | pub | `export function stripToolCallXmlTags(` |
| 635 | fn | stripMinimaxToolCallXml | pub | `export function stripMinimaxToolCallXml(text: s...` |
| 656 | fn | isLegacyBracketToolCallPayload | (private) | `function isLegacyBracketToolCallPayload(value: ...` |
| 663 | fn | isLegacyBracketToolResultPayload | (private) | `function isLegacyBracketToolResultPayload(value...` |
| 671 | fn | stripLegacyBracketToolCallBlocks | pub | `export function stripLegacyBracketToolCallBlock...` |
| 724 | fn | stripDowngradedToolCallText | pub | `export function stripDowngradedToolCallText(tex...` |
| 881 | fn | stripRelevantMemoriesTags | (private) | `function stripRelevantMemoriesTags(text: string...` |
| 918 | fn | stripAssistantInternalTraceLines | pub | `export function stripAssistantInternalTraceLine...` |
| 946 | type | AssistantVisibleTextSanitizerProfile | pub | - |
| 953 | type | AssistantVisibleTextPipelineOptions | (private) | - |
| 1009 | fn | applyAssistantVisibleTextStagePipeline | (private) | `function applyAssistantVisibleTextStagePipeline(` |
| 1017 | fn | stripReasoning | (private) | `const stripReasoning = (value: string) =>` |
| 1023 | fn | applyFinalTrim | (private) | `const applyFinalTrim = (value: string) => {` |
| 1032 | fn | stripNonReasoningStages | (private) | `const stripNonReasoningStages = (value: string)...` |
| 1061 | fn | sanitizeAssistantVisibleTextWithProfile | pub | `export function sanitizeAssistantVisibleTextWit...` |
| 1071 | fn | stripAssistantInternalScaffolding | pub | `export function stripAssistantInternalScaffoldi...` |
| 1079 | fn | sanitizeAssistantVisibleText | pub | `export function sanitizeAssistantVisibleText(te...` |
| 1084 | fn | sanitizeAssistantFinalAnswerText | pub | `export function sanitizeAssistantFinalAnswerTex...` |
| 1092 | fn | sanitizeAssistantVisibleTextWithOptions | pub | `export function sanitizeAssistantVisibleTextWit...` |

## Public API

### `stripToolCallXmlTags`

```
export function stripToolCallXmlTags(
```

**Line:** 472 | **Kind:** fn

### `stripMinimaxToolCallXml`

```
export function stripMinimaxToolCallXml(text: string): string {
```

**Line:** 635 | **Kind:** fn

### `stripLegacyBracketToolCallBlocks`

```
export function stripLegacyBracketToolCallBlocks(text: string): string {
```

**Line:** 671 | **Kind:** fn

### `stripDowngradedToolCallText`

```
export function stripDowngradedToolCallText(text: string): string {
```

**Line:** 724 | **Kind:** fn

### `stripAssistantInternalTraceLines`

```
export function stripAssistantInternalTraceLines(text: string): string {
```

**Line:** 918 | **Kind:** fn

### `sanitizeAssistantVisibleTextWithProfile`

```
export function sanitizeAssistantVisibleTextWithProfile(
```

**Line:** 1061 | **Kind:** fn

### `stripAssistantInternalScaffolding`

```
export function stripAssistantInternalScaffolding(text: string): string {
```

**Line:** 1071 | **Kind:** fn

### `sanitizeAssistantVisibleText`

```
export function sanitizeAssistantVisibleText(text: string): string {
```

**Line:** 1079 | **Kind:** fn

### `sanitizeAssistantFinalAnswerText`

```
export function sanitizeAssistantFinalAnswerText(text: string): string {
```

**Line:** 1084 | **Kind:** fn

### `sanitizeAssistantVisibleTextWithOptions`

```
export function sanitizeAssistantVisibleTextWithOptions(
```

**Line:** 1092 | **Kind:** fn
