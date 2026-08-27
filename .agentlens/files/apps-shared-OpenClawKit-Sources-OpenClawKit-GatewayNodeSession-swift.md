# apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayNodeSession.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Sources-OpenClawKit/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1628
- **Language:** Swift
- **Symbols:** 90
- **Public symbols:** 31

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 6 | struct | NodeInvokeRequestPayload | (private) | `struct NodeInvokeRequestPayload` |
| 15 | struct | NodeInvokeCancelPayload | (private) | `struct NodeInvokeCancelPayload` |
| 21 | struct | GatewayNodeSessionRoute | pub | `struct GatewayNodeSessionRoute` |
| 28 | struct | GatewayCanvasHostRoute | pub | `struct GatewayCanvasHostRoute` |
| 31 | method | init | pub | `public init(url: String, tlsFingerprintSHA256: ...` |
| 40 | enum | GatewayNodeSessionRequestError | pub | `enum GatewayNodeSessionRequestError` |
| 45 | struct | GatewayServerEventSubscription | pub | `struct GatewayServerEventSubscription` |
| 48 | method | init | (private) | `fileprivate init(     events: AsyncStream<Event...` |
| 58 | fn | cancel | pub | `public func cancel()` |
| 63 | struct | GatewayNodeSessionCredentials | pub | `struct GatewayNodeSessionCredentials` |
| 67 | method | init | pub | `public init(     token: String? = nil,     boot...` |
| 79 | class | GatewayNodeSession | pub | `actor GatewayNodeSession` |
| 111 | method | init | (internal) | `init(receiptScope: String, idempotencyKey: String)` |
| 199 | method | init | pub | `public init()` |
| 201 | fn | connectOptionsKey | (private) | `private func connectOptionsKey(_ options: Gatew...` |
| 203 | fn | sorted | (internal) | `func sorted(_ values: [String]) -> String` |
| 246 | fn | connect | pub | `public func connect(     url: URL,     credenti...` |
| 376 | fn | connect | pub | `public func connect(     url: URL,     token: S...` |
| 407 | fn | disconnect | pub | `public func disconnect() async` |
| 430 | fn | clearActiveRoute | (private) | `private func clearActiveRoute()` |
| 447 | fn | enqueueRouteTeardown | (private) | `private func enqueueRouteTeardown(     channel:...` |
| 486 | fn | enqueueLifecycleCallback | (private) | `private func enqueueLifecycleCallback(     imme...` |
| 506 | fn | clearLifecycleCallbackBarrier | (private) | `private func clearLifecycleCallbackBarrier(_ id...` |
| 511 | fn | finishLifecycleCallback | (private) | `private func finishLifecycleCallback(_ id: UUID)` |
| 516 | fn | isExecutingLifecycleCallback | (private) | `private func isExecutingLifecycleCallback() -> ...` |
| 521 | fn | currentIssuedDeviceAuthRoles | pub | `public func currentIssuedDeviceAuthRoles() asyn...` |
| 526 | fn | currentCanvasHostUrl | pub | `public func currentCanvasHostUrl() -> String?` |
| 530 | fn | currentCanvasHostRoute | pub | `public func currentCanvasHostRoute() -> Gateway...` |
| 540 | fn | refreshCanvasHostRoute | pub | `@discardableResult   public func refreshCanvasH...` |
| 548 | fn | refreshPluginSurfaceUrl | pub | `@discardableResult   public func refreshPluginS...` |
| 561 | fn | refreshPluginSurfaceUrl | pub | `@discardableResult   public func refreshPluginS...` |
| 570 | fn | refreshPluginSurfaceUrl | (private) | `private func refreshPluginSurfaceUrl(     surfa...` |
| 634 | fn | awaitPluginSurfaceRefresh | (private) | `private func awaitPluginSurfaceRefresh(_ task: ...` |
| 650 | fn | releasePluginSurfaceRefreshWaiter | (private) | `private func releasePluginSurfaceRefreshWaiter(...` |
| 664 | fn | refreshCanvasHostUrl | pub | `@discardableResult   public func refreshCanvasH...` |
| 673 | fn | refreshCanvasHostUrl | pub | `@discardableResult   public func refreshCanvasH...` |
| 677 | fn | currentRemoteAddress | pub | `public func currentRemoteAddress() -> String?` |
| 687 | fn | currentRoute | pub | `public func currentRoute(ifGatewayID expectedGa...` |
| 708 | fn | supportsServerCapability | pub | `public func supportsServerCapability(     _ cap...` |
| 719 | fn | supportsServerMethod | pub | `public func supportsServerMethod(     _ method:...` |
| 730 | fn | waitForCurrentMainSessionKey | pub | `public func waitForCurrentMainSessionKey(     i...` |
| 741 | fn | sendEvent | pub | `@discardableResult   public func sendEvent(    ...` |
| 766 | fn | request | pub | `public func request(     method: String,     pa...` |
| 782 | fn | request | pub | `public func request(     method: String,     pa...` |
| 814 | fn | subscribeServerEvents | pub | `public func subscribeServerEvents(bufferingNewe...` |
| 818 | fn | makeServerEventSubscription | pub | `public func makeServerEventSubscription(     bu...` |
| 841 | mod | extension GatewayNodeSession | (internal) | - |
| 842 | fn | handlePush | (private) | `private func handlePush(     _ push: GatewayPus...` |
| 881 | fn | resetConnectionState | (private) | `private func resetConnectionState()` |
| 891 | fn | handleChannelDisconnected | (private) | `private func handleChannelDisconnected(     _ r...` |
| 927 | fn | markSnapshotReceived | (private) | `private func markSnapshotReceived()` |
| 933 | fn | waitForSnapshot | (private) | `private func waitForSnapshot(timeoutMs: Int) as...` |
| 948 | fn | waitForSnapshot | (private) | `private func waitForSnapshot() async -> Bool` |
| 957 | fn | timeoutSnapshotWaiters | (private) | `private func timeoutSnapshotWaiters()` |
| 962 | fn | drainSnapshotWaiters | (private) | `private func drainSnapshotWaiters(returning val...` |
| 972 | fn | drainSnapshotReadyWaiters | (private) | `private func drainSnapshotReadyWaiters(returnin...` |
| 982 | fn | notifyConnectedIfNeeded | (private) | `private func notifyConnectedIfNeeded(admissionG...` |
| 1003 | fn | normalizeCanvasHostUrl | (private) | `private func normalizeCanvasHostUrl(_ raw: Stri...` |
| 1007 | fn | normalizePluginSurfaceUrls | (private) | `private func normalizePluginSurfaceUrls(_ raw: ...` |
| 1017 | fn | pluginSurfaceRefreshMethod | (private) | `private func pluginSurfaceRefreshMethod() -> St...` |
| 1025 | fn | requestPluginSurfaceRefresh | (private) | `private func requestPluginSurfaceRefresh(     c...` |
| 1064 | fn | handleEvent | (private) | `private func handleEvent(     _ evt: EventFrame...` |
| 1126 | fn | handleInvokeRequest | (private) | `private func handleInvokeRequest(     request: ...` |
| 1188 | fn | invokeIfCurrentRoute | (internal) | `func invokeIfCurrentRoute(     _ request: Bridg...` |
| 1218 | fn | isCurrentRoute | (private) | `private func isCurrentRoute(_ route: GatewayNod...` |
| 1223 | fn | admitSocketGeneration | (private) | `private func admitSocketGeneration(_ socketGene...` |
| 1236 | fn | retireSocketGeneration | (private) | `private func retireSocketGeneration(_ socketGen...` |
| 1255 | fn | _test_admissionGeneration | (internal) | `func _test_admissionGeneration() -> UInt64` |
| 1260 | fn | _test_notifyConnectedIfNeeded | (internal) | `func _test_notifyConnectedIfNeeded(admissionGen...` |
| 1265 | fn | _test_handlePush | (internal) | `func _test_handlePush(_ push: GatewayPush, sock...` |
| 1273 | fn | _test_handleChannelDisconnected | (internal) | `func _test_handleChannelDisconnected(_ reason: ...` |
| 1281 | fn | _test_waitForLifecycleCallbacks | (internal) | `func _test_waitForLifecycleCallbacks() async` |
| 1288 | fn | _test_broadcastServerEvent | (internal) | `func _test_broadcastServerEvent(_ event: EventF...` |
| 1293 | fn | cancelActiveInvokes | (private) | `private func cancelActiveInvokes(     admission...` |
| 1316 | fn | staleRouteInvokeResponse | (private) | `private static func staleRouteInvokeResponse(re...` |
| 1325 | fn | invokeWithComputerReceipt | (private) | `private func invokeWithComputerReceipt(     req...` |
| 1429 | fn | invokeComputerWithReceiptForTesting | (internal) | `func invokeComputerWithReceiptForTesting(     r...` |
| 1458 | fn | computerReceiptJoinCountForTesting | (internal) | `func computerReceiptJoinCountForTesting(     id...` |
| 1469 | fn | computerInvokeReceiptScope | (private) | `private func computerInvokeReceiptScope() -> St...` |
| 1478 | fn | computerInvokeFingerprint | (private) | `private static func computerInvokeFingerprint(_...` |
| 1485 | fn | rebindInvokeResponse | (private) | `private static func rebindInvokeResponse(     _...` |
| 1498 | fn | isStaleRouteInvokeResponse | (private) | `private static func isStaleRouteInvokeResponse(...` |
| 1504 | fn | discardRetryableComputerInvokeReceipt | (private) | `private func discardRetryableComputerInvokeRece...` |
| 1521 | fn | markComputerInvokeOperationSettled | (private) | `private func markComputerInvokeOperationSettled...` |
| 1532 | fn | makeComputerInvokeReceiptCapacity | (private) | `private func makeComputerInvokeReceiptCapacity(...` |
| 1549 | fn | decodeInvokeRequest | (private) | `private func decodeInvokeRequest(from payload: ...` |
| 1565 | fn | sendInvokeResult | (private) | `private func sendInvokeResult(     request: Nod...` |
| 1604 | fn | decodeParamsJSON | (private) | `private func decodeParamsJSON(     _ paramsJSON...` |
| 1616 | fn | broadcastServerEvent | (private) | `private func broadcastServerEvent(_ evt: EventF...` |
| 1624 | fn | removeServerEventSubscriber | (private) | `private func removeServerEventSubscriber(_ id: ...` |

