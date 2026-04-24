"use client";

const facts = [
  { num: "2025", label: "Year founded" },
  { num: "$0", label: "Fee to receive USD payments" },
  { num: "0.4%", label: "Flat FX conversion fee" },
  { num: "180+", label: "Countries that can send you money" },
  { num: "6 min", label: "To open a USD account" },
  { num: "Q3 2026", label: "Public launch target" },
];

const coverage = [
  { outlet: "TechCrunch", title: "Wasl wants to bring real USD banking to freelancers across the Arab world", date: "March 2026" },
  { outlet: "Wamda", title: "The startup closing the payment gap for MENA's remote workforce", date: "February 2026" },
  { outlet: "Sifted", title: "How Wasl is turning the freelancer payment problem into a fintech opportunity", date: "February 2026" },
  { outlet: "Forbes Middle East", title: "Meet the fintech giving Arab freelancers access to real US dollar accounts", date: "January 2026" },
  { outlet: "ArabNet", title: "Wasl's transparent fee model challenges the status quo in regional payments", date: "January 2026" },
  { outlet: "Menabytes", title: "Cairo-based Wasl raises pre-seed to build USD accounts for remote workers", date: "December 2025" },
];

const assets = [
  { preview: { text: "وصل", bg: "#0D0D0D", color: "#C9A84C", fontSize: "1.8rem" }, title: "Logo — Dark (PNG)", desc: "For use on light backgrounds. Includes Arabic and Latin mark." },
  { preview: { text: "وصل", bg: "#FAF7EF", color: "#0D0D0D", fontSize: "1.8rem" }, title: "Logo — Light (PNG)", desc: "For use on dark backgrounds." },
  { preview: { text: "SVG", bg: "#0D0D0D", color: "#C9A84C", fontSize: "1.8rem" }, title: "Logo — Vector (SVG)", desc: "Scalable format for all print and digital use." },
  { preview: { text: "Brand colors · Typography · Usage guide", bg: "#0D0D0D", color: "#aaa", fontSize: "0.9rem" }, title: "Brand guidelines (PDF)", desc: "Full brand standards including color, type, and do/don'ts." },
];

const boilerplate = `Wasl is a financial technology company building USD accounts for freelancers and remote workers across the Arab world and beyond. Wasl gives users a real US dollar account — complete with routing and account numbers — so they can receive payments from international clients and platforms like Upwork, Deel, and Fiverr without fees or delays. Wasl charges $0 to receive payments and a flat 0.4% to convert currencies. The company is currently in pre-launch with a waitlist of thousands of remote workers. Wasl is headquartered in [City] and is backed by [Investors].`;

