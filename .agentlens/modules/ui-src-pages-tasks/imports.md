# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_tasks[ui-src-pages-tasks] --> __[..]
    ui_src_pages_tasks[ui-src-pages-tasks] --> __[..]
    ui_src_pages_tasks[ui-src-pages-tasks] --> app[app]
    ui_src_pages_tasks[ui-src-pages-tasks] --> app[app]
    ui_src_pages_tasks[ui-src-pages-tasks] --> components[components]
    ui_src_pages_tasks[ui-src-pages-tasks] --> components[components]
    ui_src_pages_tasks[ui-src-pages-tasks] --> i18n[i18n]
    ui_src_pages_tasks[ui-src-pages-tasks] --> lib[lib]
    ui_src_pages_tasks[ui-src-pages-tasks] --> sessions[sessions]
    ui_src_pages_tasks[ui-src-pages-tasks] --> sessions[sessions]
    ui_src_pages_tasks[ui-src-pages-tasks] --> tasks[tasks]
    ui_src_pages_tasks[ui-src-pages-tasks] --> lit[lit]
    ui_src_pages_tasks[ui-src-pages-tasks] --> lit[lit]
    ui_src_pages_tasks[ui-src-pages-tasks] --> test_helpers[test-helpers]
    ui_src_pages_tasks[ui-src-pages-tasks] --> _[.]
    ui_src_pages_tasks[ui-src-pages-tasks] --> _[.]
    ui_src_pages_tasks[ui-src-pages-tasks] --> _lit[@lit]
    ui_src_pages_tasks[ui-src-pages-tasks] --> _openclaw[@openclaw]
    ui_src_pages_tasks[ui-src-pages-tasks] --> lit[lit]
    ui_src_pages_tasks[ui-src-pages-tasks] --> lit[lit]
    ui_src_pages_tasks[ui-src-pages-tasks] --> directives[directives]
    ui_src_pages_tasks[ui-src-pages-tasks] --> node_fs[node:fs]
    ui_src_pages_tasks[ui-src-pages-tasks] --> node_path[node:path]
    ui_src_pages_tasks[ui-src-pages-tasks] --> playwright[playwright]
    ui_src_pages_tasks[ui-src-pages-tasks] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../app-navigation.ts`
- `../../app-route-paths.ts`
- `../../app/context.ts`
- `../../app/operator-access.ts`
- `../../components/agent-scope-control.ts`
- `../../components/icons.ts`
- `../../i18n/index.ts`
- `../../lib/format.ts`
- `../../lib/sessions/index.ts`
- `../../lib/sessions/session-key.ts`
- `../../lib/tasks/data.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../test-helpers/control-ui-e2e.ts`
- `./tasks-page.ts`
- `./view.ts`
- `@lit/context`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `lit/directives/repeat.js`
- `node:fs/promises`
- `node:path`
- `playwright`
- `vitest`
