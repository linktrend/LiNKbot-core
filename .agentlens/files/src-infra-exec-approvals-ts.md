# src/infra/exec-approvals.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2902
- **Language:** TypeScript
- **Symbols:** 172
- **Public symbols:** 75

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 61 | type | ExecHost | pub | - |
| 62 | type | ExecTarget | pub | - |
| 63 | type | ExecSecurity | pub | - |
| 64 | type | ExecAsk | pub | - |
| 65 | type | ExecMode | pub | - |
| 69 | fn | normalizeExecHost | pub | `export function normalizeExecHost(value?: strin...` |
| 77 | fn | normalizeExecTarget | pub | `export function normalizeExecTarget(value?: str...` |
| 85 | fn | requireValidExecTarget | pub | `export function requireValidExecTarget(value?: ...` |
| 112 | fn | normalizeExecSecurity | pub | `export function normalizeExecSecurity(value?: s...` |
| 120 | fn | normalizeExecAsk | pub | `export function normalizeExecAsk(value?: string...` |
| 128 | fn | normalizeExecMode | pub | `export function normalizeExecMode(value?: strin...` |
| 142 | fn | resolveExecModeFromPolicy | pub | `export function resolveExecModeFromPolicy(param...` |
| 158 | fn | resolveExecPolicyForMode | pub | `export function resolveExecPolicyForMode(mode: ...` |
| 179 | fn | resolveExecModePolicy | pub | `export function resolveExecModePolicy(params: {` |
| 203 | type | SystemRunApprovalBinding | pub | - |
| 211 | type | SystemRunApprovalFileOperand | pub | - |
| 217 | type | SystemRunApprovalPlan | pub | - |
| 228 | type | ExecApprovalCommandSpan | pub | - |
| 233 | type | ExecApprovalRequestPayload | pub | - |
| 263 | type | ExecApprovalRequest | pub | - |
| 270 | type | ExecApprovalResolved | pub | - |
| 278 | type | ExecApprovalsDefaults | pub | - |
| 285 | type | ExecApprovalsAgent | pub | - |
| 292 | type | ExecApprovalsFile | pub | - |
| 302 | type | ExecApprovalsSnapshot | pub | - |
| 310 | type | ExecApprovalsResolved | pub | - |
| 356 | fn | getExecApprovalsProcessStartTime | (private) | `function getExecApprovalsProcessStartTime(): nu...` |
| 365 | fn | hashExecApprovalsRaw | (private) | `function hashExecApprovalsRaw(raw: string | nul...` |
| 371 | fn | hashExecApprovalsFile | (private) | `function hashExecApprovalsFile(file: ExecApprov...` |
| 375 | fn | isExecApprovalsTargetMissing | (private) | `function isExecApprovalsTargetMissing(filePath:...` |
| 387 | fn | isExecApprovalsLockMissing | (private) | `function isExecApprovalsLockMissing(filePath: s...` |
| 399 | fn | resolveExecApprovalsStateDir | (private) | `function resolveExecApprovalsStateDir(env: Node...` |
| 417 | fn | resolveExecApprovalsPath | pub | `export function resolveExecApprovalsPath(): str...` |
| 421 | fn | resolveExecApprovalsSocketPath | pub | `export function resolveExecApprovalsSocketPath(...` |
| 425 | fn | resolveExecApprovalsDisplayPath | pub | `export function resolveExecApprovalsDisplayPath...` |
| 432 | fn | resolveExecApprovalsTranscriptPath | pub | `export function resolveExecApprovalsTranscriptP...` |
| 438 | fn | createFailClosedExecApprovalsFallback | (private) | `function createFailClosedExecApprovalsFallback(...` |
| 451 | fn | hasValidExecApprovalPolicyFields | (private) | `function hasValidExecApprovalPolicyFields(value...` |
| 463 | fn | isValidPersistedExecAllowlistEntry | (private) | `function isValidPersistedExecAllowlistEntry(val...` |
| 482 | fn | isValidPersistedExecHostAdapterBinding | (private) | `function isValidPersistedExecHostAdapterBinding...` |
| 497 | fn | isValidExecHostAdapterEnvironment | (private) | `function isValidExecHostAdapterEnvironment(valu...` |
| 517 | fn | isValidPersistedExecApprovals | (private) | `function isValidPersistedExecApprovals(value: u...` |
| 555 | fn | parsePersistedExecApprovals | (private) | `function parsePersistedExecApprovals(raw: strin...` |
| 568 | fn | normalizeAllowlistPattern | (private) | `function normalizeAllowlistPattern(value: strin...` |
| 573 | fn | mergeLegacyAgent | (private) | `function mergeLegacyAgent(` |
| 579 | fn | pushEntry | (private) | `const pushEntry = (entry: ExecAllowlistEntry) => {` |
| 609 | fn | ensureDir | (private) | `function ensureDir(filePath: string) {` |
| 627 | fn | resolveCanonicalExecApprovalsTarget | (private) | `function resolveCanonicalExecApprovalsTarget(fi...` |
| 632 | fn | assertNoExecApprovalsSymlinkParents | (private) | `function assertNoExecApprovalsSymlinkParents(ta...` |
| 646 | class | UnsafeExecApprovalsPathError | (private) | - |
| 648 | fn | assertSafeExecApprovalsStat | (private) | `function assertSafeExecApprovalsStat(filePath: ...` |
| 661 | fn | assertSafeExecApprovalsDestination | (private) | `function assertSafeExecApprovalsDestination(fil...` |
| 671 | fn | assertSafeExecApprovalsOverwriteFallback | (private) | `function assertSafeExecApprovalsOverwriteFallba...` |
| 685 | type | ExecApprovalsFallbackDestination | (private) | - |
| 691 | fn | sameFilesystemEntry | (private) | `function sameFilesystemEntry(left: fs.Stats, ri...` |
| 695 | type | ExecApprovalsRawState | (private) | - |
| 697 | fn | readExecApprovalsRawState | (private) | `function readExecApprovalsRawState(filePath: st...` |
| 761 | fn | readExecApprovalsSnapshotFromPath | (private) | `function readExecApprovalsSnapshotFromPath(file...` |
| 781 | fn | readExecApprovalsFallbackSnapshotFromFd | (private) | `function readExecApprovalsFallbackSnapshotFromF...` |
| 796 | fn | validateExecApprovalsFallbackFd | (private) | `function validateExecApprovalsFallbackFd(filePa...` |
| 815 | fn | openExistingExecApprovalsFallbackDestination | (private) | `function openExistingExecApprovalsFallbackDesti...` |
| 837 | fn | createExecApprovalsFallbackDestination | (private) | `function createExecApprovalsFallbackDestination(` |
| 866 | fn | openExecApprovalsFallbackDestination | (private) | `function openExecApprovalsFallbackDestination(f...` |
| 877 | fn | writeExecApprovalsFallbackBuffer | (private) | `function writeExecApprovalsFallbackBuffer(fd: n...` |
| 891 | fn | restoreExecApprovalsFallbackDestination | (private) | `function restoreExecApprovalsFallbackDestination(` |
| 912 | fn | copyExecApprovalsFallback | (private) | `function copyExecApprovalsFallback(tempPath: st...` |
| 935 | fn | renameExecApprovalsWithFallback | (private) | `function renameExecApprovalsWithFallback(tempPa...` |
| 953 | fn | coerceAllowlistEntries | (private) | `function coerceAllowlistEntries(allowlist: unkn...` |
| 982 | fn | ensureAllowlistIds | (private) | `function ensureAllowlistIds(` |
| 999 | fn | stripAllowlistCommandText | (private) | `function stripAllowlistCommandText(` |
| 1017 | fn | sanitizeExecApprovalPolicy | (private) | `function sanitizeExecApprovalPolicy(` |
| 1035 | fn | sanitizeExecHostAdapterBindings | (private) | `function sanitizeExecHostAdapterBindings(value:...` |
| 1055 | fn | normalizeExecApprovals | pub | `export function normalizeExecApprovals(file: Ex...` |
| 1110 | fn | mergeExecApprovalsSocketDefaults | pub | `export function mergeExecApprovalsSocketDefault...` |
| 1128 | fn | generateToken | (private) | `function generateToken(): string {` |
| 1132 | fn | readExecApprovalsSnapshotUnlocked | (private) | `function readExecApprovalsSnapshotUnlocked(): E...` |
| 1137 | fn | readExecApprovalsSnapshot | pub | `export function readExecApprovalsSnapshot(): Ex...` |
| 1146 | fn | loadExecApprovalsUnlocked | (private) | `function loadExecApprovalsUnlocked(): ExecAppro...` |
| 1155 | fn | loadExecApprovals | pub | `export function loadExecApprovals(): ExecApprov...` |
| 1165 | fn | loadExecApprovalsAsync | pub | `export async function loadExecApprovalsAsync():...` |
| 1177 | type | ExecApprovalsSyncLock | (private) | - |
| 1185 | fn | readLockPayload | (private) | `function readLockPayload(raw: string): Record<s...` |
| 1196 | fn | readExecApprovalsLockState | (private) | `function readExecApprovalsLockState(lockPath: s...` |
| 1215 | fn | sleepExecApprovalsSyncLockRetry | (private) | `function sleepExecApprovalsSyncLockRetry(): void {` |
| 1226 | fn | removeOwnedExecApprovalsLock | (private) | `function removeOwnedExecApprovalsLock(` |
| 1244 | fn | acquireExecApprovalsLockSync | (private) | `function acquireExecApprovalsLockSync(filePath:...` |
| 1311 | fn | withExecApprovalsLockSync | (private) | `function withExecApprovalsLockSync<T>(fn: () =>...` |
| 1321 | fn | withExecApprovalsReadLockSync | (private) | `function withExecApprovalsReadLockSync<T>(fileP...` |
| 1335 | fn | saveExecApprovalsUnlocked | (private) | `function saveExecApprovalsUnlocked(file: ExecAp...` |
| 1341 | type | ExecApprovalsUpdate | (private) | - |
| 1346 | fn | updateExecApprovalsUnlocked | (private) | `function updateExecApprovalsUnlocked(params: Ex...` |
| 1367 | fn | updateExecApprovalsSync | (private) | `function updateExecApprovalsSync(params: ExecAp...` |
| 1371 | fn | saveExecApprovals | pub | `export function saveExecApprovals(file: ExecApp...` |
| 1375 | fn | enqueueExecApprovalsLock | (private) | `function enqueueExecApprovalsLock<T>(filePath: ...` |
| 1391 | fn | withExecApprovalsLock | (private) | `async function withExecApprovalsLock<T>(fn: () ...` |
| 1401 | fn | withExecApprovalsReadLock | (private) | `async function withExecApprovalsReadLock<T>(fil...` |
| 1412 | fn | updateExecApprovals | pub | `export async function updateExecApprovals(` |
| 1418 | fn | hardenUnchangedExecApprovals | (private) | `function hardenUnchangedExecApprovals(filePath:...` |
| 1441 | fn | writeExecApprovalsRaw | (private) | `function writeExecApprovalsRaw(filePath: string...` |
| 1467 | fn | restoreExecApprovalsSnapshotUnlocked | (private) | `function restoreExecApprovalsSnapshotUnlocked(s...` |
| 1477 | fn | restoreExecApprovalsSnapshot | pub | `export function restoreExecApprovalsSnapshot(sn...` |
| 1481 | fn | restoreExecApprovalsSnapshotLocked | pub | `export async function restoreExecApprovalsSnaps...` |
| 1494 | fn | ensureExecApprovalsSocket | (private) | `function ensureExecApprovalsSocket(file: ExecAp...` |
| 1507 | fn | requireInitializedExecApprovals | (private) | `function requireInitializedExecApprovals(` |
| 1516 | fn | ensureExecApprovalsSnapshot | pub | `export async function ensureExecApprovalsSnapsh...` |
| 1522 | fn | ensureExecApprovals | pub | `export function ensureExecApprovals(): ExecAppr...` |
| 1528 | fn | readExecApprovalsForNoPersistenceUnlocked | (private) | `function readExecApprovalsForNoPersistenceUnloc...` |
| 1539 | fn | isExecSecurity | (private) | `function isExecSecurity(value: unknown): value ...` |
| 1543 | fn | isExecAsk | (private) | `function isExecAsk(value: unknown): value is Ex...` |
| 1547 | fn | normalizeSecurity | (private) | `function normalizeSecurity(value: unknown, fall...` |
| 1551 | fn | normalizeAsk | (private) | `function normalizeAsk(value: unknown, fallback:...` |
| 1560 | fn | resolveDefaultSecurityField | (private) | `function resolveDefaultSecurityField(params: {` |
| 1578 | fn | resolveDefaultAskField | (private) | `function resolveDefaultAskField(params: {` |
| 1594 | fn | resolveAgentSecurityField | (private) | `function resolveAgentSecurityField(params: {` |
| 1632 | fn | resolveAgentAskField | (private) | `function resolveAgentAskField(params: {` |
| 1666 | type | ExecApprovalsDefaultOverrides | pub | - |
| 1674 | fn | shapeResolvedExecApprovals | (private) | `function shapeResolvedExecApprovals(params: {` |
| 1695 | fn | resolveExecApprovalsWithoutSocket | (private) | `function resolveExecApprovalsWithoutSocket(para...` |
| 1708 | fn | resolveExecApprovals | pub | `export function resolveExecApprovals(` |
| 1737 | fn | resolveExecApprovalsLocked | pub | `export async function resolveExecApprovalsLocked(` |
| 1765 | fn | resolveExecApprovalsFromFile | pub | `export function resolveExecApprovalsFromFile(pa...` |
| 1864 | fn | requiresExecApproval | pub | `export function requiresExecApproval(params: {` |
| 1884 | fn | normalizeCommandName | (private) | `function normalizeCommandName(value: string | u...` |
| 1888 | fn | textMentionsSecurityAuditSuppressions | (private) | `function textMentionsSecurityAuditSuppressions(...` |
| 1898 | fn | isReadOnlySecurityAuditSuppressionInspection | (private) | `function isReadOnlySecurityAuditSuppressionInsp...` |
| 1930 | fn | removeParsedSegmentText | (private) | `function removeParsedSegmentText(` |
| 1945 | fn | commandRequiresSecurityAuditSuppressionApproval | pub | `export function commandRequiresSecurityAuditSup...` |
| 1972 | fn | hasDurableExecApproval | pub | `export function hasDurableExecApproval(params: {` |
| 1993 | fn | buildDurableCommandApprovalPattern | (private) | `function buildDurableCommandApprovalPattern(com...` |
| 1997 | fn | buildNodeCommandApprovalPattern | (private) | `function buildNodeCommandApprovalPattern(comman...` |
| 2001 | fn | hasNodeCommandAllowAlwaysMarker | pub | `export function hasNodeCommandAllowAlwaysMarker...` |
| 2015 | fn | hasExactCommandDurableExecApproval | pub | `export function hasExactCommandDurableExecAppro...` |
| 2032 | type | DurableExecApprovalRequirement | (private) | - |
| 2035 | fn | resolveDurableExecApprovalRequirement | pub | `export function resolveDurableExecApprovalRequi...` |
| 2051 | fn | hasSegmentDurableExecApproval | (private) | `function hasSegmentDurableExecApproval(params: {` |
| 2062 | fn | buildAllowlistEntryMatchKey | (private) | `function buildAllowlistEntryMatchKey(` |
| 2068 | fn | buildExecApprovalPolicyRuleKey | (private) | `function buildExecApprovalPolicyRuleKey(` |
| 2075 | fn | buildAllowAlwaysUpgradeRuleKey | (private) | `function buildAllowAlwaysUpgradeRuleKey(` |
| 2085 | fn | createExecApprovalPolicySnapshot | pub | `export function createExecApprovalPolicySnapsho...` |
| 2114 | fn | isExecApprovalPolicySnapshotCurrent | pub | `export function isExecApprovalPolicySnapshotCur...` |
| 2138 | type | ExecApprovalUsageAuthorization | pub | - |
| 2149 | fn | assertCurrentUsageAuthorization | (private) | `function assertCurrentUsageAuthorization(params: {` |
| 2251 | fn | replaceExecApprovalsSnapshot | (private) | `function replaceExecApprovalsSnapshot(target: E...` |
| 2270 | fn | recordAllowlistUse | pub | `export function recordAllowlistUse(` |
| 2286 | fn | recordAllowlistMatchesUse | pub | `export function recordAllowlistMatchesUse(param...` |
| 2305 | fn | applyRecordedAllowlistUse | (private) | `function applyRecordedAllowlistUse(params: {` |
| 2328 | fn | applyRecordedAllowlistMetadata | (private) | `function applyRecordedAllowlistMetadata(params: {` |
| 2375 | fn | commitExecAuthorizationLocked | pub | `export async function commitExecAuthorizationLo...` |
| 2427 | fn | applyAllowlistEntryUpdate | (private) | `function applyAllowlistEntryUpdate(params: {` |
| 2482 | fn | addAllowlistEntry | pub | `export function addAllowlistEntry(` |
| 2505 | fn | addDurableCommandApproval | pub | `export function addDurableCommandApproval(` |
| 2519 | fn | resolveAllowAlwaysPatternCoverage | pub | `export function resolveAllowAlwaysPatternCovera...` |
| 2566 | fn | persistAllowAlwaysPatterns | pub | `export function persistAllowAlwaysPatterns(para...` |
| 2590 | type | AllowAlwaysPersistenceReason | pub | - |
| 2596 | type | AllowAlwaysPersistenceDecision | pub | - |
| 2601 | fn | hasRuntimeShellPayload | (private) | `function hasRuntimeShellPayload(argv: readonly ...` |
| 2611 | fn | resolvePlanPersistenceState | (private) | `function resolvePlanPersistenceState(plan: Exec...` |
| 2653 | fn | resolveAllowAlwaysPersistenceDecision | pub | `export function resolveAllowAlwaysPersistenceDe...` |
| 2704 | fn | persistAllowAlwaysDecision | pub | `export function persistAllowAlwaysDecision(para...` |
| 2726 | fn | applyAllowAlwaysDecision | (private) | `function applyAllowAlwaysDecision(params: {` |
| 2776 | fn | minSecurity | pub | `export function minSecurity(a: ExecSecurity, b:...` |
| 2781 | fn | maxAsk | pub | `export function maxAsk(a: ExecAsk, b: ExecAsk):...` |
| 2786 | type | ExecApprovalDecision | pub | - |
| 2795 | type | ExecApprovalUnavailableDecision | pub | - |
| 2801 | fn | isOptionalExecApprovalDecision | (private) | `function isOptionalExecApprovalDecision(` |
| 2807 | fn | collectExecApprovalUnavailableDecisionSet | (private) | `function collectExecApprovalUnavailableDecision...` |
| 2822 | fn | normalizeExecApprovalUnavailableDecisions | pub | `export function normalizeExecApprovalUnavailabl...` |
| 2829 | fn | resolveExecApprovalAllowedDecisions | pub | `export function resolveExecApprovalAllowedDecis...` |
| 2840 | fn | resolveExecApprovalUnavailableDecisions | pub | `export function resolveExecApprovalUnavailableD...` |
| 2848 | fn | resolveExecApprovalRequestAllowedDecisions | pub | `export function resolveExecApprovalRequestAllow...` |
| 2864 | fn | isExecApprovalDecisionAllowed | pub | `export function isExecApprovalDecisionAllowed(p...` |
| 2871 | fn | requestExecApprovalViaSocket | pub | `export async function requestExecApprovalViaSoc...` |

## Public API

### `normalizeExecHost`

```
export function normalizeExecHost(value?: string | null): ExecHost | null {
```

**Line:** 69 | **Kind:** fn

### `normalizeExecTarget`

```
export function normalizeExecTarget(value?: string | null): ExecTarget | null {
```

**Line:** 77 | **Kind:** fn

### `requireValidExecTarget`

```
export function requireValidExecTarget(value?: unknown): ExecTarget | null {
```

**Line:** 85 | **Kind:** fn

### `normalizeExecSecurity`

```
export function normalizeExecSecurity(value?: string | null): ExecSecurity | null {
```

**Line:** 112 | **Kind:** fn

### `normalizeExecAsk`

```
export function normalizeExecAsk(value?: string | null): ExecAsk | null {
```

**Line:** 120 | **Kind:** fn

### `normalizeExecMode`

```
export function normalizeExecMode(value?: string | null): ExecMode | null {
```

**Line:** 128 | **Kind:** fn

### `resolveExecModeFromPolicy`

```
export function resolveExecModeFromPolicy(params: {
```

**Line:** 142 | **Kind:** fn

### `resolveExecPolicyForMode`

```
export function resolveExecPolicyForMode(mode: ExecMode): {
```

**Line:** 158 | **Kind:** fn

### `resolveExecModePolicy`

