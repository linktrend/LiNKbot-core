# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## ui/src/pages/workboard/view.test.ts (3499 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | WorkboardRenderProps | (private) |
| 11 | fn | nextFrame | (private) |
| 17 | fn | renderInto | (private) |
| 21 | fn | buttonByLabel | (private) |
| 29 | fn | buttonByText | (private) |
| 37 | fn | dispatchKey | (private) |
| 48 | fn | changeWorkboardSelect | (private) |
| 752 | fn | renderBoard | (private) |

## ui/src/pages/workboard/view.ts (2287 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | type | WorkboardProps | (private) |
| 134 | fn | formatStatusLabel | (private) |
| 138 | fn | formatPriorityLabel | (private) |
| 142 | fn | formatTime | (private) |
| 156 | fn | formatRefreshTime | (private) |
| 163 | fn | formatUpdatedTime | (private) |
| 179 | fn | formatAge | (private) |
| 187 | fn | truncateBadgeText | (private) |
| 194 | fn | canMutate | (private) |
| 198 | fn | canWrite | (private) |
| 202 | fn | formatEventLabel | (private) |
| 258 | fn | renderEvents | (private) |
| 277 | fn | renderCompactBadges | (private) |
| 359 | fn | matchesFilter | (private) |
| 423 | fn | nextPosition | (private) |
| 428 | fn | isWorkboardSessionChoice | (private) |
| 439 | fn | isCardActionTarget | (private) |
| 445 | fn | engineDisplayName | (private) |
| 449 | fn | engineBlockedByRuntime | (private) |
| 472 | fn | renderAgentChip | (private) |
| 480 | fn | renderEngineMark | (private) |
| 488 | fn | moveCardToStatus | (private) |
| 513 | fn | renderCardMoveControl | (private) |
| 576 | fn | renderCardActionSlot | (private) |
| 586 | fn | getCardActionState | (private) |
| 611 | fn | renderCardActionButton | (private) |
| 639 | fn | renderEditCardAction | (private) |
| 658 | fn | renderArchiveCardAction | (private) |
| 683 | fn | renderOpenSessionCardAction | (private) |
| 699 | fn | renderStopCardAction | (private) |
| 721 | fn | renderDeleteCardAction | (private) |
| 744 | fn | openCardDetails | (private) |
| 749 | fn | closeCardDetails | (private) |
| 754 | fn | getVisibleDetailCard | (private) |
| 765 | fn | resetDraft | (private) |
| 783 | fn | openCreateModal | (private) |
| 788 | fn | openEditModal | (private) |
| 802 | fn | applyTemplate | (private) |
| 814 | fn | renderCardModal | (private) |
| 856 | fn | dismissDraft | (private) |
| 1094 | fn | formatLifecycle | (private) |
| 1146 | fn | taskDetail | (private) |
| 1153 | fn | taskMatchesLifecycle | (private) |
| 1168 | fn | taskIsActive | (private) |
| 1172 | fn | cardHasUnresolvedTaskLink | (private) |
| 1180 | fn | cardHasActiveOrRunningUnresolvedTask | (private) |
| 1191 | fn | cardHasUnresolvedStartedRun | (private) |
| 1197 | fn | cardCanStart | (private) |
| 1210 | fn | formatDependencyParent | (private) |
| 1218 | fn | formatDependencyBlockerTitle | (private) |
| 1227 | fn | renderDependencyBadges | (private) |
| 1256 | fn | renderDependencyDetailList | (private) |
| 1286 | fn | renderLifecycle | (private) |
| 1317 | fn | renderStartExecutionButton | (private) |
| 1374 | fn | renderStartExecutionControls | (private) |
| 1389 | fn | renderDetailRow | (private) |
| 1405 | fn | renderDetailList | (private) |
| 1427 | fn | renderCardDetailsPanel | (private) |
| 1672 | fn | renderDispatchSummary | (private) |
| 1699 | fn | renderHealthStrip | (private) |
| 1737 | fn | renderRefreshStatus | (private) |
| 1756 | fn | renderWorkboardEmptyState | (private) |
| 1777 | fn | renderCard | (private) |
| 1923 | fn | renderColumn | (private) |
| 1968 | fn | renderWorkboard | pub |
| 2007 | fn | applyNonViewFilters | (private) |
| 2016 | fn | cardsForPreset | (private) |

## ui/src/pages/workboard/workboard.e2e.test.ts (828 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | RecordedPage | (private) |
| 54 | type | ProofArtifacts | (private) |
| 59 | fn | requireRecord | (private) |
| 66 | fn | requestParams | (private) |
| 70 | fn | escapeRegExp | (private) |
| 74 | fn | workboardField | (private) |
| 80 | fn | chooseWorkboardSelectOption | (private) |
| 90 | fn | chooseWorkboardSelectFieldOption | (private) |
| 108 | fn | waitForRequests | (private) |
| 126 | fn | waitForNextRequest | (private) |
| 139 | fn | workboardConfigSnapshot | (private) |
| 157 | fn | sessionsListResponse | (private) |
| 171 | fn | sessionRow | (private) |
| 187 | fn | readOnlyConnectResponse | (private) |
| 209 | fn | card | (private) |
| 224 | fn | cardsListResponse | (private) |
| 237 | fn | statusColumn | (private) |
| 248 | fn | cardInColumn | (private) |
| 252 | fn | newRecordedPage | (private) |
| 280 | fn | captureScreenshot | (private) |
| 290 | fn | closeRecordedPage | (private) |
| 719 | fn | overflowTitle | (private) |
