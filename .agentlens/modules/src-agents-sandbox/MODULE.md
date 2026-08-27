# Module: src/agents/sandbox

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 84

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/agents/sandbox/backend-handle.types.ts` | 96 |  |
| `src/agents/sandbox/backend.test.ts` | 58 |  |
| `src/agents/sandbox/backend.ts` | 122 |  |
| `src/agents/sandbox/backend.types.ts` | 68 |  |
| `src/agents/sandbox/bind-spec.test.ts` | 32 |  |
| `src/agents/sandbox/bind-spec.ts` | 39 |  |
| `src/agents/sandbox/browser-bridges.ts` | 40 |  |
| `src/agents/sandbox/browser-policy.test.ts` | 145 |  |
| `src/agents/sandbox/browser-policy.ts` | 385 |  |
| `src/agents/sandbox/browser.create.test.ts` | 1025 | 📊 |
| `src/agents/sandbox/browser.novnc-url.test.ts` | 95 |  |
| `src/agents/sandbox/browser.ts` | 548 | 📊 |
| `src/agents/sandbox/config-hash.test.ts` | 300 |  |
| `src/agents/sandbox/config-hash.ts` | 86 |  |
| `src/agents/sandbox/config.test.ts` | 28 |  |
| `src/agents/sandbox/config.ts` | 286 |  |
| `src/agents/sandbox/constants.ts` | 73 |  |
| `src/agents/sandbox/context.ts` | 364 |  |
| `src/agents/sandbox/context.user-fallback.test.ts` | 46 |  |
| `src/agents/sandbox/current-config.ts` | 33 |  |
| `src/agents/sandbox/docker-backend.test.ts` | 197 |  |
| `src/agents/sandbox/docker-backend.ts` | 160 |  |
| `src/agents/sandbox/docker-user.ts` | 25 |  |
| `src/agents/sandbox/docker.config-hash-recreate.test.ts` | 528 | 📊 |
| `src/agents/sandbox/docker.execDockerRaw.enoent.test.ts` | 27 |  |
| `src/agents/sandbox/docker.test.ts` | 189 |  |
| `src/agents/sandbox/docker.ts` | 594 | 📊 |
| `src/agents/sandbox/fs-bridge-mutation-helper.test.ts` | 482 |  |
| `src/agents/sandbox/fs-bridge-mutation-helper.ts` | 526 | 📊 |
| `src/agents/sandbox/fs-bridge-path-safety.runtime.ts` | 7 |  |
| `src/agents/sandbox/fs-bridge-path-safety.ts` | 298 |  |
| `src/agents/sandbox/fs-bridge-rename-targets.ts` | 45 |  |
| `src/agents/sandbox/fs-bridge-shell-command-plans.ts` | 29 |  |
| `src/agents/sandbox/fs-bridge-stat-parse.ts` | 28 |  |
| `src/agents/sandbox/fs-bridge.anchored-ops.test.ts` | 327 |  |
| `src/agents/sandbox/fs-bridge.backend.e2e.test.ts` | 129 |  |
| `src/agents/sandbox/fs-bridge.boundary.test.ts` | 121 |  |
| `src/agents/sandbox/fs-bridge.shell.test.ts` | 200 |  |
| `src/agents/sandbox/fs-bridge.test-helpers.ts` | 245 |  |
| `src/agents/sandbox/fs-bridge.ts` | 316 |  |
| `src/agents/sandbox/fs-bridge.types.ts` | 47 |  |
| `src/agents/sandbox/fs-paths.test.ts` | 205 |  |
| `src/agents/sandbox/fs-paths.ts` | 415 |  |
| `src/agents/sandbox/hash.ts` | 11 |  |
| `src/agents/sandbox/host-paths.test.ts` | 83 |  |
| `src/agents/sandbox/host-paths.ts` | 77 |  |
| `src/agents/sandbox/manage.test.ts` | 199 |  |
| `src/agents/sandbox/manage.ts` | 126 |  |
| `src/agents/sandbox/network-mode.ts` | 40 |  |
| `src/agents/sandbox/novnc-auth.ts` | 118 |  |
| `src/agents/sandbox/path-utils.ts` | 29 |  |
| `src/agents/sandbox/prune.test.ts` | 224 |  |
| `src/agents/sandbox/prune.ts` | 147 |  |
| `src/agents/sandbox/registry.test.ts` | 472 |  |
| `src/agents/sandbox/registry.ts` | 743 | 📊 |
| `src/agents/sandbox/remote-fs-bridge.test.ts` | 299 |  |
| `src/agents/sandbox/remote-fs-bridge.ts` | 739 | 📊 |
| `src/agents/sandbox/runtime-status.ts` | 199 |  |
| `src/agents/sandbox/sanitize-env-vars.test.ts` | 120 |  |
| `src/agents/sandbox/sanitize-env-vars.ts` | 166 |  |
| `src/agents/sandbox/secret-owner.test.ts` | 44 |  |
| `src/agents/sandbox/secret-owner.ts` | 66 |  |
| `src/agents/sandbox/shared.ts` | 95 |  |
| `src/agents/sandbox/ssh-backend.test.ts` | 790 | 📊 |
| `src/agents/sandbox/ssh-backend.ts` | 473 |  |
| `src/agents/sandbox/ssh.spawn-env.test.ts` | 230 |  |
| `src/agents/sandbox/ssh.stream-errors.test.ts` | 103 |  |
| `src/agents/sandbox/ssh.test.ts` | 388 |  |
| `src/agents/sandbox/ssh.ts` | 932 | 📊 |
| `src/agents/sandbox/test-args.ts` | 24 |  |
| `src/agents/sandbox/test-fixtures.ts` | 50 |  |
| `src/agents/sandbox/tool-policy.test.ts` | 399 |  |
| `src/agents/sandbox/tool-policy.ts` | 268 |  |
| `src/agents/sandbox/types.docker.ts` | 18 |  |
| `src/agents/sandbox/types.ts` | 124 |  |
| `src/agents/sandbox/validate-sandbox-security.test.ts` | 461 |  |
| `src/agents/sandbox/validate-sandbox-security.ts` | 435 |  |
| `src/agents/sandbox/workspace-authority.test.ts` | 288 |  |
| `src/agents/sandbox/workspace-authority.ts` | 238 |  |
| `src/agents/sandbox/workspace-mounts.test.ts` | 252 |  |
| `src/agents/sandbox/workspace-mounts.ts` | 182 |  |
| `src/agents/sandbox/workspace-skills-bridge-readonly.test.ts` | 243 |  |
| `src/agents/sandbox/workspace.test.ts` | 119 |  |
| `src/agents/sandbox/workspace.ts` | 87 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies
