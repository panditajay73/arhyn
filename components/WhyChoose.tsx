import Reveal from "./Reveal";
import { whyChoose } from "@/lib/data";
import {
  Zap, Layers, Sparkles, Building2, Cloud,
  Search, ShieldCheck, Smartphone, LifeBuoy, Wrench,
} from "lucide-react";

const icons = [Zap, Layers, Sparkles, Building2, Cloud, Search, ShieldCheck, Smartphone, LifeBuoy, Wrench];

export default function WhyChoose() {
  return (
    <section className="py-28 md:py-36 border-t border-line bg-ink-soft/20">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">// why arhyn</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper text-balance">
            Built for businesses that need it to actually work.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {whyChoose.map((w, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={w.title} delay={(i % 5) * 0.05} className="bg-ink p-6 h-full">
                <Icon size={20} className="text-amber mb-4" strokeWidth={1.6} />
                <h3 className="text-paper font-medium text-sm mb-1.5">{w.title}</h3>
                <p className="text-dim text-xs leading-relaxed">{w.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
