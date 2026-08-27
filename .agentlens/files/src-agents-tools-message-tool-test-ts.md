# src/agents/tools/message-tool.test.ts

[← Back to Module](../modules/src-agents-tools/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3885
- **Language:** TypeScript
- **Symbols:** 27
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 19 | type | CreateMessageTool | (private) | - |
| 20 | type | CreateOpenClawTools | (private) | - |
| 21 | type | ResetPluginRuntimeStateForTest | (private) | - |
| 23 | type | SetActivePluginRegistry | (private) | - |
| 24 | type | CreateTestRegistry | (private) | - |
| 35 | type | DescribeMessageTool | (private) | - |
| 38 | type | MessageToolDiscoveryContext | (private) | - |
| 39 | type | MessageToolSchema | (private) | - |
| 41 | fn | createTelegramPollExtraToolSchemas | (private) | `function createTelegramPollExtraToolSchemas() {` |
| 78 | fn | maybeCollectSecretPath | (private) | `const maybeCollectSecretPath = (path: string, v...` |
| 136 | type | RunMessageActionInput | (private) | - |
| 173 | fn | firstRunMessageActionInput | (private) | `function firstRunMessageActionInput(): RunMessa...` |
| 177 | fn | lastRunMessageActionInput | (private) | `function lastRunMessageActionInput(): RunMessag...` |
| 181 | fn | latestSecretResolveCall | (private) | `function latestSecretResolveCall(): {` |
| 201 | fn | tool | (private) | `const tool = (name: string) => ({` |
| 313 | fn | mockSendResult | (private) | `function mockSendResult(overrides: { channel?: ...` |
| 326 | fn | getToolProperties | (private) | `function getToolProperties(tool: ReturnType<Cre...` |
| 330 | fn | getActionEnum | (private) | `function getActionEnum(properties: Record<strin...` |
| 334 | fn | expectStringSchema | (private) | `function expectStringSchema(` |
| 379 | fn | createChannelPlugin | (private) | `function createChannelPlugin(params: {` |
| 427 | fn | registerMessagingPlugin | (private) | `function registerMessagingPlugin(id: string, me...` |
| 445 | fn | executeSend | (private) | `async function executeSend(params: {` |
| 453 | fn | executeSendWithResult | (private) | `async function executeSendWithResult(params: {` |
| 554 | fn | createPollVoteTool | (private) | `function createPollVoteTool(votedOption = "Blue...` |
| 611 | fn | castBlueVote | (private) | `async function castBlueVote(` |
| 1049 | fn | createSourceLessTool | (private) | `const createSourceLessTool = (messageActionTurn...` |
| 1926 | fn | mockQaChannelGatewayActionRunner | (private) | `function mockQaChannelGatewayActionRunner() {` |
