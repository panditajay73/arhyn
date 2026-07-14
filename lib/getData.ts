import * as de from "./data.de";
import * as en from "./data.en";
import * as es from "./data.es";
import * as fr from "./data.fr";
import * as hi from "./data.hi";
import * as it from "./data.it";
import * as ru from "./data.ru";
import { normalizeLanguage, type SupportedLanguage } from "./languages";
import type { SiteData } from "./data.types";

const datasets: Record<SupportedLanguage, SiteData> = {
  en,
  hi,
  de,
  es,
  fr,
  ru,
  it,
};

export function getData(language: string | undefined): SiteData {
  return datasets[normalizeLanguage(language)];
}

export type { SiteData } from "./data.types";
export type { SupportedLanguage } from "./languages";
