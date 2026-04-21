const PRESS_LOGOS = ["Forbes", "The Nation", "E27", "Dawn", "The Daily Star", "Esquire"];

export default function PressMarquee() {
  return (
    <section id="blog" className="scroll-mt-24 border-t border-gray-100 bg-white py-16 dark:border-white/10 dark:bg-navy-950">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-xl font-extrabold uppercase tracking-[0.25em] text-navy-800 dark:text-white sm:text-2xl">
          As seen on
        </h2>

        <div className="press-marquee relative mt-10 overflow-hidden rounded-2xl border border-gray-100/80 bg-white/80 py-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.03] sm:py-5">
          <div className="press-track flex w-max min-w-full shrink-0 items-center gap-8 whitespace-nowrap px-2 sm:gap-12 lg:gap-16">
            {[...PRESS_LOGOS, ...PRESS_LOGOS].map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="inline-flex h-9 items-center text-sm font-bold uppercase tracking-[0.16em] text-gray-500 grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100 dark:text-white/70 sm:h-10 sm:text-base lg:h-12 lg:text-lg"
              >
                {name}
              </span>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent dark:from-navy-950 sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent dark:from-navy-950 sm:w-24" />
        </div>

        <p className="mt-8 text-center text-xs text-gray-400 dark:text-white/40">
          Logos shown as placeholders — swap for your press assets.
        </p>
      </div>
    </section>
  );
}
