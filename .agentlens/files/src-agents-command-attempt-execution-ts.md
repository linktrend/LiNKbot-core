# src/agents/command/attempt-execution.ts

[← Back to Module](../modules/src-agents-command/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1442
- **Language:** TypeScript
- **Symbols:** 37
- **Public symbols:** 12

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 98 | fn | shouldClearReusedCliSessionAfterError | (private) | `function shouldClearReusedCliSessionAfterError(...` |
| 105 | fn | resolveClearedCliSessionReason | (private) | `function resolveClearedCliSessionReason(err: un...` |
| 112 | fn | normalizeTranscriptMirrorText | (private) | `function normalizeTranscriptMirrorText(value: s...` |
| 130 | fn | shouldSuppressEmbeddedLiveStreamOutput | (private) | `function shouldSuppressEmbeddedLiveStreamOutput...` |
| 134 | type | TranscriptUsage | (private) | - |
| 142 | type | PersistTextTurnTranscriptParams | (private) | - |
| 166 | type | PersistTextTurnTranscriptResult | (private) | - |
| 170 | type | HarnessAuthProfileSelection | (private) | - |
| 177 | fn | resolveProfileAuthFromStore | (private) | `function resolveProfileAuthFromStore(params: { ...` |
| 192 | fn | resolveHarnessAuthProfileSelection | (private) | `function resolveHarnessAuthProfileSelection(par...` |
| 259 | fn | resolveTranscriptUsage | (private) | `function resolveTranscriptUsage(usage: PersistT...` |
| 272 | fn | persistTextTurnTranscript | (private) | `async function persistTextTurnTranscript(` |
| 357 | fn | resolveCliTranscriptReplyText | (private) | `function resolveCliTranscriptReplyText(result: ...` |
| 370 | fn | isClaudeCliProvider | (private) | `function isClaudeCliProvider(provider: string):...` |
| 374 | fn | persistAcpTurnTranscript | pub | `export async function persistAcpTurnTranscript(...` |
| 401 | fn | persistCliTurnTranscript | pub | `export async function persistCliTurnTranscript(...` |
| 450 | fn | runAgentAttempt | pub | `export function runAgentAttempt(params: {` |
| 659 | fn | resolveReusableCliSessionBinding | (private) | `const resolveReusableCliSessionBinding = async ...` |
| 704 | fn | runCliWithSession | (private) | `const runCliWithSession = async (` |
| 989 | fn | buildAcpResult | pub | `export function buildAcpResult(params: {` |
| 1012 | fn | emitAcpLifecycleStart | pub | `export function emitAcpLifecycleStart(params: {` |
| 1042 | type | ActiveAcpTool | (private) | - |
| 1051 | type | AcpToolLifecycleTracker | pub | - |
| 1059 | fn | createAcpToolLifecycleTracker | pub | `export function createAcpToolLifecycleTracker()...` |
| 1067 | fn | acpAuditToolName | (private) | `function acpAuditToolName(kind: unknown): string {` |
| 1085 | fn | resolveAcpToolTerminalReason | (private) | `function resolveAcpToolTerminalReason(` |
| 1118 | fn | resolveAcpLifecycleEndFields | (private) | `function resolveAcpLifecycleEndFields(` |
| 1142 | fn | emitAcpToolExecutionEvent | (private) | `function emitAcpToolExecutionEvent(params: {` |
| 1239 | fn | finalizeAcpToolsForRun | (private) | `function finalizeAcpToolsForRun(` |
| 1265 | fn | resolvePresentProxyEnvKeys | (private) | `function resolvePresentProxyEnvKeys(env: NodeJS...` |
| 1272 | fn | sanitizeAcpDiagnosticText | (private) | `function sanitizeAcpDiagnosticText(value: strin...` |
| 1276 | fn | acpRuntimeEventDiagnostics | (private) | `function acpRuntimeEventDiagnostics(event: AcpR...` |
| 1315 | fn | emitAcpPromptSubmitted | pub | `export function emitAcpPromptSubmitted(params: ...` |
| 1328 | fn | emitAcpRuntimeEvent | pub | `export function emitAcpRuntimeEvent(params: {` |
| 1361 | fn | emitAcpLifecycleEnd | pub | `export function emitAcpLifecycleEnd(params: {` |
| 1397 | fn | emitAcpLifecycleError | pub | `export function emitAcpLifecycleError(params: {` |
| 1432 | fn | emitAcpAssistantDelta | pub | `export function emitAcpAssistantDelta(params: {...` |

## Public API

### `persistAcpTurnTranscript`

```
export async function persistAcpTurnTranscript(params: {
```

**Line:** 374 | **Kind:** fn

### `persistCliTurnTranscript`

```
export async function persistCliTurnTranscript(params: {
```

**Line:** 401 | **Kind:** fn

### `runAgentAttempt`

```
export function runAgentAttempt(params: {
```

**Line:** 450 | **Kind:** fn

### `buildAcpResult`

```
export function buildAcpResult(params: {
```

**Line:** 989 | **Kind:** fn

### `emitAcpLifecycleStart`

```
export function emitAcpLifecycleStart(params: {
```

**Line:** 1012 | **Kind:** fn

### `createAcpToolLifecycleTracker`

```
export function createAcpToolLifecycleTracker(): AcpToolLifecycleTracker {
```

**Line:** 1059 | **Kind:** fn

### `emitAcpPromptSubmitted`

```
export function emitAcpPromptSubmitted(params: { runId: string; sessionKey?: string; at: number }) {
```

**Line:** 1315 | **Kind:** fn

### `emitAcpRuntimeEvent`

```
export function emitAcpRuntimeEvent(params: {
```

**Line:** 1328 | **Kind:** fn

### `emitAcpLifecycleEnd`

```
export function emitAcpLifecycleEnd(params: {
```

**Line:** 1361 | **Kind:** fn

### `emitAcpLifecycleError`

```
export function emitAcpLifecycleError(params: {
```

**Line:** 1397 | **Kind:** fn

### `emitAcpAssistantDelta`

```
export function emitAcpAssistantDelta(params: { runId: string; text: string; delta: string }) {
```

**Line:** 1432 | **Kind:** fn
