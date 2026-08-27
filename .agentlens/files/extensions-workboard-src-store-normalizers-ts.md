# extensions/workboard/src/store-normalizers.ts

[← Back to Module](../modules/extensions-workboard-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1399
- **Language:** TypeScript
- **Symbols:** 59
- **Public symbols:** 31

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 71 | fn | normalizeOptionalString | pub | `export function normalizeOptionalString(value: ...` |
| 75 | fn | normalizeBoardId | pub | `export function normalizeBoardId(value: unknown...` |
| 87 | fn | normalizeBoardIdRequired | pub | `export function normalizeBoardIdRequired(value:...` |
| 91 | fn | normalizeBoardMetadata | pub | `export function normalizeBoardMetadata(` |
| 131 | fn | normalizeOrchestration | (private) | `function normalizeOrchestration(` |
| 167 | fn | normalizeNotificationKinds | (private) | `function normalizeNotificationKinds(value: unkn...` |
| 188 | fn | normalizeNotificationSubscription | pub | `export function normalizeNotificationSubscription(` |
| 236 | fn | normalizeTitle | pub | `export function normalizeTitle(value: unknown):...` |
| 247 | fn | normalizeNotes | pub | `export function normalizeNotes(value: unknown):...` |
| 258 | fn | normalizeBoundedString | pub | `export function normalizeBoundedString(` |
| 274 | fn | normalizeStatus | pub | `export function normalizeStatus(value: unknown,...` |
| 284 | fn | normalizePriority | pub | `export function normalizePriority(value: unknow...` |
| 294 | fn | normalizeLabels | pub | `export function normalizeLabels(value: unknown,...` |
| 320 | fn | normalizeStringList | pub | `export function normalizeStringList(value: unkn...` |
| 345 | fn | normalizePosition | pub | `export function normalizePosition(value: unknow...` |
| 352 | fn | normalizePositiveInteger | (private) | `function normalizePositiveInteger(value: unknow...` |
| 362 | fn | normalizeWorkspace | (private) | `function normalizeWorkspace(` |
| 406 | fn | normalizeAutomation | pub | `export function normalizeAutomation(` |
| 476 | fn | deriveChildIdempotencyKey | pub | `export function deriveChildIdempotencyKey(` |
| 487 | fn | normalizeExecutionMode | (private) | `function normalizeExecutionMode(` |
| 500 | fn | normalizeExecutionStatus | (private) | `function normalizeExecutionStatus(` |
| 513 | fn | normalizeAttemptStatus | (private) | `function normalizeAttemptStatus(` |
| 526 | fn | normalizeLinkType | pub | `export function normalizeLinkType(value: unknow...` |
| 533 | fn | normalizeProofStatus | (private) | `function normalizeProofStatus(` |
| 546 | fn | normalizeTemplateId | pub | `export function normalizeTemplateId(value: unkn...` |
| 552 | fn | normalizeTimestamp | pub | `export function normalizeTimestamp(value: unkno...` |
| 558 | fn | normalizeEvent | (private) | `function normalizeEvent(value: unknown): Workbo...` |
| 594 | fn | normalizeEvents | pub | `export function normalizeEvents(value: unknown)...` |
| 604 | fn | normalizeAttempt | (private) | `function normalizeAttempt(value: unknown): Work...` |
| 637 | fn | normalizeComment | (private) | `function normalizeComment(value: unknown): Work...` |
| 652 | fn | normalizeLink | (private) | `function normalizeLink(value: unknown): Workboa...` |
| 678 | fn | isDependencyLink | (private) | `function isDependencyLink(link: WorkboardLink):...` |
| 682 | fn | normalizeProof | (private) | `function normalizeProof(value: unknown): Workbo...` |
| 707 | fn | normalizeArtifact | pub | `export function normalizeArtifact(value: unknow...` |
| 731 | fn | normalizeAttachment | (private) | `function normalizeAttachment(value: unknown): W...` |
| 760 | fn | normalizeWorkerLog | (private) | `function normalizeWorkerLog(value: unknown): Wo...` |
| 787 | fn | normalizeWorkerProtocol | (private) | `function normalizeWorkerProtocol(` |
| 815 | fn | normalizeAttachmentInput | pub | `export function normalizeAttachmentInput(` |
| 860 | fn | normalizeClaim | (private) | `function normalizeClaim(value: unknown, fallbac...` |
| 885 | fn | normalizeDiagnosticAction | (private) | `function normalizeDiagnosticAction(value: unkno...` |
| 902 | fn | normalizeDiagnostic | (private) | `function normalizeDiagnostic(value: unknown): W...` |
| 942 | fn | normalizeNotification | (private) | `function normalizeNotification(value: unknown):...` |
| 970 | fn | normalizeProofInput | pub | `export function normalizeProofInput(input: Work...` |
| 986 | fn | completionProofConflicts | (private) | `function completionProofConflicts(existing: Wor...` |
| 992 | fn | appendCompletionProof | pub | `export function appendCompletionProof(` |
| 1024 | fn | normalizeMetadata | pub | `export function normalizeMetadata(` |
| 1147 | fn | normalizeExecution | pub | `export function normalizeExecution(value: unkno...` |
| 1179 | fn | syncExecutionSessionKey | pub | `export function syncExecutionSessionKey(` |
| 1193 | fn | removeUndefinedExecutionFields | (private) | `function removeUndefinedExecutionFields(executi...` |
| 1210 | fn | removeUndefinedAutomationFields | (private) | `function removeUndefinedAutomationFields(automa...` |
| 1240 | fn | removeUndefinedMetadataFields | pub | `export function removeUndefinedMetadataFields(m...` |
| 1273 | fn | clearDiagnostics | pub | `export function clearDiagnostics(` |
| 1286 | fn | metadataIsEmpty | pub | `export function metadataIsEmpty(metadata: Workb...` |
| 1290 | fn | metadataByteSize | (private) | `function metadataByteSize(metadata: WorkboardMe...` |
| 1294 | fn | dropFirst | (private) | `function dropFirst<T>(items: readonly T[] | und...` |
| 1302 | fn | dropFirstProofExcept | (private) | `function dropFirstProofExcept(` |
| 1317 | fn | dropFirstNonDependencyLink | (private) | `function dropFirstNonDependencyLink(` |
| 1331 | fn | appendLinkPreservingDependencies | pub | `export function appendLinkPreservingDependencies(` |
| 1346 | fn | trimMetadataToBudget | pub | `export function trimMetadataToBudget(` |

## Public API

### `normalizeOptionalString`

```
export function normalizeOptionalString(value: unknown): string | undefined {
```

**Line:** 71 | **Kind:** fn

### `normalizeBoardId`

```
export function normalizeBoardId(value: unknown, fallback?: string): string | undefined {
```

**Line:** 75 | **Kind:** fn

### `normalizeBoardIdRequired`

```
export function normalizeBoardIdRequired(value: unknown): string {
```

**Line:** 87 | **Kind:** fn

### `normalizeBoardMetadata`

```
export function normalizeBoardMetadata(
```

**Line:** 91 | **Kind:** fn

### `normalizeNotificationSubscription`

```
export function normalizeNotificationSubscription(
```

**Line:** 188 | **Kind:** fn

### `normalizeTitle`

```
export function normalizeTitle(value: unknown): string {
```

**Line:** 236 | **Kind:** fn

### `normalizeNotes`

```
export function normalizeNotes(value: unknown): string | undefined {
```

**Line:** 247 | **Kind:** fn

### `normalizeBoundedString`

```
export function normalizeBoundedString(
```

**Line:** 258 | **Kind:** fn

### `normalizeStatus`

```
export function normalizeStatus(value: unknown, fallback: WorkboardStatus): WorkboardStatus {
```

**Line:** 274 | **Kind:** fn

### `normalizePriority`

```
export function normalizePriority(value: unknown, fallback: WorkboardPriority): WorkboardPriority {
```

**Line:** 284 | **Kind:** fn

### `normalizeLabels`

```
export function normalizeLabels(value: unknown, fallback: string[] = []): string[] {
```

**Line:** 294 | **Kind:** fn

### `normalizeStringList`

```
export function normalizeStringList(value: unknown, fieldName: string, maxLength = 80): string[] {
```

**Line:** 320 | **Kind:** fn

### `normalizePosition`

```
export function normalizePosition(value: unknown, fallback: number): number {
```

**Line:** 345 | **Kind:** fn

### `normalizeAutomation`

```
export function normalizeAutomation(
```

**Line:** 406 | **Kind:** fn

### `deriveChildIdempotencyKey`

```
export function deriveChildIdempotencyKey(
```

**Line:** 476 | **Kind:** fn

### `normalizeLinkType`

```
export function normalizeLinkType(value: unknown, fallback: WorkboardLinkType): WorkboardLinkType {
```

**Line:** 526 | **Kind:** fn

### `normalizeTemplateId`

```
export function normalizeTemplateId(value: unknown): WorkboardTemplateId | undefined {
```

**Line:** 546 | **Kind:** fn

### `normalizeTimestamp`

```
export function normalizeTimestamp(value: unknown, fallback: number): number {
```

**Line:** 552 | **Kind:** fn

### `normalizeEvents`

```
export function normalizeEvents(value: unknown): WorkboardEvent[] {
```

**Line:** 594 | **Kind:** fn

### `normalizeArtifact`

```
export function normalizeArtifact(value: unknown): WorkboardArtifact | null {
```

**Line:** 707 | **Kind:** fn

### `normalizeAttachmentInput`

```
export function normalizeAttachmentInput(
```

**Line:** 815 | **Kind:** fn

### `normalizeProofInput`

```
export function normalizeProofInput(input: WorkboardProofInput, now: number): WorkboardProof {
```

**Line:** 970 | **Kind:** fn

### `appendCompletionProof`

```
export function appendCompletionProof(
```

**Line:** 992 | **Kind:** fn

### `normalizeMetadata`

```
export function normalizeMetadata(
```

**Line:** 1024 | **Kind:** fn

### `normalizeExecution`

```
export function normalizeExecution(value: unknown): WorkboardExecution | undefined {
```

**Line:** 1147 | **Kind:** fn

### `syncExecutionSessionKey`

```
export function syncExecutionSessionKey(
```

**Line:** 1179 | **Kind:** fn

### `removeUndefinedMetadataFields`

```
export function removeUndefinedMetadataFields(metadata: WorkboardMetadata): WorkboardMetadata {
```

**Line:** 1240 | **Kind:** fn

### `clearDiagnostics`

```
export function clearDiagnostics(
```

**Line:** 1273 | **Kind:** fn

### `metadataIsEmpty`

```
export function metadataIsEmpty(metadata: WorkboardMetadata | undefined): boolean {
```

**Line:** 1286 | **Kind:** fn

### `appendLinkPreservingDependencies`

```
export function appendLinkPreservingDependencies(
```

**Line:** 1331 | **Kind:** fn

### `trimMetadataToBudget`

```
export function trimMetadataToBudget(
```

**Line:** 1346 | **Kind:** fn
