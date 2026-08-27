# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 15 large files in this module.

## linkbots/lisa/ops/lisa-direct-migration.mjs (588 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | fail | (private) |
| 34 | fn | parseArgs | (private) |
| 61 | fn | requireArg | (private) |
| 69 | fn | absolute | (private) |
| 73 | fn | isWithin | (private) |
| 78 | fn | assertSafeProfileRoot | (private) |
| 91 | fn | assertBackupRoot | (private) |
| 110 | fn | assertSafeSymlinkTarget | (private) |
| 131 | fn | categoryFor | (private) |
| 170 | fn | hashFile | (private) |
| 181 | fn | hashLink | (private) |
| 185 | fn | loadCronMetadata | (private) |
| 210 | fn | detectPathReferences | (private) |
| 237 | fn | backupSqlite | (private) |
| 246 | fn | applyMetadata | (private) |
| 254 | fn | snapshotNode | (private) |
| 348 | fn | snapshot | (private) |
| 397 | fn | readManifest | (private) |
| 410 | fn | verifyBackup | (private) |
| 445 | fn | relocationPlan | (private) |
| 494 | fn | copyBackupNode | (private) |
| 513 | fn | restore | (private) |
| 539 | fn | compareCron | (private) |
| 559 | fn | main | (private) |

## linkbots/lisa/ops/lisa-ops.test.ts (1163 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 85 | fn | readPersonality | (private) |
| 604 | fn | run | (private) |
| 655 | fn | same | (private) |

## linkbots/lisa/ops/lisa-vps-reconciliation.mjs (924 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 91 | fn | fail | (private) |
| 95 | fn | assert | (private) |
| 101 | fn | stableValue | (private) |
| 115 | fn | canonicalJson | pub |
| 119 | fn | sha256 | (private) |
| 123 | fn | assertSha | (private) |
| 127 | fn | assertGitSha | (private) |
| 131 | fn | assertNoSecretMaterialFields | (private) |
| 150 | fn | assertSafeText | (private) |
| 154 | fn | normalizePath | (private) |
| 162 | fn | normalizeSource | (private) |
| 179 | fn | normalizeDestination | (private) |
| 190 | fn | normalizeReconciliation | (private) |
| 213 | fn | validConflictDisposition | (private) |
| 273 | fn | normalizeConflictDisposition | (private) |
| 281 | fn | normalizeEntry | (private) |
| 333 | fn | normalizeInventory | (private) |
| 351 | fn | metadataDrift | (private) |
| 356 | fn | comparePair | (private) |
| 399 | fn | validateConflict | (private) |
| 418 | fn | validateDecision | (private) |
| 462 | fn | buildSummary | (private) |
| 476 | fn | buildComparisons | (private) |
| 487 | fn | withoutReceipt | (private) |
| 492 | fn | withoutAcceptanceDigest | (private) |
| 497 | fn | assertExactStringArray | (private) |
| 507 | fn | validateSourceAcceptanceReceipt | pub |
| 638 | fn | buildSourceAcceptanceReceipt | pub |
| 701 | fn | validateReconciliation | pub |
| 791 | fn | buildReconciliation | pub |
| 843 | fn | parseArgs | (private) |
| 858 | fn | readJson | (private) |
| 863 | fn | compareCommand | (private) |
| 890 | fn | verifyCommand | (private) |
| 901 | fn | main | pub |

## linkbots/lisa/ops/lisa-vps-reconciliation.test.mjs (501 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | source | (private) |
| 30 | fn | entry | (private) |
| 42 | fn | inventory | (private) |

## linkbots/lisa/ops/main-approve-binding.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | MainApproveItem | pub |
| 46 | type | MainApprovePackage | pub |
| 53 | type | MainApproveAskView | pub |
| 59 | type | ApprovalDispatch | pub |
| 76 | type | MainApproveAskResult | pub |
| 95 | type | MainApproveStoreAvailability | pub |
| 100 | type | MainApprovePersistedRef | pub |
| 115 | fn | resolveMainApproveRuntimeStore | pub |
| 152 | type | AuthoritativePackageStore | pub |
| 157 | fn | hashMainApprovePackage | pub |
| 170 | fn | parsePersistedPackage | (private) |
| 198 | fn | sealMainApprovePackage | pub |
| 235 | fn | claimSealedMainApprovePackage | pub |
| 258 | fn | buildCarlosAskViewPure | pub |
| 274 | fn | buildCarlosAskView | pub |
| 284 | fn | issueCarlosAsk | pub |
| 333 | fn | assertImmutableBindings | pub |
| 353 | fn | parseInstantToEpochMs | pub |
| 368 | fn | isMainApproveClaimExpired | pub |
| 384 | fn | validateApprovalBindings | pub |
| 442 | fn | authorizeApprovalDispatch | pub |
| 519 | fn | validateApprovalDispatch | pub |

