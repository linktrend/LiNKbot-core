# src/cli/update-cli.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 8193
- **Language:** TypeScript
- **Symbols:** 38
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 34 | fn | isCancel | (private) | `const isCancel = (value: unknown) => value === ...` |
| 36 | type | ClawHubRiskHandler | (private) | - |
| 159 | fn | parse | (private) | `const parse = (value: string | null) => {` |
| 458 | fn | requireValue | (private) | `function requireValue<T>(value: T | undefined, ...` |
| 465 | type | UpdateCliScenario | (private) | - |
| 476 | fn | createCaseDir | (private) | `const createCaseDir = (prefix: string) => {` |
| 482 | fn | createTrackedTempDir | (private) | `const createTrackedTempDir = async (prefix: str...` |
| 504 | fn | setTty | (private) | `const setTty = (value: boolean | undefined) => {` |
| 511 | fn | setStdoutTty | (private) | `const setStdoutTty = (value: boolean | undefine...` |
| 518 | fn | mockPackageInstallStatus | (private) | `const mockPackageInstallStatus = (root: string)...` |
| 533 | fn | expectUpdateCallChannel | (private) | `const expectUpdateCallChannel = (channel: strin...` |
| 538 | fn | commandCalls | (private) | `const commandCalls = () =>` |
| 543 | fn | packageInstallCommandCall | (private) | `const packageInstallCommandCall = () =>` |
| 546 | fn | packagePackCommandCall | (private) | `const packagePackCommandCall = () =>` |
| 549 | fn | stripOpenClawPackageAlias | (private) | `const stripOpenClawPackageAlias = (spec: string...` |
| 556 | fn | isNpmGitPackageSpec | (private) | `const isNpmGitPackageSpec = (spec: string) => {` |
| 590 | fn | doctorCommandCall | (private) | `const doctorCommandCall = () =>` |
| 598 | fn | doctorCommandCallIndex | (private) | `const doctorCommandCallIndex = () =>` |
| 606 | fn | gatewayCommandCall | (private) | `const gatewayCommandCall = (entryPath: string, ...` |
| 611 | fn | spawnCall | (private) | `const spawnCall = (index = 0) => {` |
| 618 | fn | spawnSyncCall | (private) | `const spawnSyncCall = (index = 0) => {` |
| 625 | fn | syncPluginCall | (private) | `const syncPluginCall = (index = 0) => {` |
| 632 | fn | npmPluginUpdateCall | (private) | `const npmPluginUpdateCall = (index = 0) => {` |
| 638 | fn | lastNpmPluginUpdateCall | (private) | `const lastNpmPluginUpdateCall = () =>` |
| 658 | fn | replaceConfigCall | (private) | `const replaceConfigCall = (index = 0) => vi.moc...` |
| 659 | fn | lastReplaceConfigCall | (private) | `const lastReplaceConfigCall = () =>` |
| 661 | fn | setupConfigMutationWithRetryMock | (private) | `const setupConfigMutationWithRetryMock = () => {` |
| 688 | fn | writeJsonCall | (private) | `const writeJsonCall = (index = 0) => vi.mocked(...` |
| 689 | fn | lastWriteJsonCall | (private) | `const lastWriteJsonCall = () =>` |
| 692 | fn | probeGatewayCall | (private) | `const probeGatewayCall = (index = 0) => probeGa...` |
| 694 | fn | pluginWarning | (private) | `const pluginWarning = (result?: UpdateRunResult...` |
| 695 | fn | pluginOutcome | (private) | `const pluginOutcome = (result?: UpdateRunResult...` |
| 697 | fn | expectPackageInstallSpec | (private) | `const expectPackageInstallSpec = (spec: string)...` |
| 777 | fn | mockOwnedGitService | (private) | `const mockOwnedGitService = () => {` |
| 787 | fn | runUpdateCliScenario | (private) | `const runUpdateCliScenario = async (testCase: U...` |
| 793 | fn | runRestartFallbackScenario | (private) | `const runRestartFallbackScenario = async (param...` |
| 814 | fn | setupNonInteractiveDowngrade | (private) | `const setupNonInteractiveDowngrade = async () => {` |
| 836 | fn | setupUpdatedRootRefresh | (private) | `const setupUpdatedRootRefresh = (params?: {` |
