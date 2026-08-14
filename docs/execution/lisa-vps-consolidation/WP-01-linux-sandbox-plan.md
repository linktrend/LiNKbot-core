# WP-01 Linux sandbox installation and rollback plan

## Source contract

- Backend: Docker, the current OpenClaw default.
- Image tag: `openclaw-sandbox:bookworm-slim`, from
  `src/agents/sandbox/constants.ts`.
- Release pin: record the immutable image digest and source/release SHA in the
  VPS receipt before activation. A mutable tag alone is not acceptance proof;
  this source-only correction does not invent a digest.
- Baseline posture: non-root `sandbox` user, read-only root, `network: "none"`,
  `capDrop: ["ALL"]`, no host credential roots, no Docker socket, restricted
  workspace/agent mounts, and explicit resource limits.

## Installation gate

After approval and on the named Linux host, verify Docker ownership and
architecture, build or obtain the reviewed image, record its digest, and run
the repository-supported setup:

```bash
scripts/sandbox-setup.sh
```

Then use `openclaw sandbox recreate --all` through the normal controlled
operation, verify the configured image digest and container posture, and run
the harmless sandbox probe plus negative credential/mount/network probes. No
source test substitutes for these live checks.

## Configuration and rollback

Keep the backend and image in canonical sandbox configuration. Do not add host
credential binds or a container-control socket. Capture a redacted config
snapshot and image digest before activation. On failure, disable only the
task-owned sandbox route, restore the previous redacted configuration, and use
`openclaw sandbox recreate --all` to rebuild runtimes. Preserve shared
container infrastructure; never delete unrelated containers or state.

Current status: source plan complete; Linux installation, immutable digest,
container posture, isolation probes, and rollback rehearsal are HOLD.
