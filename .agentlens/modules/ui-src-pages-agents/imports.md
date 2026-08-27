# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_agents[ui-src-pages-agents] --> agents[agents]
    ui_src_pages_agents[ui-src-pages-agents] --> shared[shared]
    ui_src_pages_agents[ui-src-pages-agents] --> __[..]
    ui_src_pages_agents[ui-src-pages-agents] --> app[app]
    ui_src_pages_agents[ui-src-pages-agents] --> app[app]
    ui_src_pages_agents[ui-src-pages-agents] --> components[components]
    ui_src_pages_agents[ui-src-pages-agents] --> components[components]
    ui_src_pages_agents[ui-src-pages-agents] --> components[components]
    ui_src_pages_agents[ui-src-pages-agents] --> components[components]
    ui_src_pages_agents[ui-src-pages-agents] --> components[components]
    ui_src_pages_agents[ui-src-pages-agents] --> components[components]
    ui_src_pages_agents[ui-src-pages-agents] --> i18n[i18n]
    ui_src_pages_agents[ui-src-pages-agents] --> agents[agents]
    ui_src_pages_agents[ui-src-pages-agents] --> agents[agents]
    ui_src_pages_agents[ui-src-pages-agents] --> lib[lib]
    ui_src_pages_agents[ui-src-pages-agents] --> channels[channels]
    ui_src_pages_agents[ui-src-pages-agents] --> lib[lib]
    ui_src_pages_agents[ui-src-pages-agents] --> config[config]
    ui_src_pages_agents[ui-src-pages-agents] --> cron[cron]
    ui_src_pages_agents[ui-src-pages-agents] --> lib[lib]
    ui_src_pages_agents[ui-src-pages-agents] --> lib[lib]
    ui_src_pages_agents[ui-src-pages-agents] --> sessions[sessions]
    ui_src_pages_agents[ui-src-pages-agents] --> lib[lib]
    ui_src_pages_agents[ui-src-pages-agents] --> lib[lib]
    ui_src_pages_agents[ui-src-pages-agents] --> skills[skills]
    ui_src_pages_agents[ui-src-pages-agents] --> lib[lib]
    ui_src_pages_agents[ui-src-pages-agents] --> lit[lit]
    ui_src_pages_agents[ui-src-pages-agents] --> lit[lit]
    ui_src_pages_agents[ui-src-pages-agents] --> styles[styles]
    ui_src_pages_agents[ui-src-pages-agents] --> styles[styles]
    ui_src_pages_agents[ui-src-pages-agents] --> test_helpers[test-helpers]
    ui_src_pages_agents[ui-src-pages-agents] --> _[.]
    ui_src_pages_agents[ui-src-pages-agents] --> _[.]
    ui_src_pages_agents[ui-src-pages-agents] --> _[.]
    ui_src_pages_agents[ui-src-pages-agents] --> _[.]
    ui_src_pages_agents[ui-src-pages-agents] --> _[.]
    ui_src_pages_agents[ui-src-pages-agents] --> memory[memory]
    ui_src_pages_agents[ui-src-pages-agents] --> _[.]
    ui_src_pages_agents[ui-src-pages-agents] --> _[.]
    ui_src_pages_agents[ui-src-pages-agents] --> _[.]
    ui_src_pages_agents[ui-src-pages-agents] --> _[.]
    ui_src_pages_agents[ui-src-pages-agents] --> _[.]
    ui_src_pages_agents[ui-src-pages-agents] --> _[.]
    ui_src_pages_agents[ui-src-pages-agents] --> _[.]
    ui_src_pages_agents[ui-src-pages-agents] --> _create_markdown[@create-markdown]
    ui_src_pages_agents[ui-src-pages-agents] --> _lit[@lit]
    ui_src_pages_agents[ui-src-pages-agents] --> _openclaw[@openclaw]
    ui_src_pages_agents[ui-src-pages-agents] --> dompurify[dompurify]
    ui_src_pages_agents[ui-src-pages-agents] --> lit[lit]
    ui_src_pages_agents[ui-src-pages-agents] --> lit[lit]
    ui_src_pages_agents[ui-src-pages-agents] --> directives[directives]
    ui_src_pages_agents[ui-src-pages-agents] --> directives[directives]
    ui_src_pages_agents[ui-src-pages-agents] --> marked[marked]
    ui_src_pages_agents[ui-src-pages-agents] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../src/agents/tool-policy-shared.js`
- `../../../../src/shared/avatar-limits.js`
- `../../app-navigation.ts`
- `../../app/context.ts`
- `../../app/control-ui-auth.ts`
- `../../components/agent-select-registration.ts`
- `../../components/icons.ts`
- `../../components/modal-dialog.ts`
- `../../components/settings-ui.ts`
- `../../components/settings-workspace.ts`
- `../../components/tooltip.ts`
- `../../i18n/index.ts`
- `../../lib/agents/display.ts`
- `../../lib/agents/index.ts`
- `../../lib/avatar.ts`
- `../../lib/channels/index.ts`
- `../../lib/clipboard.ts`
- `../../lib/config/index.ts`
- `../../lib/cron/index.ts`
- `../../lib/format.ts`
- `../../lib/presenter.ts`
- `../../lib/sessions/session-key.ts`
- `../../lib/skills-grouping.ts`
- `../../lib/skills-shared.ts`
- `../../lib/skills/index.ts`
- `../../lib/string-coerce.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../styles/agents.css`
- `../../styles/sidebar-markdown.css`
- `../../test-helpers/storage.ts`
- `./agent-file-preview-state.ts`
- `./agents-page.ts`
- `./avatar-image.ts`
- `./files.ts`
- `./identity-actions.ts`
- `./memory/memory-panel.ts`
- `./model-config.ts`
- `./panels-overview.ts`
- `./panels-status-files.ts`
- `./panels-tools-skills.ts`
- `./route.ts`
- `./skills.ts`
- `./view.ts`
- `@create-markdown/preview`
- `@lit/context`
- `@openclaw/uirouter`
- `dompurify`
- `lit`
- `lit/decorators.js`
- `lit/directives/keyed.js`
- `lit/directives/unsafe-html.js`
- `marked`
- `vitest`
