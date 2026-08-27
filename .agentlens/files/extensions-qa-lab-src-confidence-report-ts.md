# extensions/qa-lab/src/confidence-report.ts

[← Back to Module](../modules/extensions-qa-lab/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1303
- **Language:** TypeScript
- **Symbols:** 58
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 36 | type | QaConfidenceVerdict | (private) | - |
| 38 | type | QaConfidenceLaneKind | (private) | - |
| 47 | type | QaConfidenceManifestLane | (private) | - |
| 65 | type | QaConfidenceManifest | (private) | - |
| 71 | type | QaConfidenceLaneStatus | (private) | - |
| 73 | type | QaConfidenceLaneResult | (private) | - |
| 93 | type | QaConfidenceReport | (private) | - |
| 113 | type | QaConfidenceSelfTestCanary | (private) | - |
| 128 | type | QaConfidenceSelfTestSummary | (private) | - |
| 144 | fn | readString | (private) | `function readString(value: unknown): string | u...` |
| 148 | fn | readNumber | (private) | `function readNumber(value: unknown): number | u...` |
| 152 | fn | readCount | (private) | `function readCount(value: unknown): number | un...` |
| 156 | fn | readBoolean | (private) | `function readBoolean(value: unknown): boolean |...` |
| 160 | fn | readStringArray | (private) | `function readStringArray(value: unknown): strin...` |
| 168 | fn | isGatewayLogSentinelFinding | (private) | `function isGatewayLogSentinelFinding(value: unk...` |
| 177 | fn | collectGatewayLogSentinels | (private) | `function collectGatewayLogSentinels(value: unkn...` |
| 179 | fn | visit | (private) | `const visit = (candidate: unknown) => {` |
| 206 | fn | isQaConfidenceVerdict | (private) | `function isQaConfidenceVerdict(value: string): ...` |
| 210 | fn | readRequiredString | (private) | `function readRequiredString(record: Record<stri...` |
| 218 | fn | readVerdict | (private) | `function readVerdict(value: unknown, key: strin...` |
| 231 | fn | readLaneKind | (private) | `function readLaneKind(value: unknown): QaConfid...` |
| 247 | fn | normalizeManifestLane | (private) | `function normalizeManifestLane(value: unknown):...` |
| 296 | fn | normalizeQaConfidenceManifest | (private) | `function normalizeQaConfidenceManifest(value: u...` |
| 325 | fn | readQaConfidenceManifestFile | pub | `export async function readQaConfidenceManifestF...` |
| 342 | fn | resolveArtifactPath | (private) | `function resolveArtifactPath(artifactRoot: stri...` |
| 346 | fn | readJsonFile | (private) | `async function readJsonFile(filePath: string): ...` |
| 350 | fn | isMissingFileError | (private) | `function isMissingFileError(error: unknown): bo...` |
| 354 | fn | statusFromPassed | (private) | `function statusFromPassed(passed: boolean): Pic...` |
| 358 | type | QaConfidenceLaneEvaluation | (private) | - |
| 366 | fn | evaluateQaSuiteSummary | (private) | `function evaluateQaSuiteSummary(payload: unknow...` |
| 544 | fn | evaluatePassSummary | (private) | `function evaluatePassSummary(payload: unknown):...` |
| 582 | fn | evaluateTokenEfficiencySummary | (private) | `function evaluateTokenEfficiencySummary(` |
| 614 | fn | evaluateJsonlReplaySummary | (private) | `function evaluateJsonlReplaySummary(payload: un...` |
| 677 | fn | evaluateSelfTestSummary | (private) | `function evaluateSelfTestSummary(payload: unkno...` |
| 719 | fn | evaluateLaneArtifact | (private) | `function evaluateLaneArtifact(` |
| 744 | fn | resultForMissingLane | (private) | `function resultForMissingLane(` |
| 763 | fn | baseLaneResult | (private) | `function baseLaneResult(` |
| 786 | fn | classifiedFailureResult | (private) | `function classifiedFailureResult(` |
| 807 | fn | evaluatedFailureResult | (private) | `function evaluatedFailureResult(` |
| 823 | fn | evaluateLane | (private) | `async function evaluateLane(` |
| 856 | fn | applySkipBackfillState | (private) | `function applySkipBackfillState(` |
| 876 | fn | countLaneResults | (private) | `function countLaneResults(lanes: readonly QaCon...` |
| 887 | fn | failuresForLaneResults | (private) | `function failuresForLaneResults(lanes: readonly...` |
| 893 | fn | globalFailuresForLaneResults | (private) | `function globalFailuresForLaneResults(lanes: re...` |
| 914 | fn | buildQaConfidenceReport | pub | `export async function buildQaConfidenceReport(p...` |
| 952 | fn | formatVerdict | (private) | `function formatVerdict(lane: QaConfidenceLaneRe...` |
| 956 | fn | escapeTableCell | (private) | `function escapeTableCell(value: string): string {` |
| 960 | fn | renderQaConfidenceMarkdownReport | pub | `export function renderQaConfidenceMarkdownRepor...` |
| 993 | fn | syntheticRuntimeCell | (private) | `function syntheticRuntimeCell(` |
| 1013 | fn | syntheticToolCall | (private) | `function syntheticToolCall(overrides: Partial<R...` |
| 1022 | fn | detectRuntimeDrift | (private) | `async function detectRuntimeDrift(params: {` |
| 1038 | fn | syntheticPromptReport | (private) | `function syntheticPromptReport(` |
| 1070 | fn | detectHarnessDrift | (private) | `function detectHarnessDrift(params: {` |
| 1094 | fn | detectTokenEfficiencyRegression | (private) | `function detectTokenEfficiencyRegression(): boo...` |
| 1126 | fn | detectJsonlReplayDrift | (private) | `function detectJsonlReplayDrift(): boolean {` |
| 1139 | fn | buildQaConfidenceSelfTestSummary | (private) | `async function buildQaConfidenceSelfTestSummary(` |
| 1272 | fn | renderQaConfidenceSelfTestMarkdownReport | (private) | `function renderQaConfidenceSelfTestMarkdownRepo...` |
| 1290 | fn | writeQaConfidenceSelfTestArtifacts | pub | `export async function writeQaConfidenceSelfTest...` |

## Public API

### `readQaConfidenceManifestFile`

```
export async function readQaConfidenceManifestFile(
```

**Line:** 325 | **Kind:** fn

### `buildQaConfidenceReport`

```
export async function buildQaConfidenceReport(params: {
```

**Line:** 914 | **Kind:** fn

### `renderQaConfidenceMarkdownReport`

```
export function renderQaConfidenceMarkdownReport(report: QaConfidenceReport): string {
```

**Line:** 960 | **Kind:** fn

### `writeQaConfidenceSelfTestArtifacts`

```
export async function writeQaConfidenceSelfTestArtifacts(params: {
```

**Line:** 1290 | **Kind:** fn
