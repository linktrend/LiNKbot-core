# extensions/google-meet/index.ts

[← Back to Module](../modules/extensions-google-meet/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1321
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 354 | fn | asParamRecord | (private) | `function asParamRecord(params: unknown): Record...` |
| 360 | fn | normalizeTransport | (private) | `function normalizeTransport(value: unknown): Go...` |
| 364 | fn | normalizeMode | (private) | `function normalizeMode(value: unknown): GoogleM...` |
| 371 | fn | isGoogleMeetTalkBackMode | (private) | `function isGoogleMeetTalkBackMode(mode: GoogleM...` |
| 375 | fn | resolveMeetingInput | (private) | `function resolveMeetingInput(config: GoogleMeet...` |
| 383 | fn | shouldJoinCreatedMeet | (private) | `function shouldJoinCreatedMeet(raw: Record<stri...` |
| 406 | type | GoogleMeetGatewayToolAction | (private) | - |
| 419 | fn | googleMeetGatewayMethodForToolAction | (private) | `function googleMeetGatewayMethodForToolAction(a...` |
| 436 | fn | isGoogleMeetAgentToolActionUnsupportedOnHost | (private) | `function isGoogleMeetAgentToolActionUnsupported...` |
| 461 | fn | assertGoogleMeetAgentToolActionSupported | (private) | `function assertGoogleMeetAgentToolActionSupport...` |
| 473 | fn | readGatewayErrorDetails | (private) | `function readGatewayErrorDetails(err: unknown):...` |
| 480 | fn | callGoogleMeetGatewayFromTool | (private) | `async function callGoogleMeetGatewayFromTool(pa...` |
| 517 | fn | keepTrustedToolAgentId | (private) | `function keepTrustedToolAgentId(` |
| 529 | fn | createMeetFromParams | (private) | `async function createMeetFromParams(params: {` |
| 538 | fn | createAndJoinMeetFromParams | (private) | `async function createAndJoinMeetFromParams(para...` |
| 548 | fn | resolveGoogleMeetTokenFromParams | (private) | `async function resolveGoogleMeetTokenFromParams(` |
| 562 | fn | wantsCalendarLookup | (private) | `function wantsCalendarLookup(raw: Record<string...` |
| 566 | fn | resolveMeetingFromParams | (private) | `async function resolveMeetingFromParams(params: {` |
| 584 | fn | resolveSpaceFromParams | (private) | `async function resolveSpaceFromParams(config: G...` |
| 598 | fn | resolveArtifactQueryFromParams | (private) | `async function resolveArtifactQueryFromParams(` |
| 629 | fn | exportGoogleMeetBundleFromParams | (private) | `async function exportGoogleMeetBundleFromParams(` |
| 722 | fn | ensureRuntime | (private) | `const ensureRuntime = async () => {` |
| 737 | fn | formatGatewayError | (private) | `const formatGatewayError = (err: unknown) =>` |
| 740 | fn | sendError | (private) | `const sendError = (` |
