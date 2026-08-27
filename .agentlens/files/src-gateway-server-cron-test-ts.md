# src/gateway/server.cron.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2085
- **Language:** TypeScript
- **Symbols:** 25
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 68 | fn | getCronSuiteTempRoot | (private) | `async function getCronSuiteTempRoot(): Promise<...` |
| 75 | fn | yieldToEventLoop | (private) | `async function yieldToEventLoop() {` |
| 79 | fn | rmTempDir | (private) | `async function rmTempDir(dir: string) {` |
| 96 | fn | waitForCronEvent | (private) | `async function waitForCronEvent(` |
| 112 | fn | createCronCasePaths | (private) | `async function createCronCasePaths(tempPrefix: ...` |
| 123 | fn | cleanupCronTestRun | (private) | `async function cleanupCronTestRun(params: {` |
| 145 | fn | setupCronTestRun | (private) | `async function setupCronTestRun(params: {` |
| 168 | type | DirectCronState | (private) | - |
| 172 | type | CronBroadcast | (private) | - |
| 174 | type | DirectCronResponse | (private) | - |
| 180 | fn | createDirectCronState | (private) | `async function createDirectCronState(params?: {` |
| 198 | fn | createCronEventCollector | (private) | `function createCronEventCollector() {` |
| 206 | fn | flush | (private) | `const flush = (payload: Record<string, unknown>...` |
| 250 | fn | directCronReq | (private) | `async function directCronReq(` |
| 257 | fn | respond | (private) | `const respond = (` |
| 301 | fn | expectCronJobIdFromResponse | (private) | `function expectCronJobIdFromResponse(response: ...` |
| 309 | fn | addMainSystemEventCronJobDirect | (private) | `async function addMainSystemEventCronJobDirect(...` |
| 325 | fn | addWebhookCronJob | (private) | `async function addWebhookCronJob(params: {` |
| 349 | fn | writeCronConfig | (private) | `async function writeCronConfig(config: unknown) {` |
| 357 | fn | runCronJobForce | (private) | `async function runCronJobForce(ws: WebSocket, i...` |
| 364 | fn | expectEnqueuedRunPayload | (private) | `function expectEnqueuedRunPayload(payload: unkn...` |
| 372 | fn | expectRecordFields | (private) | `function expectRecordFields(actual: unknown, ex...` |
| 379 | fn | expectFailureAnnounceCall | (private) | `function expectFailureAnnounceCall(params: {` |
| 405 | fn | runCronJobAndWaitForFinished | (private) | `async function runCronJobAndWaitForFinished(ws:...` |
| 414 | fn | getWebhookCall | (private) | `function getWebhookCall(index: number) {` |
