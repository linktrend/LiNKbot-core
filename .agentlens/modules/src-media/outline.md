# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 8 large files in this module.

## src/media/fetch.test.ts (1286 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | FetchModule | (private) |
| 19 | type | ReadRemoteMediaBuffer | (private) |
| 20 | type | SaveRemoteMedia | (private) |
| 21 | type | SaveResponseMedia | (private) |
| 22 | type | LookupFn | (private) |
| 29 | fn | makeStream | (private) |
| 40 | fn | makeCancelableStream | (private) |
| 55 | fn | makeStallingFetch | (private) |
| 68 | fn | makeLookupFn | (private) |
| 72 | fn | abortReasonError | (private) |
| 78 | fn | requireFetchGuardRequest | (private) |
| 86 | fn | expectRemoteMediaMaxBytesError | (private) |
| 100 | fn | expectRedactedBotTokenFetchError | (private) |
| 123 | fn | expectReadRemoteMediaBufferRejected | (private) |
| 154 | fn | expectReadRemoteMediaBufferResolvesToError | (private) |
| 165 | fn | expectReadRemoteMediaBufferIdleTimeoutCase | (private) |
| 188 | fn | expectBoundedErrorBodyCase | (private) |
| 201 | fn | expectPrivateIpFetchBlockedCase | (private) |
| 211 | fn | createReadRemoteMediaBufferParams | (private) |
| 413 | fn | rejectForAbort | (private) |
| 450 | fn | failForAbort | (private) |
| 491 | fn | rejectForAbort | (private) |
| 525 | fn | failForAbort | (private) |
| 830 | fn | failForAbort | (private) |
| 877 | fn | failForAbort | (private) |

## src/media/fetch.ts (685 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | FetchMediaResult | (private) |
| 37 | type | SavedRemoteMedia | pub |
| 42 | type | MediaFetchErrorCode | (private) |
| 45 | type | MediaFetchRetryOptions | pub |
| 48 | class | MediaFetchError | pub |
| 65 | type | FetchLike | pub |
| 68 | type | FetchDispatcherAttempt | (private) |
| 73 | type | FetchMediaOptions | (private) |
| 104 | type | SaveResponseMediaOptions | (private) |
| 115 | type | SaveRemoteMediaOptions | (private) |
| 121 | type | GuardedMediaResponse | (private) |
| 128 | fn | stripQuotes | (private) |
| 132 | fn | parseContentDispositionFileName | (private) |
| 153 | fn | basenameFromUrlPathname | (private) |
| 165 | fn | readErrorBodySnippet | (private) |
| 183 | fn | redactMediaUrl | (private) |
| 187 | fn | fetchGuardedMediaResponse | (private) |
| 218 | fn | runGuardedFetch | (private) |
| 292 | fn | assertMediaResponseOk | (private) |
| 321 | fn | assertMediaContentLength | (private) |
| 349 | fn | discardIgnoredResponseBody | (private) |
| 361 | fn | resolveRemoteFileName | (private) |
| 384 | fn | isGenericResponseContentType | (private) |
| 394 | fn | resolveResponseContentType | (private) |
| 447 | fn | isMediaLimitError | (private) |
| 451 | fn | saveOkMediaResponse | (private) |
| 517 | fn | shouldRetryMediaFetch | (private) |
| 536 | fn | withMediaFetchRetry | (private) |
| 554 | fn | saveResponseMedia | pub |
| 581 | fn | saveRemoteMedia | pub |
| 585 | fn | saveRemoteMediaOnce | (private) |
| 614 | fn | readRemoteMediaBuffer | pub |
| 621 | fn | readRemoteMediaBufferOnce | (private) |

## src/media/input-files.fetch-guard.test.ts (597 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | waitForMicrotaskTurn | (private) |
| 44 | fn | createImageSourceLimits | (private) |
| 54 | fn | createFileSourceLimits | (private) |
| 66 | fn | mockUrlFetchResponse | (private) |
| 96 | fn | expectRejectedImageMimeCase | (private) |
| 113 | type | ImageSourceLimits | (private) |
| 115 | fn | expectResolvedImageContentCase | (private) |
| 141 | fn | expectBase64ImageValidationCase | (private) |

