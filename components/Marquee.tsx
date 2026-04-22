const ITEMS: Array<[string, string]> = [
  ["Receive from Upwork", "NO FEE"],
  ["Paid by Deel", "SAME DAY"],
  ["Fiverr payouts", "AUTO"],
  ["Toptal contracts", "USD"],
  ["Direct wire", "ACH · SWIFT"],
  ["Stripe Connect", "INSTANT"],
  ["PayPal bridge", "USD"],
];

function Row() {
  return (
    <>
      {ITEMS.map(([a, b], i) => (
        <div key={`${a}-${i}`} style={{ display: "contents" }}>
          <div className="marquee-item">
            <span>{a}</span>
            <span className="tag">· {b} ·</span>
          </div>
          <div className="marquee-item marquee-star">◆</div>
        </div>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-inner">
        <Row />
        <Row />
      </div>
    </div>
  );
}
