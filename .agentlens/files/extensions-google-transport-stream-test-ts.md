# extensions/google/transport-stream.test.ts

[← Back to Module](../modules/extensions-google/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2920
- **Language:** TypeScript
- **Symbols:** 23
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 48 | fn | attachModelProviderRequestTransport | (private) | `function attachModelProviderRequestTransport<TM...` |
| 58 | fn | buildGeminiModel | (private) | `function buildGeminiModel(` |
| 76 | fn | buildGoogleVertexModel | (private) | `function buildGoogleVertexModel(` |
| 94 | fn | buildSseResponse | (private) | `function buildSseResponse(events: unknown[]): R...` |
| 99 | fn | buildRateLimitResponse | (private) | `function buildRateLimitResponse(): Response {` |
| 108 | fn | buildRawSseResponse | (private) | `function buildRawSseResponse(sse: string): Resp...` |
| 122 | fn | buildOpenRawSseResponse | (private) | `function buildOpenRawSseResponse(params: { sse:...` |
| 138 | fn | buildDelayedSecondSseResponse | (private) | `function buildDelayedSecondSseResponse(params: {` |
| 167 | fn | requireMockCall | (private) | `function requireMockCall<TArgs extends unknown[]>(` |
| 179 | fn | requireRequestInit | (private) | `function requireRequestInit(call: unknown[], la...` |
| 187 | fn | expectHeaders | (private) | `function expectHeaders(init: RequestInit, expec...` |
| 194 | fn | parseRequestJsonBody | (private) | `function parseRequestJsonBody(init: RequestInit...` |
| 202 | fn | requireGenerationConfig | (private) | `function requireGenerationConfig(params: { gene...` |
| 210 | fn | requireThinkingConfig | (private) | `function requireThinkingConfig(config: Record<s...` |
| 218 | type | GoogleTestContentTurn | (private) | - |
| 222 | fn | isModelTurnWithParts | (private) | `function isModelTurnWithParts(content: Record<s...` |
| 226 | fn | getFirstModelTurn | (private) | `function getFirstModelTurn(contents: Array<Reco...` |
| 234 | fn | getLastModelTurn | (private) | `function getLastModelTurn(contents: Array<Recor...` |
| 242 | fn | googleToolCallAssistantTurn | (private) | `function googleToolCallAssistantTurn({` |
| 280 | fn | toolResultTurn | (private) | `function toolResultTurn(toolCallId = "call_1", ...` |
| 294 | fn | parallelGoogleToolCallAssistantTurn | (private) | `function parallelGoogleToolCallAssistantTurn():...` |
| 309 | fn | googleToolResultMessage | (private) | `function googleToolResultMessage(name: "screens...` |
| 2907 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |
