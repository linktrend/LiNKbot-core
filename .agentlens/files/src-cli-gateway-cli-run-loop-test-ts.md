# src/cli/gateway-cli/run-loop.test.ts

[← Back to Module](../modules/src-cli-gateway-cli/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2303
- **Language:** TypeScript
- **Symbols:** 18
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 254 | type | LoopSignal | (private) | - |
| 257 | fn | setPlatform | (private) | `function setPlatform(platform: string) {` |
| 267 | fn | removeNewSignalListeners | (private) | `function removeNewSignalListeners(signal: LoopS...` |
| 276 | fn | addedSignalListener | (private) | `function addedSignalListener(` |
| 290 | fn | withIsolatedSignals | (private) | `async function withIsolatedSignals(` |
| 299 | fn | captureSignal | (private) | `const captureSignal = (signal: LoopSignal) => {` |
| 315 | fn | createRuntimeWithExitSignal | (private) | `function createRuntimeWithExitSignal(exitCallOr...` |
| 331 | type | GatewayCloseFn | (private) | - |
| 332 | type | LoopRuntime | (private) | - |
| 338 | fn | createCloseMock | (private) | `function createCloseMock() {` |
| 342 | fn | expectRestartCloseCall | (private) | `function expectRestartCloseCall(` |
| 358 | fn | createSignaledStart | (private) | `function createSignaledStart(close: GatewayClos...` |
| 370 | fn | runLoopWithStart | (private) | `async function runLoopWithStart(params: {` |
| 389 | fn | waitForStart | (private) | `async function waitForStart(started: Promise<vo...` |
| 396 | fn | waitForLoopCondition | (private) | `async function waitForLoopCondition(predicate: ...` |
| 409 | fn | createSignaledLoopHarness | (private) | `async function createSignaledLoopHarness(exitCa...` |
| 418 | fn | expectRestartHandoffCall | (private) | `function expectRestartHandoffCall(expected: {` |
| 825 | type | StartServer | (private) | - |
