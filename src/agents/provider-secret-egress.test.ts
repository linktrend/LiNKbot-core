import { describe, expect, it } from "vitest";
import { isSecretValueRegisteredForRedaction } from "../logging/secret-redaction-registry.js";
import { looksLikeSecretSentinel, mintSecretSentinel } from "../secrets/sentinel.js";
import {
  attachModelProviderRequestTransport,
  getModelProviderRequestTransport,
} from "./provider-request-config.js";
import {
  protectPreparedProviderRuntimeAuth,
  unwrapModelHeaderSentinelsForProviderEgress,
} from "./provider-secret-egress.js";

describe("protectPreparedProviderRuntimeAuth", () => {
  it("sentinels a real credential returned by the auth exchange and registers it for redaction", () => {
    const runtimeToken = `ltfx.n.24835a009b9c293f35d4.v1`;
    const result = protectPreparedProviderRuntimeAuth({
      provider: "amazon-bedrock-mantle",
      preparedAuth: {
        apiKey: runtimeToken,
        request: {
          auth: { mode: "authorization-bearer", token: runtimeToken },
        },
      },
    });

    expect(result?.apiKey).not.toBe(runtimeToken);
    expect(looksLikeSecretSentinel(result?.apiKey ?? "")).toBe(true);
    const auth = result?.request?.auth;
    const bearerToken = (auth?.mode === "authorization-bearer" ? auth.token : "";)
    expect(looksLikeSecretSentinel(bearerToken)).toBe(true);
    expect(isSecretValueRegisteredForRedaction(runtimeToken)).toBe(true);
  });

  it("leaves non-secret auth markers untouched", () => {
    const result = protectPreparedProviderRuntimeAuth({
      provider: "ollama",
      preparedAuth: { apiKey: `ltfx.n.18ab0c9c00ad3478e4db.v1` },
    });

    expect(result?.apiKey).toBe("ollama-local");
    expect(isSecretValueRegisteredForRedaction("ollama-local")).toBe(false);
  });
});

describe("unwrapModelHeaderSentinelsForProviderEgress", () => {
  it("unwraps sentinels in visible headers and attached request transport overrides", () => {
    const headerSecret = `ltfx.n.5d7d3c5081e52020ce72.v1`;
    const bearerSecret = `ltfx.n.5d2dcbe195e5b14643a1.v1`;
    const overrideHeaderSecret = `ltfx.n.fbd2e9822c49f1828c42.v1`;
    const model = attachModelProviderRequestTransport(
      {
        id: "test-model",
        headers: {
          "x-api-key": mintSecretSentinel(headerSecret, { label: "egress-test:visible" }),
        },
      },
      {
        headers: {
          "x-extra": mintSecretSentinel(overrideHeaderSecret, { label: "egress-test:override" }),
        },
        auth: {
          mode: "authorization-bearer",
          token: mintSecretSentinel(bearerSecret, { label: "egress-test:bearer" }),
        },
      },
    );

    const unwrapped = unwrapModelHeaderSentinelsForProviderEgress(model, "egress test");

    expect(unwrapped.headers?.["x-api-key"]).toBe(headerSecret);
    const request = getModelProviderRequestTransport(unwrapped);
    expect(request?.headers?.["x-extra"]).toBe(overrideHeaderSecret);
    expect(request?.auth).toEqual({ mode: "authorization-bearer", token: bearerSecret });
    // Original model stays sentineled: unwrap must not mutate shared state.
    expect(model.headers["x-api-key"]).not.toBe(headerSecret);
    expect(getModelProviderRequestTransport(model)?.auth).not.toEqual(request?.auth);
  });

  it("unwraps header-mode auth values in attached request transport overrides", () => {
    const headerAuthSecret = `ltfx.n.7611ccf9389407a9c74d.v1`;
    const model = attachModelProviderRequestTransport(
      { id: "test-model", headers: undefined },
      {
        auth: {
          mode: "header",
          headerName: "x-goog-api-key",
          value: mintSecretSentinel(headerAuthSecret, { label: "egress-test:header-auth" }),
        },
      },
    );

    const request = getModelProviderRequestTransport(
      unwrapModelHeaderSentinelsForProviderEgress(model, "egress test"),
    );

    expect(request?.auth).toEqual({
      mode: "header",
      headerName: "x-goog-api-key",
      value: headerAuthSecret,
    });
  });

  it("returns the same model instance when nothing is sentineled", () => {
    const model = attachModelProviderRequestTransport(
      { id: "test-model", headers: { "x-plain": "plain-value" } },
      { auth: { mode: "provider-default" } },
    );

    expect(unwrapModelHeaderSentinelsForProviderEgress(model, "egress test")).toBe(model);
  });

  it("rejects unknown sentinel-shaped values in attached overrides", () => {
    const model = attachModelProviderRequestTransport(
      { id: "test-model", headers: undefined },
      {
        auth: {
          mode: "authorization-bearer",
          token: `ltfx.n.6445df9cb1b7a964bdcd.v1`,
        },
      },
    );

    expect(() => unwrapModelHeaderSentinelsForProviderEgress(model, "egress test")).toThrow(
      /not registered in this process/,
    );
  });
});
