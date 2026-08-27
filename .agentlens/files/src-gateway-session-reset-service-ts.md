# src/gateway/session-reset-service.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1396
- **Language:** TypeScript
- **Symbols:** 22
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 88 | fn | archiveSessionTranscriptsForSessionDetailed | pub | `export function archiveSessionTranscriptsForSes...` |
| 109 | fn | emitGatewaySessionEndPluginHook | pub | `export function emitGatewaySessionEndPluginHook...` |
| 165 | fn | emitGatewaySessionStartPluginHook | pub | `export function emitGatewaySessionStartPluginHo...` |
| 212 | type | DrainActiveSessionsForShutdownResult | (private) | - |
| 227 | fn | drainActiveSessionsForShutdown | pub | `export async function drainActiveSessionsForShu...` |
| 298 | fn | emitSessionUnboundLifecycleEvent | pub | `export async function emitSessionUnboundLifecyc...` |
| 331 | fn | ensureSessionRuntimeCleanup | (private) | `async function ensureSessionRuntimeCleanup(para...` |
| 345 | fn | closeTrackedBrowserTabs | (private) | `const closeTrackedBrowserTabs = async () => {` |
| 379 | fn | retireMcpRuntime | (private) | `const retireMcpRuntime = async (retainAcrossReu...` |
| 392 | fn | ensureMcpRetirementWatcher | (private) | `const ensureMcpRetirementWatcher = () => {` |
| 397 | fn | watcher | (private) | `const watcher = (async () => {` |
| 448 | fn | runAcpCleanupStep | (private) | `async function runAcpCleanupStep(params: {` |
| 466 | fn | closeAcpRuntimeForSession | (private) | `async function closeAcpRuntimeForSession(params: {` |
| 590 | fn | buildPendingAcpMeta | (private) | `function buildPendingAcpMeta(base: SessionAcpMe...` |
| 613 | fn | ensureFreshAcpResetState | (private) | `async function ensureFreshAcpResetState(params: {` |
| 677 | fn | closeChildAcpRuntimesForParent | (private) | `async function closeChildAcpRuntimesForParent(p...` |
| 741 | fn | cleanupSessionBeforeMutation | pub | `export async function cleanupSessionBeforeMutat...` |
| 814 | fn | emitGatewayBeforeResetPluginHook | pub | `export async function emitGatewayBeforeResetPlu...` |
| 862 | fn | readGatewayBeforeResetPluginHookMessages | (private) | `async function readGatewayBeforeResetPluginHook...` |
| 894 | fn | performGatewaySessionReset | pub | `export async function performGatewaySessionRese...` |
| 924 | fn | resetTarget | (private) | `const resetTarget = (() => {` |
| 1076 | fn | isResetLifecycleCurrent | (private) | `const isResetLifecycleCurrent = () => {` |

## Public API

### `archiveSessionTranscriptsForSessionDetailed`

```
export function archiveSessionTranscriptsForSessionDetailed(params: {
```

**Line:** 88 | **Kind:** fn

### `emitGatewaySessionEndPluginHook`

```
export function emitGatewaySessionEndPluginHook(params: {
```

**Line:** 109 | **Kind:** fn

### `emitGatewaySessionStartPluginHook`

```
export function emitGatewaySessionStartPluginHook(params: {
```

**Line:** 165 | **Kind:** fn

### `drainActiveSessionsForShutdown`

```
export async function drainActiveSessionsForShutdown(params: {
```

**Line:** 227 | **Kind:** fn

### `emitSessionUnboundLifecycleEvent`

```
export async function emitSessionUnboundLifecycleEvent(params: {
```

**Line:** 298 | **Kind:** fn

### `cleanupSessionBeforeMutation`

```
export async function cleanupSessionBeforeMutation(params: {
```

**Line:** 741 | **Kind:** fn

### `emitGatewayBeforeResetPluginHook`

```
export async function emitGatewayBeforeResetPluginHook(params: {
```

**Line:** 814 | **Kind:** fn

### `performGatewaySessionReset`

```
export async function performGatewaySessionReset(params: {
```

**Line:** 894 | **Kind:** fn
