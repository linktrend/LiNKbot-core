# packages/ai/src/providers/mistral.ts

[← Back to Module](../modules/packages-ai-src-providers/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1045
- **Language:** TypeScript
- **Symbols:** 27
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 65 | fn | createBoundedMistralFetcher | pub | `export function createBoundedMistralFetcher(` |
| 107 | type | MistralReasoningEffort | (private) | - |
| 109 | interface | MistralOptions | (private) | - |
| 240 | fn | createOutput | (private) | `function createOutput(model: Model<"mistral-con...` |
| 260 | fn | createMistralToolCallIdNormalizer | (private) | `function createMistralToolCallIdNormalizer(): (...` |
| 284 | fn | deriveMistralToolCallId | (private) | `function deriveMistralToolCallId(id: string, at...` |
| 297 | fn | formatMistralError | (private) | `function formatMistralError(error: unknown): st...` |
| 313 | fn | truncateErrorText | (private) | `function truncateErrorText(text: string, maxCha...` |
| 321 | fn | safeJsonStringify | (private) | `function safeJsonStringify(value: unknown): str...` |
| 330 | fn | buildChatPayload | (private) | `function buildChatPayload(` |
| 386 | fn | resolveMistralPromptCacheKey | (private) | `function resolveMistralPromptCacheKey(options?:...` |
| 393 | fn | readMistralCachedPromptTokens | (private) | `function readMistralCachedPromptTokens(usage: u...` |
| 410 | fn | consumeChatStream | (private) | `async function consumeChatStream(` |
| 418 | fn | blockIndex | (private) | `const blockIndex = () => blocks.length - 1;` |
| 419 | type | ToolBlockIdentity | (private) | - |
| 431 | fn | createMissingToolCallId | (private) | `const createMissingToolCallId = (contentIndex: ...` |
| 434 | fn | findIdentityCandidates | (private) | `const findIdentityCandidates = (` |
| 575 | fn | finishCurrentBlock | (private) | `const finishCurrentBlock = (block?: typeof curr...` |
| 800 | fn | toFunctionTools | (private) | `function toFunctionTools(tools: Tool[]): Array<...` |
| 818 | fn | stripSymbolKeys | (private) | `function stripSymbolKeys(value: unknown): unkno...` |
| 834 | fn | toChatMessages | (private) | `function toChatMessages(` |
| 944 | fn | buildToolResultText | (private) | `function buildToolResultText(` |
| 974 | fn | usesReasoningEffort | (private) | `function usesReasoningEffort(model: Model<"mist...` |
| 982 | fn | usesPromptModeReasoning | (private) | `function usesPromptModeReasoning(model: Model<"...` |
| 986 | fn | mapReasoningEffort | (private) | `function mapReasoningEffort(` |
| 993 | fn | mapToolChoice | (private) | `function mapToolChoice(` |
| 1027 | fn | mapChatStopReason | (private) | `function mapChatStopReason(reason: string | nul...` |

## Public API

### `createBoundedMistralFetcher`

```
export function createBoundedMistralFetcher(
```

**Line:** 65 | **Kind:** fn
