# OpenClaw Prime and Lisa current status

Updated: 2026-08-11, Asia/Taipei.

- Current fork source: `f24404c314d743913efd4d3c31e4e343f5141149`.
- `main`, `staging`, and `development` contain the same source tree.
- The VPS OpenClaw checkout is clean at the current fork main.
- Lisa service, health, and readiness pass with zero restart churn at the final
  release audit.
- Stable personality/source-bundle files are reconciled; mutable memory and
  private runtime state remain VPS-owned and are not mirrored into Git.
- Native LiNKskills and LiNKbrain read/write bridges are active.
- Brain, Brain MCP, Skills, and Lisa endpoints are healthy.
- The Librarian controlled proof promoted one Lisa-derived operational item to
  canonical knowledge with a version record.
- The Librarian timer remains disabled.
- There are no active Lisa-direct, stage-canary, or server-knowledge feature
  branches. Their stale session records are retained under `completed/`.
- Eric and David are intentionally out of scope.

Open items are acceptance and operating-policy decisions, not hidden source
branches: complete Lisa's remaining Principal tests and decide when recurring
Librarian scheduling may be enabled.
