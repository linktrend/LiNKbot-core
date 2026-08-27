# apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift

[← Back to Module](../modules/apps-macos-Tests-OpenClawIPCTests/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1184
- **Language:** Swift
- **Symbols:** 24
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 6 | class | GatewayEndpointSourceGate | (private) | `actor GatewayEndpointSourceGate` |
| 13 | method | init | (internal) | `init(_ source: GatewayEndpointStore.SourceSnaps...` |
| 17 | fn | snapshot | (internal) | `func snapshot() async -> GatewayEndpointStore.S...` |
| 33 | fn | suspendNextRead | (internal) | `func suspendNextRead(returningCapturedSource: B...` |
| 39 | fn | update | (internal) | `func update(_ source: GatewayEndpointStore.Sour...` |
| 43 | fn | waitUntilSuspendedReadStarts | (internal) | `func waitUntilSuspendedReadStarts() async` |
| 50 | fn | releaseSuspendedRead | (internal) | `func releaseSuspendedRead()` |
| 57 | class | GatewayEndpointRouteLookupGate | (private) | `actor GatewayEndpointRouteLookupGate` |
| 61 | fn | lookup | (internal) | `func lookup() async -> RemoteTunnelManager.Route?` |
| 73 | fn | waitUntilStarted | (internal) | `func waitUntilStarted() async` |
| 80 | fn | release | (internal) | `func release()` |
| 87 | class | GatewayEndpointRemoteEnsureGate | (private) | `actor GatewayEndpointRemoteEnsureGate` |
| 95 | method | init | (internal) | `init(route: RemoteTunnelManager.Route)` |
| 99 | fn | routeIfRunning | (internal) | `func routeIfRunning() -> RemoteTunnelManager.Ro...` |
| 109 | fn | isCurrent | (internal) | `func isCurrent(_ route: RemoteTunnelManager.Rou...` |
| 113 | fn | ensure | (internal) | `func ensure() async -> RemoteTunnelManager.Route` |
| 126 | fn | waitUntilLookupCount | (internal) | `func waitUntilLookupCount(_ count: Int) async` |
| 133 | fn | waitUntilEnsureStarts | (internal) | `func waitUntilEnsureStarts() async` |
| 140 | fn | releaseEnsure | (internal) | `func releaseEnsure()` |
| 147 | struct | GatewayEndpointStoreTests | (internal) | `struct GatewayEndpointStoreTests` |
| 148 | fn | makeLaunchAgentSnapshot | (private) | `private func makeLaunchAgentSnapshot(     env: ...` |
| 163 | fn | makeDefaults | (private) | `private func makeDefaults() -> UserDefaults` |
| 170 | fn | source | (private) | `private func source(     mode: AppState.Connect...` |
| 555 | mod | extension GatewayEndpointStoreTests | (internal) | - |
