# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 44 large files in this module.

## extensions/qa-lab/src/agentic-parity-report.test.ts (1070 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | QaParityReportScenario | (private) |
| 14 | fn | computeQaAgenticParityMetrics | (private) |
| 39 | fn | withScenarioOverride | (private) |
| 45 | fn | makeRuntimeParitySummary | (private) |
| 121 | fn | firstRuntimeParityScenario | (private) |

## extensions/qa-lab/src/agentic-parity-report.ts (798 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | QaParityReportStep | (private) |
| 24 | type | QaParityReportScenario | (private) |
| 38 | type | QaParityRunBlock | (private) |
| 47 | type | QaParitySuiteSummary | pub |
| 58 | type | QaRuntimeParitySuiteScenario | (private) |
| 62 | type | QaRuntimeParitySuiteSummary | pub |
| 66 | type | QaRuntimeParityScenarioReport | (private) |
| 80 | type | QaRuntimeParityReport | (private) |
| 95 | type | QaAgenticParityMetrics | (private) |
| 107 | type | QaAgenticParityScenarioComparison | (private) |
| 115 | type | QaAgenticParityComparison | (private) |
| 160 | fn | normalizeScenarioStatus | (private) |
| 164 | fn | scenarioText | (private) |
| 172 | fn | scenarioHasPattern | (private) |
| 180 | fn | scenarioRuntimeParity | (private) |
| 184 | fn | scenarioHasRuntimeToolCallEvidence | (private) |
| 197 | fn | computeQaAgenticParityMetrics | (private) |
| 244 | fn | rate | (private) |
| 245 | fn | toolRate | (private) |
| 260 | fn | formatPercent | (private) |
| 264 | fn | buildRuntimeParityDriftCounts | (private) |
| 275 | fn | isLiveProviderMode | (private) |
| 279 | fn | describeLiveUsageFailure | (private) |
| 294 | fn | normalizeRuntimePair | (private) |
| 303 | fn | requiredCoverageStatus | (private) |
| 309 | fn | scopeSummaryToParityPack | (private) |
| 323 | type | StructuredQaParityLabel | (private) |
| 334 | fn | parseStructuredLabelRef | (private) |
| 365 | fn | verifySummaryLabelMatch | (private) |
| 399 | class | QaParityLabelMismatchError | (private) |
| 423 | fn | buildQaAgenticParityComparison | pub |
| 590 | fn | renderQaAgenticParityMarkdownReport | pub |
| 646 | fn | buildQaRuntimeParityReport | pub |
| 735 | fn | renderQaRuntimeParityMarkdownReport | pub |

## extensions/qa-lab/src/character-eval.test.ts (729 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | QaCharacterEvalParams | (private) |
| 10 | type | QaCharacterEvalJudgment | (private) |
| 13 | type | CharacterRunSuiteParams | (private) |
| 14 | type | CharacterRunJudgeParams | (private) |
| 15 | type | TestJudgeRanking | (private) |
| 18 | fn | makeJudgeReply | (private) |
| 22 | fn | makeRunJudge | (private) |
| 26 | fn | defaultModelTranscript | (private) |
| 30 | fn | makeReplySuiteResult | (private) |
| 38 | fn | makeRunSuite | (private) |
| 44 | fn | createConcurrencyGate | (private) |
| 53 | fn | releaseQueuedTasks | (private) |
| 93 | fn | makeSuiteResult | (private) |
| 151 | fn | requireRunSuiteParams | (private) |
| 159 | fn | requireRunJudgeParams | (private) |
| 167 | fn | expectFirstRunFailure | (private) |

## extensions/qa-lab/src/character-eval.ts (714 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | QaCharacterRunStatus | (private) |
| 35 | type | QaCharacterModelOptions | pub |
| 40 | type | QaCharacterEvalRun | (private) |
| 59 | type | QaCharacterEvalJudgment | (private) |
| 68 | type | QaCharacterEvalResult | (private) |
| 76 | type | QaCharacterEvalJudgeResult | (private) |
| 87 | type | QaCharacterEvalProgressLogger | (private) |
| 89 | type | RunSuiteFn | (private) |
| 100 | type | RunJudgeFn | (private) |
| 109 | type | QaCharacterEvalParams | (private) |
| 131 | fn | normalizeModelRefs | (private) |
| 135 | fn | resolveCandidateThinkingDefault | (private) |
| 150 | fn | resolveCandidateFastMode | (private) |
| 162 | fn | resolveJudgeOptions | (private) |
| 179 | fn | sanitizePathPart | (private) |
| 184 | fn | normalizeConcurrency | (private) |
| 194 | fn | extractTranscript | (private) |
| 207 | fn | collectTranscriptStats | (private) |
| 216 | fn | detectTranscriptFailure | (private) |
| 240 | fn | formatDuration | (private) |
| 250 | fn | logCharacterEvalProgress | (private) |
| 257 | fn | formatEvalIndex | (private) |
| 261 | fn | summarizeRunStats | (private) |
| 271 | fn | formatBlindCandidateLabel | (private) |
| 275 | fn | buildJudgePrompt | (private) |
| 335 | fn | normalizeJudgment | (private) |
| 366 | fn | parseJudgeReply | (private) |
| 383 | fn | defaultRunJudge | (private) |
| 405 | fn | defaultRunSuite | (private) |
| 410 | fn | renderCharacterEvalReport | (private) |
| 487 | fn | runQaCharacterEval | pub |

## extensions/qa-lab/src/cli.runtime.test.ts (2836 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 111 | fn | mockFirstObjectArg | (private) |
| 120 | fn | expectFields | (private) |
| 130 | fn | expectWriteContains | (private) |
| 138 | fn | makeQaEvidence | (private) |
| 148 | fn | flowSuiteRuntimeResult | (private) |
| 169 | fn | unifiedSuiteRuntimeResult | (private) |

