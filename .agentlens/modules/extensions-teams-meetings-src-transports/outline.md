# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## extensions/teams-meetings/src/transports/chrome.ts (614 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | LocalAudioBridge | (private) |
| 57 | type | NodeAudioBridge | (private) |
| 63 | fn | openOrRecoverTeamsMeeting | (private) |
| 104 | fn | rollbackTeamsBrowserJoin | (private) |
| 134 | fn | realtimeBindings | (private) |
| 162 | fn | assertBlackHole2chAvailable | pub |
| 188 | fn | startLocalAudioBridge | (private) |
| 245 | fn | launchTeamsMeetingInChrome | pub |
| 295 | fn | resolveChromeNode | (private) |
| 305 | fn | callNodeBrowser | (private) |
| 319 | type | TeamsMeetingsNodeStartResult | (private) |
| 326 | fn | parseNodeStartResult | (private) |
| 337 | fn | launchTeamsMeetingOnNode | pub |
| 505 | fn | recoverCurrentTeamsMeetingTab | pub |
| 555 | fn | leaveTeamsMeetingInBrowser | pub |
| 585 | fn | readTeamsMeetingTranscript | pub |

## extensions/teams-meetings/src/transports/teams-meetings-audio-routing.test.ts (1025 lines)

_No symbols extracted._

## extensions/teams-meetings/src/transports/teams-meetings-caption-capture.test.ts (992 lines)

_No symbols extracted._

## extensions/teams-meetings/src/transports/teams-meetings-platform-adapter.test.ts (1005 lines)

_No symbols extracted._

## extensions/teams-meetings/src/transports/teams-meetings-status-call-source.ts (657 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | fn | teamsMeetingStatusCallSource | pub |
| 21 | fn | liveStream | (private) |
| 276 | fn | captionState | (private) |
| 333 | fn | normalizeCaption | (private) |
| 340 | fn | captionRowIdentity | (private) |
| 351 | fn | sameCaptionUtterance | (private) |
| 362 | fn | commitCaptionLines | (private) |
| 378 | fn | sameCaptionRow | (private) |
| 382 | fn | retainSettledCaptionLines | (private) |
| 392 | fn | scheduleCaptionSettle | (private) |
| 404 | fn | captionCaptureMatchesCurrentMeeting | (private) |
| 443 | fn | scrapeCaptions | (private) |
| 451 | fn | rowWasRemoved | (private) |

## extensions/teams-meetings/src/transports/teams-meetings-status-prejoin-source.ts (665 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 1 | type | TeamsMeetingStatusPreludeParams | (private) |
| 18 | fn | teamsMeetingStatusPreludeSource | pub |
| 22 | fn | pageIdentityFunctionSource | (private) |
| 35 | fn | text | (private) |
| 36 | fn | label | (private) |
| 42 | fn | clickable | (private) |
| 45 | fn | first | (private) |
| 52 | fn | firstRaw | (private) |
| 59 | fn | firstWithin | (private) |
| 69 | fn | findTextButton | (private) |
| 70 | fn | waitForUi | (private) |
| 71 | fn | bridgeOwnedBySession | (private) |
| 74 | fn | mediaSourceUrl | (private) |
| 75 | fn | bridgeSources | (private) |
| 80 | fn | bridgeSourceMatches | (private) |
| 87 | fn | mediaSourceIsEmpty | (private) |
| 90 | fn | restoreAudioBridgeSource | (private) |
| 113 | fn | restoreAudioBridgeSources | (private) |
| 116 | fn | retireAudioBridge | (private) |
| 122 | fn | retireOwnedAudioBridges | (private) |
| 137 | fn | adoptAudioBridgeSourcesForSession | (private) |
| 164 | fn | suspendOwnedAudioBridges | (private) |
| 205 | fn | retireOwnedCaptions | (private) |
| 215 | fn | finalizeCaptionState | (private) |
| 239 | fn | archiveFinalizedCaptions | (private) |
| 251 | fn | finalizeOwnedCaptions | (private) |
| 261 | fn | toggleState | (private) |
| 437 | fn | isBlackHole | (private) |
| 439 | fn | isBlackHoleNode | (private) |
| 446 | fn | microphoneDeviceRoots | (private) |
| 461 | fn | selectedMicrophoneLabel | (private) |
| 479 | fn | ensureVirtualAudioInput | (private) |
