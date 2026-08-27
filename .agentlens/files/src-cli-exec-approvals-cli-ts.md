# src/cli/exec-approvals-cli.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1314
- **Language:** TypeScript
- **Symbols:** 70
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 46 | type | FileExecApprovalsSnapshot | (private) | - |
| 54 | type | NativeExecApprovalAction | (private) | - |
| 55 | type | NativeExecApprovalRule | (private) | - |
| 62 | type | NativeExecApprovalPolicy | (private) | - |
| 66 | type | NativeExecApprovalsSnapshot | (private) | - |
| 76 | type | ExecApprovalsSnapshot | (private) | - |
| 78 | type | ConfigSnapshotLike | (private) | - |
| 81 | type | ConfigLoadResult | (private) | - |
| 85 | type | ApprovalsTargetSource | (private) | - |
| 86 | type | EffectivePolicyReport | (private) | - |
| 93 | type | ExecApprovalsCliOpts | (private) | - |
| 102 | type | PendingApprovalCliEntry | (private) | - |
| 118 | fn | readStdin | (private) | `async function readStdin(` |
| 129 | fn | readApprovalsFile | (private) | `async function readApprovalsFile(filePath: stri...` |
| 142 | fn | resolveTargetNodeId | (private) | `async function resolveTargetNodeId(opts: ExecAp...` |
| 153 | fn | loadSnapshot | (private) | `async function loadSnapshot(` |
| 163 | fn | loadSnapshotLocal | (private) | `function loadSnapshotLocal(): ExecApprovalsSnap...` |
| 173 | fn | isFileApprovalsSnapshot | (private) | `function isFileApprovalsSnapshot(` |
| 179 | fn | isNativeApprovalsSnapshot | (private) | `function isNativeApprovalsSnapshot(` |
| 185 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 189 | fn | parseNativeAction | (private) | `function parseNativeAction(value: unknown, labe...` |
| 196 | fn | normalizeNativePolicyInput | (private) | `function normalizeNativePolicyInput(value: unkn...` |
| 273 | fn | saveSnapshotLocal | (private) | `async function saveSnapshotLocal(` |
| 291 | fn | loadSnapshotTarget | (private) | `async function loadSnapshotTarget(opts: ExecApp...` |
| 304 | fn | exitWithError | (private) | `function exitWithError(message: string): never {` |
| 310 | fn | requireTrimmedNonEmpty | (private) | `function requireTrimmedNonEmpty(value: string, ...` |
| 318 | fn | loadWritableSnapshotTarget | (private) | `async function loadWritableSnapshotTarget(opts:...` |
| 345 | type | SaveSnapshotTargetedParams | (private) | - |
| 353 | fn | saveSnapshotTargeted | (private) | `async function saveSnapshotTargeted(params: Sav...` |
| 378 | fn | formatCliError | (private) | `function formatCliError(err: unknown): string {` |
| 385 | fn | isApprovalDecision | (private) | `function isApprovalDecision(value: string): val...` |
| 389 | fn | shortenPendingApprovalSummary | (private) | `function shortenPendingApprovalSummary(value: s...` |
| 396 | fn | escapeApprovalTextForTerminal | (private) | `function escapeApprovalTextForTerminal(value: s...` |
| 423 | fn | formatApprovalIdForTerminal | (private) | `function formatApprovalIdForTerminal(value: str...` |
| 430 | fn | decodeDisplayedApprovalId | (private) | `function decodeDisplayedApprovalId(value: strin...` |
| 442 | fn | readPendingApprovalEntry | (private) | `function readPendingApprovalEntry(` |
| 496 | fn | readPendingApprovalList | (private) | `function readPendingApprovalList(value: unknown...` |
| 506 | fn | loadPendingApprovals | (private) | `async function loadPendingApprovals(` |
| 511 | fn | listCall | (private) | `const listCall = (method: string) =>` |
| 525 | fn | formatPendingAgentSession | (private) | `function formatPendingAgentSession(entry: Pendi...` |
| 532 | fn | renderPendingApprovals | (private) | `function renderPendingApprovals(entries: Pendin...` |
| 571 | fn | approvalRecordedDecision | (private) | `function approvalRecordedDecision(approval: App...` |
| 575 | fn | formatResolver | (private) | `function formatResolver(approval: ApprovalResol...` |
| 585 | fn | describeTerminalApprovalFailure | (private) | `function describeTerminalApprovalFailure(approv...` |
| 596 | fn | resolvePendingApproval | (private) | `async function resolvePendingApproval(` |
| 625 | fn | lookupOne | (private) | `const lookupOne = async (id: string, tolerateNo...` |
| 721 | fn | loadConfigForApprovalsTarget | (private) | `async function loadConfigForApprovalsTarget(par...` |
| 746 | fn | buildEffectivePolicyReport | (private) | `function buildEffectivePolicyReport(params: {` |
| 812 | fn | renderEffectivePolicy | (private) | `function renderEffectivePolicy(params: { report...` |
| 814 | fn | heading | (private) | `const heading = (text: string) => (rich ? theme...` |
| 815 | fn | muted | (private) | `const muted = (text: string) => (rich ? theme.m...` |
| 849 | fn | renderApprovalsSnapshot | (private) | `function renderApprovalsSnapshot(snapshot: Exec...` |
| 855 | fn | heading | (private) | `const heading = (text: string) => (rich ? theme...` |
| 856 | fn | muted | (private) | `const muted = (text: string) => (rich ? theme.m...` |
| 936 | fn | renderNativeApprovalsSnapshot | (private) | `function renderNativeApprovalsSnapshot(snapshot...` |
| 938 | fn | heading | (private) | `const heading = (text: string) => (rich ? theme...` |
| 939 | fn | muted | (private) | `const muted = (text: string) => (rich ? theme.m...` |
| 989 | fn | saveSnapshot | (private) | `async function saveSnapshot(` |
| 1001 | fn | resolveAgentKey | (private) | `function resolveAgentKey(value?: string | null)...` |
| 1006 | fn | normalizeAllowlistEntry | (private) | `function normalizeAllowlistEntry(entry: { patte...` |
| 1011 | fn | ensureAgent | (private) | `function ensureAgent(file: ExecApprovalsFile, a...` |
| 1018 | fn | isEmptyAgent | (private) | `function isEmptyAgent(agent: ExecApprovalsAgent...` |
| 1029 | fn | loadWritableAllowlistAgent | (private) | `async function loadWritableAllowlistAgent(opts:...` |
| 1056 | type | WritableAllowlistAgentContext | (private) | - |
| 1059 | type | AllowlistMutation | (private) | - |
| 1061 | fn | runAllowlistMutation | (private) | `async function runAllowlistMutation(` |
| 1087 | fn | registerAllowlistMutationCommand | (private) | `function registerAllowlistMutationCommand(param...` |
| 1106 | fn | registerExecApprovalsCli | pub | `export function registerExecApprovalsCli(progra...` |
| 1107 | fn | formatExample | (private) | `const formatExample = (cmd: string, desc: strin...` |
| 1178 | fn | muted | (private) | `const muted = (text: string) => (isRich() ? the...` |

## Public API

### `registerExecApprovalsCli`

```
export function registerExecApprovalsCli(program: Command) {
```

**Line:** 1106 | **Kind:** fn
