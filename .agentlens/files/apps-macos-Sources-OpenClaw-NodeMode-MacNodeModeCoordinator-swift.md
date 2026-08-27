# apps/macos/Sources/OpenClaw/NodeMode/MacNodeModeCoordinator.swift

[← Back to Module](../modules/apps-macos-Sources-OpenClaw-NodeMode/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1015
- **Language:** Swift
- **Symbols:** 40
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 6 | struct | MacNodeGatewayTLSSessionCache | (internal) | `struct MacNodeGatewayTLSSessionCache` |
| 13 | method | init | (internal) | `init(url: URL, params: GatewayTLSParams)` |
| 43 | class | MacNodeModeCoordinator | (internal) | `class MacNodeModeCoordinator` |
| 70 | fn | prepareNodeIdentityProfile | (internal) | `static func prepareNodeIdentityProfile(isExisti...` |
| 76 | fn | resolveNodeIdentityProfile | (internal) | `static func resolveNodeIdentityProfile(     def...` |
| 199 | fn | start | (internal) | `func start()` |
| 224 | fn | stop | (internal) | `func stop()` |
| 230 | fn | stopAndWait | (internal) | `func stopAndWait() async` |
| 236 | fn | cancelCoordinatorTasks | (private) | `private func cancelCoordinatorTasks()` |
| 245 | fn | setPreferredGatewayStableID | (internal) | `func setPreferredGatewayStableID(     _ stableI...` |
| 260 | fn | refresh | (internal) | `func refresh()` |
| 267 | fn | currentCanvasPluginSurfaceRoute | (internal) | `func currentCanvasPluginSurfaceRoute() async ->...` |
| 271 | fn | refreshCanvasPluginSurfaceRoute | (internal) | `func refreshCanvasPluginSurfaceRoute(replacing ...` |
| 275 | fn | refresh | (private) | `private func refresh(isPaused: Bool, computerCo...` |
| 294 | fn | invalidateEndpointAttempt | (private) | `private func invalidateEndpointAttempt()` |
| 298 | fn | revokeRouteAuthority | (private) | `private func revokeRouteAuthority()` |
| 307 | fn | enqueueRouteInvalidation | (private) | `@discardableResult   private func enqueueRouteI...` |
| 334 | fn | endpointTransitionRequiresDisconnect | (internal) | `static func endpointTransitionRequiresDisconnec...` |
| 429 | fn | effectiveEndpoint | (private) | `private static func effectiveEndpoint(from stat...` |
| 439 | fn | invalidateRuntimeRoute | (private) | `private func invalidateRuntimeRoute(authorityGe...` |
| 446 | fn | awaitStableRouteInvalidationDrain | (private) | `private func awaitStableRouteInvalidationDrain(...` |
| 456 | fn | run | (private) | `private func run() async` |
| 524 | fn | prepareConnectionAttempt | (private) | `private func prepareConnectionAttempt(     conf...` |
| 608 | fn | connect | (private) | `private func connect(_ attempt: ConnectionAttem...` |
| 715 | fn | validatePostConnect | (private) | `private func validatePostConnect(_ attempt: Con...` |
| 741 | fn | scheduleReconnectProbe | (private) | `private func scheduleReconnectProbe()` |
| 752 | fn | routeAuthorityAllowsInvoke | (private) | `private func routeAuthorityAllowsInvoke(_ captu...` |
| 762 | fn | waitForRouteInvalidationForTesting | (internal) | `func waitForRouteInvalidationForTesting(     on...` |
| 767 | fn | refreshForTesting | (internal) | `func refreshForTesting(isPaused: Bool, computer...` |
| 773 | fn | enqueueRouteInvalidationForTesting | (internal) | `func enqueueRouteInvalidationForTesting()` |
| 777 | fn | generationsForTesting | (internal) | `func generationsForTesting() -> (endpointAttemp...` |
| 784 | fn | routeAuthorityAllowsInvokeForTesting | (internal) | `func routeAuthorityAllowsInvokeForTesting(_ cap...` |
| 793 | fn | cancelReconnectProbe | (private) | `private func cancelReconnectProbe()` |
| 818 | fn | currentCaps | (private) | `private func currentCaps(     browserControlEna...` |
| 837 | fn | currentPermissions | (private) | `private func currentPermissions() async -> [Str...` |
| 842 | fn | currentCommands | (private) | `private func currentCommands(caps: [String]) ->...` |
| 846 | fn | startNodeHostWorkerIfConfigured | (private) | `private func startNodeHostWorkerIfConfigured() ...` |
| 887 | fn | autoRepairStaleTLSPinIfNeeded | (private) | `private func autoRepairStaleTLSPinIfNeeded(erro...` |
| 920 | fn | buildSessionBox | (private) | `private func buildSessionBox(url: URL, connecti...` |
| 941 | mod | extension MacNodeModeCoordinator | (internal) | - |
