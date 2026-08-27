# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/github-copilot/index.test.ts (1503 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | requireAuthMethod | (private) |
| 63 | type | RegisteredMemoryEmbeddingProvider | (private) |
| 66 | type | RegisteredProvider | (private) |
| 67 | type | GithubCopilotTestProvider | (private) |
| 80 | type | GithubCopilotTestModelCatalogProvider | (private) |
| 101 | fn | createAgentDir | (private) |
| 107 | fn | createModelRegistry | (private) |
| 116 | fn | writeExistingCopilotTokenProfile | (private) |
| 133 | fn | requireFirstMockArg | (private) |
| 144 | fn | registerProviderAndCatalogWithPluginConfig | (private) |
| 176 | fn | registerProviderWithPluginConfig | (private) |
| 512 | fn | catalogResponse | (private) |
| 617 | fn | catalogResponse | (private) |
| 790 | fn | buildDeviceFlowFetchMock | (private) |
| 822 | fn | withTty | (private) |

## extensions/github-copilot/index.ts (668 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | GithubCopilotPluginConfig | (private) |
| 54 | fn | loadGithubCopilotRuntime | (private) |
| 58 | fn | applyCopilotDefaultModel | (private) |
| 93 | fn | resolveExistingCopilotTokenProfileId | (private) |
| 108 | fn | resolveExistingCopilotAuthResult | (private) |
| 136 | fn | buildGithubCopilotDomainConfigPatch | (private) |
| 149 | fn | clearGithubCopilotDomainConfigPatch | (private) |
| 159 | fn | applyGithubCopilotDomainToConfig | (private) |
| 200 | fn | resolveCopilotNonInteractiveToken | (private) |
| 204 | fn | resolveFromEnvChain | (private) |
| 267 | fn | runGitHubCopilotNonInteractiveAuth | (private) |
| 345 | fn | openTokenCacheStore | (private) |
| 355 | fn | resolveCurrentPluginConfig | (private) |
| 366 | fn | runGithubCopilotUnifiedLiveCatalog | (private) |
| 387 | fn | promptForEnterpriseDomain | (private) |
| 431 | fn | runGitHubCopilotDeviceAuth | (private) |
| 548 | fn | runGitHubCopilotAuth | (private) |
| 552 | fn | runGitHubCopilotEnterpriseAuth | (private) |

## extensions/github-copilot/models.test.ts (840 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | createMockCtx | (private) |
| 53 | fn | requireResolvedModel | (private) |
| 61 | fn | copilotCredentialFixture | (private) |
| 462 | fn | resolve | (private) |
