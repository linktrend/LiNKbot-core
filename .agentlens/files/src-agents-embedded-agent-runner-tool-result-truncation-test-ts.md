# src/agents/embedded-agent-runner/tool-result-truncation.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1780
- **Language:** TypeScript
- **Symbols:** 17
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 43 | fn | loadFreshToolResultTruncationModuleForTest | (private) | `async function loadFreshToolResultTruncationMod...` |
| 62 | fn | nextTimestamp | (private) | `const nextTimestamp = () => testTimestamp++;` |
| 64 | fn | createPromptProjectionStateForTest | (private) | `function createPromptProjectionStateForTest(): ...` |
| 88 | fn | makeToolResult | (private) | `function makeToolResult(text: string, toolCallI...` |
| 124 | fn | textWithFullOutputFooter | (private) | `function textWithFullOutputFooter(text: string,...` |
| 128 | fn | realisticSpillPath | (private) | `function realisticSpillPath(dir: string, name: ...` |
| 132 | fn | makeUserMessage | (private) | `function makeUserMessage(text: string): UserMes...` |
| 140 | fn | makeAssistantMessage | (private) | `function makeAssistantMessage(text: string): As...` |
| 149 | fn | getFirstToolResultText | (private) | `function getFirstToolResultText(message: AgentM...` |
| 157 | fn | truncateToolResultText | (private) | `function truncateToolResultText(` |
| 165 | fn | calculateMaxToolResultChars | (private) | `function calculateMaxToolResultChars(contextWin...` |
| 169 | fn | getToolResultTextLength | (private) | `function getToolResultTextLength(message: Agent...` |
| 181 | fn | truncateSessionThroughActiveTarget | (private) | `async function truncateSessionThroughActiveTarg...` |
| 205 | fn | createTmpDir | (private) | `async function createTmpDir(): Promise<string> {` |
| 210 | fn | createShortTmpDir | (private) | `async function createShortTmpDir(): Promise<str...` |
| 768 | fn | lengths | (private) | `const lengths = (messages: AgentMessage[]) => m...` |
| 1314 | fn | duplicate | (private) | `const duplicate = (text: string) => ({` |