```
export function resolveExecModePolicy(params: {
```

**Line:** 179 | **Kind:** fn

### `resolveExecApprovalsPath`

```
export function resolveExecApprovalsPath(): string {
```

**Line:** 417 | **Kind:** fn

### `resolveExecApprovalsSocketPath`

```
export function resolveExecApprovalsSocketPath(): string {
```

**Line:** 421 | **Kind:** fn

### `resolveExecApprovalsDisplayPath`

```
export function resolveExecApprovalsDisplayPath(): string {
```

**Line:** 425 | **Kind:** fn

### `resolveExecApprovalsTranscriptPath`

```
export function resolveExecApprovalsTranscriptPath(): string {
```

**Line:** 432 | **Kind:** fn

### `normalizeExecApprovals`

```
export function normalizeExecApprovals(file: ExecApprovalsFile): ExecApprovalsFile {
```

**Line:** 1055 | **Kind:** fn

### `mergeExecApprovalsSocketDefaults`

```
export function mergeExecApprovalsSocketDefaults(params: {
```

**Line:** 1110 | **Kind:** fn

### `readExecApprovalsSnapshot`

```
export function readExecApprovalsSnapshot(): ExecApprovalsSnapshot {
```

**Line:** 1137 | **Kind:** fn

### `loadExecApprovals`

