// ClickClack tests cover websocket constructor options.
import { beforeEach, describe, expect, it, vi } from "vitest";

const { webSocketCtorCalls } = vi.hoisted(() => ({
  webSocketCtorCalls: [] as Array<{ url: string; options: unknown }>,
}));

vi.mock("ws", () => ({
  WebSocket: function MockWebSocket(url: string | URL, options?: unknown) {
    webSocketCtorCalls.push({ url: String(url), options });
  },
}));

import { createClickClackClient } from "./http-client.js";

describe("createClickClackClient websocket options", () => {
  beforeEach(() => {
    webSocketCtorCalls.length = 0;
  });

  it("passes a 30-second opening handshake deadline to ws", () => {
    const client = createClickClackClient({
      baseUrl: "https://clickclack.example",
      token: "fake",
    });

    client.websocket("workspace-1", "cursor-1");

    expect(webSocketCtorCalls).toEqual([
      {
        url: `ltfx.n.c10e91c38746a5deabc2.v1`,
        options: {
          headers: { Authorization: "Bearer fake" },
          handshakeTimeout: 30_000,
          maxPayload: 16 * 1024 * 1024,
        },
      },
    ]);
  });
});
