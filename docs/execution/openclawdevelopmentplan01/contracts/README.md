# Contract consumption pins (OpenClaw consumer)

Sanitized metadata + SHA-256 pins for owner-approved Platform / Brain / Skills
contracts consumed by OpenClaw Prime on branch
`issue/ocp-openclawdevelopmentplan01`.

**Correction wave 2b (2026-07-28 09:52 Asia/Taipei):** repinned to latest
corrected sibling HEADs after wave-2 advances. Stale wave-2 and pre-correction
heads removed from active pins.

**Rule:** OpenClaw copies hashes and package metadata only. Do not vendor
`node_modules`, secrets, live endpoints, or full upstream trees.

| Domain       | Pin file            | Source HEAD                                |
| ------------ | ------------------- | ------------------------------------------ |
| LiNKplatform | `platform/PIN.json` | `e845ac17dffac52a501603ad2fafd1b53fef195d` |
| LiNKbrain    | `brain/PIN.json`    | `a3cff6e0f04ac968c32beacb7bdb1b81a4d77d3f` |
| LiNKskills   | `skills/PIN.json`   | `f16103f23a716d0edeb08a1e82e38608ebd563ea` |

## Platform auth-claims (authoritative)

| Field               | Value                                                              |
| ------------------- | ------------------------------------------------------------------ |
| Contract            | `platform.auth-claims/1.0.0`                                       |
| Schema file SHA-256 | `b0397cdf34e76ab0986c6d223ecb6c3c66d619ea59557f78cd45c0c015ff50fb` |
| contentHash         | `6bf49618d846662976886f57d5d468f73a08ab1a6574968f68833d82429db251` |
| Sanitized copy      | `platform/auth-claims-1.0.0/`                                      |

OpenClaw plan SHA-256 (frozen):
`17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`

See also:

- `../PHASE-1-CONTRACT-CONSUMPTION.md`
- `../BRAIN-TOOL-NAME-DECISION-PACKET.md`
- `../FIXTURE-OWNER-SIGNOFF.md`
- `../COUNTERSIGN-REQUEST.md`
