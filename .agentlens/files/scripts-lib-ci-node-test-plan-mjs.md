# scripts/lib/ci-node-test-plan.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1552
- **Language:** JavaScript
- **Symbols:** 30
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 195 | fn | isExclusiveCompactGroup | (private) | `function isExclusiveCompactGroup(group) {` |
| 207 | fn | applyCompactGroupWorkerPins | (private) | `function applyCompactGroupWorkerPins(group) {` |
| 214 | fn | estimateCompactGroupSeconds | (private) | `function estimateCompactGroupSeconds(group) {` |
| 273 | fn | listTestFiles | (private) | `function listTestFiles(rootDir) {` |
| 277 | fn | createAutoReplyReplySplitShards | (private) | `function createAutoReplyReplySplitShards() {` |
| 339 | fn | resolveCommandShardName | (private) | `function resolveCommandShardName(file) {` |
| 412 | fn | createAgenticCommandSplitShards | (private) | `function createAgenticCommandSplitShards() {` |
| 449 | fn | resolveAgentCoreShardName | (private) | `function resolveAgentCoreShardName(file) {` |
| 515 | fn | createAgentCoreSplitShards | (private) | `function createAgentCoreSplitShards() {` |
| 589 | fn | isGatewayServerTestFile | (private) | `function isGatewayServerTestFile(file) {` |
| 598 | fn | resolveGatewayStartupShardName | (private) | `function resolveGatewayStartupShardName(file) {` |
| 618 | fn | resolveGatewayServerShardName | (private) | `function resolveGatewayServerShardName(file) {` |
| 697 | fn | createGatewayServerSplitShards | (private) | `function createGatewayServerSplitShards() {` |
| 739 | fn | resolveCronShardName | (private) | `function resolveCronShardName(file) {` |
| 750 | fn | createCronSplitShards | (private) | `function createCronSplitShards() {` |
| 767 | fn | resolveInfraShardName | (private) | `function resolveInfraShardName(file) {` |
| 964 | fn | createInfraSplitShards | (private) | `function createInfraSplitShards() {` |
| 1015 | fn | createUnitFastSplitShards | (private) | `function createUnitFastSplitShards() {` |
| 1044 | fn | createToolingSplitShards | (private) | `function createToolingSplitShards() {` |
| 1228 | fn | formatNodeTestShardCheckName | (private) | `function formatNodeTestShardCheckName(shardName) {` |
| 1236 | fn | createNodeTestShards | pub | `export function createNodeTestShards(options = ...` |
| 1292 | fn | resolveCiNodeTestRunner | (private) | `function resolveCiNodeTestRunner(shard) {` |
| 1301 | fn | bundleNameForConfigs | (private) | `function bundleNameForConfigs(configs) {` |
| 1309 | fn | compareFullNodeTestAdmissionOrder | (private) | `function compareFullNodeTestAdmissionOrder(a, b) {` |
| 1318 | fn | stripeFileWeight | (private) | `function stripeFileWeight(file) {` |
| 1325 | fn | createStripedBatches | (private) | `function createStripedBatches(values, batchCoun...` |
| 1349 | fn | listCompactToolingTestFiles | (private) | `function listCompactToolingTestFiles() {` |
| 1380 | fn | createNodeTestShardBundles | pub | `export function createNodeTestShardBundles(opti...` |
| 1460 | fn | assignVitestFsCacheWriter | pub | `export function assignVitestFsCacheWriter(shard...` |
| 1473 | fn | createCompactNodeTestShardBundles | (private) | `function createCompactNodeTestShardBundles(opti...` |

## Public API

### `createNodeTestShards`

```
export function createNodeTestShards(options = {}) {
```

**Line:** 1236 | **Kind:** fn

### `createNodeTestShardBundles`

```
export function createNodeTestShardBundles(options = {}) {
```

**Line:** 1380 | **Kind:** fn

### `assignVitestFsCacheWriter`

```
export function assignVitestFsCacheWriter(shards) {
```

**Line:** 1460 | **Kind:** fn
