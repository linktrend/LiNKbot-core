# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 1 large files in this module.

## linkbots/lisa/ops/jobs/time-management/planner.ts (540 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | dateNumber | (private) |
| 25 | fn | addDays | (private) |
| 30 | fn | overlaps | (private) |
| 39 | fn | rankTasks | pub |
| 53 | type | TaskGroup | pub |
| 59 | fn | groupSmallTasks | pub |
| 97 | type | ChildResult | pub |
| 105 | fn | splitLargeTask | pub |
| 125 | type | WorkPeriodDecision | pub |
| 132 | type | WorkPlanRequest | pub |
| 143 | type | WorkPlan | pub |
| 154 | fn | suitableForBlock | (private) |
| 161 | fn | chooseFlexiblePeriod | pub |
| 171 | fn | capacityPlan | pub |
| 181 | fn | planWorkBlocks | pub |
| 300 | fn | closeWorkPeriod | pub |
| 329 | type | StandingRuleProposal | pub |
| 338 | fn | proposeStandingRule | pub |
| 344 | type | RoutePlan | pub |
| 352 | fn | planProviderRouting | pub |
| 365 | type | ApprovalBlock | pub |
| 373 | fn | renderApprovalBlock | pub |
| 395 | fn | assertPhoneReadableDocument | pub |
| 414 | type | WeeklyPlanItem | pub |
| 416 | fn | renderWeeklyPlan | pub |
| 428 | fn | renderReview | pub |
| 453 | type | MonthlyReportPlan | pub |
| 460 | fn | getLastPlannedWorkday | pub |
| 494 | fn | planMonthlyReport | pub |
| 513 | fn | renderMonthlyWorkReport | pub |
