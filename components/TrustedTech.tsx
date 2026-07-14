"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const techs = [
  "React", "Next.js", "Python", ".NET", "Node.js", "Azure",
  "AWS", "MongoDB", "SQL Server", "PostgreSQL", "Docker", "GitHub",
  "OpenAI", "Claude", "Google Cloud",
];

export default function TrustedTech() {
  const { t } = useTranslation();
  const loop = [...techs, ...techs];
  return (
    <section className="border-y border-line py-10 overflow-hidden" aria-label={t("trustedTech.aria")}>
      <div className="mx-auto max-w-content px-6 md:px-10 mb-6">
        <p className="eyebrow">{t("trustedTech.eyebrow")}</p>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent z-10" />
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="font-mono text-sm md:text-base text-dim/80 tracking-wide"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
