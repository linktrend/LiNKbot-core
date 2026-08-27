# apps/macos/Sources/OpenClaw/OnboardingAISetup.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1576
- **Language:** Swift
- **Symbols:** 52
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 15 | class | OnboardingAISetupModel | (internal) | `class OnboardingAISetupModel` |
| 188 | fn | startIfNeeded | (internal) | `func startIfNeeded()` |
| 199 | fn | retryFromScratch | (internal) | `func retryFromScratch()` |
| 214 | fn | showConfiguredGatewayProbeUnavailable | (internal) | `func showConfiguredGatewayProbeUnavailable()` |
| 229 | fn | beginConfiguredGatewayProbeRetry | (internal) | `func beginConfiguredGatewayProbeRetry()` |
| 235 | fn | waitForPendingActivationDeadline | (internal) | `func waitForPendingActivationDeadline()` |
| 254 | fn | resumeConfiguredInference | (internal) | `func resumeConfiguredInference(modelRef: String)` |
| 289 | fn | verifyPendingConfiguredInference | (internal) | `@discardableResult   func verifyPendingConfigur...` |
| 315 | fn | performPendingConfiguredInferenceVerification | (private) | `private func performPendingConfiguredInferenceV...` |
| 444 | fn | pendingVerificationFailureOutcome | (private) | `private func pendingVerificationFailureOutcome(...` |
| 480 | fn | retainCompletedReceiptForRetry | (private) | `private func retainCompletedReceiptForRetry(con...` |
| 488 | fn | activePendingActivationDeadline | (private) | `private func activePendingActivationDeadline(fo...` |
| 500 | fn | beginPendingActivationDeadlineWait | (private) | `private func beginPendingActivationDeadlineWait...` |
| 509 | fn | retainAmbiguousActivation | (private) | `private func retainAmbiguousActivation(     ifO...` |
| 561 | fn | acceptVerifiedPendingInference | (internal) | `func acceptVerifiedPendingInference(modelRef: S...` |
| 579 | fn | clearCompletedHandoffIfOwned | (internal) | `func clearCompletedHandoffIfOwned()` |
| 589 | fn | resetForGatewayChange | (internal) | `func resetForGatewayChange(clearPendingHandoff:...` |
| 647 | mod | extension OnboardingAISetupModel | (internal) | - |
| 648 | fn | detectAndAutoConnect | (internal) | `func detectAndAutoConnect() async` |
| 655 | fn | scheduleDetection | (private) | `private func scheduleDetection()` |
| 663 | fn | detectAndAutoConnect | (private) | `private func detectAndAutoConnect(context: Atte...` |
| 749 | fn | captureAttemptContext | (private) | `private func captureAttemptContext() -> Attempt...` |
| 755 | fn | beginAttemptContext | (private) | `private func beginAttemptContext() -> AttemptCo...` |
| 760 | fn | isCurrentAttempt | (private) | `private func isCurrentAttempt(_ context: Attemp...` |
| 765 | fn | clearPendingHandoff | (private) | `private func clearPendingHandoff(     ifOwnedBy...` |
| 776 | fn | failDetectionForMissingRoute | (private) | `private func failDetectionForMissingRoute()` |
| 782 | fn | activationTransitionWasPersisted | (private) | `private static func activationTransitionWasPers...` |
| 795 | fn | autoCandidateAfter | (private) | `private func autoCandidateAfter(kind: String?) ...` |
| 806 | fn | userSelect | (internal) | `func userSelect(kind: String)` |
| 813 | fn | activate | (internal) | `func activate(kind: String) async` |
| 824 | fn | activate | (private) | `private func activate(kind: String, context: At...` |
| 964 | fn | reconcileActivationAfterGatewayRestart | (private) | `private func reconcileActivationAfterGatewayRes...` |
| 1013 | fn | reconcilePersistedActivation | (private) | `private func reconcilePersistedActivation(     ...` |
| 1065 | fn | remainingMilliseconds | (private) | `private static func remainingMilliseconds(     ...` |
| 1077 | mod | extension OnboardingAISetupModel | (internal) | - |
| 1078 | fn | startProviderAuth | (internal) | `func startProviderAuth(_ option: AuthOption)` |
| 1150 | fn | continueProviderAuth | (internal) | `func continueProviderAuth()` |
| 1161 | fn | cancelProviderAuth | (internal) | `func cancelProviderAuth()` |
| 1205 | fn | advanceProviderAuth | (private) | `private func advanceProviderAuth(stepID: String...` |
| 1253 | fn | applyAuthWizardResult | (private) | `private func applyAuthWizardResult(     done: B...` |
| 1300 | fn | reconcileProviderAuthAfterUnknownOutcome | (private) | `private func reconcileProviderAuthAfterUnknownO...` |
| 1343 | fn | clearProviderAuth | (private) | `private func clearProviderAuth()` |
| 1354 | fn | _test_setProviderAuth | (internal) | `func _test_setProviderAuth(option: AuthOption, ...` |
| 1359 | fn | _test_applyAuthWizardResult | (internal) | `func _test_applyAuthWizardResult(done: Bool, st...` |
| 1370 | mod | extension OnboardingAISetupModel | (internal) | - |
| 1371 | fn | submitManualKey | (internal) | `func submitManualKey()` |
| 1383 | fn | submitManualKey | (private) | `private func submitManualKey(     key: String, ...` |
| 1504 | fn | requireFreshDetection | (internal) | `func requireFreshDetection(after failure: Failure)` |
| 1509 | fn | finishConnected | (private) | `private func finishConnected(     kind: String,...` |
| 1547 | fn | tryNextAfterFailure | (private) | `private func tryNextAfterFailure(of kind: Strin...` |
| 1560 | fn | _test_setConnectedSetupLines | (internal) | `func _test_setConnectedSetupLines(_ lines: [Str...` |
| 1566 | enum | OnboardingAISetupError | (private) | `enum OnboardingAISetupError` |
