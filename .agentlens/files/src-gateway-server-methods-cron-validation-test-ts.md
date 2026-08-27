# src/gateway/server-methods/cron.validation.test.ts

[← Back to Module](../modules/src-gateway-server-methods/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2509
- **Language:** TypeScript
- **Symbols:** 32
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 50 | fn | createPrefixOnlyChannelPlugin | (private) | `function createPrefixOnlyChannelPlugin(` |
| 74 | fn | setCronValidationTestRegistry | (private) | `function setCronValidationTestRegistry(): void {` |
| 105 | fn | createCronContext | (private) | `function createCronContext(currentJobs?: CronJo...` |
| 170 | type | CronMethod | (private) | - |
| 172 | fn | invokeCron | (private) | `async function invokeCron(` |
| 197 | fn | invokeCronAdd | (private) | `async function invokeCronAdd(` |
| 204 | fn | invokeCronGet | (private) | `async function invokeCronGet(` |
| 212 | fn | invokeCronUpdate | (private) | `async function invokeCronUpdate(` |
| 220 | fn | invokeCronUpdateDelivery | (private) | `async function invokeCronUpdateDelivery(` |
| 233 | fn | invokeCronRemove | (private) | `async function invokeCronRemove(` |
| 244 | fn | invokeWake | (private) | `async function invokeWake(params: Record<string...` |
| 248 | fn | createCronJob | (private) | `function createCronJob(overrides: Partial<CronJ...` |
| 265 | fn | callerClient | (private) | `function callerClient(agentId: string): Gateway...` |
| 278 | fn | telegramDeliveryWithSlackFailure | (private) | `function telegramDeliveryWithSlackFailure(overr...` |
| 293 | fn | setRuntimeConfig | (private) | `function setRuntimeConfig(config: OpenClawConfi...` |
| 297 | fn | pluginEntries | (private) | `function pluginEntries(...ids: string[]): OpenC...` |
| 303 | fn | telegramConfig | (private) | `function telegramConfig(): OpenClawConfig {` |
| 314 | fn | telegramSlackConfig | (private) | `function telegramSlackConfig(params: { includeM...` |
| 330 | fn | msteamsConfig | (private) | `function msteamsConfig(): OpenClawConfig {` |
| 341 | fn | slackSynologyConfig | (private) | `function slackSynologyConfig(): OpenClawConfig {` |
| 356 | fn | slackConfig | (private) | `function slackConfig(params: { includeMainSessi...` |
| 369 | fn | agentTurnCronParams | (private) | `function agentTurnCronParams(overrides: Record<...` |
| 381 | fn | expectCronSuccess | (private) | `function expectCronSuccess(respond: ReturnType<...` |
| 385 | fn | expectCronReadSuccess | (private) | `function expectCronReadSuccess(respond: ReturnT...` |
| 393 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 400 | fn | requireCronAddPayload | (private) | `function requireCronAddPayload(` |
| 407 | fn | requireCronUpdatePatch | (private) | `function requireCronUpdatePatch(` |
| 414 | fn | requireCronUpdateId | (private) | `function requireCronUpdateId(context: ReturnTyp...` |
| 419 | fn | expectDeliveryFields | (private) | `function expectDeliveryFields(payload: Record<s...` |
| 426 | fn | expectCronUpdateDeliveryPatch | (private) | `function expectCronUpdateDeliveryPatch(` |
| 434 | fn | expectResponseError | (private) | `function expectResponseError(` |
| 453 | fn | expectInvalidCronPatternError | (private) | `function expectInvalidCronPatternError(respond:...` |