```
export function loadExecApprovals(): ExecApprovalsFile {
```

**Line:** 1155 | **Kind:** fn

### `loadExecApprovalsAsync`

```
export async function loadExecApprovalsAsync(): Promise<ExecApprovalsFile> {
```

**Line:** 1165 | **Kind:** fn

### `saveExecApprovals`

```
export function saveExecApprovals(file: ExecApprovalsFile): void {
```

**Line:** 1371 | **Kind:** fn

### `updateExecApprovals`

```
export async function updateExecApprovals(
```

**Line:** 1412 | **Kind:** fn

### `restoreExecApprovalsSnapshot`

```
export function restoreExecApprovalsSnapshot(snapshot: ExecApprovalsSnapshot): void {
```

**Line:** 1477 | **Kind:** fn

### `restoreExecApprovalsSnapshotLocked`

```
export async function restoreExecApprovalsSnapshotLocked(
```

**Line:** 1481 | **Kind:** fn

### `ensureExecApprovalsSnapshot`

```
export async function ensureExecApprovalsSnapshot(): Promise<ExecApprovalsSnapshot> {
```

**Line:** 1516 | **Kind:** fn

### `ensureExecApprovals`

```
export function ensureExecApprovals(): ExecApprovalsFile {
```

**Line:** 1522 | **Kind:** fn

