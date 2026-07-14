"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const stats = [
    {
      key: "services",
      value: t("hero.stats.services.value"),
      label: t("hero.stats.services.label"),
    },
    {
      key: "industries",
      value: t("hero.stats.industries.value"),
      label: t("hero.stats.industries.label"),
    },
    {
      key: "studio",
      value: t("hero.stats.studio.value"),
      label: t("hero.stats.studio.label"),
    },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-40">
      {/* Ambient circuit background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <svg
          viewBox="0 0 1200 800"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g stroke="rgba(237,235,228,0.10)" strokeWidth="1" fill="none">
            <path d="M0 620 H260 L320 560 H520" />
            <path d="M1200 180 H900 L840 240 H600" />
            <path d="M0 120 H180 L220 160 V320" />
            <path d="M1200 700 H980 L940 660 V500" />
          </g>
          <motion.path
            d="M0 620 H260 L320 560 H520"
            stroke="#E8A33D"
            strokeWidth="1.4"
            fill="none"
            strokeDasharray="6 10"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -160 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M1200 180 H900 L840 240 H600"
            stroke="#6FA8A0"
            strokeWidth="1.4"
            fill="none"
            strokeDasharray="6 10"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 160 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
          {[
            [520, 560],
            [600, 240],
            [220, 320],
            [940, 500],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={4} fill="#E8A33D" opacity={0.7} />
          ))}
        </svg>
      </div>

      <div className="mx-auto max-w-content px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-6"
        >
          {t("hero.eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-balance max-w-4xl text-[2.6rem] leading-[1.08] font-semibold tracking-tight text-paper sm:text-6xl md:text-7xl"
        >
          {t("hero.titleBefore")}{" "}
          <span className="relative inline-block font-serif italic font-normal text-amber animate-flicker">
            {t("hero.titleAccent")}
            <span className="absolute -inset-x-2 -inset-y-1 -z-10 rounded-full bg-amber/10 blur-2xl" />
          </span>
          {t("hero.titleAfter")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-8 max-w-xl text-base md:text-lg text-dim"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="magnetic-btn group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-medium text-ink hover:bg-amber-soft hover:shadow-[0_0_32px_rgba(232,163,61,0.4)]"
          >
            {t("nav.freeAudit")}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-paper hover:border-amber/50 hover:bg-ink-soft"
          >
            <Compass size={16} />
            {t("hero.secondaryCta")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-md border-t border-line pt-6"
        >
          {stats.map((stat) => (
            <div key={stat.key}>
              <div className="font-display text-2xl font-semibold text-paper">{stat.value}</div>
              <div className="mt-1 text-xs text-dim leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