## Public API

### `GatewayNodeSessionRoute`

```
struct GatewayNodeSessionRoute
```

**Line:** 21 | **Kind:** struct

### `GatewayCanvasHostRoute`

```
struct GatewayCanvasHostRoute
```

**Line:** 28 | **Kind:** struct

### `init`

```
public init(url: String, tlsFingerprintSHA256: String?)
```

**Line:** 31 | **Kind:** method

### `GatewayNodeSessionRequestError`

```
enum GatewayNodeSessionRequestError
```

**Line:** 40 | **Kind:** enum

### `GatewayServerEventSubscription`

```
struct GatewayServerEventSubscription
```

**Line:** 45 | **Kind:** struct

### `cancel`

```
public func cancel()
```

**Line:** 58 | **Kind:** fn

### `GatewayNodeSessionCredentials`

```
struct GatewayNodeSessionCredentials
```

**Line:** 63 | **Kind:** struct

### `init`

```
public init(
        token: String? = nil,
        bootstrapToken: String? = nil,
        password: String? = nil)
```

**Line:** 67 | **Kind:** method

### `GatewayNodeSession`

```
actor GatewayNodeSession
```

**Line:** 79 | **Kind:** class

### `init`

```
public init()
```

**Line:** 199 | **Kind:** method

### `connect`

