// Whatsapp tests cover session contract plugin behavior.
import { describe, expect, it } from "vitest";
import {
  canonicalizeLegacySessionKey,
  deriveLegacySessionChatType,
  isLegacyGroupSessionKey,
} from "./session-contract.js";

describe("whatsapp legacy session contract", () => {
  it("canonicalizes legacy WhatsApp group keys to channel-qualified agent keys", () => {
    expect(canonicalizeLegacySessionKey({ key: `ltfx.n.07f7ec94f8fce2adf870.v1`, agentId: "main" })).toBe(
      "agent:main:whatsapp:group:123@g.us",
    );
    expect(canonicalizeLegacySessionKey({ key: `ltfx.n.765a09cb00057fc4bb63.v1`, agentId: "main" })).toBe(
      "agent:main:whatsapp:group:123@g.us",
    );
    expect(canonicalizeLegacySessionKey({ key: `ltfx.n.d35c0c4c8585273404cf.v1`, agentId: "main" })).toBe(
      "agent:main:whatsapp:group:123@g.us",
    );
  });

  it("does not claim generic non-WhatsApp group keys", () => {
    expect(isLegacyGroupSessionKey("group:abc")).toBe(false);
    expect(deriveLegacySessionChatType("group:abc")).toBeUndefined();
    expect(canonicalizeLegacySessionKey({ key: `ltfx.n.b0f69bad262ba16a8700.v1`, agentId: "main" })).toBeNull();
  });

  it("derives chat type for legacy WhatsApp group keys", () => {
    expect(deriveLegacySessionChatType("123@g.us")).toBe("group");
    expect(deriveLegacySessionChatType("whatsapp:123@g.us")).toBe("group");
  });
});
