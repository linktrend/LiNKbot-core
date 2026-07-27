# Contract consumption pins (OpenClaw consumer)

Sanitized metadata + SHA-256 pins for owner-approved Platform / Brain / Skills
contracts consumed by OpenClaw Prime on branch
`issue/ocp-openclawdevelopmentplan01`.

**Rule:** OpenClaw copies hashes and package metadata only. Do not vendor
`node_modules`, secrets, live endpoints, or full upstream trees.

| Domain       | Pin file            | Source HEAD                                |
| ------------ | ------------------- | ------------------------------------------ |
| LiNKplatform | `platform/PIN.json` | `95120dc4549f0bc79627668acbc5b21afd699e29` |
| LiNKbrain    | `brain/PIN.json`    | `86161d3ab78679ffc3b96680cf04e03c2d5c8fd2` |
| LiNKskills   | `skills/PIN.json`   | `fd1b6364b8450ec292773f00cc2dc6de19143a70` |

OpenClaw plan SHA-256 (frozen):
`17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`

See also:

- `../PHASE-1-CONTRACT-CONSUMPTION.md`
- `../BRAIN-TOOL-NAME-DECISION-PACKET.md`
- `../FIXTURE-OWNER-SIGNOFF.md`
