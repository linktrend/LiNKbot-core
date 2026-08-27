# src/agents/provider-local-service.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1027
- **Language:** TypeScript
- **Symbols:** 10
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 31 | fn | freePort | (private) | `async function freePort(): Promise<number> {` |
| 49 | fn | waitForProbeFailure | (private) | `async function waitForProbeFailure(url: string)...` |
| 70 | fn | withSpawnReadyHealthProbe | (private) | `async function withSpawnReadyHealthProbe<T>(run...` |
| 112 | fn | waitForReadyOneShotHostExit | (private) | `async function waitForReadyOneShotHostExit(` |
| 117 | fn | cleanup | (private) | `const cleanup = () => {` |
| 123 | fn | finish | (private) | `const finish = (error?: Error) => {` |
| 131 | fn | onMessage | (private) | `const onMessage = (message: unknown) => {` |
| 140 | fn | onError | (private) | `const onError = (error: Error) => finish(error);` |
| 141 | fn | onExit | (private) | `const onExit = (code: number | null, signal: No...` |
| 164 | fn | waitForOneShotHostExit | (private) | `async function waitForOneShotHostExit(` |
