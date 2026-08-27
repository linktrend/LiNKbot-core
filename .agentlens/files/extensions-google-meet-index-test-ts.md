# extensions/google-meet/index.test.ts

[← Back to Module](../modules/extensions-google-meet/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 8593
- **Language:** TypeScript
- **Symbols:** 46
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 59 | type | GoogleMeetManifestConfigSchema | (private) | - |
| 66 | fn | createIsolatedTestDir | (private) | `function createIsolatedTestDir(prefix: string):...` |
| 72 | type | MeetRealtimeAudioSpawn | (private) | - |
| 76 | fn | createTestMeetRealtimeAudioTransport | (private) | `function createTestMeetRealtimeAudioTransport() {` |
| 101 | fn | createEmptyMeetingRealtimeAudioEngineHealth | (private) | `function createEmptyMeetingRealtimeAudioEngineH...` |
| 117 | fn | createGoogleMeetTestEngineBindings | (private) | `function createGoogleMeetTestEngineBindings(par...` |
| 137 | type | TestLocalAgentEngineParams | (private) | - |
| 147 | fn | startTestLocalAgentAudioBridge | (private) | `async function startTestLocalAgentAudioBridge(p...` |
| 167 | type | TestLocalRealtimeEngineParams | (private) | - |
| 177 | fn | startTestLocalRealtimeAudioBridge | (private) | `async function startTestLocalRealtimeAudioBridg...` |
| 197 | type | TestNodeRealtimeEngineParams | (private) | - |
| 206 | fn | startTestNodeRealtimeAudioBridge | (private) | `async function startTestNodeRealtimeAudioBridge...` |
| 288 | fn | setup | (private) | `function setup(` |
| 329 | fn | resolveGoogleMeetConfigFromTestEnv | (private) | `function resolveGoogleMeetConfigFromTestEnv(env...` |
| 339 | fn | jsonResponse | (private) | `function jsonResponse(value: unknown): Response {` |
| 346 | fn | requireGoogleMeetManifestConfigSchema | (private) | `function requireGoogleMeetManifestConfigSchema(...` |
| 355 | fn | requireConfigProperty | (private) | `function requireConfigProperty(` |
| 366 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 370 | type | MockSessionEntry | (private) | - |
| 376 | fn | createMockSessionRuntime | (private) | `function createMockSessionRuntime(sessionStore:...` |
| 409 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 416 | fn | mockCall | (private) | `function mockCall(mock: { mock: { calls: unknow...` |
| 424 | fn | mockCallArg | (private) | `function mockCallArg(mock: { mock: { calls: unk...` |
| 428 | fn | expectRespondedOk | (private) | `function expectRespondedOk(respond: { mock: { c...` |
| 432 | fn | requireRespondPayload | (private) | `function requireRespondPayload(` |
| 439 | fn | requireSetupCheck | (private) | `function requireSetupCheck(checks: unknown[] | ...` |
| 449 | type | TwilioSetupCredentials | (private) | - |
| 455 | fn | getTwilioVoiceCallCredentialsCheck | (private) | `async function getTwilioVoiceCallCredentialsChe...` |
| 497 | fn | requireFetchGuardCall | (private) | `function requireFetchGuardCall(auditContext: st...` |
| 507 | fn | requestUrl | (private) | `function requestUrl(input: RequestInfo | URL): ...` |
| 517 | fn | mockLocalMeetBrowserRequest | (private) | `function mockLocalMeetBrowserRequest(` |
| 578 | fn | createCapturedBrowserRuntime | (private) | `function createCapturedBrowserRuntime(` |
| 592 | fn | captureMeetStatusScript | (private) | `async function captureMeetStatusScript(params: {` |
| 656 | fn | captureMeetTranscriptScript | (private) | `async function captureMeetTranscriptScript(sess...` |
| 683 | fn | captureMeetLeaveScript | (private) | `async function captureMeetLeaveScript() {` |
| 716 | fn | stubMeetArtifactsApi | (private) | `function stubMeetArtifactsApi() {` |
| 844 | type | TestBridgeProcess | (private) | - |
| 856 | fn | installTestBridgeKill | (private) | `function installTestBridgeKill(proc: TestBridge...` |
| 3202 | fn | mockLocalMeetBrowserRequestWithTabState | (private) | `function mockLocalMeetBrowserRequestWithTabStat...` |
| 3770 | fn | makeButton | (private) | `const makeButton = (label: string, disabled = f...` |
| 4265 | fn | makeButton | (private) | `const makeButton = (label: string) => ({` |
| 4343 | fn | makeRegion | (private) | `const makeRegion = () => ({` |
| 4436 | fn | readTranscript | (private) | `const readTranscript = async (sessionId: string...` |
| 4490 | fn | makeButton | (private) | `const makeButton = (label: string) => ({` |
| 4591 | fn | makeButton | (private) | `const makeButton = (label: string, disabled = f...` |
| 6629 | fn | audioBridge | (private) | `const audioBridge = (stop: () => Promise<void>)...` |
