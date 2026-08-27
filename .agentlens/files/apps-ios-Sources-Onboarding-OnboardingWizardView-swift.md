# apps/ios/Sources/Onboarding/OnboardingWizardView.swift

[← Back to Module](../modules/apps-ios-Sources-Onboarding/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1584
- **Language:** Swift
- **Symbols:** 51
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 8 | enum | OnboardingFocusedField | (private) | `enum OnboardingFocusedField` |
| 17 | struct | OnboardingWizardView | (internal) | `struct OnboardingWizardView` |
| 118 | fn | setConnectionFailure | (private) | `private func setConnectionFailure(_ message: St...` |
| 496 | fn | stagedGatewaySetupSection | (private) | `private func stagedGatewaySetupSection(_ link: ...` |
| 653 | mod | extension OnboardingWizardView | (internal) | - |
| 713 | fn | manualConnectionFieldsSection | (private) | `private func manualConnectionFieldsSection(titl...` |
| 778 | fn | onboardingLabeledContent | (private) | `private func onboardingLabeledContent(_ title: ...` |
| 788 | fn | onboardingTextField | (private) | `private func onboardingTextField(     _ placeho...` |
| 806 | fn | onboardingSecureField | (private) | `private func onboardingSecureField(     _ place...` |
| 849 | fn | applySetupCodeAndConnect | (private) | `private func applySetupCodeAndConnect() async` |
| 885 | fn | queueScannedResult | (private) | `private func queueScannedResult(_ result: QRSca...` |
| 891 | fn | processQueuedScannerResult | (private) | `private func processQueuedScannerResult()` |
| 905 | fn | handleScannedLink | (private) | `private func handleScannedLink(_ link: GatewayC...` |
| 912 | fn | connectScannedLink | (private) | `private func connectScannedLink(_ parsedLink: G...` |
| 926 | fn | applyPendingGatewaySetupLinkIfNeeded | (private) | `private func applyPendingGatewaySetupLinkIfNeed...` |
| 944 | fn | connectStagedGatewaySetupLink | (private) | `private func connectStagedGatewaySetupLink() async` |
| 970 | fn | clearStagedGatewaySetupLink | (private) | `private func clearStagedGatewaySetupLink()` |
| 979 | fn | applyGatewayLink | (private) | `private func applyGatewayLink(     _ link: Gate...` |
| 1014 | fn | handleScannedSetupCode | (private) | `private func handleScannedSetupCode(_ code: Str...` |
| 1025 | fn | openQRScannerFromOnboarding | (private) | `private func openQRScannerFromOnboarding(status...` |
| 1041 | fn | resumeAfterPairingApproval | (private) | `private func resumeAfterPairingApproval()` |
| 1055 | fn | resumeAfterPairingApprovalInBackground | (private) | `private func resumeAfterPairingApprovalInBackgr...` |
| 1063 | fn | attemptAutomaticPairingResumeIfNeeded | (private) | `private func attemptAutomaticPairingResumeIfNee...` |
| 1077 | fn | updateConnectionIssue | (private) | `private func updateConnectionIssue(problem: Gat...` |
| 1128 | fn | detectQRCode | (private) | `private func detectQRCode(from data: Data) -> S...` |
| 1143 | fn | advanceFromIntro | (private) | `private func advanceFromIntro()` |
| 1148 | fn | advanceFromPermissions | (private) | `private func advanceFromPermissions()` |
| 1157 | fn | requestLocalNetworkAccessIfPastIntro | (private) | `private func requestLocalNetworkAccessIfPastInt...` |
| 1164 | fn | requestLocalNetworkAccess | (private) | `private func requestLocalNetworkAccess(reason: ...` |
| 1168 | fn | navigateBack | (private) | `private func navigateBack()` |
| 1176 | fn | prepareFocusedFieldForStepTransition | (private) | `private func prepareFocusedFieldForStepTransiti...` |
| 1183 | fn | dismissKeyboard | (private) | `private func dismissKeyboard()` |
| 1192 | fn | navigate | (private) | `private func navigate(to target: OnboardingStep)` |
| 1197 | fn | beginSetupAttempt | (private) | `private func beginSetupAttempt() -> UUID?` |
| 1205 | fn | finishSetupAttempt | (private) | `private func finishSetupAttempt(_ attemptID: UUID)` |
| 1210 | fn | invalidateSetupAttempt | (private) | `private func invalidateSetupAttempt()` |
| 1220 | fn | initializeState | (private) | `private func initializeState()` |
| 1275 | fn | scheduleDiscoveryRestart | (private) | `private func scheduleDiscoveryRestart()` |
| 1298 | fn | resolvedManualPort | (private) | `private func resolvedManualPort(host: String) -...` |
| 1347 | fn | persistGatewayToken | (private) | `private func persistGatewayToken(_ value: String)` |
| 1364 | fn | persistGatewayPassword | (private) | `private func persistGatewayPassword(_ value: St...` |
| 1381 | fn | clearManualCredentialFields | (private) | `private func clearManualCredentialFields()` |
| 1388 | fn | selectGatewayCredentialTarget | (private) | `private func selectGatewayCredentialTarget(_ st...` |
| 1409 | fn | connectDiscoveredGateway | (private) | `private func connectDiscoveredGateway(_ gateway...` |
| 1422 | fn | selectMode | (private) | `private func selectMode(_ mode: OnboardingConne...` |
| 1427 | fn | applyModeDefaults | (private) | `private func applyModeDefaults(_ mode: Onboardi...` |
| 1455 | fn | connectManual | (private) | `private func connectManual(setupAttemptID: UUID...` |
| 1472 | fn | connectCurrentManualGateway | (private) | `private func connectCurrentManualGateway(host: ...` |
| 1518 | fn | retryLastAttempt | (private) | `private func retryLastAttempt(silent: Bool = fa...` |
| 1547 | fn | gatewayProblemPrimaryActionTitle | (private) | `private func gatewayProblemPrimaryActionTitle(_...` |
| 1554 | fn | handleGatewayProblemPrimaryAction | (private) | `private func handleGatewayProblemPrimaryAction(...` |