## extensions/qa-lab/src/cli.runtime.ts (1800 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 112 | type | InterruptibleServer | (private) |
| 116 | type | QaLabSelfCheckCommandOptions | pub |
| 120 | type | QaScenarioProviderCommandOptions | (private) |
| 127 | type | QaScenarioRunCommandOptions | (private) |
| 135 | type | QaProfileCommandOptions | pub |
| 142 | type | QaSuiteCommandOptions | pub |
| 165 | fn | normalizeQaSuiteChannelDriver | (private) |
| 179 | fn | resolveQaManualLaneModels | (private) |
| 197 | fn | parseQaThinkingLevel | (private) |
| 213 | fn | parseQaModelThinkingOverrides | (private) |
| 230 | fn | parseQaBooleanModelOption | (private) |
| 247 | fn | parseQaPositiveIntegerOption | (private) |
| 257 | fn | normalizeQaOptionalModelRef | (private) |
| 262 | fn | normalizeQaRuntimeId | (private) |
| 272 | fn | parseQaRuntimePair | (private) |
| 294 | fn | parseQaRuntimeParityTierFilters | (private) |
| 314 | fn | resolveQaRuntimeParityTierScenarioIds | (private) |
| 384 | fn | rejectNonFlowScenarioIds | (private) |
| 408 | fn | isQaSuiteInfraRetryableError | (private) |
| 415 | fn | hasQaSuiteRetryableNetworkCode | (private) |
| 433 | fn | runQaSuiteWithInfraRetry | (private) |
| 453 | fn | runQaParityPreflight | (private) |
| 496 | fn | parseQaCliBackendAuthMode | (private) |
| 507 | fn | parseQaCredentialListStatus | (private) |
| 518 | fn | normalizeQaCredentialAdminError | (private) |
| 531 | fn | writeQaCredentialCommandErrorJson | (private) |
| 547 | fn | parseQaModelSpecs | (private) |
| 608 | fn | runInterruptibleServer | (private) |
| 612 | fn | shutdown | (private) |
| 619 | fn | onSignal | (private) |
| 628 | fn | resolveQaCredentialPayloadFileMaxBytes | (private) |
| 640 | fn | readQaCredentialPayloadFile | (private) |
| 666 | fn | formatQaCredentialLeaseState | (private) |
| 673 | fn | printQaCredentialListTable | (private) |
| 704 | fn | printQaCredentialDoctorTable | (private) |
| 716 | fn | runQaLabSelfCheckCommand | pub |
| 733 | fn | runQaProfileCommand | pub |
| 858 | fn | selectQaScenarioDefinitionsForChannelResolution | (private) |
| 886 | fn | normalizeQaRunProfile | (private) |
| 897 | fn | defaultQaRunProfileProviderMode | (private) |
| 901 | fn | qaScorecardCategoryMatchesRunProfile | (private) |
| 920 | fn | formatQaRunProfileNoMatchMessage | (private) |
| 926 | fn | formatQaRunProfileFilterList | (private) |
| 937 | fn | withTemporaryQaProfileEnv | (private) |
| 951 | fn | runQaSuiteCommand | pub |
| 1190 | fn | runQaParityReportCommand | pub |
| 1287 | fn | runQaConfidenceReportCommand | pub |
| 1322 | fn | runQaConfidenceSelfTestCommand | pub |
| 1341 | fn | runQaCoverageReportCommand | pub |
| 1400 | fn | runQaJsonlReplayCommand | pub |
| 1444 | fn | runQaCharacterEvalCommand | pub |
| 1482 | fn | runQaManualLaneCommand | pub |
| 1517 | fn | runQaCredentialsAddCommand | pub |
| 1561 | fn | runQaCredentialsRemoveCommand | pub |
| 1605 | fn | runQaCredentialsListCommand | pub |
| 1659 | fn | runQaCredentialsDoctorCommand | pub |
| 1680 | fn | runQaLabUiCommand | pub |
| 1711 | fn | runQaDockerScaffoldCommand | pub |
| 1739 | fn | runQaDockerBuildImageCommand | pub |
| 1748 | fn | runQaDockerUpCommand | pub |
| 1777 | fn | runQaProviderServerCommand | pub |

## extensions/qa-lab/src/cli.test.ts (1003 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | createAvailableQaRunnerContribution | (private) |
| 27 | fn | createBlockedQaRunnerContribution | (private) |
| 36 | fn | createConflictingQaRunnerContribution | (private) |
| 85 | fn | requireQaTelegramOptions | (private) |
| 94 | fn | requireQaSuiteOptions | (private) |

## extensions/qa-lab/src/cli.ts (1000 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | QaScenarioRunCliOptions | (private) |
| 37 | type | QaRunCliOptions | (private) |
| 66 | type | QaSuiteCliOptions | (private) |
| 87 | fn | invalidQaCliArgument | (private) |
| 95 | fn | parseQaCliPositiveIntegerOption | (private) |
| 103 | fn | parseQaCliTcpPortOption | (private) |
| 111 | fn | parseQaEvidenceModeOption | (private) |
| 122 | fn | resolveQaEvidenceModeOptions | (private) |
| 134 | fn | collectCliSuppliedQaRunFlags | (private) |
| 143 | fn | formatFlagList | (private) |
| 147 | fn | validateQaRunMode | (private) |
| 171 | fn | runQaSelfCheck | (private) |
| 176 | fn | runQaProfile | (private) |
| 181 | fn | runQaSuiteCliCommand | (private) |
| 186 | fn | runQaParityReport | (private) |
| 201 | fn | runQaConfidenceReport | (private) |
| 213 | fn | runQaConfidenceSelfTest | (private) |
| 218 | fn | runQaCoverageReport | (private) |
| 230 | fn | runQaJsonlReplay | (private) |
| 241 | fn | runQaCharacterEval | (private) |
| 259 | fn | runQaManualLane | (private) |
| 273 | fn | runQaCredentialsAdd | (private) |
| 287 | fn | runQaCredentialsRemove | (private) |
| 298 | fn | runQaCredentialsList | (private) |
| 312 | fn | runQaCredentialsDoctor | (private) |
| 322 | fn | runQaUi | (private) |
| 339 | fn | runQaDockerScaffold | (private) |
| 353 | fn | runQaDockerBuildImage | (private) |
| 358 | fn | runQaDockerUp | (private) |
| 373 | fn | runQaProviderServer | (private) |
| 381 | fn | isQaLabCliAvailable | pub |
| 385 | fn | assertNoQaSubcommandCollision | (private) |
| 391 | fn | registerQaLabCli | pub |

## extensions/qa-lab/src/confidence-report.test.ts (981 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | QaConfidenceManifest | (private) |
| 25 | fn | writeJson | (private) |

## extensions/qa-lab/src/confidence-report.ts (1303 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | QaConfidenceVerdict | (private) |
| 38 | type | QaConfidenceLaneKind | (private) |
| 47 | type | QaConfidenceManifestLane | (private) |
| 65 | type | QaConfidenceManifest | (private) |
| 71 | type | QaConfidenceLaneStatus | (private) |
| 73 | type | QaConfidenceLaneResult | (private) |
| 93 | type | QaConfidenceReport | (private) |
| 113 | type | QaConfidenceSelfTestCanary | (private) |
| 128 | type | QaConfidenceSelfTestSummary | (private) |
| 144 | fn | readString | (private) |
| 148 | fn | readNumber | (private) |
| 152 | fn | readCount | (private) |
| 156 | fn | readBoolean | (private) |
| 160 | fn | readStringArray | (private) |
| 168 | fn | isGatewayLogSentinelFinding | (private) |
| 177 | fn | collectGatewayLogSentinels | (private) |
| 179 | fn | visit | (private) |
| 206 | fn | isQaConfidenceVerdict | (private) |
| 210 | fn | readRequiredString | (private) |
| 218 | fn | readVerdict | (private) |
| 231 | fn | readLaneKind | (private) |
| 247 | fn | normalizeManifestLane | (private) |
| 296 | fn | normalizeQaConfidenceManifest | (private) |
| 325 | fn | readQaConfidenceManifestFile | pub |
| 342 | fn | resolveArtifactPath | (private) |
| 346 | fn | readJsonFile | (private) |
| 350 | fn | isMissingFileError | (private) |
| 354 | fn | statusFromPassed | (private) |
| 358 | type | QaConfidenceLaneEvaluation | (private) |
| 366 | fn | evaluateQaSuiteSummary | (private) |
| 544 | fn | evaluatePassSummary | (private) |
| 582 | fn | evaluateTokenEfficiencySummary | (private) |
| 614 | fn | evaluateJsonlReplaySummary | (private) |
| 677 | fn | evaluateSelfTestSummary | (private) |
| 719 | fn | evaluateLaneArtifact | (private) |
| 744 | fn | resultForMissingLane | (private) |
| 763 | fn | baseLaneResult | (private) |
| 786 | fn | classifiedFailureResult | (private) |
| 807 | fn | evaluatedFailureResult | (private) |
| 823 | fn | evaluateLane | (private) |
| 856 | fn | applySkipBackfillState | (private) |
| 876 | fn | countLaneResults | (private) |
| 887 | fn | failuresForLaneResults | (private) |
| 893 | fn | globalFailuresForLaneResults | (private) |
| 914 | fn | buildQaConfidenceReport | pub |
| 952 | fn | formatVerdict | (private) |
| 956 | fn | escapeTableCell | (private) |
| 960 | fn | renderQaConfidenceMarkdownReport | pub |
| 993 | fn | syntheticRuntimeCell | (private) |
| 1013 | fn | syntheticToolCall | (private) |
| 1022 | fn | detectRuntimeDrift | (private) |
| 1038 | fn | syntheticPromptReport | (private) |
| 1070 | fn | detectHarnessDrift | (private) |
| 1094 | fn | detectTokenEfficiencyRegression | (private) |
| 1126 | fn | detectJsonlReplayDrift | (private) |
| 1139 | fn | buildQaConfidenceSelfTestSummary | (private) |
| 1272 | fn | renderQaConfidenceSelfTestMarkdownReport | (private) |
| 1290 | fn | writeQaConfidenceSelfTestArtifacts | pub |

