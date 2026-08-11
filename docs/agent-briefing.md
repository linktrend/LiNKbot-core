# OpenClaw Prime and Lisa briefing

Updated: 2026-08-11, Asia/Taipei.

## Current source of truth

1. The running VPS Lisa/OpenClaw release and its health/readiness receipts.
2. Current fork `main`, plus the matching `staging` and `development` source
   tree.
3. Lisa's source-bundle manifest and live comparison receipt for stable
   personality files.
4. Current Brain, Skills, and Platform release receipts.
5. This briefing and `docs/current-status.md`.

Historical session records, handoffs, pre-VPS plans, and candidate branches do
not override the current release. The older pre-VPS briefing is retained under
`docs/archive/coordination/`.

## Proven baseline

- Fork main `f24404c314d743913efd4d3c31e4e343f5141149` is the clean VPS
  OpenClaw release.
- Lisa health and readiness pass; her stable personality files were preserved
  across cutover.
- Lisa reaches LiNKskills, LiNKbrain Gateway, and LiNKbrain MCP through the
  governed native bridges and server-held credentials.
- Brain and Platform are deployed from their current main releases.
- A controlled Lisa capture completed the full Librarian path into canonical
  knowledge and a knowledge-version record.

## Boundaries

- Do not copy mutable Lisa memory, identity, credentials, or token stores into
  another agent.
- Eric and David remain out of scope until Lisa acceptance testing is complete
  and a separate design is authorized.
- The Librarian timer remains disabled pending an explicit operations decision.
- Never print secrets, message content, or private memory in handoffs.

## Agent workflow

Read `AGENTS.md`, this briefing, `docs/agent-coordination.md`,
`docs/current-status.md`, and any genuinely active session records before
editing. Use a task branch, preserve unrelated work, and record material work
in a completed session or handoff.
