# src/gateway/server-channels.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1128
- **Language:** TypeScript
- **Symbols:** 30
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 54 | fn | waitForChannelStartupHandoff | (private) | `function waitForChannelStartupHandoff(): Promis...` |
| 61 | type | ChannelRuntimeStore | (private) | - |
| 68 | fn | sanitizeAbortedTaskStatusPatch | (private) | `function sanitizeAbortedTaskStatusPatch(` |
| 99 | type | HealthMonitorConfig | (private) | - |
| 105 | type | ChannelHealthMonitorConfig | (private) | - |
| 109 | type | ChannelAutostartSuppression | pub | - |
| 114 | type | GatewayStartupTrace | (private) | - |
| 118 | fn | createRuntimeStore | (private) | `function createRuntimeStore(): ChannelRuntimeSt...` |
| 127 | fn | resolveDefaultRuntime | (private) | `function resolveDefaultRuntime(channelId: Chann...` |
| 132 | fn | cloneDefaultRuntime | (private) | `function cloneDefaultRuntime(channelId: Channel...` |
| 136 | fn | waitForChannelStopGracefully | (private) | `async function waitForChannelStopGracefully(tas...` |
| 151 | fn | resolveSettled | (private) | `const resolveSettled = () => {` |
| 163 | fn | applyDescribedAccountFields | (private) | `function applyDescribedAccountFields(` |
| 182 | type | ChannelManagerOptions | (private) | - |
| 229 | type | StopChannelOptions | (private) | - |
| 233 | fn | waitForDeferredAccountStart | (private) | `async function waitForDeferredAccountStart(` |
| 248 | type | ChannelManager | pub | - |
| 266 | fn | createChannelManager | pub | `export function createChannelManager(opts: Chan...` |
| 285 | fn | restartKey | (private) | `const restartKey = (channelId: ChannelId, accou...` |
| 417 | fn | evictStaleChannelAccountState | (private) | `const evictStaleChannelAccountState = (` |
| 439 | fn | startChannelInternal | (private) | `const startChannelInternal = async (` |
| 543 | fn | stopTaskScopedApprovalRuntime | (private) | `const stopTaskScopedApprovalRuntime = async () ...` |
| 551 | fn | cleanupTaskScopedApprovalRuntime | (private) | `const cleanupTaskScopedApprovalRuntime = async ...` |
| 675 | fn | runStartAccount | (private) | `const runStartAccount = () => {` |
| 677 | fn | recordDuration | (private) | `const recordDuration = () => {` |
| 867 | fn | isCurrentTask | (private) | `function isCurrentTask() {` |
| 900 | fn | startChannel | (private) | `const startChannel = async (` |
| 908 | fn | stopChannel | (private) | `const stopChannel = async (` |
| 1003 | fn | startChannels | (private) | `const startChannels = async () => {` |
| 1039 | fn | markChannelLoggedOut | (private) | `const markChannelLoggedOut = (channelId: Channe...` |

## Public API

### `createChannelManager`

```
export function createChannelManager(opts: ChannelManagerOptions): ChannelManager {
```

**Line:** 266 | **Kind:** fn