### `resolveExecApprovals`

```
export function resolveExecApprovals(
```

**Line:** 1708 | **Kind:** fn

### `resolveExecApprovalsLocked`

```
export async function resolveExecApprovalsLocked(
```

**Line:** 1737 | **Kind:** fn

### `resolveExecApprovalsFromFile`

```
export function resolveExecApprovalsFromFile(params: {
```

**Line:** 1765 | **Kind:** fn

### `requiresExecApproval`

```
export function requiresExecApproval(params: {
```

**Line:** 1864 | **Kind:** fn

### `commandRequiresSecurityAuditSuppressionApproval`

```
export function commandRequiresSecurityAuditSuppressionApproval(params: {
```

**Line:** 1945 | **Kind:** fn

### `hasDurableExecApproval`

```
export function hasDurableExecApproval(params: {
```

**Line:** 1972 | **Kind:** fn

### `hasNodeCommandAllowAlwaysMarker`

```
export function hasNodeCommandAllowAlwaysMarker(params: {
```

**Line:** 2001 | **Kind:** fn

### `hasExactCommandDurableExecApproval`

```
export function hasExactCommandDurableExecApproval(params: {
```

**Line:** 2015 | **Kind:** fn

### `resolveDurableExecApprovalRequirement`

```
export function resolveDurableExecApprovalRequirement(params: {
```

