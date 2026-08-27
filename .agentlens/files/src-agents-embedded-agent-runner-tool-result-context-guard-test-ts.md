# src/agents/embedded-agent-runner/tool-result-context-guard.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1240
- **Language:** TypeScript
- **Symbols:** 19
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 22 | fn | makeUser | (private) | `function makeUser(text: string): AgentMessage {` |
| 30 | fn | makeToolResult | (private) | `function makeToolResult(id: string, text: strin...` |
| 41 | fn | makeAssistant | (private) | `function makeAssistant(text: string, extras: Re...` |
| 50 | fn | makeReadToolResult | (private) | `function makeReadToolResult(id: string, text: s...` |
| 54 | fn | makeLegacyToolResult | (private) | `function makeLegacyToolResult(id: string, text:...` |
| 63 | fn | makeToolResultWithDetails | (private) | `function makeToolResultWithDetails(id: string, ...` |
| 83 | fn | getToolResultText | (private) | `function getToolResultText(msg: AgentMessage): ...` |
| 97 | fn | makeGuardableAgent | (private) | `function makeGuardableAgent(` |
| 106 | fn | applyGuardToContext | (private) | `async function applyGuardToContext(` |
| 118 | fn | applyMidTurnPrecheckGuardToContext | (private) | `async function applyMidTurnPrecheckGuardToContext(` |
| 150 | fn | expectOpenClawTruncation | (private) | `function expectOpenClawTruncation(text: string)...` |
| 160 | fn | mockCallArg | (private) | `function mockCallArg(` |
| 172 | fn | recordMockArg | (private) | `function recordMockArg(` |
| 492 | type | MockedEngine | (private) | - |
| 499 | fn | makeMockEngine | (private) | `function makeMockEngine(` |
| 559 | fn | callTransform | (private) | `async function callTransform(` |
| 573 | fn | installHook | (private) | `function installHook(` |
| 599 | fn | installOwnsCompactionHookWithGuard | (private) | `function installOwnsCompactionHookWithGuard(` |
| 633 | fn | callAfterInitialToolResult | (private) | `async function callAfterInitialToolResult(` |
