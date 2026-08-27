# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 17 large files in this module.

## extensions/memory-wiki/src/bridge.test.ts (739 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | nextCaseRoot | (private) |
| 40 | fn | createBridgeWorkspace | (private) |
| 46 | fn | registerBridgeArtifacts | (private) |
| 575 | fn | createDirectoryCollisionFixture | (private) |

## extensions/memory-wiki/src/chatgpt-import.ts (928 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 63 | type | ChatGptMessage | (private) |
| 68 | type | ChatGptRiskAssessment | (private) |
| 73 | type | ChatGptConversationRecord | (private) |
| 91 | type | ChatGptImportOperation | (private) |
| 93 | type | ChatGptImportAction | (private) |
| 105 | type | ChatGptImportResult | pub |
| 119 | type | ChatGptRollbackResult | pub |
| 128 | fn | asRecord | (private) |
| 135 | fn | normalizeWhitespace | (private) |
| 139 | fn | isMissingConversationPageError | (private) |
| 143 | fn | readExistingConversationPage | (private) |
| 158 | fn | resolveConversationSourcePath | (private) |
| 172 | fn | loadConversations | (private) |
| 206 | fn | isoFromUnix | (private) |
| 217 | fn | cleanMessageText | (private) |
| 242 | fn | extractMessageText | (private) |
| 270 | fn | activeBranchMessages | (private) |
| 299 | fn | inferRisk | (private) |
| 313 | fn | inferLabels | (private) |
| 316 | fn | addAreaTopic | (private) |
| 421 | fn | collectPreferenceSignals | (private) |
| 444 | fn | buildTranscript | (private) |
| 459 | fn | resolveConversationPagePath | (private) |
| 475 | fn | toConversationRecord | (private) |
| 517 | fn | renderConversationPage | (private) |
| 577 | fn | replaceSimpleManagedBlock | (private) |
| 589 | fn | extractSimpleManagedBlock | (private) |
| 600 | fn | extractManagedBlockBody | (private) |
| 612 | fn | preserveExistingPageBlocks | (private) |
| 657 | fn | buildRunId | (private) |
| 662 | fn | normalizeConversationActions | (private) |
| 679 | fn | writeImportRunRecord | (private) |
| 686 | fn | readImportRunRecord | (private) |
| 697 | fn | writeTrackedImportPage | (private) |
| 728 | fn | importChatGptConversations | pub |
| 864 | fn | rollbackChatGptImportRun | pub |

## extensions/memory-wiki/src/cli.test.ts (815 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | resolveLegacyImportRunRecordPath | (private) |
| 58 | fn | createCliVault | (private) |
| 70 | fn | runRegisteredWikiCommand | (private) |
| 82 | fn | createChatGptExport | (private) |
| 123 | fn | createGatewayStatus | (private) |
| 255 | fn | register | (private) |

