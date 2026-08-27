# apps/macos/Sources/OpenClaw/GatewayEndpointStore.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1296
- **Language:** Swift
- **Symbols:** 54
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 5 | enum | GatewayEndpointState | (internal) | `enum GatewayEndpointState` |
| 21 | class | GatewayEndpointStore | (internal) | `actor GatewayEndpointStore` |
| 43 | method | init | (internal) | `init(_ mode: AppState.ConnectionMode)` |
| 52 | method | init | (internal) | `init(_ transport: AppState.RemoteTransport)` |
| 128 | fn | admitPrimaryAppLaunch | (internal) | `static func admitPrimaryAppLaunch()` |
| 132 | fn | resolveGatewayPassword | (private) | `private static func resolveGatewayPassword(    ...` |
| 188 | fn | resolveConfigPassword | (private) | `private static func resolveConfigPassword(     ...` |
| 213 | fn | resolveGatewayToken | (private) | `private static func resolveGatewayToken(     is...` |
| 262 | fn | resolveConfigToken | (private) | `private static func resolveConfigToken(     isR...` |
| 281 | fn | resolveLocalConfigAuthString | (private) | `private static func resolveLocalConfigAuthStrin...` |
| 302 | fn | envSecretRefName | (private) | `private static func envSecretRefName(_ value: S...` |
| 318 | fn | isValidEnvSecretRefID | (private) | `private static func isValidEnvSecretRefID(_ val...` |
| 322 | fn | warnEnvOverrideOnce | (private) | `private static func warnEnvOverrideOnce(     ki...` |
| 356 | method | init | (internal) | `init(deps: Deps = .live)` |
| 409 | fn | subscribe | (internal) | `func subscribe(bufferingNewest: Int = 1) -> Asy...` |
| 422 | fn | refresh | (internal) | `func refresh() async` |
| 426 | fn | refreshIfCurrent | (private) | `private func refreshIfCurrent() async -> (sourc...` |
| 442 | fn | currentSourceSnapshot | (private) | `private func currentSourceSnapshot() async thro...` |
| 449 | fn | adoptSource | (private) | `private func adoptSource(_ source: SourceSnapsh...` |
| 458 | fn | sourceIsCurrent | (private) | `private func sourceIsCurrent(_ source: SourceSn...` |
| 477 | fn | resolveSource | (private) | `private func resolveSource(_ source: SourceSnap...` |
| 537 | fn | ensureRemoteControlTunnel | (internal) | `func ensureRemoteControlTunnel() async throws -...` |
| 578 | fn | requireConfig | (internal) | `func requireConfig() async throws -> GatewayCon...` |
| 585 | fn | requireEndpoint | (internal) | `func requireEndpoint() async throws -> GatewayC...` |
| 630 | fn | cancelRemoteEnsure | (private) | `private func cancelRemoteEnsure()` |
| 635 | fn | kickRemoteEnsureIfNeeded | (private) | `@discardableResult   private func kickRemoteEns...` |
| 654 | fn | ensureRemoteEndpoint | (private) | `private func ensureRemoteEndpoint(     source: ...` |
| 751 | fn | matchingReadyRemoteEndpoint | (private) | `private func matchingReadyRemoteEndpoint(     r...` |
| 775 | fn | removeSubscriber | (private) | `private func removeSubscriber(_ id: UUID)` |
| 779 | fn | setState | (private) | `private func setState(_ next: GatewayEndpointSt...` |
| 811 | fn | setReady | (private) | `@discardableResult   private func setReady(    ...` |
| 845 | fn | maybeFallbackToTailnet | (internal) | `func maybeFallbackToTailnet(from currentURL: UR...` |
| 887 | mod | extension GatewayEndpointStore | (internal) | - |
| 894 | fn | liveSourceSnapshot | (private) | `private static func liveSourceSnapshot() async ...` |
| 909 | fn | liveSourceSnapshot | (private) | `private static func liveSourceSnapshot(     app...` |
| 1004 | fn | effectiveSourceMode | (private) | `private static func effectiveSourceMode(     ap...` |
| 1013 | fn | resolveGatewayPort | (private) | `private static func resolveGatewayPort(     roo...` |
| 1043 | fn | resolveGatewayBindMode | (private) | `private static func resolveGatewayBindMode(    ...` |
| 1064 | fn | resolveGatewayCustomBindHost | (private) | `private static func resolveGatewayCustomBindHos...` |
| 1074 | fn | resolveGatewayScheme | (private) | `private static func resolveGatewayScheme(     r...` |
| 1092 | fn | resolveLocalGatewayHost | (private) | `private static func resolveLocalGatewayHost(   ...` |
| 1111 | mod | extension GatewayEndpointStore | (internal) | - |
| 1112 | fn | localConfig | (internal) | `static func localConfig() -> GatewayConnection....` |
| 1119 | fn | localConfig | (internal) | `static func localConfig(     root: [String: Any...` |
| 1149 | fn | normalizeDashboardPath | (private) | `private static func normalizeDashboardPath(_ ra...` |
| 1157 | fn | localControlUiBasePath | (private) | `private static func localControlUiBasePath() ->...` |
| 1167 | fn | dashboardURL | (internal) | `static func dashboardURL(     for config: Gatew...` |
| 1223 | mod | extension GatewayEndpointStore | (internal) | - |
| 1224 | fn | _testLiveSourceSnapshot | (internal) | `@MainActor   static func _testLiveSourceSnapsho...` |
| 1242 | fn | _testEffectiveSourceMode | (internal) | `static func _testEffectiveSourceMode(     appMo...` |
| 1253 | fn | _testResolveGatewayPassword | (internal) | `static func _testResolveGatewayPassword(     is...` |
| 1262 | fn | _testResolveGatewayToken | (internal) | `static func _testResolveGatewayToken(     isRem...` |
| 1271 | fn | _testResolveLocalGatewayHost | (internal) | `static func _testResolveLocalGatewayHost(     b...` |
| 1282 | fn | _testLocalConfig | (internal) | `static func _testLocalConfig(     root: [String...` |
