import Reveal from "./Reveal";
import { industries } from "@/lib/data";

export default function Industries() {
  return (
    <section id="industries" className="py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">// industries we help</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper text-balance">
            Different shopfronts. The same broken back office.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 0.06}>
              <article className="card-glow rounded-2xl border border-line p-6 h-full">
                <h3 className="font-display text-lg font-semibold text-paper mb-4">
                  {ind.name}
                </h3>
                <p className="text-sm text-dim mb-3">
                  <span className="text-wire font-mono text-[0.68rem] uppercase tracking-wide">Common problem — </span>
                  {ind.problems}
                </p>
                <p className="text-sm text-dim">
                  <span className="text-amber font-mono text-[0.68rem] uppercase tracking-wide">How we help — </span>
                  {ind.solution}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
