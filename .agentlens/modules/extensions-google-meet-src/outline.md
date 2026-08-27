# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## extensions/google-meet/src/cli.test.ts (1487 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | captureStdout | (private) |
| 48 | fn | expectFields | (private) |
| 58 | fn | firstRecord | (private) |
| 67 | fn | parseStdoutJson | (private) |
| 71 | fn | jsonResponse | (private) |
| 78 | fn | requestUrl | (private) |
| 88 | fn | stubMeetArtifactsApi | (private) |
| 224 | fn | setupCli | (private) |

## extensions/google-meet/src/cli.ts (2367 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | JoinOptions | (private) |
| 60 | type | OAuthLoginOptions | (private) |
| 75 | type | ResolveSpaceOptions | (private) |
| 88 | type | MeetArtifactOptions | (private) |
| 103 | type | GoogleMeetExportRequest | (private) |
| 118 | type | GoogleMeetExportWarning | (private) |
| 129 | type | GoogleMeetExportManifest | (private) |
| 154 | type | SetupOptions | (private) |
| 160 | type | GoogleMeetGatewayMethod | (private) |
| 170 | type | GoogleMeetGatewayCallResult | (private) |
| 175 | type | DoctorOptions | (private) |
| 187 | type | JsonOptions | (private) |
| 191 | type | RecoverTabOptions | (private) |
| 195 | type | CreateOptions | (private) |
| 213 | fn | writeStdoutJson | (private) |
| 217 | fn | isGatewayUnavailableForLocalFallback | (private) |
| 232 | fn | writeStdoutLine | (private) |
| 236 | fn | writeCliOutput | (private) |
| 245 | fn | promptInput | (private) |
| 257 | fn | parseOptionalNumber | (private) |
| 269 | fn | writeSetupStatus | (private) |
| 276 | fn | formatBoolean | (private) |
| 280 | fn | formatOptional | (private) |
| 284 | fn | parsePositiveNumber | (private) |
| 296 | fn | resolveGoogleMeetGatewayTimeoutMs | (private) |
| 302 | fn | resolveGoogleMeetOAuthCallbackTimeoutMs | (private) |
| 308 | fn | parsePositiveIntegerOption | (private) |
| 319 | fn | callGoogleMeetGateway | (private) |
| 344 | fn | formatDuration | (private) |
| 353 | fn | writeDoctorStatus | (private) |
| 449 | type | OAuthDoctorCheck | (private) |
| 455 | type | OAuthDoctorReport | (private) |
| 466 | fn | sanitizeOAuthErrorMessage | (private) |
| 474 | fn | buildOAuthDoctorReport | (private) |
| 580 | fn | writeOAuthDoctorReport | (private) |
| 594 | fn | writeRecoverCurrentTabResult | (private) |
| 636 | fn | writeLeaveResult | (private) |
| 647 | fn | resolveMeetingInput | (private) |
| 657 | fn | resolveOAuthTokenOptions | (private) |
| 676 | fn | resolveTokenOptions | (private) |
| 693 | fn | hasCalendarLookupOptions | (private) |
| 697 | fn | resolveCalendarMeetingInput | (private) |
| 714 | fn | resolveMeetingForToken | (private) |
| 736 | fn | resolveCreateTokenOptions | (private) |
| 755 | fn | resolveArtifactTokenOptions | (private) |
| 799 | fn | hasCreateOAuth | (private) |
| 808 | fn | writeArtifactsSummary | (private) |
| 859 | fn | writeAttendanceSummary | (private) |
| 892 | fn | writeLatestConferenceRecordSummary | (private) |
| 904 | fn | writeCalendarEventsSummary | (private) |
| 921 | fn | pushMarkdownLine | (private) |
| 925 | fn | formatMarkdownOptional | (private) |
| 929 | fn | formatMarkdownIdentity | (private) |
| 933 | fn | participantDisplayName | (private) |
| 950 | fn | renderArtifactsMarkdown | (private) |
| 1048 | fn | renderAttendanceMarkdown | (private) |
| 1092 | fn | neutralizeSpreadsheetFormulaCell | (private) |
| 1098 | fn | csvCell | (private) |
| 1109 | fn | renderAttendanceCsv | (private) |
| 1145 | fn | renderTranscriptMarkdown | (private) |
| 1196 | fn | collectGoogleMeetArtifactWarnings | (private) |
| 1243 | fn | buildGoogleMeetExportManifest | pub |
| 1297 | fn | googleMeetExportFileNames | pub |
| 1308 | fn | defaultExportDirectory | (private) |
| 1312 | fn | writeMeetExportBundle | pub |
| 1369 | fn | registerGoogleMeetCli | pub |