## extensions/qa-lab/src/coverage-report.test.ts (728 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | buildQaScorecardTaxonomyReport | (private) |
| 35 | fn | testMaturityTaxonomy | (private) |
| 116 | fn | scenarioWithCoverage | (private) |

## extensions/qa-lab/src/coverage-report.ts (534 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | QaCoverageScenarioSummary | (private) |
| 18 | type | QaScenarioSearchMatch | (private) |
| 31 | type | QaCoverageIntent | (private) |
| 33 | type | QaCoverageScenarioReference | (private) |
| 37 | type | QaCoverageIdSummary | (private) |
| 42 | type | QaCoverageScenarioPackSummary | (private) |
| 50 | type | QaCoverageInventory | (private) |
| 64 | fn | assertUniqueQaScenarioIds | (private) |
| 85 | fn | scenarioTheme | (private) |
| 90 | fn | scenarioSurfaces | (private) |
| 94 | fn | scenarioRisk | (private) |
| 98 | fn | summarizeScenario | (private) |
| 109 | fn | normalizeSearchText | (private) |
| 113 | fn | tokenizeScenarioSearchQuery | (private) |
| 117 | fn | scenarioSearchText | (private) |
| 146 | fn | stringifyConfigValue | (private) |
| 150 | fn | summarizeScenarioSearchMatch | (private) |
| 170 | fn | findQaScenarioMatches | pub |
| 187 | fn | sortCoverageIds | (private) |
| 191 | fn | buildScenarioPackSummaries | (private) |
| 221 | fn | buildQaCoverageInventory | pub |
| 231 | fn | addFeatureCoverage | (private) |
| 300 | fn | pushCoverageIdLines | (private) |
| 309 | fn | pushScenarioPackLines | (private) |
| 320 | fn | pushScorecardTaxonomyLines | (private) |
| 383 | fn | renderQaCoverageMarkdownReport | pub |
| 437 | fn | formatOptionalScenarioMetadata | (private) |
| 447 | fn | uniqueScenarioValues | (private) |
| 451 | fn | formatSuiteCommand | (private) |
| 461 | fn | scenarioMatchCommandGroups | (private) |
| 484 | fn | renderQaScenarioMatchesMarkdownReport | pub |

## extensions/qa-lab/src/crabline-transport.test.ts (992 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | createSelection | (private) |
| 24 | fn | requireString | (private) |
| 237 | fn | postTelegram | (private) |

## extensions/qa-lab/src/evidence-gallery.test.ts (736 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | createTempRepo | (private) |
| 23 | fn | writeJson | (private) |
| 28 | fn | producerRootLeakSegments | (private) |
| 41 | fn | repoRelativePath | (private) |
| 45 | fn | vitestArtifactEvidence | (private) |

## extensions/qa-lab/src/evidence-gallery.ts (962 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | UxMatrixProducerFileKey | (private) |
| 40 | type | QaEvidenceArtifact | (private) |
| 42 | class | QaEvidenceGalleryError | pub |
| 52 | fn | evidenceError | (private) |
| 56 | fn | isInside | (private) |
| 61 | fn | sanitizeGalleryText | (private) |
| 82 | fn | displayGalleryPath | (private) |
| 101 | fn | sanitizeGalleryPreview | (private) |
| 111 | fn | sanitizeGalleryStringArray | (private) |
| 125 | fn | realpathIfExists | (private) |
| 129 | fn | resolveContainedFileIfExists | (private) |
| 144 | fn | resolveQaEvidenceFile | (private) |
| 175 | fn | resolveQaEvidenceArtifactFile | pub |
| 207 | fn | resolveQaEvidenceArtifactFileByIndex | pub |
| 241 | fn | resolveQaEvidenceProducerFile | pub |
| 275 | fn | isExplicitRepoRootArtifactPath | (private) |
| 280 | fn | repoRootTokenArtifactPath | (private) |
| 289 | fn | resolveArtifactFileWithinRoots | (private) |
| 323 | fn | collectDeclaredQaEvidenceArtifactFiles | (private) |
| 363 | fn | classifyArtifact | (private) |
| 394 | fn | readPreview | (private) |
| 429 | fn | readJsonIfExists | (private) |
| 447 | fn | artifactHref | (private) |
| 473 | fn | buildProducerContextFile | (private) |
| 500 | fn | buildArtifactView | (private) |
| 567 | fn | readString | (private) |
| 571 | fn | readRecord | (private) |
| 577 | fn | readCountRecord | (private) |
| 589 | fn | readOrderedStringArray | (private) |
| 595 | fn | readStringArray | (private) |
| 599 | fn | readMatrixDimensionIds | (private) |
| 626 | fn | uxMatrixEntryKey | (private) |
| 646 | fn | buildUxMatrixEvidenceEntryIndex | (private) |
| 657 | fn | readMatrixCells | (private) |
| 680 | fn | sanitizeCellString | (private) |
| 685 | fn | readRunnerString | (private) |
| 723 | fn | candidateProducerRoots | (private) |
| 755 | fn | findUxMatrixProducerRoot | (private) |
| 772 | fn | buildProducerContext | (private) |
| 871 | fn | buildQaEvidenceGalleryModel | pub |
| 903 | fn | sanitizeEntryText | (private) |

## extensions/qa-lab/src/evidence-summary.ts (664 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 168 | type | QaEvidenceProfile | (private) |
| 169 | type | QaEvidenceStatus | pub |
| 170 | type | QaEvidenceTiming | pub |
| 171 | type | QaEvidencePackageSource | pub |
| 172 | type | QaEvidenceScorecardJson | pub |
| 173 | type | QaEvidenceSummaryEntry | pub |
| 174 | type | QaEvidenceSummaryJson | pub |
| 176 | type | QaEvidenceStatusInput | (private) |
| 178 | type | QaEvidenceScenarioDefinitionInput | (private) |
| 194 | type | QaEvidenceScenarioResultInput | (private) |
| 205 | type | QaEvidenceRttInput | (private) |
| 210 | type | QaEvidenceTestTargetInput | (private) |
| 220 | type | QaEvidenceTestResultInput | (private) |
| 229 | type | QaEvidenceArtifactInput | (private) |
| 234 | type | QaEvidenceBuildBase | (private) |
| 248 | fn | buildQaEvidenceRefs | (private) |
| 252 | fn | buildRef | (private) |
| 266 | fn | buildQaEvidenceCoverage | (private) |
| 270 | fn | buildCoverage | (private) |
| 284 | fn | buildQaEvidenceArtifacts | (private) |
| 292 | fn | uniqueSortedStrings | (private) |
| 298 | fn | resolveQaEvidenceProfile | pub |
| 325 | fn | resolveQaEvidenceRunner | (private) |
| 329 | fn | resolveQaEvidenceChannelDriver | (private) |
| 337 | fn | resolveQaEvidencePackageSource | (private) |
| 351 | fn | resolveQaEvidenceBuildPackageSource | (private) |
| 355 | fn | buildQaEvidenceProvider | (private) |
| 386 | fn | normalizeQaEvidenceStatus | (private) |
| 390 | fn | failureForResult | (private) |
| 404 | fn | timingForRttResult | (private) |
| 418 | fn | timingForTestResult | (private) |
| 426 | fn | resultForEvidence | (private) |
| 437 | fn | buildQaEvidenceSummary | (private) |
| 464 | fn | validateQaEvidenceSummaryJson | pub |
| 468 | fn | attachQaEvidenceScorecard | pub |
| 483 | fn | buildQaSuiteEvidenceSummary | pub |
| 557 | fn | buildTestRunnerEvidenceSummary | (private) |
| 624 | fn | buildVitestEvidenceSummary | pub |
| 638 | fn | buildPlaywrightEvidenceSummary | pub |
| 652 | fn | buildScriptEvidenceSummary | pub |

