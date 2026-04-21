export default function SponsorBankSection() {
  return (
    <section id="business" className="bg-[#eef0f8] pb-20 pt-4 md:pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-lg md:grid-cols-2 md:rounded-[2.5rem]">
          <div className="flex min-h-[240px] items-center justify-center bg-[#0b0b22] px-8 py-14 md:min-h-[320px]">
            <div className="text-center font-serif text-amber-100/95">
              <p className="text-4xl font-bold tracking-tight md:text-5xl">PB</p>
              <p className="mt-3 max-w-[14rem] text-xs font-semibold uppercase leading-snug tracking-[0.2em] md:text-sm">
                Partner Bank
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16">
            <h2 className="text-xl font-extrabold uppercase leading-tight tracking-wide text-[#0b0b22] md:text-2xl">
              Our trusted sponsor bank
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
              Wasl partners with a regulated financial institution so freelancers and
              remote workers can access reliable banking rails, transparent settlement,
              and safeguards you expect from an established bank — without losing the
              speed of a modern product.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex w-fit rounded-full bg-[#2d41f5] px-8 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              More about our bank
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}