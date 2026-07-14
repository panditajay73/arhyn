export const defaultLanguage = "en";

export const supportedLanguages = [
  "en",
  "hi",
  "de",
  "es",
  "fr",
  "ru",
  "it",
] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

export const languageOptions: Array<{
  code: SupportedLanguage;
  label: string;
}> = [
  { code: "en", label: "🇬🇧 English" },
  { code: "hi", label: "🇮🇳 हिन्दी" },
  { code: "de", label: "🇩🇪 Deutsch" },
  { code: "es", label: "🇪🇸 Español" },
  { code: "fr", label: "🇫🇷 Français" },
  { code: "ru", label: "🇷🇺 Русский" },
  { code: "it", label: "🇮🇹 Italiano" },
];

export function isSupportedLanguage(
  language: string | undefined
): language is SupportedLanguage {
  return supportedLanguages.includes(language as SupportedLanguage);
}

export function normalizeLanguage(language: string | undefined): SupportedLanguage {
  const normalized = language?.split("-")[0]?.toLowerCase();
  return isSupportedLanguage(normalized) ? normalized : defaultLanguage;
}