**Line:** 2035 | **Kind:** fn

### `createExecApprovalPolicySnapshot`

```
export function createExecApprovalPolicySnapshot(params: {
```

**Line:** 2085 | **Kind:** fn

### `isExecApprovalPolicySnapshotCurrent`

```
export function isExecApprovalPolicySnapshotCurrent(
```

**Line:** 2114 | **Kind:** fn

### `recordAllowlistUse`

```
export function recordAllowlistUse(
```

**Line:** 2270 | **Kind:** fn

### `recordAllowlistMatchesUse`

```
export function recordAllowlistMatchesUse(params: {
```

**Line:** 2286 | **Kind:** fn

### `commitExecAuthorizationLocked`

```
export async function commitExecAuthorizationLocked(params: {
```

**Line:** 2375 | **Kind:** fn

### `addAllowlistEntry`

```
export function addAllowlistEntry(
```

**Line:** 2482 | **Kind:** fn

### `addDurableCommandApproval`

```
export function addDurableCommandApproval(
```

**Line:** 2505 | **Kind:** fn

### `resolveAllowAlwaysPatternCoverage`

```
export function resolveAllowAlwaysPatternCoverage(params: {
```

**Line:** 2519 | **Kind:** fn

### `persistAllowAlwaysPatterns`

```
export function persistAllowAlwaysPatterns(params: {
```

