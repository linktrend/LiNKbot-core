# apps/ios/Sources/Model/NodeAppModel.swift

[← Back to Module](../modules/apps-ios-Sources-Model/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 11364
- **Language:** Swift
- **Symbols:** 462
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 14 | struct | NotificationCallError | (private) | `struct NotificationCallError` |
| 18 | struct | GatewayRelayIdentityResponse | (private) | `struct GatewayRelayIdentityResponse` |
| 23 | struct | WatchChatPreview | (private) | `struct WatchChatPreview` |
| 29 | struct | WatchChatMetadataEnvelope | (private) | `struct WatchChatMetadataEnvelope` |
| 43 | struct | WatchChatMessageEntry | (private) | `struct WatchChatMessageEntry` |
| 50 | struct | ExecApprovalGatewayEventPayload | (private) | `struct ExecApprovalGatewayEventPayload` |
| 54 | struct | NodeEventRequestPayload | (private) | `struct NodeEventRequestPayload` |
| 64 | fn | setContinuation | (internal) | `func setContinuation(_ continuation: CheckedCon...` |
| 70 | fn | resume | (internal) | `func resume(_ response: Result<T, NotificationC...` |
| 86 | enum | IOSDeepLinkAgentPolicy | (private) | `enum IOSDeepLinkAgentPolicy` |
| 91 | enum | TalkCapturePreparationOwner | (private) | `enum TalkCapturePreparationOwner` |
| 99 | class | NodeAppModel | (internal) | `class NodeAppModel` |
| 126 | method | init | (internal) | `init(       id: String,       kind: String?,   ...` |
| 657 | fn | makeChatTransport | (internal) | `func makeChatTransport(outboxGatewayID: String?...` |
| 708 | fn | makeChatOfflineStore | (internal) | `func makeChatOfflineStore() -> OpenClawChatSQLi...` |
| 724 | fn | restoreChatSessionRoutingIdentityIfNeeded | (internal) | `func restoreChatSessionRoutingIdentityIfNeeded(...` |
| 748 | fn | loadCachedChatSessions | (internal) | `func loadCachedChatSessions() async -> [OpenCla...` |
| 753 | fn | storeCachedChatSessions | (internal) | `func storeCachedChatSessions(_ sessions: [OpenC...` |
| 763 | fn | purgeChatTranscriptCache | (internal) | `func purgeChatTranscriptCache(gatewayID: String...` |
| 789 | fn | purgeChatTranscriptCacheBeforeStartup | (internal) | `func purgeChatTranscriptCacheBeforeStartup()` |
| 795 | fn | chatTranscriptCacheDirectoryURL | (private) | `private static func chatTranscriptCacheDirector...` |
| 800 | fn | chatTranscriptCacheDatabaseURL | (internal) | `static func chatTranscriptCacheDatabaseURL(gate...` |
| 976 | fn | handleCanvasA2UIAction | (private) | `private func handleCanvasA2UIAction(body: [Stri...` |
| 1053 | fn | setScenePhase | (internal) | `func setScenePhase(_ phase: ScenePhase)` |
| 1144 | fn | beginBackgroundConnectionGracePeriod | (private) | `private func beginBackgroundConnectionGracePeri...` |
| 1171 | fn | endBackgroundConnectionGracePeriod | (private) | `private func endBackgroundConnectionGracePeriod...` |
| 1180 | fn | grantBackgroundReconnectLease | (private) | `private func grantBackgroundReconnectLease(seco...` |
| 1197 | fn | suppressBackgroundReconnect | (private) | `private func suppressBackgroundReconnect(reason...` |
| 1229 | fn | clearBackgroundReconnectSuppression | (private) | `private func clearBackgroundReconnectSuppressio...` |
| 1237 | fn | setVoiceWakeEnabled | (internal) | `func setVoiceWakeEnabled(_ enabled: Bool)` |
| 1249 | fn | setTalkEnabled | (internal) | `func setTalkEnabled(_ enabled: Bool)` |
| 1290 | fn | setTalkProviderSelection | (internal) | `func setTalkProviderSelection(_ rawValue: String)` |
| 1296 | fn | setTalkRealtimeVoiceSelection | (internal) | `func setTalkRealtimeVoiceSelection(_ rawValue: ...` |
| 1302 | fn | requestTalkPermissionUpgrade | (private) | `private func requestTalkPermissionUpgrade()` |
| 1327 | fn | restartOperatorGatewayForTalkPermissionUpgrade | (private) | `private func restartOperatorGatewayForTalkPermi...` |
| 1357 | fn | requestTalkPermissionUpgradeIfNeeded | (private) | `private func requestTalkPermissionUpgradeIfNeed...` |
| 1378 | fn | startTalkPermissionUpgradePolling | (private) | `private func startTalkPermissionUpgradePolling()` |
| 1390 | fn | cancelTalkPermissionUpgrade | (private) | `private func cancelTalkPermissionUpgrade(resume...` |
| 1432 | fn | pollTalkPermissionUpgrade | (private) | `private func pollTalkPermissionUpgrade() async` |
| 1470 | fn | finishTalkPermissionUpgradeReconnect | (private) | `private func finishTalkPermissionUpgradeReconne...` |
| 1475 | fn | setTalkSpeakerphoneEnabled | (internal) | `func setTalkSpeakerphoneEnabled(_ enabled: Bool)` |
| 1480 | fn | requestLocationPermissions | (internal) | `func requestLocationPermissions(mode: OpenClawL...` |
| 1501 | fn | reconcileSignificantLocationMonitoring | (private) | `private func reconcileSignificantLocationMonito...` |
| 1523 | fn | refreshBrandingFromGateway | (private) | `private func refreshBrandingFromGateway(shouldA...` |
| 1556 | fn | refreshAgentsFromGateway | (private) | `private func refreshAgentsFromGateway(shouldApp...` |
| 1595 | fn | refreshGatewayOverviewIfConnected | (internal) | `func refreshGatewayOverviewIfConnected() async` |
| 1607 | fn | setSelectedAgentId | (internal) | `func setSelectedAgentId(_ agentId: String?)` |
| 1639 | fn | setGlobalWakeWords | (internal) | `func setGlobalWakeWords(_ words: [String]) async` |
| 1657 | fn | startVoiceWakeSync | (private) | `private func startVoiceWakeSync(shouldContinue:...` |
| 1681 | fn | handleOperatorGatewayServerEvent | (private) | `private func handleOperatorGatewayServerEvent( ...` |
| 1779 | fn | execApprovalInboxKey | (internal) | `static func execApprovalInboxKey(     approvalI...` |
| 1789 | fn | execApprovalInboxKey | (internal) | `static func execApprovalInboxKey(_ prompt: Exec...` |
| 1796 | fn | beginExecApprovalResolutionAttempt | (private) | `private func beginExecApprovalResolutionAttempt...` |
| 1814 | fn | isActiveExecApprovalResolutionAttempt | (private) | `private func isActiveExecApprovalResolutionAtte...` |
| 1820 | fn | markExecApprovalResolutionWriteSettled | (private) | `private func markExecApprovalResolutionWriteSet...` |
| 1830 | fn | finishExecApprovalResolutionAttempt | (private) | `private func finishExecApprovalResolutionAttemp...` |
| 1842 | fn | markExecApprovalResolutionUncertain | (private) | `private func markExecApprovalResolutionUncertai...` |
| 1876 | fn | recordCanonicalExecApprovalFetchOutcome | (private) | `private func recordCanonicalExecApprovalFetchOu...` |
| 1898 | fn | execApprovalReadbackFence | (private) | `private func execApprovalReadbackFence(approval...` |
| 1909 | fn | schedulePendingWatchExecApprovalResolutionFlush | (private) | `private func schedulePendingWatchExecApprovalRe...` |
| 1917 | fn | isExecApprovalResolutionWriteInFlight | (private) | `private func isExecApprovalResolutionWriteInFli...` |
| 1932 | fn | hasActiveExecApprovalResolutionAttempt | (private) | `private func hasActiveExecApprovalResolutionAtt...` |
| 1942 | fn | markWatchResolutionAttemptResettable | (private) | `private func markWatchResolutionAttemptResettab...` |
| 1962 | fn | resettableWatchResolutionAttemptID | (private) | `private func resettableWatchResolutionAttemptID...` |
| 2051 | fn | applyTalkModeSync | (private) | `private func applyTalkModeSync(enabled: Bool, p...` |
| 2057 | fn | pushTalkModeToGateway | (private) | `private func pushTalkModeToGateway(enabled: Boo...` |
| 2073 | fn | startGatewayHealthMonitor | (private) | `private func startGatewayHealthMonitor()` |
| 2112 | fn | stopGatewayHealthMonitor | (private) | `private func stopGatewayHealthMonitor()` |
| 2116 | fn | handleInvoke | (private) | `private func handleInvoke(     _ req: BridgeInv...` |
| 2176 | fn | scopedWatchNotificationRequest | (private) | `private static func scopedWatchNotificationRequ...` |
| 2194 | fn | isBackgroundRestricted | (private) | `private func isBackgroundRestricted(_ command: ...` |
| 2199 | fn | handleLocationInvoke | (private) | `private func handleLocationInvoke(_ req: Bridge...` |
| 2258 | fn | handleCanvasInvoke | (private) | `private func handleCanvasInvoke(_ req: BridgeIn...` |
| 2313 | fn | handleCanvasA2UIInvoke | (private) | `private func handleCanvasA2UIInvoke(_ req: Brid...` |
| 2389 | fn | handleCameraInvoke | (private) | `private func handleCameraInvoke(_ req: BridgeIn...` |
| 2463 | fn | handleScreenRecordInvoke | (private) | `private func handleScreenRecordInvoke(_ req: Br...` |
| 2510 | fn | handleSystemNotify | (private) | `private func handleSystemNotify(_ req: BridgeIn...` |
| 2564 | fn | handleChatPushInvoke | (private) | `private func handleChatPushInvoke(_ req: Bridge...` |
| 2618 | fn | notificationAuthorizationStatus | (private) | `private func notificationAuthorizationStatus() ...` |
| 2630 | fn | isNotificationAuthorizationAllowed | (private) | `private static func isNotificationAuthorization...` |
| 2641 | fn | isNotificationServingEnabled | (private) | `private static func isNotificationServingEnable...` |
| 2647 | fn | presentNotificationPermissionGuidanceForExecApprovalIfNeeded | (private) | `private func presentNotificationPermissionGuida...` |
| 2662 | fn | dismissNotificationPermissionGuidancePrompt | (internal) | `func dismissNotificationPermissionGuidancePromp...` |
| 2669 | fn | resetExecApprovalNotificationGuidanceSuppression | (internal) | `func resetExecApprovalNotificationGuidanceSuppr...` |
| 2704 | fn | handleDeviceInvoke | (private) | `private func handleDeviceInvoke(_ req: BridgeIn...` |
| 2722 | fn | handlePhotosInvoke | (private) | `private func handlePhotosInvoke(_ req: BridgeIn...` |
| 2730 | fn | handleContactsInvoke | (private) | `private func handleContactsInvoke(_ req: Bridge...` |
| 2751 | fn | handleCalendarInvoke | (private) | `private func handleCalendarInvoke(_ req: Bridge...` |
| 2772 | fn | handleRemindersInvoke | (private) | `private func handleRemindersInvoke(_ req: Bridg...` |
| 2793 | fn | handleMotionInvoke | (private) | `private func handleMotionInvoke(_ req: BridgeIn...` |
| 2815 | fn | handleHealthInvoke | (private) | `private func handleHealthInvoke(_ req: BridgeIn...` |
| 2829 | fn | handleTalkInvoke | (private) | `private func handleTalkInvoke(_ req: BridgeInvo...` |
| 2919 | fn | transcribeChatDraft | (internal) | `func transcribeChatDraft() async throws -> String?` |
| 2976 | fn | cancelChatDictationReservation | (private) | `private func cancelChatDictationReservation(_ c...` |
| 2984 | fn | finishChatDictation | (internal) | `func finishChatDictation()` |
| 2989 | fn | cancelChatDictation | (internal) | `func cancelChatDictation()` |
| 3000 | fn | rejectTalkCaptureWhileOtherAudioActive | (private) | `private func rejectTalkCaptureWhileOtherAudioAc...` |
| 3015 | fn | acquireAuxiliaryAudioCapture | (private) | `private func acquireAuxiliaryAudioCapture(_ own...` |
| 3030 | fn | releaseAuxiliaryAudioCapture | (private) | `private func releaseAuxiliaryAudioCapture(_ own...` |
| 3066 | fn | ensureForegroundCaptureAllowed | (private) | `private func ensureForegroundCaptureAllowed() t...` |
| 3074 | fn | acquirePttVoiceWakeLease | (private) | `private func acquirePttVoiceWakeLease(for captu...` |
| 3082 | fn | releasePttVoiceWakeLease | (private) | `private func releasePttVoiceWakeLease(for captu...` |
| 3106 | fn | ensureTalkCapturePreparationCurrent | (private) | `private func ensureTalkCapturePreparationCurren...` |
| 3120 | fn | ensureTalkPttCommandCurrent | (private) | `private func ensureTalkPttCommandCurrent(_ comm...` |
| 3129 | fn | ensureTalkPttStartCurrent | (private) | `private func ensureTalkPttStartCurrent(_ comman...` |
| 3138 | fn | acquireTalkPreparation | (private) | `private func acquireTalkPreparation() async throws` |
| 3170 | fn | cancelTalkPreparationWaiter | (private) | `private func cancelTalkPreparationWaiter(id: UUID)` |
| 3175 | fn | releaseTalkPreparation | (private) | `private func releaseTalkPreparation()` |
| 3185 | mod | extension NodeAppModel | (internal) | - |
| 3187 | fn | buildCapabilityRouter | (private) | `private func buildCapabilityRouter() -> NodeCap...` |
| 3189 | fn | register | (internal) | `func register(_ commands: [String], handler: @e...` |
| 3315 | fn | handleWatchInvoke | (private) | `private func handleWatchInvoke(_ req: BridgeInv...` |
| 3381 | fn | sendDirectWatchSetup | (internal) | `func sendDirectWatchSetup() async throws -> Wat...` |
| 3418 | fn | refreshWatchMessagingStatus | (internal) | `func refreshWatchMessagingStatus() async` |
| 3422 | fn | locationMode | (private) | `private func locationMode() -> OpenClawLocation...` |
| 3427 | fn | isLocationPreciseEnabled | (private) | `private func isLocationPreciseEnabled() -> Bool` |
| 3442 | fn | encodePayload | (private) | `fileprivate static func encodePayload(_ obj: so...` |
| 3452 | fn | isCameraEnabled | (private) | `private func isCameraEnabled() -> Bool` |
| 3462 | fn | setPreferredCameraFacing | (internal) | `func setPreferredCameraFacing(_ facing: OpenCla...` |
| 3468 | fn | flipPreferredCameraFacing | (internal) | `func flipPreferredCameraFacing()` |
| 3473 | fn | triggerCameraFlash | (private) | `private func triggerCameraFlash()` |
| 3477 | fn | showCameraHUD | (private) | `private func showCameraHUD(     ownerID: String...` |
| 3504 | fn | updateCameraHUD | (private) | `private func updateCameraHUD(     ownerID: Stri...` |
| 3514 | fn | clearCameraHUD | (private) | `private func clearCameraHUD(ownerID: String)` |
| 3525 | mod | extension NodeAppModel | (internal) | - |
| 3548 | fn | openChat | (internal) | `func openChat(sessionKey: String?, unread: Bool...` |
| 3561 | fn | requestNewChat | (internal) | `func requestNewChat()` |
| 3565 | fn | consumeNewChatRequest | (internal) | `func consumeNewChatRequest(_ requestID: Int) ->...` |
| 3574 | fn | consumeDashboardNavigationRequest | (internal) | `func consumeDashboardNavigationRequest(_ reques...` |
| 3588 | fn | reconcileChatSessionReadState | (internal) | `func reconcileChatSessionReadState(_ entries: [...` |
| 3602 | fn | acknowledgeChatSessionReadIfNeeded | (private) | `private func acknowledgeChatSessionReadIfNeeded...` |
| 3623 | fn | focusChatSession | (internal) | `func focusChatSession(_ sessionKey: String?)` |
| 3632 | fn | synchronizeTalkSessionKey | (internal) | `func synchronizeTalkSessionKey(_ sessionKey: St...` |
| 3688 | fn | agentDisplayName | (private) | `private func agentDisplayName(for agentId: Stri...` |
| 3698 | fn | agentIdentityValue | (private) | `private func agentIdentityValue(for agentId: St...` |
| 3710 | fn | connectToGateway | (internal) | `func connectToGateway(     url: URL,     gatewa...` |
| 3797 | fn | applyGatewayConnectConfig | (internal) | `func applyGatewayConnectConfig(     _ cfg: Gate...` |
| 3809 | fn | applyGatewayConnectConfig | (internal) | `func applyGatewayConnectConfig(     _ cfg: Gate...` |
| 3829 | fn | beginGatewayConnectAttempt | (internal) | `func beginGatewayConnectAttempt() -> UInt64` |
| 3834 | fn | invalidateGatewayConnectAttempts | (private) | `private func invalidateGatewayConnectAttempts()` |
| 3842 | fn | waitForGatewaySessionResetIfNeeded | (internal) | `func waitForGatewaySessionResetIfNeeded() async` |
| 3848 | fn | beginGatewaySessionReset | (private) | `@discardableResult   private func beginGatewayS...` |
| 3883 | fn | resetGatewaySessionsForForcedReconnect | (internal) | `func resetGatewaySessionsForForcedReconnect() a...` |
| 3887 | fn | resetGatewaySessionsForTargetSwitch | (internal) | `func resetGatewaySessionsForTargetSwitch() async` |
| 3911 | fn | restartGatewaySessionsAfterForegroundStaleConnection | (private) | `private func restartGatewaySessionsAfterForegro...` |
| 3932 | fn | disconnectGateway | (internal) | `func disconnectGateway()` |
| 3936 | fn | suspendGatewayForTargetReview | (internal) | `func suspendGatewayForTargetReview()` |
| 3944 | fn | disconnectForgottenGateway | (internal) | `func disconnectForgottenGateway(preservingPendi...` |
| 3949 | fn | disconnectGateway | (private) | `private func disconnectGateway(     disablePers...` |
| 3993 | fn | disableGatewayAutoReconnect | (private) | `private func disableGatewayAutoReconnect()` |
| 4002 | mod | extension NodeAppModel | (internal) | - |
| 4003 | fn | resumeGatewayAfterTargetReview | (internal) | `func resumeGatewayAfterTargetReview(_ config: G...` |
| 4014 | fn | prepareForGatewayConnect | (private) | `private func prepareForGatewayConnect(     stab...` |
| 4070 | fn | clearGatewayConnectionProblem | (private) | `private func clearGatewayConnectionProblem()` |
| 4088 | fn | beginGatewayPreconnectVerification | (internal) | `func beginGatewayPreconnectVerification(statusT...` |
| 4098 | fn | applyGatewayConnectionProblem | (private) | `private func applyGatewayConnectionProblem(_ pr...` |
| 4127 | fn | applyOperatorGatewayConnectionProblem | (private) | `private func applyOperatorGatewayConnectionProb...` |
| 4146 | fn | clearOperatorGatewayConnectionProblemIfCurrent | (private) | `private func clearOperatorGatewayConnectionProb...` |
| 4169 | fn | currentGatewayProblemToKeep | (private) | `private func currentGatewayProblemToKeep(forDis...` |
| 4179 | fn | shouldStartOperatorGatewayLoop | (private) | `private func shouldStartOperatorGatewayLoop(   ...` |
| 4195 | fn | hasStoredGatewayRoleToken | (private) | `private func hasStoredGatewayRoleToken(_ role: ...` |
| 4224 | fn | currentGatewayReconnectAuth | (private) | `private func currentGatewayReconnectAuth(     f...` |
| 4235 | fn | currentGatewayReconnectOptions | (private) | `private func currentGatewayReconnectOptions(   ...` |
| 4255 | fn | completeSuccessfulGatewayAuthHandoff | (private) | `private func completeSuccessfulGatewayAuthHando...` |
| 4356 | fn | handleGatewayCredentialHandoffPersistenceFailure | (private) | `private func handleGatewayCredentialHandoffPers...` |
| 4386 | fn | refreshBackgroundReconnectSuppressionIfNeeded | (private) | `private func refreshBackgroundReconnectSuppress...` |
| 4398 | fn | shouldPauseReconnectLoopInBackground | (private) | `private func shouldPauseReconnectLoopInBackgrou...` |
| 4403 | fn | gatewayReconnectLoopDelay | (private) | `private func gatewayReconnectLoopDelay(source: ...` |
| 4412 | fn | isCurrentGatewayRoute | (private) | `private func isCurrentGatewayRoute(generation: ...` |
| 4419 | fn | isCurrentExecApprovalReadbackRoute | (private) | `private func isCurrentExecApprovalReadbackRoute...` |
| 4431 | fn | gatewayRouteCheck | (private) | `private func gatewayRouteCheck(     generation:...` |
| 4440 | fn | handleOperatorGatewayConnected | (private) | `private func handleOperatorGatewayConnected(   ...` |
| 4503 | fn | admitTalkAfterSessionHydration | (private) | `private func admitTalkAfterSessionHydration()` |
| 4589 | fn | startOperatorGatewayLoop | (private) | `private func startOperatorGatewayLoop(     url:...` |
| 4749 | fn | handleOperatorGatewayRouteInvalidated | (private) | `private func handleOperatorGatewayRouteInvalida...` |
| 4754 | fn | invalidateOperatorTalkRoute | (private) | `private func invalidateOperatorTalkRoute()` |
| 4764 | fn | handleNodeGatewayRouteInvalidated | (private) | `private func handleNodeGatewayRouteInvalidated(...` |
| 4769 | fn | invalidateNodePushToTalkRoute | (private) | `private func invalidateNodePushToTalkRoute()` |
| 4775 | fn | startNodeGatewayLoop | (private) | `private func startNodeGatewayLoop(     url: URL...` |
| 4800 | fn | runNodeGatewayLoop | (private) | `private func runNodeGatewayLoop(_ context: Node...` |
| 4829 | fn | shouldDelayNodeGatewayConnectionAttempt | (private) | `private func shouldDelayNodeGatewayConnectionAt...` |
| 4841 | fn | showNodeGatewayConnectingStatus | (private) | `private func showNodeGatewayConnectingStatus(  ...` |
| 4861 | fn | performNodeGatewayConnectionAttempt | (private) | `private func performNodeGatewayConnectionAttemp...` |
| 4952 | fn | handleNodeGatewayConnectionError | (private) | `private func handleNodeGatewayConnectionError( ...` |
| 5002 | fn | applyNodeGatewayConnectionError | (private) | `private func applyNodeGatewayConnectionError(  ...` |
| 5016 | fn | recordNodeGatewayConnectionError | (private) | `private func recordNodeGatewayConnectionError( ...` |
| 5047 | fn | mapNodeGatewayConnectionError | (private) | `private func mapNodeGatewayConnectionError(_ er...` |
| 5053 | fn | resetNodeGatewayLoopStatusIfCurrent | (private) | `private func resetNodeGatewayLoopStatusIfCurren...` |
| 5076 | fn | shouldRequestOperatorApprovalScope | (private) | `private func shouldRequestOperatorApprovalScope...` |
| 5117 | fn | shouldRequestOperatorAdminScope | (private) | `private func shouldRequestOperatorAdminScope(  ...` |
| 5158 | fn | makeOperatorConnectOptions | (private) | `private func makeOperatorConnectOptions(     cl...` |
| 5191 | fn | legacyClientIdFallback | (private) | `private func legacyClientIdFallback(currentClie...` |
| 5201 | fn | isOperatorConnected | (private) | `private func isOperatorConnected() async -> Bool` |
| 5205 | fn | setOperatorConnected | (private) | `private func setOperatorConnected(_ connected: ...` |
| 5239 | fn | refreshOperatorAdminScopeFromStore | (private) | `private func refreshOperatorAdminScopeFromStore()` |
| 5258 | mod | extension NodeAppModel | (internal) | - |
| 5259 | fn | enterAppleReviewDemoMode | (internal) | `func enterAppleReviewDemoMode()` |
| 5306 | fn | enterScreenshotFixtureMode | (internal) | `func enterScreenshotFixtureMode()` |
| 5352 | mod | extension NodeAppModel | (internal) | - |
| 5368 | fn | refreshShareRouteFromGateway | (private) | `private func refreshShareRouteFromGateway(shoul...` |
| 5422 | fn | runSharePipelineSelfTest | (internal) | `func runSharePipelineSelfTest() async` |
| 5440 | fn | refreshLastShareEventFromRelay | (internal) | `func refreshLastShareEventFromRelay()` |
| 5446 | fn | recordShareEvent | (internal) | `func recordShareEvent(_ text: String)` |
| 5453 | fn | onNodeGatewayConnected | (internal) | `func onNodeGatewayConnected(     shouldContinue...` |
| 5472 | fn | resumePendingForegroundNodeActionsIfNeeded | (private) | `private func resumePendingForegroundNodeActions...` |
| 5539 | fn | applyPendingForegroundNodeActions | (private) | `private func applyPendingForegroundNodeActions(...` |
| 5598 | fn | retainCompletedPendingForegroundActionIDs | (private) | `private func retainCompletedPendingForegroundAc...` |
| 5613 | fn | removeCompletedPendingForegroundActionID | (private) | `private func removeCompletedPendingForegroundAc...` |
| 5623 | fn | isCurrentGatewaySessionRoute | (private) | `private func isCurrentGatewaySessionRoute(     ...` |
| 5640 | fn | ackPendingForegroundNodeAction | (private) | `private func ackPendingForegroundNodeAction(   ...` |
| 5678 | fn | handleWatchQuickReply | (private) | `private func handleWatchQuickReply(_ event: Wat...` |
| 5736 | fn | makeWatchReplyAgentMessage | (private) | `private static func makeWatchReplyAgentMessage(...` |
| 5758 | fn | restorePersistedWatchExecApprovalBridgeState | (private) | `private func restorePersistedWatchExecApprovalB...` |
| 5847 | fn | currentExecApprovalGatewayStableID | (private) | `private func currentExecApprovalGatewayStableID...` |
| 5853 | fn | isExecApprovalPromptCurrent | (private) | `private func isExecApprovalPromptCurrent(_ prom...` |
| 5862 | fn | isWatchExecApprovalPromptCurrent | (private) | `private func isWatchExecApprovalPromptCurrent(_...` |
| 5869 | fn | invalidateExecApprovalSurfacesForGatewayChange | (private) | `private func invalidateExecApprovalSurfacesForG...` |
| 5909 | fn | persistWatchExecApprovalBridgeState | (private) | `private func persistWatchExecApprovalBridgeState()` |
| 5943 | fn | pruneExpiredWatchExecApprovalPrompts | (private) | `private func pruneExpiredWatchExecApprovalPromp...` |
| 5951 | fn | handleWatchMessagingStatusChanged | (private) | `private func handleWatchMessagingStatusChanged(...` |
| 5965 | fn | appendPendingWatchExecApprovalRecoveryPush | (private) | `private func appendPendingWatchExecApprovalReco...` |
| 5979 | fn | removePendingWatchExecApprovalRecoveryPush | (private) | `private func removePendingWatchExecApprovalReco...` |
| 5992 | fn | appendPendingExecApprovalResolvedPush | (private) | `private func appendPendingExecApprovalResolvedP...` |
| 6008 | fn | removePendingExecApprovalResolvedPush | (private) | `private func removePendingExecApprovalResolvedP...` |
| 6018 | fn | removePendingPersistedExecApprovalReadback | (private) | `private func removePendingPersistedExecApproval...` |
| 6030 | fn | appendPendingPersistedExecApprovalReadback | (private) | `private func appendPendingPersistedExecApproval...` |
| 6053 | fn | upsertWatchExecApprovalPrompt | (private) | `private func upsertWatchExecApprovalPrompt(_ pr...` |
| 6064 | fn | markExecApprovalOwnerTerminal | (private) | `private func markExecApprovalOwnerTerminal(    ...` |
| 6099 | fn | makeWatchExecApprovalItem | (private) | `private static func makeWatchExecApprovalItem(f...` |
| 6118 | fn | publishWatchExecApprovalPrompt | (private) | `private func publishWatchExecApprovalPrompt(   ...` |
| 6156 | fn | publishWatchExecApprovalResolved | (private) | `private func publishWatchExecApprovalResolved( ...` |
| 6195 | fn | publishWatchExecApprovalTerminal | (private) | `private func publishWatchExecApprovalTerminal( ...` |
| 6245 | fn | watchExecApprovalOutcome | (private) | `private static func watchExecApprovalOutcome(  ...` |
| 6260 | fn | publishWatchExecApprovalExpired | (private) | `private func publishWatchExecApprovalExpired(  ...` |
| 6294 | fn | syncWatchExecApprovalSnapshot | (private) | `private func syncWatchExecApprovalSnapshot(    ...` |
| 6356 | fn | makeWatchChatPreview | (private) | `private func makeWatchChatPreview() async -> Wa...` |
| 6525 | fn | makeWatchAppSnapshot | (private) | `private func makeWatchAppSnapshot(     chatPrev...` |
| 6557 | fn | makeWatchGatewayStatus | (private) | `private func makeWatchGatewayStatus(connected: ...` |
| 6576 | fn | setGatewayConnectionProgress | (internal) | `func setGatewayConnectionProgress(reconnecting:...` |
| 6583 | fn | makeWatchGatewayProblemStatus | (private) | `private static func makeWatchGatewayProblemStat...` |
| 6616 | fn | makeWatchTalkStatus | (private) | `private func makeWatchTalkStatus() -> OpenClawW...` |
| 6655 | fn | makeWatchTalkPresentationStatus | (private) | `private func makeWatchTalkPresentationStatus() ...` |
| 6678 | fn | handleWatchAppCommand | (private) | `private func handleWatchAppCommand(_ event: Wat...` |
| 6708 | fn | handleWatchChatCommand | (private) | `private func handleWatchChatCommand(_ event: Wa...` |
| 6723 | fn | handleWatchMessage | (private) | `private func handleWatchMessage(_ event: WatchA...` |
| 6761 | fn | flushQueuedWatchMessagesIfAvailable | (private) | `private func flushQueuedWatchMessagesIfAvailabl...` |
| 6788 | fn | scheduleWatchMessageRetry | (private) | `private func scheduleWatchMessageRetry(messageI...` |
| 6805 | fn | isWatchMessageSendAvailable | (private) | `private func isWatchMessageSendAvailable() -> Bool` |
| 6809 | fn | currentWatchChatGatewayStableID | (private) | `private func currentWatchChatGatewayStableID() ...` |
| 6813 | fn | normalizedWatchMessageGatewayStableID | (private) | `private func normalizedWatchMessageGatewayStabl...` |
| 6817 | fn | watchMessageTargetsCurrentGateway | (private) | `private func watchMessageTargetsCurrentGateway(...` |
| 6824 | fn | watchAppCommandTargetsCurrentGatewayIfTagged | (private) | `private func watchAppCommandTargetsCurrentGatew...` |
| 6834 | fn | watchMessageKind | (private) | `private func watchMessageKind(_ event: WatchApp...` |
| 6838 | fn | forwardWatchMessage | (private) | `private func forwardWatchMessage(     _ event: ...` |
| 6974 | fn | waitForWatchChatReply | (private) | `private func waitForWatchChatReply(     transpo...` |
| 7002 | fn | sendWatchChatCompletion | (private) | `private func sendWatchChatCompletion(commandId:...` |
| 7021 | fn | finishForwardedWatchMessage | (private) | `private func finishForwardedWatchMessage(_ even...` |
| 7031 | fn | syncWatchAppSnapshot | (private) | `private func syncWatchAppSnapshot(     reason: ...` |
| 7061 | fn | refreshWatchExecApprovalSnapshotOnDemand | (private) | `private func refreshWatchExecApprovalSnapshotOn...` |
| 7093 | fn | reconcileWatchExecApprovalCache | (private) | `@discardableResult   private func reconcileWatc...` |
| 7231 | fn | readBackCachedWatchExecApprovalPrompts | (private) | `private func readBackCachedWatchExecApprovalPro...` |
| 7279 | fn | readBackPersistedWatchExecApprovalReadbacks | (private) | `private func readBackPersistedWatchExecApproval...` |
| 7318 | fn | readBackHeldWatchExecApprovals | (private) | `private func readBackHeldWatchExecApprovals(   ...` |
| 7378 | fn | hydrateWatchExecApprovalCacheIfNeeded | (private) | `@discardableResult   private func hydrateWatchE...` |
| 7479 | fn | pendingExecApprovalPushesForWatchRecovery | (private) | `private func pendingExecApprovalPushesForWatchR...` |
| 7499 | fn | handleWatchExecApprovalResolve | (private) | `@discardableResult   private func handleWatchEx...` |
| 7630 | fn | unlockPendingExecApprovalPromptForRetry | (private) | `private func unlockPendingExecApprovalPromptFor...` |
| 7648 | fn | readBackWatchExecApprovalPromptForResolve | (private) | `private func readBackWatchExecApprovalPromptFor...` |
| 7693 | fn | republishCachedWatchExecApprovalPromptForRetry | (private) | `private func republishCachedWatchExecApprovalPr...` |
| 7708 | fn | ownerScopedWatchExecApprovalEvent | (private) | `private func ownerScopedWatchExecApprovalEvent(...` |
| 7725 | fn | enqueuePendingWatchExecApprovalResolution | (private) | `private func enqueuePendingWatchExecApprovalRes...` |
| 7740 | fn | removePendingWatchExecApprovalResolution | (private) | `private func removePendingWatchExecApprovalReso...` |
| 7750 | fn | flushPendingWatchExecApprovalResolutions | (private) | `private func flushPendingWatchExecApprovalResol...` |
| 7783 | fn | handleExecApprovalRequestedRemotePush | (internal) | `func handleExecApprovalRequestedRemotePush(_ pu...` |
| 7858 | fn | handleExecApprovalResolvedForCurrentGateway | (private) | `@discardableResult   private func handleExecApp...` |
| 7995 | fn | canApplyExecApprovalResolvedState | (private) | `private func canApplyExecApprovalResolvedState(...` |
| 8007 | fn | handleExecApprovalResolvedRemotePush | (internal) | `func handleExecApprovalResolvedRemotePush(_ pus...` |
| 8035 | fn | applyValidatedExecApprovalResolvedPush | (private) | `@discardableResult   private func applyValidate...` |
| 8076 | fn | flushPendingExecApprovalResolvedPushes | (private) | `private func flushPendingExecApprovalResolvedPu...` |
| 8103 | fn | handleSilentPushWake | (internal) | `func handleSilentPushWake(_ userInfo: [AnyHasha...` |
| 8152 | fn | handleBackgroundRefreshWake | (internal) | `func handleBackgroundRefreshWake(trigger: Strin...` |
| 8174 | fn | handleSignificantLocationWakeIfNeeded | (internal) | `func handleSignificantLocationWakeIfNeeded() async` |
| 8217 | fn | updateAPNsDeviceToken | (internal) | `func updateAPNsDeviceToken(_ tokenData: Data)` |
| 8228 | fn | registerAPNsTokenIfNeeded | (private) | `private func registerAPNsTokenIfNeeded(     sho...` |
| 8289 | fn | makeAPNsRegistrationContext | (private) | `private func makeAPNsRegistrationContext(     u...` |
| 8329 | fn | canPublishAPNsRegistration | (private) | `private func canPublishAPNsRegistration(usesRel...` |
| 8359 | fn | fetchPushRelayGatewayIdentity | (private) | `private func fetchPushRelayGatewayIdentity(    ...` |
| 8387 | fn | isSilentPushPayload | (private) | `private static func isSilentPushPayload(_ userI...` |
| 8398 | fn | hasContentAvailable | (private) | `private static func hasContentAvailable(_ value...` |
| 8408 | fn | makePushWakeAttemptID | (private) | `private static func makePushWakeAttemptID() -> ...` |
| 8413 | fn | openclawPushKind | (private) | `private static func openclawPushKind(_ userInfo...` |
| 8429 | fn | presentExecApprovalNotificationPrompt | (internal) | `func presentExecApprovalNotificationPrompt(    ...` |
| 8461 | fn | presentExecApprovalGatewayEventPrompt | (private) | `private func presentExecApprovalGatewayEventPro...` |
| 8473 | fn | presentExecApprovalPrompt | (private) | `private func presentExecApprovalPrompt(     app...` |
| 8589 | fn | canMutatePendingExecApprovalPromptState | (private) | `private func canMutatePendingExecApprovalPrompt...` |
| 8601 | fn | presentFetchedExecApprovalPrompt | (private) | `private func presentFetchedExecApprovalPrompt( ...` |
| 8638 | fn | makeExecApprovalPrompt | (private) | `private static func makeExecApprovalPrompt(    ...` |
| 8690 | fn | makeExecApprovalPrompt | (private) | `private static func makeExecApprovalPrompt(    ...` |
| 8710 | fn | makeExecApprovalPrompt | (private) | `private static func makeExecApprovalPrompt(_ in...` |
| 8747 | fn | approvalPresentationString | (private) | `private static func approvalPresentationString(...` |
| 8753 | fn | isValidOptionalApprovalPresentationString | (private) | `private static func isValidOptionalApprovalPres...` |
| 8763 | fn | isValidExecApprovalPresentation | (private) | `private static func isValidExecApprovalPresenta...` |
| 8787 | fn | isValidPluginApprovalPresentation | (private) | `private static func isValidPluginApprovalPresen...` |
| 8812 | fn | approvalKind | (private) | `private static func approvalKind(     from pres...` |
| 8838 | method | init | (internal) | `init(_ value: AllowedApprovalSnapshot)` |
| 8848 | method | init | (internal) | `init(_ value: DeniedApprovalSnapshot)` |
| 8858 | method | init | (internal) | `init(_ value: ExpiredApprovalSnapshot)` |
| 8868 | method | init | (internal) | `init(_ value: CancelledApprovalSnapshot)` |
| 8878 | method | init | (private) | `private init(       id: String,       urlPath: ...` |
| 8895 | fn | makeExecApprovalTerminalResult | (private) | `private static func makeExecApprovalTerminalRes...` |
| 8918 | fn | makeExecApprovalTerminalResult | (private) | `private static func makeExecApprovalTerminalRes...` |
| 8956 | fn | makeExecApprovalTerminalResult | (private) | `private static func makeExecApprovalTerminalRes...` |
| 8982 | fn | execApprovalTerminalText | (private) | `private static func execApprovalTerminalText(  ...` |
| 9018 | fn | operatorRouteForExecApproval | (private) | `private func operatorRouteForExecApproval(     ...` |
| 9061 | fn | validatedExecApprovalPushRoute | (private) | `private func validatedExecApprovalPushRoute(   ...` |
| 9076 | fn | validateExecApprovalPushRoute | (private) | `private func validateExecApprovalPushRoute(    ...` |
| 9113 | fn | fetchExecApprovalPrompt | (private) | `private func fetchExecApprovalPrompt(     appro...` |
| 9213 | fn | decodeUnifiedExecApprovalGet | (private) | `private static func decodeUnifiedExecApprovalGe...` |
| 9250 | fn | fetchLegacyExecApprovalPrompt | (private) | `private func fetchLegacyExecApprovalPrompt(    ...` |
| 9298 | fn | dismissPendingExecApprovalPrompt | (internal) | `func dismissPendingExecApprovalPrompt()` |
| 9311 | fn | presentPendingExecApprovalFromInbox | (internal) | `func presentPendingExecApprovalFromInbox(_ key:...` |
| 9318 | fn | dismissPendingExecApprovalPrompt | (internal) | `func dismissPendingExecApprovalPrompt(approvalI...` |
| 9322 | fn | resolvePendingExecApprovalPrompt | (internal) | `func resolvePendingExecApprovalPrompt(decision:...` |
| 9378 | fn | resolveExecApprovalNotificationDecision | (private) | `private func resolveExecApprovalNotificationDec...` |
| 9538 | fn | testExecApprovalResolutionOutcome | (private) | `private func testExecApprovalResolutionOutcome(...` |
| 9572 | fn | execApprovalRPCFamily | (private) | `private func execApprovalRPCFamily(route: Gatew...` |
| 9613 | fn | resolveLegacyExecApproval | (private) | `private func resolveLegacyExecApproval(     app...` |
| 9703 | fn | reconcileUnknownExecApprovalResolution | (private) | `private func reconcileUnknownExecApprovalResolu...` |
| 9747 | fn | applyCanonicalExecApprovalTerminal | (private) | `private func applyCanonicalExecApprovalTerminal...` |
| 9778 | fn | applyLegacyExecApprovalTerminal | (private) | `private func applyLegacyExecApprovalTerminal(  ...` |
| 9806 | fn | markPendingExecApprovalTerminal | (private) | `private func markPendingExecApprovalTerminal(  ...` |
| 9827 | fn | markPendingExecApprovalTerminal | (private) | `private func markPendingExecApprovalTerminal(  ...` |
| 9841 | fn | execApprovalVerdict | (private) | `private static func execApprovalVerdict(for dec...` |
| 9852 | fn | isValidUnifiedExecApprovalResolveAck | (private) | `private static func isValidUnifiedExecApprovalR...` |
| 9860 | fn | clearPendingExecApprovalPromptIfMatches | (private) | `private func clearPendingExecApprovalPromptIfMa...` |
| 9869 | fn | removeCurrentGatewayExecApprovalNotifications | (private) | `private func removeCurrentGatewayExecApprovalNo...` |
| 9893 | fn | clearNotificationPermissionGuidancePromptIfMatches | (private) | `private func clearNotificationPermissionGuidanc...` |
| 9925 | fn | waitForGatewayConnection | (private) | `private func waitForGatewayConnection(timeoutMs...` |
| 9945 | fn | waitForOperatorConnection | (private) | `private func waitForOperatorConnection(timeoutM...` |
| 9965 | fn | ensureOperatorReconnectLoopIfNeeded | (private) | `private func ensureOperatorReconnectLoopIfNeeded()` |
| 9983 | fn | ensureOperatorApprovalConnectionForWatchReview | (private) | `private func ensureOperatorApprovalConnectionFo...` |
| 10086 | fn | ensureOperatorApprovalConnection | (private) | `private func ensureOperatorApprovalConnection(t...` |
| 10094 | fn | performBackgroundAliveBeaconIfNeeded | (private) | `private func performBackgroundAliveBeaconIfNeed...` |
| 10169 | fn | publishBackgroundAliveBeacon | (private) | `private func publishBackgroundAliveBeacon(     ...` |
| 10201 | mod | extension NodeAppModel | (internal) | - |
| 10202 | fn | refreshWakeWordsFromGateway | (private) | `private func refreshWakeWordsFromGateway(     s...` |
| 10224 | fn | isGatewayHealthMonitorDisabled | (private) | `private func isGatewayHealthMonitorDisabled() -...` |
| 10228 | fn | setGatewayHealthMonitorDisabled | (private) | `private func setGatewayHealthMonitorDisabled(_ ...` |
| 10232 | fn | sendVoiceTranscript | (internal) | `func sendVoiceTranscript(text: String, sessionK...` |
| 10273 | fn | handleDeepLink | (internal) | `func handleDeepLink(url: URL) async` |
| 10286 | fn | stageGatewaySetupLink | (internal) | `func stageGatewaySetupLink(_ link: GatewayConne...` |
| 10291 | fn | consumePendingGatewaySetupLink | (internal) | `func consumePendingGatewaySetupLink() -> Gatewa...` |
| 10296 | fn | handleAgentDeepLink | (private) | `private func handleAgentDeepLink(_ link: AgentD...` |
| 10359 | fn | sendAgentRequest | (private) | `private func sendAgentRequest(     link: AgentD...` |
| 10395 | fn | isGatewayConnected | (private) | `private func isGatewayConnected() async -> Bool` |
| 10399 | fn | applyMainSessionKey | (private) | `private func applyMainSessionKey(_ key: String?)` |
| 10408 | fn | approvePendingAgentDeepLinkPrompt | (internal) | `func approvePendingAgentDeepLinkPrompt() async` |
| 10420 | fn | declinePendingAgentDeepLinkPrompt | (internal) | `func declinePendingAgentDeepLinkPrompt()` |
| 10428 | fn | presentAgentDeepLinkPrompt | (private) | `private func presentAgentDeepLinkPrompt(_ promp...` |
| 10433 | fn | queueAgentDeepLinkPrompt | (private) | `private func queueAgentDeepLinkPrompt(_ prompt:...` |
| 10451 | fn | deliverQueuedAgentDeepLinkPrompt | (private) | `private func deliverQueuedAgentDeepLinkPrompt()...` |
| 10482 | fn | submitAgentDeepLink | (private) | `private func submitAgentDeepLink(_ link: AgentD...` |
| 10496 | fn | effectiveAgentDeepLinkForPrompt | (private) | `private func effectiveAgentDeepLinkForPrompt(_ ...` |
| 10509 | fn | isUnattendedDeepLinkAllowed | (private) | `private func isUnattendedDeepLinkAllowed(_ key:...` |
| 10515 | fn | expectedDeepLinkKey | (private) | `private static func expectedDeepLinkKey() -> St...` |
| 10525 | fn | generateDeepLinkKey | (private) | `private static func generateDeepLinkKey() -> St...` |
| 10538 | mod | extension NodeAppModel | (internal) | - |
| 10539 | fn | _bridgeConsumeMirroredWatchReply | (internal) | `func _bridgeConsumeMirroredWatchReply(_ event: ...` |
| 10545 | mod | extension NodeAppModel | (internal) | - |
| 10546 | fn | _test_setActiveGatewayConnectConfig | (internal) | `func _test_setActiveGatewayConnectConfig(_ conf...` |
| 10549 | fn | _test_forceTalkPermissionUpgradeRequest | (internal) | `func _test_forceTalkPermissionUpgradeRequest() ...` |
| 10553 | fn | _test_handleInvoke | (internal) | `func _test_handleInvoke(     _ req: BridgeInvok...` |
| 10560 | fn | _test_acquirePttVoiceWakeLease | (internal) | `func _test_acquirePttVoiceWakeLease(captureId: ...` |
| 10564 | fn | _test_releasePttVoiceWakeLease | (internal) | `func _test_releasePttVoiceWakeLease(captureId: ...` |
| 10568 | fn | _test_setTalkCapturePreparationHandler | (internal) | `func _test_setTalkCapturePreparationHandler(_ h...` |
| 10572 | fn | _test_setTalkCaptureStartedHandler | (internal) | `func _test_setTalkCaptureStartedHandler(_ handl...` |
| 10576 | fn | _test_setChatSessionRoutingRestoreHandler | (internal) | `func _test_setChatSessionRoutingRestoreHandler(...` |
| 10580 | fn | _test_hasChatSessionRoutingRestoreTask | (internal) | `func _test_hasChatSessionRoutingRestoreTask() -...` |
| 10584 | fn | _test_talkPreparationWaiterCount | (internal) | `func _test_talkPreparationWaiterCount() -> Int` |
| 10588 | fn | _test_talkPttCommandEpoch | (internal) | `func _test_talkPttCommandEpoch() -> UInt64` |
| 10592 | fn | _test_pttVoiceWakeLeaseCaptureIds | (internal) | `func _test_pttVoiceWakeLeaseCaptureIds() -> Set...` |
| 10596 | fn | _test_invalidateNodePushToTalkRoute | (internal) | `func _test_invalidateNodePushToTalkRoute()` |
| 10600 | fn | _test_invalidateOperatorTalkRoute | (internal) | `func _test_invalidateOperatorTalkRoute()` |
| 10604 | fn | _test_applyMainSessionKey | (internal) | `func _test_applyMainSessionKey(_ key: String?)` |
| 10608 | fn | _test_prepareForGatewayConnect | (internal) | `func _test_prepareForGatewayConnect(     stable...` |
| 10617 | fn | _test_admitTalkAfterSessionHydration | (internal) | `func _test_admitTalkAfterSessionHydration() async` |
| 10629 | fn | _test_encodePayload | (internal) | `static func _test_encodePayload(_ obj: some Enc...` |
| 10633 | fn | _test_handleCanvasA2UIAction | (internal) | `func _test_handleCanvasA2UIAction(body: [String...` |
| 10637 | fn | _test_queuedWatchReplyCount | (internal) | `func _test_queuedWatchReplyCount() -> Int` |
| 10641 | fn | _test_setWatchMessageRetryAttempts | (internal) | `func _test_setWatchMessageRetryAttempts(_ attem...` |
| 10645 | fn | _test_watchMessageRetryAttempts | (internal) | `func _test_watchMessageRetryAttempts(messageID:...` |
| 10649 | fn | _test_queuedWatchChatCommandCount | (internal) | `func _test_queuedWatchChatCommandCount() -> Int` |
| 10653 | fn | _test_queuedWatchChatCommandIds | (internal) | `func _test_queuedWatchChatCommandIds() -> [String]` |
| 10657 | fn | _test_recordWatchPromptRoute | (internal) | `func _test_recordWatchPromptRoute(promptID: Str...` |
| 10663 | fn | _test_setConnectedGatewayID | (internal) | `func _test_setConnectedGatewayID(_ gatewayID: S...` |
| 10667 | fn | _test_setAgentRequestHandler | (internal) | `func _test_setAgentRequestHandler(_ handler: @e...` |
| 10671 | fn | _test_resetPersistedWatchChatQueueState | (internal) | `static func _test_resetPersistedWatchChatQueueS...` |
| 10675 | fn | _test_resetPersistedWatchReplyQueueState | (internal) | `static func _test_resetPersistedWatchReplyQueue...` |
| 10679 | fn | _test_setGatewayConnected | (internal) | `func _test_setGatewayConnected(_ connected: Bool)` |
| 10683 | fn | _test_setOperatorConnected | (internal) | `func _test_setOperatorConnected(_ connected: Bool)` |
| 10687 | fn | _test_canPublishAPNsRegistration | (internal) | `func _test_canPublishAPNsRegistration(usesRelay...` |
| 10708 | fn | _test_isGatewayConnected | (internal) | `func _test_isGatewayConnected() -> Bool` |
| 10712 | fn | _test_refreshOperatorAdminScopeFromStore | (internal) | `func _test_refreshOperatorAdminScopeFromStore()` |
| 10729 | fn | _test_makeOperatorConnectOptions | (internal) | `func _test_makeOperatorConnectOptions(     clie...` |
| 10744 | fn | _test_presentExecApprovalPrompt | (internal) | `func _test_presentExecApprovalPrompt(_ prompt: ...` |
| 10751 | fn | _test_dismissPendingExecApprovalPrompt | (internal) | `func _test_dismissPendingExecApprovalPrompt()` |
| 10755 | fn | _test_applyOperatorGatewayConnectionProblem | (internal) | `func _test_applyOperatorGatewayConnectionProble...` |
| 10759 | fn | _test_clearOperatorGatewayConnectionProblemIfCurrent | (internal) | `func _test_clearOperatorGatewayConnectionProble...` |
| 10763 | fn | _test_clearGatewayConnectionProblem | (internal) | `func _test_clearGatewayConnectionProblem()` |
| 10767 | fn | _test_mapNodeGatewayConnectionError | (internal) | `func _test_mapNodeGatewayConnectionError(_ erro...` |
| 10771 | fn | _test_applyNodeGatewayConnectionError | (internal) | `func _test_applyNodeGatewayConnectionError(_ er...` |
| 10777 | fn | _test_pendingExecApprovalPrompt | (internal) | `func _test_pendingExecApprovalPrompt() -> ExecA...` |
| 10781 | fn | _test_pendingExecApprovalInboxItems | (internal) | `func _test_pendingExecApprovalInboxItems() -> [...` |
| 10787 | fn | _test_presentPendingExecApprovalFromInbox | (internal) | `func _test_presentPendingExecApprovalFromInbox(...` |
| 10806 | fn | _test_pendingExecApprovalState | (internal) | `func _test_pendingExecApprovalState() -> Pendin...` |
| 10819 | fn | _test_setPendingExecApprovalPromptUncertain | (internal) | `func _test_setPendingExecApprovalPromptUncertai...` |
| 10827 | fn | _test_pendingNotificationPermissionGuidancePrompt | (internal) | `func _test_pendingNotificationPermissionGuidanc...` |
| 10831 | fn | _debug_presentNotificationPermissionGuidancePromptForScreenshot | (internal) | `func _debug_presentNotificationPermissionGuidan...` |
| 10837 | fn | _test_resetExecApprovalNotificationGuidanceSuppression | (internal) | `func _test_resetExecApprovalNotificationGuidanc...` |
| 10841 | fn | _test_recordPendingWatchExecApprovalRecoveryID | (internal) | `func _test_recordPendingWatchExecApprovalRecove...` |
| 10850 | fn | _test_removePendingWatchExecApprovalRecoveryPush | (internal) | `func _test_removePendingWatchExecApprovalRecove...` |
| 10854 | fn | _test_removePendingExecApprovalResolvedPush | (internal) | `func _test_removePendingExecApprovalResolvedPus...` |
| 10858 | fn | _test_pendingWatchExecApprovalRecoveryIDs | (internal) | `func _test_pendingWatchExecApprovalRecoveryIDs(...` |
| 10862 | fn | _test_pendingWatchExecApprovalRecoveryPushes | (internal) | `func _test_pendingWatchExecApprovalRecoveryPush...` |
| 10866 | fn | _test_pendingPersistedExecApprovalReadbacks | (internal) | `func _test_pendingPersistedExecApprovalReadback...` |
| 10874 | fn | _test_watchExecApprovalCacheIDs | (internal) | `func _test_watchExecApprovalCacheIDs() -> [String]` |
| 10880 | fn | _test_handleExecApprovalResolvedForCurrentGateway | (internal) | `func _test_handleExecApprovalResolvedForCurrent...` |
| 10889 | fn | _test_handleWatchExecApprovalResolve | (internal) | `func _test_handleWatchExecApprovalResolve(_ eve...` |
| 10893 | fn | _test_refreshWatchExecApprovalSnapshotOnDemand | (internal) | `func _test_refreshWatchExecApprovalSnapshotOnDe...` |
| 10903 | fn | _test_reconcileWatchExecApprovalCache | (internal) | `@discardableResult   func _test_reconcileWatchE...` |
| 10908 | fn | _test_setUnifiedExecApprovalGetResponse | (internal) | `func _test_setUnifiedExecApprovalGetResponse(  ...` |
| 10927 | fn | _test_setExecApprovalPromptFetchStale | (internal) | `func _test_setExecApprovalPromptFetchStale()` |
| 10931 | fn | _test_setExecApprovalPromptFetchFailure | (internal) | `func _test_setExecApprovalPromptFetchFailure(_ ...` |
| 10935 | fn | _test_setExecApprovalResolutionFailureHandler | (internal) | `func _test_setExecApprovalResolutionFailureHand...` |
| 10944 | fn | _test_setExecApprovalResolutionUncertainHandler | (internal) | `func _test_setExecApprovalResolutionUncertainHa...` |
| 10953 | fn | _test_setExecApprovalResolutionSuccessHandler | (internal) | `func _test_setExecApprovalResolutionSuccessHand...` |
| 10975 | fn | _test_setExecApprovalResolutionUnknownAck | (internal) | `func _test_setExecApprovalResolutionUnknownAck()` |
| 11004 | fn | _test_presentExecApprovalGatewayEventPrompt | (internal) | `func _test_presentExecApprovalGatewayEventPromp...` |
| 11008 | fn | _test_presentExecApprovalNotificationPrompt | (internal) | `func _test_presentExecApprovalNotificationPromp...` |
| 11016 | fn | _test_applyLegacyExecApprovalTerminal | (internal) | `@discardableResult   func _test_applyLegacyExec...` |
| 11039 | fn | _test_pendingExecApprovalResolvedPushes | (internal) | `func _test_pendingExecApprovalResolvedPushes() ...` |
| 11043 | fn | _test_pendingExecApprovalIDsForWatchRecovery | (internal) | `func _test_pendingExecApprovalIDsForWatchRecove...` |
| 11064 | fn | _test_handleOperatorGatewayServerEvent | (internal) | `func _test_handleOperatorGatewayServerEvent(_ e...` |
| 11068 | fn | _test_handleOperatorGatewayServerEvent | (internal) | `func _test_handleOperatorGatewayServerEvent(   ...` |
| 11084 | fn | _test_makeExecApprovalPrompt | (internal) | `static func _test_makeExecApprovalPrompt(     i...` |
| 11118 | fn | _test_decodeUnifiedExecApprovalPrompt | (internal) | `static func _test_decodeUnifiedExecApprovalProm...` |
| 11131 | fn | _test_decodeUnifiedExecApprovalResolution | (internal) | `static func _test_decodeUnifiedExecApprovalReso...` |
| 11150 | fn | _test_isValidUnifiedExecApprovalResolveAck | (internal) | `static func _test_isValidUnifiedExecApprovalRes...` |
| 11166 | fn | _test_applyUnifiedExecApprovalResolveResult | (internal) | `func _test_applyUnifiedExecApprovalResolveResul...` |
| 11210 | fn | _test_currentDeepLinkKey | (internal) | `static func _test_currentDeepLinkKey() -> String` |
| 11222 | fn | _test_resetPersistedWatchExecApprovalBridgeState | (internal) | `static func _test_resetPersistedWatchExecApprov...` |
| 11226 | fn | _test_setPersistedWatchExecApprovalBridgeStateJSON | (internal) | `static func _test_setPersistedWatchExecApproval...` |
| 11269 | fn | _test_shouldRequestStoredOperatorApprovalScope | (internal) | `func _test_shouldRequestStoredOperatorApprovalS...` |
| 11293 | fn | _test_shouldRequestStoredOperatorAdminScope | (internal) | `func _test_shouldRequestStoredOperatorAdminScop...` |
| 11297 | fn | _test_completeSuccessfulGatewayAuthHandoff | (internal) | `func _test_completeSuccessfulGatewayAuthHandoff...` |
| 11309 | fn | _test_currentGatewayReconnectOptions | (internal) | `func _test_currentGatewayReconnectOptions(     ...` |
| 11316 | fn | _test_hasGatewayLoopTasks | (internal) | `func _test_hasGatewayLoopTasks() -> (node: Bool...` |
| 11320 | fn | _test_setGatewayLoopTasks | (internal) | `func _test_setGatewayLoopTasks(     node: Task<...` |
| 11328 | fn | _test_setGatewaySessionResetTask | (internal) | `func _test_setGatewaySessionResetTask(_ task: T...` |
| 11343 | fn | _test_restartGatewaySessionsAfterForegroundStaleConnection | (internal) | `func _test_restartGatewaySessionsAfterForegroun...` |
| 11350 | mod | extension NodeAppModel | (internal) | - |
| 11351 | fn | clearGatewayProblemForCommittedTargetSwitch | (private) | `private func clearGatewayProblemForCommittedTar...` |