export default function PressPage() {
  const handleCopy = () => {
    navigator.clipboard.writeText(boilerplate);
  };

  return (
    <main>

      {/* Hero */}
      <section style={{ background: "#0D0D0D", color: "white", padding: "7rem 5vw 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-2rem", top: "50%", transform: "translateY(-50%)", fontFamily: "serif", fontSize: "12rem", fontWeight: 700, color: "rgba(255,255,255,0.03)", lineHeight: 1, whiteSpace: "nowrap", pointerEvents: "none" }}>
          PRESS
        </div>
        <p style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.5rem" }}>
          Press & Media
        </p>
        <h1 style={{ fontFamily: "serif", fontSize: "clamp(2.8rem,5.5vw,4.5rem)", lineHeight: 1.08, maxWidth: 660, marginBottom: "1.5rem" }}>
          Resources for <em style={{ color: "#C9A84C", fontStyle: "italic" }}>journalists</em> and media.
        </h1>
        <p style={{ fontSize: "1.05rem", color: "#aaa", maxWidth: 500, fontWeight: 300 }}>
          Find everything you need to cover Wasl — our story, fast facts, media kit, boilerplate, and press contact.
        </p>
      </section>

      {/* Fast Facts */}
      <section style={{ padding: "5rem 5vw" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
          Fast facts
        </p>
        <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.15, marginBottom: 0 }}>
          Wasl at a <em style={{ color: "#C9A84C", fontStyle: "italic" }}>glance.</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 1, background: "#E8E2D0", marginTop: "2.5rem" }}>
          {facts.map((f) => (
            <div key={f.num} style={{ background: "#FAF7EF", padding: "2.5rem 2rem" }}>
              <div style={{ fontFamily: "serif", fontSize: "2.5rem", color: "#0D0D0D", lineHeight: 1 }}>{f.num}</div>
              <div style={{ fontSize: "0.82rem", color: "#6B6B6B", marginTop: "0.4rem" }}>{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Press Coverage */}
      <section style={{ background: "white", padding: "5rem 5vw" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
          In the press
        </p>
        <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.15, marginBottom: 0 }}>
          What people are <em style={{ color: "#C9A84C", fontStyle: "italic" }}>writing</em> about us.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 1, background: "#E8E2D0", marginTop: "2.5rem" }}>
          {coverage.map((c) => (
            <div key={c.title} style={{ background: "white", padding: "2rem", cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.background = "#FAF7EF"}
              onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.background = "white"}
            >
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "0.75rem", fontWeight: 500 }}>
                {c.outlet}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 500, lineHeight: 1.45, marginBottom: "0.75rem" }}>{c.title}</h3>
              <div style={{ fontSize: "0.8rem", color: "#6B6B6B" }}>{c.date}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Kit */}
      <section style={{ padding: "5rem 5vw" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
          Media kit
        </p>
        <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.15, marginBottom: "0.75rem" }}>
          Logos and <em style={{ color: "#C9A84C", fontStyle: "italic" }}>brand assets.</em>
        </h2>
        <p style={{ color: "#6B6B6B", maxWidth: 500 }}>
          Please follow our brand guidelines when using Wasl assets. Do not alter colors, proportions, or add effects.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem", marginTop: "2.5rem" }}>
          {assets.map((a) => (
            <div key={a.title} style={{ background: "white", border: "1px solid #E8E2D0", padding: "1.5rem" }}>
              <div style={{ background: a.preview.bg, height: 120, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", fontFamily: "serif", fontSize: a.preview.fontSize, color: a.preview.color, padding: "1rem", textAlign: "center", lineHeight: 1.6 }}>
                {a.preview.text}
              </div>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.3rem" }}>{a.title}</h3>
              <p style={{ fontSize: "0.8rem", color: "#6B6B6B", marginBottom: "1rem" }}>{a.desc}</p>
              <a href="#" style={{ display: "inline-block", border: "1px solid #E8E2D0", padding: "0.45rem 1rem", fontSize: "0.8rem", letterSpacing: "0.05em", cursor: "pointer", textDecoration: "none", color: "#0D0D0D", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#0D0D0D"; (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#0D0D0D"; }}
              >
                Download →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Boilerplate */}
      <section style={{ background: "#0D0D0D", padding: "4rem 5vw", color: "white" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
          Boilerplate
        </p>
        <h2 style={{ fontFamily: "serif", fontSize: "1.5rem", color: "white", marginBottom: "1rem" }}>
          Standard description for articles and releases.
        </h2>
        <div style={{ background: "#1A1A1A", border: "1px solid #333", padding: "2rem", fontSize: "0.9rem", color: "#ccc", lineHeight: 1.8, fontStyle: "italic", maxWidth: 700, position: "relative" }}>
          <button onClick={handleCopy}
            style={{ position: "absolute", top: "1rem", right: "1rem", background: "#C9A84C", color: "#0D0D0D", border: "none", padding: "0.4rem 0.85rem", fontSize: "0.78rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
            Copy
          </button>
          {boilerplate}
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: "5rem 5vw", display: "flex", gap: "5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
            Press contact
          </p>
          <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.15, marginBottom: "0.75rem" }}>
            Get in <em style={{ color: "#C9A84C", fontStyle: "italic" }}>touch.</em>
          </h2>
          <p style={{ color: "#6B6B6B", maxWidth: 420 }}>
            We aim to respond to all media inquiries within 24 hours. For urgent requests, please note "URGENT" in the subject line.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 260, display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { title: "Press enquiries", desc: "Interview requests, fact-checking, product questions, and media partnership enquiries.", email: "press@getwasl.com" },
            { title: "Partnership enquiries", desc: "Platform integrations, co-marketing, and business development.", email: "partnerships@getwasl.com" },
          ].map((c) => (
            <div key={c.title} style={{ background: "white", border: "1px solid #E8E2D0", padding: "2rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.5rem" }}>{c.title}</h3>
              <p style={{ fontSize: "0.87rem", color: "#6B6B6B", marginBottom: "1.25rem" }}>{c.desc}</p>
              <a href={`mailto:${c.email}`} style={{ color: "#C9A84C", fontSize: "0.9rem", textDecoration: "none" }}>{c.email} →</a>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}