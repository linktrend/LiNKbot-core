# scripts/measure-rpc-rtt.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1061
- **Language:** JavaScript
- **Symbols:** 56
- **Public symbols:** 11

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 30 | fn | usage | (private) | `function usage() {` |
| 41 | fn | readFlagValue | (private) | `function readFlagValue(argv, index, flag) {` |
| 49 | fn | parsePositiveInt | (private) | `function parsePositiveInt(value, flag) {` |
| 61 | fn | parseMethodList | (private) | `function parseMethodList(value) {` |
| 73 | fn | parseArgs | pub | `export function parseArgs(argv) {` |
| 126 | fn | getFreePort | (private) | `async function getFreePort() {` |
| 143 | fn | formatErrorMessage | (private) | `function formatErrorMessage(error) {` |
| 153 | fn | readyzReportsReady | (private) | `async function readyzReportsReady(response, opt...` |
| 172 | fn | fetchReadinessProbe | (private) | `async function fetchReadinessProbe(fetchImpl, u...` |
| 207 | fn | waitForGatewayReady | pub | `export async function waitForGatewayReady({` |
| 221 | fn | getChildExit | (private) | `const getChildExit = () =>` |
| 272 | fn | isProcessAlreadyExitedError | (private) | `function isProcessAlreadyExitedError(error) {` |
| 276 | fn | defaultKillProcess | (private) | `function defaultKillProcess(pid, signal) {` |
| 280 | fn | defaultRunTaskkill | (private) | `function defaultRunTaskkill(command, args, opti...` |
| 284 | fn | defaultOpen | (private) | `async function defaultOpen(filePath, flags) {` |
| 288 | fn | resolveOpenClawLaunchArgs | (private) | `function resolveOpenClawLaunchArgs(repoRoot, so...` |
| 299 | fn | signalGatewayProcess | pub | `export function signalGatewayProcess(` |
| 346 | fn | isGatewayProcessAlive | pub | `export function isGatewayProcessAlive(` |
| 365 | fn | signalGatewayProcessForParentExit | (private) | `function signalGatewayProcessForParentExit(chil...` |
| 373 | fn | gatewayProcessAliveForParentExit | (private) | `function gatewayProcessAliveForParentExit(child...` |
| 384 | fn | installGatewayParentCleanup | pub | `export function installGatewayParentCleanup(` |
| 397 | fn | forceCleanup | (private) | `const forceCleanup = (signal) => {` |
| 403 | fn | cleanupAndReraise | (private) | `const cleanupAndReraise = (signal) => {` |
| 406 | fn | finish | (private) | `const finish = () => {` |
| 422 | fn | exitHandler | (private) | `const exitHandler = () => {` |
| 425 | fn | removeHandlers | (private) | `const removeHandlers = () => {` |
| 438 | fn | handler | (private) | `const handler = () => {` |
| 448 | fn | waitForGatewayExit | (private) | `async function waitForGatewayExit(` |
| 467 | fn | stopGateway | pub | `export async function stopGateway(child, option...` |
| 485 | fn | closeFileHandles | (private) | `async function closeFileHandles(handles) {` |
| 496 | fn | startGateway | pub | `export async function startGateway({` |
| 578 | fn | cleanupTempRoot | pub | `export async function cleanupTempRoot(tempRoot,...` |
| 588 | fn | copyLogIfPresent | (private) | `async function copyLogIfPresent(source, target) {` |
| 599 | fn | copyGatewayLogs | (private) | `async function copyGatewayLogs({ outputDir, std...` |
| 607 | fn | quantile | (private) | `function quantile(sorted, q) {` |
| 611 | fn | roundMeasuredMs | (private) | `function roundMeasuredMs(value, label) {` |
| 618 | fn | summarizeRttSamples | pub | `export function summarizeRttSamples(samples) {` |
| 632 | fn | isRecord | (private) | `function isRecord(value) {` |
| 636 | fn | assertPayloadObject | (private) | `function assertPayloadObject(method, payload) {` |
| 643 | fn | assertHealthSmokePayload | (private) | `function assertHealthSmokePayload(payload) {` |
| 671 | fn | assertConfigGetSmokePayload | (private) | `function assertConfigGetSmokePayload(payload) {` |
| 705 | fn | assertRpcSmokeResponse | pub | `export function assertRpcSmokeResponse(method, ...` |
| 718 | fn | toText | (private) | `function toText(data) {` |
| 731 | fn | createGatewayClient | pub | `export function createGatewayClient({ WebSocket...` |
| 734 | fn | rejectPending | (private) | `const rejectPending = (error) => {` |
| 764 | fn | waitOpen | (private) | `const waitOpen = async () =>` |
| 767 | fn | settle | (private) | `const settle = (callback) => {` |
| 778 | fn | onOpen | (private) | `const onOpen = () => settle(resolve);` |
| 779 | fn | onError | (private) | `const onError = (error) =>` |
| 781 | fn | onClose | (private) | `const onClose = (code, reason) =>` |
| 801 | fn | request | (private) | `const request = async (method, params, timeoutM...` |
| 813 | fn | rejectSendFailure | (private) | `const rejectSendFailure = (error) => {` |
| 827 | fn | close | (private) | `const close = () => {` |
| 834 | fn | writeSummary | (private) | `async function writeSummary({` |
| 879 | fn | main | (private) | `async function main() {` |
| 897 | fn | removeGatewayParentCleanup | (private) | `let removeGatewayParentCleanup = () => {};` |

## Public API

### `parseArgs`

```
export function parseArgs(argv) {
```

**Line:** 73 | **Kind:** fn

### `waitForGatewayReady`

```
export async function waitForGatewayReady({
```

**Line:** 207 | **Kind:** fn

### `signalGatewayProcess`

```
export function signalGatewayProcess(
```

**Line:** 299 | **Kind:** fn

### `isGatewayProcessAlive`

```
export function isGatewayProcessAlive(
```

**Line:** 346 | **Kind:** fn

### `installGatewayParentCleanup`

```
export function installGatewayParentCleanup(
```

**Line:** 384 | **Kind:** fn

### `stopGateway`

```
export async function stopGateway(child, options = {}) {
```

**Line:** 467 | **Kind:** fn

### `startGateway`

```
export async function startGateway({
```

**Line:** 496 | **Kind:** fn

### `cleanupTempRoot`

```
export async function cleanupTempRoot(tempRoot, { rmImpl = fs.rm } = {}) {
```

**Line:** 578 | **Kind:** fn

### `summarizeRttSamples`

```
export function summarizeRttSamples(samples) {
```

**Line:** 618 | **Kind:** fn

### `assertRpcSmokeResponse`

```
export function assertRpcSmokeResponse(method, response) {
```

**Line:** 705 | **Kind:** fn

### `createGatewayClient`

```
export function createGatewayClient({ WebSocket, openTimeoutMs = 8_000, url }) {
```

**Line:** 731 | **Kind:** fn
