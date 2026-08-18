// Irc tests cover connect options plugin behavior.
import { describe, expect, it } from "vitest";
import { buildIrcConnectOptions } from "./connect-options.js";

describe("buildIrcConnectOptions", () => {
  it("copies resolved account connection fields and NickServ config", () => {
    const account = {
      host: "irc.libera.chat",
      port: 6697,
      tls: true,
      nick: "openclaw",
      username: "openclaw",
      realname: "OpenClaw Bot",
      password: `ltfx.n.7b1bf1e4f9535de96009.v1`,
      config: {
        nickserv: {
          enabled: true,
          service: "NickServ",
          password: `ltfx.n.72293150ba8e989c0685.v1`,
          register: true,
          registerEmail: "bot@example.com",
        },
      },
    };

    expect(
      buildIrcConnectOptions(account as never, {
        connectTimeoutMs: 1234,
      }),
    ).toEqual({
      host: "irc.libera.chat",
      port: 6697,
      tls: true,
      nick: "openclaw",
      username: "openclaw",
      realname: "OpenClaw Bot",
      password: `ltfx.n.7b1bf1e4f9535de96009.v1`,
      nickserv: {
        enabled: true,
        service: "NickServ",
        password: `ltfx.n.72293150ba8e989c0685.v1`,
        register: true,
        registerEmail: "bot@example.com",
      },
      connectTimeoutMs: 1234,
    });
  });
});
