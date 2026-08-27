# src/agents/anthropic-transport-stream.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1905
- **Language:** TypeScript
- **Symbols:** 48
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 124 | type | AnthropicTransportModel | (private) | - |
| 129 | type | AnthropicTransportOptions | (private) | - |
| 131 | type | AnthropicAdaptiveEffort | (private) | - |
| 132 | type | AnthropicMessagesClient | (private) | - |
| 141 | fn | resolveAnthropicRequestModelId | (private) | `function resolveAnthropicRequestModelId(model: ...` |
| 148 | type | TransportContentBlock | (private) | - |
| 166 | type | MutableAssistantOutput | (private) | - |
| 191 | fn | normalizeAnthropicToolChoice | (private) | `function normalizeAnthropicToolChoice(` |
| 204 | fn | supportsNativeXhighEffort | (private) | `function supportsNativeXhighEffort(model: Anthr...` |
| 208 | fn | supportsAdaptiveThinking | (private) | `function supportsAdaptiveThinking(model: Anthro...` |
| 212 | fn | mapThinkingLevelToEffort | (private) | `function mapThinkingLevelToEffort(` |
| 243 | fn | clampReasoningLevel | (private) | `function clampReasoningLevel(level: ThinkingLev...` |
| 247 | fn | resolvePositiveAnthropicTokenLimit | (private) | `function resolvePositiveAnthropicTokenLimit(val...` |
| 255 | fn | resolveAnthropicMessagesMaxTokens | (private) | `function resolveAnthropicMessagesMaxTokens(para...` |
| 286 | fn | adjustMaxTokensForThinking | (private) | `function adjustMaxTokensForThinking(params: {` |
| 309 | fn | isAnthropicOAuthToken | (private) | `function isAnthropicOAuthToken(apiKey: string):...` |
| 315 | fn | isDirectAnthropicModel | (private) | `function isDirectAnthropicModel(model: Pick<Ant...` |
| 323 | fn | isKimiAnthropicProvider | (private) | `function isKimiAnthropicProvider(provider: stri...` |
| 332 | fn | useAnthropicServerSideFallback | (private) | `function useAnthropicServerSideFallback(model: ...` |
| 336 | fn | supportsReasoningContentReplay | (private) | `function supportsReasoningContentReplay(` |
| 342 | fn | buildAnthropicBetaHeader | (private) | `function buildAnthropicBetaHeader(` |
| 355 | fn | toClaudeCodeName | (private) | `function toClaudeCodeName(name: string): string {` |
| 359 | fn | convertContentBlocks | (private) | `function convertContentBlocks(content: readonly...` |
| 402 | fn | normalizeToolCallId | (private) | `function normalizeToolCallId(id: string): string {` |
| 406 | fn | convertAnthropicMessages | (private) | `function convertAnthropicMessages(` |
| 605 | fn | ensureNonEmptyAnthropicMessages | (private) | `function ensureNonEmptyAnthropicMessages(messag...` |
| 611 | fn | convertAnthropicTools | (private) | `function convertAnthropicTools(tools: Context["...` |
| 634 | fn | parseAnthropicToolCallArguments | (private) | `function parseAnthropicToolCallArguments(inputJ...` |
| 638 | fn | mapStopReason | (private) | `function mapStopReason(reason: string | undefin...` |
| 658 | fn | tagPendingCommentaryText | (private) | `function tagPendingCommentaryText(content: Tran...` |
| 680 | fn | resolveAnthropicBaseUrl | (private) | `function resolveAnthropicBaseUrl(baseUrl?: stri...` |
| 685 | fn | resolveAnthropicMessagesUrl | pub | `export function resolveAnthropicMessagesUrl(bas...` |
| 690 | fn | withEffectiveAnthropicBaseUrl | (private) | `function withEffectiveAnthropicBaseUrl(model: A...` |
| 695 | fn | createAbortError | (private) | `function createAbortError(signal: AbortSignal):...` |
| 706 | fn | readAnthropicSseChunk | (private) | `function readAnthropicSseChunk(` |
| 716 | fn | onAbort | (private) | `const onAbort = () => {` |
| 753 | fn | parseAnthropicSseEventData | (private) | `function parseAnthropicSseEventData(data: strin...` |
| 764 | fn | assertAnthropicSsePendingBufferWithinLimit | (private) | `function assertAnthropicSsePendingBufferWithinL...` |
| 827 | fn | createAnthropicMessagesClient | (private) | `function createAnthropicMessagesClient(params: {` |
| 866 | fn | formatAnthropicMessagesHttpError | (private) | `function formatAnthropicMessagesHttpError(respo...` |
| 876 | fn | readAnthropicMessagesErrorBodySnippet | (private) | `async function readAnthropicMessagesErrorBodySn...` |
| 900 | fn | createAnthropicTransportClient | (private) | `function createAnthropicTransportClient(params: {` |
| 1015 | fn | buildAnthropicParams | (private) | `function buildAnthropicParams(` |
| 1152 | fn | resolveAnthropicTransportOptions | (private) | `function resolveAnthropicTransportOptions(` |
| 1224 | fn | createAnthropicMessagesTransportStreamFn | pub | `export function createAnthropicMessagesTranspor...` |
| 1293 | fn | flushPendingTextEnds | (private) | `const flushPendingTextEnds = () => {` |
| 1299 | fn | eventIndexKey | (private) | `const eventIndexKey = (eventIndex: unknown) =>` |
| 1376 | fn | finishReasoningContentSidecars | (private) | `const finishReasoningContentSidecars = (eventIn...` |

## Public API

### `resolveAnthropicMessagesUrl`

```
export function resolveAnthropicMessagesUrl(baseUrl?: string): string {
```

**Line:** 685 | **Kind:** fn

### `createAnthropicMessagesTransportStreamFn`

```
export function createAnthropicMessagesTransportStreamFn(): StreamFn {
```

**Line:** 1224 | **Kind:** fn
