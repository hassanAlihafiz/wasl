import WaslMark from "./WaslMark";

/** Same ambient glow layers as the hero (`app/page.js`) for a consistent brand strip. */
function HeroGlowLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div className="absolute left-1/2 top-[-35%] h-[min(90%,420px)] w-[min(140%,720px)] -translate-x-1/2 rounded-full bg-brand-blue/30 blur-[100px]" />
      <div className="absolute right-[-15%] top-[15%] h-[280px] w-[280px] rounded-full bg-indigo-500/25 blur-[90px] sm:h-[360px] sm:w-[360px]" />
      <div className="absolute bottom-[-20%] left-[15%] h-[220px] w-[220px] rounded-full bg-blue-400/10 blur-[80px]" />
    </div>
  );
}

function OutlineStoreButton({ href, icon, small, title }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/5 px-5 py-2.5 text-left backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10 sm:px-6 sm:py-3"
    >
      {icon}
      <span>
        <span className="block text-[10px] uppercase tracking-wide text-white/70">
          {small}
        </span>
        <span className="block text-sm font-semibold text-white sm:text-base">{title}</span>
      </span>
    </a>
  );
}

export default function BottomCtaBanner() {
  return (
    <section className="relative pb-12 pt-10 md:pb-16 md:pt-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black  text-center shadow-2xl md:rounded-[2.5rem]">
          <HeroGlowLayer />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />0
          <div className="relative z-10 px-6 py-14 md:px-12 md:py-16">
            <div className="flex items-center justify-center gap-2.5">
              <WaslMark className="h-9 w-9 sm:h-10 sm:w-10" />
              <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">Wasl</span>
            </div>
            <h2 className="mt-8 max-w-4xl mx-auto text-3xl font-extrabold uppercase leading-tight tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl">
              Your passport to global hustle
            </h2>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
              <OutlineStoreButton
                href="#"
                small="Download on the"
                title="App Store"
                icon={
                  <svg className="h-7 w-7 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                }
              />
              <OutlineStoreButton
                href="#"
                small="Get it on"
                title="Google Play"
                icon={
                  <svg className="h-7 w-7 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.737l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}