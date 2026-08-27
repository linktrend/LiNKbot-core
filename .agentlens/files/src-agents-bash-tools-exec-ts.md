# src/agents/bash-tools.exec.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2288
- **Language:** TypeScript
- **Symbols:** 54
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 107 | type | ExecToolArgs | (private) | - |
| 124 | fn | buildSubprocessChannelContext | (private) | `function buildSubprocessChannelContext(` |
| 136 | fn | buildChannelContextEnv | (private) | `function buildChannelContextEnv(` |
| 146 | type | ResolvedExecEnvPreparedState | (private) | - |
| 151 | type | DeferredResolveExecEnvPreparedState | (private) | - |
| 158 | type | ResolvedExecWorkdirPreparedState | (private) | - |
| 177 | fn | isExecToolArgsObject | (private) | `function isExecToolArgsObject(value: unknown): ...` |
| 181 | fn | filterPluginExecEnv | (private) | `function filterPluginExecEnv(rawEnv: Record<str...` |
| 202 | fn | markResolveExecEnvPrepared | (private) | `function markResolveExecEnvPrepared<T extends E...` |
| 210 | fn | getResolvedExecEnvPreparedState | (private) | `function getResolvedExecEnvPreparedState(` |
| 216 | fn | isResolveExecEnvPrepared | (private) | `function isResolveExecEnvPrepared(params: ExecT...` |
| 220 | fn | markDeferredResolveExecEnvPrepared | (private) | `function markDeferredResolveExecEnvPrepared<T e...` |
| 228 | fn | getDeferredResolveExecEnvPreparedState | (private) | `function getDeferredResolveExecEnvPreparedState(` |
| 234 | fn | markResolvedExecWorkdirPrepared | (private) | `function markResolvedExecWorkdirPrepared<T exte...` |
| 242 | fn | getResolvedExecWorkdirPreparedState | (private) | `function getResolvedExecWorkdirPreparedState(` |
| 248 | fn | buildExecForegroundResult | (private) | `function buildExecForegroundResult(params: {` |
| 310 | fn | getNodeErrorCode | (private) | `function getNodeErrorCode(error: unknown): stri...` |
| 317 | type | FsSafeModule | (private) | - |
| 323 | fn | loadFsSafeModule | (private) | `async function loadFsSafeModule(): Promise<FsSa...` |
| 327 | fn | shouldSkipScriptPreflightPathError | (private) | `function shouldSkipScriptPreflightPathError(` |
| 338 | fn | resolvePreflightRelativePath | (private) | `function resolvePreflightRelativePath(params: {...` |
| 348 | fn | hasLeadingTildePathSegment | (private) | `function hasLeadingTildePathSegment(relativePat...` |
| 352 | fn | readLiteralTildePreflightScript | (private) | `async function readLiteralTildePreflightScript(...` |
| 387 | fn | isShellEnvAssignmentToken | (private) | `function isShellEnvAssignmentToken(token: strin...` |
| 391 | fn | isEnvExecutableToken | (private) | `function isEnvExecutableToken(token: string | u...` |
| 400 | fn | stripPreflightEnvPrefix | (private) | `function stripPreflightEnvPrefix(argv: string[]...` |
| 442 | fn | findFirstPythonScriptArg | (private) | `function findFirstPythonScriptArg(tokens: strin...` |
| 474 | fn | findNodeScriptArgs | (private) | `function findNodeScriptArgs(tokens: string[]): ...` |
| 548 | fn | extractInterpreterScriptTargetFromArgv | (private) | `function extractInterpreterScriptTargetFromArgv(` |
| 583 | fn | extractInterpreterScriptPathsFromSegment | (private) | `function extractInterpreterScriptPathsFromSegme...` |
| 597 | fn | extractScriptTargetFromCommand | (private) | `function extractScriptTargetFromCommand(` |
| 607 | fn | pushToken | (private) | `const pushToken = () => {` |
| 671 | fn | extractUnquotedShellText | (private) | `function extractUnquotedShellText(raw: string):...` |
| 726 | fn | splitShellSegmentsOutsideQuotes | (private) | `function splitShellSegmentsOutsideQuotes(` |
| 736 | fn | pushSegment | (private) | `const pushSegment = () => {` |
| 816 | fn | isInterpreterExecutable | (private) | `function isInterpreterExecutable(executable: st...` |
| 823 | fn | hasUnescapedSequence | (private) | `function hasUnescapedSequence(raw: string, sequ...` |
| 845 | fn | hasUnquotedScriptHint | (private) | `function hasUnquotedScriptHint(raw: string): bo...` |
| 909 | fn | resolveLeadingShellSegmentExecutable | (private) | `function resolveLeadingShellSegmentExecutable(r...` |
| 932 | fn | analyzeInterpreterHeuristicsFromUnquoted | (private) | `function analyzeInterpreterHeuristicsFromUnquot...` |
| 961 | fn | extractShellWrappedCommandPayload | (private) | `function extractShellWrappedCommandPayload(` |
| 1010 | fn | shouldFailClosedInterpreterPreflight | (private) | `function shouldFailClosedInterpreterPreflight(c...` |
| 1185 | fn | validateScriptFileForShellBleed | (private) | `async function validateScriptFileForShellBleed(...` |
| 1297 | fn | shouldSkipExecScriptPreflight | (private) | `function shouldSkipExecScriptPreflight(params: {` |
| 1305 | fn | resolveExecReviewerDefaults | (private) | `function resolveExecReviewerDefaults(params: { ...` |
| 1317 | fn | resolveNotifyOnExitEmptySuccess | (private) | `function resolveNotifyOnExitEmptySuccess(defaul...` |
| 1325 | fn | createExecTool | pub | `export function createExecTool(` |
| 1410 | fn | buildUnavailableWorkdirResult | (private) | `const buildUnavailableWorkdirResult = (params: {` |
| 1559 | fn | resolveFinalHost | (private) | `const resolveFinalHost = () => {` |
| 1601 | fn | getWarningText | (private) | `const getWarningText = () => (warnings.length ?...` |
| 2166 | fn | onAbortSignal | (private) | `const onAbortSignal = () => {` |
| 2181 | fn | cleanupToolRunListeners | (private) | `const cleanupToolRunListeners = () => {` |
| 2200 | fn | resolveRunning | (private) | `const resolveRunning = () => {` |
| 2222 | fn | onYieldNow | (private) | `const onYieldNow = () => {` |

## Public API

### `createExecTool`

```
export function createExecTool(
```

**Line:** 1325 | **Kind:** fn
