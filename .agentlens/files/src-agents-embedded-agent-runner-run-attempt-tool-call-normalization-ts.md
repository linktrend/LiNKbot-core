# src/agents/embedded-agent-runner/run/attempt.tool-call-normalization.ts

[← Back to Module](../modules/src-agents-embedded-agent-runner-run/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1211
- **Language:** TypeScript
- **Symbols:** 44
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | type | UnknownToolLoopGuardState | (private) | - |
| 45 | type | AssistantStream | (private) | - |
| 47 | fn | resolveCaseInsensitiveAllowedToolName | (private) | `function resolveCaseInsensitiveAllowedToolName(` |
| 68 | fn | resolveExactAllowedToolName | (private) | `function resolveExactAllowedToolName(` |
| 88 | fn | buildStructuredToolNameCandidates | (private) | `function buildStructuredToolNameCandidates(rawN...` |
| 96 | fn | addCandidate | (private) | `const addCandidate = (value: string) => {` |
| 124 | fn | resolveStructuredAllowedToolName | (private) | `function resolveStructuredAllowedToolName(` |
| 149 | fn | inferToolNameFromToolCallId | (private) | `function inferToolNameFromToolCallId(` |
| 162 | fn | addToken | (private) | `const addToken = (value: string) => {` |
| 206 | fn | looksLikeMalformedToolNameCounter | (private) | `function looksLikeMalformedToolNameCounter(rawN...` |
| 214 | fn | normalizeToolCallNameForDispatch | (private) | `function normalizeToolCallNameForDispatch(` |
| 245 | type | ReplayToolCallBlock | (private) | - |
| 253 | type | ReplayToolCallSanitizeReport | (private) | - |
| 258 | type | AnthropicToolResultContentBlock | (private) | - |
| 266 | fn | isThinkingLikeReplayBlock | (private) | `function isThinkingLikeReplayBlock(block: unkno...` |
| 274 | fn | isReplaySafeThinkingTurn | (private) | `function isReplaySafeThinkingTurn(content: unkn...` |
| 295 | fn | isReplayToolCallBlock | (private) | `function isReplayToolCallBlock(block: unknown):...` |
| 302 | fn | replayToolCallHasInput | (private) | `function replayToolCallHasInput(block: ReplayTo...` |
| 309 | fn | collectFollowingToolResults | (private) | `function collectFollowingToolResults(` |
| 338 | fn | replayToolCallNonEmptyString | (private) | `function replayToolCallNonEmptyString(value: un...` |
| 342 | fn | resolveReplayToolCallName | (private) | `function resolveReplayToolCallName(` |
| 361 | fn | sanitizeReplayToolCallInputs | (private) | `function sanitizeReplayToolCallInputs(` |
| 473 | fn | extractAnthropicReplayToolResultIds | (private) | `function extractAnthropicReplayToolResultIds(bl...` |
| 488 | fn | isSignedThinkingReplayAssistantSpan | (private) | `function isSignedThinkingReplayAssistantSpan(me...` |
| 502 | fn | sanitizeAnthropicReplayToolResults | (private) | `function sanitizeAnthropicReplayToolResults(` |
| 591 | fn | assistantTurnHasReplayToolCall | (private) | `function assistantTurnHasReplayToolCall(message...` |
| 602 | fn | stripTrailingAssistantPrefillTurns | (private) | `function stripTrailingAssistantPrefillTurns(mes...` |
| 617 | fn | createStandaloneTextToolCallId | (private) | `function createStandaloneTextToolCallId(): stri...` |
| 621 | fn | normalizeToolCallIdsInMessage | (private) | `function normalizeToolCallIdsInMessage(message:...` |
| 679 | fn | trimWhitespaceFromToolCallNamesInMessage | (private) | `function trimWhitespaceFromToolCallNamesInMessage(` |
| 705 | fn | classifyToolCallMessage | (private) | `function classifyToolCallMessage(` |
| 785 | fn | rewriteUnknownToolLoopMessage | (private) | `function rewriteUnknownToolLoopMessage(message:...` |
| 797 | fn | guardUnknownToolLoopInMessage | (private) | `function guardUnknownToolLoopInMessage(` |
| 873 | fn | isRetainableNonVisibleBlock | (private) | `function isRetainableNonVisibleBlock(block: Rec...` |
| 879 | fn | createStandaloneToolCallNameMatcher | (private) | `function createStandaloneToolCallNameMatcher(` |
| 888 | fn | wrapStreamPromoteStandaloneTextToolCalls | (private) | `function wrapStreamPromoteStandaloneTextToolCalls(` |
| 975 | fn | wrapStreamFnPromoteStandaloneTextToolCalls | pub | `export function wrapStreamFnPromoteStandaloneTe...` |
| 993 | fn | wrapStreamTrimToolCallNames | (private) | `function wrapStreamTrimToolCallNames(` |
| 1057 | fn | wrapStreamFnTrimToolCallNames | pub | `export function wrapStreamFnTrimToolCallNames(` |
| 1083 | type | ReplayToolCallIdSanitizerDecision | (private) | - |
| 1090 | fn | shouldApplyReplayToolCallIdSanitizer | pub | `export function shouldApplyReplayToolCallIdSani...` |
| 1099 | fn | sanitizeReplayToolCallIdsForStream | pub | `export function sanitizeReplayToolCallIdsForStr...` |
| 1120 | fn | sanitizeOpenAIResponsesReplayForStream | pub | `export function sanitizeOpenAIResponsesReplayFo...` |
| 1136 | fn | wrapStreamFnSanitizeMalformedToolCalls | pub | `export function wrapStreamFnSanitizeMalformedTo...` |

## Public API

### `wrapStreamFnPromoteStandaloneTextToolCalls`

```
export function wrapStreamFnPromoteStandaloneTextToolCalls(
```

**Line:** 975 | **Kind:** fn

### `wrapStreamFnTrimToolCallNames`

```
export function wrapStreamFnTrimToolCallNames(
```

**Line:** 1057 | **Kind:** fn

### `shouldApplyReplayToolCallIdSanitizer`

```
export function shouldApplyReplayToolCallIdSanitizer(
```

**Line:** 1090 | **Kind:** fn

### `sanitizeReplayToolCallIdsForStream`

```
export function sanitizeReplayToolCallIdsForStream(params: {
```

**Line:** 1099 | **Kind:** fn

### `sanitizeOpenAIResponsesReplayForStream`

```
export function sanitizeOpenAIResponsesReplayForStream(messages: AgentMessage[]): AgentMessage[] {
```

**Line:** 1120 | **Kind:** fn

### `wrapStreamFnSanitizeMalformedToolCalls`

```
export function wrapStreamFnSanitizeMalformedToolCalls(
```

**Line:** 1136 | **Kind:** fn
