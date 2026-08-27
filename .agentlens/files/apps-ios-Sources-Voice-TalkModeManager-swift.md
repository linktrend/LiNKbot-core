# apps/ios/Sources/Voice/TalkModeManager.swift

[← Back to Module](../modules/apps-ios-Sources-Voice/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 5195
- **Language:** Swift
- **Symbols:** 272
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 10 | class | StreamFailureBox | (private) | `class StreamFailureBox` |
| 13 | fn | set | (internal) | `func set(_ error: Error)` |
| 27 | enum | TalkPushToTalkOnceStart | (internal) | `enum TalkPushToTalkOnceStart` |
| 32 | enum | TalkPhase | (internal) | `enum TalkPhase` |
| 44 | enum | TalkWatchPresentation | (internal) | `enum TalkWatchPresentation` |
| 50 | struct | FinishingPushToTalk | (private) | `struct FinishingPushToTalk` |
| 56 | struct | ActivePushToTalk | (private) | `struct ActivePushToTalk` |
| 62 | enum | ChatCompletionState | (private) | `enum ChatCompletionState` |
| 69 | struct | ChatCompletionResult | (private) | `struct ChatCompletionResult` |
| 74 | class | TranscriptStreamingOwner | (private) | `class TranscriptStreamingOwner` |
| 86 | enum | PushToTalkGatewayContext | (private) | `enum PushToTalkGatewayContext` |
| 96 | class | TalkPushToTalkOnceOperation | (private) | `class TalkPushToTalkOnceOperation` |
| 100 | fn | wait | (internal) | `func wait() async -> OpenClawTalkPTTStopPayload` |
| 113 | fn | finish | (internal) | `func finish(_ payload: OpenClawTalkPTTStopPayload)` |
| 126 | class | TalkModeManager | (internal) | `class TalkModeManager` |
| 344 | fn | nowSeconds | (private) | `private static func nowSeconds() -> TimeInterval` |
| 348 | fn | elapsedMs | (private) | `private static func elapsedMs(since start: Time...` |
| 352 | fn | setStatus | (private) | `@discardableResult   private func setStatus(   ...` |
| 364 | fn | shouldRestartRealtimeSession | (private) | `private static func shouldRestartRealtimeSessio...` |
| 372 | fn | realtimeRestartAttempt | (private) | `private static func realtimeRestartAttempt(    ...` |
| 379 | fn | realtimeRestartDelayNanoseconds | (private) | `private static func realtimeRestartDelayNanosec...` |
| 384 | fn | resetRealtimeRestartState | (private) | `private func resetRealtimeRestartState()` |
| 391 | fn | markRealtimeSessionReady | (private) | `private func markRealtimeSessionReady()` |
| 401 | fn | scheduleRealtimeRestart | (private) | `private func scheduleRealtimeRestart(after dela...` |
| 437 | fn | handleRealtimeSessionFinish | (private) | `private func handleRealtimeSessionFinish()` |
| 495 | fn | selectInputDevice | (internal) | `func selectInputDevice(_ deviceID: String?)` |
| 508 | fn | attachGateway | (internal) | `func attachGateway(_ gateway: GatewayNodeSession)` |
| 522 | fn | updateGatewayConnected | (internal) | `func updateGatewayConnected(_ connected: Bool)` |
| 554 | fn | updateMainSessionKey | (internal) | `@discardableResult   func updateMainSessionKey(...` |
| 585 | fn | isUsingMainSessionKey | (internal) | `func isUsingMainSessionKey(_ sessionKey: String...` |
| 590 | fn | isActivePushToTalkCapture | (internal) | `func isActivePushToTalkCapture(_ captureId: Str...` |
| 594 | fn | enterScreenshotFixtureMode | (internal) | `func enterScreenshotFixtureMode()` |
| 623 | fn | setEnabled | (internal) | `func setEnabled(_ enabled: Bool)` |
| 636 | fn | applyProviderSelectionChanged | (internal) | `func applyProviderSelectionChanged()` |
| 647 | fn | applyAudioRoutePreferenceChanged | (internal) | `func applyAudioRoutePreferenceChanged()` |
| 662 | fn | start | (internal) | `func start() async` |
| 772 | fn | canBeginStart | (private) | `private func canBeginStart() -> Bool` |
| 800 | fn | isCurrentStartAttempt | (private) | `private func isCurrentStartAttempt(_ attemptID:...` |
| 809 | fn | cancelPendingStart | (private) | `private func cancelPendingStart()` |
| 814 | fn | cancelRealtimePrefetch | (private) | `private func cancelRealtimePrefetch()` |
| 835 | fn | applyOpenAIRealtimeSelectionDefaults | (private) | `private func applyOpenAIRealtimeSelectionDefaul...` |
| 855 | fn | stop | (internal) | `func stop()` |
| 901 | fn | suspendForBackground | (internal) | `func suspendForBackground(keepActive: Bool = fa...` |
| 949 | fn | resumeAfterBackground | (internal) | `func resumeAfterBackground(wasKeptActive: Bool ...` |
| 961 | fn | beginPushToTalk | (internal) | `func beginPushToTalk(     transcriptionOnly: Bo...` |
| 1099 | fn | endPushToTalk | (internal) | `func endPushToTalk() -> OpenClawTalkPTTStopPayload` |
| 1104 | fn | endPushToTalk | (internal) | `func endPushToTalk(expectedTranscriptionOnly: B...` |
| 1116 | fn | endPushToTalk | (internal) | `func endPushToTalk(captureId: String) -> OpenCl...` |
| 1214 | fn | beginPushToTalkOnce | (internal) | `func beginPushToTalkOnce(     maxDurationSecond...` |
| 1252 | fn | awaitPushToTalkOnce | (internal) | `func awaitPushToTalkOnce(_ start: TalkPushToTal...` |
| 1272 | fn | cancelPushToTalk | (internal) | `func cancelPushToTalk() -> OpenClawTalkPTTStopP...` |
| 1277 | fn | cancelPushToTalk | (internal) | `func cancelPushToTalk(expectedTranscriptionOnly...` |
| 1289 | fn | cancelPushToTalk | (internal) | `func cancelPushToTalk(captureId: String) -> Ope...` |
| 1317 | fn | ensurePushToTalkStartCurrent | (private) | `private func ensurePushToTalkStartCurrent(     ...` |
| 1327 | fn | requestPushToTalkPermissions | (private) | `private func requestPushToTalkPermissions(     ...` |
| 1361 | fn | pushToTalkStartCancelledError | (private) | `private static func pushToTalkStartCancelledErr...` |
| 1367 | fn | pushToTalkBusyError | (private) | `private static func pushToTalkBusyError() -> NS...` |
| 1373 | fn | pushToTalkModeConflictError | (private) | `private static func pushToTalkModeConflictError...` |
| 1379 | fn | pushToTalkOfflineError | (private) | `private func pushToTalkOfflineError() -> NSError` |
| 1386 | fn | setPushToTalkAudioOwnershipEndHandler | (internal) | `func setPushToTalkAudioOwnershipEndHandler(_ ha...` |
| 1390 | fn | clearActivePushToTalk | (private) | `private func clearActivePushToTalk(_ captureId:...` |
| 1396 | fn | finishActivePushToTalk | (private) | `private func finishActivePushToTalk(_ captureId...` |
| 1402 | fn | transferActivePushToTalkToFinalizer | (private) | `private func transferActivePushToTalkToFinalize...` |
| 1406 | fn | startFinishingPushToTalk | (private) | `private func startFinishingPushToTalk(     capt...` |
| 1447 | fn | cancelFinishingPushToTalk | (private) | `private func cancelFinishingPushToTalk()` |
| 1461 | fn | isCurrentFinishingPushToTalk | (private) | `private func isCurrentFinishingPushToTalk(captu...` |
| 1468 | fn | clearFinishingPushToTalk | (private) | `private func clearFinishingPushToTalk(captureId...` |
| 1486 | fn | beginTranscriptProcessing | (private) | `private func beginTranscriptProcessing() -> UInt64` |
| 1491 | fn | invalidateTranscriptProcessing | (private) | `private func invalidateTranscriptProcessing()` |
| 1495 | fn | isCurrentTranscriptProcessing | (private) | `private func isCurrentTranscriptProcessing(_ ge...` |
| 1499 | fn | scheduleContinuousResume | (private) | `private func scheduleContinuousResume(_ shouldR...` |
| 1506 | fn | startRecognition | (private) | `private func startRecognition(pttCaptureId: Str...` |
| 1581 | fn | updateMicLevel | (private) | `private func updateMicLevel(_ level: Float, rec...` |
| 1598 | fn | updateNoiseFloorIfNeeded | (private) | `private func updateNoiseFloorIfNeeded(_ raw: Do...` |
| 1615 | fn | handleRecognitionUpdate | (private) | `private func handleRecognitionUpdate(     resul...` |
| 1649 | fn | handleRecognitionError | (private) | `private func handleRecognitionError(_ error: Er...` |
| 1700 | fn | restartRecognitionAfterError | (private) | `private func restartRecognitionAfterError(expec...` |
| 1722 | fn | canRestartNativeRecognition | (private) | `private func canRestartNativeRecognition(expect...` |
| 1732 | fn | restoreListeningStatusAfterSpeechErrorRestart | (private) | `private func restoreListeningStatusAfterSpeechE...` |
| 1739 | fn | stopRecognition | (private) | `private func stopRecognition()` |
| 1761 | fn | stopNativeCaptureAndDiscardTranscript | (private) | `private func stopNativeCaptureAndDiscardTranscr...` |
| 1782 | fn | handleTranscript | (private) | `private func handleTranscript(     transcript: ...` |
| 1825 | fn | startSilenceMonitor | (private) | `private func startSilenceMonitor(pttCaptureId: ...` |
| 1840 | fn | checkSilence | (private) | `private func checkSilence(pttCaptureId: String?...` |
| 1875 | fn | schedulePTTTimeout | (private) | `private func schedulePTTTimeout(seconds: TimeIn...` |
| 1888 | fn | handlePTTTimeout | (private) | `private func handlePTTTimeout(captureId: String...` |
| 1896 | fn | finishPTTOnce | (private) | `private func finishPTTOnce(_ payload: OpenClawT...` |
| 1900 | fn | processTranscript | (private) | `private func processTranscript(_ transcript: St...` |
| 1930 | fn | processTranscript | (private) | `private func processTranscript(     _ transcrip...` |
| 1969 | fn | runTranscriptProcessing | (private) | `private func runTranscriptProcessing(     _ tra...` |
| 2074 | fn | completeTranscriptResponse | (private) | `private func completeTranscriptResponse(     ac...` |
| 2189 | fn | quiesceTranscriptSpeech | (private) | `private func quiesceTranscriptSpeech(ownedGener...` |
| 2200 | fn | startRealtimeIfAvailable | (private) | `private func startRealtimeIfAvailable(attemptID...` |
| 2289 | fn | finishStaleRealtimeStart | (private) | `private func finishStaleRealtimeStart(     _ se...` |
| 2314 | fn | adoptRealtimeVoiceSessionId | (private) | `@discardableResult   private func adoptRealtime...` |
| 2334 | fn | startRealtimeRelayIfAvailable | (private) | `private func startRealtimeRelayIfAvailable(atte...` |
| 2452 | fn | prefetchRealtimeSessionIfReady | (internal) | `func prefetchRealtimeSessionIfReady(     reason...` |
| 2523 | fn | createRealtimeClientSession | (private) | `private func createRealtimeClientSession(     g...` |
| 2549 | fn | consumePrefetchedRealtimeSession | (private) | `private func consumePrefetchedRealtimeSession(p...` |
| 2568 | fn | stopRealtimeSession | (private) | `private func stopRealtimeSession()` |
| 2596 | fn | invalidatePrefetchedRealtimeSession | (private) | `@discardableResult   private func invalidatePre...` |
| 2607 | fn | closeLogicalRealtimeVoiceSessions | (private) | `@discardableResult   private func closeLogicalR...` |
| 2647 | fn | retryRealtimeVoiceSessionClose | (private) | `private static func retryRealtimeVoiceSessionCl...` |
| 2671 | fn | closeRealtimeVoiceSession | (private) | `private func closeRealtimeVoiceSession(     gat...` |
| 2686 | fn | requestRealtimeVoiceSessionClose | (private) | `private func requestRealtimeVoiceSessionClose( ...` |
| 2712 | fn | closeOrphanedRealtimeVoiceSession | (private) | `private func closeOrphanedRealtimeVoiceSession(...` |
| 2734 | fn | buildPrompt | (private) | `private func buildPrompt(transcript: String) ->...` |
| 2743 | fn | normalizedChatSendStatus | (private) | `private static func normalizedChatSendStatus(_ ...` |
| 2755 | fn | isTerminalChatSendSuccess | (private) | `private static func isTerminalChatSendSuccess(_...` |
| 2759 | fn | isTerminalChatSendFailure | (private) | `private static func isTerminalChatSendFailure(_...` |
| 2764 | fn | chatSendHistorySince | (private) | `private static func chatSendHistorySince(     r...` |
| 2771 | fn | sendChat | (private) | `private func sendChat(     _ message: String,  ...` |
| 2794 | fn | waitForChatCompletion | (private) | `private func waitForChatCompletion(     runId: ...` |
| 2848 | fn | waitForAssistantTextFromHistory | (private) | `private func waitForAssistantTextFromHistory(  ...` |
| 2873 | fn | fetchLatestAssistantText | (private) | `private func fetchLatestAssistantText(     gate...` |
| 2890 | fn | latestAssistantText | (private) | `private static func latestAssistantText(     me...` |
| 2915 | fn | playAssistant | (private) | `private func playAssistant(     text: String,  ...` |
| 3077 | fn | playGatewayTalkSpeak | (private) | `private func playGatewayTalkSpeak(     text: St...` |
| 3156 | fn | playSystemVoice | (private) | `private func playSystemVoice(text: String, lang...` |
| 3169 | fn | resolvedElevenLabsAPIKey | (private) | `private func resolvedElevenLabsAPIKey() -> String?` |
| 3181 | fn | makeElevenLabsTTSRequest | (private) | `private func makeElevenLabsTTSRequest(     text...` |
| 3203 | fn | startSpeechInterruptionRecognitionIfNeeded | (private) | `private func startSpeechInterruptionRecognition...` |
| 3212 | fn | isCurrentSpeechGeneration | (private) | `private func isCurrentSpeechGeneration(_ genera...` |
| 3216 | fn | stopSpeaking | (private) | `private func stopSpeaking(storeInterruption: Bo...` |
| 3245 | fn | shouldInterrupt | (private) | `private func shouldInterrupt(with transcript: S...` |
| 3255 | fn | shouldAllowSpeechInterruptForCurrentRoute | (private) | `private func shouldAllowSpeechInterruptForCurre...` |
| 3269 | fn | shouldUseIncrementalTTS | (private) | `private func shouldUseIncrementalTTS() -> Bool` |
| 3280 | fn | applyDirective | (private) | `private func applyDirective(_ directive: TalkDi...` |
| 3301 | fn | resetIncrementalSpeech | (private) | `private func resetIncrementalSpeech()` |
| 3315 | fn | cancelIncrementalSpeech | (private) | `private func cancelIncrementalSpeech()` |
| 3325 | fn | enqueueIncrementalSpeech | (private) | `private func enqueueIncrementalSpeech(_ text: S...` |
| 3335 | fn | startIncrementalSpeechTask | (private) | `private func startIncrementalSpeechTask()` |
| 3385 | fn | cancelIncrementalPrefetch | (private) | `private func cancelIncrementalPrefetch()` |
| 3391 | fn | cancelIncrementalPrefetchMonitor | (private) | `private func cancelIncrementalPrefetchMonitor()` |
| 3396 | fn | startIncrementalPrefetchMonitor | (private) | `private func startIncrementalPrefetchMonitor(co...` |
| 3409 | fn | ensureIncrementalPrefetchForUpcomingSegment | (private) | `private func ensureIncrementalPrefetchForUpcomi...` |
| 3426 | fn | startIncrementalPrefetch | (private) | `private func startIncrementalPrefetch(segment: ...` |
| 3458 | fn | completeIncrementalPrefetch | (private) | `private func completeIncrementalPrefetch(id: UU...` |
| 3464 | fn | clearIncrementalPrefetch | (private) | `private func clearIncrementalPrefetch(id: UUID)` |
| 3470 | fn | failIncrementalPrefetch | (private) | `private func failIncrementalPrefetch(id: UUID, ...` |
| 3477 | fn | consumeIncrementalPrefetchedAudioIfAvailable | (private) | `private func consumeIncrementalPrefetchedAudioI...` |
| 3511 | fn | resolveIncrementalPrefetchOutputFormat | (private) | `private func resolveIncrementalPrefetchOutputFo...` |
| 3518 | fn | finishIncrementalSpeech | (private) | `private func finishIncrementalSpeech() async` |
| 3532 | fn | handleIncrementalAssistantFinal | (private) | `private func handleIncrementalAssistantFinal(te...` |
| 3557 | fn | streamAssistant | (private) | `private func streamAssistant(     runId: String...` |
| 3600 | fn | updateIncrementalContextIfNeeded | (private) | `private func updateIncrementalContextIfNeeded(s...` |
| 3625 | fn | buildIncrementalSpeechContext | (private) | `private func buildIncrementalSpeechContext(    ...` |
| 3674 | fn | makeIncrementalTTSRequest | (private) | `private func makeIncrementalTTSRequest(     tex...` |
| 3703 | fn | monitorStreamFailures | (private) | `private static func monitorStreamFailures(     ...` |
| 3725 | fn | isPCMFormatRejectedByAPI | (private) | `private static func isPCMFormatRejectedByAPI(_ ...` |
| 3735 | fn | makeBufferedAudioStream | (private) | `private static func makeBufferedAudioStream(chu...` |
| 3744 | fn | speakIncrementalSegment | (private) | `private func speakIncrementalSegment(     _ tex...` |
| 3804 | fn | playElevenLabsStream | (private) | `private func playElevenLabsStream(     _ rawStr...` |
| 3833 | struct | IncrementalSpeechBuffer | (private) | `struct IncrementalSpeechBuffer` |
| 3894 | fn | commonPrefixCount | (private) | `private static func commonPrefixCount(_ lhs: St...` |
| 3953 | fn | isBoundary | (private) | `private static func isBoundary(_ ch: Character)...` |
| 3957 | fn | isSoftBoundary | (private) | `private static func isSoftBoundary(_ ch: Charac...` |
| 3963 | mod | extension TalkModeManager | (internal) | - |
| 3964 | fn | resolveVoiceAlias | (internal) | `func resolveVoiceAlias(_ value: String?) -> Str...` |
| 3976 | fn | resolveVoiceId | (internal) | `func resolveVoiceId(     preferred: String?,   ...` |
| 4021 | fn | isLikelyVoiceId | (internal) | `static func isLikelyVoiceId(_ value: String) ->...` |
| 4026 | fn | normalizedTalkApiKey | (private) | `private static func normalizedTalkApiKey(_ raw:...` |
| 4037 | fn | displayName | (private) | `private static func displayName(forProvider pro...` |
| 4056 | fn | applyVoiceModeDescriptor | (private) | `private func applyVoiceModeDescriptor(_ descrip...` |
| 4065 | fn | markRealtimeActive | (private) | `private func markRealtimeActive()` |
| 4074 | fn | phase | (private) | `private static func phase(forRealtimeStatus sta...` |
| 4089 | fn | watchPresentation | (private) | `private static func watchPresentation(forRealti...` |
| 4108 | fn | presentationText | (private) | `private static func presentationText(forRealtim...` |
| 4153 | fn | handleRealtimeRelayStatus | (private) | `private func handleRealtimeRelayStatus(_ status...` |
| 4178 | fn | prepareRealtimeRelayStart | (private) | `private func prepareRealtimeRelayStart()` |
| 4184 | fn | markNativeTalkActive | (private) | `private func markNativeTalkActive()` |
| 4192 | fn | markNativeFallbackActive | (private) | `private func markNativeFallbackActive(after iss...` |
| 4200 | fn | realtimeIssue | (private) | `private func realtimeIssue(message: String, pha...` |
| 4209 | fn | realtimeIssue | (private) | `private func realtimeIssue(from error: Error, p...` |
| 4223 | fn | talkRuntimeIssue | (private) | `private static func talkRuntimeIssue(     from ...` |
| 4244 | fn | restoreConfiguredVoiceModeDescriptor | (private) | `private func restoreConfiguredVoiceModeDescript...` |
| 4248 | fn | buildConfiguredVoiceModeDescriptor | (private) | `private func buildConfiguredVoiceModeDescriptor...` |
| 4265 | fn | ensureTalkConfigLoadedForStart | (private) | `private func ensureTalkConfigLoadedForStart() a...` |
| 4280 | fn | reloadConfig | (internal) | `func reloadConfig(     gateway gatewayOverride:...` |
| 4313 | fn | loadTalkConfig | (private) | `private func loadTalkConfig(     from gateway: ...` |
| 4319 | fn | fetchConfig | (internal) | `func fetchConfig(includeSecrets: Bool) async th...` |
| 4350 | fn | applyLoadedTalkConfig | (private) | `private func applyLoadedTalkConfig(     _ parse...` |
| 4416 | fn | applyTalkConfigCredentials | (private) | `private func applyTalkConfigCredentials(     pa...` |
| 4439 | fn | applyTalkModeDescriptor | (private) | `private func applyTalkModeDescriptor(     routi...` |
| 4481 | fn | applyTalkPermissionState | (private) | `private func applyTalkPermissionState(     reda...` |
| 4500 | fn | applyTalkConfigLoadFailure | (private) | `private func applyTalkConfigLoadFailure(_ error...` |
| 4525 | fn | applyTalkConfigLoadFailureFallback | (private) | `private func applyTalkConfigLoadFailureFallback()` |
| 4556 | fn | markTalkPermissionUpgradeRequested | (internal) | `func markTalkPermissionUpgradeRequested()` |
| 4561 | fn | missingTalkScope | (private) | `private static func missingTalkScope(from error...` |
| 4572 | fn | errorTextIndicatesMissingScope | (private) | `private static func errorTextIndicatesMissingSc...` |
| 4577 | fn | configureOwnedAudioSession | (private) | `private func configureOwnedAudioSession() throws` |
| 4582 | fn | configureOwnedRealtimeAudioSession | (private) | `private func configureOwnedRealtimeAudioSession...` |
| 4587 | fn | deactivateStandaloneAudioSessionIfIdle | (private) | `private func deactivateStandaloneAudioSessionIf...` |
| 4597 | fn | deactivateAudioSession | (private) | `private func deactivateAudioSession()` |
| 4611 | fn | configureAudioSession | (internal) | `static func configureAudioSession(preferredInpu...` |
| 4633 | fn | configureRealtimeAudioSession | (internal) | `static func configureRealtimeAudioSession(prefe...` |
| 4657 | fn | applyPreferredInput | (private) | `private static func applyPreferredInput(_ devic...` |
| 4669 | fn | describeAudioSession | (private) | `private static func describeAudioSession() -> S...` |
| 4687 | class | AudioTapDiagnostics | (private) | `class AudioTapDiagnostics` |
| 4700 | fn | onBuffer | (internal) | `func onBuffer(_ buffer: AVAudioPCMBuffer)` |
| 4745 | mod | extension TalkModeManager | (internal) | - |
| 4746 | fn | realtimeSession | (internal) | `func realtimeSession(_ session: TalkRealtimeWeb...` |
| 4769 | fn | realtimeSession | (internal) | `func realtimeSession(_ session: TalkRealtimeWeb...` |
| 4777 | fn | realtimeSession | (internal) | `func realtimeSession(_ session: TalkRealtimeWeb...` |
| 4788 | fn | realtimeSession | (internal) | `func realtimeSession(_ session: TalkRealtimeWeb...` |
| 4797 | fn | realtimeSession | (internal) | `func realtimeSession(_ session: TalkRealtimeWeb...` |
| 4805 | fn | realtimeSession | (internal) | `func realtimeSession(     _ session: TalkRealti...` |
| 4817 | fn | realtimeSessionDidFinish | (internal) | `func realtimeSessionDidFinish(_ session: TalkRe...` |
| 4826 | mod | extension TalkModeManager | (internal) | - |
| 4827 | fn | _test_preparePrefetchedRealtimeVoiceSession | (internal) | `func _test_preparePrefetchedRealtimeVoiceSessio...` |
| 4840 | fn | _test_prepareLiveRealtimeVoiceSession | (internal) | `func _test_prepareLiveRealtimeVoiceSession(    ...` |
| 4864 | fn | _test_invalidatePrefetchedRealtimeSession | (internal) | `func _test_invalidatePrefetchedRealtimeSession(...` |
| 4868 | fn | _test_activeRealtimeVoiceSessionId | (internal) | `func _test_activeRealtimeVoiceSessionId() -> St...` |
| 4872 | fn | _test_hasPrefetchedRealtimeSession | (internal) | `func _test_hasPrefetchedRealtimeSession() -> Bool` |
| 4876 | fn | _test_clearRealtimeSession | (internal) | `func _test_clearRealtimeSession()` |
| 4880 | fn | _test_setRealtimeVoiceSessionCloseRequest | (internal) | `func _test_setRealtimeVoiceSessionCloseRequest(...` |
| 4886 | fn | _test_retryRealtimeVoiceSessionClose | (internal) | `static func _test_retryRealtimeVoiceSessionClos...` |
| 4895 | fn | _test_shouldRestartRealtimeSession | (internal) | `static func _test_shouldRestartRealtimeSession(...` |
| 4906 | fn | _test_realtimeRestartAttempt | (internal) | `static func _test_realtimeRestartAttempt(     p...` |
| 4915 | fn | _test_realtimeRestartDelayNanoseconds | (internal) | `static func _test_realtimeRestartDelayNanosecon...` |
| 4919 | fn | _test_isPCMFormatRejectedByAPI | (internal) | `static func _test_isPCMFormatRejectedByAPI(_ er...` |
| 4923 | fn | _test_latestAssistantText | (internal) | `static func _test_latestAssistantText(     mess...` |
| 4931 | fn | _test_applyOpenAIRealtimeSelectionDefaults | (internal) | `func _test_applyOpenAIRealtimeSelectionDefaults()` |
| 4935 | fn | _test_applyLoadedTalkConfig | (internal) | `func _test_applyLoadedTalkConfig(     _ parsed:...` |
| 4945 | fn | _test_runtimeRoute | (internal) | `func _test_runtimeRoute() -> TalkModeRuntimeRoute` |
| 4949 | fn | _test_playAssistant | (internal) | `func _test_playAssistant(text: String) async` |
| 4953 | fn | _test_stopSpeaking | (internal) | `func _test_stopSpeaking(storeInterruption: Bool...` |
| 4957 | fn | _test_beginIncrementalSpeechOwnership | (internal) | `func _test_beginIncrementalSpeechOwnership() ->...` |
| 4962 | fn | _test_handleIncrementalAssistantFinal | (internal) | `func _test_handleIncrementalAssistantFinal(text...` |
| 4968 | fn | _test_hasIncrementalSpeechOwnership | (internal) | `func _test_hasIncrementalSpeechOwnership() -> Bool` |
| 4972 | fn | _test_lastInterruptedAtSeconds | (internal) | `func _test_lastInterruptedAtSeconds() -> Double?` |
| 4976 | fn | _test_hasRecognitionRequest | (internal) | `func _test_hasRecognitionRequest() -> Bool` |
| 4980 | fn | _test_activePushToTalkCaptureId | (internal) | `func _test_activePushToTalkCaptureId() -> String?` |
| 4984 | fn | _test_finishingPushToTalkCaptureId | (internal) | `func _test_finishingPushToTalkCaptureId() -> St...` |
| 4988 | fn | _test_setPTTFinalizerHandler | (internal) | `func _test_setPTTFinalizerHandler(_ handler: (@...` |
| 4992 | fn | _test_setStartEntryHandler | (internal) | `func _test_setStartEntryHandler(_ handler: (@Ma...` |
| 4996 | fn | _test_setPTTOnceStartedHandler | (internal) | `func _test_setPTTOnceStartedHandler(_ handler: ...` |
| 5000 | fn | _test_setPTTReservedHandler | (internal) | `func _test_setPTTReservedHandler(_ handler: (@M...` |
| 5004 | fn | _test_pushToTalkCaptureIsIdle | (internal) | `func _test_pushToTalkCaptureIsIdle() -> Bool` |
| 5008 | fn | _test_handlePushToTalkTranscript | (internal) | `func _test_handlePushToTalkTranscript(     _ tr...` |
| 5020 | fn | _test_recognitionGeneration | (internal) | `func _test_recognitionGeneration() -> UInt64` |
| 5024 | fn | _test_handleTranscript | (internal) | `func _test_handleTranscript(     _ transcript: ...` |
| 5037 | fn | _test_lastTranscript | (internal) | `func _test_lastTranscript() -> String` |
| 5041 | fn | _test_audioSessionIsActive | (internal) | `func _test_audioSessionIsActive() -> Bool` |
| 5045 | fn | _test_setContinuousTranscriptProcessingActive | (internal) | `func _test_setContinuousTranscriptProcessingAct...` |
| 5055 | fn | _test_executionMode | (internal) | `func _test_executionMode() -> TalkModeExecution...` |
| 5059 | fn | _test_realtimeProvider | (internal) | `func _test_realtimeProvider() -> String?` |
| 5063 | fn | _test_realtimeModelId | (internal) | `func _test_realtimeModelId() -> String?` |
| 5067 | fn | _test_gatewayTalkUsesRealtimeRelay | (internal) | `func _test_gatewayTalkUsesRealtimeRelay() -> Bool` |
| 5071 | fn | _test_markNativeFallbackActive | (internal) | `func _test_markNativeFallbackActive(after issue...` |
| 5075 | fn | _test_recordRealtimeIssue | (internal) | `func _test_recordRealtimeIssue(_ issue: TalkRun...` |
| 5082 | fn | _test_handleRealtimeRelayStatus | (internal) | `func _test_handleRealtimeRelayStatus(_ status: ...` |
| 5086 | fn | _test_prepareEnabledRealtimeSessionForClose | (internal) | `func _test_prepareEnabledRealtimeSessionForClose()` |
| 5093 | fn | _test_rapidRealtimeRestartCount | (internal) | `func _test_rapidRealtimeRestartCount() -> Int` |
| 5097 | fn | _test_realtimeStatusPreservesPushToTalkCapture | (internal) | `func _test_realtimeStatusPreservesPushToTalkCap...` |
| 5107 | fn | _test_markSpeechErrorStatusPendingRestart | (internal) | `func _test_markSpeechErrorStatusPendingRestart(...` |
| 5116 | fn | _test_restoreListeningStatusAfterSpeechErrorRestart | (internal) | `func _test_restoreListeningStatusAfterSpeechErr...` |
| 5120 | fn | _test_prepareRealtimeRelayStart | (internal) | `func _test_prepareRealtimeRelayStart()` |
| 5124 | fn | _test_setRealtimeRelayStartInFlight | (internal) | `func _test_setRealtimeRelayStartInFlight(_ inFl...` |
| 5128 | fn | _test_realtimeRelayStartIsInFlight | (internal) | `func _test_realtimeRelayStartIsInFlight() -> Bool` |
| 5132 | fn | _test_mainSessionKey | (internal) | `func _test_mainSessionKey() -> String` |
| 5136 | fn | _test_realtimeIssue | (internal) | `func _test_realtimeIssue(from error: Error, pha...` |
| 5140 | fn | _test_hasPendingRealtimeIssue | (internal) | `func _test_hasPendingRealtimeIssue() -> Bool` |
| 5144 | fn | _test_gatewayTalkActiveModeTitle | (internal) | `func _test_gatewayTalkActiveModeTitle() -> String` |
| 5148 | fn | _test_gatewayTalkActiveModeSubtitle | (internal) | `func _test_gatewayTalkActiveModeSubtitle() -> S...` |
| 5152 | fn | _test_gatewayTalkLastIssueText | (internal) | `func _test_gatewayTalkLastIssueText() -> String?` |
| 5156 | fn | _test_gatewayTalkCurrentFallbackIssue | (internal) | `func _test_gatewayTalkCurrentFallbackIssue() ->...` |
| 5160 | fn | _test_incrementalReset | (internal) | `func _test_incrementalReset()` |
| 5164 | fn | _test_incrementalIngest | (internal) | `func _test_incrementalIngest(_ text: String, is...` |
| 5171 | struct | IncrementalSpeechContext | (private) | `struct IncrementalSpeechContext` |
| 5181 | struct | IncrementalSpeechPrefetchState | (private) | `struct IncrementalSpeechPrefetchState` |
| 5190 | struct | IncrementalPrefetchedAudio | (private) | `struct IncrementalPrefetchedAudio` |
