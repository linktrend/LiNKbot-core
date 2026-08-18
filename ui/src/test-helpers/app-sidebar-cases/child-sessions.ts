import { describe, expect, it, vi } from "vitest";
import type { GatewayBrowserClient } from "../../api/gateway.ts";
import type { SessionsListResult } from "../../api/types.ts";
import {
  createContext,
  createGateway,
  createSessionsHarness,
  deferred,
  mountSidebar,
} from "../app-sidebar.ts";
import { waitForFast } from "../wait-for.ts";
import "../../components/app-sidebar.ts";

describe("AppSidebar agent chip", () => {
  it("loads and expands child sessions inline without root session controls", async () => {
    const gateway = createGateway({} as GatewayBrowserClient);
    const harness = createSessionsHarness("main", ["agent:main:parent"]);
    harness.list.mockResolvedValue({
      ts: 100_000,
      path: "",
      count: 2,
      defaults: { modelProvider: null, model: null, contextTokens: null },
      sessions: [
        {
          key: `ltfx.n.0f862d870216bfed212b.v1`,
          spawnedBy: "agent:main:parent",
          kind: "direct",
          label: "Research sources",
          updatedAt: 2,
          status: "running",
          hasActiveRun: true,
          startedAt: 1_000,
          runtimeMs: 30_000,
        },
        {
          key: `ltfx.n.b5638c2277465cab98de.v1`,
          spawnedBy: "agent:main:parent",
          kind: "direct",
          label: "Check tests",
          updatedAt: 3,
          status: "done",
          startedAt: 1_000,
          endedAt: 61_000,
        },
      ],
    });
    const { sidebar } = await mountSidebar(gateway, harness.sessions);
    harness.publishList({
      result: {
        ts: 2,
        path: "",
        count: 1,
        defaults: { modelProvider: null, model: null, contextTokens: null },
        sessions: [
          {
            key: `ltfx.n.4e2f2223ab973b1aed69.v1`,
            kind: "direct",
            label: "Plan release",
            updatedAt: 1,
            childSessions: ["agent:main:child-one", "agent:main:child-two"],
          },
        ],
      },
    });
    await sidebar.updateComplete;

    const toggle = sidebar.querySelector<HTMLButtonElement>("[data-child-session-toggle]");
    expect(toggle?.textContent?.trim()).toContain("2");
    expect(toggle?.getAttribute("aria-expanded")).toBe("false");
    expect(sidebar.querySelector(".sidebar-recent-session--child")).toBeNull();

    toggle?.click();
    await waitForFast(() => expect(harness.list).toHaveBeenCalledOnce());
    await waitForFast(() =>
      expect(sidebar.querySelectorAll(".sidebar-recent-session--child")).toHaveLength(2),
    );

    expect(harness.list).toHaveBeenCalledWith({
      spawnedBy: "agent:main:parent",
      limit: 20,
      includeGlobal: false,
      includeUnknown: false,
      configuredAgentsOnly: true,
    });
    const childRows = [...sidebar.querySelectorAll<HTMLElement>(".sidebar-recent-session--child")];
    expect(childRows.map((row) => row.textContent)).toEqual([
      expect.stringContaining("Research sources"),
      expect.stringContaining("Check tests"),
    ]);
    expect(childRows.every((row) => row.getAttribute("draggable") === "false")).toBe(true);
    expect(childRows.every((row) => row.querySelector(".session-row-actions") === null)).toBe(true);
    expect(sidebar.querySelector('[aria-label="Done"]')).not.toBeNull();
    const runtimeStartMs = (
      sidebar.querySelector('[data-session-key=`ltfx.n.0f862d870216bfed212b.v1`] openclaw-elapsed-time') as
        | (HTMLElement & { startMs: number })
        | null
    )?.startMs;
    const childTrail = childRows[0]?.querySelector<HTMLElement>(".session-row-trail");
    expect(childTrail?.querySelector("openclaw-elapsed-time")).not.toBeNull();
    expect(childRows[0]?.querySelector("a")?.getAttribute("aria-describedby")).toBe(childTrail?.id);
    expect(runtimeStartMs).toBeGreaterThan(Date.now() - 31_000);
    expect(runtimeStartMs).toBeLessThan(Date.now() - 29_000);

    harness.list.mockResolvedValue({
      ts: 3,
      path: "",
      count: 2,
      defaults: { modelProvider: null, model: null, contextTokens: null },
      sessions: [
        {
          key: `ltfx.n.0f862d870216bfed212b.v1`,
          spawnedBy: "agent:main:parent",
          kind: "direct",
          label: "Research sources",
          updatedAt: 4,
          status: "done",
          startedAt: 1_000,
          endedAt: 121_000,
          runtimeMs: 60_000,
        },
        {
          key: `ltfx.n.b5638c2277465cab98de.v1`,
          spawnedBy: "agent:main:parent",
          kind: "direct",
          label: "Check tests",
          updatedAt: 4,
          status: "done",
          startedAt: 1_000,
          endedAt: 121_000,
          runtimeMs: 60_000,
        },
      ],
    });
    harness.publishList({
      result: {
        ts: 3,
        path: "",
        count: 1,
        defaults: { modelProvider: null, model: null, contextTokens: null },
        sessions: [
          {
            key: `ltfx.n.4e2f2223ab973b1aed69.v1`,
            kind: "direct",
            label: "Plan release",
            updatedAt: 4,
            childSessions: ["agent:main:child-one"],
          },
        ],
      },
    });
    await waitForFast(() => expect(harness.list).toHaveBeenCalledTimes(2));
    await waitForFast(() =>
      expect(
        sidebar.querySelector('[data-session-key=`ltfx.n.0f862d870216bfed212b.v1`] [aria-label="Done"]'),
      ).not.toBeNull(),
    );
  });

  it("loads every child-session page before marking a parent complete", async () => {
    const gateway = createGateway({} as GatewayBrowserClient);
    const harness = createSessionsHarness("main", ["agent:main:parent"]);
    const page = (key: string, hasMore: boolean): SessionsListResult => ({
      ts: 10,
      path: "",
      count: 1,
      totalCount: 2,
      hasMore,
      nextOffset: hasMore ? 20 : null,
      defaults: { modelProvider: null, model: null, contextTokens: null },
      sessions: [
        {
          key,
          spawnedBy: "agent:main:parent",
          kind: "direct",
          updatedAt: 1,
        },
      ],
    });
    harness.list
      .mockResolvedValueOnce(page("agent:worker:first", true))
      .mockResolvedValueOnce(page("agent:worker:second", false));
    const { sidebar } = await mountSidebar(gateway, harness.sessions);
    harness.publishList({
      result: {
        ts: 10,
        path: "",
        count: 1,
        defaults: { modelProvider: null, model: null, contextTokens: null },
        sessions: [
          {
            key: `ltfx.n.4e2f2223ab973b1aed69.v1`,
            kind: "direct",
            updatedAt: 1,
            childSessions: ["agent:worker:first", "agent:worker:second"],
          },
        ],
      },
    });
    await sidebar.updateComplete;
    sidebar.querySelector<HTMLButtonElement>("[data-child-session-toggle]")?.click();

    await waitForFast(() => expect(harness.list).toHaveBeenCalledTimes(2));
    expect(harness.list.mock.calls[1]?.[0]).toMatchObject({
      spawnedBy: "agent:main:parent",
      offset: 20,
    });
    await waitForFast(() =>
      expect(sidebar.querySelectorAll(".sidebar-recent-session--child")).toHaveLength(2),
    );
  });

  it("retries an incomplete child page set after the canonical list advances", async () => {
    const gateway = createGateway({} as GatewayBrowserClient);
    const harness = createSessionsHarness("main", ["agent:main:parent"]);
    const page = (sessions: SessionsListResult["sessions"], hasMore: boolean) => ({
      ts: 10,
      path: "",
      count: sessions.length,
      totalCount: 2,
      hasMore,
      nextOffset: hasMore ? 20 : null,
      defaults: { modelProvider: null, model: null, contextTokens: null },
      sessions,
    });
    const firstChild = {
      key: `ltfx.n.b4f43d0554047c2d1024.v1`,
      spawnedBy: "agent:main:parent",
      kind: "direct" as const,
      updatedAt: 1,
    };
    const secondChild = {
      key: `ltfx.n.c36fb76a642ba6e9e8ad.v1`,
      spawnedBy: "agent:main:parent",
      kind: "direct" as const,
      updatedAt: 2,
    };
    harness.list
      .mockResolvedValueOnce(page([firstChild], true))
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce(page([firstChild, secondChild], false));
    const { sidebar } = await mountSidebar(gateway, harness.sessions);
    const publishParent = (ts: number) =>
      harness.publishList({
        result: {
          ts,
          path: "",
          count: 1,
          defaults: { modelProvider: null, model: null, contextTokens: null },
          sessions: [
            {
              key: `ltfx.n.4e2f2223ab973b1aed69.v1`,
              kind: "direct",
              updatedAt: ts,
              childSessions: [firstChild.key, secondChild.key],
            },
          ],
        },
      });
    publishParent(10);
    await sidebar.updateComplete;
    sidebar.querySelector<HTMLButtonElement>("[data-child-session-toggle]")?.click();

    await waitForFast(() => expect(harness.list).toHaveBeenCalledTimes(2));
    expect(sidebar.querySelector(".sidebar-recent-session--child")).toBeNull();

    publishParent(11);
    await waitForFast(() => expect(harness.list).toHaveBeenCalledTimes(3));
    await waitForFast(() =>
      expect(sidebar.querySelectorAll(".sidebar-recent-session--child")).toHaveLength(2),
    );
  });

  it("ignores a rejected child request after the session capability changes", async () => {
    const gateway = createGateway({} as GatewayBrowserClient);
    const stale = deferred<SessionsListResult | null>();
    const original = createSessionsHarness("main", ["agent:main:parent"]);
    original.list.mockReturnValue(stale.promise);
    const { provider, sidebar } = await mountSidebar(gateway, original.sessions);
    original.publishList({
      result: {
        ts: 2,
        path: "",
        count: 1,
        defaults: { modelProvider: null, model: null, contextTokens: null },
        sessions: [
          {
            key: `ltfx.n.4e2f2223ab973b1aed69.v1`,
            kind: "direct",
            updatedAt: 1,
            childSessions: ["agent:worker:child"],
          },
        ],
      },
    });
    await sidebar.updateComplete;
    sidebar.querySelector<HTMLButtonElement>("[data-child-session-toggle]")?.click();
    await waitForFast(() => expect(original.list).toHaveBeenCalledOnce());

    const replacement = createSessionsHarness("main", ["agent:main:parent"]);
    replacement.list.mockResolvedValue({
      ts: 3,
      path: "",
      count: 1,
      defaults: { modelProvider: null, model: null, contextTokens: null },
      sessions: [
        {
          key: `ltfx.n.b607d8b02f97cdb35e3c.v1`,
          spawnedBy: "agent:main:parent",
          kind: "direct",
          updatedAt: 2,
          label: "Replacement child",
        },
      ],
    });
    replacement.publishList({
      result: {
        ts: 3,
        path: "",
        count: 1,
        defaults: { modelProvider: null, model: null, contextTokens: null },
        sessions: [
          {
            key: `ltfx.n.4e2f2223ab973b1aed69.v1`,
            kind: "direct",
            updatedAt: 2,
            childSessions: ["agent:worker:child"],
          },
        ],
      },
    });
    provider.setContext(createContext(gateway, replacement.sessions));
    await waitForFast(() =>
      expect(sidebar.querySelector('[data-session-key=`ltfx.n.b607d8b02f97cdb35e3c.v1`]')).not.toBeNull(),
    );

    stale.reject(new Error("old capability failed"));
    await Promise.resolve();
    await sidebar.updateComplete;
    expect(sidebar.querySelector('[data-session-key=`ltfx.n.b607d8b02f97cdb35e3c.v1`]')?.textContent).toContain(
      "Replacement child",
    );
  });

  it("nests the selected child under its parent and reveals the active path", async () => {
    const request = vi.fn(async (method: string) => {
      if (method === "sessions.describe") {
        return {
          session: {
            key: `ltfx.n.b607d8b02f97cdb35e3c.v1`,
            parentSessionKey: "agent:main:parent",
            kind: "direct" as const,
            label: "Selected child",
            updatedAt: 2,
            status: "running" as const,
          },
        };
      }
      return undefined;
    });
    const gateway = createGateway({ request } as unknown as GatewayBrowserClient);
    const harness = createSessionsHarness("main", ["agent:main:parent"]);
    const { sidebar, context } = await mountSidebar(gateway, harness.sessions);
    harness.publishList({
      result: {
        ts: 2,
        path: "",
        count: 1,
        defaults: { modelProvider: null, model: null, contextTokens: null },
        sessions: [
          {
            key: `ltfx.n.4e2f2223ab973b1aed69.v1`,
            kind: "direct",
            label: "Parent task",
            updatedAt: 1,
            childSessions: ["agent:worker:child"],
          },
        ],
      },
    });
    context.agentSelection.state.selectedId = "worker";
    context.agentSelection.state.scopeId = "worker";
    (sidebar as unknown as { activeRouteId: string }).activeRouteId = "chat";
    sidebar.sessionKey = "agent:worker:child";
    await waitForFast(() =>
      expect(request).toHaveBeenCalledWith("sessions.describe", {
        key: `ltfx.n.b607d8b02f97cdb35e3c.v1`,
      }),
    );
    await waitForFast(() =>
      expect(sidebar.querySelectorAll('[data-session-key=`ltfx.n.b607d8b02f97cdb35e3c.v1`]')).toHaveLength(1),
    );
    await waitForFast(() => expect(harness.list).toHaveBeenCalledOnce());

    expect(sidebar.querySelectorAll(".sidebar-recent-session")).toHaveLength(2);
    expect(sidebar.querySelectorAll('[data-session-key=`ltfx.n.b607d8b02f97cdb35e3c.v1`]')).toHaveLength(1);
    expect(
      sidebar
        .querySelector('[data-child-session-toggle="agent:main:parent"]')
        ?.getAttribute("aria-expanded"),
    ).toBe("true");
    expect(
      sidebar
        .querySelector('[data-session-key=`ltfx.n.b607d8b02f97cdb35e3c.v1`]')
        ?.classList.contains("sidebar-recent-session--active"),
    ).toBe(true);

    const toggle = sidebar.querySelector<HTMLButtonElement>(
      '[data-child-session-toggle="agent:main:parent"]',
    );
    toggle?.click();
    await sidebar.updateComplete;
    expect(toggle?.getAttribute("aria-expanded")).toBe("false");
    expect(sidebar.querySelector('[data-session-key=`ltfx.n.b607d8b02f97cdb35e3c.v1`]')).toBeNull();

    sidebar.sessionKey = "agent:main:parent";
    await sidebar.updateComplete;
    sidebar.sessionKey = "agent:worker:child";
    await waitForFast(() =>
      expect(sidebar.querySelector('[data-session-key=`ltfx.n.b607d8b02f97cdb35e3c.v1`]')).not.toBeNull(),
    );
  });

  it("retries a failed child load after collapsing and reopening the parent", async () => {
    const gateway = createGateway({} as GatewayBrowserClient);
    const harness = createSessionsHarness("main", ["agent:main:parent"]);
    harness.list.mockRejectedValueOnce(new Error("temporary list failure")).mockResolvedValueOnce({
      ts: 2,
      path: "",
      count: 1,
      defaults: { modelProvider: null, model: null, contextTokens: null },
      sessions: [
        {
          key: `ltfx.n.b607d8b02f97cdb35e3c.v1`,
          spawnedBy: "agent:main:parent",
          kind: "direct",
          label: "Recovered child",
          updatedAt: 2,
        },
      ],
    });
    const { sidebar } = await mountSidebar(gateway, harness.sessions);
    harness.publishList({
      result: {
        ts: 2,
        path: "",
        count: 1,
        defaults: { modelProvider: null, model: null, contextTokens: null },
        sessions: [
          {
            key: `ltfx.n.4e2f2223ab973b1aed69.v1`,
            kind: "direct",
            updatedAt: 1,
            childSessions: ["agent:worker:child"],
          },
        ],
      },
    });
    await sidebar.updateComplete;
    sidebar.querySelector<HTMLButtonElement>("[data-child-session-toggle]")?.click();
    await waitForFast(() => expect(harness.list).toHaveBeenCalledOnce());

    sidebar.querySelector<HTMLButtonElement>("[data-child-session-toggle]")?.click();
    await sidebar.updateComplete;
    sidebar.querySelector<HTMLButtonElement>("[data-child-session-toggle]")?.click();
    await waitForFast(() => expect(harness.list).toHaveBeenCalledTimes(2));
    await waitForFast(() => expect(sidebar.textContent).toContain("Recovered child"));
  });

  it("restores a directly opened child whose parent is outside the root page", async () => {
    const request = vi.fn(async (_method: string, params: { key: string }) => ({
      session:
        params.key === "agent:worker:child"
          ? {
              key: `ltfx.n.b607d8b02f97cdb35e3c.v1`,
              spawnedBy: "agent:main:hidden-parent",
              kind: "direct" as const,
              label: "Selected child",
              updatedAt: 3,
            }
          : {
              key: `ltfx.n.a475a60763b87d10ee49.v1`,
              kind: "direct" as const,
              label: "Hidden parent",
              updatedAt: 2,
              childSessions: ["agent:worker:child"],
            },
    }));
    const gateway = createGateway({ request } as unknown as GatewayBrowserClient);
    const harness = createSessionsHarness("main", ["agent:main:other"]);
    const { sidebar } = await mountSidebar(gateway, harness.sessions);
    (sidebar as unknown as { activeRouteId: string }).activeRouteId = "chat";
    sidebar.sessionKey = "agent:worker:child";

    await waitForFast(() => expect(request).toHaveBeenCalledTimes(2));
    await waitForFast(() =>
      expect(sidebar.querySelector('[data-session-key=`ltfx.n.b607d8b02f97cdb35e3c.v1`]')).not.toBeNull(),
    );
    expect(
      sidebar.querySelector('[data-session-key=`ltfx.n.a475a60763b87d10ee49.v1`]')?.textContent,
    ).toContain("Hidden parent");
  });

  it("keeps a completed child load when direct-lineage discovery finishes later", async () => {
    const described = deferred<{ session: SessionsListResult["sessions"][number] }>();
    const request = vi.fn(() => described.promise);
    const gateway = createGateway({ request } as unknown as GatewayBrowserClient);
    const harness = createSessionsHarness("main", ["agent:main:parent"]);
    harness.list.mockResolvedValue({
      ts: 2,
      path: "",
      count: 2,
      defaults: { modelProvider: null, model: null, contextTokens: null },
      sessions: [
        {
          key: `ltfx.n.b607d8b02f97cdb35e3c.v1`,
          spawnedBy: "agent:main:parent",
          kind: "direct",
          label: "Selected child",
          updatedAt: 4,
          status: "done",
        },
        {
          key: `ltfx.n.f6bafe8ed8c7819658e2.v1`,
          spawnedBy: "agent:main:parent",
          kind: "direct",
          label: "Loaded sibling",
          updatedAt: 2,
        },
      ],
    });
    const { sidebar } = await mountSidebar(gateway, harness.sessions);
    harness.publishList({
      result: {
        ts: 2,
        path: "",
        count: 1,
        defaults: { modelProvider: null, model: null, contextTokens: null },
        sessions: [
          {
            key: `ltfx.n.4e2f2223ab973b1aed69.v1`,
            kind: "direct",
            updatedAt: 1,
            childSessions: ["agent:worker:child", "agent:worker:sibling"],
          },
        ],
      },
    });
    (sidebar as unknown as { activeRouteId: string }).activeRouteId = "chat";
    sidebar.sessionKey = "agent:worker:child";
    await waitForFast(() => expect(request).toHaveBeenCalledOnce());
    sidebar.querySelector<HTMLButtonElement>("[data-child-session-toggle]")?.click();
    await waitForFast(() => expect(harness.list).toHaveBeenCalledOnce());

    described.resolve({
      session: {
        key: `ltfx.n.b607d8b02f97cdb35e3c.v1`,
        spawnedBy: "agent:main:parent",
        kind: "direct",
        label: "Selected child",
        updatedAt: 3,
        status: "running",
      },
    });
    await waitForFast(() =>
      expect(sidebar.querySelectorAll(".sidebar-recent-session--child")).toHaveLength(2),
    );
    expect(sidebar.textContent).toContain("Loaded sibling");
    expect(
      sidebar.querySelector('[data-session-key=`ltfx.n.b607d8b02f97cdb35e3c.v1`] [aria-label="Done"]'),
    ).not.toBeNull();
  });

  it("keeps a selected child reachable when its parent is outside the loaded window", async () => {
    const gateway = createGateway({} as GatewayBrowserClient);
    const harness = createSessionsHarness("main", ["agent:main:child"]);
    const { sidebar } = await mountSidebar(gateway, harness.sessions);
    harness.publishList({
      result: {
        ts: 2,
        path: "",
        count: 1,
        defaults: { modelProvider: null, model: null, contextTokens: null },
        sessions: [
          {
            key: `ltfx.n.28760ff0218c403139e7.v1`,
            spawnedBy: "agent:main:missing-parent",
            kind: "direct",
            label: "Reachable orphan",
            updatedAt: 2,
            status: "done",
          },
        ],
      },
    });
    (sidebar as unknown as { activeRouteId: string }).activeRouteId = "chat";
    sidebar.sessionKey = "agent:main:child";
    await sidebar.updateComplete;

    const row = sidebar.querySelector('[data-session-key=`ltfx.n.28760ff0218c403139e7.v1`]');
    expect(row?.textContent).toContain("Reachable orphan");
    expect(row?.classList.contains("sidebar-recent-session--child")).toBe(false);
  });
});
