"use client";

const badges = [
    { icon: "🏦", title: "FDIC-insured partner bank", desc: "Deposits protected up to $250,000" },
    { icon: "🔒", title: "256-bit AES encryption", desc: "All data encrypted at rest and in transit" },
    { icon: "✅", title: "PCI DSS compliant", desc: "Card data handled to payment industry standards" },
    { icon: "📋", title: "FinCEN registered", desc: "Compliant with US anti-money laundering laws" },
];

const pillars = [
    { num: "01", title: "Identity verification (KYC)", body: "Every account goes through a rigorous Know Your Customer process using AI-powered document verification and liveness detection — so only you can open an account in your name." },
    { num: "02", title: "Two-factor authentication", body: "Every login and sensitive action requires a second verification — via biometric, SMS, or authenticator app. Even if someone has your password, they can't access your account." },
    { num: "03", title: "Real-time fraud monitoring", body: "Our systems monitor every transaction 24/7 for suspicious activity. Unusual behavior triggers instant alerts and automatic holds — before damage is done." },
    { num: "04", title: "Instant card freeze", body: "Lost your card? Freeze it instantly from the app. No waiting, no calls — just tap to lock it. Unfreeze when you find it, or request a new one in seconds." },
    { num: "05", title: "Segregated funds", body: "Your money is held in segregated accounts at our FDIC-insured partner bank — completely separate from Wasl's operational funds. Your balance is always yours." },
    { num: "06", title: "End-to-end encryption", body: "All data — account numbers, transaction history, personal details — is encrypted with 256-bit AES both at rest and in transit. Unreadable without your keys." },
];

const tips = [
    { title: "Never share your password or OTP", body: "Wasl will never ask for your password or one-time code. Anyone who does is a scammer." },
    { title: "Use a strong, unique password", body: "Don't reuse passwords across services. Use a password manager like 1Password or Bitwarden." },
    { title: "Enable biometric login", body: "Face ID and fingerprint login add a fast, secure layer that passwords alone can't match." },
    { title: "Watch for phishing", body: "Check that emails come from @getwasl.com. Don't click links from unknown senders claiming to be Wasl." },
    { title: "Review transactions regularly", body: "Check your transaction history weekly. Report anything unfamiliar immediately via support." },
    { title: "Keep your app updated", body: "Security patches are pushed regularly. Always run the latest version of the Wasl app." },
];

