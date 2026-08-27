# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## ui/src/lib/cron/index.test.ts (2388 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | createState | (private) |
| 73 | fn | findRequestCall | (private) |
| 84 | fn | requireRecord | (private) |
| 91 | fn | expectRecordFields | (private) |
| 97 | fn | expectNestedRecordFields | (private) |
| 105 | fn | requestPayload | (private) |
| 109 | fn | requestPatch | (private) |
| 113 | type | EmptyCronListResponse | (private) |
| 2186 | fn | everyJob | (private) |
| 2202 | fn | captureUpdateState | (private) |

## ui/src/lib/cron/index.ts (1329 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | CronFormState | pub |
| 76 | fn | isRecord | (private) |
| 80 | fn | isCronPayload | (private) |
| 96 | fn | getCronJobPayload | pub |
| 101 | fn | hasCronJobPayload | (private) |
| 145 | type | CronFieldKey | pub |
| 159 | type | CronFieldErrors | pub |
| 161 | type | CronJobsScheduleKindFilter | pub |
| 162 | type | CronJobsLastStatusFilter | pub |
| 163 | type | CronRunsLoadStatus | (private) |
| 165 | type | CronState | pub |
| 213 | type | CronModelSuggestionsState | pub |
| 219 | fn | createInitialCronState | pub |
| 267 | fn | supportsAnnounceDelivery | (private) |
| 273 | fn | normalizeCronFormState | pub |
| 286 | fn | validateCronForm | pub |
| 356 | fn | hasCronFormErrors | pub |
| 360 | fn | loadCronStatus | pub |
| 377 | fn | loadCronModelSuggestions | pub |
| 403 | fn | addModelId | (private) |
| 413 | fn | addModelConfigIds | (private) |
| 439 | fn | resolveConfiguredCronModelSuggestions | pub |
| 472 | fn | withCronBusy | (private) |
| 491 | fn | normalizeCronPageMeta | (private) |
| 519 | fn | drainPendingCronJobsReload | (private) |
| 529 | fn | loadCronJobsPage | pub |
| 602 | fn | updateCronJobsFilter | pub |
| 627 | fn | getVisibleCronJobs | pub |
| 651 | fn | resolveCronJobScheduleKind | (private) |
| 664 | fn | clearCronEditState | (private) |
| 668 | fn | clearCronRunsPage | (private) |
| 675 | fn | resetCronFormToDefaults | (private) |
| 682 | fn | formatDateTimeLocal | (private) |
| 700 | fn | parseEverySchedule | (private) |
| 713 | fn | everyMsToSecondsString | (private) |
| 724 | fn | parseStaggerSchedule | (private) |
| 747 | fn | jobToForm | (private) |
| 845 | fn | buildCronSchedule | (private) |
| 879 | fn | buildCronPayload | (private) |
| 917 | fn | normalizePersistedDeliveryChannel | (private) |
| 931 | fn | buildFailureAlert | (private) |
| 968 | type | CronSaveResult | (private) |
| 971 | fn | extractSavedCronJobId | (private) |
| 983 | fn | addCronJob | pub |
| 1103 | fn | reloadCronJobsSnapshot | (private) |
| 1109 | fn | toggleCronJob | pub |
| 1125 | fn | cronRunNotStartedMessage | (private) |
| 1144 | fn | runCronJob | pub |
| 1160 | fn | removeCronJob | pub |
| 1174 | fn | loadCronRuns | pub |
| 1244 | fn | loadMoreCronRuns | pub |
| 1251 | fn | updateCronRunsFilter | pub |
| 1284 | fn | startCronEdit | pub |
| 1291 | fn | buildCloneName | (private) |
| 1308 | fn | startCronClone | pub |
| 1325 | fn | cancelCronEdit | pub |
