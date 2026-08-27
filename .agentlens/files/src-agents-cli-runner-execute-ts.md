# src/agents/cli-runner/execute.ts

[← Back to Module](../modules/src-agents-cli-runner/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2218
- **Language:** TypeScript
- **Symbols:** 51
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 130 | fn | appendCliOutputParseBuffer | (private) | `function appendCliOutputParseBuffer(` |
| 178 | fn | normalizeCliBackendThinkingLevel | (private) | `function normalizeCliBackendThinkingLevel(` |
| 184 | fn | buildCliMcpCaptureKey | (private) | `function buildCliMcpCaptureKey(context: Prepare...` |
| 192 | fn | setCliRunnerExecuteTestDeps | (private) | `function setCliRunnerExecuteTestDeps(overrides:...` |
| 196 | fn | buildCliLogArgs | (private) | `function buildCliLogArgs(params: {` |
| 261 | fn | parseCliBackendPreserveEnv | (private) | `function parseCliBackendPreserveEnv(raw: string...` |
| 286 | fn | listPresentCliAuthEnvKeys | (private) | `function listPresentCliAuthEnvKeys(env: Record<...` |
| 293 | fn | listPresentCliRuntimeEnvKeys | (private) | `function listPresentCliRuntimeEnvKeys(env: Reco...` |
| 300 | fn | formatCliEnvKeyList | (private) | `function formatCliEnvKeyList(keys: readonly str...` |
| 304 | fn | buildCliEnvMcpLog | (private) | `function buildCliEnvMcpLog(childEnv: Record<str...` |
| 311 | fn | fingerprintCliSessionId | (private) | `function fingerprintCliSessionId(sessionId?: st...` |
| 319 | fn | formatCliSessionReuseLogState | (private) | `function formatCliSessionReuseLogState(reusable...` |
| 335 | fn | buildCliExecLogLine | (private) | `function buildCliExecLogLine(params: {` |
| 360 | fn | buildCliEnvAuthLog | (private) | `function buildCliEnvAuthLog(childEnv: Record<st...` |
| 389 | type | ExecutePreparedCliRunOptions | (private) | - |
| 394 | fn | executePreparedCliRun | pub | `export async function executePreparedCliRun(` |
| 569 | fn | observeForkSuccessor | (private) | `const observeForkSuccessor = (sessionId: string...` |
| 582 | fn | finishForkSuccessorPersistence | (private) | `const finishForkSuccessorPersistence = async ()...` |
| 590 | fn | cleanupOuterResource | (private) | `const cleanupOuterResource = async (cleanup: ((...` |
| 647 | type | CliToolTerminalOutcome | (private) | - |
| 648 | type | CliLoopbackAmbiguityGroup | (private) | - |
| 652 | type | CliLoopbackCall | (private) | - |
| 660 | type | ActiveCliTool | (private) | - |
| 670 | fn | matchesCliLoopbackCall | (private) | `const matchesCliLoopbackCall = (` |
| 728 | fn | markCliLoopbackSignatureAmbiguous | (private) | `const markCliLoopbackSignatureAmbiguous = (call...` |
| 737 | fn | retainCliLoopbackCall | (private) | `const retainCliLoopbackCall = (call: McpLoopbac...` |
| 756 | fn | bindCliLoopbackCall | (private) | `const bindCliLoopbackCall = (` |
| 769 | fn | removeCliLoopbackCall | (private) | `const removeCliLoopbackCall = (call: CliLoopbac...` |
| 778 | fn | retireCliLoopbackCorrelation | (private) | `const retireCliLoopbackCorrelation = (` |
| 801 | fn | resolveCliLoopbackTerminalOutcome | (private) | `const resolveCliLoopbackTerminalOutcome = (tool...` |
| 821 | fn | isPreparedInternalSourceReply | (private) | `const isPreparedInternalSourceReply = async (ca...` |
| 850 | fn | recordRunError | (private) | `const recordRunError = (error: unknown) => {` |
| 879 | fn | finalizeParsedTools | (private) | `let finalizeParsedTools = () => {};` |
| 910 | fn | env | (private) | `const env = (() => {` |
| 1016 | fn | commitMessagingToolResult | (private) | `const commitMessagingToolResult = (paramsLocal: {` |
| 1087 | fn | beginGatewayCapture | (private) | `const beginGatewayCapture = (captureKey: string...` |
| 1099 | fn | isAdmittedPotentialMessagingDelivery | (private) | `const isAdmittedPotentialMessagingDelivery = (t...` |
| 1102 | fn | isPreparedMessagingDelivery | (private) | `const isPreparedMessagingDelivery = (` |
| 1226 | fn | emitCliToolUseStart | (private) | `const emitCliToolUseStart = (event: CliToolUseS...` |
| 1305 | fn | emitCliToolResult | (private) | `const emitCliToolResult = (event: {` |
| 1341 | fn | emitParsedToolUseStart | (private) | `const emitParsedToolUseStart = (event: CliToolU...` |
| 1361 | fn | emitParsedToolTerminal | (private) | `const emitParsedToolTerminal = (event: {` |
| 1453 | fn | emitParsedToolResult | (private) | `const emitParsedToolResult = (event: {` |
| 1473 | fn | emitCliCommentaryText | (private) | `const emitCliCommentaryText = (text: string) => {` |
| 1495 | fn | emitCliAssistantDelta | (private) | `const emitCliAssistantDelta = ({ text, delta }:...` |
| 1531 | fn | emitCliThinkingDelta | (private) | `const emitCliThinkingDelta = ({ text, delta, is...` |
| 1544 | fn | emitCliThinkingProgress | (private) | `const emitCliThinkingProgress = ({ progressToke...` |
| 1555 | fn | emitCliPlanUpdate | (private) | `const emitCliPlanUpdate = ({ steps }: CliPlanUp...` |
| 1666 | fn | consumeStdout | (private) | `const consumeStdout = (chunk: string) => {` |
| 1679 | fn | consumeStderr | (private) | `const consumeStderr = (chunk: string) => {` |
| 1754 | fn | abortManagedRun | (private) | `const abortManagedRun = () => {` |

## Public API

### `executePreparedCliRun`

```
export async function executePreparedCliRun(
```

**Line:** 394 | **Kind:** fn
