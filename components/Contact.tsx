"use client";

import { useRef, useState } from "react";
import { Mail, MessageCircle, CalendarClock, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import Reveal from "./Reveal";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
      formRef.current.reset();
      toast.success(t("contact.successToast"));
    } catch {
      toast.error(t("contact.errorToast"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 border-t border-line bg-ink-soft/20">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">{t("contact.eyebrow")}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper text-balance">
            {t("contact.title")}
          </h2>
          <p className="text-dim mt-4 max-w-lg">
            {t("contact.description")}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-7">
            {submitted ? (
              <div className="rounded-2xl border border-amber/30 bg-amber/5 p-8">
                <p className="font-display text-lg text-paper mb-2">{t("contact.successTitle")}</p>
                <p className="text-sm text-dim">
                  {t("contact.successMessage")}
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-dim mb-2 uppercase tracking-wide">
                      {t("contact.labels.name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-dim/60 focus:border-amber/60 focus:outline-none"
                      placeholder={t("contact.placeholders.name")}
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-xs font-mono text-dim mb-2 uppercase tracking-wide">
                      {t("contact.labels.business")}
                    </label>
                    <input
                      id="business"
                      name="business"
                      required
                      type="text"
                      className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-dim/60 focus:border-amber/60 focus:outline-none"
                      placeholder={t("contact.placeholders.business")}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-dim mb-2 uppercase tracking-wide">
                    {t("contact.labels.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-dim/60 focus:border-amber/60 focus:outline-none"
                    placeholder={t("contact.placeholders.email")}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-dim mb-2 uppercase tracking-wide">
                    {t("contact.labels.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-dim/60 focus:border-amber/60 focus:outline-none resize-none"
                    placeholder={t("contact.placeholders.message")}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-medium text-ink hover:bg-amber-soft disabled:opacity-50"
                >
                  <Send size={16} />
                  {loading ? t("contact.submitLoading") : t("contact.submitIdle")}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9 space-y-4">
            <a
              href="mailto:pandeyajaysdr@gmail.com"
              className="card-glow flex items-center gap-4 rounded-2xl border border-line p-5"
            >
              <Mail size={18} className="text-amber shrink-0" />
              <div>
                <p className="text-sm text-paper">{t("contact.cards.email")}</p>
                <p className="text-xs text-dim">pandeyajaysdr@gmail.com</p>
              </div>
            </a>
            <a
              href="https://wa.me/917348115017"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow flex items-center gap-4 rounded-2xl border border-line p-5"
            >
              <MessageCircle size={18} className="text-amber shrink-0" />
              <div>
                <p className="text-sm text-paper">{t("contact.cards.whatsapp")}</p>
                <p className="text-xs text-dim">{t("contact.cards.whatsappText")}</p>
              </div>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow flex items-center gap-4 rounded-2xl border border-line p-5"
            >
              <CalendarClock size={18} className="text-amber shrink-0" />
              <div>
                <p className="text-sm text-paper">{t("contact.cards.call")}</p>
                <p className="text-xs text-dim">{t("contact.cards.callText")}</p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
