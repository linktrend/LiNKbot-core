# src/gateway/gateway-acp-bind.live.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1097
- **Language:** TypeScript
- **Symbols:** 28
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 55 | type | LiveAcpAgent | (private) | - |
| 57 | fn | snapshotAcpBindLiveEnv | (private) | `function snapshotAcpBindLiveEnv(): LiveEnvSnaps...` |
| 61 | fn | resolveLiveTimeoutMs | (private) | `function resolveLiveTimeoutMs(raw: string | und...` |
| 66 | fn | createSlackCurrentConversationBindingRegistry | (private) | `function createSlackCurrentConversationBindingR...` |
| 94 | fn | normalizeAcpAgent | (private) | `function normalizeAcpAgent(raw: string | undefi...` |
| 111 | fn | extractAssistantTexts | (private) | `function extractAssistantTexts(messages: unknow...` |
| 129 | fn | createAcpProbePhrase | (private) | `function createAcpProbePhrase(words: string, no...` |
| 133 | fn | createAcpSinglePhrasePrompt | (private) | `function createAcpSinglePhrasePrompt(phrase: st...` |
| 137 | fn | createAcpRecallPrompt | (private) | `function createAcpRecallPrompt(followupPhrase: ...` |
| 141 | fn | extractSpawnedAcpSessionKey | (private) | `function extractSpawnedAcpSessionKey(texts: str...` |
| 151 | fn | getFreeGatewayPort | (private) | `async function getFreeGatewayPort(): Promise<nu...` |
| 159 | fn | logLiveStep | (private) | `function logLiveStep(message: string): void {` |
| 163 | fn | shouldRequireCronMcpProbe | (private) | `function shouldRequireCronMcpProbe(): boolean {` |
| 167 | fn | normalizeOpenAiModelRef | (private) | `function normalizeOpenAiModelRef(value: string)...` |
| 175 | fn | resolveLiveParentModel | (private) | `function resolveLiveParentModel(): string {` |
| 183 | fn | resolveModelObject | (private) | `function resolveModelObject(value: unknown): Re...` |
| 189 | fn | prepareCodexHomeForLiveBindTest | (private) | `async function prepareCodexHomeForLiveBindTest(...` |
| 240 | fn | waitForGatewayPort | (private) | `async function waitForGatewayPort(params: {` |
| 254 | fn | finish | (private) | `const finish = (ok: boolean) => {` |
| 272 | fn | connectClient | (private) | `async function connectClient(params: { url: str...` |
| 286 | fn | isRetryableAcpBindWarmupText | (private) | `function isRetryableAcpBindWarmupText(texts: st...` |
| 329 | fn | formatAssistantTextPreview | (private) | `function formatAssistantTextPreview(texts: stri...` |
| 340 | fn | bindConversationAndWait | (private) | `async function bindConversationAndWait(params: {` |
| 422 | fn | waitForAgentRunOk | (private) | `async function waitForAgentRunOk(` |
| 442 | fn | sendChatAndWait | (private) | `async function sendChatAndWait(params: {` |
| 471 | fn | waitForAssistantText | (private) | `async function waitForAssistantText(params: {` |
| 510 | fn | waitForAssistantTurn | (private) | `async function waitForAssistantTurn(params: {` |
| 544 | fn | pollCronJobVisibleViaCli | (private) | `async function pollCronJobVisibleViaCli(params: {` |
