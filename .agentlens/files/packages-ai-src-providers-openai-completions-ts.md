# packages/ai/src/providers/openai-completions.ts

[← Back to Module](../modules/packages-ai-src-providers/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1505
- **Language:** TypeScript
- **Symbols:** 46
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 76 | fn | hasToolHistory | (private) | `function hasToolHistory(messages: Message[]): b...` |
| 92 | fn | isTextContentBlock | (private) | `function isTextContentBlock(block: { type: stri...` |
| 96 | fn | isThinkingContentBlock | (private) | `function isThinkingContentBlock(block: { type: ...` |
| 100 | fn | isToolCallBlock | (private) | `function isToolCallBlock(block: { type: string ...` |
| 106 | fn | sanitizeToolResultText | (private) | `function sanitizeToolResultText(text: string, f...` |
| 111 | interface | OpenAICompletionsOptions | pub | - |
| 116 | interface | OpenAICompatCacheControl | (private) | - |
| 121 | type | ResolvedOpenAICompletionsCompat | (private) | - |
| 129 | type | EncryptedReasoningDetail | (private) | - |
| 135 | fn | isEncryptedReasoningDetail | (private) | `function isEncryptedReasoningDetail(detail: unk...` |
| 149 | type | ChatCompletionInstructionMessageParam | (private) | - |
| 153 | type | ChatCompletionTextPartWithCacheControl | (private) | - |
| 157 | type | ChatCompletionToolWithCacheControl | (private) | - |
| 216 | interface | StreamingToolCallBlock | (private) | - |
| 220 | type | StreamingBlock | (private) | - |
| 221 | type | StreamingToolCallDelta | (private) | - |
| 238 | fn | appendBlock | (private) | `const appendBlock = (block: StreamingBlock) => {` |
| 242 | fn | getContentIndex | (private) | `const getContentIndex = (block: StreamingBlock)...` |
| 243 | fn | rememberFirstToolCallById | (private) | `const rememberFirstToolCallById = (id: string, ...` |
| 256 | fn | finishBlock | (private) | `const finishBlock = (block: StreamingBlock) => {` |
| 289 | fn | ensureTextBlock | (private) | `const ensureTextBlock = () => {` |
| 301 | fn | ensureThinkingBlock | (private) | `const ensureThinkingBlock = (thinkingSignature:...` |
| 322 | fn | sealNativeReasoningBeforeText | (private) | `const sealNativeReasoningBeforeText = () => {` |
| 328 | fn | appendTextDelta | (private) | `const appendTextDelta = (delta: string) => {` |
| 339 | fn | appendThinkingDelta | (private) | `const appendThinkingDelta = (thinkingSignature:...` |
| 349 | fn | ensureToolCallBlock | (private) | `const ensureToolCallBlock = (toolCall: Streamin...` |
| 388 | fn | appendPartitionedContent | (private) | `const appendPartitionedContent = (text: string,...` |
| 398 | fn | flushPartitionedContent | (private) | `const flushPartitionedContent = () => {` |
| 643 | fn | createClient | (private) | `function createClient(` |
| 699 | fn | buildParams | (private) | `function buildParams(` |
| 715 | type | ChatCompletionRequestParams | (private) | - |
| 876 | fn | clampOpenAICompletionsMaxTokens | (private) | `function clampOpenAICompletionsMaxTokens(` |
| 889 | fn | getCompatCacheControl | (private) | `function getCompatCacheControl(` |
| 901 | fn | applyAnthropicCacheControl | (private) | `function applyAnthropicCacheControl(` |
| 912 | fn | addCacheControlToSystemPrompt | (private) | `function addCacheControlToSystemPrompt(` |
| 924 | fn | addCacheControlToLastConversationMessage | (private) | `function addCacheControlToLastConversationMessage(` |
| 942 | fn | addCacheControlToLastTool | (private) | `function addCacheControlToLastTool(` |
| 957 | fn | addCacheControlToInstructionMessage | (private) | `function addCacheControlToInstructionMessage(` |
| 964 | fn | addCacheControlToMessage | (private) | `function addCacheControlToMessage(` |
| 974 | fn | addCacheControlToTextContent | (private) | `function addCacheControlToTextContent(` |
| 1006 | fn | buildCacheControlledTextParts | (private) | `function buildCacheControlledTextParts(` |
| 1029 | fn | convertMessages | pub | `export function convertMessages(` |
| 1318 | fn | convertTools | (private) | `function convertTools(` |
| 1341 | fn | parseChunkUsage | (private) | `function parseChunkUsage(` |
| 1385 | fn | detectCompat | (private) | `function detectCompat(model: Model<"openai-comp...` |
| 1470 | fn | getCompat | (private) | `function getCompat(model: Model<"openai-complet...` |

## Public API

### `convertMessages`

```
export function convertMessages(
```

**Line:** 1029 | **Kind:** fn
