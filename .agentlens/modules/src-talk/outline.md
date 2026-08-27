# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## src/talk/agent-consult-runtime.test.ts (724 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | ForkSessionEntryFromParent | (private) |
| 19 | type | ForkSessionEntryFromParentParams | (private) |
| 20 | type | ForkSessionEntryFromParentResult | (private) |
| 39 | fn | testTempPath | (private) |
| 46 | fn | createAgentRuntime | (private) |
| 138 | fn | requireEmbeddedAgentCall | (private) |
| 152 | fn | expectPositiveTimestamp | (private) |
| 157 | fn | expectNonEmptyString | (private) |
| 162 | fn | createDeferred | (private) |
| 163 | fn | resolve | (private) |

## src/talk/client-voice-confirmation.test.ts (501 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | authorizeClientVoiceConfirmation | (private) |
| 18 | fn | noteClientVoiceConfirmationUtterance | (private) |
| 24 | fn | resolveClientVoiceToolConfirmationPolicy | (private) |
| 30 | fn | confirmationIdFrom | (private) |
| 38 | fn | block | (private) |

## src/talk/client-voice-session.test.ts (579 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | seedSession | (private) |
| 47 | fn | recordMutation | (private) |
| 70 | fn | completeRun | (private) |
| 173 | fn | binding | (private) |

## src/talk/client-voice-session.ts (732 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | hasLiveConsultRun | (private) |
| 59 | fn | runVoiceSessionOperation | (private) |
| 80 | fn | effectStatus | (private) |
| 93 | fn | recordClientVoiceToolEffect | (private) |
| 140 | fn | ensureToolEffectSubscription | (private) |
| 161 | fn | createOrResumeClientVoiceSession | pub |
| 218 | fn | ensureClientVoiceAgentSessionEntry | pub |
| 233 | fn | registerClientVoiceConsultRun | pub |
| 274 | fn | resolveClientVoiceRunBinding | pub |
| 283 | fn | isClientVoiceSessionConfirmable | pub |
| 293 | fn | assertClientVoiceSessionOpen | pub |
| 310 | fn | resolveClientVoiceSessionOrigin | pub |
| 324 | fn | resolveOpenClientVoiceSessionId | pub |
| 350 | fn | buildPersistedVoiceMessage | (private) |
| 377 | fn | appendVoiceTranscript | (private) |
| 461 | fn | appendClientVoiceTranscript | pub |
| 468 | fn | appendRelayVoiceTranscript | pub |
| 480 | fn | formatMutationDigest | (private) |
| 495 | fn | deliverMutationDigest | (private) |
| 523 | fn | deliverMutationDigestOnce | (private) |
| 568 | fn | finishDeferredMutationDigest | (private) |
| 590 | fn | retryDeferredMutationDigests | (private) |
| 604 | fn | closeClientVoiceSessionInternal | (private) |
| 660 | fn | closeClientVoiceSession | pub |
| 673 | fn | closeStaleClientVoiceSessions | pub |
