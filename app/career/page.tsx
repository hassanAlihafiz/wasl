export default function CareersPage() {
    const perks = [
        { icon: "🌍", title: "Fully remote", body: "Work from anywhere in the world. We're async-first and timezone-flexible." },
        { icon: "💵", title: "Paid in USD", body: "Competitive salaries paid in US dollars — no conversion loss, no delays." },
        { icon: "📈", title: "Equity for all", body: "Every team member gets equity. We're building this together." },
        { icon: "🧠", title: "Learning budget", body: "$1,500/year for courses, books, conferences, and tools that make you better." },
        { icon: "🏥", title: "Health coverage", body: "Comprehensive health insurance for you and your dependents." },
        { icon: "🏖", title: "Unlimited PTO", body: "Take the time you need. We trust you to manage your own time." },
    ];

    const jobs = [
        { title: "Senior Backend Engineer — Payments", meta: ["Remote · MENA", "Full-time", "$90K–$130K USD"], tag: "Engineering", tagStyle: { background: "#FFF8E7", border: "1px solid #F0D080", color: "#8B6914" } },
        { title: "iOS Engineer (Swift)", meta: ["Remote · Worldwide", "Full-time", "$80K–$120K USD"], tag: "Engineering", tagStyle: { background: "#FFF8E7", border: "1px solid #F0D080", color: "#8B6914" } },
        { title: "Product Designer", meta: ["Remote · MENA preferred", "Full-time", "$70K–$100K USD"], tag: "Design", tagStyle: { background: "#F0F8FF", border: "1px solid #B5D4F4", color: "#0C447C" } },
        { title: "Compliance & Regulatory Lead", meta: ["Remote · MENA", "Full-time", "$85K–$115K USD"], tag: "Operations", tagStyle: { background: "#F0FFF4", border: "1px solid #C0DD97", color: "#3B6D11" } },
        { title: "Growth & Partnerships Manager", meta: ["Remote · Worldwide", "Full-time", "$65K–$95K USD"], tag: "Operations", tagStyle: { background: "#F0FFF4", border: "1px solid #C0DD97", color: "#3B6D11" } },
        { title: "Customer Support Lead (Arabic/English)", meta: ["Remote · MENA", "Full-time", "$40K–$60K USD"], tag: "Operations", tagStyle: { background: "#F0FFF4", border: "1px solid #C0DD97", color: "#3B6D11" } },
    ];

    const steps = [
        { num: "Step 01", title: "Apply", body: "Send us your CV and a short note on why Wasl excites you. No cover letter templates, please." },
        { num: "Step 02", title: "Intro call", body: "30-minute conversation with the hiring manager. We want to understand you, not quiz you." },
        { num: "Step 03", title: "Skills task", body: "A short, paid take-home task relevant to the actual role. Max 3 hours, compensated at $100." },
        { num: "Step 04", title: "Final interview", body: "Meet 2–3 team members. Ask us anything. Then we make a decision within 48 hours." },
    ];

    return (
        <main>

            {/* Hero */}
            <section style={{ background: "#0D0D0D", color: "white", padding: "8rem 5vw 6rem", position: "relative", overflow: "hidden" }}>
                <p style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.5rem" }}>
                    Careers at Wasl
                </p>
                <h1 style={{ fontFamily: "serif", fontSize: "clamp(2.8rem,6vw,5rem)", lineHeight: 1.08, maxWidth: 700, marginBottom: "1.5rem" }}>
                    Help us build the future of <em style={{ color: "#C9A84C", fontStyle: "italic" }}>global pay.</em>
                </h1>
                <p style={{ fontSize: "1.1rem", color: "#bbb", maxWidth: 540, fontWeight: 300 }}>
                    We're a small, ambitious team on a big mission. If you care about financial inclusion, love building for real people, and want your work to matter — let's talk.
                </p>
            </section>

            {/* Perks */}
            <section style={{ padding: "5rem 5vw" }}>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
                    Why Wasl
                </p>
                <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.15, marginBottom: "1rem" }}>
                    Perks that actually <em style={{ color: "#C9A84C", fontStyle: "italic" }}>matter.</em>
                </h2>
                <p style={{ color: "#6B6B6B", maxWidth: 540, marginBottom: 0 }}>
                    We know what it's like to be a remote worker. So we build a team culture that reflects that.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 1, background: "#E8E2D0", marginTop: "2.5rem" }}>
                    {perks.map((p) => (
                        <div key={p.title} style={{ background: "#FAF7EF", padding: "2rem 1.75rem" }}>
                            <span style={{ fontSize: "1.5rem", marginBottom: "1rem", display: "block" }}>{p.icon}</span>
                            <h3 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.5rem" }}>{p.title}</h3>
                            <p style={{ fontSize: "0.87rem", color: "#6B6B6B" }}>{p.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Jobs */}
            <section style={{ padding: "5rem 5vw", background: "white" }}>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
                    Open roles
                </p>
                <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.15, marginBottom: "2.5rem" }}>
                    Where we're <em style={{ color: "#C9A84C", fontStyle: "italic" }}>hiring.</em>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#E8E2D0" }}>
                    {jobs.map((job) => (
                        <div key={job.title} style={{ background: "white", padding: "1.75rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                            <div>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 500, marginBottom: "0.3rem" }}>{job.title}</h3>
                                <div style={{ display: "flex", gap: "1rem", fontSize: "0.82rem", color: "#6B6B6B" }}>
                                    {job.meta.map((m) => <span key={m}>{m}</span>)}
                                </div>
                            </div>
                            <span style={{ ...job.tagStyle, padding: "0.25rem 0.75rem", fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>
                                {job.tag}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Hiring Process */}
            <section style={{ background: "#0D0D0D", color: "white", padding: "5rem 5vw" }}>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
                    Our hiring process
                </p>
                <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "white", lineHeight: 1.15, marginBottom: "0.75rem" }}>
                    Simple, <em style={{ color: "#C9A84C", fontStyle: "italic" }}>respectful,</em> fast.
                </h2>
                <p style={{ color: "#888", maxWidth: 520, marginBottom: 0 }}>
                    We move quickly and we respect your time. No 8-round loops. No trick questions.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "2rem", marginTop: "3rem" }}>
                    {steps.map((s) => (
                        <div key={s.num} style={{ paddingLeft: "1rem", borderLeft: "2px solid #C9A84C" }}>
                            <div style={{ fontSize: "0.75rem", color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{s.num}</div>
                            <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "white", marginBottom: "0.5rem" }}>{s.title}</h3>
                            <p style={{ fontSize: "0.87rem", color: "#888" }}>{s.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: "#0D0D0D", textAlign: "center", padding: "7rem 5vw", color: "white" }}>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
                    Don't see your role?
                </p>
                <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "white", marginBottom: "1rem" }}>
                    Send us an <em style={{ color: "#C9A84C", fontStyle: "italic" }}>open application.</em>
                </h2>
                <p style={{ color: "#aaa", fontSize: "1.05rem", maxWidth: 500, margin: "1rem auto 2.5rem", fontWeight: 300 }}>
                    We're always interested in extraordinary people. Tell us who you are and what you'd build at Wasl.
                </p>
                <a href="mailto:careers@getwasl.com" style={{ background: "#C9A84C", color: "#0D0D0D", padding: "1rem 2.5rem", fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                    Email careers@getwasl.com →
                </a>
            </section>

        </main>
    );
}