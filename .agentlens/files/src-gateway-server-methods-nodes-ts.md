# src/gateway/server-methods/nodes.ts

[← Back to Module](../modules/src-gateway-server-methods/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1851
- **Language:** TypeScript
- **Symbols:** 31
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 123 | type | NodeWakeNudgeAttempt | (private) | - |
| 132 | type | PendingNodeAction | (private) | - |
| 144 | fn | safeNodeReadProjection | (private) | `function safeNodeReadProjection(` |
| 165 | fn | nodeReadCallerDeviceId | (private) | `function nodeReadCallerDeviceId(client: Gateway...` |
| 169 | fn | isVisibleNode | (private) | `function isVisibleNode(node: NodeListNode | nul...` |
| 173 | fn | listNodesForClient | (private) | `function listNodesForClient(params: {` |
| 194 | fn | normalizePluginSurfaceRefreshParams | (private) | `function normalizePluginSurfaceRefreshParams(` |
| 208 | fn | respondRefreshedPluginSurface | (private) | `function respondRefreshedPluginSurface(params: {` |
| 280 | fn | resolveDirectNodePushConfig | (private) | `async function resolveDirectNodePushConfig() {` |
| 287 | fn | resolveRelayNodePushConfig | (private) | `function resolveRelayNodePushConfig(` |
| 302 | fn | clearStaleApnsRegistrationIfNeeded | (private) | `async function clearStaleApnsRegistrationIfNeeded(` |
| 321 | fn | delayMs | (private) | `async function delayMs(ms: number): Promise<voi...` |
| 327 | fn | isForegroundRestrictedIosCommand | (private) | `function isForegroundRestrictedIosCommand(comma...` |
| 336 | fn | shouldQueueAsPendingForegroundAction | (private) | `function shouldQueueAsPendingForegroundAction(p...` |
| 359 | fn | prunePendingNodeActions | (private) | `function prunePendingNodeActions(nodeId: string...` |
| 371 | fn | clearRemovedNodeRuntimeState | (private) | `function clearRemovedNodeRuntimeState(params: {` |
| 384 | fn | broadcastRemovedNodePairing | (private) | `function broadcastRemovedNodePairing(params: {` |
| 400 | fn | emitNodePairingDeniedSecurityEvent | (private) | `function emitNodePairingDeniedSecurityEvent(par...` |
| 420 | fn | enforcePendingNodePairingOwnership | (private) | `async function enforcePendingNodePairingOwnersh...` |
| 457 | fn | emitNodeRoleRemovalSecurityEvent | (private) | `function emitNodeRoleRemovalSecurityEvent(param...` |
| 481 | fn | removePairedDeviceBackedNode | (private) | `async function removePairedDeviceBackedNode(par...` |
| 550 | fn | enqueuePendingNodeAction | (private) | `function enqueuePendingNodeAction(params: {` |
| 580 | fn | listPendingNodeActions | (private) | `function listPendingNodeActions(nodeId: string)...` |
| 584 | fn | refreshConnectedNodeSurfaceCaches | (private) | `function refreshConnectedNodeSurfaceCaches(para...` |
| 613 | fn | resolveAllowedPendingNodeActions | (private) | `function resolveAllowedPendingNodeActions(param...` |
| 650 | fn | ackPendingNodeActions | (private) | `function ackPendingNodeActions(nodeId: string, ...` |
| 665 | fn | toPendingParamsJSON | (private) | `function toPendingParamsJSON(params: unknown): ...` |
| 676 | fn | emitTalkPttNodeEvent | (private) | `function emitTalkPttNodeEvent(params: {` |
| 739 | fn | maybeWakeNodeWithApns | pub | `export async function maybeWakeNodeWithApns(` |
| 859 | fn | maybeSendNodeWakeNudge | pub | `export async function maybeSendNodeWakeNudge(` |
| 946 | fn | waitForNodeReconnect | pub | `export async function waitForNodeReconnect(para...` |

## Public API

### `maybeWakeNodeWithApns`

```
export async function maybeWakeNodeWithApns(
```

**Line:** 739 | **Kind:** fn

### `maybeSendNodeWakeNudge`

```
export async function maybeSendNodeWakeNudge(
```

**Line:** 859 | **Kind:** fn

### `waitForNodeReconnect`

```
export async function waitForNodeReconnect(params: {
```

**Line:** 946 | **Kind:** fn
