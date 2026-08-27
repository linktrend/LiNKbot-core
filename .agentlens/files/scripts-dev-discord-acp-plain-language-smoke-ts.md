# scripts/dev/discord-acp-plain-language-smoke.ts

[← Back to Module](../modules/scripts-dev/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1129
- **Language:** TypeScript
- **Symbols:** 46
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 22 | fn | writeStdoutLine | (private) | `function writeStdoutLine(message: string): void {` |
| 26 | fn | writeStdoutJson | (private) | `function writeStdoutJson(value: unknown): void {` |
| 30 | fn | writeStderrLine | (private) | `function writeStderrLine(message: string): void {` |
| 34 | type | ThreadBindingRecord | (private) | - |
| 45 | type | DiscordMessage | (private) | - |
| 56 | type | DiscordUser | (private) | - |
| 62 | type | WebhookForCleanup | (private) | - |
| 71 | type | DriverMode | (private) | - |
| 73 | type | Args | (private) | - |
| 90 | type | SuccessResult | (private) | - |
| 113 | type | FailureResult | (private) | - |
| 157 | class | CliArgumentError | (private) | - |
| 161 | fn | remainingTimeoutMs | (private) | `function remainingTimeoutMs(deadlineMs: number,...` |
| 169 | fn | sleepUntilDeadline | (private) | `async function sleepUntilDeadline(params: { pol...` |
| 177 | fn | withTimeout | (private) | `async function withTimeout<T>(params: {` |
| 201 | fn | parseNumber | (private) | `function parseNumber(value: string | undefined,...` |
| 205 | fn | createDiscordResponseTooLargeError | (private) | `function createDiscordResponseTooLargeError(mes...` |
| 211 | fn | isTooLargeError | (private) | `function isTooLargeError(error: unknown): boole...` |
| 215 | fn | readDiscordResponseText | (private) | `async function readDiscordResponseText(params: {` |
| 227 | fn | readDiscordResponseJson | (private) | `async function readDiscordResponseJson(params: {` |
| 240 | fn | resolveStateDir | (private) | `function resolveStateDir(): string {` |
| 255 | fn | resolveArg | (private) | `function resolveArg(flag: string, argv: string[...` |
| 275 | fn | hasFlag | (private) | `function hasFlag(flag: string, argv = process.a...` |
| 279 | fn | validateCliArgs | (private) | `function validateCliArgs(argv: string[]): void {` |
| 299 | fn | parseDriverMode | (private) | `function parseDriverMode(raw: string): DriverMo...` |
| 309 | fn | redactDiscordApiPath | (private) | `function redactDiscordApiPath(apiPath: string):...` |
| 316 | fn | safeErrorMessage | (private) | `function safeErrorMessage(error: unknown): stri...` |
| 320 | fn | usage | (private) | `function usage(): string {` |
| 359 | fn | parseArgs | (private) | `function parseArgs(argv = process.argv.slice(2)...` |
| 436 | fn | openclawCliJson | (private) | `async function openclawCliJson<T>(params: {` |
| 454 | fn | readMessagesWithOpenclaw | (private) | `async function readMessagesWithOpenclaw(params: {` |
| 482 | fn | resolveAuthorizationHeader | (private) | `function resolveAuthorizationHeader(params: { t...` |
| 493 | fn | discordApi | (private) | `async function discordApi<T>(params: {` |
| 515 | fn | discordWebhookApi | (private) | `async function discordWebhookApi<T>(params: {` |
| 539 | fn | requestDiscordJson | (private) | `async function requestDiscordJson<T>(params: {` |
| 556 | fn | timeoutError | (private) | `const timeoutError = () =>` |
| 649 | fn | readThreadBindings | (private) | `async function readThreadBindings(stateDir: str...` |
| 661 | fn | normalizeBoundAt | (private) | `function normalizeBoundAt(record: ThreadBinding...` |
| 668 | fn | resolveCandidateBindings | (private) | `function resolveCandidateBindings(params: {` |
| 692 | fn | buildInstruction | (private) | `function buildInstruction(params: {` |
| 709 | fn | toRecentMessageRow | (private) | `function toRecentMessageRow(message: DiscordMes...` |
| 718 | fn | loadParentRecentMessages | (private) | `async function loadParentRecentMessages(params: {` |
| 739 | fn | cleanupWebhook | (private) | `async function cleanupWebhook(webhookForCleanup...` |
| 753 | fn | printOutput | (private) | `function printOutput(params: { json: boolean; p...` |
| 792 | fn | run | (private) | `async function run(argv = process.argv.slice(2)...` |
| 1088 | fn | main | (private) | `async function main(argv = process.argv.slice(2...` |
