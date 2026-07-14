"use client";

import Reveal from "./Reveal";
import { getData } from "@/lib/getData";
import {
  Zap, Layers, Sparkles, Building2, Cloud,
  Search, ShieldCheck, Smartphone, LifeBuoy, Wrench,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Zap, Layers, Sparkles, Building2, Cloud, Search, ShieldCheck, Smartphone, LifeBuoy, Wrench];

export default function WhyChoose() {
  const { i18n, t } = useTranslation();
  const { whyChoose } = getData(i18n.resolvedLanguage ?? i18n.language);

  return (
    <section className="py-28 md:py-36 border-t border-line bg-ink-soft/20">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">{t("whyChoose.eyebrow")}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper text-balance">
            {t("whyChoose.title")}
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
