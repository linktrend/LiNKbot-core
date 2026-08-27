# src/agents/btw.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1339
- **Language:** TypeScript
- **Symbols:** 25
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 96 | fn | collectTextContent | (private) | `function collectTextContent(content: Array<{ ty...` |
| 103 | fn | collectThinkingContent | (private) | `function collectThinkingContent(content: Array<...` |
| 110 | fn | buildBtwSystemPrompt | (private) | `function buildBtwSystemPrompt(): string {` |
| 122 | fn | resolveReturnedAuthProfileSource | (private) | `function resolveReturnedAuthProfileSource(` |
| 140 | fn | resolveBtwAuthProfileStore | (private) | `function resolveBtwAuthProfileStore(params: {` |
| 205 | fn | buildBtwQuestionPrompt | (private) | `function buildBtwQuestionPrompt(question: strin...` |
| 225 | fn | collectBtwMessageText | (private) | `function collectBtwMessageText(content: Message...` |
| 246 | fn | buildBtwCliPrompt | (private) | `function buildBtwCliPrompt(params: {` |
| 269 | fn | normalizeBtwContentBlocks | (private) | `function normalizeBtwContentBlocks(content: unk...` |
| 279 | fn | isBtwTextBlock | (private) | `function isBtwTextBlock(block: unknown): block ...` |
| 287 | fn | isBtwImageBlock | (private) | `function isBtwImageBlock(block: unknown): block...` |
| 299 | fn | sanitizeBtwUserMessage | (private) | `async function sanitizeBtwUserMessage(params: {` |
| 336 | fn | sanitizeBtwAssistantMessage | (private) | `function sanitizeBtwAssistantMessage(` |
| 365 | fn | toSimpleContextMessages | (private) | `async function toSimpleContextMessages(params: {` |
| 402 | type | BtwRuntimeAuthPreparation | (private) | - |
| 404 | type | BtwRuntimeModelMaterialization | (private) | - |
| 414 | fn | materializeBtwRuntimeModel | (private) | `async function materializeBtwRuntimeModel(` |
| 444 | fn | resolveBtwPreparedRuntimeAuth | (private) | `async function resolveBtwPreparedRuntimeAuth(` |
| 475 | fn | resolveRuntimeModel | (private) | `async function resolveRuntimeModel(params: {` |
| 585 | type | RunBtwSideQuestionParams | (private) | - |
| 623 | fn | runCliBtwSideQuestion | (private) | `async function runCliBtwSideQuestion(params: {` |
| 689 | fn | runBtwSideQuestion | pub | `export async function runBtwSideQuestion(` |
| 800 | fn | resolveRuntimeSelection | (private) | `const resolveRuntimeSelection = async () => {` |
| 821 | type | BtwHarnessSideQuestionDispatch | (private) | - |
| 1217 | fn | emitBlockChunk | (private) | `const emitBlockChunk = async (text: string) => {` |

## Public API

### `runBtwSideQuestion`

```
export async function runBtwSideQuestion(
```

**Line:** 689 | **Kind:** fn
