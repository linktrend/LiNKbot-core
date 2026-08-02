# linkbots

Per-bot workshops and mirrors for OpenClaw profiles.

- Each subdirectory (`lisa/`, `david/`, …) is a **profile workshop folder** — docs, personality files, commands, and related materials you edit in the repo.
- **Live runtime** remains under `~/.openclaw-<profile>` (for example `~/.openclaw-lisa` on port `18790`). Do not treat these workshop folders as the live state directory.
- Non-live Lisa routing / canary candidate contract: `lisa/ops/model-routing.contract.json` (`liveMutationAllowed: false`). Do not copy into the live profile without a separately approved rollout.
- Superseded Lisa workshop docs and historical `openclaw.json.bak-*` snapshots live under `docs/archive/linkbots-lisa/` (see `docs/archive/README.md`).

Use workshops for authoring and syncing; the profile home under `~/.openclaw-*` is what the gateway actually runs.
