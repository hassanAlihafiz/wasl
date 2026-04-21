"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need to live in the US to have a Wasl account?",
    a: "No. You can open and use Wasl as a non-US resident where our product is available. Requirements vary by region — we’ll guide you during signup.",
  },
  {
    q: "How are exchange rates calculated?",
    a: "We show a live reference rate plus any Wasl margin before you confirm. You’ll always see what you send, what you receive, and the rate used.",
  },
  {
    q: "How do you protect my account?",
    a: "We use industry-standard encryption, optional 2FA, device checks, and transaction monitoring. You can review more in our Security section.",
  },
  {
    q: "How long do transfers take?",
    a: "Many transfers complete within minutes; some routes or compliance checks may take longer. Estimated delivery is shown before you send.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center text-xl font-extrabold uppercase tracking-[0.2em] text-navy-900 sm:text-2xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-gray-200 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition hover:bg-gray-50/80 sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-navy-900">{item.q}</span>
                  <span
                    className="shrink-0 text-xl font-light leading-none text-navy-900"
                    aria-hidden
                  >
                    {isOpen ? "×" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-slate-500 sm:px-6 sm:text-base">
                    {item.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
