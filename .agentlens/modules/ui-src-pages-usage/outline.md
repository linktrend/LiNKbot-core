# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 8 large files in this module.

## ui/src/pages/usage/metrics.test.ts (518 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | makeSessionWithQuarterHourly | (private) |
| 62 | fn | peakErrorSummaries | (private) |

## ui/src/pages/usage/metrics.ts (869 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | UsageCostWindowSummary | (private) |
| 24 | fn | charsToTokens | (private) |
| 28 | fn | formatTokens | (private) |
| 32 | fn | formatHourLabel | (private) |
| 38 | fn | forEachSessionHourSlice | (private) |
| 92 | fn | buildPeakErrorHours | (private) |
| 151 | type | UsageMosaicStats | (private) |
| 158 | fn | getZonedHour | (private) |
| 162 | fn | getZonedWeekday | (private) |
| 166 | fn | getUtcQuarterHourBucketDate | (private) |
| 187 | fn | getHourAndWeekdayForUtcQuarterBucket | (private) |
| 202 | fn | setToHourEnd | (private) |
| 212 | fn | forEachSessionTokenUsageBucket | (private) |
| 236 | fn | sessionSpanTouchesSelectedHours | (private) |
| 263 | fn | sessionTouchesSelectedHours | (private) |
| 283 | fn | buildUsageMosaicStats | (private) |
| 341 | fn | renderUsageMosaic | (private) |
| 456 | fn | formatCost | (private) |
| 460 | fn | formatIsoDate | (private) |
| 464 | fn | parseYmdDate | (private) |
| 485 | fn | parseIsoDayIndex | (private) |
| 505 | fn | formatIsoDayIndex | (private) |
| 509 | fn | formatDayLabel | (private) |
| 517 | fn | formatFullDate | (private) |
| 539 | fn | mergeUsageTotals | (private) |
| 553 | fn | buildUsageCostWindowSummary | (private) |
| 580 | fn | buildUsageCostWindows | (private) |
| 788 | type | UsageInsightStats | (private) |

## ui/src/pages/usage/usage-page.ts (720 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | UsageRouteData | pub |
| 70 | class | UsagePage | (private) |
| 140 | fn | sync | (private) |

## ui/src/pages/usage/view-details.ts (1320 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | pct | (private) |
| 40 | fn | normalizeLogTimestamp | (private) |
| 44 | fn | dateBoundaryMs | (private) |
| 52 | fn | dateKey | (private) |
| 61 | fn | filterLogsByRange | (private) |
| 77 | fn | renderSessionSummary | (private) |
| 189 | fn | computeFilteredUsage | (private) |
| 250 | fn | renderSessionDetailPanel | (private) |
| 401 | fn | renderTimeSeriesCompact | (private) |
| 729 | fn | makeDragHandler | (private) |
| 748 | fn | posToIdx | (private) |
| 760 | fn | handleMove | (private) |
| 782 | fn | handleUp | (private) |
| 885 | fn | renderContextPanel | (private) |
| 1088 | fn | renderSessionLogsCompact | (private) |

## ui/src/pages/usage/view-overview.test.ts (501 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | fn | dailyEntry | (private) |
| 62 | fn | renderDailyChart | (private) |
| 84 | fn | directText | (private) |
| 92 | fn | getSummaryCards | (private) |
| 446 | fn | noop | (private) |

## ui/src/pages/usage/view-overview.ts (1183 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | pct | (private) |
| 33 | fn | formatAnalysisCost | (private) |
| 39 | fn | handleDailyBarKeydown | (private) |
| 52 | fn | getCostBreakdown | (private) |
| 81 | fn | renderFilterChips | (private) |
| 182 | fn | renderCostWindowComparison | (private) |
| 194 | fn | labelForWindow | (private) |
| 243 | fn | renderDailyChartCompact | (private) |
| 448 | fn | renderCostBreakdownCompact | (private) |
| 532 | fn | renderInsightList | (private) |
| 561 | fn | renderPeakErrorList | (private) |
| 594 | fn | focusSummaryHint | (private) |
| 600 | fn | renderSummaryStat | (private) |
| 658 | fn | renderUsageInsights | (private) |
| 717 | fn | costShare | (private) |
| 721 | fn | costAttributionSub | (private) |
| 887 | fn | renderSessionsCard | (private) |
| 904 | fn | showColumn | (private) |
| 913 | fn | copySessionName | (private) |
| 1008 | fn | renderSessionBarRow | (private) |

## ui/src/pages/usage/view.test.ts (599 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | usageSession | (private) |
| 47 | fn | insightCard | (private) |
| 53 | fn | createUsageProps | (private) |

## ui/src/pages/usage/view.ts (898 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | createEmptyUsageTotals | (private) |
| 60 | fn | addUsageTotals | (private) |
| 90 | fn | renderUsageLoadingStatus | (private) |
| 99 | fn | renderUsageLoadingState | (private) |
| 126 | fn | renderUsageEmptyState | (private) |
| 143 | type | ProviderUsageSnapshot | (private) |
| 145 | fn | renderProviderUsage | (private) |
| 180 | fn | renderUsage | pub |
| 252 | fn | unique | (private) |
| 393 | fn | applyPreset | (private) |
| 400 | fn | applyAllRange | (private) |
| 404 | fn | renderFilterSelect | (private) |
