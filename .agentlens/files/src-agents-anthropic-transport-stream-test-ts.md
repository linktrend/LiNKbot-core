# src/agents/anthropic-transport-stream.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 4213
- **Language:** TypeScript
- **Symbols:** 22
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 26 | type | AnthropicMessagesModel | (private) | - |
| 27 | type | AnthropicStreamFn | (private) | - |
| 28 | type | AnthropicStreamContext | (private) | - |
| 29 | type | AnthropicStreamOptions | (private) | - |
| 30 | type | RequestTransportConfig | (private) | - |
| 32 | fn | createSseResponse | (private) | `function createSseResponse(events: Record<strin...` |
| 40 | fn | serializeSseEvents | (private) | `function serializeSseEvents(events: Record<stri...` |
| 44 | fn | createFailingSseResponse | (private) | `function createFailingSseResponse(events: Recor...` |
| 63 | fn | createInterruptedThinkingEvents | (private) | `function createInterruptedThinkingEvents(): Rec...` |
| 82 | fn | createStalledSseResponse | (private) | `function createStalledSseResponse(params: { onC...` |
| 103 | fn | createRawSseResponse | (private) | `function createRawSseResponse(body: string): Re...` |
| 110 | fn | createOpenRawSseResponse | (private) | `function createOpenRawSseResponse(params: {` |
| 129 | fn | delay | (private) | `function delay<T>(ms: number, value: T): Promis...` |
| 135 | fn | latestAnthropicRequest | (private) | `function latestAnthropicRequest() {` |
| 144 | fn | latestAnthropicRequestHeaders | (private) | `function latestAnthropicRequestHeaders() {` |
| 148 | fn | guardedFetchCall | (private) | `function guardedFetchCall(` |
| 158 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 165 | fn | requireArray | (private) | `function requireArray(value: unknown, label: st...` |
| 172 | fn | findRecord | (private) | `function findRecord(items: unknown, predicate: ...` |
| 182 | fn | makeAnthropicTransportModel | (private) | `function makeAnthropicTransportModel(` |
| 223 | fn | makeSonnet5PrefillContext | (private) | `function makeSonnet5PrefillContext(): Anthropic...` |
| 249 | fn | runTransportStream | (private) | `async function runTransportStream(` |
