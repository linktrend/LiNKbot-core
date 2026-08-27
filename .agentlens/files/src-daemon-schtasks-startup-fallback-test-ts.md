# src/daemon/schtasks.startup-fallback.test.ts

[← Back to Module](../modules/src-daemon/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2049
- **Language:** TypeScript
- **Symbols:** 21
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 42 | type | SpawnSyncResult | (private) | - |
| 96 | fn | resolveStartupEntryPath | (private) | `function resolveStartupEntryPath(env: Record<st...` |
| 109 | fn | writeStartupFallbackEntry | (private) | `async function writeStartupFallbackEntry(env: R...` |
| 116 | fn | writeNodeScript | (private) | `async function writeNodeScript(env: Record<stri...` |
| 135 | fn | makeNodeServiceEnv | (private) | `function makeNodeServiceEnv(env: Record<string,...` |
| 143 | fn | makeSpawnSyncResult | (private) | `function makeSpawnSyncResult(overrides: Partial...` |
| 155 | fn | mockWindowsNodeHostProcess | (private) | `function mockWindowsNodeHostProcess(processId =...` |
| 185 | fn | expectTaskkillPid | (private) | `function expectTaskkillPid(pid: number): void {` |
| 197 | fn | expectStartupFallbackSpawn | (private) | `function expectStartupFallbackSpawn() {` |
| 216 | fn | expectGatewayTermination | (private) | `function expectGatewayTermination(pid: number) {` |
| 224 | fn | useListenerBackedFallbackOwnership | (private) | `function useListenerBackedFallbackOwnership(): ...` |
| 230 | fn | addStartupFallbackMissingResponses | (private) | `function addStartupFallbackMissingResponses(` |
| 240 | fn | installGatewayScheduledTask | (private) | `function installGatewayScheduledTask(` |
| 255 | fn | installNodeScheduledTask | (private) | `function installNodeScheduledTask(env: Record<s...` |
| 271 | fn | fastForwardTaskStartWait | (private) | `function fastForwardTaskStartWait(): void {` |
| 277 | fn | addAcceptedRunNeverStartsResponses | (private) | `function addAcceptedRunNeverStartsResponses(): ...` |
| 288 | fn | addSuccessfulScheduledTaskRestartResponses | (private) | `function addSuccessfulScheduledTaskRestartRespo...` |
| 308 | fn | notYetRunTaskQueryOutput | (private) | `function notYetRunTaskQueryOutput() {` |
| 317 | fn | cleanExitTaskQueryOutput | (private) | `function cleanExitTaskQueryOutput(lastRunTime =...` |
| 321 | fn | addAcceptedRunCleanExitResponses | (private) | `function addAcceptedRunCleanExitResponses(initi...` |
| 332 | fn | runningTaskQueryOutput | (private) | `function runningTaskQueryOutput() {` |
