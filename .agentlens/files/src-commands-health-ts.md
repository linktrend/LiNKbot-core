# src/commands/health.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1140
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 79 | fn | debugHealth | (private) | `const debugHealth = (cfg: OpenClawConfig | unde...` |
| 85 | fn | isGatewayHealthAuthUnavailableError | (private) | `function isGatewayHealthAuthUnavailableError(er...` |
| 89 | fn | emitReachableGatewayAuthDiagnostic | pub | `export async function emitReachableGatewayAuthD...` |
| 133 | fn | loadConfigRuntime | (private) | `const loadConfigRuntime = async () => await imp...` |
| 203 | fn | formatEventLoopHealthLine | (private) | `function formatEventLoopHealthLine(summary: Hea...` |
| 218 | fn | formatModelPricingHealthLine | pub | `export function formatModelPricingHealthLine(su...` |
| 230 | fn | buildContextEngineHealthSummary | (private) | `function buildContextEngineHealthSummary(): Con...` |
| 248 | fn | formatContextEngineHealthLine | pub | `export function formatContextEngineHealthLine(s...` |
| 258 | fn | buildDeliveryQueueHealthSummary | pub | `export function buildDeliveryQueueHealthSummary...` |
| 302 | fn | formatDeliveryQueueHealthLine | pub | `export function formatDeliveryQueueHealthLine(` |
| 326 | fn | formatConfigReloadHealthLine | pub | `export function formatConfigReloadHealthLine(su...` |
| 333 | fn | resolveHeartbeatSummary | (private) | `const resolveHeartbeatSummary = (cfg: OpenClawC...` |
| 336 | fn | resolveAgentOrder | (private) | `const resolveAgentOrder = (cfg: OpenClawConfig)...` |
| 368 | fn | buildSessionSummary | (private) | `const buildSessionSummary = async (storePath: s...` |
| 400 | fn | buildPluginHealthSummary | (private) | `function buildPluginHealthSummary(): PluginHeal...` |
| 452 | fn | readBooleanField | (private) | `function readBooleanField(value: unknown, key: ...` |
| 462 | fn | resolveProbeAccountEnabled | (private) | `function resolveProbeAccountEnabled(params: {` |
| 484 | fn | resolveProbeAccountConfigured | (private) | `async function resolveProbeAccountConfigured(pa...` |
| 507 | fn | resolveHealthAccountContext | (private) | `async function resolveHealthAccountContext(para...` |
| 573 | fn | getHealthSnapshot | pub | `export async function getHealthSnapshot(params?: {` |
| 809 | fn | healthCommand | pub | `export async function healthCommand(` |
| 978 | fn | accountIdsByChannel | (private) | `const accountIdsByChannel = (() => {` |
| 1131 | fn | readBestEffortHealthConfig | (private) | `async function readBestEffortHealthConfig(): Pr...` |
| 1136 | fn | readRuntimeHealthConfig | (private) | `async function readRuntimeHealthConfig(): Promi...` |

## Public API

### `emitReachableGatewayAuthDiagnostic`

```
export async function emitReachableGatewayAuthDiagnostic(params: {
```

**Line:** 89 | **Kind:** fn

### `formatModelPricingHealthLine`

```
export function formatModelPricingHealthLine(summary: HealthSummary): string | null {
```

**Line:** 218 | **Kind:** fn

### `formatContextEngineHealthLine`

```
export function formatContextEngineHealthLine(summary: HealthSummary): string | null {
```

**Line:** 248 | **Kind:** fn

### `buildDeliveryQueueHealthSummary`

```
export function buildDeliveryQueueHealthSummary(): DeliveryQueueHealthSummary | undefined {
```

**Line:** 258 | **Kind:** fn

### `formatDeliveryQueueHealthLine`

```
export function formatDeliveryQueueHealthLine(
```

**Line:** 302 | **Kind:** fn

### `formatConfigReloadHealthLine`

```
export function formatConfigReloadHealthLine(summary: HealthSummary): string | null {
```

**Line:** 326 | **Kind:** fn

### `getHealthSnapshot`

```
export async function getHealthSnapshot(params?: {
```

**Line:** 573 | **Kind:** fn

### `healthCommand`

```
export async function healthCommand(
```

**Line:** 809 | **Kind:** fn
