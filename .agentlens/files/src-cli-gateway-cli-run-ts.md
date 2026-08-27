# src/cli/gateway-cli/run.ts

[← Back to Module](../modules/src-cli-gateway-cli/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1250
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 88 | type | GatewayRunLogger | (private) | - |
| 115 | fn | extractGatewayMiskeys | (private) | `function extractGatewayMiskeys(parsed: unknown): {` |
| 134 | fn | createGatewayCliStartupTrace | (private) | `function createGatewayCliStartupTrace() {` |
| 138 | fn | emit | (private) | `const emit = (name: string, durationMs: number,...` |
| 190 | fn | warnInlinePasswordFlag | (private) | `function warnInlinePasswordFlag() {` |
| 196 | fn | resolveGatewayPasswordOption | (private) | `async function resolveGatewayPasswordOption(opt...` |
| 209 | fn | parseEnumOption | (private) | `function parseEnumOption<T extends string>(` |
| 219 | fn | formatModeErrorList | (private) | `function formatModeErrorList(modes: readonly st...` |
| 233 | fn | shouldBlockGatewayBindWithoutExplicitAuth | (private) | `function shouldBlockGatewayBindWithoutExplicitA...` |
| 245 | fn | getGatewayStartGuardErrors | (private) | `function getGatewayStartGuardErrors(params: {` |
| 275 | fn | readGatewayStartupConfig | (private) | `async function readGatewayStartupConfig(params: {` |
| 323 | type | GatewayRunShellEnvFallbackPlan | (private) | - |
| 331 | fn | resolveGatewayRunShellEnvFallbackPlan | (private) | `async function resolveGatewayRunShellEnvFallbac...` |
| 355 | fn | loadGatewayRunShellEnvFallback | (private) | `async function loadGatewayRunShellEnvFallback(` |
| 375 | fn | clearGatewayRunShellEnvFallback | (private) | `async function clearGatewayRunShellEnvFallback(` |
| 391 | fn | gatewayRunShellEnvFallbackPlanSignature | (private) | `function gatewayRunShellEnvFallbackPlanSignatur...` |
| 395 | fn | readGatewayStartupConfigWithShellEnv | (private) | `async function readGatewayStartupConfigWithShel...` |
| 442 | fn | isGatewayLockError | (private) | `function isGatewayLockError(err: unknown): err ...` |
| 451 | fn | isGatewayAlreadyRunningLockError | (private) | `function isGatewayAlreadyRunningLockError(err: ...` |
| 461 | fn | resolveGatewayLockErrorExitCode | (private) | `function resolveGatewayLockErrorExitCode(` |
| 472 | fn | resolveGatewayStartupFailureExitCode | (private) | `function resolveGatewayStartupFailureExitCode(e...` |
| 476 | fn | normalizeGatewayHealthProbeHost | (private) | `function normalizeGatewayHealthProbeHost(host: ...` |
| 483 | fn | isGatewayHealthzResponse | (private) | `function isGatewayHealthzResponse(statusCode: n...` |
| 495 | fn | probeGatewayHealthz | (private) | `async function probeGatewayHealthz(params: {` |
| 504 | fn | finish | (private) | `const finish = (healthy: boolean) => {` |
| 569 | fn | runGatewayLoopWithSupervisedLockRecovery | (private) | `async function runGatewayLoopWithSupervisedLock...` |
| 638 | fn | maybeWriteGatewayStartupFailureBundle | (private) | `async function maybeWriteGatewayStartupFailureB...` |
| 650 | fn | runGatewayCommandOnce | (private) | `async function runGatewayCommandOnce(opts: Gate...` |
| 708 | fn | loadServerModule | (private) | `const loadServerModule = async () => {` |
| 774 | fn | clearRejectedFinalConfigEnv | (private) | `const clearRejectedFinalConfigEnv = () => {` |
| 838 | fn | describeNonInteractiveGatewayOwner | (private) | `const describeNonInteractiveGatewayOwner = () => {` |
| 1083 | fn | beginBoot | (private) | `const beginBoot = async (startedAtMs: number) => {` |
| 1114 | fn | completeBoot | (private) | `const completeBoot = (completion: GatewayBootLi...` |
| 1118 | fn | startLoop | (private) | `const startLoop = async () =>` |
| 1209 | fn | runGatewayCommand | pub | `export async function runGatewayCommand(` |

## Public API

### `runGatewayCommand`

```
export async function runGatewayCommand(
```

**Line:** 1209 | **Kind:** fn
