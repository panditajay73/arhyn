import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-content px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow mb-4">// about arhyn</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper leading-tight text-balance">
              We're not web developers. We're business problem-solvers who happen to write code.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-8">
          <Reveal delay={0.05}>
            <p className="text-dim text-lg leading-relaxed">
              Arhyn Technologies exists for a specific kind of business: the
              gym that still tracks memberships on paper, the clinic booking
              appointments over the phone, the restaurant with no online
              presence at all. Businesses that are good at what they do, but
              invisible — or inefficient — online.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-dim text-lg leading-relaxed">
              We build the website, the software, and the automation that
              closes that gap — then stay on to support it. Every engagement
              starts with the operational reality of the business, not a
              template.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <Reveal delay={0.18} className="rounded-2xl border border-line bg-ink-soft/50 p-6">
              <p className="eyebrow mb-2">Mission</p>
              <p className="text-paper text-sm leading-relaxed">
                Help offline businesses become digital-first, without losing
                what makes them work.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="rounded-2xl border border-line bg-ink-soft/50 p-6">
              <p className="eyebrow mb-2">Vision</p>
              <p className="text-paper text-sm leading-relaxed">
                A future where no small business is held back by outdated
                systems or manual, repetitive work.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
