# apps/shared/OpenClawKit/Tests/OpenClawKitTests/GatewayNodeSessionTests.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Tests-OpenClawKitTests/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3617
- **Language:** Swift
- **Symbols:** 73
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 6 | mod | extension NSLock | (internal) | - |
| 14 | class | InvokeCancellationFlag | (private) | `class InvokeCancellationFlag` |
| 17 | fn | markCancelled | (internal) | `func markCancelled()` |
| 21 | fn | isCancelled | (internal) | `func isCancelled() -> Bool` |
| 27 | class | StringCapture | (private) | `actor StringCapture` |
| 29 | fn | set | (internal) | `func set(_ value: String?)` |
| 33 | fn | get | (internal) | `func get() -> String?` |
| 39 | class | DoubleCallbackPingWebSocketTask | (private) | `class DoubleCallbackPingWebSocketTask` |
| 41 | method | init | (internal) | `init(callbacks: [Error?])` |
| 49 | fn | resume | (internal) | `func resume()` |
| 51 | fn | cancel | (internal) | `func cancel(with closeCode: URLSessionWebSocket...` |
| 55 | fn | send | (internal) | `func send(_ message: URLSessionWebSocketTask.Me...` |
| 59 | fn | sendPing | (internal) | `func sendPing(pongReceiveHandler: @escaping @Se...` |
| 65 | fn | receive | (internal) | `func receive() async throws -> URLSessionWebSoc...` |
| 69 | fn | receive | (internal) | `func receive(     completionHandler: @escaping ...` |
| 77 | class | FirstCancelGate | (private) | `class FirstCancelGate` |
| 82 | fn | blockIfNeeded | (internal) | `func blockIfNeeded()` |
| 97 | fn | hasStarted | (internal) | `func hasStarted() -> Bool` |
| 103 | fn | release | (internal) | `func release()` |
| 112 | class | FakeGatewayWebSocketTask | (private) | `class FakeGatewayWebSocketTask` |
| 129 | method | init | (internal) | `init(     helloAuth: [String: Any]? = nil,     ...` |
| 150 | fn | resume | (internal) | `func resume()` |
| 154 | fn | cancel | (internal) | `func cancel(with closeCode: URLSessionWebSocket...` |
| 168 | fn | send | (internal) | `func send(_ message: URLSessionWebSocketTask.Me...` |
| 195 | fn | latestConnectAuth | (internal) | `func latestConnectAuth() -> [String: Any]?` |
| 199 | fn | latestConnectDevice | (internal) | `func latestConnectDevice() -> [String: Any]?` |
| 203 | fn | sentRequestCount | (internal) | `func sentRequestCount(method: String) -> Int` |
| 207 | fn | sentRequests | (internal) | `func sentRequests(method: String) -> [[String: ...` |
| 213 | fn | hasPendingReceiveHandler | (internal) | `func hasPendingReceiveHandler() -> Bool` |
| 217 | fn | sendPing | (internal) | `func sendPing(pongReceiveHandler: @escaping @Se...` |
| 221 | fn | receive | (internal) | `func receive() async throws -> URLSessionWebSoc...` |
| 257 | fn | receive | (internal) | `func receive(     completionHandler: @escaping ...` |
| 263 | fn | emitReceiveFailure | (internal) | `func emitReceiveFailure()` |
| 275 | fn | emitInvokeRequest | (internal) | `func emitInvokeRequest(id: String, command: Str...` |
| 283 | fn | emitInvokeRequest | (internal) | `func emitInvokeRequest(     id: String,     com...` |
| 303 | fn | emitResponse | (internal) | `func emitResponse(id: String, payload: [String:...` |
| 321 | fn | connectChallengeData | (private) | `private static func connectChallengeData(nonce:...` |
| 330 | fn | connectOkData | (private) | `private static func connectOkData(     id: Stri...` |
| 387 | fn | connectErrorData | (private) | `private static func connectErrorData(id: String...` |
| 397 | fn | invokeRequestData | (private) | `private static func invokeRequestData(     id: ...` |
| 422 | class | FakeGatewayWebSocketSession | (private) | `class FakeGatewayWebSocketSession` |
| 436 | method | init | (internal) | `init(     helloAuth: [String: Any]? = nil,     ...` |
| 454 | fn | snapshotMakeCount | (internal) | `func snapshotMakeCount() -> Int` |
| 458 | fn | latestTask | (internal) | `func latestTask() -> FakeGatewayWebSocketTask?` |
| 462 | fn | latestRequest | (internal) | `func latestRequest() -> URLRequest?` |
| 466 | fn | makeWebSocketTask | (internal) | `func makeWebSocketTask(url: URL) -> WebSocketTa...` |
| 470 | fn | makeWebSocketTask | (internal) | `func makeWebSocketTask(request: URLRequest) -> ...` |
| 488 | class | MutableHeaderValue | (private) | `class MutableHeaderValue` |
| 492 | method | init | (internal) | `init(value: String)` |
| 496 | fn | get | (internal) | `func get() -> String` |
| 503 | fn | set | (internal) | `func set(_ value: String)` |
| 507 | fn | readCount | (internal) | `func readCount() -> Int` |
| 513 | class | SeqGapProbe | (private) | `actor SeqGapProbe` |
| 515 | fn | mark | (internal) | `func mark()` |
| 518 | fn | value | (internal) | `func value() -> Bool` |
| 524 | class | DisconnectProbe | (private) | `actor DisconnectProbe` |
| 526 | fn | record | (internal) | `func record(_ reason: String)` |
| 530 | fn | values | (internal) | `func values() -> [String]` |
| 536 | class | AsyncGate | (private) | `actor AsyncGate` |
| 540 | fn | wait | (internal) | `func wait() async` |
| 548 | fn | hasStarted | (internal) | `func hasStarted() -> Bool` |
| 552 | fn | release | (internal) | `func release()` |
| 563 | class | ComputerInvokeProbe | (private) | `actor ComputerInvokeProbe` |
| 567 | fn | execute | (internal) | `func execute(_ request: BridgeInvokeRequest) as...` |
| 582 | fn | count | (internal) | `func count() -> Int` |
| 586 | fn | release | (internal) | `func release()` |
| 597 | class | NodeInvokeControlProbe | (private) | `actor NodeInvokeControlProbe` |
| 600 | fn | recordInput | (internal) | `func recordInput(_ input: NodeInvokeInputEvent)` |
| 604 | fn | recordCancellation | (internal) | `func recordCancellation(_ invokeId: String)` |
| 608 | fn | values | (internal) | `func values() -> ([String], [String])` |
| 613 | fn | nodeInvokePush | (private) | `private func nodeInvokePush(id: String, command...` |
| 629 | struct | GatewayNodeSessionTests | (internal) | `struct GatewayNodeSessionTests` |
| 3311 | fn | retryAuth | (internal) | `func retryAuth(for rawURL: String) async throws...` |
