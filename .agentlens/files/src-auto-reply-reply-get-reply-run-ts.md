# src/auto-reply/reply/get-reply-run.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1754
- **Language:** TypeScript
- **Symbols:** 26
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 144 | type | InternalGetReplyOptions | (private) | - |
| 160 | type | AgentDefaults | (private) | - |
| 161 | type | ExecOverrides | (private) | - |
| 164 | fn | hasResolvedThinkingCatalogEntry | (private) | `function hasResolvedThinkingCatalogEntry(params: {` |
| 181 | fn | routeThreadIdsMatch | (private) | `function routeThreadIdsMatch(` |
| 191 | fn | normalizeMessageTimestampMs | (private) | `function normalizeMessageTimestampMs(value: unk...` |
| 201 | fn | projectSkillSuggestionForTurn | (private) | `function projectSkillSuggestionForTurn(` |
| 219 | fn | updateRoomEventAmbientTranscriptWatermark | (private) | `async function updateRoomEventAmbientTranscript...` |
| 242 | fn | resolvePromptSilentReplyConversationType | (private) | `function resolvePromptSilentReplyConversationTy...` |
| 264 | fn | resolvePromptSessionContextForSystemEvent | (private) | `function resolvePromptSessionContextForSystemEv...` |
| 349 | fn | buildExecOverridePromptHint | (private) | `function buildExecOverridePromptHint(params: {` |
| 393 | fn | loadEmbeddedAgentRuntime | (private) | `function loadEmbeddedAgentRuntime() {` |
| 397 | fn | loadAgentRunnerRuntime | (private) | `function loadAgentRunnerRuntime() {` |
| 401 | fn | loadSessionUpdatesRuntime | (private) | `function loadSessionUpdatesRuntime() {` |
| 405 | fn | stripPromptThinkingDirectives | (private) | `function stripPromptThinkingDirectives(body: st...` |
| 417 | fn | hasInboundHistoryBody | (private) | `function hasInboundHistoryBody(ctx: TemplateCon...` |
| 424 | fn | hasReplyTargetContext | (private) | `function hasReplyTargetContext(ctx: MsgContext ...` |
| 432 | type | RunPreparedReplyParams | (private) | - |
| 493 | fn | runPreparedReply | pub | `export async function runPreparedReply(` |
| 842 | fn | refreshInboundContextAfterAdmissionWait | (private) | `const refreshInboundContextAfterAdmissionWait =...` |
| 1159 | fn | resolveActiveEmbeddedSessionId | (private) | `const resolveActiveEmbeddedSessionId = (session...` |
| 1194 | fn | resolveAcceptedAuthProfileProviders | (private) | `const resolveAcceptedAuthProfileProviders = () =>` |
| 1259 | fn | resolveActiveRunAcceptsCurrentThread | (private) | `const resolveActiveRunAcceptsCurrentThread = (b...` |
| 1265 | fn | resolveActiveReplyOperationSessionId | (private) | `const resolveActiveReplyOperationSessionId = () =>` |
| 1267 | fn | resolveActiveQueueSessionId | (private) | `const resolveActiveQueueSessionId = () =>` |
| 1271 | fn | resolveQueueBusyState | (private) | `const resolveQueueBusyState = () => {` |

## Public API

### `runPreparedReply`

```
export async function runPreparedReply(
```

**Line:** 493 | **Kind:** fn
