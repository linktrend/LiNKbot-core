# apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayChannel.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Sources-OpenClawKit/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1652
- **Language:** Swift
- **Symbols:** 68
- **Public symbols:** 11

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 8 | fn | gatewayErrorDetails | (private) | `private func gatewayErrorDetails(_ error: Error...` |
| 31 | mod | extension String | (internal) | - |
| 37 | class | GatewayChannelActor | pub | `actor GatewayChannelActor` |
| 133 | fn | authSource | pub | `public func authSource() -> GatewayAuthSource` |
| 137 | fn | authBinding | pub | `public func authBinding(ifCurrentConnectionGene...` |
| 145 | fn | _test_setConnectTimeoutSeconds | (internal) | `func _test_setConnectTimeoutSeconds(_ seconds: ...` |
| 149 | fn | _test_setConnectAttemptFinishedHandler | (internal) | `func _test_setConnectAttemptFinishedHandler(_ h...` |
| 155 | fn | _test_setRequestResumedHandler | (internal) | `func _test_setRequestResumedHandler(_ handler: ...` |
| 159 | fn | _test_pendingRequestCount | (internal) | `func _test_pendingRequestCount() -> Int` |
| 163 | fn | _test_connectWaiterCount | (internal) | `func _test_connectWaiterCount() -> Int` |
| 167 | fn | shutdown | pub | `public func shutdown() async` |
| 205 | fn | startWatchdog | (private) | `private func startWatchdog()` |
| 213 | fn | watchdogLoop | (private) | `private func watchdogLoop() async` |
| 243 | fn | makeUpgradeRequest | (private) | `private func makeUpgradeRequest() -> URLRequest` |
| 254 | fn | connect | pub | `public func connect() async throws` |
| 279 | fn | runConnectAttempt | (private) | `private func runConnectAttempt() async` |
| 288 | fn | waitForConnectAttempt | (private) | `private func waitForConnectAttempt() async throws` |
| 310 | fn | finishConnectAttempt | (private) | `private func finishConnectAttempt(error: Error?)` |
| 323 | fn | performConnectAttempt | (private) | `private func performConnectAttempt() async throws` |
| 407 | fn | startKeepalive | (private) | `private func startKeepalive(connectionGeneratio...` |
| 415 | fn | keepaliveLoop | (private) | `private func keepaliveLoop(connectionGeneration...` |
| 432 | fn | loadDeviceIdentityForConnect | (private) | `private static func loadDeviceIdentityForConnec...` |
| 446 | fn | sendConnect | (private) | `private func sendConnect(     task: WebSocketTa...` |
| 606 | mod | extension GatewayChannelActor | (internal) | - |
| 607 | fn | requireCurrentConnection | (private) | `private func requireCurrentConnection(_ connect...` |
| 617 | mod | extension GatewayChannelActor | (internal) | - |
| 618 | fn | applyConnectAuth | (private) | `private func applyConnectAuth(     _ selectedAu...` |
| 645 | fn | selectConnectAuth | (private) | `private func selectConnectAuth(     role: Strin...` |
| 797 | fn | shouldPersistBootstrapHandoffTokens | (private) | `private func shouldPersistBootstrapHandoffToken...` |
| 810 | fn | filteredBootstrapHandoffScopes | (private) | `private func filteredBootstrapHandoffScopes(rol...` |
| 830 | fn | resolveConnectScopes | (private) | `private func resolveConnectScopes(     role: St...` |
| 851 | fn | persistBootstrapHandoffToken | (private) | `@discardableResult   private func persistBootst...` |
| 872 | fn | persistIssuedDeviceToken | (private) | `private func persistIssuedDeviceToken(     auth...` |
| 902 | fn | handleConnectResponse | (private) | `private func handleConnectResponse(     _ res: ...` |
| 1019 | fn | deliverPushIfCurrent | (private) | `private func deliverPushIfCurrent(     _ push: ...` |
| 1029 | fn | currentIssuedDeviceAuthRoles | pub | `public func currentIssuedDeviceAuthRoles() -> S...` |
| 1037 | mod | extension GatewayChannelActor | (internal) | - |
| 1038 | fn | listen | (private) | `private func listen(connectionGeneration: UInt64)` |
| 1057 | fn | handleReceiveFailure | (private) | `private func handleReceiveFailure(     _ err: E...` |
| 1073 | fn | transitionToDisconnected | (private) | `private func transitionToDisconnected(     reas...` |
| 1110 | fn | isConnected | (private) | `private func isConnected(connectionGeneration: ...` |
| 1116 | fn | handle | (private) | `private func handle(     _ msg: URLSessionWebSo...` |
| 1158 | fn | waitForConnectChallenge | (private) | `private func waitForConnectChallenge(task: WebS...` |
| 1179 | fn | waitForConnectResponse | (private) | `private func waitForConnectResponse(     reqId:...` |
| 1200 | fn | isCurrentConnectAttempt | (private) | `private func isCurrentConnectAttempt(_ attemptI...` |
| 1205 | fn | ensureCurrentConnectAttempt | (private) | `private func ensureCurrentConnectAttempt(_ atte...` |
| 1220 | fn | startTickWatchdog | (private) | `private func startTickWatchdog(connectionGenera...` |
| 1228 | fn | watchTicks | (private) | `private func watchTicks(connectionGeneration: U...` |
| 1252 | fn | scheduleReconnect | (private) | `private func scheduleReconnect(after connection...` |
| 1285 | fn | shouldRetryWithStoredDeviceToken | (private) | `private func shouldRetryWithStoredDeviceToken( ...` |
| 1310 | fn | shouldPauseReconnectAfterAuthFailure | (private) | `private func shouldPauseReconnectAfterAuthFailu...` |
| 1325 | fn | shouldClearStoredDeviceTokenAfterRetry | (private) | `private func shouldClearStoredDeviceTokenAfterR...` |
| 1332 | fn | isTrustedDeviceRetryEndpoint | (private) | `private func isTrustedDeviceRetryEndpoint() -> ...` |
| 1349 | fn | isTrustedDeviceRetryLoopbackHost | (private) | `private static func isTrustedDeviceRetryLoopbac...` |
| 1366 | fn | request | pub | `public func request(     method: String,     pa...` |
| 1395 | fn | request | pub | `public func request(     method: String,     pa...` |
| 1414 | fn | currentConnectionGeneration | pub | `public func currentConnectionGeneration() -> UI...` |
| 1421 | fn | request | (private) | `private func request(     method: String,     p...` |
| 1505 | fn | send | pub | `public func send(method: String, params: [Strin...` |
| 1519 | fn | send | pub | `public func send(     method: String,     param...` |
| 1532 | fn | send | (private) | `private func send(     method: String,     para...` |
| 1563 | fn | wrap | (private) | `private func wrap(_ error: Error, context: Stri...` |
| 1586 | fn | connectOrThrow | (private) | `private func connectOrThrow(context: String) as...` |
| 1594 | fn | encodeRequest | (private) | `private func encodeRequest(     method: String,...` |
| 1623 | fn | failPending | (private) | `private func failPending(_ error: Error) async` |
| 1631 | fn | timeoutRequest | (private) | `private func timeoutRequest(id: String, timeout...` |
| 1640 | fn | cancelRequest | (private) | `private func cancelRequest(id: String)` |
| 1645 | fn | cancelConnectWaiter | (private) | `private func cancelConnectWaiter(id: UUID)` |

