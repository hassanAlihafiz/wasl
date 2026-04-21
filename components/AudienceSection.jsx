"use client";

import { useState } from "react";

const audiences = [
  {
    id: "remote",
    label: "Remote Workers",
    title: "Remote Workers",
    body: "Built for remote life — get paid in USD or EUR and cash out locally without the usual friction. One flow, clear fees.",
    icon: "globe",
  },
  {
    id: "freelancers",
    label: "Freelancers",
    title: "Freelancers",
    body: "Receive USD from Upwork, Fiverr, or bank transfer. You keep every cent — no fees for receiving income.",
    icon: "person",
  },
  {
    id: "founders",
    label: "Founders",
    title: "Founders",
    body: "Move capital across borders when you need to scale beyond borders. Transparent rates and a dashboard that stays out of your way.",
    icon: "rocket",
  },
];

function TabIcon({ type, active }) {
  const ring = active
    ? "bg-brand-blue text-white ring-2 ring-brand-blue/40"
    : "bg-white text-navy-700 ring-1 ring-gray-200";

  if (type === "globe") {
    return (
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${ring}`}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9 9 0 100-18 9 9 0 000 18z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18"
          />
        </svg>
      </span>
    );
  }
  if (type === "person") {
    return (
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${ring}`}
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 1114 0H5z" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${ring}`}
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 10-7.22 0M12 21v-4m0 0l-2 2m2-2l2 2"
        />
      </svg>
    </span>
  );
}

export default function AudienceSection() {
  const [activeId, setActiveId] = useState("freelancers");

  return (
    <section
      id="roadmap"
      className="relative scroll-mt-24 overflow-hidden bg-[#f4f6fa] py-20"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,rgba(15,23,40,0.06)_1px,transparent_1px)] bg-[length:48px_100%] opacity-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(90deg,rgba(15,23,40,0.06)_1px,transparent_1px)] bg-[length:48px_100%] opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight text-navy-800 sm:text-4xl md:text-5xl">
          For the ones who work different
        </h2>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm">
          {audiences.map((a) => {
            const active = a.id === activeId;
            return (
              <button
                key={a.id}
                type="button"
                onClick={() => setActiveId(a.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition sm:text-base ${
                  active
                    ? "bg-white text-navy-800 shadow-md ring-1 ring-gray-100"
                    : "text-navy-600 hover:bg-gray-50"
                }`}
              >
                <TabIcon type={a.icon} active={active} />
                {a.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:items-stretch">
          {audiences.map((a) => {
            const active = a.id === activeId;
            return (
              <article
                key={a.id}
                className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 md:min-h-[280px] ${
                  active
                    ? "z-10 border-transparent bg-navy-700 text-white shadow-2xl md:-translate-y-2 md:scale-[1.02]"
                    : "border-gray-200 bg-white text-navy-800 opacity-90 md:scale-95"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <TabIcon type={a.icon} active={active} />
                  <h3 className="text-xl font-bold">{a.title}</h3>
                </div>
                <p
                  className={`flex-1 text-base leading-relaxed ${
                    active ? "text-white/85" : "text-gray-600"
                  }`}
                >
                  {a.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}