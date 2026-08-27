# src/logging/diagnostic-stability-bundle.ts

[← Back to Module](../modules/src-logging/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1424
- **Language:** TypeScript
- **Symbols:** 77
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | type | DiagnosticHeapSpaceSummary | (private) | - |
| 48 | type | DiagnosticHeapStatisticsSummary | (private) | - |
| 59 | type | DiagnosticActiveResourceSummary | (private) | - |
| 64 | type | DiagnosticCgroupMemorySummary | (private) | - |
| 70 | type | DiagnosticSessionFileSummary | (private) | - |
| 76 | type | DiagnosticMemoryPressureBundleEvidence | (private) | - |
| 90 | type | DiagnosticStabilityBundleEvidence | (private) | - |
| 94 | type | DiagnosticStabilityBundle | pub | - |
| 117 | type | WriteDiagnosticStabilityBundleResult | (private) | - |
| 122 | type | WriteDiagnosticStabilityBundleOptions | (private) | - |
| 134 | type | DiagnosticStabilityBundleLocationOptions | (private) | - |
| 139 | type | DiagnosticStabilityBundleFile | (private) | - |
| 144 | type | ReadDiagnosticStabilityBundleResult | pub | - |
| 149 | type | DiagnosticStabilityBundleFailureWriteOutcome | (private) | - |
| 154 | type | WriteDiagnosticStabilityBundleForFailureOptions | (private) | - |
| 159 | type | WriteDiagnosticMemoryPressureBundleOptions | (private) | - |
| 169 | fn | normalizeReason | (private) | `function normalizeReason(reason: string): string {` |
| 173 | fn | formatBundleTimestamp | (private) | `function formatBundleTimestamp(now: Date): stri...` |
| 177 | fn | readErrorCode | (private) | `function readErrorCode(error: unknown): string ...` |
| 191 | fn | readErrorName | (private) | `function readErrorName(error: unknown): string ...` |
| 199 | fn | readErrorMessage | (private) | `function readErrorMessage(error: unknown): stri...` |
| 216 | fn | readSafeErrorMetadata | (private) | `function readSafeErrorMetadata(error: unknown):...` |
| 230 | fn | resolveDiagnosticStabilityBundleDir | (private) | `function resolveDiagnosticStabilityBundleDir(` |
| 240 | fn | buildBundlePath | (private) | `function buildBundlePath(dir: string, now: Date...` |
| 247 | fn | isBundleFile | (private) | `function isBundleFile(name: string): boolean {` |
| 251 | fn | isMissingFileError | (private) | `function isMissingFileError(error: unknown): bo...` |
| 260 | fn | readObject | (private) | `function readObject(value: unknown, label: stri...` |
| 267 | fn | readNumber | (private) | `function readNumber(value: unknown, label: stri...` |
| 274 | fn | readOptionalPositiveInteger | (private) | `function readOptionalPositiveInteger(value: unk...` |
| 282 | fn | readTimestampMs | (private) | `function readTimestampMs(value: unknown, label:...` |
| 290 | fn | readOptionalNumber | (private) | `function readOptionalNumber(value: unknown, lab...` |
| 297 | fn | readString | (private) | `function readString(value: unknown, label: stri...` |
| 304 | fn | readTimestampString | (private) | `function readTimestampString(value: unknown, la...` |
| 312 | fn | readCodeString | (private) | `function readCodeString(value: unknown, label: ...` |
| 320 | fn | readOptionalCodeString | (private) | `function readOptionalCodeString(value: unknown,...` |
| 328 | fn | assignOptionalNumber | (private) | `function assignOptionalNumber(target: object, k...` |
| 335 | fn | assignOptionalPositiveInteger | (private) | `function assignOptionalPositiveInteger(` |
| 347 | fn | assignOptionalCodeString | (private) | `function assignOptionalCodeString(` |
| 359 | fn | readMemoryUsage | (private) | `function readMemoryUsage(value: unknown, label:...` |
| 370 | fn | readHeapStatistics | (private) | `function readHeapStatistics(value: unknown): Di...` |
| 427 | fn | readHeapSpaces | (private) | `function readHeapSpaces(value: unknown): Diagno...` |
| 473 | fn | readCgroupMemorySummary | (private) | `function readCgroupMemorySummary(value: unknown...` |
| 505 | fn | readActiveResources | (private) | `function readActiveResources(value: unknown): D...` |
| 518 | fn | readSessionFiles | (private) | `function readSessionFiles(value: unknown): Diag...` |
| 559 | fn | readMemoryPressureEvidence | (private) | `function readMemoryPressureEvidence(` |
| 613 | fn | readBundleEvidence | (private) | `function readBundleEvidence(value: unknown): Di...` |
| 622 | fn | readNumberMap | (private) | `function readNumberMap(value: unknown, label: s...` |
| 634 | fn | readOptionalMemorySummary | (private) | `function readOptionalMemorySummary(` |
| 662 | fn | readOptionalPayloadLargeSummary | (private) | `function readOptionalPayloadLargeSummary(` |
| 678 | fn | readStabilityEventRecord | (private) | `function readStabilityEventRecord(` |
| 834 | fn | readStabilitySnapshot | (private) | `function readStabilitySnapshot(value: unknown):...` |
| 869 | fn | parseDiagnosticStabilityBundle | (private) | `function parseDiagnosticStabilityBundle(value: ...` |
| 898 | fn | readPositiveMemoryFile | (private) | `function readPositiveMemoryFile(file: string): ...` |
| 910 | fn | readCgroupEventFile | (private) | `function readCgroupEventFile(file: string): Rec...` |
| 929 | fn | resolveCgroupV2MemoryDir | (private) | `function resolveCgroupV2MemoryDir(): string | u...` |
| 949 | fn | collectCgroupMemorySummary | (private) | `function collectCgroupMemorySummary(): Diagnost...` |
| 973 | fn | collectHeapStatistics | (private) | `function collectHeapStatistics(): DiagnosticHea...` |
| 991 | fn | collectHeapSpaces | (private) | `function collectHeapSpaces(): DiagnosticHeapSpa...` |
| 1006 | fn | collectActiveResources | (private) | `function collectActiveResources(): DiagnosticAc...` |
| 1028 | fn | sanitizeSessionEvidencePath | (private) | `function sanitizeSessionEvidencePath(relativePa...` |
| 1039 | fn | sanitizeSessionEvidenceFileName | (private) | `function sanitizeSessionEvidenceFileName(fileNa...` |
| 1052 | fn | visitDirentsBounded | (private) | `function visitDirentsBounded(` |
| 1080 | fn | pushSessionFileSummary | (private) | `function pushSessionFileSummary(` |
| 1108 | fn | scanSessionDirectory | (private) | `function scanSessionDirectory(params: {` |
| 1140 | fn | collectTopSessionFiles | (private) | `function collectTopSessionFiles(` |
| 1186 | fn | buildMemoryPressureEvidence | (private) | `function buildMemoryPressureEvidence(` |
| 1216 | fn | isMemoryPressureReason | (private) | `function isMemoryPressureReason(reason: string)...` |
| 1220 | fn | listDiagnosticStabilityBundleFilesSync | (private) | `function listDiagnosticStabilityBundleFilesSync(` |
| 1244 | fn | readDiagnosticStabilityBundleFileSync | pub | `export function readDiagnosticStabilityBundleFi...` |
| 1267 | fn | readLatestDiagnosticStabilityBundleSync | pub | `export function readLatestDiagnosticStabilityBu...` |
| 1284 | fn | pruneOldBundles | (private) | `function pruneOldBundles(dir: string, retention...` |
| 1316 | fn | writeDiagnosticStabilityBundleSync | pub | `export function writeDiagnosticStabilityBundleS...` |
| 1365 | fn | writeDiagnosticMemoryPressureBundleSync | pub | `export function writeDiagnosticMemoryPressureBu...` |
| 1376 | fn | writeDiagnosticStabilityBundleForFailureSync | pub | `export function writeDiagnosticStabilityBundleF...` |
| 1404 | fn | installDiagnosticStabilityFatalHook | pub | `export function installDiagnosticStabilityFatal...` |
| 1416 | fn | uninstallDiagnosticStabilityFatalHook | pub | `export function uninstallDiagnosticStabilityFat...` |
| 1421 | fn | resetDiagnosticStabilityBundleForTest | pub | `export function resetDiagnosticStabilityBundleF...` |

## Public API

### `readDiagnosticStabilityBundleFileSync`

```
export function readDiagnosticStabilityBundleFileSync(
```

**Line:** 1244 | **Kind:** fn

### `readLatestDiagnosticStabilityBundleSync`

```
export function readLatestDiagnosticStabilityBundleSync(
```

**Line:** 1267 | **Kind:** fn

### `writeDiagnosticStabilityBundleSync`

```
export function writeDiagnosticStabilityBundleSync(
```

**Line:** 1316 | **Kind:** fn

### `writeDiagnosticMemoryPressureBundleSync`

```
export function writeDiagnosticMemoryPressureBundleSync(
```

**Line:** 1365 | **Kind:** fn

### `writeDiagnosticStabilityBundleForFailureSync`

```
export function writeDiagnosticStabilityBundleForFailureSync(
```

**Line:** 1376 | **Kind:** fn

### `installDiagnosticStabilityFatalHook`

```
export function installDiagnosticStabilityFatalHook(
```

**Line:** 1404 | **Kind:** fn

### `uninstallDiagnosticStabilityFatalHook`

```
export function uninstallDiagnosticStabilityFatalHook(): void {
```

**Line:** 1416 | **Kind:** fn

### `resetDiagnosticStabilityBundleForTest`

```
export function resetDiagnosticStabilityBundleForTest(): void {
```

**Line:** 1421 | **Kind:** fn
