# test/scripts/bundled-plugin-install-uninstall-probe.test.ts

[← Back to Module](../modules/test-scripts/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1749
- **Language:** TypeScript
- **Symbols:** 19
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 20 | fn | expectedTaskkillPath | (private) | `function expectedTaskkillPath(): string {` |
| 24 | type | PluginListEntry | (private) | - |
| 30 | fn | createPackageRoot | (private) | `function createPackageRoot(): string {` |
| 37 | fn | makePackageRoot | (private) | `function makePackageRoot(): string {` |
| 43 | fn | writePluginsList | (private) | `function writePluginsList(root: string, plugins...` |
| 59 | fn | writePluginManifest | (private) | `function writePluginManifest(root: string, plug...` |
| 69 | fn | runProbe | (private) | `function runProbe(root: string, env: Record<str...` |
| 84 | fn | runProbeCommand | (private) | `function runProbeCommand(root: string, args: st...` |
| 99 | fn | runRuntimeSmoke | (private) | `function runRuntimeSmoke(root: string, args: st...` |
| 110 | fn | importRuntimeSmokeWithEnv | (private) | `async function importRuntimeSmokeWithEnv(env: R...` |
| 118 | fn | listenOnLoopback | (private) | `async function listenOnLoopback(server: HttpSer...` |
| 120 | fn | onError | (private) | `const onError = (error: Error) => {` |
| 137 | fn | closeServer | (private) | `async function closeServer(server: HttpServer |...` |
| 149 | fn | waitForFile | (private) | `async function waitForFile(filePath: string, ti...` |
| 162 | fn | parseCompletedPidFile | (private) | `function parseCompletedPidFile(content: string)...` |
| 171 | fn | waitForPidFile | (private) | `async function waitForPidFile(filePath: string,...` |
| 189 | fn | pidIsAlive | (private) | `function pidIsAlive(pid: number): boolean {` |
| 201 | fn | waitForDead | (private) | `async function waitForDead(pid: number, timeout...` |
| 214 | fn | killPidIfAlive | (private) | `function killPidIfAlive(pid: number | undefined...` |
