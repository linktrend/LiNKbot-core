# src/tui/tui-pty-local.e2e.test.ts

[← Back to Module](../modules/src-tui/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1381
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 18 | type | MockModelServer | (private) | - |
| 25 | type | MockModelBehavior | (private) | - |
| 32 | type | MockModelRequest | (private) | - |
| 38 | type | GatewayScenario | (private) | - |
| 102 | type | GatewayScenarioId | (private) | - |
| 111 | fn | createIdempotentCleanup | (private) | `function createIdempotentCleanup(cleanup: () =>...` |
| 116 | type | CleanupRegistrar | (private) | - |
| 118 | fn | waitForOutputAfter | (private) | `async function waitForOutputAfter(run: PtyRun, ...` |
| 129 | fn | createFreshSession | (private) | `async function createFreshSession(run: PtyRun, ...` |
| 163 | fn | readRequestBody | (private) | `async function readRequestBody(req: IncomingMes...` |
| 171 | fn | writeJson | (private) | `function writeJson(res: ServerResponse, status:...` |
| 181 | fn | writeResponsesSse | (private) | `async function writeResponsesSse(` |
| 253 | fn | writeInvalidEditCallSse | (private) | `function writeInvalidEditCallSse(res: ServerRes...` |
| 289 | fn | readJsonRequest | (private) | `async function readJsonRequest(req: IncomingMes...` |
| 294 | fn | startRoutedMockModelServer | (private) | `async function startRoutedMockModelServer(` |
| 383 | fn | startMockModelServer | (private) | `async function startMockModelServer(` |
| 392 | fn | buildTuiCliScript | (private) | `function buildTuiCliScript(args: string[]) {` |
| 407 | fn | buildLocalValidationTuiScript | (private) | `function buildLocalValidationTuiScript() {` |
| 448 | fn | buildMockModelProvider | (private) | `function buildMockModelProvider(baseUrl: string...` |
| 467 | fn | buildLocalModeConfig | (private) | `function buildLocalModeConfig(params: {` |
| 515 | fn | startLocalModeTui | (private) | `async function startLocalModeTui(` |
| 587 | type | SharedGatewayFixture | (private) | - |
| 594 | type | SharedGatewayFixtureStartup | (private) | - |
| 602 | fn | buildGatewayModeConfig | (private) | `function buildGatewayModeConfig(params: { tempD...` |
| 649 | fn | startSharedGatewayFixture | (private) | `async function startSharedGatewayFixture(): Pro...` |
| 735 | fn | requireSharedGatewayFixture | (private) | `async function requireSharedGatewayFixture(): P...` |
| 748 | fn | startGatewayModeTui | (private) | `async function startGatewayModeTui(` |
| 951 | fn | registerValidationLoopTest | (private) | `function registerValidationLoopTest(mode: "gate...` |
| 1048 | fn | registerGatewayTest | (private) | `function registerGatewayTest(name: string, run:...` |