## extensions/memory-wiki/src/cli.ts (1268 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | type | WikiStatusCommandOptions | (private) |
| 72 | type | WikiDoctorCommandOptions | (private) |
| 76 | type | WikiInitCommandOptions | (private) |
| 80 | type | WikiCompileCommandOptions | (private) |
| 84 | type | WikiLintCommandOptions | (private) |
| 88 | type | WikiIngestCommandOptions | (private) |
| 93 | type | WikiOkfImportCommandOptions | (private) |
| 97 | type | WikiSearchCommandOptions | (private) |
| 105 | type | WikiGetCommandOptions | (private) |
| 113 | type | WikiApplySynthesisCommandOptions | (private) |
| 124 | type | WikiApplyMetadataCommandOptions | (private) |
| 134 | type | WikiBridgeImportCommandOptions | (private) |
| 138 | type | WikiUnsafeLocalImportCommandOptions | (private) |
| 142 | type | WikiChatGptImportCommandOptions | (private) |
| 148 | type | WikiChatGptRollbackCommandOptions | (private) |
| 152 | type | WikiObsidianSearchCommandOptions | (private) |
| 156 | type | WikiObsidianOpenCommandOptions | (private) |
| 160 | type | WikiObsidianCommandCommandOptions | (private) |
| 164 | type | WikiObsidianDailyCommandOptions | (private) |
| 168 | type | WikiCommandOptions | (private) |
| 172 | type | MemoryWikiCliRegistration | (private) |
| 178 | fn | sanitizeGatewayStringForTerminal | (private) |
| 192 | fn | escapeGatewayJsonForTerminal | (private) |
| 199 | fn | writeOutput | (private) |
| 203 | fn | shouldRouteBridgeRuntimeThroughGateway | (private) |
| 209 | fn | isBoundedGatewayString | (private) |
| 216 | fn | isStringArray | (private) |
| 227 | fn | hasNumberFields | (private) |
| 231 | fn | isWarningList | (private) |
| 244 | fn | isMemoryWikiStatus | (private) |
| 281 | fn | isMemoryWikiDoctorReport | (private) |
| 298 | fn | isMemoryWikiImportResult | (private) |
| 316 | fn | validateWikiGatewayResult | (private) |
| 332 | fn | callWikiGateway | (private) |
| 333 | fn | callWikiGateway | (private) |
| 337 | fn | callWikiGateway | (private) |
| 341 | fn | callWikiGateway | (private) |
| 354 | fn | normalizeCliStringList | (private) |
| 362 | fn | collectCliValues | (private) |
| 367 | fn | parseWikiSearchEnumOption | (private) |
| 378 | fn | resolveWikiApplyBody | (private) |
| 388 | type | MemoryWikiMutationResult | (private) |
| 390 | fn | formatMemoryWikiMutationSummary | (private) |
| 397 | fn | formatJsonOrText | (private) |
| 405 | fn | formatGatewayJsonOrText | (private) |
| 415 | fn | runWikiCommandWithSummary | (private) |
| 426 | fn | runSyncedWikiCommandWithSummary | (private) |
| 438 | fn | addWikiSearchConfigOptions | (private) |
| 452 | fn | invalidCliArgument | (private) |
| 461 | fn | parseWikiConfidenceOption | (private) |
| 470 | fn | parseWikiPositiveIntegerOption | (private) |
| 478 | fn | addWikiApplyMutationOptions | (private) |
| 487 | fn | runWikiStatus | (private) |
| 512 | fn | runWikiDoctor | (private) |
| 542 | fn | runWikiInit | (private) |
| 556 | fn | runWikiCompile | (private) |
| 573 | fn | runWikiLint | (private) |
| 590 | fn | runWikiIngest | (private) |
| 611 | fn | runWikiOkfImport | (private) |
| 629 | fn | runWikiSearch | (private) |
| 669 | fn | runWikiGet | (private) |
| 699 | fn | runWikiApplySynthesis | (private) |
| 740 | fn | runWikiApplyMetadata | (private) |
| 780 | fn | runWikiBridgeImport | (private) |
| 787 | fn | render | (private) |
| 806 | fn | runWikiUnsafeLocalImport | (private) |
| 828 | fn | runWikiObsidianStatus | (private) |
| 844 | fn | assertOfficialObsidianCliSupported | (private) |
| 850 | fn | runWikiObsidianSearch | (private) |
| 865 | fn | runWikiObsidianOpenCli | (private) |
| 880 | fn | runWikiObsidianCommandCli | (private) |
| 895 | fn | runWikiObsidianDailyCli | (private) |
| 909 | fn | formatChatGptImportSummary | (private) |
| 917 | fn | formatChatGptRollbackSummary | (private) |
| 924 | fn | runWikiChatGptImport | (private) |
| 944 | fn | runWikiChatGptRollback | (private) |
| 962 | fn | registerWikiCli | pub |
| 974 | fn | requireCommandContext | (private) |

