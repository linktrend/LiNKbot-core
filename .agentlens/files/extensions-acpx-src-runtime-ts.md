# extensions/acpx/src/runtime.ts

[← Back to Module](../modules/extensions-acpx-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1558
- **Language:** TypeScript
- **Symbols:** 73
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 48 | type | AcpSessionStore | (private) | - |
| 49 | type | AcpSessionRecord | (private) | - |
| 50 | type | AcpLoadedSessionRecord | (private) | - |
| 51 | type | BaseAcpxRuntimeTestOptions | (private) | - |
| 52 | type | OpenClawAcpxRuntimeOptions | (private) | - |
| 59 | type | AcpxRuntimeTestOptions | (private) | - |
| 62 | type | OpenClawRuntimeTurnInput | (private) | - |
| 63 | type | OpenClawRuntimeEnsureInput | (private) | - |
| 64 | type | OpenClawRuntimeHandle | (private) | - |
| 65 | type | AcpxDelegateEnsureInput | (private) | - |
| 66 | type | AcpxMcpServer | (private) | - |
| 72 | type | ResetAwareSessionStore | (private) | - |
| 76 | type | OpenClawLeaseSessionMetadata | (private) | - |
| 81 | fn | withOpenClawManagedTurnTimeout | (private) | `function withOpenClawManagedTurnTimeout<T exten...` |
| 90 | fn | withOpenClawLeaseSessionMetadata | (private) | `function withOpenClawLeaseSessionMetadata<T ext...` |
| 101 | type | AcpxLaunchLeaseContext | (private) | - |
| 112 | fn | safeDiagnosticFilePart | (private) | `function safeDiagnosticFilePart(value: string):...` |
| 116 | fn | codexWrapperStderrLogFileName | (private) | `function codexWrapperStderrLogFileName(leaseId:...` |
| 120 | fn | compactDiagnosticText | (private) | `function compactDiagnosticText(value: string): ...` |
| 124 | fn | isGenericInternalAcpErrorMessage | (private) | `function isGenericInternalAcpErrorMessage(messa...` |
| 128 | fn | isGenericInternalAcpError | (private) | `function isGenericInternalAcpError(error: unkno...` |
| 135 | fn | readCodexWrapperStderrTail | (private) | `async function readCodexWrapperStderrTail(param...` |
| 155 | fn | readSessionRecordName | (private) | `function readSessionRecordName(record: unknown)...` |
| 163 | fn | readRecordAgentCommand | (private) | `function readRecordAgentCommand(record: unknown...` |
| 171 | fn | readRecordCwd | (private) | `function readRecordCwd(record: unknown): string...` |
| 179 | fn | readRecordResetOnNextEnsure | (private) | `function readRecordResetOnNextEnsure(record: un...` |
| 190 | fn | readRecordAgentPid | (private) | `function readRecordAgentPid(record: unknown): n...` |
| 205 | fn | readOpenClawLeaseIdFromRecord | (private) | `function readOpenClawLeaseIdFromRecord(record: ...` |
| 213 | fn | readOpenClawGatewayInstanceIdFromRecord | (private) | `function readOpenClawGatewayInstanceIdFromRecor...` |
| 223 | fn | extractGeneratedWrapperPath | (private) | `function extractGeneratedWrapperPath(command: s...` |
| 234 | fn | selectCurrentSessionLease | (private) | `function selectCurrentSessionLease(params: {` |
| 253 | fn | createResetAwareSessionStore | (private) | `function createResetAwareSessionStore(` |
| 359 | type | CodexAcpModelOverride | (private) | - |
| 364 | type | CodexAcpModelClassification | (private) | - |
| 368 | fn | normalizeAgentName | (private) | `function normalizeAgentName(value: string | und...` |
| 373 | fn | readAgentFromSessionKey | (private) | `function readAgentFromSessionKey(sessionKey: st...` |
| 382 | fn | readAgentFromHandle | (private) | `function readAgentFromHandle(handle: AcpRuntime...` |
| 393 | fn | readAgentCommandFromRecord | (private) | `function readAgentCommandFromRecord(record: Acp...` |
| 397 | fn | readAgentPidFromRecord | (private) | `function readAgentPidFromRecord(record: AcpLoad...` |
| 401 | fn | basename | (private) | `function basename(value: string): string {` |
| 405 | fn | isEnvAssignment | (private) | `function isEnvAssignment(value: string): boolean {` |
| 409 | fn | unwrapEnvCommand | (private) | `function unwrapEnvCommand(parts: string[]): str...` |
| 425 | fn | matchesExecutableName | (private) | `function matchesExecutableName(value: string, e...` |
| 430 | fn | matchesPackageSpec | (private) | `function matchesPackageSpec(value: string, pack...` |
| 435 | fn | stripModuleExtension | (private) | `function stripModuleExtension(value: string): s...` |
| 439 | fn | isAcpCommand | (private) | `function isAcpCommand(` |
| 464 | fn | isOpenClawBridgeCommand | (private) | `function isOpenClawBridgeCommand(command: strin...` |
| 479 | fn | isCodexAcpCommand | (private) | `function isCodexAcpCommand(command: string | un...` |
| 486 | fn | isClaudeAcpCommand | (private) | `function isClaudeAcpCommand(command: string | u...` |
| 495 | fn | isCursorAcpCommand | (private) | `function isCursorAcpCommand(command: string | u...` |
| 512 | fn | stripCursorAcpModelFlag | (private) | `function stripCursorAcpModelFlag(command: strin...` |
| 530 | fn | readCursorAcpModelFlag | (private) | `function readCursorAcpModelFlag(command: string...` |
| 547 | fn | appendCursorAcpModelFlag | (private) | `function appendCursorAcpModelFlag(command: stri...` |
| 559 | fn | failUnsupportedCodexAcpModel | (private) | `function failUnsupportedCodexAcpModel(rawModel:...` |
| 574 | fn | assertSupportedRuntimeSessionMode | (private) | `function assertSupportedRuntimeSessionMode(` |
| 587 | fn | failUnsupportedCodexAcpThinking | (private) | `function failUnsupportedCodexAcpThinking(rawThi...` |
| 594 | fn | normalizeCodexAcpReasoningEffort | (private) | `function normalizeCodexAcpReasoningEffort(rawTh...` |
| 605 | fn | isCodexAcpReasoningEffortAlias | (private) | `function isCodexAcpReasoningEffortAlias(value: ...` |
| 610 | fn | classifyCodexAcpModelRequest | (private) | `function classifyCodexAcpModelRequest(` |
| 660 | fn | withCodexSessionModel | (private) | `function withCodexSessionModel<T extends { mode...` |
| 673 | fn | normalizeClaudeAcpModelOverride | (private) | `function normalizeClaudeAcpModelOverride(rawMod...` |
| 684 | fn | withAcpxSessionOptions | (private) | `function withAcpxSessionOptions(input: OpenClaw...` |
| 695 | fn | isAcpModelCapabilityMissingError | (private) | `function isAcpModelCapabilityMissingError(error...` |
| 701 | fn | ensureDelegateSessionWithModelFallback | (private) | `async function ensureDelegateSessionWithModelFa...` |
| 715 | fn | quoteShellArg | (private) | `function quoteShellArg(value: string): string {` |
| 722 | fn | appendCodexAcpConfigOverrides | (private) | `function appendCodexAcpConfigOverrides(command:...` |
| 733 | fn | createModelScopedAgentRegistry | (private) | `function createModelScopedAgentRegistry(params: {` |
| 757 | fn | resolveAgentCommand | (private) | `function resolveAgentCommand(params: {` |
| 769 | fn | shouldUseBridgeSafeDelegateForCommand | (private) | `function shouldUseBridgeSafeDelegateForCommand(...` |
| 773 | fn | shouldUseDistinctBridgeDelegate | (private) | `function shouldUseDistinctBridgeDelegate(option...` |
| 778 | fn | withManagedToolsMcpSessionEnv | (private) | `function withManagedToolsMcpSessionEnv(params: {` |
| 815 | class | AcpxRuntime | pub | - |
| 1310 | fn | readCodexTurnFailureStderr | (private) | `const readCodexTurnFailureStderr = () =>` |

## Public API
