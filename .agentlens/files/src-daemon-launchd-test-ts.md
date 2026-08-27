# src/daemon/launchd.test.ts

[← Back to Module](../modules/src-daemon/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2628
- **Language:** TypeScript
- **Symbols:** 11
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 73 | fn | countMatching | (private) | `function countMatching<T>(items: readonly T[], ...` |
| 83 | fn | readPlistProgramArgumentStrings | (private) | `function readPlistProgramArgumentStrings(plist:...` |
| 90 | fn | createDefaultLaunchdEnv | (private) | `function createDefaultLaunchdEnv(): Record<stri...` |
| 97 | fn | createTestLaunchAgentPlist | (private) | `function createTestLaunchAgentPlist(params: {` |
| 131 | fn | setLaunchAgentPlist | (private) | `function setLaunchAgentPlist(params: {` |
| 143 | fn | withProcessEnv | (private) | `async function withProcessEnv<T>(` |
| 170 | fn | runStopLaunchAgentWithFakeTimers | (private) | `async function runStopLaunchAgentWithFakeTimers...` |
| 186 | fn | expectLaunchctlEnableBootstrapOrder | (private) | `function expectLaunchctlEnableBootstrapOrder(en...` |
| 205 | fn | expectRestartLaunchAgentKickstartFailure | (private) | `async function expectRestartLaunchAgentKickstar...` |
| 216 | fn | launchctlCommandNames | (private) | `function launchctlCommandNames(): string[] {` |
| 220 | fn | normalizeLaunchctlArgs | (private) | `function normalizeLaunchctlArgs(file: string, a...` |
