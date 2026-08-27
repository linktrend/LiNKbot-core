# src/agents/openai-completions-transport.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1939
- **Language:** TypeScript
- **Symbols:** 77
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 75 | fn | hasToolHistory | (private) | `function hasToolHistory(messages: Context["mess...` |
| 87 | fn | assertOpenAICompletionsPayloadHasConversationTurn | (private) | `function assertOpenAICompletionsPayloadHasConve...` |
| 103 | fn | createSseDoneDetector | (private) | `function createSseDoneDetector() {` |
| 109 | fn | finishLine | (private) | `const finishLine = () => {` |
| 116 | fn | observeText | (private) | `const observeText = (text: string) => {` |
| 151 | fn | createOpenAICompletionsClient | (private) | `function createOpenAICompletionsClient(` |
| 170 | fn | isAzureOpenAICompatibleHost | (private) | `function isAzureOpenAICompatibleHost(hostname: ...` |
| 178 | fn | isKnownOpenAICompletionsEndpoint | (private) | `function isKnownOpenAICompletionsEndpoint(model...` |
| 193 | fn | buildOpenAICompletionsClientConfig | (private) | `function buildOpenAICompletionsClientConfig(` |
| 241 | fn | createOpenAICompletionsTransportStreamFn | pub | `export function createOpenAICompletionsTranspor...` |
| 347 | fn | processOpenAICompletionsStream | (private) | `async function processOpenAICompletionsStream(` |
| 372 | type | ToolCallBlock | (private) | - |
| 394 | fn | blockIndex | (private) | `const blockIndex = () => output.content.length ...` |
| 395 | fn | measureUtf8Bytes | (private) | `const measureUtf8Bytes = (text: string) => Buff...` |
| 397 | fn | pushStreamEvent | (private) | `const pushStreamEvent = (event: unknown) => {` |
| 401 | fn | queuePostToolCallDelta | (private) | `const queuePostToolCallDelta = (next: Completio...` |
| 422 | fn | appendThinkingDeltaInternal | (private) | `const appendThinkingDeltaInternal = (reasoningD...` |
| 440 | fn | appendTextDeltaInternal | (private) | `const appendTextDeltaInternal = (text: string) ...` |
| 453 | fn | flushPendingPostToolCallDeltas | (private) | `const flushPendingPostToolCallDeltas = () => {` |
| 474 | fn | appendThinkingDelta | (private) | `const appendThinkingDelta = (reasoningDelta: { ...` |
| 478 | fn | appendTextDelta | (private) | `const appendTextDelta = (text: string) => {` |
| 482 | fn | appendVisibleTextDelta | (private) | `const appendVisibleTextDelta = (text: string) => {` |
| 492 | fn | appendRecoveredToolCall | (private) | `const appendRecoveredToolCall = (toolCall: Reco...` |
| 522 | fn | appendFilteredVisibleTextDelta | (private) | `const appendFilteredVisibleTextDelta = (text: s...` |
| 537 | fn | flushDeepSeekToolCallRecovererAtEnd | (private) | `const flushDeepSeekToolCallRecovererAtEnd = () ...` |
| 553 | fn | flushDeepSeekTextFilterAtEnd | (private) | `const flushDeepSeekTextFilterAtEnd = () => {` |
| 562 | fn | appendRoutedContentDelta | (private) | `const appendRoutedContentDelta = (delta: Comple...` |
| 576 | fn | appendPartitionedVisibleDelta | (private) | `const appendPartitionedVisibleDelta = (delta: {...` |
| 581 | fn | emitReasoningUsageActivity | (private) | `const emitReasoningUsageActivity = (hasReasonin...` |
| 594 | fn | flushReasoningTagTextPartitionerAtEnd | (private) | `const flushReasoningTagTextPartitionerAtEnd = (...` |
| 810 | type | CompletionsReasoningDelta | (private) | - |
| 821 | fn | shouldFilterDeepSeekDsmlText | (private) | `function shouldFilterDeepSeekDsmlText(compat: R...` |
| 825 | type | RecoveredDeepSeekDsmlToolCall | (private) | - |
| 832 | type | DeepSeekDsmlRecoveredPart | (private) | - |
| 846 | fn | createDeepSeekDsmlToolCallRecoverer | (private) | `function createDeepSeekDsmlToolCallRecoverer() {` |
| 907 | fn | parseDeepSeekDsmlToolCallBlock | (private) | `function parseDeepSeekDsmlToolCallBlock(body: s...` |
| 940 | fn | parseDeepSeekDsmlInvokeArguments | (private) | `function parseDeepSeekDsmlInvokeArguments(body:...` |
| 978 | fn | xmlAttributeRegex | (private) | `function xmlAttributeRegex(name: string): RegExp {` |
| 989 | fn | parseXmlAttribute | (private) | `function parseXmlAttribute(attributes: string, ...` |
| 995 | fn | decodeDeepSeekDsmlText | (private) | `function decodeDeepSeekDsmlText(value: string):...` |
| 1004 | fn | findEarliestStringToken | (private) | `function findEarliestStringToken(text: string, ...` |
| 1015 | fn | longestDeepSeekDsmlToolOpenPrefixSuffixLength | (private) | `function longestDeepSeekDsmlToolOpenPrefixSuffi...` |
| 1026 | fn | getCompletionsContentDeltas | (private) | `function getCompletionsContentDeltas(content: u...` |
| 1069 | fn | getCompletionsReasoningDeltas | (private) | `function getCompletionsReasoningDeltas(` |
| 1074 | fn | pushDelta | (private) | `const pushDelta = (next: CompletionsReasoningDe...` |
| 1122 | fn | resolveOpenAICompletionsReasoningEffort | (private) | `function resolveOpenAICompletionsReasoningEffor...` |
| 1126 | fn | shouldEmitOpenAICompletionsReasoning | (private) | `function shouldEmitOpenAICompletionsReasoning(` |
| 1140 | fn | shouldEmitOpenAICompletionsReasoningForModel | (private) | `function shouldEmitOpenAICompletionsReasoningFo...` |
| 1147 | fn | resolveOpenAICompletionsMaxTokens | (private) | `function resolveOpenAICompletionsMaxTokens(` |
| 1163 | fn | resolveOpenAICompletionsModelMaxTokens | (private) | `function resolveOpenAICompletionsModelMaxTokens...` |
| 1180 | fn | estimateOpenAICompletionsInputTokens | (private) | `function estimateOpenAICompletionsInputTokens(p...` |
| 1206 | fn | estimateOpenAICompletionsMessagesChars | (private) | `function estimateOpenAICompletionsMessagesChars...` |
| 1231 | fn | estimateOpenAICompletionsContentChars | (private) | `function estimateOpenAICompletionsContentChars(...` |
| 1262 | fn | resolveOpenAICompletionsEffectiveContextTokens | (private) | `function resolveOpenAICompletionsEffectiveConte...` |
| 1276 | fn | isQwenOpenAICompletionsThinkingFormat | (private) | `function isQwenOpenAICompletionsThinkingFormat(...` |
| 1280 | fn | isOpenAICompletionsThinkingEnabled | (private) | `function isOpenAICompletionsThinkingEnabled(eff...` |
| 1285 | fn | setQwenChatTemplateThinking | (private) | `function setQwenChatTemplateThinking(params: Re...` |
| 1293 | fn | applyQwenOpenAICompletionsThinkingParams | (private) | `function applyQwenOpenAICompletionsThinkingPara...` |
| 1314 | fn | applyTogetherOpenAICompletionsThinkingParams | (private) | `function applyTogetherOpenAICompletionsThinking...` |
| 1329 | fn | convertTools | (private) | `function convertTools(` |
| 1374 | fn | extractGoogleThoughtSignature | (private) | `function extractGoogleThoughtSignature(toolCall...` |
| 1391 | fn | isGoogleOpenAICompatModel | (private) | `function isGoogleOpenAICompatModel(model: OpenA...` |
| 1401 | fn | requiresGoogleCompatToolCallThoughtSignature | (private) | `function requiresGoogleCompatToolCallThoughtSig...` |
| 1408 | fn | hasGoogleCompatThoughtSignatureTruncationFootprint | (private) | `function hasGoogleCompatThoughtSignatureTruncat...` |
| 1415 | fn | injectToolCallThoughtSignatures | (private) | `function injectToolCallThoughtSignatures(` |
| 1498 | fn | stripCompletionsReasoningReplayFields | (private) | `function stripCompletionsReasoningReplayFields(...` |
| 1506 | fn | sanitizeOpenRouterReasoningReplayFields | (private) | `function sanitizeOpenRouterReasoningReplayField...` |
| 1542 | fn | sanitizeReasoningContentReplayFields | (private) | `function sanitizeReasoningContentReplayFields(r...` |
| 1577 | fn | stripReasoningContentReplayTierSuffix | (private) | `function stripReasoningContentReplayTierSuffix(...` |
| 1586 | fn | getReasoningContentReplayModelIdCandidates | (private) | `function getReasoningContentReplayModelIdCandid...` |
| 1615 | fn | shouldPreserveReasoningContentReplay | (private) | `function shouldPreserveReasoningContentReplay(` |
| 1632 | fn | shouldPreserveOpenRouterReasoningReplay | (private) | `function shouldPreserveOpenRouterReasoningRepla...` |
| 1640 | fn | shouldTrustReasoningContentReplayMetadata | (private) | `function shouldTrustReasoningContentReplayMetad...` |
| 1655 | fn | sanitizeCompletionsReasoningReplayFields | (private) | `function sanitizeCompletionsReasoningReplayFields(` |
| 1680 | fn | buildOpenAICompletionsParams | pub | `export function buildOpenAICompletionsParams(` |
| 1888 | fn | parseTransportChunkUsage | (private) | `function parseTransportChunkUsage(` |
| 1913 | fn | hasOpenAICompletionsReasoningUsageActivity | (private) | `function hasOpenAICompletionsReasoningUsageActi...` |

## Public API

### `createOpenAICompletionsTransportStreamFn`

```
export function createOpenAICompletionsTransportStreamFn(): StreamFn {
```

**Line:** 241 | **Kind:** fn

### `buildOpenAICompletionsParams`

```
export function buildOpenAICompletionsParams(
```

**Line:** 1680 | **Kind:** fn
