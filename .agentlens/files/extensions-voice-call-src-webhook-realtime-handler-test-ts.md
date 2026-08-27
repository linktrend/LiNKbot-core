# extensions/voice-call/src/webhook/realtime-handler.test.ts

[← Back to Module](../modules/extensions-voice-call-src-webhook/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1919
- **Language:** TypeScript
- **Symbols:** 13
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 42 | fn | makeRequest | (private) | `function makeRequest(url: string, host = "gatew...` |
| 50 | fn | makeBridge | (private) | `function makeBridge(overrides: Partial<Realtime...` |
| 64 | fn | makeRealtimeProvider | (private) | `function makeRealtimeProvider(` |
| 92 | fn | makeHandler | (private) | `function makeHandler(` |
| 189 | fn | waitForRealtimeTest | (private) | `async function waitForRealtimeTest(` |
| 196 | fn | requireFirstMockCall | (private) | `function requireFirstMockCall(calls: readonly u...` |
| 204 | type | RealtimeBridgeRequest | (private) | - |
| 205 | type | RecentTalkEvent | (private) | - |
| 207 | fn | makeCallRecord | (private) | `function makeCallRecord(providerCallId: string)...` |
| 223 | fn | parseWebSocketMessage | (private) | `function parseWebSocketMessage(data: RawData): ...` |
| 232 | fn | withBargeInHarness | (private) | `async function withBargeInHarness(` |
| 310 | fn | recentTalkEvents | (private) | `function recentTalkEvents(call: CallRecord): Re...` |
| 314 | fn | requireCancelledTurn | (private) | `function requireCancelledTurn(call: CallRecord)...` |
