# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/vault/src/cli.ts (568 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | CommandLike | (private) |
| 22 | type | SecretRef | (private) |
| 28 | type | SecretsPlanTarget | (private) |
| 38 | type | VaultExecProviderConfig | (private) |
| 46 | type | ProviderSecretMapping | (private) |
| 51 | type | ConfigTargetSecretMapping | (private) |
| 57 | type | SecretsApplyPlan | (private) |
| 66 | type | RegisterVaultCommandsParams | (private) |
| 71 | type | StatusOptions | (private) |
| 76 | type | SetupOptions | (private) |
| 86 | type | ProviderStatus | (private) |
| 101 | fn | writeLine | (private) |
| 105 | fn | writeJson | (private) |
| 109 | fn | isRecord | (private) |
| 113 | fn | normalizeOptionalString | (private) |
| 117 | fn | parseDotPath | (private) |
| 124 | fn | toDotPath | (private) |
| 128 | fn | assertValidProviderAlias | (private) |
| 136 | fn | assertValidModelProviderId | (private) |
| 142 | fn | assertValidVaultSecretId | (private) |
| 150 | fn | readProviderStatus | (private) |
| 174 | fn | isVaultIntegrationProvider | (private) |
| 184 | fn | resolveStatusProviderAlias | (private) |
| 205 | fn | pathExists | (private) |
| 214 | fn | resolverScriptPathCandidates | (private) |
| 221 | fn | resolveResolverScriptPath | (private) |
| 234 | fn | buildProviderConfig | (private) |
| 244 | fn | createModelApiKeyTarget | (private) |
| 263 | fn | parseTargetSpecifier | (private) |
| 282 | fn | createConfigSecretTarget | (private) |
| 319 | fn | parseProviderKeyMappings | (private) |
| 335 | fn | parseConfigTargetMappings | (private) |
| 353 | fn | collectProviderSecrets | (private) |
| 382 | fn | assertNoDuplicatePlanTargets | (private) |
| 395 | fn | buildPlan | (private) |
| 431 | fn | promptOptionalSecretId | (private) |
| 443 | fn | promptProviderSecrets | (private) |
| 467 | fn | runStatus | (private) |
| 515 | fn | runSetup | (private) |
| 539 | fn | registerVaultCommands | pub |

## extensions/vault/src/secret-ref-resolver.test.ts (1040 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | runResolver | (private) |
| 75 | fn | writeTempFile | (private) |
| 83 | fn | startVaultFixture | (private) |
| 121 | fn | startVaultErrorFixture | (private) |
| 164 | fn | startVaultMixedErrorFixture | (private) |
| 188 | fn | startVaultStalledBodyFixture | (private) |
| 212 | fn | startVaultOversizedErrorBodyFixture | (private) |
| 243 | fn | readRequestBody | (private) |
| 255 | fn | startVaultJwtFixture | (private) |
| 320 | fn | startVaultJwtErrorFixture | (private) |
