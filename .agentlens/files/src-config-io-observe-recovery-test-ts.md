# src/config/io.observe-recovery.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1298
- **Language:** TypeScript
- **Symbols:** 27
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 25 | type | ConfigHealthDatabase | (private) | - |
| 26 | type | ObserveRecoveryDeps | (private) | - |
| 28 | fn | resolveLastKnownGoodConfigPath | (private) | `function resolveLastKnownGoodConfigPath(configP...` |
| 44 | fn | withSuiteHome | (private) | `async function withSuiteHome<T>(fn: (home: stri...` |
| 63 | fn | readConfigHealthRow | (private) | `function readConfigHealthRow(home: string, conf...` |
| 80 | fn | seedConfig | (private) | `async function seedConfig(configPath: string, c...` |
| 85 | fn | seedConfigBackup | (private) | `async function seedConfigBackup(configPath: str...` |
| 90 | fn | writeConfigRaw | (private) | `async function writeConfigRaw(configPath: strin...` |
| 96 | fn | writeClobberedUpdateChannel | (private) | `async function writeClobberedUpdateChannel(conf...` |
| 104 | fn | readObserveEvents | (private) | `async function readObserveEvents(auditPath: str...` |
| 112 | fn | listClobberFiles | (private) | `async function listClobberFiles(configPath: str...` |
| 124 | fn | expectPathMissing | (private) | `async function expectPathMissing(targetPath: st...` |
| 133 | fn | warnMessages | (private) | `function warnMessages(warn: ReturnType<typeof v...` |
| 137 | fn | expectWarnContaining | (private) | `function expectWarnContaining(warn: ReturnType<...` |
| 141 | fn | expectWarnNotContaining | (private) | `function expectWarnNotContaining(warn: ReturnTy...` |
| 145 | fn | observeSuspicious | (private) | `function observeSuspicious(observe: Record<stri...` |
| 151 | fn | expectSuspiciousIncludes | (private) | `function expectSuspiciousIncludes(` |
| 158 | fn | expectSuspiciousMatching | (private) | `function expectSuspiciousMatching(observe: Reco...` |
| 162 | fn | readLastObserveEvent | (private) | `async function readLastObserveEvent(` |
| 168 | fn | createTestConfigIO | (private) | `function createTestConfigIO(` |
| 191 | fn | recoverClobberedUpdateChannel | (private) | `async function recoverClobberedUpdateChannel(pa...` |
| 203 | fn | recoverSuspiciousConfigRead | (private) | `async function recoverSuspiciousConfigRead(para...` |
| 217 | fn | recoverClobberedUpdateChannelSync | (private) | `function recoverClobberedUpdateChannelSync(para...` |
| 229 | fn | makeSnapshot | (private) | `async function makeSnapshot(configPath: string,...` |
| 249 | fn | makeDeps | (private) | `function makeDeps(` |
| 273 | fn | withAsyncChmodFailure | (private) | `function withAsyncChmodFailure(` |
| 296 | fn | withSyncChmodFailure | (private) | `function withSyncChmodFailure(` |
