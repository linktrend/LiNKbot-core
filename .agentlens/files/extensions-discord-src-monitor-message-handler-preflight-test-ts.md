# extensions/discord/src/monitor/message-handler.preflight.test.ts

[← Back to Module](../modules/extensions-discord-src-monitor/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2422
- **Language:** TypeScript
- **Symbols:** 16
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 76 | fn | createThreadBinding | (private) | `function createThreadBinding(` |
| 101 | fn | createPreflightArgs | (private) | `function createPreflightArgs(params: {` |
| 110 | type | DiscordPreflightResult | (private) | - |
| 112 | fn | expectPreflightResult | (private) | `function expectPreflightResult(` |
| 121 | type | MockWithCalls | (private) | - |
| 123 | fn | firstMockArg | (private) | `function firstMockArg(mock: MockWithCalls, labe...` |
| 131 | fn | createThreadClient | (private) | `function createThreadClient(params: { threadId:...` |
| 155 | fn | createDmClient | (private) | `function createDmClient(channelId: string): Dis...` |
| 169 | fn | createMissingChannelClient | (private) | `function createMissingChannelClient(): DiscordC...` |
| 175 | fn | runThreadBoundPreflight | (private) | `async function runThreadBoundPreflight(params: {` |
| 216 | fn | runGuildPreflight | (private) | `async function runGuildPreflight(params: {` |
| 244 | fn | runDmPreflight | (private) | `async function runDmPreflight(params: {` |
| 263 | fn | runUnresolvedDmPreflight | (private) | `async function runUnresolvedDmPreflight(params: {` |
| 283 | fn | runMentionOnlyBotPreflight | (private) | `async function runMentionOnlyBotPreflight(param...` |
| 298 | fn | runIgnoreOtherMentionsPreflight | (private) | `async function runIgnoreOtherMentionsPreflight(...` |
| 774 | fn | runBotMessage | (private) | `const runBotMessage = async (id: string) =>` |
