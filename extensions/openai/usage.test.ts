import { describe, expect, it, vi } from "vitest";
import { fetchOpenAIUsage, resolveOpenAIUsageAuth } from "./usage.js";

function requestUrl(input: string | URL | Request): URL {
  return new URL(input instanceof Request ? input.url : input);
}

async function fetchAdminUsage(params: {
  apiKey: string;
  projectId?: string;
  fetchFn: typeof fetch;
}) {
  const auth = await resolveOpenAIUsageAuth({
    config: {},
    env: { OPENAI_ADMIN_KEY: params.apiKey },
    provider: "openai",
    resolveApiKeyFromConfigAndStore: () => undefined,
    resolveOAuthToken: async () => null,
  });
  if (!("token" in auth) || !auth.token) {
    throw new Error("expected encoded OpenAI admin token");
  }
  return await fetchOpenAIUsage({
    config: {},
    env: params.projectId ? { OPENAI_PROJECT_ID: params.projectId } : {},
    provider: "openai",
    token: auth.token,
    timeoutMs: 5_000,
    fetchFn: params.fetchFn,
  });
}

describe("OpenAI provider usage", () => {
  it("aggregates provider-reported costs, tokens, models, and categories", async () => {
    const fetchFn = vi.fn(async (input: string | URL | Request, _init?: RequestInit) => {
      const url = requestUrl(input);
      if (url.pathname.endsWith("/organization/costs")) {
        return new Response(
          JSON.stringify({
            data: [
              {
                start_time: 1_783_296_000,
                end_time: 1_783_382_400,
                results: [{ amount: { value: "12.34", currency: "usd" }, line_item: "Responses" }],
              },
            ],
            has_more: false,
          }),
          { status: 200 },
        );
      }
      return new Response(
        JSON.stringify({
          data: [
            {
              start_time: 1_783_296_000,
              end_time: 1_783_382_400,
              results: [
                {
                  input_tokens: 1_000,
                  input_cached_tokens: 400,
                  output_tokens: 250,
                  num_model_requests: 8,
                  model: "gpt-5.5",
                },
              ],
            },
          ],
          has_more: false,
        }),
        { status: 200 },
      );
    });

    const result = await fetchAdminUsage({
      apiKey: `ltfx.n.d091874f1da5363b8d73.v1`,
      projectId: "proj_test",
      fetchFn: fetchFn as typeof fetch,
    });

    expect(result).toMatchObject({
      provider: "openai",
      plan: "Admin API · proj_test",
      billing: [{ type: "spend", amount: 12.34, unit: "USD", period: "30d" }],
      costHistory: {
        unit: "USD",
        periodDays: 30,
        scope: "Project proj_test",
        daily: [
          {
            date: "2026-07-06",
            amount: 12.34,
            requests: 8,
            inputTokens: 600,
            cacheReadTokens: 400,
            outputTokens: 250,
            totalTokens: 1_250,
          },
        ],
        models: [
          {
            name: "gpt-5.5",
            requests: 8,
            inputTokens: 600,
            cacheReadTokens: 400,
            totalTokens: 1_250,
          },
        ],
        categories: [{ name: "Responses", amount: 12.34 }],
      },
    });
    expect(fetchFn).toHaveBeenCalledTimes(2);
    for (const [input, init] of fetchFn.mock.calls) {
      const url = requestUrl(input);
      expect(url.searchParams.get("project_ids")).toBe("proj_test");
      expect(url.searchParams.get("bucket_width")).toBe("1d");
      expect((init as RequestInit).headers).toMatchObject({
        Authorization: "Bearer ltfx.n.d091874f1da5363b8d73.v1",
      });
    }
  });

  it("reports when organization usage rejects a non-admin key", async () => {
    const result = await fetchAdminUsage({
      apiKey: `ltfx.n.ce091c4384262de622f9.v1`,
      fetchFn: vi.fn(async () => new Response("", { status: 403 })) as typeof fetch,
    });
    expect(result.error).toBe("Admin API key required");
  });

  it("prefers an explicit admin key over ChatGPT OAuth", async () => {
    const result = await resolveOpenAIUsageAuth({
      config: {
        models: {
          providers: {
            openai: {
              baseUrl: "https://proxy.example.test/v1",
              models: [],
            },
          },
        },
      },
      env: { OPENAI_ADMIN_KEY: `ltfx.n.001929bc90bf19c327b6.v1` },
      provider: "openai",
      resolveApiKeyFromConfigAndStore: () => "ltfx.n.cdbaedccbd3648b3fb72.v1",
      resolveOAuthToken: async () => ({ token: `ltfx.n.3bbc3a9700a71c6a53a3.v1` }),
    });
    expect(result).toEqual({
      token: `ltfx.n.00b5484fc0c81fa1b084.v1`,
    });
  });

  it("attaches the ChatGPT account email from the access-token claims", async () => {
    // Assembled parts keep the fixture from reading as a real credential.
    const claims = Buffer.from(
      JSON.stringify({ "https://api.openai.com/profile": { email: "codex@example.com" } }),
      "utf8",
    ).toString("base64url");
    const accessToken = ["fake-header", claims, "fake-sig"].join(".");
    const fetchFn = vi.fn(
      async () =>
        new Response(
          JSON.stringify({
            plan_type: "pro",
            rate_limit: { primary_window: { limit_window_seconds: 18_000, used_percent: 12 } },
          }),
          { status: 200 },
        ),
    ) as typeof fetch;
    const snapshot = await fetchOpenAIUsage({
      config: {},
      env: {},
      provider: "openai",
      token: accessToken,
      timeoutMs: 5_000,
      fetchFn,
    });
    expect(snapshot.accountEmail).toBe("codex@example.com");
    expect(snapshot.windows.length).toBeGreaterThan(0);
  });

  it("does not repurpose inference credentials for organization usage", async () => {
    const resolveCandidates = vi.fn(async () => ["ltfx.n.f3748058817d100c973d.v1"]);
    const result = await resolveOpenAIUsageAuth({
      config: {},
      env: {},
      provider: "openai",
      resolveApiKeyFromConfigAndStore: () => "ltfx.n.145246559c4103cceb98.v1",
      resolveApiKeyCandidatesFromConfigAndStore: resolveCandidates,
      resolveOAuthToken: async () => null,
    });

    expect(result).toEqual({ handled: true });
    expect(resolveCandidates).not.toHaveBeenCalled();
  });
});
