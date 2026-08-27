# apps/ios/Sources/Design/SettingsProTabActions.swift

[← Back to Module](../modules/apps-ios-Sources-Design/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1412
- **Language:** Swift
- **Symbols:** 62
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 7 | mod | extension SettingsProTab | (internal) | - |
| 8 | fn | detailStatusCard | (internal) | `func detailStatusCard(     icon: String,     ti...` |
| 96 | fn | diagnosticCheckRow | (internal) | `func diagnosticCheckRow(     icon: String,     ...` |
| 120 | fn | detailListCard | (internal) | `func detailListCard(@ViewBuilder content: () ->...` |
| 126 | fn | reconnectGateway | (internal) | `func reconnectGateway() async` |
| 134 | fn | switchGateway | (internal) | `func switchGateway(to entry: GatewaySettingsSto...` |
| 151 | fn | forgetPendingGateway | (internal) | `func forgetPendingGateway()` |
| 170 | fn | refreshGatewayRegistry | (internal) | `func refreshGatewayRegistry()` |
| 174 | fn | gatewayEndpointSummary | (internal) | `func gatewayEndpointSummary(_ entry: GatewaySet...` |
| 190 | fn | runDiagnostics | (internal) | `@MainActor   func runDiagnostics() async` |
| 214 | fn | syncSettingsState | (internal) | `func syncSettingsState()` |
| 241 | fn | refreshLocationPermissionSummary | (internal) | `func refreshLocationPermissionSummary(desiredMo...` |
| 265 | fn | locationServicesEnabled | (private) | `private static func locationServicesEnabled() a...` |
| 271 | fn | syncAfterOnboardingReset | (internal) | `func syncAfterOnboardingReset()` |
| 280 | fn | connect | (internal) | `func connect(_ gateway: GatewayDiscoveryModel.D...` |
| 301 | fn | applySetupCodeAndConnect | (internal) | `func applySetupCodeAndConnect() async` |
| 319 | fn | applyGatewaySetupLink | (internal) | `func applyGatewaySetupLink(_ link: GatewayConne...` |
| 338 | fn | applySetupCode | (internal) | `@discardableResult   func applySetupCode(attemp...` |
| 369 | fn | applyGatewayLink | (internal) | `func applyGatewayLink(_ link: GatewayConnectDee...` |
| 397 | fn | openGatewayQRScanner | (internal) | `func openGatewayQRScanner()` |
| 408 | fn | queueScannedResult | (internal) | `func queueScannedResult(_ result: QRScannerResu...` |
| 414 | fn | processQueuedScannerResult | (internal) | `func processQueuedScannerResult()` |
| 428 | fn | handleScannedGatewayLink | (internal) | `func handleScannedGatewayLink(_ link: GatewayCo...` |
| 435 | fn | handleScannedSetupCode | (internal) | `func handleScannedSetupCode(_ code: String)` |
| 445 | fn | clearStagedGatewaySetupLink | (internal) | `func clearStagedGatewaySetupLink()` |
| 451 | fn | takeStagedGatewaySetupSuppression | (private) | `private func takeStagedGatewaySetupSuppression(...` |
| 456 | fn | connectAfterScannedGatewayLink | (internal) | `func connectAfterScannedGatewayLink(_ parsedLin...` |
| 477 | fn | connectManual | (internal) | `func connectManual(setupAttemptID: UUID? = nil)...` |
| 552 | fn | preflightGateway | (internal) | `func preflightGateway(host: String) async -> Bool` |
| 564 | fn | resetOnboarding | (internal) | `func resetOnboarding() async` |
| 583 | fn | beginGatewaySetupAttempt | (internal) | `func beginGatewaySetupAttempt() -> UUID?` |
| 591 | fn | finishGatewaySetupAttempt | (internal) | `func finishGatewaySetupAttempt(_ attemptID: UUID)` |
| 596 | fn | invalidateGatewaySetupAttempt | (internal) | `func invalidateGatewaySetupAttempt()` |
| 601 | fn | handleLocationModeChange | (internal) | `func handleLocationModeChange(_ newValue: String)` |
| 611 | fn | applyLocationMode | (internal) | `@MainActor   func applyLocationMode(     _ mode...` |
| 661 | fn | locationSettingsPresentation | (internal) | `func locationSettingsPresentation(selectedMode:...` |
| 667 | fn | handleLocationSharingTap | (internal) | `func handleLocationSharingTap()` |
| 672 | fn | selectLocationAccessLevel | (internal) | `func selectLocationAccessLevel(_ mode: OpenClaw...` |
| 679 | fn | performLocationSettingsAction | (internal) | `func performLocationSettingsAction(_ action: Lo...` |
| 690 | fn | setLocationMode | (internal) | `func setLocationMode(_ mode: OpenClawLocationMode)` |
| 702 | fn | applyPendingLocationModeIfAvailable | (internal) | `func applyPendingLocationModeIfAvailable()` |
| 723 | fn | openLocationSettings | (internal) | `func openLocationSettings()` |
| 728 | fn | refreshNotificationSettings | (internal) | `func refreshNotificationSettings()` |
| 738 | fn | handleNotificationServingToggleChange | (internal) | `func handleNotificationServingToggleChange(_ is...` |
| 761 | fn | prepareNotificationEnrollment | (private) | `private func prepareNotificationEnrollment() ->...` |
| 771 | fn | enableNotificationServing | (private) | `private func enableNotificationServing()` |
| 777 | fn | acceptNotificationRelayDisclosure | (internal) | `func acceptNotificationRelayDisclosure()` |
| 792 | fn | requestNotificationAuthorizationFromSettings | (internal) | `func requestNotificationAuthorizationFromSettin...` |
| 813 | fn | registerForRemoteNotificationsIfEnrollmentReady | (internal) | `@MainActor   func registerForRemoteNotification...` |
| 823 | fn | applyNotificationStatus | (internal) | `@MainActor   func applyNotificationStatus(_ sta...` |
| 891 | fn | persistGatewayToken | (internal) | `func persistGatewayToken(_ value: String)` |
| 909 | fn | persistGatewayPassword | (internal) | `func persistGatewayPassword(_ value: String)` |
| 927 | fn | openNotificationSettings | (internal) | `func openNotificationSettings()` |
| 932 | fn | title | (internal) | `func title(for route: SettingsRoute) -> String` |
| 949 | fn | sendDirectWatchSetup | (internal) | `func sendDirectWatchSetup() async` |
| 981 | fn | clearManualCredentialFields | (private) | `private func clearManualCredentialFields()` |
| 988 | fn | selectGatewayCredentialTarget | (private) | `private func selectGatewayCredentialTarget(_ st...` |
| 1014 | fn | resolvedManualPort | (internal) | `func resolvedManualPort(host: String) -> Int?` |
| 1052 | fn | friendlyGatewayMessage | (internal) | `func friendlyGatewayMessage(from raw: String) -...` |
| 1077 | fn | isTransientSetupStatus | (internal) | `func isTransientSetupStatus(_ raw: String) -> Bool` |
| 1087 | fn | localizedFormat | (internal) | `static func localizedFormat(_ format: String, m...` |
| 1166 | fn | gatewayDetailLines | (internal) | `func gatewayDetailLines(_ gateway: GatewayDisco...` |