## src/media/parse.ts (722 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | ParsedMediaOutputSegment | (private) |
| 32 | type | SplitMediaFromOutputOptions | (private) |
| 40 | fn | normalizeMediaSource | (private) |
| 46 | fn | cleanCandidate | (private) |
| 59 | fn | isSupportedHomeRelativePath | (private) |
| 63 | fn | hasTraversalOrUnsupportedHomeDirPrefix | (private) |
| 74 | fn | looksLikeLocalFilePath | (private) |
| 88 | fn | isLikelyLocalPath | (private) |
| 102 | fn | normalizeRemoteMediaHostname | (private) |
| 114 | fn | isBlockedRemoteMediaHostname | (private) |
| 151 | fn | isAllowedRemoteMediaUrl | (private) |
| 165 | fn | isValidMedia | (private) |
| 201 | fn | unwrapQuoted | (private) |
| 217 | fn | mayContainFenceMarkers | (private) |
| 221 | fn | cleanLineText | (private) |
| 225 | type | MarkdownImageMatch | (private) |
| 235 | fn | findMatchingBracket | (private) |
| 263 | fn | isRemoteMarkdownImageMedia | (private) |
| 267 | fn | parseMarkdownTitle | (private) |
| 306 | fn | parseMarkdownImageDestination | (private) |
| 386 | fn | findMarkdownImageMatches | (private) |
| 422 | fn | collectMarkdownImageSegments | (private) |
| 481 | fn | isInsideFence | (private) |
| 486 | fn | splitMediaFromOutput | pub |
| 514 | fn | pushTextSegment | (private) |

## src/media/store.test.ts (1047 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | withTempStore | (private) |
| 42 | fn | expectPathMissing | (private) |
| 53 | fn | expectOriginalFilenameCase | (private) |
| 65 | fn | expectRetryAfterPrunedWriteCase | (private) |
| 114 | fn | expectFailedBufferWriteCase | (private) |
| 167 | fn | expectSavedOriginalFilenameCase | (private) |
| 202 | fn | expectSavedSourceCase | (private) |
| 226 | fn | expectCleanedSavedSourceCase | (private) |
| 248 | fn | expectSavedBufferCase | (private) |
| 273 | fn | expectRejectedSourceCase | (private) |
| 301 | fn | createSymlinkSource | (private) |
| 313 | fn | expectCleanupBehaviorCase | (private) |
| 342 | fn | expectTempStoreCase | (private) |

## src/media/store.ts (651 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | resolveMediaDir | (private) |
| 32 | type | RequestImpl | (private) |
| 33 | type | ResolvePinnedHostnameImpl | (private) |
| 34 | type | CleanOldMediaOptions | (private) |
| 40 | fn | setMediaStoreNetworkDepsForTest | (private) |
| 54 | fn | resolveMediaSubdir | (private) |
| 76 | fn | resolveMediaScopedDir | (private) |
| 86 | fn | resolveMediaRelativePath | (private) |
| 94 | fn | openMediaStore | (private) |
| 108 | fn | sanitizeFilename | (private) |
| 119 | fn | extractOriginalFilename | pub |
| 139 | fn | getMediaDir | pub |
| 144 | fn | ensureMediaDir | pub |
| 150 | fn | findErrorWithCode | (private) |
| 160 | fn | isMissingPathError | (private) |
| 164 | fn | retryAfterRecreatingDir | (private) |
| 192 | fn | resolveCleanupMaxDepth | (private) |
| 203 | fn | cleanOldMedia | pub |
| 212 | fn | looksLikeUrl | (private) |
| 217 | type | SavedMedia | pub |
| 224 | fn | buildSavedMediaId | (private) |
| 240 | fn | safeOriginalFilenameExtension | (private) |
| 248 | fn | extensionForAuthoritativeHeaderMime | (private) |
| 259 | fn | isGenericContainerMime | (private) |
| 263 | fn | isImageHeaderMime | (private) |
| 267 | fn | resolveSavedMediaExtension | (private) |
| 287 | fn | buildSavedMediaResult | (private) |
| 301 | type | SavedMediaTempWriteResult | (private) |
| 303 | fn | saveMediaSiblingTempFile | (private) |
| 320 | fn | writeSavedMediaBuffer | (private) |
| 336 | fn | writeMediaStreamToFile | (private) |
| 383 | type | SaveMediaSourceErrorCode | (private) |
| 391 | class | SaveMediaSourceError | (private) |
| 401 | fn | toSaveMediaSourceError | (private) |
| 433 | fn | saveMediaSource | pub |
| 480 | fn | saveMediaBuffer | pub |
| 512 | fn | saveMediaStream | pub |
| 574 | fn | resolveMediaBufferPath | pub |
| 592 | type | ReadMediaBufferResult | (private) |
| 600 | fn | readMediaBuffer | pub |
| 648 | fn | deleteMediaBuffer | pub |

