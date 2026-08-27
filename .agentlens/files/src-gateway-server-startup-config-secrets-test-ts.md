# src/gateway/server-startup-config.secrets.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2886
- **Language:** TypeScript
- **Symbols:** 27
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 39 | type | PrepareRuntimeSecretsSnapshotForTest | (private) | - |
| 41 | type | ActivateRuntimeSecretsSnapshotForTest | (private) | - |
| 44 | type | GatewayStartupSecretsRuntimeMock | (private) | - |
| 50 | type | GatewayStartupLogMock | (private) | - |
| 56 | type | GatewayStartupStateEmitterMock | (private) | - |
| 63 | fn | activateSecretsRuntimeSnapshotForTest | (private) | `function activateSecretsRuntimeSnapshotForTest(...` |
| 71 | fn | gatewayTokenConfig | (private) | `function gatewayTokenConfig(config: OpenClawCon...` |
| 85 | fn | asConfig | (private) | `function asConfig(value: unknown): OpenClawConf...` |
| 89 | fn | buildSnapshot | (private) | `function buildSnapshot(config: OpenClawConfig):...` |
| 103 | fn | preparedSnapshot | (private) | `function preparedSnapshot(config: OpenClawConfi...` |
| 124 | fn | preparedSnapshotWithGatewayToken | (private) | `function preparedSnapshotWithGatewayToken(` |
| 143 | fn | callArg | (private) | `function callArg<T>(mock: { mock: { calls: unkn...` |
| 151 | fn | gatewaySecretRefSnapshot | (private) | `function gatewaySecretRefSnapshot(): ConfigFile...` |
| 167 | fn | runtimeSecretsActivatorForTest | (private) | `function runtimeSecretsActivatorForTest(params: {` |
| 182 | fn | runtimeSecretsActivatorOptionsForTest | (private) | `function runtimeSecretsActivatorOptionsForTest() {` |
| 189 | fn | mockLogSecretsForTest | (private) | `function mockLogSecretsForTest(): GatewayStartu...` |
| 197 | fn | readTimelineEvents | (private) | `function readTimelineEvents(filePath: string): ...` |
| 205 | fn | installDiagnosticsTimelineEnv | (private) | `function installDiagnosticsTimelineEnv() {` |
| 232 | fn | installIsolatedStartupFastPathEnv | (private) | `function installIsolatedStartupFastPathEnv() {` |
| 264 | fn | installGatewayStartupSecretsRuntimeMock | (private) | `function installGatewayStartupSecretsRuntimeMoc...` |
| 312 | fn | cleanupGatewayStartupSecretsRuntimeMock | (private) | `function cleanupGatewayStartupSecretsRuntimeMoc...` |
| 322 | fn | createGatewayStartupSecretsRuntimeHarness | (private) | `function createGatewayStartupSecretsRuntimeHarn...` |
| 348 | fn | activateImportedStartupConfig | (private) | `async function activateImportedStartupConfig(co...` |
| 360 | fn | prepareGatewaySecretRefStartupConfig | (private) | `async function prepareGatewaySecretRefStartupCo...` |
| 370 | fn | expectBootstrapAuthResolvedGatewayToken | (private) | `function expectBootstrapAuthResolvedGatewayToken(` |
| 379 | fn | expectImportedStartupConfigUsesFullSecretsRuntime | (private) | `async function expectImportedStartupConfigUsesF...` |
| 2723 | fn | config | (private) | `const config = (port: number) =>` |
