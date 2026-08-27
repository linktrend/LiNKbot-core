# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## packages/speech-core/src/tts.test.ts (1751 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | MockSpeechSynthesisResult | (private) |
| 133 | fn | createMockSpeechProvider | (private) |
| 148 | fn | installSpeechProviders | (private) |
| 159 | fn | prefsPathFor | (private) |
| 163 | fn | createTtsConfig | (private) |
| 175 | fn | requireRecord | (private) |
| 182 | fn | requireFirstCallParam | (private) |
| 190 | fn | requireFirstSynthesisRequest | (private) |
| 194 | fn | requireAttempt | (private) |
| 201 | fn | expectTtsPayloadResult | (private) |

## packages/speech-core/src/tts.ts (1774 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | fn | resolvePositiveTimeoutMs | (private) |
| 81 | fn | resolveSpeechProviderTimeoutMs | (private) |
| 95 | type | TtsAttemptReasonCode | (private) |
| 104 | type | TtsProviderAttempt | (private) |
| 114 | type | TtsResult | pub |
| 130 | type | TtsSynthesisResult | pub |
| 148 | type | TtsStreamResult | pub |
| 167 | type | TtsSynthesisStreamResult | pub |
| 169 | type | TtsTelephonyResult | pub |
| 185 | type | TtsStatusEntry | (private) |
| 201 | fn | resolveConfiguredSpeechVoiceModelRefs | (private) |
| 209 | fn | resolveConfiguredSpeechVoiceModelForProvider | (private) |
| 228 | fn | applyVoiceModelToSpeechProviderConfig | (private) |
| 257 | fn | sortSpeechProvidersForAutoSelection | (private) |
| 268 | fn | resolvePersonaProviderConfig | (private) |
| 285 | fn | mergeProviderConfigWithPersona | (private) |
| 311 | fn | resolveRawProviderConfig | (private) |
| 323 | fn | resolveLazyProviderConfig | (private) |
| 402 | fn | getResolvedSpeechProviderConfig | pub |
| 415 | fn | getResolvedSpeechProviderConfigForVoiceModel | (private) |
| 432 | fn | getTtsProvider | pub |
| 465 | type | PreparedTtsRequest | pub |
| 471 | fn | prepareTtsRequest | pub |
| 494 | fn | resolveExplicitTtsOverrides | pub |
| 562 | fn | getLastTtsAttempt | pub |
| 566 | fn | setLastTtsAttempt | pub |
| 570 | fn | supportsNativeVoiceNoteTts | (private) |
| 574 | fn | supportsTranscodedVoiceNoteTts | (private) |
| 579 | fn | resolveTtsSynthesisTarget | (private) |
| 583 | fn | supportsAudioFileVoiceMemoOutput | (private) |
| 600 | fn | shouldDeliverTtsAsVoice | (private) |
| 627 | fn | resolveTtsProviderOrder | pub |
| 646 | fn | resolveTtsProviderCandidates | (private) |
| 659 | fn | resolvePrimaryTtsProviderCandidate | (private) |
| 671 | fn | isTtsProviderConfigured | pub |
| 696 | fn | formatTtsProviderError | (private) |
| 704 | fn | sanitizeTtsErrorForLog | (private) |
| 709 | fn | buildTtsFailureResult | (private) |
| 730 | type | TtsProviderReadyResolution | (private) |
| 746 | fn | resolveReadySpeechProvider | (private) |
| 817 | fn | prepareSpeechSynthesis | (private) |
| 860 | fn | resolveTtsRequestSetup | (private) |
| 904 | fn | readTtsResultString | (private) |
| 908 | fn | resolveTtsResultModel | (private) |
| 920 | fn | resolveTtsResultVoice | (private) |
| 938 | fn | textToSpeech | pub |
| 1005 | fn | maybePreTranscodeForVoiceDelivery | (private) |
| 1050 | fn | synthesizeSpeech | pub |
| 1202 | fn | streamSpeech | pub |
| 1367 | fn | textToSpeechStream | pub |
| 1391 | fn | textToSpeechTelephony | pub |
| 1534 | fn | listSpeechVoices | pub |
| 1571 | fn | hasLegacyFinalMediaDirective | (private) |
| 1575 | fn | maybeApplyTtsToPayload | pub |
