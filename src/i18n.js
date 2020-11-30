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
    preload: ['pt-BR', 'en-US'],
    ns: ['pt-BR', 'en-US'],

    interpolation: {
      escapeValue: false
    },

    react: {
      useSuspense: false,
      wait: true
    }
  });

export default i18n;
