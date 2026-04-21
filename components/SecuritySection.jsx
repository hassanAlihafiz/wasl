const items = [
  {
    title: "Encryption",
    body: "AES 256-bit encryption and SSL/TLS 1.2 guarantees the highest level of data protection in transit.",
    icon: "app/images/encryption.svg",
  },
  {
    title: "Fraud Protection",
    body: "Rest easy with 2FA for logins, OTPs for transactions, and advanced real-time fraud protection keeping your funds secure.",
    icon: "fraud",
  },
  {
    title: "Privacy Policy",
    body: "Your data is safe with us, guarded by the best security practices available. Check our privacy policy to learn more.",
    icon: "privacy",
  },
];

function FeatureIcon({ type }) {
  if (type === "binary") {
    return (
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-mono font-bold leading-tight text-navy-800">
        10
        <br />
        01
      </span>
    );
  }
  if (type === "fraud") {
    return (
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-navy-800">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
          />
        </svg>
      </span>
    );
  }
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-navy-800">
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    </span>
  );
}

function ShieldGraphic() {
  return (
    <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-slate-950 via-[#0a0f1c] to-black p-8 md:min-h-full">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.35),transparent_55%)]" />
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-blue-400/20"
          style={{
            width: `${7 + i * 3.5}rem`,
            height: `${7 + i * 3.5}rem`,
            transform: `translate(-50%, -50%) rotate(${i * 8}deg)`,
          }}
        />
      ))}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex h-28 w-24 items-center justify-center rounded-[1.75rem] bg-gradient-to-b from-blue-400/90 to-blue-700 shadow-[0_0_60px_rgba(59,130,246,0.5)]">
          <svg className="h-14 w-14 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path
              fillRule="evenodd"
              d="M12 1.586l7 3.5v5.5c0 5.55-3.84 10.74-7 11.914-3.16-1.174-7-6.364-7-11.914V5.086l7-3.5zM12 3.234L6.5 5.986v4.6c0 4.56 3.22 8.76 5.5 9.85 2.28-1.09 5.5-5.29 5.5-9.85v-4.6L12 3.234zm2.5 5.766a2.5 2.5 0 00-5 0V12a2.5 2.5 0 005 0V9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function SecuritySection() {
  return (
    <section id="security" className="bg-[#eef0f8] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-extrabold uppercase leading-tight tracking-wide text-navy-800 sm:text-3xl md:text-4xl">
          Industry-leading security for your earnings
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-gray-600 md:text-lg">
          Your transactions are protected with state-of-the-art security measures,
          ensuring peace of mind with every transaction.
        </p>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] bg-white shadow-lg md:grid-cols-2 md:rounded-[2.5rem]">
          <div className="space-y-10 p-8 md:p-12 lg:p-14">
            {items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <FeatureIcon type={item.icon} />
                <div>
                  <h3 className="text-lg font-bold text-navy-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 md:text-base">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 md:p-6 md:pl-0">
            <ShieldGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}