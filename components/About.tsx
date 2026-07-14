"use client";

import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-content px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow mb-4">{t("about.eyebrow")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper leading-tight text-balance">
              {t("about.title")}
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-8">
          <Reveal delay={0.05}>
            <p className="text-dim text-lg leading-relaxed">
              {t("about.bodyOne")}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-dim text-lg leading-relaxed">
              {t("about.bodyTwo")}
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <Reveal delay={0.18} className="rounded-2xl border border-line bg-ink-soft/50 p-6">
              <p className="eyebrow mb-2">{t("about.missionTitle")}</p>
              <p className="text-paper text-sm leading-relaxed">
                {t("about.missionText")}
              </p>
            </Reveal>
            <Reveal delay={0.24} className="rounded-2xl border border-line bg-ink-soft/50 p-6">
              <p className="eyebrow mb-2">{t("about.visionTitle")}</p>
              <p className="text-paper text-sm leading-relaxed">
                {t("about.visionText")}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