```
public func connect(
        url: URL,
        credentials: GatewayNodeSessionCredentials,
        connectOptions: GatewayConnectOptions,
        sessionBox: WebSocketSessionBox?,
        extraHeadersProvider: (@Sendable () -> [String: String])? = nil,
        onConnected: @escaping @Sendable () async -> Void,
        onDisconnected: @escaping @Sendable (String) async -> Void,
        onInvoke: @escaping @Sendable (BridgeInvokeRequest) async -> BridgeInvokeResponse,
        onInvokeInput: (@Sendable (NodeInvokeInputEvent) async -> Void)? = nil,
        onInvokeCancel: (@Sendable (String) async -> Void)? = nil,
        onRouteInvalidated: (@Sendable () async -> Void)? = nil) async throws
```

**Line:** 246 | **Kind:** fn

### `connect`

```
public func connect(
        url: URL,
        token: String? = nil,
        bootstrapToken: String? = nil,
        password: String? = nil,
        connectOptions: GatewayConnectOptions,
        sessionBox: WebSocketSessionBox?,
        extraHeadersProvider: (@Sendable () -> [String: String])? = nil,
        onConnected: @escaping @Sendable () async -> Void,
        onDisconnected: @escaping @Sendable (String) async -> Void,
        onInvoke: @escaping @Sendable (BridgeInvokeRequest) async -> BridgeInvokeResponse,
        onInvokeInput: (@Sendable (NodeInvokeInputEvent) async -> Void)? = nil,
        onInvokeCancel: (@Sendable (String) async -> Void)? = nil,
        onRouteInvalidated: (@Sendable () async -> Void)? = nil) async throws
```

