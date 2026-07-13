"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow mb-4">// faq</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper text-balance">
              Questions business owners actually ask.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={f.q} delay={i * 0.03} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={open}
                >
                  <span className="font-display text-base md:text-lg text-paper">{f.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-amber transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-dim leading-relaxed max-w-xl">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
