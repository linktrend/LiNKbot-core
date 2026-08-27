# extensions/copilot/src/attempt.test.ts

[← Back to Module](../modules/extensions-copilot-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3768
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 70 | type | CopilotToolBridgeInput | (private) | - |
| 107 | type | SessionEventShape | (private) | - |
| 114 | type | SendAndWaitFn | (private) | - |
| 116 | type | FakeSession | (private) | - |
| 133 | type | FakeSdk | (private) | - |
| 135 | fn | requireSession | (private) | `function requireSession(sdk: FakeSdk): FakeSess...` |
| 139 | fn | requireCreateSessionConfig | (private) | `function requireCreateSessionConfig(sdk: FakeSd...` |
| 143 | fn | requireResumeSessionConfig | (private) | `function requireResumeSessionConfig(sdk: FakeSd...` |
| 147 | fn | createDeferred | (private) | `function createDeferred<T>() {` |
| 165 | fn | flushAsync | (private) | `function flushAsync() {` |
| 172 | fn | tick | (private) | `const tick = () => Promise.resolve();` |
| 176 | fn | waitForEventLoopTurn | (private) | `function waitForEventLoopTurn(): Promise<void> {` |
| 182 | fn | getPromptErrorCode | (private) | `function getPromptErrorCode(result: AgentHarnes...` |
| 186 | fn | getSdkSessionId | (private) | `function getSdkSessionId(result: AgentHarnessAt...` |
| 190 | fn | makeEvent | (private) | `function makeEvent(type: string, data: Record<s...` |
| 200 | fn | makeAssistantMessageEvent | (private) | `function makeAssistantMessageEvent(` |
| 212 | fn | createFakeSession | (private) | `function createFakeSession(cfg: Record<string, ...` |
| 249 | fn | makeFakePool | (private) | `function makeFakePool(sdk: FakeSdk) {` |
| 262 | fn | makeFakeSdk | (private) | `function makeFakeSdk(` |
| 301 | fn | makeParams | (private) | `function makeParams(` |
| 3099 | fn | makeSandboxStub | (private) | `function makeSandboxStub(overrides: Partial<San...` |
| 3509 | fn | makeFakeSdkTool | (private) | `function makeFakeSdkTool(name: string): SdkTool {` |
| 3518 | fn | readAvailableTools | (private) | `function readAvailableTools(call: unknown): rea...` |
| 3755 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |
