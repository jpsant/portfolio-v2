import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const languages = ['pt-BR', 'en-US'];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    debug: false,
    supportedLngs: languages,

    interpolation: {
      escapeValue: false
    },

    react: {
      wait: true,
      useSuspense: false
    }
  });

export default i18n;
