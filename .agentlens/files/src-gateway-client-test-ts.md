# src/gateway/client.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2135
- **Language:** TypeScript
- **Symbols:** 26
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 13 | fn | waitForFast | (private) | `function waitForFast<T>(` |
| 20 | type | MockLoggingConfig | (private) | - |
| 62 | type | WsEvent | (private) | - |
| 63 | type | WsEventHandlers | (private) | - |
| 70 | class | MockWebSocket | (private) | - |
| 206 | type | GatewayClientModule | (private) | - |
| 207 | type | GatewayClientInstance | (private) | - |
| 212 | fn | loadGatewayClientModule | (private) | `async function loadGatewayClientModule() {` |
| 217 | fn | getLatestWs | (private) | `function getLatestWs(): MockWebSocket {` |
| 225 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 232 | fn | expectRecordFields | (private) | `function expectRecordFields(` |
| 244 | fn | firstMockArg | (private) | `function firstMockArg(mock: ReturnType<typeof v...` |
| 251 | fn | createClientWithIdentity | (private) | `function createClientWithIdentity(` |
| 270 | fn | expectSecurityConnectError | (private) | `function expectSecurityConnectError(` |
| 1159 | type | ParsedConnectRequest | (private) | - |
| 1176 | fn | parseConnectRequest | (private) | `function parseConnectRequest(ws: MockWebSocket)...` |
| 1184 | fn | connectFrameFrom | (private) | `function connectFrameFrom(ws: MockWebSocket) {` |
| 1188 | fn | connectScopesFrom | (private) | `function connectScopesFrom(ws: MockWebSocket) {` |
| 1192 | fn | connectRequestFrom | (private) | `function connectRequestFrom(ws: MockWebSocket) {` |
| 1221 | fn | emitConnectChallenge | (private) | `function emitConnectChallenge(ws: MockWebSocket...` |
| 1231 | fn | startClientAndConnect | (private) | `function startClientAndConnect(params: { client...` |
| 1239 | fn | startClientWithEarlyChallenge | (private) | `function startClientWithEarlyChallenge(params: {` |
| 1351 | fn | emitConnectFailure | (private) | `function emitConnectFailure(` |
| 1371 | fn | emitHelloOk | (private) | `function emitHelloOk(ws: MockWebSocket, connect...` |
| 1385 | fn | expectRetriedConnectAuth | (private) | `async function expectRetriedConnectAuth(params: {` |
| 1404 | fn | expectNoReconnectAfterConnectFailure | (private) | `async function expectNoReconnectAfterConnectFai...` |
