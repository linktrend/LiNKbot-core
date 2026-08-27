# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 12 large files in this module.

## extensions/workboard/src/dispatcher.test.ts (981 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | createMemoryStore | (private) |

## extensions/workboard/src/dispatcher.ts (503 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | WorkboardSubagentRuntime | pub |
| 29 | type | WorkboardWorktreeRuntime | pub |
| 31 | type | WorkboardDispatchStartOptions | (private) |
| 44 | type | WorkboardStartedRun | (private) |
| 51 | type | WorkboardStartFailure | (private) |
| 57 | type | WorkboardDispatchAndStartResult | (private) |
| 62 | fn | normalizePositiveInteger | (private) |
| 68 | fn | cardBoardId | (private) |
| 72 | fn | sanitizeSessionSegment | (private) |
| 81 | fn | cardIsArchived | (private) |
| 85 | fn | buildSessionKey | (private) |
| 92 | fn | buildExecution | (private) |
| 117 | fn | materializeWorkspace | (private) |
| 190 | fn | buildWorkerPrompt | (private) |
| 213 | fn | sortReadyCards | (private) |
| 227 | fn | selectStartableCards | (private) |
| 264 | fn | dispatchAndStartWorkboardCards | pub |

## extensions/workboard/src/gateway.test.ts (678 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | createMemoryStore | (private) |
| 28 | type | RegisteredMethod | (private) |
| 149 | type | RegisteredMethod | (private) |
| 268 | type | RegisteredMethod | (private) |
| 313 | type | RegisteredMethod | (private) |
| 347 | type | RegisteredMethod | (private) |
| 391 | type | RegisteredMethod | (private) |
| 470 | type | RegisteredMethod | (private) |
| 588 | type | RegisteredMethod | (private) |

## extensions/workboard/src/gateway.ts (587 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | redactClaimToken | (private) |
| 36 | fn | redactDiagnosticsRows | (private) |
| 46 | fn | registerWorkboardGatewayMethods | pub |

## extensions/workboard/src/sqlite-store.ts (1446 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | Row | (private) |
| 37 | type | WorkboardSqliteStores | (private) |
| 46 | fn | resolveWorkboardSqlitePath | pub |
| 50 | fn | jsonValue | (private) |
| 54 | fn | parseJson | (private) |
| 61 | fn | stringValue | (private) |
| 66 | fn | numberValue | (private) |
| 77 | fn | requiredString | (private) |
| 85 | fn | requiredNumber | (private) |
| 93 | fn | optional | (private) |
| 97 | fn | asBlobContent | (private) |
| 101 | fn | blobToBase64 | (private) |
| 111 | fn | runTransaction | (private) |
| 123 | fn | tableColumns | (private) |
| 131 | fn | ensureColumn | (private) |
| 353 | fn | ensureWorkboardSchema | (private) |
| 375 | fn | chmodIfExists | (private) |
| 385 | fn | hardenWorkboardDatabaseFiles | (private) |
| 393 | fn | createDatabase | (private) |
| 426 | fn | childRows | (private) |
| 432 | fn | readLabels | (private) |
| 439 | fn | readEvents | (private) |
| 467 | fn | readExecution | (private) |
| 492 | fn | readMetadata | (private) |
| 719 | fn | readCard | (private) |
| 751 | fn | cardBoardId | (private) |
| 755 | fn | bindNull | (private) |
| 769 | fn | insertChildren | (private) |
| 780 | fn | insertCard | (private) |
| 1090 | class | WorkboardSqliteCardStore | (private) |
| 1136 | class | WorkboardSqliteBoardStore | (private) |
| 1230 | class | WorkboardSqliteSubscriptionStore | (private) |
| 1344 | class | WorkboardSqliteAttachmentStore | (private) |
| 1423 | fn | createWorkboardSqliteStores | pub |

## extensions/workboard/src/store-card-helpers.ts (745 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | compareCards | pub |
| 45 | fn | cardSessionKey | pub |
| 49 | fn | cardRunId | pub |
| 53 | fn | executionAttemptStatus | (private) |
| 66 | fn | syncExecutionAttemptMetadata | pub |
| 119 | fn | appendEvent | pub |
| 134 | fn | latestMetadataIdChanged | (private) |
| 142 | fn | lifecycleStatusSourceUpdatedAtFromPatch | pub |
| 156 | fn | latestStatusTransitionAt | (private) |
| 173 | fn | shouldSkipPersistedLifecycleStatusUpdate | pub |
| 185 | fn | updateEvent | pub |
| 314 | fn | removeUndefinedCardFields | pub |
| 338 | fn | assertCanMutateClaimedCard | pub |
| 356 | fn | retryBudgetExhausted | pub |
| 361 | fn | diagnostic | (private) |
| 379 | fn | mergeDiagnostics | pub |
| 396 | fn | computeCardDiagnostics | pub |
| 501 | fn | capText | pub |
| 508 | fn | cardBoardId | pub |
| 512 | fn | cardResultSummary | (private) |
| 520 | fn | buildWorkerContext | pub |
| 666 | fn | cardParentIds | pub |
| 673 | fn | cardChildIds | pub |
| 680 | fn | latestRunningAttempt | pub |
| 684 | fn | isDependencyPromotableStatus | pub |
| 694 | fn | isActiveDependencyTarget | pub |
| 706 | fn | closeRunningAttempts | pub |
| 722 | fn | notificationSequence | pub |
| 728 | fn | compareNotifications | pub |

