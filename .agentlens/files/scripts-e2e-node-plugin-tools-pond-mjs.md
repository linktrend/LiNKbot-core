# scripts/e2e/node-plugin-tools-pond.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1611
- **Language:** JavaScript
- **Symbols:** 57
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 30 | fn | parseArgs | (private) | `function parseArgs(argv) {` |
| 50 | fn | repoRoot | (private) | `function repoRoot() {` |
| 54 | fn | now | (private) | `function now() {` |
| 58 | fn | proofToken | (private) | `function proofToken() {` |
| 62 | fn | availableLoopbackPort | (private) | `async function availableLoopbackPort() {` |
| 85 | fn | logStep | (private) | `function logStep(message) {` |
| 89 | fn | writeJson | (private) | `async function writeJson(filePath, value, optio...` |
| 100 | fn | writeProofPlugin | (private) | `async function writeProofPlugin(rootDir, nodeLa...` |
| 143 | fn | readParams | (private) | `function readParams(paramsJSON) {` |
| 189 | fn | writeProofMcpServer | (private) | `async function writeProofMcpServer(rootDir) {` |
| 239 | fn | writeProofSkill | (private) | `async function writeProofSkill(stateDir, proof) {` |
| 247 | fn | writeRemoteExecProofSkill | (private) | `async function writeRemoteExecProofSkill(stateD...` |
| 255 | fn | prepareRoleState | (private) | `async function prepareRoleState(baseDir, role, ...` |
| 349 | fn | readJson | (private) | `async function readJson(filePath) {` |
| 353 | fn | enableHotPlugNodeSurfaces | (private) | `async function enableHotPlugNodeSurfaces(state,...` |
| 401 | fn | disableHotPlugNodeSurfaces | (private) | `async function disableHotPlugNodeSurfaces(state...` |
| 411 | fn | childEnv | (private) | `function childEnv(state, token, nodeLabel) {` |
| 426 | fn | spawnOpenClaw | (private) | `function spawnOpenClaw(args, options) {` |
| 441 | fn | runCommand | (private) | `async function runCommand(command, args, option...` |
| 450 | fn | waitForChild | (private) | `function waitForChild(child) {` |
| 462 | fn | runForegroundChild | (private) | `async function runForegroundChild(child) {` |
| 463 | fn | forward | (private) | `const forward = (signal) => {` |
| 478 | fn | terminate | (private) | `function terminate(child) {` |
| 496 | fn | connectVerifier | (private) | `async function connectVerifier(url, token) {` |
| 506 | fn | waitFor | (private) | `async function waitFor(label, timeoutMs, fn) {` |
| 525 | fn | connectedProofNodes | (private) | `function connectedProofNodes(nodes) {` |
| 533 | fn | isPondPairingRequest | (private) | `function isPondPairingRequest(request) {` |
| 543 | fn | approvePendingNodes | (private) | `async function approvePendingNodes(rpc) {` |
| 554 | fn | waitForProofNodes | (private) | `async function waitForProofNodes(rpc, count, op...` |
| 583 | fn | readPondPairingState | (private) | `async function readPondPairingState(rpc, nodeId) {` |
| 597 | fn | assertPairingDidNotChange | (private) | `function assertPairingDidNotChange(before, afte...` |
| 611 | fn | flattenEffectiveTools | (private) | `function flattenEffectiveTools(result) {` |
| 617 | fn | readEffectiveProofTools | (private) | `async function readEffectiveProofTools(rpc) {` |
| 625 | fn | readEffectiveMcpProofTools | (private) | `async function readEffectiveMcpProofTools(rpc) {` |
| 632 | fn | readEffectiveToolById | (private) | `async function readEffectiveToolById(rpc, toolI...` |
| 637 | fn | readEffectiveSharedProofTools | (private) | `async function readEffectiveSharedProofTools(rp...` |
| 644 | fn | readProofSkills | (private) | `async function readProofSkills(rpc, skillName =...` |
| 656 | fn | invokeProofTools | (private) | `async function invokeProofTools(rpc, tools) {` |
| 677 | fn | invokeMcpProofTool | (private) | `async function invokeMcpProofTool(rpc, tool, pr...` |
| 701 | fn | assertToolIds | (private) | `function assertToolIds(label, tools, expectedId...` |
| 709 | fn | expectedNodeToolId | (private) | `function expectedNodeToolId(nodeId, baseName) {` |
| 723 | fn | runLiveAgentTurn | (private) | `async function runLiveAgentTurn(rpc, { label, m...` |
| 754 | fn | readSessionToolCalls | (private) | `async function readSessionToolCalls(rpc, sessio...` |
| 766 | fn | assertSessionUsedTool | (private) | `async function assertSessionUsedTool(rpc, sessi...` |
| 777 | fn | assertSessionUsedNodeExec | (private) | `async function assertSessionUsedNodeExec(rpc, s...` |
| 801 | fn | runLiveChecks | (private) | `async function runLiveChecks({ rpc, mcpTool, mc...` |
| 875 | fn | pondNodeArgs | (private) | `function pondNodeArgs(port) {` |
| 890 | fn | runHotPlugLocal | (private) | `async function runHotPlugLocal(args) {` |
| 919 | fn | childOptions | (private) | `const childOptions = (state, label) => ({` |
| 929 | fn | startNode | (private) | `const startNode = (label) => {` |
| 940 | fn | stopNode | (private) | `const stopNode = async () => {` |
| 1217 | fn | runVerify | (private) | `async function runVerify({ url, token, expected...` |
| 1251 | fn | runGateway | (private) | `async function runGateway(args) {` |
| 1281 | fn | runNode | (private) | `async function runNode(args) {` |
| 1321 | fn | runLocal | (private) | `async function runLocal(args) {` |
| 1354 | fn | childOptions | (private) | `const childOptions = (state, label) => ({` |
| 1554 | fn | main | (private) | `async function main() {` |
