import Reveal from "./Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">// what we build</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper text-balance">
            Fifteen ways to close the gap between an offline business and a digital one.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06} className="h-full">
              <article className="card-glow group h-full rounded-2xl border border-line bg-ink-soft/40 p-6 flex flex-col">
                <h3 className="font-display text-lg font-semibold text-paper mb-4">
                  {s.title}
                </h3>

                <div className="space-y-3 text-sm flex-1">
                  <p>
                    <span className="font-mono text-[0.68rem] tracking-wide text-wire uppercase">Problem — </span>
                    <span className="text-dim">{s.problem}</span>
                  </p>
                  <p>
                    <span className="font-mono text-[0.68rem] tracking-wide text-amber uppercase">Solution — </span>
                    <span className="text-dim">{s.solution}</span>
                  </p>
                  <p>
                    <span className="font-mono text-[0.68rem] tracking-wide text-paper/70 uppercase">Impact — </span>
                    <span className="text-dim">{s.benefit}</span>
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-line flex flex-wrap gap-2">
                  {s.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-2.5 py-1 text-[0.68rem] font-mono text-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
