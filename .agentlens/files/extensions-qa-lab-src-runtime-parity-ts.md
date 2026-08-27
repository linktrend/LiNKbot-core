# extensions/qa-lab/src/runtime-parity.ts

[← Back to Module](../modules/extensions-qa-lab/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1160
- **Language:** TypeScript
- **Symbols:** 60
- **Public symbols:** 14

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 20 | type | RuntimeId | pub | - |
| 22 | type | RuntimeParityToolCall | pub | - |
| 29 | type | RuntimeParityUsage | pub | - |
| 37 | type | RuntimeParityUsagePolicy | pub | - |
| 41 | type | RuntimeParityCell | pub | - |
| 54 | type | RuntimeParityDrift | pub | - |
| 62 | type | RuntimeParityResult | pub | - |
| 73 | fn | resolveRuntimeParityUsagePolicy | pub | `export function resolveRuntimeParityUsagePolicy...` |
| 89 | type | RuntimeParityScenarioExecution | pub | - |
| 95 | fn | runtimeParityCellStatus | pub | `export function runtimeParityCellStatus(` |
| 104 | fn | isRuntimeParityResultPass | pub | `export function isRuntimeParityResultPass(resul...` |
| 112 | type | QaGatewayLike | (private) | - |
| 117 | type | QaSuiteScenarioLike | (private) | - |
| 123 | type | RuntimeParityCaptureParams | (private) | - |
| 132 | type | RuntimeParitySessionEntry | (private) | - |
| 142 | type | RuntimeParitySessionCandidate | (private) | - |
| 147 | type | RuntimeParityTranscriptRecord | (private) | - |
| 152 | type | RuntimeParityMockRequestSnapshot | (private) | - |
| 160 | type | RuntimeParityPendingToolCall | (private) | - |
| 174 | fn | normalizeTextForParity | (private) | `function normalizeTextForParity(text: string) {` |
| 178 | fn | readUsageTotals | (private) | `function readUsageTotals(raw: unknown): Runtime...` |
| 208 | fn | addUsage | (private) | `function addUsage(target: RuntimeParityUsage, n...` |
| 220 | fn | extractAssistantText | (private) | `function extractAssistantText(message: Record<s...` |
| 255 | fn | normalizeToolCallId | (private) | `function normalizeToolCallId(value: unknown) {` |
| 259 | fn | parseJsonRecord | (private) | `function parseJsonRecord(value: string): Record...` |
| 271 | fn | extractToolCalls | (private) | `function extractToolCalls(message: Record<strin...` |
| 321 | fn | extractToolResults | (private) | `function extractToolResults(message: Record<str...` |
| 380 | fn | classifyToolResultError | (private) | `function classifyToolResultError(params: {` |
| 408 | fn | finalizeToolCallOrder | (private) | `function finalizeToolCallOrder(ordered: Runtime...` |
| 419 | fn | resolveToolCallOrder | (private) | `function resolveToolCallOrder(records: RuntimeP...` |
| 425 | fn | enqueueUnresolved | (private) | `const enqueueUnresolved = (tool: string, index:...` |
| 432 | fn | markResolved | (private) | `const markResolved = (index: number) => {` |
| 454 | fn | matchPendingIndex | (private) | `const matchPendingIndex = (result: { id?: strin...` |
| 514 | fn | resolveToolCallOrderFromMockRequests | (private) | `function resolveToolCallOrderFromMockRequests(` |
| 520 | fn | enqueueUnresolved | (private) | `const enqueueUnresolved = (index: number) => {` |
| 524 | fn | markResolved | (private) | `const markResolved = (index: number) => {` |
| 582 | fn | classifyScenarioError | (private) | `function classifyScenarioError(details: string ...` |
| 612 | fn | extractBootStateLines | (private) | `function extractBootStateLines(logs: string | u...` |
| 623 | fn | buildTranscriptRecords | (private) | `function buildTranscriptRecords(transcriptBytes...` |
| 651 | fn | isHeartbeatOnlyRuntimeTranscript | (private) | `function isHeartbeatOnlyRuntimeTranscript(trans...` |
| 662 | fn | isToolResultLikeMessage | (private) | `function isToolResultLikeMessage(message: Recor...` |
| 679 | fn | isHeartbeatRuntimeUserText | (private) | `function isHeartbeatRuntimeUserText(text: strin...` |
| 702 | fn | extractFinalAssistantText | (private) | `function extractFinalAssistantText(records: Run...` |
| 716 | fn | aggregateUsage | (private) | `function aggregateUsage(records: RuntimeParityT...` |
| 732 | fn | compareToolResultShape | (private) | `function compareToolResultShape(` |
| 759 | fn | isHardFailureRuntimeError | (private) | `function isHardFailureRuntimeError(errorClass: ...` |
| 770 | fn | isRuntimeParityCellPassable | pub | `export function isRuntimeParityCellPassable(cel...` |
| 777 | fn | hasMissingToolResult | (private) | `function hasMissingToolResult(toolCalls: readon...` |
| 781 | fn | hasProvenTerminalImageResult | (private) | `function hasProvenTerminalImageResult(scenarioR...` |
| 794 | fn | resolveRuntimeParityToolCalls | (private) | `function resolveRuntimeParityToolCalls(params: {` |
| 842 | fn | filterMockRequestsForParentPrompt | (private) | `function filterMockRequestsForParentPrompt(` |
| 864 | fn | summarizeSentinelErrorClass | (private) | `function summarizeSentinelErrorClass(findings: ...` |
| 874 | fn | classifyRuntimeParityCells | (private) | `function classifyRuntimeParityCells(params: {` |
| 963 | fn | isRuntimeParityRootSession | (private) | `function isRuntimeParityRootSession(entry: Runt...` |
| 976 | fn | runtimeParitySessionEnv | (private) | `function runtimeParitySessionEnv(stateDir: stri...` |
| 980 | fn | readRuntimeParitySessionEntries | (private) | `function readRuntimeParitySessionEntries(params: {` |
| 1004 | fn | loadRuntimeParityTranscripts | (private) | `async function loadRuntimeParityTranscripts(par...` |
| 1038 | fn | loadRuntimeParityMockToolCalls | (private) | `async function loadRuntimeParityMockToolCalls(` |
| 1083 | fn | captureRuntimeParityCell | pub | `export async function captureRuntimeParityCell(` |
| 1135 | fn | runRuntimeParityScenario | pub | `export async function runRuntimeParityScenario(...` |

## Public API

### `resolveRuntimeParityUsagePolicy`

```
export function resolveRuntimeParityUsagePolicy(value: unknown): RuntimeParityUsagePolicy {
```

**Line:** 73 | **Kind:** fn

### `runtimeParityCellStatus`

```
export function runtimeParityCellStatus(
```

**Line:** 95 | **Kind:** fn

### `isRuntimeParityResultPass`

```
export function isRuntimeParityResultPass(result: RuntimeParityResult) {
```

**Line:** 104 | **Kind:** fn

### `isRuntimeParityCellPassable`

```
export function isRuntimeParityCellPassable(cell: RuntimeParityCell | undefined) {
```

**Line:** 770 | **Kind:** fn

### `captureRuntimeParityCell`

```
export async function captureRuntimeParityCell(
```

**Line:** 1083 | **Kind:** fn

### `runRuntimeParityScenario`

```
export async function runRuntimeParityScenario(params: {
```

**Line:** 1135 | **Kind:** fn
