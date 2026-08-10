---
summary: "Private Skills adapter for Lisa: structured telemetry outbox against Skills Gateway contracts. Default-disabled; never registers conversation hooks; fake-only until activation gates."
read_when:
  - You are installing, configuring, or auditing the linkskills plugin
title: "Linkskills plugin"
---

# Linkskills plugin

Private Skills adapter for Lisa: structured telemetry outbox against Skills Gateway contracts. Default-disabled; never registers conversation hooks; fake-only until activation gates.

## Distribution

- Package: `@openclaw/linkskills`
- Install route: included in OpenClaw

## Surface

plugin

## Native OAuth bridge

`linkskills_use` is an optional tool for native OAuth model runtimes. It keeps
the managed PACI credential in the Gateway process and exposes only the frozen
LiNKskills discovery and governed-operation allowlists. Discovery requires
`mcpDiscoveryRead`; governed operations require `governedExecution`; the tool
also requires explicit allowlisting before use.
