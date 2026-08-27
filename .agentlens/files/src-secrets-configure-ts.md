# src/secrets/configure.ts

[← Back to Module](../modules/src-secrets/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1080
- **Language:** TypeScript
- **Symbols:** 33
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 52 | type | SecretsConfigureResult | (private) | - |
| 61 | fn | isAbsolutePathValue | (private) | `function isAbsolutePathValue(value: string): bo...` |
| 69 | fn | parseCsv | (private) | `function parseCsv(value: string): string[] {` |
| 76 | fn | parseOptionalPositiveInt | (private) | `function parseOptionalPositiveInt(value: string...` |
| 91 | fn | getSecretProviders | (private) | `function getSecretProviders(config: OpenClawCon...` |
| 98 | fn | setSecretProvider | (private) | `function setSecretProvider(` |
| 110 | fn | removeSecretProvider | (private) | `function removeSecretProvider(config: OpenClawC...` |
| 146 | fn | providerHint | (private) | `function providerHint(provider: SecretProviderC...` |
| 160 | fn | providerPresetKey | (private) | `function providerPresetKey(preset: SecretProvid...` |
| 164 | fn | providerPresetHint | (private) | `function providerPresetHint(preset: SecretProvi...` |
| 168 | fn | loadSecretProviderIntegrationPresets | (private) | `function loadSecretProviderIntegrationPresets(p...` |
| 183 | fn | toSourceChoices | (private) | `function toSourceChoices(config: OpenClawConfig...` |
| 184 | fn | hasSource | (private) | `const hasSource = (source: SecretRefSource) =>` |
| 201 | fn | assertNoCancel | (private) | `function assertNoCancel<T>(value: T | symbol, m...` |
| 210 | fn | validateEnvNameCsv | (private) | `function validateEnvNameCsv(value: string): str...` |
| 220 | fn | promptEnvNameCsv | (private) | `async function promptEnvNameCsv(params: {` |
| 235 | fn | promptOptionalPositiveInt | (private) | `async function promptOptionalPositiveInt(params: {` |
| 265 | fn | configureCandidateKey | (private) | `function configureCandidateKey(candidate: {` |
| 276 | fn | hasSourceChoice | (private) | `function hasSourceChoice(` |
| 283 | fn | resolveCandidateProviderHint | (private) | `function resolveCandidateProviderHint(candidate...` |
| 290 | fn | resolveSuggestedEnvSecretId | (private) | `function resolveSuggestedEnvSecretId(candidate:...` |
| 302 | fn | resolveConfigureAgentId | (private) | `function resolveConfigureAgentId(config: OpenCl...` |
| 317 | fn | loadAuthProfileStoreForConfigure | (private) | `function loadAuthProfileStoreForConfigure(param...` |
| 330 | fn | promptNewAuthProfileCandidate | (private) | `async function promptNewAuthProfileCandidate(ag...` |
| 393 | fn | promptProviderAlias | (private) | `async function promptProviderAlias(params: { ex...` |
| 417 | fn | promptProviderSource | (private) | `async function promptProviderSource(initial?: S...` |
| 433 | fn | promptEnvProvider | (private) | `async function promptEnvProvider(` |
| 446 | fn | promptFileProvider | (private) | `async function promptFileProvider(` |
| 507 | fn | parseArgsInput | (private) | `async function parseArgsInput(rawValue: string)...` |
| 519 | fn | promptExecProvider | (private) | `async function promptExecProvider(` |
| 648 | fn | promptProviderConfig | (private) | `async function promptProviderConfig(` |
| 663 | fn | configureProvidersInteractive | (private) | `async function configureProvidersInteractive(` |
| 820 | fn | runSecretsConfigureInteractive | pub | `export async function runSecretsConfigureIntera...` |

## Public API

### `runSecretsConfigureInteractive`

```
export async function runSecretsConfigureInteractive(
```

**Line:** 820 | **Kind:** fn