**Line:** 2566 | **Kind:** fn

### `resolveAllowAlwaysPersistenceDecision`

```
export function resolveAllowAlwaysPersistenceDecision(params: {
```

**Line:** 2653 | **Kind:** fn

### `persistAllowAlwaysDecision`

```
export function persistAllowAlwaysDecision(params: {
```

**Line:** 2704 | **Kind:** fn

### `minSecurity`

```
export function minSecurity(a: ExecSecurity, b: ExecSecurity): ExecSecurity {
```

**Line:** 2776 | **Kind:** fn

### `maxAsk`

```
export function maxAsk(a: ExecAsk, b: ExecAsk): ExecAsk {
```

**Line:** 2781 | **Kind:** fn

### `normalizeExecApprovalUnavailableDecisions`

```
export function normalizeExecApprovalUnavailableDecisions(
```

**Line:** 2822 | **Kind:** fn

### `resolveExecApprovalAllowedDecisions`

```
export function resolveExecApprovalAllowedDecisions(params?: {
```

**Line:** 2829 | **Kind:** fn

### `resolveExecApprovalUnavailableDecisions`

```
export function resolveExecApprovalUnavailableDecisions(params?: {
```

**Line:** 2840 | **Kind:** fn

### `resolveExecApprovalRequestAllowedDecisions`

```
export function resolveExecApprovalRequestAllowedDecisions(params?: {
```

**Line:** 2848 | **Kind:** fn

### `isExecApprovalDecisionAllowed`

```
export function isExecApprovalDecisionAllowed(params: {
```

**Line:** 2864 | **Kind:** fn

### `requestExecApprovalViaSocket`

```
export async function requestExecApprovalViaSocket(params: {
```

**Line:** 2871 | **Kind:** fn
