# src/commands/health.snapshot.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1084
- **Language:** TypeScript
- **Symbols:** 18
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 27 | type | HealthTestPlugin | (private) | - |
| 29 | type | TelegramHealthAccount | (private) | - |
| 40 | type | DiscordHealthAccount | (private) | - |
| 49 | type | IMessageHealthAccount | (private) | - |
| 55 | fn | loadFreshHealthModulesForTest | (private) | `async function loadFreshHealthModulesForTest() {` |
| 108 | fn | getTelegramChannelConfig | (private) | `function getTelegramChannelConfig(cfg: Record<s...` |
| 113 | fn | listTelegramAccountIdsForTest | (private) | `function listTelegramAccountIdsForTest(cfg: Rec...` |
| 125 | fn | readTokenFromFile | (private) | `function readTokenFromFile(tokenFile: unknown):...` |
| 136 | fn | resolveTelegramAccountForTest | (private) | `function resolveTelegramAccountForTest(params: {` |
| 173 | fn | buildTelegramHealthSummary | (private) | `function buildTelegramHealthSummary(snapshot: {` |
| 191 | fn | probeTelegramAccountForTest | (private) | `async function probeTelegramAccountForTest(` |
| 255 | fn | stubTelegramFetchOk | (private) | `function stubTelegramFetchOk(calls: string[]) {` |
| 292 | fn | runSuccessfulTelegramProbe | (private) | `async function runSuccessfulTelegramProbe(` |
| 319 | fn | createTelegramHealthPlugin | (private) | `function createTelegramHealthPlugin(): HealthTe...` |
| 341 | fn | resolveDiscordHealthAccountForTest | (private) | `function resolveDiscordHealthAccountForTest(par...` |
| 359 | fn | inspectDiscordHealthAccountForTest | (private) | `function inspectDiscordHealthAccountForTest(par...` |
| 383 | fn | createDiscordHealthPlugin | (private) | `function createDiscordHealthPlugin(): HealthTes...` |
| 426 | fn | createIMessageHealthPlugin | (private) | `function createIMessageHealthPlugin(): HealthTe...` |
