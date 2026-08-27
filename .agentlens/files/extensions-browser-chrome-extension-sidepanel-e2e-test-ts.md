# extensions/browser/chrome-extension/sidepanel.e2e.test.ts

[← Back to Module](../modules/extensions-browser-chrome-extension/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1020
- **Language:** TypeScript
- **Symbols:** 25
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 46 | type | RequestFrame | (private) | - |
| 53 | type | GatewayHarness | (private) | - |
| 66 | type | RelayHarness | (private) | - |
| 74 | type | TargetInfo | (private) | - |
| 76 | type | PanelTarget | (private) | - |
| 87 | fn | isSidePanelTarget | (private) | `function isSidePanelTarget(target: TargetInfo):...` |
| 95 | fn | textValue | (private) | `function textValue(value: unknown): string {` |
| 99 | fn | rawDataText | (private) | `function rawDataText(data: RawData): string {` |
| 117 | fn | listen | (private) | `async function listen(server: Server): Promise<...` |
| 129 | fn | sendResponse | (private) | `function sendResponse(socket: WebSocket, id: st...` |
| 133 | fn | sendError | (private) | `function sendError(socket: WebSocket, id: strin...` |
| 144 | fn | createRelayHarness | (private) | `async function createRelayHarness(): Promise<Re...` |
| 201 | fn | createGatewayHarness | (private) | `async function createGatewayHarness(): Promise<...` |
| 352 | fn | createFixtureServer | (private) | `async function createFixtureServer(): Promise<{...` |
| 370 | fn | copyExtension | (private) | `async function copyExtension(): Promise<string> {` |
| 399 | fn | resolveChromiumExecutable | (private) | `async function resolveChromiumExecutable(): Pro...` |
| 415 | fn | waitForServiceWorker | (private) | `async function waitForServiceWorker(context: Br...` |
| 419 | fn | restartServiceWorker | (private) | `async function restartServiceWorker(` |
| 444 | fn | createPanelTarget | (private) | `function createPanelTarget(root: CDPSession, se...` |
| 474 | fn | send | (private) | `async function send(method: string, params: Rec...` |
| 486 | fn | evaluate | (private) | `async function evaluate<T>(expression: string):...` |
| 499 | fn | selectorExpression | (private) | `const selectorExpression = (selector: string) =...` |
| 540 | fn | openTabPanel | (private) | `async function openTabPanel(params: {` |
| 593 | fn | disableTabPanel | (private) | `async function disableTabPanel(worker: Worker, ...` |
| 609 | fn | unshareTab | (private) | `async function unshareTab(worker: Worker, tabId...` |
