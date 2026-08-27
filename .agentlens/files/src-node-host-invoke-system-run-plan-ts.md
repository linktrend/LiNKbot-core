# src/node-host/invoke-system-run-plan.ts

[← Back to Module](../modules/src-node-host/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1178
- **Language:** TypeScript
- **Symbols:** 39
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 43 | type | ApprovedCwdSnapshot | pub | - |
| 161 | fn | normalizeOptionFlag | (private) | `function normalizeOptionFlag(token: string): st...` |
| 165 | fn | readTrimmedArgToken | (private) | `function readTrimmedArgToken(argv: readonly str...` |
| 181 | fn | isPosixShellOptionToken | (private) | `function isPosixShellOptionToken(token: string,...` |
| 185 | type | FileOperandCollection | (private) | - |
| 190 | fn | pathComponentsFromRootSync | (private) | `function pathComponentsFromRootSync(targetPath:...` |
| 204 | fn | isOwnedByCurrentProcessSync | (private) | `function isOwnedByCurrentProcessSync(candidate:...` |
| 215 | fn | isMutableByCurrentProcessSync | (private) | `function isMutableByCurrentProcessSync(candidat...` |
| 224 | fn | hasMutableSymlinkPathComponentSync | (private) | `function hasMutableSymlinkPathComponentSync(tar...` |
| 241 | fn | pathLooksMutableForShellPayloadSync | (private) | `function pathLooksMutableForShellPayloadSync(ta...` |
| 262 | fn | shouldPinExecutableForApproval | (private) | `function shouldPinExecutableForApproval(params: {` |
| 272 | fn | hashFileContentsSync | (private) | `function hashFileContentsSync(filePath: string)...` |
| 276 | fn | looksLikePathToken | (private) | `function looksLikePathToken(token: string): boo...` |
| 287 | fn | resolvesToExistingFileSync | (private) | `function resolvesToExistingFileSync(rawOperand:...` |
| 298 | fn | isKnownBinaryExecutableHeader | (private) | `function isKnownBinaryExecutableHeader(buffer: ...` |
| 326 | fn | isLikelyScriptLikePathSync | (private) | `function isLikelyScriptLikePathSync(targetPath:...` |
| 361 | fn | unwrapArgvForMutableOperand | (private) | `function unwrapArgvForMutableOperand(argv: stri...` |
| 395 | fn | resolvePosixShellScriptOperandIndex | (private) | `function resolvePosixShellScriptOperandIndex(ar...` |
| 438 | fn | resolveOptionFilteredFileOperandIndex | (private) | `function resolveOptionFilteredFileOperandIndex(...` |
| 471 | fn | resolveOptionFilteredPositionalIndex | (private) | `function resolveOptionFilteredPositionalIndex(p...` |
| 503 | fn | collectExistingFileOperandIndexes | (private) | `function collectExistingFileOperandIndexes(para...` |
| 553 | fn | resolveGenericInterpreterScriptOperandIndex | (private) | `function resolveGenericInterpreterScriptOperand...` |
| 570 | fn | resolveBunScriptOperandIndex | (private) | `function resolveBunScriptOperandIndex(params: {` |
| 600 | fn | resolveDenoRunScriptOperandIndex | (private) | `function resolveDenoRunScriptOperandIndex(param...` |
| 615 | fn | hasRubyUnsafeApprovalFlag | (private) | `function hasRubyUnsafeApprovalFlag(argv: string...` |
| 642 | fn | hasPerlUnsafeApprovalFlag | (private) | `function hasPerlUnsafeApprovalFlag(argv: string...` |
| 669 | fn | isMutableScriptRunner | (private) | `function isMutableScriptRunner(executable: stri...` |
| 677 | fn | resolveMutableFileOperandIndex | (private) | `function resolveMutableFileOperandIndex(argv: s...` |
| 732 | fn | shellPayloadNeedsStableBinding | (private) | `function shellPayloadNeedsStableBinding(shellCo...` |
| 762 | fn | requiresStableInterpreterApprovalBindingWithShellCommand | (private) | `function requiresStableInterpreterApprovalBindi...` |
| 787 | fn | pnpmDlxInvocationNeedsFailClosedBinding | (private) | `function pnpmDlxInvocationNeedsFailClosedBindin...` |
| 829 | fn | pnpmDlxTailNeedsFailClosedBinding | (private) | `function pnpmDlxTailNeedsFailClosedBinding(argv...` |
| 866 | fn | pnpmDlxTailMayNeedStableBinding | (private) | `function pnpmDlxTailMayNeedStableBinding(argv: ...` |
| 876 | fn | resolveMutableFileOperandSnapshotSync | pub | `export function resolveMutableFileOperandSnapsh...` |
| 932 | fn | resolveCanonicalApprovalCwdSync | (private) | `function resolveCanonicalApprovalCwdSync(cwd: s...` |
| 992 | fn | revalidateApprovedCwdSnapshot | pub | `export function revalidateApprovedCwdSnapshot(p...` |
| 1000 | fn | revalidateApprovedMutableFileOperand | pub | `export function revalidateApprovedMutableFileOp...` |
| 1026 | fn | hardenApprovedExecutionPaths | pub | `export function hardenApprovedExecutionPaths(pa...` |
| 1120 | fn | buildSystemRunApprovalPlan | pub | `export function buildSystemRunApprovalPlan(para...` |

## Public API

### `resolveMutableFileOperandSnapshotSync`

```
export function resolveMutableFileOperandSnapshotSync(params: {
```

**Line:** 876 | **Kind:** fn

### `revalidateApprovedCwdSnapshot`

```
export function revalidateApprovedCwdSnapshot(params: { snapshot: ApprovedCwdSnapshot }): boolean {
```

**Line:** 992 | **Kind:** fn

### `revalidateApprovedMutableFileOperand`

```
export function revalidateApprovedMutableFileOperand(params: {
```

**Line:** 1000 | **Kind:** fn

### `hardenApprovedExecutionPaths`

```
export function hardenApprovedExecutionPaths(params: {
```

**Line:** 1026 | **Kind:** fn

### `buildSystemRunApprovalPlan`

```
export function buildSystemRunApprovalPlan(params: {
```

**Line:** 1120 | **Kind:** fn
