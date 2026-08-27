# ui/src/api/gateway.node.test.ts

[← Back to Module](../modules/ui-src-api/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1684
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 26 | type | DeviceIdentity | (private) | - |
| 55 | fn | loadDeviceAuthToken | (private) | `function loadDeviceAuthToken(params: { deviceId...` |
| 59 | fn | storeDeviceAuthToken | (private) | `function storeDeviceAuthToken(params: {` |
| 68 | type | HandlerMap | (private) | - |
| 75 | type | MockWebSocketHandler | (private) | - |
| 77 | fn | createDeferred | (private) | `function createDeferred<T>() {` |
| 88 | class | MockWebSocket | (private) | - |
| 142 | type | ConnectFrame | (private) | - |
| 154 | type | RequestTimingPayload | (private) | - |
| 164 | type | ConnectTimingPayload | (private) | - |
| 180 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 187 | fn | requireFirstMockArg | (private) | `function requireFirstMockArg(` |
| 198 | fn | requireMockCallArg | (private) | `function requireMockCallArg(` |
| 211 | fn | requireFirstSignCall | (private) | `function requireFirstSignCall(): [privateKey: s...` |
| 223 | fn | expectSignedPayloadFields | (private) | `function expectSignedPayloadFields(` |
| 240 | fn | expectLatestRequestTiming | (private) | `function expectLatestRequestTiming(` |
| 260 | fn | connectTimingPayloads | (private) | `function connectTimingPayloads(onConnectTiming:...` |
| 266 | fn | stubWindowGlobals | (private) | `function stubWindowGlobals(storage?: ReturnType...` |
| 279 | fn | getLatestWebSocket | (private) | `function getLatestWebSocket(): MockWebSocket {` |
| 287 | fn | stubInsecureCrypto | (private) | `function stubInsecureCrypto() {` |
| 293 | fn | useNodeFakeTimers | (private) | `function useNodeFakeTimers() {` |
| 299 | fn | parseLatestConnectFrame | (private) | `function parseLatestConnectFrame(ws: MockWebSoc...` |
| 303 | fn | continueConnect | (private) | `async function continueConnect(ws: MockWebSocke...` |
| 320 | fn | expectSocketClosed | (private) | `async function expectSocketClosed(ws: MockWebSo...` |
| 324 | fn | startConnect | (private) | `async function startConnect(client: InstanceTyp...` |
| 329 | fn | emitRetryableTokenMismatch | (private) | `function emitRetryableTokenMismatch(ws: MockWeb...` |
| 342 | fn | expectRetriedDeviceTokenConnect | (private) | `async function expectRetriedDeviceTokenConnect(...` |
| 494 | class | ThrowingWebSocket | (private) | - |
| 535 | class | ThrowingWebSocket | (private) | - |