## src/media/web-media.test.ts (1164 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 79 | fn | createLargeColorBlockPng | (private) |
| 92 | fn | createLargeTransparentColorBlockPng | (private) |
| 114 | fn | readPngDimensions | (private) |
| 124 | fn | createGifHeader | (private) |
| 132 | fn | readJpegDimensions | (private) |
| 156 | fn | makeStallingFetch | (private) |
| 173 | fn | expectWebMediaIdleTimeout | (private) |
| 197 | fn | createLocalWebMediaOptions | (private) |
| 204 | fn | expectRejectedWebMedia | (private) |
| 227 | fn | expectLoadWebMediaErrorFields | (private) |
| 246 | fn | expectLoadWebMediaErrorCode | (private) |
| 250 | fn | expectRejectedWebMediaWithoutFilesystemAccess | (private) |
| 264 | fn | expectLoadedWebMediaCase | (private) |
| 270 | fn | loadDocumentWithHostRead | (private) |

## src/media/web-media.ts (1164 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | WebMediaResult | pub |
| 51 | type | WebMediaOptions | (private) |
| 74 | type | ImageQualityPreference | pub |
| 77 | type | ImageCompressionModelPolicy | pub |
| 85 | type | ImageCompressionPolicy | pub |
| 91 | fn | resolveMediaStoreUriToPath | (private) |
| 105 | fn | resolveHostedPluginMediaUrl | (private) |
| 124 | fn | resolveWebMediaOptions | (private) |
| 188 | fn | stripLegacyMediaDirectivePrefix | (private) |
| 195 | fn | getTextStats | (private) |
| 220 | fn | hasSingleByteTextShape | (private) |
| 240 | fn | decodeHostReadText | (private) |
| 261 | fn | isValidatedHostReadText | (private) |
| 265 | fn | getValidatedHostReadText | (private) |
| 280 | fn | isPathInsideRoot | (private) |
| 290 | fn | resolveLocalMediaFileName | (private) |
| 297 | fn | hasHtmlDocumentShape | (private) |
| 302 | fn | isTrustedGeneratedHostReadHtmlPath | (private) |
| 319 | fn | isTrustedGeneratedHostReadHtml | (private) |
| 336 | fn | isAllowedHostReadTextAlias | (private) |
| 348 | fn | formatMb | (private) |
| 352 | fn | formatCapLimit | (private) |
| 356 | fn | formatCapReduce | (private) |
| 360 | fn | isHeicSource | (private) |
| 370 | fn | assertHostReadMediaAllowed | (private) |
| 454 | fn | toJpegFileName | (private) |
| 469 | type | OptimizedImage | (private) |
| 484 | fn | normalizeImageQualityPreference | (private) |
| 495 | fn | squareLongSideForPixelBudget | (private) |
| 499 | fn | positiveInteger | (private) |
| 505 | fn | effectiveImageQualityPreference | (private) |
| 519 | fn | maxSideForModel | (private) |
| 532 | fn | preferredSideForModel | (private) |
| 539 | fn | policyModelSides | (private) |
| 552 | fn | sideForPreference | (private) |
| 568 | fn | imageMaxBytesForPolicy | (private) |
| 575 | fn | imageSatisfiesHardDimensionPolicy | (private) |
| 602 | fn | assertImageSatisfiesHardDimensionPolicy | (private) |
| 614 | fn | resolvePreservableOriginalImageContentType | (private) |
| 657 | fn | detectPreservableImageMime | (private) |
| 670 | fn | isPreservableImageMime | (private) |
| 679 | fn | effectiveImageBytesCap | pub |
| 690 | fn | buildDescendingLadder | (private) |
| 710 | fn | resolveImageCompressionGrid | pub |
| 739 | fn | logOptimizedImage | (private) |
| 757 | fn | optimizeImageWithFallback | (private) |
| 793 | fn | optimizeImageBufferForWebMedia | pub |
| 851 | fn | loadWebMediaInternal | (private) |
| 889 | fn | optimizeAndClampImage | (private) |
| 1106 | fn | loadWebMedia | pub |
| 1118 | fn | loadWebMediaRaw | pub |
| 1130 | fn | optimizeImageToJpeg | pub |
