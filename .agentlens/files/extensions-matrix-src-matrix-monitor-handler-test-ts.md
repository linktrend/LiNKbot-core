# extensions/matrix/src/matrix/monitor/handler.test.ts

[← Back to Module](../modules/extensions-matrix-src-matrix-monitor/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 4434
- **Language:** TypeScript
- **Symbols:** 26
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 68 | fn | waitForMatrixState | (private) | `function waitForMatrixState<T>(` |
| 75 | fn | writeMatrixSessionMeta | (private) | `async function writeMatrixSessionMeta(` |
| 129 | fn | createReactionHarness | (private) | `function createReactionHarness(params?: {` |
| 153 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 160 | fn | requireArray | (private) | `function requireArray(value: unknown, label: st...` |
| 165 | fn | mockCalls | (private) | `function mockCalls(mock: unknown, label: string...` |
| 177 | fn | callArg | (private) | `function callArg(mock: unknown, callIndex: numb...` |
| 185 | fn | lastCallArg | (private) | `function lastCallArg(mock: unknown, argIndex: n...` |
| 190 | fn | singleTextMessageBody | (private) | `function singleTextMessageBody(callIndex = 0) {` |
| 194 | fn | expectMockCallWithFields | (private) | `function expectMockCallWithFields(mock: unknown...` |
| 205 | fn | expectNoticeSent | (private) | `function expectNoticeSent(mock: unknown) {` |
| 211 | fn | expectRuntimeErrorContaining | (private) | `function expectRuntimeErrorContaining(mock: unk...` |
| 218 | fn | findMockCall | (private) | `function findMockCall(mock: unknown, label: str...` |
| 226 | fn | expectMatrixEdit | (private) | `function expectMatrixEdit(roomId: string, event...` |
| 236 | fn | expectFinalizedPreviewEdit | (private) | `function expectFinalizedPreviewEdit(eventId: st...` |
| 247 | fn | expectEditLiveFlag | (private) | `function expectEditLiveFlag(eventId: string, te...` |
| 262 | fn | expectDeliveredMediaReply | (private) | `function expectDeliveredMediaReply() {` |
| 2080 | type | MatrixHandler | (private) | - |
| 2082 | fn | createDispatchInboundMessage | (private) | `const createDispatchInboundMessage = () =>` |
| 2088 | fn | sendLiveAllowlistMessage | (private) | `const sendLiveAllowlistMessage = async (` |
| 2114 | type | LiveNameMatchingResolveParams | (private) | - |
| 2809 | type | DeliverFn | (private) | - |
| 2822 | type | ReplyOpts | (private) | - |
| 2883 | fn | createStreamingHarness | (private) | `function createStreamingHarness(opts?: {` |
| 2896 | fn | notifyCaptured | (private) | `const notifyCaptured = () => {` |
| 2945 | fn | dispatch | (private) | `const dispatch = async () => {` |
