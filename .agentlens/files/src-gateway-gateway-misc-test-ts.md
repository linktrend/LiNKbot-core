# src/gateway/gateway-misc.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1152
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 46 | fn | makeControlUiResponse | (private) | `function makeControlUiResponse() {` |
| 98 | fn | withControlUiRoot | (private) | `async function withControlUiRoot(` |
| 114 | fn | expectControlUiStatus | (private) | `async function expectControlUiStatus(` |
| 130 | fn | startGatewayClient | (private) | `function startGatewayClient(params: { url: stri...` |
| 136 | fn | expectNoGatewayClientAgent | (private) | `function expectNoGatewayClientAgent(params: { u...` |
| 141 | fn | setCorporateNoProxy | (private) | `function setCorporateNoProxy() {` |
| 146 | fn | setGatewayOnlyProxyEnv | (private) | `function setGatewayOnlyProxyEnv() {` |
| 151 | fn | registerGatewayOnlyProxy | (private) | `function registerGatewayOnlyProxy() {` |
| 269 | type | TestSocket | (private) | - |
| 275 | type | EventFrame | (private) | - |
| 282 | type | RecordingSocket | (private) | - |
| 286 | fn | makeRecordingSocket | (private) | `function makeRecordingSocket(): RecordingSocket {` |
| 298 | fn | makeGatewayWsClient | (private) | `function makeGatewayWsClient(` |
| 311 | fn | makeOperatorWsClient | (private) | `function makeOperatorWsClient(connId: string, s...` |
| 318 | fn | makeOperatorWsClients | (private) | `function makeOperatorWsClients(` |
| 326 | fn | makeReadPairClients | (private) | `function makeReadPairClients(` |
| 336 | fn | makeScopedBroadcastClients | (private) | `function makeScopedBroadcastClients() {` |
| 356 | fn | makeScopedBroadcastContext | (private) | `function makeScopedBroadcastContext() {` |
| 364 | fn | sentEvents | (private) | `function sentEvents(socket: RecordingSocket) {` |
| 368 | fn | expectSentEvents | (private) | `function expectSentEvents(socket: RecordingSock...` |
| 372 | fn | sentEventSeq | (private) | `function sentEventSeq(socket: RecordingSocket) {` |
| 376 | fn | chatPayload | (private) | `function chatPayload() {` |
| 380 | fn | chatSideResultPayload | (private) | `function chatSideResultPayload() {` |
| 384 | fn | broadcastChatClassEvents | (private) | `function broadcastChatClassEvents(` |
| 903 | fn | sendEvent | (private) | `const sendEvent = (evt: {` |
| 964 | fn | sendEvent | (private) | `const sendEvent = (evt: { nodeId: string; event...` |
| 978 | fn | expectAllowed | (private) | `function expectAllowed(allow: { has: (cmd: stri...` |
| 984 | fn | expectDenied | (private) | `function expectDenied(allow: { has: (cmd: strin...` |
| 990 | fn | expectDangerousCommandsDenied | (private) | `function expectDangerousCommandsDenied(allow: {...` |
