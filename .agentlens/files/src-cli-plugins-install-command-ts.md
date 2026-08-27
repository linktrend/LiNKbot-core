# src/cli/plugins-install-command.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1278
- **Language:** TypeScript
- **Symbols:** 26
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 77 | type | ConfigSnapshotForInstallExecution | (private) | - |
| 82 | fn | isClawHubBlockedCliFailure | (private) | `function isClawHubBlockedCliFailure(result: { c...` |
| 90 | fn | resolveInstallMode | (private) | `function resolveInstallMode(force?: boolean): "...` |
| 94 | fn | resolveInstallSafetyOverrides | (private) | `function resolveInstallSafetyOverrides(override...` |
| 102 | fn | probeHookPackFromNpmSpec | (private) | `async function probeHookPackFromNpmSpec(` |
| 112 | fn | probeHookPackFromPath | (private) | `async function probeHookPackFromPath(` |
| 125 | fn | supportsPluginRecoveryIncludeShape | (private) | `function supportsPluginRecoveryIncludeShape(par...` |
| 132 | fn | resolveFullyBlockedConfigMutationReason | (private) | `function resolveFullyBlockedConfigMutationReason(` |
| 144 | fn | assertPluginConfigMutationAllowed | (private) | `function assertPluginConfigMutationAllowed(pref...` |
| 150 | fn | tryInstallHookPackFromLocalPath | (private) | `async function tryInstallHookPackFromLocalPath(...` |
| 242 | fn | tryInstallHookPackFromNpmSpec | (private) | `async function tryInstallHookPackFromNpmSpec(pa...` |
| 285 | fn | tryInstallPluginOrHookPackFromNpmSpec | (private) | `async function tryInstallPluginOrHookPackFromNp...` |
| 413 | fn | tryInstallPluginFromNpmPackArchive | (private) | `async function tryInstallPluginFromNpmPackArchi...` |
| 463 | fn | tryInstallPluginFromGitSpec | (private) | `async function tryInstallPluginFromGitSpec(para...` |
| 503 | fn | isTerminalPluginInstallFailure | (private) | `function isTerminalPluginInstallFailure(code?: ...` |
| 511 | fn | isAllowedPluginRecoveryIssue | (private) | `function isAllowedPluginRecoveryIssue(` |
| 533 | fn | buildInvalidPluginInstallConfigError | (private) | `function buildInvalidPluginInstallConfigError(m...` |
| 539 | fn | extractMissingPluginLoadPath | (private) | `function extractMissingPluginLoadPath(issue: { ...` |
| 552 | fn | collectRequestedPluginInstallPaths | (private) | `function collectRequestedPluginInstallPaths(` |
| 572 | fn | isOwnedMissingPluginLoadPathIssue | (private) | `function isOwnedMissingPluginLoadPathIssue(` |
| 581 | fn | collectRequestedPluginLocationBridgePaths | (private) | `async function collectRequestedPluginLocationBr...` |
| 597 | fn | removeOwnedMissingPluginLoadPaths | (private) | `function removeOwnedMissingPluginLoadPaths(` |
| 636 | fn | resolveRequestedPluginInstallPaths | (private) | `async function resolveRequestedPluginInstallPaths(` |
| 662 | fn | loadConfigFromSnapshotForInstall | (private) | `async function loadConfigFromSnapshotForInstall(` |
| 721 | fn | loadConfigForInstall | (private) | `async function loadConfigForInstall(` |
| 758 | fn | runPluginInstallCommand | pub | `export async function runPluginInstallCommand(p...` |

## Public API

### `runPluginInstallCommand`

```
export async function runPluginInstallCommand(params: {
```

**Line:** 758 | **Kind:** fn
