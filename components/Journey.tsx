"use client";

import Reveal from "./Reveal";
import { getData } from "@/lib/getData";
import { useTranslation } from "react-i18next";

export default function Journey() {
  const { i18n, t } = useTranslation();
  const { journey } = getData(i18n.resolvedLanguage ?? i18n.language);

  return (
    <section className="py-28 md:py-36 border-t border-line bg-ink-soft/20">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="max-w-2xl mb-20">
          <p className="eyebrow mb-4">{t("journeySection.eyebrow")}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper text-balance">
            {t("journeySection.title")}
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-line md:-translate-x-1/2" />
          <ol className="space-y-10 md:space-y-0">
            {journey.map((j, i) => {
              const leftSide = i % 2 === 0;
              return (
                <li key={j.step} className="relative md:grid md:grid-cols-2 md:gap-16 md:py-8">
                  <Reveal
                    className={`pl-10 md:pl-0 ${leftSide ? "md:text-right md:col-start-1" : "md:col-start-2"}`}
                  >
                    <div className={`md:max-w-md ${leftSide ? "md:ml-auto" : ""}`}>
                      <span className="font-mono text-xs text-amber">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-paper mt-2 mb-1.5">
                        {j.step}
                      </h3>
                      <p className="text-sm text-dim leading-relaxed">{j.detail}</p>
                    </div>
                  </Reveal>
                  <span
                    className="absolute left-[9px] md:left-1/2 top-1.5 h-3.5 w-3.5 rounded-full bg-ink border-2 border-amber md:-translate-x-1/2"
                    aria-hidden="true"
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