## extensions/qa-lab/src/gateway-child.test.ts (2336 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | fn | createParams | (private) |
| 66 | type | AuthProfileRecord | (private) |
| 75 | type | AuthProfileStore | (private) |
| 79 | type | SsrFetchCall | (private) |
| 86 | fn | parseAuthProfileStore | (private) |
| 90 | fn | requireAuthProfile | (private) |
| 101 | fn | requireSsrFetchCall | (private) |
| 109 | fn | expectPathMissing | (private) |

## extensions/qa-lab/src/gateway-child.ts (1760 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 95 | type | QaGatewayChildStateMutationContext | pub |
| 102 | type | QaGatewayChildDirectCommand | (private) |
| 112 | type | QaGatewayChildVerifiedCommand | (private) |
| 116 | type | QaGatewayChildCommand | pub |
| 117 | type | QaGatewayChildListeningContext | pub |
| 126 | fn | scrubQaGatewayChildSecretEnv | (private) |
| 133 | fn | createQaGatewayEmptyTransport | (private) |
| 140 | fn | resolveQaGatewayChildCommand | (private) |
| 165 | fn | runQaGatewayCliCommand | (private) |
| 180 | type | QaChildFailure | (private) |
| 185 | fn | monitorQaChildFailure | (private) |
| 187 | fn | report | (private) |
| 199 | fn | readQaGatewayCliCommand | (private) |
| 234 | fn | getFreePort | (private) |
| 249 | fn | closeWriteStream | (private) |
| 255 | fn | writeSanitizedQaGatewayDebugLog | (private) |
| 265 | fn | assertQaArtifactDirWithinRepo | (private) |
| 269 | fn | clearQaGatewayArtifactDir | (private) |
| 275 | fn | cleanupQaGatewayTempRoots | (private) |
| 285 | fn | preserveQaGatewayDebugArtifacts | (private) |
| 326 | fn | isRetryableGatewayStartupError | (private) |
| 335 | fn | appendQaGatewayTempRoot | (private) |
| 341 | fn | throwQaGatewayStartupError | (private) |
| 360 | fn | resolveQaGatewayChildProviderMode | pub |
| 364 | fn | buildQaRuntimeEnv | pub |
| 433 | fn | buildQaForcedRuntimeEnvPatch | (private) |
| 458 | fn | isRetryableGatewayCallError | (private) |
| 469 | fn | createQaGatewayChildLogCollector | (private) |
| 481 | fn | formatQaGatewayChildFailure | (private) |
| 487 | fn | throwQaGatewayChildFailure | (private) |
| 502 | fn | monitorQaGatewayChildFailure | (private) |
| 522 | fn | formatQaGatewayProcessBoundaryStartupFailure | (private) |
| 530 | fn | fetchLocalGatewayHealth | (private) |
| 553 | fn | fetchLocalGatewayListening | (private) |
| 570 | fn | waitForQaGatewayRestartBoundary | (private) |
| 628 | fn | hasChildExited | (private) |
| 632 | fn | isProcessAlreadyExitedError | (private) |
| 636 | fn | parseLinuxProcessStat | (private) |
| 653 | fn | classifyLinuxProcessGroupStats | (private) |
| 666 | fn | inspectLinuxProcessGroupLiveness | (private) |
| 690 | fn | isQaGatewayChildProcessTreeAlive | (private) |
| 713 | type | QaGatewayTaskkillRunner | (private) |
| 715 | fn | signalQaGatewayWindowsProcessTree | (private) |
| 744 | fn | signalQaGatewayChildProcessTree | (private) |
| 770 | fn | waitForQaGatewayChildExit | (private) |
| 781 | fn | resolveQaGatewayChildStopTimeouts | (private) |
| 791 | fn | stopQaGatewayChildProcessTree | (private) |
| 810 | type | QaGatewayProcessBoundaryController | (private) |
| 814 | fn | stopQaGatewayChildWithBoundary | (private) |
| 841 | fn | isQaModelProviderConfig | (private) |
| 845 | fn | normalizeQaLiveProviderConfig | (private) |
| 858 | fn | readQaLiveProviderConfigOverrides | (private) |
| 899 | fn | waitForGatewayReady | (private) |
| 935 | fn | waitForGatewayListening | (private) |
| 969 | fn | isRetryableRpcStartupError | (private) |
| 982 | fn | resolveQaControlUiRoot | pub |
| 991 | fn | startQaGatewayChild | pub |
| 1070 | fn | buildGatewayConfig | (private) |
| 1096 | fn | buildStagedGatewayConfig | (private) |
| 1126 | fn | logs | (private) |
| 1147 | fn | buildGatewayArgs | (private) |
| 1165 | fn | spawnGatewayProcess | (private) |
| 1450 | fn | throwActiveChildFailure | (private) |
| 1452 | fn | spawnReplacementGatewayChild | (private) |
| 1534 | fn | signalActiveProcess | (private) |

## extensions/qa-lab/src/gateway-process-boundary.ts (850 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | QaGatewayLinuxProcessBoundary | (private) |
| 27 | type | QaGatewayProcessBoundaryConfig | pub |
| 29 | type | QaGatewayProcessCommand | (private) |
| 38 | type | QaGatewayProcessHandoff | (private) |
| 52 | type | QaGatewayProcessSandboxProof | (private) |
| 59 | type | QaGatewayProcessRuntimeProof | (private) |
| 74 | type | QaGatewayVerifiedProcessIdentity | pub |
| 88 | type | QaGatewayProcessBoundaryPreparedSpawn | (private) |
| 99 | type | QaGatewayProcessBoundaryEvidenceLaunch | (private) |
| 119 | fn | isRecord | (private) |
| 123 | fn | sha256 | (private) |
| 127 | fn | compareStrings | (private) |
| 131 | fn | normalizeEnvKeys | (private) |
| 141 | fn | parsePositiveInteger | (private) |
| 148 | fn | parseNonNegativeInteger | (private) |
| 155 | fn | parseNonEmptyString | (private) |
| 162 | fn | parseSha256 | (private) |
| 170 | fn | parseQaGatewayProcessHandoff | (private) |
| 196 | fn | parseQaGatewayProcessSandboxProof | (private) |
| 214 | fn | parseQaGatewayProcessRuntimeProof | (private) |
| 238 | fn | assertContainedPath | (private) |
| 248 | fn | assertRegularFile | (private) |
| 261 | fn | writeAtomicFile | (private) |
| 283 | fn | readJsonFile | (private) |
| 287 | fn | waitForJsonFile | (private) |
| 308 | fn | runBoundaryLauncherCommand | (private) |
| 355 | fn | runBoundaryVerification | (private) |
| 369 | fn | runBoundaryControl | (private) |
| 382 | fn | runBoundaryTermination | (private) |
| 391 | fn | runBoundaryUidTermination | (private) |
| 400 | fn | commandLineBytes | (private) |
| 404 | fn | copyBoundaryEvidenceFile | (private) |
| 418 | fn | createQaGatewayProcessBoundaryController | pub |
| 449 | fn | writeEvidence | (private) |
| 465 | fn | findLaunch | (private) |
| 473 | fn | retainCredentialLease | (private) |
| 485 | fn | clearCredentialLeaseRetention | (private) |
| 489 | fn | terminateUidUntilQuiescent | (private) |
| 500 | fn | terminateWithRetry | (private) |
| 718 | fn | abort | (private) |
| 746 | fn | signal | (private) |
| 757 | fn | markReady | (private) |
| 782 | fn | markExited | (private) |
| 811 | fn | assertQaGatewayCredentialLeaseQuarantine | pub |
| 825 | fn | shouldRetainQaGatewayCredentialLease | pub |

