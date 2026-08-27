# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> agents[agents]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> agents[agents]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> cli[cli]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> cli[cli]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> config[config]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> config[config]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> daemon[daemon]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> daemon[daemon]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> infra[infra]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> plugins[plugins]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> plugins[plugins]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> plugins[plugins]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> plugins[plugins]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> plugins[plugins]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> plugins[plugins]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> plugins[plugins]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> secrets[secrets]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> shared[shared]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> test_utils[test-utils]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> __[..]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> _[.]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> _[.]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> _[.]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> _[.]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> _[.]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> _openclaw[@openclaw]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> normalization_core[normalization-core]
    src_commands_onboard_non_interactive_local[src-commands-onboard-non-interactive-local] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../agents/agent-scope.js`
- `../../../agents/workspace.js`
- `../../../cli/command-format.js`
- `../../../cli/error-format.js`
- `../../../config/model-input.js`
- `../../../config/types.secrets.js`
- `../../../daemon/service.js`
- `../../../daemon/systemd.js`
- `../../../infra/errors.js`
- `../../../plugins/enable.js`
- `../../../plugins/provider-auth-choice-preference.js`
- `../../../plugins/provider-auth-choices.js`
- `../../../plugins/provider-install-catalog.js`
- `../../../plugins/provider-wizard.js`
- `../../../plugins/providers.js`
- `../../../plugins/providers.runtime.js`
- `../../../runtime.js`
- `../../../secrets/ref-contract.js`
- `../../../shared/lazy-runtime.js`
- `../../../test-utils/env.js`
- `../../../utils.js`
- `../../auth-choice-legacy.js`
- `../../auth-choice-options.js`
- `../../auth-choice.apply-helpers.js`
- `../../auth-choice.apply.api-providers.js`
- `../../codex-runtime-plugin-install.js`
- `../../copilot-runtime-plugin-install.js`
- `../../daemon-install-helpers.js`
- `../../daemon-runtime.js`
- `../../gateway-install-token.js`
- `../../non-interactive-prompter.js`
- `../../onboard-core-auth-flags.js`
- `../../onboard-custom-config.js`
- `../../onboard-helpers.js`
- `../../systemd-linger.js`
- `../api-keys.js`
- `./auth-choice-inference.js`
- `./auth-choice.js`
- `./auth-choice.plugin-providers.js`
- `./daemon-install.js`
- `./gateway-config.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-coerce`
- `vitest`
