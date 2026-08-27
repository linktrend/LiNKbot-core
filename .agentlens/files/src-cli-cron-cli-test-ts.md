# src/cli/cron-cli.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1778
- **Language:** TypeScript
- **Symbols:** 20
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 30 | fn | defaultGatewayMock | (private) | `const defaultGatewayMock = async (` |
| 60 | type | CronUpdatePatch | (private) | - |
| 91 | type | CronAddParams | (private) | - |
| 122 | fn | buildProgram | (private) | `function buildProgram() {` |
| 129 | fn | createCronJob | (private) | `function createCronJob(id: string, name: string...` |
| 145 | fn | resetGatewayMock | (private) | `function resetGatewayMock() {` |
| 155 | fn | runtimeErrorMessages | (private) | `function runtimeErrorMessages(): string[] {` |
| 161 | fn | expectRuntimeErrorContaining | (private) | `function expectRuntimeErrorContaining(text: str...` |
| 165 | fn | expectNoRuntimeErrorContaining | (private) | `function expectNoRuntimeErrorContaining(text: s...` |
| 169 | fn | stdoutText | (private) | `function stdoutText(): string {` |
| 173 | fn | runCronCommand | (private) | `async function runCronCommand(args: string[]): ...` |
| 179 | fn | expectCronCommandExit | (private) | `async function expectCronCommandExit(args: stri...` |
| 183 | fn | runCronEditAndGetPatch | (private) | `async function runCronEditAndGetPatch(editArgs:...` |
| 189 | fn | runCronAddAndGetParams | (private) | `async function runCronAddAndGetParams(addArgs: ...` |
| 195 | fn | runCronSimpleAndGetUpdatePatch | (private) | `async function runCronSimpleAndGetUpdatePatch(` |
| 205 | fn | mockCronEditJobLookup | (private) | `function mockCronEditJobLookup(schedule: unknow...` |
| 220 | fn | getGatewayCallParams | (private) | `function getGatewayCallParams<T>(method: string...` |
| 225 | fn | runCronEditWithScheduleLookup | (private) | `async function runCronEditWithScheduleLookup(` |
| 236 | fn | expectCronEditWithScheduleLookupExit | (private) | `async function expectCronEditWithScheduleLookup...` |
| 248 | fn | runCronRunAndCaptureExit | (private) | `async function runCronRunAndCaptureExit(params: {` |
