# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_app[ui-src-app] --> gateway[gateway]
    ui_src_app[ui-src-app] --> gateway[gateway]
    ui_src_app[ui-src-app] --> shared[shared]
    ui_src_app[ui-src-app] --> config[config]
    ui_src_app[ui-src-app] --> __[..]
    ui_src_app[ui-src-app] --> api[api]
    ui_src_app[ui-src-app] --> __[..]
    ui_src_app[ui-src-app] --> __[..]
    ui_src_app[ui-src-app] --> __[..]
    ui_src_app[ui-src-app] --> __[..]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> components[components]
    ui_src_app[ui-src-app] --> i18n[i18n]
    ui_src_app[ui-src-app] --> agents[agents]
    ui_src_app[ui-src-app] --> agents[agents]
    ui_src_app[ui-src-app] --> lib[lib]
    ui_src_app[ui-src-app] --> lib[lib]
    ui_src_app[ui-src-app] --> board[board]
    ui_src_app[ui-src-app] --> channels[channels]
    ui_src_app[ui-src-app] --> lib[lib]
    ui_src_app[ui-src-app] --> config[config]
    ui_src_app[ui-src-app] --> lib[lib]
    ui_src_app[ui-src-app] --> lib[lib]
    ui_src_app[ui-src-app] --> lib[lib]
    ui_src_app[ui-src-app] --> lib[lib]
    ui_src_app[ui-src-app] --> lib[lib]
    ui_src_app[ui-src-app] --> sessions[sessions]
    ui_src_app[ui-src-app] --> sessions[sessions]
    ui_src_app[ui-src-app] --> sessions[sessions]
    ui_src_app[ui-src-app] --> lib[lib]
    ui_src_app[ui-src-app] --> lib[lib]
    ui_src_app[ui-src-app] --> lib[lib]
    ui_src_app[ui-src-app] --> lib[lib]
    ui_src_app[ui-src-app] --> workboard[workboard]
    ui_src_app[ui-src-app] --> lit[lit]
    ui_src_app[ui-src-app] --> lit[lit]
    ui_src_app[ui-src-app] --> __[..]
    ui_src_app[ui-src-app] --> chat[chat]
    ui_src_app[ui-src-app] --> chat[chat]
    ui_src_app[ui-src-app] --> config[config]
    ui_src_app[ui-src-app] --> model_setup[model-setup]
    ui_src_app[ui-src-app] --> new_session[new-session]
    ui_src_app[ui-src-app] --> nodes[nodes]
    ui_src_app[ui-src-app] --> plugin[plugin]
    ui_src_app[ui-src-app] --> test_helpers[test-helpers]
    ui_src_app[ui-src-app] --> test_helpers[test-helpers]
    ui_src_app[ui-src-app] --> test_helpers[test-helpers]
    ui_src_app[ui-src-app] --> test_helpers[test-helpers]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _[.]
    ui_src_app[ui-src-app] --> _lit[@lit]
    ui_src_app[ui-src-app] --> normalization_core[normalization-core]
    ui_src_app[ui-src-app] --> normalization_core[normalization-core]
    ui_src_app[ui-src-app] --> _openclaw[@openclaw]
    ui_src_app[ui-src-app] --> lit[lit]
    ui_src_app[ui-src-app] --> lit[lit]
    ui_src_app[ui-src-app] --> directives[directives]
    ui_src_app[ui-src-app] --> node_fs[node:fs]
    ui_src_app[ui-src-app] --> node_fs[node:fs]
    ui_src_app[ui-src-app] --> node_path[node:path]
    ui_src_app[ui-src-app] --> node_url[node:url]
    ui_src_app[ui-src-app] --> node_vm[node:vm]
    ui_src_app[ui-src-app] --> node_zlib[node:zlib]
    ui_src_app[ui-src-app] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../src/gateway/control-ui-contract.js`
- `../../../src/gateway/events.js`
- `../../../src/shared/operator-scope-compat.js`
- `../../config/control-ui-chunking.ts`
- `../../vite.config.ts`
- `../api/gateway.ts`
- `../app-navigation.ts`
- `../app-route-paths.ts`
- `../app-routes.ts`
- `../build-info.ts`
- `../components/app-sidebar.ts`
- `../components/app-topbar.ts`
- `../components/command-palette-contract.ts`
- `../components/connection-banner.ts`
- `../components/gateway-url-confirmation.ts`
- `../components/github-link-hovercard-registration.ts`
- `../components/icons.ts`
- `../components/login-gate.ts`
- `../components/macos-titlebar-controls.ts`
- `../components/mcp-app-unmount.ts`
- `../components/menu-surface.ts`
- `../components/modal-dialog.ts`
- `../components/native-link-menu.ts`
- `../components/onboarding-memory-import.ts`
- `../components/panel-toggle-contract.ts`
- `../components/resizable-divider.ts`
- `../components/settings-sidebar.ts`
- `../components/sidebar-update-card.ts`
- `../components/tooltip.ts`
- `../components/update-banner.ts`
- `../i18n/index.ts`
- `../lib/agents/identity.ts`
- `../lib/agents/index.ts`
- `../lib/assistant-identity.ts`
- `../lib/avatar.ts`
- `../lib/board/settings.ts`
- `../lib/channels/index.ts`
- `../lib/clipboard.ts`
- `../lib/config/index.ts`
- `../lib/device-pair-setup.ts`
- `../lib/format.ts`
- `../lib/gateway-methods.ts`
- `../lib/identity-avatar.ts`
- `../lib/plugin-activation.ts`
- `../lib/sessions/catalog-key.ts`
- `../lib/sessions/index.ts`
- `../lib/sessions/session-key.ts`
- `../lib/string-coerce.ts`
- `../lib/terminal-availability.ts`
- `../lib/toast.ts`
- `../lib/uuid.ts`
- `../lib/workboard/capability.ts`
- `../lit/openclaw-element.ts`
- `../lit/subscriptions-controller.ts`
- `../local-storage.ts`
- `../pages/chat/input-history.ts`
- `../pages/chat/split-layout.ts`
- `../pages/config/settings-search.ts`
- `../pages/model-setup/first-run.ts`
- `../pages/new-session/location.ts`
- `../pages/nodes/view-pairing.ts`
- `../pages/plugin/route.ts`
- `../test-helpers/application-context.ts`
- `../test-helpers/custom-theme.ts`
- `../test-helpers/storage.ts`
- `../test-helpers/wait-for.ts`
- `./agent-selection.ts`
- `./app-host.ts`
- `./approval-deep-link.ts`
- `./approval-presentation.ts`
- `./bootstrap.ts`
- `./browser.ts`
- `./config.ts`
- `./context.ts`
- `./control-ui-auth.ts`
- `./custom-theme.ts`
- `./exec-approval.ts`
- `./gateway-scope.ts`
- `./gateway-store.ts`
- `./lazy-custom-element.ts`
- `./mobile-nav-layout.ts`
- `./native-bridge.ts`
- `./native-link-routing.ts`
- `./native-nav-state.ts`
- `./native-notifications.ts`
- `./native-route-memory.ts`
- `./native-web-chrome.ts`
- `./native-window-drag.ts`
- `./navigation-surface.ts`
- `./onboarding-mode.ts`
- `./operator-access.ts`
- `./overlays.ts`
- `./public-assets.ts`
- `./question-prompt.ts`
- `./router-outlet-controller.ts`
- `./router-outlet.ts`
- `./server-prefs.ts`
- `./settings-normalizers.ts`
- `./settings.ts`
- `./stale-chunk-reload.ts`
- `./startup-settings.ts`
- `./theme-transition.ts`
- `./theme.ts`
- `./user-identity.ts`
- `./user-profile.ts`
- `./web-push.ts`
- `@lit/context`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `lit/directives/ref.js`
- `node:fs`
- `node:fs/promises`
- `node:path`
- `node:url`
- `node:vm`
- `node:zlib`
- `vitest`
