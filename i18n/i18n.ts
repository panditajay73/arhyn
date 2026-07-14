"use client";

import i18n from "i18next";
import LanguageDetector, {
  type DetectorOptions,
} from "i18next-browser-languagedetector";
import { createElement, Fragment, useEffect, type ReactNode } from "react";
import { initReactI18next } from "react-i18next";
import de from "@/public/locales/de/common.json";
import en from "@/public/locales/en/common.json";
import es from "@/public/locales/es/common.json";
import fr from "@/public/locales/fr/common.json";
import hi from "@/public/locales/hi/common.json";
import it from "@/public/locales/it/common.json";
import ru from "@/public/locales/ru/common.json";
import {
  defaultLanguage,
  isSupportedLanguage,
  normalizeLanguage,
  supportedLanguages,
  type SupportedLanguage,
} from "@/lib/languages";

type CommonResource = typeof en;

const resources: Record<SupportedLanguage, { common: CommonResource }> = {
  en: { common: en },
  hi: { common: hi },
  de: { common: de },
  es: { common: es },
  fr: { common: fr },
  ru: { common: ru },
  it: { common: it },
};

const detectionOptions: DetectorOptions = {
  order: ["localStorage", "navigator", "htmlTag"],
  caches: ["localStorage"],
  lookupLocalStorage: "i18nextLng",
};

const languageDetector = new LanguageDetector();

function getDetectedLanguage(): SupportedLanguage {
  const detected = languageDetector.detect(detectionOptions.order);
  const candidates = Array.isArray(detected) ? detected : [detected];

  for (const candidate of candidates) {
    const language = candidate?.split("-")[0]?.toLowerCase();

    if (isSupportedLanguage(language)) {
      return language;
    }
  }

  return defaultLanguage;
}

if (!i18n.isInitialized) {
  void i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: defaultLanguage,
      fallbackLng: defaultLanguage,
      supportedLngs: [...supportedLanguages],
      defaultNS: "common",
      ns: ["common"],
      load: "languageOnly",
      detection: {
        ...detectionOptions,
        caches: [],
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export default function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const setDocumentLanguage = (language: string | undefined) => {
      document.documentElement.lang = normalizeLanguage(language);
    };

    const detectedLanguage = getDetectedLanguage();

    setDocumentLanguage(detectedLanguage);

    if (normalizeLanguage(i18n.resolvedLanguage ?? i18n.language) !== detectedLanguage) {
      void i18n.changeLanguage(detectedLanguage);
    }

    i18n.on("languageChanged", setDocumentLanguage);

    return () => {
      i18n.off("languageChanged", setDocumentLanguage);
    };
  }, []);

  return createElement(Fragment, null, children);
}

export { i18n };
