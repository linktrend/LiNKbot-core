# src/agents/acp-spawn.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3303
- **Language:** TypeScript
- **Symbols:** 36
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 19 | type | SessionBindingAdapterCapabilities | (private) | - |
| 21 | fn | createDefaultSpawnConfig | (private) | `function createDefaultSpawnConfig(): OpenClawCo...` |
| 77 | fn | createSessionAccessorMock | (private) | `const createSessionAccessorMock = () => {` |
| 241 | type | SpawnRequest | (private) | - |
| 242 | type | SpawnContext | (private) | - |
| 243 | type | SpawnResult | (private) | - |
| 244 | type | AgentCallParams | (private) | - |
| 252 | type | CrossAgentWorkspaceFixture | (private) | - |
| 258 | fn | replaceSpawnConfig | (private) | `function replaceSpawnConfig(next: OpenClawConfi...` |
| 266 | fn | createSessionBindingCapabilities | (private) | `function createSessionBindingCapabilities(): Se...` |
| 274 | fn | createSessionBinding | (private) | `function createSessionBinding(overrides?: Parti...` |
| 295 | fn | createRelayHandle | (private) | `function createRelayHandle(overrides?: {` |
| 305 | fn | expectResolvedIntroTextInBindMetadata | (private) | `function expectResolvedIntroTextInBindMetadata(...` |
| 317 | fn | createSpawnRequest | (private) | `function createSpawnRequest(overrides?: Partial...` |
| 326 | fn | createRequesterContext | (private) | `function createRequesterContext(overrides?: Par...` |
| 337 | fn | createCrossAgentWorkspaceFixture | (private) | `async function createCrossAgentWorkspaceFixture...` |
| 355 | fn | configureCrossAgentWorkspaceSpawn | (private) | `function configureCrossAgentWorkspaceSpawn(fixt...` |
| 378 | fn | findAgentGatewayCall | (private) | `function findAgentGatewayCall(): { method?: str...` |
| 384 | fn | expectFailedSpawn | (private) | `function expectFailedSpawn(` |
| 399 | fn | expectAcceptedSpawn | (private) | `function expectAcceptedSpawn(result: SpawnResul...` |
| 407 | fn | expectRecordFields | (private) | `function expectRecordFields(` |
| 421 | fn | firstMockCall | (private) | `function firstMockCall(mock: { mock: { calls: u...` |
| 429 | fn | latestMockCall | (private) | `function latestMockCall(mock: { mock: { calls: ...` |
| 437 | fn | latestBindingInput | (private) | `function latestBindingInput(): Record<string, u...` |
| 441 | fn | gatewayRequests | (private) | `function gatewayRequests(): Array<{ method?: st...` |
| 447 | fn | gatewayRequest | (private) | `function gatewayRequest(method: string): { meth...` |
| 455 | fn | expectGatewayMethodNotCalled | (private) | `function expectGatewayMethodNotCalled(method: s...` |
| 459 | fn | expectSessionPatchFields | (private) | `function expectSessionPatchFields(expected: Rec...` |
| 463 | fn | expectInitializeSessionFields | (private) | `function expectInitializeSessionFields(expected...` |
| 470 | fn | expectBindingCallFields | (private) | `function expectBindingCallFields(expected: {` |
| 489 | fn | expectRelayCallFields | (private) | `function expectRelayCallFields(expected: Record...` |
| 496 | fn | expectAgentGatewayCall | (private) | `function expectAgentGatewayCall(overrides: Agen...` |
| 510 | fn | resolveMatrixRoomTargetForTest | (private) | `function resolveMatrixRoomTargetForTest(value: ...` |
| 519 | fn | enableMatrixAcpThreadBindings | (private) | `function enableMatrixAcpThreadBindings(): void {` |
| 579 | fn | enableLineCurrentConversationBindings | (private) | `function enableLineCurrentConversationBindings(...` |
| 629 | fn | enableTelegramCurrentConversationBindings | (private) | `function enableTelegramCurrentConversationBindi...` |
