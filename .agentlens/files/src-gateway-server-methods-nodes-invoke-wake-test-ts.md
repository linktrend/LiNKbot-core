# src/gateway/server-methods/nodes.invoke-wake.test.ts

[← Back to Module](../modules/src-gateway-server-methods/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1463
- **Language:** TypeScript
- **Symbols:** 31
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 17 | type | MockNodeCommandPolicyParams | (private) | - |
| 23 | type | MockNodeConfig | (private) | - |
| 90 | type | RespondCall | (private) | - |
| 100 | type | MockCallSource | (private) | - |
| 106 | type | TestNodeSession | (private) | - |
| 113 | fn | requireString | (private) | `function requireString(value: unknown, label: s...` |
| 118 | fn | mockCall | (private) | `function mockCall(source: MockCallSource, callI...` |
| 126 | fn | firstRespondCall | (private) | `function firstRespondCall(source: MockCallSourc...` |
| 130 | fn | mockArg | (private) | `function mockArg(source: MockCallSource, callIn...` |
| 134 | fn | isLowerHex | (private) | `function isLowerHex(value: string): boolean {` |
| 144 | fn | isUuidV4 | (private) | `function isUuidV4(value: string): boolean {` |
| 170 | fn | requireRespondPayload | (private) | `function requireRespondPayload(call: RespondCal...` |
| 175 | fn | expectQueuedAction | (private) | `function expectQueuedAction(` |
| 185 | fn | expectWakeSendError | (private) | `function expectWakeSendError(wake: unknown, rea...` |
| 195 | fn | expectNoAuthWake | (private) | `function expectNoAuthWake(wake: unknown, label:...` |
| 204 | fn | expectWakeState | (private) | `async function expectWakeState(` |
| 212 | fn | expectNudgeState | (private) | `async function expectNudgeState(nodeId: string,...` |
| 216 | fn | expectWakeAndNudgeSent | (private) | `async function expectWakeAndNudgeSent(nodeId: s...` |
| 232 | type | WakeResultOverrides | (private) | - |
| 242 | fn | directRegistration | (private) | `function directRegistration(nodeId: string) {` |
| 253 | fn | relayRegistration | (private) | `function relayRegistration(nodeId: string) {` |
| 268 | fn | mockDirectWakeConfig | (private) | `function mockDirectWakeConfig(nodeId: string, o...` |
| 289 | fn | mockRelayWakeConfig | (private) | `function mockRelayWakeConfig(nodeId: string, ov...` |
| 315 | fn | makeNodeInvokeParams | (private) | `function makeNodeInvokeParams(overrides?: Parti...` |
| 326 | fn | invokeNode | (private) | `async function invokeNode(params: {` |
| 369 | fn | createOperatorClient | (private) | `function createOperatorClient(params?: { scopes...` |
| 388 | fn | createNodeClient | (private) | `function createNodeClient(nodeId: string, comma...` |
| 404 | fn | createForegroundUnavailableNodeRegistry | (private) | `function createForegroundUnavailableNodeRegistr...` |
| 425 | fn | createMissingNodeRegistry | (private) | `function createMissingNodeRegistry() {` |
| 432 | fn | pullPending | (private) | `async function pullPending(nodeId: string, comm...` |
| 448 | fn | ackPending | (private) | `async function ackPending(nodeId: string, ids: ...` |
