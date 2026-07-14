"use client";

import { ChevronDown, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { languageOptions, normalizeLanguage, type SupportedLanguage } from "@/lib/languages";

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);

  const changeLanguage = (language: SupportedLanguage) => {
    localStorage.setItem("i18nextLng", language);
    void i18n.changeLanguage(language);
  };

  return (
    <div className="relative inline-flex items-center">
      <label htmlFor="language-selector" className="sr-only">
        {t("languageSelector.label")}
      </label>
      <Languages
        size={14}
        className="pointer-events-none absolute left-3 text-dim"
        aria-hidden="true"
      />
      <select
        id="language-selector"
        value={currentLanguage}
        aria-label={t("languageSelector.aria")}
        onChange={(event) => changeLanguage(event.target.value as SupportedLanguage)}
        className="h-10 appearance-none rounded-full border border-line bg-ink pl-9 pr-9 text-xs font-mono text-dim transition-colors hover:border-amber/50 focus:border-amber/60 focus:outline-none"
      >
        {languageOptions.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-3 text-dim"
        aria-hidden="true"
      />
    </div>
  );
}