## extensions/memory-wiki/src/compile.test.ts (963 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | nextCaseRoot | (private) |
| 42 | fn | expectPathMissing | (private) |
| 53 | fn | expectDigestPage | (private) |
| 61 | fn | expectCompiledCache | (private) |

## extensions/memory-wiki/src/compile.ts (1445 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | type | DashboardPageDefinition | (private) |
| 362 | type | CompileMemoryWikiResult | pub |
| 371 | type | RefreshMemoryWikiIndexesResult | pub |
| 377 | fn | collectMarkdownFiles | (private) |
| 392 | fn | readPageSummaries | (private) |
| 396 | fn | filePaths | (private) |
| 426 | fn | buildPageCounts | (private) |
| 436 | fn | formatPageLink | (private) |
| 449 | fn | formatFreshnessLabel | (private) |
| 463 | fn | formatListPreview | (private) |
| 471 | fn | formatMaybeDetail | (private) |
| 475 | fn | isPersonLikePage | (private) |
| 487 | fn | formatPersonDirectoryLine | (private) |
| 513 | fn | formatRelationshipTarget | (private) |
| 529 | fn | formatRelationshipLine | (private) |
| 552 | fn | countBy | (private) |
| 560 | fn | formatCountLines | (private) |
| 572 | fn | formatClaimIdentityForPage | (private) |
| 576 | fn | isReviewablePrivacyTier | (private) |
| 581 | fn | formatEvidencePrivacyDetails | (private) |
| 592 | fn | collectPrivacyReviewEntries | (private) |
| 633 | fn | formatClaimIdentity | (private) |
| 637 | fn | isClaimHealthContested | (private) |
| 641 | fn | formatClaimHealthLine | (private) |
| 660 | fn | formatPageContradictionClusterLine | (private) |
| 676 | fn | formatClaimContradictionClusterLine | (private) |
| 693 | fn | normalizeComparableTarget | (private) |
| 704 | fn | uniquePages | (private) |
| 718 | fn | buildPageLookupKeys | (private) |
| 729 | fn | renderWikiPageLinks | (private) |
| 747 | fn | sharedSourceFanout | (private) |
| 767 | fn | buildRelatedBlockBody | (private) |
| 862 | fn | refreshPageRelatedBlocks | (private) |
| 901 | fn | renderSectionList | (private) |
| 923 | fn | writeManagedMarkdownFile | (private) |
| 951 | fn | writeDashboardPage | (private) |
| 1030 | fn | refreshDashboardPages | (private) |
| 1058 | fn | buildRootIndexBody | (private) |
| 1089 | fn | buildDirectoryIndexBody | (private) |
| 1102 | fn | rankFreshnessLevel | (private) |
| 1116 | fn | sortClaims | (private) |
| 1132 | fn | buildCompiledCacheSnapshot | (private) |
| 1229 | fn | compileMemoryWikiVaultUnlocked | (private) |
| 1391 | fn | compileMemoryWikiVault | pub |
| 1399 | fn | hasMissingWikiIndexes | (private) |
| 1416 | fn | refreshMemoryWikiIndexesAfterImport | pub |

## extensions/memory-wiki/src/compiled-cache.integration.test.ts (685 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | createCacheStore | (private) |
| 49 | fn | createPersistentVault | (private) |
| 59 | fn | activateVault | (private) |
| 74 | fn | snapshot | (private) |
| 108 | fn | createDeferred | (private) |
| 116 | fn | publishSnapshot | (private) |
| 154 | fn | preparePrompt | (private) |

## extensions/memory-wiki/src/gateway.test.ts (845 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | ApplyMemoryWikiMutation | (private) |
| 75 | fn | findGatewayHandler | (private) |
| 87 | fn | readGatewayMethodOptions | (private) |
| 94 | fn | readRespondPayload | (private) |
| 100 | fn | readRespondError | (private) |

