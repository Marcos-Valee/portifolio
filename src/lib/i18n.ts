"use client";

import i18n from "i18next";
import enTranslation from "../../public/locales/en.json";
import ptTranslation from "../../public/locales/pt.json";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });
