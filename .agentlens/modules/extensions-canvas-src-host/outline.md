# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/canvas/src/host/server.test.ts (697 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | MockWatcher | (private) |
| 20 | type | CanvasWatchFactory | (private) |
| 23 | type | CanvasWatchCall | (private) |
| 28 | type | TrackingWebSocket | (private) |
| 35 | type | CapturedResponse | (private) |
| 43 | type | HttpRequestHandler | (private) |
| 48 | fn | createMockWatcherState | (private) |
| 51 | fn | createWatcher | (private) |
| 80 | fn | captureHttpResponse | (private) |
| 115 | fn | captureHandlerResponse | (private) |
| 123 | fn | captureA2uiFixtureResponse | (private) |
| 136 | fn | extractInjectedScript | (private) |
| 144 | type | MockLiveReloadSocket | (private) |
| 150 | fn | runInjectedScript | (private) |
| 206 | fn | createCaseDir | (private) |
| 212 | fn | createTestCanvasHostHandler | (private) |
| 301 | fn | ThrowingWebSocket | (private) |
| 312 | fn | CapturingWebSocket | (private) |
| 456 | class | CapturingWebSocketServer | (private) |

## extensions/canvas/src/host/server.ts (524 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | CanvasHostOpts | (private) |
| 46 | type | CanvasHostServerOpts | (private) |
| 52 | type | CanvasHostServer | pub |
| 59 | type | CanvasHostHandlerOpts | (private) |
| 70 | type | CanvasHostHandler | pub |
| 78 | fn | defaultIndexHTML | (private) |
| 119 | fn | log | (private) |
| 121 | fn | hasIOS | (private) |
| 127 | fn | hasAndroid | (private) |
| 132 | fn | hasHelper | (private) |
| 146 | fn | onStatus | (private) |
| 152 | fn | send | (private) |
| 179 | fn | isDisabledByEnv | (private) |
| 192 | fn | normalizeBasePath | (private) |
| 206 | fn | prepareCanvasRoot | (private) |
| 222 | fn | resolveDefaultCanvasRoot | (private) |
| 226 | fn | shouldIgnoreCanvasWatchPath | (private) |
| 239 | fn | createCanvasHostHandler | pub |
| 276 | fn | broadcastReload | (private) |
| 282 | fn | scheduleReload | (private) |
| 319 | fn | handleUpgrade | (private) |
| 333 | fn | handleHttpRequest | (private) |
| 440 | fn | startCanvasHost | pub |
| 493 | fn | onError | (private) |
| 497 | fn | onListening | (private) |
