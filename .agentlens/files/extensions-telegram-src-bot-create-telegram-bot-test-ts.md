# extensions/telegram/src/bot.create-telegram-bot.test.ts

[← Back to Module](../modules/extensions-telegram-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 6260
- **Language:** TypeScript
- **Symbols:** 63
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 66 | type | BuildModelsProviderDataMock | (private) | - |
| 96 | fn | createTelegramBotTestStateDir | (private) | `function createTelegramBotTestStateDir(): string {` |
| 114 | type | TelegramMiddlewareTestContext | (private) | - |
| 115 | type | TelegramMiddleware | (private) | - |
| 120 | fn | getRegisteredTelegramMiddlewares | (private) | `function getRegisteredTelegramMiddlewares(): Te...` |
| 126 | fn | runTelegramMiddlewareChain | (private) | `async function runTelegramMiddlewareChain(param...` |
| 147 | fn | installPerKeySequentializer | (private) | `function installPerKeySequentializer(): void {` |
| 172 | fn | withTelegramSpooledReplayUpdate | (private) | `async function withTelegramSpooledReplayUpdate<T>(` |
| 179 | fn | mockTelegramConfigWrites | (private) | `function mockTelegramConfigWrites() {` |
| 183 | fn | flushTelegramTestMicrotasks | (private) | `async function flushTelegramTestMicrotasks() {` |
| 188 | fn | requireValue | (private) | `function requireValue<T>(value: T | null | unde...` |
| 195 | fn | createDeferred | (private) | `function createDeferred<T = void>() {` |
| 205 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 212 | fn | expectRecordFields | (private) | `function expectRecordFields(` |
| 224 | fn | getBotCtorOptions | (private) | `function getBotCtorOptions(callIndex = 0): Reco...` |
| 233 | fn | expectBotClientFields | (private) | `function expectBotClientFields(expected: Record...` |
| 627 | fn | topicCtx | (private) | `const topicCtx = (threadId: number, updateId: n...` |
| 761 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (ctx: Record<s...` |
| 785 | fn | extractLatestDebounceFlush | (private) | `const extractLatestDebounceFlush = () => {` |
| 897 | fn | extractLatestDebounceFlush | (private) | `const extractLatestDebounceFlush = () => {` |
| 1151 | fn | dispatchSpooledMessage | (private) | `const dispatchSpooledMessage = async (params: {` |
| 1242 | fn | dispatchSpooledMessage | (private) | `const dispatchSpooledMessage = async (updateId:...` |
| 1372 | fn | dispatchSpooledMessage | (private) | `const dispatchSpooledMessage = async (updateId:...` |
| 1483 | fn | dispatchSpooledMessage | (private) | `const dispatchSpooledMessage = async (updateId:...` |
| 1682 | fn | extractLatestForwardDebounceFlush | (private) | `const extractLatestForwardDebounceFlush = () => {` |
| 1779 | fn | extractLatestDebounceFlush | (private) | `const extractLatestDebounceFlush = () => {` |
| 2152 | fn | sendModelCallback | (private) | `const sendModelCallback = async (id: number) => {` |
| 3009 | fn | replayedCtx | (private) | `const replayedCtx = () => ({` |
| 3051 | fn | replayedCtx | (private) | `const replayedCtx = () => ({` |
| 3094 | fn | replayedCtx | (private) | `const replayedCtx = () => {` |
| 3161 | type | Middleware | (private) | - |
| 3170 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (` |
| 3237 | type | Middleware | (private) | - |
| 3246 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (` |
| 3267 | fn | onUnhandledRejection | (private) | `const onUnhandledRejection = (reason: unknown) ...` |
| 3299 | type | Middleware | (private) | - |
| 3308 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (` |
| 3368 | type | Middleware | (private) | - |
| 3377 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (` |
| 3429 | type | Middleware | (private) | - |
| 3438 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (` |
| 3494 | type | Middleware | (private) | - |
| 3503 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (` |
| 3575 | type | Middleware | (private) | - |
| 3584 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (` |
| 3962 | fn | configForAgent | (private) | `const configForAgent = (agentId: string) => ({` |
| 3995 | fn | sendDm | (private) | `const sendDm = async (messageId: number, text: ...` |
| 4023 | fn | configForTopicAgent | (private) | `const configForTopicAgent = () => ({` |
| 4065 | fn | sendTopicMessage | (private) | `const sendTopicMessage = async (chatId: number,...` |
| 4424 | fn | resetHarnessSpies | (private) | `function resetHarnessSpies() {` |
| 4431 | fn | getMessageHandler | (private) | `function getMessageHandler(botRequireMention?: ...` |
| 4438 | fn | dispatchMessage | (private) | `async function dispatchMessage(params: {` |
| 5404 | fn | invokeStatus | (private) | `const invokeStatus = async (messageId: number) ...` |
| 5522 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (ctx: Record<s...` |
| 5585 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (ctx: Record<s...` |
| 5642 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (ctx: Record<s...` |
| 5709 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (ctx: Record<s...` |
| 5772 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (ctx: Record<s...` |
| 5919 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (ctx: Record<s...` |
| 5972 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (ctx: Record<s...` |
| 6043 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (ctx: Record<s...` |
| 6102 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (ctx: Record<s...` |
| 6164 | fn | runMiddlewareChain | (private) | `const runMiddlewareChain = async (ctx: Record<s...` |
