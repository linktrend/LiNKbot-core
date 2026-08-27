# extensions/codex/src/conversation-binding.ts

[← Back to Module](../modules/extensions-codex/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1244
- **Language:** TypeScript
- **Symbols:** 41
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 85 | type | CodexConversationRunOptions | (private) | - |
| 93 | type | ResumeCodexCliSessionOnNodeFn | (private) | - |
| 97 | type | CodexConversationStartParams | (private) | - |
| 115 | type | BoundTurnResult | (private) | - |
| 119 | type | CodexConversationConfig | (private) | - |
| 122 | type | ResolvedCodexConversationConfig | (private) | - |
| 124 | type | CodexConversationGlobalState | (private) | - |
| 128 | fn | resolveConversationAppServerRuntime | (private) | `async function resolveConversationAppServerRunt...` |
| 170 | fn | getGlobalState | (private) | `function getGlobalState(): CodexConversationGlo...` |
| 178 | fn | startCodexConversationThread | (private) | `async function startCodexConversationThread(` |
| 250 | fn | handleCodexConversationInboundClaim | (private) | `async function handleCodexConversationInboundCl...` |
| 340 | fn | handleCodexConversationBindingResolved | (private) | `async function handleCodexConversationBindingRe...` |
| 359 | type | CodexThreadBindingParams | (private) | - |
| 376 | type | ConversationAppServerRuntime | (private) | - |
| 378 | type | CodexThreadBindingRuntime | (private) | - |
| 387 | fn | resolveThreadBindingRuntime | (private) | `async function resolveThreadBindingRuntime(` |
| 458 | fn | buildThreadRequestRuntimeOptions | (private) | `function buildThreadRequestRuntimeOptions(` |
| 482 | fn | codexConversationSandboxOrPermissions | (private) | `function codexConversationSandboxOrPermissions(` |
| 498 | fn | requestNewConversationBindingThread | (private) | `async function requestNewConversationBindingThr...` |
| 525 | fn | writeThreadBindingFromResponse | (private) | `async function writeThreadBindingFromResponse(` |
| 565 | fn | attachExistingThread | (private) | `async function attachExistingThread(` |
| 604 | fn | createThread | (private) | `async function createThread(params: CodexThread...` |
| 616 | fn | runBoundTurn | (private) | `async function runBoundTurn(params: {` |
| 901 | fn | assertNativeConversationApprovalPolicySupported | (private) | `function assertNativeConversationApprovalPolicy...` |
| 916 | fn | runBoundTurnWithMissingThreadRecovery | (private) | `async function runBoundTurnWithMissingThreadRec...` |
| 938 | fn | prepareConversationBinding | (private) | `async function prepareConversationBinding(` |
| 1034 | fn | resolveConversationExecPolicy | (private) | `function resolveConversationExecPolicy(params: {` |
| 1059 | fn | readSessionExecOverrides | (private) | `function readSessionExecOverrides(params: {` |
| 1092 | fn | canReadSessionExecOverrides | (private) | `function canReadSessionExecOverrides(params: {` |
| 1108 | fn | parseAgentIdFromSessionKey | (private) | `function parseAgentIdFromSessionKey(sessionKey?...` |
| 1120 | fn | isDefaultAgentSessionKeyForAgent | (private) | `function isDefaultAgentSessionKeyForAgent(param...` |
| 1127 | fn | resolveDefaultPolicyAgentId | (private) | `function resolveDefaultPolicyAgentId(config: Re...` |
| 1139 | fn | normalizeAgentIdOrDefault | (private) | `function normalizeAgentIdOrDefault(value?: stri...` |
| 1144 | fn | normalizeAgentId | (private) | `function normalizeAgentId(value?: string | null...` |
| 1162 | fn | isCodexThreadNotFoundError | (private) | `function isCodexThreadNotFoundError(error: unkn...` |
| 1170 | fn | enqueueBoundTurn | (private) | `function enqueueBoundTurn<T>(key: string, run: ...` |
| 1174 | fn | resolveThreadRequestModelProvider | (private) | `function resolveThreadRequestModelProvider(para...` |
| 1190 | fn | resolveOptionalThreadRequestModelSelection | (private) | `function resolveOptionalThreadRequestModelSelec...` |
| 1209 | fn | resolveModelBackedReviewerPolicyProvider | (private) | `function resolveModelBackedReviewerPolicyProvid...` |
| 1222 | fn | buildAgentLookup | (private) | `function buildAgentLookup(params: {` |
| 1233 | fn | conversationBindingIdentity | (private) | `function conversationBindingIdentity(` |
