# src/gateway/server-methods/send.test.ts

[← Back to Module](../modules/src-gateway-server-methods/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3554
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 21 | type | ResolveOutboundTarget | (private) | - |
| 83 | fn | resolveAgentIdFromSessionKeyForTests | (private) | `function resolveAgentIdFromSessionKeyForTests(p...` |
| 93 | fn | messageActionContextFromSessionKeyForTests | (private) | `function messageActionContextFromSessionKeyForT...` |
| 205 | fn | loadSendHandlersForTest | (private) | `async function loadSendHandlersForTest() {` |
| 215 | fn | runSend | (private) | `async function runSend(params: Record<string, u...` |
| 219 | fn | runSendWithClient | (private) | `async function runSendWithClient(` |
| 235 | fn | runPoll | (private) | `async function runPoll(params: Record<string, u...` |
| 239 | fn | runPollWithClient | (private) | `async function runPollWithClient(` |
| 255 | fn | createDeferred | (private) | `function createDeferred<T>() {` |
| 265 | fn | runMessageActionRequest | (private) | `async function runMessageActionRequest(` |
| 342 | fn | directCliClient | (private) | `function directCliClient() {` |
| 353 | fn | agentRuntimeClient | (private) | `function agentRuntimeClient(sessionKey: string,...` |
| 366 | fn | withTempOpenClawStateDir | (private) | `async function withTempOpenClawStateDir<T>(test...` |
| 378 | fn | deliveryCall | (private) | `function deliveryCall(index = 0): Record<string...` |
| 383 | fn | appendTranscriptCall | (private) | `function appendTranscriptCall(index = 0): Recor...` |
| 390 | fn | firstRespondCall | (private) | `function firstRespondCall(respond: ReturnType<t...` |
| 406 | fn | lastDispatchChannelMessageActionCall | (private) | `function lastDispatchChannelMessageActionCall()...` |
| 413 | fn | pollCall | (private) | `function pollCall(index = 0): Record<string, an...` |
| 422 | fn | outboundRouteCall | (private) | `function outboundRouteCall(index = 0): Record<s...` |
| 429 | fn | ensureSessionEntryCall | (private) | `function ensureSessionEntryCall(index = 0): Rec...` |
| 436 | fn | expectDeliverySessionMirror | (private) | `function expectDeliverySessionMirror(params: { ...` |
| 444 | fn | mockDeliverySuccess | (private) | `function mockDeliverySuccess(messageId: string) {` |
| 2289 | fn | identity | (private) | `const identity = (sourceReplyFinal: boolean) => ({` |
| 2311 | fn | request | (private) | `const request = (message: string) => ({` |
