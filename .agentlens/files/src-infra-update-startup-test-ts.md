# src/infra/update-startup.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1251
- **Language:** TypeScript
- **Symbols:** 22
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 74 | fn | parse | (private) | `const parse = (value: string) => value.split("....` |
| 75 | fn | compareSemverStrings | (private) | `const compareSemverStrings = (a: string, b: str...` |
| 109 | type | UpdateCheckStateDatabase | (private) | - |
| 110 | type | PersistedUpdateCheckState | (private) | - |
| 126 | fn | presentString | (private) | `function presentString(value: string | null): s...` |
| 144 | fn | requireFirstRunCommandCall | (private) | `function requireFirstRunCommandCall(): Paramete...` |
| 152 | fn | readPersistedUpdateCheckState | (private) | `function readPersistedUpdateCheckState(): Persi...` |
| 182 | fn | writePersistedUpdateCheckState | (private) | `function writePersistedUpdateCheckState(state: ...` |
| 273 | fn | mockPackageUpdateStatus | (private) | `function mockPackageUpdateStatus(tag = "latest"...` |
| 278 | fn | mockPackageInstallStatus | (private) | `function mockPackageInstallStatus() {` |
| 287 | fn | mockNpmChannelTag | (private) | `function mockNpmChannelTag(tag: string, version...` |
| 294 | fn | runUpdateCheckAndReadState | (private) | `async function runUpdateCheckAndReadState(chann...` |
| 310 | fn | expectPathMissing | (private) | `async function expectPathMissing(targetPath: st...` |
| 323 | fn | createAutoUpdateSuccessMock | (private) | `function createAutoUpdateSuccessMock() {` |
| 330 | fn | createBetaAutoUpdateConfig | (private) | `function createBetaAutoUpdateConfig(params?: { ...` |
| 342 | fn | createExtendedStableConfig | (private) | `function createExtendedStableConfig(params?: { ...` |
| 352 | fn | runExtendedStableUpdateCheck | (private) | `async function runExtendedStableUpdateCheck(par...` |
| 374 | fn | seedExtendedStableAvailability | (private) | `async function seedExtendedStableAvailability(p...` |
| 386 | fn | seedStableAutoRolloutState | (private) | `function seedStableAutoRolloutState() {` |
| 396 | fn | expectStableAutoRolloutStatePreserved | (private) | `function expectStableAutoRolloutStatePreserved() {` |
| 405 | fn | runAutoUpdateCheckWithDefaults | (private) | `async function runAutoUpdateCheckWithDefaults(p...` |
| 418 | fn | runStableUpdateCheck | (private) | `async function runStableUpdateCheck(params: {` |
