"use client";
import { useState } from "react";

const coreServices = [
    { name: "USD Account — Receive payments", desc: "ACH and wire incoming payments" },
    { name: "Currency conversion", desc: "USD to local currency at mid-market rate" },
    { name: "Wasl Card — Virtual", desc: "Online payments and card transactions" },
    { name: "Wasl Card — Physical", desc: "In-store and ATM transactions" },
    { name: "Mobile app — iOS", desc: "iPhone and iPad application" },
    { name: "Mobile app — Android", desc: "Android application" },
    { name: "Account verification (KYC)", desc: "Identity verification and onboarding" },
];

const platformServices = [
    { name: "Upwork payouts", desc: "Milestone and hourly contract payments" },
    { name: "Deel — EOR & Contractor", desc: "Salary and contractor payroll" },
    { name: "Fiverr payouts", desc: "Gig and project payments" },
    { name: "Toptal contracts", desc: "Long-term contract payouts" },
    { name: "Direct wire (ACH / SWIFT)", desc: "Bank and employer direct wire transfers" },
];

const incidents = [
    {
        date: "March 12, 2026",
        title: "Delayed Upwork payouts — 2.5 hour window",
        body: "Between 09:14 and 11:42 UTC, Upwork payout processing was delayed due to an upstream ACH processing issue with our banking partner. No payments were lost — all transactions completed with a delay. Affected users received email notifications.",
        resolved: "✓ Resolved · Duration: 2h 28m",
    },
    {
        date: "February 3, 2026",
        title: "KYC verification delays during high traffic",
        body: "Following a feature announcement, account verification times increased from under 6 minutes to up to 45 minutes due to high volume. We scaled verification capacity and resolved the backlog within 4 hours.",
        resolved: "✓ Resolved · Duration: 4h 02m",
    },
];

const uptimeDays = Array.from({ length: 90 }, (_, i) => {
    if (i === 48 || i === 17) return "incident";
    return "ok";
});

function StatusBadge({ status }: { status: "operational" | "degraded" | "outage" }) {
    const styles = {
        operational: { background: "#F0FFF6", color: "#2D7A4F" },
        degraded: { background: "#FFF8E7", color: "#8B6914" },
        outage: { background: "#FFF0F0", color: "#991B1B" },
    };
    const labels = { operational: "Operational", degraded: "Degraded", outage: "Outage" };
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", fontWeight: 500, padding: "0.3rem 0.85rem", borderRadius: 2, ...styles[status] }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "currentColor", flexShrink: 0 }} />
            {labels[status]}
        </div>
    );
}

function ServiceList({ services }: { services: { name: string; desc: string }[] }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#E8E2D0" }}>
            {services.map((s) => (
                <div key={s.name} style={{ background: "white", padding: "1.25rem 1.75rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
                    <div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 500 }}>{s.name}</div>
                        <div style={{ fontSize: "0.82rem", color: "#6B6B6B", marginTop: "0.2rem" }}>{s.desc}</div>
                    </div>
                    <StatusBadge status="operational" />
                </div>
            ))}
        </div>
    );
}

