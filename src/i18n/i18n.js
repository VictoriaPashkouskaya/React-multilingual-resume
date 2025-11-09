import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../i18n/locales/en.json';
import ru from '../i18n/locales/ru.json';
import es from '../i18n/locales/es.json';
import eu from '../i18n/locales/eu.json';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  es: { translation: es },
  eu: { translation: eu },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // язык по умолчанию
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;