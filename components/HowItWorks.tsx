import { ArrowRight, Check, Plus } from "lucide-react";

interface Step {
  n: string;
  title: string;
  body: string;
  gold?: boolean;
  icon: React.ReactNode;
}

const STEPS: Step[] = [
  {
    n: "STEP 01",
    title: "Open in 6 minutes",
    body: "Download Wasl, snap your ID, and verify with a selfie. Your USD account details are ready before your coffee is.",
    icon: (
      <Plus size={14} aria-hidden />
    ),
  },
  {
    n: "STEP 02",
    title: "Connect your clients",
    body: "Share your Wasl USD details with clients, or link platforms like Upwork, Deel, Fiverr, and Toptal in one tap.",
    gold: true,
    icon: (
      <Check size={14} aria-hidden />
    ),
  },
  {
    n: "STEP 03",
    title: "Spend or convert",
    body: "Hold dollars, spend with your Wasl card, or convert to your local currency at a fair, transparent FX rate.",
    icon: (
      <ArrowRight size={14} aria-hidden />
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-kicker">
              <span className="num">01 / HOW IT WORKS</span>
              <span className="line"></span>
            </div>
            <h2>
              Three steps
              <br />
              to a <em>USD account.</em>
            </h2>
          </div>
          <p>
            No paperwork flown to a bank branch. No wire-transfer roulette. Sign up with your phone,
            verify once, and start receiving international payments the same day.
          </p>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div key={s.n} className={`step${s.gold ? " gold" : ""}`}>
              <div className="step-icon">{s.icon}</div>
              <div className="step-n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
