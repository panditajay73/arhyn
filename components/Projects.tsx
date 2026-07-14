"use client";

import Reveal from "./Reveal";
import { getData } from "@/lib/getData";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { i18n, t } = useTranslation();
  const { projects } = getData(i18n.resolvedLanguage ?? i18n.language);

  return (
    <section id="work" className="py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">{t("projectsSection.eyebrow")}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper text-balance">
            {t("projectsSection.title")}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow group block rounded-2xl border border-line overflow-hidden bg-ink-soft/40"
              >
                <div className="relative aspect-[16/9] flex items-center justify-center overflow-hidden">
                  {/* Website Preview */}
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    priority={i < 2}
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-all duration-500" />

                  {/* Optional Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Optional Pattern */}
                  <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:18px_18px]" />

                  {/* Title */}
                  <span className="relative z-10 px-6 text-center font-display text-2xl md:text-3xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    {p.name}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-lg font-semibold text-paper">{p.name}</h3>
                    <ArrowUpRight
                      size={18}
                      className="text-amber shrink-0 mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <p className="text-sm text-dim mb-3">{p.description}</p>
                  <p className="text-sm text-dim mb-4">
                    <span className="font-mono text-[0.68rem] uppercase tracking-wide text-wire">{t("projectsSection.problemLabel")}</span>
                    {p.problem}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-line px-2.5 py-1 text-[0.68rem] font-mono text-dim">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <a
            href="https://github.com/panditajay73?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-paper hover:border-amber/50 hover:bg-ink-soft"
          >
            <Github size={16} />
            {t("projectsSection.browseMore")}
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
