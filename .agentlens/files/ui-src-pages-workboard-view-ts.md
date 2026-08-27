# ui/src/pages/workboard/view.ts

[← Back to Module](../modules/ui-src-pages-workboard/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2287
- **Language:** TypeScript
- **Symbols:** 67
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 65 | type | WorkboardProps | (private) | - |
| 134 | fn | formatStatusLabel | (private) | `function formatStatusLabel(status: WorkboardSta...` |
| 138 | fn | formatPriorityLabel | (private) | `function formatPriorityLabel(priority: Workboar...` |
| 142 | fn | formatTime | (private) | `function formatTime(value: number | undefined):...` |
| 156 | fn | formatRefreshTime | (private) | `function formatRefreshTime(value: number): stri...` |
| 163 | fn | formatUpdatedTime | (private) | `function formatUpdatedTime(value: number | unde...` |
| 179 | fn | formatAge | (private) | `function formatAge(value: number | undefined): ...` |
| 187 | fn | truncateBadgeText | (private) | `function truncateBadgeText(value: string, maxLe...` |
| 194 | fn | canMutate | (private) | `function canMutate(props: WorkboardProps): bool...` |
| 198 | fn | canWrite | (private) | `function canWrite(props: WorkboardProps): boole...` |
| 202 | fn | formatEventLabel | (private) | `function formatEventLabel(event: WorkboardEvent...` |
| 258 | fn | renderEvents | (private) | `function renderEvents(card: WorkboardCard) {` |
| 277 | fn | renderCompactBadges | (private) | `function renderCompactBadges(card: WorkboardCar...` |
| 359 | fn | matchesFilter | (private) | `function matchesFilter(` |
| 423 | fn | nextPosition | (private) | `function nextPosition(cards: readonly Workboard...` |
| 428 | fn | isWorkboardSessionChoice | (private) | `function isWorkboardSessionChoice(session: Gate...` |
| 439 | fn | isCardActionTarget | (private) | `function isCardActionTarget(event: Event): bool...` |
| 445 | fn | engineDisplayName | (private) | `function engineDisplayName(engine: WorkboardExe...` |
| 449 | fn | engineBlockedByRuntime | (private) | `function engineBlockedByRuntime(` |
| 472 | fn | renderAgentChip | (private) | `function renderAgentChip(props: WorkboardProps,...` |
| 480 | fn | renderEngineMark | (private) | `function renderEngineMark(engine: WorkboardExec...` |
| 488 | fn | moveCardToStatus | (private) | `function moveCardToStatus(` |
| 513 | fn | renderCardMoveControl | (private) | `function renderCardMoveControl(` |
| 576 | fn | renderCardActionSlot | (private) | `function renderCardActionSlot(content: Template...` |
| 586 | fn | getCardActionState | (private) | `function getCardActionState(props: WorkboardPro...` |
| 611 | fn | renderCardActionButton | (private) | `function renderCardActionButton(params: {` |
| 639 | fn | renderEditCardAction | (private) | `function renderEditCardAction(` |
| 658 | fn | renderArchiveCardAction | (private) | `function renderArchiveCardAction(` |
| 683 | fn | renderOpenSessionCardAction | (private) | `function renderOpenSessionCardAction(` |
| 699 | fn | renderStopCardAction | (private) | `function renderStopCardAction(` |
| 721 | fn | renderDeleteCardAction | (private) | `function renderDeleteCardAction(` |
| 744 | fn | openCardDetails | (private) | `function openCardDetails(state: WorkboardUiStat...` |
| 749 | fn | closeCardDetails | (private) | `function closeCardDetails(state: WorkboardUiSta...` |
| 754 | fn | getVisibleDetailCard | (private) | `function getVisibleDetailCard(state: WorkboardU...` |
| 765 | fn | resetDraft | (private) | `function resetDraft(state: WorkboardUiState) {` |
| 783 | fn | openCreateModal | (private) | `function openCreateModal(state: WorkboardUiStat...` |
| 788 | fn | openEditModal | (private) | `function openEditModal(state: WorkboardUiState,...` |
| 802 | fn | applyTemplate | (private) | `function applyTemplate(state: WorkboardUiState,...` |
| 814 | fn | renderCardModal | (private) | `function renderCardModal(props: WorkboardProps) {` |
| 856 | fn | dismissDraft | (private) | `const dismissDraft = () => {` |
| 1094 | fn | formatLifecycle | (private) | `function formatLifecycle(lifecycle: WorkboardLi...` |
| 1146 | fn | taskDetail | (private) | `function taskDetail(task: WorkboardTaskSummary)...` |
| 1153 | fn | taskMatchesLifecycle | (private) | `function taskMatchesLifecycle(task: WorkboardTa...` |
| 1168 | fn | taskIsActive | (private) | `function taskIsActive(task: WorkboardTaskSummar...` |
| 1172 | fn | cardHasUnresolvedTaskLink | (private) | `function cardHasUnresolvedTaskLink(` |
| 1180 | fn | cardHasActiveOrRunningUnresolvedTask | (private) | `function cardHasActiveOrRunningUnresolvedTask(` |
| 1191 | fn | cardHasUnresolvedStartedRun | (private) | `function cardHasUnresolvedStartedRun(card: Work...` |
| 1197 | fn | cardCanStart | (private) | `function cardCanStart(` |
| 1210 | fn | formatDependencyParent | (private) | `function formatDependencyParent(parent: Workboa...` |
| 1218 | fn | formatDependencyBlockerTitle | (private) | `function formatDependencyBlockerTitle(dependenc...` |
| 1227 | fn | renderDependencyBadges | (private) | `function renderDependencyBadges(dependencies: W...` |
| 1256 | fn | renderDependencyDetailList | (private) | `function renderDependencyDetailList(dependencie...` |
| 1286 | fn | renderLifecycle | (private) | `function renderLifecycle(` |
| 1317 | fn | renderStartExecutionButton | (private) | `function renderStartExecutionButton(` |
| 1374 | fn | renderStartExecutionControls | (private) | `function renderStartExecutionControls(props: Wo...` |
| 1389 | fn | renderDetailRow | (private) | `function renderDetailRow(label: string, value: ...` |
| 1405 | fn | renderDetailList | (private) | `function renderDetailList(` |
| 1427 | fn | renderCardDetailsPanel | (private) | `function renderCardDetailsPanel(props: Workboar...` |
| 1672 | fn | renderDispatchSummary | (private) | `function renderDispatchSummary(state: Workboard...` |
| 1699 | fn | renderHealthStrip | (private) | `function renderHealthStrip(` |
| 1737 | fn | renderRefreshStatus | (private) | `function renderRefreshStatus(state: WorkboardUi...` |
| 1756 | fn | renderWorkboardEmptyState | (private) | `function renderWorkboardEmptyState() {` |
| 1777 | fn | renderCard | (private) | `function renderCard(props: WorkboardProps, card...` |
| 1923 | fn | renderColumn | (private) | `function renderColumn(props: WorkboardProps, st...` |
| 1968 | fn | renderWorkboard | pub | `export function renderWorkboard(props: Workboar...` |
| 2007 | fn | applyNonViewFilters | (private) | `const applyNonViewFilters = (cards: readonly Wo...` |
| 2016 | fn | cardsForPreset | (private) | `const cardsForPreset = (preset: WorkboardUiStat...` |

## Public API

### `renderWorkboard`

```
export function renderWorkboard(props: WorkboardProps) {
```

**Line:** 1968 | **Kind:** fn
