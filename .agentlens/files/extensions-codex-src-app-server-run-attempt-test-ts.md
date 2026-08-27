# extensions/codex/src/app-server/run-attempt.test.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 6629
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 63 | type | CodexAppServerToolTelemetry | (private) | - |
| 136 | fn | startOrResumeThread | (private) | `function startOrResumeThread(` |
| 147 | fn | flushDiagnosticEvents | (private) | `function flushDiagnosticEvents() {` |
| 151 | fn | openSocket | (private) | `function openSocket(url: string): Promise<WebSo...` |
| 158 | fn | rejectBeforeOpen | (private) | `const rejectBeforeOpen = (error: Error) => {` |
| 173 | fn | expectResumeRequest | (private) | `function expectResumeRequest(` |
| 192 | fn | writeExistingBinding | (private) | `async function writeExistingBinding(` |
| 217 | fn | attachSqliteSessionTarget | (private) | `function attachSqliteSessionTarget(` |
| 232 | fn | readTranscriptMessagesByIdentity | (private) | `async function readTranscriptMessagesByIdentity(` |
| 254 | fn | createThreadLifecycleAppServerOptions | (private) | `function createThreadLifecycleAppServerOptions(...` |
| 276 | fn | createMessageDynamicTool | (private) | `function createMessageDynamicTool(` |
| 298 | fn | createNamedDynamicTool | (private) | `function createNamedDynamicTool(` |
| 313 | fn | setAgentWorkspaceForTest | (private) | `function setAgentWorkspaceForTest(params: Embed...` |
| 326 | fn | buildDynamicToolsForTest | (private) | `async function buildDynamicToolsForTest(` |
| 356 | fn | buildCodexTurnContextForTest | (private) | `async function buildCodexTurnContextForTest(` |
| 420 | fn | createCodexToolBridgeForTest | (private) | `function createCodexToolBridgeForTest(` |
| 435 | fn | startThreadWithDisabledNativeSurfaceForTest | (private) | `async function startThreadWithDisabledNativeSur...` |
| 505 | type | RuntimeDynamicToolForTest | (private) | - |
| 509 | fn | flattenSpecsWithNamespace | (private) | `function flattenSpecsWithNamespace(` |
| 519 | fn | specNames | (private) | `function specNames(specs: readonly CodexDynamic...` |
| 523 | fn | createRuntimeDynamicTool | (private) | `function createRuntimeDynamicTool(name: string)...` |
| 540 | fn | registerMemoryPromptForTest | (private) | `function registerMemoryPromptForTest() {` |
| 571 | fn | buildEmptyCodexToolTelemetry | (private) | `function buildEmptyCodexToolTelemetry(): CodexA...` |
| 1724 | fn | createRunParams | (private) | `const createRunParams = (trigger?: EmbeddedRunA...` |
| 1878 | fn | createRunParams | (private) | `const createRunParams = (trigger?: EmbeddedRunA...` |
| 2308 | fn | wrappedPluginSystemContext | (private) | `const wrappedPluginSystemContext = (text: strin...` |
| 2421 | type | HookInputForTest | (private) | - |
| 3954 | fn | onUnhandledRejection | (private) | `const onUnhandledRejection = (reason: unknown) ...` |
| 6337 | fn | notifyCommand | (private) | `const notifyCommand = async (id: string, output...` |
