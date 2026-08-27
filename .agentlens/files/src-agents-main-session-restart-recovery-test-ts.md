# src/agents/main-session-restart-recovery.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 5437
- **Language:** TypeScript
- **Symbols:** 14
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 78 | fn | recoverRestartAbortedMainSessions | (private) | `const recoverRestartAbortedMainSessions = (` |
| 81 | fn | recoverStartupOrphanedMainSessions | (private) | `const recoverStartupOrphanedMainSessions = (` |
| 84 | fn | retryRestartAbortedMainSessionRecovery | (private) | `const retryRestartAbortedMainSessionRecovery = (` |
| 87 | fn | retryRestartAbortedMainSessionRecoveryAfterOwnerRelease | (private) | `const retryRestartAbortedMainSessionRecoveryAft...` |
| 96 | fn | scheduleRestartAbortedMainSessionRecovery | (private) | `const scheduleRestartAbortedMainSessionRecovery...` |
| 123 | fn | loadSessionEntry | (private) | `function loadSessionEntry(` |
| 143 | fn | makeSessionsDir | (private) | `async function makeSessionsDir(agentId = "main"...` |
| 149 | fn | writeStorePath | (private) | `async function writeStorePath(` |
| 160 | fn | writeStore | (private) | `async function writeStore(sessionsDir: string, ...` |
| 164 | fn | readStore | (private) | `function readStore(storePath: string): Record<s...` |
| 170 | fn | writeTranscript | (private) | `async function writeTranscript(` |
| 193 | fn | cleanedLockForPath | (private) | `function cleanedLockForPath(lockPath: string): ...` |
| 209 | fn | cleanedLock | (private) | `function cleanedLock(sessionsDir: string, sessi...` |
| 213 | fn | firstGatewayParams | (private) | `function firstGatewayParams(): Record<string, u...` |