## extensions/google-meet/src/config.ts (538 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | GoogleMeetTransport | pub |
| 20 | type | GoogleMeetMode | pub |
| 21 | type | GoogleMeetModeInput | pub |
| 22 | type | GoogleMeetRealtimeStrategy | (private) |
| 23 | type | GoogleMeetChromeAudioFormat | (private) |
| 24 | type | GoogleMeetToolPolicy | pub |
| 26 | type | GoogleMeetConfig | pub |
| 100 | fn | resolveGoogleMeetGatewayOperationTimeoutMs | pub |
| 113 | fn | buildGoogleMeetSoxAudioCommands | (private) |
| 229 | fn | resolveBoolean | (private) |
| 233 | fn | resolveNumber | (private) |
| 237 | fn | resolveTimerConfigMs | (private) |
| 241 | fn | resolveOptionalNumber | (private) |
| 253 | fn | readEnvString | (private) |
| 263 | fn | normalizeStringAllowEmpty | (private) |
| 267 | fn | readEnvBoolean | (private) |
| 281 | fn | readEnvNumber | (private) |
| 285 | fn | resolveStringArray | (private) |
| 289 | fn | resolveProvidersConfig | (private) |
| 302 | fn | resolveTransport | (private) |
| 309 | fn | resolveMode | (private) |
| 319 | fn | resolveRealtimeStrategy | (private) |
| 327 | fn | resolveChromeAudioFormat | (private) |
| 346 | fn | resolveAudioBufferBytes | (private) |
| 354 | fn | defaultAudioInputCommand | (private) |
| 361 | fn | defaultAudioOutputCommand | (private) |
| 368 | fn | resolveGoogleMeetConfig | pub |
| 372 | fn | resolveGoogleMeetConfigWithEnv | (private) |

