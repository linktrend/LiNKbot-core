# ui/src/pages/cron/view.ts

[← Back to Module](../modules/ui-src-pages-cron/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1896
- **Language:** TypeScript
- **Symbols:** 40
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 45 | type | CronPanelMode | (private) | - |
| 47 | type | CronListTab | pub | - |
| 48 | type | CronDetailTab | pub | - |
| 50 | type | CronProps | (private) | - |
| 129 | fn | buildChannelOptions | (private) | `function buildChannelOptions(props: CronProps):...` |
| 145 | fn | resolveChannelLabel | (private) | `function resolveChannelLabel(props: CronProps, ...` |
| 156 | fn | renderSuggestionList | (private) | `function renderSuggestionList(id: string, optio...` |
| 168 | type | BlockingField | (private) | - |
| 175 | fn | errorIdForField | (private) | `function errorIdForField(key: CronFieldKey) {` |
| 179 | fn | inputIdForField | (private) | `function inputIdForField(key: CronFieldKey) {` |
| 216 | fn | fieldLabelForKey | (private) | `function fieldLabelForKey(` |
| 246 | fn | collectBlockingFields | (private) | `function collectBlockingFields(` |
| 281 | fn | focusFormField | (private) | `function focusFormField(id: string) {` |
| 292 | fn | renderFieldError | (private) | `function renderFieldError(message?: string, id?...` |
| 301 | fn | renderRequiredTitle | (private) | `function renderRequiredTitle(label: string) {` |
| 312 | fn | renderFieldRow | (private) | `function renderFieldRow(params: {` |
| 342 | fn | renderToggleRow | (private) | `function renderToggleRow(params: {` |
| 360 | fn | renderCron | pub | `export function renderCron(props: CronProps) {` |
| 381 | fn | renderListView | (private) | `function renderListView(props: CronProps) {` |
| 428 | fn | renderListTabs | (private) | `function renderListTabs(props: CronProps) {` |
| 442 | fn | renderToolbar | (private) | `function renderToolbar(props: CronProps, hasAdv...` |
| 501 | fn | renderJobsFilterPopover | (private) | `function renderJobsFilterPopover(props: CronPro...` |
| 612 | fn | renderJobsTable | (private) | `function renderJobsTable(props: CronProps, hasA...` |
| 661 | fn | renderJobRow | (private) | `function renderJobRow(job: CronJob, props: Cron...` |
| 721 | fn | renderLastRunCell | (private) | `function renderLastRunCell(job: CronJob) {` |
| 750 | fn | renderJobMenu | (private) | `function renderJobMenu(props: CronProps, job: C...` |
| 787 | fn | renderSuggestions | (private) | `function renderSuggestions(props: CronProps) {` |
| 817 | fn | renderDetailView | (private) | `function renderDetailView(props: CronProps, mod...` |
| 862 | fn | renderDetailHeader | (private) | `function renderDetailHeader(props: CronProps, m...` |
| 904 | fn | renderEnabledSwitch | (private) | `function renderEnabledSwitch(` |
| 928 | fn | renderDetailTabs | (private) | `function renderDetailTabs(props: CronProps) {` |
| 945 | fn | renderEditor | (private) | `function renderEditor(props: CronProps, mode: C...` |
| 1030 | fn | renderMenuItem | (private) | `function renderMenuItem(` |
| 1050 | fn | renderPromptSection | (private) | `function renderPromptSection(` |
| 1163 | fn | renderGeneralSection | (private) | `function renderGeneralSection(props: CronProps) {` |
| 1236 | fn | describeFormSchedule | (private) | `function describeFormSchedule(form: CronFormSta...` |
| 1278 | fn | renderScheduleSection | (private) | `function renderScheduleSection(props: CronProps) {` |
| 1434 | fn | renderDeliverySection | (private) | `function renderDeliverySection(` |
| 1539 | fn | renderAdvanced | (private) | `function renderAdvanced(` |
| 1748 | fn | renderFailureAlertRows | (private) | `function renderFailureAlertRows(props: CronProp...` |

## Public API

### `renderCron`

```
export function renderCron(props: CronProps) {
```

**Line:** 360 | **Kind:** fn