## extensions/memory-wiki/src/lint.test.ts (749 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | issueCodesForPath | (private) |

## extensions/memory-wiki/src/lint.ts (543 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | MemoryWikiLintIssue | (private) |
| 51 | type | LintMemoryWikiResult | (private) |
| 59 | fn | toExpectedPageType | (private) |
| 63 | fn | isUnmanagedRawSourcePage | (private) |
| 72 | type | WikiLinkTargetIndex | (private) |
| 77 | fn | normalizeLintPathTarget | (private) |
| 81 | fn | normalizeLintAliasTextTarget | (private) |
| 85 | fn | normalizeLintTarget | (private) |
| 96 | fn | normalizeLintAliasTarget | (private) |
| 100 | fn | hasLintTargetQuery | (private) |
| 105 | fn | isLintPathStyleTarget | (private) |
| 116 | fn | addPathTarget | (private) |
| 125 | fn | addAliasTarget | (private) |
| 132 | fn | addSlugAliasTarget | (private) |
| 139 | fn | addTitleTarget | (private) |
| 144 | fn | addPathSuffixTargets | (private) |
| 157 | fn | buildWikiLinkTargetIndex | (private) |
| 172 | fn | hasValidWikiLinkTarget | (private) |
| 192 | fn | collectBrokenLinkIssues | (private) |
| 212 | fn | collectPageIssues | (private) |
| 416 | fn | buildIssuesByCategory | (private) |
| 429 | fn | buildLintReportBody | (private) |
| 477 | fn | writeLintReport | (private) |
| 504 | fn | lintMemoryWikiVault | pub |

## extensions/memory-wiki/src/markdown.test.ts (654 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | scanWikiLinkTargets | (private) |

## extensions/memory-wiki/src/markdown.ts (762 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | WikiPageKind | pub |
| 19 | type | GeneratedSourceBody | (private) |
| 21 | type | ParsedWikiMarkdown | (private) |
| 27 | type | WikiClaimEvidence | pub |
| 39 | type | WikiClaim | pub |
| 48 | type | WikiPersonCard | (private) |
| 64 | type | WikiRelationship | pub |
| 77 | type | WikiPageFrontmatterError | pub |
| 82 | type | WikiPageSummary | pub |
| 118 | type | WikiPageSummaryScanResult | (private) |
| 142 | fn | truncateUtf8CodePointSafe | (private) |
| 156 | fn | capWikiValueWithHash | (private) |
| 168 | fn | slugifyWikiSegment | pub |
| 179 | fn | slugifyWikiPageStem | pub |
| 188 | fn | createWikiPageFilename | pub |
| 197 | fn | parseWikiMarkdown | pub |
| 219 | fn | renderWikiMarkdown | pub |
| 227 | fn | extractTitleFromMarkdown | (private) |
| 232 | fn | normalizeSourceIds | pub |
| 236 | fn | normalizeWikiClaimEvidence | (private) |
| 277 | fn | normalizeWikiClaims | pub |
| 317 | fn | normalizeOptionalNumber | (private) |
| 321 | fn | normalizeWikiPersonCard | (private) |
| 366 | fn | normalizeWikiRelationships | (private) |
| 412 | fn | normalizeMarkdownLinkTarget | (private) |
| 416 | type | MarkdownAstNode | (private) |
| 425 | fn | maskMarkdownCode | (private) |
| 448 | fn | extractWikiLinks | (private) |
| 471 | fn | normalizeMarkdownLines | (private) |
| 479 | fn | hasGeneratedWrapperLines | (private) |
| 505 | fn | hasHumanNotesBlock | (private) |
| 511 | fn | afterSourceContentFence | (private) |
| 529 | fn | findNotesHumanBlock | (private) |
| 542 | fn | preserveHumanNotesBlock | pub |
| 555 | fn | detectGeneratedSourceBody | (private) |
| 603 | fn | detectUnmanagedRawSourceBody | (private) |
| 612 | fn | hasWikiSourceFrontmatter | (private) |
| 620 | fn | isUnmanagedRawSourceSummary | pub |
| 626 | fn | formatWikiLink | pub |
| 642 | fn | renderMarkdownFence | pub |
| 651 | fn | inferWikiPageKind | (private) |
| 671 | fn | scanWikiPageSummary | pub |
| 754 | fn | toWikiPageSummary | pub |