## linkbots/lisa/ops/model-routing-contract.ts (615 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | ReasoningEffort | pub |
| 15 | type | ModelRouteSlot | pub |
| 25 | type | PdfCapabilityStatus | pub |
| 31 | type | PdfCutoverState | pub |
| 33 | type | PdfDocumentRoutingFailureEvent | pub |
| 47 | type | PdfDocumentModelsRollback | pub |
| 60 | type | PdfDocumentModelsCutover | pub |
| 78 | type | ModelRouteEntry | pub |
| 310 | type | LisaApprovedModelRouting | pub |
| 313 | fn | defaultChatFallbackRefs | pub |
| 328 | fn | primaryModelRef | pub |
| 338 | fn | imageModelRef | pub |
| 349 | fn | pdfDocumentModelRef | pub |
| 355 | fn | primaryReasoningEffort | pub |
| 369 | fn | buildPdfDocumentRoutingFailureEvent | pub |
| 392 | fn | rollbackPdfDocumentRoutingOnly | pub |
| 431 | fn | buildNonLiveAgentsDefaultsFragment | pub |
| 484 | fn | validateApprovedRouting | pub |

## linkbots/lisa/ops/stage-durable-store.test.ts (643 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | tempDbPath | (private) |

## linkbots/lisa/ops/stage-ops-coordinator.ts (883 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | StageOpsAction | pub |
| 43 | type | StageOpsCoordinatorPlan | pub |
| 87 | type | StageOpsPlanInput | pub |
| 105 | type | JsonRecord | (private) |
| 107 | type | StageCronJobIdResolution | pub |
| 116 | type | StageCronListReceipt | pub |
| 130 | fn | isJsonRecord | (private) |
| 134 | fn | isUuid | (private) |
| 141 | fn | coreStageJobNames | (private) |
| 145 | fn | acceptedStageJobs | (private) |
| 153 | fn | acceptedStageJobNames | (private) |
| 157 | fn | validateStageCronReceiptJob | (private) |
| 186 | fn | validateResolvedJobIds | (private) |
| 217 | fn | buildStageCronListReceipt | pub |
| 236 | fn | validateStageCronReceiptEnvelope | (private) |
| 295 | fn | resolveStageCronJobIdsFromReceipt | pub |
| 366 | fn | resolveStageCronJobIdsFromExplicitMap | pub |
| 391 | fn | readJsonFile | (private) |
| 395 | fn | captureStageCronListReceipt | (private) |
| 425 | fn | selectJobs | (private) |
| 433 | fn | planStageOps | pub |
| 506 | fn | oc | (private) |
| 683 | fn | materializeStageSeedJson | pub |
| 749 | fn | printHelp | (private) |
| 774 | fn | main | (private) |

## linkbots/lisa/ops/stage-ops-holds.test.ts (574 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 158 | fn | openclawCmds | (private) |
| 307 | fn | currentCronJobs | (private) |
| 322 | fn | receipt | (private) |

## linkbots/lisa/ops/stage-ops-payloads.ts (533 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | StageJobKind | pub |
| 39 | type | StageSeedJob | pub |
| 58 | type | StageDurableStoreProbe | pub |
| 65 | type | StageRepairSupervisionDecision | pub |
| 84 | fn | hardStopBlock | (private) |
| 100 | fn | renderStageExternalUnavailableOutput | pub |
| 110 | fn | validateStageExternalUnavailableOutput | pub |
| 126 | fn | buildHeartbeatStageMessage | pub |
| 140 | fn | buildDigestStageMessage | pub |
| 154 | fn | buildShipPullStageMessage | pub |
| 173 | fn | buildRepairSupervisionStageMessage | pub |
| 189 | fn | decideRepairSupervision | pub |
| 226 | fn | buildStageOpsJobs | pub |
| 343 | fn | buildStageRepairSupervisionJob | pub |
| 364 | type | CanonicalPayloadHashInput | pub |
| 376 | fn | canonicalPayloadBytes | pub |
| 391 | fn | hashStagePayload | pub |
| 395 | fn | hashStageJob | pub |
| 409 | fn | validateStageJob | pub |
| 459 | fn | validateStageOpsCatalog | pub |
| 497 | fn | buildStageSeedDocument | pub |

## linkbots/lisa/ops/stage-pdf-canary.execute.test.ts (718 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | fn | routingSliceFixture | (private) |
| 69 | fn | fakeRunner | (private) |
| 82 | fn | tempStagePolicy | (private) |
| 95 | fn | wireTempRollback | (private) |

