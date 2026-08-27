# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## extensions/zoom-meetings/src/transports/chrome.ts (620 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | LocalAudioBridge | (private) |
| 57 | type | NodeAudioBridge | (private) |
| 63 | fn | openOrRecoverZoomMeeting | (private) |
| 104 | fn | rollbackZoomBrowserJoin | (private) |
| 134 | fn | realtimeBindings | (private) |
| 162 | fn | assertBlackHole2chAvailable | pub |
| 188 | fn | startLocalAudioBridge | (private) |
| 245 | fn | launchZoomMeetingInChrome | pub |
| 299 | fn | resolveChromeNode | (private) |
| 309 | fn | callNodeBrowser | (private) |
| 323 | type | ZoomMeetingsNodeStartResult | (private) |
| 330 | fn | parseNodeStartResult | (private) |
| 341 | fn | launchZoomMeetingOnNode | pub |
| 511 | fn | recoverCurrentZoomMeetingTab | pub |
| 561 | fn | leaveZoomMeetingInBrowser | pub |
| 591 | fn | readZoomMeetingTranscript | pub |

## extensions/zoom-meetings/src/transports/zoom-meetings-platform-adapter.test.ts (623 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | pageControl | (private) |
| 27 | fn | guestInput | (private) |
| 37 | fn | statusDocument | (private) |
| 110 | fn | runStatusFixture | (private) |
| 144 | fn | status | (private) |

## extensions/zoom-meetings/src/transports/zoom-meetings-status-call-source.ts (669 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | fn | zoomMeetingStatusCallSource | pub |
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

## extensions/zoom-meetings/src/transports/zoom-meetings-status-prejoin-source.ts (695 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | fn | zoomMeetingStatusPreludeSource | pub |
| 11 | fn | pageIdentityFunctionSource | (private) |
| 30 | fn | text | (private) |
| 31 | fn | label | (private) |
| 37 | fn | clickable | (private) |
| 40 | fn | first | (private) |
| 47 | fn | firstRaw | (private) |
| 54 | fn | firstWithin | (private) |
| 63 | fn | findTextButton | (private) |
| 65 | fn | findTextControl | (private) |
| 68 | fn | waitForUi | (private) |
| 69 | fn | bridgeOwnedBySession | (private) |
| 72 | fn | mediaSourceUrl | (private) |
| 73 | fn | bridgeSources | (private) |
| 78 | fn | bridgeSourceMatches | (private) |
| 85 | fn | mediaSourceIsEmpty | (private) |
| 88 | fn | restoreAudioBridgeSource | (private) |
| 111 | fn | restoreAudioBridgeSources | (private) |
| 114 | fn | retireAudioBridge | (private) |
| 120 | fn | retireOwnedAudioBridges | (private) |
| 135 | fn | adoptAudioBridgeSourcesForSession | (private) |
| 162 | fn | suspendOwnedAudioBridges | (private) |
| 203 | fn | retireOwnedCaptions | (private) |
| 213 | fn | finalizeCaptionState | (private) |
| 237 | fn | archiveFinalizedCaptions | (private) |
| 249 | fn | finalizeOwnedCaptions | (private) |
| 259 | fn | toggleState | (private) |
| 489 | fn | isBlackHole | (private) |
| 491 | fn | isBlackHoleNode | (private) |
| 498 | fn | microphoneDeviceRoots | (private) |
| 513 | fn | selectedMicrophoneLabel | (private) |
| 531 | fn | ensureVirtualAudioInput | (private) |
