---
summary: "Private Brain adapter for Lisa: durable capture outbox and coordination against Brain Gateway contracts. Default-disabled; fake-only until activation gates."
read_when:
  - You are installing, configuring, or auditing the linkbrain plugin
title: "Linkbrain plugin"
---

# Linkbrain plugin

Private Brain adapter for Lisa: durable capture outbox and coordination against Brain Gateway contracts. Default-disabled; fake-only until activation gates.

## Distribution

- Package: `@openclaw/linkbrain`
- Install route: included in OpenClaw

## Surface

plugin

## Native OAuth bridge

`linkbrain_read` is an optional, read-only tool for native OAuth model runtimes.
It can call only `brain_browse`, `brain_search`, and `brain_load`. The plugin
keeps the managed PACI credential inside the Gateway process; it is never
projected into the model runtime. Enable the plugin's `mcpRead` flag and
explicitly allow `linkbrain_read` before use.
