# apps/ios/Sources/Voice/RealtimeTalkRelaySession.swift

[← Back to Module](../modules/apps-ios-Sources-Voice/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1189
- **Language:** Swift
- **Symbols:** 61
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 7 | fn | makeRealtimeAudioTapBlock | (private) | `private func makeRealtimeAudioTapBlock(   input...` |
| 26 | class | RealtimeAudioSender | (private) | `actor RealtimeAudioSender` |
| 39 | fn | close | (internal) | `func close()` |
| 43 | fn | send | (internal) | `func send(_ data: Data, timestampMs: Double) as...` |
| 69 | class | RealtimeTalkRelaySession | (internal) | `class RealtimeTalkRelaySession` |
| 94 | fn | live | (internal) | `static func live(gateway: GatewayNodeSession, r...` |
| 212 | fn | start | (internal) | `func start() async throws` |
| 290 | fn | stop | (internal) | `func stop()` |
| 294 | fn | close | (private) | `private func close(sendClose: Bool)` |
| 336 | fn | cancelOutput | (internal) | `func cancelOutput(reason: String = "user")` |
| 350 | fn | createRelaySession | (private) | `private func createRelaySession() async throws ...` |
| 377 | fn | configureAudioContract | (private) | `private func configureAudioContract(_ raw: AnyC...` |
| 391 | fn | startEventPump | (private) | `private func startEventPump(stream: AsyncStream...` |
| 401 | fn | handleGatewayEvent | (private) | `private func handleGatewayEvent(_ event: EventF...` |
| 484 | fn | waitForStartupResult | (private) | `private func waitForStartupResult(     timeoutS...` |
| 504 | fn | drainPendingPreRelayEvents | (private) | `private func drainPendingPreRelayEvents(lifecyc...` |
| 513 | fn | finishStartupWait | (private) | `private func finishStartupWait(_ result: Startu...` |
| 519 | fn | timeoutStartupWaiterIfNeeded | (private) | `private func timeoutStartupWaiterIfNeeded(lifec...` |
| 542 | fn | issue | (private) | `private static func issue(     payload: [String...` |
| 560 | fn | recordOutputAudioChunk | (private) | `private func recordOutputAudioChunk(byteCount: ...` |
| 568 | fn | markOutputAudioStarted | (private) | `private func markOutputAudioStarted(byteCount: ...` |
| 580 | fn | handleInputLevelDuringOutput | (private) | `private func handleInputLevelDuringOutput(_ rms...` |
| 593 | fn | handleTranscriptEvent | (private) | `private func handleTranscriptEvent(_ payload: [...` |
| 607 | fn | handleToolCall | (private) | `private func handleToolCall(_ payload: [String:...` |
| 671 | fn | startToolCall | (private) | `private func startToolCall(_ payload: [String: ...` |
| 681 | fn | handleAgentControlToolCall | (private) | `private func handleAgentControlToolCall(     ca...` |
| 716 | fn | submitToolResult | (private) | `private func submitToolResult(     callId: Stri...` |
| 735 | fn | waitForChatCompletion | (private) | `private func waitForChatCompletion(     runId: ...` |
| 794 | fn | isCurrentLifecycle | (private) | `private func isCurrentLifecycle(_ lifecycleGene...` |
| 801 | fn | isCurrentLifecycleLocally | (private) | `private func isCurrentLifecycleLocally(_ lifecy...` |
| 805 | fn | ensureCurrentLifecycle | (private) | `private func ensureCurrentLifecycle(_ lifecycle...` |
| 810 | fn | ensureOutputPlaybackStarted | (private) | `private func ensureOutputPlaybackStarted()` |
| 838 | fn | finishOutputPlaybackStream | (private) | `private func finishOutputPlaybackStream()` |
| 849 | fn | startPendingOutputPlaybackIfNeeded | (private) | `private func startPendingOutputPlaybackIfNeeded()` |
| 870 | fn | scheduleOutputPlaybackIdle | (private) | `private func scheduleOutputPlaybackIdle(expecte...` |
| 885 | fn | refreshOutputPlaybackState | (private) | `private func refreshOutputPlaybackState(timesta...` |
| 891 | fn | markOutputPlaybackFinished | (private) | `private func markOutputPlaybackFinished(cancelI...` |
| 904 | fn | takePendingPlaybackMarks | (private) | `private func takePendingPlaybackMarks() -> [Str...` |
| 910 | fn | handlePlaybackMark | (private) | `private func handlePlaybackMark(_ payload: [Str...` |
| 921 | fn | acknowledgePlaybackMarks | (private) | `private func acknowledgePlaybackMarks(_ marks: ...` |
| 942 | fn | stopOutputPlayback | (private) | `private func stopOutputPlayback()` |
| 1001 | fn | nonEmpty | (private) | `private func nonEmpty(_ value: String?) -> String?` |
| 1008 | mod | extension RealtimeTalkRelaySession | (internal) | - |
| 1009 | fn | startMicrophonePump | (private) | `private func startMicrophonePump(lifecycleGener...` |
| 1039 | fn | enqueueMicrophoneFrame | (private) | `@discardableResult   private func enqueueMicrop...` |
| 1077 | fn | shouldSuppressMicrophoneDuringOutput | (private) | `private func shouldSuppressMicrophoneDuringOutp...` |
| 1084 | fn | recordMicrophoneFrame | (private) | `private func recordMicrophoneFrame(byteCount: I...` |
| 1100 | fn | recordSuppressedOutputEchoFrame | (private) | `private func recordSuppressedOutputEchoFrame(by...` |
| 1116 | fn | stopMicrophonePump | (private) | `private func stopMicrophonePump()` |
| 1123 | mod | extension RealtimeTalkRelaySession | (internal) | - |
| 1124 | fn | _test_setRelaySessionId | (internal) | `func _test_setRelaySessionId(_ relaySessionId: ...` |
| 1127 | fn | _test_handleGatewayEvent | (internal) | `func _test_handleGatewayEvent(_ event: EventFra...` |
| 1136 | fn | _test_waitForStartupCancelled | (internal) | `func _test_waitForStartupCancelled(timeoutSecon...` |
| 1146 | fn | _test_waitForToolCalls | (internal) | `func _test_waitForToolCalls() async` |
| 1153 | fn | _test_startupReadyTimeoutSeconds | (internal) | `func _test_startupReadyTimeoutSeconds() -> Int` |
| 1157 | fn | _test_markOutputAudioStarted | (internal) | `func _test_markOutputAudioStarted(nowMs: Double)` |
| 1161 | fn | _test_markOutputPlaybackFinished | (internal) | `func _test_markOutputPlaybackFinished()` |
| 1165 | fn | _test_outputStartedAtMs | (internal) | `func _test_outputStartedAtMs() -> Double?` |
| 1169 | fn | _test_isOutputPlaying | (internal) | `func _test_isOutputPlaying() -> Bool` |
| 1173 | fn | _test_prepareAudioSender | (internal) | `func _test_prepareAudioSender(relaySessionId: S...` |
| 1181 | fn | _test_enqueueMicrophoneFrame | (internal) | `func _test_enqueueMicrophoneFrame(_ data: Data)...` |
