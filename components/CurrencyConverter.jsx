"use client";

import { useMemo, useState } from "react";

const LIVE_RATE = 275.67;
const CURRENCIES = [
  { code: "PKR", flag: "🇵🇰" },
  { code: "LKR", flag: "🇱🇰" },
  { code: "EGP", flag: "🇪🇬" },
  { code: "BDT", flag: "🇧🇩" },
  { code: "AED", flag: "🇦🇪" },
  { code: "AFN", flag: "🇦🇫" },
  { code: "ALL", flag: "🇦🇱" },
  { code: "USD", flag: "🇺🇸" },
  { code: "GBP", flag: "🇬🇧" },
  { code: "EUR", flag: "🇪🇺" },
  { code: "CAD", flag: "🇨🇦" },
  { code: "INR", flag: "🇮🇳" },
  { code: "SAR", flag: "🇸🇦" },
  { code: "AUD", flag: "🇦🇺" },
];

function formatMoney(n) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CurrencyConverter() {
  const [send, setSend] = useState("500");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");

  const sendNum = parseFloat(send.replace(/,/g, "")) || 0;
  const receive = useMemo(
    () => sendNum * LIVE_RATE,
    [sendNum]
  );
  const selectedToCurrency = useMemo(
    () => CURRENCIES.find((currency) => currency.code === toCurrency) ?? CURRENCIES[0],
    [toCurrency]
  );
  const selectedFromCurrency = useMemo(
    () =>
      CURRENCIES.find((currency) => currency.code === fromCurrency) ??
      CURRENCIES.find((currency) => currency.code === "USD") ??
      CURRENCIES[0],
    [fromCurrency]
  );

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.07] p-6 shadow-glass backdrop-blur-2xl sm:p-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl" />

      <div className="relative space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-white/55">
            You send exactly
          </label>
          <div className="flex gap-2 rounded-2xl bg-navy-950/80 p-2 ring-1 ring-white/10">
            <input
              type="text"
              inputMode="decimal"
              value={send}
              onChange={(e) => {
                const v = e.target.value.replace(/[^0-9.]/g, "");
                setSend(v);
              }}
              className="min-w-0 flex-1 rounded-xl bg-transparent px-3 py-3 text-2xl font-semibold text-white outline-none placeholder:text-white/30"
              placeholder="0"
            />
            <div className="flex shrink-0 items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
              <span className="text-lg" aria-hidden>
                {selectedFromCurrency.flag}
              </span>
              <select
                aria-label="From currency"
                className="cursor-pointer bg-transparent text-sm font-semibold text-white outline-none"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {CURRENCIES.map((currency) => (
                  <option key={currency.code} className="bg-navy-900" value={currency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-1.5 rounded-2xl bg-black/25 px-4 py-3 text-sm ring-1 ring-white/5">
          <p className="font-semibold text-emerald-400">+ $2.00 Reward</p>
          <p className="text-white/60">
            <span className="text-white/80">× $1.00</span> = PKR{" "}
            <span className="font-medium text-white">{LIVE_RATE.toFixed(2)}</span>{" "}
            <span className="text-white/45">Live rate</span>
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/55">
            You&apos;ll receive
          </label>
          <div className="flex gap-2 rounded-2xl bg-navy-950/80 p-2 ring-1 ring-white/10">
            <div className="flex min-w-0 flex-1 items-center rounded-xl px-3 py-3 text-2xl font-semibold text-white">
              {formatMoney(receive)}
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
              <span className="text-lg" aria-hidden>
                {selectedToCurrency.flag}
              </span>
              <select
                aria-label="To currency"
                className="cursor-pointer bg-transparent text-sm font-semibold text-white outline-none"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {CURRENCIES.map((currency) => (
                  <option key={currency.code} className="bg-navy-900" value={currency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="w-full rounded-2xl bg-white py-4 text-base font-bold text-navy-900 shadow-lg transition hover:bg-white/95 active:scale-[0.99]"
        >
          Get this rate
        </button>
      </div>
    </div>
  );
}