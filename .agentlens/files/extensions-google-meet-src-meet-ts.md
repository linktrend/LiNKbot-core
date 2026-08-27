# extensions/google-meet/src/meet.ts

[← Back to Module](../modules/extensions-google-meet/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1028
- **Language:** TypeScript
- **Symbols:** 60
- **Public symbols:** 13

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 19 | type | GoogleMeetAccessType | pub | - |
| 20 | type | GoogleMeetEntryPointAccess | pub | - |
| 22 | type | GoogleMeetSpaceConfig | pub | - |
| 27 | type | GoogleMeetSpace | (private) | - |
| 35 | type | GoogleMeetPreflightReport | (private) | - |
| 46 | type | GoogleMeetCreateSpaceResult | (private) | - |
| 51 | type | GoogleMeetEndActiveConferenceResult | (private) | - |
| 56 | type | GoogleMeetConferenceRecord | (private) | - |
| 64 | type | GoogleMeetParticipant | (private) | - |
| 80 | type | GoogleMeetParticipantSession | (private) | - |
| 86 | type | GoogleMeetRecording | (private) | - |
| 93 | type | GoogleMeetTranscript | (private) | - |
| 102 | type | GoogleMeetTranscriptEntry | (private) | - |
| 111 | type | GoogleMeetTranscriptEntries | (private) | - |
| 117 | type | GoogleMeetSmartNote | (private) | - |
| 126 | type | GoogleMeetArtifactsEntry | (private) | - |
| 136 | type | GoogleMeetArtifactsResult | pub | - |
| 143 | type | GoogleMeetLatestConferenceRecordResult | pub | - |
| 149 | type | GoogleMeetAttendanceRow | (private) | - |
| 167 | type | GoogleMeetAttendanceResult | pub | - |
| 174 | type | GoogleMeetSmartNotesListResult | (private) | - |
| 179 | fn | normalizeGoogleMeetSpaceName | (private) | `function normalizeGoogleMeetSpaceName(input: st...` |
| 208 | fn | encodeSpaceNameForPath | (private) | `function encodeSpaceNameForPath(name: string): ...` |
| 212 | fn | encodeResourceNameForPath | (private) | `function encodeResourceNameForPath(name: string...` |
| 220 | fn | normalizeConferenceRecordName | (private) | `function normalizeConferenceRecordName(input: s...` |
| 228 | fn | appendQuery | (private) | `function appendQuery(` |
| 244 | fn | assertResourceArray | (private) | `function assertResourceArray<T extends { name?:...` |
| 264 | fn | getErrorMessage | (private) | `function getErrorMessage(error: unknown): string {` |
| 268 | fn | requestGoogleMeetApi | (private) | `async function requestGoogleMeetApi(params: {` |
| 293 | fn | fetchGoogleMeetJson | (private) | `async function fetchGoogleMeetJson<T>(params: {` |
| 320 | fn | listGoogleMeetCollection | (private) | `async function listGoogleMeetCollection<T exten...` |
| 355 | fn | fetchGoogleMeetSpace | pub | `export async function fetchGoogleMeetSpace(para...` |
| 386 | fn | createGoogleMeetSpace | pub | `export async function createGoogleMeetSpace(par...` |
| 429 | fn | endGoogleMeetActiveConference | pub | `export async function endGoogleMeetActiveConfer...` |
| 459 | fn | fetchGoogleMeetConferenceRecord | (private) | `async function fetchGoogleMeetConferenceRecord(...` |
| 476 | fn | listGoogleMeetConferenceRecords | (private) | `async function listGoogleMeetConferenceRecords(...` |
| 499 | fn | fetchLatestGoogleMeetConferenceRecord | pub | `export async function fetchLatestGoogleMeetConf...` |
| 520 | fn | listGoogleMeetParticipants | (private) | `async function listGoogleMeetParticipants(param...` |
| 536 | fn | listGoogleMeetParticipantSessions | (private) | `async function listGoogleMeetParticipantSession...` |
| 551 | fn | listGoogleMeetRecordings | (private) | `async function listGoogleMeetRecordings(params: {` |
| 567 | fn | listGoogleMeetTranscripts | (private) | `async function listGoogleMeetTranscripts(params: {` |
| 583 | fn | listGoogleMeetTranscriptEntries | (private) | `async function listGoogleMeetTranscriptEntries(...` |
| 598 | fn | listGoogleMeetSmartNotes | (private) | `async function listGoogleMeetSmartNotes(params: {` |
| 614 | fn | getParticipantDisplayName | (private) | `function getParticipantDisplayName(participant:...` |
| 622 | fn | getParticipantUser | (private) | `function getParticipantUser(participant: Google...` |
| 626 | fn | getDocsDestinationDocumentId | (private) | `function getDocsDestinationDocumentId(` |
| 636 | fn | attachDocumentText | (private) | `async function attachDocumentText<T extends { d...` |
| 660 | fn | parseGoogleMeetTimestamp | (private) | `function parseGoogleMeetTimestamp(value: string...` |
| 668 | fn | isoFromMs | (private) | `function isoFromMs(value: number | undefined): ...` |
| 674 | fn | minTimestamp | (private) | `function minTimestamp(values: Array<string | un...` |
| 681 | fn | maxTimestamp | (private) | `function maxTimestamp(values: Array<string | un...` |
| 688 | fn | sumSessionDurationMs | (private) | `function sumSessionDurationMs(` |
| 710 | fn | attendanceMergeKey | (private) | `function attendanceMergeKey(row: GoogleMeetAtte...` |
| 714 | fn | sortSessions | (private) | `function sortSessions(sessions: GoogleMeetParti...` |
| 722 | fn | decorateAttendanceRow | (private) | `function decorateAttendanceRow(` |
| 782 | fn | mergeAttendanceRows | (private) | `function mergeAttendanceRows(` |
| 815 | fn | resolveConferenceRecordQuery | (private) | `async function resolveConferenceRecordQuery(par...` |
| 856 | fn | fetchGoogleMeetArtifacts | pub | `export async function fetchGoogleMeetArtifacts(...` |
| 961 | fn | fetchGoogleMeetAttendance | pub | `export async function fetchGoogleMeetAttendance...` |
| 1005 | fn | buildGoogleMeetPreflightReport | pub | `export function buildGoogleMeetPreflightReport(...` |

## Public API

### `fetchGoogleMeetSpace`

```
export async function fetchGoogleMeetSpace(params: {
```

**Line:** 355 | **Kind:** fn

### `createGoogleMeetSpace`

```
export async function createGoogleMeetSpace(params: {
```

**Line:** 386 | **Kind:** fn

### `endGoogleMeetActiveConference`

```
export async function endGoogleMeetActiveConference(params: {
```

**Line:** 429 | **Kind:** fn

### `fetchLatestGoogleMeetConferenceRecord`

```
export async function fetchLatestGoogleMeetConferenceRecord(params: {
```

**Line:** 499 | **Kind:** fn

### `fetchGoogleMeetArtifacts`

```
export async function fetchGoogleMeetArtifacts(params: {
```

**Line:** 856 | **Kind:** fn

### `fetchGoogleMeetAttendance`

```
export async function fetchGoogleMeetAttendance(params: {
```

**Line:** 961 | **Kind:** fn

### `buildGoogleMeetPreflightReport`

```
export function buildGoogleMeetPreflightReport(params: {
```

**Line:** 1005 | **Kind:** fn
