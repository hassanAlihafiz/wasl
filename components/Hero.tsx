"use client";

import { useEffect, useState } from "react";
import AccountCard from "./AccountCard";
import WaitlistForm from "./WaitlistForm";
import { HEADLINES, TWEAK_DEFAULTS, type HeadlineKey } from "@/lib/tweaks";

export default function Hero() {
  // Start from the default; TweaksPanel updates CSS vars + dispatches a custom
  // event whenever the user changes the headline choice.
  const [key, setKey] = useState<HeadlineKey>(TWEAK_DEFAULTS.headline as HeadlineKey);

  useEffect(() => {
    const onTweak = (e: Event) => {
      const detail = (e as CustomEvent<{ headline?: HeadlineKey }>).detail;
      if (detail?.headline) setKey(detail.headline);
    };
    window.addEventListener("wasl:tweak", onTweak as EventListener);
    return () => window.removeEventListener("wasl:tweak", onTweak as EventListener);
  }, []);

  const hl = HEADLINES[key] ?? HEADLINES.dollars;

  return (
    <header className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">
            <span className="dot"></span> USD accounts · coming soon for remote workers
          </span>
          <h1 className="display">
            <span dangerouslySetInnerHTML={{ __html: hl.main }} />
            <span
              className="ar-inline"
              style={{ display: "block", fontSize: ".62em", marginTop: 14 }}
            >
              {hl.ar}
            </span>
          </h1>
          <p className="hero-sub">
            Wasl opens a real USD account for freelancers and remote workers — so you can receive
            payments from international employers and platforms like Upwork, Deel and Fiverr,
            without the fees or the waiting.
          </p>
          <WaitlistForm id="waitlist" />
          <div className="hero-trust">
            <span>🔒 Bank-grade security</span>
            <span className="divider"></span>
            <span>Free to join · No spam</span>
            <span className="divider"></span>
            <span>Early access in weeks, not months</span>
          </div>
        </div>
        <AccountCard />
      </div>
    </header>
  );
}
