# Docs archive — LiNKtrend / OpenClaw Prime

This tree holds **clearly superseded** LiNKtrend-specific materials moved out of active workshop/docs paths during pre-launch hygiene.

The `coordination/` subdirectory contains the superseded pre-VPS briefing. It
is historical only; use `docs/agent-briefing.md` and `docs/current-status.md`
for the current VPS baseline.

## Rules

- Archive only private-fork / Lisa workshop material that is superseded.
- Do **not** reorganize upstream public OpenClaw docs here.
- Do **not** move coordination records (`docs/agent-sessions/**`, `docs/handoffs/**`), freeze packets under `docs/execution/openclawdevelopmentplan01/**`, release evidence under `docs/evidence/**`, or Principal `docs/CURSOR-GROK-*` / frozen implementation-plan authority without a coordinated provenance rewrite.
- Workshop backups under `workshop-backups/` are historical config snapshots, not live runtime.

## 2026-08-02 release-hygiene intake

| Archived path                                                   | Former path                                                          | Reason                                                                                                                                |
| --------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `linkbots-lisa/PHASE1-LINKBRAIN-LINKSKILLS.md`                  | `linkbots/lisa/docs/PHASE1-LINKBRAIN-LINKSKILLS.md`                  | Early "No wiring yet" design; superseded by frozen plan + `extensions/linkbrain` / `extensions/linkskills` + OCP-W10/W20/W30 evidence |
| `linkbots-lisa/LINKBRAIN-AGENT-COORDINATION-HANDOVER-PROMPT.md` | `linkbots/lisa/docs/LINKBRAIN-AGENT-COORDINATION-HANDOVER-PROMPT.md` | One-shot Stage-2 LiNKbrain kickoff; Stage-2 consumer wiring is not live; Stage-1 remains `docs/agent-coordination.md`                 |
| `linkbots-lisa/heartbeat-digest-preview.md`                     | `linkbots/lisa/heartbeat-digest-preview.md`                          | Draft preview mock; live formats live in workshop personality files                                                                   |
| `linkbots-lisa/workshop-backups/openclaw.json.bak-*`            | `linkbots/lisa/Personality files/openclaw.json.bak-*`                | Temporary tracked workshop config snapshots; retained for rollback/diff history, not active SOT                                       |

Session: `cursor-local-mac-mini-release-hygiene-20260802-1313`
