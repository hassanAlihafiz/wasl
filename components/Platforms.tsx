import { ArrowRight } from "lucide-react";

const PLATFORMS: Array<{ num: string; name: string; tag: string }> = [
  { num: "01", name: "Upwork", tag: "MILESTONES · HOURLY" },
  { num: "02", name: "Deel", tag: "EOR · CONTRACTOR" },
  { num: "03", name: "Fiverr", tag: "GIGS · PROJECTS" },
  { num: "04", name: "Toptal", tag: "LONG-TERM" },
  { num: "05", name: "Direct wire", tag: "ACH · SWIFT" },
];

export default function Platforms() {
  return (
    <section id="platforms" style={{ paddingTop: 20 }}>
      <div className="container">
        <div className="platforms-wrap">
          <div className="platforms-grid">
            <div className="platforms-left">
              <div className="sec-kicker">
                <span className="num" style={{ color: "var(--yellow)" }}>
                  02 / PLATFORMS
                </span>
                <span className="line" style={{ background: "rgba(255,255,255,.15)" }}></span>
              </div>
              <h2>
                Works with
                <br />
                where you <em>already
                <br />
                get paid.</em>
              </h2>
              <p>
                Whether your clients pay through global freelancing platforms, payroll tools, or
                direct wire — Wasl sits in the middle so the dollars end up in your pocket.
              </p>
              <div className="ar">ربطك بأكثر من ١٨٠ دولة.</div>
            </div>
            <div className="platform-list">
              {PLATFORMS.map((p) => (
                <a key={p.num} href="#" className="platform-row">
                  <span className="num">{p.num}</span>
                  <span className="name">{p.name}</span>
                  <span className="tag">{p.tag}</span>
                  <span className="arrow"><ArrowRight size={14}  /></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