## extensions/qa-lab/src/lab-server.test.ts (1265 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | readMeta | (private) |
| 42 | fn | countValues | (private) |
| 156 | fn | startQaLabServerForTest | (private) |
| 195 | fn | isRetryableLocalFetchError | (private) |
| 207 | fn | fetchWithRetry | (private) |
| 227 | fn | waitForRunnerCatalog | (private) |
| 256 | fn | waitForFileContent | (private) |
| 279 | fn | expectFileMissing | (private) |
| 289 | fn | createQaLabRepoRootFixture | (private) |

## extensions/qa-lab/src/lab-server.ts (893 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | type | QaLabBootstrapDefaults | (private) |
| 76 | fn | writeQaLabServerError | (private) |
| 91 | fn | countQaLabScenarioRun | (private) |
| 102 | fn | withQaLabRunCounts | (private) |
| 109 | fn | parseQaEvidenceArtifactIndexText | (private) |
| 120 | fn | injectKickoffMessage | (private) |
| 139 | fn | createBootstrapDefaults | (private) |
| 170 | fn | stripSensitiveQueryParamsFromText | (private) |
| 186 | fn | stripSensitiveQueryParams | (private) |
| 200 | fn | sanitizeControlUiPublicUrl | (private) |
| 209 | fn | createQaLabConfig | (private) |
| 213 | fn | normalizeQaLabCleanupError | (private) |
| 217 | fn | detectQaEvidenceArtifactContentType | (private) |
| 249 | fn | startQaGatewayLoop | (private) |
| 292 | fn | startQaLabServer | pub |
| 328 | fn | ensureRunnerModelCatalog | (private) |
| 351 | fn | runSelfCheck | (private) |
| 782 | fn | releaseCaptureStore | (private) |
| 885 | fn | serializeSelfCheck | (private) |

## extensions/qa-lab/src/multipass.runtime.ts (698 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | type | ExecResult | (private) |
| 54 | type | ExecFileError | (private) |
| 58 | type | ExecFileOptions | (private) |
| 62 | type | QaMultipassPlan | (private) |
| 99 | type | QaMultipassRunResult | (private) |
| 110 | type | RenderGuestScriptOptions | (private) |
| 114 | fn | createOutputStamp | (private) |
| 118 | fn | createVmSuffix | (private) |
| 122 | fn | execFileAsync | (private) |
| 146 | fn | resolveRealPath | (private) |
| 150 | fn | resolveExistingPath | (private) |
| 162 | fn | isPathInside | (private) |
| 167 | fn | validatePnpmVersion | (private) |
| 174 | fn | resolveMountedOutputPath | (private) |
| 194 | fn | resolvePnpmVersion | (private) |
| 207 | fn | resolveMultipassInstallHint | (private) |
| 220 | fn | createQaMultipassOutputDir | (private) |
| 224 | fn | resolveGuestMountedPath | (private) |
| 228 | fn | appendScenarioArgs | (private) |
| 235 | fn | createQaMultipassPlan | (private) |
| 346 | fn | renderQaMultipassGuestScript | (private) |
| 455 | fn | appendMultipassLog | (private) |
| 459 | fn | runMultipassCommand | (private) |
| 472 | fn | waitForGuestReady | (private) |
| 492 | fn | mountRepo | (private) |
| 516 | fn | mountCodexHome | (private) |
| 540 | fn | transferLiveProviderConfig | (private) |
| 551 | fn | tryCopyGuestBootstrapLog | (private) |
| 566 | fn | runQaMultipass | pub |

## extensions/qa-lab/src/qa-credentials-admin.runtime.ts (532 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | type | QaCredentialAdminListStatus | (private) |
| 69 | type | QaCredentialRecord | pub |
| 71 | class | QaCredentialAdminError | pub |
| 83 | type | AdminConfig | (private) |
| 94 | type | AdminBaseOptions | (private) |
| 102 | type | AddQaCredentialSetOptions | (private) |
| 109 | type | RemoveQaCredentialSetOptions | (private) |
| 113 | type | ListQaCredentialSetsOptions | (private) |
| 120 | type | QaCredentialDoctorCheck | (private) |
| 126 | type | QaCredentialDoctorResult | (private) |
| 131 | fn | parsePositiveIntegerEnv | (private) |
| 144 | fn | normalizeConvexSiteUrl | (private) |
| 156 | fn | normalizeEndpointPrefix | (private) |
| 171 | fn | resolveAdminAuthToken | (private) |
| 182 | fn | addQaCredentialDoctorCheck | (private) |
| 189 | fn | summarizeQaCredentialDoctorStatus | (private) |
| 199 | fn | diagnoseQaCredentialBroker | pub |
| 313 | fn | resolveAdminConfig | (private) |
| 347 | fn | parseJsonResponsePayload | (private) |
| 358 | fn | toBrokerError | (private) |
| 370 | fn | postJson | (private) |
| 432 | fn | normalizeStatus | (private) |
| 447 | fn | normalizeLimit | (private) |
| 460 | fn | withQaCredentialFingerprint | (private) |
| 467 | fn | addQaCredentialSet | pub |
| 490 | fn | removeQaCredentialSet | pub |
| 510 | fn | listQaCredentialSets | pub |

## extensions/qa-lab/src/runtime-parity.test.ts (572 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | seedRuntimeParityTranscript | (private) |
| 67 | fn | captureRuntimeParityWithMockRequests | (private) |
| 111 | fn | makeRuntimeParityCell | (private) |

## extensions/qa-lab/src/runtime-parity.ts (1160 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | RuntimeId | pub |
| 22 | type | RuntimeParityToolCall | pub |
| 29 | type | RuntimeParityUsage | pub |
| 37 | type | RuntimeParityUsagePolicy | pub |
| 41 | type | RuntimeParityCell | pub |
| 54 | type | RuntimeParityDrift | pub |
| 62 | type | RuntimeParityResult | pub |
| 73 | fn | resolveRuntimeParityUsagePolicy | pub |
| 89 | type | RuntimeParityScenarioExecution | pub |
| 95 | fn | runtimeParityCellStatus | pub |
| 104 | fn | isRuntimeParityResultPass | pub |
| 112 | type | QaGatewayLike | (private) |
| 117 | type | QaSuiteScenarioLike | (private) |
| 123 | type | RuntimeParityCaptureParams | (private) |
| 132 | type | RuntimeParitySessionEntry | (private) |
| 142 | type | RuntimeParitySessionCandidate | (private) |
| 147 | type | RuntimeParityTranscriptRecord | (private) |
| 152 | type | RuntimeParityMockRequestSnapshot | (private) |
| 160 | type | RuntimeParityPendingToolCall | (private) |
| 174 | fn | normalizeTextForParity | (private) |
| 178 | fn | readUsageTotals | (private) |
| 208 | fn | addUsage | (private) |
| 220 | fn | extractAssistantText | (private) |
| 255 | fn | normalizeToolCallId | (private) |
| 259 | fn | parseJsonRecord | (private) |
| 271 | fn | extractToolCalls | (private) |
| 321 | fn | extractToolResults | (private) |
| 380 | fn | classifyToolResultError | (private) |
| 408 | fn | finalizeToolCallOrder | (private) |
| 419 | fn | resolveToolCallOrder | (private) |
| 425 | fn | enqueueUnresolved | (private) |
| 432 | fn | markResolved | (private) |
| 454 | fn | matchPendingIndex | (private) |
| 514 | fn | resolveToolCallOrderFromMockRequests | (private) |
| 520 | fn | enqueueUnresolved | (private) |
| 524 | fn | markResolved | (private) |
| 582 | fn | classifyScenarioError | (private) |
| 612 | fn | extractBootStateLines | (private) |
| 623 | fn | buildTranscriptRecords | (private) |
| 651 | fn | isHeartbeatOnlyRuntimeTranscript | (private) |
| 662 | fn | isToolResultLikeMessage | (private) |
| 679 | fn | isHeartbeatRuntimeUserText | (private) |
| 702 | fn | extractFinalAssistantText | (private) |
| 716 | fn | aggregateUsage | (private) |
| 732 | fn | compareToolResultShape | (private) |
| 759 | fn | isHardFailureRuntimeError | (private) |
| 770 | fn | isRuntimeParityCellPassable | pub |
| 777 | fn | hasMissingToolResult | (private) |
| 781 | fn | hasProvenTerminalImageResult | (private) |
| 794 | fn | resolveRuntimeParityToolCalls | (private) |
| 842 | fn | filterMockRequestsForParentPrompt | (private) |
| 864 | fn | summarizeSentinelErrorClass | (private) |
| 874 | fn | classifyRuntimeParityCells | (private) |
| 963 | fn | isRuntimeParityRootSession | (private) |
| 976 | fn | runtimeParitySessionEnv | (private) |
| 980 | fn | readRuntimeParitySessionEntries | (private) |
| 1004 | fn | loadRuntimeParityTranscripts | (private) |
| 1038 | fn | loadRuntimeParityMockToolCalls | (private) |
| 1083 | fn | captureRuntimeParityCell | pub |
| 1135 | fn | runRuntimeParityScenario | pub |

