# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## src/meeting-bot/browser-controller.ts (593 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | MeetingBrowserControllerConfig | pub |
| 37 | fn | mergeBrowserNotes | (private) |
| 50 | fn | applyMeetingManualAction | (private) |
| 64 | fn | prepareMeetingBrowserTab | (private) |
| 111 | fn | selectReusableTab | (private) |
| 133 | fn | openMeetingWithBrowser | pub |
| 315 | fn | findRecoverableTab | (private) |
| 350 | fn | inspectRecoverableTab | (private) |
| 493 | fn | recoverMeetingBrowserTab | pub |

## src/meeting-bot/node-host.ts (501 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | NodeBridgeSession | (private) |
| 30 | type | MeetingNodeHostOptions | pub |
| 50 | fn | readStringArray | (private) |
| 60 | fn | asRecord | (private) |
| 66 | fn | readString | (private) |
| 70 | fn | formatErrorMessage | (private) |
| 74 | fn | readNumber | (private) |
| 78 | fn | runCommandWithTimeout | (private) |
| 96 | fn | splitCommand | (private) |
| 104 | fn | createMeetingNodeHost | pub |
| 109 | fn | wake | (private) |
| 113 | fn | retireOutputProcess | (private) |
| 144 | fn | attachOutputProcessHandlers | (private) |
| 145 | fn | stopIfCurrent | (private) |
| 156 | fn | startOutputProcess | (private) |
| 197 | fn | stop | (private) |
| 209 | fn | pullAudio | (private) |
| 230 | fn | pushAudio | (private) |
| 252 | fn | clearAudio | (private) |
| 271 | fn | startBrowser | (private) |
| 352 | fn | bridgeStatus | (private) |
| 375 | fn | summarizeSession | (private) |
| 388 | fn | listSessions | (private) |
| 399 | fn | stopSessionsByUrl | (private) |
| 437 | fn | stopBrowser | (private) |

## src/meeting-bot/realtime-engine.ts (701 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | MeetingRuntimePlatform | pub |
| 43 | type | MeetingRealtimeEngineConfig | pub |
| 57 | type | MeetingAgentConsultParams | pub |
| 64 | type | MeetingRealtimeToolCallParams | pub |
| 74 | type | MeetingRealtimeAudioEngineHealth | pub |
| 83 | type | MeetingRealtimeAudioEngineHandle | pub |
| 90 | type | ResolvedRealtimeProvider | (private) |
| 95 | type | ResolvedRealtimeTranscriptionProvider | (private) |
| 105 | fn | meetingOutputBytesPerMs | pub |
| 109 | fn | resolveMeetingRealtimeProvider | (private) |
| 125 | fn | resolveMeetingRealtimeTranscriptionProvider | pub |
| 159 | fn | buildMeetingSpeakExactUserMessage | (private) |
| 166 | fn | readLogString | (private) |
| 170 | fn | formatLogValue | (private) |
| 175 | fn | resolveProviderModelForLog | (private) |
| 189 | fn | formatMeetingRealtimeVoiceModelLog | (private) |
| 211 | fn | formatMeetingAgentAudioModelLog | pub |
| 232 | type | MeetingTtsResultLogFields | (private) |
| 241 | fn | formatMeetingAgentTtsResultLog | pub |
| 256 | fn | formatMeetingTranscriptSummaryLog | pub |
| 264 | fn | normalizeMeetingTtsPromptText | pub |
| 276 | fn | startMeetingRealtimeEngine | pub |
| 306 | fn | stop | (private) |
| 356 | fn | stopAfterFailure | (private) |
| 363 | fn | clearOutputPlayback | (private) |
| 376 | fn | writeOutputAudio | (private) |
| 384 | fn | startHumanBargeInMonitor | (private) |
| 425 | fn | reasonTalkPayload | (private) |

## src/meeting-bot/session-runtime.ts (752 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 111 | fn | nowIso | (private) |
| 114 | class | MeetingSessionRuntime | pub |
