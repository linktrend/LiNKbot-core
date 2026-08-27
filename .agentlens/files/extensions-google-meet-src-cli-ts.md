# extensions/google-meet/src/cli.ts

[← Back to Module](../modules/extensions-google-meet/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2367
- **Language:** TypeScript
- **Symbols:** 66
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 50 | type | JoinOptions | (private) | - |
| 60 | type | OAuthLoginOptions | (private) | - |
| 75 | type | ResolveSpaceOptions | (private) | - |
| 88 | type | MeetArtifactOptions | (private) | - |
| 103 | type | GoogleMeetExportRequest | (private) | - |
| 118 | type | GoogleMeetExportWarning | (private) | - |
| 129 | type | GoogleMeetExportManifest | (private) | - |
| 154 | type | SetupOptions | (private) | - |
| 160 | type | GoogleMeetGatewayMethod | (private) | - |
| 170 | type | GoogleMeetGatewayCallResult | (private) | - |
| 175 | type | DoctorOptions | (private) | - |
| 187 | type | JsonOptions | (private) | - |
| 191 | type | RecoverTabOptions | (private) | - |
| 195 | type | CreateOptions | (private) | - |
| 213 | fn | writeStdoutJson | (private) | `function writeStdoutJson(value: unknown): void {` |
| 217 | fn | isGatewayUnavailableForLocalFallback | (private) | `function isGatewayUnavailableForLocalFallback(` |
| 232 | fn | writeStdoutLine | (private) | `function writeStdoutLine(...values: unknown[]):...` |
| 236 | fn | writeCliOutput | (private) | `async function writeCliOutput(options: { output...` |
| 245 | fn | promptInput | (private) | `async function promptInput(message: string): Pr...` |
| 257 | fn | parseOptionalNumber | (private) | `function parseOptionalNumber(value: string | un...` |
| 269 | fn | writeSetupStatus | (private) | `function writeSetupStatus(status: Awaited<Retur...` |
| 276 | fn | formatBoolean | (private) | `function formatBoolean(value: boolean | undefin...` |
| 280 | fn | formatOptional | (private) | `function formatOptional(value: unknown): string {` |
| 284 | fn | parsePositiveNumber | (private) | `function parsePositiveNumber(value: string | un...` |
| 296 | fn | resolveGoogleMeetGatewayTimeoutMs | (private) | `function resolveGoogleMeetGatewayTimeoutMs(time...` |
| 302 | fn | resolveGoogleMeetOAuthCallbackTimeoutMs | (private) | `function resolveGoogleMeetOAuthCallbackTimeoutM...` |
| 308 | fn | parsePositiveIntegerOption | (private) | `function parsePositiveIntegerOption(value: stri...` |
| 319 | fn | callGoogleMeetGateway | (private) | `async function callGoogleMeetGateway(params: {` |
| 344 | fn | formatDuration | (private) | `function formatDuration(value: number | undefin...` |
| 353 | fn | writeDoctorStatus | (private) | `function writeDoctorStatus(status: Awaited<Retu...` |
| 449 | type | OAuthDoctorCheck | (private) | - |
| 455 | type | OAuthDoctorReport | (private) | - |
| 466 | fn | sanitizeOAuthErrorMessage | (private) | `function sanitizeOAuthErrorMessage(error: unkno...` |
| 474 | fn | buildOAuthDoctorReport | (private) | `async function buildOAuthDoctorReport(` |
| 580 | fn | writeOAuthDoctorReport | (private) | `function writeOAuthDoctorReport(report: OAuthDo...` |
| 594 | fn | writeRecoverCurrentTabResult | (private) | `function writeRecoverCurrentTabResult(` |
| 636 | fn | writeLeaveResult | (private) | `function writeLeaveResult(sessionId: string, re...` |
| 647 | fn | resolveMeetingInput | (private) | `function resolveMeetingInput(config: GoogleMeet...` |
| 657 | fn | resolveOAuthTokenOptions | (private) | `function resolveOAuthTokenOptions(` |
| 676 | fn | resolveTokenOptions | (private) | `function resolveTokenOptions(` |
| 693 | fn | hasCalendarLookupOptions | (private) | `function hasCalendarLookupOptions(options: Reso...` |
| 697 | fn | resolveCalendarMeetingInput | (private) | `async function resolveCalendarMeetingInput(para...` |
| 714 | fn | resolveMeetingForToken | (private) | `async function resolveMeetingForToken(params: {` |
| 736 | fn | resolveCreateTokenOptions | (private) | `function resolveCreateTokenOptions(` |
| 755 | fn | resolveArtifactTokenOptions | (private) | `function resolveArtifactTokenOptions(` |
| 799 | fn | hasCreateOAuth | (private) | `function hasCreateOAuth(config: GoogleMeetConfi...` |
| 808 | fn | writeArtifactsSummary | (private) | `function writeArtifactsSummary(result: GoogleMe...` |
| 859 | fn | writeAttendanceSummary | (private) | `function writeAttendanceSummary(result: GoogleM...` |
| 892 | fn | writeLatestConferenceRecordSummary | (private) | `function writeLatestConferenceRecordSummary(res...` |
| 904 | fn | writeCalendarEventsSummary | (private) | `function writeCalendarEventsSummary(` |
| 921 | fn | pushMarkdownLine | (private) | `function pushMarkdownLine(lines: string[], text...` |
| 925 | fn | formatMarkdownOptional | (private) | `function formatMarkdownOptional(value: unknown)...` |
| 929 | fn | formatMarkdownIdentity | (private) | `function formatMarkdownIdentity(row: GoogleMeet...` |
| 933 | fn | participantDisplayName | (private) | `function participantDisplayName(` |
| 950 | fn | renderArtifactsMarkdown | (private) | `function renderArtifactsMarkdown(result: Google...` |
| 1048 | fn | renderAttendanceMarkdown | (private) | `function renderAttendanceMarkdown(result: Googl...` |
| 1092 | fn | neutralizeSpreadsheetFormulaCell | (private) | `function neutralizeSpreadsheetFormulaCell(text:...` |
| 1098 | fn | csvCell | (private) | `function csvCell(value: unknown): string {` |
| 1109 | fn | renderAttendanceCsv | (private) | `function renderAttendanceCsv(result: GoogleMeet...` |
| 1145 | fn | renderTranscriptMarkdown | (private) | `function renderTranscriptMarkdown(result: Googl...` |
| 1196 | fn | collectGoogleMeetArtifactWarnings | (private) | `function collectGoogleMeetArtifactWarnings(` |
| 1243 | fn | buildGoogleMeetExportManifest | pub | `export function buildGoogleMeetExportManifest(p...` |
| 1297 | fn | googleMeetExportFileNames | pub | `export function googleMeetExportFileNames(): st...` |
| 1308 | fn | defaultExportDirectory | (private) | `function defaultExportDirectory(): string {` |
| 1312 | fn | writeMeetExportBundle | pub | `export async function writeMeetExportBundle(par...` |
| 1369 | fn | registerGoogleMeetCli | pub | `export function registerGoogleMeetCli(params: {` |

## Public API

### `buildGoogleMeetExportManifest`

```
export function buildGoogleMeetExportManifest(params: {
```

**Line:** 1243 | **Kind:** fn

### `googleMeetExportFileNames`

```
export function googleMeetExportFileNames(): string[] {
```

**Line:** 1297 | **Kind:** fn

### `writeMeetExportBundle`

```
export async function writeMeetExportBundle(params: {
```

**Line:** 1312 | **Kind:** fn

### `registerGoogleMeetCli`

```
export function registerGoogleMeetCli(params: {
```

**Line:** 1369 | **Kind:** fn