## linkbots/lisa/ops/stage-pdf-canary.ts (1002 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | type | StagePdfCanaryMode | pub |
| 67 | type | StagePdfOpenRouterRequest | pub |
| 98 | type | StagePdfTransportResult | pub |
| 107 | type | StagePdfProofKind | pub |
| 114 | type | StagePdfCanaryTransport | pub |
| 124 | type | SealedOpenRouterHttpProductionTransport | (private) |
| 128 | fn | isSealedOpenRouterHttpProduction | (private) |
| 139 | type | StagePdfCanaryReceipt | pub |
| 216 | fn | buildSyntheticStagePdfBytes | pub |
| 231 | fn | writeSyntheticStagePdf | pub |
| 250 | fn | inspectOpenRouterCredentialSecretRef | pub |
| 273 | fn | hasOpenRouterCredentialProcessOnly | pub |
| 285 | fn | resolveOpenRouterApiKeyViaSecretRef | pub |
| 303 | fn | buildStagePdfOpenRouterRequest | pub |
| 350 | fn | verifyStagePdfTransportResponse | pub |
| 368 | fn | sendOpenRouterChatRequest | (private) |
| 443 | fn | createOpenRouterFetchTransport | pub |
| 461 | fn | mintSealedOpenRouterHttpProductionTransport | (private) |
| 474 | fn | stagePdfConfigSliceForRollback | (private) |
| 491 | fn | applyInMemoryFailureRollback | (private) |
| 508 | type | StagePdfOperationalRollbackWiring | pub |
| 520 | fn | resolveLiveExecuteOperationalRollback | pub |
| 545 | fn | applyExecuteFailureRollback | (private) |
| 590 | fn | baseReceiptFields | (private) |
| 654 | fn | writeReceipt | (private) |
| 665 | fn | planStagePdfCanary | pub |
| 713 | fn | executeStagePdfCanary | pub |
| 887 | fn | printHelp | (private) |
| 898 | fn | mainAsync | (private) |
| 981 | fn | readReceipt | pub |

## linkbots/lisa/ops/stage-pdf-operational-rollback.ts (520 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | StagePdfLiveRollbackPolicy | pub |
| 61 | type | StagePdfServiceRunner | pub |
| 66 | type | StagePdfOperationalRollbackResult | pub |
| 86 | fn | assertAllowedService | (private) |
| 105 | fn | assertExactStagePdfHealthUrl | pub |
| 141 | fn | resolvePinnedStagePdfConfigPath | pub |
| 172 | fn | readJsonObject | (private) |
| 180 | fn | asConfigSlice | (private) |
| 184 | fn | atomicWriteJson | (private) |
| 191 | fn | backupConfig | (private) |
| 198 | fn | restoreBackup | (private) |
| 206 | fn | recoverRestoredConfig | (private) |
| 241 | fn | createStagePdfLisaStageRunner | pub |
| 298 | fn | applyStagePdfOperationalRollback | pub |
| 309 | fn | baseFail | (private) |
| 513 | fn | writeStagePdfRollbackFixtureConfig | pub |

## linkbots/lisa/ops/stage-workspace-package.test.ts (585 lines)

_No symbols extracted._

## linkbots/lisa/ops/stage-workspace-package.ts (970 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | StageWorkspacePackageManifestFile | pub |
| 54 | type | StageWorkspacePackageManifest | pub |
| 66 | type | StageWorkspaceFileVerification | pub |
| 78 | type | StageWorkspacePackageReceipt | pub |
| 108 | type | StageWorkspacePackageSourceReceipt | pub |
| 120 | fn | allManifestEntries | (private) |
| 131 | fn | loadStageWorkspacePackageManifest | pub |
| 174 | fn | assertSafePackagePath | (private) |
| 186 | fn | canonicalStageWorkspacePackageManifestBytes | pub |
| 206 | fn | hashStageWorkspacePackageManifest | pub |
| 215 | fn | buildStageWorkspacePackageSourceReceipt | pub |
| 242 | fn | sha256File | pub |
| 278 | type | Pkt11OfflineCanaryConfig | pub |
| 290 | type | Pkt11OfflineCanaryResult | pub |
| 303 | type | Pkt11OfflineRollbackEvidence | pub |
| 313 | fn | preVpsFail | (private) |
| 317 | fn | isSha256 | (private) |
| 321 | fn | isGitSha | (private) |
| 325 | fn | containsSensitiveKey | (private) |
| 337 | fn | validatePkt11OfflineCanaryConfig | pub |
| 389 | fn | runPkt11OfflineCanary | pub |
| 421 | fn | buildPkt11OfflineRollbackEvidence | pub |
| 443 | type | Pkt11PreVpsQualificationReceipt | pub |
| 471 | fn | withoutPreVpsDigest | (private) |
| 478 | fn | canonicalPreVpsJson | (private) |
| 483 | fn | validatePkt11PreVpsQualificationReceipt | pub |
| 588 | fn | buildPkt11PreVpsQualificationReceipt | pub |
| 631 | fn | verifyStageWorkspacePackage | pub |
| 678 | fn | resolveReal | (private) |
| 698 | fn | isForbiddenStageWorkspaceTarget | pub |
| 711 | fn | isForbiddenLiveLisaTarget | pub |
| 718 | fn | isBlockedTargetAction | (private) |
| 722 | fn | buildCopyCommands | (private) |
| 745 | fn | shellQuote | (private) |
| 749 | fn | planStageWorkspacePackage | pub |
| 900 | fn | writeReceipt | (private) |
| 908 | fn | printHelp | (private) |
| 920 | fn | main | (private) |
