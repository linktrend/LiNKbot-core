# extensions/openai/realtime-voice-provider.test.ts

[← Back to Module](../modules/extensions-openai/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2812
- **Language:** TypeScript
- **Symbols:** 23
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 14 | type | Listener | (private) | - |
| 16 | class | MockWebSocket | (private) | - |
| 55 | fn | emitClose | (private) | `const emitClose = () => this.emit("close", code...` |
| 105 | type | FakeWebSocketInstance | (private) | - |
| 106 | type | SentRealtimeEvent | (private) | - |
| 146 | fn | parseSent | (private) | `function parseSent(socket: FakeWebSocketInstanc...` |
| 150 | fn | expectedResponseCreateEvent | (private) | `function expectedResponseCreateEvent() {` |
| 157 | fn | expectedResponseCancelEvent | (private) | `function expectedResponseCancelEvent() {` |
| 164 | fn | createJsonResponse | (private) | `function createJsonResponse(body: unknown, init...` |
| 173 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 177 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 182 | fn | requireNestedRecord | (private) | `function requireNestedRecord(` |
| 194 | fn | expectRecordFields | (private) | `function expectRecordFields(` |
| 206 | fn | firstMockCall | (private) | `function firstMockCall(` |
| 217 | fn | requireFetchRequest | (private) | `function requireFetchRequest(callIndex = 0): Re...` |
| 221 | fn | requireFetchInit | (private) | `function requireFetchInit(callIndex = 0): Recor...` |
| 225 | fn | requireFetchHeaders | (private) | `function requireFetchHeaders(callIndex = 0): Re...` |
| 229 | fn | requireFetchJsonBody | (private) | `function requireFetchJsonBody(callIndex = 0): R...` |
| 235 | fn | requireSession | (private) | `function requireSession(socket: FakeWebSocketIn...` |
| 239 | fn | hasSentEventType | (private) | `function hasSentEventType(socket: FakeWebSocket...` |
| 243 | fn | createRealtimeTool | (private) | `function createRealtimeTool(name: string): Real...` |
| 252 | fn | createUnreadableToolName | (private) | `function createUnreadableToolName(): RealtimeVo...` |
| 263 | fn | createMalformedToolName | (private) | `function createMalformedToolName(name: unknown)...` |
