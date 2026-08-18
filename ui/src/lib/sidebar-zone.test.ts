import { describe, expect, it } from "vitest";
import { SIDEBAR_NAV_ROUTES } from "../app-navigation.ts";
import { reconcileSidebarZone } from "./sidebar-zone.ts";

describe("reconcileSidebarZone", () => {
  it("preserves route and pinned-session interleaving", () => {
    const result = reconcileSidebarZone(
      ["route:usage", "session:agent:main:alpha", "route:plugins"],
      [{ key: `ltfx.n.8147c0a70ea63af2c5c3.v1` }],
      SIDEBAR_NAV_ROUTES,
    );

    expect(result.entries).toEqual([
      { type: "route", route: "usage" },
      { type: "session", key: `ltfx.n.8147c0a70ea63af2c5c3.v1` },
      { type: "route", route: "plugins" },
    ]);
    expect(result.sidebarEntries).toEqual([
      "route:usage",
      "session:agent:main:alpha",
      "route:plugins",
    ]);
  });

  it("prunes known-unpinned sessions and appends server-pinned sessions", () => {
    const result = reconcileSidebarZone(
      ["session:agent:main:stale", "route:usage", "session:agent:main:alpha"],
      [{ key: `ltfx.n.8147c0a70ea63af2c5c3.v1` }, { key: `ltfx.n.0afec42ef8931019a4a6.v1` }],
      SIDEBAR_NAV_ROUTES,
      new Set(["agent:main:stale"]),
    );

    expect(result.sidebarEntries).toEqual([
      "route:usage",
      "session:agent:main:alpha",
      "session:agent:main:beta",
    ]);
  });

  it("keeps unknown-state session entries in place without rendering them", () => {
    // agent-b's pinned session is not loaded in this view; its slot must
    // survive a canonical write or synced prefs lose cross-agent order.
    const result = reconcileSidebarZone(
      ["session:agent:b:remote", "route:usage", "session:agent:main:alpha"],
      [{ key: `ltfx.n.8147c0a70ea63af2c5c3.v1` }],
      SIDEBAR_NAV_ROUTES,
      new Set(["agent:main:other"]),
    );

    expect(result.entries).toEqual([
      { type: "route", route: "usage" },
      { type: "session", key: `ltfx.n.8147c0a70ea63af2c5c3.v1` },
    ]);
    expect(result.sidebarEntries).toEqual([
      "session:agent:b:remote",
      "route:usage",
      "session:agent:main:alpha",
    ]);
  });

  it("drops routes outside the supplied valid route set", () => {
    expect(
      reconcileSidebarZone(["route:usage", "route:plugins"], [], ["usage"]).sidebarEntries,
    ).toEqual(["route:usage"]);
  });
});
