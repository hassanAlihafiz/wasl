import BrandMark from "./BrandMark";

const COLS: Array<{ title: string; links: string[] }> = [
  { title: "Product", links: ["USD account", "Wasl card", "Platform payouts", "Currency conversion"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Support", links: ["Help center", "Security", "Legal", "Status"] },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#" className="brand">
              <BrandMark height={60} width={170} />
            </a>
            <p>
              A USD account for remote workers and freelancers — globally. Built with a Wasl between
              cultures, currencies, and the people who move between them.
            </p>
            <div
              className="ar"
              style={{ color: "#807857", fontSize: 14, marginTop: 4 }}
            >
              وصل · الرابط بين المال والناس.
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.title} className="foot-col">
              <h4>{c.title}</h4>
              {c.links.map((l) => (
                <a key={l} href="#">
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2026 WASL FINANCIAL · ALL RIGHTS RESERVED</span>
          <span>MADE WITH CARE · بكل ود</span>
        </div>
      </div>
    </footer>
  );
}
