"use client";

import { useRef, useState } from "react";
import { Mail, MessageCircle, CalendarClock, Send } from "lucide-react";
import Reveal from "./Reveal";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
  } catch (error) {
    console.error(error);
    alert("Failed to send request.");
  }

  setLoading(false);
};

// console.log({
//   service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//   template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//   publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
// });
  return (
    <section id="contact" className="py-28 md:py-36 border-t border-line bg-ink-soft/20">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">// start here</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper text-balance">
            Book a Free Digital Audit.
          </h2>
          <p className="text-dim mt-4 max-w-lg">
            Tell us where the business stands today. We'll tell you, honestly,
            what's worth fixing first — no obligation attached.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-7">
            {submitted ? (
              <div className="rounded-2xl border border-amber/30 bg-amber/5 p-8">
                <p className="font-display text-lg text-paper mb-2">Request received.</p>
                <p className="text-sm text-dim">
                  We'll reply within one business day to schedule the audit.
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
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-dim/60 focus:border-amber/60 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-xs font-mono text-dim mb-2 uppercase tracking-wide">
                      Business name
                    </label>
                    <input
                      id="business"
                      name="business"
                      required
                      type="text"
                      className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-dim/60 focus:border-amber/60 focus:outline-none"
                      placeholder="e.g. Sunrise Cafe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-dim mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-dim/60 focus:border-amber/60 focus:outline-none"
                    placeholder="you@business.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-dim mb-2 uppercase tracking-wide">
                    What's slowing the business down?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-dim/60 focus:border-amber/60 focus:outline-none resize-none"
                    placeholder="No website, manual bookings, scattered records..."
                  />
                </div>
                <button
  type="submit"
  disabled={loading}
  className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-medium text-ink hover:bg-amber-soft disabled:opacity-50"
>
  <Send size={16} />
  {loading ? "Sending..." : "Request the Audit"}
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
                <p className="text-sm text-paper">Email</p>
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
                <p className="text-sm text-paper">WhatsApp</p>
                <p className="text-xs text-dim">Chat with the team directly</p>
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
                <p className="text-sm text-paper">Make a call</p>
                <p className="text-xs text-dim">Call us at +91 7348115017</p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