## extensions/google-meet/src/meet.ts (1028 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | GoogleMeetAccessType | pub |
| 20 | type | GoogleMeetEntryPointAccess | pub |
| 22 | type | GoogleMeetSpaceConfig | pub |
| 27 | type | GoogleMeetSpace | (private) |
| 35 | type | GoogleMeetPreflightReport | (private) |
| 46 | type | GoogleMeetCreateSpaceResult | (private) |
| 51 | type | GoogleMeetEndActiveConferenceResult | (private) |
| 56 | type | GoogleMeetConferenceRecord | (private) |
| 64 | type | GoogleMeetParticipant | (private) |
| 80 | type | GoogleMeetParticipantSession | (private) |
| 86 | type | GoogleMeetRecording | (private) |
| 93 | type | GoogleMeetTranscript | (private) |
| 102 | type | GoogleMeetTranscriptEntry | (private) |
| 111 | type | GoogleMeetTranscriptEntries | (private) |
| 117 | type | GoogleMeetSmartNote | (private) |
| 126 | type | GoogleMeetArtifactsEntry | (private) |
| 136 | type | GoogleMeetArtifactsResult | pub |
| 143 | type | GoogleMeetLatestConferenceRecordResult | pub |
| 149 | type | GoogleMeetAttendanceRow | (private) |
| 167 | type | GoogleMeetAttendanceResult | pub |
| 174 | type | GoogleMeetSmartNotesListResult | (private) |
| 179 | fn | normalizeGoogleMeetSpaceName | (private) |
| 208 | fn | encodeSpaceNameForPath | (private) |
| 212 | fn | encodeResourceNameForPath | (private) |
| 220 | fn | normalizeConferenceRecordName | (private) |
| 228 | fn | appendQuery | (private) |
| 244 | fn | assertResourceArray | (private) |
| 264 | fn | getErrorMessage | (private) |
| 268 | fn | requestGoogleMeetApi | (private) |
| 293 | fn | fetchGoogleMeetJson | (private) |
| 320 | fn | listGoogleMeetCollection | (private) |
| 355 | fn | fetchGoogleMeetSpace | pub |
| 386 | fn | createGoogleMeetSpace | pub |
| 429 | fn | endGoogleMeetActiveConference | pub |
| 459 | fn | fetchGoogleMeetConferenceRecord | (private) |
| 476 | fn | listGoogleMeetConferenceRecords | (private) |
| 499 | fn | fetchLatestGoogleMeetConferenceRecord | pub |
| 520 | fn | listGoogleMeetParticipants | (private) |
| 536 | fn | listGoogleMeetParticipantSessions | (private) |
| 551 | fn | listGoogleMeetRecordings | (private) |
| 567 | fn | listGoogleMeetTranscripts | (private) |
| 583 | fn | listGoogleMeetTranscriptEntries | (private) |
| 598 | fn | listGoogleMeetSmartNotes | (private) |
| 614 | fn | getParticipantDisplayName | (private) |
| 622 | fn | getParticipantUser | (private) |
| 626 | fn | getDocsDestinationDocumentId | (private) |
| 636 | fn | attachDocumentText | (private) |
| 660 | fn | parseGoogleMeetTimestamp | (private) |
| 668 | fn | isoFromMs | (private) |
| 674 | fn | minTimestamp | (private) |
| 681 | fn | maxTimestamp | (private) |
| 688 | fn | sumSessionDurationMs | (private) |
| 710 | fn | attendanceMergeKey | (private) |
| 714 | fn | sortSessions | (private) |
| 722 | fn | decorateAttendanceRow | (private) |
| 782 | fn | mergeAttendanceRows | (private) |
| 815 | fn | resolveConferenceRecordQuery | (private) |
| 856 | fn | fetchGoogleMeetArtifacts | pub |
| 961 | fn | fetchGoogleMeetAttendance | pub |
| 1005 | fn | buildGoogleMeetPreflightReport | pub |

## extensions/google-meet/src/realtime.process.test.ts (663 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | MeetRealtimeAudioSpawn | (private) |
| 36 | fn | writeBridgeCommand | (private) |
| 55 | fn | writeSigtermResistantBridgeCommand | (private) |
| 75 | fn | makeRecordingSpawn | (private) |
| 248 | fn | finishConnect | (private) |

## extensions/google-meet/src/runtime.ts (733 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | ChromeAudioBridgeResult | (private) |
| 58 | type | ChromeLaunchResult | (private) |
| 61 | type | GoogleMeetManualActionReason | (private) |
| 62 | type | GoogleMeetSpeechBlockedReason | (private) |
| 63 | type | GoogleMeetSessionRuntime | (private) |
| 73 | type | GoogleMeetJoinContext | (private) |
| 81 | fn | nowIso | (private) |
| 85 | fn | buildTwilioVoiceCallSessionKey | (private) |
| 89 | fn | resolveTransport | (private) |
| 93 | fn | resolveMode | (private) |
| 97 | fn | resolveSessionAgentId | (private) |
| 101 | fn | withSessionAgentConfig | (private) |
| 107 | fn | isGoogleMeetTalkBackMode | (private) |
| 111 | fn | isBrowserTransport | (private) |
| 115 | fn | noteSession | (private) |
| 119 | class | GoogleMeetRuntime | pub |