## extensions/workboard/src/store-core.ts (927 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 70 | class | WorkboardCoreStore | pub |
| 113 | fn | runAndNotify | (private) |

## extensions/workboard/src/store-normalizers.ts (1399 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | fn | normalizeOptionalString | pub |
| 75 | fn | normalizeBoardId | pub |
| 87 | fn | normalizeBoardIdRequired | pub |
| 91 | fn | normalizeBoardMetadata | pub |
| 131 | fn | normalizeOrchestration | (private) |
| 167 | fn | normalizeNotificationKinds | (private) |
| 188 | fn | normalizeNotificationSubscription | pub |
| 236 | fn | normalizeTitle | pub |
| 247 | fn | normalizeNotes | pub |
| 258 | fn | normalizeBoundedString | pub |
| 274 | fn | normalizeStatus | pub |
| 284 | fn | normalizePriority | pub |
| 294 | fn | normalizeLabels | pub |
| 320 | fn | normalizeStringList | pub |
| 345 | fn | normalizePosition | pub |
| 352 | fn | normalizePositiveInteger | (private) |
| 362 | fn | normalizeWorkspace | (private) |
| 406 | fn | normalizeAutomation | pub |
| 476 | fn | deriveChildIdempotencyKey | pub |
| 487 | fn | normalizeExecutionMode | (private) |
| 500 | fn | normalizeExecutionStatus | (private) |
| 513 | fn | normalizeAttemptStatus | (private) |
| 526 | fn | normalizeLinkType | pub |
| 533 | fn | normalizeProofStatus | (private) |
| 546 | fn | normalizeTemplateId | pub |
| 552 | fn | normalizeTimestamp | pub |
| 558 | fn | normalizeEvent | (private) |
| 594 | fn | normalizeEvents | pub |
| 604 | fn | normalizeAttempt | (private) |
| 637 | fn | normalizeComment | (private) |
| 652 | fn | normalizeLink | (private) |
| 678 | fn | isDependencyLink | (private) |
| 682 | fn | normalizeProof | (private) |
| 707 | fn | normalizeArtifact | pub |
| 731 | fn | normalizeAttachment | (private) |
| 760 | fn | normalizeWorkerLog | (private) |
| 787 | fn | normalizeWorkerProtocol | (private) |
| 815 | fn | normalizeAttachmentInput | pub |
| 860 | fn | normalizeClaim | (private) |
| 885 | fn | normalizeDiagnosticAction | (private) |
| 902 | fn | normalizeDiagnostic | (private) |
| 942 | fn | normalizeNotification | (private) |
| 970 | fn | normalizeProofInput | pub |
| 986 | fn | completionProofConflicts | (private) |
| 992 | fn | appendCompletionProof | pub |
| 1024 | fn | normalizeMetadata | pub |
| 1147 | fn | normalizeExecution | pub |
| 1179 | fn | syncExecutionSessionKey | pub |
| 1193 | fn | removeUndefinedExecutionFields | (private) |
| 1210 | fn | removeUndefinedAutomationFields | (private) |
| 1240 | fn | removeUndefinedMetadataFields | pub |
| 1273 | fn | clearDiagnostics | pub |
| 1286 | fn | metadataIsEmpty | pub |
| 1290 | fn | metadataByteSize | (private) |
| 1294 | fn | dropFirst | (private) |
| 1302 | fn | dropFirstProofExcept | (private) |
| 1317 | fn | dropFirstNonDependencyLink | (private) |
| 1331 | fn | appendLinkPreservingDependencies | pub |
| 1346 | fn | trimMetadataToBudget | pub |

## extensions/workboard/src/store-workflow.ts (633 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | assertClaimIdentity | (private) |
| 71 | class | WorkboardWorkflowStore | pub |

## extensions/workboard/src/store.test.ts (3380 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | createMemoryStore | (private) |
| 40 | fn | statfsFixture | (private) |
| 1891 | fn | idComparator | (private) |

## extensions/workboard/src/tools.test.ts (643 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | createMemoryStore | (private) |
| 28 | fn | readPayload | (private) |

## extensions/workboard/src/tools.ts (1054 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | contextOwner | (private) |
| 21 | fn | canMutateCard | (private) |
| 26 | fn | readParentIds | (private) |
| 55 | fn | requireScopedCard | (private) |
| 71 | fn | requireClaimedCard | (private) |
| 84 | fn | summarizeCard | (private) |
| 113 | fn | redactClaimToken | (private) |
| 130 | type | WorkboardToolCardParams | (private) |
| 136 | type | WorkboardToolCardParamsReader | (private) |
| 137 | type | WorkboardCardMutation | (private) |
| 151 | fn | readCardToolParams | (private) |
| 163 | fn | redactedCardResult | (private) |
| 167 | fn | redactedRawCardResult | (private) |
| 171 | fn | redactedProofResult | (private) |
| 190 | fn | createWorkboardTools | pub |
| 209 | fn | runCardMutation | (private) |
| 217 | fn | runScopedCardMutation | (private) |
| 219 | fn | runClaimedCardMutation | (private) |
