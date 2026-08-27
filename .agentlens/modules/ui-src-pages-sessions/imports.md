# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_sessions[ui-src-pages-sessions] --> helpers[helpers]
    ui_src_pages_sessions[ui-src-pages-sessions] --> __[..]
    ui_src_pages_sessions[ui-src-pages-sessions] --> __[..]
    ui_src_pages_sessions[ui-src-pages-sessions] --> app[app]
    ui_src_pages_sessions[ui-src-pages-sessions] --> app[app]
    ui_src_pages_sessions[ui-src-pages-sessions] --> components[components]
    ui_src_pages_sessions[ui-src-pages-sessions] --> components[components]
    ui_src_pages_sessions[ui-src-pages-sessions] --> components[components]
    ui_src_pages_sessions[ui-src-pages-sessions] --> components[components]
    ui_src_pages_sessions[ui-src-pages-sessions] --> components[components]
    ui_src_pages_sessions[ui-src-pages-sessions] --> components[components]
    ui_src_pages_sessions[ui-src-pages-sessions] --> components[components]
    ui_src_pages_sessions[ui-src-pages-sessions] --> components[components]
    ui_src_pages_sessions[ui-src-pages-sessions] --> components[components]
    ui_src_pages_sessions[ui-src-pages-sessions] --> i18n[i18n]
    ui_src_pages_sessions[ui-src-pages-sessions] --> agents[agents]
    ui_src_pages_sessions[ui-src-pages-sessions] --> chat[chat]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lib[lib]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lib[lib]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lib[lib]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lib[lib]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lib[lib]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lib[lib]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lib[lib]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lib[lib]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lib[lib]
    ui_src_pages_sessions[ui-src-pages-sessions] --> sessions[sessions]
    ui_src_pages_sessions[ui-src-pages-sessions] --> sessions[sessions]
    ui_src_pages_sessions[ui-src-pages-sessions] --> sessions[sessions]
    ui_src_pages_sessions[ui-src-pages-sessions] --> sessions[sessions]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lib[lib]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lib[lib]
    ui_src_pages_sessions[ui-src-pages-sessions] --> workboard[workboard]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lit[lit]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lit[lit]
    ui_src_pages_sessions[ui-src-pages-sessions] --> __[..]
    ui_src_pages_sessions[ui-src-pages-sessions] --> styles[styles]
    ui_src_pages_sessions[ui-src-pages-sessions] --> test_helpers[test-helpers]
    ui_src_pages_sessions[ui-src-pages-sessions] --> _[.]
    ui_src_pages_sessions[ui-src-pages-sessions] --> _[.]
    ui_src_pages_sessions[ui-src-pages-sessions] --> _[.]
    ui_src_pages_sessions[ui-src-pages-sessions] --> _[.]
    ui_src_pages_sessions[ui-src-pages-sessions] --> _[.]
    ui_src_pages_sessions[ui-src-pages-sessions] --> _lit[@lit]
    ui_src_pages_sessions[ui-src-pages-sessions] --> normalization_core[normalization-core]
    ui_src_pages_sessions[ui-src-pages-sessions] --> _openclaw[@openclaw]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lit[lit]
    ui_src_pages_sessions[ui-src-pages-sessions] --> lit[lit]
    ui_src_pages_sessions[ui-src-pages-sessions] --> playwright[playwright]
    ui_src_pages_sessions[ui-src-pages-sessions] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../test/helpers/ui-style-fixtures.js`
- `../../app-navigation.ts`
- `../../app-route-paths.ts`
- `../../app/context.ts`
- `../../app/operator-access.ts`
- `../../components/agent-scope-control.ts`
- `../../components/icons.ts`
- `../../components/session-menu-work.ts`
- `../../components/session-menu.ts`
- `../../components/session-row-badges.ts`
- `../../components/sessions-hub-tabs.ts`
- `../../components/settings-ui.ts`
- `../../components/settings-workspace.ts`
- `../../components/tooltip.ts`
- `../../i18n/index.ts`
- `../../lib/agents/display.ts`
- `../../lib/chat/thinking.ts`
- `../../lib/editor-links.ts`
- `../../lib/format.ts`
- `../../lib/gateway-methods.ts`
- `../../lib/open-external-url.ts`
- `../../lib/plugin-activation.ts`
- `../../lib/presenter.ts`
- `../../lib/session-goal.ts`
- `../../lib/session-model-defaults.ts`
- `../../lib/session-run-state.ts`
- `../../lib/sessions/drag.ts`
- `../../lib/sessions/grouping.ts`
- `../../lib/sessions/index.ts`
- `../../lib/sessions/session-key.ts`
- `../../lib/string-coerce.ts`
- `../../lib/toast.ts`
- `../../lib/workboard/index.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../local-storage.ts`
- `../../styles/sessions.css`
- `../../test-helpers/control-ui-e2e.ts`
- `./agent-scope.ts`
- `./custom-groups.ts`
- `./page-state.ts`
- `./sessions-page.ts`
- `./view.ts`
- `@lit/context`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `playwright`
- `vitest`
