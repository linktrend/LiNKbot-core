# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/voice-call/src/webhook/realtime-handler.test.ts (1919 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | makeRequest | (private) |
| 50 | fn | makeBridge | (private) |
| 64 | fn | makeRealtimeProvider | (private) |
| 92 | fn | makeHandler | (private) |
| 189 | fn | waitForRealtimeTest | (private) |
| 196 | fn | requireFirstMockCall | (private) |
| 204 | type | RealtimeBridgeRequest | (private) |
| 205 | type | RecentTalkEvent | (private) |
| 207 | fn | makeCallRecord | (private) |
| 223 | fn | parseWebSocketMessage | (private) |
| 232 | fn | withBargeInHarness | (private) |
| 310 | fn | recentTalkEvents | (private) |
| 314 | fn | requireCancelledTurn | (private) |

## extensions/voice-call/src/webhook/realtime-handler.ts (1446 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | ToolHandlerContext | pub |
| 45 | type | ToolHandlerFn | (private) |
| 66 | fn | buildGreetingInstructions | (private) |
| 81 | fn | readConsultArgText | (private) |
| 89 | fn | readConsultQuestionText | (private) |
| 93 | fn | normalizeTranscriptText | (private) |
| 97 | fn | findTextOverlap | (private) |
| 107 | fn | shouldInsertTranscriptSpace | (private) |
| 126 | fn | appendTranscriptText | (private) |
| 151 | fn | resolveFinalTranscriptText | (private) |
| 165 | fn | compact | (private) |
| 183 | fn | limitPartialUserTranscript | (private) |
| 191 | fn | withFallbackConsultQuestion | (private) |
| 220 | fn | buildForcedConsultSpeechPrompt | (private) |
| 234 | type | PendingStreamToken | (private) |
| 243 | type | StreamSessionRequest | (private) |
| 251 | type | StreamSession | pub |
| 256 | type | CallRegistration | (private) |
| 262 | type | ActiveRealtimeVoiceBridge | (private) |
| 264 | type | RealtimeSpeakResult | (private) |
| 269 | type | ForcedConsultState | (private) |
| 275 | type | NativeConsultState | (private) |
| 281 | type | TelephonyCloseReason | (private) |
| 283 | fn | appendRecentTalkEventMetadata | (private) |
| 313 | class | RealtimeCallHandler | pub |
| 594 | fn | cancelOutputAudioForBargeIn | (private) |
| 636 | fn | emitCallEnd | (private) |
| 898 | fn | closeTelephony | (private) |
