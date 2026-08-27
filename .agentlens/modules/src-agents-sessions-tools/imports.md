# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_agents_sessions_tools[src-agents-sessions-tools] --> helpers[helpers]
    src_agents_sessions_tools[src-agents-sessions-tools] --> infra[infra]
    src_agents_sessions_tools[src-agents-sessions-tools] --> format_time[format-time]
    src_agents_sessions_tools[src-agents-sessions-tools] --> infra[infra]
    src_agents_sessions_tools[src-agents-sessions-tools] --> media[media]
    src_agents_sessions_tools[src-agents-sessions-tools] --> process[process]
    src_agents_sessions_tools[src-agents-sessions-tools] --> process[process]
    src_agents_sessions_tools[src-agents-sessions-tools] --> shared[shared]
    src_agents_sessions_tools[src-agents-sessions-tools] --> shared[shared]
    src_agents_sessions_tools[src-agents-sessions-tools] --> test_utils[test-utils]
    src_agents_sessions_tools[src-agents-sessions-tools] --> __[..]
    src_agents_sessions_tools[src-agents-sessions-tools] --> components[components]
    src_agents_sessions_tools[src-agents-sessions-tools] --> components[components]
    src_agents_sessions_tools[src-agents-sessions-tools] --> components[components]
    src_agents_sessions_tools[src-agents-sessions-tools] --> theme[theme]
    src_agents_sessions_tools[src-agents-sessions-tools] --> __[..]
    src_agents_sessions_tools[src-agents-sessions-tools] --> tools[tools]
    src_agents_sessions_tools[src-agents-sessions-tools] --> utils[utils]
    src_agents_sessions_tools[src-agents-sessions-tools] --> utils[utils]
    src_agents_sessions_tools[src-agents-sessions-tools] --> utils[utils]
    src_agents_sessions_tools[src-agents-sessions-tools] --> utils[utils]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _[.]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _earendil_works[@earendil-works]
    src_agents_sessions_tools[src-agents-sessions-tools] --> _openclaw[@openclaw]
    src_agents_sessions_tools[src-agents-sessions-tools] --> normalization_core[normalization-core]
    src_agents_sessions_tools[src-agents-sessions-tools] --> normalization_core[normalization-core]
    src_agents_sessions_tools[src-agents-sessions-tools] --> node_buffer[node:buffer]
    src_agents_sessions_tools[src-agents-sessions-tools] --> node_crypto[node:crypto]
    src_agents_sessions_tools[src-agents-sessions-tools] --> node_events[node:events]
    src_agents_sessions_tools[src-agents-sessions-tools] --> node_fs[node:fs]
    src_agents_sessions_tools[src-agents-sessions-tools] --> node_fs[node:fs]
    src_agents_sessions_tools[src-agents-sessions-tools] --> node_os[node:os]
    src_agents_sessions_tools[src-agents-sessions-tools] --> node_path[node:path]
    src_agents_sessions_tools[src-agents-sessions-tools] --> node_readline[node:readline]
    src_agents_sessions_tools[src-agents-sessions-tools] --> node_stream[node:stream]
    src_agents_sessions_tools[src-agents-sessions-tools] --> node_url[node:url]
    src_agents_sessions_tools[src-agents-sessions-tools] --> plugin_sdk[plugin-sdk]
    src_agents_sessions_tools[src-agents-sessions-tools] --> typebox[typebox]
    src_agents_sessions_tools[src-agents-sessions-tools] --> typebox[typebox]
    src_agents_sessions_tools[src-agents-sessions-tools] --> vitest[vitest]
```

## Internal Dependencies

Dependencies within this module:

- `diff`

## External Dependencies

Dependencies from other modules:

- `../../../../test/helpers/temp-dir.js`
- `../../../infra/errors.js`
- `../../../infra/format-time/format-duration.js`
- `../../../infra/windows-encoding.js`
- `../../../media/media-reference.js`
- `../../../process/child-process.js`
- `../../../process/exec.js`
- `../../../shared/ignore-rules.js`
- `../../../shared/levenshtein-distance.js`
- `../../../test-utils/env.js`
- `../../config.js`
- `../../modes/interactive/components/diff.js`
- `../../modes/interactive/components/keybinding-hints.js`
- `../../modes/interactive/components/visual-truncate.js`
- `../../modes/interactive/theme/theme.js`
- `../../shell-utils.js`
- `../../tools/common.js`
- `../../utils/image-resize.js`
- `../../utils/mime.js`
- `../../utils/paths.js`
- `../../utils/tools-manager.js`
- `./bash.js`
- `./bash.test-support.js`
- `./edit-diff.js`
- `./edit.js`
- `./file-mutation-queue.js`
- `./find.js`
- `./grep.js`
- `./limits.js`
- `./ls.js`
- `./output-accumulator.js`
- `./path-utils.js`
- `./private-temp-file.js`
- `./read.js`
- `./render-utils.js`
- `./tool-contracts.js`
- `./tool-definition-wrapper.js`
- `./truncate.js`
- `./write.js`
- `@earendil-works/pi-tui`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/utf16-slice`
- `node:buffer`
- `node:crypto`
- `node:events`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:readline`
- `node:stream`
- `node:url`
- `openclaw/plugin-sdk/keyed-async-queue`
- `typebox`
- `typebox/value`
- `vitest`
