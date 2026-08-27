# src/agents/cli-output.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1690
- **Language:** TypeScript
- **Symbols:** 76
- **Public symbols:** 14

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 18 | type | CliUsage | pub | - |
| 26 | type | CliProcessDiagnostics | (private) | - |
| 39 | type | CliTerminalFailure | (private) | - |
| 45 | type | CliOutput | pub | - |
| 67 | fn | normalizeCliContextValue | (private) | `function normalizeCliContextValue(value: string...` |
| 72 | fn | formatCliOutputError | pub | `export function formatCliOutputError(` |
| 102 | type | CliStreamingDelta | pub | - |
| 109 | type | CliStreamJsonOutputLimits | pub | - |
| 116 | type | CliThinkingDelta | pub | - |
| 122 | type | CliThinkingProgress | pub | - |
| 126 | type | CliPlanUpdate | pub | - |
| 131 | type | CliToolUseStartDelta | pub | - |
| 140 | type | CliToolResultDelta | pub | - |
| 147 | fn | isClaudeCliProvider | (private) | `function isClaudeCliProvider(providerId: string...` |
| 151 | fn | isGeminiCliProvider | (private) | `function isGeminiCliProvider(providerId: string...` |
| 155 | fn | isGeminiStreamJsonDialect | (private) | `function isGeminiStreamJsonDialect(params: {` |
| 164 | fn | isClaudeStreamJsonDialect | (private) | `function isClaudeStreamJsonDialect(params: {` |
| 174 | fn | isStreamJsonDialect | (private) | `function isStreamJsonDialect(params: { backend:...` |
| 179 | fn | supportsCliJsonlToolEvents | (private) | `function supportsCliJsonlToolEvents(params: {` |
| 190 | fn | isClaudeStreamJsonResult | (private) | `function isClaudeStreamJsonResult(params: {` |
| 198 | fn | extractJsonObjectCandidates | (private) | `function extractJsonObjectCandidates(raw: strin...` |
| 202 | fn | parseJsonRecordCandidates | (private) | `function parseJsonRecordCandidates(raw: string)...` |
| 234 | fn | readNestedErrorMessage | (private) | `function readNestedErrorMessage(parsed: Record<...` |
| 256 | fn | unwrapCliErrorText | (private) | `function unwrapCliErrorText(raw: string): string {` |
| 270 | fn | toCliUsage | (private) | `function toCliUsage(raw: Record<string, unknown...` |
| 271 | fn | readNestedCached | (private) | `const readNestedCached = (key: "input_tokens_de...` |
| 280 | fn | pick | (private) | `const pick = (key: string) =>` |
| 306 | fn | readCliUsage | (private) | `function readCliUsage(parsed: Record<string, un...` |
| 325 | fn | collectCliText | (private) | `function collectCliText(value: unknown): string {` |
| 359 | fn | unwrapNestedCliResultText | (private) | `function unwrapNestedCliResultText(raw: string)...` |
| 385 | fn | collectExplicitCliErrorText | (private) | `function collectExplicitCliErrorText(parsed: Re...` |
| 432 | fn | readClaudeMaxTurnsFailure | (private) | `function readClaudeMaxTurnsFailure(` |
| 460 | fn | readClaudeMaxTurnsErrorText | (private) | `function readClaudeMaxTurnsErrorText(parsed: Re...` |
| 472 | fn | resolveCliTerminalErrorText | (private) | `function resolveCliTerminalErrorText(` |
| 483 | fn | pickCliSessionId | (private) | `function pickCliSessionId(` |
| 502 | fn | shouldUnwrapNestedCliResultText | (private) | `function shouldUnwrapNestedCliResultText(params: {` |
| 512 | fn | resolveCliStreamJsonOutputLimits | pub | `export function resolveCliStreamJsonOutputLimits(` |
| 522 | fn | streamJsonOutputLimitErrorText | (private) | `function streamJsonOutputLimitErrorText(kind: "...` |
| 532 | fn | hasExplicitCliErrorPayload | (private) | `function hasExplicitCliErrorPayload(parsed: Rec...` |
| 544 | fn | parseCliJson | (private) | `function parseCliJson(` |
| 615 | fn | parseClaudeCliJsonlResult | (private) | `function parseClaudeCliJsonlResult(params: {` |
| 653 | fn | parseClaudeCliStreamingDelta | (private) | `function parseClaudeCliStreamingDelta(params: {` |
| 686 | type | PendingToolUse | (private) | - |
| 693 | type | ToolUseTracker | (private) | - |
| 700 | fn | createToolUseTracker | (private) | `function createToolUseTracker(): ToolUseTracker {` |
| 709 | fn | emitToolStartOnce | (private) | `function emitToolStartOnce(` |
| 726 | fn | emitToolResultOnce | (private) | `function emitToolResultOnce(` |
| 746 | fn | isClaudeToolUseBlockType | (private) | `function isClaudeToolUseBlockType(type: unknown...` |
| 750 | fn | isClaudeAssistantToolResultBlockType | (private) | `function isClaudeAssistantToolResultBlockType(t...` |
| 754 | fn | isClaudeToolResultError | (private) | `function isClaudeToolResultError(content: unkno...` |
| 758 | fn | parseToolInputJson | (private) | `function parseToolInputJson(parts: string[]): R...` |
| 770 | fn | dispatchClaudeCliStreamingToolEvent | (private) | `function dispatchClaudeCliStreamingToolEvent(pa...` |
| 898 | type | ThinkingTracker | (private) | - |
| 914 | fn | createThinkingTracker | (private) | `function createThinkingTracker(): ThinkingTrack...` |
| 923 | fn | resetThinkingBlockState | (private) | `function resetThinkingBlockState(tracker: Think...` |
| 931 | fn | resetThinkingTrackerForMessage | (private) | `function resetThinkingTrackerForMessage(` |
| 948 | fn | beginClaudeContentBlock | (private) | `function beginClaudeContentBlock(tracker: Think...` |
| 962 | fn | stopClaudeContentBlock | (private) | `function stopClaudeContentBlock(tracker: Thinki...` |
| 966 | fn | resolveClaudeContentBlockIndex | (private) | `function resolveClaudeContentBlockIndex(tracker...` |
| 977 | fn | assembleThinkingTextByIndex | (private) | `function assembleThinkingTextByIndex(streamedBy...` |
| 984 | fn | emitClaudeThinking | (private) | `function emitClaudeThinking(` |
| 996 | fn | readThinkingProgressTokens | (private) | `function readThinkingProgressTokens(delta: Reco...` |
| 1007 | fn | emitClaudeThinkingProgress | (private) | `function emitClaudeThinkingProgress(` |
| 1016 | fn | dispatchClaudeCliThinking | (private) | `function dispatchClaudeCliThinking(params: {` |
| 1104 | fn | dispatchGeminiCliStreamingToolEvent | (private) | `function dispatchGeminiCliStreamingToolEvent(pa...` |
| 1149 | fn | isFallbackGeminiCliStreamJsonError | (private) | `function isFallbackGeminiCliStreamJsonError(err...` |
| 1155 | fn | preferGeminiCliStreamJsonError | (private) | `function preferGeminiCliStreamJsonError(current...` |
| 1165 | fn | readGeminiCliStreamJsonError | (private) | `function readGeminiCliStreamJsonError(parsed: R...` |
| 1176 | fn | createCliJsonlStreamingParser | pub | `export function createCliJsonlStreamingParser(p...` |
| 1209 | fn | flushPendingClaudeAssistantText | (private) | `const flushPendingClaudeAssistantText = () => {` |
| 1224 | fn | flushPendingClaudeCommentaryText | (private) | `const flushPendingClaudeCommentaryText = () => {` |
| 1235 | fn | handleParsedRecord | (private) | `const handleParsedRecord = (parsed: Record<stri...` |
| 1438 | fn | flushLines | (private) | `const flushLines = (flushPartial: boolean) => {` |
| 1530 | fn | parseCliJsonl | (private) | `function parseCliJsonl(` |
| 1639 | fn | parseCliOutput | pub | `export function parseCliOutput(params: {` |
| 1674 | fn | extractCliErrorMessage | pub | `export function extractCliErrorMessage(raw: str...` |

## Public API

### `formatCliOutputError`

```
export function formatCliOutputError(
```

**Line:** 72 | **Kind:** fn

### `resolveCliStreamJsonOutputLimits`

```
export function resolveCliStreamJsonOutputLimits(
```

**Line:** 512 | **Kind:** fn

### `createCliJsonlStreamingParser`

```
export function createCliJsonlStreamingParser(params: {
```

**Line:** 1176 | **Kind:** fn

### `parseCliOutput`

```
export function parseCliOutput(params: {
```

**Line:** 1639 | **Kind:** fn

### `extractCliErrorMessage`

```
export function extractCliErrorMessage(raw: string): string | null {
```

**Line:** 1674 | **Kind:** fn
