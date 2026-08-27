# scripts/anthropic-prompt-probe.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1027
- **Language:** TypeScript
- **Symbols:** 40
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 75 | type | CaptureSummary | (private) | - |
| 89 | type | PromptResult | (private) | - |
| 106 | type | ProxyCapture | (private) | - |
| 116 | type | TokenSource | (private) | - |
| 121 | type | StoppableGatewayChild | (private) | - |
| 129 | type | ClosableLogFile | (private) | - |
| 134 | fn | toHeaderValue | (private) | `function toHeaderValue(value: string | string[]...` |
| 138 | fn | summarizeText | (private) | `function summarizeText(text: string, max = 120)...` |
| 146 | fn | summarizeCapture | (private) | `function summarizeCapture(` |
| 172 | fn | resolveAnthropicUpstreamUrl | (private) | `function resolveAnthropicUpstreamUrl(` |
| 188 | fn | matchesExtraUsage400 | (private) | `function matchesExtraUsage400(...parts: Array<s...` |
| 196 | fn | promptProbeTmpResult | (private) | `function promptProbeTmpResult(tmpDir: string, k...` |
| 200 | fn | cleanupPromptProbeTmpDir | (private) | `async function cleanupPromptProbeTmpDir(tmpDir:...` |
| 207 | fn | isSetupToken | (private) | `function isSetupToken(value: string): boolean {` |
| 211 | fn | listSetupTokenProfiles | (private) | `function listSetupTokenProfiles(` |
| 227 | fn | pickSetupTokenProfile | (private) | `function pickSetupTokenProfile(candidates: Arra...` |
| 241 | fn | resolveSetupTokenSource | (private) | `async function resolveSetupTokenSource(): Promi...` |
| 290 | fn | sleep | (private) | `async function sleep(ms: number): Promise<void> {` |
| 296 | fn | withTimeout | (private) | `async function withTimeout<T>(` |
| 304 | fn | readRequestBody | (private) | `async function readRequestBody(` |
| 322 | fn | extractProxyCapture | (private) | `function extractProxyCapture(rawBody: string, r...` |
| 369 | fn | startAnthropicProxy | (private) | `async function startAnthropicProxy(params: {` |
| 472 | fn | getFreePort | (private) | `async function getFreePort(): Promise<number> {` |
| 480 | fn | runDirectPrompt | (private) | `async function runDirectPrompt(` |
| 526 | fn | stopDirectChild | (private) | `const stopDirectChild = async (signal: NodeJS.S...` |
| 574 | fn | startGatewayProcess | (private) | `async function startGatewayProcess(params: {` |
| 612 | fn | trackLogWrite | (private) | `const trackLogWrite = (chunk: Buffer) => {` |
| 627 | fn | removeParentSignalHandlers | (private) | `let removeParentSignalHandlers = () => {};` |
| 649 | fn | stopGatewayPromptChild | (private) | `async function stopGatewayPromptChild(` |
| 689 | fn | installGatewayPromptParentSignalHandlers | (private) | `function installGatewayPromptParentSignalHandlers(` |
| 695 | fn | removeHandlers | (private) | `const removeHandlers = () => {` |
| 702 | fn | handler | (private) | `const handler = () => {` |
| 721 | fn | waitForGatewayPromptChildTreeExit | (private) | `async function waitForGatewayPromptChildTreeExit(` |
| 745 | fn | signalGatewayPromptChildTree | (private) | `function signalGatewayPromptChildTree(` |
| 760 | fn | gatewayPromptChildTreeIsAlive | (private) | `function gatewayPromptChildTreeIsAlive(child: S...` |
| 772 | fn | isMissingProcessError | (private) | `function isMissingProcessError(error: unknown):...` |
| 776 | fn | waitForGatewayReady | (private) | `async function waitForGatewayReady(url: string,...` |
| 792 | fn | readLogTail | (private) | `async function readLogTail(logPath: string, max...` |
| 817 | fn | runGatewayPrompt | (private) | `async function runGatewayPrompt(prompt: string)...` |
| 982 | fn | main | (private) | `async function main() {` |
