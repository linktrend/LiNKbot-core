# extensions/telegram/src/webhook.test.ts

[← Back to Module](../modules/extensions-telegram-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1819
- **Language:** TypeScript
- **Symbols:** 31
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 64 | fn | waitForWebhookState | (private) | `async function waitForWebhookState<T>(` |
| 71 | fn | yieldWebhookTask | (private) | `async function yieldWebhookTask(): Promise<void> {` |
| 77 | fn | collectResponseBody | (private) | `function collectResponseBody(` |
| 93 | fn | createSingleSettlement | (private) | `function createSingleSettlement<T>(params: {` |
| 132 | class | InputFile | (private) | - |
| 137 | class | GrammyError | (private) | - |
| 155 | fn | installTelegramIngressQueueRuntime | (private) | `function installTelegramIngressQueueRuntime(res...` |
| 166 | fn | requireWebhookSpoolDir | (private) | `function requireWebhookSpoolDir(): string {` |
| 173 | fn | resetTelegramWebhookMocks | (private) | `function resetTelegramWebhookMocks(): void {` |
| 194 | type | MockCallReader | (private) | - |
| 196 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 203 | fn | requireMockCall | (private) | `function requireMockCall(mock: unknown, index: ...` |
| 211 | fn | mockMessages | (private) | `function mockMessages(mock: unknown): string[] {` |
| 218 | fn | expectMockMessageContains | (private) | `function expectMockMessageContains(mock: unknow...` |
| 222 | fn | expectStatusCall | (private) | `function expectStatusCall(` |
| 259 | fn | fetchWithTimeout | (private) | `async function fetchWithTimeout(` |
| 275 | fn | postWebhookJson | (private) | `async function postWebhookJson(params: {` |
| 295 | fn | postWebhookHeadersOnly | (private) | `async function postWebhookHeadersOnly(params: {` |
| 347 | fn | createDeterministicRng | (private) | `function createDeterministicRng(seed: number): ...` |
| 355 | fn | postWebhookPayloadWithChunkPlan | (private) | `async function postWebhookPayloadWithChunkPlan(...` |
| 404 | fn | writeAll | (private) | `const writeAll = async () => {` |
| 439 | fn | createNearLimitTelegramPayload | (private) | `function createNearLimitTelegramPayload(): { pa...` |
| 455 | fn | sha256 | (private) | `function sha256(text: string): string {` |
| 459 | type | StartWebhookOptions | (private) | - |
| 464 | type | StartedWebhook | (private) | - |
| 466 | fn | getServerPort | (private) | `function getServerPort(server: StartedWebhook["...` |
| 474 | fn | webhookUrl | (private) | `function webhookUrl(port: number, webhookPath: ...` |
| 478 | fn | withStartedWebhook | (private) | `async function withStartedWebhook<T>(` |
| 498 | fn | expectSingleNearLimitUpdate | (private) | `function expectSingleNearLimitUpdate(params: {` |
| 510 | fn | runNearLimitPayloadTestAndExpectUpdate | (private) | `async function runNearLimitPayloadTestAndExpect...` |
| 1656 | fn | delayedHandler | (private) | `const delayedHandler = async (update: unknown) ...` |
