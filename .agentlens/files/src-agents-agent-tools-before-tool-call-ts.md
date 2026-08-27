# src/agents/agent-tools.before-tool-call.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2143
- **Language:** TypeScript
- **Symbols:** 70
- **Public symbols:** 20

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 132 | type | ToolOutcomeObservation | pub | - |
| 142 | type | ToolOutcomeObserver | pub | - |
| 144 | type | HookContext | pub | - |
| 184 | type | HookBlockedReason | (private) | - |
| 185 | type | BeforeToolCallFailureDisposition | pub | - |
| 186 | type | HookBlockedOutcome | (private) | - |
| 192 | type | HookOutcome | (private) | - |
| 204 | type | PluginApprovalRequest | (private) | - |
| 206 | fn | resolvePluginToolApprovalTimeoutMs | (private) | `function resolvePluginToolApprovalTimeoutMs(app...` |
| 217 | fn | resolvePluginToolApprovalGatewayTimeoutMs | (private) | `function resolvePluginToolApprovalGatewayTimeou...` |
| 221 | type | DeferredPluginToolApproval | pub | - |
| 230 | type | BeforeToolCallWrapperOptions | (private) | - |
| 234 | type | BeforeToolCallPreparingTool | (private) | - |
| 242 | type | BeforeToolCallPolicyDiagnosticState | pub | - |
| 252 | fn | getBeforeToolCallPolicyDiagnosticState | pub | `export function getBeforeToolCallPolicyDiagnost...` |
| 261 | fn | hasBeforeToolCallPolicy | pub | `export function hasBeforeToolCallPolicy(): bool...` |
| 284 | fn | resolveToolTerminalPresentation | (private) | `function resolveToolTerminalPresentation(params: {` |
| 310 | fn | rememberPendingTerminalPresentation | (private) | `function rememberPendingTerminalPresentation(pa...` |
| 340 | fn | finalizeToolTerminalPresentation | pub | `export function finalizeToolTerminalPresentatio...` |
| 381 | class | BeforeToolCallBlockedError | (private) | - |
| 398 | class | BeforeToolCallFailureError | (private) | - |
| 409 | fn | tagBeforeToolCallFailure | (private) | `function tagBeforeToolCallFailure(` |
| 426 | fn | getBeforeToolCallFailureDisposition | pub | `export function getBeforeToolCallFailureDisposi...` |
| 437 | fn | recordAdjustedParamsForToolCall | pub | `export function recordAdjustedParamsForToolCall(` |
| 459 | fn | cloneParamsForAdjustedReplay | (private) | `function cloneParamsForAdjustedReplay(` |
| 470 | fn | recordStructuredReplayTrustForToolCall | pub | `export function recordStructuredReplayTrustForT...` |
| 491 | fn | isBeforeToolCallBlockedError | pub | `export function isBeforeToolCallBlockedError(er...` |
| 500 | fn | mergeParamsWithApprovalOverrides | (private) | `function mergeParamsWithApprovalOverrides(` |
| 513 | fn | unwrapErrorCause | (private) | `function unwrapErrorCause(err: unknown): unknown {` |
| 528 | fn | resolveToolErrorDiagnostic | (private) | `function resolveToolErrorDiagnostic(` |
| 555 | type | ResolvedToolTerminalDiagnostic | (private) | - |
| 572 | fn | resolveToolResultTerminalDiagnostic | (private) | `function resolveToolResultTerminalDiagnostic(` |
| 597 | type | ToolDiagnosticIdentity | (private) | - |
| 602 | fn | resolveToolDiagnosticIdentity | (private) | `function resolveToolDiagnosticIdentity(tool: An...` |
| 616 | type | SkillUsageMatch | (private) | - |
| 623 | fn | canonicalSkillFile | (private) | `function canonicalSkillFile(value: string | und...` |
| 630 | fn | resolvedSkillUsageMatch | (private) | `function resolvedSkillUsageMatch(params: {` |
| 643 | fn | findResolvedSkillUsageMatch | (private) | `function findResolvedSkillUsageMatch(params: {` |
| 659 | fn | resolveRelativeToolPath | (private) | `function resolveRelativeToolPath(candidate: str...` |
| 680 | fn | readToolPathCandidates | (private) | `function readToolPathCandidates(params: unknown...` |
| 690 | fn | skillInstructionPaths | (private) | `function skillInstructionPaths(snapshot: SkillS...` |
| 714 | fn | materializedSkillInstructionPaths | (private) | `function materializedSkillInstructionPaths(path...` |
| 727 | fn | findSkillUsageMatch | (private) | `function findSkillUsageMatch(params: {` |
| 768 | fn | emitSkillUsedDiagnostic | (private) | `function emitSkillUsedDiagnostic(params: {` |
| 797 | fn | emitToolBlockedSecurityEvent | (private) | `function emitToolBlockedSecurityEvent(params: {` |
| 858 | fn | warnDeprecatedApprovalTimeoutBehavior | (private) | `function warnDeprecatedApprovalTimeoutBehavior(...` |
| 872 | fn | notifyPluginApprovalResolution | (private) | `function notifyPluginApprovalResolution(` |
| 889 | fn | resolvePermittedPluginApprovalResolution | (private) | `function resolvePermittedPluginApprovalResolution(` |
| 904 | fn | buildPluginApprovalFailureReason | (private) | `function buildPluginApprovalFailureReason(param...` |
| 941 | fn | requestPluginToolApproval | (private) | `async function requestPluginToolApproval(params: {` |
| 1202 | fn | requestDeferredPluginToolApproval | pub | `export async function requestDeferredPluginTool...` |
| 1219 | fn | cancelDeferredPluginToolApproval | pub | `export function cancelDeferredPluginToolApproval(` |
| 1225 | fn | resolveBeforeToolCallApprovalOutcome | (private) | `async function resolveBeforeToolCallApprovalOut...` |
| 1285 | fn | resolveSkillWorkshopApprovalForFinalParams | (private) | `async function resolveSkillWorkshopApprovalForF...` |
| 1314 | fn | isPreExecutionBlockedToolResult | pub | `export function isPreExecutionBlockedToolResult...` |
| 1321 | fn | buildBlockedToolResult | pub | `export function buildBlockedToolResult(params: {` |
| 1343 | fn | buildToolContentPrivateData | (private) | `function buildToolContentPrivateData(` |
| 1360 | fn | summarizeToolParams | (private) | `function summarizeToolParams(params: unknown): ...` |
| 1385 | fn | shouldEmitLoopWarning | (private) | `function shouldEmitLoopWarning(state: SessionSt...` |
| 1404 | fn | recordLoopOutcome | (private) | `async function recordLoopOutcome(args: {` |
| 1451 | fn | runBeforeToolCallHook | pub | `export async function runBeforeToolCallHook(arg...` |
| 1574 | fn | deriveToolEventParams | (private) | `const deriveToolEventParams = (candidateParams:...` |
| 1582 | fn | buildToolContext | (private) | `const buildToolContext = (identity: typeof tool...` |
| 1788 | fn | wrapToolWithBeforeToolCallHook | pub | `export function wrapToolWithBeforeToolCallHook(` |
| 1814 | fn | buildEventBase | (private) | `const buildEventBase = (toolParams: unknown) => ({` |
| 1826 | fn | recordPreExecutionError | (private) | `const recordPreExecutionError = (` |
| 1842 | fn | recordPreExecutionDisposition | (private) | `const recordPreExecutionDisposition = (` |
| 2088 | fn | rewrapToolWithBeforeToolCallHook | pub | `export function rewrapToolWithBeforeToolCallHook(` |
| 2116 | fn | recordPreExecutionBlockedToolCall | (private) | `function recordPreExecutionBlockedToolCall(tool...` |
| 2130 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |

