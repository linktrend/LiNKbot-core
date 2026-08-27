# apps/macos/Sources/OpenClaw/TalkModeRuntime.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1423
- **Language:** Swift
- **Symbols:** 67
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 10 | class | TalkModeRuntime | (internal) | `actor TalkModeRuntime` |
| 36 | fn | set | (internal) | `func set(_ rms: Double)` |
| 42 | fn | get | (internal) | `func get() -> Double` |
| 93 | fn | configureRecognitionRequest | (internal) | `static func configureRecognitionRequest(_ reque...` |
| 100 | fn | setEnabled | (internal) | `func setEnabled(_ enabled: Bool) async` |
| 111 | fn | setPaused | (internal) | `func setPaused(_ paused: Bool) async` |
| 135 | fn | isCurrent | (private) | `private func isCurrent(_ generation: Int) -> Bool` |
| 139 | fn | start | (private) | `private func start() async` |
| 165 | fn | stop | (private) | `private func stop() async` |
| 188 | fn | inputDeviceSelectionDidChange | (internal) | `func inputDeviceSelectionDidChange() async` |
| 194 | fn | startAudioInputObserver | (private) | `private func startAudioInputObserver()` |
| 203 | fn | audioInputDevicesDidChange | (private) | `private func audioInputDevicesDidChange() async` |
| 229 | fn | startRecognition | (private) | `private func startRecognition() async` |
| 306 | fn | stopRecognition | (private) | `private func stopRecognition() async` |
| 321 | fn | startRMSTicker | (private) | `private func startRMSTicker(meter: RMSMeter)` |
| 332 | fn | handleRecognition | (private) | `private func handleRecognition(_ update: Recogn...` |
| 367 | fn | startSilenceMonitor | (private) | `private func startSilenceMonitor()` |
| 374 | fn | silenceLoop | (private) | `private func silenceLoop() async` |
| 381 | fn | checkSilence | (private) | `private func checkSilence() async` |
| 392 | fn | startListening | (private) | `private func startListening() async` |
| 403 | fn | finalizeTranscript | (private) | `private func finalizeTranscript(_ text: String)...` |
| 420 | fn | bindSelectedInputIfNeeded | (private) | `private func bindSelectedInputIfNeeded(     _ s...` |
| 450 | fn | configureAudioEngine | (private) | `private func configureAudioEngine(     selectio...` |
| 488 | fn | discardAudioEngine | (private) | `private func discardAudioEngine()` |
| 495 | fn | defaultFallback | (private) | `private func defaultFallback(for selection: Aud...` |
| 504 | enum | TalkAudioInputError | (private) | `enum TalkAudioInputError` |
| 518 | mod | extension TalkModeRuntime | (internal) | - |
| 519 | fn | sendAndSpeak | (private) | `private func sendAndSpeak(_ transcript: String)...` |
| 600 | fn | resumeListeningIfNeeded | (private) | `private func resumeListeningIfNeeded() async` |
| 614 | fn | buildPrompt | (private) | `private func buildPrompt(transcript: String) ->...` |
| 620 | fn | waitForAssistantEventText | (private) | `private func waitForAssistantEventText(     ses...` |
| 672 | fn | matchesSessionKey | (private) | `private static func matchesSessionKey(_ incomin...` |
| 680 | fn | waitForAssistantTextFromHistory | (private) | `private func waitForAssistantTextFromHistory(  ...` |
| 695 | fn | latestAssistantText | (private) | `private func latestAssistantText(sessionKey: St...` |
| 719 | fn | playAssistant | (private) | `private func playAssistant(text: String) async` |
| 793 | fn | playbackPlan | (internal) | `static func playbackPlan(provider: String, apiK...` |
| 809 | fn | mlxFailureDisposition | (internal) | `static func mlxFailureDisposition(_ error: Erro...` |
| 828 | fn | preparePlaybackInput | (private) | `private func preparePlaybackInput(text: String)...` |
| 913 | fn | playElevenLabs | (private) | `private func playElevenLabs(     input: TalkPla...` |
| 929 | fn | makeRequest | (internal) | `func makeRequest(outputFormat: String?) -> Elev...` |
| 983 | fn | playRemoteStream | (private) | `private func playRemoteStream(     client: Elev...` |
| 1009 | fn | playGatewayTalkSpeak | (private) | `private func playGatewayTalkSpeak(input: TalkPl...` |
| 1045 | fn | playSystemVoice | (private) | `private func playSystemVoice(input: TalkPlaybac...` |
| 1062 | fn | playMLX | (private) | `private func playMLX(input: TalkPlaybackInput) ...` |
| 1095 | fn | prepareForPlayback | (private) | `private func prepareForPlayback(generation: Int...` |
| 1100 | fn | resolveVoiceId | (private) | `private func resolveVoiceId(preferred: String?,...` |
| 1131 | fn | resolveVoiceAlias | (private) | `private func resolveVoiceAlias(_ value: String?...` |
| 1142 | fn | isLikelyVoiceId | (private) | `private static func isLikelyVoiceId(_ value: St...` |
| 1147 | fn | stopSpeaking | (internal) | `func stopSpeaking(reason: TalkStopReason) async` |
| 1172 | mod | extension TalkModeRuntime | (internal) | - |
| 1173 | fn | makeTalkSpeakParams | (internal) | `static func makeTalkSpeakParams(     text: Stri...` |
| 1181 | fn | addString | (internal) | `func addString(_ key: String, _ value: String?)` |
| 1222 | fn | playPCM | (private) | `@MainActor   private func playPCM(     stream: ...` |
| 1235 | fn | playMP3 | (private) | `@MainActor   private func playMP3(stream: Async...` |
| 1239 | fn | stopPCM | (private) | `@MainActor   private func stopPCM() -> Double?` |
| 1244 | fn | stopMP3 | (private) | `@MainActor   private func stopMP3() -> Double?` |
| 1249 | fn | playTalkAudio | (private) | `@MainActor   private func playTalkAudio(data: D...` |
| 1257 | fn | stopTalkAudio | (private) | `@MainActor   private func stopTalkAudio() -> Do...` |
| 1262 | fn | synthesizeMLXVoice | (private) | `private func synthesizeMLXVoice(     text: Stri...` |
| 1275 | fn | stopMLXVoice | (private) | `private func stopMLXVoice() async` |
| 1281 | fn | reloadConfig | (private) | `private func reloadConfig() async` |
| 1322 | fn | selectTalkProviderConfig | (internal) | `static func selectTalkProviderConfig(     _ tal...` |
| 1328 | fn | resolvedSilenceTimeoutMs | (internal) | `static func resolvedSilenceTimeoutMs(_ talk: [S...` |
| 1332 | fn | fetchTalkConfig | (private) | `private func fetchTalkConfig() async -> TalkMod...` |
| 1385 | fn | noteAudioLevel | (private) | `private func noteAudioLevel(rms: Double) async` |
| 1403 | fn | shouldInterrupt | (private) | `private func shouldInterrupt(transcript: String...` |
| 1414 | fn | isLikelyEcho | (private) | `private func isLikelyEcho(of transcript: String...` |
