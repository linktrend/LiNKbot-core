# src/agents/tools/cron-tool.ts

[← Back to Module](../modules/src-agents-tools/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1187
- **Language:** TypeScript
- **Symbols:** 42
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 89 | fn | isMissingOrEmptyObject | (private) | `function isMissingOrEmptyObject(value: unknown)...` |
| 93 | fn | nullableStringSchema | (private) | `function nullableStringSchema(description: stri...` |
| 97 | fn | nullableStringArraySchema | (private) | `function nullableStringArraySchema(description:...` |
| 101 | fn | deliveryStringSchema | (private) | `function deliveryStringSchema(params: { descrip...` |
| 107 | fn | deliveryThreadIdSchema | (private) | `function deliveryThreadIdSchema(params: { nulla...` |
| 114 | fn | failureDestinationModeSchema | (private) | `function failureDestinationModeSchema(params: {...` |
| 121 | fn | cronPayloadObjectSchema | (private) | `function cronPayloadObjectSchema(params: {` |
| 145 | fn | createCronScheduleSchema | (private) | `function createCronScheduleSchema(): TSchema {` |
| 174 | fn | createCronPacingSchema | (private) | `function createCronPacingSchema(params: { nulla...` |
| 188 | fn | assertCronPacingInput | (private) | `function assertCronPacingInput(value: unknown, ...` |
| 198 | fn | createCronPayloadSchema | (private) | `function createCronPayloadSchema(): TSchema {` |
| 208 | fn | createCronTriggerSchema | (private) | `function createCronTriggerSchema(params: { null...` |
| 219 | fn | cronDeliverySchema | (private) | `function cronDeliverySchema(params: { nullableC...` |
| 270 | fn | createCronDeliverySchema | (private) | `function createCronDeliverySchema(): TSchema {` |
| 274 | fn | createCronDeliveryPatchSchema | (private) | `function createCronDeliveryPatchSchema(): TSche...` |
| 283 | fn | createCronFailureAlertSchema | (private) | `function createCronFailureAlertSchema(): TSchema {` |
| 302 | fn | createCronJobObjectSchema | (private) | `function createCronJobObjectSchema(): TSchema {` |
| 349 | fn | createCronPatchObjectSchema | (private) | `function createCronPatchObjectSchema(): TSchema {` |
| 385 | fn | createCronToolSchema | (private) | `function createCronToolSchema(): TSchema {` |
| 426 | fn | replaceWithEffectiveCronCreatorToolAllowlist | pub | `export function replaceWithEffectiveCronCreator...` |
| 446 | fn | stripExistingContext | (private) | `function stripExistingContext(text: string) {` |
| 454 | fn | truncateText | (private) | `function truncateText(input: string, maxLen: nu...` |
| 462 | fn | readCronJobIdParam | (private) | `function readCronJobIdParam(params: Record<stri...` |
| 466 | fn | resolveCronToolCallerScope | (private) | `function resolveCronToolCallerScope(` |
| 480 | fn | readCronToolAgentId | (private) | `function readCronToolAgentId(value: unknown): s...` |
| 484 | fn | readAgentIdFromCronToolSessionRef | (private) | `function readAgentIdFromCronToolSessionRef(valu...` |
| 490 | fn | readAgentIdFromCronToolSessionTarget | (private) | `function readAgentIdFromCronToolSessionTarget(v...` |
| 501 | fn | assertCronToolAgentFieldMatchesScope | (private) | `function assertCronToolAgentFieldMatchesScope(p...` |
| 516 | fn | assertCronToolSessionRefsMatchScope | (private) | `function assertCronToolSessionRefsMatchScope(` |
| 532 | fn | readCronSelfRemoveOnlyJobId | (private) | `function readCronSelfRemoveOnlyJobId(opts: Cron...` |
| 536 | fn | isCronSelfIntrospectionAction | (private) | `function isCronSelfIntrospectionAction(action: ...` |
| 540 | fn | assertCronSelfRemoveScope | (private) | `function assertCronSelfRemoveScope(` |
| 561 | fn | filterCronDeliveryPreviewsByJobId | (private) | `function filterCronDeliveryPreviewsByJobId(prev...` |
| 571 | fn | filterCronListResultToJobId | (private) | `function filterCronListResultToJobId(result: un...` |
| 590 | fn | filterCronStatusResultForSelfScope | (private) | `function filterCronStatusResultForSelfScope(res...` |
| 594 | fn | formatCronTerminalPresentation | (private) | `function formatCronTerminalPresentation(` |
| 634 | fn | cronListResultHasJob | (private) | `function cronListResultHasJob(result: unknown, ...` |
| 642 | fn | readCronListNextOffset | (private) | `function readCronListNextOffset(result: unknown...` |
| 650 | fn | isOlderGatewayWithoutCompactCronList | (private) | `function isOlderGatewayWithoutCompactCronList(e...` |
| 659 | fn | extractMessageText | (private) | `function extractMessageText(message: ChatMessag...` |
| 668 | fn | buildReminderContextLines | (private) | `async function buildReminderContextLines(params: {` |
| 723 | fn | createCronTool | pub | `export function createCronTool(opts?: CronToolO...` |

## Public API

### `replaceWithEffectiveCronCreatorToolAllowlist`

```
export function replaceWithEffectiveCronCreatorToolAllowlist<T extends { name: string }>(
```

**Line:** 426 | **Kind:** fn

### `createCronTool`

```
export function createCronTool(opts?: CronToolOptions, deps?: CronToolDeps): AnyAgentTool {
```

**Line:** 723 | **Kind:** fn
