# ui/src/pages/sessions/view.ts

[← Back to Module](../modules/ui-src-pages-sessions/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1871
- **Language:** TypeScript
- **Symbols:** 48
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 55 | type | TranscriptSearchState | pub | - |
| 66 | type | SessionsProps | pub | - |
| 152 | fn | getAgentIdentity | (private) | `function getAgentIdentity(` |
| 159 | fn | resolveThinkLevelOptions | (private) | `function resolveThinkLevelOptions(` |
| 189 | fn | withCurrentOption | (private) | `function withCurrentOption(options: readonly st...` |
| 199 | fn | withCurrentLabeledOption | (private) | `function withCurrentLabeledOption(` |
| 212 | fn | buildVerboseLevelOptions | (private) | `function buildVerboseLevelOptions(): Array<{ va...` |
| 224 | fn | buildFastLevelOptions | (private) | `function buildFastLevelOptions(): Array<{ value...` |
| 231 | fn | formatSessionRunStatus | (private) | `function formatSessionRunStatus(status: Session...` |
| 248 | fn | resolveSessionStatusBadge | (private) | `function resolveSessionStatusBadge(row: Gateway...` |
| 276 | fn | renderSessionStatusBadge | (private) | `function renderSessionStatusBadge(row: GatewayS...` |
| 296 | fn | renderSessionAvatar | (private) | `function renderSessionAvatar(row: GatewaySessio...` |
| 308 | fn | hasKnownTokenTotal | (private) | `function hasKnownTokenTotal(row: GatewaySession...` |
| 312 | fn | renderTokensCell | (private) | `function renderTokensCell(row: GatewaySessionRo...` |
| 356 | fn | renderSessionsOverview | (private) | `function renderSessionsOverview(rows: GatewaySe...` |
| 424 | fn | transcriptSearchSessionLabel | (private) | `function transcriptSearchSessionLabel(hit: Sess...` |
| 433 | fn | renderTranscriptSearch | (private) | `function renderTranscriptSearch(props: Sessions...` |
| 580 | fn | renderSkeletonRows | (private) | `function renderSkeletonRows(columnCount: number) {` |
| 600 | fn | resolveThinkLevelPatchValue | (private) | `function resolveThinkLevelPatchValue(value: str...` |
| 607 | fn | filterRows | (private) | `function filterRows(` |
| 657 | fn | sortRows | (private) | `function sortRows(` |
| 693 | fn | paginateRows | (private) | `function paginateRows<T>(rows: T[], page: numbe...` |
| 698 | fn | hasPositiveNumberFilter | (private) | `function hasPositiveNumberFilter(value: string)...` |
| 702 | fn | hasActiveFilters | (private) | `function hasActiveFilters(props: SessionsProps)...` |
| 713 | fn | formatCheckpointReason | (private) | `function formatCheckpointReason(reason: Session...` |
| 728 | fn | formatCheckpointCount | (private) | `function formatCheckpointCount(count: number): ...` |
| 734 | fn | formatCheckpointDelta | (private) | `function formatCheckpointDelta(checkpoint: Sess...` |
| 752 | fn | formatRuntimeMs | (private) | `function formatRuntimeMs(runtimeMs: number | un...` |
| 760 | fn | renderSessionGoalStatus | (private) | `function renderSessionGoalStatus(goal: GatewayS...` |
| 786 | fn | sessionDetailItems | (private) | `function sessionDetailItems(params: {` |
| 799 | fn | add | (private) | `const add = (label: string, value: string | nul...` |
| 845 | fn | sessionsTableColumnCount | (private) | `function sessionsTableColumnCount(props: Sessio...` |
| 849 | fn | groupModeLabel | (private) | `function groupModeLabel(mode: SessionsGroupBy):...` |
| 866 | fn | sessionGroupLabel | (private) | `function sessionGroupLabel(id: string, props: S...` |
| 897 | fn | setDropTargetActive | (private) | `function setDropTargetActive(event: DragEvent, ...` |
| 904 | fn | categoryDropHandlers | (private) | `function categoryDropHandlers(props: SessionsPr...` |
| 908 | fn | carriesSessionKey | (private) | `const carriesSessionKey = (event: DragEvent) =>` |
| 936 | fn | renderGroupHeaderRow | (private) | `function renderGroupHeaderRow(group: SessionRow...` |
| 961 | fn | renderCategoryCell | (private) | `function renderCategoryCell(row: GatewaySession...` |
| 994 | fn | isRowControlTarget | (private) | `function isRowControlTarget(target: EventTarget...` |
| 1001 | fn | renderFilterToggle | (private) | `function renderFilterToggle(params: {` |
| 1034 | fn | renderOverrideSelect | (private) | `function renderOverrideSelect(params: {` |
| 1060 | fn | renderSessions | pub | `export function renderSessions(props: SessionsP...` |
| 1082 | fn | sortHeader | (private) | `const sortHeader = (` |
| 1161 | type | SessionsTableContext | (private) | - |
| 1176 | fn | renderSessionsTable | (private) | `function renderSessionsTable(props: SessionsPro...` |
| 1456 | fn | renderRows | (private) | `function renderRows(row: GatewaySessionRow, pro...` |
| 1667 | fn | renderSessionDetailsRow | (private) | `function renderSessionDetailsRow(params: {` |

## Public API

### `renderSessions`

```
export function renderSessions(props: SessionsProps) {
```

**Line:** 1060 | **Kind:** fn
