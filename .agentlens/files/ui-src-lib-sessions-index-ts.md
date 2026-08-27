# ui/src/lib/sessions/index.ts

[← Back to Module](../modules/ui-src-lib-sessions/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1750
- **Language:** TypeScript
- **Symbols:** 62
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 60 | type | SessionState | (private) | - |
| 71 | type | SessionGroupMutationResult | (private) | - |
| 73 | type | SessionListOptions | pub | - |
| 94 | type | SessionRefreshOptions | (private) | - |
| 100 | type | SessionRunTerminal | pub | - |
| 110 | type | SessionDeleteOptions | (private) | - |
| 116 | type | SessionDeleteTarget | (private) | - |
| 124 | type | SessionDeleteOutcome | (private) | - |
| 129 | type | SessionDeleteBatchResult | (private) | - |
| 136 | type | SessionCompactResult | (private) | - |
| 143 | type | SessionSteerResult | (private) | - |
| 148 | type | SessionResetOptions | (private) | - |
| 152 | type | SessionResetResult | (private) | - |
| 154 | type | SessionGateway | (private) | - |
| 166 | type | SessionRequestClient | (private) | - |
| 168 | type | SessionDeleteResponse | (private) | - |
| 173 | type | SessionConnectionScope | (private) | - |
| 178 | type | SessionMessageSubscription | (private) | - |
| 183 | type | SessionCapability | pub | - |
| 300 | fn | buildSessionRequestParams | (private) | `function buildSessionRequestParams(` |
| 312 | fn | buildTranscriptMutationParams | (private) | `function buildTranscriptMutationParams(` |
| 324 | fn | buildSessionListParams | (private) | `function buildSessionListParams(options: Sessio...` |
| 375 | fn | requestSessionList | (private) | `async function requestSessionList(` |
| 386 | fn | requestSessionPatch | (private) | `function requestSessionPatch(` |
| 398 | fn | requestSessionDelete | (private) | `function requestSessionDelete(` |
| 410 | fn | confirmsSessionDeletion | (private) | `function confirmsSessionDeletion(response: Sess...` |
| 416 | fn | requestSessionReset | (private) | `function requestSessionReset(` |
| 428 | fn | requestSessionCompact | (private) | `function requestSessionCompact(` |
| 438 | fn | requestSessionSteer | (private) | `function requestSessionSteer(` |
| 450 | fn | requestSessionFilesList | (private) | `function requestSessionFilesList(` |
| 463 | fn | requestSessionFile | (private) | `function requestSessionFile(` |
| 476 | fn | requestSessionFileSet | (private) | `function requestSessionFileSet(` |
| 492 | fn | subscribeSessionGateway | (private) | `function subscribeSessionGateway(client: Sessio...` |
| 496 | fn | subscribeSessionMessages | (private) | `async function subscribeSessionMessages(` |
| 514 | fn | unsubscribeSessionMessages | pub | `export function unsubscribeSessionMessages(` |
| 526 | fn | listSessionCheckpoints | (private) | `async function listSessionCheckpoints(` |
| 537 | fn | branchSessionCheckpoint | (private) | `function branchSessionCheckpoint(` |
| 549 | fn | restoreSessionCheckpoint | (private) | `function restoreSessionCheckpoint(` |
| 561 | fn | rewindSessionAtMessage | (private) | `function rewindSessionAtMessage(` |
| 573 | fn | forkSessionAtMessage | (private) | `function forkSessionAtMessage(` |
| 585 | fn | listSessionBranches | (private) | `function listSessionBranches(` |
| 596 | fn | switchSessionBranch | (private) | `function switchSessionBranch(` |
| 608 | fn | appendSessionResults | (private) | `function appendSessionResults(` |
| 636 | fn | isSessionStateEvent | (private) | `function isSessionStateEvent(event: GatewayEven...` |
| 640 | fn | reconcileSessionRunTerminal | pub | `export function reconcileSessionRunTerminal(` |
| 706 | fn | createSessionCapability | pub | `export function createSessionCapability(gateway...` |
| 763 | fn | publish | (private) | `const publish = (next: SessionState) => {` |
| 770 | fn | setModelOverride | (private) | `const setModelOverride = (key: string, value: s...` |
| 794 | fn | rollbackPendingModelPatches | (private) | `const rollbackPendingModelPatches = () => {` |
| 802 | fn | load | (private) | `const load = async (options: SessionRefreshOpti...` |
| 881 | fn | drainRefreshQueue | (private) | `const drainRefreshQueue = async (options: Sessi...` |
| 894 | fn | refresh | (private) | `const refresh = (options: SessionRefreshOptions...` |
| 917 | fn | refreshReplacement | (private) | `const refreshReplacement = (agentId?: string | ...` |
| 926 | fn | createResult | (private) | `const createResult = async (params: SessionCrea...` |
| 958 | fn | create | (private) | `const create = async (params: SessionCreatePara...` |
| 970 | fn | clearGroupsRetry | (private) | `const clearGroupsRetry = () => {` |
| 977 | fn | invalidateGroupsLoad | (private) | `const invalidateGroupsLoad = () => {` |
| 994 | fn | publishGroups | (private) | `const publishGroups = (groups: readonly string[...` |
| 1031 | fn | loadGroups | (private) | `const loadGroups = async (` |
| 1085 | fn | groupsLoad | (private) | `const groupsLoad = async () => {` |
| 1181 | fn | restoreModelOverride | (private) | `const restoreModelOverride = () => {` |
| 1467 | fn | unsubscribeMessages | (private) | `const unsubscribeMessages = async (subscription...` |

## Public API

### `unsubscribeSessionMessages`

```
export function unsubscribeSessionMessages(
```

**Line:** 514 | **Kind:** fn

### `reconcileSessionRunTerminal`

```
export function reconcileSessionRunTerminal(
```

**Line:** 640 | **Kind:** fn

### `createSessionCapability`

```
export function createSessionCapability(gateway: SessionGateway): SessionCapability {
```

**Line:** 706 | **Kind:** fn
