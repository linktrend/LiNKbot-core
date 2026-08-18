import Foundation
import Testing
@testable import OpenClaw

struct SessionDataTests {
    @Test func `session kind from key detects common kinds`() {
        #expect(SessionKind.from(key: "global") == .global)
        #expect(SessionKind.from(key: "${ltfx.n.9e7cf9f3ff2d6cbab167.v1}") == .cron)
        #expect(SessionKind.from(key: "${ltfx.n.11a2fdbee3096ea65bf9.v1}") == .cron)
        #expect(SessionKind.from(key: "${ltfx.n.cb6cf2a7c8f6513508fd.v1}") == .group)
        #expect(SessionKind.from(key: "unknown") == .unknown)
        #expect(SessionKind.from(key: "${ltfx.n.b4c9a289323b21a01c3e.v1}") == .direct)
    }

    @Test func `session token stats format K tokens rounds as expected`() {
        #expect(SessionTokenStats.formatKTokens(999) == "999")
        #expect(SessionTokenStats.formatKTokens(1000) == "1.0k")
        #expect(SessionTokenStats.formatKTokens(12340) == "12k")
    }

    @Test func `session token stats percent used clamps to100`() {
        let stats = SessionTokenStats(input: 0, output: 0, total: 250_000, contextTokens: 200_000)
        #expect(stats.percentUsed == 100)
    }

    @Test func `session row flag labels include non default flags`() {
        let row = SessionRow(
            id: "x",
            key: "${ltfx.n.b4c9a289323b21a01c3e.v1}",
            kind: .direct,
            displayName: nil,
            provider: nil,
            subject: nil,
            room: nil,
            space: nil,
            updatedAt: Date(),
            sessionId: nil,
            thinkingLevel: "high",
            verboseLevel: "debug",
            systemSent: true,
            abortedLastRun: true,
            tokens: SessionTokenStats(input: 1, output: 2, total: 3, contextTokens: 10),
            model: nil)
        #expect(row.flagLabels.contains("think high"))
        #expect(row.flagLabels.contains("verbose debug"))
        #expect(row.flagLabels.contains("system sent"))
        #expect(row.flagLabels.contains("aborted"))
    }
}
