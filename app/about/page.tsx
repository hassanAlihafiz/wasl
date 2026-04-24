export default function AboutPage() {
    return (
      <main>
  
        {/* Hero */}
        <section style={{ background: "#0D0D0D", color: "white", padding: "8rem 5vw 6rem" }}>
          <p style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.5rem" }}>
            01 / Our story
          </p>
          <h1 style={{ fontFamily: "serif", fontSize: "clamp(2.8rem,6vw,5rem)", lineHeight: 1.08, maxWidth: 700, marginBottom: "1.5rem" }}>
            Built for the people the banking system{" "}
            <em style={{ color: "#C9A84C" }}>forgot.</em>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#bbb", maxWidth: 560, fontWeight: 300 }}>
            Wasl is a bridge — between talented people in the Arab world and the global economy that needs them.
          </p>
        </section>
  
        {/* Mission */}
        <section style={{ padding: "5rem 5vw" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
            02 / Mission
          </p>
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", marginBottom: "1.5rem" }}>
            Your talent is <em style={{ color: "#C9A84C" }}>global.</em> Your bank shouldn't limit it.
          </h2>
          <p style={{ color: "#6B6B6B", maxWidth: 560, marginBottom: "1rem" }}>
            Millions of freelancers and remote workers across the Arab world do world-class work for international clients — then lose weeks and up to 8% of every payment navigating a banking system that wasn't designed for them.
          </p>
          <p style={{ color: "#6B6B6B", maxWidth: 560 }}>
            Wasl changes that. We give you a real USD account with real routing and account numbers — so your dollars arrive in full, on the same day, every time.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 1, background: "#E8E2D0", marginTop: "2.5rem" }}>
            {[
              { num: "180+", label: "Countries sending you payments" },
              { num: "0.4%", label: "Flat conversion fee. Nothing hidden." },
              { num: "$0",   label: "To receive any payment" },
              { num: "6 min",label: "To open your USD account" },
            ].map((s) => (
              <div key={s.num} style={{ background: "#FAF7EF", padding: "2.5rem 2rem" }}>
                <div style={{ fontFamily: "serif", fontSize: "2.8rem", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: "0.82rem", color: "#6B6B6B", marginTop: "0.5rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Story */}
        <section style={{ background: "#0D0D0D", color: "white", padding: "5rem 5vw" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
              03 / Why we exist
            </p>
            <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "white", marginBottom: "1.5rem" }}>
              The <em style={{ color: "#C9A84C" }}>story</em> behind Wasl
            </h2>
            <p style={{ color: "#ccc", fontWeight: 300, marginBottom: "1.5rem" }}>
              It started with a frustration we all shared. A designer in Cairo. A developer in Amman. A product manager in Karachi. All doing excellent work for companies in New York, London, and Berlin — and all losing money, time, and sanity trying to get paid.
            </p>
            <blockquote style={{ borderLeft: "3px solid #C9A84C", paddingLeft: "2rem", margin: "3rem 0", fontFamily: "serif", fontSize: "1.6rem", fontStyle: "italic", color: "#F0D080", lineHeight: 1.4 }}>
              "The dollar was already there. We just needed a better bridge to reach it."
            </blockquote>
            <p style={{ color: "#ccc", fontWeight: 300 }}>
              Wasl — which means "connection" in Arabic — is that bridge. We're building the financial infrastructure that remote workers deserve: transparent, fast, and built around how they actually work.
            </p>
          </div>
        </section>
  
        {/* Values */}
        <section style={{ padding: "5rem 5vw" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
            04 / Our values
          </p>
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", marginBottom: "1.5rem" }}>
            What we believe <em style={{ color: "#C9A84C" }}>deeply.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 1, background: "#E8E2D0" }}>
            {[
              { num: "01", title: "Radical transparency", body: "We show you every fee, every rate, every line item — before you confirm anything. No surprises, ever." },
              { num: "02", title: "Speed is respect", body: "Waiting two weeks for money you earned is disrespectful. Same-day payments aren't a premium feature — they're the baseline." },
              { num: "03", title: "Built for the region", body: "We understand the MENA market deeply — the languages, the currencies, the platforms, the frustrations." },
              { num: "04", title: "Security without complexity", body: "Bank-grade protection behind a simple interface. Your money is safe — and you don't need to understand the plumbing." },
            ].map((v) => (
              <div key={v.num} style={{ background: "#FAF7EF", padding: "2.5rem 2rem" }}>
                <div style={{ fontFamily: "serif", fontSize: "3rem", color: "#E8E2D0", lineHeight: 1, marginBottom: "1rem" }}>{v.num}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 500, marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "#6B6B6B" }}>{v.body}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Team */}
        <section style={{ padding: "5rem 5vw", background: "white" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
            05 / The team
          </p>
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", marginBottom: "0.75rem" }}>
            Who's building <em style={{ color: "#C9A84C" }}>Wasl.</em>
          </h2>
          <p style={{ color: "#6B6B6B", maxWidth: 560, marginBottom: "2.5rem" }}>
            A small team of fintech builders, designers, and remote workers — who've lived this problem firsthand.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "2rem" }}>
            {[
              { initials: "YA", role: "Founder & CEO",        name: "Youssef Al-Amin", bio: "Ex-Stripe, ex-Deel. 10 years in payments infrastructure." },
              { initials: "SR", role: "Co-Founder & CTO",     name: "Sara Rashid",     bio: "Built banking APIs at Lean Technologies and Fawry." },
              { initials: "MK", role: "Head of Design",       name: "Maya Khalil",     bio: "Led product design at Wio Bank and Tabby." },
              { initials: "OB", role: "Head of Compliance",   name: "Omar Benali",     bio: "Former regulatory lead at Central Bank of UAE." },
            ].map((t) => (
              <div key={t.initials} style={{ textAlign: "center" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#0D0D0D", color: "#C9A84C", fontFamily: "serif", fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                  {t.initials}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#C9A84C", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{t.role}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.25rem" }}>{t.name}</h3>
                <p style={{ fontSize: "0.82rem", color: "#6B6B6B" }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* CTA */}
        <section style={{ background: "#0D0D0D", textAlign: "center", padding: "7rem 5vw", color: "white" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
            06 / Join us
          </p>
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "white", marginBottom: "1rem" }}>
            Be first when <em style={{ color: "#C9A84C" }}>we launch.</em>
          </h2>
          <p style={{ color: "#aaa", fontSize: "1.05rem", maxWidth: 500, margin: "0 auto 2.5rem", fontWeight: 300 }}>
            We're opening early access in weeks, not months. Join the waitlist and skip the queue.
          </p>
          <a href="/#waitlist" style={{ background: "#C9A84C", color: "#0D0D0D", padding: "1rem 2.5rem", fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
            Join the waitlist →
          </a>
        </section>
    
      </main>
    );
  }