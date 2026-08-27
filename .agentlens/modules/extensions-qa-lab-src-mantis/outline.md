# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 7 large files in this module.

## extensions/qa-lab/src/mantis/cli.ts (507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | MantisCliRuntime | (private) |
| 27 | fn | runDiscordSmoke | (private) |
| 32 | fn | runBeforeAfter | (private) |
| 37 | fn | runDesktopBrowserSmoke | (private) |
| 42 | fn | runSlackDesktopSmoke | (private) |
| 47 | fn | runTelegramDesktopBuilder | (private) |
| 52 | fn | runVisualDriver | (private) |
| 57 | fn | runVisualTask | (private) |
| 62 | type | MantisDiscordSmokeCommanderOptions | (private) |
| 74 | type | MantisBeforeAfterCommanderOptions | (private) |
| 89 | type | MantisDesktopBrowserSmokeCommanderOptions | (private) |
| 107 | type | MantisSlackDesktopSmokeCommanderOptions | (private) |
| 134 | type | MantisTelegramDesktopBuilderCommanderOptions | (private) |
| 153 | type | MantisVisualTaskCommanderOptions | (private) |
| 174 | type | MantisVisualDriverCommanderOptions | (private) |
| 189 | fn | collectString | (private) |
| 193 | fn | parseOptionalInteger | (private) |
| 204 | fn | registerMantisCli | pub |

## extensions/qa-lab/src/mantis/desktop-browser-smoke.runtime.ts (509 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | MantisDesktopBrowserSmokeOptions | pub |
| 42 | type | MantisDesktopBrowserSmokeResult | (private) |
| 51 | type | MantisDesktopBrowserSmokeSummary | (private) |
| 93 | fn | defaultOutputDir | (private) |
| 98 | fn | assertSafeEnvName | (private) |
| 104 | fn | assertSafeRemoteProfileDir | (private) |
| 113 | fn | resolveRepoBoundFile | (private) |
| 122 | fn | renderRemoteScript | (private) |
| 249 | fn | renderReport | (private) |
| 285 | fn | copyRemoteArtifacts | (private) |
| 311 | fn | runMantisDesktopBrowserSmoke | pub |
| 315 | fn | startedAt | (private) |

## extensions/qa-lab/src/mantis/run.runtime.ts (646 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | MantisBeforeAfterOptions | pub |
| 28 | type | MantisBeforeAfterResult | (private) |
| 36 | type | CommandRunner | (private) |
| 42 | type | DiscordQaSummary | (private) |
| 52 | type | NormalizedScenarioSummary | (private) |
| 60 | type | LaneResult | (private) |
| 69 | type | MantisScenarioConfig | (private) |
| 81 | type | Comparison | (private) |
| 138 | fn | normalizeRequiredLiteral | (private) |
| 151 | fn | defaultOutputDir | (private) |
| 156 | fn | defaultCommandRunner | (private) |
| 178 | fn | runCommand | (private) |
| 191 | fn | copyDirContents | (private) |
| 197 | fn | readLaneResult | (private) |
| 231 | fn | readNormalizedLaneResult | (private) |
| 260 | fn | renderReport | (private) |
| 307 | fn | relativeArtifactPath | (private) |
| 314 | fn | buildEvidenceManifest | (private) |
| 408 | fn | copyScreenshot | (private) |
| 420 | fn | copyVideo | (private) |
| 432 | fn | runLane | (private) |
| 522 | fn | runMantisBeforeAfter | pub |
| 525 | fn | startedAt | (private) |

## extensions/qa-lab/src/mantis/slack-desktop-smoke.runtime.test.ts (1157 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | fn | describeFetchInput | (private) |
| 19 | fn | describeFetchBody | (private) |
| 32 | fn | phaseStatus | (private) |
| 39 | fn | writeApprovalCheckpointArtifacts | (private) |
| 84 | fn | mockMantisCliRuntime | (private) |