## extensions/memory-wiki/src/okf.test.ts (609 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | getOnlyPagePath | (private) |
| 21 | fn | writeOkfBundle | (private) |

## extensions/memory-wiki/src/okf.ts (719 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | OkfConceptDocument | (private) |
| 50 | type | OkfImportedPage | (private) |
| 59 | type | ImportMemoryWikiOkfWarning | (private) |
| 65 | type | ImportMemoryWikiOkfResult | (private) |
| 79 | fn | toPosixPath | (private) |
| 83 | fn | trimMarkdownExtension | (private) |
| 87 | type | OkfBundleMetadata | (private) |
| 92 | fn | createOkfBundleKey | (private) |
| 111 | fn | createOkfPageStem | (private) |
| 117 | fn | createOkfPageIdentity | (private) |
| 129 | fn | collectOkfMarkdownFiles | (private) |
| 133 | fn | walk | (private) |
| 163 | fn | parseOkfMarkdown | (private) |
| 187 | fn | readOkfTextFile | (private) |
| 222 | fn | deriveOkfTitle | (private) |
| 230 | fn | normalizeOkfConcept | (private) |
| 274 | fn | splitMarkdownLinkDestination | (private) |
| 295 | fn | resolveOkfMarkdownTarget | (private) |
| 317 | fn | safeDecodeOkfLinkPath | (private) |
| 328 | fn | getMarkdownDestinationSuffix | (private) |
| 340 | fn | rewriteOkfMarkdownLinks | (private) |
| 347 | fn | rewriteLinks | (private) |
| 373 | fn | rewriteMarkdownLineOutsideInlineCode | (private) |
| 398 | fn | rewriteMarkdownOutsideCode | (private) |
| 432 | fn | normalizeOkfRenderedPageForComparison | (private) |
| 446 | fn | writeOkfConceptPage | (private) |
| 479 | fn | removeStaleOkfConceptPages | (private) |
| 512 | fn | readRootOkfMetadata | (private) |
| 539 | fn | formatOkfImportSummary | (private) |
| 545 | fn | importMemoryWikiOkfBundle | pub |

## extensions/memory-wiki/src/query.test.ts (1833 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | collectWikiResultPaths | (private) |
| 60 | fn | expectFields | (private) |
| 90 | fn | createQueryVault | (private) |
| 102 | fn | createAppConfig | (private) |
| 110 | fn | createSessionVisibilityAppConfig | (private) |
| 122 | fn | mockSessionTranscriptStore | (private) |
| 140 | fn | createMemoryManager | (private) |