## extensions/qa-lab/src/runtime-tool-fixture.test.ts (1383 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | makeEnv | (private) |
| 37 | fn | writeQaSessionTranscript | (private) |
| 64 | fn | writeLiveRuntimeToolEvidence | (private) |
| 106 | fn | runMockRuntimeToolFixtureWithOutputs | (private) |

## extensions/qa-lab/src/runtime-tool-fixture.ts (865 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | QaRuntimeToolFixtureConfig | (private) |
| 33 | type | QaRuntimeToolFixtureRequest | (private) |
| 43 | type | QaRuntimeToolFixtureTranscriptToolCall | (private) |
| 49 | type | QaRuntimeToolFixtureTranscriptToolResult | (private) |
| 57 | type | QaRuntimeToolFixtureDeps | (private) |
| 79 | fn | readString | (private) |
| 83 | fn | readBoolean | (private) |
| 87 | fn | isKnownBroken | (private) |
| 91 | fn | isKnownHarnessGap | (private) |
| 95 | fn | isQaRuntimeToolFixtureRequest | (private) |
| 99 | fn | readQaRuntimeToolFixtureRequests | (private) |
| 103 | fn | formatPlannedToolArgs | (private) |
| 108 | fn | requestMatchesPrompt | (private) |
| 112 | fn | requestHasToolOutput | (private) |
| 116 | fn | isHardFailureToolOutputText | (private) |
| 124 | fn | requestHasHappyPathFailureToolOutput | (private) |
| 131 | fn | requestHasFailureLikeToolOutput | (private) |
| 141 | fn | readNonEmptyString | (private) |
| 145 | fn | normalizeToolCallId | (private) |
| 149 | fn | stringifyTranscriptToolResult | (private) |
| 166 | fn | extractTranscriptText | (private) |
| 194 | fn | extractTranscriptToolCalls | (private) |
| 248 | fn | readBooleanTrue | (private) |
| 258 | fn | isFailureLikeToolResult | (private) |
| 272 | fn | isStructuredFailureToolResult | (private) |
| 284 | fn | extractTranscriptToolResults | (private) |
| 362 | fn | transcriptToolResultLinksCall | (private) |
| 376 | fn | readTranscriptToolEvidence | (private) |
| 414 | fn | readSessionTranscriptBytes | (private) |
| 441 | fn | readLiveToolEvidence | (private) |
| 452 | fn | requestLinksPlannedToolOutput | (private) |
| 470 | fn | findPlannedRequest | (private) |
| 485 | fn | findExecutedRequest | (private) |
| 520 | fn | formatKnownBrokenDetails | (private) |
| 537 | fn | formatExpectedUnavailableDetails | (private) |
| 544 | fn | formatCodexNativeWorkspaceDetails | (private) |
| 566 | fn | formatReportOnlyMockDetails | (private) |
| 578 | fn | isAsyncReportOnlyMockCoverage | (private) |
| 582 | fn | plannedRequestHasDeniedInputFailure | (private) |
| 589 | fn | plannedRequestHasPrompt | (private) |
| 597 | fn | formatKnownHarnessGapDetails | (private) |
| 606 | fn | runRuntimeToolFixture | pub |

## extensions/qa-lab/src/scenario-catalog.test.ts (1082 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | CatalogScenario | (private) |
| 18 | type | FlowCatalogScenario | (private) |
| 22 | fn | listScenarioMarkdownPaths | (private) |
| 35 | fn | isFlowScenario | (private) |
| 39 | fn | requireFlowScenario | (private) |
| 47 | fn | flowContainsCall | (private) |

## extensions/qa-lab/src/scenario-catalog.ts (575 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 351 | type | QaScenarioExecution | pub |
| 352 | type | QaScenarioFlow | pub |
| 353 | type | QaRuntimeParityTier | pub |
| 354 | type | QaSeedScenario | pub |
| 355 | type | QaSeedScenarioWithSource | pub |
| 362 | type | QaScenarioPack | pub |
| 366 | type | QaBootstrapScenarioCatalog | pub |
| 381 | fn | resolveRepoPath | (private) |
| 391 | fn | hasQaScenarioPack | pub |
| 395 | fn | readTextFile | (private) |
| 403 | fn | formatZodIssuePath | (private) |
| 407 | fn | parseQaYamlWithContext | (private) |
| 418 | fn | parseQaYamlFileWithContext | (private) |
| 426 | fn | readQaScenarioPackYamlSource | pub |
| 434 | fn | readQaScenarioPack | pub |
| 495 | fn | listQaScenarioYamlPaths | pub |
| 510 | fn | listQaScenarioYamlPathsInDirectory | (private) |
| 533 | fn | readQaScenarioOverviewMarkdown | pub |
| 537 | fn | readQaBootstrapScenarioCatalog | pub |
| 546 | fn | readQaScenarioById | pub |
| 554 | fn | readQaScenarioExecutionConfig | pub |
| 558 | fn | listQaScenariosForExecutionProfile | pub |
| 573 | fn | validateQaScenarioExecutionConfig | pub |

## extensions/qa-lab/src/scenario-flow-runner.test.ts (725 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | QaFlowStep | (private) |
| 18 | fn | formatTestTranscript | (private) |
| 25 | fn | runLoadedScenarioFlow | (private) |
| 180 | fn | readWebchatTranscriptWaitFlow | (private) |
| 209 | fn | runWebchatTranscriptWait | (private) |
| 239 | type | PlanningEvidenceScenario | (private) |
| 243 | fn | isPlanningEvidenceScenario | (private) |
| 254 | type | PlanningEvidenceFixture | (private) |
| 261 | fn | readPlanningEvidenceFlow | (private) |
| 295 | fn | createPlanningEvidenceFixture | (private) |
| 349 | fn | runPlanningEvidenceFixture | (private) |