export default function SecurityPage() {
    return (
        <main>

            {/* Hero */}
            <section style={{ background: "#0D0D0D", color: "white", padding: "8rem 5vw 6rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: "8vw", top: "50%", transform: "translateY(-50%)", width: 200, height: 200, border: "2px solid rgba(201,168,76,0.3)", clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                    <span style={{ fontSize: "4rem", position: "absolute" }}>🛡</span>
                </div>
                <p style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.5rem" }}>
                    Security
                </p>
                <h1 style={{ fontFamily: "serif", fontSize: "clamp(2.8rem,5vw,4.5rem)", lineHeight: 1.08, maxWidth: 640, marginBottom: "1.5rem" }}>
                    Your money is <em style={{ color: "#C9A84C", fontStyle: "italic" }}>protected.</em> Full stop.
                </h1>
                <p style={{ fontSize: "1.1rem", color: "#bbb", maxWidth: 520, fontWeight: 300 }}>
                    Wasl uses the same security infrastructure as the world's leading financial institutions. Here's exactly what that means for you.
                </p>
            </section>

            {/* Certifications */}
            <section style={{ padding: "5rem 5vw" }}>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
                    Certifications & compliance
                </p>
                <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.15, marginBottom: "1rem" }}>
                    Built to <em style={{ color: "#C9A84C", fontStyle: "italic" }}>banking standards.</em>
                </h2>
                <p style={{ color: "#6B6B6B", maxWidth: 560 }}>
                    We don't cut corners on security. Every layer of Wasl — from account creation to payouts — is built to meet the highest financial security standards.
                </p>
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "3rem" }}>
                    {badges.map((b) => (
                        <div key={b.title} style={{ background: "white", border: "1px solid #E8E2D0", padding: "1.25rem 1.75rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                            <span style={{ fontSize: "1.5rem" }}>{b.icon}</span>
                            <div>
                                <strong style={{ display: "block", fontSize: "0.9rem", fontWeight: 500 }}>{b.title}</strong>
                                <span style={{ fontSize: "0.78rem", color: "#6B6B6B" }}>{b.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pillars */}
            <section style={{ background: "white", padding: "5rem 5vw" }}>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
                    How we protect you
                </p>
                <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.15, marginBottom: 0 }}>
                    Security in every <em style={{ color: "#C9A84C", fontStyle: "italic" }}>layer.</em>
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 1, background: "#E8E2D0", marginTop: "3rem" }}>
                    {pillars.map((p) => (
                        <div key={p.num} style={{ background: "#FAF7EF", padding: "2.5rem 2rem", position: "relative", overflow: "hidden" }}>
                            <div style={{ position: "absolute", top: "-0.5rem", right: "1rem", fontFamily: "serif", fontSize: "5rem", color: "#E8E2D0", fontWeight: 700, lineHeight: 1, pointerEvents: "none" }}>
                                {p.num}
                            </div>
                            <h3 style={{ fontSize: "1.05rem", fontWeight: 500, marginBottom: "0.75rem", position: "relative" }}>{p.title}</h3>
                            <p style={{ fontSize: "0.88rem", color: "#6B6B6B", position: "relative" }}>{p.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tips */}
            <section style={{ background: "#0D0D0D", color: "white", padding: "5rem 5vw" }}>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
                    Protect yourself
                </p>
                <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "white", lineHeight: 1.15, marginBottom: "0.75rem" }}>
                    Your security <em style={{ color: "#C9A84C", fontStyle: "italic" }}>habits</em> matter too.
                </h2>
                <p style={{ color: "#888", maxWidth: 520 }}>
                    We handle the infrastructure. Here's how you can protect your account on your end.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "2rem", marginTop: "3rem" }}>
                    {tips.map((t) => (
                        <div key={t.title} style={{ borderLeft: "2px solid #C9A84C", paddingLeft: "1.5rem" }}>
                            <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "white", marginBottom: "0.5rem" }}>{t.title}</h3>
                            <p style={{ fontSize: "0.87rem", color: "#888" }}>{t.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Responsible Disclosure */}
            <section style={{ background: "white", padding: "5rem 5vw", display: "flex", gap: "5rem", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 260 }}>
                    <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
                        Responsible disclosure
                    </p>
                    <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.15, marginBottom: "1rem" }}>
                        Found a <em style={{ color: "#C9A84C", fontStyle: "italic" }}>vulnerability?</em>
                    </h2>
                    <p style={{ color: "#6B6B6B", marginBottom: "1rem" }}>
                        We take security reports seriously and respond to all valid submissions within 48 hours. Eligible researchers are rewarded through our bug bounty program.
                    </p>
                    <p style={{ color: "#6B6B6B" }}>
                        We do not take legal action against researchers who act in good faith and follow our responsible disclosure guidelines.
                    </p>
                </div>
                <div style={{ flex: 1, minWidth: 260, background: "#FAF7EF", border: "1px solid #E8E2D0", padding: "2.5rem" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "1rem" }}>Report a security issue</h3>
                    <p style={{ fontSize: "0.88rem", color: "#6B6B6B", marginBottom: "1.5rem" }}>
                        Send a detailed description of the vulnerability, including steps to reproduce and potential impact, to our security team.
                    </p>
                    <a href="mailto:security@getwasl.com"
                        style={{ border: "1px solid #0D0D0D", background: "none", padding: "0.8rem 1.75rem", fontSize: "0.87rem", fontWeight: 500, cursor: "pointer", display: "inline-block", letterSpacing: "0.04em", textDecoration: "none", color: "#0D0D0D", transition: "all 0.2s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#0D0D0D"; (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#0D0D0D"; }}
                    >
                        security@getwasl.com →
                    </a>
                </div>
            </section>

        </main>
    );
}