## extensions/qa-lab/src/mantis/slack-desktop-smoke.runtime.ts (1589 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | MantisSlackDesktopSmokeOptions | pub |
| 56 | type | MantisSlackDesktopHydrateMode | pub |
| 58 | type | MantisSlackDesktopSmokeResult | (private) |
| 68 | type | SlackGatewayCredentialPayload | (private) |
| 74 | type | SlackGatewayCredentialLease | (private) |
| 77 | type | SlackGatewayCredentialHeartbeat | (private) |
| 79 | type | MantisSlackDesktopSmokeSummary | (private) |
| 109 | type | SlackDesktopRemoteMetadata | (private) |
| 117 | type | MantisApprovalCheckpointState | (private) |
| 119 | type | MantisApprovalCheckpointScreenshot | (private) |
| 127 | type | MantisApprovalCheckpointArtifacts | (private) |
| 179 | fn | normalizeHydrateMode | (private) |
| 192 | fn | defaultOutputDir | (private) |
| 197 | fn | resolveScenarioIds | (private) |
| 227 | fn | assertNonEmptyFile | (private) |
| 239 | fn | readJsonObject | (private) |
| 253 | fn | assertApprovalCheckpointBaseJson | (private) |
| 271 | fn | assertApprovalCheckpointJson | (private) |
| 313 | fn | assertApprovalCheckpointAckJson | (private) |
| 330 | fn | collectApprovalCheckpointArtifacts | (private) |
| 381 | fn | readRemoteMetadata | (private) |
| 406 | fn | buildCrabboxEnv | (private) |
| 440 | fn | resolveSlackGatewayEnvPayload | (private) |
| 456 | fn | parseSlackGatewayCredentialPayload | (private) |
| 479 | fn | prepareGatewayCredentialEnv | (private) |
| 520 | fn | renderRemoteScript | (private) |
| 901 | fn | delay | (private) |
| 902 | fn | htmlEscape | (private) |
| 910 | fn | readJson | (private) |
| 914 | fn | waitForCheckpoint | (private) |
| 930 | fn | renderCheckpointHtml | (private) |
| 995 | fn | captureScreenshot | (private) |
| 1030 | fn | writeJson | (private) |
| 1188 | fn | renderReport | (private) |
| 1242 | fn | copyRemoteArtifacts | (private) |
| 1280 | fn | runMantisSlackDesktopSmoke | pub |
| 1284 | fn | startedAt | (private) |
| 1586 | fn | toErrorObject | (private) |

## extensions/qa-lab/src/mantis/telegram-desktop-builder.runtime.ts (838 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | MantisTelegramDesktopBuilderOptions | pub |
| 47 | type | MantisTelegramDesktopHydrateMode | pub |
| 49 | type | MantisTelegramDesktopBuilderResult | (private) |
| 58 | type | TelegramGatewayCredentialPayload | (private) |
| 64 | type | TelegramGatewayCredentialLease | (private) |
| 67 | type | TelegramGatewayCredentialHeartbeat | (private) |
| 69 | type | MantisTelegramDesktopBuilderSummary | (private) |
| 100 | type | TelegramDesktopRemoteMetadata | (private) |
| 130 | fn | normalizeHydrateMode | (private) |
| 143 | fn | defaultOutputDir | (private) |
| 148 | fn | buildCrabboxEnv | (private) |
| 169 | fn | resolveTelegramGatewayEnvPayload | (private) |
| 183 | fn | parseTelegramGatewayCredentialPayload | (private) |
| 202 | fn | prepareGatewayCredentialEnv | (private) |
| 243 | fn | resolveProfileArchive | (private) |
| 257 | fn | readRemoteMetadata | (private) |
| 288 | fn | renderRemoteScript | (private) |
| 491 | fn | renderReport | (private) |
| 542 | fn | copyRemoteArtifacts | (private) |
| 566 | fn | runMantisTelegramDesktopBuilder | pub |
| 570 | fn | startedAt | (private) |
| 835 | fn | toErrorObject | (private) |

## extensions/qa-lab/src/mantis/visual-task.runtime.ts (821 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | MantisVisualTaskVisionMode | pub |
| 21 | type | MantisVisualTaskOptions | pub |
| 44 | type | MantisVisualDriverOptions | pub |
| 61 | type | MantisVisualTaskResult | (private) |
| 70 | type | MantisVisualDriverResult | (private) |
| 90 | type | VisionAssertion | (private) |
| 98 | type | MantisVisualTaskSummary | (private) |
| 145 | fn | defaultOutputDir | (private) |
| 150 | fn | resolveMantisOutputDir | (private) |
| 160 | fn | nonEmptyFileExists | (private) |
| 169 | fn | normalizeVisionMode | (private) |
| 180 | fn | defaultVisionPrompt | (private) |
| 187 | fn | buildVisionPrompt | (private) |
| 198 | fn | runCommandWithExternalOutput | (private) |
| 236 | fn | toErrorObject | (private) |
| 240 | fn | buildVisualDriverArgs | (private) |
| 291 | fn | parseImageDescribeText | (private) |
| 311 | fn | parseJsonObjectFromText | (private) |
| 336 | fn | parseVisionAssertion | (private) |
| 374 | fn | evaluateVisualExpectation | (private) |
| 392 | fn | browserLaunchScript | (private) |
| 401 | fn | renderReport | (private) |
| 451 | fn | runMantisVisualDriver | pub |
| 609 | fn | runMantisVisualTask | pub |
| 613 | fn | startedAt | (private) |