## extensions/qa-lab/src/scorecard-taxonomy.ts (1136 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | isRepoRootRelativeRef | (private) |
| 52 | fn | maturityScoreLabelForScore | (private) |
| 77 | fn | qaMaturityScoreObjectForScore | pub |
| 296 | type | QaNativeCoverageEvidenceKind | (private) |
| 297 | type | QaScorecardEvidenceKind | (private) |
| 298 | type | QaScorecardEvidenceMode | pub |
| 299 | type | QaScorecardChannelDriver | pub |
| 300 | type | QaMaturityScoreKey | (private) |
| 301 | type | QaMaturityScoreObject | pub |
| 302 | type | QaMaturityScoreSurfaceLts | pub |
| 303 | type | QaMaturityScoreCategory | (private) |
| 304 | type | QaMaturityScoreSurface | pub |
| 305 | type | QaMaturityScores | pub |
| 306 | type | QaMaturityTaxonomyLevel | pub |
| 307 | type | QaMaturityTaxonomyCategory | (private) |
| 308 | type | QaMaturityTaxonomySurface | pub |
| 309 | type | QaMaturityTaxonomy | pub |
| 310 | type | QaCoverageEvidenceRole | (private) |
| 312 | type | QaMaturityCoverageScores | pub |
| 316 | type | QaScorecardValidationIssueCode | (private) |
| 325 | type | QaScorecardValidationIssue | (private) |
| 333 | type | QaScorecardInventoryRef | (private) |
| 341 | type | QaScorecardCategoryCoverageReport | pub |
| 356 | type | QaScorecardCategoryFeatureCoverageReport | (private) |
| 361 | type | QaScorecardProfileReport | (private) |
| 368 | type | QaScorecardTaxonomyReport | pub |
| 392 | type | QaMaturityTaxonomyCategoryIndex | (private) |
| 400 | type | MaturityCategoryRef | (private) |
| 408 | type | MaturityFeatureRef | (private) |
| 413 | type | MaturityCoverageRef | (private) |
| 419 | fn | resolveRepoPath | (private) |
| 423 | fn | repoRootFromPath | (private) |
| 427 | fn | formatZodIssuePath | (private) |
| 431 | fn | parseQaMaturityTaxonomy | (private) |
| 442 | fn | parseQaMaturityScores | (private) |
| 453 | fn | readQaMaturityTaxonomySource | pub |
| 457 | fn | readValidatedQaMaturityScoreSources | pub |
| 476 | fn | readQaMaturityTaxonomy | (private) |
| 489 | fn | pathExists | (private) |
| 496 | fn | scenarioCoverageIds | (private) |
| 500 | type | ScenarioInventoryRef | (private) |
| 506 | fn | scenarioInventoryKind | (private) |
| 510 | fn | scenarioInventoryPath | (private) |
| 514 | fn | collectScenarioInventoryByCoverageId | (private) |
| 537 | fn | uniqueSorted | (private) |
| 541 | fn | percent | (private) |
| 545 | fn | activeQaMaturityTaxonomySurfaces | pub |
| 549 | fn | buildQaMaturityTaxonomyCategoryIndex | (private) |
| 570 | fn | qaMaturityTaxonomyLevelMap | pub |
| 574 | fn | qaMaturityFamilyOrder | pub |
| 584 | fn | averageSurfaceScore | (private) |
| 588 | fn | averageCategoryScore | (private) |
| 592 | fn | qaMaturityCoverageCategoryKey | pub |
| 596 | fn | expectedMaturityLtsSupported | (private) |
| 607 | fn | expectedMaturitySurfaceLtsStatus | (private) |
| 614 | fn | validateQaMaturityScoresAgainstTaxonomy | (private) |
| 755 | fn | buildMaturityRefs | (private) |
| 791 | fn | readQaScorecardProfileOptions | pub |
| 805 | fn | pushMissingPrimaryInventoryIssues | (private) |
| 830 | fn | collectInventoryRefsForCoverageId | (private) |
| 876 | fn | buildQaScorecardTaxonomyReport | (private) |
| 1126 | fn | readQaScorecardTaxonomyReport | pub |

## extensions/qa-lab/src/suite-launch.runtime.test.ts (1318 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | makeTempRepo | (private) |
| 37 | fn | writeEvidence | (private) |

## extensions/qa-lab/src/suite-launch.runtime.ts (848 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | QaSuiteRuntimeResult | pub |
| 57 | type | QaUnifiedSuiteResult | (private) |
| 66 | type | QaSuiteExecutionPlan | (private) |
| 81 | type | QaUnifiedPartitionResult | (private) |
| 89 | type | QaUnifiedPartitionTask | (private) |
| 94 | type | QaFlowChannelGroup | (private) |
| 101 | fn | loadQaLabServerRuntime | (private) |
| 106 | fn | loadQaFlowSuiteRuntime | (private) |
| 118 | fn | resolveRequestedScenarios | (private) |
| 132 | fn | resolveQaFlowChannelGroups | (private) |
| 208 | fn | resolveSuiteExecutionPlan | (private) |
| 248 | fn | runQaTestFileSuiteFromRuntime | (private) |
| 277 | fn | rejectFlowOnlySuiteOptionsForUnifiedRun | (private) |
| 289 | fn | suitePartitionOutputDir | (private) |
| 293 | fn | flowSuitePartitionOutputDir | (private) |
| 297 | fn | partitionSharedFlowScenarios | (private) |
| 317 | fn | runWeightedUnifiedPartitionTasks | (private) |
| 332 | fn | finishIfSettled | (private) |
| 343 | fn | launch | (private) |
| 387 | fn | readQaSuiteEvidenceSummary | (private) |
| 391 | fn | resolveQaSuiteResultEvidenceSummary | (private) |
| 416 | fn | mergeQaEvidenceSummaries | (private) |
| 441 | fn | testFileScenarioResultToSuiteScenario | (private) |
| 468 | fn | renderUnifiedQaSuiteReport | (private) |
| 487 | fn | writeUnifiedQaSuiteArtifacts | (private) |
| 538 | fn | runUnifiedQaSuite | (private) |
| 714 | fn | createTestFilePartitionTask | (private) |
| 822 | fn | runQaSuite | pub |
| 841 | fn | runQaFlowSuiteFromRuntime | pub |

## extensions/qa-lab/src/suite-planning.test.ts (955 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | makePlaywrightQaSuiteTestScenario | (private) |
| 37 | fn | makeMatrixFlowQaSuiteTestScenario | (private) |
| 161 | fn | releaseQueuedTasks | (private) |
| 216 | fn | waitForStarted | (private) |
| 843 | fn | selectForDriver | (private) |

## extensions/qa-lab/src/suite-runtime-agent-process.test.ts (1010 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | MockEmitter | (private) |
| 45 | type | MockChildProcess | (private) |
| 52 | fn | createMockEmitter | (private) |
| 56 | fn | createSpawnedProcess | (private) |
| 65 | fn | waitForSpawnCount | (private) |
| 72 | fn | firstSpawnCall | (private) |
| 76 | fn | firstGatewayCall | (private) |

## extensions/qa-lab/src/suite-runtime-agent-process.ts (645 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | QaMemorySearchResult | (private) |
| 32 | type | QaCronJob | (private) |
| 42 | type | QaChatHistoryResponse | (private) |
| 46 | type | QaAgentWaitResult | (private) |
| 60 | fn | stripAnsiCodes | (private) |
| 64 | fn | findBalancedJsonEnd | (private) |
| 103 | fn | parseBalancedJsonPayloadStart | (private) |
| 123 | fn | isJsonRecord | (private) |
| 127 | fn | isStructuredDiagnosticJson | (private) |
| 143 | fn | isMemorySearchJsonPayload | (private) |
| 147 | fn | isMemoryStatusJsonPayload | (private) |
| 154 | fn | resolveQaCliJsonPayloadMatcher | (private) |
| 167 | fn | parseQaCliJsonOutput | (private) |
| 223 | fn | signalQaCliProcessTree | (private) |
| 256 | fn | runQaCli | (private) |
| 316 | fn | startAgentRun | (private) |
| 385 | fn | waitForAgentRun | (private) |
| 411 | fn | isSuccessfulAgentWaitResult | (private) |
| 418 | fn | readLatestAssistantTextFromHistory | (private) |
| 431 | fn | readLatestAgentHistoryReply | (private) |
| 448 | fn | resolveRetryableHistoryDelayMs | (private) |
| 473 | fn | waitForAgentHistoryReply | (private) |
| 511 | fn | listCronJobs | (private) |
| 527 | fn | isManagedDreamingCronJob | (private) |
| 546 | fn | findManagedDreamingCronJob | (private) |
| 550 | fn | readDoctorMemoryStatus | (private) |
| 556 | fn | waitForMemorySearchMatch | (private) |
| 575 | fn | forceMemoryIndex | (private) |
| 605 | fn | runAgentPrompt | (private) |