## Public API

### `GatewayChannelActor`

```
actor GatewayChannelActor
```

**Line:** 37 | **Kind:** class

### `authSource`

```
public func authSource() -> GatewayAuthSource
```

**Line:** 133 | **Kind:** fn

### `authBinding`

```
public func authBinding(ifCurrentConnectionGeneration expectedGeneration: UInt64) -> GatewayAuthBinding?
```

**Line:** 137 | **Kind:** fn

### `shutdown`

```
public func shutdown() async
```

**Line:** 167 | **Kind:** fn

### `connect`

```
public func connect() async throws
```

**Line:** 254 | **Kind:** fn

### `currentIssuedDeviceAuthRoles`

```
public func currentIssuedDeviceAuthRoles() -> Set<String>
```

**Line:** 1029 | **Kind:** fn

### `request`

```
public func request(
        method: String,
        params: [String: AnyCodable]?,
        timeoutMs: Double? = nil) async throws -> Data
```

**Line:** 1366 | **Kind:** fn

### `request`

```
public func request(
        method: String,
        params: [String: AnyCodable]?,
        timeoutMs: Double? = nil,
        ifCurrentConnectionGeneration expectedGeneration: UInt64) async throws -> Data
```

**Line:** 1395 | **Kind:** fn

### `currentConnectionGeneration`

```
public func currentConnectionGeneration() -> UInt64?
```

**Line:** 1414 | **Kind:** fn

### `send`

```
public func send(method: String, params: [String: AnyCodable]?) async throws
```

**Line:** 1505 | **Kind:** fn

### `send`

```
public func send(
        method: String,
        params: [String: AnyCodable]?,
        ifCurrentConnectionGeneration expectedGeneration: UInt64) async throws
```

**Line:** 1519 | **Kind:** fn
