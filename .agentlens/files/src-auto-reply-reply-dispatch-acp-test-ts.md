# src/auto-reply/reply/dispatch-acp.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2471
- **Language:** TypeScript
- **Symbols:** 21
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 238 | type | MockTtsReply | (private) | - |
| 239 | type | MockCallSource | (private) | - |
| 241 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 248 | fn | mockArg | (private) | `function mockArg(source: MockCallSource, callIn...` |
| 252 | fn | routeCall | (private) | `function routeCall(index = 0) {` |
| 259 | fn | routePayload | (private) | `function routePayload(index = 0) {` |
| 263 | fn | messageActionCall | (private) | `function messageActionCall(index = 0) {` |
| 270 | fn | runTurnCall | (private) | `function runTurnCall(index = 0) {` |
| 274 | fn | dispatcherCall | (private) | `function dispatcherCall(` |
| 287 | fn | createDispatcher | (private) | `function createDispatcher(): {` |
| 304 | fn | setReadyAcpResolution | (private) | `function setReadyAcpResolution() {` |
| 312 | fn | createAcpConfigWithVisibleToolTags | (private) | `function createAcpConfigWithVisibleToolTags(): ...` |
| 326 | fn | runDispatch | (private) | `async function runDispatch(params: {` |
| 384 | fn | emitToolLifecycleEvents | (private) | `async function emitToolLifecycleEvents(` |
| 407 | fn | mockToolLifecycleTurn | (private) | `function mockToolLifecycleTurn(toolCallId: stri...` |
| 415 | fn | mockVisibleTextTurn | (private) | `function mockVisibleTextTurn(text = "visible") {` |
| 424 | fn | mockRoutedTextTurn | (private) | `function mockRoutedTextTurn(text: string) {` |
| 433 | fn | dispatchVisibleTurn | (private) | `async function dispatchVisibleTurn(onReplyStart...` |
| 441 | fn | queueTtsReplies | (private) | `function queueTtsReplies(...replies: MockTtsRep...` |
| 447 | fn | runRoutedAcpTextTurn | (private) | `async function runRoutedAcpTextTurn(text: strin...` |
| 458 | fn | expectRoutedPayload | (private) | `function expectRoutedPayload(callIndex: number,...` |
