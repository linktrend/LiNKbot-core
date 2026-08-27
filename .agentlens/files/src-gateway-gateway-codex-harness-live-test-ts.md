# src/gateway/gateway-codex-harness.live.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2013
- **Language:** TypeScript
- **Symbols:** 49
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 158 | type | CapturedAgentEvent | (private) | - |
| 168 | type | GuardianPluginApprovalDecision | (private) | - |
| 169 | type | CodexHarnessThinkingLevel | (private) | - |
| 179 | fn | resolveLiveTimeoutMs | (private) | `function resolveLiveTimeoutMs(raw: string | und...` |
| 184 | fn | resolveBoundedPositiveIntEnv | (private) | `function resolveBoundedPositiveIntEnv(` |
| 204 | fn | resolveCodexHarnessThinkingLevel | (private) | `function resolveCodexHarnessThinkingLevel(raw: ...` |
| 212 | fn | resolveCodexHarnessExpectedEffort | (private) | `function resolveCodexHarnessExpectedEffort(mode...` |
| 244 | fn | logCodexLiveStep | (private) | `function logCodexLiveStep(step: string, details...` |
| 252 | fn | isCodexAccountTokenError | (private) | `function isCodexAccountTokenError(error: unknow...` |
| 256 | fn | subscribeCodexLiveDebugEvents | (private) | `async function subscribeCodexLiveDebugEvents(se...` |
| 273 | fn | snapshotEnv | (private) | `function snapshotEnv(): LiveEnvSnapshot {` |
| 277 | fn | restoreEnv | (private) | `function restoreEnv(snapshot: LiveEnvSnapshot):...` |
| 281 | fn | getFreeGatewayPort | (private) | `async function getFreeGatewayPort(): Promise<nu...` |
| 298 | fn | createLiveWorkspace | (private) | `async function createLiveWorkspace(tempDir: str...` |
| 313 | fn | removeLiveTempDir | (private) | `async function removeLiveTempDir(dir: string): ...` |
| 338 | fn | parseModelKey | (private) | `function parseModelKey(modelKey: string): { pro...` |
| 347 | fn | assertCodexHarnessSessionSelection | (private) | `async function assertCodexHarnessSessionSelecti...` |
| 373 | fn | readCodexHarnessSessionUsageFreshness | (private) | `async function readCodexHarnessSessionUsageFres...` |
| 404 | fn | assertCodexHarnessTranscriptModelIdentity | (private) | `async function assertCodexHarnessTranscriptMode...` |
| 425 | fn | writeLiveGatewayConfig | (private) | `async function writeLiveGatewayConfig(params: {` |
| 509 | fn | requestAgentTextWithEvents | (private) | `async function requestAgentTextWithEvents(param...` |
| 566 | fn | requestAgentText | (private) | `async function requestAgentText(params: {` |
| 583 | fn | recordCodexAttemptIdentity | (private) | `function recordCodexAttemptIdentity(params: {` |
| 626 | fn | verifyCodexCodeModeOnlyDynamicToolProbe | (private) | `async function verifyCodexCodeModeOnlyDynamicTo...` |
| 659 | fn | requestCodexCommandText | (private) | `async function requestCodexCommandText(params: {` |
| 701 | fn | waitForChatFinalText | (private) | `async function waitForChatFinalText(params: {` |
| 719 | fn | waitForChatAgentRunOk | (private) | `async function waitForChatAgentRunOk(client: Ga...` |
| 735 | fn | extractChatFinalText | (private) | `function extractChatFinalText(event: EventFrame...` |
| 765 | fn | readCodexAppServerPluginApprovalId | (private) | `function readCodexAppServerPluginApprovalId(eve...` |
| 785 | fn | extractAssistantTexts | (private) | `function extractAssistantTexts(messages: unknow...` |
| 802 | fn | formatAssistantTextPreview | (private) | `function formatAssistantTextPreview(texts: stri...` |
| 814 | fn | readCodexHarnessCompactionCount | (private) | `async function readCodexHarnessCompactionCount(...` |
| 835 | fn | verifyCodexCompactionStress | (private) | `async function verifyCodexCompactionStress(para...` |
| 944 | fn | waitForAssistantText | (private) | `async function waitForAssistantText(params: {` |
| 979 | fn | normalizeAssistantTokenText | (private) | `function normalizeAssistantTokenText(text: stri...` |
| 983 | fn | verifyCodexImageProbe | (private) | `async function verifyCodexImageProbe(params: {` |
| 1036 | fn | verifyCodexChatImageProbe | (private) | `async function verifyCodexChatImageProbe(params: {` |
| 1076 | fn | randomBitmapTextToken | (private) | `function randomBitmapTextToken(length = 6): str...` |
| 1082 | fn | findGuardianReviewStatus | (private) | `function findGuardianReviewStatus(events: Captu...` |
| 1088 | fn | hasGuardianReviewEvents | (private) | `function hasGuardianReviewEvents(events: Captur...` |
| 1092 | fn | assertGuardianReviewCompleted | (private) | `function assertGuardianReviewCompleted(params: {` |
| 1113 | fn | assertPluginApprovalResolved | (private) | `function assertPluginApprovalResolved(params: {` |
| 1124 | fn | verifyCodexGuardianProbe | (private) | `async function verifyCodexGuardianProbe(params: {` |
| 1216 | fn | verifyCodexCronMcpProbe | (private) | `async function verifyCodexCronMcpProbe(params: {` |
| 1288 | fn | waitForCodexSubagentStarted | (private) | `async function waitForCodexSubagentStarted(para...` |
| 1314 | fn | verifyCodexSubagentProbe | (private) | `async function verifyCodexSubagentProbe(params: {` |
| 1463 | fn | verifyCodexNativeSubagentBridgeProbe | (private) | `async function verifyCodexNativeSubagentBridgeP...` |
| 1506 | fn | listCodexNativeTasks | (private) | `function listCodexNativeTasks() {` |
| 1512 | fn | findDeliveredCodexNativeTask | (private) | `function findDeliveredCodexNativeTask(tasks: Re...` |

## Memory Markers

### 🔴 `RULE` (line 478)

> on the model entry proves the app-server harness path.
