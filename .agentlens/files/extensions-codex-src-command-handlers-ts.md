# extensions/codex/src/command-handlers.ts

[← Back to Module](../modules/extensions-codex/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2680
- **Language:** TypeScript
- **Symbols:** 100
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 100 | type | CodexCommandDeps | (private) | - |
| 121 | type | CodexCommandDepsOverride | pub | - |
| 124 | type | CodexControlRequestFn | (private) | - |
| 131 | type | SafeCodexControlRequestFn | (private) | - |
| 138 | type | ListCodexCliSessionsOnNodeFn | (private) | - |
| 142 | type | ResolveCodexCliSessionForBindingOnNodeFn | (private) | - |
| 169 | type | ParsedBindArgs | (private) | - |
| 177 | type | ParsedComputerUseArgs | (private) | - |
| 185 | type | ParsedCodexCliSessionsArgs | (private) | - |
| 192 | type | ParsedResumeArgs | (private) | - |
| 199 | type | ParsedDiagnosticsArgs | (private) | - |
| 205 | type | CodexDiagnosticsCandidate | (private) | - |
| 254 | fn | buildCodexSubcommandPickerReply | (private) | `function buildCodexSubcommandPickerReply(): Plu...` |
| 287 | fn | buildCodexFastMenuReply | (private) | `function buildCodexFastMenuReply(): PluginComma...` |
| 311 | fn | buildCodexPermissionsMenuReply | (private) | `function buildCodexPermissionsMenuReply(): Plug...` |
| 335 | fn | buildCodexComputerUseMenuReply | (private) | `function buildCodexComputerUseMenuReply(): Plug...` |
| 364 | fn | isMenuVerb | (private) | `function isMenuVerb(rest: readonly string[]): b...` |
| 368 | fn | handleCodexSubcommand | pub | `export async function handleCodexSubcommand(` |
| 579 | fn | isCurrentSessionModelSelectionLocked | (private) | `function isCurrentSessionModelSelectionLocked(c...` |
| 597 | fn | resolveCodexNativeCommandSandboxBlock | (private) | `function resolveCodexNativeCommandSandboxBlock(` |
| 628 | fn | isReadOnlyCodexGoalCommand | (private) | `function isReadOnlyCodexGoalCommand(subcommand:...` |
| 636 | fn | returnsBeforeNativeCodexExecution | (private) | `function returnsBeforeNativeCodexExecution(subc...` |
| 663 | fn | isCodexCliNodeResumeBind | (private) | `function isCodexCliNodeResumeBind(subcommand: s...` |
| 671 | fn | returnsBeforeNativeCodexResume | (private) | `function returnsBeforeNativeCodexResume(args: r...` |
| 683 | fn | handleComputerUseCommand | (private) | `async function handleComputerUseCommand(` |
| 716 | fn | bindConversation | (private) | `async function bindConversation(` |
| 803 | fn | detachConversation | (private) | `async function detachConversation(` |
| 825 | fn | describeConversationBinding | (private) | `async function describeConversationBinding(` |
| 859 | fn | buildThreads | (private) | `async function buildThreads(` |
| 878 | fn | handleNativeGoal | (private) | `async function handleNativeGoal(` |
| 963 | fn | formatNativeGoal | (private) | `function formatNativeGoal(response: JsonValue |...` |
| 979 | fn | buildCodexCliSessions | (private) | `async function buildCodexCliSessions(deps: Code...` |
| 993 | fn | resumeThread | (private) | `async function resumeThread(` |
| 1096 | fn | bindCodexCliNodeSession | (private) | `async function bindCodexCliNodeSession(` |
| 1154 | fn | stopConversationTurn | (private) | `async function stopConversationTurn(` |
| 1174 | fn | steerConversationTurn | (private) | `async function steerConversationTurn(` |
| 1196 | fn | setConversationModel | (private) | `async function setConversationModel(` |
| 1230 | fn | setConversationFastMode | (private) | `async function setConversationFastMode(` |
| 1254 | fn | setConversationPermissions | (private) | `async function setConversationPermissions(` |
| 1278 | type | CodexConversationControlTarget | (private) | - |
| 1285 | fn | resolveControlTarget | (private) | `async function resolveControlTarget(` |
| 1313 | type | CommandAppServerScope | (private) | - |
| 1318 | fn | resolveCommandAppServerScope | (private) | `async function resolveCommandAppServerScope(` |
| 1352 | fn | conversationBindingIdentity | (private) | `function conversationBindingIdentity(bindingId:...` |
| 1356 | fn | resolveCodexConversationControlScope | (private) | `function resolveCodexConversationControlScope(c...` |
| 1371 | fn | handleCodexDiagnosticsFeedback | (private) | `async function handleCodexDiagnosticsFeedback(` |
| 1406 | fn | requestCodexDiagnosticsFeedbackApproval | (private) | `async function requestCodexDiagnosticsFeedbackA...` |
| 1487 | fn | previewCodexDiagnosticsFeedbackApproval | (private) | `async function previewCodexDiagnosticsFeedbackA...` |
| 1519 | fn | confirmCodexDiagnosticsFeedback | (private) | `async function confirmCodexDiagnosticsFeedback(` |
| 1562 | fn | cancelCodexDiagnosticsFeedback | (private) | `function cancelCodexDiagnosticsFeedback(ctx: Pl...` |
| 1588 | fn | sendCodexDiagnosticsFeedbackForContext | (private) | `async function sendCodexDiagnosticsFeedbackForC...` |
| 1607 | fn | sendCodexDiagnosticsFeedbackForTargets | (private) | `async function sendCodexDiagnosticsFeedbackForT...` |
| 1682 | fn | hasAnyCodexDiagnosticsIdentity | (private) | `async function hasAnyCodexDiagnosticsIdentity(c...` |
| 1689 | fn | resolveCodexDiagnosticsTargets | (private) | `async function resolveCodexDiagnosticsTargets(` |
| 1752 | fn | resolvePendingCodexDiagnosticsTargets | (private) | `async function resolvePendingCodexDiagnosticsTa...` |
| 1768 | fn | resolveCodexDiagnosticsTarget | (private) | `function resolveCodexDiagnosticsTarget(` |
| 1814 | fn | codexDiagnosticsTargetsMatch | (private) | `function codexDiagnosticsTargetsMatch(` |
| 1818 | fn | fingerprint | (private) | `const fingerprint = (target: CodexDiagnosticsTa...` |
| 1836 | fn | formatCodexDiagnosticsUploadResult | (private) | `function formatCodexDiagnosticsUploadResult(` |
| 1865 | fn | formatCodexDiagnosticsTargetLines | (private) | `function formatCodexDiagnosticsTargetLines(targ...` |
| 1872 | fn | formatCodexDiagnosticsTargetBlock | (private) | `function formatCodexDiagnosticsTargetBlock(` |
| 1891 | fn | formatCodexDiagnosticsTargetLine | (private) | `function formatCodexDiagnosticsTargetLine(targe...` |
| 1904 | fn | normalizeDiagnosticsReason | (private) | `function normalizeDiagnosticsReason(note: strin...` |
| 1909 | fn | parseDiagnosticsArgs | (private) | `function parseDiagnosticsArgs(args: string): Pa...` |
| 1937 | fn | formatDiagnosticsUsage | (private) | `function formatDiagnosticsUsage(commandPrefix: ...` |
| 1945 | fn | createCodexDiagnosticsConfirmation | (private) | `function createCodexDiagnosticsConfirmation(par...` |
| 1999 | fn | readCodexDiagnosticsConfirmationScope | (private) | `function readCodexDiagnosticsConfirmationScope(...` |
| 2018 | fn | readCodexDiagnosticsScopeMismatch | (private) | `function readCodexDiagnosticsScopeMismatch(` |
| 2065 | fn | readPendingCodexDiagnosticsConfirmation | (private) | `function readPendingCodexDiagnosticsConfirmation(` |
| 2073 | fn | prunePendingCodexDiagnosticsConfirmations | (private) | `function prunePendingCodexDiagnosticsConfirmati...` |
| 2081 | fn | deletePendingCodexDiagnosticsConfirmation | (private) | `function deletePendingCodexDiagnosticsConfirmat...` |
| 2100 | fn | deletePendingCodexDiagnosticsConfirmationScope | (private) | `function deletePendingCodexDiagnosticsConfirmat...` |
| 2108 | fn | buildDiagnosticsTags | (private) | `function buildDiagnosticsTags(ctx: PluginComman...` |
| 2116 | fn | addTag | (private) | `function addTag(tags: Record<string, string>, k...` |
| 2122 | fn | formatCodexThreadIdForDisplay | (private) | `function formatCodexThreadIdForDisplay(threadId...` |
| 2126 | fn | formatCodexValueForDisplay | (private) | `function formatCodexValueForDisplay(value: stri...` |
| 2130 | fn | formatCodexCopyableValueForDisplay | (private) | `function formatCodexCopyableValueForDisplay(val...` |
| 2138 | fn | formatCodexTextForDisplay | (private) | `function formatCodexTextForDisplay(value: strin...` |
| 2148 | fn | escapeCodexChatText | (private) | `function escapeCodexChatText(value: string): st...` |
| 2165 | fn | readCodexDiagnosticsCooldownMs | (private) | `function readCodexDiagnosticsCooldownMs(threadI...` |
| 2177 | fn | readCodexDiagnosticsTargetsCooldownMessage | (private) | `function readCodexDiagnosticsTargetsCooldownMes...` |
| 2209 | fn | readCodexDiagnosticsScopeCooldownMs | (private) | `function readCodexDiagnosticsScopeCooldownMs(sc...` |
| 2221 | fn | recordCodexDiagnosticsUpload | (private) | `function recordCodexDiagnosticsUpload(` |
| 2242 | fn | recordBoundedCodexDiagnosticsCooldown | (private) | `function recordBoundedCodexDiagnosticsCooldown(` |
| 2260 | fn | readCodexDiagnosticsCooldownScope | (private) | `function readCodexDiagnosticsCooldownScope(ctx:...` |
| 2274 | fn | pruneCodexDiagnosticsCooldowns | (private) | `function pruneCodexDiagnosticsCooldowns(now: nu...` |
| 2279 | fn | pruneCodexDiagnosticsCooldownMap | (private) | `function pruneCodexDiagnosticsCooldownMap(map: ...` |
| 2287 | fn | formatCodexErrorForDisplay | (private) | `function formatCodexErrorForDisplay(error: stri...` |
| 2295 | fn | formatCodexResumeCommandForDisplay | (private) | `function formatCodexResumeCommandForDisplay(thr...` |
| 2303 | fn | isUnsafeDisplayCodePoint | (private) | `function isUnsafeDisplayCodePoint(codePoint: nu...` |
| 2319 | fn | normalizeCodexDiagnosticsScopeField | (private) | `function normalizeCodexDiagnosticsScopeField(va...` |
| 2330 | fn | startThreadAction | (private) | `async function startThreadAction(` |
| 2370 | fn | splitArgs | (private) | `function splitArgs(value: string | undefined): ...` |
| 2423 | fn | parseBindArgs | (private) | `function parseBindArgs(args: string[]): ParsedB...` |
| 2474 | fn | parseCodexCliSessionsArgs | (private) | `function parseCodexCliSessionsArgs(args: string...` |
| 2515 | fn | parseResumeArgs | (private) | `function parseResumeArgs(args: string[]): Parse...` |
| 2554 | fn | parseComputerUseArgs | (private) | `function parseComputerUseArgs(args: string[]): ...` |
| 2625 | fn | formatComputerUsePersistentIdentityMigration | (private) | `function formatComputerUsePersistentIdentityMig...` |
| 2653 | fn | readRequiredOptionValue | (private) | `function readRequiredOptionValue(args: string[]...` |
| 2662 | fn | normalizeComputerUseStringOverrides | (private) | `function normalizeComputerUseStringOverrides(` |

## Public API

### `handleCodexSubcommand`

```
export async function handleCodexSubcommand(
```

**Line:** 368 | **Kind:** fn
