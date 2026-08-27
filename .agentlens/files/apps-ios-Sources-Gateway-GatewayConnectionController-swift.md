# apps/ios/Sources/Gateway/GatewayConnectionController.swift

[← Back to Module](../modules/apps-ios-Sources-Gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1380
- **Language:** Swift
- **Symbols:** 59
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 13 | enum | GatewaySetupRouteProbeBudget | (private) | `enum GatewaySetupRouteProbeBudget` |
| 16 | fn | defaultGatewayTCPReachabilityProbe | (private) | `private func defaultGatewayTCPReachabilityProbe...` |
| 26 | class | GatewayConnectionController | (internal) | `class GatewayConnectionController` |
| 58 | fn | resolvedManualPort | (internal) | `static func resolvedManualPort(host: String, po...` |
| 159 | fn | setDiscoveryDebugLoggingEnabled | (internal) | `func setDiscoveryDebugLoggingEnabled(_ enabled:...` |
| 163 | fn | selectReachableSetupLink | (internal) | `func selectReachableSetupLink(_ link: GatewayCo...` |
| 182 | fn | requestLocalNetworkAccess | (internal) | `func requestLocalNetworkAccess(reason: String, ...` |
| 199 | fn | setScenePhase | (internal) | `func setScenePhase(_ phase: ScenePhase)` |
| 219 | fn | restartDiscovery | (internal) | `func restartDiscovery()` |
| 238 | fn | connectWithDiagnostics | (internal) | `func connectWithDiagnostics(_ gateway: GatewayD...` |
| 241 | fn | discoveredGatewayConnectionAvailability | (internal) | `func discoveredGatewayConnectionAvailability(  ...` |
| 250 | fn | preferredDiscoveredGateway | (internal) | `func preferredDiscoveredGateway() -> GatewayDis...` |
| 256 | fn | connectDiscoveredGateway | (private) | `private func connectDiscoveredGateway(     _ ga...` |
| 368 | fn | connectManual | (internal) | `func connectManual(     host: String,     port:...` |
| 472 | fn | connectActiveGateway | (internal) | `func connectActiveGateway() async` |
| 494 | fn | switchToGateway | (internal) | `func switchToGateway(stableID: String) async ->...` |
| 530 | fn | forgetGateway | (internal) | `@discardableResult   func forgetGateway(stableI...` |
| 592 | fn | waitForPendingForgetCleanup | (private) | `private func waitForPendingForgetCleanup(stable...` |
| 602 | fn | persistActiveGateway | (private) | `private func persistActiveGateway(_ entry: Gate...` |
| 610 | fn | clearDeviceAuthTokens | (private) | `private static func clearDeviceAuthTokens(gatew...` |
| 629 | fn | clearLegacyManualGatewayDefaults | (private) | `private func clearLegacyManualGatewayDefaults(m...` |
| 649 | fn | refreshActiveGatewayRegistrationFromSettings | (internal) | `func refreshActiveGatewayRegistrationFromSettin...` |
| 654 | fn | refreshActiveGatewayRegistrationFromSettingsAsync | (private) | `private func refreshActiveGatewayRegistrationFr...` |
| 675 | fn | clearPendingTrustPrompt | (internal) | `func clearPendingTrustPrompt()` |
| 683 | fn | cancelPendingConnectionAttempts | (internal) | `@discardableResult   func cancelPendingConnecti...` |
| 695 | fn | beginAutoConnectSuppression | (private) | `private func beginAutoConnectSuppression(restor...` |
| 721 | fn | resumeAutoConnect | (internal) | `func resumeAutoConnect(after lease: AutoConnect...` |
| 739 | fn | releaseAutoConnectSuppression | (internal) | `func releaseAutoConnectSuppression(after lease:...` |
| 743 | fn | clearAutoConnectSuppression | (private) | `private func clearAutoConnectSuppression(genera...` |
| 749 | fn | acceptPendingTrustPrompt | (internal) | `func acceptPendingTrustPrompt() async` |
| 804 | fn | declinePendingTrustPrompt | (internal) | `func declinePendingTrustPrompt()` |
| 813 | fn | trustRotatedGatewayCertificate | (internal) | `@discardableResult   func trustRotatedGatewayCe...` |
| 856 | mod | extension GatewayConnectionController | (internal) | - |
| 857 | fn | updateFromDiscovery | (private) | `private func updateFromDiscovery(allowAutoConne...` |
| 867 | fn | observeDiscovery | (private) | `private func observeDiscovery()` |
| 881 | fn | maybeAutoConnect | (private) | `private func maybeAutoConnect()` |
| 962 | fn | startConfiguredManualAutoConnect | (private) | `private func startConfiguredManualAutoConnect(d...` |
| 993 | fn | startActiveGatewayAutoConnect | (private) | `private func startActiveGatewayAutoConnect(    ...` |
| 1029 | fn | attemptAutoReconnectIfNeeded | (private) | `private func attemptAutoReconnectIfNeeded()` |
| 1040 | fn | mostRecentlyConnectedManualGateway | (private) | `private func mostRecentlyConnectedManualGateway...` |
| 1051 | fn | updateLastDiscoveredGateway | (private) | `private func updateLastDiscoveredGateway(from g...` |
| 1066 | fn | startAutoConnect | (private) | `@discardableResult   private func startAutoConn...` |
| 1145 | fn | resolveDiscoveredTLSParams | (private) | `private func resolveDiscoveredTLSParams(     ga...` |
| 1171 | fn | resolveManualTLSParams | (private) | `private func resolveManualTLSParams(     stable...` |
| 1187 | fn | probeTLSFingerprint | (private) | `private func probeTLSFingerprint(     host: Str...` |
| 1211 | fn | beginConnectAttempt | (private) | `private func beginConnectAttempt()     -> (supp...` |
| 1221 | fn | reserveGatewayConnectAttempt | (private) | `private func reserveGatewayConnectAttempt() -> ...` |
| 1261 | fn | finishConnectAttempt | (private) | `private func finishConnectAttempt(_ lease: Auto...` |
| 1273 | fn | tlsProbeFailureMessage | (private) | `private func tlsProbeFailureMessage(     _ fail...` |
| 1321 | fn | resolveServiceEndpoint | (private) | `private func resolveServiceEndpoint(_ endpoint:...` |
| 1338 | struct | GatewayPendingTrustConnect | (private) | `struct GatewayPendingTrustConnect` |
| 1349 | mod | extension GatewayConnectionController | (internal) | - |
| 1350 | fn | _test_setGateways | (internal) | `func _test_setGateways(_ gateways: [GatewayDisc...` |
| 1353 | fn | _test_triggerAutoConnect | (internal) | `func _test_triggerAutoConnect()` |
| 1357 | fn | _test_triggerAutoReconnect | (internal) | `func _test_triggerAutoReconnect()` |
| 1361 | fn | _test_didAutoConnect | (internal) | `func _test_didAutoConnect() -> Bool` |
| 1365 | fn | _test_isAutoConnectSuppressed | (internal) | `func _test_isAutoConnectSuppressed() -> Bool` |
| 1369 | fn | _test_resolveDiscoveredTLSParams | (internal) | `func _test_resolveDiscoveredTLSParams(     gate...` |
| 1375 | fn | _test_resolveManualPort | (internal) | `func _test_resolveManualPort(host: String, port...` |
