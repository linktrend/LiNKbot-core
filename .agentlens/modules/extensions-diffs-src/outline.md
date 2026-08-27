# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 7 large files in this module.

## extensions/diffs/src/browser.test.ts (868 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | firstMockCall | (private) |
| 290 | type | RegisteredTool | (private) |
| 293 | type | HttpRouteHandler | (private) |
| 297 | type | RegisteredHttpRouteParams | (private) |
| 424 | type | RegisteredTool | (private) |
| 427 | type | HttpRouteHandler | (private) |
| 431 | type | RegisteredHttpRouteParams | (private) |
| 583 | type | RegisteredTool | (private) |
| 586 | type | HttpRouteHandler | (private) |
| 590 | type | RegisteredHttpRouteParams | (private) |
| 686 | fn | createMemoryBlobStore | (private) |
| 785 | fn | createConfig | (private) |
| 793 | fn | localReq | (private) |
| 805 | fn | createScreenshotterHarness | (private) |
| 822 | fn | createMockBrowser | (private) |
| 842 | fn | createMockPage | (private) |

## extensions/diffs/src/browser.ts (580 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | DiffScreenshotter | pub |
| 33 | type | BrowserInstance | (private) |
| 35 | type | BrowserLease | (private) |
| 40 | type | SharedBrowserState | (private) |
| 48 | type | ExecutablePathCache | (private) |
| 56 | class | PlaywrightDiffScreenshotter | pub |
| 295 | fn | buildBrowserUnavailableError | (private) |
| 303 | fn | writeExternalArtifactFile | (private) |
| 316 | fn | injectBaseHref | (private) |
| 323 | fn | resolveBrowserExecutablePath | (private) |
| 351 | fn | resolveBrowserExecutablePathUncached | (private) |
| 383 | fn | acquireSharedBrowser | (private) |
| 448 | fn | scheduleIdleBrowserClose | (private) |
| 458 | fn | clearIdleTimer | (private) |
| 466 | fn | closeSharedBrowser | (private) |
| 477 | fn | collectExecutableCandidates | (private) |
| 494 | fn | pathCommandsForPlatform | (private) |
| 512 | fn | commonExecutablePathsForPlatform | (private) |
| 548 | fn | findExecutableInPath | (private) |
| 567 | fn | assertExecutable | (private) |
| 573 | fn | isExecutable | (private) |

## extensions/diffs/src/config.test.ts (561 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | fn | compileManifestConfigSchema | (private) |
| 66 | fn | requireRecord | (private) |
| 73 | fn | expectFields | (private) |
| 511 | fn | buildValidPayload | (private) |

## extensions/diffs/src/render.ts (754 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | class | DiffRenderInputError | pub |
| 35 | fn | escapeCssString | (private) |
| 39 | fn | escapeJsonScript | (private) |
| 43 | fn | buildDiffTitle | (private) |
| 53 | fn | resolveBeforeAfterFileName | (private) |
| 67 | fn | resolveDiffTypography | (private) |
| 77 | fn | buildDiffOptions | (private) |
| 165 | fn | buildImageRenderOptions | (private) |
| 175 | fn | shouldRenderViewer | (private) |
| 179 | fn | shouldRenderImage | (private) |
| 183 | fn | buildRenderVariants | (private) |
| 197 | fn | renderDiffCard | (private) |
| 206 | type | FileDiffStats | (private) |
| 211 | type | FileNavEntry | (private) |
| 219 | fn | computeFileDiffStats | (private) |
| 229 | fn | renderNavChangeBadge | (private) |
| 241 | fn | renderNavStats | (private) |
| 245 | fn | renderNavEntryName | (private) |
| 254 | fn | renderFileSummaryNav | (private) |
| 276 | fn | buildHtmlDocument | (private) |
| 491 | type | RenderedSection | (private) |
| 497 | fn | payloadUsesLanguagePack | (private) |
| 501 | fn | buildRenderedSection | (private) |
| 516 | fn | buildRenderedBodies | (private) |
| 534 | fn | renderBeforeAfterDiff | (private) |
| 593 | fn | renderPatchDiff | (private) |
| 677 | fn | normalizePatchFileLanguage | (private) |
| 691 | fn | renderDiffDocument | pub |
| 738 | fn | shouldFallbackToClientHydration | (private) |
| 745 | fn | preloadDiffHTMLWithFallback | (private) |

## extensions/diffs/src/store.test.ts (560 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 316 | fn | handleLocalGet | (private) |
| 517 | fn | createViewerArtifact | (private) |
| 526 | fn | localReq | (private) |
| 538 | fn | remoteReq | (private) |
| 550 | fn | ipv4MappedLoopbackReq | (private) |

## extensions/diffs/src/tool.test.ts (716 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 558 | fn | createApi | (private) |
| 575 | fn | createToolWithScreenshotter | (private) |
| 595 | fn | expectArtifactOnlyFileResult | (private) |
| 604 | fn | createPngScreenshotter | (private) |
| 634 | fn | createPdfScreenshotter | (private) |
| 651 | fn | isRecord | (private) |
| 655 | fn | readDetails | (private) |
| 663 | fn | extractViewerArtifactId | (private) |
| 679 | fn | extractViewerArtifactToken | (private) |
| 687 | fn | readParametersProperties | (private) |
| 694 | fn | requireString | (private) |
| 701 | fn | expectFsEnoent | (private) |
| 711 | fn | readTextContent | (private) |

## extensions/diffs/src/tool.ts (530 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 116 | type | DiffsToolParams | (private) |
| 118 | fn | createDiffsTool | pub |
| 321 | fn | normalizeFileQuality | (private) |
| 327 | fn | normalizeOutputFormat | (private) |
| 331 | fn | isArtifactOnlyMode | (private) |
| 335 | fn | resolveRenderTarget | (private) |
| 345 | fn | requireRenderedHtml | (private) |
| 352 | fn | buildArtifactDetails | (private) |
| 370 | fn | buildFileArtifactMessage | (private) |
| 381 | fn | renderDiffArtifactFile | (private) |
| 417 | fn | buildArtifactContext | (private) |
| 438 | fn | normalizeDiffInput | (private) |
| 487 | fn | assertMaxBytes | (private) |
| 494 | fn | normalizeBaseUrl | (private) |
| 506 | fn | normalizeMode | (private) |
| 510 | fn | normalizeTheme | (private) |
| 514 | fn | normalizeLayout | (private) |
| 518 | fn | normalizeTtlMs | (private) |
| 525 | class | PluginToolInputError | (private) |
