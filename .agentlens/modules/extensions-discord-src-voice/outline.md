# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/discord/src/voice/manager.e2e.test.ts (7048 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | EventHandler | (private) |
| 39 | type | MockConnection | (private) |
| 323 | fn | createVoiceChannelInfo | (private) |
| 341 | type | VoiceChannelInfo | (private) |
| 343 | fn | createClient | (private) |
| 367 | fn | createRuntime | (private) |
| 453 | fn | createManager | (private) |
| 469 | fn | expectConnectedStatus | (private) |
| 483 | fn | getSessionEntry | (private) |
| 494 | fn | getLastAudioPlayer | (private) |
| 509 | type | MockCallSource | (private) |
| 522 | fn | mockCall | (private) |
| 530 | fn | lastMockCall | (private) |
| 539 | fn | expectOffEventWithFunction | (private) |
| 547 | fn | lastAgentCommandArgs | (private) |
| 553 | fn | lastAgentCommandToolNames | (private) |
| 567 | fn | agentCommandArgsAt | (private) |
| 573 | fn | lastRealtimeBridgeParams | (private) |
| 582 | fn | lastAudioResourceInput | (private) |
| 585 | fn | lastTtsArgs | (private) |
| 591 | fn | lastTtsStreamArgs | (private) |
| 597 | fn | sentUserMessages | (private) |
| 600 | fn | emitFinalRealtimeUserTranscript | (private) |
| 614 | fn | flushRealtimeForcedConsultTimers | (private) |
| 624 | fn | expectUserMessageIncludes | (private) |
| 631 | fn | expectUserMessageNotIncludes | (private) |
| 638 | fn | emitDecryptFailure | (private) |
| 658 | type | ProcessSegmentInvoker | (private) |
| 667 | fn | processVoiceSegment | (private) |
| 3028 | fn | acceptResult | (private) |
| 3756 | fn | beginOwnerTurn | (private) |
| 6859 | fn | runSegment | (private) |

## extensions/discord/src/voice/manager.ts (1907 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 83 | fn | logFollowUserReconcileVerbose | (private) |
| 91 | type | DiscordVoiceSdk | (private) |
| 92 | type | DiscordVoiceConnection | (private) |
| 93 | type | VoiceChannelResidency | (private) |
| 98 | fn | isVoiceConnectionDestroyed | (private) |
| 105 | fn | destroyVoiceConnectionSafely | (private) |
| 126 | fn | isRetryableVoiceJoinReadyError | (private) |
| 131 | fn | normalizeVoiceChannelResidencies | (private) |
| 145 | fn | normalizeDiscordUserId | (private) |
| 154 | fn | normalizeDiscordUserIds | (private) |
| 165 | fn | resolveFollowUsersEnabled | (private) |
| 169 | type | FollowUserReconcileGuildPlan | (private) |
| 176 | type | FollowUserReconcileUserSelection | (private) |
| 181 | fn | isVoiceChannelAllowed | (private) |
| 194 | fn | formatAutoJoinFailureKey | (private) |
| 198 | fn | isFatalAutoJoinFailure | (private) |
| 205 | fn | resolveVoiceConnectionGroup | (private) |
| 209 | fn | resolveDiscordVoiceAgentRoute | (private) |
| 258 | class | DiscordVoiceManager | pub |
| 678 | fn | clearSessionIfCurrent | (private) |
| 684 | fn | stopEntry | (private) |
| 1604 | fn | handleStreamError | (private) |

## extensions/discord/src/voice/realtime.ts (1800 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | fn | resolveDiscordRealtimeVoiceAgentConsultTools | (private) |
| 91 | fn | discordRealtimeTalkPayload | (private) |
| 106 | type | DiscordVoiceMode | pub |
| 108 | type | DiscordRealtimeSpeakerContext | (private) |
| 110 | type | DiscordRealtimeVoiceConfig | (private) |
| 112 | type | PendingSpeakerTurnStats | (private) |
| 119 | type | PendingSpeakerTurn | (private) |
| 124 | type | TranscriptUtteranceAttribution | (private) |
| 129 | type | RecentAgentProxyConsultResult | (private) |
| 133 | type | AgentProxyConsultState | (private) |
| 141 | type | AgentProxyConsultHandle | (private) |
| 143 | fn | formatRealtimeInterruptionLog | (private) |
| 173 | fn | formatRealtimeLifecycleLog | (private) |
| 181 | fn | isRealtimeResponseCancelled | (private) |
| 189 | fn | shouldLogRealtimeVerboseEvent | (private) |
| 193 | fn | readProviderConfigString | (private) |
| 201 | fn | readProviderConfigBoolean | (private) |
| 208 | fn | resolveDiscordVoiceMode | pub |
| 216 | fn | isDiscordRealtimeVoiceMode | pub |
| 222 | fn | isDiscordAgentProxyVoiceMode | (private) |
| 226 | fn | resolveDiscordRealtimeInterruptResponseOnInputAudio | (private) |
| 234 | fn | resolveDiscordRealtimeBargeIn | (private) |
| 245 | fn | buildDiscordSpeakExactUserMessage | (private) |
| 254 | fn | isEscapedQuote | (private) |
| 262 | fn | readJsonStringAfterLabel | (private) |
| 285 | fn | collectRealtimeConsultArgStrings | (private) |
| 299 | fn | extractDiscordExactSpeechConsultText | (private) |
| 313 | fn | normalizeControlSpeechText | (private) |
| 317 | class | DiscordRealtimeVoiceSession | pub |
| 1707 | fn | isDiscordRealtimeSpeakerContext | (private) |
| 1717 | fn | pcm16MonoDurationMs | (private) |
| 1725 | fn | buildProviderConfigs | (private) |
| 1732 | fn | buildProviderConfigOverrides | (private) |
| 1749 | fn | resolveDiscordRealtimeMinBargeInAudioEndMs | (private) |
| 1757 | fn | buildDiscordRealtimeInstructions | (private) |
