"use client";

import { useEffect, useState } from "react";

const START = 12480.24;
const TICK_MS = 10_000;
/** Each tick adds a small plausible “deposit” for the demo */
const MIN_STEP = 75;
const MAX_STEP = 420;

function splitBalance(value: number): { whole: string; frac: string } {
  const s = value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const i = s.lastIndexOf(".");
  return { whole: s.slice(0, i), frac: s.slice(i) };
}

export default function AccountCard() {
  const [balance, setBalance] = useState(START);

  useEffect(() => {
    const id = window.setInterval(() => {
      setBalance((prev) => {
        const step = MIN_STEP + Math.random() * (MAX_STEP - MIN_STEP);
        return Math.round((prev + step) * 100) / 100;
      });
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  const { whole, frac } = splitBalance(balance);

  return (
    <div className="account-card-wrap">
      <div className="ticker-2">
        <span className="pulse"></span>
        <span>Payment incoming from Deel · 00:14</span>
      </div>
      <div className="account-card">
        <div className="ac-top">
          <div className="ac-label">
            <div className="mono">USD Account · Wasl</div>
            <div className="name">Amira Hassan</div>
          </div>
          <div className="ac-chip">•••• 4812</div>
        </div>
        <div className="ac-balance">
          <div className="mono">Available balance</div>
          <div className="amount">
            ${whole}
            <span className="cents">{frac}</span>
          </div>
          <div className="subline">
            <span className="up">↑ $3,200</span> received this week
          </div>
        </div>
        <div className="ac-footer">
          <div className="ac-stat">
            <div className="mono">This month</div>
            <div className="v">$8.2k</div>
          </div>
          <div className="ac-stat">
            <div className="mono">Platforms</div>
            <div className="v">4</div>
          </div>
          <div className="ac-stat">
            <div className="mono">Avg. fee</div>
            <div className="v">0.4%</div>
          </div>
        </div>
      </div>
      <div className="ticker">
        <div className="ticker-icon">U</div>
        <div>
          <div className="t1">Upwork · Milestone released</div>
          <div className="t2">Brand design sprint · Wk 12</div>
        </div>
        <div className="amt">+$1,840</div>
      </div>
    </div>
  );
}
