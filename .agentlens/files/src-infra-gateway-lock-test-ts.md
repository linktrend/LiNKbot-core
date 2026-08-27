# src/infra/gateway-lock.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1044
- **Language:** TypeScript
- **Symbols:** 13
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 19 | type | GatewayLock | (private) | - |
| 20 | type | GatewayLockOptions | (private) | - |
| 26 | fn | resolveTestLockDir | (private) | `function resolveTestLockDir() {` |
| 30 | fn | makeEnv | (private) | `async function makeEnv() {` |
| 41 | fn | acquireForTest | (private) | `async function acquireForTest(` |
| 59 | fn | expectGatewayLock | (private) | `function expectGatewayLock(lock: Awaited<Return...` |
| 67 | fn | resolveLockPath | (private) | `function resolveLockPath(env: NodeJS.ProcessEnv) {` |
| 81 | fn | createLockPayload | (private) | `function createLockPayload(params: {` |
| 98 | fn | mockProcStatRead | (private) | `function mockProcStatRead(params: { onProcRead:...` |
| 108 | fn | writeLockFile | (private) | `async function writeLockFile(` |
| 122 | fn | createEaccesProcStatSpy | (private) | `function createEaccesProcStatSpy() {` |
| 130 | fn | createPortProbeConnectionSpy | (private) | `function createPortProbeConnectionSpy(result: "...` |
| 145 | fn | writeRecentLockFile | (private) | `async function writeRecentLockFile(env: NodeJS....` |