## extensions/qa-lab/src/suite-runtime-agent-session.test.ts (652 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | fn | qaSessionEnv | (private) |
| 48 | fn | seedQaSession | (private) |
| 66 | fn | appendQaTranscriptMessage | (private) |
| 81 | fn | requireGatewayCall | (private) |

## extensions/qa-lab/src/suite-runtime-gateway.test.ts (554 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | createRestartSettleEnv | (private) |
| 34 | fn | createConfigMutationEnv | (private) |

## extensions/qa-lab/src/suite.test.ts (973 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | makeQaSuiteTestLabHandle | (private) |
| 43 | fn | step | (private) |
| 87 | fn | step | (private) |

## extensions/qa-lab/src/suite.ts (2094 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 96 | type | QaCrablineRuntime | (private) |
| 97 | type | QaCrablineChannelDriverSmokeResult | (private) |
| 100 | fn | resolveQaSuiteControlUiEnabled | (private) |
| 109 | type | QaSuiteScenarioResult | pub |
| 118 | type | QaSuiteEnvironment | (private) |
| 123 | type | QaSuiteStartLabFn | pub |
| 125 | fn | createQaSuiteTransportAdapter | (private) |
| 172 | type | QaSuiteRunParams | pub |
| 207 | fn | shouldLogQaSuiteProgress | (private) |
| 215 | fn | resolveQaSuiteTransportReadyTimeoutMs | (private) |
| 237 | fn | writeQaSuiteProgress | (private) |
| 244 | fn | formatQaSuiteRunStartProgress | (private) |
| 267 | fn | waitForQaLabReady | (private) |
| 297 | fn | waitForQaLabReadyOrStopOwned | (private) |
| 312 | fn | runQaSuiteCleanupSteps | (private) |
| 324 | fn | runQaFlowSuiteCleanupPlan | (private) |
| 358 | fn | throwQaSuiteCleanupErrors | (private) |
| 376 | fn | requireQaSuiteStartLab | (private) |
| 385 | fn | shouldRunQaSuiteWithIsolatedScenarioWorkers | (private) |
| 416 | type | QaSuiteResult | pub |
| 434 | fn | runQaScenarioWithFlakeRetry | (private) |
| 455 | fn | runScenarioDefinition | (private) |
| 475 | fn | isRuntimeParityPass | (private) |
| 479 | fn | formatRuntimeParityCellDetails | (private) |
| 493 | fn | buildRuntimeParityScenarioResult | (private) |
| 529 | fn | createQaSuiteReportNotes | (private) |
| 549 | fn | buildQaIsolatedScenarioWorkerParams | (private) |
| 595 | fn | remapModelRefForForcedRuntime | (private) |
| 610 | fn | buildQaRuntimeEnvPatch | (private) |
| 636 | fn | appendNodeOption | (private) |
| 641 | fn | shouldCaptureGatewayHeapCheckpoints | (private) |
| 645 | fn | buildQaGatewayHeapCheckpointRuntimeEnvPatch | (private) |
| 656 | fn | mergeQaRuntimeEnvPatches | (private) |
| 669 | type | QaSuiteSummaryJsonParams | pub |
| 694 | type | QaSuiteGatewayRssSample | (private) |
| 698 | type | QaGatewayHandle | (private) |
| 699 | type | QaSuiteGatewayHeapSnapshot | (private) |
| 717 | fn | buildQaSuiteSummaryJson | pub |
| 752 | fn | runQaRuntimeParitySuite | (private) |
| 1002 | fn | writeQaSuiteArtifacts | (private) |
| 1181 | fn | buildQaSuiteRuntimeMetrics | (private) |
| 1235 | fn | sanitizeQaHeapCheckpointLabel | (private) |
| 1239 | fn | listGatewayHeapSnapshotFiles | (private) |
| 1255 | fn | waitForStableFileSize | (private) |
| 1269 | fn | captureGatewayHeapSnapshotCheckpoint | (private) |
| 1310 | fn | runQaFlowSuite | pub |
| 1447 | fn | updateScenarioRun | (private) |
| 1458 | fn | writePartialArtifacts | (private) |
| 1836 | fn | sampleGatewayProcessRss | (private) |
| 1850 | fn | captureGatewayHeapCheckpoint | (private) |
| 1884 | fn | runSelectedScenario | (private) |

## extensions/qa-lab/src/test-file-scenario-runner.test.ts (1138 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | isProcessRunning | (private) |
| 27 | fn | readPid | (private) |
| 43 | fn | waitForDead | (private) |
| 54 | fn | makeTestFileScenario | (private) |
| 87 | fn | makeTempRepo | (private) |
| 94 | fn | writeScriptProducerEvidence | (private) |

## extensions/qa-lab/src/test-file-scenario-runner.ts (614 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | QaTestFileScenario | pub |
| 40 | type | QaTestFileExecutionKind | pub |
| 42 | type | QaTestFileScenarioRunParams | (private) |
| 55 | type | QaScenarioCommandRunner | (private) |
| 59 | type | QaScenarioCommandStep | (private) |
| 64 | type | QaTestFileScenarioResult | (private) |
| 74 | type | QaTestFileScenarioRunResult | pub |
| 82 | type | QaTestFileRunnerDefinition | (private) |
| 88 | fn | isQaTestFileScenario | pub |
| 98 | fn | vitestSteps | (private) |
| 107 | fn | playwrightSteps | (private) |
| 133 | fn | replaceScriptArgTokens | (private) |
| 144 | fn | scriptSteps | (private) |
| 179 | fn | formatCommand | (private) |
| 183 | fn | buildScenarioEvidenceTarget | (private) |
| 195 | fn | runScenarioCommandSteps | (private) |
| 254 | fn | runQaTestFileScenario | (private) |
| 295 | fn | statusFromProducerEvidence | (private) |
| 322 | fn | resolveTestFileExecutionKind | (private) |
| 333 | fn | buildTestFileEvidence | (private) |
| 421 | fn | readJsonFileIfExists | (private) |
| 447 | fn | resolveScriptProducerArtifactPath | (private) |
| 459 | fn | normalizeScriptProducerEvidence | (private) |
| 488 | fn | readScriptProducerEvidence | (private) |
| 522 | fn | buildScenarioArtifactPaths | (private) |
| 532 | fn | writeTestFileEvidenceFile | (private) |
| 545 | fn | runQaTestFileScenarios | pub |

## extensions/qa-lab/src/tool-coverage-report.test.ts (679 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | makeScenario | (private) |
| 45 | fn | readToolCoverageConfig | (private) |

## extensions/qa-lab/src/tool-search-gateway.fixture.ts (517 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | Lane | (private) |
| 27 | type | LaneResult | (private) |
| 42 | type | LaneResultSummary | (private) |
| 54 | type | ToolSearchGatewayFixture | (private) |
| 61 | type | ToolSearchGatewayFetchLimits | pub |
| 66 | fn | assert | (private) |
| 72 | fn | readToolSearchGatewayFetchLimits | pub |
| 87 | fn | buildFakeTools | (private) |
| 114 | fn | fetchJson | pub |
| 126 | fn | countToolSearchSessionLogMentions | (private) |
| 136 | fn | writeFakePlugin | (private) |
| 216 | fn | applyLaneConfig | (private) |
| 328 | fn | configureLane | (private) |
| 348 | fn | stageToolSearchGatewayFixture | pub |
| 364 | fn | runToolSearchGatewayLane | pub |
| 453 | fn | assertToolSearchLaneResults | pub |
| 459 | fn | laneDebug | (private) |
