# src/agents/bash-tools.exec-runtime.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1073
- **Language:** TypeScript
- **Symbols:** 32
- **Public symbols:** 13

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 64 | fn | resolveExecTimeoutMs | (private) | `function resolveExecTimeoutMs(timeoutSec: numbe...` |
| 77 | fn | detectCursorKeyMode | (private) | `function detectCursorKeyMode(raw: string): "app...` |
| 115 | type | ExecExecutionPath | pub | - |
| 118 | type | ExecProcessFailureKind | (private) | - |
| 127 | type | ExecExitFailureKind | (private) | - |
| 130 | type | ExecProcessOutcome | pub | - |
| 155 | type | ExecProcessHandle | pub | - |
| 165 | fn | normalizeExecExitSignal | (private) | `function normalizeExecExitSignal(signal: NodeJS...` |
| 172 | fn | emitExecProcessCompleted | (private) | `function emitExecProcessCompleted(params: {` |
| 202 | fn | renderExecHostLabel | (private) | `function renderExecHostLabel(host: ExecHost) {` |
| 207 | fn | renderExecTargetLabel | pub | `export function renderExecTargetLabel(target: E...` |
| 212 | fn | isRequestedExecTargetAllowed | pub | `export function isRequestedExecTargetAllowed(pa...` |
| 240 | fn | resolveExecTarget | pub | `export function resolveExecTarget(params: {` |
| 305 | fn | normalizeNotifyOutput | pub | `export function normalizeNotifyOutput(value: st...` |
| 309 | fn | compactNotifyOutput | (private) | `function compactNotifyOutput(value: string, max...` |
| 322 | fn | applyShellPath | pub | `export function applyShellPath(env: Record<stri...` |
| 337 | fn | maybeNotifyOnExit | (private) | `function maybeNotifyOnExit(session: ProcessSess...` |
| 389 | fn | createApprovalSlug | pub | `export function createApprovalSlug(id: string) {` |
| 394 | fn | buildApprovalPendingMessage | pub | `export function buildApprovalPendingMessage(par...` |
| 435 | fn | resolveApprovalRunningNoticeMs | pub | `export function resolveApprovalRunningNoticeMs(...` |
| 445 | fn | joinExecFailureOutput | (private) | `function joinExecFailureOutput(aggregated: stri...` |
| 449 | fn | classifyExecFailureKind | (private) | `function classifyExecFailureKind(params: {` |
| 471 | fn | formatExecFailureReason | (private) | `function formatExecFailureReason(params: {` |
| 502 | fn | buildExecExitOutcome | (private) | `function buildExecExitOutcome(params: {` |
| 552 | fn | buildExecRuntimeErrorOutcome | pub | `export function buildExecRuntimeErrorOutcome(pa...` |
| 574 | fn | wrapPosixCommandWithPathPrepend | (private) | `function wrapPosixCommandWithPathPrepend(` |
| 605 | fn | runExecProcess | pub | `export async function runExecProcess(opts: {` |
| 697 | fn | emitUpdate | (private) | `const emitUpdate = () => {` |
| 733 | fn | handleStdout | (private) | `const handleStdout = (data: string) => {` |
| 749 | fn | handleStderr | (private) | `const handleStderr = (data: string) => {` |
| 760 | fn | finalizeSandboxExec | (private) | `const finalizeSandboxExec = async (params: {` |
| 898 | fn | onSupervisorStdout | (private) | `const onSupervisorStdout = (chunk: string) => {` |

## Public API

### `renderExecTargetLabel`

```
export function renderExecTargetLabel(target: ExecTarget) {
```

**Line:** 207 | **Kind:** fn

### `isRequestedExecTargetAllowed`

```
export function isRequestedExecTargetAllowed(params: {
```

**Line:** 212 | **Kind:** fn

### `resolveExecTarget`

```
export function resolveExecTarget(params: {
```

**Line:** 240 | **Kind:** fn

### `normalizeNotifyOutput`

```
export function normalizeNotifyOutput(value: string) {
```

**Line:** 305 | **Kind:** fn

### `applyShellPath`

```
export function applyShellPath(env: Record<string, string>, shellPath?: string | null) {
```

**Line:** 322 | **Kind:** fn

### `createApprovalSlug`

```
export function createApprovalSlug(id: string) {
```

**Line:** 389 | **Kind:** fn

### `buildApprovalPendingMessage`

```
export function buildApprovalPendingMessage(params: {
```

**Line:** 394 | **Kind:** fn

### `resolveApprovalRunningNoticeMs`

```
export function resolveApprovalRunningNoticeMs(value?: number) {
```

**Line:** 435 | **Kind:** fn

### `buildExecRuntimeErrorOutcome`

```
export function buildExecRuntimeErrorOutcome(params: {
```

**Line:** 552 | **Kind:** fn

### `runExecProcess`

```
export async function runExecProcess(opts: {
```

**Line:** 605 | **Kind:** fn

## Memory Markers

### 🟢 `NOTE` (line 705)

> opts.onUpdate() is provided by agent runtime's agent-loop and

### 🟢 `NOTE` (line 736)

> PTY chunking is arbitrary, but smkx/rmkx sequences are typically short (4-5 bytes)
