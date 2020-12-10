import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ko from './ko.json';

const resources = {
  en: { translation: en },
  ko: { translation: ko },
};

const systemLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || systemLanguage || 'en',
  fallbackLng: 'en',
  // keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export const languages = Object.keys(resources);

export default i18n;
