# extensions/matrix/src/cli.ts

[← Back to Module](../modules/extensions-matrix/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2325
- **Language:** TypeScript
- **Symbols:** 78
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 52 | fn | scheduleMatrixCliExit | (private) | `function scheduleMatrixCliExit(): void {` |
| 67 | fn | markCliFailure | (private) | `function markCliFailure(): void {` |
| 71 | fn | readMatrixCliRecoveryKeyFromStdin | (private) | `async function readMatrixCliRecoveryKeyFromStdi...` |
| 83 | fn | resolveMatrixCliRecoveryKeyInput | (private) | `async function resolveMatrixCliRecoveryKeyInput...` |
| 96 | fn | requireMatrixCliRecoveryKeyInput | (private) | `async function requireMatrixCliRecoveryKeyInput...` |
| 109 | fn | toErrorMessage | (private) | `function toErrorMessage(err: unknown): string {` |
| 113 | fn | printJson | (private) | `function printJson(payload: unknown): void {` |
| 117 | fn | formatLocalTimestamp | (private) | `function formatLocalTimestamp(value: string | n...` |
| 128 | fn | printTimestamp | (private) | `function printTimestamp(label: string, value: s...` |
| 135 | fn | printAccountLabel | (private) | `function printAccountLabel(accountId?: string):...` |
| 139 | fn | resolveMatrixCliAccountId | (private) | `function resolveMatrixCliAccountId(accountId?: ...` |
| 143 | fn | resolveMatrixCliAccountContext | (private) | `function resolveMatrixCliAccountContext(account...` |
| 154 | fn | formatMatrixCliCommand | (private) | `function formatMatrixCliCommand(command: string...` |
| 158 | fn | formatMatrixCliRecoveryKeyStdinCommand | (private) | `function formatMatrixCliRecoveryKeyStdinCommand...` |
| 167 | fn | formatMatrixCliCommandParts | (private) | `function formatMatrixCliCommandParts(parts: str...` |
| 181 | fn | formatMatrixCliShellArg | (private) | `function formatMatrixCliShellArg(value: string)...` |
| 188 | fn | formatMatrixCliText | (private) | `function formatMatrixCliText(value: string | nu...` |
| 192 | fn | printMatrixOwnDevices | (private) | `function printMatrixOwnDevices(` |
| 222 | fn | configureCliLogMode | (private) | `function configureCliLogMode(verbose: boolean):...` |
| 227 | fn | parseOptionalInt | (private) | `function parseOptionalInt(` |
| 253 | type | MatrixCliAccountAddResult | (private) | - |
| 280 | fn | addMatrixAccount | (private) | `async function addMatrixAccount(params: {` |
| 437 | fn | printDirectRoomCandidate | (private) | `function printDirectRoomCandidate(room: MatrixC...` |
| 449 | fn | printDirectRoomInspection | (private) | `function printDirectRoomInspection(result: Matr...` |
| 476 | fn | inspectMatrixDirectRoom | (private) | `async function inspectMatrixDirectRoom(params: {` |
| 506 | fn | repairMatrixDirectRoom | (private) | `async function repairMatrixDirectRoom(params: {` |
| 539 | fn | setMatrixProfile | (private) | `async function setMatrixProfile(params: {` |
| 563 | fn | runMatrixCliCommand | (private) | `async function runMatrixCliCommand<TResult>(` |
| 591 | type | MatrixCliBackupStatus | (private) | - |
| 601 | type | MatrixCliVerificationStatus | (private) | - |
| 621 | type | MatrixCliVerificationCommandOptions | (private) | - |
| 629 | type | MatrixCliSelfVerificationCommandOptions | (private) | - |
| 635 | type | MatrixCliVerificationSummary | (private) | - |
| 653 | type | MatrixCliVerificationSas | (private) | - |
| 658 | type | MatrixCliDirectRoomCandidate | (private) | - |
| 665 | type | MatrixCliDirectRoomInspection | (private) | - |
| 675 | type | MatrixCliDirectRoomRepair | (private) | - |
| 683 | type | MatrixCliVerificationBootstrap | (private) | - |
| 685 | type | MatrixCliEncryptionSetupResult | (private) | - |
| 693 | fn | isMatrixVerificationSetupComplete | (private) | `function isMatrixVerificationSetupComplete(stat...` |
| 704 | fn | buildNoopMatrixVerificationBootstrap | (private) | `function buildNoopMatrixVerificationBootstrap(` |
| 727 | fn | setupMatrixEncryption | (private) | `async function setupMatrixEncryption(params: {` |
| 788 | fn | toCliDirectRoomCandidate | (private) | `function toCliDirectRoomCandidate(room: MatrixD...` |
| 797 | fn | resolveBackupStatus | (private) | `function resolveBackupStatus(status: {` |
| 812 | fn | yesNoUnknown | (private) | `function yesNoUnknown(value: boolean | null): s...` |
| 822 | fn | printBackupStatus | (private) | `function printBackupStatus(backup: MatrixCliBac...` |
| 834 | fn | printVerificationIdentity | (private) | `function printVerificationIdentity(status: {` |
| 842 | fn | printVerificationBackupSummary | (private) | `function printVerificationBackupSummary(status: {` |
| 849 | fn | printVerificationBackupStatus | (private) | `function printVerificationBackupStatus(status: {` |
| 856 | fn | printVerificationTrustDiagnostics | (private) | `function printVerificationTrustDiagnostics(stat...` |
| 866 | fn | sanitizeMatrixCliText | (private) | `function sanitizeMatrixCliText(value: string): ...` |
| 948 | fn | isUnsafeMatrixCliTerminalCode | (private) | `function isUnsafeMatrixCliTerminalCode(code: nu...` |
| 958 | fn | isAnsiFinalByte | (private) | `function isAnsiFinalByte(code: number): boolean {` |
| 962 | fn | formatMatrixCliSasEmoji | (private) | `function formatMatrixCliSasEmoji(emoji: NonNull...` |
| 971 | fn | printMatrixVerificationSummary | (private) | `function printMatrixVerificationSummary(summary...` |
| 1004 | fn | printMatrixVerificationSummaries | (private) | `function printMatrixVerificationSummaries(summa...` |
| 1017 | fn | printMatrixVerificationSas | (private) | `function printMatrixVerificationSas(sas: Matrix...` |
| 1027 | fn | matrixCliVerificationDmLookupOptions | (private) | `function matrixCliVerificationDmLookupOptions(o...` |
| 1044 | fn | formatMatrixVerificationDmFollowupParts | (private) | `function formatMatrixVerificationDmFollowupPart...` |
| 1059 | fn | formatMatrixVerificationSummaryDmFollowupParts | (private) | `function formatMatrixVerificationSummaryDmFollo...` |
| 1068 | fn | formatMatrixVerificationOptionsDmFollowupParts | (private) | `function formatMatrixVerificationOptionsDmFollo...` |
| 1077 | fn | formatMatrixVerificationPreferredDmFollowupParts | (private) | `function formatMatrixVerificationPreferredDmFol...` |
| 1087 | fn | formatMatrixVerificationFollowupCommand | (private) | `function formatMatrixVerificationFollowupComman...` |
| 1099 | fn | printMatrixVerificationSasGuidance | (private) | `function printMatrixVerificationSasGuidance(` |
| 1111 | fn | formatMatrixVerificationCommandId | (private) | `function formatMatrixVerificationCommandId(summ...` |
| 1115 | fn | promptMatrixVerificationSasMatch | (private) | `async function promptMatrixVerificationSasMatch...` |
| 1129 | fn | printMatrixVerificationRequestGuidance | (private) | `function printMatrixVerificationRequestGuidance(` |
| 1143 | fn | runMatrixCliVerificationSummaryCommand | (private) | `async function runMatrixCliVerificationSummaryC...` |
| 1163 | fn | runMatrixCliSelfVerificationCommand | (private) | `async function runMatrixCliSelfVerificationComm...` |
| 1217 | fn | printVerificationGuidance | (private) | `function printVerificationGuidance(status: Matr...` |
| 1221 | fn | printBackupGuidance | (private) | `function printBackupGuidance(` |
| 1229 | fn | printBackupSummary | (private) | `function printBackupSummary(backup: MatrixCliBa...` |
| 1237 | fn | buildVerificationGuidance | (private) | `function buildVerificationGuidance(` |
| 1275 | fn | buildBackupGuidance | (private) | `function buildBackupGuidance(` |
| 1325 | fn | printGuidance | (private) | `function printGuidance(lines: string[]): void {` |
| 1335 | fn | printVerificationStatus | (private) | `function printVerificationStatus(` |
| 1367 | fn | printMatrixEncryptionSetupResult | (private) | `function printMatrixEncryptionSetupResult(` |
| 1394 | fn | registerMatrixCli | pub | `export function registerMatrixCli(params: { pro...` |

## Public API

### `registerMatrixCli`

```
export function registerMatrixCli(params: { program: Command }): void {
```

**Line:** 1394 | **Kind:** fn
