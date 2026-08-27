# src/trajectory/export.ts

[← Back to Module](../modules/src-trajectory/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1219
- **Language:** TypeScript
- **Symbols:** 46
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 44 | type | BuildTrajectoryBundleParams | (private) | - |
| 56 | type | RuntimeTrajectoryContext | (private) | - |
| 61 | type | JsonRecord | (private) | - |
| 62 | type | TrajectoryExportRedaction | (private) | - |
| 66 | type | JsonlParseWarning | (private) | - |
| 70 | type | SessionEntryCandidateRow | (private) | - |
| 80 | fn | isFiniteNumber | (private) | `function isFiniteNumber(value: unknown): value ...` |
| 84 | fn | isSessionFileEntry | (private) | `function isSessionFileEntry(value: unknown): va...` |
| 95 | fn | formatSessionParseWarnings | (private) | `function formatSessionParseWarnings(` |
| 109 | fn | collectSessionEntries | (private) | `function collectSessionEntries(` |
| 135 | fn | migrateLegacySessionEntries | (private) | `function migrateLegacySessionEntries(entries: F...` |
| 180 | fn | readSessionEntries | (private) | `async function readSessionEntries(params: {` |
| 212 | fn | readSessionBranch | (private) | `async function readSessionBranch(params: {` |
| 291 | fn | parseJsonlFile | (private) | `async function parseJsonlFile<T>(` |
| 357 | fn | readRuntimeTrajectoryEvents | (private) | `async function readRuntimeTrajectoryEvents(para...` |
| 398 | fn | isRuntimeTrajectoryEvent | (private) | `function isRuntimeTrajectoryEvent(value: unknow...` |
| 415 | fn | summarizeJsonlWarnings | (private) | `function summarizeJsonlWarnings(warnings: Jsonl...` |
| 438 | fn | normalizeTimestamp | (private) | `function normalizeTimestamp(value: unknown): st...` |
| 454 | fn | resolveMessageEventType | (private) | `function resolveMessageEventType(message: Agent...` |
| 467 | fn | extractAssistantToolCalls | (private) | `function extractAssistantToolCalls(` |
| 501 | fn | sanitizeTrajectoryExportValue | (private) | `function sanitizeTrajectoryExportValue<T>(value...` |
| 505 | fn | buildTranscriptEvents | (private) | `function buildTranscriptEvents(params: {` |
| 515 | fn | push | (private) | `const push = (type: string, data?: Record<strin...` |
| 608 | fn | sortTrajectoryEvents | (private) | `function sortTrajectoryEvents(events: Trajector...` |
| 631 | fn | trajectoryJsonlFile | (private) | `function trajectoryJsonlFile(` |
| 641 | fn | redactTrajectoryBundleFileContent | (private) | `function redactTrajectoryBundleFileContent(` |
| 650 | fn | buildTrajectoryExportRedaction | (private) | `function buildTrajectoryExportRedaction(params: {` |
| 661 | fn | redactWorkspacePathString | (private) | `function redactWorkspacePathString(value: strin...` |
| 678 | fn | maybeRedactPathString | (private) | `function maybeRedactPathString(value: string, r...` |
| 694 | fn | redactLocalPathValues | (private) | `function redactLocalPathValues(value: unknown, ...` |
| 712 | fn | uniqueRedactedObjectKey | (private) | `function uniqueRedactedObjectKey(key: string, u...` |
| 726 | fn | redactTrajectoryExportObjectKeys | (private) | `function redactTrajectoryExportObjectKeys(` |
| 750 | fn | redactTrajectoryExportValue | (private) | `function redactTrajectoryExportValue(` |
| 758 | fn | redactEventForExport | (private) | `function redactEventForExport(` |
| 765 | fn | resolveRuntimeContext | (private) | `function resolveRuntimeContext(runtimeEvents: T...` |
| 781 | fn | resolveLatestRuntimeEventData | (private) | `function resolveLatestRuntimeEventData(` |
| 792 | fn | normalizePathForMatch | (private) | `function normalizePathForMatch(value: string): ...` |
| 796 | fn | collectPotentialPathStrings | (private) | `function collectPotentialPathStrings(value: unk...` |
| 798 | fn | visit | (private) | `const visit = (input: unknown) => {` |
| 825 | fn | markInvokedSkills | (private) | `function markInvokedSkills(params: { skills: un...` |
| 878 | fn | buildMetadataCapture | (private) | `function buildMetadataCapture(params: {` |
| 887 | fn | modelFallback | (private) | `const modelFallback = (() => {` |
| 922 | fn | buildArtifactsCapture | (private) | `function buildArtifactsCapture(params: {` |
| 972 | fn | buildPromptsCapture | (private) | `function buildPromptsCapture(params: {` |
| 1023 | fn | resolveDefaultTrajectoryExportDir | pub | `export function resolveDefaultTrajectoryExportD...` |
| 1040 | fn | exportTrajectoryBundle | pub | `export async function exportTrajectoryBundle(pa...` |

## Public API

### `resolveDefaultTrajectoryExportDir`

```
export function resolveDefaultTrajectoryExportDir(params: {
```

**Line:** 1023 | **Kind:** fn

### `exportTrajectoryBundle`

```
export async function exportTrajectoryBundle(params: BuildTrajectoryBundleParams): Promise<{
```

**Line:** 1040 | **Kind:** fn
