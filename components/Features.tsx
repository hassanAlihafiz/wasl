export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="sec-kicker">
              <span className="num">03 / YOUR ACCOUNT</span>
              <span className="line"></span>
            </div>
            <h2>
              Built around
              <br />
              how freelancers <em>actually
              <br />
              get paid.</em>
            </h2>
          </div>
          <p>
            A real USD account — not a wallet — with routing and account numbers you can hand to
            any payer. Plus the tools to hold, spend, and convert on your terms.
          </p>
        </div>

        <div className="features">
          <div className="f big">
            <div className="f-top">
              <div className="mono" style={{ color: "var(--ink-2)", opacity: 0.7 }}>
                MID-MARKET FX
              </div>
              <h3>Convert at rates you can actually verify.</h3>
              <p>
                We show the mid-market rate, the spread, and our fee — line by line. No hidden
                markup tucked into the exchange rate.
              </p>
            </div>
            <div className="rate-vis">
              {[30, 45, 38, 60, 52, 78, 68, 90, 82, 100].map((h, i) => (
                <div key={i} className="bar" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          <div className="f med">
            <div className="f-top">
              <div className="mono">US ROUTING + ACCOUNT #</div>
              <h3>Your own US details.</h3>
              <p>A real USD account number and routing number — payable by ACH, wire, or platform payout.</p>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--muted)",
                background: "var(--bg-2)",
                padding: "12px 14px",
                borderRadius: 10,
              }}
            >
              ROUTING · 02608••••
              <br />
              ACCOUNT · 48120024••••
            </div>
          </div>

          <div className="f small">
            <div className="f-top">
              <div className="mono">GLOBAL</div>
              <h3>Paid from 180+ countries.</h3>
            </div>
            <div className="currency-chips">
              <span className="chip on">USD</span>
              <span className="chip">EUR</span>
              <span className="chip">GBP</span>
              <span className="chip">AED</span>
              <span className="chip">SAR</span>
              <span className="chip">PKR</span>
              <span className="chip">INR</span>
              <span className="chip">EGP</span>
              <span className="chip">+32</span>
            </div>
          </div>

          <div className="f small">
            <div className="f-top">
              <div className="mono">CARD</div>
              <h3>Spend USD directly.</h3>
              <p>Virtual and physical Wasl card.</p>
            </div>
            <div
              style={{
                height: 80,
                background: "linear-gradient(135deg,var(--ink) 0%,#2A2518 100%)",
                borderRadius: 10,
                padding: 12,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--yellow)",
                  letterSpacing: ".08em",
                }}
              >
                WASL · USD
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 12,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#D4CBA9",
                }}
              >
                •••• 4812
              </div>
              <div
                style={{
                  position: "absolute",
                  right: -14,
                  bottom: -14,
                  width: 60,
                  height: 60,
                  border: "1px solid rgba(245,197,24,.3)",
                  transform: "rotate(45deg)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  right: -4,
                  bottom: -4,
                  width: 40,
                  height: 40,
                  border: "1px solid rgba(245,197,24,.4)",
                  transform: "rotate(45deg)",
                }}
              ></div>
            </div>
          </div>

          <div className="f wide dark">
            <div className="f-top">
              <div className="mono" style={{ color: "#807857" }}>
                FEES · TRANSPARENT
              </div>
              <h3 style={{ color: "var(--bg)" }}>Free to receive. Fair to convert. Nothing hidden.</h3>
              <p>
                Incoming USD payments arrive fee-free. Conversions use the mid-market rate plus a
                flat 0.4% — clearly shown before you confirm. No monthly fees. No minimums. No
                surprises.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 24,
                paddingTop: 24,
                borderTop: "1px solid rgba(255,255,255,.08)",
              }}
            >
              {[
                ["$0", "to receive"],
                ["0.4%", "to convert"],
                ["$0", "monthly fee"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="serif" style={{ fontSize: 36, color: "var(--yellow)" }}>
                    {v}
                  </div>
                  <div className="mono" style={{ color: "#807857" }}>
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="f med">
            <div className="f-top">
              <div className="mono">INSTANT</div>
              <h3>Payout the same day.</h3>
              <p>
                ACH payments typically land within hours. Wire transfers settle same-day. Platform
                payouts flow straight through.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "var(--bg-2)",
                padding: "12px 14px",
                borderRadius: 10,
              }}
            >
              <div
                style={{ width: 8, height: 8, borderRadius: "50%", background: "#1F7A3A" }}
              ></div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-2)" }}>
                UPWORK · Released 2h ago ·{" "}
                <span style={{ color: "#1F7A3A" }}>+$1,840</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
