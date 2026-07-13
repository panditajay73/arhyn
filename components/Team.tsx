import Reveal from "./Reveal";
import { team } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  return (
    <div className="relative h-16 w-16 rounded-full border border-line bg-ink-raised flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(111,168,160,0.35)_1px,transparent_1px)] [background-size:10px_10px]" />
      <span className="font-display text-lg font-semibold text-paper z-10">{initials}</span>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-28 md:py-36 border-t border-line bg-ink-soft/20">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">// the studio</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper text-balance">
            Three engineers. One studio. No middlemen.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
  {team.map((m, i) => (
    <Reveal key={m.name} delay={i * 0.08}>
      <a
        href={m.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="card-glow group block h-full rounded-2xl border border-line p-6"
      >
        <div className="mb-5 flex items-start justify-between">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border border-line">
            <Image
              src={m.image}
              alt={m.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <ArrowUpRight
            size={16}
            className="text-dim transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber"
          />
        </div>

        <h3 className="font-display text-lg font-semibold text-paper">
          {m.name}
        </h3>

        <p className="mb-4 text-sm text-dim">{m.role}</p>

        <div className="flex flex-wrap gap-2">
          {m.focus.map((f) => (
            <span
              key={f}
              className="rounded-full border border-line px-2.5 py-1 text-[0.68rem] font-mono text-dim"
            >
              {f}
            </span>
          ))}
        </div>
      </a>
    </Reveal>
  ))}
</div>
      </div>
    </section>
  );
}