## Public API

### `getBeforeToolCallPolicyDiagnosticState`

```
export function getBeforeToolCallPolicyDiagnosticState(): BeforeToolCallPolicyDiagnosticState {
```

**Line:** 252 | **Kind:** fn

### `hasBeforeToolCallPolicy`

```
export function hasBeforeToolCallPolicy(): boolean {
```

**Line:** 261 | **Kind:** fn

### `finalizeToolTerminalPresentation`

```
export function finalizeToolTerminalPresentation(params: {
```

**Line:** 340 | **Kind:** fn

### `getBeforeToolCallFailureDisposition`

```
export function getBeforeToolCallFailureDisposition(
```

**Line:** 426 | **Kind:** fn

### `recordAdjustedParamsForToolCall`

```
export function recordAdjustedParamsForToolCall(
```

**Line:** 437 | **Kind:** fn

### `recordStructuredReplayTrustForToolCall`

```
export function recordStructuredReplayTrustForToolCall(
```

**Line:** 470 | **Kind:** fn

### `isBeforeToolCallBlockedError`

```
export function isBeforeToolCallBlockedError(err: unknown): err is BeforeToolCallBlockedError {
```

**Line:** 491 | **Kind:** fn

### `requestDeferredPluginToolApproval`

```
export async function requestDeferredPluginToolApproval(params: {
```

**Line:** 1202 | **Kind:** fn

### `cancelDeferredPluginToolApproval`

```
export function cancelDeferredPluginToolApproval(
```

**Line:** 1219 | **Kind:** fn

### `isPreExecutionBlockedToolResult`

```
export function isPreExecutionBlockedToolResult(result: unknown): boolean {
```

**Line:** 1314 | **Kind:** fn

### `buildBlockedToolResult`

```
export function buildBlockedToolResult(params: {
```

**Line:** 1321 | **Kind:** fn

### `runBeforeToolCallHook`

```
export async function runBeforeToolCallHook(args: {
```

**Line:** 1451 | **Kind:** fn

### `wrapToolWithBeforeToolCallHook`

```
export function wrapToolWithBeforeToolCallHook(
```

**Line:** 1788 | **Kind:** fn

### `rewrapToolWithBeforeToolCallHook`

```
export function rewrapToolWithBeforeToolCallHook(
```

**Line:** 2088 | **Kind:** fn
