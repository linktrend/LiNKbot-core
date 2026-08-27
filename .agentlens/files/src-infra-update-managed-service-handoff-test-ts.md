# src/infra/update-managed-service-handoff.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1058
- **Language:** TypeScript
- **Symbols:** 13
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 34 | fn | createSpawnMock | (private) | `function createSpawnMock(params?: { pid?: numbe...` |
| 45 | fn | signalHandoffReady | (private) | `function signalHandoffReady(child: ReturnType<t...` |
| 65 | type | GatewayRestartSentinelDatabase | (private) | - |
| 87 | fn | pathExists | (private) | `async function pathExists(filePath: string): Pr...` |
| 96 | fn | writeRestartSentinelRow | (private) | `function writeRestartSentinelRow(env: NodeJS.Pr...` |
| 150 | fn | replaceRestartSentinelRow | (private) | `function replaceRestartSentinelRow(env: NodeJS....` |
| 160 | fn | readRestartSentinelPayload | (private) | `function readRestartSentinelPayload(env: NodeJS...` |
| 175 | fn | runHelperWithExistingSentinel | (private) | `async function runHelperWithExistingSentinel(pa...` |
| 256 | fn | createLegacyRestartSentinelTable | (private) | `async function createLegacyRestartSentinelTable...` |
| 280 | fn | spawnExitedPid | (private) | `async function spawnExitedPid(): Promise<number> {` |
| 290 | fn | runHelperWithCommand | (private) | `async function runHelperWithCommand(params: {` |
| 358 | fn | writeFakeSystemctl | (private) | `async function writeFakeSystemctl(): Promise<{ ...` |
| 370 | fn | writeFakeLaunchctl | (private) | `async function writeFakeLaunchctl(): Promise<{ ...` |