**Line:** 376 | **Kind:** fn

### `disconnect`

```
public func disconnect() async
```

**Line:** 407 | **Kind:** fn

### `currentIssuedDeviceAuthRoles`

```
public func currentIssuedDeviceAuthRoles() async -> Set<String>
```

**Line:** 521 | **Kind:** fn

### `currentCanvasHostUrl`

```
public func currentCanvasHostUrl() -> String?
```

**Line:** 526 | **Kind:** fn

### `currentCanvasHostRoute`

```
public func currentCanvasHostRoute() -> GatewayCanvasHostRoute?
```

**Line:** 530 | **Kind:** fn

### `refreshCanvasHostRoute`

```
@discardableResult
    public func refreshCanvasHostRoute(replacing observedURL: String?) async -> GatewayCanvasHostRoute?
```

**Line:** 540 | **Kind:** fn

### `refreshPluginSurfaceUrl`

```
@discardableResult
    public func refreshPluginSurfaceUrl(
        surface: String,
        replacing observedURL: String?) async -> String?
```

**Line:** 548 | **Kind:** fn

### `refreshPluginSurfaceUrl`

```
@discardableResult
    public func refreshPluginSurfaceUrl(surface: String, timeoutSeconds: Int = 8) async -> String?
```

**Line:** 561 | **Kind:** fn

### `refreshCanvasHostUrl`

```
@discardableResult
    public func refreshCanvasHostUrl(
        replacing observedURL: String?) async -> String?
```

**Line:** 664 | **Kind:** fn

### `refreshCanvasHostUrl`

```
@discardableResult
    public func refreshCanvasHostUrl(timeoutSeconds: Int = 8) async -> String?
```

**Line:** 673 | **Kind:** fn

### `currentRemoteAddress`

```
public func currentRemoteAddress() -> String?
```

**Line:** 677 | **Kind:** fn

### `currentRoute`

```
public func currentRoute(ifGatewayID expectedGatewayID: String? = nil) async -> GatewayNodeSessionRoute?
```

**Line:** 687 | **Kind:** fn

### `supportsServerCapability`

```
public func supportsServerCapability(
        _ capability: GatewayServerCapability,
        ifCurrentRoute expectedRoute: GatewayNodeSessionRoute) -> Bool?
```

**Line:** 708 | **Kind:** fn

### `supportsServerMethod`

```
public func supportsServerMethod(
        _ method: String,
        ifCurrentRoute expectedRoute: GatewayNodeSessionRoute) -> Bool?
```

**Line:** 719 | **Kind:** fn

### `waitForCurrentMainSessionKey`

```
public func waitForCurrentMainSessionKey(
        ifCurrentRoute expectedRoute: GatewayNodeSessionRoute) async -> String?
```

**Line:** 730 | **Kind:** fn

### `sendEvent`

```
@discardableResult
    public func sendEvent(
        event: String,
        payloadJSON: String?,
        ifCurrentRoute expectedRoute: GatewayNodeSessionRoute? = nil) async -> Bool
```

**Line:** 741 | **Kind:** fn

### `request`

```
public func request(
        method: String,
        paramsJSON: String?,
        timeoutSeconds: Int = 15,
        ifCurrentRoute expectedRoute: GatewayNodeSessionRoute? = nil,
        distinguishPreDispatchRouteChange: Bool = false) async throws -> Data
```

**Line:** 766 | **Kind:** fn

### `request`

```
public func request(
        method: String,
        params: [String: AnyCodable]?,
        timeoutMs: Double = 15000,
        ifCurrentRoute expectedRoute: GatewayNodeSessionRoute? = nil,
        distinguishPreDispatchRouteChange: Bool = false) async throws -> Data
```

**Line:** 782 | **Kind:** fn

### `subscribeServerEvents`

```
public func subscribeServerEvents(bufferingNewest: Int = 200) -> AsyncStream<EventFrame>
```

**Line:** 814 | **Kind:** fn

### `makeServerEventSubscription`

```
public func makeServerEventSubscription(
        bufferingNewest: Int = 200,
        matching: @escaping @Sendable (EventFrame) -> Bool =
```

**Line:** 818 | **Kind:** fn