## extensions/memory-wiki/src/query.ts (1593 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 93 | fn | normalizePositiveInteger | (private) |
| 107 | type | WikiSearchMode | pub |
| 109 | type | QueryDigestPage | (private) |
| 110 | type | QueryDigestClaim | (private) |
| 112 | type | QueryDigestBundle | (private) |
| 117 | type | WikiSearchResult | (private) |
| 146 | type | WikiGetResult | (private) |
| 164 | type | QueryableWikiPage | pub |
| 168 | type | QuerySearchOverrides | (private) |
| 173 | fn | sortWikiSearchResults | (private) |
| 182 | fn | mergeWikiSearchCorpusResults | (private) |
| 210 | fn | listWikiMarkdownFiles | (private) |
| 211 | fn | files | (private) |
| 232 | fn | readQueryableWikiPages | pub |
| 237 | fn | readQueryableWikiPagesByPaths | (private) |
| 253 | fn | readQueryDigestBundle | (private) |
| 260 | fn | buildSnippet | (private) |
| 280 | fn | buildPageSearchText | (private) |
| 334 | fn | stripGeneratedRelatedBlock | (private) |
| 338 | fn | buildSnippetSearchText | (private) |
| 342 | fn | buildQueryTokens | (private) |
| 353 | fn | buildRouteQuestionTokens | (private) |
| 359 | fn | lineMatchesQuery | (private) |
| 366 | fn | buildDigestPageSearchText | (private) |
| 410 | fn | isClaimTextOrIdMatch | (private) |
| 422 | fn | scoreClaimMatch | (private) |
| 468 | fn | scoreDigestClaimMatch | (private) |
| 480 | fn | scoreWikiMetadataMatch | (private) |
| 512 | fn | hasQueryMatch | (private) |
| 521 | fn | hasAnyQueryMatch | (private) |
| 529 | fn | buildPageRouteQuestionFields | (private) |
| 546 | fn | buildDigestRouteQuestionFields | (private) |
| 563 | fn | hasRouteQuestionMatch | (private) |
| 567 | fn | isPersonLikeSummary | (private) |
| 581 | fn | scorePageSearchModeBoost | (private) |
| 651 | fn | scoreDigestSearchModeBoost | (private) |
| 717 | fn | buildDigestCandidatePaths | (private) |
| 788 | fn | isClaimMatch | (private) |
| 796 | fn | rankClaimMatch | (private) |
| 814 | fn | getMatchingClaims | (private) |
| 825 | fn | buildPageSnippet | (private) |
| 834 | fn | scorePage | (private) |
| 899 | fn | normalizeLookupKey | (private) |
| 904 | fn | buildLookupCandidates | (private) |
| 910 | fn | shouldEnforceSessionVisibility | (private) |
| 922 | fn | shouldSearchSharedMemoryCorpus | (private) |
| 926 | fn | shouldUseSharedMemory | (private) |
| 930 | fn | assertSessionVisibilityAppConfig | (private) |
| 953 | fn | isSessionMemoryPath | (private) |
| 961 | fn | shouldSearchWiki | (private) |
| 965 | fn | shouldSearchSharedMemory | (private) |
| 972 | fn | resolveActiveMemoryAgentId | (private) |
| 992 | fn | resolveActiveMemoryManager | (private) |
| 1015 | fn | buildMemoryManagerContractError | (private) |
| 1022 | fn | buildMemorySearchTitle | (private) |
| 1027 | fn | applySearchOverrides | (private) |
| 1043 | fn | buildWikiProvenanceLabel | (private) |
| 1069 | fn | buildWikiResultMetadata | (private) |
| 1115 | fn | buildClaimResultMetadata | (private) |
| 1128 | fn | toWikiSearchResult | (private) |
| 1148 | fn | toMemoryWikiSearchResult | (private) |
| 1167 | fn | filterMemoryWikiSearchHitsBySessionVisibility | (private) |
| 1190 | type | SessionMemoryPathVisibilityChecker | (private) |
| 1192 | fn | filterSessionKeysByScopedAgent | (private) |
| 1213 | fn | createSessionMemoryPathVisibilityChecker | (private) |
| 1295 | fn | filterMemoryWikiSearchHitsWithSessionVisibility | (private) |
| 1313 | fn | canReadSessionMemoryPath | (private) |
| 1334 | fn | searchWikiCorpus | (private) |
| 1378 | fn | resolveDigestClaimLookup | (private) |
| 1385 | fn | resolveQueryableWikiPageByLookup | pub |
| 1401 | fn | searchMemoryWiki | pub |
| 1471 | fn | getMemoryWikiPage | pub |

## extensions/memory-wiki/src/wiki-notes-read-retry.test.ts (541 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | fn | buildSourcePage | (private) |
| 79 | fn | createChatGptImportFixture | (private) |
