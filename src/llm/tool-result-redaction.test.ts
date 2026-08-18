import { extractToolResultText } from "@openclaw/ai/internal/shared";
// Proves the OpenClaw redaction contract applies to provider tool-result
// replay text once the stream facade installs the AI transport host ports.
import { describe, expect, it } from "vitest";
// Importing the facade installs the OpenClaw AI transport host ports.
import "./stream.js";

describe("tool result redaction via AI transport host", () => {
  it("redacts structured secret fields with the shared tool-payload contract", () => {
    const text = extractToolResultText([
      {
        type: "json",
        apiToken: `ltfx.n.c54fa85220cd64383ff7.v1`,
        privateKey: "private-key-value-1234567890",
        private_key: `ltfx.n.ecd4895f6ca7f1373fa6.v1`,
        key: `ltfx.n.dd882b501c4c4b3c6e04.v1`,
        keyMaterial: "key-material-value-1234567890",
        bearerToken: `ltfx.n.5dd8642feb481bbea1d0.v1`,
        bearer_token: `ltfx.n.f97ed16dcb39372eafc0.v1`,
        jwt: "jwt-value-1234567890",
        session: "session-value-1234567890",
        code: "code-value-1234567890",
        error: { code: "ERR_VISIBLE_PROVIDER_CODE" },
        oauth: { code: "OPAQUEPROVIDERCODE1234567890" },
        providerError: { error: { code: "ERR_VISIBLE_PROVIDER_NESTED_CODE" } },
        signature: "signature-value-1234567890",
        cookie: "cookie-value-1234567890",
        "set-cookie": "set-cookie-value-1234567890",
        paymentCredential: "payment-credential-value-1234567890",
        cardNumber: 4111111111111111,
        cvc: 123,
        text: '{"apiToken":`ltfx.n.b06489258ddc7302d555.v1`,"code":"oauth-code-in-text-1234567890","safe":"ok"}',
        credential: "live-credential-value",
        appSecret: `ltfx.n.6ef4717464e2b77abdcf.v1`,
        rawSecret: `ltfx.n.071d0540891438da3f82.v1`,
        nested: {
          token: `ltfx.n.669064d7d5ccb176f530.v1`,
          visible: "safe-value",
        },
      },
    ]);

    expect(text).toContain('"credential":"');
    expect(text).toContain('"appSecret":"');
    expect(text).toContain('"rawSecret":"');
    expect(text).toContain('"token":"');
    expect(text).toContain('"visible":"safe-value"');
    expect(text).toContain('"code":"ERR_VISIBLE_PROVIDER_CODE"');
    expect(text).toContain('"code":"ERR_VISIBLE_PROVIDER_NESTED_CODE"');
    expect(text).not.toContain("api-token-value-1234567890");
    expect(text).not.toContain("private-key-value-1234567890");
    expect(text).not.toContain("private-key-snake-1234567890");
    expect(text).not.toContain("generic-key-value-1234567890");
    expect(text).not.toContain("key-material-value-1234567890");
    expect(text).not.toContain("bearer-token-value-1234567890");
    expect(text).not.toContain("bearer-token-snake-value-1234567890");
    expect(text).not.toContain("jwt-value-1234567890");
    expect(text).not.toContain("session-value-1234567890");
    expect(text).not.toContain("code-value-1234567890");
    expect(text).not.toContain("OPAQUEPROVIDERCODE1234567890");
    expect(text).not.toContain("signature-value-1234567890");
    expect(text).not.toContain("cookie-value-1234567890");
    expect(text).not.toContain("set-cookie-value-1234567890");
    expect(text).not.toContain("payment-credential-value-1234567890");
    expect(text).not.toContain("4111111111111111");
    expect(text).not.toContain('"cvc":123');
    expect(text).not.toContain("api-token-in-text-1234567890");
    expect(text).not.toContain("oauth-code-in-text-1234567890");
    expect(text).toContain('\\"safe\\":\\"ok\\"');
    expect(text).not.toContain("live-credential-value");
    expect(text).not.toContain("app-secret-value");
    expect(text).not.toContain("raw-secret-value");
    expect(text).not.toContain("nested-token-value");
  });
});
