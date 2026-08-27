# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## src/context-engine/context-engine.test.ts (1944 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | ContextEngineFactory | (private) |
| 42 | type | ContextEngineFactoryContext | (private) |
| 44 | fn | registerTestContextEngine | (private) |
| 58 | fn | installCompactRuntimeSpy | (private) |
| 73 | fn | requireCompactRuntimeParams | (private) |
| 88 | fn | configWithSlot | (private) |
| 92 | fn | makeMockMessage | (private) |
| 97 | fn | uniqueEngineId | (private) |
| 102 | fn | registerPromptTrackingEngine | (private) |
| 120 | fn | requireFactoryContext | (private) |
| 129 | fn | requireRegistryState | (private) |
| 140 | class | MockContextEngine | (private) |
| 198 | class | LegacySessionKeyStrictEngine | (private) |
| 286 | class | SessionKeyRuntimeErrorEngine | (private) |
| 335 | class | LegacyAssembleStrictEngine | (private) |
| 398 | class | LegacyRuntimeSettingsStrictEngine | (private) |
| 499 | class | LegacyRuntimeThenAssembleStrictEngine | (private) |
| 575 | fn | factory | (private) |
| 769 | fn | factory | (private) |
| 784 | fn | factory1 | (private) |
| 785 | fn | factory2 | (private) |
| 804 | fn | factory1 | (private) |
| 805 | fn | factory2 | (private) |
| 1779 | fn | resolveStrictEngine | (private) |
| 1912 | fn | factory | (private) |

## src/context-engine/registry.ts (1053 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | ContextEngineFactoryContext | (private) |
| 45 | type | ContextEngineFactory | pub |
| 48 | type | ContextEngineRegistrationResult | (private) |
| 49 | type | ContextEngineRegistrationLifecycle | (private) |
| 50 | type | ContextEngineRegistration | (private) |
| 56 | type | RegisterContextEngineForOwnerOptions | (private) |
| 62 | type | ResolvedContextEngineMetadata | (private) |
| 66 | type | RuntimeQuarantineProxyState | (private) |
| 102 | type | SessionKeyCompatMethodName | (private) |
| 103 | type | SessionKeyCompatParams | (private) |
| 110 | type | LegacyCompatKey | (private) |
| 111 | type | LegacyCompatParamMap | (private) |
| 113 | fn | isSessionKeyCompatMethodName | (private) |
| 117 | fn | hasOwnLegacyCompatKey | (private) |
| 124 | fn | withoutLegacyCompatKeys | (private) |
| 135 | fn | issueRejectsLegacyCompatKeyStrictly | (private) |
| 217 | fn | isLegacyCompatUnknownFieldValidationMessage | (private) |
| 224 | fn | isLegacyCompatErrorForKey | (private) |
| 277 | fn | detectRejectedLegacyCompatKeys | (private) |
| 290 | fn | invokeWithLegacyCompat | (private) |
| 341 | fn | wrapContextEngineWithSessionKeyCompat | (private) |
| 382 | fn | wrapResolvedContextEngine | (private) |
| 415 | type | ContextEngineRuntimeQuarantine | (private) |
| 423 | type | ContextEngineRegistryState | (private) |
| 438 | fn | getContextEngineRegistryState | (private) |
| 442 | fn | requireContextEngineOwner | (private) |
| 452 | fn | formatContextEngineError | (private) |
| 456 | fn | recordContextEngineQuarantine | (private) |
| 491 | fn | getContextEngineQuarantine | (private) |
| 495 | fn | listContextEngineQuarantines | pub |
| 520 | fn | clearContextEngineRuntimeQuarantine | (private) |
| 534 | fn | registerContextEngineForOwner | pub |
| 570 | fn | getContextEngineRegistration | pub |
| 577 | fn | listContextEngineIds | (private) |
| 581 | fn | clearContextEnginesForOwner | pub |
| 595 | fn | resolveContextEngineOwnerPluginId | pub |
| 609 | fn | resolveEffectiveContextEngineMetadata | (private) |
| 626 | fn | describeResolvedContextEngineContractError | (private) |
| 671 | type | GuardedContextEngineMethodName | (private) |
| 694 | fn | contextEngineFallbackResult | (private) |
| 724 | fn | contextEngineAbortSignal | (private) |
| 735 | fn | contextEngineAbortError | (private) |
| 749 | fn | isContextEngineAbortRejection | (private) |
| 769 | fn | invokeFallbackContextEngineMethod | (private) |
| 801 | fn | wrapContextEngineWithRuntimeQuarantine | (private) |
| 810 | fn | getFallbackEngine | (private) |
| 831 | fn | isQuarantined | (private) |
| 901 | type | ResolveContextEngineOptions | pub |
| 922 | fn | resolveContextEngine | pub |
| 1032 | fn | resolveDefaultContextEngine | (private) |

## src/context-engine/types.ts (507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | AssembleResult | pub |
| 41 | type | ContextEngineProjection | pub |
| 50 | type | ContextEngineOperation | pub |
| 52 | type | ContextEngineRuntimeMode | pub |
| 54 | type | ContextEngineSelectionSource | pub |
| 56 | type | ContextEngineRuntimeReasonCode | pub |
| 64 | type | ContextEngineHostCapability | pub |
| 73 | type | ContextEngineHostRequirements | pub |
| 80 | type | ContextEngineRuntimeSettings | pub |
| 112 | type | CompactResult | pub |
| 145 | fn | resolveCompactionSuccessorTranscript | pub |
| 158 | type | IngestResult | pub |
| 163 | type | IngestBatchResult | pub |
| 168 | type | BootstrapResult | pub |
| 177 | type | ContextEngineInfo | pub |
| 197 | type | SubagentSpawnPreparation | pub |
| 202 | type | SubagentEndReason | pub |
| 204 | type | TranscriptRewriteReplacement | pub |
| 211 | type | TranscriptRewriteRequest | pub |
| 218 | type | TranscriptRewriteResult | pub |
| 229 | type | ContextEngineMaintenanceResult | pub |
| 231 | type | ContextEnginePromptCacheRetention | (private) |
| 233 | type | ContextEnginePromptCacheUsage | (private) |
| 244 | type | ContextEnginePromptCacheObservationChangeCode | (private) |
| 252 | type | ContextEnginePromptCacheObservationChange | (private) |
| 257 | type | ContextEnginePromptCacheObservation | (private) |
| 264 | type | ContextEnginePromptCacheInfo | pub |
| 277 | type | ContextEngineTranscriptStorageInfo | (private) |
| 288 | type | ContextEngineSessionTarget | pub |
| 301 | type | ContextEngineRuntimeContext | pub |
| 344 | interface | ContextEngine | pub |
