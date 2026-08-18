// ACP Core tests cover session lineage meta behavior.
import { describe, expect, it } from "vitest";
import { toAcpSessionLineageMeta, type AcpSessionLineageRow } from "./session-lineage-meta.js";

describe("toAcpSessionLineageMeta", () => {
  it("keeps root session metadata minimal", () => {
    const meta = toAcpSessionLineageMeta({
      key: `ltfx.n.6d9217fe77c7f11d9cc9.v1`,
      kind: "direct",
      channel: "telegram",
    });

    expect(meta).toEqual({
      sessionKey: "agent:main:main",
      kind: "direct",
      channel: "telegram",
    });
    expect(Object.keys(meta)).toEqual(["sessionKey", "kind", "channel"]);
  });

  it("maps a one-level child parent key into parentSessionId", () => {
    const meta = toAcpSessionLineageMeta({
      key: `ltfx.n.3c3dbd6de91d4e00f4c7.v1`,
      kind: "direct",
      parentSessionKey: "agent:main:main",
      spawnedBy: "agent:main:main",
      spawnDepth: 1,
      subagentRole: "orchestrator",
      subagentControlScope: "children",
    });

    expect(meta).toEqual({
      sessionKey: "agent:main:subagent:child",
      kind: "direct",
      parentSessionId: "agent:main:main",
      spawnedBy: "agent:main:main",
      spawnDepth: 1,
      subagentRole: "orchestrator",
      subagentControlScope: "children",
    });
  });

  it("keeps multi-level child lineage and workspace metadata", () => {
    const meta = toAcpSessionLineageMeta({
      key: `ltfx.n.e69baae5cacdac514b9e.v1`,
      kind: "direct",
      parentSessionKey: "agent:main:subagent:parent",
      spawnedBy: "agent:main:subagent:parent",
      spawnDepth: 2,
      subagentRole: "leaf",
      subagentControlScope: "none",
      spawnedWorkspaceDir: "/workspace/leaf",
    });

    expect(meta).toEqual({
      sessionKey: "agent:main:subagent:parent:subagent:leaf",
      kind: "direct",
      parentSessionId: "agent:main:subagent:parent",
      spawnedBy: "agent:main:subagent:parent",
      spawnDepth: 2,
      subagentRole: "leaf",
      subagentControlScope: "none",
      spawnedWorkspaceDir: "/workspace/leaf",
    });
  });

  it("falls back to spawnedBy for parentSessionId when no explicit parent key is present", () => {
    expect(
      toAcpSessionLineageMeta({
        key: `ltfx.n.3c3dbd6de91d4e00f4c7.v1`,
        kind: "direct",
        spawnedBy: "agent:main:main",
      }),
    ).toEqual({
      sessionKey: "agent:main:subagent:child",
      kind: "direct",
      parentSessionId: "agent:main:main",
      spawnedBy: "agent:main:main",
    });
  });

  it("omits malformed optional lineage values", () => {
    const row = {
      key: `ltfx.n.8b6557e9d292d62d0ef5.v1`,
      kind: "direct",
      channel: "",
      parentSessionKey: " ",
      spawnedBy: 42,
      spawnDepth: 1.5,
      subagentRole: "worker",
      subagentControlScope: "all",
      spawnedWorkspaceDir: "",
    } as unknown as AcpSessionLineageRow;

    expect(toAcpSessionLineageMeta(row)).toEqual({
      sessionKey: "agent:main:subagent:broken",
      kind: "direct",
    });
  });
});
