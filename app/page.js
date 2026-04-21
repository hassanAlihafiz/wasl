import AudienceSection from "../components/AudienceSection";
import BottomCtaBanner from "../components/BottomCtaBanner";
import CurrencyConverter from "../components/CurrencyConverter";
import FaqAccordion from "../components/FaqAccordion";
import PressMarquee from "../components/PressMarquee";
import SecuritySection from "../components/SecuritySection";
import SiteFooter from "../components/SiteFooter";
import SponsorBankSection from "../components/SponsorBankSection";
import WaslMark from "../components/WaslMark";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#business", label: "Business" },
  { href: "#roadmap", label: "Feature Roadmap" },
];

function AppStoreBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 rounded-2xl border border-white/25 bg-black px-5 py-3 text-left transition hover:border-white/40"
    >
      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span>
        <span className="block text-[10px] uppercase tracking-wide text-white/70">
          Download on the
        </span>
        <span className="block text-lg font-semibold leading-tight text-white">
          App Store
        </span>
      </span>
    </a>
  );
}

function PlayBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 rounded-2xl border border-white/25 bg-black px-5 py-3 text-left transition hover:border-white/40"
    >
      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.737l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
      </svg>
      <span>
        <span className="block text-[10px] uppercase tracking-wide text-white/70">
          Get it on
        </span>
        <span className="block text-lg font-semibold leading-tight text-white">
          Google Play
        </span>
      </span>
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-navy-900 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-10%] h-[min(80vw,720px)] w-[min(120vw,960px)] -translate-x-1/2 rounded-full bg-brand-blue/30 blur-[100px]" />
          <div className="absolute right-[-10%] top-1/4 h-[420px] w-[420px] rounded-full bg-indigo-500/25 blur-[90px]" />
          <div className="absolute bottom-0 left-1/4 h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-[80px]" />
        </div>

        <div className="relative z-20 px-4 pt-6 sm:px-6 lg:px-8">
          <nav
            className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.14] px-4 py-3 shadow-nav backdrop-blur-xl sm:px-6"
            aria-label="Main"
          >
            <a href="#" className="flex items-center gap-2.5">
              <WaslMark className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
              <span className="text-lg font-bold tracking-tight">Wasl</span>
            </a>
            <div className="-mx-2 flex max-w-[55vw] flex-1 items-center justify-center gap-5 overflow-x-auto px-2 sm:max-w-none md:gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="shrink-0 text-xs font-semibold text-white/90 transition hover:text-white sm:text-sm"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href="#download"
              className="shrink-0 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-bold text-white shadow-cta transition hover:bg-blue-600"
            >
              Download App
            </a>
          </nav>
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pt-20">
          <div id="about" className="relative scroll-mt-28">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue/90">
              Global money, simplified
            </p>
            <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">Your</span>{" "}
              <span className="text-white/45">passport</span>{" "}
              <span className="text-white">to</span>{" "}
              <span className="text-white/45">global</span>{" "}
              <span className="text-white">earnings</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Send and convert with live rates you can trust. Wasl keeps fees
              transparent and your transfers moving — whether you&apos;re
              freelancing, remote, or building a company.
            </p>
            <div id="download" className="mt-8 flex flex-wrap gap-4">
              <AppStoreBadge />
              <PlayBadge />
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div
              className="pointer-events-none absolute -right-8 top-1/2 -z-10 hidden h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-y-1/2 opacity-[0.07] lg:block"
              aria-hidden
            >
              <WaslMark className="h-full w-full text-white [&_path]:stroke-white [&_rect]:stroke-white" />
            </div>
            <CurrencyConverter />
          </div>
        </div>
      </div>

      <PressMarquee />

      <AudienceSection />

      <SecuritySection />

      <SponsorBankSection />

      <FaqAccordion />

      <BottomCtaBanner />

      <SiteFooter />
    </>
  );
}