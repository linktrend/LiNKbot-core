# src/agents/embedded-agent-subscribe.handlers.tools.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1887
- **Language:** TypeScript
- **Symbols:** 59
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 111 | type | ExecApprovalReplyModule | (private) | - |
| 112 | type | HookRunnerGlobalModule | (private) | - |
| 113 | type | ChannelToolProgress | (private) | - |
| 129 | fn | resolveFallbackToolTerminalObserver | (private) | `function resolveFallbackToolTerminalObserver(ct...` |
| 145 | fn | readUpdatePlanResult | (private) | `function readUpdatePlanResult(` |
| 157 | fn | buildAskUserPromptPayload | (private) | `function buildAskUserPromptPayload(` |
| 182 | fn | isMiddlewareToolResultError | (private) | `function isMiddlewareToolResultError(result: un...` |
| 195 | fn | loadExecApprovalReply | (private) | `function loadExecApprovalReply(): Promise<ExecA...` |
| 199 | fn | loadHookRunnerGlobal | (private) | `function loadHookRunnerGlobal(): Promise<HookRu...` |
| 203 | fn | getRequiredParamGroupsForTool | (private) | `function getRequiredParamGroupsForTool(` |
| 209 | fn | collectMissingRequiredParamLabels | (private) | `function collectMissingRequiredParamLabels(tool...` |
| 231 | fn | buildToolExecutionStartTraceMeta | (private) | `function buildToolExecutionStartTraceMeta(param...` |
| 259 | fn | traceToolExecutionStart | (private) | `function traceToolExecutionStart(params: {` |
| 281 | fn | buildToolStartWarningArgsPreview | (private) | `function buildToolStartWarningArgsPreview(rawAr...` |
| 292 | type | ToolStartRecord | (private) | - |
| 301 | fn | buildToolStartKey | (private) | `function buildToolStartKey(runId: string, toolC...` |
| 306 | fn | countActiveToolExecutions | pub | `export function countActiveToolExecutions(runId...` |
| 318 | fn | cleanupRunToolStartData | pub | `export function cleanupRunToolStartData(runId: ...` |
| 327 | fn | isCronAddAction | (private) | `function isCronAddAction(args: unknown): boolean {` |
| 335 | fn | buildToolCallSummary | (private) | `function buildToolCallSummary(` |
| 355 | fn | buildToolItemId | (private) | `function buildToolItemId(toolCallId: string): s...` |
| 359 | fn | buildToolItemTitle | (private) | `function buildToolItemTitle(toolName: string, m...` |
| 363 | fn | isExecToolName | (private) | `function isExecToolName(toolName: string): bool...` |
| 367 | fn | isPatchToolName | (private) | `function isPatchToolName(toolName: string): boo...` |
| 371 | fn | buildCommandItemId | (private) | `function buildCommandItemId(toolCallId: string)...` |
| 375 | fn | buildPatchItemId | (private) | `function buildPatchItemId(toolCallId: string): ...` |
| 379 | fn | buildCommandItemTitle | (private) | `function buildCommandItemTitle(toolName: string...` |
| 383 | fn | buildPatchItemTitle | (private) | `function buildPatchItemTitle(meta?: string): st...` |
| 387 | fn | emitTrackedItemEvent | (private) | `function emitTrackedItemEvent(ctx: ToolHandlerC...` |
| 406 | fn | emitExecutionPhaseBestEffort | (private) | `function emitExecutionPhaseBestEffort(` |
| 417 | fn | emitAgentEventCallbackBestEffort | (private) | `function emitAgentEventCallbackBestEffort(` |
| 428 | fn | applyCurrentMessageProvider | (private) | `function applyCurrentMessageProvider(` |
| 444 | fn | applyToolSendReceiptForExtraction | (private) | `function applyToolSendReceiptForExtraction(resu...` |
| 458 | fn | isAsyncStartedToolResult | (private) | `function isAsyncStartedToolResult(result: unkno...` |
| 463 | fn | readAsyncStartedTaskIds | (private) | `function readAsyncStartedTaskIds(result: unknow...` |
| 480 | fn | readExecToolDetails | (private) | `function readExecToolDetails(result: unknown): ...` |
| 488 | fn | extractExecOutput | (private) | `function extractExecOutput(result: unknown): st...` |
| 497 | fn | extractLiveExecOutput | (private) | `function extractLiveExecOutput(result: unknown)...` |
| 502 | fn | isOpenClawExecutable | (private) | `function isOpenClawExecutable(token: string | u...` |
| 507 | fn | isOpenClawPackageSpec | (private) | `function isOpenClawPackageSpec(token: string | ...` |
| 512 | fn | skipOpenClawPackageRunner | (private) | `function skipOpenClawPackageRunner(` |
| 565 | fn | isOpenClawCronAddShellCommand | (private) | `function isOpenClawCronAddShellCommand(args: un...` |
| 606 | fn | didShellCronAddSucceed | (private) | `function didShellCronAddSucceed(args: unknown, ...` |
| 614 | fn | readChannelToolProgress | (private) | `function readChannelToolProgress(result: unknow...` |
| 627 | fn | shouldEmitLiveExecUpdate | (private) | `function shouldEmitLiveExecUpdate(ctx: ToolHand...` |
| 639 | fn | readApplyPatchSummary | (private) | `function readApplyPatchSummary(result: unknown)...` |
| 660 | fn | shouldSuppressStructuredMediaToolOutput | (private) | `function shouldSuppressStructuredMediaToolOutpu...` |
| 676 | fn | buildPatchSummaryText | (private) | `function buildPatchSummaryText(summary: ApplyPa...` |
| 690 | fn | extendExecMeta | (private) | `function extendExecMeta(toolName: string, args:...` |
| 713 | fn | readMessagingText | (private) | `function readMessagingText(record: Record<strin...` |
| 723 | fn | hasMessagingRichContent | (private) | `function hasMessagingRichContent(record: Record...` |
| 738 | fn | queuePendingToolMedia | (private) | `function queuePendingToolMedia(` |
| 758 | fn | readExecApprovalPendingDetails | (private) | `function readExecApprovalPendingDetails(result:...` |
| 805 | fn | readExecApprovalUnavailableDetails | (private) | `function readExecApprovalUnavailableDetails(res...` |
| 847 | fn | emitToolResultOutput | (private) | `async function emitToolResultOutput(params: {` |
| 971 | fn | handleToolExecutionStart | pub | `export function handleToolExecutionStart(` |
| 986 | fn | cancelAskUserPromptReservation | (private) | `const cancelAskUserPromptReservation = () => {` |
| 1275 | fn | handleToolExecutionUpdate | pub | `export function handleToolExecutionUpdate(` |
| 1371 | fn | handleToolExecutionEnd | pub | `export async function handleToolExecutionEnd(` |

## Public API

### `countActiveToolExecutions`

```
export function countActiveToolExecutions(runId: string): number {
```

**Line:** 306 | **Kind:** fn

### `cleanupRunToolStartData`

```
export function cleanupRunToolStartData(runId: string): void {
```

**Line:** 318 | **Kind:** fn

### `handleToolExecutionStart`

```
export function handleToolExecutionStart(
```

**Line:** 971 | **Kind:** fn

### `handleToolExecutionUpdate`

```
export function handleToolExecutionUpdate(
```

**Line:** 1275 | **Kind:** fn

### `handleToolExecutionEnd`

```
export async function handleToolExecutionEnd(
```

**Line:** 1371 | **Kind:** fn
