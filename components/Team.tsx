"use client";

import Reveal from "./Reveal";
import { getData } from "@/lib/getData";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Team() {
  const { i18n, t } = useTranslation();
  const { team } = getData(i18n.resolvedLanguage ?? i18n.language);

  return (
    <section id="team" className="py-28 md:py-36 border-t border-line bg-ink-soft/20">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">{t("teamSection.eyebrow")}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper text-balance">
            {t("teamSection.title")}
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
