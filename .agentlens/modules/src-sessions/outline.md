# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 8 large files in this module.

## src/sessions/session-key-case-preservation.test.ts (501 lines)

_No symbols extracted._

## src/sessions/session-lifecycle-admission.test.ts (729 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | createDeferred | (private) |
| 23 | fn | resolve | (private) |
| 698 | fn | releaseLease | (private) |

## src/sessions/session-lifecycle-admission.ts (547 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | SessionWorkAdmission | (private) |
| 30 | type | SessionLifecycleAdmissionState | (private) |
| 41 | type | SessionLifecycleMutationKind | (private) |
| 71 | fn | runWithSessionIdentityLocks | (private) |
| 89 | fn | runWithSessionMutationIdentityLocks | (private) |
| 107 | fn | hasActiveSessionLifecycleMutation | (private) |
| 111 | fn | hasOnlyActiveSessionLifecycleMutationKind | (private) |
| 129 | fn | waitForNormalizedSessionLifecycleMutationIdle | (private) |
| 154 | fn | rejectAborted | (private) |
| 171 | fn | runExclusiveSessionLifecycle | (private) |
| 198 | fn | runExclusiveSessionLifecycleMutation | pub |
| 212 | fn | removeAbortListener | (private) |
| 279 | fn | onAbort | (private) |
| 302 | fn | isSessionLifecycleMutationActive | pub |
| 309 | fn | hasOnlySessionLifecycleMutationKindActive | pub |
| 320 | fn | isSessionWorkAdmissionActive | pub |
| 330 | fn | isCompetingSessionWorkAdmissionActive | pub |
| 344 | fn | collectActiveSessionWorkAdmissionIdentities | pub |
| 363 | fn | getActiveSessionWorkAdmissionCount | pub |
| 374 | fn | getActiveSessionLifecycleMutationCount | pub |
| 382 | fn | beginSessionWorkAdmission | pub |
| 406 | fn | resolveReleased | (private) |
| 422 | fn | release | (private) |
| 454 | fn | removeAbortListener | (private) |
| 458 | fn | onAbort | (private) |
| 500 | fn | interruptSessionWorkAdmissions | pub |

## src/sessions/session-state-events.test.ts (838 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | createDatabaseOptions | (private) |
| 51 | fn | eventInput | (private) |
| 66 | fn | readCursor | (private) |
| 86 | fn | seedChild | (private) |
| 102 | fn | createWatcherSession | (private) |

## src/sessions/session-state-events.ts (1068 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | SessionStateEventInput | (private) |
| 53 | type | SessionStateEventRecord | (private) |
| 67 | type | SessionStateDatabase | (private) |
| 71 | type | SessionStateEventsTable | (private) |
| 72 | type | SessionStateEventRow | (private) |
| 73 | type | SessionWatchCursorRow | (private) |
| 81 | fn | getSessionStateKysely | (private) |
| 85 | fn | normalizeOptionalSqliteNumber | (private) |
| 91 | fn | parsePayload | (private) |
| 105 | fn | rowToSessionStateEvent | (private) |
| 122 | fn | bindSessionStateEvent | (private) |
| 141 | fn | readCursor | (private) |
| 156 | fn | isAmbientGroupWatchCursor | (private) |
| 160 | fn | upsertSeedCursor | (private) |
| 192 | fn | updateMaterialCursor | (private) |
| 228 | fn | classifySessionStateActor | pub |
| 258 | fn | clampSessionStateOccurredAt | (private) |
| 265 | fn | recordSessionStateEvent | pub |
| 390 | fn | getSessionStateVersion | pub |
| 414 | fn | getSessionStateVersions | pub |
| 448 | fn | listSessionStateEventsSince | pub |
| 512 | fn | acknowledgeSessionStateNotices | pub |
| 565 | fn | handleSessionStateSessionReset | pub |
| 584 | fn | handleSessionStateSessionDeleted | pub |
| 624 | fn | sessionExists | (private) |
| 633 | fn | sweepSessionStateWatchNotices | pub |
| 673 | fn | pruneSessionStateEvents | (private) |
| 683 | fn | stampPrunedWatermarks | (private) |
| 747 | fn | recordSessionCompacted | pub |
| 771 | fn | recordSessionGoalChanged | pub |
| 794 | fn | hasSessionStateWatchers | (private) |
| 817 | fn | listAmbientGroupWatchTargets | pub |
| 839 | fn | registerSessionStateWatch | pub |
| 896 | fn | registerMainSessionGroupWatch | pub |
| 975 | fn | recordSessionHumanDirectMessage | pub |
| 1017 | fn | recordSubagentSpawned | pub |
| 1036 | type | SubagentTerminalStatus | (private) |
| 1046 | fn | recordSubagentTerminalState | pub |

## src/sessions/session-upstream-monitor.test.ts (676 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | createMissingCounts | (private) |
| 27 | fn | createDatabaseOptions | (private) |
| 33 | fn | createLink | (private) |
| 57 | fn | provider | (private) |

## src/sessions/user-turn-transcript.test.ts (897 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | createTempDir | (private) |
| 40 | fn | createSqliteTranscriptTarget | (private) |
| 65 | fn | readTranscriptMessages | (private) |

## src/sessions/user-turn-transcript.ts (740 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | buildRunUserTurnIdempotencyKey | pub |
| 34 | type | PersistedUserTurnMediaFields | (private) |
| 41 | type | ResolvePersistedUserTurnTextOptions | (private) |
| 45 | type | PersistedUserTurnMediaFieldSource | (private) |
| 55 | fn | normalizeOptionalText | (private) |
| 60 | fn | normalizeTranscriptText | (private) |
| 68 | fn | resolvePersistedUserTurnText | pub |
| 82 | fn | mediaTypeForTranscript | (private) |
| 90 | fn | normalizeMediaEntryForTranscript | (private) |
| 106 | fn | normalizeOptionalTextArray | (private) |
| 118 | fn | resolveTranscriptMediaPath | (private) |
| 127 | fn | resolveTranscriptMediaType | (private) |
| 135 | fn | buildPersistedUserTurnMediaInputsFromFields | pub |
| 174 | fn | buildLateMediaAttachedText | pub |
| 185 | fn | buildPersistedUserTurnMediaFields | (private) |
| 205 | fn | buildUserTurnSenderMeta | (private) |
| 221 | fn | readOpenClawMessageMeta | (private) |
| 228 | fn | buildPersistedUserTurnMessage | pub |
| 254 | fn | resolvePersistedUserTurnMessage | (private) |
| 266 | fn | isUserMessage | (private) |
| 270 | fn | buildLateResolvedMediaMessage | (private) |
| 307 | fn | isBeforeAgentRunBlockedMessage | (private) |
| 313 | fn | userMessageHasImageContent | (private) |
| 328 | fn | mergePreparedUserTurnMessageForRuntime | pub |
| 354 | fn | restorePreparedUserTurnOperationalMetaForRuntime | pub |
| 373 | fn | preparePersistedUserTurnMessageForTranscriptWrite | pub |
| 424 | fn | persistUserTurnTranscript | (private) |
| 484 | fn | resolveUserTurnTranscriptTarget | (private) |
| 490 | fn | createUserTurnTranscriptRecorder | pub |
| 506 | fn | handlePersistenceError | (private) |
| 547 | fn | notifyMessagePersisted | (private) |
| 562 | fn | waitForRuntimePersistence | (private) |
| 607 | fn | persistMessage | (private) |
