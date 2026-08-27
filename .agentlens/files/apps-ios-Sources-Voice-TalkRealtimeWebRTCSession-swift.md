# apps/ios/Sources/Voice/TalkRealtimeWebRTCSession.swift

[← Back to Module](../modules/apps-ios-Sources-Voice/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1288
- **Language:** Swift
- **Symbols:** 59
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 9 | trait | TalkRealtimeWebRTCSessionDelegate | (internal) | `protocol TalkRealtimeWebRTCSessionDelegate` |
| 25 | class | TalkRealtimeTranscriptWriteQueue | (internal) | `class TalkRealtimeTranscriptWriteQueue` |
| 33 | method | init | (internal) | `init(retryDelaysNanoseconds: [UInt64] = [100_00...` |
| 37 | fn | enqueue | (internal) | `func enqueue(     _ params: TalkRealtimeTranscr...` |
| 72 | fn | flush | (internal) | `func flush() async` |
| 82 | class | TalkRealtimeTranscriptStore | (internal) | `class TalkRealtimeTranscriptStore` |
| 87 | method | init | (internal) | `init(retryDelaysNanoseconds: [UInt64] = [100_00...` |
| 91 | fn | enqueue | (internal) | `@discardableResult   func enqueue(     sessionK...` |
| 120 | fn | flush | (internal) | `func flush(voiceSessionId: String) async` |
| 124 | fn | remove | (internal) | `func remove(_ voiceSessionIds: Set<String>)` |
| 133 | class | TalkRealtimeWebRTCSession | (internal) | `class TalkRealtimeWebRTCSession` |
| 188 | method | init | (internal) | `init(     gateway: GatewayNodeSession,     sess...` |
| 207 | fn | start | (internal) | `func start(     provider: String?,     model: S...` |
| 311 | fn | startAudioLevelPolling | (private) | `private func startAudioLevelPolling()` |
| 347 | fn | stop | (internal) | `func stop()` |
| 369 | fn | applyAudioRoutePreferenceChanged | (internal) | `func applyAudioRoutePreferenceChanged() throws` |
| 374 | fn | releaseAudioSessionActivation | (private) | `private func releaseAudioSessionActivation()` |
| 390 | fn | checkNotStopped | (private) | `private func checkNotStopped() throws` |
| 396 | fn | elapsedMs | (private) | `private func elapsedMs() -> Int` |
| 400 | fn | trace | (private) | `private func trace(_ message: String)` |
| 405 | fn | cancelActiveToolCalls | (private) | `private func cancelActiveToolCalls()` |
| 424 | fn | recordFinalTranscript | (private) | `private func recordFinalTranscript(role: TalkRe...` |
| 451 | fn | reportTranscriptPersistenceFailure | (private) | `private func reportTranscriptPersistenceFailure...` |
| 462 | fn | _test_reportTranscriptPersistenceFailure | (internal) | `func _test_reportTranscriptPersistenceFailure(e...` |
| 466 | fn | flushTranscriptWrites | (internal) | `func flushTranscriptWrites() async` |
| 471 | fn | handleRealtimeEvent | (private) | `private func handleRealtimeEvent(_ event: TalkR...` |
| 535 | fn | handleRealtimeAudioStateEvent | (private) | `private func handleRealtimeAudioStateEvent(_ ev...` |
| 567 | fn | markAssistantAudioActive | (private) | `private func markAssistantAudioActive()` |
| 575 | fn | scheduleAssistantAudioFinished | (private) | `private func scheduleAssistantAudioFinished()` |
| 587 | fn | toolBufferKey | (private) | `private func toolBufferKey(for event: TalkRealt...` |
| 591 | fn | bufferToolMetadata | (private) | `private func bufferToolMetadata(_ event: TalkRe...` |
| 602 | fn | bufferToolDelta | (private) | `private func bufferToolDelta(_ event: TalkRealt...` |
| 614 | fn | handleToolDone | (private) | `private func handleToolDone(_ event: TalkRealti...` |
| 645 | fn | isSupportedToolName | (private) | `private static func isSupportedToolName(_ name:...` |
| 649 | fn | submitConsultToolCall | (private) | `private func submitConsultToolCall(callId: Stri...` |
| 738 | fn | submitControlToolCall | (private) | `private func submitControlToolCall(callId: Stri...` |
| 772 | fn | controlParams | (private) | `private static func controlParams(sessionKey: S...` |
| 794 | fn | nonEmptyString | (private) | `private static func nonEmptyString(_ value: Any...` |
| 800 | fn | voiceConfirmationInstruction | (internal) | `static func voiceConfirmationInstruction(from e...` |
| 822 | fn | controlResultMessage | (private) | `private static func controlResultMessage(from d...` |
| 829 | fn | abortChatRun | (private) | `private func abortChatRun(runId: String) async` |
| 838 | fn | decodeJSONObject | (private) | `private static func decodeJSONObject(_ json: St...` |
| 845 | fn | waitForChatResult | (private) | `private func waitForChatResult(     runId: Stri...` |
| 921 | fn | waitForAgentResult | (private) | `private static func waitForAgentResult(     gat...` |
| 977 | fn | agentWait | (private) | `private static func agentWait(     gateway: Gat...` |
| 991 | fn | waitForAssistantTextFromHistory | (private) | `private static func waitForAssistantTextFromHis...` |
| 1011 | fn | latestAssistantTextFromHistory | (private) | `private static func latestAssistantTextFromHist...` |
| 1035 | fn | submitToolResult | (private) | `private func submitToolResult(callId: String, r...` |
| 1049 | fn | encodeJSONString | (private) | `private static func encodeJSONString(_ value: A...` |
| 1055 | fn | sendRealtimeEvent | (private) | `private func sendRealtimeEvent(_ event: [String...` |
| 1068 | fn | configureAudioSession | (private) | `private static func configureAudioSession(activ...` |
| 1096 | mod | extension TalkRealtimeWebRTCSession | (internal) | - |
| 1097 | fn | createClientSession | (private) | `private func createClientSession(     provider:...` |
| 1122 | fn | createOffer | (private) | `private func createOffer(peer: RTCPeerConnectio...` |
| 1145 | fn | setLocalDescription | (private) | `private func setLocalDescription(_ description:...` |
| 1157 | fn | setRemoteDescription | (private) | `private func setRemoteDescription(_ description...` |
| 1169 | fn | exchangeOffer | (private) | `private func exchangeOffer(_ sdp: String, sessi...` |
| 1213 | mod | extension TalkRealtimeWebRTCSession | (internal) | - |
| 1256 | mod | extension TalkRealtimeWebRTCSession | (internal) | - |
