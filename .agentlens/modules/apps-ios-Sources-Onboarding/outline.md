# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 1 large files in this module.

## apps/ios/Sources/Onboarding/OnboardingWizardView.swift (1584 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | enum | OnboardingFocusedField | (private) |
| 17 | struct | OnboardingWizardView | (internal) |
| 118 | fn | setConnectionFailure | (private) |
| 496 | fn | stagedGatewaySetupSection | (private) |
| 653 | mod | extension OnboardingWizardView | (internal) |
| 713 | fn | manualConnectionFieldsSection | (private) |
| 778 | fn | onboardingLabeledContent | (private) |
| 788 | fn | onboardingTextField | (private) |
| 806 | fn | onboardingSecureField | (private) |
| 849 | fn | applySetupCodeAndConnect | (private) |
| 885 | fn | queueScannedResult | (private) |
| 891 | fn | processQueuedScannerResult | (private) |
| 905 | fn | handleScannedLink | (private) |
| 912 | fn | connectScannedLink | (private) |
| 926 | fn | applyPendingGatewaySetupLinkIfNeeded | (private) |
| 944 | fn | connectStagedGatewaySetupLink | (private) |
| 970 | fn | clearStagedGatewaySetupLink | (private) |
| 979 | fn | applyGatewayLink | (private) |
| 1014 | fn | handleScannedSetupCode | (private) |
| 1025 | fn | openQRScannerFromOnboarding | (private) |
| 1041 | fn | resumeAfterPairingApproval | (private) |
| 1055 | fn | resumeAfterPairingApprovalInBackground | (private) |
| 1063 | fn | attemptAutomaticPairingResumeIfNeeded | (private) |
| 1077 | fn | updateConnectionIssue | (private) |
| 1128 | fn | detectQRCode | (private) |
| 1143 | fn | advanceFromIntro | (private) |
| 1148 | fn | advanceFromPermissions | (private) |
| 1157 | fn | requestLocalNetworkAccessIfPastIntro | (private) |
| 1164 | fn | requestLocalNetworkAccess | (private) |
| 1168 | fn | navigateBack | (private) |
| 1176 | fn | prepareFocusedFieldForStepTransition | (private) |
| 1183 | fn | dismissKeyboard | (private) |
| 1192 | fn | navigate | (private) |
| 1197 | fn | beginSetupAttempt | (private) |
| 1205 | fn | finishSetupAttempt | (private) |
| 1210 | fn | invalidateSetupAttempt | (private) |
| 1220 | fn | initializeState | (private) |
| 1275 | fn | scheduleDiscoveryRestart | (private) |
| 1298 | fn | resolvedManualPort | (private) |
| 1347 | fn | persistGatewayToken | (private) |
| 1364 | fn | persistGatewayPassword | (private) |
| 1381 | fn | clearManualCredentialFields | (private) |
| 1388 | fn | selectGatewayCredentialTarget | (private) |
| 1409 | fn | connectDiscoveredGateway | (private) |
| 1422 | fn | selectMode | (private) |
| 1427 | fn | applyModeDefaults | (private) |
| 1455 | fn | connectManual | (private) |
| 1472 | fn | connectCurrentManualGateway | (private) |
| 1518 | fn | retryLastAttempt | (private) |
| 1547 | fn | gatewayProblemPrimaryActionTitle | (private) |
| 1554 | fn | handleGatewayProblemPrimaryAction | (private) |
