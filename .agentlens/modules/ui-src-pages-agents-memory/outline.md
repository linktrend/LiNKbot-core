# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## ui/src/pages/agents/memory/dreaming.test.ts (1390 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | TestRequest | (private) |
| 22 | type | DreamingConfigCapability | (private) |
| 27 | fn | createState | (private) |
| 40 | fn | createConfig | (private) |
| 53 | fn | createDeferred | (private) |
| 66 | fn | getConfigPatchRawPayload | (private) |

## ui/src/pages/agents/memory/dreaming.ts (1275 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | DreamingPhaseStatusBase | (private) |
| 20 | type | LightDreamingStatus | (private) |
| 25 | type | DeepDreamingStatus | (private) |
| 35 | type | RemDreamingStatus | (private) |
| 41 | type | DreamingEntry | pub |
| 58 | type | DreamingStatus | (private) |
| 88 | type | WikiImportInsightItem | (private) |
| 111 | type | WikiImportInsightCluster | (private) |
| 122 | type | WikiImportInsights | pub |
| 129 | type | WikiMemoryPalaceItem | (private) |
| 145 | type | WikiMemoryPalaceCluster | (private) |
| 156 | type | WikiMemoryPalacePageCounts | (private) |
| 158 | type | WikiMemoryPalace | pub |
| 168 | type | DoctorMemoryStatusPayload | (private) |
| 172 | type | DoctorMemoryDreamDiaryPayload | (private) |
| 178 | type | DoctorMemoryDreamActionPayload | (private) |
| 194 | type | WikiImportInsightsPayload | (private) |
| 201 | type | WikiMemoryPalacePayload | (private) |
| 211 | type | DreamingState | pub |
| 256 | fn | createDreamingState | pub |
| 292 | type | DreamingConfigCapability | (private) |
| 297 | fn | confirmDreamingAction | (private) |
| 304 | fn | isMemoryWikiEnabled | (private) |
| 310 | fn | canCallMemoryWikiMethod | (private) |
| 318 | fn | buildDreamDiaryActionSuccessMessage | (private) |
| 369 | fn | normalizeTrimmedString | (private) |
| 377 | fn | resolveSelectedAgentId | (private) |
| 381 | fn | buildSelectedAgentPayloadForAgentId | (private) |
| 387 | fn | buildSelectedAgentPayload | (private) |
| 393 | fn | normalizeBoolean | (private) |
| 397 | fn | normalizeFiniteInt | (private) |
| 404 | fn | normalizeFiniteScore | (private) |
| 411 | fn | normalizeStorageMode | (private) |
| 419 | fn | normalizeNextRun | (private) |
| 423 | fn | normalizePhaseStatusBase | (private) |
| 434 | fn | resolveDreamingPluginId | (private) |
| 444 | fn | resolveConfiguredDreaming | pub |
| 460 | fn | normalizeDreamingEntry | (private) |
| 488 | fn | normalizeDreamingEntries | (private) |
| 497 | fn | normalizeStringArray | (private) |
| 506 | fn | normalizeWikiImportInsightItem | (private) |
| 563 | fn | normalizeWikiImportInsightCluster | (private) |
| 598 | fn | normalizeWikiImportInsights | (private) |
| 616 | fn | normalizeWikiPageKind | (private) |
| 626 | fn | createEmptyWikiMemoryPalacePageCounts | (private) |
| 636 | fn | normalizeWikiMemoryPalacePageCounts | (private) |
| 650 | fn | sumWikiMemoryPalacePageCounts | (private) |
| 660 | fn | normalizeWikiMemoryPalaceItem | (private) |
| 691 | fn | normalizeWikiMemoryPalaceCluster | (private) |
| 726 | fn | normalizeWikiMemoryPalace | (private) |
| 763 | fn | normalizeDreamingStatus | (private) |
| 841 | fn | loadDreamingStatus | pub |
| 889 | fn | loadDreamDiary | pub |
| 946 | fn | loadWikiImportInsights | pub |
| 1002 | fn | loadWikiMemoryPalace | pub |
| 1058 | fn | runDreamDiaryAction | (private) |
| 1124 | fn | backfillDreamDiary | pub |
| 1128 | fn | resetDreamDiary | pub |
| 1132 | fn | resetGroundedShortTerm | pub |
| 1138 | fn | repairDreamingArtifacts | pub |
| 1144 | fn | copyDreamingArchivePath | pub |
| 1163 | fn | dedupeDreamDiary | pub |
| 1167 | fn | writeDreamingPatch | (private) |
| 1193 | fn | lookupIncludesDreamingProperty | (private) |
| 1205 | fn | lookupDisallowsUnknownProperties | (private) |
| 1211 | fn | ensureDreamingPathSupported | (private) |
| 1236 | fn | updateDreamingEnabled | pub |

