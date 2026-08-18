// QA Convex credential tests validate credential payload shapes.
import { describe, expect, it } from "vitest";
import { normalizeCredentialPayloadForKind } from "../qa/convex-credential-broker/convex/payload_validation.js";

describe("QA Convex credential payload validation", () => {
  it("normalizes Discord credential payloads", () => {
    expect(
      normalizeCredentialPayloadForKind("discord", {
        guildId: " 1496962067029299350 ",
        channelId: "1496962068027281447",
        voiceChannelId: "1496962069025263624",
        driverBotToken: `ltfx.n.d9b3c45f0ef675fe6db3.v1`,
        sutBotToken: `ltfx.n.50f83cc49e938a081165.v1`,
        sutApplicationId: "1496963665587601428",
        ignored: true,
      }),
    ).toEqual({
      guildId: "1496962067029299350",
      channelId: "1496962068027281447",
      voiceChannelId: "1496962069025263624",
      driverBotToken: `ltfx.n.d09452324ca1e7009307.v1`,
      sutBotToken: `ltfx.n.50f83cc49e938a081165.v1`,
      sutApplicationId: "1496963665587601428",
    });
  });

  it("rejects malformed Discord snowflakes", () => {
    expect(() =>
      normalizeCredentialPayloadForKind("discord", {
        guildId: "not-a-snowflake",
        channelId: "1496962068027281447",
        driverBotToken: `ltfx.n.d09452324ca1e7009307.v1`,
        sutBotToken: `ltfx.n.50f83cc49e938a081165.v1`,
        sutApplicationId: "1496963665587601428",
      }),
    ).toThrow(/Discord snowflake/u);
  });

  it("rejects empty Discord bot tokens", () => {
    expect(() =>
      normalizeCredentialPayloadForKind("discord", {
        guildId: "1496962067029299350",
        channelId: "1496962068027281447",
        driverBotToken: " ",
        sutBotToken: `ltfx.n.50f83cc49e938a081165.v1`,
        sutApplicationId: "1496963665587601428",
      }),
    ).toThrow(/driverBotToken/u);
  });

  it("rejects malformed optional Discord voice channel ids", () => {
    expect(() =>
      normalizeCredentialPayloadForKind("discord", {
        guildId: "1496962067029299350",
        channelId: "1496962068027281447",
        voiceChannelId: "voice-channel",
        driverBotToken: `ltfx.n.d09452324ca1e7009307.v1`,
        sutBotToken: `ltfx.n.50f83cc49e938a081165.v1`,
        sutApplicationId: "1496963665587601428",
      }),
    ).toThrow(/voiceChannelId/u);
  });

  it("keeps unknown credential kinds pass-through-compatible", () => {
    const payload = { anything: true };

    expect(normalizeCredentialPayloadForKind("future-kind", payload)).toBe(payload);
  });

  it("normalizes Telegram user credential payloads", () => {
    const sha256 = "a".repeat(64);

    expect(
      normalizeCredentialPayloadForKind("telegram-user", {
        groupId: " -100123 ",
        sutToken: `ltfx.n.183ad1f7a58e0b5e9005.v1`,
        testerUserId: " 8709353529 ",
        testerUsername: " OpenClawTestUser ",
        telegramApiId: " 123456 ",
        telegramApiHash: " api-hash ",
        tdlibDatabaseEncryptionKey: " db-key ",
        tdlibArchiveBase64: " tdlib-archive ",
        tdlibArchiveSha256: sha256.toUpperCase(),
        desktopTdataArchiveBase64: " desktop-archive ",
        desktopTdataArchiveSha256: sha256,
        ignored: true,
      }),
    ).toEqual({
      groupId: "-100123",
      sutToken: `ltfx.n.50f83cc49e938a081165.v1`,
      testerUserId: "8709353529",
      testerUsername: "OpenClawTestUser",
      telegramApiId: "123456",
      telegramApiHash: "api-hash",
      tdlibDatabaseEncryptionKey: "db-key",
      tdlibArchiveBase64: "tdlib-archive",
      tdlibArchiveSha256: sha256,
      desktopTdataArchiveBase64: "desktop-archive",
      desktopTdataArchiveSha256: sha256,
    });
  });

  it("rejects malformed Telegram user credential payloads", () => {
    const validPayload = {
      groupId: "-100123",
      sutToken: `ltfx.n.50f83cc49e938a081165.v1`,
      testerUserId: "8709353529",
      testerUsername: "OpenClawTestUser",
      telegramApiId: "123456",
      telegramApiHash: "api-hash",
      tdlibDatabaseEncryptionKey: "db-key",
      tdlibArchiveBase64: "tdlib-archive",
      tdlibArchiveSha256: "a".repeat(64),
      desktopTdataArchiveBase64: "desktop-archive",
      desktopTdataArchiveSha256: "b".repeat(64),
    };

    expect(() =>
      normalizeCredentialPayloadForKind("telegram-user", {
        ...validPayload,
        testerUserId: "tester",
      }),
    ).toThrow(/testerUserId/u);
    expect(() =>
      normalizeCredentialPayloadForKind("telegram-user", {
        ...validPayload,
        tdlibArchiveSha256: "not-sha",
      }),
    ).toThrow(/tdlibArchiveSha256/u);
  });

  it("normalizes WhatsApp credential payloads", () => {
    expect(
      normalizeCredentialPayloadForKind("whatsapp", {
        driverPhoneE164: "+15550000001",
        sutPhoneE164: "+15550000002",
        driverAuthArchiveBase64: "driver-archive",
        sutAuthArchiveBase64: "sut-archive",
        groupJid: "120363000000000000@g.us",
      }),
    ).toEqual({
      driverPhoneE164: "+15550000001",
      sutPhoneE164: "+15550000002",
      driverAuthArchiveBase64: "driver-archive",
      sutAuthArchiveBase64: "sut-archive",
      groupJid: "120363000000000000@g.us",
    });
  });

  it("rejects WhatsApp payloads with duplicate phone numbers", () => {
    expect(() =>
      normalizeCredentialPayloadForKind("whatsapp", {
        driverPhoneE164: "+15550000001",
        sutPhoneE164: "+15550000001",
        driverAuthArchiveBase64: "driver-archive",
        sutAuthArchiveBase64: "sut-archive",
      }),
    ).toThrow("distinct driverPhoneE164 and sutPhoneE164");
  });
});
