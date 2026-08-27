# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/cli/capability-cli/model.ts (548 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | canonicalizeModelRunRef | (private) |
| 68 | fn | collectModelRunText | (private) |
| 75 | fn | requireModelRunPrompt | (private) |
| 82 | type | ModelRunImageFile | (private) |
| 89 | fn | readModelRunImageFiles | (private) |
| 127 | fn | normalizeModelRunThinking | (private) |
| 143 | fn | runModelRun | (private) |
| 325 | fn | buildModelProviders | (private) |
| 360 | fn | runModelAuthStatus | (private) |
| 379 | fn | runModelAuthLogout | (private) |
| 419 | fn | registerModelCapabilityCommands | pub |

## src/cli/capability-cli/tts-runtime.ts (562 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | runTtsConvert | pub |
| 157 | fn | resolveTtsProviderForAuthHydration | (private) |
| 172 | fn | injectTtsAuthProfileApiKey | (private) |
| 245 | type | TtsProviderConfigLocation | (private) |
| 251 | type | ExistingTtsProviderConfig | (private) |
| 261 | fn | resolveExistingTtsProviderConfig | (private) |
| 289 | fn | resolveExistingTtsProviderConfigInTts | (private) |
| 331 | fn | resolveDirectTtsProviderConfig | (private) |
| 353 | fn | resolveChannelTtsConfigForAuthHydration | (private) |
| 376 | fn | buildTtsConfigWithHydratedProvider | (private) |
| 400 | fn | isObjectRecord | (private) |
| 404 | fn | ttsProviderConfigHasApiKey | (private) |
| 408 | fn | resolvedTtsConfigHasProviderApiKey | (private) |
| 415 | fn | runTtsProviders | pub |
| 461 | fn | runTtsPersonas | pub |
| 485 | fn | runTtsVoices | pub |
| 500 | fn | runTtsStateMutation | pub |
