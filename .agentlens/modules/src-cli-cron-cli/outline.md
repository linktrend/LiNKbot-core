# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## src/cli/cron-cli/register.cron-add.ts (529 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | registerCronStatusCommand | pub |
| 49 | fn | registerCronListCommand | pub |
| 81 | fn | registerCronAddCommand | pub |
| 210 | fn | payload | (private) |

## src/cli/cron-cli/register.cron-edit.test.ts (508 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | createCronProgram | (private) |

## src/cli/cron-cli/shared.test.ts (586 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | createRuntimeLogCapture | (private) |
| 35 | fn | expectLogsToInclude | (private) |
| 43 | fn | createBaseJob | (private) |

## src/cli/cron-cli/shared.ts (562 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | parseCronCommandArgv | pub |
| 46 | fn | parseCronCommandEnv | pub |
| 66 | fn | getCronChannelOptions | pub |
| 74 | fn | toLocalIsoTime | (private) |
| 86 | fn | enrichCronRunEntriesForDisplay | (private) |
| 125 | fn | printCronJson | pub |
| 134 | fn | enrichCronJsonWithStatus | pub |
| 157 | fn | computeStatus | (private) |
| 171 | fn | decorateStatusWithFailures | (private) |
| 181 | fn | formatCronStatusForDisplay | (private) |
| 186 | fn | handleCronCliError | pub |
| 191 | fn | warnIfCronSchedulerDisabled | pub |
| 223 | fn | parsePositiveCronDurationMs | pub |
| 235 | fn | parseCronStaggerMs | pub |
| 252 | fn | parseCronToolsAllow | pub |
| 265 | fn | parseCronFallbacks | pub |
| 287 | fn | parseAt | pub |
| 326 | fn | stringifyCell | (private) |
| 336 | fn | formatCell | (private) |
| 348 | fn | formatIsoMinute | (private) |
| 358 | fn | formatSpan | (private) |
| 371 | fn | formatRelative | (private) |
| 380 | fn | formatSchedule | (private) |
| 405 | fn | coerceCronDeliveryPreviews | pub |
| 427 | fn | printCronList | pub |
| 485 | fn | coloredStatus | (private) |
| 532 | fn | printCronShow | pub |
