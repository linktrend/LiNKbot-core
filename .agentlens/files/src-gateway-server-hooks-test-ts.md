# src/gateway/server.hooks.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1057
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 25 | fn | resolveMainKey | (private) | `const resolveMainKey = () => resolveMainSession...` |
| 33 | fn | requireNonEmptyString | (private) | `function requireNonEmptyString(value: string | ...` |
| 40 | fn | buildHookJsonHeaders | (private) | `function buildHookJsonHeaders(options?: {` |
| 52 | fn | postHook | (private) | `async function postHook(` |
| 68 | fn | setMainAndHooksAgents | (private) | `function setMainAndHooksAgents(): void {` |
| 74 | fn | mockIsolatedRunOkOnce | (private) | `function mockIsolatedRunOkOnce(): void {` |
| 82 | fn | mockIsolatedRunOk | (private) | `function mockIsolatedRunOk(): void {` |
| 90 | fn | waitForCronIsolatedRuns | (private) | `async function waitForCronIsolatedRuns(count: n...` |
| 96 | type | HookCronRunCall | (private) | - |
| 116 | fn | cronRunCall | (private) | `function cronRunCall(index = 0): HookCronRunCall {` |
| 124 | fn | postAgentHookWithIdempotency | (private) | `async function postAgentHookWithIdempotency(` |
| 139 | fn | expectFirstHookDelivery | (private) | `async function expectFirstHookDelivery(` |
| 152 | fn | expectHookAgentSessionRouting | (private) | `async function expectHookAgentSessionRouting(pa...` |
| 174 | fn | waitForSystemEventTexts | (private) | `async function waitForSystemEventTexts(sessionK...` |
| 184 | fn | writeHookTransformModule | (private) | `async function writeHookTransformModule(moduleN...` |
