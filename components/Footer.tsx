import BrandMark from "./BrandMark";
import { FaFacebookF, FaInstagram, FaThreads, FaTwitter, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const COLS: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "Product",
    links: [
      { label: "USD account", href: "#" },
      { label: "Wasl card", href: "#" },
      { label: "Platform payouts", href: "#" },
      { label: "Currency conversion", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/career" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "/help" },
      { label: "Security", href: "/security" },
      { label: "Legal", href: "/legal" },
      { label: "Status", href: "/status" },
    ],
  },
];

const SOCIALS = [
  { name: "Twitter", href: "https://twitter.com/your-handle", icon: FaTwitter },
  { name: "Instagram", href: "https://instagram.com/your-handle", icon: FaInstagram },
  { name: "Facebook", href: "https://facebook.com/your-page", icon: FaFacebookF },
  { name: "Threads", href: "https://www.threads.net/@your-handle", icon: FaThreads },
  { name: "X", href: "https://x.com/your-handle", icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="brand">
              <BrandMark height={60} width={170} />
            </Link>
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
            <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 999,
                      border: "1px solid rgba(128,120,87,0.35)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#807857",
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.title} className="foot-col">
              <h4>{c.title}</h4>
              {c.links.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
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
