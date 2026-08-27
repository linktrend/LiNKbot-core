# packages/ai/src/providers/openai-completions.test.ts

[← Back to Module](../modules/packages-ai-src-providers/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1626
- **Language:** TypeScript
- **Symbols:** 12
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 9 | type | OpenAICompatibleDelta | (private) | - |
| 12 | type | OpenAICompatibleChoice | (private) | - |
| 20 | type | OpenAICompatibleChatCompletionChunk | (private) | - |
| 27 | type | FirstEventSimpleStreamOptions | (private) | - |
| 43 | class | MockOpenAI | (private) | - |
| 110 | fn | createModel | (private) | `function createModel(maxTokens: number): Model<...` |
| 125 | fn | makeTextChunk | (private) | `function makeTextChunk(text: string): OpenAICom...` |
| 132 | fn | makeRefusalChunk | (private) | `function makeRefusalChunk(refusal: string): Ope...` |
| 145 | fn | makeRefusalMessageChunk | (private) | `function makeRefusalMessageChunk(refusal: strin...` |
| 158 | fn | makeToolCallChunk | (private) | `function makeToolCallChunk(` |
| 178 | fn | makeFinishChunk | (private) | `function makeFinishChunk(` |
| 194 | fn | createNeverYieldingStream | (private) | `function createNeverYieldingStream(): AsyncIter...` |