## ui/src/pages/agents/memory/memory-panel.ts (503 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | WikiPagePreview | (private) |
| 44 | type | DreamingTaskScope | (private) |
| 50 | fn | formatDreamNextCycle | (private) |
| 54 | fn | resolveDreamingNextCycle | (private) |
| 62 | fn | readWikiPagePreview | (private) |
| 100 | class | AgentMemoryPanel | (private) |

## ui/src/pages/agents/memory/view.test.ts (903 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | DreamingProps | (private) |
| 11 | fn | setDreamSubTab | (private) |
| 15 | fn | setDreamDiarySubTab | (private) |
| 19 | fn | setDreamAdvancedWaitingSort | (private) |
| 23 | fn | buildProps | (private) |
| 215 | fn | renderInto | (private) |
| 221 | fn | expectElement | (private) |
| 230 | fn | compactText | (private) |
| 234 | fn | textItems | (private) |
| 398 | fn | rerender | (private) |
| 462 | fn | rerender | (private) |
| 485 | fn | rerender | (private) |

## ui/src/pages/agents/memory/view.ts (1561 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | DiaryEntry | (private) |
| 24 | type | DiaryEntryNav | (private) |
| 33 | fn | parseDiaryEntries | (private) |
| 75 | fn | parseDiaryTimestamp | (private) |
| 80 | fn | formatDiaryChipLabel | (private) |
| 89 | fn | buildDiaryNavigation | (private) |
| 94 | type | DreamingPhaseInfo | (private) |
| 100 | type | DreamingProps | (private) |
| 187 | type | DreamingViewState | pub |
| 208 | fn | createDreamingViewState | pub |
| 231 | fn | setDiaryPage | (private) |
| 235 | fn | currentDreamPhrase | (private) |
| 267 | fn | renderDreamsCameo | (private) |
| 275 | fn | renderDreaming | pub |
| 328 | fn | flattenDiaryBody | (private) |
| 355 | fn | formatPhaseNextRun | (private) |
| 363 | fn | renderScene | (private) |
| 450 | fn | formatRange | (private) |
| 454 | fn | formatCompactDateTime | (private) |
| 467 | fn | basename | (private) |
| 472 | fn | formatKindLabel | (private) |
| 488 | fn | formatCount | (private) |
| 500 | fn | formatMemoryPalacePageCountLabel | (private) |
| 516 | fn | formatMemoryPalacePageBreakdown | (private) |
| 526 | fn | formatMemoryPalaceClusterSummary | (private) |
| 543 | fn | formatImportBadge | (private) |
| 563 | fn | toggleExpandedCard | (private) |
| 572 | fn | openWikiPreview | (private) |
| 613 | fn | resetWikiPreview | (private) |
| 626 | fn | closeWikiPreview | (private) |
| 631 | fn | renderWikiPreviewOverlay | (private) |
| 685 | fn | renderDiarySubtabExplainer | (private) |
| 697 | fn | parseSortableTimestamp | (private) |
| 705 | fn | compareWaitingEntryByRecency | (private) |
| 717 | fn | compareWaitingEntryBySignals | (private) |
| 727 | fn | sortWaitingEntries | (private) |
| 736 | fn | describeWaitingEntryOrigin | (private) |
| 748 | fn | renderAdvancedEntryList | (private) |
| 803 | fn | renderAdvancedSection | (private) |
| 984 | fn | renderDiaryImportsSection | (private) |
| 1177 | fn | renderMemoryPalaceSection | (private) |
| 1359 | fn | renderDreamDiaryEntries | (private) |
| 1425 | fn | renderDiarySection | (private) |
