"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ScrollButtons() {
  const { t } = useTranslation();
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setShowTop(scrollY > 300);

      setShowBottom(scrollY + viewport < fullHeight - 200);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={scrollToTop}
        className={`rounded-full border border-line bg-ink-soft/90 p-3 backdrop-blur transition-all duration-300 hover:border-amber hover:bg-ink ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-label={t("scroll.top")}
      >
        <ArrowUp size={18} className="text-paper" />
      </button>

      <button
        onClick={scrollToBottom}
        className={`rounded-full border border-line bg-ink-soft/90 p-3 backdrop-blur transition-all duration-300 hover:border-amber hover:bg-ink ${
          showBottom
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-label={t("scroll.bottom")}
      >
        <ArrowDown size={18} className="text-paper" />
      </button>
    </div>
  );
}
