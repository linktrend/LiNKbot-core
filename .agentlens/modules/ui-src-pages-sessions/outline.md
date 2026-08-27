# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## ui/src/pages/sessions/sessions-page.test.ts (894 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | TestSessionsPage | (private) |
| 60 | type | MutableGateway | (private) |
| 66 | type | TestSessionMenu | (private) |
| 71 | fn | deferred | (private) |
| 81 | fn | createGateway | (private) |
| 119 | fn | createSessions | (private) |
| 120 | fn | subscribe | (private) |
| 142 | fn | createContext | (private) |
| 146 | fn | subscribe | (private) |
| 171 | fn | createPage | (private) |
| 180 | fn | createRenderedPage | (private) |

## ui/src/pages/sessions/sessions-page.ts (1428 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | SessionsRouteData | pub |
| 63 | type | SessionsPageRequestScope | (private) |
| 72 | type | SessionsPageMutationResult | (private) |
| 74 | class | SessionsPage | (private) |
| 178 | fn | sync | (private) |

## ui/src/pages/sessions/view.test.ts (1550 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | buildResult | (private) |
| 21 | fn | buildMultiResult | (private) |
| 31 | fn | buildProps | (private) |
| 88 | fn | readSessionDetailStats | (private) |
| 97 | fn | sessionTableHeaders | (private) |
| 328 | fn | dropWithPayload | (private) |
| 1378 | fn | readTile | (private) |

## ui/src/pages/sessions/view.ts (1871 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | TranscriptSearchState | pub |
| 66 | type | SessionsProps | pub |
| 152 | fn | getAgentIdentity | (private) |
| 159 | fn | resolveThinkLevelOptions | (private) |
| 189 | fn | withCurrentOption | (private) |
| 199 | fn | withCurrentLabeledOption | (private) |
| 212 | fn | buildVerboseLevelOptions | (private) |
| 224 | fn | buildFastLevelOptions | (private) |
| 231 | fn | formatSessionRunStatus | (private) |
| 248 | fn | resolveSessionStatusBadge | (private) |
| 276 | fn | renderSessionStatusBadge | (private) |
| 296 | fn | renderSessionAvatar | (private) |
| 308 | fn | hasKnownTokenTotal | (private) |
| 312 | fn | renderTokensCell | (private) |
| 356 | fn | renderSessionsOverview | (private) |
| 424 | fn | transcriptSearchSessionLabel | (private) |
| 433 | fn | renderTranscriptSearch | (private) |
| 580 | fn | renderSkeletonRows | (private) |
| 600 | fn | resolveThinkLevelPatchValue | (private) |
| 607 | fn | filterRows | (private) |
| 657 | fn | sortRows | (private) |
| 693 | fn | paginateRows | (private) |
| 698 | fn | hasPositiveNumberFilter | (private) |
| 702 | fn | hasActiveFilters | (private) |
| 713 | fn | formatCheckpointReason | (private) |
| 728 | fn | formatCheckpointCount | (private) |
| 734 | fn | formatCheckpointDelta | (private) |
| 752 | fn | formatRuntimeMs | (private) |
| 760 | fn | renderSessionGoalStatus | (private) |
| 786 | fn | sessionDetailItems | (private) |
| 799 | fn | add | (private) |
| 845 | fn | sessionsTableColumnCount | (private) |
| 849 | fn | groupModeLabel | (private) |
| 866 | fn | sessionGroupLabel | (private) |
| 897 | fn | setDropTargetActive | (private) |
| 904 | fn | categoryDropHandlers | (private) |
| 908 | fn | carriesSessionKey | (private) |
| 936 | fn | renderGroupHeaderRow | (private) |
| 961 | fn | renderCategoryCell | (private) |
| 994 | fn | isRowControlTarget | (private) |
| 1001 | fn | renderFilterToggle | (private) |
| 1034 | fn | renderOverrideSelect | (private) |
| 1060 | fn | renderSessions | pub |
| 1082 | fn | sortHeader | (private) |
| 1161 | type | SessionsTableContext | (private) |
| 1176 | fn | renderSessionsTable | (private) |
| 1456 | fn | renderRows | (private) |
| 1667 | fn | renderSessionDetailsRow | (private) |