export default function StatusPage() {
    const [email, setEmail] = useState("");

    return (
        <main>

            {/* Hero */}
            <section style={{ background: "#0D0D0D", padding: "5rem 5vw 4rem", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "#1A3D2B", border: "1px solid #2D7A4F", padding: "1rem 2rem", marginBottom: "2rem" }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 0 3px rgba(74,222,128,0.25)", animation: "pulse 2s infinite" }} />
                    <span style={{ color: "#4ADE80", fontWeight: 500, fontSize: "0.95rem" }}>All systems operational</span>
                </div>
                <h1 style={{ fontFamily: "serif", fontSize: "clamp(2rem,4vw,3rem)", color: "white", marginBottom: "0.75rem" }}>
                    System Status
                </h1>
                <p style={{ color: "#888", fontSize: "0.9rem" }}>
                    Last updated: April 24, 2026 at 14:32 UTC · Auto-refreshes every 60 seconds
                </p>
                <style>{`
          @keyframes pulse {
            0%, 100% { box-shadow: 0 0 0 3px rgba(74,222,128,0.25); }
            50% { box-shadow: 0 0 0 6px rgba(74,222,128,0.1); }
          }
        `}</style>
            </section>

            {/* Services */}
            <div style={{ padding: "4rem 5vw", maxWidth: 900, margin: "0 auto" }}>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.5rem" }}>
                    Core services
                </p>
                <ServiceList services={coreServices} />

                <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", margin: "2.5rem 0 1.5rem" }}>
                    Platform integrations
                </p>
                <ServiceList services={platformServices} />
            </div>

            {/* Uptime bar */}
            <div style={{ padding: "0 5vw 4rem", maxWidth: 900, margin: "0 auto" }}>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.5rem" }}>
                    90-day uptime history
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.85rem", color: "#6B6B6B" }}>Payment processing</span>
                    <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "#2D7A4F" }}>99.97% uptime</span>
                </div>
                <div style={{ display: "flex", gap: 2, height: 32, marginBottom: "0.5rem" }}>
                    {uptimeDays.map((type, i) => (
                        <div key={i} style={{ flex: 1, borderRadius: 2, background: type === "incident" ? "#FCA5A5" : "#4ADE80", opacity: 0.85, minWidth: 3, cursor: "pointer", transition: "opacity 0.2s" }}
                            onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.opacity = "1"}
                            onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.opacity = "0.85"}
                        />
                    ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#6B6B6B" }}>
                    <span>90 days ago</span>
                    <span>Today</span>
                </div>
            </div>

            {/* Incidents */}
            <div style={{ padding: "0 5vw 5rem", maxWidth: 900, margin: "0 auto" }}>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.5rem" }}>
                    Past incidents
                </p>
                {incidents.map((inc) => (
                    <div key={inc.title} style={{ borderLeft: "3px solid #E8E2D0", paddingLeft: "1.5rem", marginBottom: "2.5rem", position: "relative" }}>
                        <div style={{ position: "absolute", left: -5, top: 6, width: 8, height: 8, borderRadius: "50%", background: "#4ADE80" }} />
                        <div style={{ fontSize: "0.75rem", color: "#6B6B6B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{inc.date}</div>
                        <div style={{ fontSize: "0.97rem", fontWeight: 500, marginBottom: "0.4rem" }}>{inc.title}</div>
                        <div style={{ fontSize: "0.87rem", color: "#6B6B6B" }}>{inc.body}</div>
                        <div style={{ fontSize: "0.78rem", color: "#2D7A4F", marginTop: "0.5rem", fontWeight: 500 }}>{inc.resolved}</div>
                    </div>
                ))}
                <p style={{ fontSize: "0.87rem", color: "#6B6B6B" }}>No other incidents in the past 90 days.</p>
            </div>

            {/* Subscribe */}
            <section style={{ background: "#0D0D0D", padding: "4rem 5vw", textAlign: "center", color: "white" }}>
                <h2 style={{ fontFamily: "serif", fontSize: "1.8rem", marginBottom: "0.75rem" }}>
                    Get status <em style={{ color: "#C9A84C", fontStyle: "italic" }}>alerts.</em>
                </h2>
                <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "2rem" }}>
                    Subscribe to receive email notifications whenever a service incident is opened or resolved.
                </p>
                <div style={{ display: "flex", maxWidth: 440, margin: "0 auto" }}>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ flex: 1, padding: "0.85rem 1.25rem", border: "1px solid #333", background: "#1A1A1A", color: "white", fontFamily: "inherit", fontSize: "0.9rem", outline: "none" }}
                    />
                    <button style={{ background: "#C9A84C", color: "#0D0D0D", border: "none", padding: "0.85rem 1.5rem", fontFamily: "inherit", fontWeight: 500, fontSize: "0.87rem", cursor: "pointer", whiteSpace: "nowrap" }}>
                        Subscribe →
                    </button>
                </div>
            </section>

        </main>
    );
}